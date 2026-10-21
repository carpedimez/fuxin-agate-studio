var dg=Object.defineProperty;var Cs=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var fg=(n,e)=>{for(var t in e)dg(n,t,{get:e[t],enumerable:!0})};function mg(n,e,t){let i=o=>(o/=255)<=.04045?o/12.92:((o+.055)/1.055)**2.4;n=i(n),e=i(e),t=i(t);let s=Math.cbrt(.4122214708*n+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*n+.6806995451*e+.1073969566*t),a=Math.cbrt(.0883024619*n+.2817188376*e+.6299787005*t);return[.2104542553*s+.793617785*r-.0040720468*a,1.9779984951*s-2.428592205*r+.4505937099*a,.0259040371*s+.7827717662*r-.808675766*a]}function gg(n,e,t,i=!0){let s=new Uint8Array(e*t).fill(1);for(let u=0;u<s.length;u++)n[u*4+3]<100&&(s[u]=0);if(!i)return s;let r=[0,e-1,e*(t-1),e*t-1].map(u=>Array.from(n.slice(u*4,u*4+3))),a=[0,1,2].map(u=>r.map(f=>f[u]).sort((f,g)=>f-g)[1]),o=new Uint8Array(e*t),l=new Int32Array(e*t),c=0,h=0;function d(u){o[u]||(o[u]=1,(!s[u]||Jc(Array.from(n.slice(u*4,u*4+3)),a)<2100)&&(s[u]=0,l[h++]=u))}for(let u=0;u<e;u++)d(u),d((t-1)*e+u);for(let u=0;u<t;u++)d(u*e),d(u*e+e-1);for(;c<h;){let u=l[c++],f=u%e,g=u/e|0;f&&d(u-1),f<e-1&&d(u+1),g&&d(u-e),g<t-1&&d(u+e)}if(s.reduce((u,f)=>u+f,0)<e*t*.025)for(let u=0;u<s.length;u++)s[u]=n[u*4+3]>=100?1:0;return s}function Id(n,e,t,i=5,s=!0){let r=gg(n,e,t,s),a=[];for(let h=0;h<r.length;h++)r[h]&&a.push({i:h,rgb:Array.from(n.slice(h*4,h*4+3)),lab:mg(...n.slice(h*4,h*4+3))});if(!a.length)throw Error("没有可分析的有效像素，请更换图片。");let o=[a[a.length*.37|0].lab.slice()];for(;o.length<Math.min(i,a.length);){let h=a[0],d=-1;for(let u of a){let f=Math.min(...o.map(g=>Jc(u.lab,g)));f>d&&(d=f,h=u)}if(d<1e-8)break;o.push(h.lab.slice())}let l=new Int16Array(e*t).fill(-1);for(let h=0;h<12;h++){let d=o.map(()=>[0,0,0,0]);for(let u of a){let f=0,g=1/0;o.forEach((m,p)=>{let T=Jc(u.lab,m);T<g&&(g=T,f=p)}),l[u.i]=f;let y=d[f];for(let m=0;m<3;m++)y[m]+=u.lab[m];y[3]++}d.forEach((u,f)=>{u[3]&&(o[f]=u.slice(0,3).map(g=>g/u[3]))})}let c=o.map(()=>({rgb:[0,0,0],count:0}));for(let h of a){let d=c[l[h.i]];d.count++;for(let u=0;u<3;u++)d.rgb[u]+=h.rgb[u]}return c.forEach(h=>{h.rgb=h.rgb.map(d=>Math.round(d/(h.count||1))),h.hex="#"+h.rgb.map(d=>d.toString(16).padStart(2,"0")).join(""),h.share=h.count/a.length}),{width:e,height:t,labels:l,foreground:r,colors:c,validPixels:a.length}}function Br(n,e){return Uint8Array.from(n.labels,t=>t===e?1:0)}function go(n){mo.set("custom",n.map(e=>[...e]));for(let e of Or.keys())e.startsWith("custom:")&&Or.delete(e)}function ei(n){if(mo.has(n))return mo.get(n);let e=[],t=(i,s,r,a)=>{for(let o=0;o<=32;o++){let l=o/32,c=1-l;e.push([c*c*c*i[0]+3*c*c*l*s[0]+3*c*l*l*r[0]+l*l*l*a[0],c*c*c*i[1]+3*c*c*l*s[1]+3*c*l*l*r[1]+l*l*l*a[1]])}};if(n==="fruit")t([0,-.76],[.7,-.96],[1.02,-.32],[.84,.2]),t([.84,.2],[.7,.78],[.25,.94],[0,.85]),t([0,.85],[-.32,.98],[-.85,.63],[-.87,.1]),t([-.87,.1],[-1.01,-.43],[-.62,-.98],[0,-.76]);else if(n==="leaf")t([-1,0],[-.4,-.85],[.55,-.61],[1,0]),t([1,0],[.45,.74],[-.4,.6],[-1,0]);else if(["round","drop","heart"].includes(n))for(let i=0;i<96;i++){let s=i/96*Math.PI*2;n==="round"?e.push([Math.cos(s)*.85,Math.sin(s)*.85]):n==="heart"?e.push([Math.pow(Math.sin(s),3)*.9,-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))*.055]):e.push([Math.sin(s)*.75*(.7+.3*Math.cos(s)),Math.cos(s)*.9])}else e.push([-1,.65],[-.23,-.57],[.12,-.08],[.47,-.73],[1,.65]);return mo.set(n,e),e}function yg(n,e=420){let t=n+":"+e;if(Or.has(t))return Or.get(t);let i=ei(n),s=[],r=a=>{let o=Math.sin(a*127.1+91.7)*43758.5453;return o-Math.floor(o)};for(let a=0;a<e*12&&s.length<e;a++){let o=r(a*2)*2-1,l=r(a*2+1)*2-1,c=!1;for(let h=0,d=i.length-1;h<i.length;d=h++){let u=i[h],f=i[d];u[1]>l!=f[1]>l&&o<(f[0]-u[0])*(l-u[1])/(f[1]-u[1])+u[0]&&(c=!c)}c&&s.push([o,l])}return Or.set(t,s),s}function fi(n,e,t,i){let s=yg(t),r=i.angle*Math.PI/180,a=Math.cos(r),o=Math.sin(r),l=0,c=0;for(let[u,f]of s){let g=Math.round((i.x+(u*a-f*o)*i.scale)*n.width),y=Math.round((i.y+(u*o+f*a)*i.scale)*n.height);if(g>=0&&g<n.width&&y>=0&&y<n.height){let m=y*n.width+g;n.foreground[m]&&(c++,e[m]&&l++)}}let h=l/s.length,d=c/s.length;return{fit:h,containment:d,outside:1-d,score:.7*h+.3*d,samples:s.length}}function Ld(n,e,t,{scale:i}={}){let s=[];for(let a of i?[i]:[.12,.18,.24,.3])for(let o=2;o<=8;o++)for(let l=2;l<=8;l++)for(let c of[-45,0,45,90]){let h={x:l/10,y:o/10,scale:a,angle:c};s.push({...h,...fi(n,e,t,h)})}s.sort((a,o)=>o.score-a.score);let r=[];for(let a of s)if(r.every(o=>Math.hypot(o.x-a.x,o.y-a.y)>.17||Math.abs(o.scale-a.scale)>.1)&&(r.push(a),r.length===3))break;return r}var _t,Jc,mo,Or,pi=Cs(()=>{_t=(n,e,t)=>Math.max(e,Math.min(t,n));Jc=(n,e)=>n.reduce((t,i,s)=>t+(i-e[s])**2,0);mo=new Map,Or=new Map});function us(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function eu(n,e){return(n%e+e)%e}function bg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Mg(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function Sg(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function wg(n,e=1){return e-Math.abs(eu(n,e*2)-e)}function Eg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Tg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ag(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Cg(n,e){return n+Math.random()*(e-n)}function Rg(n){return n*(.5-Math.random())}function Pg(n){n!==void 0&&(Wd=n);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ig(n){return n*jr}function Lg(n){return n*Ys}function Dg(n){return(n&n-1)===0&&n!==0}function Ug(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ng(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Fg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function tu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $s(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ip(){let n=$s("canvas");return n.style.display="block",n}function js(n){n in Xd||(Xd[n]=!0,console.warn(n))}function sp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function kg(){let n={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=qs(s.r),s.g=qs(s.g),s.b=qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ts]:{primaries:e,whitePoint:i,transfer:ea,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Yd,fromXYZ:$d,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function ih(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){$i.fromArray(n,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function gh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Zg(n,e,t,i,s,r,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===oi,o),l===null)return null;No.copy(o),No.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(No);return c<t.near||c>t.far?null:{distance:c,point:No.clone(),object:n}}function Fo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Io),n.getVertexPosition(l,Lo),n.getVertexPosition(c,Do);let h=Zg(n,e,t,i,Io,Lo,Do,af);if(h){let d=new B;Si.getBarycoord(af,Io,Lo,Do,d),s&&(h.uv=Si.getInterpolatedAttribute(s,o,l,c,d,new ye)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,d,new ye)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};Si.getNormal(Io,Lo,Do,u.normal),h.face=u,h.barycoord=d}return h}function ds(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=ds(n[t]);for(let s in i)e[s]=i[s]}return e}function Jg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function nu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function iu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function cf(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function s0(n,e){let t=1-n;return t*t*e}function r0(n,e){return 2*(1-n)*n*e}function a0(n,e){return n*n*e}function Jr(n,e,t,i){return s0(n,e)+r0(n,t)+a0(n,i)}function o0(n,e){let t=1-n;return t*t*t*e}function l0(n,e){let t=1-n;return 3*t*t*n*e}function c0(n,e){return 3*(1-n)*n*n*e}function h0(n,e){return n*n*n*e}function Kr(n,e,t,i,s){return o0(n,e)+l0(n,t)+c0(n,i)+h0(n,s)}function u0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=op(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=g0(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ga(r,a,t,o,l,c,0),a}function op(n,e,t,i,s){let r;if(s===A0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=hf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=hf(a/i|0,n[a],n[a+1],r);return r&&sr(r,r.next)&&(va(r),r=r.next),r}function rs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(sr(t,t.next)||xt(t.prev,t,t.next)===0)){if(va(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ga(n,e,t,i,s,r,a){if(!n)return;!a&&r&&b0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?f0(n,i,s,r):d0(n)){e.push(l.i,n.i,c.i),va(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=p0(rs(n),e),ga(n,e,t,i,s,r,2)):a===2&&m0(n,e,t,i,s,r):ga(rs(n),e,t,i,s,r,1);break}}}function d0(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&$r(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function f0(n,e,t,i){let s=n.prev,r=n,a=n.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=Rh(f,g,e,t,i),T=Rh(y,m,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=T;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&$r(o,h,l,d,c,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&$r(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&$r(o,h,l,d,c,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=T;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&$r(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function p0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!sr(i,s)&&cp(i,t,t.next,s)&&ya(i,s)&&ya(s,i)&&(e.push(i.i,t.i,s.i),va(t),va(t.next),t=n=s),t=t.next}while(t!==n);return rs(t)}function m0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&w0(a,o)){let l=hp(a,o);a=rs(a,a.next),l=rs(l,l.next),ga(a,e,t,i,s,r,0),ga(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function g0(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=op(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(S0(c))}s.sort(y0);for(let r=0;r<s.length;r++)t=v0(s[r],t);return t}function y0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function v0(n,e){let t=_0(n,e);if(!t)return e;let i=hp(t,n);return rs(i,i.next),rs(t,t.next)}function _0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(sr(n,t))return t;do{if(sr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&lp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ya(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&x0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function x0(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function b0(n,e,t,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,M0(s)}function M0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Rh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function S0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function lp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function $r(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&lp(n,e,t,i,s,r,a,o)}function w0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!E0(n,e)&&(ya(n,e)&&ya(e,n)&&T0(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||sr(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function sr(n,e){return n.x===e.x&&n.y===e.y}function cp(n,e,t,i){let s=zo(xt(n,e,t)),r=zo(xt(n,e,i)),a=zo(xt(t,i,n)),o=zo(xt(t,i,e));return!!(s!==r&&a!==o||s===0&&Bo(n,t,e)||r===0&&Bo(n,i,e)||a===0&&Bo(t,n,i)||o===0&&Bo(t,e,i))}function Bo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function zo(n){return n>0?1:n<0?-1:0}function E0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&cp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ya(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function T0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function hp(n,e){let t=Ph(n.i,n.x,n.y),i=Ph(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function hf(n,e,t,i){let s=Ph(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function va(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ph(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function uf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function df(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function R0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Ho(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function P0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function gf(n,e){return n.distance-e.distance}function Nh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Nh(r[a],e,t,!0)}}function au(n,e,t,i){let s=B0(i);switch(t){case Yh:return n*e;case jh:return n*e/s.components*s.byteLength;case Il:return n*e/s.components*s.byteLength;case Zh:return n*e*2/s.components*s.byteLength;case Ll:return n*e*2/s.components*s.byteLength;case $h:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case Dl:return n*e*4/s.components*s.byteLength;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nl:case kl:return Math.max(n,16)*Math.max(e,8)/4;case Ul:case Fl:return Math.max(n,8)*Math.max(e,8)/2;case Ol:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tc:case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case sc:case rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ac:case oc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function B0(n){switch(n){case Ln:case Gh:return{byteLength:1,components:1};case or:case Wh:case lr:return{byteLength:2,components:1};case Rl:case Pl:return{byteLength:2,components:4};case Ni:case Cl:case Xn:return{byteLength:4,components:1};case qh:case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var Li,Di,yf,Fh,vf,kh,_f,Wn,oi,Ot,qn,ci,Qi,Oh,Bh,zh,xf,Ei,bf,Mf,Sf,wf,Ef,Tf,Af,Cf,Wo,qo,Rf,Pf,If,Lf,Df,Uf,Nf,Ff,kf,yl,vl,_l,es,xl,bl,Ml,Sl,Hh,Of,Bf,hi,zf,Hf,Vf,wl,Gf,Wf,qf,Vh,cs,hs,El,Tl,Pa,Xo,wi,Yo,Jt,Xf,Ia,Kt,Al,Ui,Ln,Gh,Wh,or,Cl,Ni,Xn,lr,Rl,Pl,cr,qh,Xh,Yh,$h,xn,Xs,hr,jh,Il,Zh,Ll,Dl,La,Da,Ua,Na,Ul,Nl,Fl,kl,Ol,Bl,zl,Hl,Vl,Gl,Wl,ql,Xl,Yl,$l,jl,Zl,Jl,Kl,Ql,ec,tc,nc,ic,sc,rc,ac,oc,Qr,$o,Vo,wh,Eh,Th,Yf,$f,Jh,jf,ui,It,ts,ea,at,Ji,Ah,Zf,Jf,Kf,Kh,Qf,ep,tp,np,Ch,Qh,Pn,ta,zn,Bt,Wd,jr,Ys,Fa,ye,_n,B,Qc,qd,je,eh,Xd,Yd,$d,nt,Is,jo,Og,Zs,Bg,nh,Vt,ft,Zo,Hn,na,Jo,Ti,ti,An,bo,Ls,Ds,Us,yi,vi,Yi,Wr,Mo,So,$i,zg,qr,sh,Js,ni,rh,wo,_i,ah,Eo,oh,ns,bt,Ns,Cn,Hg,Vg,xi,To,an,jd,Zd,In,Ks,Gg,Jd,Fs,ii,Ao,Xr,Wg,qg,Kd,Qd,ef,tf,Xg,ks,lh,$t,Rn,si,ch,ri,Os,Bs,nf,hh,uh,dh,fh,ph,mh,Si,rp,bi,Co,$e,zt,Yg,Ai,li,Ct,Ro,$g,ln,ia,sa,gt,jg,yn,yh,zs,on,Yr,Ft,cn,sf,ji,Po,rf,Io,Lo,Do,vh,Uo,af,No,pt,Ci,ap,Kg,Qg,hn,ra,Mi,of,lf,Ht,Hs,Vs,Ko,aa,Qo,Bn,e0,Qs,Ri,oa,_h,t0,n0,vn,Zi,i0,ko,er,is,la,ca,ss,un,tr,el,Oo,xh,bh,Mh,nr,ha,tl,ua,nl,da,fa,pa,il,sl,ma,ir,Ih,Ki,_a,C0,Vn,xa,ba,Ma,Gn,Sa,rl,al,as,ol,ll,cl,dn,Pi,hl,ul,dl,wa,Ii,fl,Go,pl,up,rr,Gs,ml,Ea,Ta,Sh,ff,pf,Lh,os,Dh,ls,Aa,gl,su,I0,ru,L0,D0,U0,N0,F0,k0,O0,Uh,dt,bM,mf,Ca,ar,Ra,ou=Cs(()=>{Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yf=0,Fh=1,vf=2,kh=1,_f=2,Wn=3,oi=0,Ot=1,qn=2,ci=0,Qi=1,Oh=2,Bh=3,zh=4,xf=5,Ei=100,bf=101,Mf=102,Sf=103,wf=104,Ef=200,Tf=201,Af=202,Cf=203,Wo=204,qo=205,Rf=206,Pf=207,If=208,Lf=209,Df=210,Uf=211,Nf=212,Ff=213,kf=214,yl=0,vl=1,_l=2,es=3,xl=4,bl=5,Ml=6,Sl=7,Hh=0,Of=1,Bf=2,hi=0,zf=1,Hf=2,Vf=3,wl=4,Gf=5,Wf=6,qf=7,Vh=300,cs=301,hs=302,El=303,Tl=304,Pa=306,Xo=1e3,wi=1001,Yo=1002,Jt=1003,Xf=1004,Ia=1005,Kt=1006,Al=1007,Ui=1008,Ln=1009,Gh=1010,Wh=1011,or=1012,Cl=1013,Ni=1014,Xn=1015,lr=1016,Rl=1017,Pl=1018,cr=1020,qh=35902,Xh=35899,Yh=1021,$h=1022,xn=1023,Xs=1026,hr=1027,jh=1028,Il=1029,Zh=1030,Ll=1031,Dl=1033,La=33776,Da=33777,Ua=33778,Na=33779,Ul=35840,Nl=35841,Fl=35842,kl=35843,Ol=36196,Bl=37492,zl=37496,Hl=37808,Vl=37809,Gl=37810,Wl=37811,ql=37812,Xl=37813,Yl=37814,$l=37815,jl=37816,Zl=37817,Jl=37818,Kl=37819,Ql=37820,ec=37821,tc=36492,nc=36494,ic=36495,sc=36283,rc=36284,ac=36285,oc=36286,Qr=2300,$o=2301,Vo=2302,wh=2400,Eh=2401,Th=2402,Yf=3200,$f=3201,Jh=0,jf=1,ui="",It="srgb",ts="srgb-linear",ea="linear",at="srgb",Ji=7680,Ah=519,Zf=512,Jf=513,Kf=514,Kh=515,Qf=516,ep=517,tp=518,np=519,Ch=35044,Qh="300 es",Pn=2e3,ta=2001,zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wd=1234567,jr=Math.PI/180,Ys=180/Math.PI;Fa={DEG2RAD:jr,RAD2DEG:Ys,generateUUID:us,clamp:Ke,euclideanModulo:eu,mapLinear:bg,inverseLerp:Mg,lerp:Zr,damp:Sg,pingpong:wg,smoothstep:Eg,smootherstep:Tg,randInt:Ag,randFloat:Cg,randFloatSpread:Rg,seededRandom:Pg,degToRad:Ig,radToDeg:Lg,isPowerOfTwo:Dg,ceilPowerOfTwo:Ug,floorPowerOfTwo:Ng,setQuaternionFromProperEuler:Fg,normalize:Yt,denormalize:Ws},ye=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*y,T=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let P=Math.sqrt(v),C=Math.atan2(P,p*T);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}let _=o*T;if(l=l*m+u*_,c=c*m+f*_,h=h*m+g*_,d=d*m+y*_,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qc=new B,qd=new _n,je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],T=s[1],v=s[4],_=s[7],P=s[2],C=s[5],L=s[8];return r[0]=a*y+o*T+l*P,r[3]=a*m+o*v+l*C,r[6]=a*p+o*_+l*L,r[1]=c*y+h*T+d*P,r[4]=c*m+h*v+d*C,r[7]=c*p+h*_+d*L,r[2]=u*y+f*T+g*P,r[5]=u*m+f*v+g*C,r[8]=u*p+f*_+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(eh.makeScale(e,t)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,t){return this.premultiply(eh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},eh=new je;Xd={};Yd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=kg();jo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Is===void 0&&(Is=$s("canvas")),Is.width=e.width,Is.height=e.height;let s=Is.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Is}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$s("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Og=0,Zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=us(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(th(s[a].image)):r.push(th(s[a]))}else r=th(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Bg=0,nh=new B,Vt=class n extends zn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=wi,s=wi,r=Kt,a=Ui,o=xn,l=Ln,c=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=us(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Vh;Vt.DEFAULT_ANISOTROPY=1;ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,P=(p+1)/2,C=(h+u)/4,L=(d+y)/4,N=(g+m)/4;return v>_&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=L/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=C/s,r=N/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=L/r,s=N/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-y)/T,this.z=(u-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Vt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Zo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},na=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Jo=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Mo.subVectors(this.max,Wr),Ls.subVectors(e.a,Wr),Ds.subVectors(e.b,Wr),Us.subVectors(e.c,Wr),yi.subVectors(Ds,Ls),vi.subVectors(Us,Ds),Yi.subVectors(Ls,Us);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!ih(t,Ls,Ds,Us,Mo)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,Ls,Ds,Us,Mo))?!1:(So.crossVectors(yi,vi),t=[So.x,So.y,So.z],ih(t,Ls,Ds,Us,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,bo=new Ti,Ls=new B,Ds=new B,Us=new B,yi=new B,vi=new B,Yi=new B,Wr=new B,Mo=new B,So=new B,$i=new B;zg=new Ti,qr=new B,sh=new B,Js=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):zg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qr.subVectors(e,this.center);let t=qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qr.copy(e.center).add(sh)),this.expandByPoint(qr.copy(e.center).sub(sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ni=new B,rh=new B,wo=new B,_i=new B,ah=new B,Eo=new B,oh=new B,ns=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){rh.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(rh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=_i.dot(this.direction),l=-_i.dot(wo),c=_i.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rh).addScaledVector(wo,u),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){ah.subVectors(t,e),Eo.subVectors(i,e),oh.crossVectors(ah,Eo);let a=this.direction.dot(oh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);let l=o*this.direction.dot(Eo.crossVectors(_i,Eo));if(l<0)return null;let c=o*this.direction.dot(ah.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(oh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),r=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hg,e,Vg)}lookAt(e,t,i){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(i,an),xi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(i,an)),xi.normalize(),To.crossVectors(an,xi),s[0]=xi.x,s[4]=To.x,s[8]=an.x,s[1]=xi.y,s[5]=To.y,s[9]=an.y,s[2]=xi.z,s[6]=To.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],T=i[3],v=i[7],_=i[11],P=i[15],C=s[0],L=s[4],N=s[8],w=s[12],b=s[1],I=s[5],G=s[9],j=s[13],X=s[2],K=s[6],R=s[10],D=s[14],F=s[3],V=s[7],ae=s[11],oe=s[15];return r[0]=a*C+o*b+l*X+c*F,r[4]=a*L+o*I+l*K+c*V,r[8]=a*N+o*G+l*R+c*ae,r[12]=a*w+o*j+l*D+c*oe,r[1]=h*C+d*b+u*X+f*F,r[5]=h*L+d*I+u*K+f*V,r[9]=h*N+d*G+u*R+f*ae,r[13]=h*w+d*j+u*D+f*oe,r[2]=g*C+y*b+m*X+p*F,r[6]=g*L+y*I+m*K+p*V,r[10]=g*N+y*G+m*R+p*ae,r[14]=g*w+y*j+m*D+p*oe,r[3]=T*C+v*b+_*X+P*F,r[7]=T*L+v*I+_*K+P*V,r[11]=T*N+v*G+_*R+P*ae,r[15]=T*w+v*j+_*D+P*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+y*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],T=d*m*c-y*u*c+y*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,_=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,P=g*d*l-h*y*l-g*o*u+a*y*u+h*o*m-a*d*m,C=t*T+i*v+s*_+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=T*L,e[1]=(y*u*r-d*m*r-y*s*f+i*m*f+d*s*p-i*u*p)*L,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*p+i*l*p)*L,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*L,e[4]=v*L,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*L,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*L,e[8]=_*L,e[9]=(g*d*r-h*y*r-g*i*f+t*y*f+h*i*p-t*d*p)*L,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*L,e[12]=P*L,e[13]=(h*y*s-g*d*s+g*i*u-t*y*u-h*i*m+t*d*m)*L,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*m-t*o*m)*L,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,T=l*c,v=l*h,_=l*d,P=i.x,C=i.y,L=i.z;return s[0]=(1-(y+p))*P,s[1]=(f+_)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(f-_)*C,s[5]=(1-(u+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+v)*L,s[9]=(m-T)*L,s[10]=(1-(u+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),o=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/a,d=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ta)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ta)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ns=new B,Cn=new bt,Hg=new B(0,0,0),Vg=new B(1,1,1),xi=new B,To=new B,an=new B,jd=new bt,Zd=new _n,In=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zd.setFromEuler(this),this.setFromQuaternion(Zd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";Ks=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Gg=0,Jd=new B,Fs=new _n,ii=new bt,Ao=new B,Xr=new B,Wg=new B,qg=new _n,Kd=new B(1,0,0),Qd=new B(0,1,0),ef=new B(0,0,1),tf={type:"added"},Xg={type:"removed"},ks={type:"childadded",child:null},lh={type:"childremoved",child:null},$t=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new In,i=new _n,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Qd,e)}rotateZ(e){return this.rotateOnAxis(ef,e)}translateOnAxis(e,t){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Qd,e)}translateZ(e){return this.translateOnAxis(ef,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ao.copy(e):Ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Xr,Ao,this.up):ii.lookAt(Ao,Xr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(ii),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tf),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xg),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tf),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Wg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,qg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};$t.DEFAULT_UP=new B(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Rn=new B,si=new B,ch=new B,ri=new B,Os=new B,Bs=new B,nf=new B,hh=new B,uh=new B,dh=new B,fh=new ft,ph=new ft,mh=new ft,Si=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),si.subVectors(i,t),ch.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(si),l=Rn.dot(ch),c=si.dot(si),h=si.dot(ch),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return fh.setScalar(0),ph.setScalar(0),mh.setScalar(0),fh.fromBufferAttribute(e,t),ph.fromBufferAttribute(e,i),mh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fh,r.x),a.addScaledVector(ph,r.y),a.addScaledVector(mh,r.z),a}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),si.subVectors(e,t),Rn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Rn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,i),Bs.subVectors(r,i),hh.subVectors(e,i);let l=Os.dot(hh),c=Bs.dot(hh);if(l<=0&&c<=0)return t.copy(i);uh.subVectors(e,s);let h=Os.dot(uh),d=Bs.dot(uh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Os,a);dh.subVectors(e,r);let f=Os.dot(dh),g=Bs.dot(dh);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Bs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return nf.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(nf,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(i).addScaledVector(Os,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Co={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=eu(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gh(a,r,e+1/3),this.g=gh(a,r,e),this.b=gh(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=rp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(zt.copy(this),e),Math.round(Ke(zt.r*255,0,255))*65536+Math.round(Ke(zt.g*255,0,255))*256+Math.round(Ke(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){nt.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Co);let i=Zr(bi.h,Co.h,t),s=Zr(bi.s,Co.s,t),r=Zr(bi.l,Co.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new $e;$e.NAMES=rp;Yg=0,Ai=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=qo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wo&&(i.blendSrc=this.blendSrc),this.blendDst!==qo&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==es&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ah&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ct=new B,Ro=new ye,$g=0,ln=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$g++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ch,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ch&&(e.usage=this.usage),e}},ia=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}},sa=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},jg=0,yn=new bt,yh=new $t,zs=new B,on=new Ti,Yr=new Ti,Ft=new B,cn=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jg++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tu(e)?sa:ia)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Js);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(on.min,Yr.min),on.expandByPoint(Ft),Ft.addVectors(on.max,Yr.max),on.expandByPoint(Ft)):(on.expandByPoint(Yr.min),on.expandByPoint(Yr.max))}on.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(zs.fromBufferAttribute(e,c),Ft.add(zs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;let c=new B,h=new B,d=new B,u=new ye,f=new ye,g=new ye,y=new B,m=new B;function p(N,w,b){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,b),u.fromBufferAttribute(r,N),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[N].add(y),o[w].add(y),o[b].add(y),l[N].add(m),l[w].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,w=T.length;N<w;++N){let b=T[N],I=b.start,G=b.count;for(let j=I,X=I+G;j<X;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}let v=new B,_=new B,P=new B,C=new B;function L(N){P.fromBufferAttribute(s,N),C.copy(P);let w=o[N];v.copy(w),v.sub(P.multiplyScalar(P.dot(w))).normalize(),_.crossVectors(C,w);let I=_.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,I)}for(let N=0,w=T.length;N<w;++N){let b=T[N],I=b.start,G=b.count;for(let j=I,X=I+G;j<X;j+=3)L(e.getX(j+0)),L(e.getX(j+1)),L(e.getX(j+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sf=new bt,ji=new ns,Po=new Js,rf=new B,Io=new B,Lo=new B,Do=new B,vh=new B,Uo=new B,af=new B,No=new B,pt=class extends $t{constructor(e=new cn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Uo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(vh.fromBufferAttribute(d,e),a?Uo.addScaledVector(vh,h):Uo.addScaledVector(vh.sub(t),h))}t.add(Uo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),ji.copy(e.ray).recast(e.near),!(Po.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Po,rf)===null||ji.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(sf.copy(r).invert(),ji.copy(e.ray).applyMatrix4(sf),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ji)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,P=v;_<P;_+=3){let C=o.getX(_),L=o.getX(_+1),N=o.getX(_+2);s=Fo(this,p,e,i,c,h,d,C,L,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=Fo(this,a,e,i,c,h,d,T,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=T,P=v;_<P;_+=3){let C=_,L=_+1,N=_+2;s=Fo(this,p,e,i,c,h,d,C,L,N),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=m,v=m+1,_=m+2;s=Fo(this,a,e,i,c,h,d,T,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ci=class n extends cn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(y,m,p,T,v,_,P,C,L,N,w){let b=_/L,I=P/N,G=_/2,j=P/2,X=C/2,K=L+1,R=N+1,D=0,F=0,V=new B;for(let ae=0;ae<R;ae++){let oe=ae*I-j;for(let Z=0;Z<K;Z++){let de=Z*b-G;V[y]=de*T,V[m]=oe*v,V[p]=X,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=C>0?1:-1,h.push(V.x,V.y,V.z),d.push(Z/L),d.push(1-ae/N),D+=1}}for(let ae=0;ae<N;ae++)for(let oe=0;oe<L;oe++){let Z=u+oe+K*ae,de=u+oe+K*(ae+1),ve=u+(oe+1)+K*(ae+1),Ce=u+(oe+1)+K*ae;l.push(Z,de,Ce),l.push(de,ve,Ce),F+=6}o.addGroup(f,F,w),f+=F,u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ap={clone:ds,merge:Gt},Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=Qg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=Jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ra=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new B,of=new ye,lf=new ye,Ht=class extends ra{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,of,lf),t.subVectors(lf,of)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Vs=1,Ko=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Hs,Vs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Hs,Vs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Hs,Vs,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Hs,Vs,e,t);o.layers=this.layers,this.add(o);let l=new Ht(Hs,Vs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Hs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},aa=class extends Vt{constructor(e=[],t=cs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qo=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ci(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:ci});r.uniforms.tEquirect.value=t;let a=new pt(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Kt),new Ko(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Bn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},e0={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ri=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},oa=class extends Vt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,h=Jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_h=new B,t0=new B,n0=new je,vn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=_h.subVectors(i,t).cross(t0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(_h),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||n0.getNormalMatrix(e),s=this.coplanarPoint(_h).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zi=new Js,i0=new ye(.5,.5),ko=new B,er=class{constructor(e=new vn,t=new vn,i=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],T=r[12],v=r[13],_=r[14],P=r[15];if(s[0].setComponents(c-a,f-h,p-g,P-T).normalize(),s[1].setComponents(c+a,f+h,p+g,P+T).normalize(),s[2].setComponents(c+o,f+d,p+y,P+v).normalize(),s[3].setComponents(c-o,f-d,p-y,P-v).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,P-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,P-_).normalize(),t===Pn)s[5].setComponents(c+l,f+u,p+m,P+_).normalize();else if(t===ta)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);let t=i0.distanceTo(e.center);return Zi.radius=.7071067811865476+t,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},is=class extends Vt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},la=class extends Vt{constructor(e,t,i=Ni,s,r,a,o=Jt,l=Jt,c,h=Xs,d=1){if(h!==Xs&&h!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ca=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ss=class n extends cn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;T(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function T(){let _=new B,P=new B,C=0,L=(t-e)/i;for(let N=0;N<=r;N++){let w=[],b=N/r,I=b*(t-e)+e;for(let G=0;G<=s;G++){let j=G/s,X=j*l+o,K=Math.sin(X),R=Math.cos(X);P.x=I*K,P.y=-b*i+m,P.z=I*R,d.push(P.x,P.y,P.z),_.set(K,L,R).normalize(),u.push(_.x,_.y,_.z),f.push(j,1-b),w.push(g++)}y.push(w)}for(let N=0;N<s;N++)for(let w=0;w<r;w++){let b=y[w][N],I=y[w+1][N],G=y[w+1][N+1],j=y[w][N+1];(e>0||w!==0)&&(h.push(b,I,j),C+=3),(t>0||w!==r-1)&&(h.push(I,G,j),C+=3)}c.addGroup(p,C,0),p+=C}function v(_){let P=g,C=new ye,L=new B,N=0,w=_===!0?e:t,b=_===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;let I=g;for(let G=0;G<=s;G++){let X=G/s*l+o,K=Math.cos(X),R=Math.sin(X);L.x=w*R,L.y=m*b,L.z=w*K,d.push(L.x,L.y,L.z),u.push(0,b,0),C.x=K*.5+.5,C.y=R*.5*b+.5,f.push(C.x,C.y),g++}for(let G=0;G<s;G++){let j=P+G,X=I+G;_===!0?h.push(X,X+1,j):h.push(X+1,X,j),N+=3}c.addGroup(p,N,_===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new B,s=[],r=[],a=[],o=new B,l=new bt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},tr=class extends un{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},el=class extends tr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Oo=new B,xh=new iu,bh=new iu,Mh=new iu,nr=class extends un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Oo.subVectors(s[0],s[1]).add(s[0]),c=Oo);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),bh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),Mh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),bh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Mh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(xh.calc(l),bh.calc(l),Mh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ha=class extends un{constructor(e=new ye,t=new ye,i=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},tl=class extends un{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Kr(e,s.x,r.x,a.x,o.x),Kr(e,s.y,r.y,a.y,o.y),Kr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends un{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nl=class extends un{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends un{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends un{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y),Jr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(cf(o,l.x,c.x,h.x,d.x),cf(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},il=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:nr,CubicBezierCurve:ha,CubicBezierCurve3:tl,EllipseCurve:tr,LineCurve:ua,LineCurve3:nl,QuadraticBezierCurve:da,QuadraticBezierCurve3:fa,SplineCurve:pa}),sl=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new il[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new il[s.type]().fromJSON(s))}return this}},ma=class extends sl{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ua(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new da(this.currentPoint.clone(),new ye(e,t),new ye(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ha(this.currentPoint.clone(),new ye(e,t),new ye(i,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new pa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new tr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ir=class extends ma{constructor(e){super(e),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ma().fromJSON(s))}return this}};Ih=class{static triangulate(e,t,i=2){return u0(e,t,i)}},Ki=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];uf(e),df(i,e);let a=e.length;t.forEach(uf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,df(i,t[l]);let o=Ih.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};_a=class n extends cn{constructor(e=new ir([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:C0,v,_=!1,P,C,L,N;p&&(v=p.getSpacedPoints(h),_=!0,u=!1,P=p.computeFrenetFrames(h,!1),C=new B,L=new B,N=new B),u||(m=0,f=0,g=0,y=0);let w=o.extractPoints(c),b=w.shape,I=w.holes;if(!Ki.isClockWise(b)){b=b.reverse();for(let J=0,H=I.length;J<H;J++){let ie=I[J];Ki.isClockWise(ie)&&(I[J]=ie.reverse())}}function j(J){let ie=10000000000000001e-36,re=J[0];for(let ue=1;ue<=J.length;ue++){let fe=ue%J.length,ge=J[fe],Be=ge.x-re.x,Te=ge.y-re.y,E=Be*Be+Te*Te,x=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(re.x),Math.abs(re.y)),W=ie*x*x;if(E<=W){J.splice(fe,1),ue--;continue}re=ge}}j(b),I.forEach(j);let X=I.length,K=b;for(let J=0;J<X;J++){let H=I[J];b=b.concat(H)}function R(J,H,ie){return H||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(H,ie)}let D=b.length;function F(J,H,ie){let re,ue,fe,ge=J.x-H.x,Be=J.y-H.y,Te=ie.x-J.x,E=ie.y-J.y,x=ge*ge+Be*Be,W=ge*E-Be*Te;if(Math.abs(W)>Number.EPSILON){let ee=Math.sqrt(x),le=Math.sqrt(Te*Te+E*E),se=H.x-Be/ee,Ie=H.y+ge/ee,Me=ie.x-E/le,De=ie.y+Te/le,Fe=((Me-se)*E-(De-Ie)*Te)/(ge*E-Be*Te);re=se+ge*Fe-J.x,ue=Ie+Be*Fe-J.y;let _e=re*re+ue*ue;if(_e<=2)return new ye(re,ue);fe=Math.sqrt(_e/2)}else{let ee=!1;ge>Number.EPSILON?Te>Number.EPSILON&&(ee=!0):ge<-Number.EPSILON?Te<-Number.EPSILON&&(ee=!0):Math.sign(Be)===Math.sign(E)&&(ee=!0),ee?(re=-Be,ue=ge,fe=Math.sqrt(x)):(re=ge,ue=Be,fe=Math.sqrt(x/2))}return new ye(re/fe,ue/fe)}let V=[];for(let J=0,H=K.length,ie=H-1,re=J+1;J<H;J++,ie++,re++)ie===H&&(ie=0),re===H&&(re=0),V[J]=F(K[J],K[ie],K[re]);let ae=[],oe,Z=V.concat();for(let J=0,H=X;J<H;J++){let ie=I[J];oe=[];for(let re=0,ue=ie.length,fe=ue-1,ge=re+1;re<ue;re++,fe++,ge++)fe===ue&&(fe=0),ge===ue&&(ge=0),oe[re]=F(ie[re],ie[fe],ie[ge]);ae.push(oe),Z=Z.concat(oe)}let de;if(m===0)de=Ki.triangulateShape(K,I);else{let J=[],H=[];for(let ie=0;ie<m;ie++){let re=ie/m,ue=f*Math.cos(re*Math.PI/2),fe=g*Math.sin(re*Math.PI/2)+y;for(let ge=0,Be=K.length;ge<Be;ge++){let Te=R(K[ge],V[ge],fe);he(Te.x,Te.y,-ue),re===0&&J.push(Te)}for(let ge=0,Be=X;ge<Be;ge++){let Te=I[ge];oe=ae[ge];let E=[];for(let x=0,W=Te.length;x<W;x++){let ee=R(Te[x],oe[x],fe);he(ee.x,ee.y,-ue),re===0&&E.push(ee)}re===0&&H.push(E)}}de=Ki.triangulateShape(J,H)}let ve=de.length,Ce=g+y;for(let J=0;J<D;J++){let H=u?R(b[J],Z[J],Ce):b[J];_?(L.copy(P.normals[0]).multiplyScalar(H.x),C.copy(P.binormals[0]).multiplyScalar(H.y),N.copy(v[0]).add(L).add(C),he(N.x,N.y,N.z)):he(H.x,H.y,0)}for(let J=1;J<=h;J++)for(let H=0;H<D;H++){let ie=u?R(b[H],Z[H],Ce):b[H];_?(L.copy(P.normals[J]).multiplyScalar(ie.x),C.copy(P.binormals[J]).multiplyScalar(ie.y),N.copy(v[J]).add(L).add(C),he(N.x,N.y,N.z)):he(ie.x,ie.y,d/h*J)}for(let J=m-1;J>=0;J--){let H=J/m,ie=f*Math.cos(H*Math.PI/2),re=g*Math.sin(H*Math.PI/2)+y;for(let ue=0,fe=K.length;ue<fe;ue++){let ge=R(K[ue],V[ue],re);he(ge.x,ge.y,d+ie)}for(let ue=0,fe=I.length;ue<fe;ue++){let ge=I[ue];oe=ae[ue];for(let Be=0,Te=ge.length;Be<Te;Be++){let E=R(ge[Be],oe[Be],re);_?he(E.x,E.y+v[h-1].y,v[h-1].x+ie):he(E.x,E.y,d+ie)}}}M(),U();function M(){let J=s.length/3;if(u){let H=0,ie=D*H;for(let re=0;re<ve;re++){let ue=de[re];pe(ue[2]+ie,ue[1]+ie,ue[0]+ie)}H=h+m*2,ie=D*H;for(let re=0;re<ve;re++){let ue=de[re];pe(ue[0]+ie,ue[1]+ie,ue[2]+ie)}}else{for(let H=0;H<ve;H++){let ie=de[H];pe(ie[2],ie[1],ie[0])}for(let H=0;H<ve;H++){let ie=de[H];pe(ie[0]+D*h,ie[1]+D*h,ie[2]+D*h)}}i.addGroup(J,s.length/3-J,0)}function U(){let J=s.length/3,H=0;ne(K,H),H+=K.length;for(let ie=0,re=I.length;ie<re;ie++){let ue=I[ie];ne(ue,H),H+=ue.length}i.addGroup(J,s.length/3-J,1)}function ne(J,H){let ie=J.length;for(;--ie>=0;){let re=ie,ue=ie-1;ue<0&&(ue=J.length-1);for(let fe=0,ge=h+m*2;fe<ge;fe++){let Be=D*fe,Te=D*(fe+1),E=H+re+Be,x=H+ue+Be,W=H+ue+Te,ee=H+re+Te;O(E,x,W,ee)}}}function he(J,H,ie){l.push(J),l.push(H),l.push(ie)}function pe(J,H,ie){Y(J),Y(H),Y(ie);let re=s.length/3,ue=T.generateTopUV(i,s,re-3,re-2,re-1);A(ue[0]),A(ue[1]),A(ue[2])}function O(J,H,ie,re){Y(J),Y(H),Y(re),Y(H),Y(ie),Y(re);let ue=s.length/3,fe=T.generateSideWallUV(i,s,ue-6,ue-3,ue-2,ue-1);A(fe[0]),A(fe[1]),A(fe[3]),A(fe[1]),A(fe[2]),A(fe[3])}function Y(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function A(J){r.push(J.x),r.push(J.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return R0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new il[s.type]().fromJSON(s)),new n(i,e.options)}},C0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-d),new ye(u,1-g),new ye(y,1-p)]:[new ye(o,1-l),new ye(h,1-d),new ye(f,1-g),new ye(m,1-p)]}};Vn=class n extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let v=0;v<c;v++){let _=v*d-r;g.push(_,-T,0),y.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let v=T+c*p,_=T+c*(p+1),P=T+1+c*(p+1),C=T+1+c*p;f.push(v,_,C),f.push(_,P,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},xa=class n extends cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new B,u=new B,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let T=[],v=p/i,_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let C=P/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(C+_,1-v),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){let v=h[p][T+1],_=h[p][T],P=h[p+1][T],C=h[p+1][T+1];(p!==0||a>0)&&f.push(v,_,C),(p!==i-1||l<Math.PI)&&f.push(_,P,C)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ba=class n extends cn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new B,d=new B,u=new B;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(y,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ma=class n extends cn{constructor(e=new fa(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new ye,h=new B,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function y(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),T(),p()}function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],P=a.binormals[v];for(let C=0;C<=s;C++){let L=C/s*Math.PI*2,N=Math.sin(L),w=-Math.cos(L);l.x=w*_.x+N*P.x,l.y=w*_.y+N*P.y,l.z=w*_.z+N*P.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let P=(s+1)*(v-1)+(_-1),C=(s+1)*v+(_-1),L=(s+1)*v+_,N=(s+1)*(v-1)+_;g.push(P,C,N),g.push(C,L,N)}}function T(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new il[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Gn=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jh,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sa=class extends Gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},rl=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},al=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};as=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ol=class extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:r=e,o=2*t-i;break;case Th:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:a=e,l=2*i-t;break;case Th:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,T=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+T*a[c+P]+v*a[l+P]+_*a[d+P];return r}},ll=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},cl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ol(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case $o:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&P0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Vo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=$o;Pi=class extends dn{constructor(e,t,i){super(e,t,i)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Qr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;hl=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="color";ul=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="number";dl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;Ii=class extends dn{constructor(e,t,i){super(e,t,i)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;fl=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};fl.prototype.ValueTypeName="vector";Go={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},pl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},up=new pl,rr=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};rr.DEFAULT_MATERIAL_NAME="__DEFAULT";Gs=new WeakMap,ml=class extends rr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Go.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Gs.get(a);d===void 0&&(d=[],Gs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=$s("img");function l(){h(),t&&t(this);let d=Gs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Gs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Go.remove(`image:${e}`);let u=Gs.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Gs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Go.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Ea=class extends rr{constructor(e){super(e)}load(e,t,i,s){let r=new Vt,a=new ml(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Ta=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sh=new bt,ff=new B,pf=new B,Lh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},os=class extends ra{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Lh{constructor(){super(new os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ls=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Aa=class extends Ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},gl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},su="\\[\\]\\.:\\/",I0=new RegExp("["+su+"]","g"),ru="[^"+su+"]",L0="[^"+su.replace("\\.","")+"]",D0=/((?:WC+[\/:])*)/.source.replace("WC",ru),U0=/(WCOD+)?/.source.replace("WCOD",L0),N0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),F0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),k0=new RegExp("^"+D0+U0+N0+F0+"$"),O0=["material","materials","bones","map"],Uh=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(I0,"")}static parseTrackName(e){let t=k0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);O0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Uh;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];bM=new Float32Array(1),mf=new bt,Ca=class{constructor(e,t,i=0,s=1/0){this.ray=new ns(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ks,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mf),this}intersectObject(e,t=!0,i=[]){return Nh(e,this,i,t),i.sort(gf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Nh(e[s],this,i,t);return i.sort(gf),i}};ar=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Ra=class extends zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function Np(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function H0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function M_(n,e,t,i,s,r,a){let o=new $e(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1,P=g(v);P===null?p(o,l):P&&P.isColor&&(p(P,1),_=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let P=g(_);P&&(P.isCubeTexture||P.mapping===Pa)?(h===void 0&&(h=new pt(new Ci(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ds(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),fs.copy(_.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b_.makeRotationFromEuler(fs)),h.material.toneMapped=nt.getTransfer(P.colorSpace)!==at,(d!==P||u!==P.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=P,u=P.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new pt(new Vn(2,2),new hn({name:"BackgroundMaterial",uniforms:ds(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(P.colorSpace)!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||u!==P.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=P,u=P.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(lc,nu(n)),i.buffers.color.setClear(lc.r,lc.g,lc.b,_,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:y,addToRenderList:m,dispose:T}}function S_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(b,I,G,j,X){let K=!1,R=d(j,G,I);r!==R&&(r=R,c(r.object)),K=f(b,j,G,X),K&&g(b,j,G,X),X!==null&&e.update(X,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(b,I,G,j),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,I,G){let j=G.wireframe===!0,X=i[b.id];X===void 0&&(X={},i[b.id]=X);let K=X[I.id];K===void 0&&(K={},X[I.id]=K);let R=K[j];return R===void 0&&(R=u(l()),K[j]=R),R}function u(b){let I=[],G=[],j=[];for(let X=0;X<t;X++)I[X]=0,G[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:j,object:b,attributes:{},index:null}}function f(b,I,G,j){let X=r.attributes,K=I.attributes,R=0,D=G.getAttributes();for(let F in D)if(D[F].location>=0){let ae=X[F],oe=K[F];if(oe===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor)),ae===void 0||ae.attribute!==oe||oe&&ae.data!==oe.data)return!0;R++}return r.attributesNum!==R||r.index!==j}function g(b,I,G,j){let X={},K=I.attributes,R=0,D=G.getAttributes();for(let F in D)if(D[F].location>=0){let ae=K[F];ae===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(ae=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(ae=b.instanceColor));let oe={};oe.attribute=ae,ae&&ae.data&&(oe.data=ae.data),X[F]=oe,R++}r.attributes=X,r.attributesNum=R,r.index=j}function y(){let b=r.newAttributes;for(let I=0,G=b.length;I<G;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){let G=r.newAttributes,j=r.enabledAttributes,X=r.attributeDivisors;G[b]=1,j[b]===0&&(n.enableVertexAttribArray(b),j[b]=1),X[b]!==I&&(n.vertexAttribDivisor(b,I),X[b]=I)}function T(){let b=r.newAttributes,I=r.enabledAttributes;for(let G=0,j=I.length;G<j;G++)I[G]!==b[G]&&(n.disableVertexAttribArray(G),I[G]=0)}function v(b,I,G,j,X,K,R){R===!0?n.vertexAttribIPointer(b,I,G,X,K):n.vertexAttribPointer(b,I,G,j,X,K)}function _(b,I,G,j){y();let X=j.attributes,K=G.getAttributes(),R=I.defaultAttributeValues;for(let D in K){let F=K[D];if(F.location>=0){let V=X[D];if(V===void 0&&(D==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),D==="instanceColor"&&b.instanceColor&&(V=b.instanceColor)),V!==void 0){let ae=V.normalized,oe=V.itemSize,Z=e.get(V);if(Z===void 0)continue;let de=Z.buffer,ve=Z.type,Ce=Z.bytesPerElement,M=ve===n.INT||ve===n.UNSIGNED_INT||V.gpuType===Cl;if(V.isInterleavedBufferAttribute){let U=V.data,ne=U.stride,he=V.offset;if(U.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)p(F.location+pe,U.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let pe=0;pe<F.locationSize;pe++)m(F.location+pe);n.bindBuffer(n.ARRAY_BUFFER,de);for(let pe=0;pe<F.locationSize;pe++)v(F.location+pe,oe/F.locationSize,ve,ae,ne*Ce,(he+oe/F.locationSize*pe)*Ce,M)}else{if(V.isInstancedBufferAttribute){for(let U=0;U<F.locationSize;U++)p(F.location+U,V.meshPerAttribute);b.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let U=0;U<F.locationSize;U++)m(F.location+U);n.bindBuffer(n.ARRAY_BUFFER,de);for(let U=0;U<F.locationSize;U++)v(F.location+U,oe/F.locationSize,ve,ae,oe*Ce,oe/F.locationSize*U*Ce,M)}}else if(R!==void 0){let ae=R[D];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(F.location,ae);break;case 3:n.vertexAttrib3fv(F.location,ae);break;case 4:n.vertexAttrib4fv(F.location,ae);break;default:n.vertexAttrib1fv(F.location,ae)}}}}T()}function P(){N();for(let b in i){let I=i[b];for(let G in I){let j=I[G];for(let X in j)h(j[X].object),delete j[X];delete I[G]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;let I=i[b.id];for(let G in I){let j=I[G];for(let X in j)h(j[X].object),delete j[X];delete I[G]}delete i[b.id]}function L(b){for(let I in i){let G=i[I];if(G[b.id]===void 0)continue;let j=G[b.id];for(let X in j)h(j[X].object),delete j[X];delete G[b.id]}}function N(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function w_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function E_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let N=L===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ln&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!N)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:P,maxSamples:C}}function T_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new vn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:i,v=T*4,_=p.clippingState||null;l.value=_,_=h(g,u,v,f);for(let P=0;P!==v;++P)_[P]=t[P];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function A_(n){let e=new WeakMap;function t(a,o){return o===El?a.mapping=cs:o===Tl&&(a.mapping=hs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===El||o===Tl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qo(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function R_(n){let e=[],t=[],i=[],s=n,r=n-dr+1+dp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-dr?l=dp[a-n+dr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,T=new Float32Array(y*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let C=0;C<f;C++){let L=C%3*2/3-1,N=C>2?0:-1,w=[L,N,0,L+2/3,N,0,L+2/3,N+1,0,L,N,0,L+2/3,N+1,0,L,N+1,0];T.set(w,y*g*C),v.set(u,m*g*C);let b=[C,C,C,C,C,C];_.set(b,p*g*C)}let P=new cn;P.setAttribute("position",new ln(T,y)),P.setAttribute("uv",new ln(v,m)),P.setAttribute("faceIndex",new ln(_,p)),e.push(P),s>dr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function mp(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function cc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function P_(n,e,t){let i=new Float32Array(gs),s=new B(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function gp(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function yp(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function I_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===El||l===Tl,h=l===cs||l===hs;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new pr(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new pr(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function L_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&js("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function D_(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let T=f.array;y=f.version;for(let v=0,_=T.length;v<_;v+=3){let P=T[v+0],C=T[v+1],L=T[v+2];u.push(P,C,C,L,L,P)}}else if(g!==void 0){let T=g.array;y=g.version;for(let v=0,_=T.length/3-1;v<_;v+=3){let P=v+0,C=v+1,L=v+2;u.push(P,C,C,L,L,P)}}else return;let m=new(tu(u)?sa:ia)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function U_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,y,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*y[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function N_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function F_(n,e,t){let i=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let C=new Float32Array(_*P*4*d),L=new na(C,_,P,d);L.type=Xn,L.needsUpdate=!0;let N=v*4;for(let b=0;b<d;b++){let I=m[b],G=p[b],j=T[b],X=_*P*4*b;for(let K=0;K<I.count;K++){let R=K*N;f===!0&&(s.fromBufferAttribute(I,K),C[X+R+0]=s.x,C[X+R+1]=s.y,C[X+R+2]=s.z,C[X+R+3]=0),g===!0&&(s.fromBufferAttribute(G,K),C[X+R+4]=s.x,C[X+R+5]=s.y,C[X+R+6]=s.z,C[X+R+7]=0),y===!0&&(s.fromBufferAttribute(j,K),C[X+R+8]=s.x,C[X+R+9]=s.y,C[X+R+10]=s.z,C[X+R+11]=j.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new ye(_,P)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function k_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uc(n,e){let t=xp[e];t===void 0&&(t=new Int32Array(e),xp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function O_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function V_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Sp.set(i),n.uniformMatrix2fv(this.addr,!1,Sp),Dt(t,i)}}function G_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Mp.set(i),n.uniformMatrix3fv(this.addr,!1,Mp),Dt(t,i)}}function W_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;bp.set(i),n.uniformMatrix4fv(this.addr,!1,bp),Dt(t,i)}}function q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function $_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function j_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(vp.compareFunction=Kh,r=vp):r=Fp,t.setTexture2D(e||r,s)}function ex(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Op,s)}function tx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Bp,s)}function nx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kp,s)}function ix(n){switch(n){case 5126:return O_;case 35664:return B_;case 35665:return z_;case 35666:return H_;case 35674:return V_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return q_;case 35667:case 35671:return X_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return Z_;case 36295:return J_;case 36296:return K_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ex;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return nx}}function sx(n,e){n.uniform1fv(this.addr,e)}function rx(n,e){let t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function ax(n,e){let t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function ox(n,e){let t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function lx(n,e){let t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cx(n,e){let t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hx(n,e){let t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ux(n,e){n.uniform1iv(this.addr,e)}function dx(n,e){n.uniform2iv(this.addr,e)}function fx(n,e){n.uniform3iv(this.addr,e)}function px(n,e){n.uniform4iv(this.addr,e)}function mx(n,e){n.uniform1uiv(this.addr,e)}function gx(n,e){n.uniform2uiv(this.addr,e)}function yx(n,e){n.uniform3uiv(this.addr,e)}function vx(n,e){n.uniform4uiv(this.addr,e)}function _x(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Fp,r[a])}function xx(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Op,r[a])}function bx(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Bp,r[a])}function Mx(n,e,t){let i=this.cache,s=e.length,r=uc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kp,r[a])}function Sx(n){switch(n){case 5126:return sx;case 35664:return rx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return dx;case 35668:case 35672:return fx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return yx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return _x;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return bx;case 36289:case 36303:case 36311:case 36292:return Mx}}function wp(n,e){n.seq.push(e),n.map[e.id]=e}function wx(n,e,t){let i=n.name,s=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),a=fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wp(t,c===void 0?new pu(o,n,e):new mu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new gu(o),wp(t,d)),t=d}}}function Ep(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Ax(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Cx(n){nt._getMatrix(Tp,nt.workingColorSpace,n);let e=`mat3( ${Tp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ea:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ap(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ax(n.getShaderSource(e),o)}else return r}function Rx(n,e){let t=Cx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Px(n,e){let t;switch(e){case zf:t="Linear";break;case Hf:t="Reinhard";break;case Vf:t="Cineon";break;case wl:t="ACESFilmic";break;case Wf:t="AgX";break;case qf:t="Neutral";break;case Gf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ix(){nt.getLuminanceCoefficients(hc);let n=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function Dx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ux(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ka(n){return n!==""}function Cp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function yu(n){return n.replace(Nx,kx)}function kx(n,e){let t=Qe[e];if(t===void 0){let i=Fx.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yu(t)}function Pp(n){return n.replace(Ox,Bx)}function Bx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_f?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case hs:e="ENVMAP_TYPE_CUBE";break;case Pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===hs&&(e="ENVMAP_MODE_REFRACTION"),e}function Gx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case Of:e="ENVMAP_BLENDING_MIX";break;case Bf:e="ENVMAP_BLENDING_ADD";break}return e}function Wx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function qx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=zx(t),c=Hx(t),h=Vx(t),d=Gx(t),u=Wx(t),f=Lx(t),g=Dx(r),y=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(m=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?Px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Rx("linearToOutputTexel",t.outputColorSpace),Ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),a=yu(a),a=Cp(a,t),a=Rp(a,t),o=yu(o),o=Cp(o,t),o=Rp(o,t),a=Pp(a),o=Pp(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=T+m+a,_=T+p+o,P=Ep(s,s.VERTEX_SHADER,v),C=Ep(s,s.FRAGMENT_SHADER,_);s.attachShader(y,P),s.attachShader(y,C),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(I){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",j=s.getShaderInfoLog(P)||"",X=s.getShaderInfoLog(C)||"",K=G.trim(),R=j.trim(),D=X.trim(),F=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,P,C);else{let ae=Ap(s,P,"vertex"),oe=Ap(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+K+`
`+ae+`
`+oe)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(R===""||D==="")&&(V=!1);V&&(I.diagnostics={runnable:F,programLog:K,vertexShader:{log:R,prefix:m},fragmentShader:{log:D,prefix:p}})}s.deleteShader(P),s.deleteShader(C),N=new fr(s,y),w=Ux(s,y)}let N;this.getUniforms=function(){return N===void 0&&L(this),N};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(y,Ex)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=C,this}function Yx(n,e,t,i,s,r,a){let o=new Ks,l=new vu,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,I,G,j){let X=G.fog,K=j.geometry,R=w.isMeshStandardMaterial?G.environment:null,D=(w.isMeshStandardMaterial?t:e).get(w.envMap||R),F=D&&D.mapping===Pa?D.image.height:null,V=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=ae!==void 0?ae.length:0,Z=0;K.morphAttributes.position!==void 0&&(Z=1),K.morphAttributes.normal!==void 0&&(Z=2),K.morphAttributes.color!==void 0&&(Z=3);let de,ve,Ce,M;if(V){let rt=Yn[V];de=rt.vertexShader,ve=rt.fragmentShader}else de=w.vertexShader,ve=w.fragmentShader,l.update(w),Ce=l.getVertexShaderID(w),M=l.getFragmentShaderID(w);let U=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),he=j.isInstancedMesh===!0,pe=j.isBatchedMesh===!0,O=!!w.map,Y=!!w.matcap,A=!!D,J=!!w.aoMap,H=!!w.lightMap,ie=!!w.bumpMap,re=!!w.normalMap,ue=!!w.displacementMap,fe=!!w.emissiveMap,ge=!!w.metalnessMap,Be=!!w.roughnessMap,Te=w.anisotropy>0,E=w.clearcoat>0,x=w.dispersion>0,W=w.iridescence>0,ee=w.sheen>0,le=w.transmission>0,se=Te&&!!w.anisotropyMap,Ie=E&&!!w.clearcoatMap,Me=E&&!!w.clearcoatNormalMap,De=E&&!!w.clearcoatRoughnessMap,Fe=W&&!!w.iridescenceMap,_e=W&&!!w.iridescenceThicknessMap,Pe=ee&&!!w.sheenColorMap,qe=ee&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ae=!!w.specularColorMap,Je=!!w.specularIntensityMap,z=le&&!!w.transmissionMap,Se=le&&!!w.thicknessMap,we=!!w.gradientMap,Ue=!!w.alphaMap,xe=w.alphaTest>0,ce=!!w.alphaHash,ke=!!w.extensions,Ye=hi;w.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let ht={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:de,fragmentShader:ve,defines:w.defines,customVertexShaderID:Ce,customFragmentShaderID:M,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:pe,batchingColor:pe&&j._colorsTexture!==null,instancing:he,instancingColor:he&&j.instanceColor!==null,instancingMorph:he&&j.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ts,alphaToCoverage:!!w.alphaToCoverage,map:O,matcap:Y,envMap:A,envMapMode:A&&D.mapping,envMapCubeUVHeight:F,aoMap:J,lightMap:H,bumpMap:ie,normalMap:re,displacementMap:u&&ue,emissiveMap:fe,normalMapObjectSpace:re&&w.normalMapType===jf,normalMapTangentSpace:re&&w.normalMapType===Jh,metalnessMap:ge,roughnessMap:Be,anisotropy:Te,anisotropyMap:se,clearcoat:E,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:De,dispersion:x,iridescence:W,iridescenceMap:Fe,iridescenceThicknessMap:_e,sheen:ee,sheenColorMap:Pe,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:Je,transmission:le,transmissionMap:z,thicknessMap:Se,gradientMap:we,opaque:w.transparent===!1&&w.blending===Qi&&w.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:ce,combine:w.combine,mapUv:O&&y(w.map.channel),aoMapUv:J&&y(w.aoMap.channel),lightMapUv:H&&y(w.lightMap.channel),bumpMapUv:ie&&y(w.bumpMap.channel),normalMapUv:re&&y(w.normalMap.channel),displacementMapUv:ue&&y(w.displacementMap.channel),emissiveMapUv:fe&&y(w.emissiveMap.channel),metalnessMapUv:ge&&y(w.metalnessMap.channel),roughnessMapUv:Be&&y(w.roughnessMap.channel),anisotropyMapUv:se&&y(w.anisotropyMap.channel),clearcoatMapUv:Ie&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(w.sheenRoughnessMap.channel),specularMapUv:Oe&&y(w.specularMap.channel),specularColorMapUv:Ae&&y(w.specularColorMap.channel),specularIntensityMapUv:Je&&y(w.specularIntensityMap.channel),transmissionMapUv:z&&y(w.transmissionMap.channel),thicknessMapUv:Se&&y(w.thicknessMap.channel),alphaMapUv:Ue&&y(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(re||Te),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!K.attributes.uv&&(O||Ue),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:j.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Z,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:O&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===at,decodeVideoTextureEmissive:fe&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qn,flipSided:w.side===Ot,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(w){let b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(let I in w.defines)b.push(I),b.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(T(b,w),v(b,w),b.push(n.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function T(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function v(w,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let b=g[w.type],I;if(b){let G=Yn[b];I=ap.clone(G.uniforms)}else I=w.uniforms;return I}function P(w,b){let I;for(let G=0,j=h.length;G<j;G++){let X=h[G];if(X.cacheKey===b){I=X,++I.usedTimes;break}}return I===void 0&&(I=new qx(n,b,w,r),h.push(I)),I}function C(w){if(--w.usedTimes===0){let b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:N}}function $x(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function o(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||jx),i.length>1&&i.sort(u||Lp),s.length>1&&s.sort(u||Lp)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Zx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Dp,n.set(i,[a])):s>=r.length?(a=new Dp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Kx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function eb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tb(n){let e=new Jx,t=Kx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new bt,a=new bt;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,T=0,v=0,_=0,P=0,C=0,L=0;c.sort(eb);for(let w=0,b=c.length;w<b;w++){let I=c[w],G=I.color,j=I.intensity,X=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*j,d+=G.g*j,u+=G.b*j;else if(I.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(I.sh.coefficients[R],j);L++}else if(I.isDirectionalLight){let R=e.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let D=I.shadow,F=t.get(I);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.directionalShadow[f]=F,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=I.shadow.matrix,T++}i.directional[f]=R,f++}else if(I.isSpotLight){let R=e.get(I);R.position.setFromMatrixPosition(I.matrixWorld),R.color.copy(G).multiplyScalar(j),R.distance=X,R.coneCos=Math.cos(I.angle),R.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),R.decay=I.decay,i.spot[y]=R;let D=I.shadow;if(I.map&&(i.spotLightMap[P]=I.map,P++,D.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[y]=D.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,i.spotShadow[y]=F,i.spotShadowMap[y]=K,_++}y++}else if(I.isRectAreaLight){let R=e.get(I);R.color.copy(G).multiplyScalar(j),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=R,m++}else if(I.isPointLight){let R=e.get(I);if(R.color.copy(I.color).multiplyScalar(I.intensity),R.distance=I.distance,R.decay=I.decay,I.castShadow){let D=I.shadow,F=t.get(I);F.shadowIntensity=D.intensity,F.shadowBias=D.bias,F.shadowNormalBias=D.normalBias,F.shadowRadius=D.radius,F.shadowMapSize=D.mapSize,F.shadowCameraNear=D.camera.near,F.shadowCameraFar=D.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,v++}i.point[g]=R,g++}else if(I.isHemisphereLight){let R=e.get(I);R.skyColor.copy(I.color).multiplyScalar(j),R.groundColor.copy(I.groundColor).multiplyScalar(j),i.hemi[p]=R,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let N=i.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==v||N.numSpotShadows!==_||N.numSpotMaps!==P||N.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,N.directionalLength=f,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=v,N.numSpotShadows=_,N.numSpotMaps=P,N.numLightProbes=L,i.version=Qx++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let v=c[p];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Up(n){let e=new tb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function nb(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Up(n),e.set(s,[o])):r>=a.length?(o=new Up(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function rb(n,e,t){let i=new er,s=new ye,r=new ye,a=new ft,o=new rl({depthPacking:$f}),l=new al,c={},h=t.maxTextureSize,d={[oi]:Ot,[Ot]:oi,[qn]:qn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:ib,fragmentShader:sb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(C,L,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let w=n.getRenderTarget(),b=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ci),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let j=p!==Wn&&this.type===Wn,X=p===Wn&&this.type!==Wn;for(let K=0,R=C.length;K<R;K++){let D=C[K],F=D.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let V=F.getFrameExtents();if(s.multiply(V),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,F.mapSize.y=r.y)),F.map===null||j===!0||X===!0){let oe=this.type!==Wn?{minFilter:Jt,magFilter:Jt}:{};F.map!==null&&F.map.dispose(),F.map=new Hn(s.x,s.y,oe),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();let ae=F.getViewportCount();for(let oe=0;oe<ae;oe++){let Z=F.getViewport(oe);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),G.viewport(a),F.updateMatrices(D,oe),i=F.getFrustum(),_(L,N,F.camera,D,this.type)}F.isPointLightShadow!==!0&&this.type===Wn&&T(F,N),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,b,I)};function T(C,L){let N=e.update(y);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Hn(s.x,s.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(L,null,N,u,y,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(L,null,N,f,y,null)}function v(C,L,N,w){let b=null,I=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=N.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=b.uuid,j=L.uuid,X=c[G];X===void 0&&(X={},c[G]=X);let K=X[j];K===void 0&&(K=b.clone(),X[j]=K,L.addEventListener("dispose",P)),b=K}if(b.visible=L.visible,b.wireframe=L.wireframe,w===Wn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=n.properties.get(b);G.light=N}return b}function _(C,L,N,w,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Wn)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);let j=e.update(C),X=C.material;if(Array.isArray(X)){let K=j.groups;for(let R=0,D=K.length;R<D;R++){let F=K[R],V=X[F.materialIndex];if(V&&V.visible){let ae=v(C,V,w,b);C.onBeforeShadow(n,C,L,N,j,ae,F),n.renderBufferDirect(N,null,j,ae,C,F),C.onAfterShadow(n,C,L,N,j,ae,F)}}}else if(X.visible){let K=v(C,X,w,b);C.onBeforeShadow(n,C,L,N,j,K,null),n.renderBufferDirect(N,null,j,K,C,null),C.onAfterShadow(n,C,L,N,j,K,null)}}let G=C.children;for(let j=0,X=G.length;j<X;j++)_(G[j],L,N,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(let N in c){let w=c[N],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function ob(n,e){function t(){let z=!1,Se=new ft,we=null,Ue=new ft(0,0,0,0);return{setMask:function(xe){we!==xe&&!z&&(n.colorMask(xe,xe,xe,xe),we=xe)},setLocked:function(xe){z=xe},setClear:function(xe,ce,ke,Ye,ht){ht===!0&&(xe*=Ye,ce*=Ye,ke*=Ye),Se.set(xe,ce,ke,Ye),Ue.equals(Se)===!1&&(n.clearColor(xe,ce,ke,Ye),Ue.copy(Se))},reset:function(){z=!1,we=null,Ue.set(-1,0,0,0)}}}function i(){let z=!1,Se=!1,we=null,Ue=null,xe=null;return{setReversed:function(ce){if(Se!==ce){let ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Se=ce;let Ye=xe;xe=null,this.setClear(Ye)}},getReversed:function(){return Se},setTest:function(ce){ce?U(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(ce){we!==ce&&!z&&(n.depthMask(ce),we=ce)},setFunc:function(ce){if(Se&&(ce=ab[ce]),Ue!==ce){switch(ce){case yl:n.depthFunc(n.NEVER);break;case vl:n.depthFunc(n.ALWAYS);break;case _l:n.depthFunc(n.LESS);break;case es:n.depthFunc(n.LEQUAL);break;case xl:n.depthFunc(n.EQUAL);break;case bl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case Sl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=ce}},setLocked:function(ce){z=ce},setClear:function(ce){xe!==ce&&(Se&&(ce=1-ce),n.clearDepth(ce),xe=ce)},reset:function(){z=!1,we=null,Ue=null,xe=null,Se=!1}}}function s(){let z=!1,Se=null,we=null,Ue=null,xe=null,ce=null,ke=null,Ye=null,ht=null;return{setTest:function(rt){z||(rt?U(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(rt){Se!==rt&&!z&&(n.stencilMask(rt),Se=rt)},setFunc:function(rt,Qn,On){(we!==rt||Ue!==Qn||xe!==On)&&(n.stencilFunc(rt,Qn,On),we=rt,Ue=Qn,xe=On)},setOp:function(rt,Qn,On){(ce!==rt||ke!==Qn||Ye!==On)&&(n.stencilOp(rt,Qn,On),ce=rt,ke=Qn,Ye=On)},setLocked:function(rt){z=rt},setClear:function(rt){ht!==rt&&(n.clearStencil(rt),ht=rt)},reset:function(){z=!1,Se=null,we=null,Ue=null,xe=null,ce=null,ke=null,Ye=null,ht=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,v=null,_=null,P=null,C=null,L=new $e(0,0,0),N=0,w=!1,b=null,I=null,G=null,j=null,X=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,D=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=D>=1):F.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=D>=2);let V=null,ae={},oe=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),de=new ft().fromArray(oe),ve=new ft().fromArray(Z);function Ce(z,Se,we,Ue){let xe=new Uint8Array(4),ce=n.createTexture();n.bindTexture(z,ce),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<we;ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(Se,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Se+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ce}let M={};M[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),M[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),M[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),M[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(n.DEPTH_TEST),a.setFunc(es),ie(!1),re(Fh),U(n.CULL_FACE),J(ci);function U(z){h[z]!==!0&&(n.enable(z),h[z]=!0)}function ne(z){h[z]!==!1&&(n.disable(z),h[z]=!1)}function he(z,Se){return d[z]!==Se?(n.bindFramebuffer(z,Se),d[z]=Se,z===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Se),z===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Se),!0):!1}function pe(z,Se){let we=f,Ue=!1;if(z){we=u.get(Se),we===void 0&&(we=[],u.set(Se,we));let xe=z.textures;if(we.length!==xe.length||we[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,ke=xe.length;ce<ke;ce++)we[ce]=n.COLOR_ATTACHMENT0+ce;we.length=xe.length,Ue=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(we)}function O(z){return g!==z?(n.useProgram(z),g=z,!0):!1}let Y={[Ei]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[Mf]:n.FUNC_REVERSE_SUBTRACT};Y[Sf]=n.MIN,Y[wf]=n.MAX;let A={[Ef]:n.ZERO,[Tf]:n.ONE,[Af]:n.SRC_COLOR,[Wo]:n.SRC_ALPHA,[Df]:n.SRC_ALPHA_SATURATE,[If]:n.DST_COLOR,[Rf]:n.DST_ALPHA,[Cf]:n.ONE_MINUS_SRC_COLOR,[qo]:n.ONE_MINUS_SRC_ALPHA,[Lf]:n.ONE_MINUS_DST_COLOR,[Pf]:n.ONE_MINUS_DST_ALPHA,[Uf]:n.CONSTANT_COLOR,[Nf]:n.ONE_MINUS_CONSTANT_COLOR,[Ff]:n.CONSTANT_ALPHA,[kf]:n.ONE_MINUS_CONSTANT_ALPHA};function J(z,Se,we,Ue,xe,ce,ke,Ye,ht,rt){if(z===ci){y===!0&&(ne(n.BLEND),y=!1);return}if(y===!1&&(U(n.BLEND),y=!0),z!==xf){if(z!==m||rt!==w){if((p!==Ei||_!==Ei)&&(n.blendEquation(n.FUNC_ADD),p=Ei,_=Ei),rt)switch(z){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFunc(n.ONE,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Oh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,v=null,P=null,C=null,L.set(0,0,0),N=0,m=z,w=rt}return}xe=xe||Se,ce=ce||we,ke=ke||Ue,(Se!==p||xe!==_)&&(n.blendEquationSeparate(Y[Se],Y[xe]),p=Se,_=xe),(we!==T||Ue!==v||ce!==P||ke!==C)&&(n.blendFuncSeparate(A[we],A[Ue],A[ce],A[ke]),T=we,v=Ue,P=ce,C=ke),(Ye.equals(L)===!1||ht!==N)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ht),L.copy(Ye),N=ht),m=z,w=!1}function H(z,Se){z.side===qn?ne(n.CULL_FACE):U(n.CULL_FACE);let we=z.side===Ot;Se&&(we=!we),ie(we),z.blending===Qi&&z.transparent===!1?J(ci):J(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let Ue=z.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function re(z){z!==yf?(U(n.CULL_FACE),z!==I&&(z===Fh?n.cullFace(n.BACK):z===vf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),I=z}function ue(z){z!==G&&(R&&n.lineWidth(z),G=z)}function fe(z,Se,we){z?(U(n.POLYGON_OFFSET_FILL),(j!==Se||X!==we)&&(n.polygonOffset(Se,we),j=Se,X=we)):ne(n.POLYGON_OFFSET_FILL)}function ge(z){z?U(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function Be(z){z===void 0&&(z=n.TEXTURE0+K-1),V!==z&&(n.activeTexture(z),V=z)}function Te(z,Se,we){we===void 0&&(V===null?we=n.TEXTURE0+K-1:we=V);let Ue=ae[we];Ue===void 0&&(Ue={type:void 0,texture:void 0},ae[we]=Ue),(Ue.type!==z||Ue.texture!==Se)&&(V!==we&&(n.activeTexture(we),V=we),n.bindTexture(z,Se||M[z]),Ue.type=z,Ue.texture=Se)}function E(){let z=ae[V];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{n.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{n.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{n.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function De(){try{n.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(){try{n.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{n.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(z){de.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),de.copy(z))}function qe(z){ve.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),ve.copy(z))}function Oe(z,Se){let we=c.get(Se);we===void 0&&(we=new WeakMap,c.set(Se,we));let Ue=we.get(z);Ue===void 0&&(Ue=n.getUniformBlockIndex(Se,z.name),we.set(z,Ue))}function Ae(z,Se){let Ue=c.get(Se).get(z);l.get(Se)!==Ue&&(n.uniformBlockBinding(Se,Ue,z.__bindingPointIndex),l.set(Se,Ue))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},V=null,ae={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,v=null,_=null,P=null,C=null,L=new $e(0,0,0),N=0,w=!1,b=null,I=null,G=null,j=null,X=null,de.set(0,0,n.canvas.width,n.canvas.height),ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:ne,bindFramebuffer:he,drawBuffers:pe,useProgram:O,setBlending:J,setMaterial:H,setFlipSided:ie,setCullFace:re,setLineWidth:ue,setPolygonOffset:fe,setScissorTest:ge,activeTexture:Be,bindTexture:Te,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:W,texImage2D:Fe,texImage3D:_e,updateUBOMapping:Oe,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:De,texSubImage2D:ee,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:Ie,scissor:Pe,viewport:qe,reset:Je}}function lb(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return f?new OffscreenCanvas(E,x):$s("canvas")}function y(E,x,W){let ee=1,le=Te(E);if((le.width>W||le.height>W)&&(ee=W/Math.max(le.width,le.height)),ee<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let se=Math.floor(ee*le.width),Ie=Math.floor(ee*le.height);d===void 0&&(d=g(se,Ie));let Me=x?g(se,Ie):d;return Me.width=se,Me.height=Ie,Me.getContext("2d").drawImage(E,0,0,se,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+se+"x"+Ie+")."),Me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){n.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(E,x,W,ee,le=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=x;if(x===n.RED&&(W===n.FLOAT&&(se=n.R32F),W===n.HALF_FLOAT&&(se=n.R16F),W===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.R8UI),W===n.UNSIGNED_SHORT&&(se=n.R16UI),W===n.UNSIGNED_INT&&(se=n.R32UI),W===n.BYTE&&(se=n.R8I),W===n.SHORT&&(se=n.R16I),W===n.INT&&(se=n.R32I)),x===n.RG&&(W===n.FLOAT&&(se=n.RG32F),W===n.HALF_FLOAT&&(se=n.RG16F),W===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RG8UI),W===n.UNSIGNED_SHORT&&(se=n.RG16UI),W===n.UNSIGNED_INT&&(se=n.RG32UI),W===n.BYTE&&(se=n.RG8I),W===n.SHORT&&(se=n.RG16I),W===n.INT&&(se=n.RG32I)),x===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGB8UI),W===n.UNSIGNED_SHORT&&(se=n.RGB16UI),W===n.UNSIGNED_INT&&(se=n.RGB32UI),W===n.BYTE&&(se=n.RGB8I),W===n.SHORT&&(se=n.RGB16I),W===n.INT&&(se=n.RGB32I)),x===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),W===n.UNSIGNED_INT&&(se=n.RGBA32UI),W===n.BYTE&&(se=n.RGBA8I),W===n.SHORT&&(se=n.RGBA16I),W===n.INT&&(se=n.RGBA32I)),x===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),x===n.RGBA){let Ie=le?ea:nt.getTransfer(ee);W===n.FLOAT&&(se=n.RGBA32F),W===n.HALF_FLOAT&&(se=n.RGBA16F),W===n.UNSIGNED_BYTE&&(se=Ie===at?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(E,x){let W;return E?x===null||x===Ni||x===cr?W=n.DEPTH24_STENCIL8:x===Xn?W=n.DEPTH32F_STENCIL8:x===or&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===cr?W=n.DEPTH_COMPONENT24:x===Xn?W=n.DEPTH_COMPONENT32F:x===or&&(W=n.DEPTH_COMPONENT16),W}function P(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Jt&&E.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){let x=E.target;x.removeEventListener("dispose",C),N(x),x.isVideoTexture&&h.delete(x)}function L(E){let x=E.target;x.removeEventListener("dispose",L),b(x)}function N(E){let x=i.get(E);if(x.__webglInit===void 0)return;let W=E.source,ee=u.get(W);if(ee){let le=ee[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(E),Object.keys(ee).length===0&&u.delete(W)}i.remove(E)}function w(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let W=E.source,ee=u.get(W);delete ee[x.__cacheKey],a.memory.textures--}function b(E){let x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(x.__webglFramebuffer[ee]))for(let le=0;le<x.__webglFramebuffer[ee].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[ee][le]);else n.deleteFramebuffer(x.__webglFramebuffer[ee]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ee])}else{if(Array.isArray(x.__webglFramebuffer))for(let ee=0;ee<x.__webglFramebuffer.length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[ee]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ee=0;ee<x.__webglColorRenderbuffer.length;ee++)x.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ee]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=E.textures;for(let ee=0,le=W.length;ee<le;ee++){let se=i.get(W[ee]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(W[ee])}i.remove(E)}let I=0;function G(){I=0}function j(){let E=I;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function X(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){let W=i.get(E);if(E.isVideoTexture&&ge(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&W.__version!==E.version){let ee=E.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{M(W,E,x);return}}else E.isExternalTexture&&(W.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function R(E,x){let W=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){M(W,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function D(E,x){let W=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&W.__version!==E.version){M(W,E,x);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function F(E,x){let W=i.get(E);if(E.version>0&&W.__version!==E.version){U(W,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}let V={[Xo]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[Yo]:n.MIRRORED_REPEAT},ae={[Jt]:n.NEAREST,[Xf]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Al]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},oe={[Zf]:n.NEVER,[np]:n.ALWAYS,[Jf]:n.LESS,[Kh]:n.LEQUAL,[Kf]:n.EQUAL,[tp]:n.GEQUAL,[Qf]:n.GREATER,[ep]:n.NOTEQUAL};function Z(E,x){if(x.type===Xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===Al||x.magFilter===Ia||x.magFilter===Ui||x.minFilter===Kt||x.minFilter===Al||x.minFilter===Ia||x.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,V[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,V[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,V[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,ae[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,ae[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==Ia&&x.minFilter!==Ui||x.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function de(E,x){let W=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));let ee=x.source,le=u.get(ee);le===void 0&&(le={},u.set(ee,le));let se=X(x);if(se!==E.__cacheKey){le[se]===void 0&&(le[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),le[se].usedTimes++;let Ie=le[E.__cacheKey];Ie!==void 0&&(le[E.__cacheKey].usedTimes--,Ie.usedTimes===0&&w(x)),E.__cacheKey=se,E.__webglTexture=le[se].texture}return W}function ve(E,x,W){return Math.floor(Math.floor(E/W)/x)}function Ce(E,x,W,ee){let se=E.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,W,ee,x.data);else{se.sort((_e,Pe)=>_e.start-Pe.start);let Ie=0;for(let _e=1;_e<se.length;_e++){let Pe=se[Ie],qe=se[_e],Oe=Pe.start+Pe.count,Ae=ve(qe.start,x.width,4),Je=ve(Pe.start,x.width,4);qe.start<=Oe+1&&Ae===Je&&ve(qe.start+qe.count-1,x.width,4)===Ae?Pe.count=Math.max(Pe.count,qe.start+qe.count-Pe.start):(++Ie,se[Ie]=qe)}se.length=Ie+1;let Me=n.getParameter(n.UNPACK_ROW_LENGTH),De=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let _e=0,Pe=se.length;_e<Pe;_e++){let qe=se[_e],Oe=Math.floor(qe.start/4),Ae=Math.ceil(qe.count/4),Je=Oe%x.width,z=Math.floor(Oe/x.width),Se=Ae,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,z),t.texSubImage2D(n.TEXTURE_2D,0,Je,z,Se,we,W,ee,x.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Me),n.pixelStorei(n.UNPACK_SKIP_PIXELS,De),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function M(E,x,W){let ee=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ee=n.TEXTURE_3D);let le=de(E,x),se=x.source;t.bindTexture(ee,E.__webglTexture,n.TEXTURE0+W);let Ie=i.get(se);if(se.version!==Ie.__version||le===!0){t.activeTexture(n.TEXTURE0+W);let Me=nt.getPrimaries(nt.workingColorSpace),De=x.colorSpace===ui?null:nt.getPrimaries(x.colorSpace),Fe=x.colorSpace===ui||Me===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let _e=y(x.image,!1,s.maxTextureSize);_e=Be(x,_e);let Pe=r.convert(x.format,x.colorSpace),qe=r.convert(x.type),Oe=v(x.internalFormat,Pe,qe,x.colorSpace,x.isVideoTexture);Z(ee,x);let Ae,Je=x.mipmaps,z=x.isVideoTexture!==!0,Se=Ie.__version===void 0||le===!0,we=se.dataReady,Ue=P(x,_e);if(x.isDepthTexture)Oe=_(x.format===hr,x.type),Se&&(z?t.texStorage2D(n.TEXTURE_2D,1,Oe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Pe,qe,null));else if(x.isDataTexture)if(Je.length>0){z&&Se&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let xe=0,ce=Je.length;xe<ce;xe++)Ae=Je[xe],z?we&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,qe,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Oe,Ae.width,Ae.height,0,Pe,qe,Ae.data);x.generateMipmaps=!1}else z?(Se&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height),we&&Ce(x,_e,Pe,qe)):t.texImage2D(n.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Pe,qe,_e.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){z&&Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,Je[0].width,Je[0].height,_e.depth);for(let xe=0,ce=Je.length;xe<ce;xe++)if(Ae=Je[xe],x.format!==xn)if(Pe!==null)if(z){if(we)if(x.layerUpdates.size>0){let ke=au(Ae.width,Ae.height,x.format,x.type);for(let Ye of x.layerUpdates){let ht=Ae.data.subarray(Ye*ke/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*ke/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,Ye,Ae.width,Ae.height,1,Pe,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,_e.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Oe,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,Ae.width,Ae.height,_e.depth,Pe,qe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Oe,Ae.width,Ae.height,_e.depth,0,Pe,qe,Ae.data)}else{z&&Se&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let xe=0,ce=Je.length;xe<ce;xe++)Ae=Je[xe],x.format!==xn?Pe!==null?z?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Oe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?we&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Ae.width,Ae.height,Pe,qe,Ae.data):t.texImage2D(n.TEXTURE_2D,xe,Oe,Ae.width,Ae.height,0,Pe,qe,Ae.data)}else if(x.isDataArrayTexture)if(z){if(Se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,_e.width,_e.height,_e.depth),we)if(x.layerUpdates.size>0){let xe=au(_e.width,_e.height,x.format,x.type);for(let ce of x.layerUpdates){let ke=_e.data.subarray(ce*xe/_e.data.BYTES_PER_ELEMENT,(ce+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ce,_e.width,_e.height,1,Pe,qe,ke)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,qe,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Pe,qe,_e.data);else if(x.isData3DTexture)z?(Se&&t.texStorage3D(n.TEXTURE_3D,Ue,Oe,_e.width,_e.height,_e.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,qe,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Pe,qe,_e.data);else if(x.isFramebufferTexture){if(Se)if(z)t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height);else{let xe=_e.width,ce=_e.height;for(let ke=0;ke<Ue;ke++)t.texImage2D(n.TEXTURE_2D,ke,Oe,xe,ce,0,Pe,qe,null),xe>>=1,ce>>=1}}else if(Je.length>0){if(z&&Se){let xe=Te(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,xe.width,xe.height)}for(let xe=0,ce=Je.length;xe<ce;xe++)Ae=Je[xe],z?we&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Pe,qe,Ae):t.texImage2D(n.TEXTURE_2D,xe,Oe,Pe,qe,Ae);x.generateMipmaps=!1}else if(z){if(Se){let xe=Te(_e);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,xe.width,xe.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,qe,_e)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Pe,qe,_e);m(x)&&p(ee),Ie.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function U(E,x,W){if(x.image.length!==6)return;let ee=de(E,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+W);let se=i.get(le);if(le.version!==se.__version||ee===!0){t.activeTexture(n.TEXTURE0+W);let Ie=nt.getPrimaries(nt.workingColorSpace),Me=x.colorSpace===ui?null:nt.getPrimaries(x.colorSpace),De=x.colorSpace===ui||Ie===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Fe=x.isCompressedTexture||x.image[0].isCompressedTexture,_e=x.image[0]&&x.image[0].isDataTexture,Pe=[];for(let ce=0;ce<6;ce++)!Fe&&!_e?Pe[ce]=y(x.image[ce],!0,s.maxCubemapSize):Pe[ce]=_e?x.image[ce].image:x.image[ce],Pe[ce]=Be(x,Pe[ce]);let qe=Pe[0],Oe=r.convert(x.format,x.colorSpace),Ae=r.convert(x.type),Je=v(x.internalFormat,Oe,Ae,x.colorSpace),z=x.isVideoTexture!==!0,Se=se.__version===void 0||ee===!0,we=le.dataReady,Ue=P(x,qe);Z(n.TEXTURE_CUBE_MAP,x);let xe;if(Fe){z&&Se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Je,qe.width,qe.height);for(let ce=0;ce<6;ce++){xe=Pe[ce].mipmaps;for(let ke=0;ke<xe.length;ke++){let Ye=xe[ke];x.format!==xn?Oe!==null?z?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,0,0,Ye.width,Ye.height,Oe,Ae,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke,Je,Ye.width,Ye.height,0,Oe,Ae,Ye.data)}}}else{if(xe=x.mipmaps,z&&Se){xe.length>0&&Ue++;let ce=Te(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Je,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(_e){z?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe[ce].width,Pe[ce].height,Oe,Ae,Pe[ce].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Pe[ce].width,Pe[ce].height,0,Oe,Ae,Pe[ce].data);for(let ke=0;ke<xe.length;ke++){let ht=xe[ke].image[ce].image;z?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,ht.width,ht.height,Oe,Ae,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Je,ht.width,ht.height,0,Oe,Ae,ht.data)}}else{z?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Oe,Ae,Pe[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Je,Oe,Ae,Pe[ce]);for(let ke=0;ke<xe.length;ke++){let Ye=xe[ke];z?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,0,0,Oe,Ae,Ye.image[ce]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ke+1,Je,Oe,Ae,Ye.image[ce])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),se.__version=le.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ne(E,x,W,ee,le,se){let Ie=r.convert(W.format,W.colorSpace),Me=r.convert(W.type),De=v(W.internalFormat,Ie,Me,W.colorSpace),Fe=i.get(x),_e=i.get(W);if(_e.__renderTarget=x,!Fe.__hasExternalTextures){let Pe=Math.max(1,x.width>>se),qe=Math.max(1,x.height>>se);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,se,De,Pe,qe,x.depth,0,Ie,Me,null):t.texImage2D(le,se,De,Pe,qe,0,Ie,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,le,_e.__webglTexture,0,ue(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,le,_e.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(E,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let ee=x.depthTexture,le=ee&&ee.isDepthTexture?ee.type:null,se=_(x.stencilBuffer,le),Ie=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=ue(x);fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,se,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ie,n.RENDERBUFFER,E)}else{let ee=x.textures;for(let le=0;le<ee.length;le++){let se=ee[le],Ie=r.convert(se.format,se.colorSpace),Me=r.convert(se.type),De=v(se.internalFormat,Ie,Me,se.colorSpace),Fe=ue(x);W&&fe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,De,x.width,x.height):fe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,De,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,De,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ee=i.get(x.depthTexture);ee.__renderTarget=x,(!ee.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);let le=ee.__webglTexture,se=ue(x);if(x.depthTexture.format===Xs)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===hr)fe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function O(E){let x=i.get(E),W=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let ee=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ee){let le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ee.removeEventListener("dispose",le)};ee.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=ee}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let ee=E.texture.mipmaps;ee&&ee.length>0?pe(x.__webglFramebuffer[0],E):pe(x.__webglFramebuffer,E)}else if(W){x.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ee]),x.__webglDepthbuffer[ee]===void 0)x.__webglDepthbuffer[ee]=n.createRenderbuffer(),he(x.__webglDepthbuffer[ee],E,!1);else{let le=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,se)}}else{let ee=E.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),he(x.__webglDepthbuffer,E,!1);else{let le=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Y(E,x,W){let ee=i.get(E);x!==void 0&&ne(ee.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&O(E)}function A(E){let x=E.texture,W=i.get(E),ee=i.get(x);E.addEventListener("dispose",L);let le=E.textures,se=E.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=x.version,a.memory.textures++),se){W.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[Me]=[];for(let De=0;De<x.mipmaps.length;De++)W.__webglFramebuffer[Me][De]=n.createFramebuffer()}else W.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let Me=0;Me<x.mipmaps.length;Me++)W.__webglFramebuffer[Me]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Ie)for(let Me=0,De=le.length;Me<De;Me++){let Fe=i.get(le[Me]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&fe(E)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Me=0;Me<le.length;Me++){let De=le[Me];W.__webglColorRenderbuffer[Me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[Me]);let Fe=r.convert(De.format,De.colorSpace),_e=r.convert(De.type),Pe=v(De.internalFormat,Fe,_e,De.colorSpace,E.isXRRenderTarget===!0),qe=ue(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Pe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Me,n.RENDERBUFFER,W.__webglColorRenderbuffer[Me])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),he(W.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Z(n.TEXTURE_CUBE_MAP,x);for(let Me=0;Me<6;Me++)if(x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ne(W.__webglFramebuffer[Me][De],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,De);else ne(W.__webglFramebuffer[Me],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Me=0,De=le.length;Me<De;Me++){let Fe=le[Me],_e=i.get(Fe),Pe=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,_e.__webglTexture),Z(Pe,Fe),ne(W.__webglFramebuffer,E,Fe,n.COLOR_ATTACHMENT0+Me,Pe,0),m(Fe)&&p(Pe)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Me=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Me,ee.__webglTexture),Z(Me,x),x.mipmaps&&x.mipmaps.length>0)for(let De=0;De<x.mipmaps.length;De++)ne(W.__webglFramebuffer[De],E,x,n.COLOR_ATTACHMENT0,Me,De);else ne(W.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,Me,0);m(x)&&p(Me),t.unbindTexture()}E.depthBuffer&&O(E)}function J(E){let x=E.textures;for(let W=0,ee=x.length;W<ee;W++){let le=x[W];if(m(le)){let se=T(E),Ie=i.get(le).__webglTexture;t.bindTexture(se,Ie),p(se),t.unbindTexture()}}}let H=[],ie=[];function re(E){if(E.samples>0){if(fe(E)===!1){let x=E.textures,W=E.width,ee=E.height,le=n.COLOR_BUFFER_BIT,se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ie=i.get(E),Me=x.length>1;if(Me)for(let Fe=0;Fe<x.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let De=E.texture.mipmaps;De&&De.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Fe=0;Fe<x.length;Fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),Me){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);let _e=i.get(x[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,W,ee,0,0,W,ee,le,n.NEAREST),l===!0&&(H.length=0,ie.length=0,H.push(n.COLOR_ATTACHMENT0+Fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(H.push(se),ie.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ie)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Me)for(let Fe=0;Fe<x.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Ie.__webglColorRenderbuffer[Fe]);let _e=i.get(x[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ue(E){return Math.min(s.maxSamples,E.samples)}function fe(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ge(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Be(E,x){let W=E.colorSpace,ee=E.format,le=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||W!==ts&&W!==ui&&(nt.getTransfer(W)===at?(ee!==xn||le!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=G,this.setTexture2D=K,this.setTexture2DArray=R,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=Y,this.setupRenderTarget=A,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=fe}function cb(n,e){function t(i,s=ui){let r,a=nt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Wh)return n.SHORT;if(i===or)return n.UNSIGNED_SHORT;if(i===Cl)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===lr)return n.HALF_FLOAT;if(i===Yh)return n.ALPHA;if(i===$h)return n.RGB;if(i===xn)return n.RGBA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===hr)return n.DEPTH_STENCIL;if(i===jh)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===Zh)return n.RG;if(i===Ll)return n.RG_INTEGER;if(i===Dl)return n.RGBA_INTEGER;if(i===La||i===Da||i===Ua||i===Na)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Nl||i===Fl||i===kl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Bl||i===zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Bl)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hl||i===Vl||i===Gl||i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===jl||i===Zl||i===Jl||i===Kl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Hl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$l)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Kl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tc||i===nc||i===ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===tc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sc||i===rc||i===ac||i===oc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===sc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function fb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,nu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),v=T.envMap,_=T.envMapRotation;v&&(m.envMap.value=v,ps.copy(_),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(db.makeRotationFromEuler(ps)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function pb(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,v){let _=v.program;i.uniformBlockBinding(T,_)}function c(T,v){let _=s[T.id];_===void 0&&(g(T),_=h(T),s[T.id]=_,T.addEventListener("dispose",m));let P=v.program;i.updateUBOMapping(T,P);let C=e.render.frame;r[T.id]!==C&&(u(T),r[T.id]=C)}function h(T){let v=d();T.__bindingPointIndex=v;let _=n.createBuffer(),P=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){let v=s[T.id],_=T.uniforms,P=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,L=_.length;C<L;C++){let N=Array.isArray(_[C])?_[C]:[_[C]];for(let w=0,b=N.length;w<b;w++){let I=N[w];if(f(I,C,w,P)===!0){let G=I.__offset,j=Array.isArray(I.value)?I.value:[I.value],X=0;for(let K=0;K<j.length;K++){let R=j[K],D=y(R);typeof R=="number"||typeof R=="boolean"?(I.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,G+X,I.__data)):R.isMatrix3?(I.__data[0]=R.elements[0],I.__data[1]=R.elements[1],I.__data[2]=R.elements[2],I.__data[3]=0,I.__data[4]=R.elements[3],I.__data[5]=R.elements[4],I.__data[6]=R.elements[5],I.__data[7]=0,I.__data[8]=R.elements[6],I.__data[9]=R.elements[7],I.__data[10]=R.elements[8],I.__data[11]=0):(R.toArray(I.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,v,_,P){let C=T.value,L=v+"_"+_;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{let N=P[L];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[L]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(T){let v=T.uniforms,_=0,P=16;for(let L=0,N=v.length;L<N;L++){let w=Array.isArray(v[L])?v[L]:[v[L]];for(let b=0,I=w.length;b<I;b++){let G=w[b],j=Array.isArray(G.value)?G.value:[G.value];for(let X=0,K=j.length;X<K;X++){let R=j[X],D=y(R),F=_%P,V=F%D.boundary,ae=F+V;_+=V,ae!==0&&P-ae<D.storage&&(_+=P-ae),G.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=D.storage}}}let C=_%P;return C>0&&(_+=P-C),T.__size=_,T.__cache={},this}function y(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){let v=T.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var V0,G0,W0,q0,X0,Y0,$0,j0,Z0,J0,K0,Q0,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,dy,fy,py,my,gy,yy,vy,_y,xy,by,My,Sy,wy,Ey,Ty,Ay,Cy,Ry,Py,Iy,Ly,Dy,Uy,Ny,Fy,ky,Oy,By,zy,Hy,Vy,Gy,Wy,qy,Xy,Yy,$y,jy,Zy,Jy,Ky,Qy,ev,tv,nv,iv,sv,rv,av,ov,lv,cv,hv,uv,dv,fv,pv,mv,gv,yv,vv,_v,xv,bv,Mv,Sv,wv,Ev,Tv,Av,Cv,Rv,Pv,Iv,Lv,Dv,Uv,Nv,Fv,kv,Ov,Bv,zv,Hv,Vv,Gv,Wv,qv,Xv,Yv,$v,jv,Zv,Jv,Kv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,y_,v_,__,x_,Qe,Ee,Yn,lc,fs,b_,dr,dp,gs,lu,fp,cu,hu,uu,du,ms,ur,pp,C_,pr,Fp,vp,kp,Op,Bp,_p,xp,bp,Mp,Sp,pu,mu,gu,fu,fr,Ex,Tx,Tp,hc,Nx,Fx,Ox,Xx,vu,_u,Qx,ib,sb,ab,hb,ub,xu,bu,ps,db,mr,Oa=Cs(()=>{ou();ou();V0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,j0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ty=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ny=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ry=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ay=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ly=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,uy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,py=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,my=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vy="gl_FragColor = linearToOutputTexel( gl_FragColor );",_y=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,by=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,My=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ay=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Py=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ly=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Oy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,By=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,wv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ev=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ov=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Hv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,d_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,__=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:V0,alphahash_pars_fragment:G0,alphamap_fragment:W0,alphamap_pars_fragment:q0,alphatest_fragment:X0,alphatest_pars_fragment:Y0,aomap_fragment:$0,aomap_pars_fragment:j0,batching_pars_vertex:Z0,batching_vertex:J0,begin_vertex:K0,beginnormal_vertex:Q0,bsdfs:ey,iridescence_fragment:ty,bumpmap_pars_fragment:ny,clipping_planes_fragment:iy,clipping_planes_pars_fragment:sy,clipping_planes_pars_vertex:ry,clipping_planes_vertex:ay,color_fragment:oy,color_pars_fragment:ly,color_pars_vertex:cy,color_vertex:hy,common:uy,cube_uv_reflection_fragment:dy,defaultnormal_vertex:fy,displacementmap_pars_vertex:py,displacementmap_vertex:my,emissivemap_fragment:gy,emissivemap_pars_fragment:yy,colorspace_fragment:vy,colorspace_pars_fragment:_y,envmap_fragment:xy,envmap_common_pars_fragment:by,envmap_pars_fragment:My,envmap_pars_vertex:Sy,envmap_physical_pars_fragment:Uy,envmap_vertex:wy,fog_vertex:Ey,fog_pars_vertex:Ty,fog_fragment:Ay,fog_pars_fragment:Cy,gradientmap_pars_fragment:Ry,lightmap_pars_fragment:Py,lights_lambert_fragment:Iy,lights_lambert_pars_fragment:Ly,lights_pars_begin:Dy,lights_toon_fragment:Ny,lights_toon_pars_fragment:Fy,lights_phong_fragment:ky,lights_phong_pars_fragment:Oy,lights_physical_fragment:By,lights_physical_pars_fragment:zy,lights_fragment_begin:Hy,lights_fragment_maps:Vy,lights_fragment_end:Gy,logdepthbuf_fragment:Wy,logdepthbuf_pars_fragment:qy,logdepthbuf_pars_vertex:Xy,logdepthbuf_vertex:Yy,map_fragment:$y,map_pars_fragment:jy,map_particle_fragment:Zy,map_particle_pars_fragment:Jy,metalnessmap_fragment:Ky,metalnessmap_pars_fragment:Qy,morphinstance_vertex:ev,morphcolor_vertex:tv,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:sv,normal_fragment_begin:rv,normal_fragment_maps:av,normal_pars_fragment:ov,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:hv,clearcoat_normal_fragment_begin:uv,clearcoat_normal_fragment_maps:dv,clearcoat_pars_fragment:fv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:yv,project_vertex:vv,dithering_fragment:_v,dithering_pars_fragment:xv,roughnessmap_fragment:bv,roughnessmap_pars_fragment:Mv,shadowmap_pars_fragment:Sv,shadowmap_pars_vertex:wv,shadowmap_vertex:Ev,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:Cv,skinning_vertex:Rv,skinnormal_vertex:Pv,specularmap_fragment:Iv,specularmap_pars_fragment:Lv,tonemapping_fragment:Dv,tonemapping_pars_fragment:Uv,transmission_fragment:Nv,transmission_pars_fragment:Fv,uv_pars_fragment:kv,uv_pars_vertex:Ov,uv_vertex:Bv,worldpos_vertex:zv,background_vert:Hv,background_frag:Vv,backgroundCube_vert:Gv,backgroundCube_frag:Wv,cube_vert:qv,cube_frag:Xv,depth_vert:Yv,depth_frag:$v,distanceRGBA_vert:jv,distanceRGBA_frag:Zv,equirect_vert:Jv,equirect_frag:Kv,linedashed_vert:Qv,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:a_,meshnormal_vert:o_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:y_,shadow_frag:v_,sprite_vert:__,sprite_frag:x_},Ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Yn={basic:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Gt([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Gt([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Gt([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Gt([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Gt([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Gt([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Gt([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Gt([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Gt([Ee.common,Ee.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Gt([Ee.lights,Ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Yn.physical={uniforms:Gt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};lc={r:0,b:0,g:0},fs=new In,b_=new bt;dr=4,dp=[.125,.215,.35,.446,.526,.582],gs=20,lu=new os,fp=new $e,cu=null,hu=0,uu=0,du=!1,ms=(1+Math.sqrt(5))/2,ur=1/ms,pp=[new B(-ms,ur,0),new B(ms,ur,0),new B(-ur,0,ms),new B(ur,0,ms),new B(0,ms,-ur),new B(0,ms,ur),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],C_=new B,pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=C_}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:lr,format:xn,colorSpace:ts,depthBuffer:!1},s=mp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=P_(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,lu)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(fp),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new li({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new pt(new Ci,y),p=!1,T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,p=!0):(y.color.copy(fp),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let P=this._cubeSize;cc(s,_*P,v>2?P:0,P,P),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===cs||e.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;cc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,lu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pp[(s-r-1)%pp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):gs;m>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);let p=[],T=0;for(let L=0;L<gs;++L){let N=L/y,w=Math.exp(-N*N/2);p.push(w),L===0?T+=w:L<m&&(T+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/T;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let _=this._sizeLods[s],P=3*_*(s>v-dr?s-v+dr:0),C=4*(this._cubeSize-_);cc(t,P,C,3*_,2*_),l.setRenderTarget(t),l.render(d,lu)}};Fp=new Vt,vp=new la(1,1),kp=new na,Op=new Jo,Bp=new aa,_p=[],xp=[],bp=new Float32Array(16),Mp=new Float32Array(9),Sp=new Float32Array(4);pu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ix(t.type)}},mu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sx(t.type)}},gu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;fr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);wx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};Ex=37297,Tx=0;Tp=new je;hc=new B;Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;Fx=new Map;Ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Xx=0,vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new _u(e),t.set(e,i)),i}},_u=class{constructor(e){this.id=Xx++,this.code=e,this.usedTimes=0}};Qx=0;ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;ab={[yl]:vl,[_l]:Ml,[xl]:Sl,[es]:bl,[vl]:yl,[Ml]:_l,[Sl]:xl,[bl]:es};hb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ub=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:hb,fragmentShader:ub,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bu=class extends zn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new xu,p={},T=t.getContextAttributes(),v=null,_=null,P=[],C=[],L=new ye,N=null,w=new Ht;w.viewport=new ft;let b=new Ht;b.viewport=new ft;let I=[w,b],G=new gl,j=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(M){let U=P[M];return U===void 0&&(U=new Qs,P[M]=U),U.getTargetRaySpace()},this.getControllerGrip=function(M){let U=P[M];return U===void 0&&(U=new Qs,P[M]=U),U.getGripSpace()},this.getHand=function(M){let U=P[M];return U===void 0&&(U=new Qs,P[M]=U),U.getHandSpace()};function K(M){let U=C.indexOf(M.inputSource);if(U===-1)return;let ne=P[U];ne!==void 0&&(ne.update(M.inputSource,M.frame,c||a),ne.dispatchEvent({type:M.type,data:M.inputSource}))}function R(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",D);for(let M=0;M<P.length;M++){let U=C[M];U!==null&&(C[M]=null,P[M].disconnect(U))}j=null,X=null,m.reset();for(let M in p)delete p[M];e.setRenderTarget(v),f=null,u=null,d=null,s=null,_=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(M){r=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(M){o=M,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(M){c=M},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(M){if(s=M,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",R),s.addEventListener("inputsourceschange",D),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,he=null,pe=null;T.depth&&(pe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=T.stencil?hr:Xs,he=T.stencil?cr:Ni);let O={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(O),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Hn(u.textureWidth,u.textureHeight,{format:xn,type:Ln,depthTexture:new la(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let ne={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function D(M){for(let U=0;U<M.removed.length;U++){let ne=M.removed[U],he=C.indexOf(ne);he>=0&&(C[he]=null,P[he].disconnect(ne))}for(let U=0;U<M.added.length;U++){let ne=M.added[U],he=C.indexOf(ne);if(he===-1){for(let O=0;O<P.length;O++)if(O>=C.length){C.push(ne),he=O;break}else if(C[O]===null){C[O]=ne,he=O;break}if(he===-1)break}let pe=P[he];pe&&pe.connect(ne)}}let F=new B,V=new B;function ae(M,U,ne){F.setFromMatrixPosition(U.matrixWorld),V.setFromMatrixPosition(ne.matrixWorld);let he=F.distanceTo(V),pe=U.projectionMatrix.elements,O=ne.projectionMatrix.elements,Y=pe[14]/(pe[10]-1),A=pe[14]/(pe[10]+1),J=(pe[9]+1)/pe[5],H=(pe[9]-1)/pe[5],ie=(pe[8]-1)/pe[0],re=(O[8]+1)/O[0],ue=Y*ie,fe=Y*re,ge=he/(-ie+re),Be=ge*-ie;if(U.matrixWorld.decompose(M.position,M.quaternion,M.scale),M.translateX(Be),M.translateZ(ge),M.matrixWorld.compose(M.position,M.quaternion,M.scale),M.matrixWorldInverse.copy(M.matrixWorld).invert(),pe[10]===-1)M.projectionMatrix.copy(U.projectionMatrix),M.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let Te=Y+ge,E=A+ge,x=ue-Be,W=fe+(he-Be),ee=J*A/E*Te,le=H*A/E*Te;M.projectionMatrix.makePerspective(x,W,ee,le,Te,E),M.projectionMatrixInverse.copy(M.projectionMatrix).invert()}}function oe(M,U){U===null?M.matrixWorld.copy(M.matrix):M.matrixWorld.multiplyMatrices(U.matrixWorld,M.matrix),M.matrixWorldInverse.copy(M.matrixWorld).invert()}this.updateCamera=function(M){if(s===null)return;let U=M.near,ne=M.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(ne=m.depthFar)),G.near=b.near=w.near=U,G.far=b.far=w.far=ne,(j!==G.near||X!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),j=G.near,X=G.far),G.layers.mask=M.layers.mask|6,w.layers.mask=G.layers.mask&3,b.layers.mask=G.layers.mask&5;let he=M.parent,pe=G.cameras;oe(G,he);for(let O=0;O<pe.length;O++)oe(pe[O],he);pe.length===2?ae(G,w,b):G.projectionMatrix.copy(w.projectionMatrix),Z(M,G,he)};function Z(M,U,ne){ne===null?M.matrix.copy(U.matrixWorld):(M.matrix.copy(ne.matrixWorld),M.matrix.invert(),M.matrix.multiply(U.matrixWorld)),M.matrix.decompose(M.position,M.quaternion,M.scale),M.updateMatrixWorld(!0),M.projectionMatrix.copy(U.projectionMatrix),M.projectionMatrixInverse.copy(U.projectionMatrixInverse),M.isPerspectiveCamera&&(M.fov=Ys*2*Math.atan(1/M.projectionMatrix.elements[5]),M.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(M){l=M,u!==null&&(u.fixedFoveation=M),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=M)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(M){return p[M]};let de=null;function ve(M,U){if(h=U.getViewerPose(c||a),g=U,h!==null){let ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let he=!1;ne.length!==G.cameras.length&&(G.cameras.length=0,he=!0);for(let A=0;A<ne.length;A++){let J=ne[A],H=null;if(f!==null)H=f.getViewport(J);else{let re=d.getViewSubImage(u,J);H=re.viewport,A===0&&(e.setRenderTargetTextures(_,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(_))}let ie=I[A];ie===void 0&&(ie=new Ht,ie.layers.enable(A),ie.viewport=new ft,I[A]=ie),ie.matrix.fromArray(J.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(J.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(H.x,H.y,H.width,H.height),A===0&&(G.matrix.copy(ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),he===!0&&G.cameras.push(ie)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let A=d.getDepthInformation(ne[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(pe&&pe.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let A=0;A<ne.length;A++){let J=ne[A].camera;if(J){let H=p[J];H||(H=new ca,p[J]=H);let ie=d.getCameraImage(J);H.sourceTexture=ie}}}}for(let ne=0;ne<P.length;ne++){let he=C[ne],pe=P[ne];he!==null&&pe!==void 0&&pe.update(he,U,c||a)}de&&de(M,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}let Ce=new Np;Ce.setAnimationLoop(ve),this.setAnimationLoop=function(M){de=M},this.dispose=function(){}}},ps=new In,db=new bt;mr=class{constructor(e={}){let{canvas:t=ip(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,T=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,P=!1;this._outputColorSpace=It;let C=0,L=0,N=null,w=-1,b=null,I=new ft,G=new ft,j=null,X=new $e(0),K=0,R=t.width,D=t.height,F=1,V=null,ae=null,oe=new ft(0,0,R,D),Z=new ft(0,0,R,D),de=!1,ve=new er,Ce=!1,M=!1,U=new bt,ne=new B,he=new ft,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},O=!1;function Y(){return N===null?F:1}let A=i;function J(S,q){return t.getContext(S,q)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),A===null){let q="webgl2";if(A=J(q,S),A===null)throw J(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let H,ie,re,ue,fe,ge,Be,Te,E,x,W,ee,le,se,Ie,Me,De,Fe,_e,Pe,qe,Oe,Ae,Je;function z(){H=new L_(A),H.init(),Oe=new cb(A,H),ie=new E_(A,H,e,Oe),re=new ob(A,H),ie.reversedDepthBuffer&&u&&re.buffers.depth.setReversed(!0),ue=new N_(A),fe=new $x,ge=new lb(A,H,re,fe,ie,Oe,ue),Be=new A_(_),Te=new I_(_),E=new H0(A),Ae=new S_(A,E),x=new D_(A,E,ue,Ae),W=new k_(A,x,E,ue),_e=new F_(A,ie,ge),Me=new T_(fe),ee=new Yx(_,Be,Te,H,ie,Ae,Me),le=new fb(_,fe),se=new Zx,Ie=new nb(H),Fe=new M_(_,Be,Te,re,W,f,l),De=new rb(_,W,ie),Je=new pb(A,ue,ie,re),Pe=new w_(A,H,ue),qe=new U_(A,H,ue),ue.programs=ee.programs,_.capabilities=ie,_.extensions=H,_.properties=fe,_.renderLists=se,_.shadowMap=De,_.state=re,_.info=ue}z();let Se=new bu(_,A);this.xr=Se,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let S=H.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=H.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(S){S!==void 0&&(F=S,this.setSize(R,D,!1))},this.getSize=function(S){return S.set(R,D)},this.setSize=function(S,q,Q=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=S,D=q,t.width=Math.floor(S*F),t.height=Math.floor(q*F),Q===!0&&(t.style.width=S+"px",t.style.height=q+"px"),this.setViewport(0,0,S,q)},this.getDrawingBufferSize=function(S){return S.set(R*F,D*F).floor()},this.setDrawingBufferSize=function(S,q,Q){R=S,D=q,F=Q,t.width=Math.floor(S*Q),t.height=Math.floor(q*Q),this.setViewport(0,0,S,q)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(oe)},this.setViewport=function(S,q,Q,te){S.isVector4?oe.set(S.x,S.y,S.z,S.w):oe.set(S,q,Q,te),re.viewport(I.copy(oe).multiplyScalar(F).round())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,q,Q,te){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,q,Q,te),re.scissor(G.copy(Z).multiplyScalar(F).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){re.setScissorTest(de=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){ae=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(S=!0,q=!0,Q=!0){let te=0;if(S){let $=!1;if(N!==null){let be=N.texture.format;$=be===Dl||be===Ll||be===Il}if($){let be=N.texture.type,Re=be===Ln||be===Ni||be===or||be===cr||be===Rl||be===Pl,Ne=Fe.getClearColor(),Le=Fe.getClearAlpha(),We=Ne.r,Xe=Ne.g,He=Ne.b;Re?(g[0]=We,g[1]=Xe,g[2]=He,g[3]=Le,A.clearBufferuiv(A.COLOR,0,g)):(y[0]=We,y[1]=Xe,y[2]=He,y[3]=Le,A.clearBufferiv(A.COLOR,0,y))}else te|=A.COLOR_BUFFER_BIT}q&&(te|=A.DEPTH_BUFFER_BIT),Q&&(te|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),Fe.dispose(),se.dispose(),Ie.dispose(),fe.dispose(),Be.dispose(),Te.dispose(),W.dispose(),Ae.dispose(),Je.dispose(),ee.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",On),Se.removeEventListener("sessionend",bd),qi.stop()};function we(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=ue.autoReset,q=De.enabled,Q=De.autoUpdate,te=De.needsUpdate,$=De.type;z(),ue.autoReset=S,De.enabled=q,De.autoUpdate=Q,De.needsUpdate=te,De.type=$}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ce(S){let q=S.target;q.removeEventListener("dispose",ce),ke(q)}function ke(S){Ye(S),fe.remove(S)}function Ye(S){let q=fe.get(S).programs;q!==void 0&&(q.forEach(function(Q){ee.releaseProgram(Q)}),S.isShaderMaterial&&ee.releaseShaderCache(S))}this.renderBufferDirect=function(S,q,Q,te,$,be){q===null&&(q=pe);let Re=$.isMesh&&$.matrixWorld.determinant()<0,Ne=ag(S,q,Q,te,$);re.setMaterial(te,Re);let Le=Q.index,We=1;if(te.wireframe===!0){if(Le=x.getWireframeAttribute(Q),Le===void 0)return;We=2}let Xe=Q.drawRange,He=Q.attributes.position,tt=Xe.start*We,ot=(Xe.start+Xe.count)*We;be!==null&&(tt=Math.max(tt,be.start*We),ot=Math.min(ot,(be.start+be.count)*We)),Le!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Le.count)):He!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,He.count));let St=ot-tt;if(St<0||St===1/0)return;Ae.setup($,te,Ne,Q,Le);let ut,ct=Pe;if(Le!==null&&(ut=E.get(Le),ct=qe,ct.setIndex(ut)),$.isMesh)te.wireframe===!0?(re.setLineWidth(te.wireframeLinewidth*Y()),ct.setMode(A.LINES)):ct.setMode(A.TRIANGLES);else if($.isLine){let Ge=te.linewidth;Ge===void 0&&(Ge=1),re.setLineWidth(Ge*Y()),$.isLineSegments?ct.setMode(A.LINES):$.isLineLoop?ct.setMode(A.LINE_LOOP):ct.setMode(A.LINE_STRIP)}else $.isPoints?ct.setMode(A.POINTS):$.isSprite&&ct.setMode(A.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))ct.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Ge=$._multiDrawStarts,yt=$._multiDrawCounts,st=$._multiDrawCount,sn=Le?E.get(Le).bytesPerElement:1,As=fe.get(te).currentProgram.getUniforms();for(let rn=0;rn<st;rn++)As.setValue(A,"_gl_DrawID",rn),ct.render(Ge[rn]/sn,yt[rn])}else if($.isInstancedMesh)ct.renderInstances(tt,St,$.count);else if(Q.isInstancedBufferGeometry){let Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,yt=Math.min(Q.instanceCount,Ge);ct.renderInstances(tt,St,yt)}else ct.render(tt,St)};function ht(S,q,Q){S.transparent===!0&&S.side===qn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,oo(S,q,Q),S.side=oi,S.needsUpdate=!0,oo(S,q,Q),S.side=qn):oo(S,q,Q)}this.compile=function(S,q,Q=null){Q===null&&(Q=S),p=Ie.get(Q),p.init(q),v.push(p),Q.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),S!==Q&&S.traverseVisible(function($){$.isLight&&$.layers.test(q.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();let te=new Set;return S.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let be=$.material;if(be)if(Array.isArray(be))for(let Re=0;Re<be.length;Re++){let Ne=be[Re];ht(Ne,Q,$),te.add(Ne)}else ht(be,Q,$),te.add(be)}),p=v.pop(),te},this.compileAsync=function(S,q,Q=null){let te=this.compile(S,q,Q);return new Promise($=>{function be(){if(te.forEach(function(Re){fe.get(Re).currentProgram.isReady()&&te.delete(Re)}),te.size===0){$(S);return}setTimeout(be,10)}H.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function Qn(S){rt&&rt(S)}function On(){qi.stop()}function bd(){qi.start()}let qi=new Np;qi.setAnimationLoop(Qn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){rt=S,Se.setAnimationLoop(S),S===null?qi.stop():qi.start()},Se.addEventListener("sessionstart",On),Se.addEventListener("sessionend",bd),this.render=function(S,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(q),q=Se.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,q,N),p=Ie.get(S,v.length),p.init(q),v.push(p),U.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ve.setFromProjectionMatrix(U,Pn,q.reversedDepth),M=this.localClippingEnabled,Ce=Me.init(this.clippingPlanes,M),m=se.get(S,T.length),m.init(),T.push(m),Se.enabled===!0&&Se.isPresenting===!0){let be=_.xr.getDepthSensingMesh();be!==null&&Yc(be,q,-1/0,_.sortObjects)}Yc(S,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(V,ae),O=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,O&&Fe.addToRenderList(m,S),this.info.render.frame++,Ce===!0&&Me.beginShadows();let Q=p.state.shadowsArray;De.render(Q,S,q),Ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();let te=m.opaque,$=m.transmissive;if(p.setupLights(),q.isArrayCamera){let be=q.cameras;if($.length>0)for(let Re=0,Ne=be.length;Re<Ne;Re++){let Le=be[Re];Sd(te,$,S,Le)}O&&Fe.render(S);for(let Re=0,Ne=be.length;Re<Ne;Re++){let Le=be[Re];Md(m,S,Le,Le.viewport)}}else $.length>0&&Sd(te,$,S,q),O&&Fe.render(S),Md(m,S,q);N!==null&&L===0&&(ge.updateMultisampleRenderTarget(N),ge.updateRenderTargetMipmap(N)),S.isScene===!0&&S.onAfterRender(_,S,q),Ae.resetDefaultState(),w=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],Ce===!0&&Me.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Yc(S,q,Q,te){if(S.visible===!1)return;if(S.layers.test(q.layers)){if(S.isGroup)Q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(q);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ve.intersectsSprite(S)){te&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(U);let Re=W.update(S),Ne=S.material;Ne.visible&&m.push(S,Re,Ne,Q,he.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ve.intersectsObject(S))){let Re=W.update(S),Ne=S.material;if(te&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),he.copy(S.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),he.copy(Re.boundingSphere.center)),he.applyMatrix4(S.matrixWorld).applyMatrix4(U)),Array.isArray(Ne)){let Le=Re.groups;for(let We=0,Xe=Le.length;We<Xe;We++){let He=Le[We],tt=Ne[He.materialIndex];tt&&tt.visible&&m.push(S,Re,tt,Q,he.z,He)}}else Ne.visible&&m.push(S,Re,Ne,Q,he.z,null)}}let be=S.children;for(let Re=0,Ne=be.length;Re<Ne;Re++)Yc(be[Re],q,Q,te)}function Md(S,q,Q,te){let $=S.opaque,be=S.transmissive,Re=S.transparent;p.setupLightsView(Q),Ce===!0&&Me.setGlobalState(_.clippingPlanes,Q),te&&re.viewport(I.copy(te)),$.length>0&&ao($,q,Q),be.length>0&&ao(be,q,Q),Re.length>0&&ao(Re,q,Q),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Sd(S,q,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new Hn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?lr:Ln,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let be=p.state.transmissionRenderTarget[te.id],Re=te.viewport||I;be.setSize(Re.z*_.transmissionResolutionScale,Re.w*_.transmissionResolutionScale);let Ne=_.getRenderTarget(),Le=_.getActiveCubeFace(),We=_.getActiveMipmapLevel();_.setRenderTarget(be),_.getClearColor(X),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),O&&Fe.render(Q);let Xe=_.toneMapping;_.toneMapping=hi;let He=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),Ce===!0&&Me.setGlobalState(_.clippingPlanes,te),ao(S,Q,te),ge.updateMultisampleRenderTarget(be),ge.updateRenderTargetMipmap(be),H.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ot=0,St=q.length;ot<St;ot++){let ut=q[ot],ct=ut.object,Ge=ut.geometry,yt=ut.material,st=ut.group;if(yt.side===qn&&ct.layers.test(te.layers)){let sn=yt.side;yt.side=Ot,yt.needsUpdate=!0,wd(ct,Q,te,Ge,yt,st),yt.side=sn,yt.needsUpdate=!0,tt=!0}}tt===!0&&(ge.updateMultisampleRenderTarget(be),ge.updateRenderTargetMipmap(be))}_.setRenderTarget(Ne,Le,We),_.setClearColor(X,K),He!==void 0&&(te.viewport=He),_.toneMapping=Xe}function ao(S,q,Q){let te=q.isScene===!0?q.overrideMaterial:null;for(let $=0,be=S.length;$<be;$++){let Re=S[$],Ne=Re.object,Le=Re.geometry,We=Re.group,Xe=Re.material;Xe.allowOverride===!0&&te!==null&&(Xe=te),Ne.layers.test(Q.layers)&&wd(Ne,q,Q,Le,Xe,We)}}function wd(S,q,Q,te,$,be){S.onBeforeRender(_,q,Q,te,$,be),S.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),$.onBeforeRender(_,q,Q,te,S,be),$.transparent===!0&&$.side===qn&&$.forceSinglePass===!1?($.side=Ot,$.needsUpdate=!0,_.renderBufferDirect(Q,q,te,$,S,be),$.side=oi,$.needsUpdate=!0,_.renderBufferDirect(Q,q,te,$,S,be),$.side=qn):_.renderBufferDirect(Q,q,te,$,S,be),S.onAfterRender(_,q,Q,te,$,be)}function oo(S,q,Q){q.isScene!==!0&&(q=pe);let te=fe.get(S),$=p.state.lights,be=p.state.shadowsArray,Re=$.state.version,Ne=ee.getParameters(S,$.state,be,q,Q),Le=ee.getProgramCacheKey(Ne),We=te.programs;te.environment=S.isMeshStandardMaterial?q.environment:null,te.fog=q.fog,te.envMap=(S.isMeshStandardMaterial?Te:Be).get(S.envMap||te.environment),te.envMapRotation=te.environment!==null&&S.envMap===null?q.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",ce),We=new Map,te.programs=We);let Xe=We.get(Le);if(Xe!==void 0){if(te.currentProgram===Xe&&te.lightsStateVersion===Re)return Td(S,Ne),Xe}else Ne.uniforms=ee.getUniforms(S),S.onBeforeCompile(Ne,_),Xe=ee.acquireProgram(Ne,Le),We.set(Le,Xe),te.uniforms=Ne.uniforms;let He=te.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=Me.uniform),Td(S,Ne),te.needsLights=lg(S),te.lightsStateVersion=Re,te.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=Xe,te.uniformsList=null,Xe}function Ed(S){if(S.uniformsList===null){let q=S.currentProgram.getUniforms();S.uniformsList=fr.seqWithValue(q.seq,S.uniforms)}return S.uniformsList}function Td(S,q){let Q=fe.get(S);Q.outputColorSpace=q.outputColorSpace,Q.batching=q.batching,Q.batchingColor=q.batchingColor,Q.instancing=q.instancing,Q.instancingColor=q.instancingColor,Q.instancingMorph=q.instancingMorph,Q.skinning=q.skinning,Q.morphTargets=q.morphTargets,Q.morphNormals=q.morphNormals,Q.morphColors=q.morphColors,Q.morphTargetsCount=q.morphTargetsCount,Q.numClippingPlanes=q.numClippingPlanes,Q.numIntersection=q.numClipIntersection,Q.vertexAlphas=q.vertexAlphas,Q.vertexTangents=q.vertexTangents,Q.toneMapping=q.toneMapping}function ag(S,q,Q,te,$){q.isScene!==!0&&(q=pe),ge.resetTextureUnits();let be=q.fog,Re=te.isMeshStandardMaterial?q.environment:null,Ne=N===null?_.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ts,Le=(te.isMeshStandardMaterial?Te:Be).get(te.envMap||Re),We=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!Q.morphAttributes.position,tt=!!Q.morphAttributes.normal,ot=!!Q.morphAttributes.color,St=hi;te.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(St=_.toneMapping);let ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ct=ut!==void 0?ut.length:0,Ge=fe.get(te),yt=p.state.lights;if(Ce===!0&&(M===!0||S!==b)){let qt=S===b&&te.id===w;Me.setState(te,S,qt)}let st=!1;te.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==yt.state.version||Ge.outputColorSpace!==Ne||$.isBatchedMesh&&Ge.batching===!1||!$.isBatchedMesh&&Ge.batching===!0||$.isBatchedMesh&&Ge.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ge.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ge.instancing===!1||!$.isInstancedMesh&&Ge.instancing===!0||$.isSkinnedMesh&&Ge.skinning===!1||!$.isSkinnedMesh&&Ge.skinning===!0||$.isInstancedMesh&&Ge.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ge.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ge.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ge.instancingMorph===!1&&$.morphTexture!==null||Ge.envMap!==Le||te.fog===!0&&Ge.fog!==be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==Me.numPlanes||Ge.numIntersection!==Me.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Xe||Ge.morphTargets!==He||Ge.morphNormals!==tt||Ge.morphColors!==ot||Ge.toneMapping!==St||Ge.morphTargetsCount!==ct)&&(st=!0):(st=!0,Ge.__version=te.version);let sn=Ge.currentProgram;st===!0&&(sn=oo(te,q,$));let As=!1,rn=!1,Nr=!1,vt=sn.getUniforms(),mn=Ge.uniforms;if(re.useProgram(sn.program)&&(As=!0,rn=!0,Nr=!0),te.id!==w&&(w=te.id,rn=!0),As||b!==S){re.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(A,"projectionMatrix",S.projectionMatrix),vt.setValue(A,"viewMatrix",S.matrixWorldInverse);let jt=vt.map.cameraPosition;jt!==void 0&&jt.setValue(A,ne.setFromMatrixPosition(S.matrixWorld)),ie.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&vt.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,rn=!0,Nr=!0)}if($.isSkinnedMesh){vt.setOptional(A,$,"bindMatrix"),vt.setOptional(A,$,"bindMatrixInverse");let qt=$.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),vt.setValue(A,"boneTexture",qt.boneTexture,ge))}$.isBatchedMesh&&(vt.setOptional(A,$,"batchingTexture"),vt.setValue(A,"batchingTexture",$._matricesTexture,ge),vt.setOptional(A,$,"batchingIdTexture"),vt.setValue(A,"batchingIdTexture",$._indirectTexture,ge),vt.setOptional(A,$,"batchingColorTexture"),$._colorsTexture!==null&&vt.setValue(A,"batchingColorTexture",$._colorsTexture,ge));let gn=Q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&_e.update($,Q,sn),(rn||Ge.receiveShadow!==$.receiveShadow)&&(Ge.receiveShadow=$.receiveShadow,vt.setValue(A,"receiveShadow",$.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(mn.envMap.value=Le,mn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),rn&&(vt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&og(mn,Nr),be&&te.fog===!0&&le.refreshFogUniforms(mn,be),le.refreshMaterialUniforms(mn,te,F,D,p.state.transmissionRenderTarget[S.id]),fr.upload(A,Ed(Ge),mn,ge)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(fr.upload(A,Ed(Ge),mn,ge),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&vt.setValue(A,"center",$.center),vt.setValue(A,"modelViewMatrix",$.modelViewMatrix),vt.setValue(A,"normalMatrix",$.normalMatrix),vt.setValue(A,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let qt=te.uniformsGroups;for(let jt=0,$c=qt.length;jt<$c;jt++){let Xi=qt[jt];Je.update(Xi,sn),Je.bind(Xi,sn)}}return sn}function og(S,q){S.ambientLightColor.needsUpdate=q,S.lightProbe.needsUpdate=q,S.directionalLights.needsUpdate=q,S.directionalLightShadows.needsUpdate=q,S.pointLights.needsUpdate=q,S.pointLightShadows.needsUpdate=q,S.spotLights.needsUpdate=q,S.spotLightShadows.needsUpdate=q,S.rectAreaLights.needsUpdate=q,S.hemisphereLights.needsUpdate=q}function lg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(S,q,Q){let te=fe.get(S);te.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),fe.get(S.texture).__webglTexture=q,fe.get(S.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,q){let Q=fe.get(S);Q.__webglFramebuffer=q,Q.__useDefaultFramebuffer=q===void 0};let cg=A.createFramebuffer();this.setRenderTarget=function(S,q=0,Q=0){N=S,C=q,L=Q;let te=!0,$=null,be=!1,Re=!1;if(S){let Le=fe.get(S);if(Le.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(A.FRAMEBUFFER,null),te=!1;else if(Le.__webglFramebuffer===void 0)ge.setupRenderTarget(S);else if(Le.__hasExternalTextures)ge.rebindTextures(S,fe.get(S.texture).__webglTexture,fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let He=S.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&fe.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(S)}}let We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Re=!0);let Xe=fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?$=Xe[q][Q]:$=Xe[q],be=!0):S.samples>0&&ge.useMultisampledRTT(S)===!1?$=fe.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[Q]:$=Xe,I.copy(S.viewport),G.copy(S.scissor),j=S.scissorTest}else I.copy(oe).multiplyScalar(F).floor(),G.copy(Z).multiplyScalar(F).floor(),j=de;if(Q!==0&&($=cg),re.bindFramebuffer(A.FRAMEBUFFER,$)&&te&&re.drawBuffers(S,$),re.viewport(I),re.scissor(G),re.setScissorTest(j),be){let Le=fe.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,Q)}else if(Re){let Le=q;for(let We=0;We<S.textures.length;We++){let Xe=fe.get(S.textures[We]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+We,Xe.__webglTexture,Q,Le)}}else if(S!==null&&Q!==0){let Le=fe.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Le.__webglTexture,Q)}w=-1},this.readRenderTargetPixels=function(S,q,Q,te,$,be,Re,Ne=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le){re.bindFramebuffer(A.FRAMEBUFFER,Le);try{let We=S.textures[Ne],Xe=We.format,He=We.type;if(!ie.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=S.width-te&&Q>=0&&Q<=S.height-$&&(S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ne),A.readPixels(q,Q,te,$,Oe.convert(Xe),Oe.convert(He),be))}finally{let We=N!==null?fe.get(N).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,q,Q,te,$,be,Re,Ne=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Re!==void 0&&(Le=Le[Re]),Le)if(q>=0&&q<=S.width-te&&Q>=0&&Q<=S.height-$){re.bindFramebuffer(A.FRAMEBUFFER,Le);let We=S.textures[Ne],Xe=We.format,He=We.type;if(!ie.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.bufferData(A.PIXEL_PACK_BUFFER,be.byteLength,A.STREAM_READ),S.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ne),A.readPixels(q,Q,te,$,Oe.convert(Xe),Oe.convert(He),0);let ot=N!==null?fe.get(N).__webglFramebuffer:null;re.bindFramebuffer(A.FRAMEBUFFER,ot);let St=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await sp(A,St,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,be),A.deleteBuffer(tt),A.deleteSync(St),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,q=null,Q=0){let te=Math.pow(2,-Q),$=Math.floor(S.image.width*te),be=Math.floor(S.image.height*te),Re=q!==null?q.x:0,Ne=q!==null?q.y:0;ge.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,Q,0,0,Re,Ne,$,be),re.unbindTexture()};let hg=A.createFramebuffer(),ug=A.createFramebuffer();this.copyTextureToTexture=function(S,q,Q=null,te=null,$=0,be=null){be===null&&($!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),be=$,$=0):be=0);let Re,Ne,Le,We,Xe,He,tt,ot,St,ut=S.isCompressedTexture?S.mipmaps[be]:S.image;if(Q!==null)Re=Q.max.x-Q.min.x,Ne=Q.max.y-Q.min.y,Le=Q.isBox3?Q.max.z-Q.min.z:1,We=Q.min.x,Xe=Q.min.y,He=Q.isBox3?Q.min.z:0;else{let gn=Math.pow(2,-$);Re=Math.floor(ut.width*gn),Ne=Math.floor(ut.height*gn),S.isDataArrayTexture?Le=ut.depth:S.isData3DTexture?Le=Math.floor(ut.depth*gn):Le=1,We=0,Xe=0,He=0}te!==null?(tt=te.x,ot=te.y,St=te.z):(tt=0,ot=0,St=0);let ct=Oe.convert(q.format),Ge=Oe.convert(q.type),yt;q.isData3DTexture?(ge.setTexture3D(q,0),yt=A.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ge.setTexture2DArray(q,0),yt=A.TEXTURE_2D_ARRAY):(ge.setTexture2D(q,0),yt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,q.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,q.unpackAlignment);let st=A.getParameter(A.UNPACK_ROW_LENGTH),sn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),As=A.getParameter(A.UNPACK_SKIP_PIXELS),rn=A.getParameter(A.UNPACK_SKIP_ROWS),Nr=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,ut.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,Xe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,He);let vt=S.isDataArrayTexture||S.isData3DTexture,mn=q.isDataArrayTexture||q.isData3DTexture;if(S.isDepthTexture){let gn=fe.get(S),qt=fe.get(q),jt=fe.get(gn.__renderTarget),$c=fe.get(qt.__renderTarget);re.bindFramebuffer(A.READ_FRAMEBUFFER,jt.__webglFramebuffer),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,$c.__webglFramebuffer);for(let Xi=0;Xi<Le;Xi++)vt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(S).__webglTexture,$,He+Xi),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fe.get(q).__webglTexture,be,St+Xi)),A.blitFramebuffer(We,Xe,Re,Ne,tt,ot,Re,Ne,A.DEPTH_BUFFER_BIT,A.NEAREST);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if($!==0||S.isRenderTargetTexture||fe.has(S)){let gn=fe.get(S),qt=fe.get(q);re.bindFramebuffer(A.READ_FRAMEBUFFER,hg),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,ug);for(let jt=0;jt<Le;jt++)vt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gn.__webglTexture,$,He+jt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,gn.__webglTexture,$),mn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,qt.__webglTexture,be,St+jt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,qt.__webglTexture,be),$!==0?A.blitFramebuffer(We,Xe,Re,Ne,tt,ot,Re,Ne,A.COLOR_BUFFER_BIT,A.NEAREST):mn?A.copyTexSubImage3D(yt,be,tt,ot,St+jt,We,Xe,Re,Ne):A.copyTexSubImage2D(yt,be,tt,ot,We,Xe,Re,Ne);re.bindFramebuffer(A.READ_FRAMEBUFFER,null),re.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else mn?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(yt,be,tt,ot,St,Re,Ne,Le,ct,Ge,ut.data):q.isCompressedArrayTexture?A.compressedTexSubImage3D(yt,be,tt,ot,St,Re,Ne,Le,ct,ut.data):A.texSubImage3D(yt,be,tt,ot,St,Re,Ne,Le,ct,Ge,ut):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,be,tt,ot,Re,Ne,ct,Ge,ut.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,be,tt,ot,ut.width,ut.height,ct,ut.data):A.texSubImage2D(A.TEXTURE_2D,be,tt,ot,Re,Ne,ct,Ge,ut);A.pixelStorei(A.UNPACK_ROW_LENGTH,st),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,sn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,As),A.pixelStorei(A.UNPACK_SKIP_ROWS,rn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Nr),be===0&&q.generateMipmaps&&A.generateMipmap(yt),re.unbindTexture()},this.initRenderTarget=function(S){fe.get(S).__webglFramebuffer===void 0&&ge.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?ge.setTextureCube(S,0):S.isData3DTexture?ge.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?ge.setTexture2DArray(S,0):ge.setTexture2D(S,0),re.unbindTexture()},this.resetState=function(){C=0,L=0,N=null,re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});function nm(n,e){let t=new Bn,i=new Bn;e.add(t),n.add(i);let s="",r=o=>{for(let l of[...o.children])l.geometry?.dispose(),l.material?.dispose(),o.remove(l)};function a(o={}){let l={...xb,...o};n.background=l.backdrop==="paper"?new $e(14604232):l.backdrop==="night"?new $e(858922):null;let c=JSON.stringify(l)+e.geometry.uuid;if(c===s)return;s=c,r(t),r(i),e.geometry.computeBoundingBox();let h=e.geometry.boundingBox,d=h.max.y,u=h.min.y;if(l.style==="pendant"){let f=new Gn({color:13018206,metalness:.8,roughness:.26}),g=new pt(new ba(.13,.035,12,48),f);g.position.set(0,d+.045,.02),t.add(g);let y={cinnabar:9185309,ink:2107426,jade:5404006}[l.cord]||9185309,m=new nr([new B(-.03,d+.15,0),new B(-.48,d+.55,-.02),new B(-.48,d+.83,-.05),new B(0,d+.93,-.06),new B(.48,d+.83,-.05),new B(.48,d+.55,-.02),new B(.03,d+.15,0)]),p=new pt(new Ma(m,80,.022,8,!1),new Gn({color:y,roughness:.9}));t.add(p)}else if(l.style==="stand"){let f=new pt(new ss(1.35,1.48,.22,80),new Gn({color:3614236,roughness:.45}));f.position.set(0,u-.25,0),i.add(f);let g=new pt(new ss(1.36,1.36,.025,80),new Gn({color:11045457,metalness:.65,roughness:.3}));g.position.set(0,u-.125,0),i.add(g);for(let y of[-.42,.42]){let m=new pt(new ss(.025,.025,.3,12),new Gn({color:11835229,metalness:.7,roughness:.3}));m.position.set(y,u-.05,0),i.add(m)}}e.userData.presentation=l}return{update:a,dispose(){r(t),r(i),e.remove(t),n.remove(i)}}}var xb,im=Cs(()=>{Oa();xb={style:"stone",backdrop:"ink",cord:"cinnabar"}});function Mb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Sb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function wb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(am),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Eb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Li.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Li.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Iu)}function Tb(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ab(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Iu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(am))}function Cb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Rb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Iu)}function Pb(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function Ib(n){this.enabled!==!1&&n.preventDefault()}function Lb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Db(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sm,Iu,am,mc,rm,bb,Ut,Qt,lt,Pu,gc,om=Cs(()=>{Oa();sm={type:"change"},Iu={type:"start"},am={type:"end"},mc=new ns,rm=new vn,bb=Math.cos(70*Fa.DEG2RAD),Ut=new B,Qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Pu=1e-6,gc=class extends Ra{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new _n,this._lastTargetPosition=new B,this._quat=new _n().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ar,this._sphericalDelta=new ar,this._scale=1,this._panOffset=new B,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new B,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Sb.bind(this),this._onPointerDown=Mb.bind(this),this._onPointerUp=wb.bind(this),this._onContextMenu=Ib.bind(this),this._onMouseWheel=Ab.bind(this),this._onKeyDown=Cb.bind(this),this._onTouchStart=Rb.bind(this),this._onTouchMove=Pb.bind(this),this._onMouseDown=Eb.bind(this),this._onMouseMove=Tb.bind(this),this._interceptControlDown=Lb.bind(this),this._interceptControlUp=Db.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sm),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ut.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(mc.origin.copy(this.object.position),mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mc.direction))<bb?this.object.lookAt(this.target):(rm.setFromNormalAndCoplanarPoint(this.object.up,this.target),mc.intersectPlane(rm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Pu||this._lastTargetPosition.distanceToSquared(this.target)>Pu?(this.dispatchEvent(sm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var lm={};fg(lm,{createAgateScene:()=>Nb});function Ub(n,e,t,i,s){let r=new Ca,a=new ye,o=new Set,l=0;function c(m,p){let T=e.getBoundingClientRect();return!T.width||!T.height||m<T.left||m>T.right||p<T.top||p>T.bottom?!1:(a.set((m-T.left)/T.width*2-1,1-(p-T.top)/T.height*2),t.updateMatrixWorld(),i.updateWorldMatrix(!0,!1),r.setFromCamera(a,t),r.intersectObject(i,!1).length>0)}e.agateHitTest=c;function h(m,p){let T=c(m,p);n.classList.toggle("stone-hover",T),e.style.cursor=o.size?"grabbing":T?"grab":"inherit"}function d(m){let p=c(m.clientX,m.clientY);m.agateStoneHit=p,s.enabled=!0,s.enableZoom=p&&!m.ctrlKey&&!m.metaKey,o.size&&m.preventDefault()}function u(m){let p=m.pointerType!=="mouse"||o.size>0||c(m.clientX,m.clientY);m.agateStoneHit=p,s.enabled=p,p&&(s.enableZoom=!0,o.add(m.pointerId),e.style.cursor="grabbing")}function f(m){m.pointerType!=="mouse"||o.size||(cancelAnimationFrame(l),l=requestAnimationFrame(()=>h(m.clientX,m.clientY)))}function g(){o.size||(n.classList.remove("stone-hover"),e.style.cursor="inherit")}function y(m){o.delete(m.pointerId)&&(o.size||queueMicrotask(()=>{s.enabled=!0,s.enableZoom=!0,h(m.clientX,m.clientY)}))}return e.addEventListener("wheel",d,{capture:!0,passive:!1}),e.addEventListener("pointerdown",u,!0),e.addEventListener("pointermove",f),e.addEventListener("pointerleave",g),window.addEventListener("pointerup",y,!0),window.addEventListener("pointercancel",y,!0),()=>{cancelAnimationFrame(l),delete e.agateHitTest,n.classList.remove("stone-hover"),e.removeEventListener("wheel",d,!0),e.removeEventListener("pointerdown",u,!0),e.removeEventListener("pointermove",f),e.removeEventListener("pointerleave",g),window.removeEventListener("pointerup",y,!0),window.removeEventListener("pointercancel",y,!0)}}function Nb(n,{hero:e=!1}={}){let t=new mr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.7)),t.setClearColor(0,0),t.outputColorSpace=It,t.toneMapping=wl,t.toneMappingExposure=1.15,n.appendChild(t.domElement);let i=new Ri,s=new Ht(35,1,.1,100);s.position.set(0,.2,7);let r=new gc(s,t.domElement);r.enableDamping=!0,r.enablePan=!1,r.minDistance=4.5,r.maxDistance=9,r.autoRotate=e&&!matchMedia("(prefers-reduced-motion: reduce)").matches,r.autoRotateSpeed=.65;let a=new Ri;a.background=new $e(7827556);let o=new pt(new Ci(20,20,20),new li({color:5461834,side:Ot}));a.add(o);for(let[V,ae,oe,Z,de,ve,Ce]of[[-4,3,2,2,5,16770749,5],[4,2,3,1,4,15331821,6],[0,5,-1,5,2,16767898,4],[0,-3,2,4,1,11957562,1]]){let M=new pt(new Vn(Z,de),new li({color:new $e(ve).multiplyScalar(Ce)}));M.position.set(V,ae,oe),M.lookAt(0,0,0),a.add(M)}let l=new pr(t),c=l.fromScene(a,.04);i.environment=c.texture,l.dispose(),a.traverse(V=>{V.geometry?.dispose(),V.material?.dispose()});let h=new xa(1.42,120,90),d=h.attributes.position;for(let V=0;V<d.count;V++){let ae=d.getX(V),oe=d.getY(V),Z=d.getZ(V),de=1+.08*Math.sin(ae*2.3+oe*2.6)+.035*Math.sin(oe*5.3-Z*3.2);d.setXYZ(V,ae*de*1.12,oe*de*1.02,Z*de*.57)}h.computeVertexNormals();let u=new Sa({color:15915712,roughness:.21,metalness:.02,clearcoat:1,clearcoatRoughness:.12,transmission:.17,thickness:1.5,ior:1.53,envMapIntensity:1.4}),f=!0;u.onBeforeCompile=V=>{f&&(V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMineral;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMineral=position;`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vMineral;
 float hashN(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
 float noiseN(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hashN(i),hashN(i+vec3(1,0,0)),f.x),mix(hashN(i+vec3(0,1,0)),hashN(i+vec3(1,1,0)),f.x),f.y),mix(mix(hashN(i+vec3(0,0,1)),hashN(i+vec3(1,0,1)),f.x),mix(hashN(i+vec3(0,1,1)),hashN(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbmN(vec3 p){return .55*noiseN(p)+.27*noiseN(p*2.1)+.13*noiseN(p*4.2)+.05*noiseN(p*8.4);}
 vec3 agateColor(vec3 p){vec3 q=p*1.5;float n=fbmN(q*2.4);float r=length(vec2(q.x*.90+sin(q.y*1.4)*.35,q.y*.72))+n*.53;float bands=.5+.5*sin(r*20.+fbmN(q*5.)*3.);float broad=.5+.5*sin(r*5.1+q.z*.9);vec3 red=vec3(.39,.055,.018),amber=vec3(.80,.34,.07),cream=vec3(.95,.80,.55);vec3 c=mix(red,amber,smoothstep(.08,.78,broad));c=mix(c,cream,pow(bands,15.)*.88);c=mix(c,vec3(.97,.89,.73),smoothstep(.76,.99,broad)*.7);float grain=noiseN(q*160.);return c*(.94+.1*grain);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=agateColor(vMineral);`))},u.customProgramCacheKey=()=>f?"agate-procedural-v1":"agate-texture-v1";let g=new pt(h,u);g.rotation.set(-.15,-.2,-.22),i.add(g);let y=new ls(16771272,4.2);y.position.set(-3,4,5),i.add(y);let m=new ls(13164752,1.8);m.position.set(4,1,2),i.add(m);let p=new ls(16753223,2);p.position.set(1,-1,-3),i.add(p),i.add(new Aa(13812125,.5));let T=document.createElement("canvas");T.width=256,T.height=256;let v=T.getContext("2d"),_=v.createRadialGradient(128,128,0,128,128,128);_.addColorStop(0,"rgba(0,0,0,.65)"),_.addColorStop(.5,"rgba(0,0,0,.22)"),_.addColorStop(1,"transparent"),v.fillStyle=_,v.fillRect(0,0,256,256);let P=new is(T),C=new pt(new Vn(4.5,2),new li({map:P,transparent:!0,depthWrite:!1}));C.position.set(0,-1.7,-.6),C.rotation.x=-.5,i.add(C);let L=()=>{let V=n.getBoundingClientRect();V.width<1||V.height<1||(t.setSize(V.width,V.height),s.aspect=V.width/V.height,s.updateProjectionMatrix())},N=new ResizeObserver(L);N.observe(n),L();let w=!0,b=!1,I=()=>{!w||document.hidden||!b||n.offsetParent===null||(r.update(),t.render(i,s))},G=()=>{let V=w&&b&&!document.hidden;t.setAnimationLoop(V?I:null),n.dataset.rendering=String(V)},j=new IntersectionObserver(V=>{b=V[0].isIntersecting,G()},{threshold:.01});j.observe(n),document.addEventListener("visibilitychange",G);let X=null,K=null,R=null,D=nm(i,g),F=e?Ub(n,t.domElement,s,g,r):null;return{renderer:t,stone:g,controls:r,resize:L,setTexture(V,{kind:ae,normalCanvas:oe,polish:Z=.72,light:de="left",thickness:ve=.24,presentation:Ce}={}){f=!1;let M=ae+":"+ve+":"+JSON.stringify(ei(ae));if(ae&&M!==R){let U=ei(ae),ne=new ir;U.forEach(([Y,A],J)=>J?ne.lineTo(Y*1.4,-A*1.4):ne.moveTo(Y*1.4,-A*1.4)),ne.closePath();let he=new _a(ne,{depth:ve,bevelEnabled:!0,bevelThickness:.07,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1}),pe=he.attributes.position,O=he.attributes.uv;for(let Y=0;Y<pe.count;Y++)O.setXY(Y,(pe.getX(Y)/1.4+1)/2,(pe.getY(Y)/1.4+1)/2);he.center(),he.computeVertexNormals(),he.userData.kind=ae,h.dispose(),h=he,g.geometry=h,g.rotation.set(-.1,-.24,ae==="leaf"?-.3:0),r.autoRotate=!1,R=M}X?.dispose(),X=new is(V),X.colorSpace=It,X.anisotropy=t.capabilities.getMaxAnisotropy(),u.map=X,K?.dispose(),oe?(K=new is(oe),u.normalMap=K,u.normalScale.set(.65,.65)):u.normalMap=null,u.color.set(16777215),u.roughness=.7-Z*.59,u.clearcoat=Z,u.clearcoatRoughness=.32-Z*.23,u.transmission=.04+Z*.12,u.onBeforeCompile=()=>{},u.needsUpdate=!0,y.position.x=de==="right"?3:-3,m.position.x=de==="right"?-4:4,D.update(Ce)},setOrientation(V){r.autoRotate=!1,r.reset(),g.rotation.set(0,V==="back"?Math.PI:V==="side"?Math.PI/2:0,0),s.position.set(0,.2,7),r.update(),t.render(i,s)},render(){r.update(),t.render(i,s)},capture(){return t.render(i,s),t.domElement.toDataURL("image/png")},setAuto(V){r.autoRotate=V},dispose(){w=!1,F?.(),t.setAnimationLoop(null),j.disconnect(),document.removeEventListener("visibilitychange",G),N.disconnect(),r.dispose(),D.dispose(),h.dispose(),u.dispose(),c.dispose(),X?.dispose(),K?.dispose(),P.dispose(),C.material.dispose(),C.geometry.dispose(),t.dispose(),t.domElement.remove()}}}var cm=Cs(()=>{im();pi();Oa();om()});var Fr=[{id:"journey-city",title:"阜新市推出2026春季四大精品旅游线路",publisher:"阜新市人民政府网站 · 阜新日报 · 2026-04-22",url:"https://www.fuxin.gov.cn/content/2026/1065588.html",note:"核对玛瑙文化与文旅线路的公开背景。历史节庆安排未当作当前活动发布；本站三种行程为可编辑的研学构想，不是已确认的官方旅游产品。"},{id:"formation-museum",title:"Agate · 玛瑙的常见产状与材质",publisher:"史密森尼国家自然历史博物馆",url:"https://naturalhistory.si.edu/explore/collections/geogallery/10026005",note:"形成图解的入门依据：火山岩空隙、富硅水与玛瑙层纹。图解为概念模型，不是特定阜新原石的成因鉴定。"},{id:"formation-review",title:"Mineralogy, Geochemistry and Genesis of Agate—A Review",publisher:"Götze、Möckel、Pan · Minerals 2020, 10(11), 1037",url:"https://doi.org/10.3390/min10111037",note:"补充不同地质成因、二氧化硅结晶与自组织、结构和杂质分布对条带和颜色的影响；不把每一条带等同于一次进水。"},{id:"heritage",title:"阜新玛瑙雕 · 国家级非遗项目名录",publisher:"中国非物质文化遗产网",url:"https://www.ihchina.cn/project_details/14006/",note:"核对项目名称、2006年第一批名录身份、编号Ⅶ-30、材质与工艺特点。页面包含历史材料，人物年龄等动态信息未采用。"},{id:"town",title:"阜新市 · 玛瑙特色小镇景区",publisher:"辽宁省文化和旅游厅 · 2025-11-21",url:"https://whly.ln.gov.cn/whly/wlzt/sjly/ajjq/2025112116121250991/index.shtml",note:"核对十家子镇文旅场景与玛瑙体验、专业市场、八宝海湿地、辽代闾州塔等资源。"},{id:"rural",title:"“阜新玛瑙工匠”获评省级劳务品牌",publisher:"阜新市人力资源和社会保障局 · 2026-01-15",url:"https://rsj.fuxin.gov.cn/content/2026/1037027.html",note:"核对工匠工作室、研学体验、数字推广与农户参与产业链的应用背景。"}],Ad=[{title:"玛瑙如何形成",keys:["形成","成因","怎么来","地质","富硅","空隙","结晶"],text:"以常见的火山岩空隙充填路径为例，富硅流体进入岩石空隙，二氧化硅在适宜条件下沉淀与结晶。结构、孔隙与杂质分布的差异可形成可见层纹。玛瑙也存在其他地质成因；不能把每一条纹都等同于一次进水，也没有适用于所有玛瑙的统一形成时长。",source:"formation-review"},{title:"国家级非遗身份",keys:["非遗","国家","名录","时候","哪年","2006","身份","级别"],text:"阜新玛瑙雕于2006年入选第一批国家级非物质文化遗产代表性项目名录，项目编号为Ⅶ-30，类别为传统美术。",source:"heritage"},{title:"材质与工艺特点",keys:["工艺","特点","材料","纹色","色彩","条带","绝活","流程","雕刻"],text:"玛瑙的天然色彩和条带为设计提供线索。官方项目资料介绍了选料、设计、雕琢与抛光等任务，并列举素活、掏膛、活环与透雕等技艺。具体作品的工序与方案需结合材料判断。",source:"heritage"},{title:"十家子镇文旅场景",keys:["十家子","旅游","乡土","哪里","位置","景区","湿地","闾州","市场"],text:"玛瑙特色小镇位于阜新蒙古族自治县十家子镇。省文旅厅介绍其玛瑙文化、专业市场以及八宝海湿地、辽代闾州塔等资源，可为文化与自然相连的研学构想提供场景。实际开放和接待需向当地确认。",source:"town"},{title:"乡村经营与参与",keys:["乡村","振兴","农户","收入","增收","经营","就业","研学","工作室"],text:"阜新市人社局公开材料提出串联工匠工作室、加工园区和非遗展示馆发展研学与体验，拓展数字推广渠道，并鼓励农户参与产业链。本原型据此设计文化学习、数字创作与到访意向流程，尚未验证实际增收。",source:"rural"}],lo=[{title:"观料",subtitle:"先观察，再构思",text:"观察可见的色彩、条带与外形，寻找适合表达的视觉关系。照片能辅助观察表面信息；真实内部结构仍需要实物判断。"},{title:"构思",subtitle:"让纹色参与表达",text:"结合材料外观提出构图。在数字创作中尝试图案的尺度、位置与方向，比较不同方案与纹色的关系。"},{title:"雕琢",subtitle:"理解形与工的关系",text:"粗细雕琢与不同专项技法需要经验和工具。这里展示工艺学习的逻辑，数字预览不直接给出加工路径或安全操作指导。"},{title:"润饰",subtitle:"从形态走向完整作品",text:"抛光与配座等处理完善作品的观看与陈设效果。实际安排依作品与工坊做法而定，数字材质只用于外观体验。"}];var co=[{id:"welcome",name:"中国玛瑙小镇会客厅",short:"会客厅",type:"文化起点",icon:"hall",x:24,y:47,image:"hero",minutes:30,tag:"认识小镇",fact:"省文旅厅景区介绍列出了中国玛瑙小镇会客厅。",intro:"先建立对小镇的整体认识，再带着问题去看作品与手艺。",observe:"找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。",prepare:"到访前核实开放与讲解安排。",source:"town"},{id:"studio",name:"工艺观察与交流",short:"手艺现场",type:"工坊场景",icon:"craft",x:45,y:68,image:"craft",minutes:60,tag:"接待需先联系",fact:"市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。",intro:"把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。",observe:"问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？",prepare:"具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。",source:"rural"},{id:"market",name:"玛瑙专业市场",short:"逛逛市集",type:"产业观察",icon:"market",x:49,y:34,image:"hero",minutes:35,tag:"认识原料与文创",fact:"省文旅厅景区介绍提到战国红大市场等专业市场。",intro:"从原料、半成品到文创，观察一块石头如何走进日常生活。",observe:"选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。",prepare:"记录材质与工艺说明，购买与定制由你与经营者自行确认。",source:"town"},{id:"water",name:"八宝海湿地景观",short:"水岸慢行",type:"自然观察",icon:"water",x:76,y:24,image:"water",minutes:40,tag:"把脚步放慢",fact:"八宝海湿地景观见于省文旅厅的小镇介绍。",intro:"暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。",observe:"在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。",prepare:"核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。",source:"town"},{id:"pagoda",name:"辽代闾州塔",short:"寻访古迹",type:"历史线索",icon:"pagoda",x:83,y:67,image:"water",minutes:25,tag:"从石纹走向乡土",fact:"辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。",intro:"在工艺之外，为这次到访保留一段理解地方历史的时间。",observe:"观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。",prepare:"出发前核实到达方式、可参观范围及文物保护要求。",source:"town"}],kr=[{id:"craft",title:"半日识艺",subtitle:"先知艺，再观工",description:"把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。",stops:["welcome","studio","market"],interest:"玛瑙文化与工艺观察"},{id:"slow",title:"一日慢游",subtitle:"手艺与乡土，都留一点时间",description:"将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。",stops:["welcome","studio","market","water","pagoda"],interest:"乡土文化与自然游览"},{id:"family",title:"亲子研学",subtitle:"带着问题，一起去发现",description:"以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。",stops:["welcome","water","studio"],interest:"亲子研学与纹色创作"}],ho=[{label:"观纹色",title:"先问这块石，有什么。",text:"看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。",question:"这块材料最值得保留的天然纹色是什么？"},{label:"看构思",title:"让材料，参与决定造型。",text:"同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。",question:"为什么选这个方向和轮廓，而不是另一个？"},{label:"识雕琢",title:"从外轮廓，走向细部层次。",text:"关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。",question:"这件作品中，最需要经验判断的是哪一步？"},{label:"赏润饰",title:"最后一点光，也关乎表达。",text:"观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。",question:"这种表面处理，怎样让纹色更容易被看见？"}],Tn=[{question:"开始构思前，最值得先做什么？",answers:["观察材料已有的天然纹色","先把所有材料想成同一种颜色","完全忽略石头，照着模板取形"],correct:0,explanation:"先观料，再构思，让天然色彩与条带成为设计的一部分。",source:"heritage"},{question:"照片最适合帮助我们观察哪一项？",answers:["原料内部所有裂隙","表面可见的颜色与纹理","真实加工后的全部结果"],correct:1,explanation:"照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。",source:"heritage"},{question:"把工艺交流加入行程后，出发前还需要做什么？",answers:["直接把本地收藏当成预约凭证","默认所有工坊都随时开放","确认接待方、时间与可参观内容"],correct:2,explanation:"本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。",source:"rural"}],Rs={spring:{name:"春日寻色",icon:"芽",text:"把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。"},summer:{name:"夏日缓行",icon:"水",text:"为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。"},autumn:{name:"秋日拾光",icon:"叶",text:"从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。"},winter:{name:"冬日访艺",icon:"炉",text:"把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。"}},uo=[{id:"culture",title:"文化被看见",label:"文化理解",icon:"eye",text:"以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。",visitor:"先了解作品与材料，再决定想看什么。",organizer:"把参观前的知识准备与现场观察任务衔接起来。",maker:"让作品的构思和工艺被清楚地介绍。"},{id:"experience",title:"手艺有交流",label:"研学体验",icon:"craft",text:"把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。",visitor:"把想问的问题写进手册，提前确认接待。",organizer:"明确人数、时间、内容与组织责任，再对接工坊。",maker:"根据实际能力安排可参观、可讲解的内容。"},{id:"creation",title:"作品进日常",label:"文创连接",icon:"leaf",text:"从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。",visitor:"关注材质与工艺说明，留下自己的设计偏好。",organizer:"以学习收获组织作品讨论，避免把购物当作研学任务。",maker:"展示材料特点与制作过程，沟通定制边界。"},{id:"local",title:"乡土共参与",label:"本地协作",icon:"village",text:"工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。",visitor:"在尊重当地安排的前提下，了解更多乡土文化。",organizer:"优先核实本地接待与协作条件，逐步建立合作。",maker:"与市场、村庄及研学组织者协调实际服务。"}];var Cd={hall:"M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18",craft:"M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4",market:"M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0",water:"M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3",pagoda:"M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4",eye:"M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8",leaf:"M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5",village:"M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2"},jc=(n,e="")=>`<svg class="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Cd[n]||Cd.leaf}"/></svg>`,pg=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Rd=n=>`./assets/journey-v2/${n}.webp`,Zc=(n,e)=>{try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}},Xt=n=>co.find(e=>e.id===n),fo=n=>Fr.find(e=>e.id===n),po=(n,e,t,i)=>Number.isFinite(Number(n))?Math.round(Math.min(t,Math.max(e,Number(n)))):i;function Pd({toast:n,download:e}){let t=document.querySelector("#journey"),i=M=>t.querySelector(M),s=M=>[...t.querySelectorAll(M)],r="agate-journey-draft-v1",a="agate-journey-learning-v1",o=Zc(r,{}),l=o&&typeof o=="object"?o:{},c=new Set,h={profile:kr.some(M=>M.id===l.profile)?l.profile:"craft",stops:[],date:typeof l.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:"",people:po(l.people,1,30,2),season:Object.hasOwn(Rs,l.season)?l.season:["winter","spring","summer","autumn"][Math.floor((new Date().getMonth()+1)%12/3)],customized:l.customized===!0,planId:typeof l.planId=="string"?l.planId:null};if(Array.isArray(l.stops))for(let M of l.stops)M&&Xt(M.id)&&!c.has(M.id)&&(c.add(M.id),h.stops.push({id:M.id,minutes:po(M.minutes,10,180,Xt(M.id).minutes)}));Array.isArray(l.stops)||(h.stops=kr[0].stops.map(M=>({id:M,minutes:Xt(M).minutes})));let d=Zc(a,{}),u=d&&typeof d=="object"?d:{},f={observed:u.observed===!0,quizDone:u.quizDone===!0,routePrepared:u.routePrepared===!0,question:typeof u.question=="string"?u.question.slice(0,120):"",questionSaved:u.questionSaved===!0,checks:{}};for(let M of["open","reception","content","travel"])f.checks[M]=u.checks?.[M]===!0;let g="welcome",y=0,m=0,p=Array(Tn.length).fill(null),T=0,v="visitor";function _(M,U){try{return localStorage.setItem(M,JSON.stringify(U)),!0}catch{return!1}}function P(){_(r,h),_(a,f)}function C(M){i("#journey-plan-status").textContent=M}let L=()=>kr.find(M=>M.id===h.profile),N=()=>L().title+(h.customized?" · 自选调整":""),w=()=>h.stops.reduce((M,U)=>M+U.minutes,0),b=()=>[f.observed,f.quizDone,f.routePrepared&&h.stops.length>0,f.questionSaved&&f.question.trim().length>0];function I(){return`<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([M,U])=>`<path d="M${M} ${U-15}l-9 23h18Z"/><path d="M${M} ${U+8}v9"/>`).join("")}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+co.map(M=>`<button class="journey-map-node" data-place="${M.id}" style="--node-x:${M.x}%;--node-y:${M.y}%" aria-pressed="${M.id===g}" aria-label="探索${M.name}">${jc(M.icon)}<span>${M.short}</span><b class="journey-node-order"></b></button>`).join("")}i("#journey-map").innerHTML=I();function G(){s("[data-place]").forEach(M=>{let U=h.stops.findIndex(ne=>ne.id===M.dataset.place);M.classList.toggle("in-plan",U>=0),M.setAttribute("aria-pressed",String(M.dataset.place===g)),M.querySelector(".journey-node-order").textContent=U>=0?U+1:""}),i("#journey-map-route").setAttribute("d",h.stops.map((M,U)=>{let ne=Xt(M.id);return`${U?"L":"M"}${ne.x*9},${ne.y*5.5}`}).join(" "))}function j(M){let U=Xt(M);if(!U)return;g=M;let ne=fo(U.source),he=h.stops.some(pe=>pe.id===M);i("#journey-place-detail").innerHTML=`<div class="journey-detail-image"><img src="${Rd(U.image)}" width="600" height="337" loading="lazy" alt="AI${U.image==="craft"?"手艺":U.image==="water"?"乡野水岸":"玛瑙文旅"}情境示意，非${pg(U.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${U.type} / ${U.tag}</p><h3>${U.name}</h3><p>${U.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${U.observe}</p></div><p class="journey-place-prepare">${U.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${he?"disabled":""}>${he?"已在我的行程 ✓":"加入我的行程 ＋"}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${U.fact}</p><a href="${ne.url}" target="_blank" rel="noopener">${ne.publisher} ↗</a></details></div>`,i("#journey-add-this").onclick=()=>R(M),G()}s("[data-place]").forEach(M=>M.onclick=()=>j(M.dataset.place));function X(){i("#journey-presets").innerHTML=kr.map((M,U)=>`<button data-journey-preset="${M.id}" aria-pressed="${M.id===h.profile}"><span class="journey-preset-index">0${U+1}</span><span><strong>${M.title}</strong><small>${M.subtitle}</small></span><b>↗</b></button>`).join(""),s("[data-journey-preset]").forEach(M=>M.onclick=()=>{h.profile=M.dataset.journeyPreset,h.stops=L().stops.map(U=>({id:U,minutes:Xt(U).minutes})),h.customized=!1,f.routePrepared=!0,K("已按这份灵感整理路线，可继续增减与调整。"),X()})}function K(M="行程草稿已更新。"){D(),j(g),oe(),P(),C(M)}function R(M){!Xt(M)||h.stops.some(U=>U.id===M)||(h.stops.push({id:M,minutes:Xt(M).minutes}),h.customized=!0,f.routePrepared=!0,K(`已将“${Xt(M).short}”加入行程。`))}function D(){i("#journey-route-title").textContent=N(),i("#journey-route-description").textContent=L().description,i("#journey-stop-total").textContent=`${h.stops.length} 站`,i("#journey-route-list").innerHTML=h.stops.length?h.stops.map((M,U)=>{let ne=Xt(M.id),he=[10,20,25,30,35,40,45,60,90,120,180,M.minutes].sort((pe,O)=>pe-O).filter((pe,O,Y)=>Y.indexOf(pe)===O);return`<article class="journey-route-item"><span class="journey-route-number">0${U+1}</span><div class="journey-route-item-copy"><span>${ne.type}</span><h4>${ne.name}</h4><p>${ne.observe}</p><label>现场停留 <select data-route-minutes="${ne.id}" aria-label="${ne.name}现场停留分钟">${he.map(pe=>`<option value="${pe}" ${pe===M.minutes?"selected":""}>${pe} 分钟</option>`).join("")}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${ne.id}" data-direction="-1" aria-label="上移${ne.name}" ${U===0?"disabled":""}>↑</button><button data-route-move="${ne.id}" data-direction="1" aria-label="下移${ne.name}" ${U===h.stops.length-1?"disabled":""}>↓</button><button data-route-remove="${ne.id}" aria-label="移除${ne.name}">×</button></div></article>`}).join(""):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>',i("#journey-add-stops").innerHTML=co.map(M=>{let U=h.stops.some(ne=>ne.id===M.id);return`<button data-route-add="${M.id}" ${U?"disabled":""}>${jc(M.icon)}${M.short}<span>${U?"✓":"＋"}</span></button>`}).join(""),s("[data-route-add]").forEach(M=>M.onclick=()=>R(M.dataset.routeAdd)),s("[data-route-remove]").forEach(M=>M.onclick=()=>{h.stops=h.stops.filter(U=>U.id!==M.dataset.routeRemove),h.customized=!0,K("已移除一站，可随时重新加入。")}),s("[data-route-move]").forEach(M=>M.onclick=()=>{let U=h.stops.findIndex(he=>he.id===M.dataset.routeMove),ne=U+Number(M.dataset.direction);ne<0||ne>=h.stops.length||([h.stops[U],h.stops[ne]]=[h.stops[ne],h.stops[U]],h.customized=!0,K("已调整路线顺序。"),i(`[data-route-move="${M.dataset.routeMove}"][data-direction="${M.dataset.direction}"]`)?.focus({preventScroll:!0}))}),s("[data-route-minutes]").forEach(M=>M.onchange=()=>{let U=h.stops.find(ne=>ne.id===M.dataset.routeMinutes);U&&(U.minutes=po(M.value,10,180,U.minutes)),h.customized=!0,K("已更新现场停留安排。")}),i("#journey-total-minutes").textContent=w(),i("#journey-summary-people").textContent=`${h.people} 人同行`,i("#journey-summary-date").textContent=h.date||"日期待定";for(let M of["#plan-trip","#journey-export","#journey-copy"])i(M).disabled=!h.stops.length;i("#plan-trip").innerHTML=h.planId?"更新我的行程 <span>✓</span>":"保存到我的作品 <span>＋</span>",G()}i("#journey-date").value=h.date,i("#journey-people").value=h.people,i("#journey-date").onchange=M=>{h.date=M.target.value,P(),D()},i("#journey-people").onchange=M=>{h.people=po(M.target.value,1,30,2),M.target.value=h.people,P(),D()};function F(){let M=Rs[h.season];i("#journey-season-note").innerHTML=`<span>${M.icon}</span><div><strong>${M.name}</strong><p>${M.text}</p></div>`,s("[data-journey-season]").forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.journeySeason===h.season)))}s("[data-journey-season]").forEach(M=>M.onclick=()=>{h.season=M.dataset.journeySeason,F(),P()});function V(){return["石里有境 · 十家子研学构想",N(),`日期：${h.date||"待定"} / 同行：${h.people} 人`,`现场观察安排：${w()} 分钟（不含交通、用餐与等候）`,"",...h.stops.map((M,U)=>`${U+1}. ${Xt(M.id).name} · ${M.minutes} 分钟
   观察：${Xt(M.id).observe}`),"",f.question.trim()?`想问工匠：${f.question.trim()}`:"",`季节灵感：${Rs[h.season].name}`,`线上准备：${b().filter(Boolean).length} / 4`,"","这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。",`小镇资料：${fo("town").url}`,`工艺与研学资料：${fo("rural").url}`].filter(M=>M!==null).join(`
`)}i("#plan-trip").onclick=()=>{if(!h.stops.length)return;let M=Zc("agate-plans-v1",[]),U=Array.isArray(M)?M:[],ne=h.planId||crypto.randomUUID(),he=U.findIndex(O=>O?.id===ne),pe={id:ne,version:2,date:h.date||"日期待定",interest:L().interest,note:`${N()} · ${h.people}人
${h.stops.map(O=>Xt(O.id).name).join(" → ")}
现场观察 ${w()} 分钟，不含交通与用餐。${f.question.trim()?`
想问工匠：`+f.question.trim():""}`,route:h.stops.map(O=>({...O,name:Xt(O.id).name})),people:h.people,season:h.season,question:f.question.trim(),updatedAt:new Date().toISOString()};if(he>=0?U[he]=pe:U.unshift(pe),!_("agate-plans-v1",U.slice(0,50))){n("浏览器未能保存，请先导出研学手册。");return}h.planId=ne,f.routePrepared=!0,K("行程已保存，可在“我的作品”查看。"),n("已保存研学行程，尚未产生预约。")},i("#journey-copy").onclick=async()=>{let M=V();try{await navigator.clipboard.writeText(M),n("行程文字已复制。")}catch{e(new Blob([M],{type:"text/plain;charset=utf-8"}),"十家子研学行程.txt"),n("已导出行程文字。")}};function ae(M){y=M;let U=ho[M];i("#craft-detail").innerHTML=`<p class="eyebrow">OBSERVATION / 0${M+1}</p><h3>${U.title}</h3><p>${U.text}</p>`,i("#journey-craft-question").textContent=U.question,s("[data-journey-craft]").forEach(ne=>ne.setAttribute("aria-pressed",String(Number(ne.dataset.journeyCraft)===M)))}i("#craft-tabs").innerHTML=ho.map((M,U)=>`<button data-journey-craft="${U}" aria-pressed="${U===0}"><b>0${U+1}</b>${M.label}</button>`).join(""),s("[data-journey-craft]").forEach(M=>M.onclick=()=>ae(Number(M.dataset.journeyCraft))),i("#journey-record-observation").onclick=()=>{f.observed=!f.observed,f.observed&&!f.question.trim()&&(i("#journey-question").placeholder=ho[y].question),P(),oe(),n(f.observed?"已把这条观察收进线上研学准备。":"已取消这项观察记录。")};function oe(){let M=b(),U=M.filter(Boolean).length;i("#journey-passport-count").innerHTML=`${U}<small>/ 4</small>`,i("#journey-passport-circle").style.strokeDashoffset=String(2*Math.PI*51*(1-U/4));let ne=[["观纹","记录一条手艺观察","journey-craft"],["识艺","完成一轮工艺问答","journey-passport"],["入乡","整理自己的行程","journey-plan"],["问艺","留一个想问的问题","journey-passport"]];i("#journey-passport-tasks").innerHTML=ne.map(([he,pe,O],Y)=>`<button data-task-target="${O}" data-task-index="${Y}" class="${M[Y]?"complete":""}"><span>${he}</span><div><strong>${pe}</strong><small>${M[Y]?"已收进线上准备":"等你来发现"}</small></div><b>${M[Y]?"✓":"↗"}</b></button>`).join(""),s("[data-task-target]").forEach(he=>he.onclick=()=>{ve(he.dataset.taskTarget),he.dataset.taskIndex==="3"&&i("#journey-question").focus({preventScroll:!0})}),i("#journey-record-observation").setAttribute("aria-pressed",String(f.observed)),i("#journey-record-observation").textContent=f.observed?"这条观察已记录 ✓":"记下这条观察 ＋"}function Z(){if(i("#journey-quiz-count").textContent=m<Tn.length?`${m+1} / ${Tn.length}`:"本轮已完成",m===Tn.length){let he=p.filter((pe,O)=>pe===Tn[O].correct).length;i("#journey-quiz").innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${he} / ${Tn.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`,i("#journey-quiz-restart").onclick=()=>{m=0,p=Array(Tn.length).fill(null),Z()};return}let M=Tn[m],U=p[m]!==null,ne=fo(M.source);i("#journey-quiz").innerHTML=`<h3>${M.question}</h3><div class="journey-quiz-answers">${M.answers.map((he,pe)=>`<button data-quiz-answer="${pe}" class="${U&&pe===M.correct?"correct":U&&pe===p[m]?"chosen":""}" ${U?"disabled":""}><span>${String.fromCharCode(65+pe)}</span>${he}${U&&pe===M.correct?"<b>✓</b>":""}</button>`).join("")}</div>${U?`<div class="journey-quiz-feedback"><strong>${p[m]===M.correct?"你抓住了关键。":"再看一眼这个线索。"}</strong><p>${M.explanation}</p><a href="${ne.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${m===Tn.length-1?"收进手册":"下一题"} →</button></div>`:""}`,s("[data-quiz-answer]").forEach(he=>he.onclick=()=>{p[m]=Number(he.dataset.quizAnswer),Z()}),U&&(i("#journey-quiz-next").onclick=()=>{m++,m===Tn.length&&(f.quizDone=!0,P(),oe()),Z()})}i("#journey-question").value=f.question,i("#journey-question-length").textContent=[...f.question].length,i("#journey-question").oninput=M=>{f.question=M.target.value.slice(0,120),f.questionSaved=!1,i("#journey-question-length").textContent=[...f.question].length,P(),oe()},i("#journey-question-save").onclick=()=>{if(!f.question.trim()){n("先写下一个想了解的问题。"),i("#journey-question").focus();return}f.questionSaved=!0,P(),oe(),n("问题已收进手册，也会随行程导出。")},s("[data-journey-check]").forEach(M=>{M.checked=f.checks[M.dataset.journeyCheck],M.onchange=()=>{f.checks[M.dataset.journeyCheck]=M.checked,P()}});function de(){i("#journey-connections").innerHTML=uo.map((U,ne)=>`<button data-connection="${ne}" aria-pressed="${ne===T}">${jc(U.icon)}<span><small>0${ne+1} / ${U.label}</small><strong>${U.title}</strong></span><b>→</b></button>`).join(""),s("[data-connection]").forEach(U=>U.onclick=()=>{T=Number(U.dataset.connection),de()});let M=uo[T];i("#journey-connection-label").textContent=M.label,i("#journey-connection-title").textContent=M.title,i("#journey-connection-copy").textContent=M.text,i("#journey-role-copy").textContent=M[v]}s("[data-journey-role]").forEach(M=>M.onclick=()=>{v=M.dataset.journeyRole,s("[data-journey-role]").forEach(U=>U.setAttribute("aria-pressed",String(U===M))),i("#journey-role-copy").textContent=uo[T][v]});function ve(M){document.getElementById(M)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"})}if(s("[data-journey-scroll]").forEach(M=>M.onclick=()=>ve(M.dataset.journeyScroll)),"IntersectionObserver"in window){let M=new IntersectionObserver(U=>{for(let ne of U)ne.isIntersecting&&s(".journey-subnav [data-journey-scroll]").forEach(he=>he.classList.toggle("active",he.dataset.journeyScroll===ne.target.id))},{rootMargin:"-70px 0px -55% 0px",threshold:0});if(s(".journey-chapter").forEach(U=>M.observe(U)),!matchMedia("(prefers-reduced-motion: reduce)").matches){t.classList.add("journey-anim-ready");let U=new IntersectionObserver(ne=>{for(let he of ne)he.isIntersecting&&(he.target.classList.add("revealed"),U.unobserve(he.target))},{threshold:.06});s("[data-journey-reveal]").forEach(ne=>U.observe(ne))}}async function Ce(){if(!h.stops.length)return;let M=i("#journey-export");M.disabled=!0;let U=M.textContent;M.textContent="正在整理手册…";try{let ie=function(Te,E,x,W,ee,le,se="#6c5842"){O.font=J(ee),O.fillStyle=se;let Ie="",Me=x;for(let De of[...Te])O.measureText(Ie+De).width>W&&Ie?(O.fillText(Ie,E,Me),Ie=De,Me+=le):Ie+=De;return Ie&&O.fillText(Ie,E,Me),Me+le};f.routePrepared=!0,P(),oe(),await document.fonts.ready;let ne=new Image;ne.src=Rd("hero");let he=!0;try{await ne.decode()}catch{he=!1}let pe=document.createElement("canvas");pe.width=1200,pe.height=1180+h.stops.length*155+(f.question.trim()?150:0);let O=pe.getContext("2d"),Y=pe.width,A=pe.height,J=(Te,E=400)=>`${E} ${Te}px "Microsoft YaHei","PingFang SC",sans-serif`,H=(Te,E,x,W,ee="#382b21",le=400)=>{O.fillStyle=ee,O.font=J(W,le),O.fillText(Te,E,x)};if(O.fillStyle="#f1e7d4",O.fillRect(0,0,Y,A),O.fillStyle="#281b11",O.fillRect(0,0,Y,390),he){let Te=ne.width,E=ne.height,x=Math.max(Y/Te,390/E);O.save(),O.beginPath(),O.rect(0,0,Y,390),O.clip(),O.drawImage(ne,(Y-Te*x)/2,(390-E*x)/2,Te*x,E*x),O.restore()}let re=O.createLinearGradient(0,0,Y,0);re.addColorStop(0,"#171009ed"),re.addColorStop(.8,"#17100920"),O.fillStyle=re,O.fillRect(0,0,Y,390),H("石里有境 / FIELD PASSPORT",65,79,20,"#d5b580"),H("循艺入乡",65,160,58,"#f3e2c2"),H("我的十家子研学手册",68,216,28,"#e0c6a0"),H(N(),68,295,24,"#d6b078"),H("AI 文旅情境示意",960,367,14,"#f4debb"),H("日期  "+(h.date||"待定"),65,458,22),H("同行  "+h.people+" 人",500,458,22),H("线上准备  "+b().filter(Boolean).length+" / 4",835,458,22),O.strokeStyle="#b29b762f",O.lineWidth=2,O.beginPath(),O.moveTo(65,491),O.lineTo(1135,491),O.stroke(),H("把好奇，串成自己的路线。",65,551,33,"#46321f"),H("现场观察 "+w()+" 分钟 · 不含交通、用餐与等候",65,596,19,"#8a7151");let ue=667;for(let Te=0;Te<h.stops.length;Te++){let E=h.stops[Te],x=Xt(E.id);O.fillStyle="#dcc59f",O.beginPath(),O.arc(91,ue+8,26,0,Math.PI*2),O.fill(),H(String(Te+1).padStart(2,"0"),73,ue+17,24,"#604321"),Te<h.stops.length-1&&(O.strokeStyle="#c7ab7e",O.beginPath(),O.moveTo(91,ue+41),O.lineTo(91,ue+123),O.stroke()),H(x.name,145,ue+13,28,"#3b2d20"),H(E.minutes+" 分钟",975,ue+13,21,"#90704a"),ie(x.observe,145,ue+56,920,20,32),ue+=155}f.question.trim()&&(O.fillStyle="#e5d6bb",O.fillRect(65,ue-8,1070,142),H("如果遇见工匠，我想问",89,ue+28,18,"#937346"),ie(f.question.trim(),89,ue+68,1018,22,32,"#513c26"),ue+=175),H(Rs[h.season].name+" · 带着颜色去发现",65,ue+35,24,"#61492e"),ie(Rs[h.season].text,65,ue+78,1070,19,30),ue+=165;let fe={open:"开放与时间",reception:"人数与接待",content:"讲解与体验",travel:"费用与交通"};H("出发前的确认清单",65,ue,23,"#60462b");let ge=65;for(let[Te,E]of Object.entries(fe))H((f.checks[Te]?"☑ ":"□ ")+E,ge,ue+43,17,"#8c7456"),ge+=274;O.strokeStyle="#b29b7650",O.beginPath(),O.moveTo(65,A-173),O.lineTo(1135,A-173),O.stroke(),ie("公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。",65,A-129,1070,16,26,"#917d60"),H("资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局",65,A-67,15,"#917d60"),H("carpedimez.github.io/fuxin-agate-studio/#journey",65,A-34,15,"#917d60");let Be=await new Promise(Te=>pe.toBlob(Te,"image/png"));if(!Be)throw Error("export");e(Be,"十家子研学手册.png"),f.routePrepared=!0,P(),oe(),n("研学手册已导出，路线与问题都在里面。")}catch{n("暂未能生成图片，可先复制行程文字。")}finally{M.disabled=!h.stops.length,M.textContent=U}}return i("#journey-export").onclick=Ce,j(g),X(),D(),F(),ae(0),Z(),oe(),de(),{exportPass:Ce,addStop:R,selectPlace:j}}pi();function mi(n,e){let t=ei(e);n.beginPath(),t.forEach(([i,s],r)=>r?n.lineTo(i,s):n.moveTo(i,s)),n.closePath()}function vg(n,e,t,i){let s=n.angle*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=i/(2*n.scale);return[o*r/e,-o*a/e,o*a/t,o*r/t,i/2-o*(r*n.x+a*n.y),i/2-o*(-a*n.x+r*n.y)]}function gi(n,{size:e=768,grooves:t=!0}={}){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");return s.fillStyle="#9b6036",s.fillRect(0,0,e,e),n.image&&(s.save(),s.setTransform(...vg(n.pose,n.image.width,n.image.height,e)),s.drawImage(n.image,0,0),s.restore()),t&&(_g(s,n.strokes||[],e,n.polish??.7),Dd(s,n.inscription,e)),i}function yo(n,e,t){if(e.length){n.beginPath(),n.moveTo((e[0][0]+1)*t/2,(e[0][1]+1)*t/2),e.length===1&&n.lineTo((e[0][0]+1)*t/2+.01,(e[0][1]+1)*t/2);for(let i=1;i<e.length;i++)n.lineTo((e[i][0]+1)*t/2,(e[i][1]+1)*t/2)}}function _g(n,e,t,i=.7){n.save(),n.lineCap="round",n.lineJoin="round";for(let s of e){let r=s.width*t/2;n.save(),n.translate(r*.2,r*.28),yo(n,s.points,t),n.strokeStyle=`rgba(255,239,202,${.55+i*.25})`,n.lineWidth=r*1.55,n.stroke(),n.restore(),yo(n,s.points,t),n.strokeStyle=`rgba(48,22,11,${.25+(s.depth??.6)*.7})`,n.lineWidth=r,n.stroke(),n.save(),n.translate(-r*.1,-r*.12),yo(n,s.points,t),n.strokeStyle="rgba(100,53,29,.58)",n.lineWidth=r*.35,n.stroke(),n.restore()}n.restore()}function Dd(n,e,t,{height:i=!1}={}){if(!e?.text)return;let s=e,r=s.size*t/2;n.save(),n.translate((s.x+1)*t/2,(s.y+1)*t/2),n.rotate(s.angle*Math.PI/180),n.font=`${r}px ${s.font==="sans"?"Microsoft YaHei,sans-serif":"SimSun,serif"}`,n.textAlign="center",n.textBaseline="middle";let a=s.vertical?Array.from(s.text):[s.text];for(let o=0;o<a.length;o++){let l=s.vertical?(o-(a.length-1)/2)*r*1.15:0;i||(n.fillStyle="rgba(255,235,195,.8)",n.fillText(a[o],1.2,l+1.5)),n.fillStyle=i?"#555":"#4a2617",n.fillText(a[o],0,l)}n.restore()}function vo(n,e=384,t=null){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,e,e),s.lineCap="round",s.lineJoin="round";for(let c of n)yo(s,c.points,e),s.strokeStyle=`rgb(${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)})`,s.lineWidth=c.width*e/2,s.stroke();Dd(s,t,e,{height:!0});let r=s.getImageData(0,0,e,e).data,a=document.createElement("canvas");a.width=a.height=e;let o=a.getContext("2d"),l=o.createImageData(e,e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let d=(p,T)=>r[(_t(T,0,e-1)*e+_t(p,0,e-1))*4]/255,u=(d(h-1,c)-d(h+1,c))*1.8,f=(d(h,c-1)-d(h,c+1))*1.8,g=1,y=Math.hypot(u,f,g),m=(c*e+h)*4;l.data[m]=(u/y*.5+.5)*255,l.data[m+1]=(f/y*.5+.5)*255,l.data[m+2]=(g/y*.5+.5)*255,l.data[m+3]=255}return o.putImageData(l,0,0),a}function zr(n,e,t){let i=ei(n),s=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){let o=i[r],l=i[a];o[1]>t!=l[1]>t&&e<(l[0]-o[0])*(t-o[1])/(l[1]-o[1])+o[0]&&(s=!s)}return s}function Zt(n,e,t,i,{texture:s,compare:r=100,padding:a=.18,background:o=!0,cursor:l=null}={}){if(o){n.clearRect(0,0,e,t),n.fillStyle="#111612",n.fillRect(0,0,e,t);let p=n.createRadialGradient(e*.5,t*.45,0,e*.5,t*.5,e*.55);p.addColorStop(0,"#c69a6520"),p.addColorStop(1,"#11161200"),n.fillStyle=p,n.fillRect(0,0,e,t)}s=s||gi(i);let c=Math.min(e*(1-a*2),t*(1-a*2)),h=e/2,d=t/2+t*.02,u=c/2,f={x:h-u,y:d-u,w:c,h:c};r<100&&(n.save(),n.beginPath(),n.rect(0,0,e*(1-r/100),t),n.clip(),n.globalAlpha=.85,n.drawImage(gi(i,{grooves:!1,size:512}),f.x,f.y,c,c),n.restore()),n.save(),n.beginPath(),n.rect(e*(1-r/100),0,e,t),n.clip(),n.save(),n.translate(h,d+9),n.scale(u,u),mi(n,i.kind),n.shadowColor="#000b",n.shadowBlur=30/u,n.fillStyle="#0a0d09",n.fill(),n.restore(),n.save(),n.translate(h,d),n.scale(u,u),mi(n,i.kind),n.clip(),n.drawImage(s,-1,-1,2,2);let g=i.light==="right"?1:-1,y=i.polish??.7,m=n.createLinearGradient(g<0?-1:1,-1,g<0?1:-1,1);if(m.addColorStop(0,`rgba(255,243,210,${.18+y*.13})`),m.addColorStop(.38,"rgba(255,240,204,0)"),m.addColorStop(1,"rgba(29,11,3,.34)"),n.fillStyle=m,n.fillRect(-1,-1,2,2),mi(n,i.kind),n.lineWidth=.065,n.strokeStyle="#f3d19a77",n.stroke(),mi(n,i.kind),n.lineWidth=.018,n.strokeStyle="#fff2cb9a",n.stroke(),y>.15){n.save(),n.rotate(-.65*g);let p=n.createLinearGradient(-.5,0,.5,0);p.addColorStop(0,"#fff0"),p.addColorStop(.45,`rgba(255,255,238,${y*.23})`),p.addColorStop(.52,`rgba(255,255,238,${y*.35})`),p.addColorStop(.64,"#fff0"),n.fillStyle=p,n.fillRect(-1.5,-1.5,3,3),n.restore()}if(n.restore(),n.restore(),r<100){let p=e*(1-r/100);n.strokeStyle="#e6c794",n.lineWidth=1,n.beginPath(),n.moveTo(p,80),n.lineTo(p,t-60),n.stroke(),n.fillStyle="#e6c794",n.beginPath(),n.arc(p,t/2,13,0,Math.PI*2),n.fill(),n.fillStyle="#152016",n.font="12px sans-serif",n.textAlign="center",n.fillText("↔",p,t/2+4),n.textAlign="left"}if(l&&i.step===2){let p=h+l.x*u,T=d+l.y*u;n.strokeStyle="#ffe0a8",n.lineWidth=1,n.beginPath(),n.arc(p,T,Math.max(5,i.toolWidth*u/2),0,Math.PI*2),n.stroke()}return f}function Ud(n,e=.018){let t=[],i=s=>t.push({width:e,points:s});if(n==="leaf"){i([[-.8,0],[.82,0]]);for(let s=0;s<5;s++){let r=-.6+s*.25;i([[r,0],[r+.22,-.3*(1-Math.abs(r))-.08]]),i([[r,0],[r+.22,.28*(1-Math.abs(r))+.07]])}}else if(n==="fruit"){for(let s of[-1,1]){let r=[];for(let a=0;a<=30;a++){let o=-.58+a/30*1.22;r.push([s*(.16+.15*Math.sin(a/30*Math.PI)),o])}i(r)}i([[-.28,-.6],[0,-.7],[.28,-.6]])}else{i([[-.8,.49],[-.25,-.41],[.03,.04]]),i([[.18,.23],[.47,-.57],[.8,.49]]);for(let s=0;s<3;s++)i([[-.62,.38+s*.07],[.65,.38+s*.07]])}return t}pi();var Nd=[{word:`先观
纹色`,title:"选一块喜欢的石",action:"点击左侧原料，观察它的天然条带。",tips:["可以换一块原料，或导入自己的照片。","选好后，点击下方“开始构形”。"],tools:["inspiration"]},{word:`借色
成形`,title:"让颜色落在合适的位置",action:"在画布上拖动轮廓，让想保留的纹色进入外形。",tips:["左侧切换外形；滚轮调整大小，Shift＋滚轮旋转。","右下角实时显示取形效果，满意后去刻线。"],tools:["comparison"]},{word:`落笔
成艺`,title:"在作品上留下一笔",action:"直接在作品上按住并拖动，刻出自己的线条。",tips:["先用“添一组筋线”试试，也可添加纹样、落款。","画布上方可切换擦线；支持撤销与重做。"],tools:["patterns","lettering"]},{word:`予石
以光`,title:"给它一点光，准备入展",action:"拖动作品查看侧面，调整光泽、厚度与搭配。",tips:["在左侧为作品起名，尝试挂件或展台。","完成后进入作品展厅，赏玩、回看并带走成果。"],tools:["styling"]}],Hr=n=>n==="bands"?"原料：Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg · 衍生图 CC BY-SA 2.5":n==="nodule"?"原料：James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"原料：用户导入图片":"原料：程序化教学样本",Fd=n=>n==="bands"?[["原始照片与作者","https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"],["图片及衍生图许可 CC BY-SA 2.5","https://creativecommons.org/licenses/by-sa/2.5/"]]:n==="nodule"?[["原始照片与作者","https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"],["图片许可 CC BY 2.0","https://creativecommons.org/licenses/by/2.0/"]]:[],Vr=(n,e)=>Object.assign(document.createElement("canvas"),{width:n,height:e}),kd=async n=>{let e=new Image;return e.src=n,await e.decode(),e},xg=()=>new Promise(n=>requestAnimationFrame(n)),_o=n=>(n||"我的玛瑙作品").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"").slice(0,60)||"我的玛瑙作品";function Od(n){let{$:e,$$:t,state:i,experience:s,toast:r,download:a}=n,o=e("#studio");o.classList.add("workbench"),e("#studio .page-heading").prepend(e("#studio>.module-guide-back"));let l=e("#studio .material-panel"),c=e("#studio .design-panel"),h=e(".shape-controls"),d=e(".engrave-controls"),u=e(".finish-controls");l.append(h,d,u);let f=document.createElement("details");f.className="work-advanced",f.innerHTML="<summary>进阶：选取与修正色区</summary>",e(".color-picker").before(f),f.append(e(".color-picker")),h.append(f);let g=document.createElement("details");g.className="work-advanced",g.innerHTML="<summary>查看构图指标与依据</summary>";for(let O of[e(".metrics"),e("#layout-explanation"),e(".method-details")])g.append(O);h.append(g),u.prepend(e(".work-title")),c.classList.add("work-guide"),c.insertAdjacentHTML("afterbegin",'<div class="work-guide-content"><p class="eyebrow" id="work-guide-index"></p><h2 id="work-guide-word"></h2><strong id="work-guide-title"></strong><p id="work-guide-action"></p><ol id="work-guide-tips"></ol><button id="work-demo-button" class="work-demo-button">▷ 看这个动作</button><div id="work-context-tools"></div><p id="work-feedback" role="status" aria-live="polite">选好原料，就可以开始了。</p></div>');let y=e("#work-context-tools"),m=e("#open-poster");m.remove();for(let O of["inspiration","comparison","patterns","lettering","styling"])y.append(e("#open-"+O));e(".playground").remove(),e("#canvas-stage").insertAdjacentHTML("beforeend",'<div id="work-demo" hidden><canvas id="work-demo-canvas" width="840" height="600"></canvas><span id="work-demo-caption"></span><button type="button" id="work-demo-close" aria-label="关闭操作示范">×</button></div>'),e("#work-demo-close").onclick=M,e("#play-demo").textContent="▷ 看本步操作",e("#play-demo").onclick=U,e("#work-demo-button").onclick=U,e("#start-shaping").hidden=!0,e("#export-finished").hidden=!0,e("#save-finished").hidden=!0,e("#capture-3d").hidden=!0,i.presentation={...i.presentation,backdrop:"paper"},n.playground.sync();let p=[],T=0,v="",_=0,P=0,C=0,L=null,N="three",w=!1,b=new Set,I=document.createElement("dialog");I.id="work-gallery",I.className="work-gallery",I.setAttribute("aria-labelledby","gallery-title"),I.innerHTML=`<header class="gallery-heading"><div><small>YOUR WORK · YOUR STORY / 作品展厅</small><h2 id="gallery-title">我的玛瑙作品</h2></div><button id="gallery-close" class="work-outline">← 继续创作</button></header>
 <div class="gallery-layout"><section class="gallery-main"><div class="gallery-tabs" role="tablist" aria-label="作品欣赏方式"><button data-gallery-mode="three" role="tab">立体赏玩</button><button data-gallery-mode="compare" role="tab">原石对照</button><button data-gallery-mode="replay" role="tab">创作回看</button></div>
 <div class="gallery-stage"><div id="gallery-three"></div><canvas id="gallery-flat" width="1000" height="760" hidden aria-label="原石对照与实际创作快照"></canvas><span id="gallery-stage-label">拖动旋转 · 滚轮缩放</span></div>
 <div id="gallery-three-tools" class="gallery-controls"><button data-gallery-view="front">正面</button><button data-gallery-view="side">侧面</button><button data-gallery-view="back">背面</button><button id="gallery-spin" aria-pressed="false">▷ 自动旋转</button><label>背景 <select id="gallery-background"><option value="paper">暖纸展厅</option><option value="ink">墨色工坊</option><option value="night">夜色藏蓝</option></select></label><label>光照 <select id="gallery-light"><option value="left">左侧柔光</option><option value="right">右侧柔光</option></select></label></div>
 <div id="gallery-compare-tools" class="gallery-controls" hidden><span>原料</span><input id="gallery-compare" type="range" min="0" max="100" value="50" aria-label="原石与成器对照分界"><span>成器</span><small>拖动滑杆查看原料与取形后的作品</small></div>
 <div id="gallery-replay-tools" class="gallery-controls" hidden><button id="gallery-replay-toggle" aria-pressed="false">▷ 播放回看</button><input id="gallery-replay-position" type="range" min="0" max="0" value="0" aria-label="实际创作快照进度"><span id="gallery-replay-label"></span></div>
 <p id="gallery-credit" class="gallery-credit"></p></section>
 <aside class="gallery-exports"><p class="eyebrow">TAKE IT WITH YOU</p><h3>让作品，<br><span>继续被看见。</span></h3><p>保存可继续编辑的方案，或带走能转动、能回看的作品页。</p>
 <button id="gallery-save">＋ 收藏到我的作品<small>保存在当前浏览器，随时继续编辑</small></button><button id="gallery-project">↗ 完整创作方案<small>JSON · 原料、轮廓、刻线与实际快照</small></button><button id="gallery-offline">↗ 可交互作品页<small>独立 HTML · 离线转动、对照与回看</small></button><button id="gallery-video">▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small></button><button id="gallery-screenshot">↗ 保存当前 3D 视角<small>PNG · 包含当前搭配与来源</small></button><div class="gallery-paper-exports"><button id="gallery-card">方案卡 PNG</button></div><p id="gallery-status" role="status" aria-live="polite">先转动欣赏，也可以回到创作继续修改。</p></aside></div>`,document.body.append(I),e(".gallery-paper-exports").append(m),e("#open-poster").innerHTML="纪念海报 PNG";let G=document.createComment("studio 3D preview");e("#preview-scene").before(G),e("#gallery-close").onclick=()=>I.close(),I.addEventListener("cancel",()=>he(!0)),I.addEventListener("close",()=>{ve(),he(!0),s.getScene()?.setAuto(!1),e("#spin-piece").setAttribute("aria-pressed","false"),e("#spin-piece").textContent="▷ 自动环绕欣赏",e("#gallery-spin").setAttribute("aria-pressed","false"),e("#gallery-spin").textContent="▷ 自动旋转",G.after(e("#preview-scene")),s.setView(i.step===3?"preview":i.step===2?"carved":"color"),w=!1,e("#next-step").focus({preventScroll:!0})}),e("#gallery-save").onclick=n.saveDesign,e("#gallery-card").onclick=n.exportCard,e("#gallery-project").onclick=()=>{D("保存方案");let O={...n.projectData(),workshopTimeline:p.map(({hash:Y,...A})=>A),attribution:Hr(i.sample),references:Fd(i.sample)};a(new Blob([JSON.stringify(O,null,2)],{type:"application/json"}),_o(i.workTitle)+"-完整方案.json"),j("完整方案已导出，可在“导入方案”恢复继续编辑。")},e("#gallery-offline").onclick=ne,e("#gallery-screenshot").onclick=async()=>{try{await V("three");let O=s.getScene();if(!O)throw Error("三维暂不可用，请先导出方案卡。");let Y=await kd(O.capture()),A=Vr(Y.width,Y.height+90),J=A.getContext("2d");J.fillStyle="#f5edde",J.fillRect(0,0,A.width,A.height),J.drawImage(Y,0,0),J.fillStyle="#4e3a2b",J.font="16px sans-serif",J.fillText(i.workTitle||"石里有境 · 我的作品",18,Y.height+27),J.font="11px sans-serif",J.fillText(Hr(i.sample),18,Y.height+52,A.width-36),J.fillText("数字创意与工艺外观示意 · 非真实加工结果",18,Y.height+73),A.toBlob(H=>{H&&a(H,_o(i.workTitle)+"-3D视角.png")})}catch(O){j(O.message)}},e("#gallery-video").onclick=()=>L?he(!0):pe(),t("[data-gallery-mode]").forEach(O=>O.onclick=()=>V(O.dataset.galleryMode)),t("[data-gallery-view]").forEach(O=>O.onclick=()=>{s.getScene()?.setOrientation(O.dataset.galleryView),e("#gallery-spin").setAttribute("aria-pressed","false"),e("#gallery-spin").textContent="▷ 自动旋转"}),e("#gallery-spin").onclick=()=>{let O=s.getScene();if(!O)return;let Y=!O.controls.autoRotate;O.setAuto(Y),e("#gallery-spin").setAttribute("aria-pressed",String(Y)),e("#gallery-spin").textContent=Y?"Ⅱ 暂停旋转":"▷ 自动旋转"},e("#gallery-background").onchange=async O=>{i.presentation.backdrop=O.target.value,n.playground.sync(),await s.updatePreview(),D("切换展厅氛围")},e("#gallery-light").onchange=async O=>{i.light=O.target.value,t("[data-light]").forEach(Y=>Y.classList.toggle("selected",Y.dataset.light===i.light)),await s.updatePreview(),D("调整灯光")},e("#gallery-compare").oninput=oe,e("#gallery-replay-position").oninput=()=>{ve(),de()},e("#gallery-replay-toggle").onclick=()=>C?ve():Ce(),e("#next-step").onclick=()=>i.step===3?F():s.setStep(i.step+1);function j(O){e("#gallery-status").textContent=O}function X(){let O=i.step,Y=Nd[O];if(o.dataset.workStep=String(O),e("#play-demo").textContent="▷ 看本步操作",e("#save-design").hidden=O!==3,!b.has(O)){b.add(O);let J=e(["#sample-list","#design-canvas","#design-canvas","#polish"][O]);J.classList.add("work-cue"),setTimeout(()=>J.classList.remove("work-cue"),2500)}e("#work-guide-index").textContent=`0${O+1} / ${["READ THE STONE","CREATE WITH COLOR","LEAVE YOUR MARK","BRING IT TO LIGHT"][O]}`,e("#work-guide-word").replaceChildren(...Y.word.split(`
`).map(J=>Object.assign(document.createElement("span"),{textContent:J}))),e("#work-guide-title").textContent=Y.title,e("#work-guide-action").textContent=Y.action,e("#work-guide-tips").replaceChildren(...Y.tips.map(J=>Object.assign(document.createElement("li"),{textContent:J})));for(let J of["inspiration","comparison","patterns","lettering","styling"])e("#open-"+J).hidden=!Y.tools.includes(J);e("#step-goal").textContent=Y.title,e("#step-tip").textContent=Y.action,e("#caption-text").textContent=["先观察纹色，选好后开始构形。","轮廓和取形预览会随操作实时更新。","刻线与落款会同步保留在三维作品中。","作品已进入三维预览，完成后可进入展厅。"][O],O===3&&(e("#next-step").innerHTML="进入作品展厅 <span>↗</span>"),e("#work-feedback").textContent=["当前原料："+e("#canvas-sample-name").textContent,"拖动轮廓，右下角查看实时取形。",i.strokes.length?`已留下 ${i.strokes.length} 道刻线，可继续添加或撤销。`:"试着在作品上拖动，或先添一组筋线。","完成后进入展厅，有 6 种成果保存方式。"][O],e("#view-color").hidden=O>=2,e("#view-carved").hidden=O===0||O===3,e("#view-preview").hidden=O!==3,e("#toggle-overlay").hidden=O!==1;let A=location.hash==="#studio";document.documentElement.classList.toggle("workbench-active",A)}document.addEventListener("agate-craft-step",()=>{M(),X(),R("进入"+Nd[i.step].title)}),document.addEventListener("agate-craft-change",()=>{i.step===2&&(e("#work-feedback").textContent=i.strokes.length?`已留下 ${i.strokes.length} 道刻线，可撤销、擦除或继续添加。`:"试着在作品上拖动，或先添一组筋线。"),R("调整"+["原料","构形","刻线","润色"][i.step])}),document.addEventListener("agate-craft-reset",()=>{clearTimeout(T),p=[],v="",X(),R("选定原料")}),o.addEventListener("change",()=>R("调整"+["原料","构形","刻线","润色"][i.step])),o.addEventListener("pointerup",O=>{O.target.closest("#canvas-stage")&&(R(i.step===2?"留下刻线":"调整取形"),i.step===1&&(e("#work-feedback").textContent="取形位置已更新，看看右下角的成器效果。"))}),o.addEventListener("click",O=>{O.target.closest("#next-step,.craft-stepper")&&D("确认"+["原料","构形","刻线","润色"][i.step])},{capture:!0}),window.addEventListener("hashchange",()=>{X(),M(),location.hash!=="#studio"&&I.open&&I.close()}),new ResizeObserver(()=>document.documentElement.style.setProperty("--work-header",Math.ceil(e(".header").getBoundingClientRect().height)+"px")).observe(e(".header")),e("#design-canvas").addEventListener("pointerdown",M,{capture:!0}),X();function R(O){clearTimeout(T),T=setTimeout(()=>D(O),650)}function D(O){if(!i.image||!i.analysis)return;let Y=JSON.stringify([i.sample,i.kind,i.pose,i.selectedColor,i.strokes,i.inscription,i.polish,i.thickness,i.presentation,i.workTitle,i.light]);if(Y===v)return;v=Y;let A=Vr(480,360),J=A.getContext("2d");if(J.fillStyle="#eee2cd",J.fillRect(0,0,480,360),i.step===0){let H=Math.min(430/i.image.width,310/i.image.height);J.drawImage(i.image,(480-i.image.width*H)/2,(360-i.image.height*H)/2,i.image.width*H,i.image.height*H)}else Zt(J,480,360,i,{background:!1,padding:.12});p.push({label:O,step:i.step,time:new Date().toISOString(),image:A.toDataURL("image/jpeg",.72),hash:Y}),p.length>24&&p.splice(1,1)}async function F(){if(!i.image||!i.analysis){r("请先选一块原料。");return}M(),D("完成作品"),e("#gallery-title").textContent=i.workTitle||"石里有境 · 我的玛瑙作品",e("#gallery-credit").textContent=Hr(i.sample)+" · 数字工艺外观示意",e("#gallery-background").value=i.presentation.backdrop,e("#gallery-light").value=i.light,I.showModal(),e("#gallery-three").append(e("#preview-scene")),e("#gallery-replay-position").max=Math.max(0,p.length-1),e("#gallery-replay-position").value="0",await V("three")}async function V(O){if(!L){ve(),N=O,t("[data-gallery-mode]").forEach(Y=>{let A=Y.dataset.galleryMode===O;Y.setAttribute("aria-selected",String(A)),Y.tabIndex=A?0:-1}),e("#gallery-three").hidden=O!=="three",e("#gallery-flat").hidden=O==="three";for(let Y of["three","compare","replay"])e("#gallery-"+Y+"-tools").hidden=Y!==O;if(O==="three"){if(s.setView("preview"),await s.updatePreview(),await xg(),s.getScene()?.resize(),w=!!s.getScene(),e("#gallery-stage-label").textContent=w?"拖动旋转 · 滚轮缩放":"三维暂不可用，当前显示成器图；仍可对照、回看或下载方案",!w){e("#gallery-three").hidden=!0,e("#gallery-flat").hidden=!1;let Y=e("#gallery-flat"),A=Y.getContext("2d");A.fillStyle="#eee2cd",A.fillRect(0,0,Y.width,Y.height),Zt(A,Y.width,Y.height,i,{background:!1})}for(let Y of["#gallery-spin","#gallery-screenshot","#gallery-video",'[data-gallery-view="front"]','[data-gallery-view="side"]','[data-gallery-view="back"]'])e(Y).disabled=!w}else O==="compare"?oe():de()}}e(".gallery-tabs").addEventListener("keydown",O=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(O.key))return;O.preventDefault();let Y=["three","compare","replay"],A=Y.indexOf(N),J=O.key==="Home"?0:O.key==="End"?2:(A+(O.key==="ArrowRight"?1:2))%3;V(Y[J]),e(`[data-gallery-mode="${Y[J]}"]`).focus()});function ae(O,Y,A,J){let H=Math.min((A-100)/Y.width,(J-100)/Y.height);O.drawImage(Y,(A-Y.width*H)/2,(J-Y.height*H)/2,Y.width*H,Y.height*H)}function oe(){let O=e("#gallery-flat"),Y=O.getContext("2d"),A=O.width,J=O.height,H=A*Number(e("#gallery-compare").value)/100;Y.fillStyle="#eee2cd",Y.fillRect(0,0,A,J),Zt(Y,A,J,i,{background:!1,padding:.13}),Y.save(),Y.beginPath(),Y.rect(0,0,H,J),Y.clip(),Y.fillStyle="#e4d4b9",Y.fillRect(0,0,A,J),ae(Y,i.image,A,J),Y.restore(),Y.strokeStyle="#a2573c",Y.lineWidth=3,Y.beginPath(),Y.moveTo(H,0),Y.lineTo(H,J),Y.stroke(),e("#gallery-stage-label").textContent="左：整块原料 / 右：本次取形与刻线 · 非同位置透视对齐"}let Z=0;async function de(){let O=++Z,Y=Number(e("#gallery-replay-position").value),A=p[Y];if(!A)return;let J;try{J=await kd(A.image)}catch{O===Z&&j("这张快照未能读取，可以选择其他快照，或继续欣赏作品。");return}if(O!==Z)return;let H=e("#gallery-flat"),ie=H.getContext("2d");ie.fillStyle="#eee2cd",ie.fillRect(0,0,H.width,H.height),ae(ie,J,H.width,H.height),e("#gallery-replay-label").textContent=`${Y+1} / ${p.length}`,e("#gallery-stage-label").textContent=A.label+" · "+new Date(A.time).toLocaleTimeString("zh-CN")}function ve(){clearInterval(C),C=0,e("#gallery-replay-toggle").textContent="▷ 播放回看",e("#gallery-replay-toggle").setAttribute("aria-pressed","false")}function Ce(){p.length&&(Number(e("#gallery-replay-position").value)>=p.length-1&&(e("#gallery-replay-position").value="0"),de(),e("#gallery-replay-toggle").textContent="Ⅱ 暂停回看",e("#gallery-replay-toggle").setAttribute("aria-pressed","true"),C=setInterval(()=>{let O=Number(e("#gallery-replay-position").value)+1;if(O>=p.length){ve();return}e("#gallery-replay-position").value=String(O),de()},1200))}function M(){P++,cancelAnimationFrame(_),e("#work-demo").hidden=!0}function U(){if(!i.image)return;M();let O=P,Y=i.step,A=e("#work-demo"),J=e("#work-demo-canvas"),H=J.getContext("2d"),ie=performance.now();A.hidden=!1,e("#work-demo-caption").textContent=["操作示范：左侧选择原料，观察天然纹色","操作示范：拖动轮廓，挑选想保留的颜色","操作示范：按住拖动，在作品上留下一笔","操作示范：调整光泽，再拖动作品查看厚度"][Y];let re={...i,pose:{...i.pose},strokes:structuredClone(i.strokes)},ue=matchMedia("(prefers-reduced-motion:reduce)").matches,fe=ge=>{if(O!==P)return;let Be=Math.min(1,(ge-ie)/4e3),Te=ue?.6:Math.sin(Be*Math.PI*2)*.5+.5;H.fillStyle="#eee2cd",H.fillRect(0,0,840,600),Y<=1?(ae(H,i.image,840,600),Y===1&&(H.save(),H.translate(330+Te*160,300),H.scale(140,140),mi(H,i.kind),H.fillStyle="#fff4cf2a",H.fill(),H.strokeStyle="#9e4936",H.lineWidth=.03,H.stroke(),H.restore()),H.fillStyle="#fff7e8",H.beginPath(),H.arc(330+Te*160,Y===0?210+Te*70:300,12,0,Math.PI*2),H.fill(),H.strokeStyle="#9e4936",H.lineWidth=3,H.stroke()):(Y===2?re.strokes=[...i.strokes,{width:.023,depth:.6,points:Array.from({length:Math.max(2,Math.round(Be*40))},(E,x)=>[-.5+x*.025,Math.sin(x*.08)*.15])}]:re.polish=.2+Te*.7,Zt(H,840,600,re,{background:!1,padding:.14})),!ue&&Be<1?_=requestAnimationFrame(fe):ue||setTimeout(()=>{O===P&&M()},800)};fe(ie)}async function ne(){let O=e("#gallery-offline");O.disabled=!0,j("正在封装当前作品与离线欣赏程序…");try{D("保存作品页");let Y=new URL("./viewer.bundle.js",import.meta.url);Y.search=new URL(import.meta.url).search;let A=await fetch(Y);if(!A.ok)throw Error("离线欣赏程序暂时未能读取，请稍后重试。");let J=await A.text(),H=Vr(720,540),ie=H.getContext("2d");ie.fillStyle="#eee2cd",ie.fillRect(0,0,720,540),ae(ie,i.image,720,540);let re=Vr(900,700);re.getContext("2d").fillStyle="#eee2cd",re.getContext("2d").fillRect(0,0,900,700),Zt(re.getContext("2d"),900,700,i,{background:!1});let ue={title:i.workTitle||"石里有境 · 我的作品",credit:Hr(i.sample),references:Fd(i.sample),kind:i.kind,outline:ei(i.kind),texture:gi(i,{size:768}).toDataURL(),normal:vo(i.strokes,384,i.inscription).toDataURL(),polish:i.polish,light:i.light,thickness:i.thickness,presentation:{...i.presentation},source:H.toDataURL("image/jpeg",.82),finished:re.toDataURL(),timeline:p.map(({hash:Te,...E})=>E),project:n.projectData()},fe=JSON.stringify(ue).replace(/</g,"\\u003c"),ge=J.replace(/<\/script/gi,"<\\/script"),Be='<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>石里有境 · 离线作品</title></head><body><script type="application/json" id="work-data">'+fe+"<\/script><script>"+ge+"<\/script></body></html>";a(new Blob([Be],{type:"text/html;charset=utf-8"}),_o(i.workTitle)+"-可交互作品.html"),j("作品页已下载：离线打开即可转动、对照、回看，素材署名已保留。")}catch(Y){j(Y.message||"作品页导出失败，请重试。")}finally{O.disabled=!1}}function he(O=!1){L&&(L.cancelled=O,cancelAnimationFrame(L.frame),L.recorder.state!=="inactive"&&L.recorder.stop())}async function pe(){try{if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream)throw Error("当前浏览器不支持短片录制，可使用3D截图或离线作品页。");let O=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"].find(E=>MediaRecorder.isTypeSupported(E));if(!O)throw Error("当前浏览器没有可用的录制格式，可使用3D截图或离线作品页。");await V("three");let Y=s.getScene();if(!Y)throw Error("三维暂不可用，无法录制旋转短片。");let A=Vr(1280,720),J=A.getContext("2d"),H=A.captureStream(24),ie=new MediaRecorder(H,{mimeType:O,videoBitsPerSecond:55e5}),re=Y.stone.rotation.clone(),ue=Y.controls.autoRotate,fe=[],ge={recorder:ie,stream:H,scene:Y,rotation:re,auto:ue,frame:0,cancelled:!1};L=ge,Y.setAuto(!1),Y.controls.enabled=!1,I.querySelectorAll("button,input,select").forEach(E=>{E.id!=="gallery-video"&&E.id!=="gallery-close"&&(E.dataset.recordDisabled=String(E.disabled),E.disabled=!0)}),e("#gallery-video").innerHTML="× 取消录制<small>正在生成当前作品的旋转短片</small>",ie.ondataavailable=E=>{E.data.size&&fe.push(E.data)},ie.onstop=()=>{cancelAnimationFrame(ge.frame),H.getTracks().forEach(E=>E.stop()),Y.stone.rotation.copy(re),Y.setAuto(I.open?ue:!1),Y.controls.enabled=!0,L=null,I.querySelectorAll("[data-record-disabled]").forEach(E=>{E.disabled=E.dataset.recordDisabled==="true",delete E.dataset.recordDisabled}),e("#gallery-video").innerHTML="▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small>",!ge.cancelled&&fe.length?(a(new Blob(fe,{type:O}),_o(i.workTitle)+"-旋转短片."+(O.includes("mp4")?"mp4":"webm")),j("旋转短片已保存，分辨率 1280×720。")):j("已取消录制，作品保持不变。")},ie.onerror=()=>{ge.cancelled=!0,he(!0),j("录制未完成，可以重试或导出截图。")};let Be=performance.now();ie.start(250);let Te=E=>{if(L!==ge)return;if(document.hidden||!I.open){he(!0);return}let x=Math.min(1,(E-Be)/6e3);Y.stone.rotation.y=re.y+x*Math.PI*2,Y.render(),J.fillStyle="#f5edde",J.fillRect(0,0,1280,720),J.fillStyle="#4d3829",J.font="bold 28px sans-serif",J.fillText(i.workTitle||"石里有境 · 我的玛瑙作品",34,46,1150);let W=Y.renderer.domElement,ee=Math.min(1212/W.width,560/W.height),le=W.width*ee,se=W.height*ee;J.drawImage(W,(1280-le)/2,72+(560-se)/2,le,se),J.font="15px sans-serif",J.fillText(Hr(i.sample),34,674,1212),J.font="13px sans-serif",J.fillText("石里有境 / 阜新玛瑙文化数字创作 · 数字工艺外观示意",34,702),j(`正在录制旋转短片 ${Math.min(6,Math.floor(x*6))} / 6 秒，请保持此窗口打开。`),x>=1?he(!1):ge.frame=requestAnimationFrame(Te)};Te(Be)}catch(O){j(O.message||"录制暂不可用，请重试。")}}return document.addEventListener("visibilitychange",()=>{document.hidden&&(ve(),L&&he(!0))}),{openGallery:F,capture:D,sync:X,get timeline(){return p.map(({hash:O,...Y})=>Y)},restoreTimeline(O){p=Array.isArray(O)?O.filter(Y=>typeof Y?.image=="string"&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(Y.image)&&Y.image.length<2e5&&typeof Y.label=="string"&&Y.label.length<80&&typeof Y.time=="string").slice(-24).map(Y=>({image:Y.image,label:Y.label,time:Y.time,step:Number(Y.step)||0})):[],v=""}}}var zd=[{id:"bands",title:"层纹之间，自有山河",category:"specimen",tag:"纹理标本",file:"agate-bands",alt:"玛瑙切片的层叠条带与色彩实拍",note:"沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。",origin:"公开玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"},{id:"libation",title:"一盏温润，双耳生姿",category:"vessel",tag:"馆藏器物",file:"agate-libation-cup",alt:"清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳",note:"看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。",origin:"中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425",author:"Cleveland Museum of Art / Gary Kirchenbauer",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.clevelandart.org/art/1920.425"},{id:"moss",title:"把一片绿意，佩在身上",category:"jewelry",tag:"实物佩饰",file:"agate-moss-pendant",alt:"带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理",note:"圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。",origin:"苔藓玛瑙吊坠 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",source:"https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg"},{id:"crystal",title:"光透过石，层次便醒来",category:"specimen",tag:"纹理标本",file:"agate-crystal",alt:"透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞",note:"外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。",origin:"透光玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg"},{id:"carnelian",title:"赤色成杯，雕出一朵花",category:"vessel",tag:"馆藏器物",file:"agate-carnelian-cup",alt:"中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍",note:"花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。",origin:"中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882",author:"The Metropolitan Museum of Art",license:"CC0 1.0 / Public Domain",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.metmuseum.org/art/collection/search/44144"},{id:"nodule",title:"从一块原石，读起",category:"specimen",tag:"纹理标本",file:"agate-nodule",alt:"玛瑙结核标本的外缘与内部纹理实拍",note:"外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。",origin:"公开玛瑙结核标本 · 非阜新原料产地证明",author:"James St. John",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",source:"https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"}],Gr=document.querySelector("#agate-gallery"),Bd=Gr.querySelector(".photo-grid"),kt=document.createElement("dialog");kt.id="photo-dialog";kt.className="photo-dialog";kt.setAttribute("aria-labelledby","photo-title");kt.innerHTML='<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>';document.body.append(kt);var Pt=n=>kt.querySelector(n),Kc="all",Ps=0,Hd=()=>zd.filter(n=>Kc==="all"||n.category===Kc);function Vd(n){kt.classList.toggle("photo-zoomed",n),Pt("#photo-zoom").setAttribute("aria-pressed",String(n)),Pt("#photo-zoom").textContent=n?"还原全貌 −":"放大细节 ＋",Pt(".photo-viewport").scrollTo(0,0)}function xo(n){let e=Hd();Ps=(n+e.length)%e.length;let t=e[Ps];Vd(!1),Pt("#photo-large").src=`./assets/photos/${t.file}.webp`,Pt("#photo-large").alt=t.alt,Pt("#photo-title").textContent=t.title,Pt("#photo-tag").textContent=t.tag,Pt("#photo-note").textContent=t.note,Pt("#photo-origin").textContent=t.origin,Pt("#photo-credit").textContent=`摄影 / 图像提供：${t.author} · ${t.license}`,Pt("#photo-source").href=t.source,Pt("#photo-license").href=t.licenseUrl,Pt("#photo-counter").textContent=`${String(Ps+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}`,Pt("#photo-prev").disabled=Pt("#photo-next").disabled=e.length<2}function Gd(){let n=Hd();Bd.innerHTML=n.map((e,t)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${t}" aria-label="放大查看：${e.title}"><span class="photo-frame"><img src="./assets/photos/${e.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${e.alt}"><span class="photo-category">${e.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(zd.indexOf(e)+1).padStart(2,"0")}</span><span><strong>${e.title}</strong><small>${e.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join(""),Gr.querySelector("#photo-result-count").textContent=`${n.length} 件实物`,Bd.querySelectorAll("[data-photo-index]").forEach(e=>e.onclick=()=>{xo(Number(e.dataset.photoIndex)),kt.showModal()})}Gr.querySelectorAll("[data-photo-filter]").forEach(n=>n.onclick=()=>{Kc=n.dataset.photoFilter,Gr.querySelectorAll("[data-photo-filter]").forEach(e=>e.setAttribute("aria-pressed",String(e===n))),Gd()});Pt("#photo-close").onclick=()=>kt.close();Pt("#photo-prev").onclick=()=>xo(Ps-1);Pt("#photo-next").onclick=()=>xo(Ps+1);Pt("#photo-zoom").onclick=()=>Vd(!kt.classList.contains("photo-zoomed"));kt.addEventListener("keydown",n=>{(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),xo(Ps+(n.key==="ArrowLeft"?-1:1)))});kt.addEventListener("click",n=>{if(n.target===kt){let e=kt.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&kt.close()}});window.addEventListener("hashchange",()=>{kt.open&&kt.close()});document.querySelector("#gallery-jump").onclick=()=>Gr.scrollIntoView({behavior:"smooth"});Gd();Oa();function zp(n,e,{onReady:t=()=>{}}={}){let i;try{i=new mr({antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,1.65)),i.setClearColor(1183243),i.outputColorSpace=It,i.domElement.className="formation-cinema-canvas",i.domElement.setAttribute("aria-hidden","true"),n.append(i.domElement);let s=new Ri,r=new os(-1,1,1,-1,0,1),a=new oa(new Uint8Array([19,15,12,255]),1,1);a.needsUpdate=!0;let o={u_map0:{value:a},u_map1:{value:a},u_map2:{value:a},u_map3:{value:a},u_aspects:{value:new ft(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new ye},u_light:{value:0}},l=new hn({uniforms:o,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`}),c=new pt(new Vn(2,2),l);s.add(c);let h=[],d=[],u=new Set,f=!1,g=!1,y=!1,m=!1,p=!1,T=0,v=0,_=0,P=1,C=0,L=new ye,N=matchMedia("(prefers-reduced-motion: reduce)"),w=new Ea;function b(){return u.has(Math.floor(_))&&u.has(Math.ceil(_))}function I(){let F=b();F!==p&&(p=F,p&&(o.u_progress.value=_),n.classList.toggle("cinema-ready",p),p&&t())}function G(F){return d[F]||(d[F]=w.loadAsync(e[F]).then(V=>{if(y){V.dispose();return}V.colorSpace=It,V.minFilter=Kt,V.magFilter=Kt,V.generateMipmaps=!1,o["u_map"+F].value=V,o.u_aspects.value.setComponent(F,V.image.width/V.image.height),h.push(V),u.add(F),I()}).catch(()=>{})),d[F]}function j(){if(y)return;let{width:F,height:V}=n.getBoundingClientRect();F<2||V<2||(i.setSize(F,V,!1),o.u_view.value=F/V)}function X(F){if(T=0,!f||y)return;if(F-v<1e3/(matchMedia("(pointer:coarse)").matches?24:30)){T=requestAnimationFrame(X);return}let V=Math.min(.08,(F-v)/1e3||.033);v=F,g&&!N.matches&&(o.u_time.value+=V);let ae=N.matches?1:1-Math.exp(-V*7);b()&&(o.u_progress.value+=(_-o.u_progress.value)*ae),o.u_zoom.value+=(P-o.u_zoom.value)*ae,o.u_light.value+=(C-o.u_light.value)*ae,o.u_pointer.value.lerp(N.matches?new ye:L,ae),i.render(s,r),T=requestAnimationFrame(X)}function K(F){let V=n.getBoundingClientRect();L.set((F.clientX-V.left)/V.width*2-1,1-(F.clientY-V.top)/V.height*2)}function R(){L.set(0,0)}n.addEventListener("pointermove",K),n.addEventListener("pointerleave",R);let D=new ResizeObserver(j);return D.observe(n),i.domElement.addEventListener("webglcontextlost",F=>{F.preventDefault(),m=!0,n.classList.remove("cinema-ready"),f=!1,cancelAnimationFrame(T)}),{setProgress(F,V=!1){_=Fa.clamp(F,0,3),G(Math.floor(_)),G(Math.ceil(_)),I(),V&&(o.u_progress.value=_),f&&setTimeout(()=>{!y&&f&&G(Math.min(3,Math.ceil(_)+1))},200)},setActive(F){m||(f=F,f?(j(),v=performance.now(),T||(T=requestAnimationFrame(X))):(cancelAnimationFrame(T),T=0))},setPlaying(F){g=F},setDetail(F){P=F?1.42:1},setLight(F){C=F?1:0},dispose(){y=!0,f=!1,cancelAnimationFrame(T),D.disconnect(),n.removeEventListener("pointermove",K),n.removeEventListener("pointerleave",R),h.forEach(F=>F.dispose()),a.dispose(),c.geometry.dispose(),l.dispose(),i.dispose(),i.domElement.remove()}}}var wu=[{short:"岩石留空",title:"一块石的故事，始于一处空隙。",copy:"在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。",caption:"岩石中的空隙，为后来的矿物生长提供空间。",key:"空间"},{short:"富硅流体",title:"水，把形成玛瑙的物质带来。",copy:"含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。",caption:"富硅流体进入空隙，带来形成二氧化硅矿物的物质。",key:"物质"},{short:"结晶成纹",title:"细小的差异，长成层层纹理。",copy:"在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。",caption:"以常见同心层纹为例：结构与成分的差异，带来可见层次。",key:"纹色"},{short:"因色构形",title:"自然留下纹色，构思从你开始。",copy:"天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。",caption:"从“石如何形成”，走到“我想把它做成什么”。",key:"构思"}],Hp=wu.map((n,e)=>`./assets/formation-v2/stage-0${e+1}.webp`),mb=["沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。","沿着裂隙看：进入腔体的水，与湿润表面上的折射。","沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。","沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。"],gb=["A PLACE TO BEGIN","WATER BRINGS SILICA","LAYERS TAKE SHAPE","FROM STONE TO CREATION"],Ha=document.createElement("section");Ha.className="formation-teaser";Ha.setAttribute("aria-labelledby","formation-teaser-title");Ha.innerHTML='<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>';document.querySelector("#agate-gallery").before(Ha);var mt=document.createElement("dialog");mt.id="formation-dialog";mt.className="formation-dialog";mt.setAttribute("aria-labelledby","formation-title");mt.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${Hp.map((n,e)=>`<img src="${n}" data-art-stage="${e}" loading="lazy" decoding="async" alt="" class="${e===0?"visible":""}">`).join("")}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${wu.map((n,e)=>`<button data-formation-step="${e}" aria-pressed="${e===0}"><img src="./assets/formation-v2/stage-0${e+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${e+1}</b>${n.short}</span><i></i></button>`).join("")}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;document.body.append(mt);var et=n=>mt.querySelector(n),Vp="agate-formation-intro-v2",Wt=-1,di=0,za=null,Gp=!1,Dn=null,Wp=0,qp=0,yr=!1,Ba=!1,yb=matchMedia("(prefers-reduced-motion: reduce)");function bn(){clearTimeout(za),za=null,mt.classList.remove("formation-running"),et("#formation-play").setAttribute("aria-pressed","false"),et("#formation-play").textContent="▷ 自动演示",Dn?.setPlaying(!1)}function Xp(){let n=qp+(performance.now()-Wp)/1e3;if(n>=36){$n(3),bn();return}let e=Math.min(3,Math.floor(n/9)),t=n%9,i=Math.max(0,Math.min(1,(t-6)/3));$n(Math.min(3,e+i*i*(3-2*i))),za=setTimeout(Xp,80)}function Yp(){bn(),di>=3&&$n(0);let n=di%1;qp=Math.floor(di)*9+(n?6+3*(.5-Math.sin(Math.asin(1-2*n)/3)):0),Wp=performance.now(),mt.classList.add("formation-running"),et("#formation-play").setAttribute("aria-pressed","true"),et("#formation-play").textContent="Ⅱ 暂停演示",Dn?.setPlaying(!0),za=setTimeout(Xp,80)}function $n(n,e=!1){di=Math.max(0,Math.min(3,n));let t=Math.round(di),i=wu[t];Dn?.setProgress(di,e);let s=Math.floor(di),r=di-s;mt.querySelectorAll("[data-art-stage]").forEach(a=>{let o=Number(a.dataset.artStage);a.style.opacity=o===s?String(1-r):o===s+1?String(r):"0"}),et("#formation-progress").value=Math.round(di*1e3),et("#formation-progress-label").value=`0${t+1} / 04`,t!==Wt&&(Wt=t,et(".formation-visual").dataset.phase=Wt,et(".formation-cinema").style.backgroundImage=`url("./assets/formation-v2/stage-0${Wt+1}-thumb.webp")`,et("#formation-chapter-en").textContent=`0${Wt+1} / ${gb[Wt]}`,et("#formation-stage-label").textContent=`0${Wt+1} / ${i.key}`,et("#formation-number").textContent=`0${Wt+1}`,et("#formation-title").textContent=i.title,et("#formation-copy").textContent=i.copy,et("#formation-caption").textContent=i.caption,et("#formation-observation").textContent=mb[Wt],mt.querySelectorAll("[data-formation-step]").forEach(a=>a.setAttribute("aria-pressed",String(Number(a.dataset.formationStep)===Wt))),et("#formation-previous").disabled=Wt===0,et("#formation-next").innerHTML=Wt===3?"选石创作 <span>↗</span>":"继续看 <span>→</span>")}function $p(){Gp=!0;try{localStorage.setItem(Vp,"1")}catch{}}function jp(){$p(),mt.close(),location.hash!=="#studio"&&(location.hash="studio")}function Zp(n){yr=n,et(".formation-visual").classList.toggle("formation-detail",yr),et("#formation-detail").setAttribute("aria-pressed",String(yr)),et("#formation-detail").textContent=yr?"− 还原全貌":"＋ 微距细看",Dn?.setDetail(yr)}function Eu(){mt.open||(et(".formation-notes").open=!1,mt.classList.remove("formation-focused"),et("#formation-focus").setAttribute("aria-pressed","false"),et("#formation-focus").textContent="⤢ 大画面",Zp(!1),mt.showModal(),mt.scrollTop=0,Dn||(Dn=zp(et(".formation-cinema"),Hp)),Dn?.setActive(!0),$n(0,!0),yb.matches||Yp())}function Jp(){requestAnimationFrame(()=>{let n=Gp;try{n=n||localStorage.getItem(Vp)==="1"}catch{}!n&&!document.querySelector("#studio").hidden&&!document.querySelector("dialog[open]")&&Eu()})}Ha.querySelector(".formation-open").onclick=Eu;var dc=document.createElement("button");dc.className="demo-button formation-replay";dc.textContent="玛瑙怎么形成？";dc.onclick=Eu;document.querySelector("#studio .heading-actions").prepend(dc);mt.querySelectorAll("[data-formation-step]").forEach(n=>n.onclick=()=>{bn(),$n(Number(n.dataset.formationStep))});et("#formation-progress").oninput=n=>{bn(),$n(Number(n.target.value)/1e3,!0)};et("#formation-next").onclick=()=>{bn(),Wt===3?jp():$n(Wt+1)};et("#formation-previous").onclick=()=>{bn(),$n(Math.max(0,Wt-1))};et("#formation-play").onclick=()=>za?bn():Yp();et("#formation-skip").onclick=jp;et("#formation-close").onclick=()=>mt.close();et("#formation-detail").onclick=()=>Zp(!yr);et("#formation-light").onclick=()=>{Ba=!Ba,et(".formation-visual").classList.toggle("formation-bright",Ba),et("#formation-light").setAttribute("aria-pressed",String(Ba)),Dn?.setLight(Ba)};et("#formation-focus").onclick=()=>{let n=mt.classList.toggle("formation-focused");et("#formation-focus").setAttribute("aria-pressed",String(n)),et("#formation-focus").textContent=n?"⤡ 返回图文":"⤢ 大画面"};mt.addEventListener("close",()=>{bn(),Dn?.setActive(!1),$p()});mt.addEventListener("cancel",bn);mt.addEventListener("keydown",n=>{n.target.type!=="range"&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),bn(),$n(Math.min(3,Math.max(0,Wt+(n.key==="ArrowRight"?1:-1)))))});et(".formation-notes").addEventListener("toggle",()=>{et(".formation-notes").open&&bn()});mt.querySelectorAll("[data-art-stage]").forEach(n=>n.addEventListener("error",()=>{n.hidden=!0}));document.addEventListener("visibilitychange",()=>{document.hidden?(bn(),Dn?.setActive(!1)):mt.open&&Dn?.setActive(!0)});window.addEventListener("hashchange",()=>{mt.open&&mt.close()});$n(0);var Tu=[{id:"blossom",name:"五瓣花",caption:"给纹色添一朵小花"},{id:"cloud",name:"流云",caption:"把弧线连成一片云"},{id:"waves",name:"水波",caption:"三重涟漪，疏密有致"},{id:"bamboo",name:"竹影",caption:"细枝与叶，顺势而生"},{id:"stars",name:"星芒",caption:"一点星光，几何点缀"},{id:"sunrise",name:"朝阳",caption:"从山线里升起的光"},{id:"fan",name:"折扇",caption:"展开一面自己的小景"},{id:"ridge",name:"叠嶂",caption:"三道山线，留一点远意"}];function vb(n){let e=[],t=s=>e.push(s),i=(s,r=48)=>Array.from({length:r+1},(a,o)=>s(o/r));if(n==="blossom"){for(let s=0;s<5;s++){let r=s*Math.PI*2/5;t(i(a=>{let o=a*Math.PI*2,l=.28+.25*Math.cos(o);return[Math.cos(r)*l-Math.sin(r)*Math.sin(o)*.17,Math.sin(r)*l+Math.cos(r)*Math.sin(o)*.17]}))}t(i(s=>[Math.cos(s*Math.PI*2)*.08,Math.sin(s*Math.PI*2)*.08]))}else if(n==="cloud")t(i(s=>{let r=s*Math.PI*2,a=.45+.08*Math.cos(r*5);return[Math.cos(r)*a*1.3,Math.sin(r)*a*.65]},96)),t(i(s=>[-.48+s*.96,.18+Math.sin(s*Math.PI*2)*.06]));else if(n==="waves")for(let s=0;s<3;s++)t(i(r=>[-.7+r*1.4,(s-1)*.23+Math.sin(r*Math.PI*3)*.09]));else if(n==="bamboo"){t([[-.07,.65],[.03,-.65]]);for(let s=0;s<3;s++){let r=-.4+s*.35;t([[-.1,r],[.1,r]]);for(let a of[-1,1])t([[0,r],[a*.48,r-.24],[a*.22,r-.04],[0,r]])}}else if(n==="stars")for(let[s,r,a]of[[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])t(Array.from({length:9},(o,l)=>{let c=l/8*Math.PI*2-Math.PI/2,h=l%2?a*.24:a;return[s+Math.cos(c)*h,r+Math.sin(c)*h]}));else if(n==="sunrise"){t(i(s=>[Math.cos(Math.PI+s*Math.PI)*.3,-.02+Math.sin(Math.PI+s*Math.PI)*.3],32)),t([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let s=0;s<7;s++){let r=Math.PI+s/6*Math.PI;t([[Math.cos(r)*.4,Math.sin(r)*.4],[Math.cos(r)*.53,Math.sin(r)*.53]])}t([[-.58,.35],[.58,.35]])}else if(n==="fan"){t(i(s=>[Math.cos(Math.PI*1.12+s*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+s*Math.PI*.76)*.88]));for(let s=0;s<=8;s++){let r=Math.PI*1.12+s/8*Math.PI*.76;t([[0,.5],[Math.cos(r)*.72,.5+Math.sin(r)*.88]])}}else if(n==="ridge")for(let s=0;s<3;s++)t([[-.7,.2+s*.18],[-.35,-.4+s*.18],[-.1,-.08+s*.18],[.28,-.5+s*.18],[.7,.2+s*.18]]);else throw Error("未知纹样");return e}function fc(n,{x:e=0,y:t=0,scale:i=.75,angle:s=0}={},r=.018,a=.6){let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o);return vb(n).map(h=>({width:r,depth:a,points:h.map(([d,u])=>[e+(d*l-u*c)*i,t+(d*c+u*l)*i])}))}function Au(n,e){let t=[];for(let i of n){let s=[],r=()=>{s.length>1&&t.push({...i,points:s}),s=[]};for(let a of i.points)a.every(o=>Math.abs(o)<=1)&&e(...a)?s.push(a):r();r()}return t}pi();var Cu={fruit:"秋实",leaf:"一叶",mountain:"远山",round:"团圆",drop:"凝露",heart:"心意",custom:"手绘成器"};function Kp(n){return n==="bands"?"Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n==="nodule"?"James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"用户导入照片":"程序化教学样本"}function Qp(n){let{state:e,experience:t,$:i,$$:s,toast:r,download:a}=n,o=[["patterns","✧","纹样百宝箱","8种纹样，自由摆放"],["lettering","印","刻字落款","写下名字与心意"],["styling","◈","文创搭配","挂件、摆件与氛围"],["inspiration","卜","灵感抽签","换一种构思出发"],["comparison","▥","方案对比","把喜欢的放在一起"],["poster","▣","纪念海报","带走自己的设计"]];i(".craft-stepper").insertAdjacentHTML("afterend",`<div class="playground"><div class="playground-heading"><span>玩法百宝箱</span><small>再给作品一点自己的想法</small></div><div class="playground-grid">${o.map(([R,D,F,V])=>`<button id="open-${R}"><i>${D}</i><span>${F}<small>${V}</small></span><b>↗</b></button>`).join("")}</div></div>`);function l(R,D,F,V){let ae=document.createElement("dialog");return ae.id=R,ae.className="play-dialog",ae.innerHTML=`<div class="dialog-heading"><div><p class="eyebrow">YOUR CREATIVE PLAYGROUND</p><h2>${D}</h2></div><button class="icon-button" data-close-play aria-label="关闭">×</button></div><p class="play-dialog-intro">${F}</p>${V}`,document.body.append(ae),ae.querySelector("[data-close-play]").onclick=()=>ae.close(),ae}let c=l("pattern-dialog","让一笔纹样，成为你的点睛。","所有纹样均为本工坊原创装饰示意。选择后可在作品上拖动，满意再刻入。",`<div class="play-editor"><div><canvas id="pattern-preview" width="840" height="640" aria-label="拖动纹样调整位置"></canvas><p id="pattern-feedback" class="hint" role="status"></p></div><div class="play-editor-controls"><div id="pattern-library" class="pattern-library">${Tu.map(R=>`<button data-pattern="${R.id}" title="${R.caption}"><canvas width="100" height="74"></canvas><span>${R.name}</span></button>`).join("")}</div><label class="field-label" for="pattern-size">纹样大小 <output id="pattern-size-value">75%</output></label><input id="pattern-size" type="range" min="20" max="130" value="75"><label class="field-label" for="pattern-angle">纹样角度 <output id="pattern-angle-value">0°</output></label><input id="pattern-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="pattern-x" type="range" min="-85" max="85" value="0" aria-label="纹样水平位置"></label><label>Y <input id="pattern-y" type="range" min="-85" max="85" value="0" aria-label="纹样垂直位置"></label></div><button id="center-pattern" class="text-button">居中摆放</button><button id="apply-pattern" class="primary full">刻入这组纹样 ＋</button><p class="hint">超出作品的部分会裁去。应用后仍可用刻线撤销、重做或擦除。</p></div></div>`),h="blossom",d={x:0,y:0,scale:.75,angle:0},u;function f(){return Au(fc(h,d,e.toolWidth,e.depth),(...R)=>zr(e.kind,...R))}function g(){let R=i("#pattern-preview"),D=f(),F={...e,strokes:[...e.strokes,...D]};u=Zt(R.getContext("2d"),R.width,R.height,F,{texture:gi(F,{size:640}),padding:.1}),s("[data-pattern]").forEach(V=>V.classList.toggle("selected",V.dataset.pattern===h)),i("#pattern-feedback").textContent=`${Tu.find(V=>V.id===h).name} · ${D.length}段可见刻线 · 拖动摆放，滑杆缩放与旋转`,i("#apply-pattern").disabled=!D.length,i("#pattern-x").value=Math.round(d.x*100),i("#pattern-y").value=Math.round(d.y*100)}for(let R of s("[data-pattern]")){let D=R.querySelector("canvas").getContext("2d");D.strokeStyle="#d9bc8b",D.lineWidth=1.4;for(let F of fc(R.dataset.pattern))D.beginPath(),F.points.forEach(([V,ae],oe)=>oe?D.lineTo(50+V*45,37+ae*36):D.moveTo(50+V*45,37+ae*36)),D.stroke();R.onclick=()=>{h=R.dataset.pattern,g()}}i("#open-patterns").onclick=()=>{e.image&&(t.setStep(2),c.showModal(),g())},i("#pattern-size").oninput=R=>{d.scale=Number(R.target.value)/100,i("#pattern-size-value").value=R.target.value+"%",g()},i("#pattern-angle").oninput=R=>{d.angle=Number(R.target.value),i("#pattern-angle-value").value=R.target.value+"°",g()};for(let R of["x","y"])i("#pattern-"+R).oninput=D=>{d[R]=Number(D.target.value)/100,g()};i("#center-pattern").onclick=()=>{d.x=d.y=0,g()};function y(R,D,F){let V=!1,ae=null,oe=Z=>{let de=R.getBoundingClientRect(),ve=D();return{x:((Z.clientX-de.left)/de.width*R.width-ve.x)/ve.w*2-1,y:((Z.clientY-de.top)/de.height*R.height-ve.y)/ve.h*2-1}};R.onpointerdown=Z=>{V=!0,ae=oe(Z),R.setPointerCapture(Z.pointerId),F(ae,!0)},R.onpointermove=Z=>{V&&F(oe(Z),!1)},R.onpointerup=R.onpointercancel=()=>V=!1}y(i("#pattern-preview"),()=>u,R=>{d.x=_t(R.x,-.85,.85),d.y=_t(R.y,-.85,.85),g()}),i("#apply-pattern").onclick=()=>{let R=f();R.length&&(t.editStrokes(D=>D.push(...R)),c.close(),r("纹样已刻入作品，可以继续添加、擦除或撤销。"))};let m=l("lettering-dialog","给这件作品，留一句心意。","在预览上拖动落款，调整字形、大小和角度。确定后会进入二维作品与三维刻痕。",'<div class="play-editor"><canvas id="lettering-preview" width="840" height="640" aria-label="拖动落款调整位置"></canvas><div class="play-editor-controls"><label class="field-label" for="inscription-text">写什么？最多8字</label><input id="inscription-text" type="text" maxlength="8" placeholder="例如：阜新 · 初见"><label class="field-label" for="inscription-font">落款字形</label><select id="inscription-font"><option value="serif">宋体 · 书卷感</option><option value="sans">黑体 · 简洁</option></select><label class="check"><input id="inscription-vertical" type="checkbox">竖排落款</label><label class="field-label" for="inscription-size">字的大小</label><input id="inscription-size" type="range" min="8" max="35" value="18"><label class="field-label" for="inscription-angle">落款角度</label><input id="inscription-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="inscription-x" type="range" min="-85" max="85" value="0" aria-label="落款水平位置"></label><label>Y <input id="inscription-y" type="range" min="-85" max="85" value="32" aria-label="落款垂直位置"></label></div><button id="apply-lettering" class="primary full">把心意刻进作品 →</button><button id="remove-lettering" class="text-button">清除当前落款</button><p class="hint">落款仅保留作品轮廓内的部分。可随时重新打开修改，或关闭弹窗取消本次修改。</p></div></div>'),p,T;function v(){let R=i("#lettering-preview"),D={...e,inscription:p};T=Zt(R.getContext("2d"),R.width,R.height,D,{padding:.1}),i("#inscription-x").value=Math.round(p.x*100),i("#inscription-y").value=Math.round(p.y*100)}i("#open-lettering").onclick=()=>{if(e.image){t.setStep(2),p=structuredClone(e.inscription||{text:"阜新",x:0,y:.32,size:.18,angle:0,font:"serif",vertical:!1});for(let R of["text","font","size","angle","vertical"]){let D=i("#inscription-"+R);R==="vertical"?D.checked=p[R]:D.value=R==="size"?Math.round(p.size*100):p[R]}m.showModal(),v()}};for(let R of["text","font","size","angle","vertical","x","y"])i("#inscription-"+R).oninput=D=>{p[R]=R==="vertical"?D.target.checked:R==="text"?Array.from(D.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,8).join(""):R==="font"?D.target.value:Number(D.target.value)/(R==="size"||R==="x"||R==="y"?100:1),v()};y(i("#lettering-preview"),()=>T,R=>{p.x=_t(R.x,-.85,.85),p.y=_t(R.y,-.85,.85),v()}),i("#apply-lettering").onclick=()=>{e.inscription=p.text.trim()?structuredClone(p):null,t.refresh(),m.close(),r("落款已留在作品上，三维刻痕也会同步更新。")},i("#remove-lettering").onclick=()=>{e.inscription=null,t.refresh(),m.close(),r("已清除落款。")},i(".finish-controls").insertAdjacentHTML("afterbegin",'<details id="styling-panel" class="styling-panel"><summary>◈ 文创搭配 · 换个方式欣赏</summary><label class="field-label" for="display-style">成品搭配</label><select id="display-style"><option value="stone">素石 · 只看作品</option><option value="pendant">绳系挂件</option><option value="stand">展台摆件</option></select><label class="field-label" for="cord-color">挂绳颜色</label><select id="cord-color"><option value="cinnabar">朱砂红</option><option value="ink">松烟黑</option><option value="jade">竹青绿</option></select><label class="field-label" for="display-backdrop">展示氛围</label><select id="display-backdrop"><option value="ink">墨色工坊</option><option value="paper">暖纸展厅</option><option value="night">夜色藏蓝</option></select><p class="hint">搭配为文创外观示意，可随3D截图保存。</p></details>');function _(){let R=e.presentation;i("#studio").dataset.backdrop=R.backdrop,i("#display-style").value=R.style,i("#display-backdrop").value=R.backdrop,i("#cord-color").value=R.cord,i("#cord-color").disabled=R.style!=="pendant",i("#work-title").value=e.workTitle||""}i("#open-styling").onclick=()=>{t.setStep(3),i("#styling-panel").open=!0,_(),i("#styling-panel").scrollIntoView({behavior:"smooth",block:"center"})};for(let[R,D]of[["display-style","style"],["cord-color","cord"],["display-backdrop","backdrop"]])i("#"+R).onchange=F=>{e.presentation={...e.presentation,[D]:F.target.value},_(),t.refresh()};i(".heading-actions").insertAdjacentHTML("beforebegin",'<div class="work-title"><label for="work-title">为作品起名</label><input id="work-title" maxlength="24" placeholder="例如：一叶知秋" aria-label="作品名称，最多24字"></div>'),i("#work-title").oninput=R=>e.workTitle=Array.from(R.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,24).join("");let P=[{id:"moon",title:"月下团圆",desc:"圆牌 · 水波 · 夜色挂件",kind:"round",pattern:"waves",text:"团圆",style:"pendant",backdrop:"night"},{id:"mountain",title:"山海有约",desc:"山形 · 朝阳 · 暖纸展台",kind:"mountain",pattern:"sunrise",text:"山海",style:"stand",backdrop:"paper"},{id:"leaf",title:"竹影清风",desc:"叶形 · 竹影 · 竹青挂绳",kind:"leaf",pattern:"bamboo",text:"清风",style:"pendant",backdrop:"ink"},{id:"heart",title:"心上繁花",desc:"心形 · 五瓣花 · 温柔落款",kind:"heart",pattern:"blossom",text:"如愿",style:"stone",backdrop:"paper"}],C=l("inspiration-dialog","借一份灵感，再改成自己的。","选择一份配方，会替换当前外形、刻线与落款；原料保持不变，可用下方按钮撤回。",`<div class="recipe-grid">${P.map((R,D)=>`<button data-recipe="${R.id}"><span>0${D+1}</span><strong>${R.title}</strong><small>${R.desc}</small><b>试试这个 ↗</b></button>`).join("")}</div><button id="random-recipe" class="primary compact">帮我抽一份 ✧</button><button id="undo-inspiration" class="text-button" disabled>撤回上次灵感</button><p class="hint">基于原创设计配方组合，不冒充传统纹样或生成式AI结果。</p>`),L=null,N=!1;i("#open-inspiration").onclick=()=>C.showModal();async function w(R){if(!(!e.image||N)){N=!0;try{L=n.projectData(),i("#undo-inspiration").disabled=!1,e.kind=R.kind,i("#motif").value=R.kind,e.pose.scale=.3,e.strokes=Au(fc(R.pattern,{scale:.68,y:-.05},.016,.65),(...D)=>zr(e.kind,...D)),e.inscription={text:R.text,x:0,y:.3,size:.14,angle:0,font:"serif",vertical:!1},e.workTitle=R.title,e.presentation={style:R.style,backdrop:R.backdrop,cord:R.id==="leaf"?"jade":"cinnabar"},e.polish=.86,await n.optimize(),t.clearHistory(),_(),t.setStep(3),C.close(),r("灵感已展开，可以回到刻线继续修改；重新打开灵感抽签可撤回。")}finally{N=!1}}}s("[data-recipe]").forEach(R=>R.onclick=()=>w(P.find(D=>D.id===R.dataset.recipe))),i("#random-recipe").onclick=()=>w(P[Math.floor(Math.random()*P.length)]),i("#undo-inspiration").onclick=async()=>{if(!L)return;let R=L;L=null,await n.restoreProject(R),i("#undo-inspiration").disabled=!0,C.close()};let b=l("comparison-dialog","把不同的构思，放在一起看。","最多暂存三份当前设计。可以继续修改后再加入，点击任意方案回到创作。关闭弹窗不会清空；刷新页面后会清空。",'<div class="comparison-actions"><button id="add-comparison" class="primary compact">加入当前方案 ＋</button><button id="export-comparison" class="text-button" disabled>导出对比图 ↗</button></div><div id="comparison-cards" class="comparison-cards"></div>'),I=[];function G(){let R=i("#comparison-cards");if(R.replaceChildren(),i("#export-comparison").disabled=!I.length,!I.length){let D=document.createElement("p");D.className="comparison-empty",D.textContent="先加入当前方案，再试一套纹样或灵感配方，回来比较。",R.append(D);return}I.forEach((D,F)=>{let V=document.createElement("article"),ae=document.createElement("img"),oe=document.createElement("h3"),Z=document.createElement("p"),de=document.createElement("button"),ve=document.createElement("button");ae.src=D.image,ae.alt=D.title,oe.textContent=D.title,Z.textContent=`色区匹配 ${(D.metrics.fit*100).toFixed(1)}% · ${D.project.strokes.length}段刻线`,de.textContent="从这份继续编辑 ↗",de.className="feature-button",de.onclick=async()=>{await n.restoreProject(D.project),b.close()},ve.textContent="移出对比",ve.className="text-button small",ve.onclick=()=>{I.splice(F,1),G()},V.append(ae,oe,Z,de,ve),R.append(V)})}i("#open-comparison").onclick=()=>{b.showModal(),G()},i("#add-comparison").onclick=()=>{if(!e.image)return;let R=document.createElement("canvas");if(R.width=640,R.height=480,t.renderArt(R.getContext("2d"),640,480),I.length===3){r("已有三份方案，请先移出一份，再加入新设计。");return}I.push({project:n.projectData(),metrics:{...e.layout},image:R.toDataURL("image/jpeg",.88),title:e.workTitle||Cu[e.kind]+" · 方案 "+(I.length+1)}),G()},i("#export-comparison").onclick=async()=>{let R=document.createElement("canvas");R.width=1500,R.height=1e3;let D=R.getContext("2d");D.fillStyle="#151917",D.fillRect(0,0,1500,1e3),D.fillStyle="#d9bc8b",D.font="40px SimSun,serif",D.fillText("石里有境 · 我的构思对照",70,90),D.font="18px sans-serif",D.fillStyle="#a2a69b",D.fillText("同一段创作，不同的可能。",70,130);let F=1360/I.length;for(let V=0;V<I.length;V++){let ae=I[V],oe=new Image;oe.src=ae.image,await oe.decode();let Z=70+V*F,de=F-20,ve=Math.min(de,560);D.drawImage(oe,Z+(de-ve)/2,220,ve,ve*.75),D.fillStyle="#e9e5d9",D.font="26px SimSun,serif",D.fillText(ae.title,Z,710,de),D.fillStyle="#a2a69b",D.font="16px sans-serif",D.fillText(`匹配 ${(ae.metrics.fit*100).toFixed(1)}% · ${ae.project.strokes.length}段刻线`,Z,755,de),D.font="12px sans-serif",D.fillText(Kp(ae.project.sample),Z,800,de)}D.font="15px sans-serif",D.fillStyle="#a2a69b",D.fillText("数字创意示意 · 来源与许可见 commons.wikimedia.org · Hannes Grobe样本衍生图适用CC BY-SA 2.5",70,950),R.toBlob(V=>{V&&a(V,"石里有境-方案对比.png")})};let j=l("poster-dialog","把这一次相遇，做成纪念。","用你的当前作品制作纪念海报，名称可在创作页修改。海报保留素材来源与数字设计说明。",'<div class="poster-layout"><canvas id="poster-preview" width="1000" height="1400" aria-label="纪念海报预览"></canvas><div><div class="poster-themes"><button data-poster-theme="paper">留白手札<small>暖纸 · 朱印 · 留白</small></button><button data-poster-theme="night">星夜藏石<small>藏蓝 · 星光 · 金线</small></button><button data-poster-theme="earth">山野雅集<small>墨绿 · 山线 · 手作</small></button></div><button id="download-poster" class="primary full">下载纪念海报 ↗</button><p class="hint">1000 × 1400 PNG，可保存、打印或用于比赛过程展示。作品图采用正面成器效果；文创搭配请用3D截图保存。</p></div></div>'),X="paper";function K(){let R=i("#poster-preview"),D=R.getContext("2d"),F={paper:["#e9dfca","#24352d","#a33e2f"],night:["#101e31","#e9d7ac","#9b804c"],earth:["#20342a","#e7dbc3","#c89567"]}[X];D.fillStyle=F[0],D.fillRect(0,0,1e3,1400),D.strokeStyle=F[2],D.lineWidth=1,D.strokeRect(42,42,916,1316),D.fillStyle=F[2],D.font="18px sans-serif",D.fillText("石里有境 / FUXIN AGATE ATELIER",84,110),D.fillStyle=F[1],D.font="64px SimSun,serif";let V=e.workTitle||Cu[e.kind]+" · 石中有境",ae=Array.from(V);if(D.fillText(ae.slice(0,12).join(""),80,220,840),ae.length>12&&(D.font="40px SimSun,serif",D.fillText(ae.slice(12).join(""),84,280,840)),D.font="20px sans-serif",D.fillText("观天然纹色，留一份自己的构思。",84,330),D.save(),D.translate(70,380),Zt(D,860,760,e,{background:!1,padding:.12}),D.restore(),X==="night"){D.fillStyle="#d9bc8b66";for(let oe=0;oe<36;oe++){let Z=80+oe*163%840,de=380+oe*251%700;D.beginPath(),D.arc(Z,de,oe%3===0?2:1,0,Math.PI*2),D.fill()}}else if(X==="earth"){D.strokeStyle="#bda67c55";for(let oe=0;oe<3;oe++)D.beginPath(),D.moveTo(70,1110+oe*12),D.lineTo(290,1030+oe*12),D.lineTo(480,1085+oe*12),D.lineTo(740,1010+oe*12),D.lineTo(930,1100+oe*12),D.stroke()}D.fillStyle=F[2],D.fillRect(82,1160,54,54),D.fillStyle=F[0],D.font="26px SimSun,serif",D.fillText("境",96,1197),D.fillStyle=F[1],D.font="20px sans-serif",D.fillText("辽宁 · 阜新 / 玛瑙文化数字创作纪念",160,1180),D.font="16px sans-serif",D.fillText(new Date().toLocaleDateString("zh-CN")+" · 纹样、落款与外形来自本次设计",160,1210),D.font="13px sans-serif",D.fillText("原料："+Kp(e.sample),84,1272,830),D.fillText(e.sample==="bands"?"commons.wikimedia.org · 衍生图片适用 CC BY-SA 2.5":e.sample==="nodule"?"commons.wikimedia.org · 原图许可 CC BY 2.0":"原料为程序化教学样本或用户自有图片",84,1300,830),D.fillText("数字创意示意，非真实加工结果。",84,1328),s("[data-poster-theme]").forEach(oe=>oe.classList.toggle("selected",oe.dataset.posterTheme===X))}return i("#open-poster").onclick=()=>{e.image&&(j.showModal(),K())},s("[data-poster-theme]").forEach(R=>R.onclick=()=>{X=R.dataset.posterTheme,K()}),i("#download-poster").onclick=()=>i("#poster-preview").toBlob(R=>{R&&a(R,"石里有境-"+(e.workTitle||Cu[e.kind])+"-纪念海报.png")}),document.addEventListener("agate-craft-reset",_),{sync:_,closeDialogs(){for(let R of[c,m,C,b,j])R.close()},get comparisons(){return I}}}pi();function pc(n){if(!Array.isArray(n)||n.length<5||n.length>2e3)throw Error("请画出至少五个点的完整外形。");let e=[];for(let f of n){if(!Array.isArray(f)||f.length!==2||!f.every(g=>Number.isFinite(g)&&Math.abs(g)<100))throw Error("轮廓坐标无效。");(!e.length||Math.hypot(f[0]-e.at(-1)[0],f[1]-e.at(-1)[1])>.015)&&e.push([...f])}e.length>5&&Math.hypot(e[0][0]-e.at(-1)[0],e[0][1]-e.at(-1)[1])<.06&&e.pop();let t=e.filter((f,g)=>g%Math.max(1,Math.ceil(e.length/160))===0);if(t.length<5)throw Error("轮廓太小，请画大一些。");let i=(f,g,y)=>(g[0]-f[0])*(y[1]-f[1])-(g[1]-f[1])*(y[0]-f[0]),s=(f,g,y)=>Math.abs(i(f,g,y))<1e-8&&y[0]>=Math.min(f[0],g[0])-1e-8&&y[0]<=Math.max(f[0],g[0])+1e-8&&y[1]>=Math.min(f[1],g[1])-1e-8&&y[1]<=Math.max(f[1],g[1])+1e-8;for(let f=0;f<t.length;f++)for(let g=f+2;g<t.length;g++){if(f===0&&g===t.length-1)continue;let y=t[f],m=t[(f+1)%t.length],p=t[g],T=t[(g+1)%t.length];if(i(y,m,p)*i(y,m,T)<0&&i(p,T,y)*i(p,T,m)<0||s(y,m,p)||s(y,m,T)||s(p,T,y)||s(p,T,m))throw Error("线条有交叉或重叠，请画一个不交叉的闭合外形。")}let r=t.map(f=>f[0]),a=t.map(f=>f[1]),o=Math.min(...r),l=Math.max(...r),c=Math.min(...a),h=Math.max(...a),d=Math.max(l-o,h-c),u=0;if(t.forEach((f,g)=>{let y=t[(g+1)%t.length];u+=f[0]*y[1]-y[0]*f[1]}),d<.15||Math.abs(u)<d*d*.08)throw Error("轮廓面积太小，请画一个有宽度的外形。");return t.map(([f,g])=>[(f-(o+l)/2)/d*1.8,(g-(c+h)/2)/d*1.8])}function em({state:n,experience:e,$:t,$$:i,toast:s,getDrawRect:r,download:a}){t("#motif").insertAdjacentHTML("beforeend",'<option value="drop">凝露 · 水滴</option><option value="round">团圆 · 圆牌</option><option value="heart">心意 · 心形</option><option value="custom" disabled>我的手绘外形</option>'),t("#motif").insertAdjacentHTML("afterend",'<button id="draw-outline" class="feature-button">✎ 自己画一个外形</button>'),t("#palette").insertAdjacentHTML("afterend",'<button id="pick-color" class="feature-button" aria-pressed="false">⌕ 放大镜选色</button><p class="hint">开启后，移动到原料上放大纹理，点击选中对应色区。</p>'),t("#tool-width").insertAdjacentHTML("afterend",'<div class="feature-group"><label class="field-label" for="line-mode">用什么笔触？</label><select id="line-mode"><option value="free">自由刻线</option><option value="straight">直线刻刀</option></select><label class="check"><input id="symmetric-lines" type="checkbox">左右对称刻线</label><label class="field-label" for="cut-depth">刻痕深浅 <output id="cut-depth-value">60%</output></label><input id="cut-depth" type="range" min="10" max="100" value="60"><p class="hint">粗细、深浅与对称作用于接下来画的笔触。</p><button id="stamp-flower" class="feature-button">✧ 刻一朵小花</button><p class="hint">小花位于中央，可撤销或擦除。图案为原创装饰示意。</p></div>'),t("#polish").previousElementSibling.insertAdjacentHTML("beforebegin",'<label class="field-label" for="piece-thickness">作品厚度 <output id="thickness-value">24</output></label><input id="piece-thickness" type="range" min="8" max="65" value="24"><p class="hint">数字造型比例；切换侧面可观察厚度。</p><div class="view-actions"><button data-orientation="front">正面</button><button data-orientation="side">侧面</button><button data-orientation="back">背面</button></div><button id="spin-piece" class="feature-button" aria-pressed="false">▷ 自动环绕欣赏</button>'),t("#export-finished").insertAdjacentHTML("afterend",'<button id="capture-3d" class="feature-button">▣ 保存当前3D视角</button>');let o=document.createElement("div");o.id="color-loupe",o.hidden=!0,o.innerHTML='<canvas width="140" height="100"></canvas><span></span>',t("#canvas-stage").append(o);let l=!1;function c(v){l=v,t("#pick-color").setAttribute("aria-pressed",String(v)),t("#pick-color").textContent=v?"× 结束选色":"⌕ 放大镜选色",o.hidden=!v,t("#design-canvas").style.cursor=v?"crosshair":"grab"}t("#pick-color").onclick=()=>{e.setView("color"),c(!l)};let h=t("#design-canvas");function d(v,_=!1){if(!l||n.step!==1||n.view!=="color"){o.hidden=!0;return}let P=h.getBoundingClientRect(),C=r(),L=v.clientX-P.left,N=v.clientY-P.top,w=(L-C.x)/C.w,b=(N-C.y)/C.h;if(w<0||w>=1||b<0||b>=1){o.hidden=!0;return}v.stopImmediatePropagation(),_&&v.preventDefault();let I=n.analysis,G=Math.floor(b*I.height)*I.width+Math.floor(w*I.width),j=I.labels[G];o.hidden=!1,o.style.left=_t(L+22,8,P.width-156)+"px",o.style.top=_t(N-130,75,P.height-150)+"px";let X=o.querySelector("canvas").getContext("2d");X.imageSmoothingEnabled=!1,X.fillStyle="#121812",X.fillRect(0,0,140,100);let K=n.image.width*.12;if(X.drawImage(n.image,w*n.image.width-K*.7,b*n.image.height-K*.5,K*1.4,K,0,0,140,100),X.strokeStyle="#fff1c4",X.beginPath(),X.moveTo(60,50),X.lineTo(80,50),X.moveTo(70,40),X.lineTo(70,60),X.stroke(),o.querySelector("span").textContent=j>=0?`色区 ${j+1} · ${I.colors[j].hex}`:"背景区域",_){if(j<0){s("这里是背景，请在原料内部选色。");return}document.querySelector(`[data-color="${j}"]`)?.click(),c(!1),s("已选中这个位置的纹色，可继续借色构形。")}}h.addEventListener("pointermove",v=>d(v),!0),h.addEventListener("pointerdown",v=>d(v,!0),!0),h.addEventListener("pointerleave",()=>o.hidden=!0),document.addEventListener("keydown",v=>{v.key==="Escape"&&c(!1)}),new MutationObserver(()=>{(n.step!==1||n.view!=="color")&&c(!1)}).observe(t("#studio"),{attributes:!0,attributeFilter:["data-craft-step","data-view"]}),t("#line-mode").onchange=v=>{n.lineMode=v.target.value,t("#engrave-pen").click()},t("#symmetric-lines").onchange=v=>n.symmetry=v.target.checked,t("#cut-depth").oninput=v=>{n.depth=Number(v.target.value)/100,t("#cut-depth-value").value=v.target.value+"%"},t("#stamp-flower").onclick=()=>e.editStrokes(v=>{for(let _=0;_<5;_++){let P=[],C=_*Math.PI*2/5;for(let L=0;L<=32;L++){let N=L/32*Math.PI*2,w=.13+.12*Math.cos(N);P.push([Math.cos(C)*w-Math.sin(C)*Math.sin(N)*.07,Math.sin(C)*w+Math.cos(C)*Math.sin(N)*.07])}v.push({width:n.toolWidth,depth:n.depth,points:P})}}),t("#piece-thickness").oninput=v=>{n.thickness=Number(v.target.value)/100,t("#thickness-value").value=v.target.value,e.refresh()},i("[data-orientation]").forEach(v=>v.onclick=()=>{e.getScene()?.setOrientation(v.dataset.orientation),t("#spin-piece").setAttribute("aria-pressed","false"),t("#spin-piece").textContent="▷ 自动环绕欣赏"}),t("#spin-piece").onclick=()=>{let v=e.getScene();if(!v)return;let _=!v.controls.autoRotate;v.setAuto(_),t("#spin-piece").setAttribute("aria-pressed",String(_)),t("#spin-piece").textContent=_?"Ⅱ 暂停环绕欣赏":"▷ 自动环绕欣赏"},t("#capture-3d").onclick=async()=>{e.setView("preview"),await e.updatePreview();let v=e.getScene();if(!v)return;let _=new Image;_.src=v.capture(),await _.decode();let P=document.createElement("canvas");P.width=_.width,P.height=_.height+88;let C=P.getContext("2d");C.fillStyle="#151917",C.fillRect(0,0,P.width,P.height),C.drawImage(_,0,0),C.fillStyle="#d9bc8b",C.font="14px sans-serif",C.fillText("石里有境 · 数字造型与刻线示意",18,_.height+28),C.fillStyle="#a2a69b",C.font="11px sans-serif";let L=n.sample==="bands"?"Photo: Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n.sample==="nodule"?"Photo: James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n.sample==="custom"?"原料：用户导入照片":"原料：程序化教学样本";C.fillText(L,18,_.height+52),C.fillText(n.sample==="bands"?"commons.wikimedia.org · 衍生图片 CC BY-SA 2.5":n.sample==="nodule"?"commons.wikimedia.org · 署名许可 CC BY 2.0":"数字创作示意 · 真实工艺需工匠核验",18,_.height+72),P.toBlob(N=>{N&&a(N,"石里有境-三维视角.png")})};let u=document.createElement("dialog");u.id="outline-dialog",u.innerHTML='<div class="dialog-heading"><div><p class="eyebrow">DRAW YOUR SHAPE</p><h2>把心里的形，画出来。</h2></div><button id="close-outline" class="icon-button" aria-label="关闭">×</button></div><p class="hint">在下方一笔画出外形，松手会自动连接起点。请避免线条交叉。</p><canvas id="outline-canvas" width="600" height="400" aria-label="用鼠标或触摸一笔画出闭合外形"></canvas><p id="outline-feedback" role="status">例如：一片不规则叶子、一枚鹅卵石、一朵云。</p><div class="outline-actions"><button id="clear-outline" class="text-button">重新画</button><button id="apply-outline" class="primary compact">用这个外形 →</button></div>',document.body.append(u);let f=t("#outline-canvas"),g=f.getContext("2d"),y=[],m=!1;function p(){g.fillStyle="#101611",g.fillRect(0,0,600,400),g.strokeStyle="#ffffff0c",g.lineWidth=1;for(let v=0;v<600;v+=40)g.beginPath(),g.moveTo(v,0),g.lineTo(v,400),g.stroke();for(let v=0;v<400;v+=40)g.beginPath(),g.moveTo(0,v),g.lineTo(600,v),g.stroke();y.length&&(g.beginPath(),y.forEach(([v,_],P)=>P?g.lineTo(v*200+300,(_+1)*200):g.moveTo(v*200+300,(_+1)*200)),m||g.closePath(),g.fillStyle="#d9bc8b1a",g.fill(),g.strokeStyle="#e5c58e",g.lineWidth=2,g.stroke(),g.fillStyle="#e5c58e",g.beginPath(),g.arc(y[0][0]*200+300,(y[0][1]+1)*200,5,0,Math.PI*2),g.fill())}function T(v){let _=f.getBoundingClientRect(),P=[_t(((v.clientX-_.left)/_.width*600-300)/200,-1.49,1.49),_t((v.clientY-_.top)/_.height*2-1,-.99,.99)];y.length<2e3&&(!y.length||Math.hypot(P[0]-y.at(-1)[0],P[1]-y.at(-1)[1])>.012)&&y.push(P),p()}return f.onpointerdown=v=>{y=[],m=!0,f.setPointerCapture(v.pointerId),T(v)},f.onpointermove=v=>{m&&T(v)},f.onpointerup=()=>{m=!1,p(),t("#outline-feedback").textContent="外形已闭合。满意就应用，也可以重新画。"},f.onpointercancel=()=>{m=!1,p()},t("#draw-outline").onclick=()=>{u.showModal(),p()},t("#close-outline").onclick=()=>u.close(),t("#clear-outline").onclick=()=>{y=[],p(),t("#outline-feedback").textContent="画一个新的外形，松手自动闭合。"},t("#apply-outline").onclick=()=>{try{let v=pc(y);go(v),n.customOutline=v,t('#motif option[value="custom"]').disabled=!1,t("#motif").value="custom",t("#motif").dispatchEvent(new Event("change")),u.close(),s("手绘外形已成为作品轮廓，成器与3D会同步更新。")}catch(v){t("#outline-feedback").textContent=v.message}},{sync(){c(!1),t("#piece-thickness").value=Math.round(n.thickness*100),t("#thickness-value").value=Math.round(n.thickness*100),i("[data-light]").forEach(v=>v.classList.toggle("selected",v.dataset.light===n.light))}}}var _b=["fruit","leaf","mountain","drop","round","heart","custom"];function Ru(n){let e=structuredClone(n),t=()=>{throw Error("方案文件不完整或参数超出范围，请使用本工坊导出的方案。")};(!e||e.format!=="agate-project"||![3,4].includes(e.version)||!_b.includes(e.kind)||!["procedural","bands","nodule","custom"].includes(e.sample))&&t();for(let[s,r,a]of[["x",.03,.97],["y",.03,.97],["scale",.08,.42],["angle",-180,180]])(!Number.isFinite(e.pose?.[s])||e.pose[s]<r||e.pose[s]>a)&&t();e.kind==="custom"&&(e.outline=pc(e.outline)),(!Number.isInteger(e.color)||e.color<0||e.color>4||!Number.isFinite(e.polish)||e.polish<0||e.polish>1||!["left","right"].includes(e.light)||!Number.isFinite(e.thickness)||e.thickness<.08||e.thickness>.65)&&t(),(typeof e.removeBackground!="boolean"||!Array.isArray(e.target)||e.target.length>4e4||e.target.length<100||!Number.isInteger(e.targetWidth)||!Number.isInteger(e.targetHeight)||e.targetWidth<1||e.targetHeight<1||e.targetWidth>200||e.targetHeight>200||e.targetWidth*e.targetHeight!==e.target.length||e.target.some(s=>s!==0&&s!==1))&&t(),(!Array.isArray(e.strokes)||e.strokes.length>1e3)&&t();let i=0;for(let s of e.strokes){(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>1e4)&&t(),i+=s.points.length;for(let r of s.points)(!Array.isArray(r)||r.length!==2||r.some(a=>!Number.isFinite(a)||Math.abs(a)>1.1))&&t()}if(i>1e5&&t(),e.sample==="custom"&&(typeof e.sourceImage!="string"||e.sourceImage.length>25e5||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(e.sourceImage))&&t(),e.inscription!=null){let s=e.inscription;(typeof s.text!="string"||Array.from(s.text).length>8||/[\u0000-\u001f]/.test(s.text)||!["serif","sans"].includes(s.font)||typeof s.vertical!="boolean")&&t();for(let[r,a,o]of[["x",-.85,.85],["y",-.85,.85],["size",.08,.35],["angle",-180,180]])(!Number.isFinite(s[r])||s[r]<a||s[r]>o)&&t()}else e.inscription=null;return e.presentation!=null?(!["stone","pendant","stand"].includes(e.presentation.style)||!["ink","paper","night"].includes(e.presentation.backdrop)||!["cinnabar","ink","jade"].includes(e.presentation.cord))&&t():e.presentation={style:"stone",backdrop:"ink",cord:"cinnabar"},e.workTitle!=null&&(typeof e.workTitle!="string"||Array.from(e.workTitle).length>24||/[\u0000-\u001f]/.test(e.workTitle))&&t(),e.workTitle=e.workTitle||"",e}pi();function tm(n){let{$:e,$$:t,state:i}=n;Object.assign(i,{step:0,strokes:[],redoStrokes:[],polish:.72,light:"left",tool:"pen",toolWidth:.018,comparison:100,symmetry:!1,lineMode:"free",depth:.6,thickness:.24,inscription:null,workTitle:"",presentation:{style:"stone",backdrop:"paper",cord:"cinnabar"}});let s=null,r=null,a=null,o={x:0,y:0,w:1,h:1},l=[],c=[],h=0,d=!1,u=0,f=[["先选一块喜欢的纹色","选好原料，接下来让天然颜色参与设计。","开始构形"],["选一抹颜色，把它变成形","拖动或切换构图，右下角直接看到取形后的效果。","确认取形，去刻线"],["亲手画几笔，让它更像你的作品","在作品上拖动刻线，也可以添加筋线后自由修改。","刻线完成，去润色"],["转动它，看看属于你的成器效果","轮廓、纹理与刻线已一起进入三维作品。","导出作品"]];function g(Z=768){return gi(i,{size:Z})}function y(){let Z=e("#peek-canvas");i.image&&Zt(Z.getContext("2d"),Z.width,Z.height,i,{texture:g(384),padding:.1})}function m(){let Z=e("#design-canvas"),de=Z.getBoundingClientRect();if(!i.image||de.width<1||de.height<1)return;let ve=Math.min(devicePixelRatio,2);Z.width=Math.round(de.width*ve),Z.height=Math.round(de.height*ve);let Ce=Z.getContext("2d");Ce.scale(ve,ve),i.view==="color"?n.drawSource(Ce,de.width,de.height,{includeTarget:i.step===1,includeMotif:i.step===1}):(Ce.fillStyle="#eee2cd",Ce.fillRect(0,0,de.width,de.height),o=Zt(Ce,de.width,de.height,i,{texture:g(),compare:i.comparison,padding:.16,cursor:a,background:!1})),y()}async function p(){if(i.image)try{s||(r||(r=n.getSceneModule().then(Z=>Z.createAgateScene(e("#preview-scene")))),s=await r),s.setTexture(g(),{kind:i.kind,normalCanvas:vo(i.strokes,384,i.inscription),polish:i.polish,light:i.light,thickness:i.thickness,presentation:i.presentation}),s.resize()}catch(Z){console.error(Z),n.toast("三维暂不可用，已切换成器效果，可继续创作。"),v("carved")}}function T(){i.image&&(e("#stroke-count").textContent=i.strokes.length,e("#undo-stroke").disabled=!l.length,e("#redo-stroke").disabled=!c.length,e("#polish").value=Math.round(i.polish*100),e("#polish-value").value=Math.round(i.polish*100)+"%",i.view==="preview"?(cancelAnimationFrame(u),u=requestAnimationFrame(p)):m(),y(),document.dispatchEvent(new Event("agate-craft-change")))}function v(Z){i.view=Z,e("#studio").dataset.view=Z,e("#design-canvas").hidden=Z==="preview",e("#preview-scene").hidden=Z!=="preview";for(let[ve,Ce]of[["view-color","color"],["view-carved","carved"],["view-preview","preview"]])e("#"+ve).classList.toggle("selected",Z===Ce);e("#toggle-overlay").disabled=Z!=="color"||i.step!==1,e("#canvas-mode-label").textContent=Z==="preview"?"YOUR SHAPE · YOUR TEXTURE":Z==="carved"?"SHAPE · ENGRAVE · POLISH":"READ THE COLOR";let de=Z==="preview"?"拖动转动作品 · 滚轮缩放 · 观察轮廓厚度与刻线":i.step===2?"在作品上拖动刻线 · 使用上方按钮撤销或擦线":i.step===1&&Z==="color"?"拖动取形 · 滚轮缩放 · Shift＋滚轮旋转":i.step===1?"拖动改变取色位置 · 回到原料查看构图":i.step===0?"选择喜欢的原料，再点击“开始构形”":"滑动下方对比，观察局部原料与成器的变化";e("#canvas-instruction").textContent=de,e("#canvas-stage").classList.toggle("carving",i.step===2&&Z==="carved"),Z==="preview"?p():requestAnimationFrame(m)}function _(Z){i.step=_t(Z,0,3),e("#studio").dataset.craftStep=i.step,t(".craft-stepper [data-craft-step]").forEach(ve=>{let Ce=Number(ve.dataset.craftStep);ve.classList.toggle("active",Ce===i.step),ve.classList.toggle("done",Ce<i.step),ve.setAttribute("aria-current",Ce===i.step?"step":"false")}),e("#work-stage-badge").textContent=["观料","借色构形","亲手刻线","润色成器"][i.step]+" · 0"+(i.step+1)+" / 04",e("#step-goal").textContent=f[i.step][0],e("#step-tip").textContent=f[i.step][1],e("#next-step").innerHTML=f[i.step][2]+" <span>→</span>",e("#previous-step").disabled=i.step===0,e("#context-title").textContent=i.step===2?"留下你的刻线":"纹色与笔触",e("#context-copy").textContent=i.step===2?"从一条线开始。沿着纹理，试着给叶片添叶脉、给山形添层次。":"你所选的原料、取形位置和手绘刻线共同构成这件数字作品。",v(i.step<=1?"color":i.step===2?"carved":"preview"),T();let de=e("#canvas-stage");matchMedia("(prefers-reduced-motion: reduce)").matches||de.animate([{opacity:.5,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:320,easing:"ease-out"}),document.dispatchEvent(new CustomEvent("agate-craft-step",{detail:{step:i.step}}))}function P(Z=!0){i.strokes=[],l=[],c=[],i.inscription=null,i.workTitle="",i.polish=.72,i.comparison=100,e("#compare").value=100;let de=document.createElement("img");de.src=i.sample==="procedural"?n.samples[0].thumb:i.image?.src||"",de.alt="当前选择的原料";let ve=document.createElement("p");ve.textContent=e("#canvas-sample-name").textContent,e("#material-mini").replaceChildren(de,ve),Z?_(0):T(),document.dispatchEvent(new Event("agate-craft-reset"))}function C(){return structuredClone(i.strokes)}function L(){l.push(C()),l.length>80&&l.shift(),c=[]}function N(){l.length&&(c.push(C()),i.strokes=l.pop(),T())}function w(){c.length&&(l.push(C()),i.strokes=c.pop(),T())}function b(){L(),i.strokes.push(...Ud(i.kind,i.toolWidth)),T(),n.toast("筋线已经刻入作品，可继续自由添线或擦除。")}function I(Z){i.tool=Z,e("#engrave-pen").classList.toggle("selected",Z==="pen"),e("#engrave-erase").classList.toggle("selected",Z==="erase"),i.view!=="carved"&&v("carved")}function G(Z,de){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let ve=e("#carve-particles");for(let Ce=0;Ce<3;Ce++){let M=document.createElement("i");M.style.left=Z+"px",M.style.top=de+"px",M.style.setProperty("--dx",(Math.random()-.5)*25+"px"),M.style.setProperty("--dy",Math.random()*25+"px"),ve.appendChild(M),setTimeout(()=>M.remove(),550)}}function j(){d&&(h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范")}e("#studio").addEventListener("pointerdown",Z=>{Z.target.closest("#play-demo")||j()},{capture:!0});let X=e("#design-canvas"),K=!1,R=null,D=null,F=!1,V=Z=>{let de=X.getBoundingClientRect();return{x:Z.clientX-de.left,y:Z.clientY-de.top}};function ae(Z,de=!1){if(!i.analysis)return;let ve=V(Z);if(i.step===2&&i.view==="carved"){let Ce=(ve.x-o.x)/o.w*2-1,M=(ve.y-o.y)/o.h*2-1;if(a={x:Ce,y:M},!K){m();return}if(!zr(i.kind,Ce,M)){D&&(D=null);return}if(i.tool==="pen"){D||(F||(L(),F=!0),D={width:i.toolWidth,points:[],depth:i.depth},i.strokes.push(D));let U=D.points.at(-1);(!U||Math.hypot(U[0]-Ce,U[1]-M)>.003)&&(i.lineMode==="straight"&&D.points.length>1&&D.points.splice(1),D.points.push([Ce,M]))}else{let U=i.strokes.filter(ne=>!ne.points.some(([he,pe])=>Math.hypot(he-Ce,pe-M)<i.toolWidth*3+.04));U.length!==i.strokes.length&&(F||(L(),F=!0),i.strokes=U)}Math.random()>.5&&G(ve.x,ve.y),T();return}if(!(i.step!==1||!K)){if(i.view==="color"){let Ce=n.getDrawRect(),M=(ve.x-Ce.x)/Ce.w,U=(ve.y-Ce.y)/Ce.h;if(M<0||M>1||U<0||U>1)return;if(i.brush==="none")i.pose.x=_t(M,.03,.97),i.pose.y=_t(U,.03,.97);else{let ne=i.analysis,he=Math.round(M*ne.width),pe=Math.round(U*ne.height);for(let O=-4;O<=4;O++)for(let Y=-4;Y<=4;Y++){let A=he+Y,J=pe+O;if(Y*Y+O*O<=16&&A>=0&&A<ne.width&&J>=0&&J<ne.height){let H=J*ne.width+A;ne.foreground[H]&&(i.target[H]=i.brush==="add"?1:0)}}}}else i.view==="carved"&&R&&(i.pose.x=_t(i.pose.x-(ve.x-R.x)/o.w*i.pose.scale*2,.03,.97),i.pose.y=_t(i.pose.y-(ve.y-R.y)/o.h*i.pose.scale*2,.03,.97));i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout(),R=ve}}X.addEventListener("pointerdown",Z=>{K=!0,R=V(Z),F=!1,D=null,X.setPointerCapture(Z.pointerId),ae(Z,!0)}),X.addEventListener("pointermove",Z=>ae(Z));for(let Z of["pointerup","pointercancel"])X.addEventListener(Z,()=>{if(K&&i.symmetry&&i.step===2&&i.tool==="pen"&&F){let de=i.strokes.slice(l.at(-1)?.length||0);for(let ve of de)i.strokes.push({...ve,points:ve.points.map(([Ce,M])=>[-Ce,M])})}K=!1,D=null,F=!1,T()});X.addEventListener("pointerleave",()=>{a=null,K||m()}),X.addEventListener("wheel",Z=>{i.step===1&&(Z.preventDefault(),Z.shiftKey?i.pose.angle=_t(i.pose.angle+(Z.deltaY>0?5:-5),-180,180):i.pose.scale=_t(i.pose.scale+(Z.deltaY>0?-.01:.01),.08,.42),i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout())},{passive:!1});async function oe(){if(d){h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范";return}let Z=++h;d=!0,e("#play-demo").textContent="Ⅱ 停止示范";let de=ve=>new Promise(Ce=>setTimeout(Ce,ve));try{if(!i.image||(i.kind="leaf",e("#motif").value="leaf",i.strokes=[],l=[],c=[],i.pose.scale=.3,n.updateLayout(),_(1),await de(650),Z!==h)||(await n.optimize(),await de(1e3),Z!==h)||(_(2),await de(650),Z!==h)||(b(),await de(900),Z!==h))return;i.polish=.85,_(3),n.toast("示范完成：现在可继续转动、润色，或返回刻线修改。")}finally{Z===h&&(d=!1,e("#play-demo").textContent="▷ 再看一次示范")}}return t(".craft-stepper [data-craft-step]").forEach(Z=>Z.onclick=()=>{h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范",_(Number(Z.dataset.craftStep))}),e("#start-shaping").onclick=()=>_(1),e("#next-step").onclick=()=>i.step===3?n.exportCard():_(i.step+1),e("#previous-step").onclick=()=>_(i.step-1),e("#back-to-shape").onclick=()=>_(1),e("#view-carved").onclick=()=>v("carved"),e("#result-peek").onclick=()=>v("carved"),e("#engrave-pen").onclick=()=>I("pen"),e("#engrave-erase").onclick=()=>I("erase"),e("#undo-stroke").onclick=N,e("#redo-stroke").onclick=w,e("#tool-width").oninput=Z=>{i.toolWidth=Number(Z.target.value)*.006,e("#tool-width-value").value=Z.target.value,m()},e("#preset-lines").onclick=b,e("#clear-strokes").onclick=()=>{i.strokes.length&&(L(),i.strokes=[],T())},e("#compare").oninput=Z=>{i.comparison=Number(Z.target.value),m()},e("#polish").oninput=Z=>{i.polish=Number(Z.target.value)/100,T()},t("[data-light]").forEach(Z=>Z.onclick=()=>{i.light=Z.dataset.light,t("[data-light]").forEach(de=>de.classList.toggle("selected",Z===de)),T()}),e("#export-finished").onclick=n.exportCard,e("#save-finished").onclick=n.saveDesign,e("#play-demo").onclick=oe,e("#motif").addEventListener("change",()=>{i.strokes=[],l=[],c=[],T()}),document.addEventListener("keydown",Z=>{i.route!=="studio"||i.step!==2||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(Z.ctrlKey||Z.metaKey)&&Z.key.toLowerCase()==="z"&&(Z.preventDefault(),Z.shiftKey?w():N())}),_(0),{draw:m,refresh:T,setView:v,setStep:_,updatePreview:p,resetCraft:P,stopDemo:j,renderArt:(Z,de,ve)=>Zt(Z,de,ve,i,{texture:g(),padding:.12}),getScene:()=>s,editStrokes:Z=>{L(),Z(i.strokes),T()},clearHistory:()=>{l=[],c=[],T()},get strokes(){return i.strokes}}}pi();var me=n=>document.querySelector(n),Tt=n=>[...document.querySelectorAll(n)],k={analysis:null,target:null,selectedColor:0,sample:"procedural",kind:"fruit",pose:{x:.5,y:.5,scale:.24,angle:0},brush:"none",overlay:!0,candidates:[],selectedCandidate:-1,view:"color",image:null,analysisMs:0,optimizeMs:0,baseline:null,layout:null,route:"home",loadId:0},_c={fruit:"秋实",leaf:"一叶",mountain:"远山",drop:"凝露",round:"团圆",heart:"心意",custom:"手绘成器"},_r=[{id:"procedural",title:"赤霞流纹",sub:"程序化教学样本",origin:"由代码生成的纹色样本，不对应真实阜新原石。"},{id:"bands",title:"层叠条带",sub:"开放许可实拍样本",file:"./assets/agate-bands.jpg",origin:"Hannes Grobe / CC BY-SA 2.5。公开玛瑙切片，来源页未标产地；非阜新原料证明。"},{id:"nodule",title:"结核纹理",sub:"开放许可实拍样本",file:"./assets/agate-nodule.jpg",origin:"James St. John / CC BY 2.0。公开玛瑙结核样本；非阜新原料证明。"}],Mt,Va,yc,hm,Uu={x:0,y:0,w:1,h:1},um,Lu,Nu=[];function Nt(n){me("#toast").textContent=n,me("#toast").classList.add("show"),clearTimeout(um),um=setTimeout(()=>me("#toast").classList.remove("show"),3400)}function vr(n){try{return JSON.parse(localStorage.getItem(n)||"[]")}catch{return[]}}function vc(n,e){try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return Nt("浏览器存储不可用或已满，请先导出方案卡。"),!1}}function Un(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Fb(){let n=document.createElement("canvas");n.width=720,n.height=600;let e=n.getContext("2d"),t=e.createImageData(n.width,n.height),i=(s,r,a)=>s.map((o,l)=>o+(r[l]-o)*a);for(let s=0;s<n.height;s++)for(let r=0;r<n.width;r++){let a=(r/n.width-.5)*2,o=(s/n.height-.5)*2,l=Math.atan2(o,a),c=Math.hypot(a*.95,o*1.05),h=.84+.045*Math.sin(l*5)+.025*Math.cos(l*9),d=(s*n.width+r)*4;if(c>h){t.data[d]=15,t.data[d+1]=20,t.data[d+2]=16,t.data[d+3]=255;continue}let u=.055*Math.sin(a*10+o*6)+.035*Math.cos(o*13-a*2),f=Math.hypot(a+.2,o*.78-.1)+u,g=.5+.5*Math.sin(f*31+Math.sin(a*7)*1),y=.5+.5*Math.sin(f*8.4+a),m=i([91,31,16],[211,122,45],y);m=i(m,[242,223,181],Math.pow(g,12)*.9);let p=1+.12*Math.max(0,1-Math.hypot(a+.35,o+.45)),T=.98+.025*Math.sin(r*2.14+s*.43);for(let v=0;v<3;v++)t.data[d+v]=_t(m[v]*p*T,0,255);t.data[d+3]=255}return e.putImageData(t,0,0),n}var dm=Fb();_r[0].thumb=dm.toDataURL("image/jpeg",.85);function xc(){me("#sample-list").innerHTML=_r.map(n=>`<button class="sample ${n.id===k.sample?"selected":""}" data-sample="${n.id}"><img src="${n.thumb||n.file}" alt="${n.title}"><span><strong>${n.title}</strong><small>${n.sub}</small></span></button>`).join(""),Tt("[data-sample]").forEach(n=>n.onclick=()=>bc(n.dataset.sample))}async function bc(n){let e=++k.loadId,t=_r.find(i=>i.id===n);if(t){me("#analysis-scan").classList.add("active");try{let i;if(n==="procedural"?i=dm:(i=new Image,i.src=t.file,await i.decode()),e!==k.loadId)return;k.sample=n,k.image=i,k.pose={x:.5,y:.5,scale:.24,angle:0},k.candidates=[],k.selectedCandidate=-1,me("#sample-origin").textContent=t.origin,me("#canvas-sample-name").textContent=t.title,xc(),xr(),Mt?.resetCraft()}catch(i){Nt("样本读取失败，可选择其他样本或导入照片。"),console.error(i)}finally{e===k.loadId&&me("#analysis-scan").classList.remove("active")}}}function xr(){if(!k.image)return;let n=performance.now(),e=document.createElement("canvas"),t=k.image.width/k.image.height;e.width=150,e.height=Math.max(40,Math.round(150/t)),e.height>200&&(e.height=200,e.width=Math.round(200*t));let i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(k.image,0,0,e.width,e.height);try{k.analysis=Id(i.getImageData(0,0,e.width,e.height).data,e.width,e.height,5,me("#remove-bg").checked),k.selectedColor=k.analysis.colors.map((s,r)=>({v:s,i:r})).sort((s,r)=>r.v.count-s.v.count)[0].i,k.target=Br(k.analysis,k.selectedColor),k.analysisMs=performance.now()-n,k.candidates=[],k.selectedCandidate=-1,Fu(),Nn(),me("#analysis-status").textContent=`已分析 ${k.analysis.validPixels.toLocaleString()} 个有效像素 · ${k.analysis.colors.length} 个色区 · ${Math.round(k.analysisMs)} ms`,k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),me("#caption-text").textContent="已完成色区分析，选择色区后可搜索构图。"}catch(s){Nt(s.message)}}function Fu(){let n=k.analysis;me("#palette").innerHTML=n.colors.map((e,t)=>`<button class="swatch ${t===k.selectedColor?"selected":""}" data-color="${t}" aria-label="选择色区 ${t+1} ${e.hex}"><i style="background:${e.hex}"></i><span>色区 ${String(t+1).padStart(2,"0")}</span><small>${(e.share*100).toFixed(1)}%</small></button>`).join(""),Tt("[data-color]").forEach(e=>e.onclick=()=>{k.selectedColor=Number(e.dataset.color),k.target=Br(n,k.selectedColor),k.candidates=[],k.selectedCandidate=-1,me("#candidate-list").replaceChildren(),k.baseline=fi(n,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),Fu(),Nn()})}function fm(n,e){mi(n,e)}function ku(n,e,t,{includeTarget:i=!0,includeMotif:s=!0}={}){if(n.clearRect(0,0,e,t),n.fillStyle=n.canvas.id==="design-canvas"?"#eee2cd":"#111612",n.fillRect(0,0,e,t),!k.image)return;let r=k.image.width/k.image.height,a=e*.88,o=t*.7,l=a,c=l/r;c>o&&(c=o,l=c*r);let h=(e-l)/2,d=(t-c)/2;if(n.canvas.id==="design-canvas"&&(Uu={x:h,y:d,w:l,h:c}),n.drawImage(k.image,h,d,l,c),i&&k.overlay&&k.target){let u=k.analysis,f=document.createElement("canvas");f.width=u.width,f.height=u.height;let g=f.getContext("2d"),y=g.createImageData(u.width,u.height);for(let m=0;m<k.target.length;m++)k.target[m]&&(y.data[m*4]=222,y.data[m*4+1]=204,y.data[m*4+2]=119,y.data[m*4+3]=95);g.putImageData(y,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(f,h,d,l,c),n.restore()}if(s){let u=k.pose;n.save(),n.translate(h+u.x*l,d+u.y*c),n.rotate(u.angle*Math.PI/180),n.scale(u.scale*l,u.scale*c),fm(n,k.kind),n.fillStyle="rgba(255,229,174,.10)",n.fill("evenodd"),n.strokeStyle="#fff1c4",n.lineWidth=1.5/(u.scale*l),n.shadowColor="#3b1c09",n.shadowBlur=5,n.stroke(),n.restore()}}function Ga(){if(Mt){Mt.draw();return}let n=me("#design-canvas"),e=n.getBoundingClientRect();if(e.width<1)return;let t=Math.min(devicePixelRatio,2);n.width=Math.round(e.width*t),n.height=Math.round(e.height*t);let i=n.getContext("2d");i.scale(t,t),ku(i,e.width,e.height)}function Nn(){if(!k.analysis)return;k.layout=fi(k.analysis,k.target,k.kind,k.pose),me("#metric-fit").textContent=(k.layout.fit*100).toFixed(1)+"%",me("#metric-contain").textContent=(k.layout.containment*100).toFixed(1)+"%",me("#scale").value=Math.round(k.pose.scale*100),me("#angle").value=Math.round(k.pose.angle),me("#scale-value").value=Math.round(k.pose.scale*100)+"%",me("#angle-value").value=Math.round(k.pose.angle)+"°";let n=k.layout.fit>.65?"图案与所选色区重合较多":k.layout.fit>.3?"图案部分落入所选色区":"可以调整位置或缩小图案，寻找更多目标色区";me("#layout-explanation").textContent=`${n}。当前为“${_c[k.kind]}”主题，按 ${k.layout.samples} 个固定内部采样点计算。`,Ga(),Mt?.refresh(),k.view==="preview"&&!Mt&&Bu()}function Fi(){me("#candidate-list").innerHTML=k.candidates.map((n,e)=>`<button class="candidate ${k.selectedCandidate===e?"selected":""}" data-candidate="${e}">构图 ${String(e+1).padStart(2,"0")}<span>覆盖 ${(n.fit*100).toFixed(0)}%</span></button>`).join(""),Tt("[data-candidate]").forEach(n=>n.onclick=()=>{let e=Number(n.dataset.candidate);k.selectedCandidate=e;let{x:t,y:i,scale:s,angle:r}=k.candidates[e];k.pose={x:t,y:i,scale:s,angle:r},Fi(),Nn()})}async function Mc(){if(!k.analysis)return;let n=me("#optimize");n.disabled=!0,me("#analysis-scan").classList.add("active"),await new Promise(e=>setTimeout(e,25));try{let e=performance.now(),t=me("#lock-scale").checked,i=k.pose.scale;k.searchCount=t?196:784,k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),k.candidates=Ld(k.analysis,k.target,k.kind,t?{scale:i}:{}),k.optimizeMs=performance.now()-e,k.selectedCandidate=0;let{x:s,y:r,scale:a,angle:o}=k.candidates[0];k.pose={x:s,y:r,scale:a,angle:o},k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:a,angle:0}),Fi(),Nn(),me("#caption-text").textContent=`已搜索 ${k.searchCount} 个位置、尺度与角度组合 · ${Math.round(k.optimizeMs)} ms`,Nt("找到三份构图，点击比较或继续手动调整。")}finally{n.disabled=!1,me("#analysis-scan").classList.remove("active")}}function kb(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let e=n.getContext("2d");return e.fillStyle="#412719",e.fillRect(0,0,1024,1024),e.drawImage(k.image,0,0,1024,1024),e.save(),e.translate(k.pose.x*1024,k.pose.y*1024),e.rotate(k.pose.angle*Math.PI/180),e.scale(k.pose.scale*1024,k.pose.scale*1024),fm(e,k.kind),e.fillStyle="#fff0ca30",e.fill("evenodd"),e.strokeStyle="#fff1c4",e.lineWidth=2/(k.pose.scale*1024),e.stroke(),e.restore(),n}async function Ou(){return hm||(hm=Promise.resolve().then(()=>(cm(),lm)))}async function Bu(){if(Mt)return Mt.updatePreview();try{yc||(yc=(await Ou()).createAgateScene(me("#preview-scene"))),yc.setTexture(kb()),yc.resize()}catch(n){console.error(n),Nt("当前设备三维渲染不可用，仍可使用纹色画布。"),zu("color")}}function zu(n){if(Mt)return Mt.setView(n);k.view=n,me("#design-canvas").hidden=n!=="color",me("#preview-scene").hidden=n!=="preview",me("#view-color").classList.toggle("selected",n==="color"),me("#view-preview").classList.toggle("selected",n==="preview"),me("#canvas-mode-label").textContent=n==="color"?"COLOR-GUIDED COMPOSITION":"TEXTURE ON PRESET GEOMETRY",me("#canvas-instruction").textContent=n==="color"?"拖动图案调整位置 · 右侧选择创作主题":"拖动旋转 · 滚轮缩放 · 预设几何上的材质示意",me("#toggle-overlay").disabled=n==="preview",n==="preview"?Bu():requestAnimationFrame(Ga)}function pm(){let n=location.hash.slice(1)||"home";k.route=["home","guide","learn","studio","journey","collection"].includes(n)?n:"home",Tt("main>.page").forEach(e=>e.hidden=e.id!==k.route),Tt("[data-route]").forEach(e=>{let t=e.dataset.route===k.route;e.classList.toggle("active",t),t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")}),k.route!=="studio"&&Mt?.stopDemo(),k.route==="studio"&&(Jp(),requestAnimationFrame(Ga),k.view==="preview"&&Bu()),k.route==="collection"&&Du(),k.route==="learn"&&requestAnimationFrame(()=>Va?.resize()),window.scrollTo({top:0,behavior:"instant"})}function br(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Ob(){let n=document.createElement("canvas");n.width=1200,n.height=1260;let e=n.getContext("2d");e.fillStyle="#151917",e.fillRect(0,0,n.width,n.height),e.fillStyle="#d9bc8b",e.font="18px sans-serif",e.fillText("FUXIN · AGATE ATELIER / 石里有境",65,65),e.fillStyle="#eee6d6",e.font="42px SimSun,serif",e.fillText(k.workTitle||_c[k.kind]+" · 纹色构思",65,120,1070),e.save(),e.translate(0,180),Mt?Mt.renderArt(e,1200,790):ku(e,1200,790,{includeTarget:!1}),e.restore(),e.strokeStyle="#ffffff25",e.beginPath(),e.moveTo(65,1e3),e.lineTo(1135,1e3),e.stroke();let t=_r.find(r=>r.id===k.sample),i=k.layout;e.font="21px sans-serif",e.fillStyle="#cfb38a",e.fillText(`图案色区匹配 ${(i.fit*100).toFixed(1)}%    图案区域保留 ${(i.containment*100).toFixed(1)}%`,65,1050),e.fillStyle="#a2a69b",e.font="16px sans-serif",e.fillText(`样本：${t?.title||"导入照片"} · ${t?.sub||"用户提供"}`,65,1090),e.fillText("二维创意示意；真实内部材质与加工可行性需工匠核验。",65,1130),e.font="13px sans-serif";let s=k.sample==="bands"?"Photo: Hannes Grobe · CC BY-SA 2.5 · commons.wikimedia.org/wiki/File:Agate1_hg.jpg":k.sample==="nodule"?"Photo: James St. John · CC BY 2.0 · commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg":"程序化教学样本 / 或用户自行导入素材";return e.fillText(s,65,1180),e.fillText(k.sample==="bands"?"图片叠加构图适用 CC BY-SA 2.5 · creativecommons.org/licenses/by-sa/2.5/":"数字作品为原创教学示意，非真实加工结果。",65,1210),n}function Hu(){if(!k.analysis)return;Ob().toBlob(e=>br(e,`石里有境-${_c[k.kind]}-方案卡.png`),"image/png"),Nt("方案卡已导出，包含素材署名和指标。")}function Sc(){let n={format:"agate-project",version:4,sample:k.sample,kind:k.kind,pose:{...k.pose},color:k.selectedColor,strokes:structuredClone(k.strokes),polish:k.polish,light:k.light,thickness:k.thickness,inscription:structuredClone(k.inscription),presentation:{...k.presentation},workTitle:k.workTitle,removeBackground:me("#remove-bg").checked,target:Array.from(k.target),targetWidth:k.analysis.width,targetHeight:k.analysis.height};if(k.kind==="custom"&&(n.outline=k.customOutline),k.sample==="custom"){let e=document.createElement("canvas"),t=Math.min(1,960/Math.max(k.image.width,k.image.height));e.width=Math.round(k.image.width*t),e.height=Math.round(k.image.height*t),e.getContext("2d").drawImage(k.image,0,0,e.width,e.height),n.sourceImage=e.toDataURL("image/jpeg",.88)}return n}function Vu(){if(!k.analysis)return;let n=vr("agate-designs-v1"),e=document.createElement("canvas");e.width=420,e.height=340,Mt.renderArt(e.getContext("2d"),420,340);let t={...Sc(),workshopTimeline:Wu.timeline,id:crypto.randomUUID(),created:new Date().toISOString(),metrics:{...k.layout},image:e.toDataURL("image/jpeg",.82),title:k.workTitle||_c[k.kind]+" · "+new Date().toLocaleDateString("zh-CN")};n.unshift(t),vc("agate-designs-v1",n.slice(0,30))&&Nt("已收藏，进入“我的作品”可继续编辑或导出完整方案。")}async function wc(n){try{let e=[3,4].includes(n.version)?Ru(n):n;if(e.sample==="custom"&&!e.sourceImage)throw Error("这份旧收藏没有保留原料照片，请重新导入照片。");if(Mt.stopDemo(),me("#remove-bg").checked=e.removeBackground??!0,e.sample==="custom"){let t=new Image;if(t.src=e.sourceImage,await t.decode(),t.width>4096||t.height>4096)throw Error("方案图片尺寸过大。");++k.loadId,k.sample="custom",k.image=t,me("#sample-origin").textContent="由方案恢复的用户照片，仅在本机处理。",me("#canvas-sample-name").textContent="我的原料照片",xc(),xr(),Mt.resetCraft()}else if(await bc(e.sample),k.sample!==e.sample)throw Error("原料未能加载，请稍后重试。");if(e.kind==="custom"&&(go(e.outline),k.customOutline=e.outline,me('#motif option[value="custom"]').disabled=!1),k.kind=e.kind,me("#motif").value=e.kind,k.pose={...e.pose},k.selectedColor=Math.min(e.color,k.analysis.colors.length-1),k.target=Br(k.analysis,k.selectedColor),e.target&&e.targetWidth*e.targetHeight===e.target.length){let t=k.analysis;k.target=Uint8Array.from({length:t.width*t.height},(i,s)=>e.target[Math.min(e.targetHeight-1,Math.floor(Math.floor(s/t.width)/t.height*e.targetHeight))*e.targetWidth+Math.min(e.targetWidth-1,Math.floor(s%t.width/t.width*e.targetWidth))])}k.strokes=structuredClone(e.strokes||[]),k.polish=e.polish??.72,k.light=e.light||"left",k.thickness=e.thickness??.24,k.inscription=structuredClone(e.inscription||null),k.presentation={style:"stone",backdrop:"ink",cord:"cinnabar",...e.presentation},k.workTitle=e.workTitle||"",Fu(),k.candidates=[],Fi(),Nn(),Mt.clearHistory(),zb.sync(),Gu.sync(),location.hash="studio",Mt.setStep(2),Wu.restoreTimeline(n.workshopTimeline),Nt("方案已恢复，可以继续刻线、构形或润色。")}catch(e){Nt(e.message||"方案恢复失败，请检查文件。")}}function Du(){let n=vr("agate-designs-v1");me("#collection-list").innerHTML=n.length?n.map(t=>`<article class="collection-card"><img src="${t.image}" alt="${Un(t.title)}"><h2>${Un(t.title)}</h2><p>色区覆盖 ${(t.metrics.fit*100).toFixed(1)}% · ${Un(_r.find(i=>i.id===t.sample)?.title||"导入照片")}</p><div class="card-actions"><button class="text-button small" data-edit="${t.id}">继续编辑 ↗</button><button class="text-button small" data-export="${t.id}">导出方案</button><button class="text-button small" data-delete="${t.id}">删除</button></div></article>`).join(""):'<div class="empty-state"><h2>第一份构思，从一块石开始。</h2><p>选择纹色，尝试构图，收藏你的第一件数字作品。</p><a href="#studio" class="primary compact">开始创作 ↗</a></div>',Tt("[data-edit]").forEach(t=>t.onclick=()=>wc(n.find(i=>i.id===t.dataset.edit))),Tt("[data-export]").forEach(t=>t.onclick=()=>{let i=n.find(o=>o.id===t.dataset.export),{image:s,...r}=i;r.note=i.version>=3?"包含原料引用、手绘轮廓、色区、刻线与润色，可导入继续编辑。":"旧版参数；上传照片未保留。";let a={bands:"agate-bands.jpg",nodule:"agate-nodule.jpg"}[i.sample];r.attribution=a?Nu.find(o=>o.file===a)||a:"程序化样本或用户导入照片",br(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),"玛瑙创作方案.json")}),Tt("[data-delete]").forEach(t=>t.onclick=()=>{vc("agate-designs-v1",vr("agate-designs-v1").filter(i=>i.id!==t.dataset.delete)),Du()});let e=vr("agate-plans-v1");me("#plan-list").innerHTML=e.length?e.map(t=>`<div class="plan-row"><div>${Un(t.date)} · ${Un(t.interest)}<small>${Un(t.note||"尚未填写备注")}</small></div><button data-delete-plan="${t.id}">删除</button></div>`).join(""):'<p class="subtle">还没有研学意向，可在“循艺入乡”保存。</p>',Tt("[data-delete-plan]").forEach(t=>t.onclick=()=>{vc("agate-plans-v1",vr("agate-plans-v1").filter(i=>i.id!==t.dataset.deletePlan)),Du()})}function Bb(){me("#sources-content").innerHTML='<div class="source-record"><h3>背景音乐 · We Never（若如初见）</h3><p>La Mer / LongTran Final / DJ山茶花。用户指定曲目，可通过右上角音乐控件播放。</p><a href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div>'+Fr.map(n=>`<div class="source-record"><h3>${n.title}</h3><p>${n.publisher} · ${n.note}</p><a href="${n.url}" target="_blank" rel="noopener">查看原始资料 ↗</a></div>`).join("")+'<div class="source-record"><h3>阜新玛瑙实景影像 · 高清分层播放</h3><p>现版使用辽宁省政府网站2026年2月6日发布《玉醇秋酿 阜新秋颂》中的《阜新玛瑙——刀刃上的大地瑰宝》专题，来源为辽宁发布、辽宁卫视《黑土地》。公开片源2560×1440，当前首页保持高细节1920×1080、25帧：先缓存短高清开场，再后台准备完整高质量视频，完整下载且确认实际播放帧后平滑接替。未准备好时继续播放清晰开场，不使用1MB低码率版本。历史4K增强文件保留归档，当前首页不再请求；不臆造源片不存在的细节。首页为真实运动镜头剪辑，非动态照片。原声主题篇重新选取雕刻手部、巧色雕件与手镯镜头，保留原画幅及台标角标；首页与主题篇均避开源片自带二维码的镜头。背景照片中的手艺、市集、雕件与原料也来自同一阜新专题的实景截帧。本站未宣称自摄或与片中工坊合作，页面未标明开放许可，使用范围待权利方确认。</p><a href="https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml" target="_blank" rel="noopener">新片源与发布出处 ↗</a> · <a href="./assets/home-film/playback.json" target="_blank" rel="noopener">画质与剪辑记录 ↗</a><p>历史版本的480p影像与实景截图来自国际在线发布、阜新市委宣传部提供的《看见阜新》，保留旧文件供历史页面兼容；当前首页已更换高清来源。</p></div><div class="source-record"><h3>实拍背景与图像素材</h3><p>公开实拍样本用于技术演示，不作为阜新原料或本地合作证明。实物图鉴采用等比缩放与格式压缩版本，原始文件归档于初始材料；画布叠加为本系统产生。</p><a href="./assets/backgrounds/credits.json" target="_blank" rel="noopener">各页面实拍背景、出处与截帧时间 ↗</a></div>'+Nu.map(n=>`<div class="source-record"><h3>${Un(n.original)}</h3><p>${Un(n.author)} / ${Un(n.license)} · ${Un(n.origin)}</p><p>${Un(n.changes||"")}</p><a href="${n.source}" target="_blank" rel="noopener">图片来源 ↗</a> · <a href="${n.licenseUrl}" target="_blank" rel="noopener">许可条款 ↗</a></div>`).join("")+'<div class="source-record"><h3>软件与示意内容</h3><p>Three.js r180 · MIT许可。循艺入乡点位卡片中的手艺与水岸情境，以及形成引导的四幅写实情境由内置 image_gen 生成，供地质概念讲述，不是实拍或物理模拟；图库中的馆藏与标本照片单独保留出处。当前全站背景采用实拍图像，按区域选用实物样本、馆藏器物及阜新专题实景截帧；标本与馆藏照片不作为阜新本地作品证明。赤霞流纹、三维原石与创作轮廓由代码生成；成器几何依据当前轮廓构建，刻线为外观凹痕示意。文化查询为本地资料检索，未调用在线生成式问答模型。</p><a href="./vendor/THREE-LICENSE.txt" target="_blank" rel="noopener">Three.js许可 ↗</a></div>',me("#sources-dialog").showModal()}function mm(){if(!k.analysis)return;let n=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:k.pose.scale,angle:0}),e=k.layout,t=k.target.reduce((i,s)=>i+s,0);me("#validation-content").innerHTML=`<p class="validation-p">当前图像分析分辨率 ${k.analysis.width} × ${k.analysis.height}，有效像素 ${k.analysis.validPixels}，目标色区 ${t} 像素。颜色聚类在 OKLab 空间进行，自动分色后可手动修正色区。</p><table class="data-table"><thead><tr><th>当前图像内对照</th><th>居中默认布局</th><th>当前布局</th></tr></thead><tbody><tr><td>图案色区匹配</td><td>${(n.fit*100).toFixed(1)}%</td><td>${(e.fit*100).toFixed(1)}%</td></tr><tr><td>图案区域保留</td><td>${(n.containment*100).toFixed(1)}%</td><td>${(e.containment*100).toFixed(1)}%</td></tr></tbody></table><p class="validation-p">分色耗时 ${k.analysisMs.toFixed(1)} ms；最近一次构图搜索耗时 ${k.optimizeMs?k.optimizeMs.toFixed(1)+" ms":"尚未运行"}。默认对照为居中、与当前图案相同尺度、0°；两列均在当前目标色区上重新计算。</p><p class="validation-p">以上为当前图像的运行记录，不是跨样本评测结论，也不验证雕刻可行性。更小图形可能获得更高覆盖率，需结合视觉表达选择合适方案。</p>`,me("#validation-dialog").showModal()}function gm(n){let e=[...n.toLowerCase()],i=Ad.map(c=>({...c,score:c.keys.reduce((h,d)=>h+(n.includes(d)?3:0),0)+Math.min(1,e.filter(h=>c.title.includes(h)).length/10)})).sort((c,h)=>h.score-c.score)[0],s=me("#knowledge-answer");if(s.replaceChildren(),!n.trim()){s.textContent="请输入想了解的内容。";return}if(i.score<1){s.textContent="已核对的资料卡暂未覆盖这个问题。可尝试“工艺”“十家子”“非遗”或“乡村”，也可打开文化资料库阅读原文。";return}let r=document.createElement("strong");r.textContent=i.title;let a=document.createElement("p");a.textContent=i.text;let o=document.createElement("a"),l=Fr.find(c=>c.id===i.source);o.href=l.url,o.target="_blank",o.rel="noopener",o.textContent="依据："+l.publisher+" ↗",s.append(r,a,o)}me("#optimize").onclick=Mc;me("#save-design").onclick=Vu;me("#export-png").onclick=Hu;me("#view-color").onclick=()=>zu("color");me("#view-preview").onclick=()=>zu("preview");me("#toggle-overlay").onclick=()=>{k.overlay=!k.overlay,me("#toggle-overlay").setAttribute("aria-pressed",String(k.overlay)),me("#toggle-overlay").textContent=k.overlay?"◉ 色区叠加":"○ 色区叠加",Ga()};me("#motif").onchange=n=>{k.kind=n.target.value,k.candidates=[],k.selectedCandidate=-1,Fi(),Nn()};me("#scale").oninput=n=>{k.pose.scale=Number(n.target.value)/100,k.selectedCandidate=-1,Fi(),Nn()};me("#angle").oninput=n=>{k.pose.angle=Number(n.target.value),k.selectedCandidate=-1,Fi(),Nn()};me("#remove-bg").onchange=xr;me("#reanalyze").onclick=xr;me("#reset-mask").onclick=()=>{k.analysis&&(k.target=Br(k.analysis,k.selectedColor),k.candidates=[],k.selectedCandidate=-1,Fi(),Nn())};Tt("[data-brush]").forEach(n=>n.onclick=()=>{k.brush=n.dataset.brush,Tt("[data-brush]").forEach(e=>e.classList.toggle("selected",e===n)),me("#design-canvas").style.cursor=k.brush==="none"?"grab":"crosshair"});me("#image-upload").onchange=async n=>{let e=n.target.files[0];if(!e)return;if(!["image/jpeg","image/png","image/webp"].includes(e.type)||e.size>15*1024*1024){Nt("请选择不超过 15 MB 的 JPG、PNG 或 WebP 图片。"),n.target.value="";return}let t=++k.loadId,i=URL.createObjectURL(e);try{let s=new Image;if(s.src=i,await s.decode(),t!==k.loadId){URL.revokeObjectURL(i);return}Lu&&URL.revokeObjectURL(Lu),Lu=i,k.sample="custom",k.image=s,k.pose={x:.5,y:.5,scale:.24,angle:0},me("#sample-origin").textContent="用户导入照片，仅在当前设备处理。请确认有权用于展示。",me("#canvas-sample-name").textContent="我的原料照片",xc(),xr(),Mt?.resetCraft(),Nt("照片已在本机读取。开始借色构形。")}catch{URL.revokeObjectURL(i),Nt("无法解码此图片，请更换文件。")}n.target.value=""};Tt(".source-open").forEach(n=>n.onclick=Bb);Tt(".dialog-close").forEach(n=>n.onclick=()=>n.closest("dialog").close());Tt("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target===n){let t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}}));me("#open-validation").onclick=mm;me("#home-guide").onclick=()=>me("#home-story").scrollIntoView({behavior:"smooth"});me("#auto-rotate").onclick=()=>{if(!Va)return;let n=!Va.controls.autoRotate;Va.setAuto(n),me("#auto-rotate").setAttribute("aria-pressed",String(n)),me("#auto-rotate").textContent=n?"Ⅱ 暂停自转":"▷ 开启自转"};me("#plan-trip").onclick=()=>{me("#trip-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),me("#trip-dialog").showModal()};me("#trip-form").onsubmit=n=>{n.preventDefault();let e=vr("agate-plans-v1");e.unshift({id:crypto.randomUUID(),date:me("#trip-date").value,interest:me("#trip-interest").value,note:me("#trip-note").value.trim()}),vc("agate-plans-v1",e.slice(0,50))&&(me("#trip-dialog").close(),me("#trip-form").reset(),Nt("已保存本地研学意向，可在“我的作品”查看。"))};me("#knowledge-form").onsubmit=n=>{n.preventDefault(),gm(me("#knowledge-input").value)};Tt("[data-question]").forEach(n=>n.onclick=()=>{me("#knowledge-input").value=n.dataset.question,gm(n.dataset.question)});me("#craft-tabs").innerHTML=lo.map((n,e)=>`<button data-craft="${e}" class="${e===0?"selected":""}">${n.title}</button>`).join("");function ym(n){me("#craft-detail").replaceChildren();let e=document.createElement("h3");e.textContent=lo[n].subtitle;let t=document.createElement("p");t.textContent=lo[n].text,me("#craft-detail").append(e,t),Tt("[data-craft]").forEach(i=>i.classList.toggle("selected",Number(i.dataset.craft)===n))}Tt("[data-craft]").forEach(n=>n.onclick=()=>ym(Number(n.dataset.craft)));ym(0);Mt=tm({$:me,$$:Tt,state:k,samples:_r,drawSource:ku,getDrawRect:()=>Uu,getSceneModule:Ou,renderCandidates:Fi,updateLayout:Nn,optimize:Mc,exportCard:Hu,saveDesign:Vu,toast:Nt});var zb=em({state:k,experience:Mt,$:me,$$:Tt,toast:Nt,getDrawRect:()=>Uu,download:br}),Gu=Qp({state:k,experience:Mt,$:me,$$:Tt,toast:Nt,download:br,projectData:Sc,restoreProject:wc,optimize:Mc,updateLayout:Nn});me(".heading-actions").insertAdjacentHTML("afterbegin",'<label class="project-import">导入方案<input id="project-import" type="file" accept=".json,application/json"></label>');me("#project-import").onchange=async n=>{let e=n.target.files[0];if(e){try{if(e.size>5*1024*1024)throw Error("方案文件请保持在 5 MB 以内。");let t=Ru(JSON.parse(await e.text()));await wc(t)}catch(t){Nt(t.message||"方案文件无法读取。")}n.target.value=""}};var Wu=Od({$:me,$$:Tt,state:k,experience:Mt,playground:Gu,toast:Nt,download:br,projectData:Sc,saveDesign:Vu,exportCard:Hu});window.agateJourney=Pd({toast:Nt,download:br});window.addEventListener("hashchange",pm);new ResizeObserver(()=>Ga()).observe(me("#canvas-stage"));xc();pm();bc("procedural");fetch("./assets/credits.json").then(n=>n.json()).then(n=>Nu=n).catch(()=>{});var vm=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(vm.disconnect(),Ou().then(e=>{Va=e.createAgateScene(me("#hero-scene"),{hero:!0})}).catch(e=>{console.error(e),me("#scene-fallback").hidden=!1}))},{threshold:.08});vm.observe(me("#hero-scene"));window.agateStudio={state:k,analyze:xr,loadSample:bc,optimize:Mc,showValidation:mm,experience:Mt,restoreProject:wc,projectData:Sc,playground:Gu,workshop:Wu};var Mn=document.createElement("div");Mn.className="ambient-player";Mn.innerHTML='<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>';document.querySelector(".header").append(Mn);var Ze=n=>Mn.querySelector(n),ze=document.createElement("audio");ze.id="background-music";ze.src="./assets/background-we-never.mp3";ze.preload="none";ze.loop=!0;document.body.append(ze);var Hb=()=>{try{let n=JSON.parse(localStorage.getItem("agate-music-volume"));return typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.min(1,n)):.25}catch{return .25}};ze.volume=Hb();var vs=!1,qu=ze.volume||.25,ys=0,Ec=null,Tc=null,Ac=!0,Cc=!1,Xu=document.documentElement.classList.contains("film-entering");async function Vb(){Tc||(Ec||(Ec=fetch(new URL("./assets/background-we-never.mp3",import.meta.url),{priority:"low"}).then(n=>{if(!n.ok)throw Error("Audio unavailable");return n.blob()}).then(n=>{Tc=URL.createObjectURL(n),ze.src=Tc}).catch(n=>{throw Ec=null,n})),await Ec)}function Rc(){Ze("#music-volume").value=Math.round(ze.volume*100),Ze("#music-volume-value").value=Math.round(ze.volume*100)+"%";let n=ze.muted||ze.volume===0;Ze("#music-mute").setAttribute("aria-pressed",String(n)),Ze("#music-mute").setAttribute("aria-label",n?"取消静音":"静音"),Ze("#music-mute").textContent=n?"×":"♪"}var _m=n=>Number.isFinite(n)?Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0"):"0:00";function _s(){let n=!ze.paused;Mn.classList.toggle("playing",n),Ze("#music-toggle").setAttribute("aria-pressed",String(n)),Ze("#music-toggle").setAttribute("aria-label",n?"暂停背景音乐":"播放背景音乐"),Ze("#music-label").textContent=n?"音乐播放中":"开启音乐"}function Pc(){Ac=!1,document.removeEventListener("click",Mr,!0),document.removeEventListener("touchend",Mr,!0),document.removeEventListener("keydown",Mr,!0)}async function Wa(){if(Xu||Cc||vs||!ze.paused)return;let n=++ys;vs=!0,Ze("#music-label").textContent="正在加载",Ze("#music-status").textContent="正在准备音乐…";try{if(Tc||await Vb(),n!==ys)return;ze.error&&ze.load(),await ze.play(),n===ys&&(Pc(),Mn.dataset.autoplay="playing",Ze("#music-status").textContent="正在循环播放，可随时暂停。")}catch(e){if(n!==ys)return;_s(),e.name==="NotAllowedError"?(Mn.dataset.autoplay="waiting",Ze("#music-label").textContent=Ac?"轻触开启":"开启音乐",Ze("#music-status").textContent=Ac?"轻触页面，音乐便随创作开始。":"音乐已准备好，请轻点音符播放。"):(Mn.dataset.autoplay="unavailable",Ze("#music-status").textContent="暂时未能播放，请点击音符重试。")}finally{n===ys&&(vs=!1)}}function xm(){Pc(),!Cc&&(vs||!ze.paused?(ys++,vs=!1,ze.pause(),_s(),Mn.dataset.autoplay="paused",Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"):Wa())}function Mr(n){!Ac||!n.isTrusted||Mn.contains(n.target)||n.type==="keydown"&&(!["Enter"," "].includes(n.key)||n.ctrlKey||n.altKey||n.metaKey)||Wa()}document.addEventListener("click",Mr,!0);document.addEventListener("touchend",Mr,{capture:!0,passive:!0});document.addEventListener("keydown",Mr,!0);Ze("#music-toggle").onclick=xm;function Yu(n){Ze("#music-panel").hidden=!n,Ze("#music-settings").setAttribute("aria-expanded",String(n))}Ze("#music-settings").onclick=()=>Yu(Ze("#music-panel").hidden);document.addEventListener("pointerdown",n=>{Mn.contains(n.target)||Yu(!1)});document.addEventListener("keydown",n=>{n.key==="Escape"&&!Ze("#music-panel").hidden&&(Yu(!1),Ze("#music-settings").focus())});Ze("#music-volume").oninput=n=>{ze.volume=Number(n.target.value)/100,ze.volume>0&&(qu=ze.volume),ze.muted=!1;try{localStorage.setItem("agate-music-volume",JSON.stringify(ze.volume))}catch{}Rc()};Ze("#music-mute").onclick=()=>{if(ze.muted||ze.volume===0){if(ze.muted=!1,ze.volume===0){ze.volume=qu;try{localStorage.setItem("agate-music-volume",JSON.stringify(ze.volume))}catch{}}}else qu=ze.volume,ze.muted=!0;Rc()};Ze("#music-seek").oninput=n=>{Number.isFinite(ze.duration)&&ze.duration>0&&(ze.currentTime=Number(n.target.value)/1e3*ze.duration)};ze.addEventListener("play",_s);ze.addEventListener("pause",()=>{_s(),Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"});ze.addEventListener("playing",()=>{Pc(),Mn.dataset.autoplay="playing",Ze("#music-label").textContent="音乐播放中",Ze("#music-status").textContent="正在循环播放，可随时暂停。"});ze.addEventListener("waiting",()=>{ze.paused||(Ze("#music-label").textContent="正在缓冲",Ze("#music-status").textContent="音乐正在缓冲…")});ze.addEventListener("loadedmetadata",()=>{Ze("#music-duration").textContent=_m(ze.duration),Ze("#music-seek").disabled=!Number.isFinite(ze.duration)});ze.addEventListener("timeupdate",()=>{Ze("#music-current").textContent=_m(ze.currentTime),Number.isFinite(ze.duration)&&ze.duration>0&&(Ze("#music-seek").value=Math.round(ze.currentTime/ze.duration*1e3))});ze.addEventListener("volumechange",Rc);ze.addEventListener("error",()=>{Ze("#music-status").textContent="音乐暂不可用，请点击音符重试。",_s()});fetch("./assets/music.json").then(n=>{if(!n.ok)throw Error();return n.json()}).then(n=>{Ze("#music-title").textContent=n.title,Ze("#music-artist").textContent=n.artist,Ze("#music-toggle").title=n.title+" · "+n.artist}).catch(()=>{Ze("#music-title").textContent="用户指定背景音乐"});function Gb(){let n=!ze.paused||vs;Cc=!0,ys++,vs=!1,Pc(),ze.pause(),_s(),Ze("#music-label").textContent="观影中",Ze("#music-status").textContent="宣传片播放期间，背景音乐暂时暂停。";let e=!1;return()=>{e||(e=!0,Cc=!1,_s(),n&&Wa())}}Rc();window.agateMusic={audio:ze,toggle:xm,suspendForFilm:Gb};Xu?(Ze("#music-label").textContent="入境后播放",window.addEventListener("agate:entry-ready",()=>{Xu=!1,Wa()},{once:!0})):Wa();var Ic=document.createElement("div");Ic.className="agate-background";Ic.setAttribute("aria-hidden","true");Ic.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div>';document.body.prepend(Ic);var jn={version:"0.13.0",homepageMode:"High-detail1080p: complete cached short opening first; asynchronously cache the original high-quality1080p full loop and crossfade only after full decode readiness.",sourceResolution:[2560,1440],sourceDuration:252.378,sourceUrl:"https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml",sourceMedia:"https://video.ln.gov.cn/video/2026/2/6/2026261770347739440_2784.mp4",sourceTitle:"玉醇秋酿 阜新秋颂 · 阜新玛瑙——刀刃上的大地瑰宝",sourcePublished:"2026-02-06",provider:"辽宁发布 / 辽宁卫视《黑土地》",publisher:"辽宁省人民政府网站",native4K:!1,enhancement:"当前默认高细节1080p、25fps。开场从1440p源片单独以CRF20编码，完整主循环使用原高质量1080p版本；保留原色、画幅、来源角标，不使用低码率1MB版本。",loopDuration:19.5,loopSegments:[{start:164,duration:4,content:"巧色雕件",chapter:0},{start:115.1,duration:4.8,content:"手工雕刻",chapter:1},{start:175.1,duration:4,content:"透雕器物",chapter:1},{start:217,duration:6,content:"玛瑙手镯",chapter:1},{start:225.7,duration:3.2,content:"阜新玛瑙市集",chapter:2}],crossfadeSeconds:.5,seam:"交叉淡化至首段相同运动相位，循环首尾连续。",variants:[{file:"agate-loop-clean-4k.mp4",width:3840,height:2160,duration:19.5,bytes:22322905,audio:!1,native4K:!1},{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,duration:19.5,bytes:9290694,audio:!1,native4K:!1}],story4k:{file:"agate-story-clean-4k.mp4",width:3840,height:2160,duration:34.6,bytes:39774142,originalSound:!0,edited:!0},scope:"玛瑙巧色雕件、手工雕刻、透雕器物、玛瑙手镯与阜新玛瑙市集；无采访二维码镜头。",rights:"第三方宣传专题，保留辽宁发布、辽宁卫视与省政府发布出处；未查到开放许可，不声明为本站原创拍摄。使用范围仍待权利方确认。",initialTime:0,storyHd:{file:"agate-story-clean-hd.mp4",width:1920,height:1080,duration:34.6,bytes:14857535,originalSound:!0,edited:!0},qrPolicy:"仅选用源片中本身没有二维码的镜头；未用遮挡、模糊或修补掩盖二维码。背景和原声主题剪辑均重新选段。",storySegments:[{start:115.1,duration:4.8},{start:163.5,duration:21.6},{start:217,duration:8.2}],fastVariants:[{file:"agate-loop-fast-1080.mp4",width:1920,height:1080,bytes:3742755,duration:19.48,audio:!1},{file:"agate-loop-fast-720.mp4",width:1280,height:720,bytes:1897901,duration:19.48,audio:!1}],startupBufferSeconds:0,defaultQuality:"1080p-hq",entranceMaxWaitMs:6e3,startupPolicy:"Fully prepare the short high-quality opening, then keep it playing while caching full high-quality loop. Promote only after full-file validation and decoded moving frame; no partial stream playback.",smooth1080:{file:"agate-loop-smooth-1080.mp4",width:1920,height:1080,bytes:1012447,fps:24,duration:19.5,audio:!1},storySmooth:{file:"agate-story-smooth-1080.mp4",width:1920,height:1080,fps:24,bytes:3901108,duration:34.6,originalSound:!0},legacyEnhancement:"以2560×1440公开原片为源，轻度降噪、Lanczos 1.5倍放大、温和锐化，输出3840×2160；属于4K增强而非原生4K。保留原始画幅、台标与角标，不臆造纹色或工艺细节。",opening1080:{file:"agate-opening-hq-1080.mp4",width:1920,height:1080,fps:25,duration:2.64,bytes:1157772,audio:!1,sourceStart:219.4,sourceDuration:3.2,mainTime:14},quality1080:{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,fps:25,duration:19.48,bytes:9290694,audio:!1}};var it=document.querySelector("#home-film"),Ve=document.querySelector("#home-film-video"),$u=document.querySelector("#home-film-toggle"),Za=document.querySelector("#home-film-status"),qb=document.querySelector("#home-film-progress"),ja=matchMedia("(prefers-reduced-motion: reduce)"),bm=document.querySelector(".header");new ResizeObserver(()=>it.style.setProperty("--film-header-height",`${bm.getBoundingClientRect().height}px`)).observe(bm);var Xb=jn.sourceUrl,wt=document.createElement("dialog");wt.className="home-film-dialog";wt.id="home-film-dialog";wt.setAttribute("aria-labelledby","home-full-film-title");wt.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-hq-1080.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><a href="${Xb}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;document.body.append(wt);var en=wt.querySelector("video"),wr=wt.querySelector("#home-full-film-status"),ju=null,Xa=0,fn=document.querySelector("#entry-gate"),Em=document.querySelector("#entry-status"),Yb=document.querySelector("#entry-progress"),$b=document.querySelector("#entry-progress-fill"),jb=document.querySelector("#entry-percent"),Zb=document.querySelector("#entry-quality"),Ya=document.querySelector("#entry-help"),Dc=document.querySelector("#entry-actions"),Tm=document.querySelector("#entry-retry"),Am=document.querySelector("#entry-skip"),Qu=document.documentElement,Uc=new Map,Ja=()=>!location.hash||location.hash==="#home",bs=()=>Ja()&&Cm&&!document.hidden&&!wt.open&&!Tr,Zn="1080p",Nc=null,Fn=0,Fc=0,Er=null,wn=!1,kc=!1,Sn=!1,Cm=!0,Tr=!1,Ar=!1,Zu=0,Ju,$a,ed,Ms=!Qu.classList.contains("film-entering"),xs=!1,Mm=jn.initialTime||0,Jb=()=>"1080P 高清",Rm=()=>jn.quality1080,Sm=-.5,Pm=jn.loopSegments.map(n=>{let e=Math.max(0,Sm);return Sm+=n.duration-jn.crossfadeSeconds,{time:e,chapter:n.chapter}});function Im(){let n=Ve.currentTime;for(let e=0;e<Ve.buffered.length;e++)if(n>=Ve.buffered.start(e)-.05&&n<=Ve.buffered.end(e)+.05)return Math.max(0,Ve.buffered.end(e)-n);return 0}function kn(){let n=Sn&&!Ve.paused;$u.setAttribute("aria-pressed",String(n)),$u.textContent=n?"Ⅱ 暂停影像":Ar?"▷ 点击播放":"▷ 播放影像",it.dataset.filmState=wn?"preparing":n?"playing":Sn?"paused":"poster",Za.textContent=wn?"正在准备开场画面…":Sn?`${Jb()} · ${n?"连续实景":"影像已暂停"}`:"实景封面 · 点击播放连续影像"}function zc(n,e){let t=Math.max(0,Math.min(100,Math.round(n)));$b.style.width=`${t}%`,jb.textContent=`${t}%`,Yb.setAttribute("aria-valuenow",String(t)),e&&(Em.textContent=e)}window.addEventListener("agate:film-progress",n=>{let e=n.detail;!Ms&&!xs&&(e.kind==="opening"||window.agateFilmLoader.state.kind==="full")&&zc(e.received/e.total*94,"正在准备高清开场")});function Lm(){Ms||xs||(Zu++,fn.classList.remove("leaving"),fn.hidden=!1,Qu.classList.add("film-entering"),fn.dataset.state="preparing",Ya.hidden=!0,Dc.hidden=!0,Tm.textContent="重新准备",Am.disabled=!1,Zb.textContent="先让高清开场就绪，再走进阜新",zc(0,"正在点亮第一帧"),document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(n=>{Uc.has(n)||Uc.set(n,n.inert),n.inert=!0}),fn.setAttribute("tabindex","-1"),fn.focus({preventScroll:!0}),$a||($a=setTimeout(()=>{$a=0,Cr("slow-network")},jn.entranceMaxWaitMs)),clearTimeout(Ju),Ju=setTimeout(()=>{Ms||(Ya.hidden=!1,Ya.textContent="开场仍在准备，也可以直接进入浏览。",Dc.hidden=!1)},2500))}function Cr(n){if(Ms||xs)return;clearTimeout(Ju),clearTimeout($a),$a=0,xs=!0;let e=++Zu;fn.dataset.state=n,zc(100,n==="playing"?"画面就绪，正在入境":"正在入境"),fn.classList.add("leaving"),setTimeout(()=>{if(e===Zu&&(Ms=!0,xs=!1,Qu.classList.remove("film-entering"),fn.classList.remove("leaving"),fn.hidden=!0,Uc.forEach((t,i)=>{i.inert=t}),Uc.clear(),window.dispatchEvent(new CustomEvent("agate:entry-ready",{detail:{reason:n,quality:Zn}})),Ja())){let t=document.querySelector("#home-film-title");t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})}},ja.matches?0:250)}function Ku(n,e=!1){Ar=e,kn(),Za.textContent=e?"轻点播放，开启实景影像":"实景封面 · 轻点播放可重试",!(Ms||xs)&&(fn.dataset.state=e?"awaiting-play":"error",Em.textContent=n,Ya.textContent=e?"影像已准备好，点击播放或直接进入。":"可以重新准备，也可以直接进入浏览。",Ya.hidden=!1,Dc.hidden=!1,Tm.textContent=e?"进入并播放":"重新准备",Am.disabled=!1)}function Kb(n,e){return new Promise((t,i)=>{let s=["loadedmetadata","loadeddata","canplay","progress","seeked","timeupdate"],r=!1,a=()=>{clearTimeout(h),s.forEach(d=>Ve.removeEventListener(d,c)),Ve.removeEventListener("error",l),n.removeEventListener("abort",o)},o=()=>{a(),i(new DOMException("Cancelled","AbortError"))},l=()=>{a(),i(new DOMException("Video unavailable","NotSupportedError"))},c=()=>{if(e!==Fn){o();return}if(Ve.readyState>=1&&!r){r=!0;let g=Math.min(Mm,Math.max(0,Ve.duration-.1));Mm=0,g>0&&Math.abs(Ve.currentTime-g)>.1&&(Ve.currentTime=g)}let d=Im(),u=Math.min(jn.startupBufferSeconds,Math.max(.05,Ve.duration-Ve.currentTime));it.dataset.bufferedAhead=d.toFixed(2),!Ms&&!xs&&zc(98,"正在唤醒流畅画面");let f=!Ve.paused&&Ve.currentTime>0;r&&!Ve.seeking&&Ve.readyState>=2&&(d>=u-.04||f)&&(a(),t())},h=setTimeout(()=>{a(),i(new Error("Opening buffer timed out"))},45e3);s.forEach(d=>Ve.addEventListener(d,c)),Ve.addEventListener("error",l),n.addEventListener("abort",o,{once:!0}),c()})}function Qb(n){return new Promise((e,t)=>{let i,s=Ve.currentTime,r=()=>{clearTimeout(o),i!==void 0&&Ve.cancelVideoFrameCallback?.(i),n.removeEventListener("abort",a)},a=()=>{r(),t(new DOMException("Cancelled","AbortError"))},o=setTimeout(()=>{r(),Ve.videoWidth>0&&Ve.readyState>=2&&!Ve.paused&&Ve.currentTime>s?e():t(new Error("First video frame not ready"))},3e3);n.addEventListener("abort",a,{once:!0}),Ve.requestVideoFrameCallback&&(i=Ve.requestVideoFrameCallback(()=>{r(),e()}))})}async function Dm(n){Ve.muted=!0,Ve.defaultMuted=!0,await Ve.play(),await Qb(Er.signal),n===Fn&&(Sn=!0,wn=!1,Ar=!1,it.dataset.firstFrame="true",it.dataset.videoQuality=Zn,it.dataset.rendition=String(Nc.height),it.dataset.entryBufferedSeconds=Im().toFixed(2),it.dataset.entryVideoSeconds=String(Ve.currentTime),it.classList.add("video-ready"),kn(),Cr("playing"),bs()?Hc():Pr())}async function Rr(n=Zn,e=!1){let t=++Fn;Fc++,Er?.abort(),Er=new AbortController,clearTimeout(ed),Zn="1080p",Nc=Rm(),Sn=!1,kc=!1,wn=!0,Ar=!1,Tr=!1,it.dataset.firstFrame="false",it.dataset.playbackMode="layered-hq-1080p",Lm(),kn();try{let i=await window.agateFilmLoader.load(e);if(t!==Fn||(it.dataset.downloadComplete=String(i.complete),it.dataset.downloadBytes=String(i.received),it.dataset.cacheSource=i.source,it.dataset.filmTier=i.kind,Nc=i.item,Ve.muted=!0,Ve.defaultMuted=!0,Ve.preload="auto",Ve.loop=!0,Ve.src!==i.url&&(Ve.pause(),it.classList.remove("video-ready"),Ve.src=i.url,Ve.load()),await Kb(Er.signal,t),t!==Fn))return;kc=!0,await Dm(t)}catch(i){if(t!==Fn||i.name==="AbortError")return;if(wn=!1,kn(),i.name==="NotAllowedError"){Ku("开场画面已准备好",!0);return}Ku("实景影像暂未准备完成")}}function Pr(){Fc++,it.querySelectorAll(".home-film-video").forEach(n=>n.pause()),clearTimeout(ed),kn()}async function Um(){if(!Sn||!bs())return;let n=++Fc;try{if(await Ve.play(),n!==Fc)return;if(!bs()){Ve.pause();return}kn(),Hc()}catch{kn(),Za.textContent="点击播放影像，继续观看"}}function Ka(){wn||(Sn&&bs()?(Um(),Bc()):Pr())}var Sr=null,qa=null,Lc=null,Oc=null,wm;async function Hc(){if(it.dataset.filmTier!=="full"){if(Sr){Bc();return}return qa||(qa=window.agateFilmLoader.loadFull().then(n=>{Sr=n,it.dataset.fullCached="true",it.dataset.fullBytes=String(n.received),Bc()}).catch(()=>{it.dataset.fullCached="retry",clearTimeout(wm),wm=setTimeout(()=>{bs()&&Hc()},15e3)}).finally(()=>{qa=null}),qa)}}async function Bc(){if(!Sr||Lc||!Sn||!bs()||it.dataset.filmTier==="full")return;let n=Ve,e=Fn,t=document.createElement("video");return t.className="home-film-video",t.id="home-film-upgrade",t.setAttribute("aria-hidden","true"),t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.style.opacity="0",t.style.transition="opacity .55s ease",it.append(t),Lc=(async()=>{try{if(await new Promise((i,s)=>{let r=()=>{clearTimeout(a),i()},a=setTimeout(()=>s(Error("Upgrade decode timed out")),1e4);t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",()=>{clearTimeout(a),s(Error("Upgrade unavailable"))},{once:!0}),t.src=Sr.url,t.load()}),t.currentTime=Math.min(Oc??jn.opening1080.mainTime,t.duration-.1),await t.play(),await new Promise((i,s)=>{let r,a=setTimeout(()=>{r!==void 0&&t.cancelVideoFrameCallback?.(r),s(Error("Upgrade frame unavailable"))},3e3);t.requestVideoFrameCallback?r=t.requestVideoFrameCallback(()=>{clearTimeout(a),i()}):t.addEventListener("timeupdate",()=>{clearTimeout(a),i()},{once:!0})}),e!==Fn||Ve!==n||!bs())return;n.id="home-film-opening-video",t.id="home-film-video",t.removeAttribute("aria-hidden"),Ve=t,Nm(t),it.dataset.filmTier="full",it.dataset.cacheSource=Sr.source,it.dataset.downloadBytes=String(Sr.received),Oc=null,t.getBoundingClientRect(),t.style.opacity="1",kn(),await new Promise(i=>setTimeout(i,600)),n.pause(),n.remove()}catch{it.dataset.upgradeState="deferred"}finally{Ve!==t&&(t.pause(),t.remove()),Lc=null}})(),Lc}window.agateEntrance={retry(){Ar&&kc?(wn=!0,Dc.hidden=!0,Dm(Fn).catch(()=>{wn=!1,Ku("轻点播放，开启实景影像",!0)})):Rr(Zn,!0)},skip(){Cr("skipped")}};$u.onclick=()=>{if(Ar&&kc){window.agateEntrance.retry();return}if(!Sn){Rr(Zn,!0);return}Ve.paused?(Tr=!1,Um()):(Tr=!0,Pr())};it.querySelectorAll("[data-film-chapter]").forEach(n=>n.onclick=()=>{let e=Pm.find(t=>t.chapter===Number(n.dataset.filmChapter));if(e){if(!Sn){Oc=e.time,Rr(Zn);return}if(it.dataset.filmTier!=="full"){Oc=e.time,Za.textContent="正在准备主题镜头 · 高清开场继续播放",Hc(),Bc();return}Ve.currentTime=e.time}});function Nm(n){n.addEventListener("timeupdate",()=>{if(n!==Ve)return;let e=n.currentTime,t=it.dataset.filmTier==="opening"?1:[...Pm].reverse().find(i=>e>=i.time)?.chapter||0;it.querySelectorAll("[data-film-chapter]").forEach(i=>i.classList.toggle("active",Number(i.dataset.filmChapter)===t)),qb.style.width=Number.isFinite(n.duration)?`${e/n.duration*100}%`:"0%"}),n.addEventListener("playing",()=>{n===Ve&&(clearTimeout(ed),kn())}),n.addEventListener("pause",()=>{n===Ve&&kn()})}Nm(Ve);new IntersectionObserver(n=>{Cm=n[0].isIntersecting,Ka()},{threshold:.12}).observe(it);document.addEventListener("visibilitychange",()=>{document.hidden&&wt.open&&en.pause(),Ka()});window.addEventListener("hashchange",()=>{wt.open&&wt.close(),Ja()?!Sn&&!ja.matches?Rr(Zn):Ka():(wn&&(Fn++,Er?.abort(),wn=!1),Cr("route"),Pr())});ja.addEventListener("change",()=>{ja.matches?(Tr=!0,wn&&(Fn++,Er?.abort(),wn=!1),Pr(),Cr("reduced-motion")):!Sn&&Ja()?Rr(Zn):Ka()});fn.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let e=[...fn.querySelectorAll("button:not(:disabled)")].filter(s=>!s.closest("[hidden]"));if(!e.length){n.preventDefault();return}let t=e.indexOf(document.activeElement),i=n.shiftKey?t<=0?e.length-1:t-1:(t+1)%e.length;n.preventDefault(),e[i].focus()});function eM(){if(wt.open)return;Xa++,Pr(),ju=window.agateMusic?.suspendForFilm?.()||null,wr.textContent="正在准备玛瑙主题片…",wt.showModal();let n=`./assets/home-film/${jn.storyHd.file}`;en.getAttribute("src")!==n&&(en.src=n,en.load()),en.currentTime=0,en.muted=!1,en.volume=1;let e=Xa;en.play().then(()=>{if(e===Xa){if(!wt.open){en.pause();return}wr.textContent=""}}).catch(t=>{e!==Xa||!wt.open||(wr.textContent=t.name==="NotAllowedError"?"请点击播放键开启原声。":"主题片暂未载入，可通过下方来源观看原片。")})}document.querySelector("#home-film-watch").onclick=eM;document.querySelector("#home-film-close").onclick=()=>wt.close();wt.addEventListener("close",()=>{Xa++,en.pause(),ju?.(),ju=null,Ka()});wt.addEventListener("click",n=>{if(n.target===wt){let e=wt.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&wt.close()}});en.addEventListener("playing",()=>{wt.open?wr.textContent="":en.pause()});en.addEventListener("error",()=>{wr.textContent="主题片暂未载入，可通过下方来源观看原片。"});en.addEventListener("ended",()=>{wr.textContent="主题片已结束，可重播或关闭继续创作。"});Nc=Rm();kn();Ja()?ja.matches?(Tr=!0,Lm(),it.querySelector(".home-film-poster").decode().catch(()=>{}).finally(()=>{Za.textContent="减少动态效果已启用 · 可手动播放",Cr("reduced-motion")})):Rr(Zn):fn.hidden=!0;var Jn=document.documentElement,Om=document.querySelector(".header"),nd={learn:{label:"观石识艺章节导航",panels:[".home-stone-study",".formation-teaser","#agate-gallery","#home-story"],titles:["读懂纹色","石的来历","实物图鉴","非遗手艺"]}},Bm=matchMedia("(prefers-reduced-motion: reduce)");Object.values(nd).forEach(n=>{n.panels=n.panels.map(e=>document.querySelector(e)),n.panels.forEach((e,t)=>{e.classList.add("home-snap-panel"),e.dataset.snapPanel=String(t)})});var Kn=[],Fm=[],Oi=document.createElement("nav");Oi.className="home-screen-nav";document.body.append(Oi);var zm='a,button,input,select,textarea,label,canvas,video,dialog,[contenteditable="true"],[role="slider"],.photo-viewport';function Hm(n,e=""){let t=n.target.closest(zm+e);return t?t.tagName==="CANVAS"&&typeof t.agateHitTest=="function"&&["wheel","pointerdown"].includes(n.type)?n.agateStoneHit??t.agateHitTest(n.clientX,n.clientY):!0:!1}var Bi=0,At=null,id=-1,td=0,km,ki=0,sd=0,Vc=!1,rd=null,Vm=()=>Object.hasOwn(nd,location.hash.slice(1)||"home")?nd[location.hash.slice(1)||"home"]:null,ad=()=>!!Vm(),ws=()=>!ad()||Jn.classList.contains("film-entering")||Jn.classList.contains("explore-crossing")||!!document.querySelector("dialog[open]"),od=()=>Om.getBoundingClientRect().height,Qa=()=>innerHeight-od(),Ss=()=>Math.max(0,document.documentElement.scrollHeight-innerHeight),Lr=n=>Math.max(0,Math.min(Ss(),scrollY+n.getBoundingClientRect().top-od()));function Gm(){return[...Kn.map(Lr),Ss()]}function ld(n=scrollY){let e=0;return Kn.map(Lr).forEach((i,s)=>{n>=i-3&&(e=s)}),e}function cd(){Jn.style.setProperty("--snap-header-height",`${od()}px`)}new ResizeObserver(cd).observe(Om);cd();function Gc(){Bi&&cancelAnimationFrame(Bi),Bi=0,Jn.classList.remove("snap-in-motion")}function Ir(n=!1){if(!ad())return;let e=ld(scrollY+Math.min(Qa()*.35,150));if(Oi.querySelectorAll("[data-screen]").forEach((t,i)=>{i===e?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),e!==id){if(n&&!Bm.matches){let t=Kn[e].querySelector(".home-film-content,.hero-copy,.formation-teaser-copy,.photo-section-heading")||Kn[e].firstElementChild;rd?.cancel(),rd=t?.animate([{transform:"translateY(12px)",opacity:.75},{transform:"translateY(-2px)",opacity:1,offset:.75},{transform:"translateY(0)",opacity:1}],{duration:520,easing:"cubic-bezier(.2,.75,.25,1)"})}id=e}}function eo(n){if(Gc(),n=Math.max(0,Math.min(Ss(),n)),Bm.matches||Math.abs(n-scrollY)<1){window.scrollTo({top:n,behavior:"instant"}),Ir();return}Jn.classList.add("snap-in-motion");let e=scrollY,t=0,i=performance.now(),s=i;function r(a){if(ws()){Gc();return}let o=Math.min((a-i)/1e3,.028);if(i=a,t+=(200*(n-e)-22*t)*o,e+=t*o,window.scrollTo({top:Math.max(0,Math.min(Ss(),e)),behavior:"instant"}),Math.abs(n-e)<.5&&Math.abs(t)<4||a-s>1500){window.scrollTo({top:n,behavior:"instant"}),Bi=0,Jn.classList.remove("snap-in-motion"),Ir(!0);return}Bi=requestAnimationFrame(r)}Bi=requestAnimationFrame(r)}function Wm(n){let e=ld(),t=Kn[e],i=Lr(t),s=i+t.getBoundingClientRect().height-Qa();return s-i<6?!1:n>0?scrollY<s-3:scrollY>i+3}function tM(n){let e=Gm();return n>0?e.find(t=>t>scrollY+4)??Ss():[...e].reverse().find(t=>t<scrollY-4)??0}function qm(n){return ws()||Wm(n)?!1:(eo(tM(n)),!0)}Oi.addEventListener("click",n=>{let e=n.target.closest("[data-screen]");e&&!ws()&&eo(Lr(Kn[Number(e.dataset.screen)]))});document.addEventListener("click",n=>{let e=n.target.closest("[data-panel-link]");if(e&&!ws()){let t=Kn[Number(e.dataset.panelLink)];t&&eo(Lr(t))}});window.addEventListener("wheel",n=>{if(ws()||n.defaultPrevented||n.ctrlKey||n.metaKey||Math.abs(n.deltaX)>Math.abs(n.deltaY)||Hm(n))return;let e=Math.sign(n.deltaY);if(!e)return;let t=performance.now(),i=t-sd;if(sd=t,Bi||Vc&&i<180){n.preventDefault();return}i>=180&&(Vc=!1,ki=0),!Wm(e)&&(n.preventDefault(),ki&&Math.sign(ki)!==e&&(ki=0),ki+=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?Qa():1),Math.abs(ki)>=28&&(Vc=!0,ki=0,qm(e)))},{passive:!1});document.addEventListener("keydown",n=>{if(ws()||n.defaultPrevented||n.ctrlKey||n.altKey||n.metaKey||n.target.closest(zm))return;let e=["PageDown","ArrowDown"," "].includes(n.key)?n.shiftKey?-1:1:["PageUp","ArrowUp"].includes(n.key)?-1:0;if(n.key==="Home"||n.key==="End"){n.preventDefault(),eo(n.key==="Home"?0:Ss());return}e&&qm(e)&&n.preventDefault()});document.addEventListener("pointerdown",n=>{if(ws()||n.pointerType!=="mouse"||n.button!==0||n.ctrlKey||n.metaKey||Hm(n,",h1,h2,h3,p,small,strong"))return;let e=n.target.closest(".home-snap-panel");e&&(Gc(),At={id:n.pointerId,panel:e,startY:n.clientY,startX:n.clientX,scroll:scrollY,at:ld(),previousY:n.clientY,previousTime:performance.now(),velocity:0,active:!1})});document.addEventListener("pointermove",n=>{if(!At||n.pointerId!==At.id)return;let e=At.startY-n.clientY,t=At.startX-n.clientX;if(!At.active){if(Math.abs(t)>Math.abs(e)+8){At=null;return}if(Math.abs(e)<7)return;At.active=!0,Jn.classList.add("snap-dragging"),At.panel.setPointerCapture(n.pointerId)}n.preventDefault();let i=performance.now();At.velocity=(At.previousY-n.clientY)/Math.max(1,i-At.previousTime),At.previousY=n.clientY,At.previousTime=i,window.scrollTo({top:Math.max(0,Math.min(Ss(),At.scroll+e)),behavior:"instant"})});function Xm(n){if(!At||n.pointerId!==At.id)return;let e=At;if(At=null,e.active){let t=e.startY-n.clientY,i=Math.sign(t),s=Gm(),r=Lr(Kn[e.at]),a=r+Kn[e.at].getBoundingClientRect().height-Qa(),o=a-r>6&&scrollY>=r&&scrollY<=a,l;o?l=scrollY:Math.abs(t)>Math.min(85,Qa()*.12)||performance.now()-e.previousTime<100&&Math.abs(e.velocity)>.35?l=s[Math.max(0,Math.min(s.length-1,e.at+i))]:l=s.reduce((c,h)=>Math.abs(h-scrollY)<Math.abs(c-scrollY)?h:c,s[0]),eo(l),Jn.classList.remove("snap-dragging"),e.panel.hasPointerCapture(n.pointerId)&&e.panel.releasePointerCapture(n.pointerId)}}document.addEventListener("pointerup",Xm);document.addEventListener("pointercancel",Xm);window.addEventListener("scroll",()=>{ad()&&(td||(td=requestAnimationFrame(()=>{td=0,Ir()})),clearTimeout(km),km=setTimeout(()=>{!Bi&&!At&&Ir(!0)},130))},{passive:!0});window.addEventListener("resize",()=>{cd(),Ir()});function Ym(){Gc(),At=null,ki=0,sd=0,Vc=!1,rd?.cancel(),Jn.classList.remove("snap-dragging");let n=Vm();Kn=n?.panels||[],Fm=n?.titles||[],Jn.classList.toggle("snap-home",!!n),Oi.hidden=!n,id=-1,n?(Oi.setAttribute("aria-label",n.label),Oi.innerHTML=Fm.map((e,t)=>`<button data-screen="${t}" aria-label="第${t+1}屏：${e}"><i aria-hidden="true"></i><span>${String(t+1).padStart(2,"0")} / ${e}</span></button>`).join("")+'<small aria-hidden="true">SCROLL / DRAG</small>'):Oi.replaceChildren(),requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"instant"}),Ir()})}window.addEventListener("hashchange",Ym);Ym();function hd(){location.hash==="#guide"&&document.querySelectorAll("#home-overview img[data-entry-src]").forEach(n=>{let e=()=>{n.naturalWidth>1&&n.decode().catch(()=>{}).then(()=>n.parentElement.classList.add("photo-ready"))};n.addEventListener("load",e),n.loading="eager",n.fetchPriority="high",n.src=n.dataset.entrySrc,delete n.dataset.entrySrc,e()})}window.addEventListener("agate:entry-ready",hd,{once:!0});window.addEventListener("hashchange",hd);hd();var $m="agate-explore-sound-muted-v1",En=!1,zi=null,Hi=null,pn=null,jm=0,Vi=0;try{En=localStorage.getItem($m)==="true"}catch{}var Zm=()=>document.querySelectorAll("[data-explore-sound]");function Jm(){Zm().forEach(n=>{n.setAttribute("aria-pressed",String(!En)),n.setAttribute("aria-label",En?"开启探索音效":"关闭探索音效"),n.innerHTML=`<span aria-hidden="true">${En?"♩":"♪"}</span> 音效${En?"已关":"已开"}`})}function nM(n,e,{brief:t=!1,volume:i=.15}={}){let s=n.currentTime+.012,r=n.createGain(),a=[],o=!1;r.gain.value=i,r.connect(e);let l=(u,f,g,y)=>{[1,2.37,4.91].forEach((m,p)=>{let T=n.createOscillator(),v=n.createGain();T.type="sine",T.frequency.setValueAtTime(f*m,s+u),T.frequency.exponentialRampToValueAtTime(f*m*.998,s+u+g);let _=y*[1,.2,.065][p];v.gain.setValueAtTime(1e-5,s+u),v.gain.exponentialRampToValueAtTime(_,s+u+.008),v.gain.exponentialRampToValueAtTime(1e-5,s+u+g),T.connect(v),v.connect(r),T.start(s+u),T.stop(s+u+g+.04),a.push(T,v)})};if(l(0,660,t?.5:1.1,.58),!t){let u=Math.ceil(n.sampleRate*1.35),f=n.createBuffer(1,u,n.sampleRate),g=f.getChannelData(0),y=8153,m=0;for(let _=0;_<u;_++)y=y*16807%2147483647,m=(m+.075*(y/10737418235e-1-1))/1.075,g[_]=Math.max(-1,Math.min(1,m))*.12;let p=n.createBufferSource(),T=n.createBiquadFilter(),v=n.createGain();p.buffer=f,T.type="bandpass",T.Q.value=.55,T.frequency.setValueAtTime(700,s+.12),T.frequency.exponentialRampToValueAtTime(2100,s+1.1),v.gain.setValueAtTime(1e-5,s+.12),v.gain.linearRampToValueAtTime(.17,s+.7),v.gain.exponentialRampToValueAtTime(1e-5,s+1.42),p.connect(T),T.connect(v),v.connect(r),p.start(s+.12),p.stop(s+1.5),a.push(p,T,v),l(1.18,880,1.35,.29),l(1.68,990,1.28,.23),l(2.15,1320,1.1,.16)}let c=t?.65:3.45,h=()=>{a.forEach(u=>{try{u.disconnect()}catch{}}),r.disconnect()},d=setTimeout(h,(c+.1)*1e3);return{duration:c,stop(){if(o)return;o=!0,clearTimeout(d);let u=n.currentTime;r.gain.cancelScheduledValues(u),r.gain.setTargetAtTime(0,u,.018),a.forEach(f=>{if(f.stop)try{f.stop(u+.08)}catch{}}),d=setTimeout(h,110)}}}function ud({brief:n=!1}={}){let e=++Vi;pn?.stop(),pn=null;let t=window.agateMusic?.audio;if(En||document.hidden||t?.muted||t?.volume===0)return()=>{};try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return()=>{};zi||=new i,Hi||(Hi=zi.createAnalyser(),Hi.fftSize=1024,Hi.connect(zi.destination));let s=()=>{e!==Vi||En||document.hidden||zi.state!=="running"||t?.muted||t?.volume===0||(pn=nM(zi,Hi,{brief:n,volume:.12}),jm++)};zi.state==="running"?s():zi.resume().then(s).catch(()=>{})}catch{}return()=>{e===Vi&&(Vi++,pn?.stop(),pn=null)}}function iM(){Vi++,En=!En;try{localStorage.setItem($m,String(En))}catch{}En&&(pn?.stop(),pn=null),Jm()}Zm().forEach(n=>n.addEventListener("click",iM));Jm();window.agateMusic?.audio.addEventListener("volumechange",()=>{let n=window.agateMusic.audio;(n.muted||n.volume===0)&&(Vi++,pn?.stop(),pn=null)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Vi++,pn?.stop(),pn=null)});window.addEventListener("hashchange",n=>{n.agateExploration||(Vi++,pn?.stop(),pn=null)});window.agateSound={getState(){let n=0;if(Hi){let e=new Float32Array(Hi.fftSize);Hi.getFloatTimeDomainData(e),n=Math.sqrt(e.reduce((t,i)=>t+i*i,0)/e.length)}return{muted:En,contextState:zi?.state||"uncreated",plays:jm,rms:n}}};var tn=document.querySelector("#home-overview"),dd=document.querySelector("#guide-replay"),to=[...tn.querySelectorAll(".home-entry-card")],Wc=matchMedia("(prefers-reduced-motion: reduce)"),Dr=[],qc=[],no=0,Km=!1,io=new Set,Es=!1;function Qm(){no++,Dr.forEach(n=>n.cancel()),Dr=[],qc.forEach(clearTimeout),qc=[]}function Gi(n,e=0,{distance:t=20,duration:i=650}={}){if(!n)return;let s=n.animate([{opacity:0,transform:`translateY(${t}px)`},{opacity:1,transform:"translateY(0)"}],{duration:i,delay:e,fill:"backwards",easing:"cubic-bezier(.2,.7,.25,1)"});Dr.push(s)}function fd(n){n.classList.remove("guide-card-pending","guide-card-entering")}function eg(n,e=0){if(io.has(n))return;io.add(n),n.classList.remove("guide-card-pending"),n.classList.add("guide-card-entering"),Gi(n,e,{distance:32,duration:760});let i=n.querySelector(".entry-card-photo").animate([{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)"}],{duration:850,delay:e+90,fill:"backwards",easing:"cubic-bezier(.2,.65,.25,1)"});Dr.push(i),[".entry-card-kicker","h3","p",".entry-card-result",".entry-card-link"].forEach((r,a)=>Gi(n.querySelector(r),e+200+a*95,{distance:12,duration:500}));let s=no;qc.push(setTimeout(()=>{no===s&&fd(n)},e))}function sM(n){let e=n.getBoundingClientRect(),t=document.querySelector(".header").getBoundingClientRect().height;return e.top<innerHeight-20&&e.bottom>t+20}function pd(){dd.textContent=Es?"直接显示全部 ↘":"重看导览动画 ↻",dd.setAttribute("aria-label",Es?"跳过导览展开动画，直接显示全部内容":"重新播放导览展开动画")}function Wi(){Qm(),to.forEach(fd),tn.classList.remove("guide-preparing"),tn.classList.add("guide-visible"),io=new Set(to),Es=!1,pd()}function Ur(){Qm(),Km=!0,Es=!0,io=new Set,tn.classList.add("guide-preparing"),to.forEach(n=>{n.classList.remove("guide-card-entering"),n.classList.add("guide-card-pending")}),pd()}function so(){if(Wc.matches){Wi();return}Es||Ur(),tn.classList.remove("guide-preparing"),tn.classList.add("guide-visible"),Gi(tn.querySelector(".overview-heading .eyebrow"),40,{distance:12,duration:580}),Gi(tn.querySelector("#home-overview-title"),210,{distance:25,duration:850}),Gi(tn.querySelector(".overview-intro"),540,{distance:18,duration:750}),Gi(tn.querySelector(".guide-film-feature"),760,{distance:22,duration:760}),Gi(tn.querySelector(".guide-replay-row"),960,{distance:10,duration:550}),to.filter(sM).forEach((e,t)=>eg(e,1250+t*360)),Gi(tn.querySelector(".overview-footer"),2400,{distance:16,duration:650});let n=no;qc.push(setTimeout(()=>{no===n&&(Es=!1,pd())},4e3))}var rM=new IntersectionObserver(n=>{!Km||tn.classList.contains("guide-preparing")||Wc.matches||n.filter(e=>e.isIntersecting).forEach(e=>eg(e.target,90))},{threshold:.12});to.forEach(n=>rM.observe(n));dd.onclick=()=>{Es?Wi():(Ur(),so())};function tg(n){n?.agateExploration||(location.hash==="#guide"?(Ur(),requestAnimationFrame(()=>{location.hash==="#guide"&&so()})):Wi())}window.addEventListener("hashchange",tg);location.hash==="#guide"&&tg();Wc.addEventListener("change",()=>{Wc.matches&&Wi()});tn.addEventListener("focusin",n=>{let e=n.target.closest(".guide-film-feature");if(e){Dr.forEach(i=>{if(i.effect?.target===e)try{i.finish()}catch{}});return}let t=n.target.closest(".home-entry-card");t&&(io.add(t),Dr.forEach(i=>{let s=i.effect?.target;if(s===t||t.contains(s))try{i.finish()}catch{}}),fd(t))});var gd=document.documentElement,Et=document.querySelector("#begin-exploration"),ig=document.querySelector("#home-overview"),ng=document.querySelector("#home-overview-title"),nn=document.createElement("div");nn.className="explore-portal";nn.hidden=!0;nn.setAttribute("aria-hidden","true");nn.innerHTML='<div class="portal-grain"></div><div class="portal-contours"><i></i><i></i><i></i><i></i></div><div class="portal-words"><small>FOLLOW THE PATTERN</small><span>循纹而行<span>入境成艺</span></span><i></i></div>';document.body.append(nn);var _d=matchMedia("(prefers-reduced-motion: reduce)"),aM=matchMedia("(hover: hover) and (pointer: fine)"),Rt=null,md=0,ro=null,oM=()=>!location.hash||location.hash==="#home",yd=()=>location.hash==="#guide";function vd(){if(yd()){window.scrollTo({top:0,behavior:"instant"});return}let n=location.href;history.pushState(null,"","#guide");let e=new HashChangeEvent("hashchange",{oldURL:n,newURL:location.href});Object.defineProperty(e,"agateExploration",{value:!0}),window.dispatchEvent(e)}function sg(){ng.setAttribute("tabindex","-1"),ng.focus({preventScroll:!0})}function xd(){Et.style.setProperty("--magnet-x","0px"),Et.style.setProperty("--magnet-y","0px"),Et.style.setProperty("--light-x","50%"),Et.style.setProperty("--light-y","50%")}Et.addEventListener("pointermove",n=>{!aM.matches||_d.matches||Rt||(ro={x:n.clientX,y:n.clientY},!md&&(md=requestAnimationFrame(()=>{if(md=0,!ro||Rt)return;let e=Et.getBoundingClientRect(),t=ro.x-e.left,i=ro.y-e.top;Et.style.setProperty("--magnet-x",`${(t/e.width-.5)*9}px`),Et.style.setProperty("--magnet-y",`${(i/e.height-.5)*7}px`),Et.style.setProperty("--light-x",`${t/e.width*100}%`),Et.style.setProperty("--light-y",`${i/e.height*100}%`)})))});Et.addEventListener("pointerleave",()=>{ro=null,xd()});function Ts(n,{land:e=!0,focus:t=!0,skip:i=!1}={}){Rt===n&&(Rt=null,clearTimeout(n.timer),(i||!e)&&(n.stopSound?.(),Wi()),n.animations.forEach(s=>s.cancel()),e&&!yd()&&(Ur(),vd(),i?Wi():so()),gd.classList.remove("explore-crossing"),nn.hidden=!0,nn.removeAttribute("style"),Et.classList.remove("engaged"),Et.disabled=!1,Et.removeAttribute("aria-busy"),n.inert.forEach(([s,r])=>s.inert=r),xd(),Et.dataset.exploreState="idle",yd()&&e&&(ig.dataset.exploreArrival="true",t&&sg()))}function Xc(n,e,t,i){let s=e.animate(t,{fill:"both",...i});return n.animations.push(s),s.finished.catch(()=>{})}async function lM(){if(Rt||!oM()||gd.classList.contains("film-entering")||document.querySelector("dialog[open]"))return;if(_d.matches){ud({brief:!0}),vd(),Wi(),ig.dataset.exploreArrival="true",sg();return}let n=Et.querySelector(".explore-stone").getBoundingClientRect(),e=n.left+n.width/2,t=n.top+n.height/2,i=Math.ceil(Math.hypot(Math.max(e,innerWidth-e),Math.max(t,innerHeight-t)))+8,s={animations:[],inert:[],timer:0,stopSound:ud()};Rt=s,Et.disabled=!0,Et.setAttribute("aria-busy","true"),Et.classList.add("engaged"),Et.dataset.exploreState="crossing",document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(l=>{s.inert.push([l,l.inert]),l.inert=!0}),gd.classList.add("explore-crossing"),nn.hidden=!1,nn.style.setProperty("--portal-x",`${e}px`),nn.style.setProperty("--portal-y",`${t}px`),s.timer=setTimeout(()=>Ts(s,{skip:!0}),3700);let r=innerWidth<560,a=r?760:880,o=nn.querySelector(".portal-words");Xc(s,nn.querySelector(".portal-contours"),[{transform:"translate(-50%,-50%) scale(.12)",opacity:.2},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.8}],{duration:2100,easing:"cubic-bezier(.15,.6,.25,1)"}),Xc(s,o,[{opacity:0,transform:"translateY(17px)"},{opacity:1,transform:"translateY(0)"}],{duration:700,delay:360,easing:"ease-out"}),await Xc(s,nn,[{clipPath:`circle(0px at ${e}px ${t}px)`,opacity:1},{clipPath:`circle(${i}px at ${e}px ${t}px)`,opacity:1}],{duration:a,easing:"cubic-bezier(.65,0,.2,1)"}),Rt===s&&(Ur(),vd(),Et.dataset.exploreState="revealing",await new Promise(l=>setTimeout(l,r?470:620)),Rt===s&&(so(),await Xc(s,nn,[{opacity:1},{opacity:0}],{duration:r?850:1e3,easing:"cubic-bezier(.25,.5,.3,1)"}),Rt===s&&Ts(s)))}Et.addEventListener("click",lM);document.addEventListener("keydown",n=>{Rt&&(n.key==="Escape"?(n.preventDefault(),Ts(Rt,{skip:!0})):["Tab"," ","PageDown","PageUp","Home","End","ArrowUp","ArrowDown"].includes(n.key)&&n.preventDefault())},{capture:!0});var rg=n=>{Rt&&n.preventDefault()};window.addEventListener("wheel",rg,{passive:!1,capture:!0});window.addEventListener("touchmove",rg,{passive:!1,capture:!0});window.addEventListener("hashchange",n=>{n.agateExploration||Rt&&Ts(Rt,{land:!1,focus:!1})});window.addEventListener("resize",()=>{Rt&&Ts(Rt,{skip:!0})});document.addEventListener("visibilitychange",()=>{document.hidden&&Rt&&Ts(Rt,{focus:!1,skip:!0})});_d.addEventListener("change",()=>{Rt&&Ts(Rt),xd()});
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
