import * as THREE from 'three';

// Photographic reconstructions provide the material detail. This small shader
// adds restrained camera relief, refraction and light, not a geology simulation.
export function createFormationCinema(container,files,{onReady=()=>{}}={}){
 let renderer;
 try{renderer=new THREE.WebGLRenderer({antialias:false,alpha:false,powerPreference:'low-power'});}catch{return null;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));renderer.setClearColor(0x120e0b);renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.domElement.className='formation-cinema-canvas';renderer.domElement.setAttribute('aria-hidden','true');container.append(renderer.domElement);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),empty=new THREE.DataTexture(new Uint8Array([19,15,12,255]),1,1);empty.needsUpdate=true;
 const uniforms={u_map0:{value:empty},u_map1:{value:empty},u_map2:{value:empty},u_map3:{value:empty},u_aspects:{value:new THREE.Vector4(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new THREE.Vector2()},u_light:{value:0}};
 const material=new THREE.ShaderMaterial({uniforms,depthTest:false,depthWrite:false,
  vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}',
  fragmentShader:`
   precision highp float;
   varying vec2 vUv;
   uniform sampler2D u_map0,u_map1,u_map2,u_map3;
   uniform vec4 u_aspects;
   uniform float u_view,u_progress,u_time,u_zoom,u_light;
   uniform vec2 u_pointer;
   float reveal(float t,float phase){
    if(t<.001)return 0.;if(t>.999)return 1.;
    float field=phase<.5?vUv.y:phase<1.5?1.-clamp(length((vUv-.5)*vec2(1.,.9))*1.7,0.,1.):vUv.x;
    return 1.-smoothstep(t-.09,t+.09,field);
   }
   vec2 covered(vec2 uv,float aspect){vec2 scale=vec2(min(1.,u_view/aspect),min(1.,aspect/u_view));return (uv-.5)*scale+.5;}
   vec4 frame(sampler2D tex,float aspect,float stage){
    vec2 uv=covered(vUv,aspect);
    float breath=1.+.028*sin(u_time*.22+stage*.6);
    uv=(uv-.5)/(u_zoom*breath)+.5;
    vec3 under=texture2D(tex,uv).rgb;
    float relief=smoothstep(.03,.65,dot(under,vec3(.299,.587,.114)));
    vec2 drift=vec2(sin(u_time*.09)*.003,cos(u_time*.11)*.002);
    uv+=(u_pointer*.012+drift)*(relief*.6+.4);
    // Only the fluid scene gets a small optical ripple, confined to the cavity.
    vec2 q=(uv-vec2(.5,.49))*vec2(1.,1.4);
    float fluid=(1.-smoothstep(.19,.29,length(q)))*smoothstep(.34,.48,1.-uv.y);
    if(stage>.5&&stage<1.5){
     float a=sin(uv.x*68.+u_time*1.4+sin(uv.y*26.))*cos(uv.y*51.-u_time*.8);
     uv+=vec2(a,sin(uv.x*51.+u_time*.9))*.0014*fluid;
    }
    vec3 color=texture2D(tex,uv).rgb;
    if(stage>.5&&stage<1.5){
     float caustic=pow(.5+.5*sin(uv.x*43.+sin(uv.y*38.+u_time*.85)*2.+u_time*.9),9.);
     float stream=(1.-smoothstep(.008,.038,abs(uv.x-.285)))*smoothstep(.53,.59,uv.y)*(1.-smoothstep(.88,.94,uv.y));
     color+=vec3(.88,.91,.79)*(caustic*.035*fluid+stream*.035*(.5+.5*sin(uv.y*140.-u_time*5.)));
    }
    // Small moving glints on the lightest crystal facets, never a neon bloom.
    float polished=step(1.5,stage);
    float sweep=pow(max(0.,1.-abs(uv.x*.7+uv.y*.3-(.40+.28*sin(u_time*.16)))),35.);
    float quartz=pow(smoothstep(.51,.98,dot(color,vec3(.299,.587,.114))),3.);
    color+=polished*quartz*sweep*.075;
    color*=1.+u_light*.10*smoothstep(.2,.85,color.r);
    return vec4(color,1.);
   }
   void main(){
    vec4 a=frame(u_map0,u_aspects.x,0.);vec4 b=frame(u_map1,u_aspects.y,1.);
    vec4 c=frame(u_map2,u_aspects.z,2.);vec4 d=frame(u_map3,u_aspects.w,3.);
    float p=clamp(u_progress,0.,3.);
    vec3 color=p<1.?mix(a.rgb,b.rgb,reveal(p,0.)):p<2.?mix(b.rgb,c.rgb,reveal(p-1.,1.)):mix(c.rgb,d.rgb,reveal(p-2.,2.));
    float edge=1.-smoothstep(.15,.9,distance(vUv,vec2(.5,.5)));
    color*=.91+.09*edge;
    gl_FragColor=vec4(color,1.);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`
 });
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(2,2),material);scene.add(mesh);
 const textures=[],pending=[],loaded=new Set();let active=false,playing=false,disposed=false,lost=false,ready=false,frameId=0,last=0,target=0,zoom=1,light=0;
 const pointer=new THREE.Vector2(),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const loader=new THREE.TextureLoader();
 function available(){return loaded.has(Math.floor(target))&&loaded.has(Math.ceil(target));}
 function stateReady(){const next=available();if(next!==ready){ready=next;if(ready)uniforms.u_progress.value=target;container.classList.toggle('cinema-ready',ready);if(ready)onReady();}}
 function load(index){
  if(pending[index])return pending[index];
  pending[index]=loader.loadAsync(files[index]).then(texture=>{
   if(disposed){texture.dispose();return;}
   texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=THREE.LinearFilter;texture.magFilter=THREE.LinearFilter;texture.generateMipmaps=false;
   uniforms['u_map'+index].value=texture;uniforms.u_aspects.value.setComponent(index,texture.image.width/texture.image.height);textures.push(texture);loaded.add(index);stateReady();
  }).catch(()=>{});return pending[index];
 }
 function resize(){if(disposed)return;const {width,height}=container.getBoundingClientRect();if(width<2||height<2)return;renderer.setSize(width,height,false);uniforms.u_view.value=width/height;}
 function draw(now){
  frameId=0;if(!active||disposed)return;
  if(now-last<1000/(matchMedia('(pointer:coarse)').matches?24:30)){frameId=requestAnimationFrame(draw);return;}
  const dt=Math.min(.08,(now-last)/1000||.033);last=now;
  if(playing&&!reduced.matches)uniforms.u_time.value+=dt;
  const ease=reduced.matches?1.:1.-Math.exp(-dt*7.);
  if(available())uniforms.u_progress.value+= (target-uniforms.u_progress.value)*ease;
  uniforms.u_zoom.value+=(zoom-uniforms.u_zoom.value)*ease;uniforms.u_light.value+=(light-uniforms.u_light.value)*ease;uniforms.u_pointer.value.lerp(reduced.matches?new THREE.Vector2():pointer,ease);
  renderer.render(scene,camera);frameId=requestAnimationFrame(draw);
 }
 function pointerMove(event){const r=container.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,1-(event.clientY-r.top)/r.height*2);}
 function pointerLeave(){pointer.set(0,0);}
 container.addEventListener('pointermove',pointerMove);container.addEventListener('pointerleave',pointerLeave);
 const observer=new ResizeObserver(resize);observer.observe(container);
 renderer.domElement.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;container.classList.remove('cinema-ready');active=false;cancelAnimationFrame(frameId);});
 return {
  setProgress(value,instant=false){target=THREE.MathUtils.clamp(value,0,3);load(Math.floor(target));load(Math.ceil(target));stateReady();if(instant)uniforms.u_progress.value=target;if(active)setTimeout(()=>{if(!disposed&&active)load(Math.min(3,Math.ceil(target)+1));},200);},
  setActive(value){if(lost)return;active=value;if(active){resize();last=performance.now();if(!frameId)frameId=requestAnimationFrame(draw);}else{cancelAnimationFrame(frameId);frameId=0;}},
  setPlaying(value){playing=value;},setDetail(value){zoom=value?1.42:1;},setLight(value){light=value?1:0;},
  dispose(){disposed=true;active=false;cancelAnimationFrame(frameId);observer.disconnect();container.removeEventListener('pointermove',pointerMove);container.removeEventListener('pointerleave',pointerLeave);textures.forEach(t=>t.dispose());empty.dispose();mesh.geometry.dispose();material.dispose();renderer.dispose();renderer.domElement.remove();}
 };
}
