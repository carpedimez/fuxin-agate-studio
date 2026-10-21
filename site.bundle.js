var gg=Object.defineProperty;var Ps=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var yg=(n,e)=>{for(var t in e)gg(n,t,{get:e[t],enumerable:!0})};function _g(n,e,t){let i=o=>(o/=255)<=.04045?o/12.92:((o+.055)/1.055)**2.4;n=i(n),e=i(e),t=i(t);let s=Math.cbrt(.4122214708*n+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*n+.6806995451*e+.1073969566*t),a=Math.cbrt(.0883024619*n+.2817188376*e+.6299787005*t);return[.2104542553*s+.793617785*r-.0040720468*a,1.9779984951*s-2.428592205*r+.4505937099*a,.0259040371*s+.7827717662*r-.808675766*a]}function xg(n,e,t,i=!0){let s=new Uint8Array(e*t).fill(1);for(let u=0;u<s.length;u++)n[u*4+3]<100&&(s[u]=0);if(!i)return s;let r=[0,e-1,e*(t-1),e*t-1].map(u=>Array.from(n.slice(u*4,u*4+3))),a=[0,1,2].map(u=>r.map(f=>f[u]).sort((f,g)=>f-g)[1]),o=new Uint8Array(e*t),l=new Int32Array(e*t),c=0,h=0;function d(u){o[u]||(o[u]=1,(!s[u]||Kc(Array.from(n.slice(u*4,u*4+3)),a)<2100)&&(s[u]=0,l[h++]=u))}for(let u=0;u<e;u++)d(u),d((t-1)*e+u);for(let u=0;u<t;u++)d(u*e),d(u*e+e-1);for(;c<h;){let u=l[c++],f=u%e,g=u/e|0;f&&d(u-1),f<e-1&&d(u+1),g&&d(u-e),g<t-1&&d(u+e)}if(s.reduce((u,f)=>u+f,0)<e*t*.025)for(let u=0;u<s.length;u++)s[u]=n[u*4+3]>=100?1:0;return s}function Nd(n,e,t,i=5,s=!0){let r=xg(n,e,t,s),a=[];for(let h=0;h<r.length;h++)r[h]&&a.push({i:h,rgb:Array.from(n.slice(h*4,h*4+3)),lab:_g(...n.slice(h*4,h*4+3))});if(!a.length)throw Error("没有可分析的有效像素，请更换图片。");let o=[a[a.length*.37|0].lab.slice()];for(;o.length<Math.min(i,a.length);){let h=a[0],d=-1;for(let u of a){let f=Math.min(...o.map(g=>Kc(u.lab,g)));f>d&&(d=f,h=u)}if(d<1e-8)break;o.push(h.lab.slice())}let l=new Int16Array(e*t).fill(-1);for(let h=0;h<12;h++){let d=o.map(()=>[0,0,0,0]);for(let u of a){let f=0,g=1/0;o.forEach((m,p)=>{let E=Kc(u.lab,m);E<g&&(g=E,f=p)}),l[u.i]=f;let y=d[f];for(let m=0;m<3;m++)y[m]+=u.lab[m];y[3]++}d.forEach((u,f)=>{u[3]&&(o[f]=u.slice(0,3).map(g=>g/u[3]))})}let c=o.map(()=>({rgb:[0,0,0],count:0}));for(let h of a){let d=c[l[h.i]];d.count++;for(let u=0;u<3;u++)d.rgb[u]+=h.rgb[u]}return c.forEach(h=>{h.rgb=h.rgb.map(d=>Math.round(d/(h.count||1))),h.hex="#"+h.rgb.map(d=>d.toString(16).padStart(2,"0")).join(""),h.share=h.count/a.length}),{width:e,height:t,labels:l,foreground:r,colors:c,validPixels:a.length}}function zr(n,e){return Uint8Array.from(n.labels,t=>t===e?1:0)}function yo(n){go.set("custom",n.map(e=>[...e]));for(let e of Br.keys())e.startsWith("custom:")&&Br.delete(e)}function ei(n){if(go.has(n))return go.get(n);let e=[],t=(i,s,r,a)=>{for(let o=0;o<=32;o++){let l=o/32,c=1-l;e.push([c*c*c*i[0]+3*c*c*l*s[0]+3*c*l*l*r[0]+l*l*l*a[0],c*c*c*i[1]+3*c*c*l*s[1]+3*c*l*l*r[1]+l*l*l*a[1]])}};if(n==="fruit")t([0,-.76],[.7,-.96],[1.02,-.32],[.84,.2]),t([.84,.2],[.7,.78],[.25,.94],[0,.85]),t([0,.85],[-.32,.98],[-.85,.63],[-.87,.1]),t([-.87,.1],[-1.01,-.43],[-.62,-.98],[0,-.76]);else if(n==="leaf")t([-1,0],[-.4,-.85],[.55,-.61],[1,0]),t([1,0],[.45,.74],[-.4,.6],[-1,0]);else if(["round","drop","heart"].includes(n))for(let i=0;i<96;i++){let s=i/96*Math.PI*2;n==="round"?e.push([Math.cos(s)*.85,Math.sin(s)*.85]):n==="heart"?e.push([Math.pow(Math.sin(s),3)*.9,-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))*.055]):e.push([Math.sin(s)*.75*(.7+.3*Math.cos(s)),Math.cos(s)*.9])}else e.push([-1,.65],[-.23,-.57],[.12,-.08],[.47,-.73],[1,.65]);return go.set(n,e),e}function bg(n,e=420){let t=n+":"+e;if(Br.has(t))return Br.get(t);let i=ei(n),s=[],r=a=>{let o=Math.sin(a*127.1+91.7)*43758.5453;return o-Math.floor(o)};for(let a=0;a<e*12&&s.length<e;a++){let o=r(a*2)*2-1,l=r(a*2+1)*2-1,c=!1;for(let h=0,d=i.length-1;h<i.length;d=h++){let u=i[h],f=i[d];u[1]>l!=f[1]>l&&o<(f[0]-u[0])*(l-u[1])/(f[1]-u[1])+u[0]&&(c=!c)}c&&s.push([o,l])}return Br.set(t,s),s}function fi(n,e,t,i){let s=bg(t),r=i.angle*Math.PI/180,a=Math.cos(r),o=Math.sin(r),l=0,c=0;for(let[u,f]of s){let g=Math.round((i.x+(u*a-f*o)*i.scale)*n.width),y=Math.round((i.y+(u*o+f*a)*i.scale)*n.height);if(g>=0&&g<n.width&&y>=0&&y<n.height){let m=y*n.width+g;n.foreground[m]&&(c++,e[m]&&l++)}}let h=l/s.length,d=c/s.length;return{fit:h,containment:d,outside:1-d,score:.7*h+.3*d,samples:s.length}}function Fd(n,e,t,{scale:i}={}){let s=[];for(let a of i?[i]:[.12,.18,.24,.3])for(let o=2;o<=8;o++)for(let l=2;l<=8;l++)for(let c of[-45,0,45,90]){let h={x:l/10,y:o/10,scale:a,angle:c};s.push({...h,...fi(n,e,t,h)})}s.sort((a,o)=>o.score-a.score);let r=[];for(let a of s)if(r.every(o=>Math.hypot(o.x-a.x,o.y-a.y)>.17||Math.abs(o.scale-a.scale)>.1)&&(r.push(a),r.length===3))break;return r}var _t,Kc,go,Br,pi=Ps(()=>{_t=(n,e,t)=>Math.max(e,Math.min(t,n));Kc=(n,e)=>n.reduce((t,i,s)=>t+(i-e[s])**2,0);go=new Map,Br=new Map});function ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function nu(n,e){return(n%e+e)%e}function Eg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Tg(n,e,t){return n!==e?(t-n)/(e-n):0}function Jr(n,e,t){return(1-t)*n+t*e}function Ag(n,e,t,i){return Jr(n,e,1-Math.exp(-t*i))}function Cg(n,e=1){return e-Math.abs(nu(n,e*2)-e)}function Rg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Pg(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Ig(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Lg(n,e){return n+Math.random()*(e-n)}function Dg(n){return n*(.5-Math.random())}function Ug(n){n!==void 0&&($d=n);let e=$d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ng(n){return n*Zr}function Fg(n){return n*js}function kg(n){return(n&n-1)===0&&n!==0}function Og(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Bg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zg(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function iu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function op(){let n=Zs("canvas");return n.style.display="block",n}function Js(n){n in Zd||(Zd[n]=!0,console.warn(n))}function lp(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Hg(){let n={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ai(s.r),s.g=ai(s.g),s.b=ai(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ta:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ns]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Jd,fromXYZ:Kd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}function ai(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function ih(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function rh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ji.fromArray(n,r);let o=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),h=i.dot(ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function vh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function e0(n,e,t,i,s,r,a,o){let l;if(e.side===Ot?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===oi,o),l===null)return null;Fo.copy(o),Fo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:n}}function ko(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Lo),n.getVertexPosition(l,Do),n.getVertexPosition(c,Uo);let h=e0(n,e,t,i,Lo,Do,Uo,hf);if(h){let d=new z;Si.getBarycoord(hf,Lo,Do,Uo,d),s&&(h.uv=Si.getInterpolatedAttribute(s,o,l,c,d,new ve)),r&&(h.uv1=Si.getInterpolatedAttribute(r,o,l,c,d,new ve)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new z,materialIndex:0};Si.getNormal(Lo,Do,Uo,u.normal),h.face=u,h.barycoord=d}return h}function fs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=fs(n[t]);for(let s in i)e[s]=i[s]}return e}function t0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function su(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function ru(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function ff(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function l0(n,e){let t=1-n;return t*t*e}function c0(n,e){return 2*(1-n)*n*e}function h0(n,e){return n*n*e}function Kr(n,e,t,i){return l0(n,e)+c0(n,t)+h0(n,i)}function u0(n,e){let t=1-n;return t*t*t*e}function d0(n,e){let t=1-n;return 3*t*t*n*e}function f0(n,e){return 3*(1-n)*n*n*e}function p0(n,e){return n*n*n*e}function Qr(n,e,t,i,s){return u0(n,e)+d0(n,t)+f0(n,i)+p0(n,s)}function m0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=up(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=x0(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ya(r,a,t,o,l,c,0),a}function up(n,e,t,i,s){let r;if(s===I0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=pf(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=pf(a/i|0,n[a],n[a+1],r);return r&&ar(r,r.next)&&(_a(r),r=r.next),r}function as(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ar(t,t.next)||xt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ya(n,e,t,i,s,r,a){if(!n)return;!a&&r&&E0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?y0(n,i,s,r):g0(n)){e.push(l.i,n.i,c.i),_a(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=v0(as(n),e),ya(n,e,t,i,s,r,2)):a===2&&_0(n,e,t,i,s,r):ya(as(n),e,t,i,s,r,1);break}}}function g0(n){let e=n.prev,t=n,i=n.next;if(xt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&jr(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function y0(n,e,t,i){let s=n.prev,r=n,a=n.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),y=Math.max(o,l,c),m=Math.max(h,d,u),p=Ih(f,g,e,t,i),E=Ih(y,m,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=E;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&jr(o,h,l,d,c,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&jr(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&jr(o,h,l,d,c,u,v.x,v.y)&&xt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=E;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&jr(o,h,l,d,c,u,_.x,_.y)&&xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function v0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ar(i,s)&&fp(i,t,t.next,s)&&va(i,s)&&va(s,i)&&(e.push(i.i,t.i,s.i),_a(t),_a(t.next),t=n=s),t=t.next}while(t!==n);return as(t)}function _0(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&C0(a,o)){let l=pp(a,o);a=as(a,a.next),l=as(l,l.next),ya(a,e,t,i,s,r,0),ya(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function x0(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=up(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(A0(c))}s.sort(b0);for(let r=0;r<s.length;r++)t=M0(s[r],t);return t}function b0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function M0(n,e){let t=S0(n,e);if(!t)return e;let i=pp(t,n);return as(i,i.next),as(t,t.next)}function S0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ar(n,t))return t;do{if(ar(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&dp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);va(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&w0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function w0(n,e){return xt(n.prev,n,e.prev)<0&&xt(e.next,n,n.next)<0}function E0(n,e,t,i){let s=n;do s.z===0&&(s.z=Ih(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,T0(s)}function T0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Ih(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function A0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function dp(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function jr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&dp(n,e,t,i,s,r,a,o)}function C0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!R0(n,e)&&(va(n,e)&&va(e,n)&&P0(n,e)&&(xt(n.prev,n,e.prev)||xt(n,e.prev,e))||ar(n,e)&&xt(n.prev,n,n.next)>0&&xt(e.prev,e,e.next)>0)}function xt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ar(n,e){return n.x===e.x&&n.y===e.y}function fp(n,e,t,i){let s=Ho(xt(n,e,t)),r=Ho(xt(n,e,i)),a=Ho(xt(t,i,n)),o=Ho(xt(t,i,e));return!!(s!==r&&a!==o||s===0&&zo(n,t,e)||r===0&&zo(n,i,e)||a===0&&zo(t,n,i)||o===0&&zo(t,e,i))}function zo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Ho(n){return n>0?1:n<0?-1:0}function R0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function va(n,e){return xt(n.prev,n,n.next)<0?xt(n,e,n.next)>=0&&xt(n,n.prev,e)>=0:xt(n,e,n.prev)<0||xt(n,n.next,e)<0}function P0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pp(n,e){let t=Lh(n.i,n.x,n.y),i=Lh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function pf(n,e,t,i){let s=Lh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function _a(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Lh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function I0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function mf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function gf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function D0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Vo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function U0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function xf(n,e){return n.distance-e.distance}function kh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)kh(r[a],e,t,!0)}}function lu(n,e,t,i){let s=G0(i);switch(t){case jh:return n*e;case Jh:return n*e/s.components*s.byteLength;case Ll:return n*e/s.components*s.byteLength;case Kh:return n*e*2/s.components*s.byteLength;case Dl:return n*e*2/s.components*s.byteLength;case Zh:return n*e*3/s.components*s.byteLength;case xn:return n*e*4/s.components*s.byteLength;case Ul:return n*e*4/s.components*s.byteLength;case Da:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Na:case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fl:case Ol:return Math.max(n,16)*Math.max(e,8)/4;case Nl:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Bl:case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Yl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case tc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case nc:case ic:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*8;case oc:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(n){switch(n){case Ln:case qh:return{byteLength:1,components:1};case cr:case Xh:case hr:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case Ni:case Rl:case Xn:return{byteLength:4,components:1};case Yh:case $h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var Li,Di,bf,Oh,Mf,Bh,Sf,Wn,oi,Ot,qn,ci,es,zh,Hh,Vh,wf,Ei,Ef,Tf,Af,Cf,Rf,Pf,If,Lf,qo,Xo,Df,Uf,Nf,Ff,kf,Of,Bf,zf,Hf,vl,_l,xl,ts,bl,Ml,Sl,wl,Gh,Vf,Gf,hi,Wf,qf,Xf,El,Yf,$f,jf,Wh,hs,us,Tl,Al,Ia,Yo,wi,$o,Jt,Zf,La,Kt,Cl,Ui,Ln,qh,Xh,cr,Rl,Ni,Xn,hr,Pl,Il,ur,Yh,$h,jh,Zh,xn,$s,dr,Jh,Ll,Kh,Dl,Ul,Da,Ua,Na,Fa,Nl,Fl,kl,Ol,Bl,zl,Hl,Vl,Gl,Wl,ql,Xl,Yl,$l,jl,Zl,Jl,Kl,Ql,ec,tc,nc,ic,sc,rc,ac,oc,lc,ea,jo,Go,Th,Ah,Ch,Jf,Kf,Qh,Qf,ui,It,ns,ta,at,Ki,Rh,ep,tp,np,eu,ip,sp,rp,ap,Ph,tu,Pn,na,zn,Bt,$d,Zr,js,ka,ve,_n,z,th,jd,je,nh,Zd,Jd,Kd,nt,Ds,Zo,Vg,Ks,Gg,sh,Vt,ft,Jo,Hn,ia,Ko,Ti,ti,An,Mo,Us,Ns,Fs,yi,vi,$i,qr,So,wo,ji,Wg,Xr,ah,Qs,ni,oh,Eo,_i,lh,To,ch,is,bt,ks,Cn,qg,Xg,xi,Ao,an,Qd,ef,In,er,Yg,tf,Os,ii,Co,Yr,$g,jg,nf,sf,rf,af,Zg,Bs,hh,$t,Rn,si,uh,ri,zs,Hs,of,dh,fh,ph,mh,gh,yh,Si,cp,bi,Ro,$e,zt,Jg,Ai,li,Ct,Po,Kg,ln,sa,ra,gt,Qg,yn,_h,Vs,on,$r,Ft,cn,lf,Zi,Io,cf,Lo,Do,Uo,xh,No,hf,Fo,pt,Ci,hp,n0,i0,hn,aa,Mi,uf,df,Ht,Gs,Ws,Qo,oa,el,Bn,s0,tr,Ri,la,bh,r0,a0,vn,Ji,o0,Oo,nr,ss,ca,ha,rs,un,ir,tl,Bo,Mh,Sh,wh,sr,ua,nl,da,il,fa,pa,ma,sl,rl,ga,rr,Dh,Qi,xa,L0,Vn,ba,Ma,Sa,Gn,wa,al,ol,os,ll,cl,hl,dn,Pi,ul,dl,fl,Ea,Ii,pl,Wo,ml,mp,or,qs,gl,Ta,Aa,Eh,yf,vf,Uh,ls,Nh,cs,Ca,yl,au,N0,ou,F0,k0,O0,B0,z0,H0,V0,Fh,dt,AM,_f,Ra,lr,Pa,cu=Ps(()=>{Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bf=0,Oh=1,Mf=2,Bh=1,Sf=2,Wn=3,oi=0,Ot=1,qn=2,ci=0,es=1,zh=2,Hh=3,Vh=4,wf=5,Ei=100,Ef=101,Tf=102,Af=103,Cf=104,Rf=200,Pf=201,If=202,Lf=203,qo=204,Xo=205,Df=206,Uf=207,Nf=208,Ff=209,kf=210,Of=211,Bf=212,zf=213,Hf=214,vl=0,_l=1,xl=2,ts=3,bl=4,Ml=5,Sl=6,wl=7,Gh=0,Vf=1,Gf=2,hi=0,Wf=1,qf=2,Xf=3,El=4,Yf=5,$f=6,jf=7,Wh=300,hs=301,us=302,Tl=303,Al=304,Ia=306,Yo=1e3,wi=1001,$o=1002,Jt=1003,Zf=1004,La=1005,Kt=1006,Cl=1007,Ui=1008,Ln=1009,qh=1010,Xh=1011,cr=1012,Rl=1013,Ni=1014,Xn=1015,hr=1016,Pl=1017,Il=1018,ur=1020,Yh=35902,$h=35899,jh=1021,Zh=1022,xn=1023,$s=1026,dr=1027,Jh=1028,Ll=1029,Kh=1030,Dl=1031,Ul=1033,Da=33776,Ua=33777,Na=33778,Fa=33779,Nl=35840,Fl=35841,kl=35842,Ol=35843,Bl=36196,zl=37492,Hl=37496,Vl=37808,Gl=37809,Wl=37810,ql=37811,Xl=37812,Yl=37813,$l=37814,jl=37815,Zl=37816,Jl=37817,Kl=37818,Ql=37819,ec=37820,tc=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,oc=36285,lc=36286,ea=2300,jo=2301,Go=2302,Th=2400,Ah=2401,Ch=2402,Jf=3200,Kf=3201,Qh=0,Qf=1,ui="",It="srgb",ns="srgb-linear",ta="linear",at="srgb",Ki=7680,Rh=519,ep=512,tp=513,np=514,eu=515,ip=516,sp=517,rp=518,ap=519,Ph=35044,tu="300 es",Pn=2e3,na=2001,zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$d=1234567,Zr=Math.PI/180,js=180/Math.PI;ka={DEG2RAD:Zr,RAD2DEG:js,generateUUID:ds,clamp:Ke,euclideanModulo:nu,mapLinear:Eg,inverseLerp:Tg,lerp:Jr,damp:Ag,pingpong:Cg,smoothstep:Rg,smootherstep:Pg,randInt:Ig,randFloat:Lg,randFloatSpread:Dg,seededRandom:Ug,degToRad:Ng,radToDeg:Fg,isPowerOfTwo:kg,ceilPowerOfTwo:Og,floorPowerOfTwo:Bg,setQuaternionFromProperEuler:zg,normalize:Yt,denormalize:Xs},ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*y,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,p*E);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let _=o*E;if(l=l*m+u*_,c=c*m+f*_,h=h*m+g*_,d=d*m+y*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new z,jd=new _n,je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],E=s[1],v=s[4],_=s[7],C=s[2],A=s[5],L=s[8];return r[0]=a*y+o*E+l*C,r[3]=a*m+o*v+l*A,r[6]=a*p+o*_+l*L,r[1]=c*y+h*E+d*C,r[4]=c*m+h*v+d*A,r[7]=c*p+h*_+d*L,r[2]=u*y+f*E+g*C,r[5]=u*m+f*v+g*A,r[8]=u*p+f*_+g*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nh.makeScale(e,t)),this}rotate(e){return this.premultiply(nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nh=new je;Zd={};Jd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=Hg();Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ds===void 0&&(Ds=Zs("canvas")),Ds.width=e.width,Ds.height=e.height;let s=Ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ai(t[i]/255)*255):t[i]=ai(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Vg=0,Ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ih(s[a].image)):r.push(ih(s[a]))}else r=ih(s);i.url=r}return t||(e.images[this.uuid]=i),i}};Gg=0,sh=new z,Vt=class n extends zn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=wi,s=wi,r=Kt,a=Ui,o=xn,l=Ln,c=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gg++}),this.uuid=ds(),this.name="",this.source=new Ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yo:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yo:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Wh;Vt.DEFAULT_ANISOTROPY=1;ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,C=(p+1)/2,A=(h+u)/4,L=(d+y)/4,O=(g+m)/4;return v>_&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=L/i):_>C?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=A/s,r=O/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=L/r,s=O/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends zn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Vt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ks(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends Jo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ia=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Ko=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ti=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mo.copy(i.boundingBox)),Mo.applyMatrix4(e.matrixWorld),this.union(Mo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),So.subVectors(this.max,qr),Us.subVectors(e.a,qr),Ns.subVectors(e.b,qr),Fs.subVectors(e.c,qr),yi.subVectors(Ns,Us),vi.subVectors(Fs,Ns),$i.subVectors(Us,Fs);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-$i.z,$i.y,yi.z,0,-yi.x,vi.z,0,-vi.x,$i.z,0,-$i.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-$i.y,$i.x,0];return!rh(t,Us,Ns,Fs,So)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,Us,Ns,Fs,So))?!1:(wo.crossVectors(yi,vi),t=[wo.x,wo.y,wo.z],rh(t,Us,Ns,Fs,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ti=[new z,new z,new z,new z,new z,new z,new z,new z],An=new z,Mo=new Ti,Us=new z,Ns=new z,Fs=new z,yi=new z,vi=new z,$i=new z,qr=new z,So=new z,wo=new z,ji=new z;Wg=new Ti,Xr=new z,ah=new z,Qs=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Wg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(ah)),this.expandByPoint(Xr.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ni=new z,oh=new z,Eo=new z,_i=new z,lh=new z,To=new z,ch=new z,is=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,t),ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){oh.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(oh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Eo),o=_i.dot(this.direction),l=-_i.dot(Eo),c=_i.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oh).addScaledVector(Eo,u),f}intersectSphere(e,t){ni.subVectors(e.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,t,i,s,r){lh.subVectors(t,e),To.subVectors(i,e),ch.crossVectors(lh,To);let a=this.direction.dot(ch),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_i.subVectors(this.origin,e);let l=o*this.direction.dot(To.crossVectors(_i,To));if(l<0)return null;let c=o*this.direction.dot(lh.cross(_i));if(c<0||l+c>a)return null;let h=-o*_i.dot(ch);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qg,e,Xg)}lookAt(e,t,i){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),xi.crossVectors(i,an),xi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),xi.crossVectors(i,an)),xi.normalize(),Ao.crossVectors(an,xi),s[0]=xi.x,s[4]=Ao.x,s[8]=an.x,s[1]=xi.y,s[5]=Ao.y,s[9]=an.y,s[2]=xi.z,s[6]=Ao.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],E=i[3],v=i[7],_=i[11],C=i[15],A=s[0],L=s[4],O=s[8],w=s[12],M=s[1],U=s[5],G=s[9],Y=s[13],j=s[2],Z=s[6],R=s[10],P=s[14],B=s[3],V=s[7],re=s[11],le=s[15];return r[0]=a*A+o*M+l*j+c*B,r[4]=a*L+o*U+l*Z+c*V,r[8]=a*O+o*G+l*R+c*re,r[12]=a*w+o*Y+l*P+c*le,r[1]=h*A+d*M+u*j+f*B,r[5]=h*L+d*U+u*Z+f*V,r[9]=h*O+d*G+u*R+f*re,r[13]=h*w+d*Y+u*P+f*le,r[2]=g*A+y*M+m*j+p*B,r[6]=g*L+y*U+m*Z+p*V,r[10]=g*O+y*G+m*R+p*re,r[14]=g*w+y*Y+m*P+p*le,r[3]=E*A+v*M+_*j+C*B,r[7]=E*L+v*U+_*Z+C*V,r[11]=E*O+v*G+_*R+C*re,r[15]=E*w+v*Y+_*P+C*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+y*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],E=d*m*c-y*u*c+y*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,_=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,C=g*d*l-h*y*l-g*o*u+a*y*u+h*o*m-a*d*m,A=t*E+i*v+s*_+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=E*L,e[1]=(y*u*r-d*m*r-y*s*f+i*m*f+d*s*p-i*u*p)*L,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*p+i*l*p)*L,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*L,e[4]=v*L,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*L,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*L,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*L,e[8]=_*L,e[9]=(g*d*r-h*y*r-g*i*f+t*y*f+h*i*p-t*d*p)*L,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*p+t*o*p)*L,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*L,e[12]=C*L,e[13]=(h*y*s-g*d*s+g*i*u-t*y*u-h*i*m+t*d*m)*L,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*m-t*o*m)*L,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*L,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,E=l*c,v=l*h,_=l*d,C=i.x,A=i.y,L=i.z;return s[0]=(1-(y+p))*C,s[1]=(f+_)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(u+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+v)*L,s[9]=(m-E)*L,s[10]=(1-(u+y))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ks.set(s[0],s[1],s[2]).length(),a=ks.set(s[4],s[5],s[6]).length(),o=ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let c=1/r,h=1/a,d=1/o;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Pn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===na)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Pn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Pn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===na)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ks=new z,Cn=new bt,qg=new z(0,0,0),Xg=new z(1,1,1),xi=new z,Ao=new z,an=new z,Qd=new bt,ef=new _n,In=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Qd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ef.setFromEuler(this),this.setFromQuaternion(ef,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};In.DEFAULT_ORDER="XYZ";er=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yg=0,tf=new z,Os=new _n,ii=new bt,Co=new z,Yr=new z,$g=new z,jg=new _n,nf=new z(1,0,0),sf=new z(0,1,0),rf=new z(0,0,1),af={type:"added"},Zg={type:"removed"},Bs={type:"childadded",child:null},hh={type:"childremoved",child:null},$t=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new z,t=new In,i=new _n,s=new z(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new bt},normalMatrix:{value:new je}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,t){return Os.setFromAxisAngle(e,t),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(nf,e)}rotateY(e){return this.rotateOnAxis(sf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return tf.copy(e).applyQuaternion(this.quaternion),this.position.add(tf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nf,e)}translateY(e){return this.translateOnAxis(sf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Co.copy(e):Co.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Yr,Co,this.up):ii.lookAt(Co,Yr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Os.setFromRotationMatrix(ii),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(af),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(af),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,$g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};$t.DEFAULT_UP=new z(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Rn=new z,si=new z,uh=new z,ri=new z,zs=new z,Hs=new z,of=new z,dh=new z,fh=new z,ph=new z,mh=new ft,gh=new ft,yh=new ft,Si=class n{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Rn.subVectors(s,t),si.subVectors(i,t),uh.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(si),l=Rn.dot(uh),c=si.dot(si),h=si.dot(uh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return mh.setScalar(0),gh.setScalar(0),yh.setScalar(0),mh.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,i),yh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(mh,r.x),a.addScaledVector(gh,r.y),a.addScaledVector(yh,r.z),a}static isFrontFacing(e,t,i,s){return Rn.subVectors(i,t),si.subVectors(e,t),Rn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Rn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,i),Hs.subVectors(r,i),dh.subVectors(e,i);let l=zs.dot(dh),c=Hs.dot(dh);if(l<=0&&c<=0)return t.copy(i);fh.subVectors(e,s);let h=zs.dot(fh),d=Hs.dot(fh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(zs,a);ph.subVectors(e,r);let f=zs.dot(ph),g=Hs.dot(ph);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Hs,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return of.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(of,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(i).addScaledVector(zs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=nu(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=vh(a,r,e+1/3),this.g=vh(a,r,e),this.b=vh(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(zt.copy(this),e),Math.round(Ke(zt.r*255,0,255))*65536+Math.round(Ke(zt.g*255,0,255))*256+Math.round(Ke(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){nt.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(Ro);let i=Jr(bi.h,Ro.h,t),s=Jr(bi.s,Ro.s,t),r=Jr(bi.l,Ro.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new $e;$e.NAMES=cp;Jg=0,Ai=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=es,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qo,this.blendDst=Xo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qo&&(i.blendSrc=this.blendSrc),this.blendDst!==Xo&&(i.blendDst=this.blendDst),this.blendEquation!==Ei&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},li=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ct=new z,Po=new ve,Kg=0,ln=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Po.fromBufferAttribute(this,t),Po.applyMatrix3(e),this.setXY(t,Po.x,Po.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ph&&(e.usage=this.usage),e}},sa=class extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ra=class extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gt=class extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qg=0,yn=new bt,_h=new $t,Vs=new z,on=new Ti,$r=new Ti,Ft=new z,cn=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?ra:sa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(on.min,$r.min),on.expandByPoint(Ft),Ft.addVectors(on.max,$r.max),on.expandByPoint(Ft)):(on.expandByPoint($r.min),on.expandByPoint($r.max))}on.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Vs.fromBufferAttribute(e,c),Ft.add(Vs)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new z,l[O]=new z;let c=new z,h=new z,d=new z,u=new ve,f=new ve,g=new ve,y=new z,m=new z;function p(O,w,M){c.fromBufferAttribute(i,O),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,M),u.fromBufferAttribute(r,O),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,M),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[O].add(y),o[w].add(y),o[M].add(y),l[O].add(m),l[w].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,w=E.length;O<w;++O){let M=E[O],U=M.start,G=M.count;for(let Y=U,j=U+G;Y<j;Y+=3)p(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}let v=new z,_=new z,C=new z,A=new z;function L(O){C.fromBufferAttribute(s,O),A.copy(C);let w=o[O];v.copy(w),v.sub(C.multiplyScalar(C.dot(w))).normalize(),_.crossVectors(A,w);let U=_.dot(l[O])<0?-1:1;a.setXYZW(O,v.x,v.y,v.z,U)}for(let O=0,w=E.length;O<w;++O){let M=E[O],U=M.start,G=M.count;for(let Y=U,j=U+G;Y<j;Y+=3)L(e.getX(Y+0)),L(e.getX(Y+1)),L(e.getX(Y+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new z,r=new z,a=new z,o=new z,l=new z,c=new z,h=new z,d=new z;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new ln(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lf=new bt,Zi=new is,Io=new Qs,cf=new z,Lo=new z,Do=new z,Uo=new z,xh=new z,No=new z,hf=new z,Fo=new z,pt=class extends $t{constructor(e=new cn,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){No.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(xh.fromBufferAttribute(d,e),a?No.addScaledVector(xh,h):No.addScaledVector(xh.sub(t),h))}t.add(No)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Io.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Io,cf)===null||Zi.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,C=v;_<C;_+=3){let A=o.getX(_),L=o.getX(_+1),O=o.getX(_+2);s=ko(this,p,e,i,c,h,d,A,L,O),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);s=ko(this,a,e,i,c,h,d,E,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=E,C=v;_<C;_+=3){let A=_,L=_+1,O=_+2;s=ko(this,p,e,i,c,h,d,A,L,O),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=m,v=m+1,_=m+2;s=ko(this,a,e,i,c,h,d,E,v,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Ci=class n extends cn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(y,m,p,E,v,_,C,A,L,O,w){let M=_/L,U=C/O,G=_/2,Y=C/2,j=A/2,Z=L+1,R=O+1,P=0,B=0,V=new z;for(let re=0;re<R;re++){let le=re*U-Y;for(let we=0;we<Z;we++){let Te=we*M-G;V[y]=Te*E,V[m]=le*v,V[p]=j,c.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[p]=A>0?1:-1,h.push(V.x,V.y,V.z),d.push(we/L),d.push(1-re/O),P+=1}}for(let re=0;re<O;re++)for(let le=0;le<L;le++){let we=u+le+Z*re,Te=u+le+Z*(re+1),Be=u+(le+1)+Z*(re+1),ee=u+(le+1)+Z*re;l.push(we,Te,ee),l.push(Te,Be,ee),B+=6}o.addGroup(f,B,w),f+=B,u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};hp={clone:fs,merge:Gt},n0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n0,this.fragmentShader=i0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},aa=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new z,uf=new ve,df=new ve,Ht=class extends aa{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,uf,df),t.subVectors(df,uf)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Gs=-90,Ws=1,Qo=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Gs,Ws,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Gs,Ws,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Gs,Ws,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Gs,Ws,e,t);o.layers=this.layers,this.add(o);let l=new Ht(Gs,Ws,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Gs,Ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},oa=class extends Vt{constructor(e=[],t=hs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},el=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ot,blending:ci});r.uniforms.tEquirect.value=t;let a=new pt(s,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Kt),new Qo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Bn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},s0={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(s0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Bn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ri=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},la=class extends Vt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Jt,h=Jt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},bh=new z,r0=new z,a0=new je,vn=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=bh.subVectors(i,t).cross(r0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(bh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||a0.getNormalMatrix(e),s=this.coplanarPoint(bh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new Qs,o0=new ve(.5,.5),Oo=new z,nr=class{constructor(e=new vn,t=new vn,i=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],v=r[13],_=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,p-g,C-E).normalize(),s[1].setComponents(c+a,f+h,p+g,C+E).normalize(),s[2].setComponents(c+o,f+d,p+y,C+v).normalize(),s[3].setComponents(c-o,f-d,p-y,C-v).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,C-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,C-_).normalize(),t===Pn)s[5].setComponents(c+l,f+u,p+m,C+_).normalize();else if(t===na)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=o0.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Oo.x=s.normal.x>0?e.max.x:e.min.x,Oo.y=s.normal.y>0?e.max.y:e.min.y,Oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ss=class extends Vt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ca=class extends Vt{constructor(e,t,i=Ni,s,r,a,o=Jt,l=Jt,c,h=$s,d=1){if(h!==$s&&h!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ha=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},rs=class n extends cn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;E(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function E(){let _=new z,C=new z,A=0,L=(t-e)/i;for(let O=0;O<=r;O++){let w=[],M=O/r,U=M*(t-e)+e;for(let G=0;G<=s;G++){let Y=G/s,j=Y*l+o,Z=Math.sin(j),R=Math.cos(j);C.x=U*Z,C.y=-M*i+m,C.z=U*R,d.push(C.x,C.y,C.z),_.set(Z,L,R).normalize(),u.push(_.x,_.y,_.z),f.push(Y,1-M),w.push(g++)}y.push(w)}for(let O=0;O<s;O++)for(let w=0;w<r;w++){let M=y[w][O],U=y[w+1][O],G=y[w+1][O+1],Y=y[w][O+1];(e>0||w!==0)&&(h.push(M,U,Y),A+=3),(t>0||w!==r-1)&&(h.push(U,G,Y),A+=3)}c.addGroup(p,A,0),p+=A}function v(_){let C=g,A=new ve,L=new z,O=0,w=_===!0?e:t,M=_===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,m*M,0),u.push(0,M,0),f.push(.5,.5),g++;let U=g;for(let G=0;G<=s;G++){let j=G/s*l+o,Z=Math.cos(j),R=Math.sin(j);L.x=w*R,L.y=m*M,L.z=w*Z,d.push(L.x,L.y,L.z),u.push(0,M,0),A.x=Z*.5+.5,A.y=R*.5*M+.5,f.push(A.x,A.y),g++}for(let G=0;G<s;G++){let Y=C+G,j=U+G;_===!0?h.push(j,j+1,Y):h.push(j+1,j,Y),O+=3}c.addGroup(p,O,_===!0?1:2),p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new z,s=[],r=[],a=[],o=new z,l=new bt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new z)}r[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ir=class extends un{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},tl=class extends ir{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Bo=new z,Mh=new ru,Sh=new ru,wh=new ru,sr=class extends un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new z){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Bo.subVectors(s[0],s[1]).add(s[0]),c=Bo);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Mh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),Sh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),wh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),wh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Mh.calc(l),Sh.calc(l),wh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ua=class extends un{constructor(e=new ve,t=new ve,i=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},nl=class extends un{constructor(e=new z,t=new z,i=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Qr(e,s.x,r.x,a.x,o.x),Qr(e,s.y,r.y,a.y,o.y),Qr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},da=class extends un{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},il=class extends un{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends un{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends un{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y),Kr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(ff(o,l.x,c.x,h.x,d.x),ff(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:sr,CubicBezierCurve:ua,CubicBezierCurve3:nl,EllipseCurve:ir,LineCurve:da,LineCurve3:il,QuadraticBezierCurve:fa,QuadraticBezierCurve3:pa,SplineCurve:ma}),rl=class extends un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new sl[s.type]().fromJSON(s))}return this}},ga=class extends rl{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new da(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new fa(this.currentPoint.clone(),new ve(e,t),new ve(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ua(this.currentPoint.clone(),new ve(e,t),new ve(i,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new ma(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new ir(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},rr=class extends ga{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new ga().fromJSON(s))}return this}};Dh=class{static triangulate(e,t,i=2){return m0(e,t,i)}},Qi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];mf(e),gf(i,e);let a=e.length;t.forEach(mf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,gf(i,t[l]);let o=Dh.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};xa=class n extends cn{constructor(e=new rr([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:L0,v,_=!1,C,A,L,O;p&&(v=p.getSpacedPoints(h),_=!0,u=!1,C=p.computeFrenetFrames(h,!1),A=new z,L=new z,O=new z),u||(m=0,f=0,g=0,y=0);let w=o.extractPoints(c),M=w.shape,U=w.holes;if(!Qi.isClockWise(M)){M=M.reverse();for(let ue=0,K=U.length;ue<K;ue++){let oe=U[ue];Qi.isClockWise(oe)&&(U[ue]=oe.reverse())}}function Y(ue){let oe=10000000000000001e-36,N=ue[0];for(let F=1;F<=ue.length;F++){let te=F%ue.length,Q=ue[te],pe=Q.x-N.x,Se=Q.y-N.y,T=pe*pe+Se*Se,x=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(N.x),Math.abs(N.y)),W=oe*x*x;if(T<=W){ue.splice(te,1),F--;continue}N=Q}}Y(M),U.forEach(Y);let j=U.length,Z=M;for(let ue=0;ue<j;ue++){let K=U[ue];M=M.concat(K)}function R(ue,K,oe){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),ue.clone().addScaledVector(K,oe)}let P=M.length;function B(ue,K,oe){let N,F,te,Q=ue.x-K.x,pe=ue.y-K.y,Se=oe.x-ue.x,T=oe.y-ue.y,x=Q*Q+pe*pe,W=Q*T-pe*Se;if(Math.abs(W)>Number.EPSILON){let J=Math.sqrt(x),he=Math.sqrt(Se*Se+T*T),se=K.x-pe/J,be=K.y+Q/J,ge=oe.x-T/he,Ie=oe.y+Se/he,De=((ge-se)*T-(Ie-be)*Se)/(Q*T-pe*Se);N=se+Q*De-ue.x,F=be+pe*De-ue.y;let ye=N*N+F*F;if(ye<=2)return new ve(N,F);te=Math.sqrt(ye/2)}else{let J=!1;Q>Number.EPSILON?Se>Number.EPSILON&&(J=!0):Q<-Number.EPSILON?Se<-Number.EPSILON&&(J=!0):Math.sign(pe)===Math.sign(T)&&(J=!0),J?(N=-pe,F=Q,te=Math.sqrt(x)):(N=Q,F=pe,te=Math.sqrt(x/2))}return new ve(N/te,F/te)}let V=[];for(let ue=0,K=Z.length,oe=K-1,N=ue+1;ue<K;ue++,oe++,N++)oe===K&&(oe=0),N===K&&(N=0),V[ue]=B(Z[ue],Z[oe],Z[N]);let re=[],le,we=V.concat();for(let ue=0,K=j;ue<K;ue++){let oe=U[ue];le=[];for(let N=0,F=oe.length,te=F-1,Q=N+1;N<F;N++,te++,Q++)te===F&&(te=0),Q===F&&(Q=0),le[N]=B(oe[N],oe[te],oe[Q]);re.push(le),we=we.concat(le)}let Te;if(m===0)Te=Qi.triangulateShape(Z,U);else{let ue=[],K=[];for(let oe=0;oe<m;oe++){let N=oe/m,F=f*Math.cos(N*Math.PI/2),te=g*Math.sin(N*Math.PI/2)+y;for(let Q=0,pe=Z.length;Q<pe;Q++){let Se=R(Z[Q],V[Q],te);ae(Se.x,Se.y,-F),N===0&&ue.push(Se)}for(let Q=0,pe=j;Q<pe;Q++){let Se=U[Q];le=re[Q];let T=[];for(let x=0,W=Se.length;x<W;x++){let J=R(Se[x],le[x],te);ae(J.x,J.y,-F),N===0&&T.push(J)}N===0&&K.push(T)}}Te=Qi.triangulateShape(ue,K)}let Be=Te.length,ee=g+y;for(let ue=0;ue<P;ue++){let K=u?R(M[ue],we[ue],ee):M[ue];_?(L.copy(C.normals[0]).multiplyScalar(K.x),A.copy(C.binormals[0]).multiplyScalar(K.y),O.copy(v[0]).add(L).add(A),ae(O.x,O.y,O.z)):ae(K.x,K.y,0)}for(let ue=1;ue<=h;ue++)for(let K=0;K<P;K++){let oe=u?R(M[K],we[K],ee):M[K];_?(L.copy(C.normals[ue]).multiplyScalar(oe.x),A.copy(C.binormals[ue]).multiplyScalar(oe.y),O.copy(v[ue]).add(L).add(A),ae(O.x,O.y,O.z)):ae(oe.x,oe.y,d/h*ue)}for(let ue=m-1;ue>=0;ue--){let K=ue/m,oe=f*Math.cos(K*Math.PI/2),N=g*Math.sin(K*Math.PI/2)+y;for(let F=0,te=Z.length;F<te;F++){let Q=R(Z[F],V[F],N);ae(Q.x,Q.y,d+oe)}for(let F=0,te=U.length;F<te;F++){let Q=U[F];le=re[F];for(let pe=0,Se=Q.length;pe<Se;pe++){let T=R(Q[pe],le[pe],N);_?ae(T.x,T.y+v[h-1].y,v[h-1].x+oe):ae(T.x,T.y,d+oe)}}}b(),D();function b(){let ue=s.length/3;if(u){let K=0,oe=P*K;for(let N=0;N<Be;N++){let F=Te[N];ce(F[2]+oe,F[1]+oe,F[0]+oe)}K=h+m*2,oe=P*K;for(let N=0;N<Be;N++){let F=Te[N];ce(F[0]+oe,F[1]+oe,F[2]+oe)}}else{for(let K=0;K<Be;K++){let oe=Te[K];ce(oe[2],oe[1],oe[0])}for(let K=0;K<Be;K++){let oe=Te[K];ce(oe[0]+P*h,oe[1]+P*h,oe[2]+P*h)}}i.addGroup(ue,s.length/3-ue,0)}function D(){let ue=s.length/3,K=0;$(Z,K),K+=Z.length;for(let oe=0,N=U.length;oe<N;oe++){let F=U[oe];$(F,K),K+=F.length}i.addGroup(ue,s.length/3-ue,1)}function $(ue,K){let oe=ue.length;for(;--oe>=0;){let N=oe,F=oe-1;F<0&&(F=ue.length-1);for(let te=0,Q=h+m*2;te<Q;te++){let pe=P*te,Se=P*(te+1),T=K+N+pe,x=K+F+pe,W=K+F+Se,J=K+N+Se;de(T,x,W,J)}}}function ae(ue,K,oe){l.push(ue),l.push(K),l.push(oe)}function ce(ue,K,oe){Ne(ue),Ne(K),Ne(oe);let N=s.length/3,F=E.generateTopUV(i,s,N-3,N-2,N-1);I(F[0]),I(F[1]),I(F[2])}function de(ue,K,oe,N){Ne(ue),Ne(K),Ne(N),Ne(K),Ne(oe),Ne(N);let F=s.length/3,te=E.generateSideWallUV(i,s,F-6,F-3,F-2,F-1);I(te[0]),I(te[1]),I(te[3]),I(te[1]),I(te[2]),I(te[3])}function Ne(ue){s.push(l[ue*3+0]),s.push(l[ue*3+1]),s.push(l[ue*3+2])}function I(ue){r.push(ue.x),r.push(ue.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return D0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new sl[s.type]().fromJSON(s)),new n(i,e.options)}},L0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-d),new ve(u,1-g),new ve(y,1-p)]:[new ve(o,1-l),new ve(h,1-d),new ve(f,1-g),new ve(m,1-p)]}};Vn=class n extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let v=0;v<c;v++){let _=v*d-r;g.push(_,-E,0),y.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let v=E+c*p,_=E+c*(p+1),C=E+1+c*(p+1),A=E+1+c*p;f.push(v,_,A),f.push(_,C,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ba=class n extends cn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new z,u=new z,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let E=[],v=p/i,_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(A+_,1-v),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){let v=h[p][E+1],_=h[p][E],C=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&f.push(v,_,A),(p!==i-1||l<Math.PI)&&f.push(_,C,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Ma=class n extends cn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new z,d=new z,u=new z;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(y,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Sa=class n extends cn{constructor(e=new pa(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,l=new z,c=new ve,h=new z,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function y(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),E(),p()}function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],C=a.binormals[v];for(let A=0;A<=s;A++){let L=A/s*Math.PI*2,O=Math.sin(L),w=-Math.cos(L);l.x=w*_.x+O*C.x,l.y=w*_.y+O*C.y,l.z=w*_.z+O*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let C=(s+1)*(v-1)+(_-1),A=(s+1)*v+(_-1),L=(s+1)*v+_,O=(s+1)*(v-1)+_;g.push(C,A,O),g.push(A,L,O)}}function E(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new sl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Gn=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qh,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wa=class extends Gn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},al=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ol=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};os=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ll=class extends os{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Th,endingEnd:Th}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,o=2*t-i;break;case Ch:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,l=2*i-t;break;case Ch:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+E*a[c+C]+v*a[l+C]+_*a[d+C];return r}},cl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},hl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Vo(t,this.TimeBufferType),this.values=Vo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Vo(e.times,Array),values:Vo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ea:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&U0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.ValueTypeName="";dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=jo;Pi=class extends dn{constructor(e,t,i){super(e,t,i)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ea;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;ul=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="color";dl=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};dl.prototype.ValueTypeName="number";fl=class extends os{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ea=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new fl(this.times,this.values,this.getValueSize(),e)}};Ea.prototype.ValueTypeName="quaternion";Ea.prototype.InterpolantFactoryMethodSmooth=void 0;Ii=class extends dn{constructor(e,t,i){super(e,t,i)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=ea;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;pl=class extends dn{constructor(e,t,i,s){super(e,t,i,s)}};pl.prototype.ValueTypeName="vector";Wo={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ml=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},mp=new ml,or=class{constructor(e){this.manager=e!==void 0?e:mp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};or.DEFAULT_MATERIAL_NAME="__DEFAULT";qs=new WeakMap,gl=class extends or{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wo.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=qs.get(a);d===void 0&&(d=[],qs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Zs("img");function l(){h(),t&&t(this);let d=qs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}qs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),Wo.remove(`image:${e}`);let u=qs.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wo.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},Ta=class extends or{constructor(e){super(e)}load(e,t,i,s){let r=new Vt,a=new gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},Aa=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Eh=new bt,yf=new z,vf=new z,Uh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),Eh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ls=class extends aa{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Nh=class extends Uh{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Aa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Nh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ca=class extends Aa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},yl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},au="\\[\\]\\.:\\/",N0=new RegExp("["+au+"]","g"),ou="[^"+au+"]",F0="[^"+au.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",ou),O0=/(WCOD+)?/.source.replace("WCOD",F0),B0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),z0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),H0=new RegExp("^"+k0+O0+B0+z0+"$"),V0=["material","materials","bones","map"],Fh=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(N0,"")}static parseTrackName(e){let t=H0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);V0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Fh;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];AM=new Float32Array(1),_f=new bt,Ra=class{constructor(e,t,i=0,s=1/0){this.ray=new is(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new er,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _f.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_f),this}intersectObject(e,t=!0,i=[]){return kh(e,this,i,t),i.sort(xf),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)kh(e[s],this,i,t);return i.sort(xf),i}};lr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Pa=class extends zn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function Bp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function T_(n,e,t,i,s,r,a){let o=new $e(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function y(v){let _=!1,C=g(v);C===null?p(o,l):C&&C.isColor&&(p(C,1),_=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,_){let C=g(_);C&&(C.isCubeTexture||C.mapping===Ia)?(h===void 0&&(h=new pt(new Ci(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:fs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(_.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(ps)),h.material.toneMapped=nt.getTransfer(C.colorSpace)!==at,(d!==C||u!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new pt(new Vn(2,2),new hn({name:"BackgroundMaterial",uniforms:fs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(cc,su(n)),i.buffers.color.setClear(cc.r,cc.g,cc.b,_,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:y,addToRenderList:m,dispose:E}}function A_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(M,U,G,Y,j){let Z=!1,R=d(Y,G,U);r!==R&&(r=R,c(r.object)),Z=f(M,Y,G,j),Z&&g(M,Y,G,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(M,U,G,Y),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function d(M,U,G){let Y=G.wireframe===!0,j=i[M.id];j===void 0&&(j={},i[M.id]=j);let Z=j[U.id];Z===void 0&&(Z={},j[U.id]=Z);let R=Z[Y];return R===void 0&&(R=u(l()),Z[Y]=R),R}function u(M){let U=[],G=[],Y=[];for(let j=0;j<t;j++)U[j]=0,G[j]=0,Y[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:Y,object:M,attributes:{},index:null}}function f(M,U,G,Y){let j=r.attributes,Z=U.attributes,R=0,P=G.getAttributes();for(let B in P)if(P[B].location>=0){let re=j[B],le=Z[B];if(le===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),re===void 0||re.attribute!==le||le&&re.data!==le.data)return!0;R++}return r.attributesNum!==R||r.index!==Y}function g(M,U,G,Y){let j={},Z=U.attributes,R=0,P=G.getAttributes();for(let B in P)if(P[B].location>=0){let re=Z[B];re===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(re=M.instanceColor));let le={};le.attribute=re,re&&re.data&&(le.data=re.data),j[B]=le,R++}r.attributes=j,r.attributesNum=R,r.index=Y}function y(){let M=r.newAttributes;for(let U=0,G=M.length;U<G;U++)M[U]=0}function m(M){p(M,0)}function p(M,U){let G=r.newAttributes,Y=r.enabledAttributes,j=r.attributeDivisors;G[M]=1,Y[M]===0&&(n.enableVertexAttribArray(M),Y[M]=1),j[M]!==U&&(n.vertexAttribDivisor(M,U),j[M]=U)}function E(){let M=r.newAttributes,U=r.enabledAttributes;for(let G=0,Y=U.length;G<Y;G++)U[G]!==M[G]&&(n.disableVertexAttribArray(G),U[G]=0)}function v(M,U,G,Y,j,Z,R){R===!0?n.vertexAttribIPointer(M,U,G,j,Z):n.vertexAttribPointer(M,U,G,Y,j,Z)}function _(M,U,G,Y){y();let j=Y.attributes,Z=G.getAttributes(),R=U.defaultAttributeValues;for(let P in Z){let B=Z[P];if(B.location>=0){let V=j[P];if(V===void 0&&(P==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),P==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),V!==void 0){let re=V.normalized,le=V.itemSize,we=e.get(V);if(we===void 0)continue;let Te=we.buffer,Be=we.type,ee=we.bytesPerElement,b=Be===n.INT||Be===n.UNSIGNED_INT||V.gpuType===Rl;if(V.isInterleavedBufferAttribute){let D=V.data,$=D.stride,ae=V.offset;if(D.isInstancedInterleavedBuffer){for(let ce=0;ce<B.locationSize;ce++)p(B.location+ce,D.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ce=0;ce<B.locationSize;ce++)m(B.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let ce=0;ce<B.locationSize;ce++)v(B.location+ce,le/B.locationSize,Be,re,$*ee,(ae+le/B.locationSize*ce)*ee,b)}else{if(V.isInstancedBufferAttribute){for(let D=0;D<B.locationSize;D++)p(B.location+D,V.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let D=0;D<B.locationSize;D++)m(B.location+D);n.bindBuffer(n.ARRAY_BUFFER,Te);for(let D=0;D<B.locationSize;D++)v(B.location+D,le/B.locationSize,Be,re,le*ee,le/B.locationSize*D*ee,b)}}else if(R!==void 0){let re=R[P];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(B.location,re);break;case 3:n.vertexAttrib3fv(B.location,re);break;case 4:n.vertexAttrib4fv(B.location,re);break;default:n.vertexAttrib1fv(B.location,re)}}}}E()}function C(){O();for(let M in i){let U=i[M];for(let G in U){let Y=U[G];for(let j in Y)h(Y[j].object),delete Y[j];delete U[G]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let G in U){let Y=U[G];for(let j in Y)h(Y[j].object),delete Y[j];delete U[G]}delete i[M.id]}function L(M){for(let U in i){let G=i[U];if(G[M.id]===void 0)continue;let Y=G[M.id];for(let j in Y)h(Y[j].object),delete Y[j];delete G[M.id]}}function O(){w(),a=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function C_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*u[y];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function R_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==xn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let O=L===hr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ln&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Xn&&!O)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:A}}function P_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new vn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,v=E*4,_=p.clippingState||null;l.value=_,_=h(g,u,v,f);for(let C=0;C!==v;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function I_(n){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=hs:o===Al&&(a.mapping=us),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tl||o===Al)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new el(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function D_(n){let e=[],t=[],i=[],s=n,r=n-pr+1+gp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-pr?l=gp[a-n+pr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let A=0;A<f;A++){let L=A%3*2/3-1,O=A>2?0:-1,w=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];E.set(w,y*g*A),v.set(u,m*g*A);let M=[A,A,A,A,A,A];_.set(M,p*g*A)}let C=new cn;C.setAttribute("position",new ln(E,y)),C.setAttribute("uv",new ln(v,m)),C.setAttribute("faceIndex",new ln(_,p)),e.push(C),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _p(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function U_(n,e,t){let i=new Float32Array(ys),s=new z(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wu(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function xp(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function bp(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function N_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Tl||l===Al,h=l===hs||l===us;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new gr(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new gr(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function F_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Js("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function k_(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let E=f.array;y=f.version;for(let v=0,_=E.length;v<_;v+=3){let C=E[v+0],A=E[v+1],L=E[v+2];u.push(C,A,A,L,L,C)}}else if(g!==void 0){let E=g.array;y=g.version;for(let v=0,_=E.length/3-1;v<_;v+=3){let C=v+0,A=v+1,L=v+2;u.push(C,A,A,L,L,C)}}else return;let m=new(iu(u)?ra:sa)(u,1);m.version=y;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function O_(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,y,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*y[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function B_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function z_(n,e,t){let i=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*C*4*d),L=new ia(A,_,C,d);L.type=Xn,L.needsUpdate=!0;let O=v*4;for(let M=0;M<d;M++){let U=m[M],G=p[M],Y=E[M],j=_*C*4*M;for(let Z=0;Z<U.count;Z++){let R=Z*O;f===!0&&(s.fromBufferAttribute(U,Z),A[j+R+0]=s.x,A[j+R+1]=s.y,A[j+R+2]=s.z,A[j+R+3]=0),g===!0&&(s.fromBufferAttribute(G,Z),A[j+R+4]=s.x,A[j+R+5]=s.y,A[j+R+6]=s.z,A[j+R+7]=0),y===!0&&(s.fromBufferAttribute(Y,Z),A[j+R+8]=s.x,A[j+R+9]=s.y,A[j+R+10]=s.z,A[j+R+11]=Y.itemSize===4?s.w:1)}}u={count:d,texture:L,size:new ve(_,C)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function H_(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function vr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function dc(n,e){let t=wp[e];t===void 0&&(t=new Int32Array(e),wp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function W_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function q_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function X_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Ap.set(i),n.uniformMatrix2fv(this.addr,!1,Ap),Dt(t,i)}}function Y_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Tp.set(i),n.uniformMatrix3fv(this.addr,!1,Tp),Dt(t,i)}}function $_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Ep.set(i),n.uniformMatrix4fv(this.addr,!1,Ep),Dt(t,i)}}function j_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function J_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function K_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Q_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function ix(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Mp.compareFunction=eu,r=Mp):r=zp,t.setTexture2D(e||r,s)}function sx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Vp,s)}function rx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gp,s)}function ax(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Hp,s)}function ox(n){switch(n){case 5126:return V_;case 35664:return G_;case 35665:return W_;case 35666:return q_;case 35674:return X_;case 35675:return Y_;case 35676:return $_;case 5124:case 35670:return j_;case 35667:case 35671:return Z_;case 35668:case 35672:return J_;case 35669:case 35673:return K_;case 5125:return Q_;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}function lx(n,e){n.uniform1fv(this.addr,e)}function cx(n,e){let t=vr(e,this.size,2);n.uniform2fv(this.addr,t)}function hx(n,e){let t=vr(e,this.size,3);n.uniform3fv(this.addr,t)}function ux(n,e){let t=vr(e,this.size,4);n.uniform4fv(this.addr,t)}function dx(n,e){let t=vr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function fx(n,e){let t=vr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function px(n,e){let t=vr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function mx(n,e){n.uniform1iv(this.addr,e)}function gx(n,e){n.uniform2iv(this.addr,e)}function yx(n,e){n.uniform3iv(this.addr,e)}function vx(n,e){n.uniform4iv(this.addr,e)}function _x(n,e){n.uniform1uiv(this.addr,e)}function xx(n,e){n.uniform2uiv(this.addr,e)}function bx(n,e){n.uniform3uiv(this.addr,e)}function Mx(n,e){n.uniform4uiv(this.addr,e)}function Sx(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||zp,r[a])}function wx(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vp,r[a])}function Ex(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gp,r[a])}function Tx(n,e,t){let i=this.cache,s=e.length,r=dc(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hp,r[a])}function Ax(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return yx;case 35669:case 35673:return vx;case 5125:return _x;case 36294:return xx;case 36295:return bx;case 36296:return Mx;case 35678:case 36198:case 36298:case 36306:case 35682:return Sx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Tx}}function Cp(n,e){n.seq.push(e),n.map[e.id]=e}function Cx(n,e,t){let i=n.name,s=i.length;for(mu.lastIndex=0;;){let r=mu.exec(i),a=mu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Cp(t,c===void 0?new gu(o,n,e):new yu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new vu(o),Cp(t,d)),t=d}}}function Rp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function Ix(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Lx(n){nt._getMatrix(Pp,nt.workingColorSpace,n);let e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ix(n.getShaderSource(e),o)}else return r}function Dx(n,e){let t=Lx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ux(n,e){let t;switch(e){case Wf:t="Linear";break;case qf:t="Reinhard";break;case Xf:t="Cineon";break;case El:t="ACESFilmic";break;case $f:t="AgX";break;case jf:t="Neutral";break;case Yf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nx(){nt.getLuminanceCoefficients(uc);let n=uc.x.toFixed(4),e=uc.y.toFixed(4),t=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oa).join(`
`)}function kx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ox(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Oa(n){return n!==""}function Lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function _u(n){return n.replace(Bx,Hx)}function Hx(n,e){let t=Qe[e];if(t===void 0){let i=zx.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _u(t)}function Up(n){return n.replace(Vx,Gx)}function Gx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Np(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Wx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function qx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case us:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===us&&(e="ENVMAP_MODE_REFRACTION"),e}function Yx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gh:e="ENVMAP_BLENDING_MULTIPLY";break;case Vf:e="ENVMAP_BLENDING_MIX";break;case Gf:e="ENVMAP_BLENDING_ADD";break}return e}function $x(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Wx(t),c=qx(t),h=Xx(t),d=Yx(t),u=$x(t),f=Fx(t),g=kx(r),y=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Oa).join(`
`),p.length>0&&(p+=`
`)):(m=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oa).join(`
`),p=[Np(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?Ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Dx("linearToOutputTexel",t.outputColorSpace),Nx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oa).join(`
`)),a=_u(a),a=Lp(a,t),a=Dp(a,t),o=_u(o),o=Lp(o,t),o=Dp(o,t),a=Up(a),o=Up(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===tu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===tu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=E+m+a,_=E+p+o,C=Rp(s,s.VERTEX_SHADER,v),A=Rp(s,s.FRAGMENT_SHADER,_);s.attachShader(y,C),s.attachShader(y,A),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function L(U){if(n.debug.checkShaderErrors){let G=s.getProgramInfoLog(y)||"",Y=s.getShaderInfoLog(C)||"",j=s.getShaderInfoLog(A)||"",Z=G.trim(),R=Y.trim(),P=j.trim(),B=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,A);else{let re=Ip(s,C,"vertex"),le=Ip(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+re+`
`+le)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(R===""||P==="")&&(V=!1);V&&(U.diagnostics={runnable:B,programLog:Z,vertexShader:{log:R,prefix:m},fragmentShader:{log:P,prefix:p}})}s.deleteShader(C),s.deleteShader(A),O=new mr(s,y),w=Ox(s,y)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let w;this.getAttributes=function(){return w===void 0&&L(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,Rx)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Px++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=A,this}function Jx(n,e,t,i,s,r,a){let o=new er,l=new xu,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,U,G,Y){let j=G.fog,Z=Y.geometry,R=w.isMeshStandardMaterial?G.environment:null,P=(w.isMeshStandardMaterial?t:e).get(w.envMap||R),B=P&&P.mapping===Ia?P.image.height:null,V=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,le=re!==void 0?re.length:0,we=0;Z.morphAttributes.position!==void 0&&(we=1),Z.morphAttributes.normal!==void 0&&(we=2),Z.morphAttributes.color!==void 0&&(we=3);let Te,Be,ee,b;if(V){let rt=Yn[V];Te=rt.vertexShader,Be=rt.fragmentShader}else Te=w.vertexShader,Be=w.fragmentShader,l.update(w),ee=l.getVertexShaderID(w),b=l.getFragmentShaderID(w);let D=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),ae=Y.isInstancedMesh===!0,ce=Y.isBatchedMesh===!0,de=!!w.map,Ne=!!w.matcap,I=!!P,ue=!!w.aoMap,K=!!w.lightMap,oe=!!w.bumpMap,N=!!w.normalMap,F=!!w.displacementMap,te=!!w.emissiveMap,Q=!!w.metalnessMap,pe=!!w.roughnessMap,Se=w.anisotropy>0,T=w.clearcoat>0,x=w.dispersion>0,W=w.iridescence>0,J=w.sheen>0,he=w.transmission>0,se=Se&&!!w.anisotropyMap,be=T&&!!w.clearcoatMap,ge=T&&!!w.clearcoatNormalMap,Ie=T&&!!w.clearcoatRoughnessMap,De=W&&!!w.iridescenceMap,ye=W&&!!w.iridescenceThicknessMap,Ce=J&&!!w.sheenColorMap,qe=J&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Re=!!w.specularColorMap,Je=!!w.specularIntensityMap,H=he&&!!w.transmissionMap,Me=he&&!!w.thicknessMap,Ee=!!w.gradientMap,Ue=!!w.alphaMap,_e=w.alphaTest>0,fe=!!w.alphaHash,ke=!!w.extensions,Ye=hi;w.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let ht={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:Te,fragmentShader:Be,defines:w.defines,customVertexShaderID:ee,customFragmentShaderID:b,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ce,batchingColor:ce&&Y._colorsTexture!==null,instancing:ae,instancingColor:ae&&Y.instanceColor!==null,instancingMorph:ae&&Y.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ns,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:Ne,envMap:I,envMapMode:I&&P.mapping,envMapCubeUVHeight:B,aoMap:ue,lightMap:K,bumpMap:oe,normalMap:N,displacementMap:u&&F,emissiveMap:te,normalMapObjectSpace:N&&w.normalMapType===Qf,normalMapTangentSpace:N&&w.normalMapType===Qh,metalnessMap:Q,roughnessMap:pe,anisotropy:Se,anisotropyMap:se,clearcoat:T,clearcoatMap:be,clearcoatNormalMap:ge,clearcoatRoughnessMap:Ie,dispersion:x,iridescence:W,iridescenceMap:De,iridescenceThicknessMap:ye,sheen:J,sheenColorMap:Ce,sheenRoughnessMap:qe,specularMap:Oe,specularColorMap:Re,specularIntensityMap:Je,transmission:he,transmissionMap:H,thicknessMap:Me,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:Ue,alphaTest:_e,alphaHash:fe,combine:w.combine,mapUv:de&&y(w.map.channel),aoMapUv:ue&&y(w.aoMap.channel),lightMapUv:K&&y(w.lightMap.channel),bumpMapUv:oe&&y(w.bumpMap.channel),normalMapUv:N&&y(w.normalMap.channel),displacementMapUv:F&&y(w.displacementMap.channel),emissiveMapUv:te&&y(w.emissiveMap.channel),metalnessMapUv:Q&&y(w.metalnessMap.channel),roughnessMapUv:pe&&y(w.roughnessMap.channel),anisotropyMapUv:se&&y(w.anisotropyMap.channel),clearcoatMapUv:be&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:ge&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&y(w.sheenRoughnessMap.channel),specularMapUv:Oe&&y(w.specularMap.channel),specularColorMapUv:Re&&y(w.specularColorMap.channel),specularIntensityMapUv:Je&&y(w.specularIntensityMap.channel),transmissionMapUv:H&&y(w.transmissionMap.channel),thicknessMapUv:Me&&y(w.thicknessMap.channel),alphaMapUv:Ue&&y(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(N||Se),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!Z.attributes.uv&&(de||Ue),fog:!!j,useFog:w.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:$,skinning:Y.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:we,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&nt.getTransfer(w.map.colorSpace)===at,decodeVideoTextureEmissive:te&&w.emissiveMap.isVideoTexture===!0&&nt.getTransfer(w.emissiveMap.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qn,flipSided:w.side===Ot,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let U in w.defines)M.push(U),M.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(E(M,w),v(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function E(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function v(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){let M=g[w.type],U;if(M){let G=Yn[M];U=hp.clone(G.uniforms)}else U=w.uniforms;return U}function C(w,M){let U;for(let G=0,Y=h.length;G<Y;G++){let j=h[G];if(j.cacheKey===M){U=j,++U.usedTimes;break}}return U===void 0&&(U=new jx(n,M,w,r),h.push(U)),U}function A(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function L(w){l.remove(w)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:C,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:O}}function Kx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Qx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function o(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Qx),i.length>1&&i.sort(u||Fp),s.length>1&&s.sort(u||Fp)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function eb(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new kp,n.set(i,[a])):s>=r.length?(a=new kp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function tb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new $e};break;case"SpotLight":t={position:new z,direction:new z,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function nb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function sb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n){let e=new tb,t=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);let s=new z,r=new bt,a=new bt;function o(c){let h=0,d=0,u=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,v=0,_=0,C=0,A=0,L=0;c.sort(sb);for(let w=0,M=c.length;w<M;w++){let U=c[w],G=U.color,Y=U.intensity,j=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=G.r*Y,d+=G.g*Y,u+=G.b*Y;else if(U.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(U.sh.coefficients[R],Y);L++}else if(U.isDirectionalLight){let R=e.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let P=U.shadow,B=t.get(U);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,i.directionalShadow[f]=B,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=U.shadow.matrix,E++}i.directional[f]=R,f++}else if(U.isSpotLight){let R=e.get(U);R.position.setFromMatrixPosition(U.matrixWorld),R.color.copy(G).multiplyScalar(Y),R.distance=j,R.coneCos=Math.cos(U.angle),R.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),R.decay=U.decay,i.spot[y]=R;let P=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,P.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[y]=P.matrix,U.castShadow){let B=t.get(U);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,i.spotShadow[y]=B,i.spotShadowMap[y]=Z,_++}y++}else if(U.isRectAreaLight){let R=e.get(U);R.color.copy(G).multiplyScalar(Y),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=R,m++}else if(U.isPointLight){let R=e.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity),R.distance=U.distance,R.decay=U.decay,U.castShadow){let P=U.shadow,B=t.get(U);B.shadowIntensity=P.intensity,B.shadowBias=P.bias,B.shadowNormalBias=P.normalBias,B.shadowRadius=P.radius,B.shadowMapSize=P.mapSize,B.shadowCameraNear=P.camera.near,B.shadowCameraFar=P.camera.far,i.pointShadow[g]=B,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=U.shadow.matrix,v++}i.point[g]=R,g++}else if(U.isHemisphereLight){let R=e.get(U);R.skyColor.copy(U.color).multiplyScalar(Y),R.groundColor.copy(U.groundColor).multiplyScalar(Y),i.hemi[p]=R,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let O=i.hash;(O.directionalLength!==f||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==E||O.numPointShadows!==v||O.numSpotShadows!==_||O.numSpotMaps!==C||O.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=L,O.directionalLength=f,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=E,O.numPointShadows=v,O.numSpotShadows=_,O.numSpotMaps=C,O.numLightProbes=L,i.version=ib++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let v=c[p];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Op(n){let e=new rb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function ab(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Op(n),e.set(s,[o])):r>=a.length?(o=new Op(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function cb(n,e,t){let i=new nr,s=new ve,r=new ve,a=new ft,o=new al({depthPacking:Kf}),l=new ol,c={},h=t.maxTextureSize,d={[oi]:Ot,[Ot]:oi,[qn]:qn},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bh;let p=this.type;this.render=function(A,L,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let w=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),G=n.state;G.setBlending(ci),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let Y=p!==Wn&&this.type===Wn,j=p===Wn&&this.type!==Wn;for(let Z=0,R=A.length;Z<R;Z++){let P=A[Z],B=P.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let V=B.getFrameExtents();if(s.multiply(V),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/V.x),s.x=r.x*V.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/V.y),s.y=r.y*V.y,B.mapSize.y=r.y)),B.map===null||Y===!0||j===!0){let le=this.type!==Wn?{minFilter:Jt,magFilter:Jt}:{};B.map!==null&&B.map.dispose(),B.map=new Hn(s.x,s.y,le),B.map.texture.name=P.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();let re=B.getViewportCount();for(let le=0;le<re;le++){let we=B.getViewport(le);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),G.viewport(a),B.updateMatrices(P,le),i=B.getFrustum(),_(L,O,B.camera,P,this.type)}B.isPointLightShadow!==!0&&this.type===Wn&&E(B,O),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,M,U)};function E(A,L){let O=e.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Hn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(L,null,O,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(L,null,O,f,y,null)}function v(A,L,O,w){let M=null,U=O.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)M=U;else if(M=O.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let G=M.uuid,Y=L.uuid,j=c[G];j===void 0&&(j={},c[G]=j);let Z=j[Y];Z===void 0&&(Z=M.clone(),j[Y]=Z,L.addEventListener("dispose",C)),M=Z}if(M.visible=L.visible,M.wireframe=L.wireframe,w===Wn?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:d[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let G=n.properties.get(M);G.light=O}return M}function _(A,L,O,w,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Wn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,A.matrixWorld);let Y=e.update(A),j=A.material;if(Array.isArray(j)){let Z=Y.groups;for(let R=0,P=Z.length;R<P;R++){let B=Z[R],V=j[B.materialIndex];if(V&&V.visible){let re=v(A,V,w,M);A.onBeforeShadow(n,A,L,O,Y,re,B),n.renderBufferDirect(O,null,Y,re,A,B),A.onAfterShadow(n,A,L,O,Y,re,B)}}}else if(j.visible){let Z=v(A,j,w,M);A.onBeforeShadow(n,A,L,O,Y,Z,null),n.renderBufferDirect(O,null,Y,Z,A,null),A.onAfterShadow(n,A,L,O,Y,Z,null)}}let G=A.children;for(let Y=0,j=G.length;Y<j;Y++)_(G[Y],L,O,w,M)}function C(A){A.target.removeEventListener("dispose",C);for(let O in c){let w=c[O],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function ub(n,e){function t(){let H=!1,Me=new ft,Ee=null,Ue=new ft(0,0,0,0);return{setMask:function(_e){Ee!==_e&&!H&&(n.colorMask(_e,_e,_e,_e),Ee=_e)},setLocked:function(_e){H=_e},setClear:function(_e,fe,ke,Ye,ht){ht===!0&&(_e*=Ye,fe*=Ye,ke*=Ye),Me.set(_e,fe,ke,Ye),Ue.equals(Me)===!1&&(n.clearColor(_e,fe,ke,Ye),Ue.copy(Me))},reset:function(){H=!1,Ee=null,Ue.set(-1,0,0,0)}}}function i(){let H=!1,Me=!1,Ee=null,Ue=null,_e=null;return{setReversed:function(fe){if(Me!==fe){let ke=e.get("EXT_clip_control");fe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),Me=fe;let Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return Me},setTest:function(fe){fe?D(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(fe){Ee!==fe&&!H&&(n.depthMask(fe),Ee=fe)},setFunc:function(fe){if(Me&&(fe=hb[fe]),Ue!==fe){switch(fe){case vl:n.depthFunc(n.NEVER);break;case _l:n.depthFunc(n.ALWAYS);break;case xl:n.depthFunc(n.LESS);break;case ts:n.depthFunc(n.LEQUAL);break;case bl:n.depthFunc(n.EQUAL);break;case Ml:n.depthFunc(n.GEQUAL);break;case Sl:n.depthFunc(n.GREATER);break;case wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=fe}},setLocked:function(fe){H=fe},setClear:function(fe){_e!==fe&&(Me&&(fe=1-fe),n.clearDepth(fe),_e=fe)},reset:function(){H=!1,Ee=null,Ue=null,_e=null,Me=!1}}}function s(){let H=!1,Me=null,Ee=null,Ue=null,_e=null,fe=null,ke=null,Ye=null,ht=null;return{setTest:function(rt){H||(rt?D(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(rt){Me!==rt&&!H&&(n.stencilMask(rt),Me=rt)},setFunc:function(rt,Qn,On){(Ee!==rt||Ue!==Qn||_e!==On)&&(n.stencilFunc(rt,Qn,On),Ee=rt,Ue=Qn,_e=On)},setOp:function(rt,Qn,On){(fe!==rt||ke!==Qn||Ye!==On)&&(n.stencilOp(rt,Qn,On),fe=rt,ke=Qn,Ye=On)},setLocked:function(rt){H=rt},setClear:function(rt){ht!==rt&&(n.clearStencil(rt),ht=rt)},reset:function(){H=!1,Me=null,Ee=null,Ue=null,_e=null,fe=null,ke=null,Ye=null,ht=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,v=null,_=null,C=null,A=null,L=new $e(0,0,0),O=0,w=!1,M=null,U=null,G=null,Y=null,j=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,P=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(B)[1]),R=P>=1):B.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),R=P>=2);let V=null,re={},le=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Te=new ft().fromArray(le),Be=new ft().fromArray(we);function ee(H,Me,Ee,Ue){let _e=new Uint8Array(4),fe=n.createTexture();n.bindTexture(H,fe),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ke=0;ke<Ee;ke++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(Me+ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return fe}let b={};b[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),b[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),b[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),b[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),D(n.DEPTH_TEST),a.setFunc(ts),oe(!1),N(Oh),D(n.CULL_FACE),ue(ci);function D(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function $(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function ae(H,Me){return d[H]!==Me?(n.bindFramebuffer(H,Me),d[H]=Me,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ce(H,Me){let Ee=f,Ue=!1;if(H){Ee=u.get(Me),Ee===void 0&&(Ee=[],u.set(Me,Ee));let _e=H.textures;if(Ee.length!==_e.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let fe=0,ke=_e.length;fe<ke;fe++)Ee[fe]=n.COLOR_ATTACHMENT0+fe;Ee.length=_e.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function de(H){return g!==H?(n.useProgram(H),g=H,!0):!1}let Ne={[Ei]:n.FUNC_ADD,[Ef]:n.FUNC_SUBTRACT,[Tf]:n.FUNC_REVERSE_SUBTRACT};Ne[Af]=n.MIN,Ne[Cf]=n.MAX;let I={[Rf]:n.ZERO,[Pf]:n.ONE,[If]:n.SRC_COLOR,[qo]:n.SRC_ALPHA,[kf]:n.SRC_ALPHA_SATURATE,[Nf]:n.DST_COLOR,[Df]:n.DST_ALPHA,[Lf]:n.ONE_MINUS_SRC_COLOR,[Xo]:n.ONE_MINUS_SRC_ALPHA,[Ff]:n.ONE_MINUS_DST_COLOR,[Uf]:n.ONE_MINUS_DST_ALPHA,[Of]:n.CONSTANT_COLOR,[Bf]:n.ONE_MINUS_CONSTANT_COLOR,[zf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(H,Me,Ee,Ue,_e,fe,ke,Ye,ht,rt){if(H===ci){y===!0&&($(n.BLEND),y=!1);return}if(y===!1&&(D(n.BLEND),y=!0),H!==wf){if(H!==m||rt!==w){if((p!==Ei||_!==Ei)&&(n.blendEquation(n.FUNC_ADD),p=Ei,_=Ei),rt)switch(H){case es:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case es:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}E=null,v=null,C=null,A=null,L.set(0,0,0),O=0,m=H,w=rt}return}_e=_e||Me,fe=fe||Ee,ke=ke||Ue,(Me!==p||_e!==_)&&(n.blendEquationSeparate(Ne[Me],Ne[_e]),p=Me,_=_e),(Ee!==E||Ue!==v||fe!==C||ke!==A)&&(n.blendFuncSeparate(I[Ee],I[Ue],I[fe],I[ke]),E=Ee,v=Ue,C=fe,A=ke),(Ye.equals(L)===!1||ht!==O)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ht),L.copy(Ye),O=ht),m=H,w=!1}function K(H,Me){H.side===qn?$(n.CULL_FACE):D(n.CULL_FACE);let Ee=H.side===Ot;Me&&(Ee=!Ee),oe(Ee),H.blending===es&&H.transparent===!1?ue(ci):ue(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ue=H.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),te(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function oe(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function N(H){H!==bf?(D(n.CULL_FACE),H!==U&&(H===Oh?n.cullFace(n.BACK):H===Mf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),U=H}function F(H){H!==G&&(R&&n.lineWidth(H),G=H)}function te(H,Me,Ee){H?(D(n.POLYGON_OFFSET_FILL),(Y!==Me||j!==Ee)&&(n.polygonOffset(Me,Ee),Y=Me,j=Ee)):$(n.POLYGON_OFFSET_FILL)}function Q(H){H?D(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function pe(H){H===void 0&&(H=n.TEXTURE0+Z-1),V!==H&&(n.activeTexture(H),V=H)}function Se(H,Me,Ee){Ee===void 0&&(V===null?Ee=n.TEXTURE0+Z-1:Ee=V);let Ue=re[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},re[Ee]=Ue),(Ue.type!==H||Ue.texture!==Me)&&(V!==Ee&&(n.activeTexture(Ee),V=Ee),n.bindTexture(H,Me||b[H]),Ue.type=H,Ue.texture=Me)}function T(){let H=re[V];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function he(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function se(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function De(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(H){Te.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Te.copy(H))}function qe(H){Be.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Be.copy(H))}function Oe(H,Me){let Ee=c.get(Me);Ee===void 0&&(Ee=new WeakMap,c.set(Me,Ee));let Ue=Ee.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,H.name),Ee.set(H,Ue))}function Re(H,Me){let Ue=c.get(Me).get(H);l.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,H.__bindingPointIndex),l.set(Me,Ue))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},V=null,re={},d={},u=new WeakMap,f=[],g=null,y=!1,m=null,p=null,E=null,v=null,_=null,C=null,A=null,L=new $e(0,0,0),O=0,w=!1,M=null,U=null,G=null,Y=null,j=null,Te.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:D,disable:$,bindFramebuffer:ae,drawBuffers:ce,useProgram:de,setBlending:ue,setMaterial:K,setFlipSided:oe,setCullFace:N,setLineWidth:F,setPolygonOffset:te,setScissorTest:Q,activeTexture:pe,bindTexture:Se,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:W,texImage2D:De,texImage3D:ye,updateUBOMapping:Oe,uniformBlockBinding:Re,texStorage2D:ge,texStorage3D:Ie,texSubImage2D:J,texSubImage3D:he,compressedTexSubImage2D:se,compressedTexSubImage3D:be,scissor:Ce,viewport:qe,reset:Je}}function db(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Zs("canvas")}function y(T,x,W){let J=1,he=Se(T);if((he.width>W||he.height>W)&&(J=W/Math.max(he.width,he.height)),J<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let se=Math.floor(J*he.width),be=Math.floor(J*he.height);d===void 0&&(d=g(se,be));let ge=x?g(se,be):d;return ge.width=se,ge.height=be,ge.getContext("2d").drawImage(T,0,0,se,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+be+")."),ge}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,x,W,J,he=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let se=x;if(x===n.RED&&(W===n.FLOAT&&(se=n.R32F),W===n.HALF_FLOAT&&(se=n.R16F),W===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.R8UI),W===n.UNSIGNED_SHORT&&(se=n.R16UI),W===n.UNSIGNED_INT&&(se=n.R32UI),W===n.BYTE&&(se=n.R8I),W===n.SHORT&&(se=n.R16I),W===n.INT&&(se=n.R32I)),x===n.RG&&(W===n.FLOAT&&(se=n.RG32F),W===n.HALF_FLOAT&&(se=n.RG16F),W===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RG8UI),W===n.UNSIGNED_SHORT&&(se=n.RG16UI),W===n.UNSIGNED_INT&&(se=n.RG32UI),W===n.BYTE&&(se=n.RG8I),W===n.SHORT&&(se=n.RG16I),W===n.INT&&(se=n.RG32I)),x===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGB8UI),W===n.UNSIGNED_SHORT&&(se=n.RGB16UI),W===n.UNSIGNED_INT&&(se=n.RGB32UI),W===n.BYTE&&(se=n.RGB8I),W===n.SHORT&&(se=n.RGB16I),W===n.INT&&(se=n.RGB32I)),x===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(se=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(se=n.RGBA16UI),W===n.UNSIGNED_INT&&(se=n.RGBA32UI),W===n.BYTE&&(se=n.RGBA8I),W===n.SHORT&&(se=n.RGBA16I),W===n.INT&&(se=n.RGBA32I)),x===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(se=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(se=n.R11F_G11F_B10F)),x===n.RGBA){let be=he?ta:nt.getTransfer(J);W===n.FLOAT&&(se=n.RGBA32F),W===n.HALF_FLOAT&&(se=n.RGBA16F),W===n.UNSIGNED_BYTE&&(se=be===at?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(T,x){let W;return T?x===null||x===Ni||x===ur?W=n.DEPTH24_STENCIL8:x===Xn?W=n.DEPTH32F_STENCIL8:x===cr&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ni||x===ur?W=n.DEPTH_COMPONENT24:x===Xn?W=n.DEPTH_COMPONENT32F:x===cr&&(W=n.DEPTH_COMPONENT16),W}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),O(x),x.isVideoTexture&&h.delete(x)}function L(T){let x=T.target;x.removeEventListener("dispose",L),M(x)}function O(T){let x=i.get(T);if(x.__webglInit===void 0)return;let W=T.source,J=u.get(W);if(J){let he=J[x.__cacheKey];he.usedTimes--,he.usedTimes===0&&w(T),Object.keys(J).length===0&&u.delete(W)}i.remove(T)}function w(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let W=T.source,J=u.get(W);delete J[x.__cacheKey],a.memory.textures--}function M(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let he=0;he<x.__webglFramebuffer[J].length;he++)n.deleteFramebuffer(x.__webglFramebuffer[J][he]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let W=T.textures;for(let J=0,he=W.length;J<he;J++){let se=i.get(W[J]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(W[J])}i.remove(T)}let U=0;function G(){U=0}function Y(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function j(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Z(T,x){let W=i.get(T);if(T.isVideoTexture&&Q(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&W.__version!==T.version){let J=T.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{b(W,T,x);return}}else T.isExternalTexture&&(W.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+x)}function R(T,x){let W=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){b(W,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+x)}function P(T,x){let W=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&W.__version!==T.version){b(W,T,x);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+x)}function B(T,x){let W=i.get(T);if(T.version>0&&W.__version!==T.version){D(W,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+x)}let V={[Yo]:n.REPEAT,[wi]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},re={[Jt]:n.NEAREST,[Zf]:n.NEAREST_MIPMAP_NEAREST,[La]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Ui]:n.LINEAR_MIPMAP_LINEAR},le={[ep]:n.NEVER,[ap]:n.ALWAYS,[tp]:n.LESS,[eu]:n.LEQUAL,[np]:n.EQUAL,[rp]:n.GEQUAL,[ip]:n.GREATER,[sp]:n.NOTEQUAL};function we(T,x){if(x.type===Xn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===Cl||x.magFilter===La||x.magFilter===Ui||x.minFilter===Kt||x.minFilter===Cl||x.minFilter===La||x.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,V[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,V[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,V[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,re[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Jt||x.minFilter!==La&&x.minFilter!==Ui||x.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Te(T,x){let W=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let J=x.source,he=u.get(J);he===void 0&&(he={},u.set(J,he));let se=j(x);if(se!==T.__cacheKey){he[se]===void 0&&(he[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),he[se].usedTimes++;let be=he[T.__cacheKey];be!==void 0&&(he[T.__cacheKey].usedTimes--,be.usedTimes===0&&w(x)),T.__cacheKey=se,T.__webglTexture=he[se].texture}return W}function Be(T,x,W){return Math.floor(Math.floor(T/W)/x)}function ee(T,x,W,J){let se=T.updateRanges;if(se.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,W,J,x.data);else{se.sort((ye,Ce)=>ye.start-Ce.start);let be=0;for(let ye=1;ye<se.length;ye++){let Ce=se[be],qe=se[ye],Oe=Ce.start+Ce.count,Re=Be(qe.start,x.width,4),Je=Be(Ce.start,x.width,4);qe.start<=Oe+1&&Re===Je&&Be(qe.start+qe.count-1,x.width,4)===Re?Ce.count=Math.max(Ce.count,qe.start+qe.count-Ce.start):(++be,se[be]=qe)}se.length=be+1;let ge=n.getParameter(n.UNPACK_ROW_LENGTH),Ie=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ye=0,Ce=se.length;ye<Ce;ye++){let qe=se[ye],Oe=Math.floor(qe.start/4),Re=Math.ceil(qe.count/4),Je=Oe%x.width,H=Math.floor(Oe/x.width),Me=Re,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,Je,H,Me,Ee,W,J,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ge),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function b(T,x,W){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);let he=Te(T,x),se=x.source;t.bindTexture(J,T.__webglTexture,n.TEXTURE0+W);let be=i.get(se);if(se.version!==be.__version||he===!0){t.activeTexture(n.TEXTURE0+W);let ge=nt.getPrimaries(nt.workingColorSpace),Ie=x.colorSpace===ui?null:nt.getPrimaries(x.colorSpace),De=x.colorSpace===ui||ge===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ye=y(x.image,!1,s.maxTextureSize);ye=pe(x,ye);let Ce=r.convert(x.format,x.colorSpace),qe=r.convert(x.type),Oe=v(x.internalFormat,Ce,qe,x.colorSpace,x.isVideoTexture);we(J,x);let Re,Je=x.mipmaps,H=x.isVideoTexture!==!0,Me=be.__version===void 0||he===!0,Ee=se.dataReady,Ue=C(x,ye);if(x.isDepthTexture)Oe=_(x.format===dr,x.type),Me&&(H?t.texStorage2D(n.TEXTURE_2D,1,Oe,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ye.width,ye.height,0,Ce,qe,null));else if(x.isDataTexture)if(Je.length>0){H&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let _e=0,fe=Je.length;_e<fe;_e++)Re=Je[_e],H?Ee&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ce,qe,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,Re.width,Re.height,0,Ce,qe,Re.data);x.generateMipmaps=!1}else H?(Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,ye.width,ye.height),Ee&&ee(x,ye,Ce,qe)):t.texImage2D(n.TEXTURE_2D,0,Oe,ye.width,ye.height,0,Ce,qe,ye.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){H&&Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,Je[0].width,Je[0].height,ye.depth);for(let _e=0,fe=Je.length;_e<fe;_e++)if(Re=Je[_e],x.format!==xn)if(Ce!==null)if(H){if(Ee)if(x.layerUpdates.size>0){let ke=lu(Re.width,Re.height,x.format,x.type);for(let Ye of x.layerUpdates){let ht=Re.data.subarray(Ye*ke/Re.data.BYTES_PER_ELEMENT,(Ye+1)*ke/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Ye,Re.width,Re.height,1,Ce,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ye.depth,Ce,Re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,Re.width,Re.height,ye.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,ye.depth,Ce,qe,Re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,Re.width,Re.height,ye.depth,0,Ce,qe,Re.data)}else{H&&Me&&t.texStorage2D(n.TEXTURE_2D,Ue,Oe,Je[0].width,Je[0].height);for(let _e=0,fe=Je.length;_e<fe;_e++)Re=Je[_e],x.format!==xn?Ce!==null?H?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ce,Re.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Oe,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ce,qe,Re.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,Re.width,Re.height,0,Ce,qe,Re.data)}else if(x.isDataArrayTexture)if(H){if(Me&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,Oe,ye.width,ye.height,ye.depth),Ee)if(x.layerUpdates.size>0){let _e=lu(ye.width,ye.height,x.format,x.type);for(let fe of x.layerUpdates){let ke=ye.data.subarray(fe*_e/ye.data.BYTES_PER_ELEMENT,(fe+1)*_e/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,Ce,qe,ke)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ce,qe,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ye.width,ye.height,ye.depth,0,Ce,qe,ye.data);else if(x.isData3DTexture)H?(Me&&t.texStorage3D(n.TEXTURE_3D,Ue,Oe,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ce,qe,ye.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ye.width,ye.height,ye.depth,0,Ce,qe,ye.data);else if(x.isFramebufferTexture){if(Me)if(H)t.texStorage2D(n.TEXTURE_2D,Ue,Oe,ye.width,ye.height);else{let _e=ye.width,fe=ye.height;for(let ke=0;ke<Ue;ke++)t.texImage2D(n.TEXTURE_2D,ke,Oe,_e,fe,0,Ce,qe,null),_e>>=1,fe>>=1}}else if(Je.length>0){if(H&&Me){let _e=Se(Je[0]);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height)}for(let _e=0,fe=Je.length;_e<fe;_e++)Re=Je[_e],H?Ee&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce,qe,Re):t.texImage2D(n.TEXTURE_2D,_e,Oe,Ce,qe,Re);x.generateMipmaps=!1}else if(H){if(Me){let _e=Se(ye);t.texStorage2D(n.TEXTURE_2D,Ue,Oe,_e.width,_e.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,qe,ye)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ce,qe,ye);m(x)&&p(J),be.__version=se.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function D(T,x,W){if(x.image.length!==6)return;let J=Te(T,x),he=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+W);let se=i.get(he);if(he.version!==se.__version||J===!0){t.activeTexture(n.TEXTURE0+W);let be=nt.getPrimaries(nt.workingColorSpace),ge=x.colorSpace===ui?null:nt.getPrimaries(x.colorSpace),Ie=x.colorSpace===ui||be===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let De=x.isCompressedTexture||x.image[0].isCompressedTexture,ye=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let fe=0;fe<6;fe++)!De&&!ye?Ce[fe]=y(x.image[fe],!0,s.maxCubemapSize):Ce[fe]=ye?x.image[fe].image:x.image[fe],Ce[fe]=pe(x,Ce[fe]);let qe=Ce[0],Oe=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),Je=v(x.internalFormat,Oe,Re,x.colorSpace),H=x.isVideoTexture!==!0,Me=se.__version===void 0||J===!0,Ee=he.dataReady,Ue=C(x,qe);we(n.TEXTURE_CUBE_MAP,x);let _e;if(De){H&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Je,qe.width,qe.height);for(let fe=0;fe<6;fe++){_e=Ce[fe].mipmaps;for(let ke=0;ke<_e.length;ke++){let Ye=_e[ke];x.format!==xn?Oe!==null?H?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,Je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,Ye.width,Ye.height,Oe,Re,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,Je,Ye.width,Ye.height,0,Oe,Re,Ye.data)}}}else{if(_e=x.mipmaps,H&&Me){_e.length>0&&Ue++;let fe=Se(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,Je,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){H?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ce[fe].width,Ce[fe].height,Oe,Re,Ce[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,Ce[fe].width,Ce[fe].height,0,Oe,Re,Ce[fe].data);for(let ke=0;ke<_e.length;ke++){let ht=_e[ke].image[fe].image;H?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,ht.width,ht.height,Oe,Re,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,Je,ht.width,ht.height,0,Oe,Re,ht.data)}}else{H?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,Re,Ce[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Je,Oe,Re,Ce[fe]);for(let ke=0;ke<_e.length;ke++){let Ye=_e[ke];H?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,Oe,Re,Ye.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,Je,Oe,Re,Ye.image[fe])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),se.__version=he.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function $(T,x,W,J,he,se){let be=r.convert(W.format,W.colorSpace),ge=r.convert(W.type),Ie=v(W.internalFormat,be,ge,W.colorSpace),De=i.get(x),ye=i.get(W);if(ye.__renderTarget=x,!De.__hasExternalTextures){let Ce=Math.max(1,x.width>>se),qe=Math.max(1,x.height>>se);he===n.TEXTURE_3D||he===n.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Ie,Ce,qe,x.depth,0,be,ge,null):t.texImage2D(he,se,Ie,Ce,qe,0,be,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,he,ye.__webglTexture,0,F(x)):(he===n.TEXTURE_2D||he>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,he,ye.__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(T,x,W){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let J=x.depthTexture,he=J&&J.isDepthTexture?J.type:null,se=_(x.stencilBuffer,he),be=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=F(x);te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,se,x.width,x.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,se,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,se,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,T)}else{let J=x.textures;for(let he=0;he<J.length;he++){let se=J[he],be=r.convert(se.format,se.colorSpace),ge=r.convert(se.type),Ie=v(se.internalFormat,be,ge,se.colorSpace),De=F(x);W&&te(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Ie,x.width,x.height):te(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,De,Ie,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);let he=J.__webglTexture,se=F(x);if(x.depthTexture.format===$s)te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,he,0);else if(x.depthTexture.format===dr)te(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0,se):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function de(T){let x=i.get(T),W=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let J=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){let he=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",he)};J.addEventListener("dispose",he),x.__depthDisposeCallback=he}x.__boundDepthTexture=J}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let J=T.texture.mipmaps;J&&J.length>0?ce(x.__webglFramebuffer[0],T):ce(x.__webglFramebuffer,T)}else if(W){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[J],T,!1);else{let he=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}else{let J=T.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,T,!1);else{let he=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,se=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,se),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,se)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(T,x,W){let J=i.get(T);x!==void 0&&$(J.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&de(T)}function I(T){let x=T.texture,W=i.get(T),J=i.get(x);T.addEventListener("dispose",L);let he=T.textures,se=T.isWebGLCubeRenderTarget===!0,be=he.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,a.memory.textures++),se){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let Ie=0;Ie<x.mipmaps.length;Ie++)W.__webglFramebuffer[ge][Ie]=n.createFramebuffer()}else W.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<x.mipmaps.length;ge++)W.__webglFramebuffer[ge]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(be)for(let ge=0,Ie=he.length;ge<Ie;ge++){let De=i.get(he[ge]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&te(T)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){let Ie=he[ge];W.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);let De=r.convert(Ie.format,Ie.colorSpace),ye=r.convert(Ie.type),Ce=v(Ie.internalFormat,De,ye,Ie.colorSpace,T.isXRRenderTarget===!0),qe=F(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ce,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(W.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),we(n.TEXTURE_CUBE_MAP,x);for(let ge=0;ge<6;ge++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)$(W.__webglFramebuffer[ge][Ie],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ie);else $(W.__webglFramebuffer[ge],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let ge=0,Ie=he.length;ge<Ie;ge++){let De=he[ge],ye=i.get(De),Ce=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ye.__webglTexture),we(Ce,De),$(W.__webglFramebuffer,T,De,n.COLOR_ATTACHMENT0+ge,Ce,0),m(De)&&p(Ce)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),we(ge,x),x.mipmaps&&x.mipmaps.length>0)for(let Ie=0;Ie<x.mipmaps.length;Ie++)$(W.__webglFramebuffer[Ie],T,x,n.COLOR_ATTACHMENT0,ge,Ie);else $(W.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ge,0);m(x)&&p(ge),t.unbindTexture()}T.depthBuffer&&de(T)}function ue(T){let x=T.textures;for(let W=0,J=x.length;W<J;W++){let he=x[W];if(m(he)){let se=E(T),be=i.get(he).__webglTexture;t.bindTexture(se,be),p(se),t.unbindTexture()}}}let K=[],oe=[];function N(T){if(T.samples>0){if(te(T)===!1){let x=T.textures,W=T.width,J=T.height,he=n.COLOR_BUFFER_BIT,se=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=i.get(T),ge=x.length>1;if(ge)for(let De=0;De<x.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let Ie=T.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<x.length;De++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(he|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(he|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);let ye=i.get(x[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,he,n.NEAREST),l===!0&&(K.length=0,oe.length=0,K.push(n.COLOR_ATTACHMENT0+De),T.depthBuffer&&T.resolveDepthBuffer===!1&&(K.push(se),oe.push(se),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let De=0;De<x.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);let ye=i.get(x[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function F(T){return Math.min(s.maxSamples,T.samples)}function te(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Q(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function pe(T,x){let W=T.colorSpace,J=T.format,he=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||W!==ns&&W!==ui&&(nt.getTransfer(W)===at?(J!==xn||he!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),x}function Se(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=R,this.setTexture3D=P,this.setTextureCube=B,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=$,this.useMultisampledRTT=te}function fb(n,e){function t(i,s=ui){let r,a=nt.getTransfer(s);if(i===Ln)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Yh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===cr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===Xn)return n.FLOAT;if(i===hr)return n.HALF_FLOAT;if(i===jh)return n.ALPHA;if(i===Zh)return n.RGB;if(i===xn)return n.RGBA;if(i===$s)return n.DEPTH_COMPONENT;if(i===dr)return n.DEPTH_STENCIL;if(i===Jh)return n.RED;if(i===Ll)return n.RED_INTEGER;if(i===Kh)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Ul)return n.RGBA_INTEGER;if(i===Da||i===Ua||i===Na||i===Fa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nl||i===Fl||i===kl||i===Ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Nl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===zl||i===Hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===zl)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Hl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vl||i===Gl||i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===jl||i===Zl||i===Jl||i===Kl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Vl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nc||i===ic||i===sc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===nc)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===ac||i===oc||i===lc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function yb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,su(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),v=E.envMap,_=E.envMapRotation;v&&(m.envMap.value=v,ms.copy(_),ms.x*=-1,ms.y*=-1,ms.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(gb.makeRotationFromEuler(ms)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function vb(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let _=v.program;i.uniformBlockBinding(E,_)}function c(E,v){let _=s[E.id];_===void 0&&(g(E),_=h(E),s[E.id]=_,E.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(E,C);let A=e.render.frame;r[E.id]!==A&&(u(E),r[E.id]=A)}function h(E){let v=d();E.__bindingPointIndex=v;let _=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let v=s[E.id],_=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,L=_.length;A<L;A++){let O=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,M=O.length;w<M;w++){let U=O[w];if(f(U,A,w,C)===!0){let G=U.__offset,Y=Array.isArray(U.value)?U.value:[U.value],j=0;for(let Z=0;Z<Y.length;Z++){let R=Y[Z],P=y(R);typeof R=="number"||typeof R=="boolean"?(U.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,G+j,U.__data)):R.isMatrix3?(U.__data[0]=R.elements[0],U.__data[1]=R.elements[1],U.__data[2]=R.elements[2],U.__data[3]=0,U.__data[4]=R.elements[3],U.__data[5]=R.elements[4],U.__data[6]=R.elements[5],U.__data[7]=0,U.__data[8]=R.elements[6],U.__data[9]=R.elements[7],U.__data[10]=R.elements[8],U.__data[11]=0):(R.toArray(U.__data,j),j+=P.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,v,_,C){let A=E.value,L=v+"_"+_;if(C[L]===void 0)return typeof A=="number"||typeof A=="boolean"?C[L]=A:C[L]=A.clone(),!0;{let O=C[L];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return C[L]=A,!0}else if(O.equals(A)===!1)return O.copy(A),!0}return!1}function g(E){let v=E.uniforms,_=0,C=16;for(let L=0,O=v.length;L<O;L++){let w=Array.isArray(v[L])?v[L]:[v[L]];for(let M=0,U=w.length;M<U;M++){let G=w[M],Y=Array.isArray(G.value)?G.value:[G.value];for(let j=0,Z=Y.length;j<Z;j++){let R=Y[j],P=y(R),B=_%C,V=B%P.boundary,re=B+V;_+=V,re!==0&&C-re<P.storage&&(_+=C-re),G.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=P.storage}}}let A=_%C;return A>0&&(_+=C-A),E.__size=_,E.__cache={},this}function y(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var X0,Y0,$0,j0,Z0,J0,K0,Q0,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,dy,fy,py,my,gy,yy,vy,_y,xy,by,My,Sy,wy,Ey,Ty,Ay,Cy,Ry,Py,Iy,Ly,Dy,Uy,Ny,Fy,ky,Oy,By,zy,Hy,Vy,Gy,Wy,qy,Xy,Yy,$y,jy,Zy,Jy,Ky,Qy,ev,tv,nv,iv,sv,rv,av,ov,lv,cv,hv,uv,dv,fv,pv,mv,gv,yv,vv,_v,xv,bv,Mv,Sv,wv,Ev,Tv,Av,Cv,Rv,Pv,Iv,Lv,Dv,Uv,Nv,Fv,kv,Ov,Bv,zv,Hv,Vv,Gv,Wv,qv,Xv,Yv,$v,jv,Zv,Jv,Kv,Qv,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,y_,v_,__,x_,b_,M_,S_,w_,Qe,Ae,Yn,cc,ps,E_,pr,gp,ys,hu,yp,uu,du,fu,pu,gs,fr,vp,L_,gr,zp,Mp,Hp,Vp,Gp,Sp,wp,Ep,Tp,Ap,gu,yu,vu,mu,mr,Rx,Px,Pp,uc,Bx,zx,Vx,Zx,xu,bu,ib,ob,lb,hb,pb,mb,Mu,Su,ms,gb,yr,Ba=Ps(()=>{cu();cu();X0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
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
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K0=`#ifdef USE_AOMAP
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
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ey=`#ifdef USE_BATCHING
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
#endif`,ty=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ny=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ry=`#ifdef USE_IRIDESCENCE
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
#endif`,ay=`#ifdef USE_BUMPMAP
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
#endif`,oy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,py=`#if defined( USE_COLOR_ALPHA )
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
#endif`,my=`#define PI 3.141592653589793
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
} // validated`,gy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yy=`vec3 transformedNormal = objectNormal;
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
#endif`,vy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,My="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wy=`#ifdef USE_ENVMAP
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
#endif`,Ey=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ty=`#ifdef USE_ENVMAP
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
#endif`,Ay=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cy=`#ifdef USE_ENVMAP
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
#endif`,Ry=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Py=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Iy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ly=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dy=`#ifdef USE_GRADIENTMAP
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
}`,Uy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ky=`uniform bool receiveShadow;
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
#endif`,Oy=`#ifdef USE_ENVMAP
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
#endif`,By=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gy=`PhysicalMaterial material;
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
#endif`,Wy=`struct PhysicalMaterial {
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
}`,qy=`
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
#endif`,Xy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$y=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ky=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tv=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
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
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ov=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xv=`uniform sampler2D t2D;
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
}`,Yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`#include <common>
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
}`,Kv=`#if DEPTH_PACKING == 3200
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
}`,Qv=`#define DISTANCE
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
}`,e_=`#define DISTANCE
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
}`,t_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i_=`uniform float scale;
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
}`,s_=`uniform vec3 diffuse;
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
}`,r_=`#include <common>
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#define LAMBERT
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
}`,l_=`#define LAMBERT
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
}`,c_=`#define MATCAP
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
}`,h_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,d_=`#define NORMAL
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
}`,f_=`#define PHONG
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
}`,p_=`#define PHONG
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
}`,m_=`#define STANDARD
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
}`,g_=`#define STANDARD
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
}`,y_=`#define TOON
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
}`,v_=`#define TOON
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
}`,__=`uniform float size;
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
}`,x_=`uniform vec3 diffuse;
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
}`,b_=`#include <common>
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
}`,M_=`uniform vec3 color;
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
}`,S_=`uniform float rotation;
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
}`,w_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:X0,alphahash_pars_fragment:Y0,alphamap_fragment:$0,alphamap_pars_fragment:j0,alphatest_fragment:Z0,alphatest_pars_fragment:J0,aomap_fragment:K0,aomap_pars_fragment:Q0,batching_pars_vertex:ey,batching_vertex:ty,begin_vertex:ny,beginnormal_vertex:iy,bsdfs:sy,iridescence_fragment:ry,bumpmap_pars_fragment:ay,clipping_planes_fragment:oy,clipping_planes_pars_fragment:ly,clipping_planes_pars_vertex:cy,clipping_planes_vertex:hy,color_fragment:uy,color_pars_fragment:dy,color_pars_vertex:fy,color_vertex:py,common:my,cube_uv_reflection_fragment:gy,defaultnormal_vertex:yy,displacementmap_pars_vertex:vy,displacementmap_vertex:_y,emissivemap_fragment:xy,emissivemap_pars_fragment:by,colorspace_fragment:My,colorspace_pars_fragment:Sy,envmap_fragment:wy,envmap_common_pars_fragment:Ey,envmap_pars_fragment:Ty,envmap_pars_vertex:Ay,envmap_physical_pars_fragment:Oy,envmap_vertex:Cy,fog_vertex:Ry,fog_pars_vertex:Py,fog_fragment:Iy,fog_pars_fragment:Ly,gradientmap_pars_fragment:Dy,lightmap_pars_fragment:Uy,lights_lambert_fragment:Ny,lights_lambert_pars_fragment:Fy,lights_pars_begin:ky,lights_toon_fragment:By,lights_toon_pars_fragment:zy,lights_phong_fragment:Hy,lights_phong_pars_fragment:Vy,lights_physical_fragment:Gy,lights_physical_pars_fragment:Wy,lights_fragment_begin:qy,lights_fragment_maps:Xy,lights_fragment_end:Yy,logdepthbuf_fragment:$y,logdepthbuf_pars_fragment:jy,logdepthbuf_pars_vertex:Zy,logdepthbuf_vertex:Jy,map_fragment:Ky,map_pars_fragment:Qy,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:rv,morphnormal_vertex:av,morphtarget_pars_vertex:ov,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:hv,normal_pars_fragment:uv,normal_pars_vertex:dv,normal_vertex:fv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:yv,iridescence_pars_fragment:vv,opaque_fragment:_v,packing:xv,premultiplied_alpha_fragment:bv,project_vertex:Mv,dithering_fragment:Sv,dithering_pars_fragment:wv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:Cv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Pv,skinbase_vertex:Iv,skinning_pars_vertex:Lv,skinning_vertex:Dv,skinnormal_vertex:Uv,specularmap_fragment:Nv,specularmap_pars_fragment:Fv,tonemapping_fragment:kv,tonemapping_pars_fragment:Ov,transmission_fragment:Bv,transmission_pars_fragment:zv,uv_pars_fragment:Hv,uv_pars_vertex:Vv,uv_vertex:Gv,worldpos_vertex:Wv,background_vert:qv,background_frag:Xv,backgroundCube_vert:Yv,backgroundCube_frag:$v,cube_vert:jv,cube_frag:Zv,depth_vert:Jv,depth_frag:Kv,distanceRGBA_vert:Qv,distanceRGBA_frag:e_,equirect_vert:t_,equirect_frag:n_,linedashed_vert:i_,linedashed_frag:s_,meshbasic_vert:r_,meshbasic_frag:a_,meshlambert_vert:o_,meshlambert_frag:l_,meshmatcap_vert:c_,meshmatcap_frag:h_,meshnormal_vert:u_,meshnormal_frag:d_,meshphong_vert:f_,meshphong_frag:p_,meshphysical_vert:m_,meshphysical_frag:g_,meshtoon_vert:y_,meshtoon_frag:v_,points_vert:__,points_frag:x_,shadow_vert:b_,shadow_frag:M_,sprite_vert:S_,sprite_frag:w_},Ae={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Yn={basic:{uniforms:Gt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Gt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Gt([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Gt([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Gt([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Gt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Gt([Ae.points,Ae.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Gt([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Gt([Ae.common,Ae.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Gt([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Gt([Ae.sprite,Ae.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Gt([Ae.common,Ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Gt([Ae.lights,Ae.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Yn.physical={uniforms:Gt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};cc={r:0,b:0,g:0},ps=new In,E_=new bt;pr=4,gp=[.125,.215,.35,.446,.526,.582],ys=20,hu=new ls,yp=new $e,uu=null,du=0,fu=0,pu=!1,gs=(1+Math.sqrt(5))/2,fr=1/gs,vp=[new z(-gs,fr,0),new z(gs,fr,0),new z(-fr,0,gs),new z(fr,0,gs),new z(0,gs,-fr),new z(0,gs,fr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],L_=new z,gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=L_}=r;uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uu,du,fu),this._renderer.xr.enabled=pu,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),fu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:hr,format:xn,colorSpace:ns,depthBuffer:!1},s=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(r)),this._blurMaterial=U_(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,hu)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(yp),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new li({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),m=new pt(new Ci,y),p=!1,E=e.background;E?E.isColor&&(y.color.copy(E),e.background=null,p=!0):(y.color.copy(yp),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let C=this._cubeSize;hc(s,_*C,v>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===hs||e.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;hc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,hu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(s-r-1)%vp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ys-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):ys;m>ys&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ys}`);let p=[],E=0;for(let L=0;L<ys;++L){let O=L/y,w=Math.exp(-O*O/2);p.push(w),L===0?E+=w:L<m&&(E+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let _=this._sizeLods[s],C=3*_*(s>v-pr?s-v+pr:0),A=4*(this._cubeSize-_);hc(t,C,A,3*_,2*_),l.setRenderTarget(t),l.render(d,hu)}};zp=new Vt,Mp=new ca(1,1),Hp=new ia,Vp=new Ko,Gp=new oa,Sp=[],wp=[],Ep=new Float32Array(16),Tp=new Float32Array(9),Ap=new Float32Array(4);gu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}},yu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ax(t.type)}},vu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},mu=/(\w+)(\])?(\[|\.)?/g;mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Cx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};Rx=37297,Px=0;Pp=new je;uc=new z;Bx=/^[ \t]*#include +<([\w\d./]+)>/gm;zx=new Map;Vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Zx=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new bu(e),t.set(e,i)),i}},bu=class{constructor(e){this.id=Zx++,this.code=e,this.usedTimes=0}};ib=0;ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`;hb={[vl]:_l,[xl]:Sl,[bl]:wl,[ts]:Ml,[_l]:vl,[Sl]:xl,[wl]:bl,[Ml]:ts};pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new hn({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Vn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends zn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Mu,p={},E=t.getContextAttributes(),v=null,_=null,C=[],A=[],L=new ve,O=null,w=new Ht;w.viewport=new ft;let M=new Ht;M.viewport=new ft;let U=[w,M],G=new yl,Y=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(b){let D=C[b];return D===void 0&&(D=new tr,C[b]=D),D.getTargetRaySpace()},this.getControllerGrip=function(b){let D=C[b];return D===void 0&&(D=new tr,C[b]=D),D.getGripSpace()},this.getHand=function(b){let D=C[b];return D===void 0&&(D=new tr,C[b]=D),D.getHandSpace()};function Z(b){let D=A.indexOf(b.inputSource);if(D===-1)return;let $=C[D];$!==void 0&&($.update(b.inputSource,b.frame,c||a),$.dispatchEvent({type:b.type,data:b.inputSource}))}function R(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",P);for(let b=0;b<C.length;b++){let D=A[b];D!==null&&(A[b]=null,C[b].disconnect(D))}Y=null,j=null,m.reset();for(let b in p)delete p[b];e.setRenderTarget(v),f=null,u=null,d=null,s=null,_=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(b){r=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(b){o=b,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(b){c=b},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(b){if(s=b,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",R),s.addEventListener("inputsourceschange",P),E.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,ae=null,ce=null;E.depth&&(ce=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=E.stencil?dr:$s,ae=E.stencil?ur:Ni);let de={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(de),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new Hn(u.textureWidth,u.textureHeight,{format:xn,type:Ln,depthTexture:new ca(u.textureWidth,u.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let $={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,$),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hn(f.framebufferWidth,f.framebufferHeight,{format:xn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(b){for(let D=0;D<b.removed.length;D++){let $=b.removed[D],ae=A.indexOf($);ae>=0&&(A[ae]=null,C[ae].disconnect($))}for(let D=0;D<b.added.length;D++){let $=b.added[D],ae=A.indexOf($);if(ae===-1){for(let de=0;de<C.length;de++)if(de>=A.length){A.push($),ae=de;break}else if(A[de]===null){A[de]=$,ae=de;break}if(ae===-1)break}let ce=C[ae];ce&&ce.connect($)}}let B=new z,V=new z;function re(b,D,$){B.setFromMatrixPosition(D.matrixWorld),V.setFromMatrixPosition($.matrixWorld);let ae=B.distanceTo(V),ce=D.projectionMatrix.elements,de=$.projectionMatrix.elements,Ne=ce[14]/(ce[10]-1),I=ce[14]/(ce[10]+1),ue=(ce[9]+1)/ce[5],K=(ce[9]-1)/ce[5],oe=(ce[8]-1)/ce[0],N=(de[8]+1)/de[0],F=Ne*oe,te=Ne*N,Q=ae/(-oe+N),pe=Q*-oe;if(D.matrixWorld.decompose(b.position,b.quaternion,b.scale),b.translateX(pe),b.translateZ(Q),b.matrixWorld.compose(b.position,b.quaternion,b.scale),b.matrixWorldInverse.copy(b.matrixWorld).invert(),ce[10]===-1)b.projectionMatrix.copy(D.projectionMatrix),b.projectionMatrixInverse.copy(D.projectionMatrixInverse);else{let Se=Ne+Q,T=I+Q,x=F-pe,W=te+(ae-pe),J=ue*I/T*Se,he=K*I/T*Se;b.projectionMatrix.makePerspective(x,W,J,he,Se,T),b.projectionMatrixInverse.copy(b.projectionMatrix).invert()}}function le(b,D){D===null?b.matrixWorld.copy(b.matrix):b.matrixWorld.multiplyMatrices(D.matrixWorld,b.matrix),b.matrixWorldInverse.copy(b.matrixWorld).invert()}this.updateCamera=function(b){if(s===null)return;let D=b.near,$=b.far;m.texture!==null&&(m.depthNear>0&&(D=m.depthNear),m.depthFar>0&&($=m.depthFar)),G.near=M.near=w.near=D,G.far=M.far=w.far=$,(Y!==G.near||j!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),Y=G.near,j=G.far),G.layers.mask=b.layers.mask|6,w.layers.mask=G.layers.mask&3,M.layers.mask=G.layers.mask&5;let ae=b.parent,ce=G.cameras;le(G,ae);for(let de=0;de<ce.length;de++)le(ce[de],ae);ce.length===2?re(G,w,M):G.projectionMatrix.copy(w.projectionMatrix),we(b,G,ae)};function we(b,D,$){$===null?b.matrix.copy(D.matrixWorld):(b.matrix.copy($.matrixWorld),b.matrix.invert(),b.matrix.multiply(D.matrixWorld)),b.matrix.decompose(b.position,b.quaternion,b.scale),b.updateMatrixWorld(!0),b.projectionMatrix.copy(D.projectionMatrix),b.projectionMatrixInverse.copy(D.projectionMatrixInverse),b.isPerspectiveCamera&&(b.fov=js*2*Math.atan(1/b.projectionMatrix.elements[5]),b.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(b){l=b,u!==null&&(u.fixedFoveation=b),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=b)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(b){return p[b]};let Te=null;function Be(b,D){if(h=D.getViewerPose(c||a),g=D,h!==null){let $=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ae=!1;$.length!==G.cameras.length&&(G.cameras.length=0,ae=!0);for(let I=0;I<$.length;I++){let ue=$[I],K=null;if(f!==null)K=f.getViewport(ue);else{let N=d.getViewSubImage(u,ue);K=N.viewport,I===0&&(e.setRenderTargetTextures(_,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(_))}let oe=U[I];oe===void 0&&(oe=new Ht,oe.layers.enable(I),oe.viewport=new ft,U[I]=oe),oe.matrix.fromArray(ue.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ue.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(K.x,K.y,K.width,K.height),I===0&&(G.matrix.copy(oe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ae===!0&&G.cameras.push(oe)}let ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let I=d.getDepthInformation($[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(ce&&ce.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<$.length;I++){let ue=$[I].camera;if(ue){let K=p[ue];K||(K=new ha,p[ue]=K);let oe=d.getCameraImage(ue);K.sourceTexture=oe}}}}for(let $=0;$<C.length;$++){let ae=A[$],ce=C[$];ae!==null&&ce!==void 0&&ce.update(ae,D,c||a)}Te&&Te(b,D),D.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:D}),g=null}let ee=new Bp;ee.setAnimationLoop(Be),this.setAnimationLoop=function(b){Te=b},this.dispose=function(){}}},ms=new In,gb=new bt;yr=class{constructor(e={}){let{canvas:t=op(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,E=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,C=!1;this._outputColorSpace=It;let A=0,L=0,O=null,w=-1,M=null,U=new ft,G=new ft,Y=null,j=new $e(0),Z=0,R=t.width,P=t.height,B=1,V=null,re=null,le=new ft(0,0,R,P),we=new ft(0,0,R,P),Te=!1,Be=new nr,ee=!1,b=!1,D=new bt,$=new z,ae=new ft,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Ne(){return O===null?B:1}let I=i;function ue(S,q){return t.getContext(S,q)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",_e,!1),I===null){let q="webgl2";if(I=ue(q,S),I===null)throw ue(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let K,oe,N,F,te,Q,pe,Se,T,x,W,J,he,se,be,ge,Ie,De,ye,Ce,qe,Oe,Re,Je;function H(){K=new F_(I),K.init(),Oe=new fb(I,K),oe=new R_(I,K,e,Oe),N=new ub(I,K),oe.reversedDepthBuffer&&u&&N.buffers.depth.setReversed(!0),F=new B_(I),te=new Kx,Q=new db(I,K,N,te,oe,Oe,F),pe=new I_(_),Se=new N_(_),T=new q0(I),Re=new A_(I,T),x=new k_(I,T,F,Re),W=new H_(I,x,T,F),ye=new z_(I,oe,Q),ge=new P_(te),J=new Jx(_,pe,Se,K,oe,Re,ge),he=new yb(_,te),se=new eb,be=new ab(K),De=new T_(_,pe,Se,N,W,f,l),Ie=new cb(_,W,oe),Je=new vb(I,F,oe,N),Ce=new C_(I,K,F),qe=new O_(I,K,F),F.programs=J.programs,_.capabilities=oe,_.extensions=K,_.properties=te,_.renderLists=se,_.shadowMap=Ie,_.state=N,_.info=F}H();let Me=new Su(_,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=K.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=K.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(S){S!==void 0&&(B=S,this.setSize(R,P,!1))},this.getSize=function(S){return S.set(R,P)},this.setSize=function(S,q,ne=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=S,P=q,t.width=Math.floor(S*B),t.height=Math.floor(q*B),ne===!0&&(t.style.width=S+"px",t.style.height=q+"px"),this.setViewport(0,0,S,q)},this.getDrawingBufferSize=function(S){return S.set(R*B,P*B).floor()},this.setDrawingBufferSize=function(S,q,ne){R=S,P=q,B=ne,t.width=Math.floor(S*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,S,q)},this.getCurrentViewport=function(S){return S.copy(U)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,q,ne,ie){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,q,ne,ie),N.viewport(U.copy(le).multiplyScalar(B).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,q,ne,ie){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,q,ne,ie),N.scissor(G.copy(we).multiplyScalar(B).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(S){N.setScissorTest(Te=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){re=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(S=!0,q=!0,ne=!0){let ie=0;if(S){let X=!1;if(O!==null){let xe=O.texture.format;X=xe===Ul||xe===Dl||xe===Ll}if(X){let xe=O.texture.type,Pe=xe===Ln||xe===Ni||xe===cr||xe===ur||xe===Pl||xe===Il,Fe=De.getClearColor(),Le=De.getClearAlpha(),We=Fe.r,Xe=Fe.g,He=Fe.b;Pe?(g[0]=We,g[1]=Xe,g[2]=He,g[3]=Le,I.clearBufferuiv(I.COLOR,0,g)):(y[0]=We,y[1]=Xe,y[2]=He,y[3]=Le,I.clearBufferiv(I.COLOR,0,y))}else ie|=I.COLOR_BUFFER_BIT}q&&(ie|=I.DEPTH_BUFFER_BIT),ne&&(ie|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),De.dispose(),se.dispose(),be.dispose(),te.dispose(),pe.dispose(),Se.dispose(),W.dispose(),Re.dispose(),Je.dispose(),J.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",On),Me.removeEventListener("sessionend",Ed),qi.stop()};function Ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=F.autoReset,q=Ie.enabled,ne=Ie.autoUpdate,ie=Ie.needsUpdate,X=Ie.type;H(),F.autoReset=S,Ie.enabled=q,Ie.autoUpdate=ne,Ie.needsUpdate=ie,Ie.type=X}function _e(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function fe(S){let q=S.target;q.removeEventListener("dispose",fe),ke(q)}function ke(S){Ye(S),te.remove(S)}function Ye(S){let q=te.get(S).programs;q!==void 0&&(q.forEach(function(ne){J.releaseProgram(ne)}),S.isShaderMaterial&&J.releaseShaderCache(S))}this.renderBufferDirect=function(S,q,ne,ie,X,xe){q===null&&(q=ce);let Pe=X.isMesh&&X.matrixWorld.determinant()<0,Fe=hg(S,q,ne,ie,X);N.setMaterial(ie,Pe);let Le=ne.index,We=1;if(ie.wireframe===!0){if(Le=x.getWireframeAttribute(ne),Le===void 0)return;We=2}let Xe=ne.drawRange,He=ne.attributes.position,tt=Xe.start*We,ot=(Xe.start+Xe.count)*We;xe!==null&&(tt=Math.max(tt,xe.start*We),ot=Math.min(ot,(xe.start+xe.count)*We)),Le!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Le.count)):He!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,He.count));let St=ot-tt;if(St<0||St===1/0)return;Re.setup(X,ie,Fe,ne,Le);let ut,ct=Ce;if(Le!==null&&(ut=T.get(Le),ct=qe,ct.setIndex(ut)),X.isMesh)ie.wireframe===!0?(N.setLineWidth(ie.wireframeLinewidth*Ne()),ct.setMode(I.LINES)):ct.setMode(I.TRIANGLES);else if(X.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),N.setLineWidth(Ge*Ne()),X.isLineSegments?ct.setMode(I.LINES):X.isLineLoop?ct.setMode(I.LINE_LOOP):ct.setMode(I.LINE_STRIP)}else X.isPoints?ct.setMode(I.POINTS):X.isSprite&&ct.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ct.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Ge=X._multiDrawStarts,yt=X._multiDrawCounts,st=X._multiDrawCount,sn=Le?T.get(Le).bytesPerElement:1,Rs=te.get(ie).currentProgram.getUniforms();for(let rn=0;rn<st;rn++)Rs.setValue(I,"_gl_DrawID",rn),ct.render(Ge[rn]/sn,yt[rn])}else if(X.isInstancedMesh)ct.renderInstances(tt,St,X.count);else if(ne.isInstancedBufferGeometry){let Ge=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,yt=Math.min(ne.instanceCount,Ge);ct.renderInstances(tt,St,yt)}else ct.render(tt,St)};function ht(S,q,ne){S.transparent===!0&&S.side===qn&&S.forceSinglePass===!1?(S.side=Ot,S.needsUpdate=!0,lo(S,q,ne),S.side=oi,S.needsUpdate=!0,lo(S,q,ne),S.side=qn):lo(S,q,ne)}this.compile=function(S,q,ne=null){ne===null&&(ne=S),p=be.get(ne),p.init(q),v.push(p),ne.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),S!==ne&&S.traverseVisible(function(X){X.isLight&&X.layers.test(q.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let ie=new Set;return S.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){let Fe=xe[Pe];ht(Fe,ne,X),ie.add(Fe)}else ht(xe,ne,X),ie.add(xe)}),p=v.pop(),ie},this.compileAsync=function(S,q,ne=null){let ie=this.compile(S,q,ne);return new Promise(X=>{function xe(){if(ie.forEach(function(Pe){te.get(Pe).currentProgram.isReady()&&ie.delete(Pe)}),ie.size===0){X(S);return}setTimeout(xe,10)}K.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let rt=null;function Qn(S){rt&&rt(S)}function On(){qi.stop()}function Ed(){qi.start()}let qi=new Bp;qi.setAnimationLoop(Qn),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(S){rt=S,Me.setAnimationLoop(S),S===null?qi.stop():qi.start()},Me.addEventListener("sessionstart",On),Me.addEventListener("sessionend",Ed),this.render=function(S,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(q),q=Me.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,q,O),p=be.get(S,v.length),p.init(q),v.push(p),D.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Be.setFromProjectionMatrix(D,Pn,q.reversedDepth),b=this.localClippingEnabled,ee=ge.init(this.clippingPlanes,b),m=se.get(S,E.length),m.init(),E.push(m),Me.enabled===!0&&Me.isPresenting===!0){let xe=_.xr.getDepthSensingMesh();xe!==null&&$c(xe,q,-1/0,_.sortObjects)}$c(S,q,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(V,re),de=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,de&&De.addToRenderList(m,S),this.info.render.frame++,ee===!0&&ge.beginShadows();let ne=p.state.shadowsArray;Ie.render(ne,S,q),ee===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();let ie=m.opaque,X=m.transmissive;if(p.setupLights(),q.isArrayCamera){let xe=q.cameras;if(X.length>0)for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++){let Le=xe[Pe];Ad(ie,X,S,Le)}de&&De.render(S);for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++){let Le=xe[Pe];Td(m,S,Le,Le.viewport)}}else X.length>0&&Ad(ie,X,S,q),de&&De.render(S),Td(m,S,q);O!==null&&L===0&&(Q.updateMultisampleRenderTarget(O),Q.updateRenderTargetMipmap(O)),S.isScene===!0&&S.onAfterRender(_,S,q),Re.resetDefaultState(),w=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],ee===!0&&ge.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function $c(S,q,ne,ie){if(S.visible===!1)return;if(S.layers.test(q.layers)){if(S.isGroup)ne=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(q);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Be.intersectsSprite(S)){ie&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(D);let Pe=W.update(S),Fe=S.material;Fe.visible&&m.push(S,Pe,Fe,ne,ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Be.intersectsObject(S))){let Pe=W.update(S),Fe=S.material;if(ie&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ae.copy(Pe.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(D)),Array.isArray(Fe)){let Le=Pe.groups;for(let We=0,Xe=Le.length;We<Xe;We++){let He=Le[We],tt=Fe[He.materialIndex];tt&&tt.visible&&m.push(S,Pe,tt,ne,ae.z,He)}}else Fe.visible&&m.push(S,Pe,Fe,ne,ae.z,null)}}let xe=S.children;for(let Pe=0,Fe=xe.length;Pe<Fe;Pe++)$c(xe[Pe],q,ne,ie)}function Td(S,q,ne,ie){let X=S.opaque,xe=S.transmissive,Pe=S.transparent;p.setupLightsView(ne),ee===!0&&ge.setGlobalState(_.clippingPlanes,ne),ie&&N.viewport(U.copy(ie)),X.length>0&&oo(X,q,ne),xe.length>0&&oo(xe,q,ne),Pe.length>0&&oo(Pe,q,ne),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Ad(S,q,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new Hn(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?hr:Ln,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let xe=p.state.transmissionRenderTarget[ie.id],Pe=ie.viewport||U;xe.setSize(Pe.z*_.transmissionResolutionScale,Pe.w*_.transmissionResolutionScale);let Fe=_.getRenderTarget(),Le=_.getActiveCubeFace(),We=_.getActiveMipmapLevel();_.setRenderTarget(xe),_.getClearColor(j),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),de&&De.render(ne);let Xe=_.toneMapping;_.toneMapping=hi;let He=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),ee===!0&&ge.setGlobalState(_.clippingPlanes,ie),oo(S,ne,ie),Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe),K.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ot=0,St=q.length;ot<St;ot++){let ut=q[ot],ct=ut.object,Ge=ut.geometry,yt=ut.material,st=ut.group;if(yt.side===qn&&ct.layers.test(ie.layers)){let sn=yt.side;yt.side=Ot,yt.needsUpdate=!0,Cd(ct,ne,ie,Ge,yt,st),yt.side=sn,yt.needsUpdate=!0,tt=!0}}tt===!0&&(Q.updateMultisampleRenderTarget(xe),Q.updateRenderTargetMipmap(xe))}_.setRenderTarget(Fe,Le,We),_.setClearColor(j,Z),He!==void 0&&(ie.viewport=He),_.toneMapping=Xe}function oo(S,q,ne){let ie=q.isScene===!0?q.overrideMaterial:null;for(let X=0,xe=S.length;X<xe;X++){let Pe=S[X],Fe=Pe.object,Le=Pe.geometry,We=Pe.group,Xe=Pe.material;Xe.allowOverride===!0&&ie!==null&&(Xe=ie),Fe.layers.test(ne.layers)&&Cd(Fe,q,ne,Le,Xe,We)}}function Cd(S,q,ne,ie,X,xe){S.onBeforeRender(_,q,ne,ie,X,xe),S.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),X.onBeforeRender(_,q,ne,ie,S,xe),X.transparent===!0&&X.side===qn&&X.forceSinglePass===!1?(X.side=Ot,X.needsUpdate=!0,_.renderBufferDirect(ne,q,ie,X,S,xe),X.side=oi,X.needsUpdate=!0,_.renderBufferDirect(ne,q,ie,X,S,xe),X.side=qn):_.renderBufferDirect(ne,q,ie,X,S,xe),S.onAfterRender(_,q,ne,ie,X,xe)}function lo(S,q,ne){q.isScene!==!0&&(q=ce);let ie=te.get(S),X=p.state.lights,xe=p.state.shadowsArray,Pe=X.state.version,Fe=J.getParameters(S,X.state,xe,q,ne),Le=J.getProgramCacheKey(Fe),We=ie.programs;ie.environment=S.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(S.isMeshStandardMaterial?Se:pe).get(S.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&S.envMap===null?q.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",fe),We=new Map,ie.programs=We);let Xe=We.get(Le);if(Xe!==void 0){if(ie.currentProgram===Xe&&ie.lightsStateVersion===Pe)return Pd(S,Fe),Xe}else Fe.uniforms=J.getUniforms(S),S.onBeforeCompile(Fe,_),Xe=J.acquireProgram(Fe,Le),We.set(Le,Xe),ie.uniforms=Fe.uniforms;let He=ie.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(He.clippingPlanes=ge.uniform),Pd(S,Fe),ie.needsLights=dg(S),ie.lightsStateVersion=Pe,ie.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),ie.currentProgram=Xe,ie.uniformsList=null,Xe}function Rd(S){if(S.uniformsList===null){let q=S.currentProgram.getUniforms();S.uniformsList=mr.seqWithValue(q.seq,S.uniforms)}return S.uniformsList}function Pd(S,q){let ne=te.get(S);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}function hg(S,q,ne,ie,X){q.isScene!==!0&&(q=ce),Q.resetTextureUnits();let xe=q.fog,Pe=ie.isMeshStandardMaterial?q.environment:null,Fe=O===null?_.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ns,Le=(ie.isMeshStandardMaterial?Se:pe).get(ie.envMap||Pe),We=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Xe=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),He=!!ne.morphAttributes.position,tt=!!ne.morphAttributes.normal,ot=!!ne.morphAttributes.color,St=hi;ie.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(St=_.toneMapping);let ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ct=ut!==void 0?ut.length:0,Ge=te.get(ie),yt=p.state.lights;if(ee===!0&&(b===!0||S!==M)){let qt=S===M&&ie.id===w;ge.setState(ie,S,qt)}let st=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==yt.state.version||Ge.outputColorSpace!==Fe||X.isBatchedMesh&&Ge.batching===!1||!X.isBatchedMesh&&Ge.batching===!0||X.isBatchedMesh&&Ge.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ge.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ge.instancing===!1||!X.isInstancedMesh&&Ge.instancing===!0||X.isSkinnedMesh&&Ge.skinning===!1||!X.isSkinnedMesh&&Ge.skinning===!0||X.isInstancedMesh&&Ge.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ge.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ge.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ge.instancingMorph===!1&&X.morphTexture!==null||Ge.envMap!==Le||ie.fog===!0&&Ge.fog!==xe||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ge.numPlanes||Ge.numIntersection!==ge.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Xe||Ge.morphTargets!==He||Ge.morphNormals!==tt||Ge.morphColors!==ot||Ge.toneMapping!==St||Ge.morphTargetsCount!==ct)&&(st=!0):(st=!0,Ge.__version=ie.version);let sn=Ge.currentProgram;st===!0&&(sn=lo(ie,q,X));let Rs=!1,rn=!1,Fr=!1,vt=sn.getUniforms(),mn=Ge.uniforms;if(N.useProgram(sn.program)&&(Rs=!0,rn=!0,Fr=!0),ie.id!==w&&(w=ie.id,rn=!0),Rs||M!==S){N.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(I,"projectionMatrix",S.projectionMatrix),vt.setValue(I,"viewMatrix",S.matrixWorldInverse);let jt=vt.map.cameraPosition;jt!==void 0&&jt.setValue(I,$.setFromMatrixPosition(S.matrixWorld)),oe.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&vt.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,rn=!0,Fr=!0)}if(X.isSkinnedMesh){vt.setOptional(I,X,"bindMatrix"),vt.setOptional(I,X,"bindMatrixInverse");let qt=X.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),vt.setValue(I,"boneTexture",qt.boneTexture,Q))}X.isBatchedMesh&&(vt.setOptional(I,X,"batchingTexture"),vt.setValue(I,"batchingTexture",X._matricesTexture,Q),vt.setOptional(I,X,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",X._indirectTexture,Q),vt.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",X._colorsTexture,Q));let gn=ne.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ye.update(X,ne,sn),(rn||Ge.receiveShadow!==X.receiveShadow)&&(Ge.receiveShadow=X.receiveShadow,vt.setValue(I,"receiveShadow",X.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(mn.envMap.value=Le,mn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(mn.envMapIntensity.value=q.environmentIntensity),rn&&(vt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&ug(mn,Fr),xe&&ie.fog===!0&&he.refreshFogUniforms(mn,xe),he.refreshMaterialUniforms(mn,ie,B,P,p.state.transmissionRenderTarget[S.id]),mr.upload(I,Rd(Ge),mn,Q)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(mr.upload(I,Rd(Ge),mn,Q),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&vt.setValue(I,"center",X.center),vt.setValue(I,"modelViewMatrix",X.modelViewMatrix),vt.setValue(I,"normalMatrix",X.normalMatrix),vt.setValue(I,"modelMatrix",X.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){let qt=ie.uniformsGroups;for(let jt=0,jc=qt.length;jt<jc;jt++){let Xi=qt[jt];Je.update(Xi,sn),Je.bind(Xi,sn)}}return sn}function ug(S,q){S.ambientLightColor.needsUpdate=q,S.lightProbe.needsUpdate=q,S.directionalLights.needsUpdate=q,S.directionalLightShadows.needsUpdate=q,S.pointLights.needsUpdate=q,S.pointLightShadows.needsUpdate=q,S.spotLights.needsUpdate=q,S.spotLightShadows.needsUpdate=q,S.rectAreaLights.needsUpdate=q,S.hemisphereLights.needsUpdate=q}function dg(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(S,q,ne){let ie=te.get(S);ie.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),te.get(S.texture).__webglTexture=q,te.get(S.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ne,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,q){let ne=te.get(S);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0};let fg=I.createFramebuffer();this.setRenderTarget=function(S,q=0,ne=0){O=S,A=q,L=ne;let ie=!0,X=null,xe=!1,Pe=!1;if(S){let Le=te.get(S);if(Le.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(I.FRAMEBUFFER,null),ie=!1;else if(Le.__webglFramebuffer===void 0)Q.setupRenderTarget(S);else if(Le.__hasExternalTextures)Q.rebindTextures(S,te.get(S.texture).__webglTexture,te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let He=S.depthTexture;if(Le.__boundDepthTexture!==He){if(He!==null&&te.has(He)&&(S.width!==He.image.width||S.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(S)}}let We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);let Xe=te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?X=Xe[q][ne]:X=Xe[q],xe=!0):S.samples>0&&Q.useMultisampledRTT(S)===!1?X=te.get(S).__webglMultisampledFramebuffer:Array.isArray(Xe)?X=Xe[ne]:X=Xe,U.copy(S.viewport),G.copy(S.scissor),Y=S.scissorTest}else U.copy(le).multiplyScalar(B).floor(),G.copy(we).multiplyScalar(B).floor(),Y=Te;if(ne!==0&&(X=fg),N.bindFramebuffer(I.FRAMEBUFFER,X)&&ie&&N.drawBuffers(S,X),N.viewport(U),N.scissor(G),N.setScissorTest(Y),xe){let Le=te.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Le.__webglTexture,ne)}else if(Pe){let Le=q;for(let We=0;We<S.textures.length;We++){let Xe=te.get(S.textures[We]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+We,Xe.__webglTexture,ne,Le)}}else if(S!==null&&ne!==0){let Le=te.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Le.__webglTexture,ne)}w=-1},this.readRenderTargetPixels=function(S,q,ne,ie,X,xe,Pe,Fe=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le){N.bindFramebuffer(I.FRAMEBUFFER,Le);try{let We=S.textures[Fe],Xe=We.format,He=We.type;if(!oe.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=S.width-ie&&ne>=0&&ne<=S.height-X&&(S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(q,ne,ie,X,Oe.convert(Xe),Oe.convert(He),xe))}finally{let We=O!==null?te.get(O).__webglFramebuffer:null;N.bindFramebuffer(I.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,q,ne,ie,X,xe,Pe,Fe=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Pe!==void 0&&(Le=Le[Pe]),Le)if(q>=0&&q<=S.width-ie&&ne>=0&&ne<=S.height-X){N.bindFramebuffer(I.FRAMEBUFFER,Le);let We=S.textures[Fe],Xe=We.format,He=We.type;if(!oe.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Fe),I.readPixels(q,ne,ie,X,Oe.convert(Xe),Oe.convert(He),0);let ot=O!==null?te.get(O).__webglFramebuffer:null;N.bindFramebuffer(I.FRAMEBUFFER,ot);let St=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lp(I,St,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(tt),I.deleteSync(St),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,q=null,ne=0){let ie=Math.pow(2,-ne),X=Math.floor(S.image.width*ie),xe=Math.floor(S.image.height*ie),Pe=q!==null?q.x:0,Fe=q!==null?q.y:0;Q.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,ne,0,0,Pe,Fe,X,xe),N.unbindTexture()};let pg=I.createFramebuffer(),mg=I.createFramebuffer();this.copyTextureToTexture=function(S,q,ne=null,ie=null,X=0,xe=null){xe===null&&(X!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=X,X=0):xe=0);let Pe,Fe,Le,We,Xe,He,tt,ot,St,ut=S.isCompressedTexture?S.mipmaps[xe]:S.image;if(ne!==null)Pe=ne.max.x-ne.min.x,Fe=ne.max.y-ne.min.y,Le=ne.isBox3?ne.max.z-ne.min.z:1,We=ne.min.x,Xe=ne.min.y,He=ne.isBox3?ne.min.z:0;else{let gn=Math.pow(2,-X);Pe=Math.floor(ut.width*gn),Fe=Math.floor(ut.height*gn),S.isDataArrayTexture?Le=ut.depth:S.isData3DTexture?Le=Math.floor(ut.depth*gn):Le=1,We=0,Xe=0,He=0}ie!==null?(tt=ie.x,ot=ie.y,St=ie.z):(tt=0,ot=0,St=0);let ct=Oe.convert(q.format),Ge=Oe.convert(q.type),yt;q.isData3DTexture?(Q.setTexture3D(q,0),yt=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Q.setTexture2DArray(q,0),yt=I.TEXTURE_2D_ARRAY):(Q.setTexture2D(q,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);let st=I.getParameter(I.UNPACK_ROW_LENGTH),sn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Rs=I.getParameter(I.UNPACK_SKIP_PIXELS),rn=I.getParameter(I.UNPACK_SKIP_ROWS),Fr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,He);let vt=S.isDataArrayTexture||S.isData3DTexture,mn=q.isDataArrayTexture||q.isData3DTexture;if(S.isDepthTexture){let gn=te.get(S),qt=te.get(q),jt=te.get(gn.__renderTarget),jc=te.get(qt.__renderTarget);N.bindFramebuffer(I.READ_FRAMEBUFFER,jt.__webglFramebuffer),N.bindFramebuffer(I.DRAW_FRAMEBUFFER,jc.__webglFramebuffer);for(let Xi=0;Xi<Le;Xi++)vt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,te.get(S).__webglTexture,X,He+Xi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,te.get(q).__webglTexture,xe,St+Xi)),I.blitFramebuffer(We,Xe,Pe,Fe,tt,ot,Pe,Fe,I.DEPTH_BUFFER_BIT,I.NEAREST);N.bindFramebuffer(I.READ_FRAMEBUFFER,null),N.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||S.isRenderTargetTexture||te.has(S)){let gn=te.get(S),qt=te.get(q);N.bindFramebuffer(I.READ_FRAMEBUFFER,pg),N.bindFramebuffer(I.DRAW_FRAMEBUFFER,mg);for(let jt=0;jt<Le;jt++)vt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gn.__webglTexture,X,He+jt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gn.__webglTexture,X),mn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,qt.__webglTexture,xe,St+jt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,qt.__webglTexture,xe),X!==0?I.blitFramebuffer(We,Xe,Pe,Fe,tt,ot,Pe,Fe,I.COLOR_BUFFER_BIT,I.NEAREST):mn?I.copyTexSubImage3D(yt,xe,tt,ot,St+jt,We,Xe,Pe,Fe):I.copyTexSubImage2D(yt,xe,tt,ot,We,Xe,Pe,Fe);N.bindFramebuffer(I.READ_FRAMEBUFFER,null),N.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else mn?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(yt,xe,tt,ot,St,Pe,Fe,Le,ct,Ge,ut.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,xe,tt,ot,St,Pe,Fe,Le,ct,ut.data):I.texSubImage3D(yt,xe,tt,ot,St,Pe,Fe,Le,ct,Ge,ut):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,tt,ot,Pe,Fe,ct,Ge,ut.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,tt,ot,ut.width,ut.height,ct,ut.data):I.texSubImage2D(I.TEXTURE_2D,xe,tt,ot,Pe,Fe,ct,Ge,ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,st),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,sn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rs),I.pixelStorei(I.UNPACK_SKIP_ROWS,rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fr),xe===0&&q.generateMipmaps&&I.generateMipmap(yt),N.unbindTexture()},this.initRenderTarget=function(S){te.get(S).__webglFramebuffer===void 0&&Q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Q.setTextureCube(S,0):S.isData3DTexture?Q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Q.setTexture2DArray(S,0):Q.setTexture2D(S,0),N.unbindTexture()},this.resetState=function(){A=0,L=0,O=null,N.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});function am(n,e){let t=new Bn,i=new Bn;e.add(t),n.add(i);let s="",r=o=>{for(let l of[...o.children])l.geometry?.dispose(),l.material?.dispose(),o.remove(l)};function a(o={}){let l={...wb,...o};n.background=l.backdrop==="paper"?new $e(14604232):l.backdrop==="night"?new $e(858922):null;let c=JSON.stringify(l)+e.geometry.uuid;if(c===s)return;s=c,r(t),r(i),e.geometry.computeBoundingBox();let h=e.geometry.boundingBox,d=h.max.y,u=h.min.y;if(l.style==="pendant"){let f=e.geometry.attributes.position,g=1/0;for(let A=0;A<f.count;A++)Math.abs(f.getY(A)-d)<1e-4&&Math.abs(f.getX(A))<Math.abs(g)&&(g=f.getX(A));Number.isFinite(g)||(g=0);let y=(h.min.z+h.max.z)/2,m=d+.07,p=new Gn({color:13018206,metalness:.8,roughness:.26}),E=new pt(new Ma(.13,.035,12,48),p);E.name="pendant-ring",E.position.set(g,m,y),t.add(E);let v={cinnabar:9185309,ink:2107426,jade:5404006}[l.cord]||9185309,_=new sr([[-.03,.18,0],[-.48,.55,-.02],[-.48,.83,-.05],[0,.93,-.06],[.48,.83,-.05],[.48,.55,-.02],[.03,.18,0]].map(([A,L,O])=>new z(g+A,d+L,y+O))),C=new pt(new Sa(_,80,.022,8,!1),new Gn({color:v,roughness:.9}));C.name="pendant-cord",t.add(C)}else if(l.style==="stand"){let f=new pt(new rs(1.35,1.48,.22,80),new Gn({color:3614236,roughness:.45}));f.position.set(0,u-.25,0),i.add(f);let g=new pt(new rs(1.36,1.36,.025,80),new Gn({color:11045457,metalness:.65,roughness:.3}));g.position.set(0,u-.125,0),i.add(g);for(let y of[-.42,.42]){let m=new pt(new rs(.025,.025,.3,12),new Gn({color:11835229,metalness:.7,roughness:.3}));m.position.set(y,u-.05,0),i.add(m)}}e.userData.presentation=l}return{update:a,dispose(){r(t),r(i),e.remove(t),n.remove(i)}}}var wb,om=Ps(()=>{Ba();wb={style:"stone",backdrop:"ink",cord:"cinnabar"}});function Tb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ab(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Cb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(hm),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rb(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Li.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Li.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Nu)}function Pb(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Ib(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Nu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(hm))}function Lb(n){this.enabled!==!1&&this._handleKeyDown(n)}function Db(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Nu)}function Ub(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function Nb(n){this.enabled!==!1&&n.preventDefault()}function Fb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var lm,Nu,hm,gc,cm,Eb,Ut,Qt,lt,Uu,yc,um=Ps(()=>{Ba();lm={type:"change"},Nu={type:"start"},hm={type:"end"},gc=new is,cm=new vn,Eb=Math.cos(70*ka.DEG2RAD),Ut=new z,Qt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uu=1e-6,yc=class extends Pa{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new _n,this._lastTargetPosition=new z,this._quat=new _n().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lr,this._sphericalDelta=new lr,this._scale=1,this._panOffset=new z,this._rotateStart=new ve,this._rotateEnd=new ve,this._rotateDelta=new ve,this._panStart=new ve,this._panEnd=new ve,this._panDelta=new ve,this._dollyStart=new ve,this._dollyEnd=new ve,this._dollyDelta=new ve,this._dollyDirection=new z,this._mouse=new ve,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ab.bind(this),this._onPointerDown=Tb.bind(this),this._onPointerUp=Cb.bind(this),this._onContextMenu=Nb.bind(this),this._onMouseWheel=Ib.bind(this),this._onKeyDown=Lb.bind(this),this._onTouchStart=Db.bind(this),this._onTouchMove=Ub.bind(this),this._onMouseDown=Rb.bind(this),this._onMouseMove=Pb.bind(this),this._interceptControlDown=Fb.bind(this),this._interceptControlUp=kb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lm),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ut.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(gc.origin.copy(this.object.position),gc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(gc.direction))<Eb?this.object.lookAt(this.target):(cm.setFromNormalAndCoplanarPoint(this.object.up,this.target),gc.intersectPlane(cm,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Uu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uu||this._lastTargetPosition.distanceToSquared(this.target)>Uu?(this.dispatchEvent(lm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var dm={};yg(dm,{createAgateScene:()=>Bb});function Ob(n,e,t,i,s){let r=new Ra,a=new ve,o=new Set,l=0;function c(m,p){let E=e.getBoundingClientRect();return!E.width||!E.height||m<E.left||m>E.right||p<E.top||p>E.bottom?!1:(a.set((m-E.left)/E.width*2-1,1-(p-E.top)/E.height*2),t.updateMatrixWorld(),i.updateWorldMatrix(!0,!1),r.setFromCamera(a,t),r.intersectObject(i,!1).length>0)}e.agateHitTest=c;function h(m,p){let E=c(m,p);n.classList.toggle("stone-hover",E),e.style.cursor=o.size?"grabbing":E?"grab":"inherit"}function d(m){let p=c(m.clientX,m.clientY);m.agateStoneHit=p,s.enabled=!0,s.enableZoom=p&&!m.ctrlKey&&!m.metaKey,o.size&&m.preventDefault()}function u(m){let p=m.pointerType!=="mouse"||o.size>0||c(m.clientX,m.clientY);m.agateStoneHit=p,s.enabled=p,p&&(s.enableZoom=!0,o.add(m.pointerId),e.style.cursor="grabbing")}function f(m){m.pointerType!=="mouse"||o.size||(cancelAnimationFrame(l),l=requestAnimationFrame(()=>h(m.clientX,m.clientY)))}function g(){o.size||(n.classList.remove("stone-hover"),e.style.cursor="inherit")}function y(m){o.delete(m.pointerId)&&(o.size||queueMicrotask(()=>{s.enabled=!0,s.enableZoom=!0,h(m.clientX,m.clientY)}))}return e.addEventListener("wheel",d,{capture:!0,passive:!1}),e.addEventListener("pointerdown",u,!0),e.addEventListener("pointermove",f),e.addEventListener("pointerleave",g),window.addEventListener("pointerup",y,!0),window.addEventListener("pointercancel",y,!0),()=>{cancelAnimationFrame(l),delete e.agateHitTest,n.classList.remove("stone-hover"),e.removeEventListener("wheel",d,!0),e.removeEventListener("pointerdown",u,!0),e.removeEventListener("pointermove",f),e.removeEventListener("pointerleave",g),window.removeEventListener("pointerup",y,!0),window.removeEventListener("pointercancel",y,!0)}}function Bb(n,{hero:e=!1}={}){let t=new yr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.7)),t.setClearColor(0,0),t.outputColorSpace=It,t.toneMapping=El,t.toneMappingExposure=1.15,n.appendChild(t.domElement);let i=new Ri,s=new Ht(35,1,.1,100);s.position.set(0,.2,7);let r=new yc(s,t.domElement);r.enableDamping=!0,r.enablePan=!1,r.minDistance=4.5,r.maxDistance=9,r.autoRotate=e&&!matchMedia("(prefers-reduced-motion: reduce)").matches,r.autoRotateSpeed=.65;let a=new Ri;a.background=new $e(7827556);let o=new pt(new Ci(20,20,20),new li({color:5461834,side:Ot}));a.add(o);for(let[V,re,le,we,Te,Be,ee]of[[-4,3,2,2,5,16770749,5],[4,2,3,1,4,15331821,6],[0,5,-1,5,2,16767898,4],[0,-3,2,4,1,11957562,1]]){let b=new pt(new Vn(we,Te),new li({color:new $e(Be).multiplyScalar(ee)}));b.position.set(V,re,le),b.lookAt(0,0,0),a.add(b)}let l=new gr(t),c=l.fromScene(a,.04);i.environment=c.texture,l.dispose(),a.traverse(V=>{V.geometry?.dispose(),V.material?.dispose()});let h=new ba(1.42,120,90),d=h.attributes.position;for(let V=0;V<d.count;V++){let re=d.getX(V),le=d.getY(V),we=d.getZ(V),Te=1+.08*Math.sin(re*2.3+le*2.6)+.035*Math.sin(le*5.3-we*3.2);d.setXYZ(V,re*Te*1.12,le*Te*1.02,we*Te*.57)}h.computeVertexNormals();let u=new wa({color:15915712,roughness:.21,metalness:.02,clearcoat:1,clearcoatRoughness:.12,transmission:.17,thickness:1.5,ior:1.53,envMapIntensity:1.4}),f=!0;u.onBeforeCompile=V=>{f&&(V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMineral;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMineral=position;`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vMineral;
 float hashN(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
 float noiseN(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hashN(i),hashN(i+vec3(1,0,0)),f.x),mix(hashN(i+vec3(0,1,0)),hashN(i+vec3(1,1,0)),f.x),f.y),mix(mix(hashN(i+vec3(0,0,1)),hashN(i+vec3(1,0,1)),f.x),mix(hashN(i+vec3(0,1,1)),hashN(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbmN(vec3 p){return .55*noiseN(p)+.27*noiseN(p*2.1)+.13*noiseN(p*4.2)+.05*noiseN(p*8.4);}
 vec3 agateColor(vec3 p){vec3 q=p*1.5;float n=fbmN(q*2.4);float r=length(vec2(q.x*.90+sin(q.y*1.4)*.35,q.y*.72))+n*.53;float bands=.5+.5*sin(r*20.+fbmN(q*5.)*3.);float broad=.5+.5*sin(r*5.1+q.z*.9);vec3 red=vec3(.39,.055,.018),amber=vec3(.80,.34,.07),cream=vec3(.95,.80,.55);vec3 c=mix(red,amber,smoothstep(.08,.78,broad));c=mix(c,cream,pow(bands,15.)*.88);c=mix(c,vec3(.97,.89,.73),smoothstep(.76,.99,broad)*.7);float grain=noiseN(q*160.);return c*(.94+.1*grain);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=agateColor(vMineral);`))},u.customProgramCacheKey=()=>f?"agate-procedural-v1":"agate-texture-v1";let g=new pt(h,u);g.rotation.set(-.15,-.2,-.22),i.add(g);let y=new cs(16771272,4.2);y.position.set(-3,4,5),i.add(y);let m=new cs(13164752,1.8);m.position.set(4,1,2),i.add(m);let p=new cs(16753223,2);p.position.set(1,-1,-3),i.add(p),i.add(new Ca(13812125,.5));let E=document.createElement("canvas");E.width=256,E.height=256;let v=E.getContext("2d"),_=v.createRadialGradient(128,128,0,128,128,128);_.addColorStop(0,"rgba(0,0,0,.65)"),_.addColorStop(.5,"rgba(0,0,0,.22)"),_.addColorStop(1,"transparent"),v.fillStyle=_,v.fillRect(0,0,256,256);let C=new ss(E),A=new pt(new Vn(4.5,2),new li({map:C,transparent:!0,depthWrite:!1}));A.position.set(0,-1.7,-.6),A.rotation.x=-.5,i.add(A);let L=()=>{let V=n.getBoundingClientRect();V.width<1||V.height<1||(t.setSize(V.width,V.height),s.aspect=V.width/V.height,s.updateProjectionMatrix())},O=new ResizeObserver(L);O.observe(n),L();let w=!0,M=!1,U=()=>{!w||document.hidden||!M||n.offsetParent===null||(r.update(),t.render(i,s))},G=()=>{let V=w&&M&&!document.hidden;t.setAnimationLoop(V?U:null),n.dataset.rendering=String(V)},Y=new IntersectionObserver(V=>{M=V[0].isIntersecting,G()},{threshold:.01});Y.observe(n),document.addEventListener("visibilitychange",G);let j=null,Z=null,R=null,P=am(i,g),B=e?Ob(n,t.domElement,s,g,r):null;return{renderer:t,stone:g,controls:r,resize:L,setTexture(V,{kind:re,normalCanvas:le,polish:we=.72,light:Te="left",thickness:Be=.24,presentation:ee}={}){f=!1;let b=re+":"+Be+":"+JSON.stringify(ei(re));if(re&&b!==R){let D=ei(re),$=new rr;D.forEach(([Ne,I],ue)=>ue?$.lineTo(Ne*1.4,-I*1.4):$.moveTo(Ne*1.4,-I*1.4)),$.closePath();let ae=new xa($,{depth:Be,bevelEnabled:!0,bevelThickness:.07,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1}),ce=ae.attributes.position,de=ae.attributes.uv;for(let Ne=0;Ne<ce.count;Ne++)de.setXY(Ne,(ce.getX(Ne)/1.4+1)/2,(ce.getY(Ne)/1.4+1)/2);ae.center(),ae.computeVertexNormals(),ae.userData.kind=re,h.dispose(),h=ae,g.geometry=h,g.rotation.set(-.1,-.24,re==="leaf"?-.3:0),r.autoRotate=!1,R=b}j?.dispose(),j=new ss(V),j.colorSpace=It,j.anisotropy=t.capabilities.getMaxAnisotropy(),u.map=j,Z?.dispose(),le?(Z=new ss(le),u.normalMap=Z,u.normalScale.set(.65,.65)):u.normalMap=null,u.color.set(16777215),u.roughness=.7-we*.59,u.clearcoat=we,u.clearcoatRoughness=.32-we*.23,u.transmission=.04+we*.12,u.onBeforeCompile=()=>{},u.needsUpdate=!0,y.position.x=Te==="right"?3:-3,m.position.x=Te==="right"?-4:4,P.update(ee)},setOrientation(V){r.autoRotate=!1,r.reset(),g.rotation.set(0,V==="back"?Math.PI:V==="side"?Math.PI/2:0,0),s.position.set(0,.2,7),r.update(),t.render(i,s)},render(){r.update(),t.render(i,s)},capture(){return t.render(i,s),t.domElement.toDataURL("image/png")},setAuto(V){r.autoRotate=V},dispose(){w=!1,B?.(),t.setAnimationLoop(null),Y.disconnect(),document.removeEventListener("visibilitychange",G),O.disconnect(),r.dispose(),P.dispose(),h.dispose(),u.dispose(),c.dispose(),j?.dispose(),Z?.dispose(),C.dispose(),A.material.dispose(),A.geometry.dispose(),t.dispose(),t.domElement.remove()}}}var fm=Ps(()=>{om();pi();Ba();um()});var kr=[{id:"journey-city",title:"阜新市推出2026春季四大精品旅游线路",publisher:"阜新市人民政府网站 · 阜新日报 · 2026-04-22",url:"https://www.fuxin.gov.cn/content/2026/1065588.html",note:"核对玛瑙文化与文旅线路的公开背景。历史节庆安排未当作当前活动发布；本站三种行程为可编辑的研学构想，不是已确认的官方旅游产品。"},{id:"formation-museum",title:"Agate · 玛瑙的常见产状与材质",publisher:"史密森尼国家自然历史博物馆",url:"https://naturalhistory.si.edu/explore/collections/geogallery/10026005",note:"形成图解的入门依据：火山岩空隙、富硅水与玛瑙层纹。图解为概念模型，不是特定阜新原石的成因鉴定。"},{id:"formation-review",title:"Mineralogy, Geochemistry and Genesis of Agate—A Review",publisher:"Götze、Möckel、Pan · Minerals 2020, 10(11), 1037",url:"https://doi.org/10.3390/min10111037",note:"补充不同地质成因、二氧化硅结晶与自组织、结构和杂质分布对条带和颜色的影响；不把每一条带等同于一次进水。"},{id:"heritage",title:"阜新玛瑙雕 · 国家级非遗项目名录",publisher:"中国非物质文化遗产网",url:"https://www.ihchina.cn/project_details/14006/",note:"核对项目名称、2006年第一批名录身份、编号Ⅶ-30、材质与工艺特点。页面包含历史材料，人物年龄等动态信息未采用。"},{id:"town",title:"阜新市 · 玛瑙特色小镇景区",publisher:"辽宁省文化和旅游厅 · 2025-11-21",url:"https://whly.ln.gov.cn/whly/wlzt/sjly/ajjq/2025112116121250991/index.shtml",note:"核对十家子镇文旅场景与玛瑙体验、专业市场、八宝海湿地、辽代闾州塔等资源。"},{id:"rural",title:"“阜新玛瑙工匠”获评省级劳务品牌",publisher:"阜新市人力资源和社会保障局 · 2026-01-15",url:"https://rsj.fuxin.gov.cn/content/2026/1037027.html",note:"核对工匠工作室、研学体验、数字推广与农户参与产业链的应用背景。"}],Id=[{title:"玛瑙如何形成",keys:["形成","成因","怎么来","地质","富硅","空隙","结晶"],text:"以常见的火山岩空隙充填路径为例，富硅流体进入岩石空隙，二氧化硅在适宜条件下沉淀与结晶。结构、孔隙与杂质分布的差异可形成可见层纹。玛瑙也存在其他地质成因；不能把每一条纹都等同于一次进水，也没有适用于所有玛瑙的统一形成时长。",source:"formation-review"},{title:"国家级非遗身份",keys:["非遗","国家","名录","时候","哪年","2006","身份","级别"],text:"阜新玛瑙雕于2006年入选第一批国家级非物质文化遗产代表性项目名录，项目编号为Ⅶ-30，类别为传统美术。",source:"heritage"},{title:"材质与工艺特点",keys:["工艺","特点","材料","纹色","色彩","条带","绝活","流程","雕刻"],text:"玛瑙的天然色彩和条带为设计提供线索。官方项目资料介绍了选料、设计、雕琢与抛光等任务，并列举素活、掏膛、活环与透雕等技艺。具体作品的工序与方案需结合材料判断。",source:"heritage"},{title:"十家子镇文旅场景",keys:["十家子","旅游","乡土","哪里","位置","景区","湿地","闾州","市场"],text:"玛瑙特色小镇位于阜新蒙古族自治县十家子镇。省文旅厅介绍其玛瑙文化、专业市场以及八宝海湿地、辽代闾州塔等资源，可为文化与自然相连的研学构想提供场景。实际开放和接待需向当地确认。",source:"town"},{title:"乡村经营与参与",keys:["乡村","振兴","农户","收入","增收","经营","就业","研学","工作室"],text:"阜新市人社局公开材料提出串联工匠工作室、加工园区和非遗展示馆发展研学与体验，拓展数字推广渠道，并鼓励农户参与产业链。本原型据此设计文化学习、数字创作与到访意向流程，尚未验证实际增收。",source:"rural"}],co=[{title:"观料",subtitle:"先观察，再构思",text:"观察可见的色彩、条带与外形，寻找适合表达的视觉关系。照片能辅助观察表面信息；真实内部结构仍需要实物判断。"},{title:"构思",subtitle:"让纹色参与表达",text:"结合材料外观提出构图。在数字创作中尝试图案的尺度、位置与方向，比较不同方案与纹色的关系。"},{title:"雕琢",subtitle:"理解形与工的关系",text:"粗细雕琢与不同专项技法需要经验和工具。这里展示工艺学习的逻辑，数字预览不直接给出加工路径或安全操作指导。"},{title:"润饰",subtitle:"从形态走向完整作品",text:"抛光与配座等处理完善作品的观看与陈设效果。实际安排依作品与工坊做法而定，数字材质只用于外观体验。"}];var ho=[{id:"welcome",name:"中国玛瑙小镇会客厅",short:"会客厅",type:"文化起点",icon:"hall",x:24,y:47,image:"hero",minutes:30,tag:"认识小镇",fact:"省文旅厅景区介绍列出了中国玛瑙小镇会客厅。",intro:"先建立对小镇的整体认识，再带着问题去看作品与手艺。",observe:"找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。",prepare:"到访前核实开放与讲解安排。",source:"town"},{id:"studio",name:"工艺观察与交流",short:"手艺现场",type:"工坊场景",icon:"craft",x:45,y:68,image:"craft",minutes:60,tag:"接待需先联系",fact:"市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。",intro:"把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。",observe:"问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？",prepare:"具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。",source:"rural"},{id:"market",name:"玛瑙专业市场",short:"逛逛市集",type:"产业观察",icon:"market",x:49,y:34,image:"hero",minutes:35,tag:"认识原料与文创",fact:"省文旅厅景区介绍提到战国红大市场等专业市场。",intro:"从原料、半成品到文创，观察一块石头如何走进日常生活。",observe:"选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。",prepare:"记录材质与工艺说明，购买与定制由你与经营者自行确认。",source:"town"},{id:"water",name:"八宝海湿地景观",short:"水岸慢行",type:"自然观察",icon:"water",x:76,y:24,image:"water",minutes:40,tag:"把脚步放慢",fact:"八宝海湿地景观见于省文旅厅的小镇介绍。",intro:"暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。",observe:"在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。",prepare:"核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。",source:"town"},{id:"pagoda",name:"辽代闾州塔",short:"寻访古迹",type:"历史线索",icon:"pagoda",x:83,y:67,image:"water",minutes:25,tag:"从石纹走向乡土",fact:"辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。",intro:"在工艺之外，为这次到访保留一段理解地方历史的时间。",observe:"观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。",prepare:"出发前核实到达方式、可参观范围及文物保护要求。",source:"town"}],Or=[{id:"craft",title:"半日识艺",subtitle:"先知艺，再观工",description:"把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。",stops:["welcome","studio","market"],interest:"玛瑙文化与工艺观察"},{id:"slow",title:"一日慢游",subtitle:"手艺与乡土，都留一点时间",description:"将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。",stops:["welcome","studio","market","water","pagoda"],interest:"乡土文化与自然游览"},{id:"family",title:"亲子研学",subtitle:"带着问题，一起去发现",description:"以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。",stops:["welcome","water","studio"],interest:"亲子研学与纹色创作"}],uo=[{label:"观纹色",title:"先问这块石，有什么。",text:"看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。",question:"这块材料最值得保留的天然纹色是什么？"},{label:"看构思",title:"让材料，参与决定造型。",text:"同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。",question:"为什么选这个方向和轮廓，而不是另一个？"},{label:"识雕琢",title:"从外轮廓，走向细部层次。",text:"关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。",question:"这件作品中，最需要经验判断的是哪一步？"},{label:"赏润饰",title:"最后一点光，也关乎表达。",text:"观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。",question:"这种表面处理，怎样让纹色更容易被看见？"}],Tn=[{question:"开始构思前，最值得先做什么？",answers:["观察材料已有的天然纹色","先把所有材料想成同一种颜色","完全忽略石头，照着模板取形"],correct:0,explanation:"先观料，再构思，让天然色彩与条带成为设计的一部分。",source:"heritage"},{question:"照片最适合帮助我们观察哪一项？",answers:["原料内部所有裂隙","表面可见的颜色与纹理","真实加工后的全部结果"],correct:1,explanation:"照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。",source:"heritage"},{question:"把工艺交流加入行程后，出发前还需要做什么？",answers:["直接把本地收藏当成预约凭证","默认所有工坊都随时开放","确认接待方、时间与可参观内容"],correct:2,explanation:"本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。",source:"rural"}],Is={spring:{name:"春日寻色",icon:"芽",text:"把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。"},summer:{name:"夏日缓行",icon:"水",text:"为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。"},autumn:{name:"秋日拾光",icon:"叶",text:"从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。"},winter:{name:"冬日访艺",icon:"炉",text:"把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。"}},fo=[{id:"culture",title:"文化被看见",label:"文化理解",icon:"eye",text:"以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。",visitor:"先了解作品与材料，再决定想看什么。",organizer:"把参观前的知识准备与现场观察任务衔接起来。",maker:"让作品的构思和工艺被清楚地介绍。"},{id:"experience",title:"手艺有交流",label:"研学体验",icon:"craft",text:"把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。",visitor:"把想问的问题写进手册，提前确认接待。",organizer:"明确人数、时间、内容与组织责任，再对接工坊。",maker:"根据实际能力安排可参观、可讲解的内容。"},{id:"creation",title:"作品进日常",label:"文创连接",icon:"leaf",text:"从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。",visitor:"关注材质与工艺说明，留下自己的设计偏好。",organizer:"以学习收获组织作品讨论，避免把购物当作研学任务。",maker:"展示材料特点与制作过程，沟通定制边界。"},{id:"local",title:"乡土共参与",label:"本地协作",icon:"village",text:"工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。",visitor:"在尊重当地安排的前提下，了解更多乡土文化。",organizer:"优先核实本地接待与协作条件，逐步建立合作。",maker:"与市场、村庄及研学组织者协调实际服务。"}];var Ld={hall:"M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18",craft:"M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4",market:"M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0",water:"M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3",pagoda:"M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4",eye:"M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8",leaf:"M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5",village:"M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2"},Zc=(n,e="")=>`<svg class="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ld[n]||Ld.leaf}"/></svg>`,vg=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Dd=n=>`./assets/journey-v2/${n}.webp`,Jc=(n,e)=>{try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}},Xt=n=>ho.find(e=>e.id===n),po=n=>kr.find(e=>e.id===n),mo=(n,e,t,i)=>Number.isFinite(Number(n))?Math.round(Math.min(t,Math.max(e,Number(n)))):i;function Ud({toast:n,download:e}){let t=document.querySelector("#journey"),i=b=>t.querySelector(b),s=b=>[...t.querySelectorAll(b)],r="agate-journey-draft-v1",a="agate-journey-learning-v1",o=Jc(r,{}),l=o&&typeof o=="object"?o:{},c=new Set,h={profile:Or.some(b=>b.id===l.profile)?l.profile:"craft",stops:[],date:typeof l.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:"",people:mo(l.people,1,30,2),season:Object.hasOwn(Is,l.season)?l.season:["winter","spring","summer","autumn"][Math.floor((new Date().getMonth()+1)%12/3)],customized:l.customized===!0,planId:typeof l.planId=="string"?l.planId:null};if(Array.isArray(l.stops))for(let b of l.stops)b&&Xt(b.id)&&!c.has(b.id)&&(c.add(b.id),h.stops.push({id:b.id,minutes:mo(b.minutes,10,180,Xt(b.id).minutes)}));Array.isArray(l.stops)||(h.stops=Or[0].stops.map(b=>({id:b,minutes:Xt(b).minutes})));let d=Jc(a,{}),u=d&&typeof d=="object"?d:{},f={observed:u.observed===!0,quizDone:u.quizDone===!0,routePrepared:u.routePrepared===!0,question:typeof u.question=="string"?u.question.slice(0,120):"",questionSaved:u.questionSaved===!0,checks:{}};for(let b of["open","reception","content","travel"])f.checks[b]=u.checks?.[b]===!0;let g="welcome",y=0,m=0,p=Array(Tn.length).fill(null),E=0,v="visitor";function _(b,D){try{return localStorage.setItem(b,JSON.stringify(D)),!0}catch{return!1}}function C(){_(r,h),_(a,f)}function A(b){i("#journey-plan-status").textContent=b}let L=()=>Or.find(b=>b.id===h.profile),O=()=>L().title+(h.customized?" · 自选调整":""),w=()=>h.stops.reduce((b,D)=>b+D.minutes,0),M=()=>[f.observed,f.quizDone,f.routePrepared&&h.stops.length>0,f.questionSaved&&f.question.trim().length>0];function U(){return`<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([b,D])=>`<path d="M${b} ${D-15}l-9 23h18Z"/><path d="M${b} ${D+8}v9"/>`).join("")}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+ho.map(b=>`<button class="journey-map-node" data-place="${b.id}" style="--node-x:${b.x}%;--node-y:${b.y}%" aria-pressed="${b.id===g}" aria-label="探索${b.name}">${Zc(b.icon)}<span>${b.short}</span><b class="journey-node-order"></b></button>`).join("")}i("#journey-map").innerHTML=U();function G(){s("[data-place]").forEach(b=>{let D=h.stops.findIndex($=>$.id===b.dataset.place);b.classList.toggle("in-plan",D>=0),b.setAttribute("aria-pressed",String(b.dataset.place===g)),b.querySelector(".journey-node-order").textContent=D>=0?D+1:""}),i("#journey-map-route").setAttribute("d",h.stops.map((b,D)=>{let $=Xt(b.id);return`${D?"L":"M"}${$.x*9},${$.y*5.5}`}).join(" "))}function Y(b){let D=Xt(b);if(!D)return;g=b;let $=po(D.source),ae=h.stops.some(ce=>ce.id===b);i("#journey-place-detail").innerHTML=`<div class="journey-detail-image"><img src="${Dd(D.image)}" width="600" height="337" loading="lazy" alt="AI${D.image==="craft"?"手艺":D.image==="water"?"乡野水岸":"玛瑙文旅"}情境示意，非${vg(D.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${D.type} / ${D.tag}</p><h3>${D.name}</h3><p>${D.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${D.observe}</p></div><p class="journey-place-prepare">${D.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${ae?"disabled":""}>${ae?"已在我的行程 ✓":"加入我的行程 ＋"}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${D.fact}</p><a href="${$.url}" target="_blank" rel="noopener">${$.publisher} ↗</a></details></div>`,i("#journey-add-this").onclick=()=>R(b),G()}s("[data-place]").forEach(b=>b.onclick=()=>Y(b.dataset.place));function j(){i("#journey-presets").innerHTML=Or.map((b,D)=>`<button data-journey-preset="${b.id}" aria-pressed="${b.id===h.profile}"><span class="journey-preset-index">0${D+1}</span><span><strong>${b.title}</strong><small>${b.subtitle}</small></span><b>↗</b></button>`).join(""),s("[data-journey-preset]").forEach(b=>b.onclick=()=>{h.profile=b.dataset.journeyPreset,h.stops=L().stops.map(D=>({id:D,minutes:Xt(D).minutes})),h.customized=!1,f.routePrepared=!0,Z("已按这份灵感整理路线，可继续增减与调整。"),j()})}function Z(b="行程草稿已更新。"){P(),Y(g),le(),C(),A(b)}function R(b){!Xt(b)||h.stops.some(D=>D.id===b)||(h.stops.push({id:b,minutes:Xt(b).minutes}),h.customized=!0,f.routePrepared=!0,Z(`已将“${Xt(b).short}”加入行程。`))}function P(){i("#journey-route-title").textContent=O(),i("#journey-route-description").textContent=L().description,i("#journey-stop-total").textContent=`${h.stops.length} 站`,i("#journey-route-list").innerHTML=h.stops.length?h.stops.map((b,D)=>{let $=Xt(b.id),ae=[10,20,25,30,35,40,45,60,90,120,180,b.minutes].sort((ce,de)=>ce-de).filter((ce,de,Ne)=>Ne.indexOf(ce)===de);return`<article class="journey-route-item"><span class="journey-route-number">0${D+1}</span><div class="journey-route-item-copy"><span>${$.type}</span><h4>${$.name}</h4><p>${$.observe}</p><label>现场停留 <select data-route-minutes="${$.id}" aria-label="${$.name}现场停留分钟">${ae.map(ce=>`<option value="${ce}" ${ce===b.minutes?"selected":""}>${ce} 分钟</option>`).join("")}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${$.id}" data-direction="-1" aria-label="上移${$.name}" ${D===0?"disabled":""}>↑</button><button data-route-move="${$.id}" data-direction="1" aria-label="下移${$.name}" ${D===h.stops.length-1?"disabled":""}>↓</button><button data-route-remove="${$.id}" aria-label="移除${$.name}">×</button></div></article>`}).join(""):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>',i("#journey-add-stops").innerHTML=ho.map(b=>{let D=h.stops.some($=>$.id===b.id);return`<button data-route-add="${b.id}" ${D?"disabled":""}>${Zc(b.icon)}${b.short}<span>${D?"✓":"＋"}</span></button>`}).join(""),s("[data-route-add]").forEach(b=>b.onclick=()=>R(b.dataset.routeAdd)),s("[data-route-remove]").forEach(b=>b.onclick=()=>{h.stops=h.stops.filter(D=>D.id!==b.dataset.routeRemove),h.customized=!0,Z("已移除一站，可随时重新加入。")}),s("[data-route-move]").forEach(b=>b.onclick=()=>{let D=h.stops.findIndex(ae=>ae.id===b.dataset.routeMove),$=D+Number(b.dataset.direction);$<0||$>=h.stops.length||([h.stops[D],h.stops[$]]=[h.stops[$],h.stops[D]],h.customized=!0,Z("已调整路线顺序。"),i(`[data-route-move="${b.dataset.routeMove}"][data-direction="${b.dataset.direction}"]`)?.focus({preventScroll:!0}))}),s("[data-route-minutes]").forEach(b=>b.onchange=()=>{let D=h.stops.find($=>$.id===b.dataset.routeMinutes);D&&(D.minutes=mo(b.value,10,180,D.minutes)),h.customized=!0,Z("已更新现场停留安排。")}),i("#journey-total-minutes").textContent=w(),i("#journey-summary-people").textContent=`${h.people} 人同行`,i("#journey-summary-date").textContent=h.date||"日期待定";for(let b of["#plan-trip","#journey-export","#journey-copy"])i(b).disabled=!h.stops.length;i("#plan-trip").innerHTML=h.planId?"更新我的行程 <span>✓</span>":"保存到我的作品 <span>＋</span>",G()}i("#journey-date").value=h.date,i("#journey-people").value=h.people,i("#journey-date").onchange=b=>{h.date=b.target.value,C(),P()},i("#journey-people").onchange=b=>{h.people=mo(b.target.value,1,30,2),b.target.value=h.people,C(),P()};function B(){let b=Is[h.season];i("#journey-season-note").innerHTML=`<span>${b.icon}</span><div><strong>${b.name}</strong><p>${b.text}</p></div>`,s("[data-journey-season]").forEach(D=>D.setAttribute("aria-pressed",String(D.dataset.journeySeason===h.season)))}s("[data-journey-season]").forEach(b=>b.onclick=()=>{h.season=b.dataset.journeySeason,B(),C()});function V(){return["石里有境 · 十家子研学构想",O(),`日期：${h.date||"待定"} / 同行：${h.people} 人`,`现场观察安排：${w()} 分钟（不含交通、用餐与等候）`,"",...h.stops.map((b,D)=>`${D+1}. ${Xt(b.id).name} · ${b.minutes} 分钟
   观察：${Xt(b.id).observe}`),"",f.question.trim()?`想问工匠：${f.question.trim()}`:"",`季节灵感：${Is[h.season].name}`,`线上准备：${M().filter(Boolean).length} / 4`,"","这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。",`小镇资料：${po("town").url}`,`工艺与研学资料：${po("rural").url}`].filter(b=>b!==null).join(`
`)}i("#plan-trip").onclick=()=>{if(!h.stops.length)return;let b=Jc("agate-plans-v1",[]),D=Array.isArray(b)?b:[],$=h.planId||crypto.randomUUID(),ae=D.findIndex(de=>de?.id===$),ce={id:$,version:2,date:h.date||"日期待定",interest:L().interest,note:`${O()} · ${h.people}人
${h.stops.map(de=>Xt(de.id).name).join(" → ")}
现场观察 ${w()} 分钟，不含交通与用餐。${f.question.trim()?`
想问工匠：`+f.question.trim():""}`,route:h.stops.map(de=>({...de,name:Xt(de.id).name})),people:h.people,season:h.season,question:f.question.trim(),updatedAt:new Date().toISOString()};if(ae>=0?D[ae]=ce:D.unshift(ce),!_("agate-plans-v1",D.slice(0,50))){n("浏览器未能保存，请先导出研学手册。");return}h.planId=$,f.routePrepared=!0,Z("行程已保存，可在“我的作品”查看。"),n("已保存研学行程，尚未产生预约。")},i("#journey-copy").onclick=async()=>{let b=V();try{await navigator.clipboard.writeText(b),n("行程文字已复制。")}catch{e(new Blob([b],{type:"text/plain;charset=utf-8"}),"十家子研学行程.txt"),n("已导出行程文字。")}};function re(b){y=b;let D=uo[b];i("#craft-detail").innerHTML=`<p class="eyebrow">OBSERVATION / 0${b+1}</p><h3>${D.title}</h3><p>${D.text}</p>`,i("#journey-craft-question").textContent=D.question,s("[data-journey-craft]").forEach($=>$.setAttribute("aria-pressed",String(Number($.dataset.journeyCraft)===b)))}i("#craft-tabs").innerHTML=uo.map((b,D)=>`<button data-journey-craft="${D}" aria-pressed="${D===0}"><b>0${D+1}</b>${b.label}</button>`).join(""),s("[data-journey-craft]").forEach(b=>b.onclick=()=>re(Number(b.dataset.journeyCraft))),i("#journey-record-observation").onclick=()=>{f.observed=!f.observed,f.observed&&!f.question.trim()&&(i("#journey-question").placeholder=uo[y].question),C(),le(),n(f.observed?"已把这条观察收进线上研学准备。":"已取消这项观察记录。")};function le(){let b=M(),D=b.filter(Boolean).length;i("#journey-passport-count").innerHTML=`${D}<small>/ 4</small>`,i("#journey-passport-circle").style.strokeDashoffset=String(2*Math.PI*51*(1-D/4));let $=[["观纹","记录一条手艺观察","journey-craft"],["识艺","完成一轮工艺问答","journey-passport"],["入乡","整理自己的行程","journey-plan"],["问艺","留一个想问的问题","journey-passport"]];i("#journey-passport-tasks").innerHTML=$.map(([ae,ce,de],Ne)=>`<button data-task-target="${de}" data-task-index="${Ne}" class="${b[Ne]?"complete":""}"><span>${ae}</span><div><strong>${ce}</strong><small>${b[Ne]?"已收进线上准备":"等你来发现"}</small></div><b>${b[Ne]?"✓":"↗"}</b></button>`).join(""),s("[data-task-target]").forEach(ae=>ae.onclick=()=>{Be(ae.dataset.taskTarget),ae.dataset.taskIndex==="3"&&i("#journey-question").focus({preventScroll:!0})}),i("#journey-record-observation").setAttribute("aria-pressed",String(f.observed)),i("#journey-record-observation").textContent=f.observed?"这条观察已记录 ✓":"记下这条观察 ＋"}function we(){if(i("#journey-quiz-count").textContent=m<Tn.length?`${m+1} / ${Tn.length}`:"本轮已完成",m===Tn.length){let ae=p.filter((ce,de)=>ce===Tn[de].correct).length;i("#journey-quiz").innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${ae} / ${Tn.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`,i("#journey-quiz-restart").onclick=()=>{m=0,p=Array(Tn.length).fill(null),we()};return}let b=Tn[m],D=p[m]!==null,$=po(b.source);i("#journey-quiz").innerHTML=`<h3>${b.question}</h3><div class="journey-quiz-answers">${b.answers.map((ae,ce)=>`<button data-quiz-answer="${ce}" class="${D&&ce===b.correct?"correct":D&&ce===p[m]?"chosen":""}" ${D?"disabled":""}><span>${String.fromCharCode(65+ce)}</span>${ae}${D&&ce===b.correct?"<b>✓</b>":""}</button>`).join("")}</div>${D?`<div class="journey-quiz-feedback"><strong>${p[m]===b.correct?"你抓住了关键。":"再看一眼这个线索。"}</strong><p>${b.explanation}</p><a href="${$.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${m===Tn.length-1?"收进手册":"下一题"} →</button></div>`:""}`,s("[data-quiz-answer]").forEach(ae=>ae.onclick=()=>{p[m]=Number(ae.dataset.quizAnswer),we()}),D&&(i("#journey-quiz-next").onclick=()=>{m++,m===Tn.length&&(f.quizDone=!0,C(),le()),we()})}i("#journey-question").value=f.question,i("#journey-question-length").textContent=[...f.question].length,i("#journey-question").oninput=b=>{f.question=b.target.value.slice(0,120),f.questionSaved=!1,i("#journey-question-length").textContent=[...f.question].length,C(),le()},i("#journey-question-save").onclick=()=>{if(!f.question.trim()){n("先写下一个想了解的问题。"),i("#journey-question").focus();return}f.questionSaved=!0,C(),le(),n("问题已收进手册，也会随行程导出。")},s("[data-journey-check]").forEach(b=>{b.checked=f.checks[b.dataset.journeyCheck],b.onchange=()=>{f.checks[b.dataset.journeyCheck]=b.checked,C()}});function Te(){i("#journey-connections").innerHTML=fo.map((D,$)=>`<button data-connection="${$}" aria-pressed="${$===E}">${Zc(D.icon)}<span><small>0${$+1} / ${D.label}</small><strong>${D.title}</strong></span><b>→</b></button>`).join(""),s("[data-connection]").forEach(D=>D.onclick=()=>{E=Number(D.dataset.connection),Te()});let b=fo[E];i("#journey-connection-label").textContent=b.label,i("#journey-connection-title").textContent=b.title,i("#journey-connection-copy").textContent=b.text,i("#journey-role-copy").textContent=b[v]}s("[data-journey-role]").forEach(b=>b.onclick=()=>{v=b.dataset.journeyRole,s("[data-journey-role]").forEach(D=>D.setAttribute("aria-pressed",String(D===b))),i("#journey-role-copy").textContent=fo[E][v]});function Be(b){document.getElementById(b)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"})}if(s("[data-journey-scroll]").forEach(b=>b.onclick=()=>Be(b.dataset.journeyScroll)),"IntersectionObserver"in window){let b=new IntersectionObserver(D=>{for(let $ of D)$.isIntersecting&&s(".journey-subnav [data-journey-scroll]").forEach(ae=>ae.classList.toggle("active",ae.dataset.journeyScroll===$.target.id))},{rootMargin:"-70px 0px -55% 0px",threshold:0});if(s(".journey-chapter").forEach(D=>b.observe(D)),!matchMedia("(prefers-reduced-motion: reduce)").matches){t.classList.add("journey-anim-ready");let D=new IntersectionObserver($=>{for(let ae of $)ae.isIntersecting&&(ae.target.classList.add("revealed"),D.unobserve(ae.target))},{threshold:.06});s("[data-journey-reveal]").forEach($=>D.observe($))}}async function ee(){if(!h.stops.length)return;let b=i("#journey-export");b.disabled=!0;let D=b.textContent;b.textContent="正在整理手册…";try{let oe=function(Se,T,x,W,J,he,se="#6c5842"){de.font=ue(J),de.fillStyle=se;let be="",ge=x;for(let Ie of[...Se])de.measureText(be+Ie).width>W&&be?(de.fillText(be,T,ge),be=Ie,ge+=he):be+=Ie;return be&&de.fillText(be,T,ge),ge+he};f.routePrepared=!0,C(),le(),await document.fonts.ready;let $=new Image;$.src=Dd("hero");let ae=!0;try{await $.decode()}catch{ae=!1}let ce=document.createElement("canvas");ce.width=1200,ce.height=1180+h.stops.length*155+(f.question.trim()?150:0);let de=ce.getContext("2d"),Ne=ce.width,I=ce.height,ue=(Se,T=400)=>`${T} ${Se}px "Microsoft YaHei","PingFang SC",sans-serif`,K=(Se,T,x,W,J="#382b21",he=400)=>{de.fillStyle=J,de.font=ue(W,he),de.fillText(Se,T,x)};if(de.fillStyle="#f1e7d4",de.fillRect(0,0,Ne,I),de.fillStyle="#281b11",de.fillRect(0,0,Ne,390),ae){let Se=$.width,T=$.height,x=Math.max(Ne/Se,390/T);de.save(),de.beginPath(),de.rect(0,0,Ne,390),de.clip(),de.drawImage($,(Ne-Se*x)/2,(390-T*x)/2,Se*x,T*x),de.restore()}let N=de.createLinearGradient(0,0,Ne,0);N.addColorStop(0,"#171009ed"),N.addColorStop(.8,"#17100920"),de.fillStyle=N,de.fillRect(0,0,Ne,390),K("石里有境 / FIELD PASSPORT",65,79,20,"#d5b580"),K("循艺入乡",65,160,58,"#f3e2c2"),K("我的十家子研学手册",68,216,28,"#e0c6a0"),K(O(),68,295,24,"#d6b078"),K("AI 文旅情境示意",960,367,14,"#f4debb"),K("日期  "+(h.date||"待定"),65,458,22),K("同行  "+h.people+" 人",500,458,22),K("线上准备  "+M().filter(Boolean).length+" / 4",835,458,22),de.strokeStyle="#b29b762f",de.lineWidth=2,de.beginPath(),de.moveTo(65,491),de.lineTo(1135,491),de.stroke(),K("把好奇，串成自己的路线。",65,551,33,"#46321f"),K("现场观察 "+w()+" 分钟 · 不含交通、用餐与等候",65,596,19,"#8a7151");let F=667;for(let Se=0;Se<h.stops.length;Se++){let T=h.stops[Se],x=Xt(T.id);de.fillStyle="#dcc59f",de.beginPath(),de.arc(91,F+8,26,0,Math.PI*2),de.fill(),K(String(Se+1).padStart(2,"0"),73,F+17,24,"#604321"),Se<h.stops.length-1&&(de.strokeStyle="#c7ab7e",de.beginPath(),de.moveTo(91,F+41),de.lineTo(91,F+123),de.stroke()),K(x.name,145,F+13,28,"#3b2d20"),K(T.minutes+" 分钟",975,F+13,21,"#90704a"),oe(x.observe,145,F+56,920,20,32),F+=155}f.question.trim()&&(de.fillStyle="#e5d6bb",de.fillRect(65,F-8,1070,142),K("如果遇见工匠，我想问",89,F+28,18,"#937346"),oe(f.question.trim(),89,F+68,1018,22,32,"#513c26"),F+=175),K(Is[h.season].name+" · 带着颜色去发现",65,F+35,24,"#61492e"),oe(Is[h.season].text,65,F+78,1070,19,30),F+=165;let te={open:"开放与时间",reception:"人数与接待",content:"讲解与体验",travel:"费用与交通"};K("出发前的确认清单",65,F,23,"#60462b");let Q=65;for(let[Se,T]of Object.entries(te))K((f.checks[Se]?"☑ ":"□ ")+T,Q,F+43,17,"#8c7456"),Q+=274;de.strokeStyle="#b29b7650",de.beginPath(),de.moveTo(65,I-173),de.lineTo(1135,I-173),de.stroke(),oe("公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。",65,I-129,1070,16,26,"#917d60"),K("资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局",65,I-67,15,"#917d60"),K("carpedimez.github.io/fuxin-agate-studio/#journey",65,I-34,15,"#917d60");let pe=await new Promise(Se=>ce.toBlob(Se,"image/png"));if(!pe)throw Error("export");e(pe,"十家子研学手册.png"),f.routePrepared=!0,C(),le(),n("研学手册已导出，路线与问题都在里面。")}catch{n("暂未能生成图片，可先复制行程文字。")}finally{b.disabled=!h.stops.length,b.textContent=D}}return i("#journey-export").onclick=ee,Y(g),j(),P(),B(),re(0),we(),le(),Te(),{exportPass:ee,addStop:R,selectPlace:Y}}pi();function mi(n,e){let t=ei(e);n.beginPath(),t.forEach(([i,s],r)=>r?n.lineTo(i,s):n.moveTo(i,s)),n.closePath()}function Mg(n,e,t,i){let s=n.angle*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=i/(2*n.scale);return[o*r/e,-o*a/e,o*a/t,o*r/t,i/2-o*(r*n.x+a*n.y),i/2-o*(-a*n.x+r*n.y)]}function gi(n,{size:e=768,grooves:t=!0}={}){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");return s.fillStyle="#9b6036",s.fillRect(0,0,e,e),n.image&&(s.save(),s.setTransform(...Mg(n.pose,n.image.width,n.image.height,e)),s.drawImage(n.image,0,0),s.restore()),t&&(Sg(s,n.strokes||[],e,n.polish??.7),kd(s,n.inscription,e)),i}function vo(n,e,t){if(e.length){n.beginPath(),n.moveTo((e[0][0]+1)*t/2,(e[0][1]+1)*t/2),e.length===1&&n.lineTo((e[0][0]+1)*t/2+.01,(e[0][1]+1)*t/2);for(let i=1;i<e.length;i++)n.lineTo((e[i][0]+1)*t/2,(e[i][1]+1)*t/2)}}function Sg(n,e,t,i=.7){n.save(),n.lineCap="round",n.lineJoin="round";for(let s of e){let r=s.width*t/2;n.save(),n.translate(r*.2,r*.28),vo(n,s.points,t),n.strokeStyle=`rgba(255,239,202,${.55+i*.25})`,n.lineWidth=r*1.55,n.stroke(),n.restore(),vo(n,s.points,t),n.strokeStyle=`rgba(48,22,11,${.25+(s.depth??.6)*.7})`,n.lineWidth=r,n.stroke(),n.save(),n.translate(-r*.1,-r*.12),vo(n,s.points,t),n.strokeStyle="rgba(100,53,29,.58)",n.lineWidth=r*.35,n.stroke(),n.restore()}n.restore()}function kd(n,e,t,{height:i=!1}={}){if(!e?.text)return;let s=e,r=s.size*t/2;n.save(),n.translate((s.x+1)*t/2,(s.y+1)*t/2),n.rotate(s.angle*Math.PI/180),n.font=`${r}px ${s.font==="sans"?"Microsoft YaHei,sans-serif":"SimSun,serif"}`,n.textAlign="center",n.textBaseline="middle";let a=s.vertical?Array.from(s.text):[s.text];for(let o=0;o<a.length;o++){let l=s.vertical?(o-(a.length-1)/2)*r*1.15:0;i||(n.fillStyle="rgba(255,235,195,.8)",n.fillText(a[o],1.2,l+1.5)),n.fillStyle=i?"#555":"#4a2617",n.fillText(a[o],0,l)}n.restore()}function _o(n,e=384,t=null){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,e,e),s.lineCap="round",s.lineJoin="round";for(let c of n)vo(s,c.points,e),s.strokeStyle=`rgb(${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)})`,s.lineWidth=c.width*e/2,s.stroke();kd(s,t,e,{height:!0});let r=s.getImageData(0,0,e,e).data,a=document.createElement("canvas");a.width=a.height=e;let o=a.getContext("2d"),l=o.createImageData(e,e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let d=(p,E)=>r[(_t(E,0,e-1)*e+_t(p,0,e-1))*4]/255,u=(d(h-1,c)-d(h+1,c))*1.8,f=(d(h,c-1)-d(h,c+1))*1.8,g=1,y=Math.hypot(u,f,g),m=(c*e+h)*4;l.data[m]=(u/y*.5+.5)*255,l.data[m+1]=(f/y*.5+.5)*255,l.data[m+2]=(g/y*.5+.5)*255,l.data[m+3]=255}return o.putImageData(l,0,0),a}function Hr(n,e,t){let i=ei(n),s=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){let o=i[r],l=i[a];o[1]>t!=l[1]>t&&e<(l[0]-o[0])*(t-o[1])/(l[1]-o[1])+o[0]&&(s=!s)}return s}function Zt(n,e,t,i,{texture:s,compare:r=100,padding:a=.18,background:o=!0,cursor:l=null}={}){if(o){n.clearRect(0,0,e,t),n.fillStyle="#eee2cd",n.fillRect(0,0,e,t);let p=n.createRadialGradient(e*.5,t*.45,0,e*.5,t*.5,e*.55);p.addColorStop(0,"#c69a6520"),p.addColorStop(1,"#eee2cd00"),n.fillStyle=p,n.fillRect(0,0,e,t)}s=s||gi(i);let c=Math.min(e*(1-a*2),t*(1-a*2)),h=e/2,d=t/2+t*.02,u=c/2,f={x:h-u,y:d-u,w:c,h:c};r<100&&(n.save(),n.beginPath(),n.rect(0,0,e*(1-r/100),t),n.clip(),n.globalAlpha=.85,n.drawImage(gi(i,{grooves:!1,size:512}),f.x,f.y,c,c),n.restore()),n.save(),n.beginPath(),n.rect(e*(1-r/100),0,e,t),n.clip(),n.save(),n.translate(h,d+9),n.scale(u,u),mi(n,i.kind),n.shadowColor="#66432933",n.shadowBlur=30/u,n.fillStyle="#ad845c",n.fill(),n.restore(),n.save(),n.translate(h,d),n.scale(u,u),mi(n,i.kind),n.clip(),n.drawImage(s,-1,-1,2,2);let g=i.light==="right"?1:-1,y=i.polish??.7,m=n.createLinearGradient(g<0?-1:1,-1,g<0?1:-1,1);if(m.addColorStop(0,`rgba(255,243,210,${.18+y*.13})`),m.addColorStop(.38,"rgba(255,240,204,0)"),m.addColorStop(1,"rgba(29,11,3,.34)"),n.fillStyle=m,n.fillRect(-1,-1,2,2),mi(n,i.kind),n.lineWidth=.065,n.strokeStyle="#f3d19a77",n.stroke(),mi(n,i.kind),n.lineWidth=.018,n.strokeStyle="#fff2cb9a",n.stroke(),y>.15){n.save(),n.rotate(-.65*g);let p=n.createLinearGradient(-.5,0,.5,0);p.addColorStop(0,"#fff0"),p.addColorStop(.45,`rgba(255,255,238,${y*.23})`),p.addColorStop(.52,`rgba(255,255,238,${y*.35})`),p.addColorStop(.64,"#fff0"),n.fillStyle=p,n.fillRect(-1.5,-1.5,3,3),n.restore()}if(n.restore(),n.restore(),r<100){let p=e*(1-r/100);n.strokeStyle="#e6c794",n.lineWidth=1,n.beginPath(),n.moveTo(p,80),n.lineTo(p,t-60),n.stroke(),n.fillStyle="#e6c794",n.beginPath(),n.arc(p,t/2,13,0,Math.PI*2),n.fill(),n.fillStyle="#152016",n.font="12px sans-serif",n.textAlign="center",n.fillText("↔",p,t/2+4),n.textAlign="left"}if(l&&i.step===2){let p=h+l.x*u,E=d+l.y*u;n.strokeStyle="#ffe0a8",n.lineWidth=1,n.beginPath(),n.arc(p,E,Math.max(5,i.toolWidth*u/2),0,Math.PI*2),n.stroke()}return f}function Qc(n,e=.018){let t=[],i=s=>t.push({width:e,points:s});if(n==="leaf"){i([[-.8,0],[.82,0]]);for(let s=0;s<5;s++){let r=-.6+s*.25;i([[r,0],[r+.22,-.3*(1-Math.abs(r))-.08]]),i([[r,0],[r+.22,.28*(1-Math.abs(r))+.07]])}}else if(n==="fruit"){for(let s of[-1,1]){let r=[];for(let a=0;a<=30;a++){let o=-.58+a/30*1.22;r.push([s*(.16+.15*Math.sin(a/30*Math.PI)),o])}i(r)}i([[-.28,-.6],[0,-.7],[.28,-.6]])}else{i([[-.8,.49],[-.25,-.41],[.03,.04]]),i([[.18,.23],[.47,-.57],[.8,.49]]);for(let s=0;s<3;s++)i([[-.62,.38+s*.07],[.65,.38+s*.07]])}return t}pi();var Od=new WeakMap;function Yi(n){if(!n.image||n.sample==="procedural"||n.displayRemoveBackground===!1||!n.analysis?.foreground)return n.image;let e=Od.get(n.analysis);if(e?.image===n.image)return e.canvas;let t=n.image,i=Math.min(1,1200/Math.max(t.width,t.height)),s=document.createElement("canvas");s.width=Math.round(t.width*i),s.height=Math.round(t.height*i);let r=s.getContext("2d");r.drawImage(t,0,0,s.width,s.height);let a=n.analysis,o=document.createElement("canvas");o.width=a.width,o.height=a.height;let l=o.getContext("2d"),c=l.createImageData(a.width,a.height);for(let h=0;h<a.foreground.length;h++)c.data[h*4+3]=a.foreground[h]?255:0;return l.putImageData(c,0,0),r.globalCompositeOperation="destination-in",r.imageSmoothingEnabled=!0,r.drawImage(o,0,0,s.width,s.height),r.globalCompositeOperation="source-over",Od.set(a,{image:t,canvas:s}),s}var Bd=[{word:`先观
纹色`,title:"选一块喜欢的石",action:"点击左侧原料，观察它的天然条带。",tips:["可以换一块原料，或导入自己的照片。","选好后，点击下方“开始构形”。"],tools:["inspiration"]},{word:`选色
构形`,title:"把喜欢的纹色放进外形里",action:"拖动轮廓挑选纹理；也可在左侧选颜色，再点“自动寻找所选颜色”。",tips:["左侧选择外形；滚轮调整大小，Shift＋滚轮旋转。","系统只调整取形位置，保留原石本来的颜色。"],tools:["comparison"]},{word:`落笔
成艺`,title:"在作品上留下一笔",action:"直接在作品上按住并拖动，刻出自己的线条。",tips:["先用“添一组筋线”试试，也可添加纹样、落款。","画布上方可切换擦线；支持撤销与重做。"],tools:["patterns","lettering"]},{word:`予石
以光`,title:"给它一点光，准备入展",action:"拖动作品查看侧面，调整光泽、厚度与搭配。",tips:["在左侧为作品起名，尝试挂件或展台。","完成后进入作品展厅，赏玩、回看并带走成果。"],tools:["styling"]}],Vr=n=>n==="bands"?"原料：Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg · 衍生图 CC BY-SA 2.5":n==="nodule"?"原料：James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"原料：用户导入图片":"原料：程序化教学样本",zd=n=>n==="bands"?[["原始照片与作者","https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"],["图片及衍生图许可 CC BY-SA 2.5","https://creativecommons.org/licenses/by-sa/2.5/"]]:n==="nodule"?[["原始照片与作者","https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"],["图片许可 CC BY 2.0","https://creativecommons.org/licenses/by/2.0/"]]:[],Gr=(n,e)=>Object.assign(document.createElement("canvas"),{width:n,height:e}),Hd=async n=>{let e=new Image;return e.src=n,await e.decode(),e},wg=()=>new Promise(n=>requestAnimationFrame(n)),xo=n=>(n||"我的玛瑙作品").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"").slice(0,60)||"我的玛瑙作品";function Vd(n){let{$:e,$$:t,state:i,experience:s,toast:r,download:a}=n,o=e("#studio");o.classList.add("workbench"),e("#studio .page-heading").prepend(e("#studio>.module-guide-back"));let l=e("#studio .material-panel"),c=e("#studio .design-panel"),h=e(".shape-controls"),d=e(".engrave-controls"),u=e(".finish-controls");l.append(h,d,u);let f=document.createElement("details");f.className="work-advanced",f.innerHTML="<summary>精细调整选色范围</summary>";let g=e(".color-picker");for(let N of[g.querySelector(".check"),e("#reanalyze"),e(".brush-tools"),e("#reset-mask"),e("#analysis-status"),e("#pick-color")])f.append(N);g.querySelectorAll(":scope>.hint").forEach(N=>N.remove()),g.querySelector(".panel-heading h2").textContent="选择想保留的颜色",g.querySelector(".panel-heading").after(Object.assign(document.createElement("p"),{className:"work-color-help",textContent:"选一个色块，自动寻找取形位置。只移动轮廓，保留原石本色。"})),g.append(Object.assign(document.createElement("p"),{id:"work-color-state",className:"work-color-state"}),e("#optimize")),e("#motif").after(g),h.append(f),e("#optimize").innerHTML="自动寻找所选颜色 <span>↗</span>",e("#optimize").title="自动调整轮廓位置，尽量保留所选颜色，不改变原料本色";let y=e("#lock-scale").closest("label");f.prepend(y);for(let N of e("#motif").options)N.textContent={fruit:"果实形",leaf:"叶片形",mountain:"山峰形",drop:"水滴形",round:"圆牌形",heart:"心形",custom:"我的手绘轮廓"}[N.value]||N.textContent;let m=e('.craft-stepper button[data-craft-step="1"] span');m.firstChild.textContent="选色构形",e(".shape-controls .panel-heading h2").textContent="选择外形与取色位置",e(".shape-controls>.hint").textContent="拖动轮廓挑选纹理，右下角会实时显示取形效果。";let p=document.createElement("details");p.className="work-advanced",p.innerHTML="<summary>更多笔触：直线、镜像与深浅</summary>";let E=e(".engrave-controls .feature-group");E.before(e("#preset-lines"),p),p.append(E),e(".engrave-controls .step-description").textContent="在作品上按住拖动即可刻线。也可先添筋线，或用上方工具添加纹样与文字。";let v=document.createElement("details");v.className="work-advanced",v.innerHTML="<summary>查看构图指标与依据</summary>";for(let N of[e(".metrics"),e("#layout-explanation"),e(".method-details")])v.append(N);h.append(v),u.prepend(e(".work-title")),c.classList.add("work-guide"),c.insertAdjacentHTML("afterbegin",'<div class="work-guide-content"><p class="eyebrow" id="work-guide-index"></p><h2 id="work-guide-word"></h2><strong id="work-guide-title"></strong><p id="work-guide-action"></p><ol id="work-guide-tips"></ol><button id="work-demo-button" class="work-demo-button">▷ 看这个动作</button><div id="work-context-tools"></div><p id="work-feedback" role="status" aria-live="polite">选好原料，就可以开始了。</p></div>');let _=e("#work-context-tools"),C=document.createElement("section");C.id="work-tool-rack",C.setAttribute("aria-labelledby","work-tools-title"),C.innerHTML='<h2 id="work-tools-title">本步工具</h2>',C.append(_),l.prepend(C);let A=e("#open-poster");A.remove();for(let N of["inspiration","comparison","patterns","lettering","styling"])_.append(e("#open-"+N));for(let[N,F,te]of[["inspiration","套用灵感参考","选一种构思，再自行修改"],["comparison","比较创作方案","暂存不同构图，放在一起看"],["patterns","添加纹样","选图案，拖动摆放后刻入"],["lettering","刻字落款","输入文字，拖动确定位置"],["styling","文创搭配","切换挂绳、展台与背景"]]){let Q=e("#open-"+N),pe=Q.querySelector("span");pe.firstChild.textContent=F,pe.querySelector("small").textContent=te}e(".playground").remove(),e("#canvas-stage").insertAdjacentHTML("beforeend",'<div id="work-demo" hidden><canvas id="work-demo-canvas" width="840" height="600"></canvas><span id="work-demo-caption"></span><button type="button" id="work-demo-close" aria-label="关闭操作示范">×</button></div>'),e("#work-demo-close").onclick=Ne,e("#play-demo").textContent="▷ 看本步操作",e("#play-demo").onclick=I,e("#work-demo-button").onclick=I,e("#start-shaping").hidden=!0,e("#export-finished").hidden=!0,e("#save-finished").hidden=!0,e("#capture-3d").hidden=!0,i.presentation={...i.presentation,backdrop:"paper"},n.playground.sync();let L=[],O=0,w="",M=0,U=0,G=0,Y=null,j="three",Z=!1,R=new Set,P=document.createElement("dialog");P.id="work-gallery",P.className="work-gallery",P.setAttribute("aria-labelledby","gallery-title"),P.innerHTML=`<header class="gallery-heading"><div><small>YOUR WORK · YOUR STORY / 作品展厅</small><h2 id="gallery-title">我的玛瑙作品</h2></div><button id="gallery-close" class="work-outline">← 继续创作</button></header>
 <div class="gallery-layout"><section class="gallery-main"><div class="gallery-tabs" role="tablist" aria-label="作品欣赏方式"><button data-gallery-mode="three" role="tab">立体赏玩</button><button data-gallery-mode="compare" role="tab">原石对照</button><button data-gallery-mode="replay" role="tab">创作回看</button></div>
 <div class="gallery-stage"><div id="gallery-three"></div><canvas id="gallery-flat" width="1000" height="760" hidden aria-label="原石对照与实际创作快照"></canvas><span id="gallery-stage-label">拖动旋转 · 滚轮缩放</span></div>
 <div id="gallery-three-tools" class="gallery-controls"><button data-gallery-view="front">正面</button><button data-gallery-view="side">侧面</button><button data-gallery-view="back">背面</button><button id="gallery-spin" aria-pressed="false">▷ 自动旋转</button><label>背景 <select id="gallery-background"><option value="paper">暖纸展厅</option><option value="ink">墨色工坊</option><option value="night">夜色藏蓝</option></select></label><label>光照 <select id="gallery-light"><option value="left">光从左侧照来</option><option value="right">光从右侧照来</option></select></label></div>
 <div id="gallery-compare-tools" class="gallery-controls" hidden><span>只看成器</span><input id="gallery-compare" type="range" min="0" max="100" value="50" aria-label="原石与成器对照分界"><span>只看原料</span><small>移动分界线：画面左边看原料，右边看成器</small></div>
 <div id="gallery-replay-tools" class="gallery-controls" hidden><button id="gallery-replay-toggle" aria-pressed="false">▷ 播放回看</button><input id="gallery-replay-position" type="range" min="0" max="0" value="0" aria-label="实际创作快照进度"><span id="gallery-replay-label"></span></div>
 <p id="gallery-credit" class="gallery-credit"></p></section>
 <aside class="gallery-exports"><p class="eyebrow">TAKE IT WITH YOU</p><h3>让作品，<br><span>继续被看见。</span></h3><p>保存可继续编辑的方案，或带走能转动、能回看的作品页。</p>
 <button id="gallery-save">✓ 更新我的作品<small>入展自动保存 · 修改后可更新同一记录</small></button><button id="gallery-project">↗ 完整创作方案<small>JSON · 原料、轮廓、刻线与实际快照</small></button><button id="gallery-offline">↗ 可交互作品页<small>独立 HTML · 离线转动、对照与回看</small></button><button id="gallery-video">▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small></button><button id="gallery-screenshot">↗ 保存当前 3D 视角<small>PNG · 包含当前搭配与来源</small></button><div class="gallery-paper-exports"><button id="gallery-card">方案卡 PNG</button></div><p id="gallery-status" role="status" aria-live="polite">先转动欣赏，也可以回到创作继续修改。</p></aside></div>`,document.body.append(P),e(".gallery-paper-exports").append(A),e("#open-poster").innerHTML="纪念海报 PNG";let B=document.createComment("studio 3D preview");e("#preview-scene").before(B),e("#gallery-close").onclick=()=>P.close(),P.addEventListener("cancel",()=>K(!0)),P.addEventListener("close",()=>{ce(),K(!0),s.getScene()?.setAuto(!1),e("#spin-piece").setAttribute("aria-pressed","false"),e("#spin-piece").textContent="▷ 自动环绕欣赏",e("#gallery-spin").setAttribute("aria-pressed","false"),e("#gallery-spin").textContent="▷ 自动旋转",B.after(e("#preview-scene")),s.setView(i.step===3?"preview":i.step===2?"carved":"color"),Z=!1,e("#next-step").focus({preventScroll:!0})}),e("#gallery-save").onclick=n.saveDesign,e("#gallery-card").onclick=n.exportCard,e("#gallery-project").onclick=()=>{Te("保存方案");let N={...n.projectData(),workshopTimeline:L.map(({hash:F,...te})=>te),attribution:Vr(i.sample),references:zd(i.sample)};a(new Blob([JSON.stringify(N,null,2)],{type:"application/json"}),xo(i.workTitle)+"-完整方案.json"),V("完整方案已导出，可在“导入方案”恢复继续编辑。")},e("#gallery-offline").onclick=ue,e("#gallery-screenshot").onclick=async()=>{try{await ee("three");let N=s.getScene();if(!N)throw Error("三维暂不可用，请先导出方案卡。");let F=await Hd(N.capture()),te=Gr(F.width,F.height+90),Q=te.getContext("2d");Q.fillStyle="#f5edde",Q.fillRect(0,0,te.width,te.height),Q.drawImage(F,0,0),Q.fillStyle="#4e3a2b",Q.font="16px sans-serif",Q.fillText(i.workTitle||"石里有境 · 我的作品",18,F.height+27),Q.font="11px sans-serif",Q.fillText(Vr(i.sample),18,F.height+52,te.width-36),Q.fillText("数字创意与工艺外观示意 · 非真实加工结果",18,F.height+73),te.toBlob(pe=>{pe&&a(pe,xo(i.workTitle)+"-3D视角.png")})}catch(N){V(N.message)}},e("#gallery-video").onclick=()=>Y?K(!0):oe(),t("[data-gallery-mode]").forEach(N=>N.onclick=()=>ee(N.dataset.galleryMode)),t("[data-gallery-view]").forEach(N=>N.onclick=()=>{s.getScene()?.setOrientation(N.dataset.galleryView),e("#gallery-spin").setAttribute("aria-pressed","false"),e("#gallery-spin").textContent="▷ 自动旋转"}),e("#gallery-spin").onclick=()=>{let N=s.getScene();if(!N)return;let F=!N.controls.autoRotate;N.setAuto(F),e("#gallery-spin").setAttribute("aria-pressed",String(F)),e("#gallery-spin").textContent=F?"Ⅱ 暂停旋转":"▷ 自动旋转"},e("#gallery-background").onchange=async N=>{i.presentation.backdrop=N.target.value,n.playground.sync(),await s.updatePreview(),Te("切换展厅氛围")},e("#gallery-light").onchange=async N=>{i.light=N.target.value,t("[data-light]").forEach(F=>F.classList.toggle("selected",F.dataset.light===i.light)),await s.updatePreview(),Te("调整灯光")},e("#gallery-compare").oninput=D,e("#gallery-replay-position").oninput=()=>{ce(),ae()},e("#gallery-replay-toggle").onclick=()=>G?ce():de(),e("#next-step").onclick=()=>i.step===3?Be():s.setStep(i.step+1);function V(N){e("#gallery-status").textContent=N}function re(){let N=i.step,F=Bd[N];if(o.dataset.workStep=String(N),e("#play-demo").textContent="▷ 看本步操作",e("#save-design").hidden=N!==3,!R.has(N)){R.add(N);let Q=e(["#sample-list","#design-canvas","#design-canvas","#polish"][N]);Q.classList.add("work-cue"),setTimeout(()=>Q.classList.remove("work-cue"),2500)}e("#work-guide-index").textContent=`0${N+1} / ${["READ THE STONE","CREATE WITH COLOR","LEAVE YOUR MARK","BRING IT TO LIGHT"][N]}`,e("#work-guide-word").replaceChildren(...F.word.split(`
`).map(Q=>Object.assign(document.createElement("span"),{textContent:Q}))),e("#work-guide-title").textContent=F.title,e("#work-guide-action").textContent=F.action,e("#work-guide-tips").replaceChildren(...F.tips.map(Q=>Object.assign(document.createElement("li"),{textContent:Q})));for(let Q of["inspiration","comparison","patterns","lettering","styling"])e("#open-"+Q).hidden=!F.tools.includes(Q);_.classList.toggle("two-tools",F.tools.length===2),e("#work-tools-title").textContent=["灵感参考","构图辅助工具","刻线辅助工具","作品搭配工具"][N],e("#step-goal").textContent=F.title,e("#step-tip").textContent=F.action,e("#caption-text").textContent=["先观察纹色，选好后开始构形。","轮廓和取形预览会随操作实时更新。","刻线与落款会同步保留在三维作品中。","作品已进入三维预览，完成后可进入展厅。"][N],N===3&&(e("#next-step").innerHTML="进入作品展厅 <span>↗</span>"),N===1&&(e("#next-step").innerHTML="确认取色位置，去刻线 <span>→</span>"),e("#work-feedback").textContent=["当前原料："+e("#canvas-sample-name").textContent,"拖动轮廓，右下角查看实时取形。",i.strokes.length?`已留下 ${i.strokes.length} 道刻线，可继续添加或撤销。`:"试着在作品上拖动，或先添一组筋线。","完成后进入展厅，有 6 种成果保存方式。"][N],e("#view-color").hidden=N>=2,e("#view-carved").hidden=N===0||N===3,e("#view-preview").hidden=N!==3,e("#toggle-overlay").hidden=N!==1;let te=location.hash==="#studio";document.documentElement.classList.toggle("workbench-active",te)}document.addEventListener("agate-craft-step",()=>{Ne(),re(),we("进入"+Bd[i.step].title)}),document.addEventListener("agate-craft-change",()=>{i.step===2&&(e("#work-feedback").textContent=i.strokes.length?`已留下 ${i.strokes.length} 道刻线，可撤销、擦除或继续添加。`:"试着在作品上拖动，或先添一组筋线。"),we("调整"+["原料","构形","刻线","润色"][i.step])}),document.addEventListener("agate-craft-reset",()=>{clearTimeout(O),L=[],w="",re(),we("选定原料")}),o.addEventListener("change",()=>we("调整"+["原料","构形","刻线","润色"][i.step])),o.addEventListener("pointerup",N=>{N.target.closest("#canvas-stage")&&(we(i.step===2?"留下刻线":"调整取形"),i.step===1&&(e("#work-feedback").textContent="取形位置已更新，看看右下角的成器效果。"))}),o.addEventListener("click",N=>{N.target.closest("#next-step,.craft-stepper")&&Te("确认"+["原料","构形","刻线","润色"][i.step])},{capture:!0}),window.addEventListener("hashchange",()=>{re(),Ne(),location.hash!=="#studio"&&P.open&&P.close()}),new ResizeObserver(()=>document.documentElement.style.setProperty("--work-header",Math.ceil(e(".header").getBoundingClientRect().height)+"px")).observe(e(".header")),e("#design-canvas").addEventListener("pointerdown",Ne,{capture:!0}),re();function we(N){clearTimeout(O),O=setTimeout(()=>Te(N),650)}function Te(N){if(!i.image||!i.analysis)return;let F=JSON.stringify([i.sample,i.kind,i.pose,i.selectedColor,i.strokes,i.inscription,i.polish,i.thickness,i.presentation,i.workTitle,i.light]);if(F===w)return;w=F;let te=Gr(480,360),Q=te.getContext("2d");if(Q.fillStyle="#eee2cd",Q.fillRect(0,0,480,360),i.step===0){let pe=Yi(i),Se=Math.min(430/pe.width,310/pe.height);Q.drawImage(pe,(480-pe.width*Se)/2,(360-pe.height*Se)/2,pe.width*Se,pe.height*Se)}else Zt(Q,480,360,i,{background:!1,padding:.12});L.push({label:N,step:i.step,time:new Date().toISOString(),image:te.toDataURL("image/jpeg",.72),hash:F}),L.length>24&&L.splice(1,1)}async function Be(){if(!i.image||!i.analysis){r("请先选一块原料。");return}Ne(),Te("完成作品");let N=n.saveDesign({automatic:!0});e("#gallery-title").textContent=i.workTitle||"石里有境 · 我的玛瑙作品",e("#gallery-credit").textContent=Vr(i.sample)+" · 数字工艺外观示意",e("#gallery-background").value=i.presentation.backdrop,e("#gallery-light").value=i.light,P.showModal(),e("#gallery-three").append(e("#preview-scene")),e("#gallery-replay-position").max=Math.max(0,L.length-1),e("#gallery-replay-position").value="0",await ee("three"),V(N?"已自动保存到“我的作品”；再次入展会更新这件作品。":"未能保存到浏览器，请先下载完整方案保留作品。")}async function ee(N){if(!Y){ce(),j=N,t("[data-gallery-mode]").forEach(F=>{let te=F.dataset.galleryMode===N;F.setAttribute("aria-selected",String(te)),F.tabIndex=te?0:-1}),e("#gallery-three").hidden=N!=="three",e("#gallery-flat").hidden=N==="three";for(let F of["three","compare","replay"])e("#gallery-"+F+"-tools").hidden=F!==N;if(N==="three"){if(s.setView("preview"),await s.updatePreview(),await wg(),s.getScene()?.resize(),Z=!!s.getScene(),e("#gallery-stage-label").textContent=Z?"拖动旋转 · 滚轮缩放":"三维暂不可用，当前显示成器图；仍可对照、回看或下载方案",!Z){e("#gallery-three").hidden=!0,e("#gallery-flat").hidden=!1;let F=e("#gallery-flat"),te=F.getContext("2d");te.fillStyle="#eee2cd",te.fillRect(0,0,F.width,F.height),Zt(te,F.width,F.height,i,{background:!1})}for(let F of["#gallery-spin","#gallery-screenshot","#gallery-video",'[data-gallery-view="front"]','[data-gallery-view="side"]','[data-gallery-view="back"]'])e(F).disabled=!Z}else N==="compare"?D():ae()}}e(".gallery-tabs").addEventListener("keydown",N=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(N.key))return;N.preventDefault();let F=["three","compare","replay"],te=F.indexOf(j),Q=N.key==="Home"?0:N.key==="End"?2:(te+(N.key==="ArrowRight"?1:2))%3;ee(F[Q]),e(`[data-gallery-mode="${F[Q]}"]`).focus()});function b(N,F,te,Q){let pe=Math.min((te-100)/F.width,(Q-100)/F.height);N.drawImage(F,(te-F.width*pe)/2,(Q-F.height*pe)/2,F.width*pe,F.height*pe)}function D(){let N=e("#gallery-flat"),F=N.getContext("2d"),te=N.width,Q=N.height,pe=te*Number(e("#gallery-compare").value)/100;F.fillStyle="#eee2cd",F.fillRect(0,0,te,Q),Zt(F,te,Q,i,{background:!1,padding:.13}),F.save(),F.beginPath(),F.rect(0,0,pe,Q),F.clip(),F.fillStyle="#e4d4b9",F.fillRect(0,0,te,Q),b(F,Yi(i),te,Q),F.restore(),F.strokeStyle="#a2573c",F.lineWidth=3,F.beginPath(),F.moveTo(pe,0),F.lineTo(pe,Q),F.stroke(),e("#gallery-stage-label").textContent="左：整块原料 / 右：本次取形与刻线 · 非同位置透视对齐"}let $=0;async function ae(){let N=++$,F=Number(e("#gallery-replay-position").value),te=L[F];if(!te)return;let Q;try{Q=await Hd(te.image)}catch{N===$&&V("这张快照未能读取，可以选择其他快照，或继续欣赏作品。");return}if(N!==$)return;let pe=e("#gallery-flat"),Se=pe.getContext("2d");Se.fillStyle="#eee2cd",Se.fillRect(0,0,pe.width,pe.height),b(Se,Q,pe.width,pe.height),e("#gallery-replay-label").textContent=`${F+1} / ${L.length}`,e("#gallery-stage-label").textContent=te.label+" · "+new Date(te.time).toLocaleTimeString("zh-CN")}function ce(){clearInterval(G),G=0,e("#gallery-replay-toggle").textContent="▷ 播放回看",e("#gallery-replay-toggle").setAttribute("aria-pressed","false")}function de(){L.length&&(Number(e("#gallery-replay-position").value)>=L.length-1&&(e("#gallery-replay-position").value="0"),ae(),e("#gallery-replay-toggle").textContent="Ⅱ 暂停回看",e("#gallery-replay-toggle").setAttribute("aria-pressed","true"),G=setInterval(()=>{let N=Number(e("#gallery-replay-position").value)+1;if(N>=L.length){ce();return}e("#gallery-replay-position").value=String(N),ae()},1200))}function Ne(){U++,cancelAnimationFrame(M),e("#work-demo").hidden=!0}function I(){if(!i.image)return;Ne();let N=U,F=i.step,te=e("#work-demo"),Q=e("#work-demo-canvas"),pe=Q.getContext("2d"),Se=performance.now();te.hidden=!1,e("#work-demo-caption").textContent=["操作示范：左侧选择原料，观察天然纹色","操作示范：拖动轮廓，挑选想保留的颜色","操作示范：按住拖动，在作品上留下一笔","操作示范：调整光泽，再拖动作品查看厚度"][F];let T={...i,pose:{...i.pose},strokes:structuredClone(i.strokes)},x=matchMedia("(prefers-reduced-motion:reduce)").matches,W=J=>{if(N!==U)return;let he=Math.min(1,(J-Se)/4e3),se=x?.6:Math.sin(he*Math.PI*2)*.5+.5;pe.fillStyle="#eee2cd",pe.fillRect(0,0,840,600),F<=1?(b(pe,Yi(i),840,600),F===1&&(pe.save(),pe.translate(330+se*160,300),pe.scale(140,140),mi(pe,i.kind),pe.fillStyle="#fff4cf2a",pe.fill(),pe.strokeStyle="#9e4936",pe.lineWidth=.03,pe.stroke(),pe.restore()),pe.fillStyle="#fff7e8",pe.beginPath(),pe.arc(330+se*160,F===0?210+se*70:300,12,0,Math.PI*2),pe.fill(),pe.strokeStyle="#9e4936",pe.lineWidth=3,pe.stroke()):(F===2?T.strokes=[...i.strokes,{width:.023,depth:.6,points:Array.from({length:Math.max(2,Math.round(he*40))},(be,ge)=>[-.5+ge*.025,Math.sin(ge*.08)*.15])}]:T.polish=.2+se*.7,Zt(pe,840,600,T,{background:!1,padding:.14})),!x&&he<1?M=requestAnimationFrame(W):x||setTimeout(()=>{N===U&&Ne()},800)};W(Se)}async function ue(){let N=e("#gallery-offline");N.disabled=!0,V("正在封装当前作品与离线欣赏程序…");try{Te("保存作品页");let F=new URL("./viewer.bundle.js",import.meta.url);F.search=new URL(import.meta.url).search;let te=await fetch(F);if(!te.ok)throw Error("离线欣赏程序暂时未能读取，请稍后重试。");let Q=await te.text(),pe=Gr(720,540),Se=pe.getContext("2d");Se.fillStyle="#eee2cd",Se.fillRect(0,0,720,540),b(Se,Yi(i),720,540);let T=Gr(900,700);T.getContext("2d").fillStyle="#eee2cd",T.getContext("2d").fillRect(0,0,900,700),Zt(T.getContext("2d"),900,700,i,{background:!1});let x={title:i.workTitle||"石里有境 · 我的作品",credit:Vr(i.sample),references:zd(i.sample),kind:i.kind,outline:ei(i.kind),texture:gi(i,{size:768}).toDataURL(),normal:_o(i.strokes,384,i.inscription).toDataURL(),polish:i.polish,light:i.light,thickness:i.thickness,presentation:{...i.presentation},source:pe.toDataURL("image/jpeg",.82),finished:T.toDataURL(),timeline:L.map(({hash:se,...be})=>be),project:n.projectData()},W=JSON.stringify(x).replace(/</g,"\\u003c"),J=Q.replace(/<\/script/gi,"<\\/script"),he='<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>石里有境 · 离线作品</title></head><body><script type="application/json" id="work-data">'+W+"<\/script><script>"+J+"<\/script></body></html>";a(new Blob([he],{type:"text/html;charset=utf-8"}),xo(i.workTitle)+"-可交互作品.html"),V("作品页已下载：离线打开即可转动、对照、回看，素材署名已保留。")}catch(F){V(F.message||"作品页导出失败，请重试。")}finally{N.disabled=!1}}function K(N=!1){Y&&(Y.cancelled=N,cancelAnimationFrame(Y.frame),Y.recorder.state!=="inactive"&&Y.recorder.stop())}async function oe(){try{if(!window.MediaRecorder||!HTMLCanvasElement.prototype.captureStream)throw Error("当前浏览器不支持短片录制，可使用3D截图或离线作品页。");let N=["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"].find(be=>MediaRecorder.isTypeSupported(be));if(!N)throw Error("当前浏览器没有可用的录制格式，可使用3D截图或离线作品页。");await ee("three");let F=s.getScene();if(!F)throw Error("三维暂不可用，无法录制旋转短片。");let te=Gr(1280,720),Q=te.getContext("2d"),pe=te.captureStream(24),Se=new MediaRecorder(pe,{mimeType:N,videoBitsPerSecond:55e5}),T=F.stone.rotation.clone(),x=F.controls.autoRotate,W=[],J={recorder:Se,stream:pe,scene:F,rotation:T,auto:x,frame:0,cancelled:!1};Y=J,F.setAuto(!1),F.controls.enabled=!1,P.querySelectorAll("button,input,select").forEach(be=>{be.id!=="gallery-video"&&be.id!=="gallery-close"&&(be.dataset.recordDisabled=String(be.disabled),be.disabled=!0)}),e("#gallery-video").innerHTML="× 取消录制<small>正在生成当前作品的旋转短片</small>",Se.ondataavailable=be=>{be.data.size&&W.push(be.data)},Se.onstop=()=>{cancelAnimationFrame(J.frame),pe.getTracks().forEach(be=>be.stop()),F.stone.rotation.copy(T),F.setAuto(P.open?x:!1),F.controls.enabled=!0,Y=null,P.querySelectorAll("[data-record-disabled]").forEach(be=>{be.disabled=be.dataset.recordDisabled==="true",delete be.dataset.recordDisabled}),e("#gallery-video").innerHTML="▷ 录制旋转短片<small>约 6 秒 · 1280×720 · 保留素材署名</small>",!J.cancelled&&W.length?(a(new Blob(W,{type:N}),xo(i.workTitle)+"-旋转短片."+(N.includes("mp4")?"mp4":"webm")),V("旋转短片已保存，分辨率 1280×720。")):V("已取消录制，作品保持不变。")},Se.onerror=()=>{J.cancelled=!0,K(!0),V("录制未完成，可以重试或导出截图。")};let he=performance.now();Se.start(250);let se=be=>{if(Y!==J)return;if(document.hidden||!P.open){K(!0);return}let ge=Math.min(1,(be-he)/6e3);F.stone.rotation.y=T.y+ge*Math.PI*2,F.render(),Q.fillStyle="#f5edde",Q.fillRect(0,0,1280,720),Q.fillStyle="#4d3829",Q.font="bold 28px sans-serif",Q.fillText(i.workTitle||"石里有境 · 我的玛瑙作品",34,46,1150);let Ie=F.renderer.domElement,De=Math.min(1212/Ie.width,560/Ie.height),ye=Ie.width*De,Ce=Ie.height*De;Q.drawImage(Ie,(1280-ye)/2,72+(560-Ce)/2,ye,Ce),Q.font="15px sans-serif",Q.fillText(Vr(i.sample),34,674,1212),Q.font="13px sans-serif",Q.fillText("石里有境 / 阜新玛瑙文化数字创作 · 数字工艺外观示意",34,702),V(`正在录制旋转短片 ${Math.min(6,Math.floor(ge*6))} / 6 秒，请保持此窗口打开。`),ge>=1?K(!1):J.frame=requestAnimationFrame(se)};se(he)}catch(N){V(N.message||"录制暂不可用，请重试。")}}return document.addEventListener("visibilitychange",()=>{document.hidden&&(ce(),Y&&K(!0))}),{openGallery:Be,capture:Te,sync:re,get timeline(){return L.map(({hash:N,...F})=>F)},restoreTimeline(N){L=Array.isArray(N)?N.filter(F=>typeof F?.image=="string"&&/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(F.image)&&F.image.length<2e5&&typeof F.label=="string"&&F.label.length<80&&typeof F.time=="string").slice(-24).map(F=>({image:F.image,label:F.label,time:F.time,step:Number(F.step)||0})):[],w=""}}}var Wd=[{id:"bands",title:"层纹之间，自有山河",category:"specimen",tag:"纹理标本",file:"agate-bands",alt:"玛瑙切片的层叠条带与色彩实拍",note:"沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。",origin:"公开玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"},{id:"libation",title:"一盏温润，双耳生姿",category:"vessel",tag:"馆藏器物",file:"agate-libation-cup",alt:"清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳",note:"看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。",origin:"中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425",author:"Cleveland Museum of Art / Gary Kirchenbauer",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.clevelandart.org/art/1920.425"},{id:"moss",title:"把一片绿意，佩在身上",category:"jewelry",tag:"实物佩饰",file:"agate-moss-pendant",alt:"带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理",note:"圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。",origin:"苔藓玛瑙吊坠 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",source:"https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg"},{id:"crystal",title:"光透过石，层次便醒来",category:"specimen",tag:"纹理标本",file:"agate-crystal",alt:"透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞",note:"外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。",origin:"透光玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg"},{id:"carnelian",title:"赤色成杯，雕出一朵花",category:"vessel",tag:"馆藏器物",file:"agate-carnelian-cup",alt:"中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍",note:"花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。",origin:"中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882",author:"The Metropolitan Museum of Art",license:"CC0 1.0 / Public Domain",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.metmuseum.org/art/collection/search/44144"},{id:"nodule",title:"从一块原石，读起",category:"specimen",tag:"纹理标本",file:"agate-nodule",alt:"玛瑙结核标本的外缘与内部纹理实拍",note:"外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。",origin:"公开玛瑙结核标本 · 非阜新原料产地证明",author:"James St. John",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",source:"https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"}],Wr=document.querySelector("#agate-gallery"),Gd=Wr.querySelector(".photo-grid"),kt=document.createElement("dialog");kt.id="photo-dialog";kt.className="photo-dialog";kt.setAttribute("aria-labelledby","photo-title");kt.innerHTML='<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>';document.body.append(kt);var Pt=n=>kt.querySelector(n),eh="all",Ls=0,qd=()=>Wd.filter(n=>eh==="all"||n.category===eh);function Xd(n){kt.classList.toggle("photo-zoomed",n),Pt("#photo-zoom").setAttribute("aria-pressed",String(n)),Pt("#photo-zoom").textContent=n?"还原全貌 −":"放大细节 ＋",Pt(".photo-viewport").scrollTo(0,0)}function bo(n){let e=qd();Ls=(n+e.length)%e.length;let t=e[Ls];Xd(!1),Pt("#photo-large").src=`./assets/photos/${t.file}.webp`,Pt("#photo-large").alt=t.alt,Pt("#photo-title").textContent=t.title,Pt("#photo-tag").textContent=t.tag,Pt("#photo-note").textContent=t.note,Pt("#photo-origin").textContent=t.origin,Pt("#photo-credit").textContent=`摄影 / 图像提供：${t.author} · ${t.license}`,Pt("#photo-source").href=t.source,Pt("#photo-license").href=t.licenseUrl,Pt("#photo-counter").textContent=`${String(Ls+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}`,Pt("#photo-prev").disabled=Pt("#photo-next").disabled=e.length<2}function Yd(){let n=qd();Gd.innerHTML=n.map((e,t)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${t}" aria-label="放大查看：${e.title}"><span class="photo-frame"><img src="./assets/photos/${e.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${e.alt}"><span class="photo-category">${e.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(Wd.indexOf(e)+1).padStart(2,"0")}</span><span><strong>${e.title}</strong><small>${e.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join(""),Wr.querySelector("#photo-result-count").textContent=`${n.length} 件实物`,Gd.querySelectorAll("[data-photo-index]").forEach(e=>e.onclick=()=>{bo(Number(e.dataset.photoIndex)),kt.showModal()})}Wr.querySelectorAll("[data-photo-filter]").forEach(n=>n.onclick=()=>{eh=n.dataset.photoFilter,Wr.querySelectorAll("[data-photo-filter]").forEach(e=>e.setAttribute("aria-pressed",String(e===n))),Yd()});Pt("#photo-close").onclick=()=>kt.close();Pt("#photo-prev").onclick=()=>bo(Ls-1);Pt("#photo-next").onclick=()=>bo(Ls+1);Pt("#photo-zoom").onclick=()=>Xd(!kt.classList.contains("photo-zoomed"));kt.addEventListener("keydown",n=>{(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),bo(Ls+(n.key==="ArrowLeft"?-1:1)))});kt.addEventListener("click",n=>{if(n.target===kt){let e=kt.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&kt.close()}});window.addEventListener("hashchange",()=>{kt.open&&kt.close()});document.querySelector("#gallery-jump").onclick=()=>Wr.scrollIntoView({behavior:"smooth"});Yd();Ba();function Wp(n,e,{onReady:t=()=>{}}={}){let i;try{i=new yr({antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,1.65)),i.setClearColor(1183243),i.outputColorSpace=It,i.domElement.className="formation-cinema-canvas",i.domElement.setAttribute("aria-hidden","true"),n.append(i.domElement);let s=new Ri,r=new ls(-1,1,1,-1,0,1),a=new la(new Uint8Array([19,15,12,255]),1,1);a.needsUpdate=!0;let o={u_map0:{value:a},u_map1:{value:a},u_map2:{value:a},u_map3:{value:a},u_aspects:{value:new ft(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new ve},u_light:{value:0}},l=new hn({uniforms:o,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`}),c=new pt(new Vn(2,2),l);s.add(c);let h=[],d=[],u=new Set,f=!1,g=!1,y=!1,m=!1,p=!1,E=0,v=0,_=0,C=1,A=0,L=new ve,O=matchMedia("(prefers-reduced-motion: reduce)"),w=new Ta;function M(){return u.has(Math.floor(_))&&u.has(Math.ceil(_))}function U(){let B=M();B!==p&&(p=B,p&&(o.u_progress.value=_),n.classList.toggle("cinema-ready",p),p&&t())}function G(B){return d[B]||(d[B]=w.loadAsync(e[B]).then(V=>{if(y){V.dispose();return}V.colorSpace=It,V.minFilter=Kt,V.magFilter=Kt,V.generateMipmaps=!1,o["u_map"+B].value=V,o.u_aspects.value.setComponent(B,V.image.width/V.image.height),h.push(V),u.add(B),U()}).catch(()=>{})),d[B]}function Y(){if(y)return;let{width:B,height:V}=n.getBoundingClientRect();B<2||V<2||(i.setSize(B,V,!1),o.u_view.value=B/V)}function j(B){if(E=0,!f||y)return;if(B-v<1e3/(matchMedia("(pointer:coarse)").matches?24:30)){E=requestAnimationFrame(j);return}let V=Math.min(.08,(B-v)/1e3||.033);v=B,g&&!O.matches&&(o.u_time.value+=V);let re=O.matches?1:1-Math.exp(-V*7);M()&&(o.u_progress.value+=(_-o.u_progress.value)*re),o.u_zoom.value+=(C-o.u_zoom.value)*re,o.u_light.value+=(A-o.u_light.value)*re,o.u_pointer.value.lerp(O.matches?new ve:L,re),i.render(s,r),E=requestAnimationFrame(j)}function Z(B){let V=n.getBoundingClientRect();L.set((B.clientX-V.left)/V.width*2-1,1-(B.clientY-V.top)/V.height*2)}function R(){L.set(0,0)}n.addEventListener("pointermove",Z),n.addEventListener("pointerleave",R);let P=new ResizeObserver(Y);return P.observe(n),i.domElement.addEventListener("webglcontextlost",B=>{B.preventDefault(),m=!0,n.classList.remove("cinema-ready"),f=!1,cancelAnimationFrame(E)}),{setProgress(B,V=!1){_=ka.clamp(B,0,3),G(Math.floor(_)),G(Math.ceil(_)),U(),V&&(o.u_progress.value=_),f&&setTimeout(()=>{!y&&f&&G(Math.min(3,Math.ceil(_)+1))},200)},setActive(B){m||(f=B,f?(Y(),v=performance.now(),E||(E=requestAnimationFrame(j))):(cancelAnimationFrame(E),E=0))},setPlaying(B){g=B},setDetail(B){C=B?1.42:1},setLight(B){A=B?1:0},dispose(){y=!0,f=!1,cancelAnimationFrame(E),P.disconnect(),n.removeEventListener("pointermove",Z),n.removeEventListener("pointerleave",R),h.forEach(B=>B.dispose()),a.dispose(),c.geometry.dispose(),l.dispose(),i.dispose(),i.domElement.remove()}}}var Tu=[{short:"岩石留空",title:"一块石的故事，始于一处空隙。",copy:"在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。",caption:"岩石中的空隙，为后来的矿物生长提供空间。",key:"空间"},{short:"富硅流体",title:"水，把形成玛瑙的物质带来。",copy:"含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。",caption:"富硅流体进入空隙，带来形成二氧化硅矿物的物质。",key:"物质"},{short:"结晶成纹",title:"细小的差异，长成层层纹理。",copy:"在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。",caption:"以常见同心层纹为例：结构与成分的差异，带来可见层次。",key:"纹色"},{short:"因色构形",title:"自然留下纹色，构思从你开始。",copy:"天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。",caption:"从“石如何形成”，走到“我想把它做成什么”。",key:"构思"}],qp=Tu.map((n,e)=>`./assets/formation-v2/stage-0${e+1}.webp`),_b=["沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。","沿着裂隙看：进入腔体的水，与湿润表面上的折射。","沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。","沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。"],xb=["A PLACE TO BEGIN","WATER BRINGS SILICA","LAYERS TAKE SHAPE","FROM STONE TO CREATION"],Va=document.createElement("section");Va.className="formation-teaser";Va.setAttribute("aria-labelledby","formation-teaser-title");Va.innerHTML='<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>';document.querySelector("#agate-gallery").before(Va);var mt=document.createElement("dialog");mt.id="formation-dialog";mt.className="formation-dialog";mt.setAttribute("aria-labelledby","formation-title");mt.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${qp.map((n,e)=>`<img src="${n}" data-art-stage="${e}" loading="lazy" decoding="async" alt="" class="${e===0?"visible":""}">`).join("")}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${Tu.map((n,e)=>`<button data-formation-step="${e}" aria-pressed="${e===0}"><img src="./assets/formation-v2/stage-0${e+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${e+1}</b>${n.short}</span><i></i></button>`).join("")}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;document.body.append(mt);var et=n=>mt.querySelector(n),Xp="agate-formation-intro-v2",Wt=-1,di=0,Ha=null,Yp=!1,Dn=null,$p=0,jp=0,_r=!1,za=!1,bb=matchMedia("(prefers-reduced-motion: reduce)");function bn(){clearTimeout(Ha),Ha=null,mt.classList.remove("formation-running"),et("#formation-play").setAttribute("aria-pressed","false"),et("#formation-play").textContent="▷ 自动演示",Dn?.setPlaying(!1)}function Zp(){let n=jp+(performance.now()-$p)/1e3;if(n>=36){$n(3),bn();return}let e=Math.min(3,Math.floor(n/9)),t=n%9,i=Math.max(0,Math.min(1,(t-6)/3));$n(Math.min(3,e+i*i*(3-2*i))),Ha=setTimeout(Zp,80)}function Jp(){bn(),di>=3&&$n(0);let n=di%1;jp=Math.floor(di)*9+(n?6+3*(.5-Math.sin(Math.asin(1-2*n)/3)):0),$p=performance.now(),mt.classList.add("formation-running"),et("#formation-play").setAttribute("aria-pressed","true"),et("#formation-play").textContent="Ⅱ 暂停演示",Dn?.setPlaying(!0),Ha=setTimeout(Zp,80)}function $n(n,e=!1){di=Math.max(0,Math.min(3,n));let t=Math.round(di),i=Tu[t];Dn?.setProgress(di,e);let s=Math.floor(di),r=di-s;mt.querySelectorAll("[data-art-stage]").forEach(a=>{let o=Number(a.dataset.artStage);a.style.opacity=o===s?String(1-r):o===s+1?String(r):"0"}),et("#formation-progress").value=Math.round(di*1e3),et("#formation-progress-label").value=`0${t+1} / 04`,t!==Wt&&(Wt=t,et(".formation-visual").dataset.phase=Wt,et(".formation-cinema").style.backgroundImage=`url("./assets/formation-v2/stage-0${Wt+1}-thumb.webp")`,et("#formation-chapter-en").textContent=`0${Wt+1} / ${xb[Wt]}`,et("#formation-stage-label").textContent=`0${Wt+1} / ${i.key}`,et("#formation-number").textContent=`0${Wt+1}`,et("#formation-title").textContent=i.title,et("#formation-copy").textContent=i.copy,et("#formation-caption").textContent=i.caption,et("#formation-observation").textContent=_b[Wt],mt.querySelectorAll("[data-formation-step]").forEach(a=>a.setAttribute("aria-pressed",String(Number(a.dataset.formationStep)===Wt))),et("#formation-previous").disabled=Wt===0,et("#formation-next").innerHTML=Wt===3?"选石创作 <span>↗</span>":"继续看 <span>→</span>")}function Kp(){Yp=!0;try{localStorage.setItem(Xp,"1")}catch{}}function Qp(){Kp(),mt.close(),location.hash!=="#studio"&&(location.hash="studio")}function em(n){_r=n,et(".formation-visual").classList.toggle("formation-detail",_r),et("#formation-detail").setAttribute("aria-pressed",String(_r)),et("#formation-detail").textContent=_r?"− 还原全貌":"＋ 微距细看",Dn?.setDetail(_r)}function Au(){mt.open||(et(".formation-notes").open=!1,mt.classList.remove("formation-focused"),et("#formation-focus").setAttribute("aria-pressed","false"),et("#formation-focus").textContent="⤢ 大画面",em(!1),mt.showModal(),mt.scrollTop=0,Dn||(Dn=Wp(et(".formation-cinema"),qp)),Dn?.setActive(!0),$n(0,!0),bb.matches||Jp())}function tm(){requestAnimationFrame(()=>{let n=Yp;try{n=n||localStorage.getItem(Xp)==="1"}catch{}!n&&!document.querySelector("#studio").hidden&&!document.querySelector("dialog[open]")&&Au()})}Va.querySelector(".formation-open").onclick=Au;var fc=document.createElement("button");fc.className="demo-button formation-replay";fc.textContent="玛瑙怎么形成？";fc.onclick=Au;document.querySelector("#studio .heading-actions").prepend(fc);mt.querySelectorAll("[data-formation-step]").forEach(n=>n.onclick=()=>{bn(),$n(Number(n.dataset.formationStep))});et("#formation-progress").oninput=n=>{bn(),$n(Number(n.target.value)/1e3,!0)};et("#formation-next").onclick=()=>{bn(),Wt===3?Qp():$n(Wt+1)};et("#formation-previous").onclick=()=>{bn(),$n(Math.max(0,Wt-1))};et("#formation-play").onclick=()=>Ha?bn():Jp();et("#formation-skip").onclick=Qp;et("#formation-close").onclick=()=>mt.close();et("#formation-detail").onclick=()=>em(!_r);et("#formation-light").onclick=()=>{za=!za,et(".formation-visual").classList.toggle("formation-bright",za),et("#formation-light").setAttribute("aria-pressed",String(za)),Dn?.setLight(za)};et("#formation-focus").onclick=()=>{let n=mt.classList.toggle("formation-focused");et("#formation-focus").setAttribute("aria-pressed",String(n)),et("#formation-focus").textContent=n?"⤡ 返回图文":"⤢ 大画面"};mt.addEventListener("close",()=>{bn(),Dn?.setActive(!1),Kp()});mt.addEventListener("cancel",bn);mt.addEventListener("keydown",n=>{n.target.type!=="range"&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),bn(),$n(Math.min(3,Math.max(0,Wt+(n.key==="ArrowRight"?1:-1)))))});et(".formation-notes").addEventListener("toggle",()=>{et(".formation-notes").open&&bn()});mt.querySelectorAll("[data-art-stage]").forEach(n=>n.addEventListener("error",()=>{n.hidden=!0}));document.addEventListener("visibilitychange",()=>{document.hidden?(bn(),Dn?.setActive(!1)):mt.open&&Dn?.setActive(!0)});window.addEventListener("hashchange",()=>{mt.open&&mt.close()});$n(0);var Cu=[{id:"blossom",name:"五瓣花",caption:"给纹色添一朵小花"},{id:"cloud",name:"流云",caption:"把弧线连成一片云"},{id:"waves",name:"水波",caption:"三重涟漪，疏密有致"},{id:"bamboo",name:"竹影",caption:"细枝与叶，顺势而生"},{id:"stars",name:"星芒",caption:"一点星光，几何点缀"},{id:"sunrise",name:"朝阳",caption:"从山线里升起的光"},{id:"fan",name:"折扇",caption:"展开一面自己的小景"},{id:"ridge",name:"叠嶂",caption:"三道山线，留一点远意"}];function Mb(n){let e=[],t=s=>e.push(s),i=(s,r=48)=>Array.from({length:r+1},(a,o)=>s(o/r));if(n==="blossom"){for(let s=0;s<5;s++){let r=s*Math.PI*2/5;t(i(a=>{let o=a*Math.PI*2,l=.28+.25*Math.cos(o);return[Math.cos(r)*l-Math.sin(r)*Math.sin(o)*.17,Math.sin(r)*l+Math.cos(r)*Math.sin(o)*.17]}))}t(i(s=>[Math.cos(s*Math.PI*2)*.08,Math.sin(s*Math.PI*2)*.08]))}else if(n==="cloud")t(i(s=>{let r=s*Math.PI*2,a=.45+.08*Math.cos(r*5);return[Math.cos(r)*a*1.3,Math.sin(r)*a*.65]},96)),t(i(s=>[-.48+s*.96,.18+Math.sin(s*Math.PI*2)*.06]));else if(n==="waves")for(let s=0;s<3;s++)t(i(r=>[-.7+r*1.4,(s-1)*.23+Math.sin(r*Math.PI*3)*.09]));else if(n==="bamboo"){t([[-.07,.65],[.03,-.65]]);for(let s=0;s<3;s++){let r=-.4+s*.35;t([[-.1,r],[.1,r]]);for(let a of[-1,1])t([[0,r],[a*.48,r-.24],[a*.22,r-.04],[0,r]])}}else if(n==="stars")for(let[s,r,a]of[[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])t(Array.from({length:9},(o,l)=>{let c=l/8*Math.PI*2-Math.PI/2,h=l%2?a*.24:a;return[s+Math.cos(c)*h,r+Math.sin(c)*h]}));else if(n==="sunrise"){t(i(s=>[Math.cos(Math.PI+s*Math.PI)*.3,-.02+Math.sin(Math.PI+s*Math.PI)*.3],32)),t([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let s=0;s<7;s++){let r=Math.PI+s/6*Math.PI;t([[Math.cos(r)*.4,Math.sin(r)*.4],[Math.cos(r)*.53,Math.sin(r)*.53]])}t([[-.58,.35],[.58,.35]])}else if(n==="fan"){t(i(s=>[Math.cos(Math.PI*1.12+s*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+s*Math.PI*.76)*.88]));for(let s=0;s<=8;s++){let r=Math.PI*1.12+s/8*Math.PI*.76;t([[0,.5],[Math.cos(r)*.72,.5+Math.sin(r)*.88]])}}else if(n==="ridge")for(let s=0;s<3;s++)t([[-.7,.2+s*.18],[-.35,-.4+s*.18],[-.1,-.08+s*.18],[.28,-.5+s*.18],[.7,.2+s*.18]]);else throw Error("未知纹样");return e}function pc(n,{x:e=0,y:t=0,scale:i=.75,angle:s=0}={},r=.018,a=.6){let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o);return Mb(n).map(h=>({width:r,depth:a,points:h.map(([d,u])=>[e+(d*l-u*c)*i,t+(d*c+u*l)*i])}))}function Ru(n,e){let t=[];for(let i of n){let s=[],r=()=>{s.length>1&&t.push({...i,points:s}),s=[]};for(let a of i.points)a.every(o=>Math.abs(o)<=1)&&e(...a)?s.push(a):r();r()}return t}pi();var Pu={fruit:"秋实",leaf:"一叶",mountain:"远山",round:"团圆",drop:"凝露",heart:"心意",custom:"手绘成器"};function nm(n){return n==="bands"?"Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n==="nodule"?"James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"用户导入照片":"程序化教学样本"}function im(n){let{state:e,experience:t,$:i,$$:s,toast:r,download:a}=n,o=[["patterns","✧","纹样百宝箱","8种纹样，自由摆放"],["lettering","印","刻字落款","写下名字与心意"],["styling","◈","文创搭配","挂件、摆件与氛围"],["inspiration","卜","灵感抽签","换一种构思出发"],["comparison","▥","方案对比","把喜欢的放在一起"],["poster","▣","纪念海报","带走自己的设计"]];i(".craft-stepper").insertAdjacentHTML("afterend",`<div class="playground"><div class="playground-heading"><span>玩法百宝箱</span><small>再给作品一点自己的想法</small></div><div class="playground-grid">${o.map(([R,P,B,V])=>`<button id="open-${R}"><i>${P}</i><span>${B}<small>${V}</small></span><b>↗</b></button>`).join("")}</div></div>`);function l(R,P,B,V){let re=document.createElement("dialog");return re.id=R,re.className="play-dialog",re.innerHTML=`<div class="dialog-heading"><div><p class="eyebrow">YOUR CREATIVE PLAYGROUND</p><h2>${P}</h2></div><button class="icon-button" data-close-play aria-label="关闭">×</button></div><p class="play-dialog-intro">${B}</p>${V}`,document.body.append(re),re.querySelector("[data-close-play]").onclick=()=>re.close(),re}let c=l("pattern-dialog","让一笔纹样，成为你的点睛。","所有纹样均为本工坊原创装饰示意。选择后可在作品上拖动，满意再刻入。",`<div class="play-editor"><div><canvas id="pattern-preview" width="840" height="640" aria-label="拖动纹样调整位置"></canvas><p id="pattern-feedback" class="hint" role="status"></p></div><div class="play-editor-controls"><div id="pattern-library" class="pattern-library">${Cu.map(R=>`<button data-pattern="${R.id}" title="${R.caption}"><canvas width="100" height="74"></canvas><span>${R.name}</span></button>`).join("")}</div><label class="field-label" for="pattern-size">纹样大小 <output id="pattern-size-value">75%</output></label><input id="pattern-size" type="range" min="20" max="130" value="75"><label class="field-label" for="pattern-angle">纹样角度 <output id="pattern-angle-value">0°</output></label><input id="pattern-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>左右位置 <input id="pattern-x" type="range" min="-85" max="85" value="0" aria-label="纹样水平位置"><span class="axis-captions"><span>向左</span><span>向右</span></span></label><label>上下位置 <input id="pattern-y" type="range" min="-85" max="85" value="0" aria-label="纹样垂直位置"><span class="axis-captions"><span>向上</span><span>向下</span></span></label></div><button id="center-pattern" class="text-button">居中摆放</button><button id="apply-pattern" class="primary full">刻入这组纹样 ＋</button><p class="hint">超出作品的部分会裁去。应用后仍可用刻线撤销、重做或擦除。</p></div></div>`),h="blossom",d={x:0,y:0,scale:.75,angle:0},u;function f(){return Ru(pc(h,d,e.toolWidth,e.depth),(...R)=>Hr(e.kind,...R))}function g(){let R=i("#pattern-preview"),P=f(),B={...e,strokes:[...e.strokes,...P]};u=Zt(R.getContext("2d"),R.width,R.height,B,{texture:gi(B,{size:640}),padding:.1}),s("[data-pattern]").forEach(V=>V.classList.toggle("selected",V.dataset.pattern===h)),i("#pattern-feedback").textContent=`${Cu.find(V=>V.id===h).name} · ${P.length}段可见刻线 · 拖动摆放，滑杆缩放与旋转`,i("#apply-pattern").disabled=!P.length,i("#pattern-x").value=Math.round(d.x*100),i("#pattern-y").value=Math.round(d.y*100)}for(let R of s("[data-pattern]")){let P=R.querySelector("canvas").getContext("2d");P.strokeStyle="#d9bc8b",P.lineWidth=1.4;for(let B of pc(R.dataset.pattern))P.beginPath(),B.points.forEach(([V,re],le)=>le?P.lineTo(50+V*45,37+re*36):P.moveTo(50+V*45,37+re*36)),P.stroke();R.onclick=()=>{h=R.dataset.pattern,g()}}i("#open-patterns").onclick=()=>{e.image&&(t.setStep(2),c.showModal(),g())},i("#pattern-size").oninput=R=>{d.scale=Number(R.target.value)/100,i("#pattern-size-value").value=R.target.value+"%",g()},i("#pattern-angle").oninput=R=>{d.angle=Number(R.target.value),i("#pattern-angle-value").value=R.target.value+"°",g()};for(let R of["x","y"])i("#pattern-"+R).oninput=P=>{d[R]=Number(P.target.value)/100,g()};i("#center-pattern").onclick=()=>{d.x=d.y=0,g()};function y(R,P,B){let V=!1,re=null,le=we=>{let Te=R.getBoundingClientRect(),Be=P();return{x:((we.clientX-Te.left)/Te.width*R.width-Be.x)/Be.w*2-1,y:((we.clientY-Te.top)/Te.height*R.height-Be.y)/Be.h*2-1}};R.onpointerdown=we=>{V=!0,re=le(we),R.setPointerCapture(we.pointerId),B(re,!0)},R.onpointermove=we=>{V&&B(le(we),!1)},R.onpointerup=R.onpointercancel=()=>V=!1}y(i("#pattern-preview"),()=>u,R=>{d.x=_t(R.x,-.85,.85),d.y=_t(R.y,-.85,.85),g()}),i("#apply-pattern").onclick=()=>{let R=f();R.length&&(t.editStrokes(P=>P.push(...R)),c.close(),r("纹样已刻入作品，可以继续添加、擦除或撤销。"))};let m=l("lettering-dialog","给这件作品，留一句心意。","在预览上拖动落款，调整字形、大小和角度。确定后会进入二维作品与三维刻痕。",'<div class="play-editor"><canvas id="lettering-preview" width="840" height="640" aria-label="拖动落款调整位置"></canvas><div class="play-editor-controls"><label class="field-label" for="inscription-text">写什么？最多8字</label><input id="inscription-text" type="text" maxlength="8" placeholder="例如：阜新 · 初见"><label class="field-label" for="inscription-font">落款字形</label><select id="inscription-font"><option value="serif">宋体 · 书卷感</option><option value="sans">黑体 · 简洁</option></select><label class="check"><input id="inscription-vertical" type="checkbox">竖排落款</label><label class="field-label" for="inscription-size">字的大小</label><input id="inscription-size" type="range" min="8" max="35" value="18"><label class="field-label" for="inscription-angle">落款角度</label><input id="inscription-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>左右位置 <input id="inscription-x" type="range" min="-85" max="85" value="0" aria-label="落款水平位置"><span class="axis-captions"><span>向左</span><span>向右</span></span></label><label>上下位置 <input id="inscription-y" type="range" min="-85" max="85" value="32" aria-label="落款垂直位置"><span class="axis-captions"><span>向上</span><span>向下</span></span></label></div><button id="apply-lettering" class="primary full">把心意刻进作品 →</button><button id="remove-lettering" class="text-button">清除当前落款</button><p class="hint">落款仅保留作品轮廓内的部分。可随时重新打开修改，或关闭弹窗取消本次修改。</p></div></div>'),p,E;function v(){let R=i("#lettering-preview"),P={...e,inscription:p};E=Zt(R.getContext("2d"),R.width,R.height,P,{padding:.1}),i("#inscription-x").value=Math.round(p.x*100),i("#inscription-y").value=Math.round(p.y*100)}i("#open-lettering").onclick=()=>{if(e.image){t.setStep(2),p=structuredClone(e.inscription||{text:"阜新",x:0,y:.32,size:.18,angle:0,font:"serif",vertical:!1});for(let R of["text","font","size","angle","vertical"]){let P=i("#inscription-"+R);R==="vertical"?P.checked=p[R]:P.value=R==="size"?Math.round(p.size*100):p[R]}m.showModal(),v()}};for(let R of["text","font","size","angle","vertical","x","y"])i("#inscription-"+R).oninput=P=>{p[R]=R==="vertical"?P.target.checked:R==="text"?Array.from(P.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,8).join(""):R==="font"?P.target.value:Number(P.target.value)/(R==="size"||R==="x"||R==="y"?100:1),v()};y(i("#lettering-preview"),()=>E,R=>{p.x=_t(R.x,-.85,.85),p.y=_t(R.y,-.85,.85),v()}),i("#apply-lettering").onclick=()=>{e.inscription=p.text.trim()?structuredClone(p):null,t.refresh(),m.close(),r("落款已留在作品上，三维刻痕也会同步更新。")},i("#remove-lettering").onclick=()=>{e.inscription=null,t.refresh(),m.close(),r("已清除落款。")},i(".finish-controls").insertAdjacentHTML("afterbegin",'<details id="styling-panel" class="styling-panel"><summary>◈ 文创搭配 · 换个方式欣赏</summary><label class="field-label" for="display-style">成品搭配</label><select id="display-style"><option value="stone">素石 · 只看作品</option><option value="pendant">绳系挂件</option><option value="stand">展台摆件</option></select><label class="field-label" for="cord-color">挂绳颜色</label><select id="cord-color"><option value="cinnabar">朱砂红</option><option value="ink">松烟黑</option><option value="jade">竹青绿</option></select><label class="field-label" for="display-backdrop">展示氛围</label><select id="display-backdrop"><option value="ink">墨色工坊</option><option value="paper">暖纸展厅</option><option value="night">夜色藏蓝</option></select><p class="hint">搭配为文创外观示意，可随3D截图保存。</p></details>');function _(){let R=e.presentation;i("#studio").dataset.backdrop=R.backdrop,i("#display-style").value=R.style,i("#display-backdrop").value=R.backdrop,i("#cord-color").value=R.cord,i("#cord-color").disabled=R.style!=="pendant",i("#work-title").value=e.workTitle||""}i("#open-styling").onclick=()=>{t.setStep(3),i("#styling-panel").open=!0,_(),i("#styling-panel").scrollIntoView({behavior:"smooth",block:"center"})};for(let[R,P]of[["display-style","style"],["cord-color","cord"],["display-backdrop","backdrop"]])i("#"+R).onchange=B=>{e.presentation={...e.presentation,[P]:B.target.value},_(),t.refresh()};i(".heading-actions").insertAdjacentHTML("beforebegin",'<div class="work-title"><label for="work-title">为作品起名</label><input id="work-title" maxlength="24" placeholder="例如：一叶知秋" aria-label="作品名称，最多24字"></div>'),i("#work-title").oninput=R=>e.workTitle=Array.from(R.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,24).join("");let C=[{id:"moon",title:"月下团圆",desc:"圆牌 · 水波 · 夜色挂件",kind:"round",pattern:"waves",text:"团圆",style:"pendant",backdrop:"night"},{id:"mountain",title:"山海有约",desc:"山形 · 朝阳 · 暖纸展台",kind:"mountain",pattern:"sunrise",text:"山海",style:"stand",backdrop:"paper"},{id:"leaf",title:"竹影清风",desc:"叶形 · 竹影 · 竹青挂绳",kind:"leaf",pattern:"bamboo",text:"清风",style:"pendant",backdrop:"ink"},{id:"heart",title:"心上繁花",desc:"心形 · 五瓣花 · 温柔落款",kind:"heart",pattern:"blossom",text:"如愿",style:"stone",backdrop:"paper"}],A=l("inspiration-dialog","借一份灵感，再改成自己的。","选择一份配方，会替换当前外形、刻线与落款；原料保持不变，可用下方按钮撤回。",`<div class="recipe-grid">${C.map((R,P)=>`<button data-recipe="${R.id}"><span>0${P+1}</span><strong>${R.title}</strong><small>${R.desc}</small><b>试试这个 ↗</b></button>`).join("")}</div><button id="random-recipe" class="primary compact">帮我抽一份 ✧</button><button id="undo-inspiration" class="text-button" disabled>撤回上次灵感</button><p class="hint">基于原创设计配方组合，不冒充传统纹样或生成式AI结果。</p>`),L=null,O=!1;i("#open-inspiration").onclick=()=>A.showModal();async function w(R){if(!(!e.image||O)){O=!0;try{L=n.projectData(),i("#undo-inspiration").disabled=!1,e.kind=R.kind,i("#motif").value=R.kind,e.pose.scale=.3,e.strokes=Ru(pc(R.pattern,{scale:.68,y:-.05},.016,.65),(...P)=>Hr(e.kind,...P)),e.inscription={text:R.text,x:0,y:.3,size:.14,angle:0,font:"serif",vertical:!1},e.workTitle=R.title,e.presentation={style:R.style,backdrop:R.backdrop,cord:R.id==="leaf"?"jade":"cinnabar"},e.polish=.86,await n.optimize(),t.clearHistory(),_(),t.setStep(3),A.close(),r("灵感已展开，可以回到刻线继续修改；重新打开灵感抽签可撤回。")}finally{O=!1}}}s("[data-recipe]").forEach(R=>R.onclick=()=>w(C.find(P=>P.id===R.dataset.recipe))),i("#random-recipe").onclick=()=>w(C[Math.floor(Math.random()*C.length)]),i("#undo-inspiration").onclick=async()=>{if(!L)return;let R=L;L=null,await n.restoreProject(R),i("#undo-inspiration").disabled=!0,A.close()};let M=l("comparison-dialog","把不同的构思，放在一起看。","最多暂存三份当前设计。可以继续修改后再加入，点击任意方案回到创作。关闭弹窗不会清空；刷新页面后会清空。",'<div class="comparison-actions"><button id="add-comparison" class="primary compact">加入当前方案 ＋</button><button id="export-comparison" class="text-button" disabled>导出对比图 ↗</button></div><div id="comparison-cards" class="comparison-cards"></div>'),U=[];function G(){let R=i("#comparison-cards");if(R.replaceChildren(),i("#export-comparison").disabled=!U.length,!U.length){let P=document.createElement("p");P.className="comparison-empty",P.textContent="先加入当前方案，再试一套纹样或灵感配方，回来比较。",R.append(P);return}U.forEach((P,B)=>{let V=document.createElement("article"),re=document.createElement("img"),le=document.createElement("h3"),we=document.createElement("p"),Te=document.createElement("button"),Be=document.createElement("button");re.src=P.image,re.alt=P.title,le.textContent=P.title,we.textContent=`色区匹配 ${(P.metrics.fit*100).toFixed(1)}% · ${P.project.strokes.length}段刻线`,Te.textContent="从这份继续编辑 ↗",Te.className="feature-button",Te.onclick=async()=>{await n.restoreProject(P.project),M.close()},Be.textContent="移出对比",Be.className="text-button small",Be.onclick=()=>{U.splice(B,1),G()},V.append(re,le,we,Te,Be),R.append(V)})}i("#open-comparison").onclick=()=>{M.showModal(),G()},i("#add-comparison").onclick=()=>{if(!e.image)return;let R=document.createElement("canvas");if(R.width=640,R.height=480,t.renderArt(R.getContext("2d"),640,480),U.length===3){r("已有三份方案，请先移出一份，再加入新设计。");return}U.push({project:n.projectData(),metrics:{...e.layout},image:R.toDataURL("image/jpeg",.88),title:e.workTitle||Pu[e.kind]+" · 方案 "+(U.length+1)}),G()},i("#export-comparison").onclick=async()=>{let R=document.createElement("canvas");R.width=1500,R.height=1e3;let P=R.getContext("2d");P.fillStyle="#151917",P.fillRect(0,0,1500,1e3),P.fillStyle="#d9bc8b",P.font="40px SimSun,serif",P.fillText("石里有境 · 我的构思对照",70,90),P.font="18px sans-serif",P.fillStyle="#a2a69b",P.fillText("同一段创作，不同的可能。",70,130);let B=1360/U.length;for(let V=0;V<U.length;V++){let re=U[V],le=new Image;le.src=re.image,await le.decode();let we=70+V*B,Te=B-20,Be=Math.min(Te,560);P.drawImage(le,we+(Te-Be)/2,220,Be,Be*.75),P.fillStyle="#e9e5d9",P.font="26px SimSun,serif",P.fillText(re.title,we,710,Te),P.fillStyle="#a2a69b",P.font="16px sans-serif",P.fillText(`匹配 ${(re.metrics.fit*100).toFixed(1)}% · ${re.project.strokes.length}段刻线`,we,755,Te),P.font="12px sans-serif",P.fillText(nm(re.project.sample),we,800,Te)}P.font="15px sans-serif",P.fillStyle="#a2a69b",P.fillText("数字创意示意 · 来源与许可见 commons.wikimedia.org · Hannes Grobe样本衍生图适用CC BY-SA 2.5",70,950),R.toBlob(V=>{V&&a(V,"石里有境-方案对比.png")})};let Y=l("poster-dialog","把这一次相遇，做成纪念。","用你的当前作品制作纪念海报，名称可在创作页修改。海报保留素材来源与数字设计说明。",'<div class="poster-layout"><canvas id="poster-preview" width="1000" height="1400" aria-label="纪念海报预览"></canvas><div><div class="poster-themes"><button data-poster-theme="paper">留白手札<small>暖纸 · 朱印 · 留白</small></button><button data-poster-theme="night">星夜藏石<small>藏蓝 · 星光 · 金线</small></button><button data-poster-theme="earth">山野雅集<small>墨绿 · 山线 · 手作</small></button></div><button id="download-poster" class="primary full">下载纪念海报 ↗</button><p class="hint">1000 × 1400 PNG，可保存、打印或用于比赛过程展示。作品图采用正面成器效果；文创搭配请用3D截图保存。</p></div></div>'),j="paper";function Z(){let R=i("#poster-preview"),P=R.getContext("2d"),B={paper:["#e9dfca","#24352d","#a33e2f"],night:["#101e31","#e9d7ac","#9b804c"],earth:["#20342a","#e7dbc3","#c89567"]}[j];P.fillStyle=B[0],P.fillRect(0,0,1e3,1400),P.strokeStyle=B[2],P.lineWidth=1,P.strokeRect(42,42,916,1316),P.fillStyle=B[2],P.font="18px sans-serif",P.fillText("石里有境 / FUXIN AGATE ATELIER",84,110),P.fillStyle=B[1],P.font="64px SimSun,serif";let V=e.workTitle||Pu[e.kind]+" · 石中有境",re=Array.from(V);if(P.fillText(re.slice(0,12).join(""),80,220,840),re.length>12&&(P.font="40px SimSun,serif",P.fillText(re.slice(12).join(""),84,280,840)),P.font="20px sans-serif",P.fillText("观天然纹色，留一份自己的构思。",84,330),P.save(),P.translate(70,380),Zt(P,860,760,e,{background:!1,padding:.12}),P.restore(),j==="night"){P.fillStyle="#d9bc8b66";for(let le=0;le<36;le++){let we=80+le*163%840,Te=380+le*251%700;P.beginPath(),P.arc(we,Te,le%3===0?2:1,0,Math.PI*2),P.fill()}}else if(j==="earth"){P.strokeStyle="#bda67c55";for(let le=0;le<3;le++)P.beginPath(),P.moveTo(70,1110+le*12),P.lineTo(290,1030+le*12),P.lineTo(480,1085+le*12),P.lineTo(740,1010+le*12),P.lineTo(930,1100+le*12),P.stroke()}P.fillStyle=B[2],P.fillRect(82,1160,54,54),P.fillStyle=B[0],P.font="26px SimSun,serif",P.fillText("境",96,1197),P.fillStyle=B[1],P.font="20px sans-serif",P.fillText("辽宁 · 阜新 / 玛瑙文化数字创作纪念",160,1180),P.font="16px sans-serif",P.fillText(new Date().toLocaleDateString("zh-CN")+" · 纹样、落款与外形来自本次设计",160,1210),P.font="13px sans-serif",P.fillText("原料："+nm(e.sample),84,1272,830),P.fillText(e.sample==="bands"?"commons.wikimedia.org · 衍生图片适用 CC BY-SA 2.5":e.sample==="nodule"?"commons.wikimedia.org · 原图许可 CC BY 2.0":"原料为程序化教学样本或用户自有图片",84,1300,830),P.fillText("数字创意示意，非真实加工结果。",84,1328),s("[data-poster-theme]").forEach(le=>le.classList.toggle("selected",le.dataset.posterTheme===j))}return i("#open-poster").onclick=()=>{e.image&&(Y.showModal(),Z())},s("[data-poster-theme]").forEach(R=>R.onclick=()=>{j=R.dataset.posterTheme,Z()}),i("#download-poster").onclick=()=>i("#poster-preview").toBlob(R=>{R&&a(R,"石里有境-"+(e.workTitle||Pu[e.kind])+"-纪念海报.png")}),document.addEventListener("agate-craft-reset",_),{sync:_,closeDialogs(){for(let R of[c,m,A,M,Y])R.close()},get comparisons(){return U}}}pi();function mc(n){if(!Array.isArray(n)||n.length<5||n.length>2e3)throw Error("请画出至少五个点的完整外形。");let e=[];for(let f of n){if(!Array.isArray(f)||f.length!==2||!f.every(g=>Number.isFinite(g)&&Math.abs(g)<100))throw Error("轮廓坐标无效。");(!e.length||Math.hypot(f[0]-e.at(-1)[0],f[1]-e.at(-1)[1])>.015)&&e.push([...f])}e.length>5&&Math.hypot(e[0][0]-e.at(-1)[0],e[0][1]-e.at(-1)[1])<.06&&e.pop();let t=e.filter((f,g)=>g%Math.max(1,Math.ceil(e.length/160))===0);if(t.length<5)throw Error("轮廓太小，请画大一些。");let i=(f,g,y)=>(g[0]-f[0])*(y[1]-f[1])-(g[1]-f[1])*(y[0]-f[0]),s=(f,g,y)=>Math.abs(i(f,g,y))<1e-8&&y[0]>=Math.min(f[0],g[0])-1e-8&&y[0]<=Math.max(f[0],g[0])+1e-8&&y[1]>=Math.min(f[1],g[1])-1e-8&&y[1]<=Math.max(f[1],g[1])+1e-8;for(let f=0;f<t.length;f++)for(let g=f+2;g<t.length;g++){if(f===0&&g===t.length-1)continue;let y=t[f],m=t[(f+1)%t.length],p=t[g],E=t[(g+1)%t.length];if(i(y,m,p)*i(y,m,E)<0&&i(p,E,y)*i(p,E,m)<0||s(y,m,p)||s(y,m,E)||s(p,E,y)||s(p,E,m))throw Error("线条有交叉或重叠，请画一个不交叉的闭合外形。")}let r=t.map(f=>f[0]),a=t.map(f=>f[1]),o=Math.min(...r),l=Math.max(...r),c=Math.min(...a),h=Math.max(...a),d=Math.max(l-o,h-c),u=0;if(t.forEach((f,g)=>{let y=t[(g+1)%t.length];u+=f[0]*y[1]-y[0]*f[1]}),d<.15||Math.abs(u)<d*d*.08)throw Error("轮廓面积太小，请画一个有宽度的外形。");return t.map(([f,g])=>[(f-(o+l)/2)/d*1.8,(g-(c+h)/2)/d*1.8])}function sm({state:n,experience:e,$:t,$$:i,toast:s,getDrawRect:r,download:a}){t("#motif").insertAdjacentHTML("beforeend",'<option value="drop">凝露 · 水滴</option><option value="round">团圆 · 圆牌</option><option value="heart">心意 · 心形</option><option value="custom" disabled>我的手绘外形</option>'),t("#motif").insertAdjacentHTML("afterend",'<button id="draw-outline" class="feature-button">✎ 自己画一个外形</button>'),t("#palette").insertAdjacentHTML("afterend",'<button id="pick-color" class="feature-button" aria-pressed="false">⌕ 放大镜选色</button><p class="hint">开启后，移动到原料上放大纹理，点击选中对应色区。</p>'),t("#tool-width").insertAdjacentHTML("afterend",'<div class="feature-group"><label class="field-label" for="line-mode">用什么笔触？</label><select id="line-mode"><option value="free">自由刻线</option><option value="straight">直线刻刀</option></select><label class="check"><input id="symmetric-lines" type="checkbox">镜像刻线（同时画出另一侧）</label><label class="field-label" for="cut-depth">刻痕深浅 <output id="cut-depth-value">60%</output></label><input id="cut-depth" type="range" min="10" max="100" value="60"><p class="hint">粗细、深浅与对称作用于接下来画的笔触。</p><button id="stamp-flower" class="feature-button">✧ 刻一朵小花</button><p class="hint">点击添加中央小花，再次点击取消；也可撤销或擦除。</p></div>'),t("#polish").previousElementSibling.insertAdjacentHTML("beforebegin",'<label class="field-label" for="piece-thickness">作品厚度 <output id="thickness-value">24</output></label><input id="piece-thickness" type="range" min="8" max="65" value="24"><p class="hint">数字造型比例；切换侧面可观察厚度。</p><div class="view-actions"><button data-orientation="front">正面</button><button data-orientation="side">侧面</button><button data-orientation="back">背面</button></div><button id="spin-piece" class="feature-button" aria-pressed="false">▷ 自动环绕欣赏</button>'),t("#export-finished").insertAdjacentHTML("afterend",'<button id="capture-3d" class="feature-button">▣ 保存当前3D视角</button>');let o=document.createElement("div");o.id="color-loupe",o.hidden=!0,o.innerHTML='<canvas width="140" height="100"></canvas><span></span>',t("#canvas-stage").append(o);let l=!1;function c(v){l=v,t("#pick-color").setAttribute("aria-pressed",String(v)),t("#pick-color").textContent=v?"× 结束选色":"⌕ 放大镜选色",o.hidden=!v,t("#design-canvas").style.cursor=v?"crosshair":"grab"}t("#pick-color").onclick=()=>{e.setView("color"),c(!l)};let h=t("#design-canvas");function d(v,_=!1){if(!l||n.step!==1||n.view!=="color"){o.hidden=!0;return}let C=h.getBoundingClientRect(),A=r(),L=v.clientX-C.left,O=v.clientY-C.top,w=(L-A.x)/A.w,M=(O-A.y)/A.h;if(w<0||w>=1||M<0||M>=1){o.hidden=!0;return}v.stopImmediatePropagation(),_&&v.preventDefault();let U=n.analysis,G=Math.floor(M*U.height)*U.width+Math.floor(w*U.width),Y=U.labels[G];o.hidden=!1,o.style.left=_t(L+22,8,C.width-156)+"px",o.style.top=_t(O-130,75,C.height-150)+"px";let j=o.querySelector("canvas").getContext("2d");j.imageSmoothingEnabled=!1,j.fillStyle="#121812",j.fillRect(0,0,140,100);let Z=n.image.width*.12;if(j.drawImage(n.image,w*n.image.width-Z*.7,M*n.image.height-Z*.5,Z*1.4,Z,0,0,140,100),j.strokeStyle="#fff1c4",j.beginPath(),j.moveTo(60,50),j.lineTo(80,50),j.moveTo(70,40),j.lineTo(70,60),j.stroke(),o.querySelector("span").textContent=Y>=0?`色区 ${Y+1} · ${U.colors[Y].hex}`:"背景区域",_){if(Y<0){s("这里是背景，请在原料内部选色。");return}document.querySelector(`[data-color="${Y}"]`)?.click(),c(!1),s("已选中这个位置的纹色，可继续借色构形。")}}h.addEventListener("pointermove",v=>d(v),!0),h.addEventListener("pointerdown",v=>d(v,!0),!0),h.addEventListener("pointerleave",()=>o.hidden=!0),document.addEventListener("keydown",v=>{v.key==="Escape"&&c(!1)}),new MutationObserver(()=>{(n.step!==1||n.view!=="color")&&c(!1)}).observe(t("#studio"),{attributes:!0,attributeFilter:["data-craft-step","data-view"]}),t("#line-mode").onchange=v=>{n.lineMode=v.target.value,t("#engrave-pen").click()},t("#symmetric-lines").onchange=v=>n.symmetry=v.target.checked,t("#cut-depth").oninput=v=>{n.depth=Number(v.target.value)/100,t("#cut-depth-value").value=v.target.value+"%"},t("#stamp-flower").onclick=()=>e.toggleFlower(),t("#piece-thickness").oninput=v=>{n.thickness=Number(v.target.value)/100,t("#thickness-value").value=v.target.value,e.refresh()},i("[data-orientation]").forEach(v=>v.onclick=()=>{e.getScene()?.setOrientation(v.dataset.orientation),t("#spin-piece").setAttribute("aria-pressed","false"),t("#spin-piece").textContent="▷ 自动环绕欣赏"}),t("#spin-piece").onclick=()=>{let v=e.getScene();if(!v)return;let _=!v.controls.autoRotate;v.setAuto(_),t("#spin-piece").setAttribute("aria-pressed",String(_)),t("#spin-piece").textContent=_?"Ⅱ 暂停环绕欣赏":"▷ 自动环绕欣赏"},t("#capture-3d").onclick=async()=>{e.setView("preview"),await e.updatePreview();let v=e.getScene();if(!v)return;let _=new Image;_.src=v.capture(),await _.decode();let C=document.createElement("canvas");C.width=_.width,C.height=_.height+88;let A=C.getContext("2d");A.fillStyle="#151917",A.fillRect(0,0,C.width,C.height),A.drawImage(_,0,0),A.fillStyle="#d9bc8b",A.font="14px sans-serif",A.fillText("石里有境 · 数字造型与刻线示意",18,_.height+28),A.fillStyle="#a2a69b",A.font="11px sans-serif";let L=n.sample==="bands"?"Photo: Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n.sample==="nodule"?"Photo: James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n.sample==="custom"?"原料：用户导入照片":"原料：程序化教学样本";A.fillText(L,18,_.height+52),A.fillText(n.sample==="bands"?"commons.wikimedia.org · 衍生图片 CC BY-SA 2.5":n.sample==="nodule"?"commons.wikimedia.org · 署名许可 CC BY 2.0":"数字创作示意 · 真实工艺需工匠核验",18,_.height+72),C.toBlob(O=>{O&&a(O,"石里有境-三维视角.png")})};let u=document.createElement("dialog");u.id="outline-dialog",u.innerHTML='<div class="dialog-heading"><div><p class="eyebrow">DRAW YOUR SHAPE</p><h2>把心里的形，画出来。</h2></div><button id="close-outline" class="icon-button" aria-label="关闭">×</button></div><p class="hint">在下方一笔画出外形，松手会自动连接起点。请避免线条交叉。</p><canvas id="outline-canvas" width="600" height="400" aria-label="用鼠标或触摸一笔画出闭合外形"></canvas><p id="outline-feedback" role="status">例如：一片不规则叶子、一枚鹅卵石、一朵云。</p><div class="outline-actions"><button id="clear-outline" class="text-button">重新画</button><button id="apply-outline" class="primary compact">用这个外形 →</button></div>',document.body.append(u);let f=t("#outline-canvas"),g=f.getContext("2d"),y=[],m=!1;function p(){g.fillStyle="#101611",g.fillRect(0,0,600,400),g.strokeStyle="#ffffff0c",g.lineWidth=1;for(let v=0;v<600;v+=40)g.beginPath(),g.moveTo(v,0),g.lineTo(v,400),g.stroke();for(let v=0;v<400;v+=40)g.beginPath(),g.moveTo(0,v),g.lineTo(600,v),g.stroke();y.length&&(g.beginPath(),y.forEach(([v,_],C)=>C?g.lineTo(v*200+300,(_+1)*200):g.moveTo(v*200+300,(_+1)*200)),m||g.closePath(),g.fillStyle="#d9bc8b1a",g.fill(),g.strokeStyle="#e5c58e",g.lineWidth=2,g.stroke(),g.fillStyle="#e5c58e",g.beginPath(),g.arc(y[0][0]*200+300,(y[0][1]+1)*200,5,0,Math.PI*2),g.fill())}function E(v){let _=f.getBoundingClientRect(),C=[_t(((v.clientX-_.left)/_.width*600-300)/200,-1.49,1.49),_t((v.clientY-_.top)/_.height*2-1,-.99,.99)];y.length<2e3&&(!y.length||Math.hypot(C[0]-y.at(-1)[0],C[1]-y.at(-1)[1])>.012)&&y.push(C),p()}return f.onpointerdown=v=>{y=[],m=!0,f.setPointerCapture(v.pointerId),E(v)},f.onpointermove=v=>{m&&E(v)},f.onpointerup=()=>{m=!1,p(),t("#outline-feedback").textContent="外形已闭合。满意就应用，也可以重新画。"},f.onpointercancel=()=>{m=!1,p()},t("#draw-outline").onclick=()=>{u.showModal(),p()},t("#close-outline").onclick=()=>u.close(),t("#clear-outline").onclick=()=>{y=[],p(),t("#outline-feedback").textContent="画一个新的外形，松手自动闭合。"},t("#apply-outline").onclick=()=>{try{let v=mc(y);yo(v),n.customOutline=v,t('#motif option[value="custom"]').disabled=!1,t("#motif").value="custom",t("#motif").dispatchEvent(new Event("change")),u.close(),s("手绘外形已成为作品轮廓，成器与3D会同步更新。")}catch(v){t("#outline-feedback").textContent=v.message}},{sync(){c(!1),t("#piece-thickness").value=Math.round(n.thickness*100),t("#thickness-value").value=Math.round(n.thickness*100),i("[data-light]").forEach(v=>v.classList.toggle("selected",v.dataset.light===n.light))}}}var Sb=["fruit","leaf","mountain","drop","round","heart","custom"];function Iu(n){let e=structuredClone(n),t=()=>{throw Error("方案文件不完整或参数超出范围，请使用本工坊导出的方案。")};(!e||e.format!=="agate-project"||![3,4].includes(e.version)||!Sb.includes(e.kind)||!["procedural","bands","nodule","custom"].includes(e.sample))&&t();for(let[s,r,a]of[["x",.03,.97],["y",.03,.97],["scale",.08,.42],["angle",-180,180]])(!Number.isFinite(e.pose?.[s])||e.pose[s]<r||e.pose[s]>a)&&t();e.kind==="custom"&&(e.outline=mc(e.outline)),(!Number.isInteger(e.color)||e.color<0||e.color>4||!Number.isFinite(e.polish)||e.polish<0||e.polish>1||!["left","right"].includes(e.light)||!Number.isFinite(e.thickness)||e.thickness<.08||e.thickness>.65)&&t(),(typeof e.removeBackground!="boolean"||!Array.isArray(e.target)||e.target.length>4e4||e.target.length<100||!Number.isInteger(e.targetWidth)||!Number.isInteger(e.targetHeight)||e.targetWidth<1||e.targetHeight<1||e.targetWidth>200||e.targetHeight>200||e.targetWidth*e.targetHeight!==e.target.length||e.target.some(s=>s!==0&&s!==1))&&t(),(!Array.isArray(e.strokes)||e.strokes.length>1e3)&&t();let i=0;for(let s of e.strokes){(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>1e4)&&t(),i+=s.points.length;for(let r of s.points)(!Array.isArray(r)||r.length!==2||r.some(a=>!Number.isFinite(a)||Math.abs(a)>1.1))&&t()}if(i>1e5&&t(),e.sample==="custom"&&(typeof e.sourceImage!="string"||e.sourceImage.length>25e5||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(e.sourceImage))&&t(),e.inscription!=null){let s=e.inscription;(typeof s.text!="string"||Array.from(s.text).length>8||/[\u0000-\u001f]/.test(s.text)||!["serif","sans"].includes(s.font)||typeof s.vertical!="boolean")&&t();for(let[r,a,o]of[["x",-.85,.85],["y",-.85,.85],["size",.08,.35],["angle",-180,180]])(!Number.isFinite(s[r])||s[r]<a||s[r]>o)&&t()}else e.inscription=null;return e.presentation!=null?(!["stone","pendant","stand"].includes(e.presentation.style)||!["ink","paper","night"].includes(e.presentation.backdrop)||!["cinnabar","ink","jade"].includes(e.presentation.cord))&&t():e.presentation={style:"stone",backdrop:"ink",cord:"cinnabar"},e.workTitle!=null&&(typeof e.workTitle!="string"||Array.from(e.workTitle).length>24||/[\u0000-\u001f]/.test(e.workTitle))&&t(),e.workTitle=e.workTitle||"",e}pi();function Lu(n=.018,e=.6){let t=[];for(let i=0;i<5;i++){let s=[],r=i*Math.PI*2/5;for(let a=0;a<=32;a++){let o=a/32*Math.PI*2,l=.13+.12*Math.cos(o);s.push([Math.cos(r)*l-Math.sin(r)*Math.sin(o)*.07,Math.sin(r)*l+Math.cos(r)*Math.sin(o)*.07])}t.push({width:n,depth:e,points:s})}return t}function Du(n,e,t){let i=new Set(t.map(r=>JSON.stringify(r.points))),s=n.filter(r=>!r.stamp&&i.has(JSON.stringify(r.points)));if(new Set(s.map(r=>JSON.stringify(r.points))).size===i.size)for(let r of s)r.stamp=e}function rm(n){let{$:e,$$:t,state:i}=n;Object.assign(i,{step:0,strokes:[],redoStrokes:[],polish:.72,light:"left",tool:"pen",toolWidth:.018,comparison:100,symmetry:!1,lineMode:"free",depth:.6,thickness:.24,inscription:null,workTitle:"",presentation:{style:"stone",backdrop:"paper",cord:"cinnabar"}});let s=null,r=null,a=null,o={x:0,y:0,w:1,h:1},l=[],c=[],h=0,d=!1,u=0,f=[["先选一块喜欢的纹色","选好原料，接下来让天然颜色参与设计。","开始构形"],["选一抹颜色，把它变成形","拖动或切换构图，右下角直接看到取形后的效果。","确认取形，去刻线"],["亲手画几笔，让它更像你的作品","在作品上拖动刻线，也可以添加筋线后自由修改。","刻线完成，去润色"],["转动它，看看属于你的成器效果","轮廓、纹理与刻线已一起进入三维作品。","导出作品"]];function g(ee=768){return gi(i,{size:ee})}function y(){let ee=e("#peek-canvas");i.image&&Zt(ee.getContext("2d"),ee.width,ee.height,i,{texture:g(384),padding:.1})}function m(){let ee=e("#design-canvas"),b=ee.getBoundingClientRect();if(!i.image||b.width<1||b.height<1)return;let D=Math.min(devicePixelRatio,2);ee.width=Math.round(b.width*D),ee.height=Math.round(b.height*D);let $=ee.getContext("2d");$.scale(D,D),i.view==="color"?n.drawSource($,b.width,b.height,{includeTarget:i.step===1,includeMotif:i.step===1}):($.fillStyle="#eee2cd",$.fillRect(0,0,b.width,b.height),o=Zt($,b.width,b.height,i,{texture:g(),compare:i.comparison,padding:.16,cursor:a,background:!1})),y()}async function p(){if(i.image)try{s||(r||(r=n.getSceneModule().then(ee=>ee.createAgateScene(e("#preview-scene")))),s=await r),s.setTexture(g(),{kind:i.kind,normalCanvas:_o(i.strokes,384,i.inscription),polish:i.polish,light:i.light,thickness:i.thickness,presentation:i.presentation}),s.resize()}catch(ee){console.error(ee),n.toast("三维暂不可用，已切换成器效果，可继续创作。"),v("carved")}}function E(){i.image&&(U(),e("#stroke-count").textContent=i.strokes.length,e("#undo-stroke").disabled=!l.length,e("#redo-stroke").disabled=!c.length,e("#polish").value=Math.round(i.polish*100),e("#polish-value").value=Math.round(i.polish*100)+"%",i.view==="preview"?(cancelAnimationFrame(u),u=requestAnimationFrame(p)):m(),y(),document.dispatchEvent(new Event("agate-craft-change")))}function v(ee){i.view=ee,e("#studio").dataset.view=ee,e("#design-canvas").hidden=ee==="preview",e("#preview-scene").hidden=ee!=="preview";for(let[D,$]of[["view-color","color"],["view-carved","carved"],["view-preview","preview"]])e("#"+D).classList.toggle("selected",ee===$);e("#toggle-overlay").disabled=ee!=="color"||i.step!==1,e("#canvas-mode-label").textContent=ee==="preview"?"YOUR SHAPE · YOUR TEXTURE":ee==="carved"?"SHAPE · ENGRAVE · POLISH":"READ THE COLOR";let b=ee==="preview"?"拖动转动作品 · 滚轮缩放 · 观察轮廓厚度与刻线":i.step===2?"在作品上拖动刻线 · 使用上方按钮撤销或擦线":i.step===1&&ee==="color"?"拖动取形 · 滚轮缩放 · Shift＋滚轮旋转":i.step===1?"拖动改变取色位置 · 回到原料查看构图":i.step===0?"选择喜欢的原料，再点击“开始构形”":"滑动下方对比，观察局部原料与成器的变化";e("#canvas-instruction").textContent=b,e("#canvas-stage").classList.toggle("carving",i.step===2&&ee==="carved"),ee==="preview"?p():requestAnimationFrame(m)}function _(ee){i.step=_t(ee,0,3),e("#studio").dataset.craftStep=i.step,t(".craft-stepper [data-craft-step]").forEach(D=>{let $=Number(D.dataset.craftStep);D.classList.toggle("active",$===i.step),D.classList.toggle("done",$<i.step),D.setAttribute("aria-current",$===i.step?"step":"false")}),e("#work-stage-badge").textContent=["观料","借色构形","亲手刻线","润色成器"][i.step]+" · 0"+(i.step+1)+" / 04",e("#step-goal").textContent=f[i.step][0],e("#step-tip").textContent=f[i.step][1],e("#next-step").innerHTML=f[i.step][2]+" <span>→</span>",e("#previous-step").disabled=i.step===0,e("#context-title").textContent=i.step===2?"留下你的刻线":"纹色与笔触",e("#context-copy").textContent=i.step===2?"从一条线开始。沿着纹理，试着给叶片添叶脉、给山形添层次。":"你所选的原料、取形位置和手绘刻线共同构成这件数字作品。",v(i.step<=1?"color":i.step===2?"carved":"preview"),E();let b=e("#canvas-stage");matchMedia("(prefers-reduced-motion: reduce)").matches||b.animate([{opacity:.5,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:320,easing:"ease-out"}),document.dispatchEvent(new CustomEvent("agate-craft-step",{detail:{step:i.step}}))}function C(ee=!0){i.strokes=[],l=[],c=[],i.inscription=null,i.workTitle="",i.polish=.72,i.comparison=100,e("#compare").value=100;let b=document.createElement("img");b.src=i.sample==="procedural"?n.samples[0].thumb:i.image?.src||"",b.alt="当前选择的原料";let D=document.createElement("p");D.textContent=e("#canvas-sample-name").textContent,e("#material-mini").replaceChildren(b,D),ee?_(0):E(),document.dispatchEvent(new Event("agate-craft-reset"))}function A(){return structuredClone(i.strokes)}function L(){l.push(A()),l.length>80&&l.shift(),c=[]}function O(){l.length&&(c.push(A()),i.strokes=l.pop(),E())}function w(){c.length&&(l.push(A()),i.strokes=c.pop(),E())}function M(){Du(i.strokes,"veins",Qc(i.kind,i.toolWidth)),Du(i.strokes,"flower",Lu(i.toolWidth,i.depth))}function U(){for(let[ee,b,D,$]of[["preset-lines","veins","添一组筋线","✧"],["stamp-flower","flower","刻一朵小花","✧"]]){let ae=e("#"+ee);if(!ae)continue;let ce=i.strokes.some(de=>de.stamp===b);ae.setAttribute("aria-pressed",String(ce)),ae.classList.toggle("selected",ce),ae.textContent=ce?b==="veins"?"✓ 筋线已添加 · 再点取消":"✓ 小花已添加 · 再点取消":$+" "+D,ae.title=ce?"再次点击只取消这一组，保留其他刻线":"点击添加，再次点击取消"}}function G(ee,b){M(),L();let D=i.strokes.some($=>$.stamp===ee);D?i.strokes=i.strokes.filter($=>$.stamp!==ee):i.strokes.push(...b().map($=>({...$,stamp:ee}))),E(),n.toast(D?"已取消这组图案，其他刻线保留。":"已添加，再次点击此按钮即可取消。")}function Y(){G("veins",()=>Qc(i.kind,i.toolWidth))}function j(ee){i.tool=ee,e("#engrave-pen").classList.toggle("selected",ee==="pen"),e("#engrave-erase").classList.toggle("selected",ee==="erase"),i.view!=="carved"&&v("carved")}function Z(ee,b){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let D=e("#carve-particles");for(let $=0;$<3;$++){let ae=document.createElement("i");ae.style.left=ee+"px",ae.style.top=b+"px",ae.style.setProperty("--dx",(Math.random()-.5)*25+"px"),ae.style.setProperty("--dy",Math.random()*25+"px"),D.appendChild(ae),setTimeout(()=>ae.remove(),550)}}function R(){d&&(h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范")}e("#studio").addEventListener("pointerdown",ee=>{ee.target.closest("#play-demo")||R()},{capture:!0});let P=e("#design-canvas"),B=!1,V=null,re=null,le=!1,we=ee=>{let b=P.getBoundingClientRect();return{x:ee.clientX-b.left,y:ee.clientY-b.top}};function Te(ee,b=!1){if(!i.analysis)return;let D=we(ee);if(i.step===2&&i.view==="carved"){let $=(D.x-o.x)/o.w*2-1,ae=(D.y-o.y)/o.h*2-1;if(a={x:$,y:ae},!B){m();return}if(!Hr(i.kind,$,ae)){re&&(re=null);return}if(i.tool==="pen"){re||(le||(L(),le=!0),re={width:i.toolWidth,points:[],depth:i.depth},i.strokes.push(re));let ce=re.points.at(-1);(!ce||Math.hypot(ce[0]-$,ce[1]-ae)>.003)&&(i.lineMode==="straight"&&re.points.length>1&&re.points.splice(1),re.points.push([$,ae]))}else{let ce=i.strokes.filter(de=>!de.points.some(([Ne,I])=>Math.hypot(Ne-$,I-ae)<i.toolWidth*3+.04));ce.length!==i.strokes.length&&(le||(L(),le=!0),i.strokes=ce)}Math.random()>.5&&Z(D.x,D.y),E();return}if(!(i.step!==1||!B)){if(i.view==="color"){let $=n.getDrawRect(),ae=(D.x-$.x)/$.w,ce=(D.y-$.y)/$.h;if(ae<0||ae>1||ce<0||ce>1)return;if(i.brush==="none")i.pose.x=_t(ae,.03,.97),i.pose.y=_t(ce,.03,.97);else{let de=i.analysis,Ne=Math.round(ae*de.width),I=Math.round(ce*de.height);for(let ue=-4;ue<=4;ue++)for(let K=-4;K<=4;K++){let oe=Ne+K,N=I+ue;if(K*K+ue*ue<=16&&oe>=0&&oe<de.width&&N>=0&&N<de.height){let F=N*de.width+oe;de.foreground[F]&&(i.target[F]=i.brush==="add"?1:0)}}}}else i.view==="carved"&&V&&(i.pose.x=_t(i.pose.x-(D.x-V.x)/o.w*i.pose.scale*2,.03,.97),i.pose.y=_t(i.pose.y-(D.y-V.y)/o.h*i.pose.scale*2,.03,.97));i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout(),V=D}}P.addEventListener("pointerdown",ee=>{B=!0,V=we(ee),le=!1,re=null,P.setPointerCapture(ee.pointerId),Te(ee,!0)}),P.addEventListener("pointermove",ee=>Te(ee));for(let ee of["pointerup","pointercancel"])P.addEventListener(ee,()=>{if(B&&i.symmetry&&i.step===2&&i.tool==="pen"&&le){let b=i.strokes.slice(l.at(-1)?.length||0);for(let D of b)i.strokes.push({...D,points:D.points.map(([$,ae])=>[-$,ae])})}B=!1,re=null,le=!1,E()});P.addEventListener("pointerleave",()=>{a=null,B||m()}),P.addEventListener("wheel",ee=>{i.step===1&&(ee.preventDefault(),ee.shiftKey?i.pose.angle=_t(i.pose.angle+(ee.deltaY>0?5:-5),-180,180):i.pose.scale=_t(i.pose.scale+(ee.deltaY>0?-.01:.01),.08,.42),i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout())},{passive:!1});async function Be(){if(d){h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范";return}let ee=++h;d=!0,e("#play-demo").textContent="Ⅱ 停止示范";let b=D=>new Promise($=>setTimeout($,D));try{if(!i.image||(i.kind="leaf",e("#motif").value="leaf",i.strokes=[],l=[],c=[],i.pose.scale=.3,n.updateLayout(),_(1),await b(650),ee!==h)||(await n.optimize(),await b(1e3),ee!==h)||(_(2),await b(650),ee!==h)||(Y(),await b(900),ee!==h))return;i.polish=.85,_(3),n.toast("示范完成：现在可继续转动、润色，或返回刻线修改。")}finally{ee===h&&(d=!1,e("#play-demo").textContent="▷ 再看一次示范")}}return t(".craft-stepper [data-craft-step]").forEach(ee=>ee.onclick=()=>{h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范",_(Number(ee.dataset.craftStep))}),e("#start-shaping").onclick=()=>_(1),e("#next-step").onclick=()=>i.step===3?n.exportCard():_(i.step+1),e("#previous-step").onclick=()=>_(i.step-1),e("#back-to-shape").onclick=()=>_(1),e("#view-carved").onclick=()=>v("carved"),e("#result-peek").onclick=()=>v("carved"),e("#engrave-pen").onclick=()=>j("pen"),e("#engrave-erase").onclick=()=>j("erase"),e("#undo-stroke").onclick=O,e("#redo-stroke").onclick=w,e("#tool-width").oninput=ee=>{i.toolWidth=Number(ee.target.value)*.006,e("#tool-width-value").value=ee.target.value,m()},e("#preset-lines").onclick=Y,e("#clear-strokes").onclick=()=>{i.strokes.length&&(L(),i.strokes=[],E())},e("#compare").oninput=ee=>{i.comparison=Number(ee.target.value),m()},e("#polish").oninput=ee=>{i.polish=Number(ee.target.value)/100,E()},t("[data-light]").forEach(ee=>ee.onclick=()=>{i.light=ee.dataset.light,t("[data-light]").forEach(b=>b.classList.toggle("selected",ee===b)),E()}),e("#export-finished").onclick=n.exportCard,e("#save-finished").onclick=n.saveDesign,e("#play-demo").onclick=Be,e("#motif").addEventListener("change",()=>{i.strokes=[],l=[],c=[],E()}),document.addEventListener("keydown",ee=>{i.route!=="studio"||i.step!==2||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(ee.ctrlKey||ee.metaKey)&&ee.key.toLowerCase()==="z"&&(ee.preventDefault(),ee.shiftKey?w():O())}),_(0),{draw:m,refresh:E,setView:v,setStep:_,updatePreview:p,resetCraft:C,stopDemo:R,renderArt:(ee,b,D)=>Zt(ee,b,D,i,{texture:g(),padding:.12}),getScene:()=>s,toggleFlower:()=>G("flower",()=>Lu(i.toolWidth,i.depth)),editStrokes:ee=>{L(),ee(i.strokes),E()},clearHistory:()=>{M(),l=[],c=[],E()},get strokes(){return i.strokes}}}pi();var me=n=>document.querySelector(n),Tt=n=>[...document.querySelectorAll(n)],k={analysis:null,target:null,selectedColor:0,sample:"procedural",kind:"fruit",pose:{x:.5,y:.5,scale:.24,angle:0},brush:"none",overlay:!0,candidates:[],selectedCandidate:-1,view:"color",image:null,analysisMs:0,optimizeMs:0,baseline:null,layout:null,route:"home",loadId:0},xc={fruit:"秋实",leaf:"一叶",mountain:"远山",drop:"凝露",round:"团圆",heart:"心意",custom:"手绘成器"},xr=[{id:"procedural",title:"赤霞流纹",sub:"程序化教学样本",origin:"由代码生成的纹色样本，不对应真实阜新原石。"},{id:"bands",title:"层叠条带",sub:"开放许可实拍样本",file:"./assets/agate-bands.jpg",origin:"Hannes Grobe / CC BY-SA 2.5。公开玛瑙切片，来源页未标产地；非阜新原料证明。"},{id:"nodule",title:"结核纹理",sub:"开放许可实拍样本",file:"./assets/agate-nodule.jpg",origin:"James St. John / CC BY 2.0。公开玛瑙结核样本；非阜新原料证明。"}],Mt,Ga,vc,pm,Ou={x:0,y:0,w:1,h:1},mm,Fu,Bu=[];document.addEventListener("agate-craft-reset",()=>{k.savedDesignId=null});function Nt(n){me("#toast").textContent=n,me("#toast").classList.add("show"),clearTimeout(mm),mm=setTimeout(()=>me("#toast").classList.remove("show"),3400)}function vs(n){try{return JSON.parse(localStorage.getItem(n)||"[]")}catch{return[]}}function _c(n,e){try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return Nt("浏览器存储不可用或已满，请先导出方案卡。"),!1}}function Un(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function zb(){let n=document.createElement("canvas");n.width=720,n.height=600;let e=n.getContext("2d"),t=e.createImageData(n.width,n.height),i=(s,r,a)=>s.map((o,l)=>o+(r[l]-o)*a);for(let s=0;s<n.height;s++)for(let r=0;r<n.width;r++){let a=(r/n.width-.5)*2,o=(s/n.height-.5)*2,l=Math.atan2(o,a),c=Math.hypot(a*.95,o*1.05),h=.84+.045*Math.sin(l*5)+.025*Math.cos(l*9),d=(s*n.width+r)*4;if(c>h){t.data[d+3]=0;continue}let u=.055*Math.sin(a*10+o*6)+.035*Math.cos(o*13-a*2),f=Math.hypot(a+.2,o*.78-.1)+u,g=.5+.5*Math.sin(f*31+Math.sin(a*7)*1),y=.5+.5*Math.sin(f*8.4+a),m=i([91,31,16],[211,122,45],y);m=i(m,[242,223,181],Math.pow(g,12)*.9);let p=1+.12*Math.max(0,1-Math.hypot(a+.35,o+.45)),E=.98+.025*Math.sin(r*2.14+s*.43);for(let v=0;v<3;v++)t.data[d+v]=_t(m[v]*p*E,0,255);t.data[d+3]=255}return e.putImageData(t,0,0),n}var gm=zb();xr[0].thumb=gm.toDataURL("image/png");function bc(){me("#sample-list").innerHTML=xr.map(n=>`<button class="sample ${n.id===k.sample?"selected":""}" data-sample="${n.id}"><img src="${n.thumb||n.file}" alt="${n.title}"><span><strong>${n.title}</strong><small>${n.sub}</small></span></button>`).join(""),Tt("[data-sample]").forEach(n=>n.onclick=()=>Mc(n.dataset.sample))}async function Mc(n){let e=++k.loadId,t=xr.find(i=>i.id===n);if(t){me("#analysis-scan").classList.add("active");try{let i;if(n==="procedural"?i=gm:(i=new Image,i.src=t.file,await i.decode()),e!==k.loadId)return;k.sample=n,k.image=i,k.pose={x:.5,y:.5,scale:.24,angle:0},k.candidates=[],k.selectedCandidate=-1,me("#sample-origin").textContent=t.origin,me("#canvas-sample-name").textContent=t.title,bc(),br(),Mt?.resetCraft()}catch(i){Nt("样本读取失败，可选择其他样本或导入照片。"),console.error(i)}finally{e===k.loadId&&me("#analysis-scan").classList.remove("active")}}}function br(){if(!k.image)return;k.displayRemoveBackground=me("#remove-bg").checked;let n=performance.now(),e=document.createElement("canvas"),t=k.image.width/k.image.height;e.width=150,e.height=Math.max(40,Math.round(150/t)),e.height>200&&(e.height=200,e.width=Math.round(200*t));let i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(k.image,0,0,e.width,e.height);try{k.analysis=Nd(i.getImageData(0,0,e.width,e.height).data,e.width,e.height,5,me("#remove-bg").checked),k.selectedColor=k.analysis.colors.map((s,r)=>({v:s,i:r})).sort((s,r)=>r.v.count-s.v.count)[0].i,k.target=zr(k.analysis,k.selectedColor),k.analysisMs=performance.now()-n,k.candidates=[],k.selectedCandidate=-1,zu(),Nn(),me("#analysis-status").textContent=`已分析 ${k.analysis.validPixels.toLocaleString()} 个有效像素 · ${k.analysis.colors.length} 个色区 · ${Math.round(k.analysisMs)} ms`,k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),me("#caption-text").textContent="已完成色区分析，选择色区后可搜索构图。"}catch(s){Nt(s.message)}}function zu(){let n=k.analysis;me("#palette").innerHTML=n.colors.map((t,i)=>`<button class="swatch ${i===k.selectedColor?"selected":""}" data-color="${i}" aria-label="选择颜色${i+1}，${t.hex}" aria-pressed="${i===k.selectedColor}"><i style="background:${t.hex}"></i><span>颜色${i+1}</span><small>${(t.share*100).toFixed(0)}%</small></button>`).join("");let e=me("#work-color-state");e&&(e.textContent="当前选择：颜色"+(k.selectedColor+1)),Tt("[data-color]").forEach(t=>t.onclick=()=>{k.selectedColor=Number(t.dataset.color),k.target=zr(n,k.selectedColor),k.candidates=[],k.selectedCandidate=-1,me("#candidate-list").replaceChildren(),k.baseline=fi(n,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),zu(),Nn()})}function ym(n,e){mi(n,e)}function Hu(n,e,t,{includeTarget:i=!0,includeMotif:s=!0}={}){if(n.clearRect(0,0,e,t),n.fillStyle=n.canvas.id==="design-canvas"?"#eee2cd":"#111612",n.fillRect(0,0,e,t),!k.image)return;let r=k.image.width/k.image.height,a=e*.88,o=t*.7,l=a,c=l/r;c>o&&(c=o,l=c*r);let h=(e-l)/2,d=(t-c)/2;if(n.canvas.id==="design-canvas"&&(Ou={x:h,y:d,w:l,h:c}),n.save(),n.shadowColor="#76542b24",n.shadowBlur=14,n.shadowOffsetY=7,n.drawImage(Yi(k),h,d,l,c),n.restore(),i&&k.overlay&&k.target){let u=k.analysis,f=document.createElement("canvas");f.width=u.width,f.height=u.height;let g=f.getContext("2d"),y=g.createImageData(u.width,u.height);for(let m=0;m<k.target.length;m++)k.target[m]&&(y.data[m*4]=222,y.data[m*4+1]=204,y.data[m*4+2]=119,y.data[m*4+3]=95);g.putImageData(y,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(f,h,d,l,c),n.restore()}if(s){let u=k.pose;n.save(),n.translate(h+u.x*l,d+u.y*c),n.rotate(u.angle*Math.PI/180),n.scale(u.scale*l,u.scale*c),ym(n,k.kind),n.fillStyle="rgba(255,229,174,.10)",n.fill("evenodd"),n.strokeStyle="#fff1c4",n.lineWidth=1.5/(u.scale*l),n.shadowColor="#3b1c09",n.shadowBlur=5,n.stroke(),n.restore()}}function Wa(){if(Mt){Mt.draw();return}let n=me("#design-canvas"),e=n.getBoundingClientRect();if(e.width<1)return;let t=Math.min(devicePixelRatio,2);n.width=Math.round(e.width*t),n.height=Math.round(e.height*t);let i=n.getContext("2d");i.scale(t,t),Hu(i,e.width,e.height)}function Nn(){if(!k.analysis)return;k.layout=fi(k.analysis,k.target,k.kind,k.pose),me("#metric-fit").textContent=(k.layout.fit*100).toFixed(1)+"%",me("#metric-contain").textContent=(k.layout.containment*100).toFixed(1)+"%",me("#scale").value=Math.round(k.pose.scale*100),me("#angle").value=Math.round(k.pose.angle),me("#scale-value").value=Math.round(k.pose.scale*100)+"%",me("#angle-value").value=Math.round(k.pose.angle)+"°";let n=k.layout.fit>.65?"图案与所选色区重合较多":k.layout.fit>.3?"图案部分落入所选色区":"可以调整位置或缩小图案，寻找更多目标色区";me("#layout-explanation").textContent=`${n}。当前为“${xc[k.kind]}”主题，按 ${k.layout.samples} 个固定内部采样点计算。`,Wa(),Mt?.refresh(),k.view==="preview"&&!Mt&&Gu()}function Fi(){me("#candidate-list").innerHTML=k.candidates.map((n,e)=>`<button class="candidate ${k.selectedCandidate===e?"selected":""}" data-candidate="${e}">构图 ${String(e+1).padStart(2,"0")}<span>覆盖 ${(n.fit*100).toFixed(0)}%</span></button>`).join(""),Tt("[data-candidate]").forEach(n=>n.onclick=()=>{let e=Number(n.dataset.candidate);k.selectedCandidate=e;let{x:t,y:i,scale:s,angle:r}=k.candidates[e];k.pose={x:t,y:i,scale:s,angle:r},Fi(),Nn()})}async function Sc(){if(!k.analysis)return;let n=me("#optimize");n.disabled=!0,me("#analysis-scan").classList.add("active"),await new Promise(e=>setTimeout(e,25));try{let e=performance.now(),t=me("#lock-scale").checked,i=k.pose.scale;k.searchCount=t?196:784,k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:.24,angle:0}),k.candidates=Fd(k.analysis,k.target,k.kind,t?{scale:i}:{}),k.optimizeMs=performance.now()-e,k.selectedCandidate=0;let{x:s,y:r,scale:a,angle:o}=k.candidates[0];k.pose={x:s,y:r,scale:a,angle:o},k.baseline=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:a,angle:0}),Fi(),Nn(),me("#caption-text").textContent=`已搜索 ${k.searchCount} 个位置、尺度与角度组合 · ${Math.round(k.optimizeMs)} ms`,Nt("找到三份构图，点击比较或继续手动调整。")}finally{n.disabled=!1,me("#analysis-scan").classList.remove("active")}}function Hb(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let e=n.getContext("2d");return e.fillStyle="#412719",e.fillRect(0,0,1024,1024),e.drawImage(k.image,0,0,1024,1024),e.save(),e.translate(k.pose.x*1024,k.pose.y*1024),e.rotate(k.pose.angle*Math.PI/180),e.scale(k.pose.scale*1024,k.pose.scale*1024),ym(e,k.kind),e.fillStyle="#fff0ca30",e.fill("evenodd"),e.strokeStyle="#fff1c4",e.lineWidth=2/(k.pose.scale*1024),e.stroke(),e.restore(),n}async function Vu(){return pm||(pm=Promise.resolve().then(()=>(fm(),dm)))}async function Gu(){if(Mt)return Mt.updatePreview();try{vc||(vc=(await Vu()).createAgateScene(me("#preview-scene"))),vc.setTexture(Hb()),vc.resize()}catch(n){console.error(n),Nt("当前设备三维渲染不可用，仍可使用纹色画布。"),Wu("color")}}function Wu(n){if(Mt)return Mt.setView(n);k.view=n,me("#design-canvas").hidden=n!=="color",me("#preview-scene").hidden=n!=="preview",me("#view-color").classList.toggle("selected",n==="color"),me("#view-preview").classList.toggle("selected",n==="preview"),me("#canvas-mode-label").textContent=n==="color"?"COLOR-GUIDED COMPOSITION":"TEXTURE ON PRESET GEOMETRY",me("#canvas-instruction").textContent=n==="color"?"拖动图案调整位置 · 右侧选择创作主题":"拖动旋转 · 滚轮缩放 · 预设几何上的材质示意",me("#toggle-overlay").disabled=n==="preview",n==="preview"?Gu():requestAnimationFrame(Wa)}function vm(){let n=location.hash.slice(1)||"home";k.route=["home","guide","learn","studio","journey","collection"].includes(n)?n:"home",Tt("main>.page").forEach(e=>e.hidden=e.id!==k.route),Tt("[data-route]").forEach(e=>{let t=e.dataset.route===k.route;e.classList.toggle("active",t),t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")}),k.route!=="studio"&&Mt?.stopDemo(),k.route==="studio"&&(tm(),requestAnimationFrame(Wa),k.view==="preview"&&Gu()),k.route==="collection"&&ku(),k.route==="learn"&&requestAnimationFrame(()=>Ga?.resize()),window.scrollTo({top:0,behavior:"instant"})}function Mr(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Vb(){let n=document.createElement("canvas");n.width=1200,n.height=1260;let e=n.getContext("2d");e.fillStyle="#151917",e.fillRect(0,0,n.width,n.height),e.fillStyle="#d9bc8b",e.font="18px sans-serif",e.fillText("FUXIN · AGATE ATELIER / 石里有境",65,65),e.fillStyle="#eee6d6",e.font="42px SimSun,serif",e.fillText(k.workTitle||xc[k.kind]+" · 纹色构思",65,120,1070),e.save(),e.translate(0,180),Mt?Mt.renderArt(e,1200,790):Hu(e,1200,790,{includeTarget:!1}),e.restore(),e.strokeStyle="#ffffff25",e.beginPath(),e.moveTo(65,1e3),e.lineTo(1135,1e3),e.stroke();let t=xr.find(r=>r.id===k.sample),i=k.layout;e.font="21px sans-serif",e.fillStyle="#cfb38a",e.fillText(`图案色区匹配 ${(i.fit*100).toFixed(1)}%    图案区域保留 ${(i.containment*100).toFixed(1)}%`,65,1050),e.fillStyle="#a2a69b",e.font="16px sans-serif",e.fillText(`样本：${t?.title||"导入照片"} · ${t?.sub||"用户提供"}`,65,1090),e.fillText("二维创意示意；真实内部材质与加工可行性需工匠核验。",65,1130),e.font="13px sans-serif";let s=k.sample==="bands"?"Photo: Hannes Grobe · CC BY-SA 2.5 · commons.wikimedia.org/wiki/File:Agate1_hg.jpg":k.sample==="nodule"?"Photo: James St. John · CC BY 2.0 · commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg":"程序化教学样本 / 或用户自行导入素材";return e.fillText(s,65,1180),e.fillText(k.sample==="bands"?"图片叠加构图适用 CC BY-SA 2.5 · creativecommons.org/licenses/by-sa/2.5/":"数字作品为原创教学示意，非真实加工结果。",65,1210),n}function qu(){if(!k.analysis)return;Vb().toBlob(e=>Mr(e,`石里有境-${xc[k.kind]}-方案卡.png`),"image/png"),Nt("方案卡已导出，包含素材署名和指标。")}function wc(){let n={format:"agate-project",version:4,sample:k.sample,kind:k.kind,pose:{...k.pose},color:k.selectedColor,strokes:structuredClone(k.strokes),polish:k.polish,light:k.light,thickness:k.thickness,inscription:structuredClone(k.inscription),presentation:{...k.presentation},workTitle:k.workTitle,removeBackground:me("#remove-bg").checked,target:Array.from(k.target),targetWidth:k.analysis.width,targetHeight:k.analysis.height};if(k.kind==="custom"&&(n.outline=k.customOutline),k.sample==="custom"){let e=document.createElement("canvas"),t=Math.min(1,960/Math.max(k.image.width,k.image.height));e.width=Math.round(k.image.width*t),e.height=Math.round(k.image.height*t),e.getContext("2d").drawImage(k.image,0,0,e.width,e.height),n.sourceImage=e.toDataURL("image/jpeg",.88)}return n}function Xu({automatic:n=!1}={}){if(!k.analysis)return!1;let e=vs("agate-designs-v1"),t=e.find(r=>r.id===k.savedDesignId),i=document.createElement("canvas");i.width=420,i.height=340,Mt.renderArt(i.getContext("2d"),420,340);let s={...wc(),workshopTimeline:$u.timeline,id:t?.id||crypto.randomUUID(),created:t?.created||new Date().toISOString(),updated:new Date().toISOString(),metrics:{...k.layout},image:i.toDataURL("image/jpeg",.82),title:k.workTitle||xc[k.kind]+" · "+new Date().toLocaleDateString("zh-CN")};return _c("agate-designs-v1",[s,...e.filter(r=>r.id!==s.id)].slice(0,30))?(k.savedDesignId=s.id,Nt(n?"已自动保存到“我的作品”，可随时继续编辑。":t?"已更新“我的作品”中的这件作品。":"已收藏到“我的作品”，可继续编辑或导出方案。"),!0):!1}async function Ec(n){try{let e=[3,4].includes(n.version)?Iu(n):n;if(e.sample==="custom"&&!e.sourceImage)throw Error("这份旧收藏没有保留原料照片，请重新导入照片。");if(Mt.stopDemo(),me("#remove-bg").checked=e.removeBackground??!0,e.sample==="custom"){let t=new Image;if(t.src=e.sourceImage,await t.decode(),t.width>4096||t.height>4096)throw Error("方案图片尺寸过大。");++k.loadId,k.sample="custom",k.image=t,me("#sample-origin").textContent="由方案恢复的用户照片，仅在本机处理。",me("#canvas-sample-name").textContent="我的原料照片",bc(),br(),Mt.resetCraft()}else if(await Mc(e.sample),k.sample!==e.sample)throw Error("原料未能加载，请稍后重试。");if(e.kind==="custom"&&(yo(e.outline),k.customOutline=e.outline,me('#motif option[value="custom"]').disabled=!1),k.kind=e.kind,me("#motif").value=e.kind,k.pose={...e.pose},k.selectedColor=Math.min(e.color,k.analysis.colors.length-1),k.target=zr(k.analysis,k.selectedColor),e.target&&e.targetWidth*e.targetHeight===e.target.length){let t=k.analysis;k.target=Uint8Array.from({length:t.width*t.height},(i,s)=>e.target[Math.min(e.targetHeight-1,Math.floor(Math.floor(s/t.width)/t.height*e.targetHeight))*e.targetWidth+Math.min(e.targetWidth-1,Math.floor(s%t.width/t.width*e.targetWidth))])}k.strokes=structuredClone(e.strokes||[]),k.polish=e.polish??.72,k.light=e.light||"left",k.thickness=e.thickness??.24,k.inscription=structuredClone(e.inscription||null),k.presentation={style:"stone",backdrop:"ink",cord:"cinnabar",...e.presentation},k.workTitle=e.workTitle||"",k.savedDesignId=vs("agate-designs-v1").some(t=>t.id===n.id)?n.id:null,zu(),k.candidates=[],Fi(),Nn(),Mt.clearHistory(),Wb.sync(),Yu.sync(),location.hash="studio",Mt.setStep(2),$u.restoreTimeline(n.workshopTimeline),Nt("方案已恢复，可以继续刻线、构形或润色。")}catch(e){Nt(e.message||"方案恢复失败，请检查文件。")}}function ku(){let n=vs("agate-designs-v1");me("#collection-list").innerHTML=n.length?n.map(t=>`<article class="collection-card"><img src="${t.image}" alt="${Un(t.title)}"><h2>${Un(t.title)}</h2><p>色区覆盖 ${(t.metrics.fit*100).toFixed(1)}% · ${Un(xr.find(i=>i.id===t.sample)?.title||"导入照片")}</p><div class="card-actions"><button class="text-button small" data-edit="${t.id}">继续编辑 ↗</button><button class="text-button small" data-export="${t.id}">导出方案</button><button class="text-button small" data-delete="${t.id}">删除</button></div></article>`).join(""):'<div class="empty-state"><h2>第一份构思，从一块石开始。</h2><p>选择纹色，尝试构图，收藏你的第一件数字作品。</p><a href="#studio" class="primary compact">开始创作 ↗</a></div>',Tt("[data-edit]").forEach(t=>t.onclick=()=>Ec(n.find(i=>i.id===t.dataset.edit))),Tt("[data-export]").forEach(t=>t.onclick=()=>{let i=n.find(o=>o.id===t.dataset.export),{image:s,...r}=i;r.note=i.version>=3?"包含原料引用、手绘轮廓、色区、刻线与润色，可导入继续编辑。":"旧版参数；上传照片未保留。";let a={bands:"agate-bands.jpg",nodule:"agate-nodule.jpg"}[i.sample];r.attribution=a?Bu.find(o=>o.file===a)||a:"程序化样本或用户导入照片",Mr(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),"玛瑙创作方案.json")}),Tt("[data-delete]").forEach(t=>t.onclick=()=>{_c("agate-designs-v1",vs("agate-designs-v1").filter(i=>i.id!==t.dataset.delete)),ku()});let e=vs("agate-plans-v1");me("#plan-list").innerHTML=e.length?e.map(t=>`<div class="plan-row"><div>${Un(t.date)} · ${Un(t.interest)}<small>${Un(t.note||"尚未填写备注")}</small></div><button data-delete-plan="${t.id}">删除</button></div>`).join(""):'<p class="subtle">还没有研学意向，可在“循艺入乡”保存。</p>',Tt("[data-delete-plan]").forEach(t=>t.onclick=()=>{_c("agate-plans-v1",vs("agate-plans-v1").filter(i=>i.id!==t.dataset.deletePlan)),ku()})}function Gb(){me("#sources-content").innerHTML='<div class="source-record"><h3>背景音乐 · We Never（若如初见）</h3><p>La Mer / LongTran Final / DJ山茶花。用户指定曲目，可通过右上角音乐控件播放。</p><a href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div>'+kr.map(n=>`<div class="source-record"><h3>${n.title}</h3><p>${n.publisher} · ${n.note}</p><a href="${n.url}" target="_blank" rel="noopener">查看原始资料 ↗</a></div>`).join("")+'<div class="source-record"><h3>阜新玛瑙实景影像 · 高清分层播放</h3><p>现版使用辽宁省政府网站2026年2月6日发布《玉醇秋酿 阜新秋颂》中的《阜新玛瑙——刀刃上的大地瑰宝》专题，来源为辽宁发布、辽宁卫视《黑土地》。公开片源2560×1440，当前首页保持高细节1920×1080、25帧：先缓存短高清开场，再后台准备完整高质量视频，完整下载且确认实际播放帧后平滑接替。未准备好时继续播放清晰开场，不使用1MB低码率版本。历史4K增强文件保留归档，当前首页不再请求；不臆造源片不存在的细节。首页为真实运动镜头剪辑，非动态照片。原声主题篇重新选取雕刻手部、巧色雕件与手镯镜头，保留原画幅及台标角标；首页与主题篇均避开源片自带二维码的镜头。背景照片中的手艺、市集、雕件与原料也来自同一阜新专题的实景截帧。本站未宣称自摄或与片中工坊合作，页面未标明开放许可，使用范围待权利方确认。</p><a href="https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml" target="_blank" rel="noopener">新片源与发布出处 ↗</a> · <a href="./assets/home-film/playback.json" target="_blank" rel="noopener">画质与剪辑记录 ↗</a><p>历史版本的480p影像与实景截图来自国际在线发布、阜新市委宣传部提供的《看见阜新》，保留旧文件供历史页面兼容；当前首页已更换高清来源。</p></div><div class="source-record"><h3>实拍背景与图像素材</h3><p>公开实拍样本用于技术演示，不作为阜新原料或本地合作证明。实物图鉴采用等比缩放与格式压缩版本，原始文件归档于初始材料；画布叠加为本系统产生。</p><a href="./assets/backgrounds/credits.json" target="_blank" rel="noopener">各页面实拍背景、出处与截帧时间 ↗</a></div>'+Bu.map(n=>`<div class="source-record"><h3>${Un(n.original)}</h3><p>${Un(n.author)} / ${Un(n.license)} · ${Un(n.origin)}</p><p>${Un(n.changes||"")}</p><a href="${n.source}" target="_blank" rel="noopener">图片来源 ↗</a> · <a href="${n.licenseUrl}" target="_blank" rel="noopener">许可条款 ↗</a></div>`).join("")+'<div class="source-record"><h3>软件与示意内容</h3><p>Three.js r180 · MIT许可。循艺入乡点位卡片中的手艺与水岸情境，以及形成引导的四幅写实情境由内置 image_gen 生成，供地质概念讲述，不是实拍或物理模拟；图库中的馆藏与标本照片单独保留出处。当前全站背景采用实拍图像，按区域选用实物样本、馆藏器物及阜新专题实景截帧；标本与馆藏照片不作为阜新本地作品证明。赤霞流纹、三维原石与创作轮廓由代码生成；成器几何依据当前轮廓构建，刻线为外观凹痕示意。文化查询为本地资料检索，未调用在线生成式问答模型。</p><a href="./vendor/THREE-LICENSE.txt" target="_blank" rel="noopener">Three.js许可 ↗</a></div>',me("#sources-dialog").showModal()}function _m(){if(!k.analysis)return;let n=fi(k.analysis,k.target,k.kind,{x:.5,y:.5,scale:k.pose.scale,angle:0}),e=k.layout,t=k.target.reduce((i,s)=>i+s,0);me("#validation-content").innerHTML=`<p class="validation-p">当前图像分析分辨率 ${k.analysis.width} × ${k.analysis.height}，有效像素 ${k.analysis.validPixels}，目标色区 ${t} 像素。颜色聚类在 OKLab 空间进行，自动分色后可手动修正色区。</p><table class="data-table"><thead><tr><th>当前图像内对照</th><th>居中默认布局</th><th>当前布局</th></tr></thead><tbody><tr><td>图案色区匹配</td><td>${(n.fit*100).toFixed(1)}%</td><td>${(e.fit*100).toFixed(1)}%</td></tr><tr><td>图案区域保留</td><td>${(n.containment*100).toFixed(1)}%</td><td>${(e.containment*100).toFixed(1)}%</td></tr></tbody></table><p class="validation-p">分色耗时 ${k.analysisMs.toFixed(1)} ms；最近一次构图搜索耗时 ${k.optimizeMs?k.optimizeMs.toFixed(1)+" ms":"尚未运行"}。默认对照为居中、与当前图案相同尺度、0°；两列均在当前目标色区上重新计算。</p><p class="validation-p">以上为当前图像的运行记录，不是跨样本评测结论，也不验证雕刻可行性。更小图形可能获得更高覆盖率，需结合视觉表达选择合适方案。</p>`,me("#validation-dialog").showModal()}function xm(n){let e=[...n.toLowerCase()],i=Id.map(c=>({...c,score:c.keys.reduce((h,d)=>h+(n.includes(d)?3:0),0)+Math.min(1,e.filter(h=>c.title.includes(h)).length/10)})).sort((c,h)=>h.score-c.score)[0],s=me("#knowledge-answer");if(s.replaceChildren(),!n.trim()){s.textContent="请输入想了解的内容。";return}if(i.score<1){s.textContent="已核对的资料卡暂未覆盖这个问题。可尝试“工艺”“十家子”“非遗”或“乡村”，也可打开文化资料库阅读原文。";return}let r=document.createElement("strong");r.textContent=i.title;let a=document.createElement("p");a.textContent=i.text;let o=document.createElement("a"),l=kr.find(c=>c.id===i.source);o.href=l.url,o.target="_blank",o.rel="noopener",o.textContent="依据："+l.publisher+" ↗",s.append(r,a,o)}me("#optimize").onclick=Sc;me("#save-design").onclick=Xu;me("#export-png").onclick=qu;me("#view-color").onclick=()=>Wu("color");me("#view-preview").onclick=()=>Wu("preview");me("#toggle-overlay").onclick=()=>{k.overlay=!k.overlay,me("#toggle-overlay").setAttribute("aria-pressed",String(k.overlay)),me("#toggle-overlay").textContent=k.overlay?"◉ 色区叠加":"○ 色区叠加",Wa()};me("#motif").onchange=n=>{k.kind=n.target.value,k.candidates=[],k.selectedCandidate=-1,Fi(),Nn()};me("#scale").oninput=n=>{k.pose.scale=Number(n.target.value)/100,k.selectedCandidate=-1,Fi(),Nn()};me("#angle").oninput=n=>{k.pose.angle=Number(n.target.value),k.selectedCandidate=-1,Fi(),Nn()};me("#remove-bg").onchange=br;me("#reanalyze").onclick=br;me("#reset-mask").onclick=()=>{k.analysis&&(k.target=zr(k.analysis,k.selectedColor),k.candidates=[],k.selectedCandidate=-1,Fi(),Nn())};Tt("[data-brush]").forEach(n=>n.onclick=()=>{k.brush=n.dataset.brush,Tt("[data-brush]").forEach(e=>e.classList.toggle("selected",e===n)),me("#design-canvas").style.cursor=k.brush==="none"?"grab":"crosshair"});me("#image-upload").onchange=async n=>{let e=n.target.files[0];if(!e)return;if(!["image/jpeg","image/png","image/webp"].includes(e.type)||e.size>15*1024*1024){Nt("请选择不超过 15 MB 的 JPG、PNG 或 WebP 图片。"),n.target.value="";return}let t=++k.loadId,i=URL.createObjectURL(e);try{let s=new Image;if(s.src=i,await s.decode(),t!==k.loadId){URL.revokeObjectURL(i);return}Fu&&URL.revokeObjectURL(Fu),Fu=i,k.sample="custom",k.image=s,k.pose={x:.5,y:.5,scale:.24,angle:0},me("#sample-origin").textContent="用户导入照片，仅在当前设备处理。请确认有权用于展示。",me("#canvas-sample-name").textContent="我的原料照片",bc(),br(),Mt?.resetCraft(),Nt("照片已在本机读取。开始借色构形。")}catch{URL.revokeObjectURL(i),Nt("无法解码此图片，请更换文件。")}n.target.value=""};Tt(".source-open").forEach(n=>n.onclick=Gb);Tt(".dialog-close").forEach(n=>n.onclick=()=>n.closest("dialog").close());Tt("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target===n){let t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}}));me("#open-validation").onclick=_m;me("#home-guide").onclick=()=>me("#home-story").scrollIntoView({behavior:"smooth"});me("#auto-rotate").onclick=()=>{if(!Ga)return;let n=!Ga.controls.autoRotate;Ga.setAuto(n),me("#auto-rotate").setAttribute("aria-pressed",String(n)),me("#auto-rotate").textContent=n?"Ⅱ 暂停自转":"▷ 开启自转"};me("#plan-trip").onclick=()=>{me("#trip-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),me("#trip-dialog").showModal()};me("#trip-form").onsubmit=n=>{n.preventDefault();let e=vs("agate-plans-v1");e.unshift({id:crypto.randomUUID(),date:me("#trip-date").value,interest:me("#trip-interest").value,note:me("#trip-note").value.trim()}),_c("agate-plans-v1",e.slice(0,50))&&(me("#trip-dialog").close(),me("#trip-form").reset(),Nt("已保存本地研学意向，可在“我的作品”查看。"))};me("#knowledge-form").onsubmit=n=>{n.preventDefault(),xm(me("#knowledge-input").value)};Tt("[data-question]").forEach(n=>n.onclick=()=>{me("#knowledge-input").value=n.dataset.question,xm(n.dataset.question)});me("#craft-tabs").innerHTML=co.map((n,e)=>`<button data-craft="${e}" class="${e===0?"selected":""}">${n.title}</button>`).join("");function bm(n){me("#craft-detail").replaceChildren();let e=document.createElement("h3");e.textContent=co[n].subtitle;let t=document.createElement("p");t.textContent=co[n].text,me("#craft-detail").append(e,t),Tt("[data-craft]").forEach(i=>i.classList.toggle("selected",Number(i.dataset.craft)===n))}Tt("[data-craft]").forEach(n=>n.onclick=()=>bm(Number(n.dataset.craft)));bm(0);Mt=rm({$:me,$$:Tt,state:k,samples:xr,drawSource:Hu,getDrawRect:()=>Ou,getSceneModule:Vu,renderCandidates:Fi,updateLayout:Nn,optimize:Sc,exportCard:qu,saveDesign:Xu,toast:Nt});var Wb=sm({state:k,experience:Mt,$:me,$$:Tt,toast:Nt,getDrawRect:()=>Ou,download:Mr}),Yu=im({state:k,experience:Mt,$:me,$$:Tt,toast:Nt,download:Mr,projectData:wc,restoreProject:Ec,optimize:Sc,updateLayout:Nn});me(".heading-actions").insertAdjacentHTML("afterbegin",'<label class="project-import">导入方案<input id="project-import" type="file" accept=".json,application/json"></label>');me("#project-import").onchange=async n=>{let e=n.target.files[0];if(e){try{if(e.size>5*1024*1024)throw Error("方案文件请保持在 5 MB 以内。");let t=Iu(JSON.parse(await e.text()));await Ec(t)}catch(t){Nt(t.message||"方案文件无法读取。")}n.target.value=""}};var $u=Vd({$:me,$$:Tt,state:k,experience:Mt,playground:Yu,toast:Nt,download:Mr,projectData:wc,saveDesign:Xu,exportCard:qu});window.agateJourney=Ud({toast:Nt,download:Mr});window.addEventListener("hashchange",vm);new ResizeObserver(()=>Wa()).observe(me("#canvas-stage"));bc();vm();Mc("procedural");fetch("./assets/credits.json").then(n=>n.json()).then(n=>Bu=n).catch(()=>{});var Mm=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(Mm.disconnect(),Vu().then(e=>{Ga=e.createAgateScene(me("#hero-scene"),{hero:!0})}).catch(e=>{console.error(e),me("#scene-fallback").hidden=!1}))},{threshold:.08});Mm.observe(me("#hero-scene"));window.agateStudio={state:k,analyze:br,loadSample:Mc,optimize:Sc,showValidation:_m,experience:Mt,restoreProject:Ec,projectData:wc,playground:Yu,workshop:$u};var Mn=document.createElement("div");Mn.className="ambient-player";Mn.innerHTML='<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>';document.querySelector(".header").append(Mn);var Ze=n=>Mn.querySelector(n),ze=document.createElement("audio");ze.id="background-music";ze.src="./assets/background-we-never.mp3";ze.preload="none";ze.loop=!0;document.body.append(ze);var qb=()=>{try{let n=JSON.parse(localStorage.getItem("agate-music-volume"));return typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.min(1,n)):.25}catch{return .25}};ze.volume=qb();var xs=!1,ju=ze.volume||.25,_s=0,Tc=null,Ac=null,Cc=!0,Rc=!1,Zu=document.documentElement.classList.contains("film-entering");async function Xb(){Ac||(Tc||(Tc=fetch(new URL("./assets/background-we-never.mp3",import.meta.url),{priority:"low"}).then(n=>{if(!n.ok)throw Error("Audio unavailable");return n.blob()}).then(n=>{Ac=URL.createObjectURL(n),ze.src=Ac}).catch(n=>{throw Tc=null,n})),await Tc)}function Pc(){Ze("#music-volume").value=Math.round(ze.volume*100),Ze("#music-volume-value").value=Math.round(ze.volume*100)+"%";let n=ze.muted||ze.volume===0;Ze("#music-mute").setAttribute("aria-pressed",String(n)),Ze("#music-mute").setAttribute("aria-label",n?"取消静音":"静音"),Ze("#music-mute").textContent=n?"×":"♪"}var Sm=n=>Number.isFinite(n)?Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0"):"0:00";function bs(){let n=!ze.paused;Mn.classList.toggle("playing",n),Ze("#music-toggle").setAttribute("aria-pressed",String(n)),Ze("#music-toggle").setAttribute("aria-label",n?"暂停背景音乐":"播放背景音乐"),Ze("#music-label").textContent=n?"音乐播放中":"开启音乐"}function Ic(){Cc=!1,document.removeEventListener("click",Sr,!0),document.removeEventListener("touchend",Sr,!0),document.removeEventListener("keydown",Sr,!0)}async function qa(){if(Zu||Rc||xs||!ze.paused)return;let n=++_s;xs=!0,Ze("#music-label").textContent="正在加载",Ze("#music-status").textContent="正在准备音乐…";try{if(Ac||await Xb(),n!==_s)return;ze.error&&ze.load(),await ze.play(),n===_s&&(Ic(),Mn.dataset.autoplay="playing",Ze("#music-status").textContent="正在循环播放，可随时暂停。")}catch(e){if(n!==_s)return;bs(),e.name==="NotAllowedError"?(Mn.dataset.autoplay="waiting",Ze("#music-label").textContent=Cc?"轻触开启":"开启音乐",Ze("#music-status").textContent=Cc?"轻触页面，音乐便随创作开始。":"音乐已准备好，请轻点音符播放。"):(Mn.dataset.autoplay="unavailable",Ze("#music-status").textContent="暂时未能播放，请点击音符重试。")}finally{n===_s&&(xs=!1)}}function wm(){Ic(),!Rc&&(xs||!ze.paused?(_s++,xs=!1,ze.pause(),bs(),Mn.dataset.autoplay="paused",Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"):qa())}function Sr(n){!Cc||!n.isTrusted||Mn.contains(n.target)||n.type==="keydown"&&(!["Enter"," "].includes(n.key)||n.ctrlKey||n.altKey||n.metaKey)||qa()}document.addEventListener("click",Sr,!0);document.addEventListener("touchend",Sr,{capture:!0,passive:!0});document.addEventListener("keydown",Sr,!0);Ze("#music-toggle").onclick=wm;function Ju(n){Ze("#music-panel").hidden=!n,Ze("#music-settings").setAttribute("aria-expanded",String(n))}Ze("#music-settings").onclick=()=>Ju(Ze("#music-panel").hidden);document.addEventListener("pointerdown",n=>{Mn.contains(n.target)||Ju(!1)});document.addEventListener("keydown",n=>{n.key==="Escape"&&!Ze("#music-panel").hidden&&(Ju(!1),Ze("#music-settings").focus())});Ze("#music-volume").oninput=n=>{ze.volume=Number(n.target.value)/100,ze.volume>0&&(ju=ze.volume),ze.muted=!1;try{localStorage.setItem("agate-music-volume",JSON.stringify(ze.volume))}catch{}Pc()};Ze("#music-mute").onclick=()=>{if(ze.muted||ze.volume===0){if(ze.muted=!1,ze.volume===0){ze.volume=ju;try{localStorage.setItem("agate-music-volume",JSON.stringify(ze.volume))}catch{}}}else ju=ze.volume,ze.muted=!0;Pc()};Ze("#music-seek").oninput=n=>{Number.isFinite(ze.duration)&&ze.duration>0&&(ze.currentTime=Number(n.target.value)/1e3*ze.duration)};ze.addEventListener("play",bs);ze.addEventListener("pause",()=>{bs(),Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"});ze.addEventListener("playing",()=>{Ic(),Mn.dataset.autoplay="playing",Ze("#music-label").textContent="音乐播放中",Ze("#music-status").textContent="正在循环播放，可随时暂停。"});ze.addEventListener("waiting",()=>{ze.paused||(Ze("#music-label").textContent="正在缓冲",Ze("#music-status").textContent="音乐正在缓冲…")});ze.addEventListener("loadedmetadata",()=>{Ze("#music-duration").textContent=Sm(ze.duration),Ze("#music-seek").disabled=!Number.isFinite(ze.duration)});ze.addEventListener("timeupdate",()=>{Ze("#music-current").textContent=Sm(ze.currentTime),Number.isFinite(ze.duration)&&ze.duration>0&&(Ze("#music-seek").value=Math.round(ze.currentTime/ze.duration*1e3))});ze.addEventListener("volumechange",Pc);ze.addEventListener("error",()=>{Ze("#music-status").textContent="音乐暂不可用，请点击音符重试。",bs()});fetch("./assets/music.json").then(n=>{if(!n.ok)throw Error();return n.json()}).then(n=>{Ze("#music-title").textContent=n.title,Ze("#music-artist").textContent=n.artist,Ze("#music-toggle").title=n.title+" · "+n.artist}).catch(()=>{Ze("#music-title").textContent="用户指定背景音乐"});function Yb(){let n=!ze.paused||xs;Rc=!0,_s++,xs=!1,Ic(),ze.pause(),bs(),Ze("#music-label").textContent="观影中",Ze("#music-status").textContent="宣传片播放期间，背景音乐暂时暂停。";let e=!1;return()=>{e||(e=!0,Rc=!1,bs(),n&&qa())}}Pc();window.agateMusic={audio:ze,toggle:wm,suspendForFilm:Yb};Zu?(Ze("#music-label").textContent="入境后播放",window.addEventListener("agate:entry-ready",()=>{Zu=!1,qa()},{once:!0})):qa();var Lc=document.createElement("div");Lc.className="agate-background";Lc.setAttribute("aria-hidden","true");Lc.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div>';document.body.prepend(Lc);var jn={version:"0.13.0",homepageMode:"High-detail1080p: complete cached short opening first; asynchronously cache the original high-quality1080p full loop and crossfade only after full decode readiness.",sourceResolution:[2560,1440],sourceDuration:252.378,sourceUrl:"https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml",sourceMedia:"https://video.ln.gov.cn/video/2026/2/6/2026261770347739440_2784.mp4",sourceTitle:"玉醇秋酿 阜新秋颂 · 阜新玛瑙——刀刃上的大地瑰宝",sourcePublished:"2026-02-06",provider:"辽宁发布 / 辽宁卫视《黑土地》",publisher:"辽宁省人民政府网站",native4K:!1,enhancement:"当前默认高细节1080p、25fps。开场从1440p源片单独以CRF20编码，完整主循环使用原高质量1080p版本；保留原色、画幅、来源角标，不使用低码率1MB版本。",loopDuration:19.5,loopSegments:[{start:164,duration:4,content:"巧色雕件",chapter:0},{start:115.1,duration:4.8,content:"手工雕刻",chapter:1},{start:175.1,duration:4,content:"透雕器物",chapter:1},{start:217,duration:6,content:"玛瑙手镯",chapter:1},{start:225.7,duration:3.2,content:"阜新玛瑙市集",chapter:2}],crossfadeSeconds:.5,seam:"交叉淡化至首段相同运动相位，循环首尾连续。",variants:[{file:"agate-loop-clean-4k.mp4",width:3840,height:2160,duration:19.5,bytes:22322905,audio:!1,native4K:!1},{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,duration:19.5,bytes:9290694,audio:!1,native4K:!1}],story4k:{file:"agate-story-clean-4k.mp4",width:3840,height:2160,duration:34.6,bytes:39774142,originalSound:!0,edited:!0},scope:"玛瑙巧色雕件、手工雕刻、透雕器物、玛瑙手镯与阜新玛瑙市集；无采访二维码镜头。",rights:"第三方宣传专题，保留辽宁发布、辽宁卫视与省政府发布出处；未查到开放许可，不声明为本站原创拍摄。使用范围仍待权利方确认。",initialTime:0,storyHd:{file:"agate-story-clean-hd.mp4",width:1920,height:1080,duration:34.6,bytes:14857535,originalSound:!0,edited:!0},qrPolicy:"仅选用源片中本身没有二维码的镜头；未用遮挡、模糊或修补掩盖二维码。背景和原声主题剪辑均重新选段。",storySegments:[{start:115.1,duration:4.8},{start:163.5,duration:21.6},{start:217,duration:8.2}],fastVariants:[{file:"agate-loop-fast-1080.mp4",width:1920,height:1080,bytes:3742755,duration:19.48,audio:!1},{file:"agate-loop-fast-720.mp4",width:1280,height:720,bytes:1897901,duration:19.48,audio:!1}],startupBufferSeconds:0,defaultQuality:"1080p-hq",entranceMaxWaitMs:6e3,startupPolicy:"Fully prepare the short high-quality opening, then keep it playing while caching full high-quality loop. Promote only after full-file validation and decoded moving frame; no partial stream playback.",smooth1080:{file:"agate-loop-smooth-1080.mp4",width:1920,height:1080,bytes:1012447,fps:24,duration:19.5,audio:!1},storySmooth:{file:"agate-story-smooth-1080.mp4",width:1920,height:1080,fps:24,bytes:3901108,duration:34.6,originalSound:!0},legacyEnhancement:"以2560×1440公开原片为源，轻度降噪、Lanczos 1.5倍放大、温和锐化，输出3840×2160；属于4K增强而非原生4K。保留原始画幅、台标与角标，不臆造纹色或工艺细节。",opening1080:{file:"agate-opening-hq-1080.mp4",width:1920,height:1080,fps:25,duration:2.64,bytes:1157772,audio:!1,sourceStart:219.4,sourceDuration:3.2,mainTime:14},quality1080:{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,fps:25,duration:19.48,bytes:9290694,audio:!1}};var it=document.querySelector("#home-film"),Ve=document.querySelector("#home-film-video"),Ku=document.querySelector("#home-film-toggle"),Ja=document.querySelector("#home-film-status"),jb=document.querySelector("#home-film-progress"),Za=matchMedia("(prefers-reduced-motion: reduce)"),Em=document.querySelector(".header");new ResizeObserver(()=>it.style.setProperty("--film-header-height",`${Em.getBoundingClientRect().height}px`)).observe(Em);var Zb=jn.sourceUrl,wt=document.createElement("dialog");wt.className="home-film-dialog";wt.id="home-film-dialog";wt.setAttribute("aria-labelledby","home-full-film-title");wt.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-hq-1080.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><a href="${Zb}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;document.body.append(wt);var en=wt.querySelector("video"),Er=wt.querySelector("#home-full-film-status"),Qu=null,Ya=0,fn=document.querySelector("#entry-gate"),Rm=document.querySelector("#entry-status"),Jb=document.querySelector("#entry-progress"),Kb=document.querySelector("#entry-progress-fill"),Qb=document.querySelector("#entry-percent"),eM=document.querySelector("#entry-quality"),$a=document.querySelector("#entry-help"),Uc=document.querySelector("#entry-actions"),Pm=document.querySelector("#entry-retry"),Im=document.querySelector("#entry-skip"),id=document.documentElement,Nc=new Map,Ka=()=>!location.hash||location.hash==="#home",Ss=()=>Ka()&&Lm&&!document.hidden&&!wt.open&&!Ar,Zn="1080p",Fc=null,Fn=0,kc=0,Tr=null,wn=!1,Oc=!1,Sn=!1,Lm=!0,Ar=!1,Cr=!1,ed=0,td,ja,sd,ws=!id.classList.contains("film-entering"),Ms=!1,Tm=jn.initialTime||0,tM=()=>"1080P 高清",Dm=()=>jn.quality1080,Am=-.5,Um=jn.loopSegments.map(n=>{let e=Math.max(0,Am);return Am+=n.duration-jn.crossfadeSeconds,{time:e,chapter:n.chapter}});function Nm(){let n=Ve.currentTime;for(let e=0;e<Ve.buffered.length;e++)if(n>=Ve.buffered.start(e)-.05&&n<=Ve.buffered.end(e)+.05)return Math.max(0,Ve.buffered.end(e)-n);return 0}function kn(){let n=Sn&&!Ve.paused;Ku.setAttribute("aria-pressed",String(n)),Ku.textContent=n?"Ⅱ 暂停影像":Cr?"▷ 点击播放":"▷ 播放影像",it.dataset.filmState=wn?"preparing":n?"playing":Sn?"paused":"poster",Ja.textContent=wn?"正在准备开场画面…":Sn?`${tM()} · ${n?"连续实景":"影像已暂停"}`:"实景封面 · 点击播放连续影像"}function Hc(n,e){let t=Math.max(0,Math.min(100,Math.round(n)));Kb.style.width=`${t}%`,Qb.textContent=`${t}%`,Jb.setAttribute("aria-valuenow",String(t)),e&&(Rm.textContent=e)}window.addEventListener("agate:film-progress",n=>{let e=n.detail;!ws&&!Ms&&(e.kind==="opening"||window.agateFilmLoader.state.kind==="full")&&Hc(e.received/e.total*94,"正在准备高清开场")});function Fm(){ws||Ms||(ed++,fn.classList.remove("leaving"),fn.hidden=!1,id.classList.add("film-entering"),fn.dataset.state="preparing",$a.hidden=!0,Uc.hidden=!0,Pm.textContent="重新准备",Im.disabled=!1,eM.textContent="先让高清开场就绪，再走进阜新",Hc(0,"正在点亮第一帧"),document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(n=>{Nc.has(n)||Nc.set(n,n.inert),n.inert=!0}),fn.setAttribute("tabindex","-1"),fn.focus({preventScroll:!0}),ja||(ja=setTimeout(()=>{ja=0,Rr("slow-network")},jn.entranceMaxWaitMs)),clearTimeout(td),td=setTimeout(()=>{ws||($a.hidden=!1,$a.textContent="开场仍在准备，也可以直接进入浏览。",Uc.hidden=!1)},2500))}function Rr(n){if(ws||Ms)return;clearTimeout(td),clearTimeout(ja),ja=0,Ms=!0;let e=++ed;fn.dataset.state=n,Hc(100,n==="playing"?"画面就绪，正在入境":"正在入境"),fn.classList.add("leaving"),setTimeout(()=>{if(e===ed&&(ws=!0,Ms=!1,id.classList.remove("film-entering"),fn.classList.remove("leaving"),fn.hidden=!0,Nc.forEach((t,i)=>{i.inert=t}),Nc.clear(),window.dispatchEvent(new CustomEvent("agate:entry-ready",{detail:{reason:n,quality:Zn}})),Ka())){let t=document.querySelector("#home-film-title");t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})}},Za.matches?0:250)}function nd(n,e=!1){Cr=e,kn(),Ja.textContent=e?"轻点播放，开启实景影像":"实景封面 · 轻点播放可重试",!(ws||Ms)&&(fn.dataset.state=e?"awaiting-play":"error",Rm.textContent=n,$a.textContent=e?"影像已准备好，点击播放或直接进入。":"可以重新准备，也可以直接进入浏览。",$a.hidden=!1,Uc.hidden=!1,Pm.textContent=e?"进入并播放":"重新准备",Im.disabled=!1)}function nM(n,e){return new Promise((t,i)=>{let s=["loadedmetadata","loadeddata","canplay","progress","seeked","timeupdate"],r=!1,a=()=>{clearTimeout(h),s.forEach(d=>Ve.removeEventListener(d,c)),Ve.removeEventListener("error",l),n.removeEventListener("abort",o)},o=()=>{a(),i(new DOMException("Cancelled","AbortError"))},l=()=>{a(),i(new DOMException("Video unavailable","NotSupportedError"))},c=()=>{if(e!==Fn){o();return}if(Ve.readyState>=1&&!r){r=!0;let g=Math.min(Tm,Math.max(0,Ve.duration-.1));Tm=0,g>0&&Math.abs(Ve.currentTime-g)>.1&&(Ve.currentTime=g)}let d=Nm(),u=Math.min(jn.startupBufferSeconds,Math.max(.05,Ve.duration-Ve.currentTime));it.dataset.bufferedAhead=d.toFixed(2),!ws&&!Ms&&Hc(98,"正在唤醒流畅画面");let f=!Ve.paused&&Ve.currentTime>0;r&&!Ve.seeking&&Ve.readyState>=2&&(d>=u-.04||f)&&(a(),t())},h=setTimeout(()=>{a(),i(new Error("Opening buffer timed out"))},45e3);s.forEach(d=>Ve.addEventListener(d,c)),Ve.addEventListener("error",l),n.addEventListener("abort",o,{once:!0}),c()})}function iM(n){return new Promise((e,t)=>{let i,s=Ve.currentTime,r=()=>{clearTimeout(o),i!==void 0&&Ve.cancelVideoFrameCallback?.(i),n.removeEventListener("abort",a)},a=()=>{r(),t(new DOMException("Cancelled","AbortError"))},o=setTimeout(()=>{r(),Ve.videoWidth>0&&Ve.readyState>=2&&!Ve.paused&&Ve.currentTime>s?e():t(new Error("First video frame not ready"))},3e3);n.addEventListener("abort",a,{once:!0}),Ve.requestVideoFrameCallback&&(i=Ve.requestVideoFrameCallback(()=>{r(),e()}))})}async function km(n){Ve.muted=!0,Ve.defaultMuted=!0,await Ve.play(),await iM(Tr.signal),n===Fn&&(Sn=!0,wn=!1,Cr=!1,it.dataset.firstFrame="true",it.dataset.videoQuality=Zn,it.dataset.rendition=String(Fc.height),it.dataset.entryBufferedSeconds=Nm().toFixed(2),it.dataset.entryVideoSeconds=String(Ve.currentTime),it.classList.add("video-ready"),kn(),Rr("playing"),Ss()?Vc():Ir())}async function Pr(n=Zn,e=!1){let t=++Fn;kc++,Tr?.abort(),Tr=new AbortController,clearTimeout(sd),Zn="1080p",Fc=Dm(),Sn=!1,Oc=!1,wn=!0,Cr=!1,Ar=!1,it.dataset.firstFrame="false",it.dataset.playbackMode="layered-hq-1080p",Fm(),kn();try{let i=await window.agateFilmLoader.load(e);if(t!==Fn||(it.dataset.downloadComplete=String(i.complete),it.dataset.downloadBytes=String(i.received),it.dataset.cacheSource=i.source,it.dataset.filmTier=i.kind,Fc=i.item,Ve.muted=!0,Ve.defaultMuted=!0,Ve.preload="auto",Ve.loop=!0,Ve.src!==i.url&&(Ve.pause(),it.classList.remove("video-ready"),Ve.src=i.url,Ve.load()),await nM(Tr.signal,t),t!==Fn))return;Oc=!0,await km(t)}catch(i){if(t!==Fn||i.name==="AbortError")return;if(wn=!1,kn(),i.name==="NotAllowedError"){nd("开场画面已准备好",!0);return}nd("实景影像暂未准备完成")}}function Ir(){kc++,it.querySelectorAll(".home-film-video").forEach(n=>n.pause()),clearTimeout(sd),kn()}async function Om(){if(!Sn||!Ss())return;let n=++kc;try{if(await Ve.play(),n!==kc)return;if(!Ss()){Ve.pause();return}kn(),Vc()}catch{kn(),Ja.textContent="点击播放影像，继续观看"}}function Qa(){wn||(Sn&&Ss()?(Om(),zc()):Ir())}var wr=null,Xa=null,Dc=null,Bc=null,Cm;async function Vc(){if(it.dataset.filmTier!=="full"){if(wr){zc();return}return Xa||(Xa=window.agateFilmLoader.loadFull().then(n=>{wr=n,it.dataset.fullCached="true",it.dataset.fullBytes=String(n.received),zc()}).catch(()=>{it.dataset.fullCached="retry",clearTimeout(Cm),Cm=setTimeout(()=>{Ss()&&Vc()},15e3)}).finally(()=>{Xa=null}),Xa)}}async function zc(){if(!wr||Dc||!Sn||!Ss()||it.dataset.filmTier==="full")return;let n=Ve,e=Fn,t=document.createElement("video");return t.className="home-film-video",t.id="home-film-upgrade",t.setAttribute("aria-hidden","true"),t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.style.opacity="0",t.style.transition="opacity .55s ease",it.append(t),Dc=(async()=>{try{if(await new Promise((i,s)=>{let r=()=>{clearTimeout(a),i()},a=setTimeout(()=>s(Error("Upgrade decode timed out")),1e4);t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",()=>{clearTimeout(a),s(Error("Upgrade unavailable"))},{once:!0}),t.src=wr.url,t.load()}),t.currentTime=Math.min(Bc??jn.opening1080.mainTime,t.duration-.1),await t.play(),await new Promise((i,s)=>{let r,a=setTimeout(()=>{r!==void 0&&t.cancelVideoFrameCallback?.(r),s(Error("Upgrade frame unavailable"))},3e3);t.requestVideoFrameCallback?r=t.requestVideoFrameCallback(()=>{clearTimeout(a),i()}):t.addEventListener("timeupdate",()=>{clearTimeout(a),i()},{once:!0})}),e!==Fn||Ve!==n||!Ss())return;n.id="home-film-opening-video",t.id="home-film-video",t.removeAttribute("aria-hidden"),Ve=t,Bm(t),it.dataset.filmTier="full",it.dataset.cacheSource=wr.source,it.dataset.downloadBytes=String(wr.received),Bc=null,t.getBoundingClientRect(),t.style.opacity="1",kn(),await new Promise(i=>setTimeout(i,600)),n.pause(),n.remove()}catch{it.dataset.upgradeState="deferred"}finally{Ve!==t&&(t.pause(),t.remove()),Dc=null}})(),Dc}window.agateEntrance={retry(){Cr&&Oc?(wn=!0,Uc.hidden=!0,km(Fn).catch(()=>{wn=!1,nd("轻点播放，开启实景影像",!0)})):Pr(Zn,!0)},skip(){Rr("skipped")}};Ku.onclick=()=>{if(Cr&&Oc){window.agateEntrance.retry();return}if(!Sn){Pr(Zn,!0);return}Ve.paused?(Ar=!1,Om()):(Ar=!0,Ir())};it.querySelectorAll("[data-film-chapter]").forEach(n=>n.onclick=()=>{let e=Um.find(t=>t.chapter===Number(n.dataset.filmChapter));if(e){if(!Sn){Bc=e.time,Pr(Zn);return}if(it.dataset.filmTier!=="full"){Bc=e.time,Ja.textContent="正在准备主题镜头 · 高清开场继续播放",Vc(),zc();return}Ve.currentTime=e.time}});function Bm(n){n.addEventListener("timeupdate",()=>{if(n!==Ve)return;let e=n.currentTime,t=it.dataset.filmTier==="opening"?1:[...Um].reverse().find(i=>e>=i.time)?.chapter||0;it.querySelectorAll("[data-film-chapter]").forEach(i=>i.classList.toggle("active",Number(i.dataset.filmChapter)===t)),jb.style.width=Number.isFinite(n.duration)?`${e/n.duration*100}%`:"0%"}),n.addEventListener("playing",()=>{n===Ve&&(clearTimeout(sd),kn())}),n.addEventListener("pause",()=>{n===Ve&&kn()})}Bm(Ve);new IntersectionObserver(n=>{Lm=n[0].isIntersecting,Qa()},{threshold:.12}).observe(it);document.addEventListener("visibilitychange",()=>{document.hidden&&wt.open&&en.pause(),Qa()});window.addEventListener("hashchange",()=>{wt.open&&wt.close(),Ka()?!Sn&&!Za.matches?Pr(Zn):Qa():(wn&&(Fn++,Tr?.abort(),wn=!1),Rr("route"),Ir())});Za.addEventListener("change",()=>{Za.matches?(Ar=!0,wn&&(Fn++,Tr?.abort(),wn=!1),Ir(),Rr("reduced-motion")):!Sn&&Ka()?Pr(Zn):Qa()});fn.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let e=[...fn.querySelectorAll("button:not(:disabled)")].filter(s=>!s.closest("[hidden]"));if(!e.length){n.preventDefault();return}let t=e.indexOf(document.activeElement),i=n.shiftKey?t<=0?e.length-1:t-1:(t+1)%e.length;n.preventDefault(),e[i].focus()});function sM(){if(wt.open)return;Ya++,Ir(),Qu=window.agateMusic?.suspendForFilm?.()||null,Er.textContent="正在准备玛瑙主题片…",wt.showModal();let n=`./assets/home-film/${jn.storyHd.file}`;en.getAttribute("src")!==n&&(en.src=n,en.load()),en.currentTime=0,en.muted=!1,en.volume=1;let e=Ya;en.play().then(()=>{if(e===Ya){if(!wt.open){en.pause();return}Er.textContent=""}}).catch(t=>{e!==Ya||!wt.open||(Er.textContent=t.name==="NotAllowedError"?"请点击播放键开启原声。":"主题片暂未载入，可通过下方来源观看原片。")})}document.querySelector("#home-film-watch").onclick=sM;document.querySelector("#home-film-close").onclick=()=>wt.close();wt.addEventListener("close",()=>{Ya++,en.pause(),Qu?.(),Qu=null,Qa()});wt.addEventListener("click",n=>{if(n.target===wt){let e=wt.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&wt.close()}});en.addEventListener("playing",()=>{wt.open?Er.textContent="":en.pause()});en.addEventListener("error",()=>{Er.textContent="主题片暂未载入，可通过下方来源观看原片。"});en.addEventListener("ended",()=>{Er.textContent="主题片已结束，可重播或关闭继续创作。"});Fc=Dm();kn();Ka()?Za.matches?(Ar=!0,Fm(),it.querySelector(".home-film-poster").decode().catch(()=>{}).finally(()=>{Ja.textContent="减少动态效果已启用 · 可手动播放",Rr("reduced-motion")})):Pr(Zn):fn.hidden=!0;var Jn=document.documentElement,Vm=document.querySelector(".header"),ad={learn:{label:"观石识艺章节导航",panels:[".home-stone-study",".formation-teaser","#agate-gallery","#home-story"],titles:["读懂纹色","石的来历","实物图鉴","非遗手艺"]}},Gm=matchMedia("(prefers-reduced-motion: reduce)");Object.values(ad).forEach(n=>{n.panels=n.panels.map(e=>document.querySelector(e)),n.panels.forEach((e,t)=>{e.classList.add("home-snap-panel"),e.dataset.snapPanel=String(t)})});var Kn=[],zm=[],Oi=document.createElement("nav");Oi.className="home-screen-nav";document.body.append(Oi);var Wm='a,button,input,select,textarea,label,canvas,video,dialog,[contenteditable="true"],[role="slider"],.photo-viewport';function qm(n,e=""){let t=n.target.closest(Wm+e);return t?t.tagName==="CANVAS"&&typeof t.agateHitTest=="function"&&["wheel","pointerdown"].includes(n.type)?n.agateStoneHit??t.agateHitTest(n.clientX,n.clientY):!0:!1}var Bi=0,At=null,od=-1,rd=0,Hm,ki=0,ld=0,Gc=!1,cd=null,Xm=()=>Object.hasOwn(ad,location.hash.slice(1)||"home")?ad[location.hash.slice(1)||"home"]:null,hd=()=>!!Xm(),Ts=()=>!hd()||Jn.classList.contains("film-entering")||Jn.classList.contains("explore-crossing")||!!document.querySelector("dialog[open]"),ud=()=>Vm.getBoundingClientRect().height,eo=()=>innerHeight-ud(),Es=()=>Math.max(0,document.documentElement.scrollHeight-innerHeight),Dr=n=>Math.max(0,Math.min(Es(),scrollY+n.getBoundingClientRect().top-ud()));function Ym(){return[...Kn.map(Dr),Es()]}function dd(n=scrollY){let e=0;return Kn.map(Dr).forEach((i,s)=>{n>=i-3&&(e=s)}),e}function fd(){Jn.style.setProperty("--snap-header-height",`${ud()}px`)}new ResizeObserver(fd).observe(Vm);fd();function Wc(){Bi&&cancelAnimationFrame(Bi),Bi=0,Jn.classList.remove("snap-in-motion")}function Lr(n=!1){if(!hd())return;let e=dd(scrollY+Math.min(eo()*.35,150));if(Oi.querySelectorAll("[data-screen]").forEach((t,i)=>{i===e?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),e!==od){if(n&&!Gm.matches){let t=Kn[e].querySelector(".home-film-content,.hero-copy,.formation-teaser-copy,.photo-section-heading")||Kn[e].firstElementChild;cd?.cancel(),cd=t?.animate([{transform:"translateY(12px)",opacity:.75},{transform:"translateY(-2px)",opacity:1,offset:.75},{transform:"translateY(0)",opacity:1}],{duration:520,easing:"cubic-bezier(.2,.75,.25,1)"})}od=e}}function to(n){if(Wc(),n=Math.max(0,Math.min(Es(),n)),Gm.matches||Math.abs(n-scrollY)<1){window.scrollTo({top:n,behavior:"instant"}),Lr();return}Jn.classList.add("snap-in-motion");let e=scrollY,t=0,i=performance.now(),s=i;function r(a){if(Ts()){Wc();return}let o=Math.min((a-i)/1e3,.028);if(i=a,t+=(200*(n-e)-22*t)*o,e+=t*o,window.scrollTo({top:Math.max(0,Math.min(Es(),e)),behavior:"instant"}),Math.abs(n-e)<.5&&Math.abs(t)<4||a-s>1500){window.scrollTo({top:n,behavior:"instant"}),Bi=0,Jn.classList.remove("snap-in-motion"),Lr(!0);return}Bi=requestAnimationFrame(r)}Bi=requestAnimationFrame(r)}function $m(n){let e=dd(),t=Kn[e],i=Dr(t),s=i+t.getBoundingClientRect().height-eo();return s-i<6?!1:n>0?scrollY<s-3:scrollY>i+3}function rM(n){let e=Ym();return n>0?e.find(t=>t>scrollY+4)??Es():[...e].reverse().find(t=>t<scrollY-4)??0}function jm(n){return Ts()||$m(n)?!1:(to(rM(n)),!0)}Oi.addEventListener("click",n=>{let e=n.target.closest("[data-screen]");e&&!Ts()&&to(Dr(Kn[Number(e.dataset.screen)]))});document.addEventListener("click",n=>{let e=n.target.closest("[data-panel-link]");if(e&&!Ts()){let t=Kn[Number(e.dataset.panelLink)];t&&to(Dr(t))}});window.addEventListener("wheel",n=>{if(Ts()||n.defaultPrevented||n.ctrlKey||n.metaKey||Math.abs(n.deltaX)>Math.abs(n.deltaY)||qm(n))return;let e=Math.sign(n.deltaY);if(!e)return;let t=performance.now(),i=t-ld;if(ld=t,Bi||Gc&&i<180){n.preventDefault();return}i>=180&&(Gc=!1,ki=0),!$m(e)&&(n.preventDefault(),ki&&Math.sign(ki)!==e&&(ki=0),ki+=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?eo():1),Math.abs(ki)>=28&&(Gc=!0,ki=0,jm(e)))},{passive:!1});document.addEventListener("keydown",n=>{if(Ts()||n.defaultPrevented||n.ctrlKey||n.altKey||n.metaKey||n.target.closest(Wm))return;let e=["PageDown","ArrowDown"," "].includes(n.key)?n.shiftKey?-1:1:["PageUp","ArrowUp"].includes(n.key)?-1:0;if(n.key==="Home"||n.key==="End"){n.preventDefault(),to(n.key==="Home"?0:Es());return}e&&jm(e)&&n.preventDefault()});document.addEventListener("pointerdown",n=>{if(Ts()||n.pointerType!=="mouse"||n.button!==0||n.ctrlKey||n.metaKey||qm(n,",h1,h2,h3,p,small,strong"))return;let e=n.target.closest(".home-snap-panel");e&&(Wc(),At={id:n.pointerId,panel:e,startY:n.clientY,startX:n.clientX,scroll:scrollY,at:dd(),previousY:n.clientY,previousTime:performance.now(),velocity:0,active:!1})});document.addEventListener("pointermove",n=>{if(!At||n.pointerId!==At.id)return;let e=At.startY-n.clientY,t=At.startX-n.clientX;if(!At.active){if(Math.abs(t)>Math.abs(e)+8){At=null;return}if(Math.abs(e)<7)return;At.active=!0,Jn.classList.add("snap-dragging"),At.panel.setPointerCapture(n.pointerId)}n.preventDefault();let i=performance.now();At.velocity=(At.previousY-n.clientY)/Math.max(1,i-At.previousTime),At.previousY=n.clientY,At.previousTime=i,window.scrollTo({top:Math.max(0,Math.min(Es(),At.scroll+e)),behavior:"instant"})});function Zm(n){if(!At||n.pointerId!==At.id)return;let e=At;if(At=null,e.active){let t=e.startY-n.clientY,i=Math.sign(t),s=Ym(),r=Dr(Kn[e.at]),a=r+Kn[e.at].getBoundingClientRect().height-eo(),o=a-r>6&&scrollY>=r&&scrollY<=a,l;o?l=scrollY:Math.abs(t)>Math.min(85,eo()*.12)||performance.now()-e.previousTime<100&&Math.abs(e.velocity)>.35?l=s[Math.max(0,Math.min(s.length-1,e.at+i))]:l=s.reduce((c,h)=>Math.abs(h-scrollY)<Math.abs(c-scrollY)?h:c,s[0]),to(l),Jn.classList.remove("snap-dragging"),e.panel.hasPointerCapture(n.pointerId)&&e.panel.releasePointerCapture(n.pointerId)}}document.addEventListener("pointerup",Zm);document.addEventListener("pointercancel",Zm);window.addEventListener("scroll",()=>{hd()&&(rd||(rd=requestAnimationFrame(()=>{rd=0,Lr()})),clearTimeout(Hm),Hm=setTimeout(()=>{!Bi&&!At&&Lr(!0)},130))},{passive:!0});window.addEventListener("resize",()=>{fd(),Lr()});function Jm(){Wc(),At=null,ki=0,ld=0,Gc=!1,cd?.cancel(),Jn.classList.remove("snap-dragging");let n=Xm();Kn=n?.panels||[],zm=n?.titles||[],Jn.classList.toggle("snap-home",!!n),Oi.hidden=!n,od=-1,n?(Oi.setAttribute("aria-label",n.label),Oi.innerHTML=zm.map((e,t)=>`<button data-screen="${t}" aria-label="第${t+1}屏：${e}"><i aria-hidden="true"></i><span>${String(t+1).padStart(2,"0")} / ${e}</span></button>`).join("")+'<small aria-hidden="true">SCROLL / DRAG</small>'):Oi.replaceChildren(),requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"instant"}),Lr()})}window.addEventListener("hashchange",Jm);Jm();function pd(){location.hash==="#guide"&&document.querySelectorAll("#home-overview img[data-entry-src]").forEach(n=>{let e=()=>{n.naturalWidth>1&&n.decode().catch(()=>{}).then(()=>n.parentElement.classList.add("photo-ready"))};n.addEventListener("load",e),n.loading="eager",n.fetchPriority="high",n.src=n.dataset.entrySrc,delete n.dataset.entrySrc,e()})}window.addEventListener("agate:entry-ready",pd,{once:!0});window.addEventListener("hashchange",pd);pd();var Km="agate-explore-sound-muted-v1",En=!1,zi=null,Hi=null,pn=null,Qm=0,Vi=0;try{En=localStorage.getItem(Km)==="true"}catch{}var eg=()=>document.querySelectorAll("[data-explore-sound]");function tg(){eg().forEach(n=>{n.setAttribute("aria-pressed",String(!En)),n.setAttribute("aria-label",En?"开启探索音效":"关闭探索音效"),n.innerHTML=`<span aria-hidden="true">${En?"♩":"♪"}</span> 音效${En?"已关":"已开"}`})}function aM(n,e,{brief:t=!1,volume:i=.15}={}){let s=n.currentTime+.012,r=n.createGain(),a=[],o=!1;r.gain.value=i,r.connect(e);let l=(u,f,g,y)=>{[1,2.37,4.91].forEach((m,p)=>{let E=n.createOscillator(),v=n.createGain();E.type="sine",E.frequency.setValueAtTime(f*m,s+u),E.frequency.exponentialRampToValueAtTime(f*m*.998,s+u+g);let _=y*[1,.2,.065][p];v.gain.setValueAtTime(1e-5,s+u),v.gain.exponentialRampToValueAtTime(_,s+u+.008),v.gain.exponentialRampToValueAtTime(1e-5,s+u+g),E.connect(v),v.connect(r),E.start(s+u),E.stop(s+u+g+.04),a.push(E,v)})};if(l(0,660,t?.5:1.1,.58),!t){let u=Math.ceil(n.sampleRate*1.35),f=n.createBuffer(1,u,n.sampleRate),g=f.getChannelData(0),y=8153,m=0;for(let _=0;_<u;_++)y=y*16807%2147483647,m=(m+.075*(y/10737418235e-1-1))/1.075,g[_]=Math.max(-1,Math.min(1,m))*.12;let p=n.createBufferSource(),E=n.createBiquadFilter(),v=n.createGain();p.buffer=f,E.type="bandpass",E.Q.value=.55,E.frequency.setValueAtTime(700,s+.12),E.frequency.exponentialRampToValueAtTime(2100,s+1.1),v.gain.setValueAtTime(1e-5,s+.12),v.gain.linearRampToValueAtTime(.17,s+.7),v.gain.exponentialRampToValueAtTime(1e-5,s+1.42),p.connect(E),E.connect(v),v.connect(r),p.start(s+.12),p.stop(s+1.5),a.push(p,E,v),l(1.18,880,1.35,.29),l(1.68,990,1.28,.23),l(2.15,1320,1.1,.16)}let c=t?.65:3.45,h=()=>{a.forEach(u=>{try{u.disconnect()}catch{}}),r.disconnect()},d=setTimeout(h,(c+.1)*1e3);return{duration:c,stop(){if(o)return;o=!0,clearTimeout(d);let u=n.currentTime;r.gain.cancelScheduledValues(u),r.gain.setTargetAtTime(0,u,.018),a.forEach(f=>{if(f.stop)try{f.stop(u+.08)}catch{}}),d=setTimeout(h,110)}}}function md({brief:n=!1}={}){let e=++Vi;pn?.stop(),pn=null;let t=window.agateMusic?.audio;if(En||document.hidden||t?.muted||t?.volume===0)return()=>{};try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return()=>{};zi||=new i,Hi||(Hi=zi.createAnalyser(),Hi.fftSize=1024,Hi.connect(zi.destination));let s=()=>{e!==Vi||En||document.hidden||zi.state!=="running"||t?.muted||t?.volume===0||(pn=aM(zi,Hi,{brief:n,volume:.12}),Qm++)};zi.state==="running"?s():zi.resume().then(s).catch(()=>{})}catch{}return()=>{e===Vi&&(Vi++,pn?.stop(),pn=null)}}function oM(){Vi++,En=!En;try{localStorage.setItem(Km,String(En))}catch{}En&&(pn?.stop(),pn=null),tg()}eg().forEach(n=>n.addEventListener("click",oM));tg();window.agateMusic?.audio.addEventListener("volumechange",()=>{let n=window.agateMusic.audio;(n.muted||n.volume===0)&&(Vi++,pn?.stop(),pn=null)});document.addEventListener("visibilitychange",()=>{document.hidden&&(Vi++,pn?.stop(),pn=null)});window.addEventListener("hashchange",n=>{n.agateExploration||(Vi++,pn?.stop(),pn=null)});window.agateSound={getState(){let n=0;if(Hi){let e=new Float32Array(Hi.fftSize);Hi.getFloatTimeDomainData(e),n=Math.sqrt(e.reduce((t,i)=>t+i*i,0)/e.length)}return{muted:En,contextState:zi?.state||"uncreated",plays:Qm,rms:n}}};var tn=document.querySelector("#home-overview"),gd=document.querySelector("#guide-replay"),no=[...tn.querySelectorAll(".home-entry-card")],qc=matchMedia("(prefers-reduced-motion: reduce)"),Ur=[],Xc=[],io=0,ng=!1,so=new Set,As=!1;function ig(){io++,Ur.forEach(n=>n.cancel()),Ur=[],Xc.forEach(clearTimeout),Xc=[]}function Gi(n,e=0,{distance:t=20,duration:i=650}={}){if(!n)return;let s=n.animate([{opacity:0,transform:`translateY(${t}px)`},{opacity:1,transform:"translateY(0)"}],{duration:i,delay:e,fill:"backwards",easing:"cubic-bezier(.2,.7,.25,1)"});Ur.push(s)}function yd(n){n.classList.remove("guide-card-pending","guide-card-entering")}function sg(n,e=0){if(so.has(n))return;so.add(n),n.classList.remove("guide-card-pending"),n.classList.add("guide-card-entering"),Gi(n,e,{distance:32,duration:760});let i=n.querySelector(".entry-card-photo").animate([{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)"}],{duration:850,delay:e+90,fill:"backwards",easing:"cubic-bezier(.2,.65,.25,1)"});Ur.push(i),[".entry-card-kicker","h3","p",".entry-card-result",".entry-card-link"].forEach((r,a)=>Gi(n.querySelector(r),e+200+a*95,{distance:12,duration:500}));let s=io;Xc.push(setTimeout(()=>{io===s&&yd(n)},e))}function lM(n){let e=n.getBoundingClientRect(),t=document.querySelector(".header").getBoundingClientRect().height;return e.top<innerHeight-20&&e.bottom>t+20}function vd(){gd.textContent=As?"直接显示全部 ↘":"重看导览动画 ↻",gd.setAttribute("aria-label",As?"跳过导览展开动画，直接显示全部内容":"重新播放导览展开动画")}function Wi(){ig(),no.forEach(yd),tn.classList.remove("guide-preparing"),tn.classList.add("guide-visible"),so=new Set(no),As=!1,vd()}function Nr(){ig(),ng=!0,As=!0,so=new Set,tn.classList.add("guide-preparing"),no.forEach(n=>{n.classList.remove("guide-card-entering"),n.classList.add("guide-card-pending")}),vd()}function ro(){if(qc.matches){Wi();return}As||Nr(),tn.classList.remove("guide-preparing"),tn.classList.add("guide-visible"),Gi(tn.querySelector(".overview-heading .eyebrow"),40,{distance:12,duration:580}),Gi(tn.querySelector("#home-overview-title"),210,{distance:25,duration:850}),Gi(tn.querySelector(".overview-intro"),540,{distance:18,duration:750}),Gi(tn.querySelector(".guide-film-feature"),760,{distance:22,duration:760}),Gi(tn.querySelector(".guide-replay-row"),960,{distance:10,duration:550}),no.filter(lM).forEach((e,t)=>sg(e,1250+t*360)),Gi(tn.querySelector(".overview-footer"),2400,{distance:16,duration:650});let n=io;Xc.push(setTimeout(()=>{io===n&&(As=!1,vd())},4e3))}var cM=new IntersectionObserver(n=>{!ng||tn.classList.contains("guide-preparing")||qc.matches||n.filter(e=>e.isIntersecting).forEach(e=>sg(e.target,90))},{threshold:.12});no.forEach(n=>cM.observe(n));gd.onclick=()=>{As?Wi():(Nr(),ro())};function rg(n){n?.agateExploration||(location.hash==="#guide"?(Nr(),requestAnimationFrame(()=>{location.hash==="#guide"&&ro()})):Wi())}window.addEventListener("hashchange",rg);location.hash==="#guide"&&rg();qc.addEventListener("change",()=>{qc.matches&&Wi()});tn.addEventListener("focusin",n=>{let e=n.target.closest(".guide-film-feature");if(e){Ur.forEach(i=>{if(i.effect?.target===e)try{i.finish()}catch{}});return}let t=n.target.closest(".home-entry-card");t&&(so.add(t),Ur.forEach(i=>{let s=i.effect?.target;if(s===t||t.contains(s))try{i.finish()}catch{}}),yd(t))});var xd=document.documentElement,Et=document.querySelector("#begin-exploration"),og=document.querySelector("#home-overview"),ag=document.querySelector("#home-overview-title"),nn=document.createElement("div");nn.className="explore-portal";nn.hidden=!0;nn.setAttribute("aria-hidden","true");nn.innerHTML='<div class="portal-grain"></div><div class="portal-contours"><i></i><i></i><i></i><i></i></div><div class="portal-words"><small>FOLLOW THE PATTERN</small><span>循纹而行<span>入境成艺</span></span><i></i></div>';document.body.append(nn);var Sd=matchMedia("(prefers-reduced-motion: reduce)"),hM=matchMedia("(hover: hover) and (pointer: fine)"),Rt=null,_d=0,ao=null,uM=()=>!location.hash||location.hash==="#home",bd=()=>location.hash==="#guide";function Md(){if(bd()){window.scrollTo({top:0,behavior:"instant"});return}let n=location.href;history.pushState(null,"","#guide");let e=new HashChangeEvent("hashchange",{oldURL:n,newURL:location.href});Object.defineProperty(e,"agateExploration",{value:!0}),window.dispatchEvent(e)}function lg(){ag.setAttribute("tabindex","-1"),ag.focus({preventScroll:!0})}function wd(){Et.style.setProperty("--magnet-x","0px"),Et.style.setProperty("--magnet-y","0px"),Et.style.setProperty("--light-x","50%"),Et.style.setProperty("--light-y","50%")}Et.addEventListener("pointermove",n=>{!hM.matches||Sd.matches||Rt||(ao={x:n.clientX,y:n.clientY},!_d&&(_d=requestAnimationFrame(()=>{if(_d=0,!ao||Rt)return;let e=Et.getBoundingClientRect(),t=ao.x-e.left,i=ao.y-e.top;Et.style.setProperty("--magnet-x",`${(t/e.width-.5)*9}px`),Et.style.setProperty("--magnet-y",`${(i/e.height-.5)*7}px`),Et.style.setProperty("--light-x",`${t/e.width*100}%`),Et.style.setProperty("--light-y",`${i/e.height*100}%`)})))});Et.addEventListener("pointerleave",()=>{ao=null,wd()});function Cs(n,{land:e=!0,focus:t=!0,skip:i=!1}={}){Rt===n&&(Rt=null,clearTimeout(n.timer),(i||!e)&&(n.stopSound?.(),Wi()),n.animations.forEach(s=>s.cancel()),e&&!bd()&&(Nr(),Md(),i?Wi():ro()),xd.classList.remove("explore-crossing"),nn.hidden=!0,nn.removeAttribute("style"),Et.classList.remove("engaged"),Et.disabled=!1,Et.removeAttribute("aria-busy"),n.inert.forEach(([s,r])=>s.inert=r),wd(),Et.dataset.exploreState="idle",bd()&&e&&(og.dataset.exploreArrival="true",t&&lg()))}function Yc(n,e,t,i){let s=e.animate(t,{fill:"both",...i});return n.animations.push(s),s.finished.catch(()=>{})}async function dM(){if(Rt||!uM()||xd.classList.contains("film-entering")||document.querySelector("dialog[open]"))return;if(Sd.matches){md({brief:!0}),Md(),Wi(),og.dataset.exploreArrival="true",lg();return}let n=Et.querySelector(".explore-stone").getBoundingClientRect(),e=n.left+n.width/2,t=n.top+n.height/2,i=Math.ceil(Math.hypot(Math.max(e,innerWidth-e),Math.max(t,innerHeight-t)))+8,s={animations:[],inert:[],timer:0,stopSound:md()};Rt=s,Et.disabled=!0,Et.setAttribute("aria-busy","true"),Et.classList.add("engaged"),Et.dataset.exploreState="crossing",document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(l=>{s.inert.push([l,l.inert]),l.inert=!0}),xd.classList.add("explore-crossing"),nn.hidden=!1,nn.style.setProperty("--portal-x",`${e}px`),nn.style.setProperty("--portal-y",`${t}px`),s.timer=setTimeout(()=>Cs(s,{skip:!0}),3700);let r=innerWidth<560,a=r?760:880,o=nn.querySelector(".portal-words");Yc(s,nn.querySelector(".portal-contours"),[{transform:"translate(-50%,-50%) scale(.12)",opacity:.2},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.8}],{duration:2100,easing:"cubic-bezier(.15,.6,.25,1)"}),Yc(s,o,[{opacity:0,transform:"translateY(17px)"},{opacity:1,transform:"translateY(0)"}],{duration:700,delay:360,easing:"ease-out"}),await Yc(s,nn,[{clipPath:`circle(0px at ${e}px ${t}px)`,opacity:1},{clipPath:`circle(${i}px at ${e}px ${t}px)`,opacity:1}],{duration:a,easing:"cubic-bezier(.65,0,.2,1)"}),Rt===s&&(Nr(),Md(),Et.dataset.exploreState="revealing",await new Promise(l=>setTimeout(l,r?470:620)),Rt===s&&(ro(),await Yc(s,nn,[{opacity:1},{opacity:0}],{duration:r?850:1e3,easing:"cubic-bezier(.25,.5,.3,1)"}),Rt===s&&Cs(s)))}Et.addEventListener("click",dM);document.addEventListener("keydown",n=>{Rt&&(n.key==="Escape"?(n.preventDefault(),Cs(Rt,{skip:!0})):["Tab"," ","PageDown","PageUp","Home","End","ArrowUp","ArrowDown"].includes(n.key)&&n.preventDefault())},{capture:!0});var cg=n=>{Rt&&n.preventDefault()};window.addEventListener("wheel",cg,{passive:!1,capture:!0});window.addEventListener("touchmove",cg,{passive:!1,capture:!0});window.addEventListener("hashchange",n=>{n.agateExploration||Rt&&Cs(Rt,{land:!1,focus:!1})});window.addEventListener("resize",()=>{Rt&&Cs(Rt,{skip:!0})});document.addEventListener("visibilitychange",()=>{document.hidden&&Rt&&Cs(Rt,{focus:!1,skip:!0})});Sd.addEventListener("change",()=>{Rt&&Cs(Rt),wd()});
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
