var Qm=Object.defineProperty;var As=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var eg=(n,e)=>{for(var t in e)Qm(n,t,{get:e[t],enumerable:!0})};function ss(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function $h(n,e){return(n%e+e)%e}function ng(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ig(n,e,t){return n!==e?(t-n)/(e-n):0}function Vr(n,e,t){return(1-t)*n+t*e}function sg(n,e,t,i){return Vr(n,e,1-Math.exp(-t*i))}function rg(n,e=1){return e-Math.abs($h(n,e*2)-e)}function ag(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function og(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function lg(n,e){return n+Math.floor(Math.random()*(e-n+1))}function cg(n,e){return n+Math.random()*(e-n)}function hg(n){return n*(.5-Math.random())}function ug(n){n!==void 0&&(Rd=n);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dg(n){return n*Hr}function fg(n){return n*Xs}function pg(n){return(n&n-1)===0&&n!==0}function mg(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function gg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _g(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Gs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function jh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zf(){let n=Ys("canvas");return n.style.display="block",n}function $s(n){n in Id||(Id[n]=!0,console.warn(n))}function Hf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function yg(){let n={enabled:!0,workingColorSpace:ji,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $s("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ji]:{primaries:e,whitePoint:i,transfer:Xr,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}function si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ho.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Kc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Vi.fromArray(n,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function uh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Ig(n,e,t,i,s,r,a,o){let l;if(e.side===kt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===ri,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ao);return c<t.near||c>t.far?null:{distance:c,point:Ao.clone(),object:n}}function Co(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,So),n.getVertexPosition(l,wo),n.getVertexPosition(c,Eo);let h=Ig(n,e,t,i,So,wo,Eo,Wd);if(h){let d=new k;_i.getBarycoord(Wd,So,wo,Eo,d),s&&(h.uv=_i.getInterpolatedAttribute(s,o,l,c,d,new me)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,d,new me)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,d,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new k,materialIndex:0};_i.getNormal(So,wo,Eo,u.normal),h.face=u,h.barycoord=d}return h}function rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Gt(n){let e={};for(let t=0;t<n.length;t++){let i=rs(n[t]);for(let s in i)e[s]=i[s]}return e}function Lg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Zh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function Jh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function Yd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Bg(n,e){let t=1-n;return t*t*e}function zg(n,e){return 2*(1-n)*n*e}function Hg(n,e){return n*n*e}function Gr(n,e,t,i){return Bg(n,e)+zg(n,t)+Hg(n,i)}function Vg(n,e){let t=1-n;return t*t*t*e}function Gg(n,e){let t=1-n;return 3*t*t*n*e}function Wg(n,e){return 3*(1-n)*n*n*e}function qg(n,e){return n*n*n*e}function Wr(n,e,t,i,s){return Vg(n,e)+Gg(n,t)+Wg(n,i)+qg(n,s)}function Xg(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Wf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Jg(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function Wf(n,e,t,i,s){let r;if(s===l0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=$d(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=$d(a/i|0,n[a],n[a+1],r);return r&&ir(r,r.next)&&(ua(r),r=r.next),r}function Ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ir(t,t.next)||vt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,s,r,a){if(!n)return;!a&&r&&n0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?$g(n,i,s,r):Yg(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=jg(Ki(n),e),ca(n,e,t,i,s,r,2)):a===2&&Zg(n,e,t,i,s,r):ca(Ki(n),e,t,i,s,r,1);break}}}function Yg(n){let e=n.prev,t=n,i=n.next;if(vt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&zr(s,o,r,l,a,c,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function $g(n,e,t,i){let s=n.prev,r=n,a=n.next;if(vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),_=Math.max(o,l,c),m=Math.max(h,d,u),p=wh(f,g,e,t,i),E=wh(_,m,e,t,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=p&&y&&y.z<=E;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&zr(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zr(o,h,l,d,c,u,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&zr(o,h,l,d,c,u,v.x,v.y)&&vt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&zr(o,h,l,d,c,u,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function jg(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ir(i,s)&&Xf(i,t,t.next,s)&&ha(i,s)&&ha(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return Ki(t)}function Zg(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&r0(a,o)){let l=Yf(a,o);a=Ki(a,a.next),l=Ki(l,l.next),ca(a,e,t,i,s,r,0),ca(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Jg(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Wf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(s0(c))}s.sort(Kg);for(let r=0;r<s.length;r++)t=Qg(s[r],t);return t}function Kg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Qg(n,e){let t=e0(n,e);if(!t)return e;let i=Yf(t,n);return Ki(i,i.next),Ki(t,t.next)}function e0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ir(n,t))return t;do{if(ir(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&qf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ha(t,n)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&t0(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function t0(n,e){return vt(n.prev,n,e.prev)<0&&vt(e.next,n,n.next)<0}function n0(n,e,t,i){let s=n;do s.z===0&&(s.z=wh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,i0(s)}function i0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function wh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function s0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function qf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function zr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&qf(n,e,t,i,s,r,a,o)}function r0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!a0(n,e)&&(ha(n,e)&&ha(e,n)&&o0(n,e)&&(vt(n.prev,n,e.prev)||vt(n,e.prev,e))||ir(n,e)&&vt(n.prev,n,n.next)>0&&vt(e.prev,e,e.next)>0)}function vt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ir(n,e){return n.x===e.x&&n.y===e.y}function Xf(n,e,t,i){let s=Lo(vt(n,e,t)),r=Lo(vt(n,e,i)),a=Lo(vt(t,i,n)),o=Lo(vt(t,i,e));return!!(s!==r&&a!==o||s===0&&Io(n,t,e)||r===0&&Io(n,i,e)||a===0&&Io(t,n,i)||o===0&&Io(t,e,i))}function Io(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lo(n){return n>0?1:n<0?-1:0}function a0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Xf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return vt(n.prev,n,n.next)<0?vt(n,e,n.next)>=0&&vt(n,n.prev,e)>=0:vt(n,e,n.prev)<0||vt(n,n.next,e)<0}function o0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Yf(n,e){let t=Eh(n.i,n.x,n.y),i=Eh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $d(n,e,t,i){let s=Eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function l0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function jd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Zd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function h0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function Do(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function u0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function eu(n,e,t,i){let s=x0(i);switch(t){case Hh:return n*e;case Gh:return n*e/s.components*s.byteLength;case Sl:return n*e/s.components*s.byteLength;case Wh:return n*e*2/s.components*s.byteLength;case wl:return n*e*2/s.components*s.byteLength;case Vh:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case El:return n*e*4/s.components*s.byteLength;case wa:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Al:case Rl:return Math.max(n,16)*Math.max(e,8)/4;case Tl:case Cl:return Math.max(n,8)*Math.max(e,8)/2;case Pl:case Il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ll:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yl:case $l:case jl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Zl:case Jl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Kl:case Ql:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x0(n){switch(n){case In:case Oh:return{byteLength:1,components:1};case ar:case kh:case or:return{byteLength:2,components:1};case bl:case Ml:return{byteLength:2,components:4};case Ri:case xl:case Yn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var Ti,Ai,Qd,Ph,ef,Ih,tf,qn,ri,kt,Xn,oi,Yi,Lh,Dh,Uh,nf,vi,sf,rf,af,of,lf,cf,hf,uf,Fo,Oo,df,ff,pf,mf,gf,_f,yf,vf,xf,cl,hl,ul,$i,dl,fl,pl,ml,Nh,bf,Mf,li,Sf,wf,Ef,gl,Tf,Af,Cf,Fh,ns,is,_l,yl,Ma,ko,yi,Bo,Zt,Rf,Sa,Jt,vl,Ci,In,Oh,kh,ar,xl,Ri,Yn,or,bl,Ml,lr,Bh,zh,Hh,Vh,vn,qs,cr,Gh,Sl,Wh,wl,El,wa,Ea,Ta,Aa,Tl,Al,Cl,Rl,Pl,Il,Ll,Dl,Ul,Nl,Fl,Ol,kl,Bl,zl,Hl,Vl,Gl,Wl,ql,Xl,Yl,$l,jl,Zl,Jl,Kl,Ql,qr,zo,Uo,vh,xh,bh,Pf,If,qh,Lf,ci,It,ji,Xr,at,qi,Mh,Df,Uf,Nf,Xh,Ff,Of,kf,Bf,Sh,Yh,Rn,Yr,Hn,Bt,Rd,Hr,Xs,Ca,me,yn,k,$c,Pd,je,jc,Id,Ld,Dd,nt,Ps,Ho,vg,js,xg,Jc,Vt,ft,Vo,Vn,$r,Go,xi,Qn,Tn,fo,Is,Ls,Ds,ui,di,Hi,Fr,po,mo,Vi,bg,Or,Qc,Zs,ei,eh,go,fi,th,_o,nh,Js,Mt,Us,An,Mg,Sg,pi,yo,sn,Ud,Nd,Pn,jr,wg,Fd,Ns,ti,vo,kr,Eg,Tg,Od,kd,Bd,zd,Ag,Fs,ih,$t,Cn,ni,sh,ii,Os,ks,Hd,rh,ah,oh,lh,ch,hh,_i,Vf,mi,xo,$e,zt,Cg,bi,ai,Ct,bo,Rg,an,Zr,Jr,gt,Pg,gn,dh,Bs,rn,Br,Nt,on,Vd,Gi,Mo,Gd,So,wo,Eo,fh,To,Wd,Ao,pt,Mi,Gf,Dg,Ug,ln,Kr,gi,qd,Xd,Ht,zs,Hs,Wo,Qr,qo,zn,Ng,Ks,Si,ea,ph,Fg,Og,_n,Wi,kg,Ro,Qs,Zi,ta,na,Ji,cn,er,Xo,Po,mh,gh,_h,tr,ia,Yo,sa,$o,ra,aa,oa,jo,Zo,la,nr,Th,Xi,da,c0,Gn,fa,pa,ma,Wn,ga,Jo,Ko,Qi,Qo,el,tl,hn,wi,nl,il,sl,_a,Ei,rl,No,al,$f,sr,Vs,ol,ya,va,yh,Jd,Kd,Ah,es,Ch,ts,xa,ll,Kh,d0,Qh,f0,p0,m0,g0,_0,y0,v0,Rh,dt,Qb,rr,ba,tu=As(()=>{Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qd=0,Ph=1,ef=2,Ih=1,tf=2,qn=3,ri=0,kt=1,Xn=2,oi=0,Yi=1,Lh=2,Dh=3,Uh=4,nf=5,vi=100,sf=101,rf=102,af=103,of=104,lf=200,cf=201,hf=202,uf=203,Fo=204,Oo=205,df=206,ff=207,pf=208,mf=209,gf=210,_f=211,yf=212,vf=213,xf=214,cl=0,hl=1,ul=2,$i=3,dl=4,fl=5,pl=6,ml=7,Nh=0,bf=1,Mf=2,li=0,Sf=1,wf=2,Ef=3,gl=4,Tf=5,Af=6,Cf=7,Fh=300,ns=301,is=302,_l=303,yl=304,Ma=306,ko=1e3,yi=1001,Bo=1002,Zt=1003,Rf=1004,Sa=1005,Jt=1006,vl=1007,Ci=1008,In=1009,Oh=1010,kh=1011,ar=1012,xl=1013,Ri=1014,Yn=1015,or=1016,bl=1017,Ml=1018,lr=1020,Bh=35902,zh=35899,Hh=1021,Vh=1022,vn=1023,qs=1026,cr=1027,Gh=1028,Sl=1029,Wh=1030,wl=1031,El=1033,wa=33776,Ea=33777,Ta=33778,Aa=33779,Tl=35840,Al=35841,Cl=35842,Rl=35843,Pl=36196,Il=37492,Ll=37496,Dl=37808,Ul=37809,Nl=37810,Fl=37811,Ol=37812,kl=37813,Bl=37814,zl=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,ql=37820,Xl=37821,Yl=36492,$l=36494,jl=36495,Zl=36283,Jl=36284,Kl=36285,Ql=36286,qr=2300,zo=2301,Uo=2302,vh=2400,xh=2401,bh=2402,Pf=3200,If=3201,qh=0,Lf=1,ci="",It="srgb",ji="srgb-linear",Xr="linear",at="srgb",qi=7680,Mh=519,Df=512,Uf=513,Nf=514,Xh=515,Ff=516,Of=517,kf=518,Bf=519,Sh=35044,Yh="300 es",Rn=2e3,Yr=2001,Hn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,Hr=Math.PI/180,Xs=180/Math.PI;Ca={DEG2RAD:Hr,RAD2DEG:Xs,generateUUID:ss,clamp:Ke,euclideanModulo:$h,mapLinear:ng,inverseLerp:ig,lerp:Vr,damp:sg,pingpong:rg,smoothstep:ag,smootherstep:og,randInt:lg,randFloat:cg,randFloatSpread:hg,seededRandom:ug,degToRad:dg,radToDeg:fg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:gg,setQuaternionFromProperEuler:_g,normalize:Yt,denormalize:Gs},me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*_,E=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),A=Math.atan2(C,p*E);m=Math.sin(m*A)/C,o=Math.sin(o*A)/C}let y=o*E;if(l=l*m+u*y,c=c*m+f*y,h=h*m+g*y,d=d*m+_*y,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new k,Pd=new yn,je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],E=s[1],v=s[4],y=s[7],C=s[2],A=s[5],D=s[8];return r[0]=a*_+o*E+l*C,r[3]=a*m+o*v+l*A,r[6]=a*p+o*y+l*D,r[1]=c*_+h*E+d*C,r[4]=c*m+h*v+d*A,r[7]=c*p+h*y+d*D,r[2]=u*_+f*E+g*C,r[5]=u*m+f*v+g*A,r[8]=u*p+f*y+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jc=new je;Id={};Ld=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=yg();Ho=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ps===void 0&&(Ps=Ys("canvas")),Ps.width=e.width,Ps.height=e.height;let s=Ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ps}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(si(t[i]/255)*255):t[i]=si(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vg=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Zc(s[a].image)):r.push(Zc(s[a]))}else r=Zc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};xg=0,Jc=new k,Vt=class n extends Hn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yi,s=yi,r=Jt,a=Ci,o=vn,l=In,c=n.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ss(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Fh;Vt.DEFAULT_ANISOTROPY=1;ft=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(f+1)/2,C=(p+1)/2,A=(h+u)/4,D=(d+_)/4,F=(g+m)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=D/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=A/s,r=F/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=D/r,s=F/r),this.set(i,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-_)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vo=class extends Hn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Vt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new js(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Vo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$r=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Go=class extends Vt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),po.subVectors(this.max,Fr),Is.subVectors(e.a,Fr),Ls.subVectors(e.b,Fr),Ds.subVectors(e.c,Fr),ui.subVectors(Ls,Is),di.subVectors(Ds,Ls),Hi.subVectors(Is,Ds);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Hi.z,Hi.y,ui.z,0,-ui.x,di.z,0,-di.x,Hi.z,0,-Hi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Hi.y,Hi.x,0];return!Kc(t,Is,Ls,Ds,po)||(t=[1,0,0,0,1,0,0,0,1],!Kc(t,Is,Ls,Ds,po))?!1:(mo.crossVectors(ui,di),t=[mo.x,mo.y,mo.z],Kc(t,Is,Ls,Ds,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Qn=[new k,new k,new k,new k,new k,new k,new k,new k],Tn=new k,fo=new xi,Is=new k,Ls=new k,Ds=new k,ui=new k,di=new k,Hi=new k,Fr=new k,po=new k,mo=new k,Vi=new k;bg=new xi,Or=new k,Qc=new k,Zs=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):bg.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(Qc)),this.expandByPoint(Or.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ei=new k,eh=new k,go=new k,fi=new k,th=new k,_o=new k,nh=new k,Js=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,t),ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){eh.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(eh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=fi.dot(this.direction),l=-fi.dot(go),c=fi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(eh).addScaledVector(go,u),f}intersectSphere(e,t){ei.subVectors(e.center,this.origin);let i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,t,i,s,r){th.subVectors(t,e),_o.subVectors(i,e),nh.crossVectors(th,_o);let a=this.direction.dot(nh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);let l=o*this.direction.dot(_o.crossVectors(fi,_o));if(l<0)return null;let c=o*this.direction.dot(th.cross(fi));if(c<0||l+c>a)return null;let h=-o*fi.dot(nh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mg,e,Sg)}lookAt(e,t,i){let s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),pi.crossVectors(i,sn),pi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),pi.crossVectors(i,sn)),pi.normalize(),yo.crossVectors(sn,pi),s[0]=pi.x,s[4]=yo.x,s[8]=sn.x,s[1]=pi.y,s[5]=yo.y,s[9]=sn.y,s[2]=pi.z,s[6]=yo.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],E=i[3],v=i[7],y=i[11],C=i[15],A=s[0],D=s[4],F=s[8],S=s[12],b=s[1],U=s[5],H=s[9],X=s[13],W=s[2],Y=s[6],R=s[10],L=s[14],I=s[3],$=s[7],te=s[11],se=s[15];return r[0]=a*A+o*b+l*W+c*I,r[4]=a*D+o*U+l*Y+c*$,r[8]=a*F+o*H+l*R+c*te,r[12]=a*S+o*X+l*L+c*se,r[1]=h*A+d*b+u*W+f*I,r[5]=h*D+d*U+u*Y+f*$,r[9]=h*F+d*H+u*R+f*te,r[13]=h*S+d*X+u*L+f*se,r[2]=g*A+_*b+m*W+p*I,r[6]=g*D+_*U+m*Y+p*$,r[10]=g*F+_*H+m*R+p*te,r[14]=g*S+_*X+m*L+p*se,r[3]=E*A+v*b+y*W+C*I,r[7]=E*D+v*U+y*Y+C*$,r[11]=E*F+v*H+y*R+C*te,r[15]=E*S+v*X+y*L+C*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+_*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+m*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=d*m*c-_*u*c+_*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,y=h*_*c-g*d*c+g*o*f-a*_*f-h*o*p+a*d*p,C=g*d*l-h*_*l-g*o*u+a*_*u+h*o*m-a*d*m,A=t*E+i*v+s*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=E*D,e[1]=(_*u*r-d*m*r-_*s*f+i*m*f+d*s*p-i*u*p)*D,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*D,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*D,e[4]=v*D,e[5]=(h*m*r-g*u*r+g*s*f-t*m*f-h*s*p+t*u*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*D,e[8]=y*D,e[9]=(g*d*r-h*_*r-g*i*f+t*_*f+h*i*p-t*d*p)*D,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*D,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*D,e[12]=C*D,e[13]=(h*_*s-g*d*s+g*i*u-t*_*u-h*i*m+t*d*m)*D,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*D,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,m=a*d,p=o*d,E=l*c,v=l*h,y=l*d,C=i.x,A=i.y,D=i.z;return s[0]=(1-(_+p))*C,s[1]=(f+y)*C,s[2]=(g-v)*C,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(u+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+v)*D,s[9]=(m-E)*D,s[10]=(1-(u+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],An.copy(this);let c=1/r,h=1/a,d=1/o;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,t.setFromRotationMatrix(An),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Yr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Rn,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Rn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Yr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Us=new k,An=new Mt,Mg=new k(0,0,0),Sg=new k(1,1,1),pi=new k,yo=new k,sn=new k,Ud=new Mt,Nd=new yn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";jr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wg=0,Fd=new k,Ns=new yn,ti=new Mt,vo=new k,kr=new k,Eg=new k,Tg=new yn,Od=new k(1,0,0),kd=new k(0,1,0),Bd=new k(0,0,1),zd={type:"added"},Ag={type:"removed"},Fs={type:"childadded",child:null},ih={type:"childremoved",child:null},$t=class n extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Pn,i=new yn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(kd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(kd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(kr,vo,this.up):ti.lookAt(vo,kr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ti),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ag),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,Eg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Tg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};$t.DEFAULT_UP=new k(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Cn=new k,ni=new k,sh=new k,ii=new k,Os=new k,ks=new k,Hd=new k,rh=new k,ah=new k,oh=new k,lh=new ft,ch=new ft,hh=new ft,_i=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Cn.subVectors(e,t),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Cn.subVectors(s,t),ni.subVectors(i,t),sh.subVectors(e,t);let a=Cn.dot(Cn),o=Cn.dot(ni),l=Cn.dot(sh),c=ni.dot(ni),h=ni.dot(sh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,i),hh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lh,r.x),a.addScaledVector(ch,r.y),a.addScaledVector(hh,r.z),a}static isFrontFacing(e,t,i,s){return Cn.subVectors(i,t),ni.subVectors(e,t),Cn.cross(ni).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Cn.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Os.subVectors(s,i),ks.subVectors(r,i),rh.subVectors(e,i);let l=Os.dot(rh),c=ks.dot(rh);if(l<=0&&c<=0)return t.copy(i);ah.subVectors(e,s);let h=Os.dot(ah),d=ks.dot(ah);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Os,a);oh.subVectors(e,r);let f=Os.dot(oh),g=ks.dot(oh);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ks,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Hd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(Hd,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(Os,a).addScaledVector(ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},xo={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=$h(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=uh(a,r,e+1/3),this.g=uh(a,r,e),this.b=uh(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=It){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let i=Vf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return nt.workingToColorSpace(zt.copy(this),e),Math.round(Ke(zt.r*255,0,255))*65536+Math.round(Ke(zt.g*255,0,255))*256+Math.round(Ke(zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(zt.copy(this),t);let i=zt.r,s=zt.g,r=zt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=It){nt.workingToColorSpace(zt.copy(this),e);let t=zt.r,i=zt.g,s=zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(xo);let i=Vr(mi.h,xo.h,t),s=Vr(mi.s,xo.s,t),r=Vr(mi.l,xo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new $e;$e.NAMES=Vf;Cg=0,bi=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Yi,this.side=ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Oo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fo&&(i.blendSrc=this.blendSrc),this.blendDst!==Oo&&(i.blendDst=this.blendDst),this.blendEquation!==vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ai=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ct=new k,bo=new me,Rg=0,an=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),s=Yt(s,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sh&&(e.usage=this.usage),e}},Zr=class extends an{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Jr=class extends an{constructor(e,t,i){super(new Uint32Array(e),t,i)}},gt=class extends an{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pg=0,gn=new Mt,dh=new $t,Bs=new k,rn=new xi,Br=new xi,Nt=new k,on=class n extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?Jr:Zr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(rn.min,Br.min),rn.expandByPoint(Nt),Nt.addVectors(rn.max,Br.max),rn.expandByPoint(Nt)):(rn.expandByPoint(Br.min),rn.expandByPoint(Br.max))}rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Bs.fromBufferAttribute(e,c),Nt.add(Bs)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new k,l[F]=new k;let c=new k,h=new k,d=new k,u=new me,f=new me,g=new me,_=new k,m=new k;function p(F,S,b){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),u.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(U),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),o[F].add(_),o[S].add(_),o[b].add(_),l[F].add(m),l[S].add(m),l[b].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,S=E.length;F<S;++F){let b=E[F],U=b.start,H=b.count;for(let X=U,W=U+H;X<W;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let v=new k,y=new k,C=new k,A=new k;function D(F){C.fromBufferAttribute(s,F),A.copy(C);let S=o[F];v.copy(S),v.sub(C.multiplyScalar(C.dot(S))).normalize(),y.crossVectors(A,S);let U=y.dot(l[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,U)}for(let F=0,S=E.length;F<S;++F){let b=E[F],U=b.start,H=b.count;for(let X=U,W=U+H;X<W;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,d=new k;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new an(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vd=new Mt,Gi=new Js,Mo=new Zs,Gd=new k,So=new k,wo=new k,Eo=new k,fh=new k,To=new k,Wd=new k,Ao=new k,pt=class extends $t{constructor(e=new on,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(fh.fromBufferAttribute(d,e),a?To.addScaledVector(fh,h):To.addScaledVector(fh.sub(t),h))}t.add(To)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Gi.copy(e.ray).recast(e.near),!(Mo.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(Mo,Gd)===null||Gi.origin.distanceToSquared(Gd)>(e.far-e.near)**2))&&(Vd.copy(r).invert(),Gi.copy(e.ray).applyMatrix4(Vd),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,C=v;y<C;y+=3){let A=o.getX(y),D=o.getX(y+1),F=o.getX(y+2);s=Co(this,p,e,i,c,h,d,A,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=o.getX(m),v=o.getX(m+1),y=o.getX(m+2);s=Co(this,a,e,i,c,h,d,E,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,C=v;y<C;y+=3){let A=y,D=y+1,F=y+2;s=Co(this,p,e,i,c,h,d,A,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let E=m,v=m+1,y=m+2;s=Co(this,a,e,i,c,h,d,E,v,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Mi=class n extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(h,3)),this.setAttribute("uv",new gt(d,2));function g(_,m,p,E,v,y,C,A,D,F,S){let b=y/D,U=C/F,H=y/2,X=C/2,W=A/2,Y=D+1,R=F+1,L=0,I=0,$=new k;for(let te=0;te<R;te++){let se=te*U-X;for(let q=0;q<Y;q++){let fe=q*b-H;$[_]=fe*E,$[m]=se*v,$[p]=W,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=A>0?1:-1,h.push($.x,$.y,$.z),d.push(q/D),d.push(1-te/F),L+=1}}for(let te=0;te<F;te++)for(let se=0;se<D;se++){let q=u+se+Y*te,fe=u+se+Y*(te+1),be=u+(se+1)+Y*(te+1),Ae=u+(se+1)+Y*te;l.push(q,fe,Ae),l.push(fe,be,Ae),I+=6}o.addGroup(f,I,S),f+=I,u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Gf={clone:rs,merge:Gt},Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ug=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Ug,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=Lg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Kr=class extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new k,qd=new me,Xd=new me,Ht=class extends Kr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,qd,Xd),t.subVectors(Xd,qd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},zs=-90,Hs=1,Wo=class extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(zs,Hs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(zs,Hs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(zs,Hs,e,t);a.layers=this.layers,this.add(a);let o=new Ht(zs,Hs,e,t);o.layers=this.layers,this.add(o);let l=new Ht(zs,Hs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(zs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Qr=class extends Vt{constructor(e=[],t=ns,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},qo=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kt,blending:oi});r.uniforms.tEquirect.value=t;let a=new pt(s,r),o=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Jt),new Wo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},zn=class extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},Ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Si=class extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ea=class extends Vt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Zt,h=Zt,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ph=new k,Fg=new k,Og=new je,_n=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ph.subVectors(i,t).cross(Fg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ph),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Og.getNormalMatrix(e),s=this.coplanarPoint(ph).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Zs,kg=new me(.5,.5),Ro=new k,Qs=class{constructor(e=new _n,t=new _n,i=new _n,s=new _n,r=new _n,a=new _n){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Rn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],E=r[12],v=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,f-h,p-g,C-E).normalize(),s[1].setComponents(c+a,f+h,p+g,C+E).normalize(),s[2].setComponents(c+o,f+d,p+_,C+v).normalize(),s[3].setComponents(c-o,f-d,p-_,C-v).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,C-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,C-y).normalize(),t===Rn)s[5].setComponents(c+l,f+u,p+m,C+y).normalize();else if(t===Yr)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=kg.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ro.x=s.normal.x>0?e.max.x:e.min.x,Ro.y=s.normal.y>0?e.max.y:e.min.y,Ro.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zi=class extends Vt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ta=class extends Vt{constructor(e,t,i=Ri,s,r,a,o=Zt,l=Zt,c,h=qs,d=1){if(h!==qs&&h!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},na=class extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ji=class n extends on{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],m=i/2,p=0;E(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function E(){let y=new k,C=new k,A=0,D=(t-e)/i;for(let F=0;F<=r;F++){let S=[],b=F/r,U=b*(t-e)+e;for(let H=0;H<=s;H++){let X=H/s,W=X*l+o,Y=Math.sin(W),R=Math.cos(W);C.x=U*Y,C.y=-b*i+m,C.z=U*R,d.push(C.x,C.y,C.z),y.set(Y,D,R).normalize(),u.push(y.x,y.y,y.z),f.push(X,1-b),S.push(g++)}_.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let b=_[S][F],U=_[S+1][F],H=_[S+1][F+1],X=_[S][F+1];(e>0||S!==0)&&(h.push(b,U,X),A+=3),(t>0||S!==r-1)&&(h.push(U,H,X),A+=3)}c.addGroup(p,A,0),p+=A}function v(y){let C=g,A=new me,D=new k,F=0,S=y===!0?e:t,b=y===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*b,0),u.push(0,b,0),f.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let W=H/s*l+o,Y=Math.cos(W),R=Math.sin(W);D.x=S*R,D.y=m*b,D.z=S*Y,d.push(D.x,D.y,D.z),u.push(0,b,0),A.x=Y*.5+.5,A.y=R*.5*b+.5,f.push(A.x,A.y),g++}for(let H=0;H<s;H++){let X=C+H,W=U+H;y===!0?h.push(W,W+1,X):h.push(W+1,W,X),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new k,s=[],r=[],a=[],o=new k,l=new Mt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},er=class extends cn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xo=class extends er{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Po=new k,mh=new Jh,gh=new Jh,_h=new Jh,tr=class extends cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),mh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,m),gh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,m),_h.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(mh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),gh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),_h.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(mh.calc(l),gh.calc(l),_h.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};ia=class extends cn{constructor(e=new me,t=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yo=class extends cn{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y),Wr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends cn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$o=class extends cn{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends cn{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Gr(e,s.x,r.x,a.x),Gr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends cn{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Gr(e,s.x,r.x,a.x),Gr(e,s.y,r.y,a.y),Gr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Yd(o,l.x,c.x,h.x,d.x),Yd(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},jo=Object.freeze({__proto__:null,ArcCurve:Xo,CatmullRomCurve3:tr,CubicBezierCurve:ia,CubicBezierCurve3:Yo,EllipseCurve:er,LineCurve:sa,LineCurve3:$o,QuadraticBezierCurve:ra,QuadraticBezierCurve3:aa,SplineCurve:oa}),Zo=class extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new jo[s.type]().fromJSON(s))}return this}},la=class extends Zo{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new sa(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ra(this.currentPoint.clone(),new me(e,t),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ia(this.currentPoint.clone(),new me(e,t),new me(i,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new er(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},nr=class extends la{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};Th=class{static triangulate(e,t,i=2){return Xg(e,t,i)}},Xi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];jd(e),Zd(i,e);let a=e.length;t.forEach(jd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Zd(i,t[l]);let o=Th.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};da=class n extends on{constructor(e=new nr([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:c0,v,y=!1,C,A,D,F;p&&(v=p.getSpacedPoints(h),y=!0,u=!1,C=p.computeFrenetFrames(h,!1),A=new k,D=new k,F=new k),u||(m=0,f=0,g=0,_=0);let S=o.extractPoints(c),b=S.shape,U=S.holes;if(!Xi.isClockWise(b)){b=b.reverse();for(let oe=0,Q=U.length;oe<Q;oe++){let ne=U[oe];Xi.isClockWise(ne)&&(U[oe]=ne.reverse())}}function X(oe){let ne=10000000000000001e-36,ie=oe[0];for(let ce=1;ce<=oe.length;ce++){let pe=ce%oe.length,Me=oe[pe],Xe=Me.x-ie.x,Pe=Me.y-ie.y,T=Xe*Xe+Pe*Pe,x=Math.max(Math.abs(Me.x),Math.abs(Me.y),Math.abs(ie.x),Math.abs(ie.y)),G=ne*x*x;if(T<=G){oe.splice(pe,1),ce--;continue}ie=Me}}X(b),U.forEach(X);let W=U.length,Y=b;for(let oe=0;oe<W;oe++){let Q=U[oe];b=b.concat(Q)}function R(oe,Q,ne){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(Q,ne)}let L=b.length;function I(oe,Q,ne){let ie,ce,pe,Me=oe.x-Q.x,Xe=oe.y-Q.y,Pe=ne.x-oe.x,T=ne.y-oe.y,x=Me*Me+Xe*Xe,G=Me*T-Xe*Pe;if(Math.abs(G)>Number.EPSILON){let K=Math.sqrt(x),le=Math.sqrt(Pe*Pe+T*T),ee=Q.x-Xe/K,Re=Q.y+Me/K,ve=ne.x-T/le,Le=ne.y+Pe/le,Ne=((ve-ee)*T-(Le-Re)*Pe)/(Me*T-Xe*Pe);ie=ee+Me*Ne-oe.x,ce=Re+Xe*Ne-oe.y;let ge=ie*ie+ce*ce;if(ge<=2)return new me(ie,ce);pe=Math.sqrt(ge/2)}else{let K=!1;Me>Number.EPSILON?Pe>Number.EPSILON&&(K=!0):Me<-Number.EPSILON?Pe<-Number.EPSILON&&(K=!0):Math.sign(Xe)===Math.sign(T)&&(K=!0),K?(ie=-Xe,ce=Me,pe=Math.sqrt(x)):(ie=Me,ce=Xe,pe=Math.sqrt(x/2))}return new me(ie/pe,ce/pe)}let $=[];for(let oe=0,Q=Y.length,ne=Q-1,ie=oe+1;oe<Q;oe++,ne++,ie++)ne===Q&&(ne=0),ie===Q&&(ie=0),$[oe]=I(Y[oe],Y[ne],Y[ie]);let te=[],se,q=$.concat();for(let oe=0,Q=W;oe<Q;oe++){let ne=U[oe];se=[];for(let ie=0,ce=ne.length,pe=ce-1,Me=ie+1;ie<ce;ie++,pe++,Me++)pe===ce&&(pe=0),Me===ce&&(Me=0),se[ie]=I(ne[ie],ne[pe],ne[Me]);te.push(se),q=q.concat(se)}let fe;if(m===0)fe=Xi.triangulateShape(Y,U);else{let oe=[],Q=[];for(let ne=0;ne<m;ne++){let ie=ne/m,ce=f*Math.cos(ie*Math.PI/2),pe=g*Math.sin(ie*Math.PI/2)+_;for(let Me=0,Xe=Y.length;Me<Xe;Me++){let Pe=R(Y[Me],$[Me],pe);he(Pe.x,Pe.y,-ce),ie===0&&oe.push(Pe)}for(let Me=0,Xe=W;Me<Xe;Me++){let Pe=U[Me];se=te[Me];let T=[];for(let x=0,G=Pe.length;x<G;x++){let K=R(Pe[x],se[x],pe);he(K.x,K.y,-ce),ie===0&&T.push(K)}ie===0&&Q.push(T)}}fe=Xi.triangulateShape(oe,Q)}let be=fe.length,Ae=g+_;for(let oe=0;oe<L;oe++){let Q=u?R(b[oe],q[oe],Ae):b[oe];y?(D.copy(C.normals[0]).multiplyScalar(Q.x),A.copy(C.binormals[0]).multiplyScalar(Q.y),F.copy(v[0]).add(D).add(A),he(F.x,F.y,F.z)):he(Q.x,Q.y,0)}for(let oe=1;oe<=h;oe++)for(let Q=0;Q<L;Q++){let ne=u?R(b[Q],q[Q],Ae):b[Q];y?(D.copy(C.normals[oe]).multiplyScalar(ne.x),A.copy(C.binormals[oe]).multiplyScalar(ne.y),F.copy(v[oe]).add(D).add(A),he(F.x,F.y,F.z)):he(ne.x,ne.y,d/h*oe)}for(let oe=m-1;oe>=0;oe--){let Q=oe/m,ne=f*Math.cos(Q*Math.PI/2),ie=g*Math.sin(Q*Math.PI/2)+_;for(let ce=0,pe=Y.length;ce<pe;ce++){let Me=R(Y[ce],$[ce],ie);he(Me.x,Me.y,d+ne)}for(let ce=0,pe=U.length;ce<pe;ce++){let Me=U[ce];se=te[ce];for(let Xe=0,Pe=Me.length;Xe<Pe;Xe++){let T=R(Me[Xe],se[Xe],ie);y?he(T.x,T.y+v[h-1].y,v[h-1].x+ne):he(T.x,T.y,d+ne)}}}w(),N();function w(){let oe=s.length/3;if(u){let Q=0,ne=L*Q;for(let ie=0;ie<be;ie++){let ce=fe[ie];ue(ce[2]+ne,ce[1]+ne,ce[0]+ne)}Q=h+m*2,ne=L*Q;for(let ie=0;ie<be;ie++){let ce=fe[ie];ue(ce[0]+ne,ce[1]+ne,ce[2]+ne)}}else{for(let Q=0;Q<be;Q++){let ne=fe[Q];ue(ne[2],ne[1],ne[0])}for(let Q=0;Q<be;Q++){let ne=fe[Q];ue(ne[0]+L*h,ne[1]+L*h,ne[2]+L*h)}}i.addGroup(oe,s.length/3-oe,0)}function N(){let oe=s.length/3,Q=0;J(Y,Q),Q+=Y.length;for(let ne=0,ie=U.length;ne<ie;ne++){let ce=U[ne];J(ce,Q),Q+=ce.length}i.addGroup(oe,s.length/3-oe,1)}function J(oe,Q){let ne=oe.length;for(;--ne>=0;){let ie=ne,ce=ne-1;ce<0&&(ce=oe.length-1);for(let pe=0,Me=h+m*2;pe<Me;pe++){let Xe=L*pe,Pe=L*(pe+1),T=Q+ie+Xe,x=Q+ce+Xe,G=Q+ce+Pe,K=Q+ie+Pe;re(T,x,G,K)}}}function he(oe,Q,ne){l.push(oe),l.push(Q),l.push(ne)}function ue(oe,Q,ne){Ve(oe),Ve(Q),Ve(ne);let ie=s.length/3,ce=E.generateTopUV(i,s,ie-3,ie-2,ie-1);P(ce[0]),P(ce[1]),P(ce[2])}function re(oe,Q,ne,ie){Ve(oe),Ve(Q),Ve(ie),Ve(Q),Ve(ne),Ve(ie);let ce=s.length/3,pe=E.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);P(pe[0]),P(pe[1]),P(pe[3]),P(pe[1]),P(pe[2]),P(pe[3])}function Ve(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function P(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return h0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new jo[s.type]().fromJSON(s)),new n(i,e.options)}},c0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-d),new me(u,1-g),new me(_,1-p)]:[new me(o,1-l),new me(h,1-d),new me(f,1-g),new me(m,1-p)]}};Gn=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let v=0;v<c;v++){let y=v*d-r;g.push(y,-E,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let v=E+c*p,y=E+c*(p+1),C=E+1+c*(p+1),A=E+1+c*p;f.push(v,y,A),f.push(y,C,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},fa=class n extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new k,u=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let E=[],v=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let A=C/t;d.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(A+y,1-v),E.push(c++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){let v=h[p][E+1],y=h[p][E],C=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&f.push(v,y,A),(p!==i-1||l<Math.PI)&&f.push(y,C,A)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(_,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},pa=class n extends on{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new k,d=new k,u=new k;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(_),d.y=(e+t*Math.cos(m))*Math.sin(_),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;a.push(_,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ma=class n extends on{constructor(e=new aa(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new me,h=new k,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new gt(d,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(f,2));function _(){for(let v=0;v<t;v++)m(v);m(r===!1?t:0),E(),p()}function m(v){h=e.getPointAt(v/t,h);let y=a.normals[v],C=a.binormals[v];for(let A=0;A<=s;A++){let D=A/s*Math.PI*2,F=Math.sin(D),S=-Math.cos(D);l.x=S*y.x+F*C.x,l.y=S*y.y+F*C.y,l.z=S*y.z+F*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let y=1;y<=s;y++){let C=(s+1)*(v-1)+(y-1),A=(s+1)*v+(y-1),D=(s+1)*v+y,F=(s+1)*(v-1)+y;g.push(C,A,F),g.push(A,D,F)}}function E(){for(let v=0;v<=t;v++)for(let y=0;y<=s;y++)c.x=v/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new jo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Wn=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ga=class extends Wn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Jo=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ko=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Qi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Qo=class extends Qi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vh,endingEnd:vh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=e,o=2*t-i;break;case bh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:a=e,l=2*i-t;break;case bh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,E=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+E*a[c+C]+v*a[l+C]+y*a[d+C];return r}},el=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},tl=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Do(t,this.TimeBufferType),this.values=Do(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Do(e.times,Array),values:Do(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new el(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Qo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case zo:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Uo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&u0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=zo;wi=class extends hn{constructor(e,t,i){super(e,t,i)}};wi.prototype.ValueTypeName="bool";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=qr;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;nl=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};nl.prototype.ValueTypeName="color";il=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};il.prototype.ValueTypeName="number";sl=class extends Qi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)yn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_a=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new sl(this.times,this.values,this.getValueSize(),e)}};_a.prototype.ValueTypeName="quaternion";_a.prototype.InterpolantFactoryMethodSmooth=void 0;Ei=class extends hn{constructor(e,t,i){super(e,t,i)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=qr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;rl=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};rl.prototype.ValueTypeName="vector";No={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},al=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},$f=new al,sr=class{constructor(e){this.manager=e!==void 0?e:$f,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};sr.DEFAULT_MATERIAL_NAME="__DEFAULT";Vs=new WeakMap,ol=class extends sr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=No.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Vs.get(a);d===void 0&&(d=[],Vs.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=Ys("img");function l(){h(),t&&t(this);let d=Vs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Vs.delete(this),r.manager.itemEnd(e)}function c(d){h(),s&&s(d),No.remove(`image:${e}`);let u=Vs.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Vs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),No.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},ya=class extends sr{constructor(e){super(e)}load(e,t,i,s){let r=new Vt,a=new ol(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},va=class extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},yh=new Mt,Jd=new k,Kd=new k,Ah=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),yh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},es=class extends Kr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ch=class extends Ah{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ts=class extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new Ch}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xa=class extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ll=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Kh="\\[\\]\\.:\\/",d0=new RegExp("["+Kh+"]","g"),Qh="[^"+Kh+"]",f0="[^"+Kh.replace("\\.","")+"]",p0=/((?:WC+[\/:])*)/.source.replace("WC",Qh),m0=/(WCOD+)?/.source.replace("WCOD",f0),g0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),_0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),y0=new RegExp("^"+p0+m0+g0+_0+"$"),v0=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let s=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(d0,"")}static parseTrackName(e){let t=y0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);v0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Rh;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Qb=new Float32Array(1),rr=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},ba=class extends Hn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function yp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function M0(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function iv(n,e,t,i,s,r,a){let o=new $e(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1,C=g(v);C===null?p(o,l):C&&C.isColor&&(p(C,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,y){let C=g(y);C&&(C.isCubeTexture||C.mapping===Ma)?(h===void 0&&(h=new pt(new Mi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(nv.makeRotationFromEuler(as)),h.material.toneMapped=nt.getTransfer(C.colorSpace)!==at,(d!==C||u!==C.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new pt(new Gn(2,2),new ln({name:"BackgroundMaterial",uniforms:rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(C.colorSpace)!==at,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||u!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=C,u=C.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(ec,Zh(n)),i.buffers.color.setClear(ec.r,ec.g,ec.b,y,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m,dispose:E}}function sv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(b,U,H,X,W){let Y=!1,R=d(X,H,U);r!==R&&(r=R,c(r.object)),Y=f(b,X,H,W),Y&&g(b,X,H,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(b,U,H,X),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(b){return n.bindVertexArray(b)}function h(b){return n.deleteVertexArray(b)}function d(b,U,H){let X=H.wireframe===!0,W=i[b.id];W===void 0&&(W={},i[b.id]=W);let Y=W[U.id];Y===void 0&&(Y={},W[U.id]=Y);let R=Y[X];return R===void 0&&(R=u(l()),Y[X]=R),R}function u(b){let U=[],H=[],X=[];for(let W=0;W<t;W++)U[W]=0,H[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:X,object:b,attributes:{},index:null}}function f(b,U,H,X){let W=r.attributes,Y=U.attributes,R=0,L=H.getAttributes();for(let I in L)if(L[I].location>=0){let te=W[I],se=Y[I];if(se===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),te===void 0||te.attribute!==se||se&&te.data!==se.data)return!0;R++}return r.attributesNum!==R||r.index!==X}function g(b,U,H,X){let W={},Y=U.attributes,R=0,L=H.getAttributes();for(let I in L)if(L[I].location>=0){let te=Y[I];te===void 0&&(I==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),I==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));let se={};se.attribute=te,te&&te.data&&(se.data=te.data),W[I]=se,R++}r.attributes=W,r.attributesNum=R,r.index=X}function _(){let b=r.newAttributes;for(let U=0,H=b.length;U<H;U++)b[U]=0}function m(b){p(b,0)}function p(b,U){let H=r.newAttributes,X=r.enabledAttributes,W=r.attributeDivisors;H[b]=1,X[b]===0&&(n.enableVertexAttribArray(b),X[b]=1),W[b]!==U&&(n.vertexAttribDivisor(b,U),W[b]=U)}function E(){let b=r.newAttributes,U=r.enabledAttributes;for(let H=0,X=U.length;H<X;H++)U[H]!==b[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function v(b,U,H,X,W,Y,R){R===!0?n.vertexAttribIPointer(b,U,H,W,Y):n.vertexAttribPointer(b,U,H,X,W,Y)}function y(b,U,H,X){_();let W=X.attributes,Y=H.getAttributes(),R=U.defaultAttributeValues;for(let L in Y){let I=Y[L];if(I.location>=0){let $=W[L];if($===void 0&&(L==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),L==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){let te=$.normalized,se=$.itemSize,q=e.get($);if(q===void 0)continue;let fe=q.buffer,be=q.type,Ae=q.bytesPerElement,w=be===n.INT||be===n.UNSIGNED_INT||$.gpuType===xl;if($.isInterleavedBufferAttribute){let N=$.data,J=N.stride,he=$.offset;if(N.isInstancedInterleavedBuffer){for(let ue=0;ue<I.locationSize;ue++)p(I.location+ue,N.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let ue=0;ue<I.locationSize;ue++)m(I.location+ue);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ue=0;ue<I.locationSize;ue++)v(I.location+ue,se/I.locationSize,be,te,J*Ae,(he+se/I.locationSize*ue)*Ae,w)}else{if($.isInstancedBufferAttribute){for(let N=0;N<I.locationSize;N++)p(I.location+N,$.meshPerAttribute);b.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let N=0;N<I.locationSize;N++)m(I.location+N);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let N=0;N<I.locationSize;N++)v(I.location+N,se/I.locationSize,be,te,se*Ae,se/I.locationSize*N*Ae,w)}}else if(R!==void 0){let te=R[L];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(I.location,te);break;case 3:n.vertexAttrib3fv(I.location,te);break;case 4:n.vertexAttrib4fv(I.location,te);break;default:n.vertexAttrib1fv(I.location,te)}}}}E()}function C(){F();for(let b in i){let U=i[b];for(let H in U){let X=U[H];for(let W in X)h(X[W].object),delete X[W];delete U[H]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;let U=i[b.id];for(let H in U){let X=U[H];for(let W in X)h(X[W].object),delete X[W];delete U[H]}delete i[b.id]}function D(b){for(let U in i){let H=i[U];if(H[b.id]===void 0)continue;let X=H[b.id];for(let W in X)h(X[W].object),delete X[W];delete H[b.id]}}function F(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function rv(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function av(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==vn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let F=D===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==In&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yn&&!F)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:C,maxSamples:A}}function ov(n){let e=this,t=null,i=0,s=!1,r=!1,a=new _n,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:i,v=E*4,y=p.clippingState||null;l.value=y,y=h(g,u,v,f);for(let C=0;C!==v;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)a.copy(d[v]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function lv(n){let e=new WeakMap;function t(a,o){return o===_l?a.mapping=ns:o===yl&&(a.mapping=is),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===_l||o===yl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new qo(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function hv(n){let e=[],t=[],i=[],s=n,r=n-ur+1+jf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-ur?l=jf[a-n+ur-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let A=0;A<f;A++){let D=A%3*2/3-1,F=A>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];E.set(S,_*g*A),v.set(u,m*g*A);let b=[A,A,A,A,A,A];y.set(b,p*g*A)}let C=new on;C.setAttribute("position",new an(E,_)),C.setAttribute("uv",new an(v,m)),C.setAttribute("faceIndex",new an(y,p)),e.push(C),s>ur&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kf(n,e,t){let i=new Vn(n,e,t);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tc(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function uv(n,e,t){let i=new Float32Array(cs),s=new k(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Qf(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ep(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function dv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===_l||l===yl,h=l===ns||l===is;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new fr(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new fr(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function fv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$s("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pv(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,_=0;if(f!==null){let E=f.array;_=f.version;for(let v=0,y=E.length;v<y;v+=3){let C=E[v+0],A=E[v+1],D=E[v+2];u.push(C,A,A,D,D,C)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,y=E.length/3-1;v<y;v+=3){let C=v+0,A=v+1,D=v+2;u.push(C,A,A,D,D,C)}}else return;let m=new(jh(u)?Jr:Zr)(u,1);m.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function mv(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function gv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function _v(n,e,t){let i=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*C*4*d),D=new $r(A,y,C,d);D.type=Yn,D.needsUpdate=!0;let F=v*4;for(let b=0;b<d;b++){let U=m[b],H=p[b],X=E[b],W=y*C*4*b;for(let Y=0;Y<U.count;Y++){let R=Y*F;f===!0&&(s.fromBufferAttribute(U,Y),A[W+R+0]=s.x,A[W+R+1]=s.y,A[W+R+2]=s.z,A[W+R+3]=0),g===!0&&(s.fromBufferAttribute(H,Y),A[W+R+4]=s.x,A[W+R+5]=s.y,A[W+R+6]=s.z,A[W+R+7]=0),_===!0&&(s.fromBufferAttribute(X,Y),A[W+R+8]=s.x,A[W+R+9]=s.y,A[W+R+10]=s.z,A[W+R+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:D,size:new me(y,C)},i.set(o,u),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function yv(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function mr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=np[s];if(r===void 0&&(r=new Float32Array(s),np[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ic(n,e){let t=ip[e];t===void 0&&(t=new Int32Array(e),ip[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function vv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Sv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ap.set(i),n.uniformMatrix2fv(this.addr,!1,ap),Dt(t,i)}}function wv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;rp.set(i),n.uniformMatrix3fv(this.addr,!1,rp),Dt(t,i)}}function Ev(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;sp.set(i),n.uniformMatrix4fv(this.addr,!1,sp),Dt(t,i)}}function Tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Av(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Pv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Lv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Uv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(tp.compareFunction=Xh,r=tp):r=vp,t.setTexture2D(e||r,s)}function Nv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||bp,s)}function Fv(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Mp,s)}function Ov(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xp,s)}function kv(n){switch(n){case 5126:return vv;case 35664:return xv;case 35665:return bv;case 35666:return Mv;case 35674:return Sv;case 35675:return wv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return Av;case 35668:case 35672:return Cv;case 35669:case 35673:return Rv;case 5125:return Pv;case 36294:return Iv;case 36295:return Lv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Ov}}function Bv(n,e){n.uniform1fv(this.addr,e)}function zv(n,e){let t=mr(e,this.size,2);n.uniform2fv(this.addr,t)}function Hv(n,e){let t=mr(e,this.size,3);n.uniform3fv(this.addr,t)}function Vv(n,e){let t=mr(e,this.size,4);n.uniform4fv(this.addr,t)}function Gv(n,e){let t=mr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Wv(n,e){let t=mr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qv(n,e){let t=mr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xv(n,e){n.uniform1iv(this.addr,e)}function Yv(n,e){n.uniform2iv(this.addr,e)}function $v(n,e){n.uniform3iv(this.addr,e)}function jv(n,e){n.uniform4iv(this.addr,e)}function Zv(n,e){n.uniform1uiv(this.addr,e)}function Jv(n,e){n.uniform2uiv(this.addr,e)}function Kv(n,e){n.uniform3uiv(this.addr,e)}function Qv(n,e){n.uniform4uiv(this.addr,e)}function ex(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||vp,r[a])}function tx(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bp,r[a])}function nx(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Mp,r[a])}function ix(n,e,t){let i=this.cache,s=e.length,r=ic(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xp,r[a])}function sx(n){switch(n){case 5126:return Bv;case 35664:return zv;case 35665:return Hv;case 35666:return Vv;case 35674:return Gv;case 35675:return Wv;case 35676:return qv;case 5124:case 35670:return Xv;case 35667:case 35671:return Yv;case 35668:case 35672:return $v;case 35669:case 35673:return jv;case 5125:return Zv;case 36294:return Jv;case 36295:return Kv;case 36296:return Qv;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function op(n,e){n.seq.push(e),n.map[e.id]=e}function rx(n,e,t){let i=n.name,s=i.length;for(ou.lastIndex=0;;){let r=ou.exec(i),a=ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){op(t,c===void 0?new lu(o,n,e):new cu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new hu(o),op(t,d)),t=d}}}function lp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function lx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function cx(n){nt._getMatrix(cp,nt.workingColorSpace,n);let e=`mat3( ${cp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Xr:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function hp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lx(n.getShaderSource(e),o)}else return r}function hx(n,e){let t=cx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ux(n,e){let t;switch(e){case Sf:t="Linear";break;case wf:t="Reinhard";break;case Ef:t="Cineon";break;case gl:t="ACESFilmic";break;case Af:t="AgX";break;case Cf:t="Neutral";break;case Tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dx(){nt.getLuminanceCoefficients(nc);let n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function px(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ra(n){return n!==""}function up(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function uu(n){return n.replace(gx,yx)}function yx(n,e){let t=Qe[e];if(t===void 0){let i=_x.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}function fp(n){return n.replace(vx,xx)}function xx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function bx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function Mx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Sx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===is&&(e="ENVMAP_MODE_REFRACTION"),e}function wx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nh:e="ENVMAP_BLENDING_MULTIPLY";break;case bf:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function Ex(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Tx(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=bx(t),c=Mx(t),h=Sx(t),d=wx(t),u=Ex(t),f=fx(t),g=px(r),_=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ra).join(`
`),p.length>0&&(p+=`
`)):(m=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),p=[pp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Qe.tonemapping_pars_fragment:"",t.toneMapping!==li?ux("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),dx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),a=uu(a),a=up(a,t),a=dp(a,t),o=uu(o),o=up(o,t),o=dp(o,t),a=fp(a),o=fp(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=E+m+a,y=E+p+o,C=lp(s,s.VERTEX_SHADER,v),A=lp(s,s.FRAGMENT_SHADER,y);s.attachShader(_,C),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(U){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(_)||"",X=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(A)||"",Y=H.trim(),R=X.trim(),L=W.trim(),I=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,C,A);else{let te=hp(s,C,"vertex"),se=hp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+te+`
`+se)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(R===""||L==="")&&($=!1);$&&(U.diagnostics={runnable:I,programLog:Y,vertexShader:{log:R,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(C),s.deleteShader(A),F=new dr(s,_),S=mx(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,ax)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}function Cx(n,e,t,i,s,r,a){let o=new jr,l=new du,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,U,H,X){let W=H.fog,Y=X.geometry,R=S.isMeshStandardMaterial?H.environment:null,L=(S.isMeshStandardMaterial?t:e).get(S.envMap||R),I=L&&L.mapping===Ma?L.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=te!==void 0?te.length:0,q=0;Y.morphAttributes.position!==void 0&&(q=1),Y.morphAttributes.normal!==void 0&&(q=2),Y.morphAttributes.color!==void 0&&(q=3);let fe,be,Ae,w;if($){let rt=$n[$];fe=rt.vertexShader,be=rt.fragmentShader}else fe=S.vertexShader,be=S.fragmentShader,l.update(S),Ae=l.getVertexShaderID(S),w=l.getFragmentShaderID(S);let N=n.getRenderTarget(),J=n.state.buffers.depth.getReversed(),he=X.isInstancedMesh===!0,ue=X.isBatchedMesh===!0,re=!!S.map,Ve=!!S.matcap,P=!!L,oe=!!S.aoMap,Q=!!S.lightMap,ne=!!S.bumpMap,ie=!!S.normalMap,ce=!!S.displacementMap,pe=!!S.emissiveMap,Me=!!S.metalnessMap,Xe=!!S.roughnessMap,Pe=S.anisotropy>0,T=S.clearcoat>0,x=S.dispersion>0,G=S.iridescence>0,K=S.sheen>0,le=S.transmission>0,ee=Pe&&!!S.anisotropyMap,Re=T&&!!S.clearcoatMap,ve=T&&!!S.clearcoatNormalMap,Le=T&&!!S.clearcoatRoughnessMap,Ne=G&&!!S.iridescenceMap,ge=G&&!!S.iridescenceThicknessMap,Ce=K&&!!S.sheenColorMap,We=K&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,Ee=!!S.specularColorMap,Je=!!S.specularIntensityMap,B=le&&!!S.transmissionMap,xe=le&&!!S.thicknessMap,Se=!!S.gradientMap,De=!!S.alphaMap,_e=S.alphaTest>0,ae=!!S.alphaHash,Fe=!!S.extensions,Ye=li;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let ht={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:be,defines:S.defines,customVertexShaderID:Ae,customFragmentShaderID:w,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ue,batchingColor:ue&&X._colorsTexture!==null,instancing:he,instancingColor:he&&X.instanceColor!==null,instancingMorph:he&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:N===null?n.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ji,alphaToCoverage:!!S.alphaToCoverage,map:re,matcap:Ve,envMap:P,envMapMode:P&&L.mapping,envMapCubeUVHeight:I,aoMap:oe,lightMap:Q,bumpMap:ne,normalMap:ie,displacementMap:u&&ce,emissiveMap:pe,normalMapObjectSpace:ie&&S.normalMapType===Lf,normalMapTangentSpace:ie&&S.normalMapType===qh,metalnessMap:Me,roughnessMap:Xe,anisotropy:Pe,anisotropyMap:ee,clearcoat:T,clearcoatMap:Re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,dispersion:x,iridescence:G,iridescenceMap:Ne,iridescenceThicknessMap:ge,sheen:K,sheenColorMap:Ce,sheenRoughnessMap:We,specularMap:Oe,specularColorMap:Ee,specularIntensityMap:Je,transmission:le,transmissionMap:B,thicknessMap:xe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:ae,combine:S.combine,mapUv:re&&_(S.map.channel),aoMapUv:oe&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:ne&&_(S.bumpMap.channel),normalMapUv:ie&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:pe&&_(S.emissiveMap.channel),metalnessMapUv:Me&&_(S.metalnessMap.channel),roughnessMapUv:Xe&&_(S.roughnessMap.channel),anisotropyMapUv:ee&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(S.sheenRoughnessMap.channel),specularMapUv:Oe&&_(S.specularMap.channel),specularColorMapUv:Ee&&_(S.specularColorMap.channel),specularIntensityMapUv:Je&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:xe&&_(S.thicknessMap.channel),alphaMapUv:De&&_(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ie||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Y.attributes.uv&&(re||De),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:J,skinning:X.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:re&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xn,flipSided:S.side===kt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=c.has(1),ht.vertexUv2s=c.has(2),ht.vertexUv3s=c.has(3),c.clear(),ht}function p(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let U in S.defines)b.push(U),b.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(E(b,S),v(b,S),b.push(n.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function E(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function v(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let b=g[S.type],U;if(b){let H=$n[b];U=Gf.clone(H.uniforms)}else U=S.uniforms;return U}function C(S,b){let U;for(let H=0,X=h.length;H<X;H++){let W=h[H];if(W.cacheKey===b){U=W,++U.usedTimes;break}}return U===void 0&&(U=new Tx(n,b,S,r),h.push(U)),U}function A(S){if(--S.usedTimes===0){let b=h.indexOf(S);h[b]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:D,programs:h,dispose:F}}function Rx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Px(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function mp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function gp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,u,f,g,_,m){let p=a(d,u,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(d,u,f,g,_,m){let p=a(d,u,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||Px),i.length>1&&i.sort(u||mp),s.length>1&&s.sort(u||mp)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ix(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new gp,n.set(i,[a])):s>=r.length?(a=new gp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Lx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Dx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Nx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Fx(n){let e=new Lx,t=Dx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new Mt,a=new Mt;function o(c){let h=0,d=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,v=0,y=0,C=0,A=0,D=0;c.sort(Nx);for(let S=0,b=c.length;S<b;S++){let U=c[S],H=U.color,X=U.intensity,W=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=H.r*X,d+=H.g*X,u+=H.b*X;else if(U.isLightProbe){for(let R=0;R<9;R++)i.probe[R].addScaledVector(U.sh.coefficients[R],X);D++}else if(U.isDirectionalLight){let R=e.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let L=U.shadow,I=t.get(U);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=U.shadow.matrix,E++}i.directional[f]=R,f++}else if(U.isSpotLight){let R=e.get(U);R.position.setFromMatrixPosition(U.matrixWorld),R.color.copy(H).multiplyScalar(X),R.distance=W,R.coneCos=Math.cos(U.angle),R.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),R.decay=U.decay,i.spot[_]=R;let L=U.shadow;if(U.map&&(i.spotLightMap[C]=U.map,C++,L.updateMatrices(U),U.castShadow&&A++),i.spotLightMatrix[_]=L.matrix,U.castShadow){let I=t.get(U);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=Y,y++}_++}else if(U.isRectAreaLight){let R=e.get(U);R.color.copy(H).multiplyScalar(X),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=R,m++}else if(U.isPointLight){let R=e.get(U);if(R.color.copy(U.color).multiplyScalar(U.intensity),R.distance=U.distance,R.decay=U.decay,U.castShadow){let L=U.shadow,I=t.get(U);I.shadowIntensity=L.intensity,I.shadowBias=L.bias,I.shadowNormalBias=L.normalBias,I.shadowRadius=L.radius,I.shadowMapSize=L.mapSize,I.shadowCameraNear=L.camera.near,I.shadowCameraFar=L.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=U.shadow.matrix,v++}i.point[g]=R,g++}else if(U.isHemisphereLight){let R=e.get(U);R.skyColor.copy(U.color).multiplyScalar(X),R.groundColor.copy(U.groundColor).multiplyScalar(X),i.hemi[p]=R,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==E||F.numPointShadows!==v||F.numSpotShadows!==y||F.numSpotMaps!==C||F.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=E,F.numPointShadows=v,F.numSpotShadows=y,F.numSpotMaps=C,F.numLightProbes=D,i.version=Ux++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let v=c[p];if(v.isDirectionalLight){let y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(v.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function _p(n){let e=new Fx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ox(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new _p(n),e.set(s,[o])):r>=a.length?(o=new _p(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function zx(n,e,t){let i=new Qs,s=new me,r=new me,a=new ft,o=new Jo({depthPacking:If}),l=new Ko,c={},h=t.maxTextureSize,d={[ri]:kt,[kt]:ri,[Xn]:Xn},u=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:kx,fragmentShader:Bx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new pt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ih;let p=this.type;this.render=function(A,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=n.getRenderTarget(),b=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(oi),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let X=p!==qn&&this.type===qn,W=p===qn&&this.type!==qn;for(let Y=0,R=A.length;Y<R;Y++){let L=A[Y],I=L.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;s.copy(I.mapSize);let $=I.getFrameExtents();if(s.multiply($),r.copy(I.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,I.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,I.mapSize.y=r.y)),I.map===null||X===!0||W===!0){let se=this.type!==qn?{minFilter:Zt,magFilter:Zt}:{};I.map!==null&&I.map.dispose(),I.map=new Vn(s.x,s.y,se),I.map.texture.name=L.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();let te=I.getViewportCount();for(let se=0;se<te;se++){let q=I.getViewport(se);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),H.viewport(a),I.updateMatrices(L,se),i=I.getFrustum(),y(D,F,I.camera,L,this.type)}I.isPointLightShadow!==!0&&this.type===qn&&E(I,F),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,b,U)};function E(A,D){let F=e.update(_);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Vn(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(D,null,F,u,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(D,null,F,f,_,null)}function v(A,D,F,S){let b=null,U=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)b=U;else if(b=F.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let H=b.uuid,X=D.uuid,W=c[H];W===void 0&&(W={},c[H]=W);let Y=W[X];Y===void 0&&(Y=b.clone(),W[X]=Y,D.addEventListener("dispose",C)),b=Y}if(b.visible=D.visible,b.wireframe=D.wireframe,S===qn?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:d[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let H=n.properties.get(b);H.light=F}return b}function y(A,D,F,S,b){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===qn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let X=e.update(A),W=A.material;if(Array.isArray(W)){let Y=X.groups;for(let R=0,L=Y.length;R<L;R++){let I=Y[R],$=W[I.materialIndex];if($&&$.visible){let te=v(A,$,S,b);A.onBeforeShadow(n,A,D,F,X,te,I),n.renderBufferDirect(F,null,X,te,A,I),A.onAfterShadow(n,A,D,F,X,te,I)}}}else if(W.visible){let Y=v(A,W,S,b);A.onBeforeShadow(n,A,D,F,X,Y,null),n.renderBufferDirect(F,null,X,Y,A,null),A.onAfterShadow(n,A,D,F,X,Y,null)}}let H=A.children;for(let X=0,W=H.length;X<W;X++)y(H[X],D,F,S,b)}function C(A){A.target.removeEventListener("dispose",C);for(let F in c){let S=c[F],b=A.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}function Vx(n,e){function t(){let B=!1,xe=new ft,Se=null,De=new ft(0,0,0,0);return{setMask:function(_e){Se!==_e&&!B&&(n.colorMask(_e,_e,_e,_e),Se=_e)},setLocked:function(_e){B=_e},setClear:function(_e,ae,Fe,Ye,ht){ht===!0&&(_e*=Ye,ae*=Ye,Fe*=Ye),xe.set(_e,ae,Fe,Ye),De.equals(xe)===!1&&(n.clearColor(_e,ae,Fe,Ye),De.copy(xe))},reset:function(){B=!1,Se=null,De.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,Se=null,De=null,_e=null;return{setReversed:function(ae){if(xe!==ae){let Fe=e.get("EXT_clip_control");ae?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ae;let Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return xe},setTest:function(ae){ae?N(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(ae){Se!==ae&&!B&&(n.depthMask(ae),Se=ae)},setFunc:function(ae){if(xe&&(ae=Hx[ae]),De!==ae){switch(ae){case cl:n.depthFunc(n.NEVER);break;case hl:n.depthFunc(n.ALWAYS);break;case ul:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case dl:n.depthFunc(n.EQUAL);break;case fl:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ae}},setLocked:function(ae){B=ae},setClear:function(ae){_e!==ae&&(xe&&(ae=1-ae),n.clearDepth(ae),_e=ae)},reset:function(){B=!1,Se=null,De=null,_e=null,xe=!1}}}function s(){let B=!1,xe=null,Se=null,De=null,_e=null,ae=null,Fe=null,Ye=null,ht=null;return{setTest:function(rt){B||(rt?N(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(rt){xe!==rt&&!B&&(n.stencilMask(rt),xe=rt)},setFunc:function(rt,Kn,Bn){(Se!==rt||De!==Kn||_e!==Bn)&&(n.stencilFunc(rt,Kn,Bn),Se=rt,De=Kn,_e=Bn)},setOp:function(rt,Kn,Bn){(ae!==rt||Fe!==Kn||Ye!==Bn)&&(n.stencilOp(rt,Kn,Bn),ae=rt,Fe=Kn,Ye=Bn)},setLocked:function(rt){B=rt},setClear:function(rt){ht!==rt&&(n.clearStencil(rt),ht=rt)},reset:function(){B=!1,xe=null,Se=null,De=null,_e=null,ae=null,Fe=null,Ye=null,ht=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,v=null,y=null,C=null,A=null,D=new $e(0,0,0),F=0,S=!1,b=null,U=null,H=null,X=null,W=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),R=!1,L=0,I=n.getParameter(n.VERSION);I.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(I)[1]),R=L>=1):I.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),R=L>=2);let $=null,te={},se=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),fe=new ft().fromArray(se),be=new ft().fromArray(q);function Ae(B,xe,Se,De){let _e=new Uint8Array(4),ae=n.createTexture();n.bindTexture(B,ae),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Se;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ae}let w={};w[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),w[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),w[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),N(n.DEPTH_TEST),a.setFunc($i),ne(!1),ie(Ph),N(n.CULL_FACE),oe(oi);function N(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function J(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function he(B,xe){return d[B]!==xe?(n.bindFramebuffer(B,xe),d[B]=xe,B===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function ue(B,xe){let Se=f,De=!1;if(B){Se=u.get(xe),Se===void 0&&(Se=[],u.set(xe,Se));let _e=B.textures;if(Se.length!==_e.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Fe=_e.length;ae<Fe;ae++)Se[ae]=n.COLOR_ATTACHMENT0+ae;Se.length=_e.length,De=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,De=!0);De&&n.drawBuffers(Se)}function re(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let Ve={[vi]:n.FUNC_ADD,[sf]:n.FUNC_SUBTRACT,[rf]:n.FUNC_REVERSE_SUBTRACT};Ve[af]=n.MIN,Ve[of]=n.MAX;let P={[lf]:n.ZERO,[cf]:n.ONE,[hf]:n.SRC_COLOR,[Fo]:n.SRC_ALPHA,[gf]:n.SRC_ALPHA_SATURATE,[pf]:n.DST_COLOR,[df]:n.DST_ALPHA,[uf]:n.ONE_MINUS_SRC_COLOR,[Oo]:n.ONE_MINUS_SRC_ALPHA,[mf]:n.ONE_MINUS_DST_COLOR,[ff]:n.ONE_MINUS_DST_ALPHA,[_f]:n.CONSTANT_COLOR,[yf]:n.ONE_MINUS_CONSTANT_COLOR,[vf]:n.CONSTANT_ALPHA,[xf]:n.ONE_MINUS_CONSTANT_ALPHA};function oe(B,xe,Se,De,_e,ae,Fe,Ye,ht,rt){if(B===oi){_===!0&&(J(n.BLEND),_=!1);return}if(_===!1&&(N(n.BLEND),_=!0),B!==nf){if(B!==m||rt!==S){if((p!==vi||y!==vi)&&(n.blendEquation(n.FUNC_ADD),p=vi,y=vi),rt)switch(B){case Yi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFunc(n.ONE,n.ONE);break;case Dh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Yi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Dh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}E=null,v=null,C=null,A=null,D.set(0,0,0),F=0,m=B,S=rt}return}_e=_e||xe,ae=ae||Se,Fe=Fe||De,(xe!==p||_e!==y)&&(n.blendEquationSeparate(Ve[xe],Ve[_e]),p=xe,y=_e),(Se!==E||De!==v||ae!==C||Fe!==A)&&(n.blendFuncSeparate(P[Se],P[De],P[ae],P[Fe]),E=Se,v=De,C=ae,A=Fe),(Ye.equals(D)===!1||ht!==F)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ht),D.copy(Ye),F=ht),m=B,S=!1}function Q(B,xe){B.side===Xn?J(n.CULL_FACE):N(n.CULL_FACE);let Se=B.side===kt;xe&&(Se=!Se),ne(Se),B.blending===Yi&&B.transparent===!1?oe(oi):oe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let De=B.stencilWrite;o.setTest(De),De&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?N(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(B){b!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),b=B)}function ie(B){B!==Qd?(N(n.CULL_FACE),B!==U&&(B===Ph?n.cullFace(n.BACK):B===ef?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),U=B}function ce(B){B!==H&&(R&&n.lineWidth(B),H=B)}function pe(B,xe,Se){B?(N(n.POLYGON_OFFSET_FILL),(X!==xe||W!==Se)&&(n.polygonOffset(xe,Se),X=xe,W=Se)):J(n.POLYGON_OFFSET_FILL)}function Me(B){B?N(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function Xe(B){B===void 0&&(B=n.TEXTURE0+Y-1),$!==B&&(n.activeTexture(B),$=B)}function Pe(B,xe,Se){Se===void 0&&($===null?Se=n.TEXTURE0+Y-1:Se=$);let De=te[Se];De===void 0&&(De={type:void 0,texture:void 0},te[Se]=De),(De.type!==B||De.texture!==xe)&&($!==Se&&(n.activeTexture(Se),$=Se),n.bindTexture(B,xe||w[B]),De.type=B,De.texture=xe)}function T(){let B=te[$];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(B){fe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),fe.copy(B))}function We(B){be.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),be.copy(B))}function Oe(B,xe){let Se=c.get(xe);Se===void 0&&(Se=new WeakMap,c.set(xe,Se));let De=Se.get(B);De===void 0&&(De=n.getUniformBlockIndex(xe,B.name),Se.set(B,De))}function Ee(B,xe){let De=c.get(xe).get(B);l.get(xe)!==De&&(n.uniformBlockBinding(xe,De,B.__bindingPointIndex),l.set(xe,De))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,te={},d={},u=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,v=null,y=null,C=null,A=null,D=new $e(0,0,0),F=0,S=!1,b=null,U=null,H=null,X=null,W=null,fe.set(0,0,n.canvas.width,n.canvas.height),be.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:N,disable:J,bindFramebuffer:he,drawBuffers:ue,useProgram:re,setBlending:oe,setMaterial:Q,setFlipSided:ne,setCullFace:ie,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:Me,activeTexture:Xe,bindTexture:Pe,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:G,texImage2D:Ne,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:Ee,texStorage2D:ve,texStorage3D:Le,texSubImage2D:K,texSubImage3D:le,compressedTexSubImage2D:ee,compressedTexSubImage3D:Re,scissor:Ce,viewport:We,reset:Je}}function Gx(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):Ys("canvas")}function _(T,x,G){let K=1,le=Pe(T);if((le.width>G||le.height>G)&&(K=G/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ee=Math.floor(K*le.width),Re=Math.floor(K*le.height);d===void 0&&(d=g(ee,Re));let ve=x?g(ee,Re):d;return ve.width=ee,ve.height=Re,ve.getContext("2d").drawImage(T,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ee+"x"+Re+")."),ve}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(T,x,G,K,le=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ee=x;if(x===n.RED&&(G===n.FLOAT&&(ee=n.R32F),G===n.HALF_FLOAT&&(ee=n.R16F),G===n.UNSIGNED_BYTE&&(ee=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ee=n.R8UI),G===n.UNSIGNED_SHORT&&(ee=n.R16UI),G===n.UNSIGNED_INT&&(ee=n.R32UI),G===n.BYTE&&(ee=n.R8I),G===n.SHORT&&(ee=n.R16I),G===n.INT&&(ee=n.R32I)),x===n.RG&&(G===n.FLOAT&&(ee=n.RG32F),G===n.HALF_FLOAT&&(ee=n.RG16F),G===n.UNSIGNED_BYTE&&(ee=n.RG8)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ee=n.RG8UI),G===n.UNSIGNED_SHORT&&(ee=n.RG16UI),G===n.UNSIGNED_INT&&(ee=n.RG32UI),G===n.BYTE&&(ee=n.RG8I),G===n.SHORT&&(ee=n.RG16I),G===n.INT&&(ee=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),G===n.UNSIGNED_INT&&(ee=n.RGB32UI),G===n.BYTE&&(ee=n.RGB8I),G===n.SHORT&&(ee=n.RGB16I),G===n.INT&&(ee=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),G===n.UNSIGNED_INT&&(ee=n.RGBA32UI),G===n.BYTE&&(ee=n.RGBA8I),G===n.SHORT&&(ee=n.RGBA16I),G===n.INT&&(ee=n.RGBA32I)),x===n.RGB&&(G===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),x===n.RGBA){let Re=le?Xr:nt.getTransfer(K);G===n.FLOAT&&(ee=n.RGBA32F),G===n.HALF_FLOAT&&(ee=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ee=Re===at?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(T,x){let G;return T?x===null||x===Ri||x===lr?G=n.DEPTH24_STENCIL8:x===Yn?G=n.DEPTH32F_STENCIL8:x===ar&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ri||x===lr?G=n.DEPTH_COMPONENT24:x===Yn?G=n.DEPTH_COMPONENT32F:x===ar&&(G=n.DEPTH_COMPONENT16),G}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Zt&&T.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function A(T){let x=T.target;x.removeEventListener("dispose",A),F(x),x.isVideoTexture&&h.delete(x)}function D(T){let x=T.target;x.removeEventListener("dispose",D),b(x)}function F(T){let x=i.get(T);if(x.__webglInit===void 0)return;let G=T.source,K=u.get(G);if(K){let le=K[x.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(T),Object.keys(K).length===0&&u.delete(G)}i.remove(T)}function S(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let G=T.source,K=u.get(G);delete K[x.__cacheKey],a.memory.textures--}function b(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let le=0;le<x.__webglFramebuffer[K].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[K][le]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let G=T.textures;for(let K=0,le=G.length;K<le;K++){let ee=i.get(G[K]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(G[K])}i.remove(T)}let U=0;function H(){U=0}function X(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function W(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){let G=i.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(G,T,x);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function R(T,x){let G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){w(G,T,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function L(T,x){let G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){w(G,T,x);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function I(T,x){let G=i.get(T);if(T.version>0&&G.__version!==T.version){N(G,T,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}let $={[ko]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},te={[Zt]:n.NEAREST,[Rf]:n.NEAREST_MIPMAP_NEAREST,[Sa]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[vl]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},se={[Df]:n.NEVER,[Bf]:n.ALWAYS,[Uf]:n.LESS,[Xh]:n.LEQUAL,[Nf]:n.EQUAL,[kf]:n.GEQUAL,[Ff]:n.GREATER,[Of]:n.NOTEQUAL};function q(T,x){if(x.type===Yn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===vl||x.magFilter===Sa||x.magFilter===Ci||x.minFilter===Jt||x.minFilter===vl||x.minFilter===Sa||x.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,$[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,$[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,$[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,te[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,te[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==Sa&&x.minFilter!==Ci||x.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function fe(T,x){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));let K=x.source,le=u.get(K);le===void 0&&(le={},u.set(K,le));let ee=W(x);if(ee!==T.__cacheKey){le[ee]===void 0&&(le[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),le[ee].usedTimes++;let Re=le[T.__cacheKey];Re!==void 0&&(le[T.__cacheKey].usedTimes--,Re.usedTimes===0&&S(x)),T.__cacheKey=ee,T.__webglTexture=le[ee].texture}return G}function be(T,x,G){return Math.floor(Math.floor(T/G)/x)}function Ae(T,x,G,K){let ee=T.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,G,K,x.data);else{ee.sort((ge,Ce)=>ge.start-Ce.start);let Re=0;for(let ge=1;ge<ee.length;ge++){let Ce=ee[Re],We=ee[ge],Oe=Ce.start+Ce.count,Ee=be(We.start,x.width,4),Je=be(Ce.start,x.width,4);We.start<=Oe+1&&Ee===Je&&be(We.start+We.count-1,x.width,4)===Ee?Ce.count=Math.max(Ce.count,We.start+We.count-Ce.start):(++Re,ee[Re]=We)}ee.length=Re+1;let ve=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let ge=0,Ce=ee.length;ge<Ce;ge++){let We=ee[ge],Oe=Math.floor(We.start/4),Ee=Math.ceil(We.count/4),Je=Oe%x.width,B=Math.floor(Oe/x.width),xe=Ee,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Je,B,xe,Se,G,K,x.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function w(T,x,G){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);let le=fe(T,x),ee=x.source;t.bindTexture(K,T.__webglTexture,n.TEXTURE0+G);let Re=i.get(ee);if(ee.version!==Re.__version||le===!0){t.activeTexture(n.TEXTURE0+G);let ve=nt.getPrimaries(nt.workingColorSpace),Le=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),Ne=x.colorSpace===ci||ve===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ge=_(x.image,!1,s.maxTextureSize);ge=Xe(x,ge);let Ce=r.convert(x.format,x.colorSpace),We=r.convert(x.type),Oe=v(x.internalFormat,Ce,We,x.colorSpace,x.isVideoTexture);q(K,x);let Ee,Je=x.mipmaps,B=x.isVideoTexture!==!0,xe=Re.__version===void 0||le===!0,Se=ee.dataReady,De=C(x,ge);if(x.isDepthTexture)Oe=y(x.format===cr,x.type),xe&&(B?t.texStorage2D(n.TEXTURE_2D,1,Oe,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ce,We,null));else if(x.isDataTexture)if(Je.length>0){B&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,Je[0].width,Je[0].height);for(let _e=0,ae=Je.length;_e<ae;_e++)Ee=Je[_e],B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Ce,We,Ee.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,Ee.width,Ee.height,0,Ce,We,Ee.data);x.generateMipmaps=!1}else B?(xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,ge.width,ge.height),Se&&Ae(x,ge,Ce,We)):t.texImage2D(n.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ce,We,ge.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Oe,Je[0].width,Je[0].height,ge.depth);for(let _e=0,ae=Je.length;_e<ae;_e++)if(Ee=Je[_e],x.format!==vn)if(Ce!==null)if(B){if(Se)if(x.layerUpdates.size>0){let Fe=eu(Ee.width,Ee.height,x.format,x.type);for(let Ye of x.layerUpdates){let ht=Ee.data.subarray(Ye*Fe/Ee.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Ye,Ee.width,Ee.height,1,Ce,ht)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,ge.depth,Ce,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,Ee.width,Ee.height,ge.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,ge.depth,Ce,We,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,Ee.width,Ee.height,ge.depth,0,Ce,We,Ee.data)}else{B&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,Je[0].width,Je[0].height);for(let _e=0,ae=Je.length;_e<ae;_e++)Ee=Je[_e],x.format!==vn?Ce!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Ce,We,Ee.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,Ee.width,Ee.height,0,Ce,We,Ee.data)}else if(x.isDataArrayTexture)if(B){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Oe,ge.width,ge.height,ge.depth),Se)if(x.layerUpdates.size>0){let _e=eu(ge.width,ge.height,x.format,x.type);for(let ae of x.layerUpdates){let Fe=ge.data.subarray(ae*_e/ge.data.BYTES_PER_ELEMENT,(ae+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ae,ge.width,ge.height,1,Ce,We,Fe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,We,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Ce,We,ge.data);else if(x.isData3DTexture)B?(xe&&t.texStorage3D(n.TEXTURE_3D,De,Oe,ge.width,ge.height,ge.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,We,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Ce,We,ge.data);else if(x.isFramebufferTexture){if(xe)if(B)t.texStorage2D(n.TEXTURE_2D,De,Oe,ge.width,ge.height);else{let _e=ge.width,ae=ge.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Oe,_e,ae,0,Ce,We,null),_e>>=1,ae>>=1}}else if(Je.length>0){if(B&&xe){let _e=Pe(Je[0]);t.texStorage2D(n.TEXTURE_2D,De,Oe,_e.width,_e.height)}for(let _e=0,ae=Je.length;_e<ae;_e++)Ee=Je[_e],B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ce,We,Ee):t.texImage2D(n.TEXTURE_2D,_e,Oe,Ce,We,Ee);x.generateMipmaps=!1}else if(B){if(xe){let _e=Pe(ge);t.texStorage2D(n.TEXTURE_2D,De,Oe,_e.width,_e.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ce,We,ge)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ce,We,ge);m(x)&&p(K),Re.__version=ee.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function N(T,x,G){if(x.image.length!==6)return;let K=fe(T,x),le=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+G);let ee=i.get(le);if(le.version!==ee.__version||K===!0){t.activeTexture(n.TEXTURE0+G);let Re=nt.getPrimaries(nt.workingColorSpace),ve=x.colorSpace===ci?null:nt.getPrimaries(x.colorSpace),Le=x.colorSpace===ci||Re===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ne=x.isCompressedTexture||x.image[0].isCompressedTexture,ge=x.image[0]&&x.image[0].isDataTexture,Ce=[];for(let ae=0;ae<6;ae++)!Ne&&!ge?Ce[ae]=_(x.image[ae],!0,s.maxCubemapSize):Ce[ae]=ge?x.image[ae].image:x.image[ae],Ce[ae]=Xe(x,Ce[ae]);let We=Ce[0],Oe=r.convert(x.format,x.colorSpace),Ee=r.convert(x.type),Je=v(x.internalFormat,Oe,Ee,x.colorSpace),B=x.isVideoTexture!==!0,xe=ee.__version===void 0||K===!0,Se=le.dataReady,De=C(x,We);q(n.TEXTURE_CUBE_MAP,x);let _e;if(Ne){B&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Je,We.width,We.height);for(let ae=0;ae<6;ae++){_e=Ce[ae].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){let Ye=_e[Fe];x.format!==vn?Oe!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,0,0,Ye.width,Ye.height,Oe,Ee,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe,Je,Ye.width,Ye.height,0,Oe,Ee,Ye.data)}}}else{if(_e=x.mipmaps,B&&xe){_e.length>0&&De++;let ae=Pe(Ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ge){B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ce[ae].width,Ce[ae].height,Oe,Ee,Ce[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Ce[ae].width,Ce[ae].height,0,Oe,Ee,Ce[ae].data);for(let Fe=0;Fe<_e.length;Fe++){let ht=_e[Fe].image[ae].image;B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,ht.width,ht.height,Oe,Ee,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,ht.width,ht.height,0,Oe,Ee,ht.data)}}else{B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Oe,Ee,Ce[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Je,Oe,Ee,Ce[ae]);for(let Fe=0;Fe<_e.length;Fe++){let Ye=_e[Fe];B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,0,0,Oe,Ee,Ye.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Fe+1,Je,Oe,Ee,Ye.image[ae])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),ee.__version=le.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function J(T,x,G,K,le,ee){let Re=r.convert(G.format,G.colorSpace),ve=r.convert(G.type),Le=v(G.internalFormat,Re,ve,G.colorSpace),Ne=i.get(x),ge=i.get(G);if(ge.__renderTarget=x,!Ne.__hasExternalTextures){let Ce=Math.max(1,x.width>>ee),We=Math.max(1,x.height>>ee);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,ee,Le,Ce,We,x.depth,0,Re,ve,null):t.texImage2D(le,ee,Le,Ce,We,0,Re,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,le,ge.__webglTexture,0,ce(x)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,le,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(T,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let K=x.depthTexture,le=K&&K.isDepthTexture?K.type:null,ee=y(x.stencilBuffer,le),Re=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ce(x);pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ee,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ee,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ee,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,T)}else{let K=x.textures;for(let le=0;le<K.length;le++){let ee=K[le],Re=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Le=v(ee.internalFormat,Re,ve,ee.colorSpace),Ne=ce(x);G&&pe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Le,x.width,x.height):pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Le,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ue(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);let le=K.__webglTexture,ee=ce(x);if(x.depthTexture.format===qs)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(x.depthTexture.format===cr)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function re(T){let x=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let le=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),x.__depthDisposeCallback=le}x.__boundDepthTexture=K}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let K=T.texture.mipmaps;K&&K.length>0?ue(x.__webglFramebuffer[0],T):ue(x.__webglFramebuffer,T)}else if(G){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),he(x.__webglDepthbuffer[K],T,!1);else{let le=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}else{let K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),he(x.__webglDepthbuffer,T,!1);else{let le=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(T,x,G){let K=i.get(T);x!==void 0&&J(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&re(T)}function P(T){let x=T.texture,G=i.get(T),K=i.get(x);T.addEventListener("dispose",D);let le=T.textures,ee=T.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,a.memory.textures++),ee){G.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[ve]=[];for(let Le=0;Le<x.mipmaps.length;Le++)G.__webglFramebuffer[ve][Le]=n.createFramebuffer()}else G.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let ve=0;ve<x.mipmaps.length;ve++)G.__webglFramebuffer[ve]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ve=0,Le=le.length;ve<Le;ve++){let Ne=i.get(le[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&pe(T)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){let Le=le[ve];G.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[ve]);let Ne=r.convert(Le.format,Le.colorSpace),ge=r.convert(Le.type),Ce=v(Le.internalFormat,Ne,ge,Le.colorSpace,T.isXRRenderTarget===!0),We=ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,Ce,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,G.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),q(n.TEXTURE_CUBE_MAP,x);for(let ve=0;ve<6;ve++)if(x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)J(G.__webglFramebuffer[ve][Le],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le);else J(G.__webglFramebuffer[ve],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Le=le.length;ve<Le;ve++){let Ne=le[ve],ge=i.get(Ne),Ce=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ce=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ge.__webglTexture),q(Ce,Ne),J(G.__webglFramebuffer,T,Ne,n.COLOR_ATTACHMENT0+ve,Ce,0),m(Ne)&&p(Ce)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,K.__webglTexture),q(ve,x),x.mipmaps&&x.mipmaps.length>0)for(let Le=0;Le<x.mipmaps.length;Le++)J(G.__webglFramebuffer[Le],T,x,n.COLOR_ATTACHMENT0,ve,Le);else J(G.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,ve,0);m(x)&&p(ve),t.unbindTexture()}T.depthBuffer&&re(T)}function oe(T){let x=T.textures;for(let G=0,K=x.length;G<K;G++){let le=x[G];if(m(le)){let ee=E(T),Re=i.get(le).__webglTexture;t.bindTexture(ee,Re),p(ee),t.unbindTexture()}}}let Q=[],ne=[];function ie(T){if(T.samples>0){if(pe(T)===!1){let x=T.textures,G=T.width,K=T.height,le=n.COLOR_BUFFER_BIT,ee=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(T),ve=x.length>1;if(ve)for(let Ne=0;Ne<x.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Le=T.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<x.length;Ne++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let ge=i.get(x[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,G,K,0,0,G,K,le,n.NEAREST),l===!0&&(Q.length=0,ne.length=0,Q.push(n.COLOR_ATTACHMENT0+Ne),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Q.push(ee),ne.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ne)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<x.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let ge=i.get(x[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function ce(T){return Math.min(s.maxSamples,T.samples)}function pe(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Me(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Xe(T,x){let G=T.colorSpace,K=T.format,le=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ji&&G!==ci&&(nt.getTransfer(G)===at?(K!==vn||le!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Pe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=R,this.setTexture3D=L,this.setTextureCube=I,this.rebindTextures=Ve,this.setupRenderTarget=P,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=J,this.useMultisampledRTT=pe}function Wx(n,e){function t(i,s=ci){let r,a=nt.getTransfer(s);if(i===In)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oh)return n.BYTE;if(i===kh)return n.SHORT;if(i===ar)return n.UNSIGNED_SHORT;if(i===xl)return n.INT;if(i===Ri)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===or)return n.HALF_FLOAT;if(i===Hh)return n.ALPHA;if(i===Vh)return n.RGB;if(i===vn)return n.RGBA;if(i===qs)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===Gh)return n.RED;if(i===Sl)return n.RED_INTEGER;if(i===Wh)return n.RG;if(i===wl)return n.RG_INTEGER;if(i===El)return n.RGBA_INTEGER;if(i===wa||i===Ea||i===Ta||i===Aa)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Tl||i===Al||i===Cl||i===Rl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Tl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pl||i===Il||i===Ll)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pl||i===Il)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ll)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Ul||i===Nl||i===Fl||i===Ol||i===kl||i===Bl||i===zl||i===Hl||i===Vl||i===Gl||i===Wl||i===ql||i===Xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ql)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yl||i===$l||i===jl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yl)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zl||i===Jl||i===Kl||i===Ql)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function $x(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Zh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),v=E.envMap,y=E.envMapRotation;v&&(m.envMap.value=v,os.copy(y),os.x*=-1,os.y*=-1,os.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),m.envMapRotation.value.setFromMatrix4(Yx.makeRotationFromEuler(os)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jx(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,v){let y=v.program;i.uniformBlockBinding(E,y)}function c(E,v){let y=s[E.id];y===void 0&&(g(E),y=h(E),s[E.id]=y,E.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(E,C);let A=e.render.frame;r[E.id]!==A&&(u(E),r[E.id]=A)}function h(E){let v=d();E.__bindingPointIndex=v;let y=n.createBuffer(),C=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){let v=s[E.id],y=E.uniforms,C=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,D=y.length;A<D;A++){let F=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,b=F.length;S<b;S++){let U=F[S];if(f(U,A,S,C)===!0){let H=U.__offset,X=Array.isArray(U.value)?U.value:[U.value],W=0;for(let Y=0;Y<X.length;Y++){let R=X[Y],L=_(R);typeof R=="number"||typeof R=="boolean"?(U.__data[0]=R,n.bufferSubData(n.UNIFORM_BUFFER,H+W,U.__data)):R.isMatrix3?(U.__data[0]=R.elements[0],U.__data[1]=R.elements[1],U.__data[2]=R.elements[2],U.__data[3]=0,U.__data[4]=R.elements[3],U.__data[5]=R.elements[4],U.__data[6]=R.elements[5],U.__data[7]=0,U.__data[8]=R.elements[6],U.__data[9]=R.elements[7],U.__data[10]=R.elements[8],U.__data[11]=0):(R.toArray(U.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(E,v,y,C){let A=E.value,D=v+"_"+y;if(C[D]===void 0)return typeof A=="number"||typeof A=="boolean"?C[D]=A:C[D]=A.clone(),!0;{let F=C[D];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return C[D]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(E){let v=E.uniforms,y=0,C=16;for(let D=0,F=v.length;D<F;D++){let S=Array.isArray(v[D])?v[D]:[v[D]];for(let b=0,U=S.length;b<U;b++){let H=S[b],X=Array.isArray(H.value)?H.value:[H.value];for(let W=0,Y=X.length;W<Y;W++){let R=X[W],L=_(R),I=y%C,$=I%L.boundary,te=I+$;y+=$,te!==0&&C-te<L.storage&&(y+=C-te),H.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=L.storage}}}let A=y%C;return A>0&&(y+=C-A),E.__size=y,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){let v=E.target;v.removeEventListener("dispose",m);let y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var S0,w0,E0,T0,A0,C0,R0,P0,I0,L0,D0,U0,N0,F0,O0,k0,B0,z0,H0,V0,G0,W0,q0,X0,Y0,$0,j0,Z0,J0,K0,Q0,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,y_,v_,x_,b_,M_,S_,w_,E_,T_,A_,C_,R_,P_,I_,L_,D_,U_,N_,F_,O_,k_,B_,z_,H_,V_,G_,W_,q_,X_,Y_,$_,j_,Z_,J_,K_,Q_,ey,ty,ny,iy,sy,ry,ay,oy,ly,cy,hy,uy,dy,fy,py,my,gy,_y,yy,vy,xy,by,My,Sy,wy,Ey,Ty,Ay,Cy,Ry,Py,Iy,Ly,Dy,Uy,Ny,Fy,Oy,ky,By,zy,Hy,Vy,Gy,Wy,qy,Xy,Yy,$y,jy,Zy,Jy,Ky,Qy,ev,tv,Qe,we,$n,ec,as,nv,ur,jf,cs,nu,Zf,iu,su,ru,au,ls,hr,Jf,cv,fr,vp,tp,xp,bp,Mp,np,ip,sp,rp,ap,lu,cu,hu,ou,dr,ax,ox,cp,nc,gx,_x,vx,Ax,du,fu,Ux,kx,Bx,Hx,qx,Xx,pu,mu,os,Yx,pr,Pa=As(()=>{tu();tu();S0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w0=`#ifdef USE_ALPHAHASH
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
#endif`,E0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R0=`#ifdef USE_AOMAP
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
#endif`,P0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I0=`#ifdef USE_BATCHING
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
#endif`,L0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,O0=`#ifdef USE_BUMPMAP
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
#endif`,k0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,q0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,X0=`#define PI 3.141592653589793
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
} // validated`,Y0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$0=`vec3 transformedNormal = objectNormal;
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
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,J0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q0="gl_FragColor = linearToOutputTexel( gl_FragColor );",e_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t_=`#ifdef USE_ENVMAP
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
#endif`,n_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,i_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,l_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,c_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h_=`#ifdef USE_GRADIENTMAP
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
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,d_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,f_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,p_=`uniform bool receiveShadow;
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
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,b_=`struct PhysicalMaterial {
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
}`,M_=`
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
#endif`,S_=`#if defined( RE_IndirectDiffuse )
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
#endif`,w_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L_=`#if defined( USE_POINTS_UV )
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
#endif`,D_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,O_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k_=`#ifdef USE_MORPHTARGETS
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
#endif`,B_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,H_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,oy=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,hy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,yy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sy=`uniform sampler2D t2D;
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
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ey=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,ky=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,zy=`#define MATCAP
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
}`,Hy=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,qy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,$y=`#define TOON
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
}`,jy=`#define TOON
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
}`,Zy=`uniform float size;
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
}`,Jy=`uniform vec3 diffuse;
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
}`,Ky=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,ev=`uniform float rotation;
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
}`,tv=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:S0,alphahash_pars_fragment:w0,alphamap_fragment:E0,alphamap_pars_fragment:T0,alphatest_fragment:A0,alphatest_pars_fragment:C0,aomap_fragment:R0,aomap_pars_fragment:P0,batching_pars_vertex:I0,batching_vertex:L0,begin_vertex:D0,beginnormal_vertex:U0,bsdfs:N0,iridescence_fragment:F0,bumpmap_pars_fragment:O0,clipping_planes_fragment:k0,clipping_planes_pars_fragment:B0,clipping_planes_pars_vertex:z0,clipping_planes_vertex:H0,color_fragment:V0,color_pars_fragment:G0,color_pars_vertex:W0,color_vertex:q0,common:X0,cube_uv_reflection_fragment:Y0,defaultnormal_vertex:$0,displacementmap_pars_vertex:j0,displacementmap_vertex:Z0,emissivemap_fragment:J0,emissivemap_pars_fragment:K0,colorspace_fragment:Q0,colorspace_pars_fragment:e_,envmap_fragment:t_,envmap_common_pars_fragment:n_,envmap_pars_fragment:i_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:m_,envmap_vertex:r_,fog_vertex:a_,fog_pars_vertex:o_,fog_fragment:l_,fog_pars_fragment:c_,gradientmap_pars_fragment:h_,lightmap_pars_fragment:u_,lights_lambert_fragment:d_,lights_lambert_pars_fragment:f_,lights_pars_begin:p_,lights_toon_fragment:g_,lights_toon_pars_fragment:__,lights_phong_fragment:y_,lights_phong_pars_fragment:v_,lights_physical_fragment:x_,lights_physical_pars_fragment:b_,lights_fragment_begin:M_,lights_fragment_maps:S_,lights_fragment_end:w_,logdepthbuf_fragment:E_,logdepthbuf_pars_fragment:T_,logdepthbuf_pars_vertex:A_,logdepthbuf_vertex:C_,map_fragment:R_,map_pars_fragment:P_,map_particle_fragment:I_,map_particle_pars_fragment:L_,metalnessmap_fragment:D_,metalnessmap_pars_fragment:U_,morphinstance_vertex:N_,morphcolor_vertex:F_,morphnormal_vertex:O_,morphtarget_pars_vertex:k_,morphtarget_vertex:B_,normal_fragment_begin:z_,normal_fragment_maps:H_,normal_pars_fragment:V_,normal_pars_vertex:G_,normal_vertex:W_,normalmap_pars_fragment:q_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:$_,iridescence_pars_fragment:j_,opaque_fragment:Z_,packing:J_,premultiplied_alpha_fragment:K_,project_vertex:Q_,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:sy,shadowmap_pars_vertex:ry,shadowmap_vertex:ay,shadowmask_pars_fragment:oy,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:hy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:yy,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:by,background_vert:My,background_frag:Sy,backgroundCube_vert:wy,backgroundCube_frag:Ey,cube_vert:Ty,cube_frag:Ay,depth_vert:Cy,depth_frag:Ry,distanceRGBA_vert:Py,distanceRGBA_frag:Iy,equirect_vert:Ly,equirect_frag:Dy,linedashed_vert:Uy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:ky,meshlambert_frag:By,meshmatcap_vert:zy,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:qy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:$y,meshtoon_frag:jy,points_vert:Zy,points_frag:Jy,shadow_vert:Ky,shadow_frag:Qy,sprite_vert:ev,sprite_frag:tv},we={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},$n={basic:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Gt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Gt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Gt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Gt([we.points,we.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Gt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Gt([we.common,we.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Gt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Gt([we.sprite,we.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Gt([we.common,we.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Gt([we.lights,we.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};$n.physical={uniforms:Gt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};ec={r:0,b:0,g:0},as=new Pn,nv=new Mt;ur=4,jf=[.125,.215,.35,.446,.526,.582],cs=20,nu=new es,Zf=new $e,iu=null,su=0,ru=0,au=!1,ls=(1+Math.sqrt(5))/2,hr=1/ls,Jf=[new k(-ls,hr,0),new k(ls,hr,0),new k(-hr,0,ls),new k(hr,0,ls),new k(0,ls,-hr),new k(0,ls,hr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],cv=new k,fr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=cv}=r;iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ep(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,su,ru),this._renderer.xr.enabled=au,e.scissorTest=!1,tc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:or,format:vn,colorSpace:ji,depthBuffer:!1},s=Kf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hv(r)),this._blurMaterial=uv(r,e,t)}return s}_compileMaterial(e){let t=new pt(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,i,s,r){let l=new Ht(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Zf),d.toneMapping=li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new ai({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),m=new pt(new Mi,_),p=!1,E=e.background;E?E.isColor&&(_.color.copy(E),e.background=null,p=!0):(_.color.copy(Zf),p=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[v],r.y,r.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[v]));let C=this._cubeSize;tc(s,y*C,v>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===ns||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ep()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;tc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,nu)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jf[(s-r-1)%Jf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new pt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*cs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let p=[],E=0;for(let D=0;D<cs;++D){let F=D/_,S=Math.exp(-F*F/2);p.push(S),D===0?E+=S:D<m&&(E+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/E;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let y=this._sizeLods[s],C=3*y*(s>v-ur?s-v+ur:0),A=4*(this._cubeSize-y);tc(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(d,nu)}};vp=new Vt,tp=new ta(1,1),xp=new $r,bp=new Go,Mp=new Qr,np=[],ip=[],sp=new Float32Array(16),rp=new Float32Array(9),ap=new Float32Array(4);lu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=kv(t.type)}},cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ou=/(\w+)(\])?(\[|\.)?/g;dr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);rx(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};ax=37297,ox=0;cp=new je;nc=new k;gx=/^[ \t]*#include +<([\w\d./]+)>/gm;_x=new Map;vx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Ax=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fu(e),t.set(e,i)),i}},fu=class{constructor(e){this.id=Ax++,this.code=e,this.usedTimes=0}};Ux=0;kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bx=`uniform sampler2D shadow_pass;
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
}`;Hx={[cl]:hl,[ul]:pl,[dl]:ml,[$i]:fl,[hl]:cl,[pl]:ul,[ml]:dl,[fl]:$i};qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xx=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ln({vertexShader:qx,fragmentShader:Xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends Hn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new pu,p={},E=t.getContextAttributes(),v=null,y=null,C=[],A=[],D=new me,F=null,S=new Ht;S.viewport=new ft;let b=new Ht;b.viewport=new ft;let U=[S,b],H=new ll,X=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let N=C[w];return N===void 0&&(N=new Ks,C[w]=N),N.getTargetRaySpace()},this.getControllerGrip=function(w){let N=C[w];return N===void 0&&(N=new Ks,C[w]=N),N.getGripSpace()},this.getHand=function(w){let N=C[w];return N===void 0&&(N=new Ks,C[w]=N),N.getHandSpace()};function Y(w){let N=A.indexOf(w.inputSource);if(N===-1)return;let J=C[N];J!==void 0&&(J.update(w.inputSource,w.frame,c||a),J.dispatchEvent({type:w.type,data:w.inputSource}))}function R(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",L);for(let w=0;w<C.length;w++){let N=A[w];N!==null&&(A[w]=null,C[w].disconnect(N))}X=null,W=null,m.reset();for(let w in p)delete p[w];e.setRenderTarget(v),f=null,u=null,d=null,s=null,y=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){r=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){o=w,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(w){c=w},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(w){if(s=w,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",R),s.addEventListener("inputsourceschange",L),E.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,he=null,ue=null;E.depth&&(ue=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=E.stencil?cr:qs,he=E.stencil?lr:Ri);let re={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(re),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Vn(u.textureWidth,u.textureHeight,{format:vn,type:In,depthTexture:new ta(u.textureWidth,u.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let J={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Vn(f.framebufferWidth,f.framebufferHeight,{format:vn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ae.setContext(s),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function L(w){for(let N=0;N<w.removed.length;N++){let J=w.removed[N],he=A.indexOf(J);he>=0&&(A[he]=null,C[he].disconnect(J))}for(let N=0;N<w.added.length;N++){let J=w.added[N],he=A.indexOf(J);if(he===-1){for(let re=0;re<C.length;re++)if(re>=A.length){A.push(J),he=re;break}else if(A[re]===null){A[re]=J,he=re;break}if(he===-1)break}let ue=C[he];ue&&ue.connect(J)}}let I=new k,$=new k;function te(w,N,J){I.setFromMatrixPosition(N.matrixWorld),$.setFromMatrixPosition(J.matrixWorld);let he=I.distanceTo($),ue=N.projectionMatrix.elements,re=J.projectionMatrix.elements,Ve=ue[14]/(ue[10]-1),P=ue[14]/(ue[10]+1),oe=(ue[9]+1)/ue[5],Q=(ue[9]-1)/ue[5],ne=(ue[8]-1)/ue[0],ie=(re[8]+1)/re[0],ce=Ve*ne,pe=Ve*ie,Me=he/(-ne+ie),Xe=Me*-ne;if(N.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Xe),w.translateZ(Me),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),ue[10]===-1)w.projectionMatrix.copy(N.projectionMatrix),w.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let Pe=Ve+Me,T=P+Me,x=ce-Xe,G=pe+(he-Xe),K=oe*P/T*Pe,le=Q*P/T*Pe;w.projectionMatrix.makePerspective(x,G,K,le,Pe,T),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function se(w,N){N===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(N.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(s===null)return;let N=w.near,J=w.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&(J=m.depthFar)),H.near=b.near=S.near=N,H.far=b.far=S.far=J,(X!==H.near||W!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),X=H.near,W=H.far),H.layers.mask=w.layers.mask|6,S.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;let he=w.parent,ue=H.cameras;se(H,he);for(let re=0;re<ue.length;re++)se(ue[re],he);ue.length===2?te(H,S,b):H.projectionMatrix.copy(S.projectionMatrix),q(w,H,he)};function q(w,N,J){J===null?w.matrix.copy(N.matrixWorld):(w.matrix.copy(J.matrixWorld),w.matrix.invert(),w.matrix.multiply(N.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(N.projectionMatrix),w.projectionMatrixInverse.copy(N.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=Xs*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(w){l=w,u!==null&&(u.fixedFoveation=w),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=w)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(w){return p[w]};let fe=null;function be(w,N){if(h=N.getViewerPose(c||a),g=N,h!==null){let J=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let he=!1;J.length!==H.cameras.length&&(H.cameras.length=0,he=!0);for(let P=0;P<J.length;P++){let oe=J[P],Q=null;if(f!==null)Q=f.getViewport(oe);else{let ie=d.getViewSubImage(u,oe);Q=ie.viewport,P===0&&(e.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(y))}let ne=U[P];ne===void 0&&(ne=new Ht,ne.layers.enable(P),ne.viewport=new ft,U[P]=ne),ne.matrix.fromArray(oe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(oe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(H.matrix.copy(ne.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),he===!0&&H.cameras.push(ne)}let ue=s.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let P=d.getDepthInformation(J[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(ue&&ue.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let P=0;P<J.length;P++){let oe=J[P].camera;if(oe){let Q=p[oe];Q||(Q=new na,p[oe]=Q);let ne=d.getCameraImage(oe);Q.sourceTexture=ne}}}}for(let J=0;J<C.length;J++){let he=A[J],ue=C[J];he!==null&&ue!==void 0&&ue.update(he,N,c||a)}fe&&fe(w,N),N.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:N}),g=null}let Ae=new yp;Ae.setAnimationLoop(be),this.setAnimationLoop=function(w){fe=w},this.dispose=function(){}}},os=new Pn,Yx=new Mt;pr=class{constructor(e={}){let{canvas:t=zf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,C=!1;this._outputColorSpace=It;let A=0,D=0,F=null,S=-1,b=null,U=new ft,H=new ft,X=null,W=new $e(0),Y=0,R=t.width,L=t.height,I=1,$=null,te=null,se=new ft(0,0,R,L),q=new ft(0,0,R,L),fe=!1,be=new Qs,Ae=!1,w=!1,N=new Mt,J=new k,he=new ft,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},re=!1;function Ve(){return F===null?I:1}let P=i;function oe(M,z){return t.getContext(M,z)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){let z="webgl2";if(P=oe(z,M),P===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Q,ne,ie,ce,pe,Me,Xe,Pe,T,x,G,K,le,ee,Re,ve,Le,Ne,ge,Ce,We,Oe,Ee,Je;function B(){Q=new fv(P),Q.init(),Oe=new Wx(P,Q),ne=new av(P,Q,e,Oe),ie=new Vx(P,Q),ne.reversedDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),ce=new gv(P),pe=new Rx,Me=new Gx(P,Q,ie,pe,ne,Oe,ce),Xe=new lv(y),Pe=new dv(y),T=new M0(P),Ee=new sv(P,T),x=new pv(P,T,ce,Ee),G=new yv(P,x,T,ce),ge=new _v(P,ne,Me),ve=new ov(pe),K=new Cx(y,Xe,Pe,Q,ne,Ee,ve),le=new $x(y,pe),ee=new Ix,Re=new Ox(Q),Ne=new iv(y,Xe,Pe,ie,G,f,l),Le=new zx(y,G,ne),Je=new jx(P,ce,ne,ie),Ce=new rv(P,Q,ce),We=new mv(P,Q,ce),ce.programs=K.programs,y.capabilities=ne,y.extensions=Q,y.properties=pe,y.renderLists=ee,y.shadowMap=Le,y.state=ie,y.info=ce}B();let xe=new mu(y,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let M=Q.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Q.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return I},this.setPixelRatio=function(M){M!==void 0&&(I=M,this.setSize(R,L,!1))},this.getSize=function(M){return M.set(R,L)},this.setSize=function(M,z,j=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=M,L=z,t.width=Math.floor(M*I),t.height=Math.floor(z*I),j===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(R*I,L*I).floor()},this.setDrawingBufferSize=function(M,z,j){R=M,L=z,I=j,t.width=Math.floor(M*j),t.height=Math.floor(z*j),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(se)},this.setViewport=function(M,z,j,Z){M.isVector4?se.set(M.x,M.y,M.z,M.w):se.set(M,z,j,Z),ie.viewport(U.copy(se).multiplyScalar(I).round())},this.getScissor=function(M){return M.copy(q)},this.setScissor=function(M,z,j,Z){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,z,j,Z),ie.scissor(H.copy(q).multiplyScalar(I).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(M){ie.setScissorTest(fe=M)},this.setOpaqueSort=function(M){$=M},this.setTransparentSort=function(M){te=M},this.getClearColor=function(M){return M.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,j=!0){let Z=0;if(M){let V=!1;if(F!==null){let ye=F.texture.format;V=ye===El||ye===wl||ye===Sl}if(V){let ye=F.texture.type,Te=ye===In||ye===Ri||ye===ar||ye===lr||ye===bl||ye===Ml,Ue=Ne.getClearColor(),Ie=Ne.getClearAlpha(),Ge=Ue.r,qe=Ue.g,Be=Ue.b;Te?(g[0]=Ge,g[1]=qe,g[2]=Be,g[3]=Ie,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ge,_[1]=qe,_[2]=Be,_[3]=Ie,P.clearBufferiv(P.COLOR,0,_))}else Z|=P.COLOR_BUFFER_BIT}z&&(Z|=P.DEPTH_BUFFER_BIT),j&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ne.dispose(),ee.dispose(),Re.dispose(),pe.dispose(),Xe.dispose(),Pe.dispose(),G.dispose(),Ee.dispose(),Je.dispose(),K.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Bn),xe.removeEventListener("sessionend",pd),Bi.stop()};function Se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let M=ce.autoReset,z=Le.enabled,j=Le.autoUpdate,Z=Le.needsUpdate,V=Le.type;B(),ce.autoReset=M,Le.enabled=z,Le.autoUpdate=j,Le.needsUpdate=Z,Le.type=V}function _e(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ae(M){let z=M.target;z.removeEventListener("dispose",ae),Fe(z)}function Fe(M){Ye(M),pe.remove(M)}function Ye(M){let z=pe.get(M).programs;z!==void 0&&(z.forEach(function(j){K.releaseProgram(j)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,j,Z,V,ye){z===null&&(z=ue);let Te=V.isMesh&&V.matrixWorld.determinant()<0,Ue=Ym(M,z,j,Z,V);ie.setMaterial(Z,Te);let Ie=j.index,Ge=1;if(Z.wireframe===!0){if(Ie=x.getWireframeAttribute(j),Ie===void 0)return;Ge=2}let qe=j.drawRange,Be=j.attributes.position,tt=qe.start*Ge,ot=(qe.start+qe.count)*Ge;ye!==null&&(tt=Math.max(tt,ye.start*Ge),ot=Math.min(ot,(ye.start+ye.count)*Ge)),Ie!==null?(tt=Math.max(tt,0),ot=Math.min(ot,Ie.count)):Be!=null&&(tt=Math.max(tt,0),ot=Math.min(ot,Be.count));let bt=ot-tt;if(bt<0||bt===1/0)return;Ee.setup(V,Z,Ue,j,Ie);let ut,ct=Ce;if(Ie!==null&&(ut=T.get(Ie),ct=We,ct.setIndex(ut)),V.isMesh)Z.wireframe===!0?(ie.setLineWidth(Z.wireframeLinewidth*Ve()),ct.setMode(P.LINES)):ct.setMode(P.TRIANGLES);else if(V.isLine){let He=Z.linewidth;He===void 0&&(He=1),ie.setLineWidth(He*Ve()),V.isLineSegments?ct.setMode(P.LINES):V.isLineLoop?ct.setMode(P.LINE_LOOP):ct.setMode(P.LINE_STRIP)}else V.isPoints?ct.setMode(P.POINTS):V.isSprite&&ct.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$s("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ct.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ct.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let He=V._multiDrawStarts,_t=V._multiDrawCounts,st=V._multiDrawCount,tn=Ie?T.get(Ie).bytesPerElement:1,Ts=pe.get(Z).currentProgram.getUniforms();for(let nn=0;nn<st;nn++)Ts.setValue(P,"_gl_DrawID",nn),ct.render(He[nn]/tn,_t[nn])}else if(V.isInstancedMesh)ct.renderInstances(tt,bt,V.count);else if(j.isInstancedBufferGeometry){let He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,_t=Math.min(j.instanceCount,He);ct.renderInstances(tt,bt,_t)}else ct.render(tt,bt)};function ht(M,z,j){M.transparent===!0&&M.side===Xn&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,so(M,z,j),M.side=ri,M.needsUpdate=!0,so(M,z,j),M.side=Xn):so(M,z,j)}this.compile=function(M,z,j=null){j===null&&(j=M),p=Re.get(j),p.init(z),v.push(p),j.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),M!==j&&M.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Z=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ye=V.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Ue=ye[Te];ht(Ue,j,V),Z.add(Ue)}else ht(ye,j,V),Z.add(ye)}),p=v.pop(),Z},this.compileAsync=function(M,z,j=null){let Z=this.compile(M,z,j);return new Promise(V=>{function ye(){if(Z.forEach(function(Te){pe.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){V(M);return}setTimeout(ye,10)}Q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let rt=null;function Kn(M){rt&&rt(M)}function Bn(){Bi.stop()}function pd(){Bi.start()}let Bi=new yp;Bi.setAnimationLoop(Kn),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(M){rt=M,xe.setAnimationLoop(M),M===null?Bi.stop():Bi.start()},xe.addEventListener("sessionstart",Bn),xe.addEventListener("sessionend",pd),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,z,F),p=Re.get(M,v.length),p.init(z),v.push(p),N.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),be.setFromProjectionMatrix(N,Rn,z.reversedDepth),w=this.localClippingEnabled,Ae=ve.init(this.clippingPlanes,w),m=ee.get(M,E.length),m.init(),E.push(m),xe.enabled===!0&&xe.isPresenting===!0){let ye=y.xr.getDepthSensingMesh();ye!==null&&Gc(ye,z,-1/0,y.sortObjects)}Gc(M,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,te),re=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,re&&Ne.addToRenderList(m,M),this.info.render.frame++,Ae===!0&&ve.beginShadows();let j=p.state.shadowsArray;Le.render(j,M,z),Ae===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ye=z.cameras;if(V.length>0)for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Ie=ye[Te];gd(Z,V,M,Ie)}re&&Ne.render(M);for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Ie=ye[Te];md(m,M,Ie,Ie.viewport)}}else V.length>0&&gd(Z,V,M,z),re&&Ne.render(M),md(m,M,z);F!==null&&D===0&&(Me.updateMultisampleRenderTarget(F),Me.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(y,M,z),Ee.resetDefaultState(),S=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],Ae===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Gc(M,z,j,Z){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||be.intersectsSprite(M)){Z&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4(N);let Te=G.update(M),Ue=M.material;Ue.visible&&m.push(M,Te,Ue,j,he.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||be.intersectsObject(M))){let Te=G.update(M),Ue=M.material;if(Z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),he.copy(Te.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4(N)),Array.isArray(Ue)){let Ie=Te.groups;for(let Ge=0,qe=Ie.length;Ge<qe;Ge++){let Be=Ie[Ge],tt=Ue[Be.materialIndex];tt&&tt.visible&&m.push(M,Te,tt,j,he.z,Be)}}else Ue.visible&&m.push(M,Te,Ue,j,he.z,null)}}let ye=M.children;for(let Te=0,Ue=ye.length;Te<Ue;Te++)Gc(ye[Te],z,j,Z)}function md(M,z,j,Z){let V=M.opaque,ye=M.transmissive,Te=M.transparent;p.setupLightsView(j),Ae===!0&&ve.setGlobalState(y.clippingPlanes,j),Z&&ie.viewport(U.copy(Z)),V.length>0&&io(V,z,j),ye.length>0&&io(ye,z,j),Te.length>0&&io(Te,z,j),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function gd(M,z,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Vn(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?or:In,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ye=p.state.transmissionRenderTarget[Z.id],Te=Z.viewport||U;ye.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);let Ue=y.getRenderTarget(),Ie=y.getActiveCubeFace(),Ge=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(W),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),re&&Ne.render(j);let qe=y.toneMapping;y.toneMapping=li;let Be=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ae===!0&&ve.setGlobalState(y.clippingPlanes,Z),io(M,j,Z),Me.updateMultisampleRenderTarget(ye),Me.updateRenderTargetMipmap(ye),Q.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ot=0,bt=z.length;ot<bt;ot++){let ut=z[ot],ct=ut.object,He=ut.geometry,_t=ut.material,st=ut.group;if(_t.side===Xn&&ct.layers.test(Z.layers)){let tn=_t.side;_t.side=kt,_t.needsUpdate=!0,_d(ct,j,Z,He,_t,st),_t.side=tn,_t.needsUpdate=!0,tt=!0}}tt===!0&&(Me.updateMultisampleRenderTarget(ye),Me.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ue,Ie,Ge),y.setClearColor(W,Y),Be!==void 0&&(Z.viewport=Be),y.toneMapping=qe}function io(M,z,j){let Z=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ye=M.length;V<ye;V++){let Te=M[V],Ue=Te.object,Ie=Te.geometry,Ge=Te.group,qe=Te.material;qe.allowOverride===!0&&Z!==null&&(qe=Z),Ue.layers.test(j.layers)&&_d(Ue,z,j,Ie,qe,Ge)}}function _d(M,z,j,Z,V,ye){M.onBeforeRender(y,z,j,Z,V,ye),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(y,z,j,Z,M,ye),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=kt,V.needsUpdate=!0,y.renderBufferDirect(j,z,Z,V,M,ye),V.side=ri,V.needsUpdate=!0,y.renderBufferDirect(j,z,Z,V,M,ye),V.side=Xn):y.renderBufferDirect(j,z,Z,V,M,ye),M.onAfterRender(y,z,j,Z,V,ye)}function so(M,z,j){z.isScene!==!0&&(z=ue);let Z=pe.get(M),V=p.state.lights,ye=p.state.shadowsArray,Te=V.state.version,Ue=K.getParameters(M,V.state,ye,z,j),Ie=K.getProgramCacheKey(Ue),Ge=Z.programs;Z.environment=M.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(M.isMeshStandardMaterial?Pe:Xe).get(M.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ge===void 0&&(M.addEventListener("dispose",ae),Ge=new Map,Z.programs=Ge);let qe=Ge.get(Ie);if(qe!==void 0){if(Z.currentProgram===qe&&Z.lightsStateVersion===Te)return vd(M,Ue),qe}else Ue.uniforms=K.getUniforms(M),M.onBeforeCompile(Ue,y),qe=K.acquireProgram(Ue,Ie),Ge.set(Ie,qe),Z.uniforms=Ue.uniforms;let Be=Z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Be.clippingPlanes=ve.uniform),vd(M,Ue),Z.needsLights=jm(M),Z.lightsStateVersion=Te,Z.needsLights&&(Be.ambientLightColor.value=V.state.ambient,Be.lightProbe.value=V.state.probe,Be.directionalLights.value=V.state.directional,Be.directionalLightShadows.value=V.state.directionalShadow,Be.spotLights.value=V.state.spot,Be.spotLightShadows.value=V.state.spotShadow,Be.rectAreaLights.value=V.state.rectArea,Be.ltc_1.value=V.state.rectAreaLTC1,Be.ltc_2.value=V.state.rectAreaLTC2,Be.pointLights.value=V.state.point,Be.pointLightShadows.value=V.state.pointShadow,Be.hemisphereLights.value=V.state.hemi,Be.directionalShadowMap.value=V.state.directionalShadowMap,Be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Be.spotShadowMap.value=V.state.spotShadowMap,Be.spotLightMatrix.value=V.state.spotLightMatrix,Be.spotLightMap.value=V.state.spotLightMap,Be.pointShadowMap.value=V.state.pointShadowMap,Be.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=qe,Z.uniformsList=null,qe}function yd(M){if(M.uniformsList===null){let z=M.currentProgram.getUniforms();M.uniformsList=dr.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function vd(M,z){let j=pe.get(M);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Ym(M,z,j,Z,V){z.isScene!==!0&&(z=ue),Me.resetTextureUnits();let ye=z.fog,Te=Z.isMeshStandardMaterial?z.environment:null,Ue=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ji,Ie=(Z.isMeshStandardMaterial?Pe:Xe).get(Z.envMap||Te),Ge=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,qe=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Be=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,ot=!!j.morphAttributes.color,bt=li;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(bt=y.toneMapping);let ut=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=ut!==void 0?ut.length:0,He=pe.get(Z),_t=p.state.lights;if(Ae===!0&&(w===!0||M!==b)){let qt=M===b&&Z.id===S;ve.setState(Z,M,qt)}let st=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==_t.state.version||He.outputColorSpace!==Ue||V.isBatchedMesh&&He.batching===!1||!V.isBatchedMesh&&He.batching===!0||V.isBatchedMesh&&He.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&He.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&He.instancing===!1||!V.isInstancedMesh&&He.instancing===!0||V.isSkinnedMesh&&He.skinning===!1||!V.isSkinnedMesh&&He.skinning===!0||V.isInstancedMesh&&He.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&He.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&He.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&He.instancingMorph===!1&&V.morphTexture!==null||He.envMap!==Ie||Z.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==qe||He.morphTargets!==Be||He.morphNormals!==tt||He.morphColors!==ot||He.toneMapping!==bt||He.morphTargetsCount!==ct)&&(st=!0):(st=!0,He.__version=Z.version);let tn=He.currentProgram;st===!0&&(tn=so(Z,z,V));let Ts=!1,nn=!1,Lr=!1,yt=tn.getUniforms(),pn=He.uniforms;if(ie.useProgram(tn.program)&&(Ts=!0,nn=!0,Lr=!0),Z.id!==S&&(S=Z.id,nn=!0),Ts||b!==M){ie.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),yt.setValue(P,"projectionMatrix",M.projectionMatrix),yt.setValue(P,"viewMatrix",M.matrixWorldInverse);let jt=yt.map.cameraPosition;jt!==void 0&&jt.setValue(P,J.setFromMatrixPosition(M.matrixWorld)),ne.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&yt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,nn=!0,Lr=!0)}if(V.isSkinnedMesh){yt.setOptional(P,V,"bindMatrix"),yt.setOptional(P,V,"bindMatrixInverse");let qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),yt.setValue(P,"boneTexture",qt.boneTexture,Me))}V.isBatchedMesh&&(yt.setOptional(P,V,"batchingTexture"),yt.setValue(P,"batchingTexture",V._matricesTexture,Me),yt.setOptional(P,V,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",V._indirectTexture,Me),yt.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",V._colorsTexture,Me));let mn=j.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ge.update(V,j,tn),(nn||He.receiveShadow!==V.receiveShadow)&&(He.receiveShadow=V.receiveShadow,yt.setValue(P,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(pn.envMap.value=Ie,pn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),nn&&(yt.setValue(P,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&$m(pn,Lr),ye&&Z.fog===!0&&le.refreshFogUniforms(pn,ye),le.refreshMaterialUniforms(pn,Z,I,L,p.state.transmissionRenderTarget[M.id]),dr.upload(P,yd(He),pn,Me)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(dr.upload(P,yd(He),pn,Me),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&yt.setValue(P,"center",V.center),yt.setValue(P,"modelViewMatrix",V.modelViewMatrix),yt.setValue(P,"normalMatrix",V.normalMatrix),yt.setValue(P,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let qt=Z.uniformsGroups;for(let jt=0,Wc=qt.length;jt<Wc;jt++){let zi=qt[jt];Je.update(zi,tn),Je.bind(zi,tn)}}return tn}function $m(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function jm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,z,j){let Z=pe.get(M);Z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),pe.get(M.texture).__webglTexture=z,pe.get(M.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){let j=pe.get(M);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};let Zm=P.createFramebuffer();this.setRenderTarget=function(M,z=0,j=0){F=M,A=z,D=j;let Z=!0,V=null,ye=!1,Te=!1;if(M){let Ie=pe.get(M);if(Ie.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1;else if(Ie.__webglFramebuffer===void 0)Me.setupRenderTarget(M);else if(Ie.__hasExternalTextures)Me.rebindTextures(M,pe.get(M.texture).__webglTexture,pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Be=M.depthTexture;if(Ie.__boundDepthTexture!==Be){if(Be!==null&&pe.has(Be)&&(M.width!==Be.image.width||M.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Me.setupDepthRenderbuffer(M)}}let Ge=M.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Te=!0);let qe=pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?V=qe[z][j]:V=qe[z],ye=!0):M.samples>0&&Me.useMultisampledRTT(M)===!1?V=pe.get(M).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[j]:V=qe,U.copy(M.viewport),H.copy(M.scissor),X=M.scissorTest}else U.copy(se).multiplyScalar(I).floor(),H.copy(q).multiplyScalar(I).floor(),X=fe;if(j!==0&&(V=Zm),ie.bindFramebuffer(P.FRAMEBUFFER,V)&&Z&&ie.drawBuffers(M,V),ie.viewport(U),ie.scissor(H),ie.setScissorTest(X),ye){let Ie=pe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ie.__webglTexture,j)}else if(Te){let Ie=z;for(let Ge=0;Ge<M.textures.length;Ge++){let qe=pe.get(M.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,j,Ie)}}else if(M!==null&&j!==0){let Ie=pe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(M,z,j,Z,V,ye,Te,Ue=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){ie.bindFramebuffer(P.FRAMEBUFFER,Ie);try{let Ge=M.textures[Ue],qe=Ge.format,Be=Ge.type;if(!ne.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-Z&&j>=0&&j<=M.height-V&&(M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ue),P.readPixels(z,j,Z,V,Oe.convert(qe),Oe.convert(Be),ye))}finally{let Ge=F!==null?pe.get(F).__webglFramebuffer:null;ie.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(M,z,j,Z,V,ye,Te,Ue=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie)if(z>=0&&z<=M.width-Z&&j>=0&&j<=M.height-V){ie.bindFramebuffer(P.FRAMEBUFFER,Ie);let Ge=M.textures[Ue],qe=Ge.format,Be=Ge.type;if(!ne.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,ye.byteLength,P.STREAM_READ),M.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ue),P.readPixels(z,j,Z,V,Oe.convert(qe),Oe.convert(Be),0);let ot=F!==null?pe.get(F).__webglFramebuffer:null;ie.bindFramebuffer(P.FRAMEBUFFER,ot);let bt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Hf(P,bt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ye),P.deleteBuffer(tt),P.deleteSync(bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,j=0){let Z=Math.pow(2,-j),V=Math.floor(M.image.width*Z),ye=Math.floor(M.image.height*Z),Te=z!==null?z.x:0,Ue=z!==null?z.y:0;Me.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,Te,Ue,V,ye),ie.unbindTexture()};let Jm=P.createFramebuffer(),Km=P.createFramebuffer();this.copyTextureToTexture=function(M,z,j=null,Z=null,V=0,ye=null){ye===null&&(V!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=V,V=0):ye=0);let Te,Ue,Ie,Ge,qe,Be,tt,ot,bt,ut=M.isCompressedTexture?M.mipmaps[ye]:M.image;if(j!==null)Te=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Ie=j.isBox3?j.max.z-j.min.z:1,Ge=j.min.x,qe=j.min.y,Be=j.isBox3?j.min.z:0;else{let mn=Math.pow(2,-V);Te=Math.floor(ut.width*mn),Ue=Math.floor(ut.height*mn),M.isDataArrayTexture?Ie=ut.depth:M.isData3DTexture?Ie=Math.floor(ut.depth*mn):Ie=1,Ge=0,qe=0,Be=0}Z!==null?(tt=Z.x,ot=Z.y,bt=Z.z):(tt=0,ot=0,bt=0);let ct=Oe.convert(z.format),He=Oe.convert(z.type),_t;z.isData3DTexture?(Me.setTexture3D(z,0),_t=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Me.setTexture2DArray(z,0),_t=P.TEXTURE_2D_ARRAY):(Me.setTexture2D(z,0),_t=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);let st=P.getParameter(P.UNPACK_ROW_LENGTH),tn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ts=P.getParameter(P.UNPACK_SKIP_PIXELS),nn=P.getParameter(P.UNPACK_SKIP_ROWS),Lr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be);let yt=M.isDataArrayTexture||M.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){let mn=pe.get(M),qt=pe.get(z),jt=pe.get(mn.__renderTarget),Wc=pe.get(qt.__renderTarget);ie.bindFramebuffer(P.READ_FRAMEBUFFER,jt.__webglFramebuffer),ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,Wc.__webglFramebuffer);for(let zi=0;zi<Ie;zi++)yt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.get(M).__webglTexture,V,Be+zi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.get(z).__webglTexture,ye,bt+zi)),P.blitFramebuffer(Ge,qe,Te,Ue,tt,ot,Te,Ue,P.DEPTH_BUFFER_BIT,P.NEAREST);ie.bindFramebuffer(P.READ_FRAMEBUFFER,null),ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||pe.has(M)){let mn=pe.get(M),qt=pe.get(z);ie.bindFramebuffer(P.READ_FRAMEBUFFER,Jm),ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,Km);for(let jt=0;jt<Ie;jt++)yt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,V,Be+jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,V),pn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,qt.__webglTexture,ye,bt+jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,qt.__webglTexture,ye),V!==0?P.blitFramebuffer(Ge,qe,Te,Ue,tt,ot,Te,Ue,P.COLOR_BUFFER_BIT,P.NEAREST):pn?P.copyTexSubImage3D(_t,ye,tt,ot,bt+jt,Ge,qe,Te,Ue):P.copyTexSubImage2D(_t,ye,tt,ot,Ge,qe,Te,Ue);ie.bindFramebuffer(P.READ_FRAMEBUFFER,null),ie.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pn?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(_t,ye,tt,ot,bt,Te,Ue,Ie,ct,He,ut.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(_t,ye,tt,ot,bt,Te,Ue,Ie,ct,ut.data):P.texSubImage3D(_t,ye,tt,ot,bt,Te,Ue,Ie,ct,He,ut):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ye,tt,ot,Te,Ue,ct,He,ut.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ye,tt,ot,ut.width,ut.height,ct,ut.data):P.texSubImage2D(P.TEXTURE_2D,ye,tt,ot,Te,Ue,ct,He,ut);P.pixelStorei(P.UNPACK_ROW_LENGTH,st),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,tn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ts),P.pixelStorei(P.UNPACK_SKIP_ROWS,nn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Lr),ye===0&&z.generateMipmaps&&P.generateMipmap(_t),ie.unbindTexture()},this.initRenderTarget=function(M){pe.get(M).__webglFramebuffer===void 0&&Me.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Me.setTextureCube(M,0):M.isData3DTexture?Me.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Me.setTexture2DArray(M,0):Me.setTexture2D(M,0),ie.unbindTexture()},this.resetState=function(){A=0,D=0,F=null,ie.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});function eb(n,e,t){let i=o=>(o/=255)<=.04045?o/12.92:((o+.055)/1.055)**2.4;n=i(n),e=i(e),t=i(t);let s=Math.cbrt(.4122214708*n+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*n+.6806995451*e+.1073969566*t),a=Math.cbrt(.0883024619*n+.2817188376*e+.6299787005*t);return[.2104542553*s+.793617785*r-.0040720468*a,1.9779984951*s-2.428592205*r+.4505937099*a,.0259040371*s+.7827717662*r-.808675766*a]}function tb(n,e,t,i=!0){let s=new Uint8Array(e*t).fill(1);for(let u=0;u<s.length;u++)n[u*4+3]<100&&(s[u]=0);if(!i)return s;let r=[0,e-1,e*(t-1),e*t-1].map(u=>Array.from(n.slice(u*4,u*4+3))),a=[0,1,2].map(u=>r.map(f=>f[u]).sort((f,g)=>f-g)[1]),o=new Uint8Array(e*t),l=new Int32Array(e*t),c=0,h=0;function d(u){o[u]||(o[u]=1,(!s[u]||Mu(Array.from(n.slice(u*4,u*4+3)),a)<2100)&&(s[u]=0,l[h++]=u))}for(let u=0;u<e;u++)d(u),d((t-1)*e+u);for(let u=0;u<t;u++)d(u*e),d(u*e+e-1);for(;c<h;){let u=l[c++],f=u%e,g=u/e|0;f&&d(u-1),f<e-1&&d(u+1),g&&d(u-e),g<t-1&&d(u+e)}if(s.reduce((u,f)=>u+f,0)<e*t*.025)for(let u=0;u<s.length;u++)s[u]=n[u*4+3]>=100?1:0;return s}function Np(n,e,t,i=5,s=!0){let r=tb(n,e,t,s),a=[];for(let h=0;h<r.length;h++)r[h]&&a.push({i:h,rgb:Array.from(n.slice(h*4,h*4+3)),lab:eb(...n.slice(h*4,h*4+3))});if(!a.length)throw Error("没有可分析的有效像素，请更换图片。");let o=[a[a.length*.37|0].lab.slice()];for(;o.length<Math.min(i,a.length);){let h=a[0],d=-1;for(let u of a){let f=Math.min(...o.map(g=>Mu(u.lab,g)));f>d&&(d=f,h=u)}if(d<1e-8)break;o.push(h.lab.slice())}let l=new Int16Array(e*t).fill(-1);for(let h=0;h<12;h++){let d=o.map(()=>[0,0,0,0]);for(let u of a){let f=0,g=1/0;o.forEach((m,p)=>{let E=Mu(u.lab,m);E<g&&(g=E,f=p)}),l[u.i]=f;let _=d[f];for(let m=0;m<3;m++)_[m]+=u.lab[m];_[3]++}d.forEach((u,f)=>{u[3]&&(o[f]=u.slice(0,3).map(g=>g/u[3]))})}let c=o.map(()=>({rgb:[0,0,0],count:0}));for(let h of a){let d=c[l[h.i]];d.count++;for(let u=0;u<3;u++)d.rgb[u]+=h.rgb[u]}return c.forEach(h=>{h.rgb=h.rgb.map(d=>Math.round(d/(h.count||1))),h.hex="#"+h.rgb.map(d=>d.toString(16).padStart(2,"0")).join(""),h.share=h.count/a.length}),{width:e,height:t,labels:l,foreground:r,colors:c,validPixels:a.length}}function Na(n,e){return Uint8Array.from(n.labels,t=>t===e?1:0)}function oc(n){ac.set("custom",n.map(e=>[...e]));for(let e of Ua.keys())e.startsWith("custom:")&&Ua.delete(e)}function hs(n){if(ac.has(n))return ac.get(n);let e=[],t=(i,s,r,a)=>{for(let o=0;o<=32;o++){let l=o/32,c=1-l;e.push([c*c*c*i[0]+3*c*c*l*s[0]+3*c*l*l*r[0]+l*l*l*a[0],c*c*c*i[1]+3*c*c*l*s[1]+3*c*l*l*r[1]+l*l*l*a[1]])}};if(n==="fruit")t([0,-.76],[.7,-.96],[1.02,-.32],[.84,.2]),t([.84,.2],[.7,.78],[.25,.94],[0,.85]),t([0,.85],[-.32,.98],[-.85,.63],[-.87,.1]),t([-.87,.1],[-1.01,-.43],[-.62,-.98],[0,-.76]);else if(n==="leaf")t([-1,0],[-.4,-.85],[.55,-.61],[1,0]),t([1,0],[.45,.74],[-.4,.6],[-1,0]);else if(["round","drop","heart"].includes(n))for(let i=0;i<96;i++){let s=i/96*Math.PI*2;n==="round"?e.push([Math.cos(s)*.85,Math.sin(s)*.85]):n==="heart"?e.push([Math.pow(Math.sin(s),3)*.9,-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))*.055]):e.push([Math.sin(s)*.75*(.7+.3*Math.cos(s)),Math.cos(s)*.9])}else e.push([-1,.65],[-.23,-.57],[.12,-.08],[.47,-.73],[1,.65]);return ac.set(n,e),e}function nb(n,e=420){let t=n+":"+e;if(Ua.has(t))return Ua.get(t);let i=hs(n),s=[],r=a=>{let o=Math.sin(a*127.1+91.7)*43758.5453;return o-Math.floor(o)};for(let a=0;a<e*12&&s.length<e;a++){let o=r(a*2)*2-1,l=r(a*2+1)*2-1,c=!1;for(let h=0,d=i.length-1;h<i.length;d=h++){let u=i[h],f=i[d];u[1]>l!=f[1]>l&&o<(f[0]-u[0])*(l-u[1])/(f[1]-u[1])+u[0]&&(c=!c)}c&&s.push([o,l])}return Ua.set(t,s),s}function Pi(n,e,t,i){let s=nb(t),r=i.angle*Math.PI/180,a=Math.cos(r),o=Math.sin(r),l=0,c=0;for(let[u,f]of s){let g=Math.round((i.x+(u*a-f*o)*i.scale)*n.width),_=Math.round((i.y+(u*o+f*a)*i.scale)*n.height);if(g>=0&&g<n.width&&_>=0&&_<n.height){let m=_*n.width+g;n.foreground[m]&&(c++,e[m]&&l++)}}let h=l/s.length,d=c/s.length;return{fit:h,containment:d,outside:1-d,score:.7*h+.3*d,samples:s.length}}function Fp(n,e,t,{scale:i}={}){let s=[];for(let a of i?[i]:[.12,.18,.24,.3])for(let o=2;o<=8;o++)for(let l=2;l<=8;l++)for(let c of[-45,0,45,90]){let h={x:l/10,y:o/10,scale:a,angle:c};s.push({...h,...Pi(n,e,t,h)})}s.sort((a,o)=>o.score-a.score);let r=[];for(let a of s)if(r.every(o=>Math.hypot(o.x-a.x,o.y-a.y)>.17||Math.abs(o.scale-a.scale)>.1)&&(r.push(a),r.length===3))break;return r}var xt,Mu,ac,Ua,us=As(()=>{xt=(n,e,t)=>Math.max(e,Math.min(t,n));Mu=(n,e)=>n.reduce((t,i,s)=>t+(i-e[s])**2,0);ac=new Map,Ua=new Map});function Wp(n,e){let t=new zn,i=new zn;e.add(t),n.add(i);let s="",r=o=>{for(let l of[...o.children])l.geometry?.dispose(),l.material?.dispose(),o.remove(l)};function a(o={}){let l={...ab,...o};n.background=l.backdrop==="paper"?new $e(14604232):l.backdrop==="night"?new $e(858922):null;let c=JSON.stringify(l)+e.geometry.uuid;if(c===s)return;s=c,r(t),r(i),e.geometry.computeBoundingBox();let h=e.geometry.boundingBox,d=h.max.y,u=h.min.y;if(l.style==="pendant"){let f=new Wn({color:13018206,metalness:.8,roughness:.26}),g=new pt(new pa(.13,.035,12,48),f);g.position.set(0,d+.045,.02),t.add(g);let _={cinnabar:9185309,ink:2107426,jade:5404006}[l.cord]||9185309,m=new tr([new k(-.03,d+.15,0),new k(-.48,d+.55,-.02),new k(-.48,d+.83,-.05),new k(0,d+.93,-.06),new k(.48,d+.83,-.05),new k(.48,d+.55,-.02),new k(.03,d+.15,0)]),p=new pt(new ma(m,80,.022,8,!1),new Wn({color:_,roughness:.9}));t.add(p)}else if(l.style==="stand"){let f=new pt(new Ji(1.35,1.48,.22,80),new Wn({color:3614236,roughness:.45}));f.position.set(0,u-.25,0),i.add(f);let g=new pt(new Ji(1.36,1.36,.025,80),new Wn({color:11045457,metalness:.65,roughness:.3}));g.position.set(0,u-.125,0),i.add(g);for(let _ of[-.42,.42]){let m=new pt(new Ji(.025,.025,.3,12),new Wn({color:11835229,metalness:.7,roughness:.3}));m.position.set(_,u-.05,0),i.add(m)}}e.userData.presentation=l}return{update:a,dispose(){r(t),r(i),e.remove(t),n.remove(i)}}}var ab,qp=As(()=>{Pa();ab={style:"stone",backdrop:"ink",cord:"cinnabar"}});function lb(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($p),this.state=lt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ub(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ti.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=lt.DOLLY;break;case Ti.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}break;case Ti.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Tu)}function db(n){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fb(n){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(n.preventDefault(),this.dispatchEvent(Tu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent($p))}function pb(n){this.enabled!==!1&&this._handleKeyDown(n)}function mb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=lt.TOUCH_ROTATE;break;case Ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case Ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=lt.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(Tu)}function gb(n){switch(this._trackPointer(n),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=lt.NONE}}function _b(n){this.enabled!==!1&&n.preventDefault()}function yb(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Xp,Tu,$p,hc,Yp,ob,Ut,Kt,lt,Eu,uc,jp=As(()=>{Pa();Xp={type:"change"},Tu={type:"start"},$p={type:"end"},hc=new Js,Yp=new _n,ob=Math.cos(70*Ca.DEG2RAD),Ut=new k,Kt=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Eu=1e-6,uc=class extends ba{constructor(e,t=null){super(e,t),this.state=lt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new yn,this._lastTargetPosition=new k,this._quat=new yn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rr,this._sphericalDelta=new rr,this._scale=1,this._panOffset=new k,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new k,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cb.bind(this),this._onPointerDown=lb.bind(this),this._onPointerUp=hb.bind(this),this._onContextMenu=_b.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=pb.bind(this),this._onTouchStart=mb.bind(this),this._onTouchMove=gb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=yb.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xp),this.update(),this.state=lt.NONE}update(e=null){let t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Kt:i>Math.PI&&(i-=Kt),s<-Math.PI?s+=Kt:s>Math.PI&&(s-=Kt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ut.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(hc.origin.copy(this.object.position),hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(hc.direction))<ob?this.object.lookAt(this.target):(Yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),hc.intersectPlane(Yp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Eu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Eu||this._lastTargetPosition.distanceToSquared(this.target)>Eu?(this.dispatchEvent(Xp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Kt/60*this.autoRotateSpeed*e:Kt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ut.copy(s).sub(this.target);let r=Ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Kt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Kt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Kt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var Zp={};eg(Zp,{createAgateScene:()=>xb});function xb(n,{hero:e=!1}={}){let t=new pr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.7)),t.setClearColor(0,0),t.outputColorSpace=It,t.toneMapping=gl,t.toneMappingExposure=1.15,n.appendChild(t.domElement);let i=new Si,s=new Ht(35,1,.1,100);s.position.set(0,.2,7);let r=new uc(s,t.domElement);r.enableDamping=!0,r.enablePan=!1,r.minDistance=4.5,r.maxDistance=9,r.autoRotate=e&&!matchMedia("(prefers-reduced-motion: reduce)").matches,r.autoRotateSpeed=.65;let a=new Si;a.background=new $e(7827556);let o=new pt(new Mi(20,20,20),new ai({color:5461834,side:kt}));a.add(o);for(let[I,$,te,se,q,fe,be]of[[-4,3,2,2,5,16770749,5],[4,2,3,1,4,15331821,6],[0,5,-1,5,2,16767898,4],[0,-3,2,4,1,11957562,1]]){let Ae=new pt(new Gn(se,q),new ai({color:new $e(fe).multiplyScalar(be)}));Ae.position.set(I,$,te),Ae.lookAt(0,0,0),a.add(Ae)}let l=new fr(t),c=l.fromScene(a,.04);i.environment=c.texture,l.dispose(),a.traverse(I=>{I.geometry?.dispose(),I.material?.dispose()});let h=new fa(1.42,120,90),d=h.attributes.position;for(let I=0;I<d.count;I++){let $=d.getX(I),te=d.getY(I),se=d.getZ(I),q=1+.08*Math.sin($*2.3+te*2.6)+.035*Math.sin(te*5.3-se*3.2);d.setXYZ(I,$*q*1.12,te*q*1.02,se*q*.57)}h.computeVertexNormals();let u=new ga({color:15915712,roughness:.21,metalness:.02,clearcoat:1,clearcoatRoughness:.12,transmission:.17,thickness:1.5,ior:1.53,envMapIntensity:1.4}),f=!0;u.onBeforeCompile=I=>{f&&(I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMineral;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMineral=position;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vMineral;
 float hashN(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
 float noiseN(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hashN(i),hashN(i+vec3(1,0,0)),f.x),mix(hashN(i+vec3(0,1,0)),hashN(i+vec3(1,1,0)),f.x),f.y),mix(mix(hashN(i+vec3(0,0,1)),hashN(i+vec3(1,0,1)),f.x),mix(hashN(i+vec3(0,1,1)),hashN(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbmN(vec3 p){return .55*noiseN(p)+.27*noiseN(p*2.1)+.13*noiseN(p*4.2)+.05*noiseN(p*8.4);}
 vec3 agateColor(vec3 p){vec3 q=p*1.5;float n=fbmN(q*2.4);float r=length(vec2(q.x*.90+sin(q.y*1.4)*.35,q.y*.72))+n*.53;float bands=.5+.5*sin(r*20.+fbmN(q*5.)*3.);float broad=.5+.5*sin(r*5.1+q.z*.9);vec3 red=vec3(.39,.055,.018),amber=vec3(.80,.34,.07),cream=vec3(.95,.80,.55);vec3 c=mix(red,amber,smoothstep(.08,.78,broad));c=mix(c,cream,pow(bands,15.)*.88);c=mix(c,vec3(.97,.89,.73),smoothstep(.76,.99,broad)*.7);float grain=noiseN(q*160.);return c*(.94+.1*grain);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=agateColor(vMineral);`))},u.customProgramCacheKey=()=>f?"agate-procedural-v1":"agate-texture-v1";let g=new pt(h,u);g.rotation.set(-.15,-.2,-.22),i.add(g);let _=new ts(16771272,4.2);_.position.set(-3,4,5),i.add(_);let m=new ts(13164752,1.8);m.position.set(4,1,2),i.add(m);let p=new ts(16753223,2);p.position.set(1,-1,-3),i.add(p),i.add(new xa(13812125,.5));let E=document.createElement("canvas");E.width=256,E.height=256;let v=E.getContext("2d"),y=v.createRadialGradient(128,128,0,128,128,128);y.addColorStop(0,"rgba(0,0,0,.65)"),y.addColorStop(.5,"rgba(0,0,0,.22)"),y.addColorStop(1,"transparent"),v.fillStyle=y,v.fillRect(0,0,256,256);let C=new Zi(E),A=new pt(new Gn(4.5,2),new ai({map:C,transparent:!0,depthWrite:!1}));A.position.set(0,-1.7,-.6),A.rotation.x=-.5,i.add(A);let D=()=>{let I=n.getBoundingClientRect();I.width<1||I.height<1||(t.setSize(I.width,I.height),s.aspect=I.width/I.height,s.updateProjectionMatrix())},F=new ResizeObserver(D);F.observe(n),D();let S=!0,b=!1,U=()=>{!S||document.hidden||!b||n.offsetParent===null||(r.update(),t.render(i,s))},H=()=>{let I=S&&b&&!document.hidden;t.setAnimationLoop(I?U:null),n.dataset.rendering=String(I)},X=new IntersectionObserver(I=>{b=I[0].isIntersecting,H()},{threshold:.01});X.observe(n),document.addEventListener("visibilitychange",H);let W=null,Y=null,R=null,L=Wp(i,g);return{renderer:t,stone:g,controls:r,resize:D,setTexture(I,{kind:$,normalCanvas:te,polish:se=.72,light:q="left",thickness:fe=.24,presentation:be}={}){f=!1;let Ae=$+":"+fe+":"+JSON.stringify(hs($));if($&&Ae!==R){let w=hs($),N=new nr;w.forEach(([re,Ve],P)=>P?N.lineTo(re*1.4,-Ve*1.4):N.moveTo(re*1.4,-Ve*1.4)),N.closePath();let J=new da(N,{depth:fe,bevelEnabled:!0,bevelThickness:.07,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1}),he=J.attributes.position,ue=J.attributes.uv;for(let re=0;re<he.count;re++)ue.setXY(re,(he.getX(re)/1.4+1)/2,(he.getY(re)/1.4+1)/2);J.center(),J.computeVertexNormals(),J.userData.kind=$,h.dispose(),h=J,g.geometry=h,g.rotation.set(-.1,-.24,$==="leaf"?-.3:0),r.autoRotate=!1,R=Ae}W?.dispose(),W=new Zi(I),W.colorSpace=It,W.anisotropy=t.capabilities.getMaxAnisotropy(),u.map=W,Y?.dispose(),te?(Y=new Zi(te),u.normalMap=Y,u.normalScale.set(.65,.65)):u.normalMap=null,u.color.set(16777215),u.roughness=.7-se*.59,u.clearcoat=se,u.clearcoatRoughness=.32-se*.23,u.transmission=.04+se*.12,u.onBeforeCompile=()=>{},u.needsUpdate=!0,_.position.x=q==="right"?3:-3,m.position.x=q==="right"?-4:4,L.update(be)},setOrientation(I){r.autoRotate=!1,r.reset(),g.rotation.set(0,I==="back"?Math.PI:I==="side"?Math.PI/2:0,0),s.position.set(0,.2,7),r.update(),t.render(i,s)},capture(){return t.render(i,s),t.domElement.toDataURL("image/png")},setAuto(I){r.autoRotate=I},dispose(){S=!1,t.setAnimationLoop(null),X.disconnect(),document.removeEventListener("visibilitychange",H),F.disconnect(),r.dispose(),L.dispose(),h.dispose(),u.dispose(),c.dispose(),W?.dispose(),Y?.dispose(),C.dispose(),A.material.dispose(),A.geometry.dispose(),t.dispose(),t.domElement.remove()}}}var Jp=As(()=>{qp();us();Pa();jp()});var Dr=[{id:"journey-city",title:"阜新市推出2026春季四大精品旅游线路",publisher:"阜新市人民政府网站 · 阜新日报 · 2026-04-22",url:"https://www.fuxin.gov.cn/content/2026/1065588.html",note:"核对玛瑙文化与文旅线路的公开背景。历史节庆安排未当作当前活动发布；本站三种行程为可编辑的研学构想，不是已确认的官方旅游产品。"},{id:"formation-museum",title:"Agate · 玛瑙的常见产状与材质",publisher:"史密森尼国家自然历史博物馆",url:"https://naturalhistory.si.edu/explore/collections/geogallery/10026005",note:"形成图解的入门依据：火山岩空隙、富硅水与玛瑙层纹。图解为概念模型，不是特定阜新原石的成因鉴定。"},{id:"formation-review",title:"Mineralogy, Geochemistry and Genesis of Agate—A Review",publisher:"Götze、Möckel、Pan · Minerals 2020, 10(11), 1037",url:"https://doi.org/10.3390/min10111037",note:"补充不同地质成因、二氧化硅结晶与自组织、结构和杂质分布对条带和颜色的影响；不把每一条带等同于一次进水。"},{id:"heritage",title:"阜新玛瑙雕 · 国家级非遗项目名录",publisher:"中国非物质文化遗产网",url:"https://www.ihchina.cn/project_details/14006/",note:"核对项目名称、2006年第一批名录身份、编号Ⅶ-30、材质与工艺特点。页面包含历史材料，人物年龄等动态信息未采用。"},{id:"town",title:"阜新市 · 玛瑙特色小镇景区",publisher:"辽宁省文化和旅游厅 · 2025-11-21",url:"https://whly.ln.gov.cn/whly/wlzt/sjly/ajjq/2025112116121250991/index.shtml",note:"核对十家子镇文旅场景与玛瑙体验、专业市场、八宝海湿地、辽代闾州塔等资源。"},{id:"rural",title:"“阜新玛瑙工匠”获评省级劳务品牌",publisher:"阜新市人力资源和社会保障局 · 2026-01-15",url:"https://rsj.fuxin.gov.cn/content/2026/1037027.html",note:"核对工匠工作室、研学体验、数字推广与农户参与产业链的应用背景。"}],xd=[{title:"玛瑙如何形成",keys:["形成","成因","怎么来","地质","富硅","空隙","结晶"],text:"以常见的火山岩空隙充填路径为例，富硅流体进入岩石空隙，二氧化硅在适宜条件下沉淀与结晶。结构、孔隙与杂质分布的差异可形成可见层纹。玛瑙也存在其他地质成因；不能把每一条纹都等同于一次进水，也没有适用于所有玛瑙的统一形成时长。",source:"formation-review"},{title:"国家级非遗身份",keys:["非遗","国家","名录","时候","哪年","2006","身份","级别"],text:"阜新玛瑙雕于2006年入选第一批国家级非物质文化遗产代表性项目名录，项目编号为Ⅶ-30，类别为传统美术。",source:"heritage"},{title:"材质与工艺特点",keys:["工艺","特点","材料","纹色","色彩","条带","绝活","流程","雕刻"],text:"玛瑙的天然色彩和条带为设计提供线索。官方项目资料介绍了选料、设计、雕琢与抛光等任务，并列举素活、掏膛、活环与透雕等技艺。具体作品的工序与方案需结合材料判断。",source:"heritage"},{title:"十家子镇文旅场景",keys:["十家子","旅游","乡土","哪里","位置","景区","湿地","闾州","市场"],text:"玛瑙特色小镇位于阜新蒙古族自治县十家子镇。省文旅厅介绍其玛瑙文化、专业市场以及八宝海湿地、辽代闾州塔等资源，可为文化与自然相连的研学构想提供场景。实际开放和接待需向当地确认。",source:"town"},{title:"乡村经营与参与",keys:["乡村","振兴","农户","收入","增收","经营","就业","研学","工作室"],text:"阜新市人社局公开材料提出串联工匠工作室、加工园区和非遗展示馆发展研学与体验，拓展数字推广渠道，并鼓励农户参与产业链。本原型据此设计文化学习、数字创作与到访意向流程，尚未验证实际增收。",source:"rural"}],ro=[{title:"观料",subtitle:"先观察，再构思",text:"观察可见的色彩、条带与外形，寻找适合表达的视觉关系。照片能辅助观察表面信息；真实内部结构仍需要实物判断。"},{title:"构思",subtitle:"让纹色参与表达",text:"结合材料外观提出构图。在数字创作中尝试图案的尺度、位置与方向，比较不同方案与纹色的关系。"},{title:"雕琢",subtitle:"理解形与工的关系",text:"粗细雕琢与不同专项技法需要经验和工具。这里展示工艺学习的逻辑，数字预览不直接给出加工路径或安全操作指导。"},{title:"润饰",subtitle:"从形态走向完整作品",text:"抛光与配座等处理完善作品的观看与陈设效果。实际安排依作品与工坊做法而定，数字材质只用于外观体验。"}];var ao=[{id:"welcome",name:"中国玛瑙小镇会客厅",short:"会客厅",type:"文化起点",icon:"hall",x:24,y:47,image:"hero",minutes:30,tag:"认识小镇",fact:"省文旅厅景区介绍列出了中国玛瑙小镇会客厅。",intro:"先建立对小镇的整体认识，再带着问题去看作品与手艺。",observe:"找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。",prepare:"到访前核实开放与讲解安排。",source:"town"},{id:"studio",name:"工艺观察与交流",short:"手艺现场",type:"工坊场景",icon:"craft",x:45,y:68,image:"craft",minutes:60,tag:"接待需先联系",fact:"市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。",intro:"把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。",observe:"问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？",prepare:"具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。",source:"rural"},{id:"market",name:"玛瑙专业市场",short:"逛逛市集",type:"产业观察",icon:"market",x:49,y:34,image:"hero",minutes:35,tag:"认识原料与文创",fact:"省文旅厅景区介绍提到战国红大市场等专业市场。",intro:"从原料、半成品到文创，观察一块石头如何走进日常生活。",observe:"选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。",prepare:"记录材质与工艺说明，购买与定制由你与经营者自行确认。",source:"town"},{id:"water",name:"八宝海湿地景观",short:"水岸慢行",type:"自然观察",icon:"water",x:76,y:24,image:"water",minutes:40,tag:"把脚步放慢",fact:"八宝海湿地景观见于省文旅厅的小镇介绍。",intro:"暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。",observe:"在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。",prepare:"核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。",source:"town"},{id:"pagoda",name:"辽代闾州塔",short:"寻访古迹",type:"历史线索",icon:"pagoda",x:83,y:67,image:"water",minutes:25,tag:"从石纹走向乡土",fact:"辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。",intro:"在工艺之外，为这次到访保留一段理解地方历史的时间。",observe:"观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。",prepare:"出发前核实到达方式、可参观范围及文物保护要求。",source:"town"}],Ur=[{id:"craft",title:"半日识艺",subtitle:"先知艺，再观工",description:"把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。",stops:["welcome","studio","market"],interest:"玛瑙文化与工艺观察"},{id:"slow",title:"一日慢游",subtitle:"手艺与乡土，都留一点时间",description:"将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。",stops:["welcome","studio","market","water","pagoda"],interest:"乡土文化与自然游览"},{id:"family",title:"亲子研学",subtitle:"带着问题，一起去发现",description:"以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。",stops:["welcome","water","studio"],interest:"亲子研学与纹色创作"}],oo=[{label:"观纹色",title:"先问这块石，有什么。",text:"看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。",question:"这块材料最值得保留的天然纹色是什么？"},{label:"看构思",title:"让材料，参与决定造型。",text:"同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。",question:"为什么选这个方向和轮廓，而不是另一个？"},{label:"识雕琢",title:"从外轮廓，走向细部层次。",text:"关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。",question:"这件作品中，最需要经验判断的是哪一步？"},{label:"赏润饰",title:"最后一点光，也关乎表达。",text:"观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。",question:"这种表面处理，怎样让纹色更容易被看见？"}],En=[{question:"开始构思前，最值得先做什么？",answers:["观察材料已有的天然纹色","先把所有材料想成同一种颜色","完全忽略石头，照着模板取形"],correct:0,explanation:"先观料，再构思，让天然色彩与条带成为设计的一部分。",source:"heritage"},{question:"照片最适合帮助我们观察哪一项？",answers:["原料内部所有裂隙","表面可见的颜色与纹理","真实加工后的全部结果"],correct:1,explanation:"照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。",source:"heritage"},{question:"把工艺交流加入行程后，出发前还需要做什么？",answers:["直接把本地收藏当成预约凭证","默认所有工坊都随时开放","确认接待方、时间与可参观内容"],correct:2,explanation:"本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。",source:"rural"}],Cs={spring:{name:"春日寻色",icon:"芽",text:"把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。"},summer:{name:"夏日缓行",icon:"水",text:"为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。"},autumn:{name:"秋日拾光",icon:"叶",text:"从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。"},winter:{name:"冬日访艺",icon:"炉",text:"把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。"}},lo=[{id:"culture",title:"文化被看见",label:"文化理解",icon:"eye",text:"以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。",visitor:"先了解作品与材料，再决定想看什么。",organizer:"把参观前的知识准备与现场观察任务衔接起来。",maker:"让作品的构思和工艺被清楚地介绍。"},{id:"experience",title:"手艺有交流",label:"研学体验",icon:"craft",text:"把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。",visitor:"把想问的问题写进手册，提前确认接待。",organizer:"明确人数、时间、内容与组织责任，再对接工坊。",maker:"根据实际能力安排可参观、可讲解的内容。"},{id:"creation",title:"作品进日常",label:"文创连接",icon:"leaf",text:"从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。",visitor:"关注材质与工艺说明，留下自己的设计偏好。",organizer:"以学习收获组织作品讨论，避免把购物当作研学任务。",maker:"展示材料特点与制作过程，沟通定制边界。"},{id:"local",title:"乡土共参与",label:"本地协作",icon:"village",text:"工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。",visitor:"在尊重当地安排的前提下，了解更多乡土文化。",organizer:"优先核实本地接待与协作条件，逐步建立合作。",maker:"与市场、村庄及研学组织者协调实际服务。"}];var bd={hall:"M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18",craft:"M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4",market:"M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0",water:"M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3",pagoda:"M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4",eye:"M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8",leaf:"M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5",village:"M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2"},qc=(n,e="")=>`<svg class="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${bd[n]||bd.leaf}"/></svg>`,tg=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Md=n=>`./assets/journey-v2/${n}.webp`,Xc=(n,e)=>{try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}},Xt=n=>ao.find(e=>e.id===n),co=n=>Dr.find(e=>e.id===n),ho=(n,e,t,i)=>Number.isFinite(Number(n))?Math.round(Math.min(t,Math.max(e,Number(n)))):i;function Sd({toast:n,download:e}){let t=document.querySelector("#journey"),i=w=>t.querySelector(w),s=w=>[...t.querySelectorAll(w)],r="agate-journey-draft-v1",a="agate-journey-learning-v1",o=Xc(r,{}),l=o&&typeof o=="object"?o:{},c=new Set,h={profile:Ur.some(w=>w.id===l.profile)?l.profile:"craft",stops:[],date:typeof l.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:"",people:ho(l.people,1,30,2),season:Object.hasOwn(Cs,l.season)?l.season:["winter","spring","summer","autumn"][Math.floor((new Date().getMonth()+1)%12/3)],customized:l.customized===!0,planId:typeof l.planId=="string"?l.planId:null};if(Array.isArray(l.stops))for(let w of l.stops)w&&Xt(w.id)&&!c.has(w.id)&&(c.add(w.id),h.stops.push({id:w.id,minutes:ho(w.minutes,10,180,Xt(w.id).minutes)}));Array.isArray(l.stops)||(h.stops=Ur[0].stops.map(w=>({id:w,minutes:Xt(w).minutes})));let d=Xc(a,{}),u=d&&typeof d=="object"?d:{},f={observed:u.observed===!0,quizDone:u.quizDone===!0,routePrepared:u.routePrepared===!0,question:typeof u.question=="string"?u.question.slice(0,120):"",questionSaved:u.questionSaved===!0,checks:{}};for(let w of["open","reception","content","travel"])f.checks[w]=u.checks?.[w]===!0;let g="welcome",_=0,m=0,p=Array(En.length).fill(null),E=0,v="visitor";function y(w,N){try{return localStorage.setItem(w,JSON.stringify(N)),!0}catch{return!1}}function C(){y(r,h),y(a,f)}function A(w){i("#journey-plan-status").textContent=w}let D=()=>Ur.find(w=>w.id===h.profile),F=()=>D().title+(h.customized?" · 自选调整":""),S=()=>h.stops.reduce((w,N)=>w+N.minutes,0),b=()=>[f.observed,f.quizDone,f.routePrepared&&h.stops.length>0,f.questionSaved&&f.question.trim().length>0];function U(){return`<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([w,N])=>`<path d="M${w} ${N-15}l-9 23h18Z"/><path d="M${w} ${N+8}v9"/>`).join("")}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+ao.map(w=>`<button class="journey-map-node" data-place="${w.id}" style="--node-x:${w.x}%;--node-y:${w.y}%" aria-pressed="${w.id===g}" aria-label="探索${w.name}">${qc(w.icon)}<span>${w.short}</span><b class="journey-node-order"></b></button>`).join("")}i("#journey-map").innerHTML=U();function H(){s("[data-place]").forEach(w=>{let N=h.stops.findIndex(J=>J.id===w.dataset.place);w.classList.toggle("in-plan",N>=0),w.setAttribute("aria-pressed",String(w.dataset.place===g)),w.querySelector(".journey-node-order").textContent=N>=0?N+1:""}),i("#journey-map-route").setAttribute("d",h.stops.map((w,N)=>{let J=Xt(w.id);return`${N?"L":"M"}${J.x*9},${J.y*5.5}`}).join(" "))}function X(w){let N=Xt(w);if(!N)return;g=w;let J=co(N.source),he=h.stops.some(ue=>ue.id===w);i("#journey-place-detail").innerHTML=`<div class="journey-detail-image"><img src="${Md(N.image)}" width="600" height="337" loading="lazy" alt="AI${N.image==="craft"?"手艺":N.image==="water"?"乡野水岸":"玛瑙文旅"}情境示意，非${tg(N.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${N.type} / ${N.tag}</p><h3>${N.name}</h3><p>${N.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${N.observe}</p></div><p class="journey-place-prepare">${N.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${he?"disabled":""}>${he?"已在我的行程 ✓":"加入我的行程 ＋"}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${N.fact}</p><a href="${J.url}" target="_blank" rel="noopener">${J.publisher} ↗</a></details></div>`,i("#journey-add-this").onclick=()=>R(w),H()}s("[data-place]").forEach(w=>w.onclick=()=>X(w.dataset.place));function W(){i("#journey-presets").innerHTML=Ur.map((w,N)=>`<button data-journey-preset="${w.id}" aria-pressed="${w.id===h.profile}"><span class="journey-preset-index">0${N+1}</span><span><strong>${w.title}</strong><small>${w.subtitle}</small></span><b>↗</b></button>`).join(""),s("[data-journey-preset]").forEach(w=>w.onclick=()=>{h.profile=w.dataset.journeyPreset,h.stops=D().stops.map(N=>({id:N,minutes:Xt(N).minutes})),h.customized=!1,f.routePrepared=!0,Y("已按这份灵感整理路线，可继续增减与调整。"),W()})}function Y(w="行程草稿已更新。"){L(),X(g),se(),C(),A(w)}function R(w){!Xt(w)||h.stops.some(N=>N.id===w)||(h.stops.push({id:w,minutes:Xt(w).minutes}),h.customized=!0,f.routePrepared=!0,Y(`已将“${Xt(w).short}”加入行程。`))}function L(){i("#journey-route-title").textContent=F(),i("#journey-route-description").textContent=D().description,i("#journey-stop-total").textContent=`${h.stops.length} 站`,i("#journey-route-list").innerHTML=h.stops.length?h.stops.map((w,N)=>{let J=Xt(w.id),he=[10,20,25,30,35,40,45,60,90,120,180,w.minutes].sort((ue,re)=>ue-re).filter((ue,re,Ve)=>Ve.indexOf(ue)===re);return`<article class="journey-route-item"><span class="journey-route-number">0${N+1}</span><div class="journey-route-item-copy"><span>${J.type}</span><h4>${J.name}</h4><p>${J.observe}</p><label>现场停留 <select data-route-minutes="${J.id}" aria-label="${J.name}现场停留分钟">${he.map(ue=>`<option value="${ue}" ${ue===w.minutes?"selected":""}>${ue} 分钟</option>`).join("")}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${J.id}" data-direction="-1" aria-label="上移${J.name}" ${N===0?"disabled":""}>↑</button><button data-route-move="${J.id}" data-direction="1" aria-label="下移${J.name}" ${N===h.stops.length-1?"disabled":""}>↓</button><button data-route-remove="${J.id}" aria-label="移除${J.name}">×</button></div></article>`}).join(""):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>',i("#journey-add-stops").innerHTML=ao.map(w=>{let N=h.stops.some(J=>J.id===w.id);return`<button data-route-add="${w.id}" ${N?"disabled":""}>${qc(w.icon)}${w.short}<span>${N?"✓":"＋"}</span></button>`}).join(""),s("[data-route-add]").forEach(w=>w.onclick=()=>R(w.dataset.routeAdd)),s("[data-route-remove]").forEach(w=>w.onclick=()=>{h.stops=h.stops.filter(N=>N.id!==w.dataset.routeRemove),h.customized=!0,Y("已移除一站，可随时重新加入。")}),s("[data-route-move]").forEach(w=>w.onclick=()=>{let N=h.stops.findIndex(he=>he.id===w.dataset.routeMove),J=N+Number(w.dataset.direction);J<0||J>=h.stops.length||([h.stops[N],h.stops[J]]=[h.stops[J],h.stops[N]],h.customized=!0,Y("已调整路线顺序。"),i(`[data-route-move="${w.dataset.routeMove}"][data-direction="${w.dataset.direction}"]`)?.focus({preventScroll:!0}))}),s("[data-route-minutes]").forEach(w=>w.onchange=()=>{let N=h.stops.find(J=>J.id===w.dataset.routeMinutes);N&&(N.minutes=ho(w.value,10,180,N.minutes)),h.customized=!0,Y("已更新现场停留安排。")}),i("#journey-total-minutes").textContent=S(),i("#journey-summary-people").textContent=`${h.people} 人同行`,i("#journey-summary-date").textContent=h.date||"日期待定";for(let w of["#plan-trip","#journey-export","#journey-copy"])i(w).disabled=!h.stops.length;i("#plan-trip").innerHTML=h.planId?"更新我的行程 <span>✓</span>":"保存到我的作品 <span>＋</span>",H()}i("#journey-date").value=h.date,i("#journey-people").value=h.people,i("#journey-date").onchange=w=>{h.date=w.target.value,C(),L()},i("#journey-people").onchange=w=>{h.people=ho(w.target.value,1,30,2),w.target.value=h.people,C(),L()};function I(){let w=Cs[h.season];i("#journey-season-note").innerHTML=`<span>${w.icon}</span><div><strong>${w.name}</strong><p>${w.text}</p></div>`,s("[data-journey-season]").forEach(N=>N.setAttribute("aria-pressed",String(N.dataset.journeySeason===h.season)))}s("[data-journey-season]").forEach(w=>w.onclick=()=>{h.season=w.dataset.journeySeason,I(),C()});function $(){return["石里有境 · 十家子研学构想",F(),`日期：${h.date||"待定"} / 同行：${h.people} 人`,`现场观察安排：${S()} 分钟（不含交通、用餐与等候）`,"",...h.stops.map((w,N)=>`${N+1}. ${Xt(w.id).name} · ${w.minutes} 分钟
   观察：${Xt(w.id).observe}`),"",f.question.trim()?`想问工匠：${f.question.trim()}`:"",`季节灵感：${Cs[h.season].name}`,`线上准备：${b().filter(Boolean).length} / 4`,"","这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。",`小镇资料：${co("town").url}`,`工艺与研学资料：${co("rural").url}`].filter(w=>w!==null).join(`
`)}i("#plan-trip").onclick=()=>{if(!h.stops.length)return;let w=Xc("agate-plans-v1",[]),N=Array.isArray(w)?w:[],J=h.planId||crypto.randomUUID(),he=N.findIndex(re=>re?.id===J),ue={id:J,version:2,date:h.date||"日期待定",interest:D().interest,note:`${F()} · ${h.people}人
${h.stops.map(re=>Xt(re.id).name).join(" → ")}
现场观察 ${S()} 分钟，不含交通与用餐。${f.question.trim()?`
想问工匠：`+f.question.trim():""}`,route:h.stops.map(re=>({...re,name:Xt(re.id).name})),people:h.people,season:h.season,question:f.question.trim(),updatedAt:new Date().toISOString()};if(he>=0?N[he]=ue:N.unshift(ue),!y("agate-plans-v1",N.slice(0,50))){n("浏览器未能保存，请先导出研学手册。");return}h.planId=J,f.routePrepared=!0,Y("行程已保存，可在“我的作品”查看。"),n("已保存研学行程，尚未产生预约。")},i("#journey-copy").onclick=async()=>{let w=$();try{await navigator.clipboard.writeText(w),n("行程文字已复制。")}catch{e(new Blob([w],{type:"text/plain;charset=utf-8"}),"十家子研学行程.txt"),n("已导出行程文字。")}};function te(w){_=w;let N=oo[w];i("#craft-detail").innerHTML=`<p class="eyebrow">OBSERVATION / 0${w+1}</p><h3>${N.title}</h3><p>${N.text}</p>`,i("#journey-craft-question").textContent=N.question,s("[data-journey-craft]").forEach(J=>J.setAttribute("aria-pressed",String(Number(J.dataset.journeyCraft)===w)))}i("#craft-tabs").innerHTML=oo.map((w,N)=>`<button data-journey-craft="${N}" aria-pressed="${N===0}"><b>0${N+1}</b>${w.label}</button>`).join(""),s("[data-journey-craft]").forEach(w=>w.onclick=()=>te(Number(w.dataset.journeyCraft))),i("#journey-record-observation").onclick=()=>{f.observed=!f.observed,f.observed&&!f.question.trim()&&(i("#journey-question").placeholder=oo[_].question),C(),se(),n(f.observed?"已把这条观察收进线上研学准备。":"已取消这项观察记录。")};function se(){let w=b(),N=w.filter(Boolean).length;i("#journey-passport-count").innerHTML=`${N}<small>/ 4</small>`,i("#journey-passport-circle").style.strokeDashoffset=String(2*Math.PI*51*(1-N/4));let J=[["观纹","记录一条手艺观察","journey-craft"],["识艺","完成一轮工艺问答","journey-passport"],["入乡","整理自己的行程","journey-plan"],["问艺","留一个想问的问题","journey-passport"]];i("#journey-passport-tasks").innerHTML=J.map(([he,ue,re],Ve)=>`<button data-task-target="${re}" data-task-index="${Ve}" class="${w[Ve]?"complete":""}"><span>${he}</span><div><strong>${ue}</strong><small>${w[Ve]?"已收进线上准备":"等你来发现"}</small></div><b>${w[Ve]?"✓":"↗"}</b></button>`).join(""),s("[data-task-target]").forEach(he=>he.onclick=()=>{be(he.dataset.taskTarget),he.dataset.taskIndex==="3"&&i("#journey-question").focus({preventScroll:!0})}),i("#journey-record-observation").setAttribute("aria-pressed",String(f.observed)),i("#journey-record-observation").textContent=f.observed?"这条观察已记录 ✓":"记下这条观察 ＋"}function q(){if(i("#journey-quiz-count").textContent=m<En.length?`${m+1} / ${En.length}`:"本轮已完成",m===En.length){let he=p.filter((ue,re)=>ue===En[re].correct).length;i("#journey-quiz").innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${he} / ${En.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`,i("#journey-quiz-restart").onclick=()=>{m=0,p=Array(En.length).fill(null),q()};return}let w=En[m],N=p[m]!==null,J=co(w.source);i("#journey-quiz").innerHTML=`<h3>${w.question}</h3><div class="journey-quiz-answers">${w.answers.map((he,ue)=>`<button data-quiz-answer="${ue}" class="${N&&ue===w.correct?"correct":N&&ue===p[m]?"chosen":""}" ${N?"disabled":""}><span>${String.fromCharCode(65+ue)}</span>${he}${N&&ue===w.correct?"<b>✓</b>":""}</button>`).join("")}</div>${N?`<div class="journey-quiz-feedback"><strong>${p[m]===w.correct?"你抓住了关键。":"再看一眼这个线索。"}</strong><p>${w.explanation}</p><a href="${J.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${m===En.length-1?"收进手册":"下一题"} →</button></div>`:""}`,s("[data-quiz-answer]").forEach(he=>he.onclick=()=>{p[m]=Number(he.dataset.quizAnswer),q()}),N&&(i("#journey-quiz-next").onclick=()=>{m++,m===En.length&&(f.quizDone=!0,C(),se()),q()})}i("#journey-question").value=f.question,i("#journey-question-length").textContent=[...f.question].length,i("#journey-question").oninput=w=>{f.question=w.target.value.slice(0,120),f.questionSaved=!1,i("#journey-question-length").textContent=[...f.question].length,C(),se()},i("#journey-question-save").onclick=()=>{if(!f.question.trim()){n("先写下一个想了解的问题。"),i("#journey-question").focus();return}f.questionSaved=!0,C(),se(),n("问题已收进手册，也会随行程导出。")},s("[data-journey-check]").forEach(w=>{w.checked=f.checks[w.dataset.journeyCheck],w.onchange=()=>{f.checks[w.dataset.journeyCheck]=w.checked,C()}});function fe(){i("#journey-connections").innerHTML=lo.map((N,J)=>`<button data-connection="${J}" aria-pressed="${J===E}">${qc(N.icon)}<span><small>0${J+1} / ${N.label}</small><strong>${N.title}</strong></span><b>→</b></button>`).join(""),s("[data-connection]").forEach(N=>N.onclick=()=>{E=Number(N.dataset.connection),fe()});let w=lo[E];i("#journey-connection-label").textContent=w.label,i("#journey-connection-title").textContent=w.title,i("#journey-connection-copy").textContent=w.text,i("#journey-role-copy").textContent=w[v]}s("[data-journey-role]").forEach(w=>w.onclick=()=>{v=w.dataset.journeyRole,s("[data-journey-role]").forEach(N=>N.setAttribute("aria-pressed",String(N===w))),i("#journey-role-copy").textContent=lo[E][v]});function be(w){document.getElementById(w)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"})}if(s("[data-journey-scroll]").forEach(w=>w.onclick=()=>be(w.dataset.journeyScroll)),"IntersectionObserver"in window){let w=new IntersectionObserver(N=>{for(let J of N)J.isIntersecting&&s(".journey-subnav [data-journey-scroll]").forEach(he=>he.classList.toggle("active",he.dataset.journeyScroll===J.target.id))},{rootMargin:"-70px 0px -55% 0px",threshold:0});if(s(".journey-chapter").forEach(N=>w.observe(N)),!matchMedia("(prefers-reduced-motion: reduce)").matches){t.classList.add("journey-anim-ready");let N=new IntersectionObserver(J=>{for(let he of J)he.isIntersecting&&(he.target.classList.add("revealed"),N.unobserve(he.target))},{threshold:.06});s("[data-journey-reveal]").forEach(J=>N.observe(J))}}async function Ae(){if(!h.stops.length)return;let w=i("#journey-export");w.disabled=!0;let N=w.textContent;w.textContent="正在整理手册…";try{let ne=function(Pe,T,x,G,K,le,ee="#6c5842"){re.font=oe(K),re.fillStyle=ee;let Re="",ve=x;for(let Le of[...Pe])re.measureText(Re+Le).width>G&&Re?(re.fillText(Re,T,ve),Re=Le,ve+=le):Re+=Le;return Re&&re.fillText(Re,T,ve),ve+le};f.routePrepared=!0,C(),se(),await document.fonts.ready;let J=new Image;J.src=Md("hero");let he=!0;try{await J.decode()}catch{he=!1}let ue=document.createElement("canvas");ue.width=1200,ue.height=1180+h.stops.length*155+(f.question.trim()?150:0);let re=ue.getContext("2d"),Ve=ue.width,P=ue.height,oe=(Pe,T=400)=>`${T} ${Pe}px "Microsoft YaHei","PingFang SC",sans-serif`,Q=(Pe,T,x,G,K="#382b21",le=400)=>{re.fillStyle=K,re.font=oe(G,le),re.fillText(Pe,T,x)};if(re.fillStyle="#f1e7d4",re.fillRect(0,0,Ve,P),re.fillStyle="#281b11",re.fillRect(0,0,Ve,390),he){let Pe=J.width,T=J.height,x=Math.max(Ve/Pe,390/T);re.save(),re.beginPath(),re.rect(0,0,Ve,390),re.clip(),re.drawImage(J,(Ve-Pe*x)/2,(390-T*x)/2,Pe*x,T*x),re.restore()}let ie=re.createLinearGradient(0,0,Ve,0);ie.addColorStop(0,"#171009ed"),ie.addColorStop(.8,"#17100920"),re.fillStyle=ie,re.fillRect(0,0,Ve,390),Q("石里有境 / FIELD PASSPORT",65,79,20,"#d5b580"),Q("循艺入乡",65,160,58,"#f3e2c2"),Q("我的十家子研学手册",68,216,28,"#e0c6a0"),Q(F(),68,295,24,"#d6b078"),Q("AI 文旅情境示意",960,367,14,"#f4debb"),Q("日期  "+(h.date||"待定"),65,458,22),Q("同行  "+h.people+" 人",500,458,22),Q("线上准备  "+b().filter(Boolean).length+" / 4",835,458,22),re.strokeStyle="#b29b762f",re.lineWidth=2,re.beginPath(),re.moveTo(65,491),re.lineTo(1135,491),re.stroke(),Q("把好奇，串成自己的路线。",65,551,33,"#46321f"),Q("现场观察 "+S()+" 分钟 · 不含交通、用餐与等候",65,596,19,"#8a7151");let ce=667;for(let Pe=0;Pe<h.stops.length;Pe++){let T=h.stops[Pe],x=Xt(T.id);re.fillStyle="#dcc59f",re.beginPath(),re.arc(91,ce+8,26,0,Math.PI*2),re.fill(),Q(String(Pe+1).padStart(2,"0"),73,ce+17,24,"#604321"),Pe<h.stops.length-1&&(re.strokeStyle="#c7ab7e",re.beginPath(),re.moveTo(91,ce+41),re.lineTo(91,ce+123),re.stroke()),Q(x.name,145,ce+13,28,"#3b2d20"),Q(T.minutes+" 分钟",975,ce+13,21,"#90704a"),ne(x.observe,145,ce+56,920,20,32),ce+=155}f.question.trim()&&(re.fillStyle="#e5d6bb",re.fillRect(65,ce-8,1070,142),Q("如果遇见工匠，我想问",89,ce+28,18,"#937346"),ne(f.question.trim(),89,ce+68,1018,22,32,"#513c26"),ce+=175),Q(Cs[h.season].name+" · 带着颜色去发现",65,ce+35,24,"#61492e"),ne(Cs[h.season].text,65,ce+78,1070,19,30),ce+=165;let pe={open:"开放与时间",reception:"人数与接待",content:"讲解与体验",travel:"费用与交通"};Q("出发前的确认清单",65,ce,23,"#60462b");let Me=65;for(let[Pe,T]of Object.entries(pe))Q((f.checks[Pe]?"☑ ":"□ ")+T,Me,ce+43,17,"#8c7456"),Me+=274;re.strokeStyle="#b29b7650",re.beginPath(),re.moveTo(65,P-173),re.lineTo(1135,P-173),re.stroke(),ne("公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。",65,P-129,1070,16,26,"#917d60"),Q("资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局",65,P-67,15,"#917d60"),Q("carpedimez.github.io/fuxin-agate-studio/#journey",65,P-34,15,"#917d60");let Xe=await new Promise(Pe=>ue.toBlob(Pe,"image/png"));if(!Xe)throw Error("export");e(Xe,"十家子研学手册.png"),f.routePrepared=!0,C(),se(),n("研学手册已导出，路线与问题都在里面。")}catch{n("暂未能生成图片，可先复制行程文字。")}finally{w.disabled=!h.stops.length,w.textContent=N}}return i("#journey-export").onclick=Ae,X(g),W(),L(),I(),te(0),q(),se(),fe(),{exportPass:Ae,addStop:R,selectPlace:X}}var Ed=[{id:"bands",title:"层纹之间，自有山河",category:"specimen",tag:"纹理标本",file:"agate-bands",alt:"玛瑙切片的层叠条带与色彩实拍",note:"沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。",origin:"公开玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"},{id:"libation",title:"一盏温润，双耳生姿",category:"vessel",tag:"馆藏器物",file:"agate-libation-cup",alt:"清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳",note:"看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。",origin:"中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425",author:"Cleveland Museum of Art / Gary Kirchenbauer",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.clevelandart.org/art/1920.425"},{id:"moss",title:"把一片绿意，佩在身上",category:"jewelry",tag:"实物佩饰",file:"agate-moss-pendant",alt:"带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理",note:"圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。",origin:"苔藓玛瑙吊坠 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",source:"https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg"},{id:"crystal",title:"光透过石，层次便醒来",category:"specimen",tag:"纹理标本",file:"agate-crystal",alt:"透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞",note:"外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。",origin:"透光玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg"},{id:"carnelian",title:"赤色成杯，雕出一朵花",category:"vessel",tag:"馆藏器物",file:"agate-carnelian-cup",alt:"中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍",note:"花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。",origin:"中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882",author:"The Metropolitan Museum of Art",license:"CC0 1.0 / Public Domain",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.metmuseum.org/art/collection/search/44144"},{id:"nodule",title:"从一块原石，读起",category:"specimen",tag:"纹理标本",file:"agate-nodule",alt:"玛瑙结核标本的外缘与内部纹理实拍",note:"外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。",origin:"公开玛瑙结核标本 · 非阜新原料产地证明",author:"James St. John",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",source:"https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"}],Nr=document.querySelector("#agate-gallery"),wd=Nr.querySelector(".photo-grid"),Ot=document.createElement("dialog");Ot.id="photo-dialog";Ot.className="photo-dialog";Ot.setAttribute("aria-labelledby","photo-title");Ot.innerHTML='<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>';document.body.append(Ot);var Pt=n=>Ot.querySelector(n),Yc="all",Rs=0,Td=()=>Ed.filter(n=>Yc==="all"||n.category===Yc);function Ad(n){Ot.classList.toggle("photo-zoomed",n),Pt("#photo-zoom").setAttribute("aria-pressed",String(n)),Pt("#photo-zoom").textContent=n?"还原全貌 −":"放大细节 ＋",Pt(".photo-viewport").scrollTo(0,0)}function uo(n){let e=Td();Rs=(n+e.length)%e.length;let t=e[Rs];Ad(!1),Pt("#photo-large").src=`./assets/photos/${t.file}.webp`,Pt("#photo-large").alt=t.alt,Pt("#photo-title").textContent=t.title,Pt("#photo-tag").textContent=t.tag,Pt("#photo-note").textContent=t.note,Pt("#photo-origin").textContent=t.origin,Pt("#photo-credit").textContent=`摄影 / 图像提供：${t.author} · ${t.license}`,Pt("#photo-source").href=t.source,Pt("#photo-license").href=t.licenseUrl,Pt("#photo-counter").textContent=`${String(Rs+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}`,Pt("#photo-prev").disabled=Pt("#photo-next").disabled=e.length<2}function Cd(){let n=Td();wd.innerHTML=n.map((e,t)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${t}" aria-label="放大查看：${e.title}"><span class="photo-frame"><img src="./assets/photos/${e.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${e.alt}"><span class="photo-category">${e.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(Ed.indexOf(e)+1).padStart(2,"0")}</span><span><strong>${e.title}</strong><small>${e.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join(""),Nr.querySelector("#photo-result-count").textContent=`${n.length} 件实物`,wd.querySelectorAll("[data-photo-index]").forEach(e=>e.onclick=()=>{uo(Number(e.dataset.photoIndex)),Ot.showModal()})}Nr.querySelectorAll("[data-photo-filter]").forEach(n=>n.onclick=()=>{Yc=n.dataset.photoFilter,Nr.querySelectorAll("[data-photo-filter]").forEach(e=>e.setAttribute("aria-pressed",String(e===n))),Cd()});Pt("#photo-close").onclick=()=>Ot.close();Pt("#photo-prev").onclick=()=>uo(Rs-1);Pt("#photo-next").onclick=()=>uo(Rs+1);Pt("#photo-zoom").onclick=()=>Ad(!Ot.classList.contains("photo-zoomed"));Ot.addEventListener("keydown",n=>{(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),uo(Rs+(n.key==="ArrowLeft"?-1:1)))});Ot.addEventListener("click",n=>{if(n.target===Ot){let e=Ot.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&Ot.close()}});window.addEventListener("hashchange",()=>{Ot.open&&Ot.close()});document.querySelector("#gallery-jump").onclick=()=>Nr.scrollIntoView({behavior:"smooth"});Cd();Pa();function Sp(n,e,{onReady:t=()=>{}}={}){let i;try{i=new pr({antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,1.65)),i.setClearColor(1183243),i.outputColorSpace=It,i.domElement.className="formation-cinema-canvas",i.domElement.setAttribute("aria-hidden","true"),n.append(i.domElement);let s=new Si,r=new es(-1,1,1,-1,0,1),a=new ea(new Uint8Array([19,15,12,255]),1,1);a.needsUpdate=!0;let o={u_map0:{value:a},u_map1:{value:a},u_map2:{value:a},u_map3:{value:a},u_aspects:{value:new ft(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new me},u_light:{value:0}},l=new ln({uniforms:o,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`}),c=new pt(new Gn(2,2),l);s.add(c);let h=[],d=[],u=new Set,f=!1,g=!1,_=!1,m=!1,p=!1,E=0,v=0,y=0,C=1,A=0,D=new me,F=matchMedia("(prefers-reduced-motion: reduce)"),S=new ya;function b(){return u.has(Math.floor(y))&&u.has(Math.ceil(y))}function U(){let I=b();I!==p&&(p=I,p&&(o.u_progress.value=y),n.classList.toggle("cinema-ready",p),p&&t())}function H(I){return d[I]||(d[I]=S.loadAsync(e[I]).then($=>{if(_){$.dispose();return}$.colorSpace=It,$.minFilter=Jt,$.magFilter=Jt,$.generateMipmaps=!1,o["u_map"+I].value=$,o.u_aspects.value.setComponent(I,$.image.width/$.image.height),h.push($),u.add(I),U()}).catch(()=>{})),d[I]}function X(){if(_)return;let{width:I,height:$}=n.getBoundingClientRect();I<2||$<2||(i.setSize(I,$,!1),o.u_view.value=I/$)}function W(I){if(E=0,!f||_)return;if(I-v<1e3/(matchMedia("(pointer:coarse)").matches?24:30)){E=requestAnimationFrame(W);return}let $=Math.min(.08,(I-v)/1e3||.033);v=I,g&&!F.matches&&(o.u_time.value+=$);let te=F.matches?1:1-Math.exp(-$*7);b()&&(o.u_progress.value+=(y-o.u_progress.value)*te),o.u_zoom.value+=(C-o.u_zoom.value)*te,o.u_light.value+=(A-o.u_light.value)*te,o.u_pointer.value.lerp(F.matches?new me:D,te),i.render(s,r),E=requestAnimationFrame(W)}function Y(I){let $=n.getBoundingClientRect();D.set((I.clientX-$.left)/$.width*2-1,1-(I.clientY-$.top)/$.height*2)}function R(){D.set(0,0)}n.addEventListener("pointermove",Y),n.addEventListener("pointerleave",R);let L=new ResizeObserver(X);return L.observe(n),i.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),m=!0,n.classList.remove("cinema-ready"),f=!1,cancelAnimationFrame(E)}),{setProgress(I,$=!1){y=Ca.clamp(I,0,3),H(Math.floor(y)),H(Math.ceil(y)),U(),$&&(o.u_progress.value=y),f&&setTimeout(()=>{!_&&f&&H(Math.min(3,Math.ceil(y)+1))},200)},setActive(I){m||(f=I,f?(X(),v=performance.now(),E||(E=requestAnimationFrame(W))):(cancelAnimationFrame(E),E=0))},setPlaying(I){g=I},setDetail(I){C=I?1.42:1},setLight(I){A=I?1:0},dispose(){_=!0,f=!1,cancelAnimationFrame(E),L.disconnect(),n.removeEventListener("pointermove",Y),n.removeEventListener("pointerleave",R),h.forEach(I=>I.dispose()),a.dispose(),c.geometry.dispose(),l.dispose(),i.dispose(),i.domElement.remove()}}}var yu=[{short:"岩石留空",title:"一块石的故事，始于一处空隙。",copy:"在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。",caption:"岩石中的空隙，为后来的矿物生长提供空间。",key:"空间"},{short:"富硅流体",title:"水，把形成玛瑙的物质带来。",copy:"含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。",caption:"富硅流体进入空隙，带来形成二氧化硅矿物的物质。",key:"物质"},{short:"结晶成纹",title:"细小的差异，长成层层纹理。",copy:"在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。",caption:"以常见同心层纹为例：结构与成分的差异，带来可见层次。",key:"纹色"},{short:"因色构形",title:"自然留下纹色，构思从你开始。",copy:"天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。",caption:"从“石如何形成”，走到“我想把它做成什么”。",key:"构思"}],wp=yu.map((n,e)=>`./assets/formation-v2/stage-0${e+1}.webp`),Zx=["沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。","沿着裂隙看：进入腔体的水，与湿润表面上的折射。","沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。","沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。"],Jx=["A PLACE TO BEGIN","WATER BRINGS SILICA","LAYERS TAKE SHAPE","FROM STONE TO CREATION"],Da=document.createElement("section");Da.className="formation-teaser";Da.setAttribute("aria-labelledby","formation-teaser-title");Da.innerHTML='<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>';document.querySelector("#agate-gallery").before(Da);var mt=document.createElement("dialog");mt.id="formation-dialog";mt.className="formation-dialog";mt.setAttribute("aria-labelledby","formation-title");mt.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${wp.map((n,e)=>`<img src="${n}" data-art-stage="${e}" loading="lazy" decoding="async" alt="" class="${e===0?"visible":""}">`).join("")}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${yu.map((n,e)=>`<button data-formation-step="${e}" aria-pressed="${e===0}"><img src="./assets/formation-v2/stage-0${e+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${e+1}</b>${n.short}</span><i></i></button>`).join("")}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;document.body.append(mt);var et=n=>mt.querySelector(n),Ep="agate-formation-intro-v2",Wt=-1,hi=0,La=null,Tp=!1,Ln=null,Ap=0,Cp=0,gr=!1,Ia=!1,Kx=matchMedia("(prefers-reduced-motion: reduce)");function xn(){clearTimeout(La),La=null,mt.classList.remove("formation-running"),et("#formation-play").setAttribute("aria-pressed","false"),et("#formation-play").textContent="▷ 自动演示",Ln?.setPlaying(!1)}function Rp(){let n=Cp+(performance.now()-Ap)/1e3;if(n>=36){jn(3),xn();return}let e=Math.min(3,Math.floor(n/9)),t=n%9,i=Math.max(0,Math.min(1,(t-6)/3));jn(Math.min(3,e+i*i*(3-2*i))),La=setTimeout(Rp,80)}function Pp(){xn(),hi>=3&&jn(0);let n=hi%1;Cp=Math.floor(hi)*9+(n?6+3*(.5-Math.sin(Math.asin(1-2*n)/3)):0),Ap=performance.now(),mt.classList.add("formation-running"),et("#formation-play").setAttribute("aria-pressed","true"),et("#formation-play").textContent="Ⅱ 暂停演示",Ln?.setPlaying(!0),La=setTimeout(Rp,80)}function jn(n,e=!1){hi=Math.max(0,Math.min(3,n));let t=Math.round(hi),i=yu[t];Ln?.setProgress(hi,e);let s=Math.floor(hi),r=hi-s;mt.querySelectorAll("[data-art-stage]").forEach(a=>{let o=Number(a.dataset.artStage);a.style.opacity=o===s?String(1-r):o===s+1?String(r):"0"}),et("#formation-progress").value=Math.round(hi*1e3),et("#formation-progress-label").value=`0${t+1} / 04`,t!==Wt&&(Wt=t,et(".formation-visual").dataset.phase=Wt,et(".formation-cinema").style.backgroundImage=`url("./assets/formation-v2/stage-0${Wt+1}-thumb.webp")`,et("#formation-chapter-en").textContent=`0${Wt+1} / ${Jx[Wt]}`,et("#formation-stage-label").textContent=`0${Wt+1} / ${i.key}`,et("#formation-number").textContent=`0${Wt+1}`,et("#formation-title").textContent=i.title,et("#formation-copy").textContent=i.copy,et("#formation-caption").textContent=i.caption,et("#formation-observation").textContent=Zx[Wt],mt.querySelectorAll("[data-formation-step]").forEach(a=>a.setAttribute("aria-pressed",String(Number(a.dataset.formationStep)===Wt))),et("#formation-previous").disabled=Wt===0,et("#formation-next").innerHTML=Wt===3?"选石创作 <span>↗</span>":"继续看 <span>→</span>")}function Ip(){Tp=!0;try{localStorage.setItem(Ep,"1")}catch{}}function Lp(){Ip(),mt.close(),location.hash!=="#studio"&&(location.hash="studio")}function Dp(n){gr=n,et(".formation-visual").classList.toggle("formation-detail",gr),et("#formation-detail").setAttribute("aria-pressed",String(gr)),et("#formation-detail").textContent=gr?"− 还原全貌":"＋ 微距细看",Ln?.setDetail(gr)}function vu(){mt.open||(et(".formation-notes").open=!1,mt.classList.remove("formation-focused"),et("#formation-focus").setAttribute("aria-pressed","false"),et("#formation-focus").textContent="⤢ 大画面",Dp(!1),mt.showModal(),mt.scrollTop=0,Ln||(Ln=Sp(et(".formation-cinema"),wp)),Ln?.setActive(!0),jn(0,!0),Kx.matches||Pp())}function Up(){requestAnimationFrame(()=>{let n=Tp;try{n=n||localStorage.getItem(Ep)==="1"}catch{}!n&&!document.querySelector("#studio").hidden&&!document.querySelector("dialog[open]")&&vu()})}Da.querySelector(".formation-open").onclick=vu;var sc=document.createElement("button");sc.className="demo-button formation-replay";sc.textContent="玛瑙怎么形成？";sc.onclick=vu;document.querySelector("#studio .heading-actions").prepend(sc);mt.querySelectorAll("[data-formation-step]").forEach(n=>n.onclick=()=>{xn(),jn(Number(n.dataset.formationStep))});et("#formation-progress").oninput=n=>{xn(),jn(Number(n.target.value)/1e3,!0)};et("#formation-next").onclick=()=>{xn(),Wt===3?Lp():jn(Wt+1)};et("#formation-previous").onclick=()=>{xn(),jn(Math.max(0,Wt-1))};et("#formation-play").onclick=()=>La?xn():Pp();et("#formation-skip").onclick=Lp;et("#formation-close").onclick=()=>mt.close();et("#formation-detail").onclick=()=>Dp(!gr);et("#formation-light").onclick=()=>{Ia=!Ia,et(".formation-visual").classList.toggle("formation-bright",Ia),et("#formation-light").setAttribute("aria-pressed",String(Ia)),Ln?.setLight(Ia)};et("#formation-focus").onclick=()=>{let n=mt.classList.toggle("formation-focused");et("#formation-focus").setAttribute("aria-pressed",String(n)),et("#formation-focus").textContent=n?"⤡ 返回图文":"⤢ 大画面"};mt.addEventListener("close",()=>{xn(),Ln?.setActive(!1),Ip()});mt.addEventListener("cancel",xn);mt.addEventListener("keydown",n=>{n.target.type!=="range"&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),xn(),jn(Math.min(3,Math.max(0,Wt+(n.key==="ArrowRight"?1:-1)))))});et(".formation-notes").addEventListener("toggle",()=>{et(".formation-notes").open&&xn()});mt.querySelectorAll("[data-art-stage]").forEach(n=>n.addEventListener("error",()=>{n.hidden=!0}));document.addEventListener("visibilitychange",()=>{document.hidden?(xn(),Ln?.setActive(!1)):mt.open&&Ln?.setActive(!0)});window.addEventListener("hashchange",()=>{mt.open&&mt.close()});jn(0);var xu=[{id:"blossom",name:"五瓣花",caption:"给纹色添一朵小花"},{id:"cloud",name:"流云",caption:"把弧线连成一片云"},{id:"waves",name:"水波",caption:"三重涟漪，疏密有致"},{id:"bamboo",name:"竹影",caption:"细枝与叶，顺势而生"},{id:"stars",name:"星芒",caption:"一点星光，几何点缀"},{id:"sunrise",name:"朝阳",caption:"从山线里升起的光"},{id:"fan",name:"折扇",caption:"展开一面自己的小景"},{id:"ridge",name:"叠嶂",caption:"三道山线，留一点远意"}];function Qx(n){let e=[],t=s=>e.push(s),i=(s,r=48)=>Array.from({length:r+1},(a,o)=>s(o/r));if(n==="blossom"){for(let s=0;s<5;s++){let r=s*Math.PI*2/5;t(i(a=>{let o=a*Math.PI*2,l=.28+.25*Math.cos(o);return[Math.cos(r)*l-Math.sin(r)*Math.sin(o)*.17,Math.sin(r)*l+Math.cos(r)*Math.sin(o)*.17]}))}t(i(s=>[Math.cos(s*Math.PI*2)*.08,Math.sin(s*Math.PI*2)*.08]))}else if(n==="cloud")t(i(s=>{let r=s*Math.PI*2,a=.45+.08*Math.cos(r*5);return[Math.cos(r)*a*1.3,Math.sin(r)*a*.65]},96)),t(i(s=>[-.48+s*.96,.18+Math.sin(s*Math.PI*2)*.06]));else if(n==="waves")for(let s=0;s<3;s++)t(i(r=>[-.7+r*1.4,(s-1)*.23+Math.sin(r*Math.PI*3)*.09]));else if(n==="bamboo"){t([[-.07,.65],[.03,-.65]]);for(let s=0;s<3;s++){let r=-.4+s*.35;t([[-.1,r],[.1,r]]);for(let a of[-1,1])t([[0,r],[a*.48,r-.24],[a*.22,r-.04],[0,r]])}}else if(n==="stars")for(let[s,r,a]of[[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])t(Array.from({length:9},(o,l)=>{let c=l/8*Math.PI*2-Math.PI/2,h=l%2?a*.24:a;return[s+Math.cos(c)*h,r+Math.sin(c)*h]}));else if(n==="sunrise"){t(i(s=>[Math.cos(Math.PI+s*Math.PI)*.3,-.02+Math.sin(Math.PI+s*Math.PI)*.3],32)),t([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let s=0;s<7;s++){let r=Math.PI+s/6*Math.PI;t([[Math.cos(r)*.4,Math.sin(r)*.4],[Math.cos(r)*.53,Math.sin(r)*.53]])}t([[-.58,.35],[.58,.35]])}else if(n==="fan"){t(i(s=>[Math.cos(Math.PI*1.12+s*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+s*Math.PI*.76)*.88]));for(let s=0;s<=8;s++){let r=Math.PI*1.12+s/8*Math.PI*.76;t([[0,.5],[Math.cos(r)*.72,.5+Math.sin(r)*.88]])}}else if(n==="ridge")for(let s=0;s<3;s++)t([[-.7,.2+s*.18],[-.35,-.4+s*.18],[-.1,-.08+s*.18],[.28,-.5+s*.18],[.7,.2+s*.18]]);else throw Error("未知纹样");return e}function rc(n,{x:e=0,y:t=0,scale:i=.75,angle:s=0}={},r=.018,a=.6){let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o);return Qx(n).map(h=>({width:r,depth:a,points:h.map(([d,u])=>[e+(d*l-u*c)*i,t+(d*c+u*l)*i])}))}function bu(n,e){let t=[];for(let i of n){let s=[],r=()=>{s.length>1&&t.push({...i,points:s}),s=[]};for(let a of i.points)a.every(o=>Math.abs(o)<=1)&&e(...a)?s.push(a):r();r()}return t}us();function _r(n,e){let t=hs(e);n.beginPath(),t.forEach(([i,s],r)=>r?n.lineTo(i,s):n.moveTo(i,s)),n.closePath()}function ib(n,e,t,i){let s=n.angle*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=i/(2*n.scale);return[o*r/e,-o*a/e,o*a/t,o*r/t,i/2-o*(r*n.x+a*n.y),i/2-o*(-a*n.x+r*n.y)]}function yr(n,{size:e=768,grooves:t=!0}={}){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");return s.fillStyle="#9b6036",s.fillRect(0,0,e,e),n.image&&(s.save(),s.setTransform(...ib(n.pose,n.image.width,n.image.height,e)),s.drawImage(n.image,0,0),s.restore()),t&&(sb(s,n.strokes||[],e,n.polish??.7),Op(s,n.inscription,e)),i}function lc(n,e,t){if(e.length){n.beginPath(),n.moveTo((e[0][0]+1)*t/2,(e[0][1]+1)*t/2),e.length===1&&n.lineTo((e[0][0]+1)*t/2+.01,(e[0][1]+1)*t/2);for(let i=1;i<e.length;i++)n.lineTo((e[i][0]+1)*t/2,(e[i][1]+1)*t/2)}}function sb(n,e,t,i=.7){n.save(),n.lineCap="round",n.lineJoin="round";for(let s of e){let r=s.width*t/2;n.save(),n.translate(r*.2,r*.28),lc(n,s.points,t),n.strokeStyle=`rgba(255,239,202,${.55+i*.25})`,n.lineWidth=r*1.55,n.stroke(),n.restore(),lc(n,s.points,t),n.strokeStyle=`rgba(48,22,11,${.25+(s.depth??.6)*.7})`,n.lineWidth=r,n.stroke(),n.save(),n.translate(-r*.1,-r*.12),lc(n,s.points,t),n.strokeStyle="rgba(100,53,29,.58)",n.lineWidth=r*.35,n.stroke(),n.restore()}n.restore()}function Op(n,e,t,{height:i=!1}={}){if(!e?.text)return;let s=e,r=s.size*t/2;n.save(),n.translate((s.x+1)*t/2,(s.y+1)*t/2),n.rotate(s.angle*Math.PI/180),n.font=`${r}px ${s.font==="sans"?"Microsoft YaHei,sans-serif":"SimSun,serif"}`,n.textAlign="center",n.textBaseline="middle";let a=s.vertical?Array.from(s.text):[s.text];for(let o=0;o<a.length;o++){let l=s.vertical?(o-(a.length-1)/2)*r*1.15:0;i||(n.fillStyle="rgba(255,235,195,.8)",n.fillText(a[o],1.2,l+1.5)),n.fillStyle=i?"#555":"#4a2617",n.fillText(a[o],0,l)}n.restore()}function kp(n,e=384,t=null){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,e,e),s.lineCap="round",s.lineJoin="round";for(let c of n)lc(s,c.points,e),s.strokeStyle=`rgb(${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)})`,s.lineWidth=c.width*e/2,s.stroke();Op(s,t,e,{height:!0});let r=s.getImageData(0,0,e,e).data,a=document.createElement("canvas");a.width=a.height=e;let o=a.getContext("2d"),l=o.createImageData(e,e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let d=(p,E)=>r[(xt(E,0,e-1)*e+xt(p,0,e-1))*4]/255,u=(d(h-1,c)-d(h+1,c))*1.8,f=(d(h,c-1)-d(h,c+1))*1.8,g=1,_=Math.hypot(u,f,g),m=(c*e+h)*4;l.data[m]=(u/_*.5+.5)*255,l.data[m+1]=(f/_*.5+.5)*255,l.data[m+2]=(g/_*.5+.5)*255,l.data[m+3]=255}return o.putImageData(l,0,0),a}function Fa(n,e,t){let i=hs(n),s=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){let o=i[r],l=i[a];o[1]>t!=l[1]>t&&e<(l[0]-o[0])*(t-o[1])/(l[1]-o[1])+o[0]&&(s=!s)}return s}function Ii(n,e,t,i,{texture:s,compare:r=100,padding:a=.18,background:o=!0,cursor:l=null}={}){if(o){n.clearRect(0,0,e,t),n.fillStyle="#111612",n.fillRect(0,0,e,t);let p=n.createRadialGradient(e*.5,t*.45,0,e*.5,t*.5,e*.55);p.addColorStop(0,"#c69a6520"),p.addColorStop(1,"#11161200"),n.fillStyle=p,n.fillRect(0,0,e,t)}s=s||yr(i);let c=Math.min(e*(1-a*2),t*(1-a*2)),h=e/2,d=t/2+t*.02,u=c/2,f={x:h-u,y:d-u,w:c,h:c};r<100&&(n.save(),n.beginPath(),n.rect(0,0,e*(1-r/100),t),n.clip(),n.globalAlpha=.85,n.drawImage(yr(i,{grooves:!1,size:512}),f.x,f.y,c,c),n.restore()),n.save(),n.beginPath(),n.rect(e*(1-r/100),0,e,t),n.clip(),n.save(),n.translate(h,d+9),n.scale(u,u),_r(n,i.kind),n.shadowColor="#000b",n.shadowBlur=30/u,n.fillStyle="#0a0d09",n.fill(),n.restore(),n.save(),n.translate(h,d),n.scale(u,u),_r(n,i.kind),n.clip(),n.drawImage(s,-1,-1,2,2);let g=i.light==="right"?1:-1,_=i.polish??.7,m=n.createLinearGradient(g<0?-1:1,-1,g<0?1:-1,1);if(m.addColorStop(0,`rgba(255,243,210,${.18+_*.13})`),m.addColorStop(.38,"rgba(255,240,204,0)"),m.addColorStop(1,"rgba(29,11,3,.34)"),n.fillStyle=m,n.fillRect(-1,-1,2,2),_r(n,i.kind),n.lineWidth=.065,n.strokeStyle="#f3d19a77",n.stroke(),_r(n,i.kind),n.lineWidth=.018,n.strokeStyle="#fff2cb9a",n.stroke(),_>.15){n.save(),n.rotate(-.65*g);let p=n.createLinearGradient(-.5,0,.5,0);p.addColorStop(0,"#fff0"),p.addColorStop(.45,`rgba(255,255,238,${_*.23})`),p.addColorStop(.52,`rgba(255,255,238,${_*.35})`),p.addColorStop(.64,"#fff0"),n.fillStyle=p,n.fillRect(-1.5,-1.5,3,3),n.restore()}if(n.restore(),n.restore(),r<100){let p=e*(1-r/100);n.strokeStyle="#e6c794",n.lineWidth=1,n.beginPath(),n.moveTo(p,80),n.lineTo(p,t-60),n.stroke(),n.fillStyle="#e6c794",n.beginPath(),n.arc(p,t/2,13,0,Math.PI*2),n.fill(),n.fillStyle="#152016",n.font="12px sans-serif",n.textAlign="center",n.fillText("↔",p,t/2+4),n.textAlign="left"}if(l&&i.step===2){let p=h+l.x*u,E=d+l.y*u;n.strokeStyle="#ffe0a8",n.lineWidth=1,n.beginPath(),n.arc(p,E,Math.max(5,i.toolWidth*u/2),0,Math.PI*2),n.stroke()}return f}function Bp(n,e=.018){let t=[],i=s=>t.push({width:e,points:s});if(n==="leaf"){i([[-.8,0],[.82,0]]);for(let s=0;s<5;s++){let r=-.6+s*.25;i([[r,0],[r+.22,-.3*(1-Math.abs(r))-.08]]),i([[r,0],[r+.22,.28*(1-Math.abs(r))+.07]])}}else if(n==="fruit"){for(let s of[-1,1]){let r=[];for(let a=0;a<=30;a++){let o=-.58+a/30*1.22;r.push([s*(.16+.15*Math.sin(a/30*Math.PI)),o])}i(r)}i([[-.28,-.6],[0,-.7],[.28,-.6]])}else{i([[-.8,.49],[-.25,-.41],[.03,.04]]),i([[.18,.23],[.47,-.57],[.8,.49]]);for(let s=0;s<3;s++)i([[-.62,.38+s*.07],[.65,.38+s*.07]])}return t}us();var Su={fruit:"秋实",leaf:"一叶",mountain:"远山",round:"团圆",drop:"凝露",heart:"心意",custom:"手绘成器"};function zp(n){return n==="bands"?"Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n==="nodule"?"James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"用户导入照片":"程序化教学样本"}function Hp(n){let{state:e,experience:t,$:i,$$:s,toast:r,download:a}=n,o=[["patterns","✧","纹样百宝箱","8种纹样，自由摆放"],["lettering","印","刻字落款","写下名字与心意"],["styling","◈","文创搭配","挂件、摆件与氛围"],["inspiration","卜","灵感抽签","换一种构思出发"],["comparison","▥","方案对比","把喜欢的放在一起"],["poster","▣","纪念海报","带走自己的设计"]];i(".craft-stepper").insertAdjacentHTML("afterend",`<div class="playground"><div class="playground-heading"><span>玩法百宝箱</span><small>再给作品一点自己的想法</small></div><div class="playground-grid">${o.map(([R,L,I,$])=>`<button id="open-${R}"><i>${L}</i><span>${I}<small>${$}</small></span><b>↗</b></button>`).join("")}</div></div>`);function l(R,L,I,$){let te=document.createElement("dialog");return te.id=R,te.className="play-dialog",te.innerHTML=`<div class="dialog-heading"><div><p class="eyebrow">YOUR CREATIVE PLAYGROUND</p><h2>${L}</h2></div><button class="icon-button" data-close-play aria-label="关闭">×</button></div><p class="play-dialog-intro">${I}</p>${$}`,document.body.append(te),te.querySelector("[data-close-play]").onclick=()=>te.close(),te}let c=l("pattern-dialog","让一笔纹样，成为你的点睛。","所有纹样均为本工坊原创装饰示意。选择后可在作品上拖动，满意再刻入。",`<div class="play-editor"><div><canvas id="pattern-preview" width="840" height="640" aria-label="拖动纹样调整位置"></canvas><p id="pattern-feedback" class="hint" role="status"></p></div><div class="play-editor-controls"><div id="pattern-library" class="pattern-library">${xu.map(R=>`<button data-pattern="${R.id}" title="${R.caption}"><canvas width="100" height="74"></canvas><span>${R.name}</span></button>`).join("")}</div><label class="field-label" for="pattern-size">纹样大小 <output id="pattern-size-value">75%</output></label><input id="pattern-size" type="range" min="20" max="130" value="75"><label class="field-label" for="pattern-angle">纹样角度 <output id="pattern-angle-value">0°</output></label><input id="pattern-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="pattern-x" type="range" min="-85" max="85" value="0" aria-label="纹样水平位置"></label><label>Y <input id="pattern-y" type="range" min="-85" max="85" value="0" aria-label="纹样垂直位置"></label></div><button id="center-pattern" class="text-button">居中摆放</button><button id="apply-pattern" class="primary full">刻入这组纹样 ＋</button><p class="hint">超出作品的部分会裁去。应用后仍可用刻线撤销、重做或擦除。</p></div></div>`),h="blossom",d={x:0,y:0,scale:.75,angle:0},u;function f(){return bu(rc(h,d,e.toolWidth,e.depth),(...R)=>Fa(e.kind,...R))}function g(){let R=i("#pattern-preview"),L=f(),I={...e,strokes:[...e.strokes,...L]};u=Ii(R.getContext("2d"),R.width,R.height,I,{texture:yr(I,{size:640}),padding:.1}),s("[data-pattern]").forEach($=>$.classList.toggle("selected",$.dataset.pattern===h)),i("#pattern-feedback").textContent=`${xu.find($=>$.id===h).name} · ${L.length}段可见刻线 · 拖动摆放，滑杆缩放与旋转`,i("#apply-pattern").disabled=!L.length,i("#pattern-x").value=Math.round(d.x*100),i("#pattern-y").value=Math.round(d.y*100)}for(let R of s("[data-pattern]")){let L=R.querySelector("canvas").getContext("2d");L.strokeStyle="#d9bc8b",L.lineWidth=1.4;for(let I of rc(R.dataset.pattern))L.beginPath(),I.points.forEach(([$,te],se)=>se?L.lineTo(50+$*45,37+te*36):L.moveTo(50+$*45,37+te*36)),L.stroke();R.onclick=()=>{h=R.dataset.pattern,g()}}i("#open-patterns").onclick=()=>{e.image&&(t.setStep(2),c.showModal(),g())},i("#pattern-size").oninput=R=>{d.scale=Number(R.target.value)/100,i("#pattern-size-value").value=R.target.value+"%",g()},i("#pattern-angle").oninput=R=>{d.angle=Number(R.target.value),i("#pattern-angle-value").value=R.target.value+"°",g()};for(let R of["x","y"])i("#pattern-"+R).oninput=L=>{d[R]=Number(L.target.value)/100,g()};i("#center-pattern").onclick=()=>{d.x=d.y=0,g()};function _(R,L,I){let $=!1,te=null,se=q=>{let fe=R.getBoundingClientRect(),be=L();return{x:((q.clientX-fe.left)/fe.width*R.width-be.x)/be.w*2-1,y:((q.clientY-fe.top)/fe.height*R.height-be.y)/be.h*2-1}};R.onpointerdown=q=>{$=!0,te=se(q),R.setPointerCapture(q.pointerId),I(te,!0)},R.onpointermove=q=>{$&&I(se(q),!1)},R.onpointerup=R.onpointercancel=()=>$=!1}_(i("#pattern-preview"),()=>u,R=>{d.x=xt(R.x,-.85,.85),d.y=xt(R.y,-.85,.85),g()}),i("#apply-pattern").onclick=()=>{let R=f();R.length&&(t.editStrokes(L=>L.push(...R)),c.close(),r("纹样已刻入作品，可以继续添加、擦除或撤销。"))};let m=l("lettering-dialog","给这件作品，留一句心意。","在预览上拖动落款，调整字形、大小和角度。确定后会进入二维作品与三维刻痕。",'<div class="play-editor"><canvas id="lettering-preview" width="840" height="640" aria-label="拖动落款调整位置"></canvas><div class="play-editor-controls"><label class="field-label" for="inscription-text">写什么？最多8字</label><input id="inscription-text" type="text" maxlength="8" placeholder="例如：阜新 · 初见"><label class="field-label" for="inscription-font">落款字形</label><select id="inscription-font"><option value="serif">宋体 · 书卷感</option><option value="sans">黑体 · 简洁</option></select><label class="check"><input id="inscription-vertical" type="checkbox">竖排落款</label><label class="field-label" for="inscription-size">字的大小</label><input id="inscription-size" type="range" min="8" max="35" value="18"><label class="field-label" for="inscription-angle">落款角度</label><input id="inscription-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="inscription-x" type="range" min="-85" max="85" value="0" aria-label="落款水平位置"></label><label>Y <input id="inscription-y" type="range" min="-85" max="85" value="32" aria-label="落款垂直位置"></label></div><button id="apply-lettering" class="primary full">把心意刻进作品 →</button><button id="remove-lettering" class="text-button">清除当前落款</button><p class="hint">落款仅保留作品轮廓内的部分。可随时重新打开修改，或关闭弹窗取消本次修改。</p></div></div>'),p,E;function v(){let R=i("#lettering-preview"),L={...e,inscription:p};E=Ii(R.getContext("2d"),R.width,R.height,L,{padding:.1}),i("#inscription-x").value=Math.round(p.x*100),i("#inscription-y").value=Math.round(p.y*100)}i("#open-lettering").onclick=()=>{if(e.image){t.setStep(2),p=structuredClone(e.inscription||{text:"阜新",x:0,y:.32,size:.18,angle:0,font:"serif",vertical:!1});for(let R of["text","font","size","angle","vertical"]){let L=i("#inscription-"+R);R==="vertical"?L.checked=p[R]:L.value=R==="size"?Math.round(p.size*100):p[R]}m.showModal(),v()}};for(let R of["text","font","size","angle","vertical","x","y"])i("#inscription-"+R).oninput=L=>{p[R]=R==="vertical"?L.target.checked:R==="text"?Array.from(L.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,8).join(""):R==="font"?L.target.value:Number(L.target.value)/(R==="size"||R==="x"||R==="y"?100:1),v()};_(i("#lettering-preview"),()=>E,R=>{p.x=xt(R.x,-.85,.85),p.y=xt(R.y,-.85,.85),v()}),i("#apply-lettering").onclick=()=>{e.inscription=p.text.trim()?structuredClone(p):null,t.refresh(),m.close(),r("落款已留在作品上，三维刻痕也会同步更新。")},i("#remove-lettering").onclick=()=>{e.inscription=null,t.refresh(),m.close(),r("已清除落款。")},i(".finish-controls").insertAdjacentHTML("afterbegin",'<details id="styling-panel" class="styling-panel"><summary>◈ 文创搭配 · 换个方式欣赏</summary><label class="field-label" for="display-style">成品搭配</label><select id="display-style"><option value="stone">素石 · 只看作品</option><option value="pendant">绳系挂件</option><option value="stand">展台摆件</option></select><label class="field-label" for="cord-color">挂绳颜色</label><select id="cord-color"><option value="cinnabar">朱砂红</option><option value="ink">松烟黑</option><option value="jade">竹青绿</option></select><label class="field-label" for="display-backdrop">展示氛围</label><select id="display-backdrop"><option value="ink">墨色工坊</option><option value="paper">暖纸展厅</option><option value="night">夜色藏蓝</option></select><p class="hint">搭配为文创外观示意，可随3D截图保存。</p></details>');function y(){let R=e.presentation;i("#studio").dataset.backdrop=R.backdrop,i("#display-style").value=R.style,i("#display-backdrop").value=R.backdrop,i("#cord-color").value=R.cord,i("#cord-color").disabled=R.style!=="pendant",i("#work-title").value=e.workTitle||""}i("#open-styling").onclick=()=>{t.setStep(3),i("#styling-panel").open=!0,y(),i("#styling-panel").scrollIntoView({behavior:"smooth",block:"center"})};for(let[R,L]of[["display-style","style"],["cord-color","cord"],["display-backdrop","backdrop"]])i("#"+R).onchange=I=>{e.presentation={...e.presentation,[L]:I.target.value},y(),t.refresh()};i(".heading-actions").insertAdjacentHTML("beforebegin",'<div class="work-title"><label for="work-title">为作品起名</label><input id="work-title" maxlength="24" placeholder="例如：一叶知秋" aria-label="作品名称，最多24字"></div>'),i("#work-title").oninput=R=>e.workTitle=Array.from(R.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,24).join("");let C=[{id:"moon",title:"月下团圆",desc:"圆牌 · 水波 · 夜色挂件",kind:"round",pattern:"waves",text:"团圆",style:"pendant",backdrop:"night"},{id:"mountain",title:"山海有约",desc:"山形 · 朝阳 · 暖纸展台",kind:"mountain",pattern:"sunrise",text:"山海",style:"stand",backdrop:"paper"},{id:"leaf",title:"竹影清风",desc:"叶形 · 竹影 · 竹青挂绳",kind:"leaf",pattern:"bamboo",text:"清风",style:"pendant",backdrop:"ink"},{id:"heart",title:"心上繁花",desc:"心形 · 五瓣花 · 温柔落款",kind:"heart",pattern:"blossom",text:"如愿",style:"stone",backdrop:"paper"}],A=l("inspiration-dialog","借一份灵感，再改成自己的。","选择一份配方，会替换当前外形、刻线与落款；原料保持不变，可用下方按钮撤回。",`<div class="recipe-grid">${C.map((R,L)=>`<button data-recipe="${R.id}"><span>0${L+1}</span><strong>${R.title}</strong><small>${R.desc}</small><b>试试这个 ↗</b></button>`).join("")}</div><button id="random-recipe" class="primary compact">帮我抽一份 ✧</button><button id="undo-inspiration" class="text-button" disabled>撤回上次灵感</button><p class="hint">基于原创设计配方组合，不冒充传统纹样或生成式AI结果。</p>`),D=null,F=!1;i("#open-inspiration").onclick=()=>A.showModal();async function S(R){if(!(!e.image||F)){F=!0;try{D=n.projectData(),i("#undo-inspiration").disabled=!1,e.kind=R.kind,i("#motif").value=R.kind,e.pose.scale=.3,e.strokes=bu(rc(R.pattern,{scale:.68,y:-.05},.016,.65),(...L)=>Fa(e.kind,...L)),e.inscription={text:R.text,x:0,y:.3,size:.14,angle:0,font:"serif",vertical:!1},e.workTitle=R.title,e.presentation={style:R.style,backdrop:R.backdrop,cord:R.id==="leaf"?"jade":"cinnabar"},e.polish=.86,await n.optimize(),t.clearHistory(),y(),t.setStep(3),A.close(),r("灵感已展开，可以回到刻线继续修改；重新打开灵感抽签可撤回。")}finally{F=!1}}}s("[data-recipe]").forEach(R=>R.onclick=()=>S(C.find(L=>L.id===R.dataset.recipe))),i("#random-recipe").onclick=()=>S(C[Math.floor(Math.random()*C.length)]),i("#undo-inspiration").onclick=async()=>{if(!D)return;let R=D;D=null,await n.restoreProject(R),i("#undo-inspiration").disabled=!0,A.close()};let b=l("comparison-dialog","把不同的构思，放在一起看。","最多暂存三份当前设计。可以继续修改后再加入，点击任意方案回到创作。关闭弹窗不会清空；刷新页面后会清空。",'<div class="comparison-actions"><button id="add-comparison" class="primary compact">加入当前方案 ＋</button><button id="export-comparison" class="text-button" disabled>导出对比图 ↗</button></div><div id="comparison-cards" class="comparison-cards"></div>'),U=[];function H(){let R=i("#comparison-cards");if(R.replaceChildren(),i("#export-comparison").disabled=!U.length,!U.length){let L=document.createElement("p");L.className="comparison-empty",L.textContent="先加入当前方案，再试一套纹样或灵感配方，回来比较。",R.append(L);return}U.forEach((L,I)=>{let $=document.createElement("article"),te=document.createElement("img"),se=document.createElement("h3"),q=document.createElement("p"),fe=document.createElement("button"),be=document.createElement("button");te.src=L.image,te.alt=L.title,se.textContent=L.title,q.textContent=`色区匹配 ${(L.metrics.fit*100).toFixed(1)}% · ${L.project.strokes.length}段刻线`,fe.textContent="从这份继续编辑 ↗",fe.className="feature-button",fe.onclick=async()=>{await n.restoreProject(L.project),b.close()},be.textContent="移出对比",be.className="text-button small",be.onclick=()=>{U.splice(I,1),H()},$.append(te,se,q,fe,be),R.append($)})}i("#open-comparison").onclick=()=>{b.showModal(),H()},i("#add-comparison").onclick=()=>{if(!e.image)return;let R=document.createElement("canvas");if(R.width=640,R.height=480,t.renderArt(R.getContext("2d"),640,480),U.length===3){r("已有三份方案，请先移出一份，再加入新设计。");return}U.push({project:n.projectData(),metrics:{...e.layout},image:R.toDataURL("image/jpeg",.88),title:e.workTitle||Su[e.kind]+" · 方案 "+(U.length+1)}),H()},i("#export-comparison").onclick=async()=>{let R=document.createElement("canvas");R.width=1500,R.height=1e3;let L=R.getContext("2d");L.fillStyle="#151917",L.fillRect(0,0,1500,1e3),L.fillStyle="#d9bc8b",L.font="40px SimSun,serif",L.fillText("石里有境 · 我的构思对照",70,90),L.font="18px sans-serif",L.fillStyle="#a2a69b",L.fillText("同一段创作，不同的可能。",70,130);let I=1360/U.length;for(let $=0;$<U.length;$++){let te=U[$],se=new Image;se.src=te.image,await se.decode();let q=70+$*I,fe=I-20,be=Math.min(fe,560);L.drawImage(se,q+(fe-be)/2,220,be,be*.75),L.fillStyle="#e9e5d9",L.font="26px SimSun,serif",L.fillText(te.title,q,710,fe),L.fillStyle="#a2a69b",L.font="16px sans-serif",L.fillText(`匹配 ${(te.metrics.fit*100).toFixed(1)}% · ${te.project.strokes.length}段刻线`,q,755,fe),L.font="12px sans-serif",L.fillText(zp(te.project.sample),q,800,fe)}L.font="15px sans-serif",L.fillStyle="#a2a69b",L.fillText("数字创意示意 · 来源与许可见 commons.wikimedia.org · Hannes Grobe样本衍生图适用CC BY-SA 2.5",70,950),R.toBlob($=>{$&&a($,"石里有境-方案对比.png")})};let X=l("poster-dialog","把这一次相遇，做成纪念。","用你的当前作品制作纪念海报，名称可在创作页修改。海报保留素材来源与数字设计说明。",'<div class="poster-layout"><canvas id="poster-preview" width="1000" height="1400" aria-label="纪念海报预览"></canvas><div><div class="poster-themes"><button data-poster-theme="paper">留白手札<small>暖纸 · 朱印 · 留白</small></button><button data-poster-theme="night">星夜藏石<small>藏蓝 · 星光 · 金线</small></button><button data-poster-theme="earth">山野雅集<small>墨绿 · 山线 · 手作</small></button></div><button id="download-poster" class="primary full">下载纪念海报 ↗</button><p class="hint">1000 × 1400 PNG，可保存、打印或用于比赛过程展示。作品图采用正面成器效果；文创搭配请用3D截图保存。</p></div></div>'),W="paper";function Y(){let R=i("#poster-preview"),L=R.getContext("2d"),I={paper:["#e9dfca","#24352d","#a33e2f"],night:["#101e31","#e9d7ac","#9b804c"],earth:["#20342a","#e7dbc3","#c89567"]}[W];L.fillStyle=I[0],L.fillRect(0,0,1e3,1400),L.strokeStyle=I[2],L.lineWidth=1,L.strokeRect(42,42,916,1316),L.fillStyle=I[2],L.font="18px sans-serif",L.fillText("石里有境 / FUXIN AGATE ATELIER",84,110),L.fillStyle=I[1],L.font="64px SimSun,serif";let $=e.workTitle||Su[e.kind]+" · 石中有境",te=Array.from($);if(L.fillText(te.slice(0,12).join(""),80,220,840),te.length>12&&(L.font="40px SimSun,serif",L.fillText(te.slice(12).join(""),84,280,840)),L.font="20px sans-serif",L.fillText("观天然纹色，留一份自己的构思。",84,330),L.save(),L.translate(70,380),Ii(L,860,760,e,{background:!1,padding:.12}),L.restore(),W==="night"){L.fillStyle="#d9bc8b66";for(let se=0;se<36;se++){let q=80+se*163%840,fe=380+se*251%700;L.beginPath(),L.arc(q,fe,se%3===0?2:1,0,Math.PI*2),L.fill()}}else if(W==="earth"){L.strokeStyle="#bda67c55";for(let se=0;se<3;se++)L.beginPath(),L.moveTo(70,1110+se*12),L.lineTo(290,1030+se*12),L.lineTo(480,1085+se*12),L.lineTo(740,1010+se*12),L.lineTo(930,1100+se*12),L.stroke()}L.fillStyle=I[2],L.fillRect(82,1160,54,54),L.fillStyle=I[0],L.font="26px SimSun,serif",L.fillText("境",96,1197),L.fillStyle=I[1],L.font="20px sans-serif",L.fillText("辽宁 · 阜新 / 玛瑙文化数字创作纪念",160,1180),L.font="16px sans-serif",L.fillText(new Date().toLocaleDateString("zh-CN")+" · 纹样、落款与外形来自本次设计",160,1210),L.font="13px sans-serif",L.fillText("原料："+zp(e.sample),84,1272,830),L.fillText(e.sample==="bands"?"commons.wikimedia.org · 衍生图片适用 CC BY-SA 2.5":e.sample==="nodule"?"commons.wikimedia.org · 原图许可 CC BY 2.0":"原料为程序化教学样本或用户自有图片",84,1300,830),L.fillText("数字创意示意，非真实加工结果。",84,1328),s("[data-poster-theme]").forEach(se=>se.classList.toggle("selected",se.dataset.posterTheme===W))}return i("#open-poster").onclick=()=>{e.image&&(X.showModal(),Y())},s("[data-poster-theme]").forEach(R=>R.onclick=()=>{W=R.dataset.posterTheme,Y()}),i("#download-poster").onclick=()=>i("#poster-preview").toBlob(R=>{R&&a(R,"石里有境-"+(e.workTitle||Su[e.kind])+"-纪念海报.png")}),document.addEventListener("agate-craft-reset",y),{sync:y,closeDialogs(){for(let R of[c,m,A,b,X])R.close()},get comparisons(){return U}}}us();function cc(n){if(!Array.isArray(n)||n.length<5||n.length>2e3)throw Error("请画出至少五个点的完整外形。");let e=[];for(let f of n){if(!Array.isArray(f)||f.length!==2||!f.every(g=>Number.isFinite(g)&&Math.abs(g)<100))throw Error("轮廓坐标无效。");(!e.length||Math.hypot(f[0]-e.at(-1)[0],f[1]-e.at(-1)[1])>.015)&&e.push([...f])}e.length>5&&Math.hypot(e[0][0]-e.at(-1)[0],e[0][1]-e.at(-1)[1])<.06&&e.pop();let t=e.filter((f,g)=>g%Math.max(1,Math.ceil(e.length/160))===0);if(t.length<5)throw Error("轮廓太小，请画大一些。");let i=(f,g,_)=>(g[0]-f[0])*(_[1]-f[1])-(g[1]-f[1])*(_[0]-f[0]),s=(f,g,_)=>Math.abs(i(f,g,_))<1e-8&&_[0]>=Math.min(f[0],g[0])-1e-8&&_[0]<=Math.max(f[0],g[0])+1e-8&&_[1]>=Math.min(f[1],g[1])-1e-8&&_[1]<=Math.max(f[1],g[1])+1e-8;for(let f=0;f<t.length;f++)for(let g=f+2;g<t.length;g++){if(f===0&&g===t.length-1)continue;let _=t[f],m=t[(f+1)%t.length],p=t[g],E=t[(g+1)%t.length];if(i(_,m,p)*i(_,m,E)<0&&i(p,E,_)*i(p,E,m)<0||s(_,m,p)||s(_,m,E)||s(p,E,_)||s(p,E,m))throw Error("线条有交叉或重叠，请画一个不交叉的闭合外形。")}let r=t.map(f=>f[0]),a=t.map(f=>f[1]),o=Math.min(...r),l=Math.max(...r),c=Math.min(...a),h=Math.max(...a),d=Math.max(l-o,h-c),u=0;if(t.forEach((f,g)=>{let _=t[(g+1)%t.length];u+=f[0]*_[1]-_[0]*f[1]}),d<.15||Math.abs(u)<d*d*.08)throw Error("轮廓面积太小，请画一个有宽度的外形。");return t.map(([f,g])=>[(f-(o+l)/2)/d*1.8,(g-(c+h)/2)/d*1.8])}function Vp({state:n,experience:e,$:t,$$:i,toast:s,getDrawRect:r,download:a}){t("#motif").insertAdjacentHTML("beforeend",'<option value="drop">凝露 · 水滴</option><option value="round">团圆 · 圆牌</option><option value="heart">心意 · 心形</option><option value="custom" disabled>我的手绘外形</option>'),t("#motif").insertAdjacentHTML("afterend",'<button id="draw-outline" class="feature-button">✎ 自己画一个外形</button>'),t("#palette").insertAdjacentHTML("afterend",'<button id="pick-color" class="feature-button" aria-pressed="false">⌕ 放大镜选色</button><p class="hint">开启后，移动到原料上放大纹理，点击选中对应色区。</p>'),t("#tool-width").insertAdjacentHTML("afterend",'<div class="feature-group"><label class="field-label" for="line-mode">用什么笔触？</label><select id="line-mode"><option value="free">自由刻线</option><option value="straight">直线刻刀</option></select><label class="check"><input id="symmetric-lines" type="checkbox">左右对称刻线</label><label class="field-label" for="cut-depth">刻痕深浅 <output id="cut-depth-value">60%</output></label><input id="cut-depth" type="range" min="10" max="100" value="60"><p class="hint">粗细、深浅与对称作用于接下来画的笔触。</p><button id="stamp-flower" class="feature-button">✧ 刻一朵小花</button><p class="hint">小花位于中央，可撤销或擦除。图案为原创装饰示意。</p></div>'),t("#polish").previousElementSibling.insertAdjacentHTML("beforebegin",'<label class="field-label" for="piece-thickness">作品厚度 <output id="thickness-value">24</output></label><input id="piece-thickness" type="range" min="8" max="65" value="24"><p class="hint">数字造型比例；切换侧面可观察厚度。</p><div class="view-actions"><button data-orientation="front">正面</button><button data-orientation="side">侧面</button><button data-orientation="back">背面</button></div><button id="spin-piece" class="feature-button" aria-pressed="false">▷ 自动环绕欣赏</button>'),t("#export-finished").insertAdjacentHTML("afterend",'<button id="capture-3d" class="feature-button">▣ 保存当前3D视角</button>');let o=document.createElement("div");o.id="color-loupe",o.hidden=!0,o.innerHTML='<canvas width="140" height="100"></canvas><span></span>',t("#canvas-stage").append(o);let l=!1;function c(v){l=v,t("#pick-color").setAttribute("aria-pressed",String(v)),t("#pick-color").textContent=v?"× 结束选色":"⌕ 放大镜选色",o.hidden=!v,t("#design-canvas").style.cursor=v?"crosshair":"grab"}t("#pick-color").onclick=()=>{e.setView("color"),c(!l)};let h=t("#design-canvas");function d(v,y=!1){if(!l||n.step!==1||n.view!=="color"){o.hidden=!0;return}let C=h.getBoundingClientRect(),A=r(),D=v.clientX-C.left,F=v.clientY-C.top,S=(D-A.x)/A.w,b=(F-A.y)/A.h;if(S<0||S>=1||b<0||b>=1){o.hidden=!0;return}v.stopImmediatePropagation(),y&&v.preventDefault();let U=n.analysis,H=Math.floor(b*U.height)*U.width+Math.floor(S*U.width),X=U.labels[H];o.hidden=!1,o.style.left=xt(D+22,8,C.width-156)+"px",o.style.top=xt(F-130,75,C.height-150)+"px";let W=o.querySelector("canvas").getContext("2d");W.imageSmoothingEnabled=!1,W.fillStyle="#121812",W.fillRect(0,0,140,100);let Y=n.image.width*.12;if(W.drawImage(n.image,S*n.image.width-Y*.7,b*n.image.height-Y*.5,Y*1.4,Y,0,0,140,100),W.strokeStyle="#fff1c4",W.beginPath(),W.moveTo(60,50),W.lineTo(80,50),W.moveTo(70,40),W.lineTo(70,60),W.stroke(),o.querySelector("span").textContent=X>=0?`色区 ${X+1} · ${U.colors[X].hex}`:"背景区域",y){if(X<0){s("这里是背景，请在原料内部选色。");return}document.querySelector(`[data-color="${X}"]`)?.click(),c(!1),s("已选中这个位置的纹色，可继续借色构形。")}}h.addEventListener("pointermove",v=>d(v),!0),h.addEventListener("pointerdown",v=>d(v,!0),!0),h.addEventListener("pointerleave",()=>o.hidden=!0),document.addEventListener("keydown",v=>{v.key==="Escape"&&c(!1)}),new MutationObserver(()=>{(n.step!==1||n.view!=="color")&&c(!1)}).observe(t("#studio"),{attributes:!0,attributeFilter:["data-craft-step","data-view"]}),t("#line-mode").onchange=v=>{n.lineMode=v.target.value,t("#engrave-pen").click()},t("#symmetric-lines").onchange=v=>n.symmetry=v.target.checked,t("#cut-depth").oninput=v=>{n.depth=Number(v.target.value)/100,t("#cut-depth-value").value=v.target.value+"%"},t("#stamp-flower").onclick=()=>e.editStrokes(v=>{for(let y=0;y<5;y++){let C=[],A=y*Math.PI*2/5;for(let D=0;D<=32;D++){let F=D/32*Math.PI*2,S=.13+.12*Math.cos(F);C.push([Math.cos(A)*S-Math.sin(A)*Math.sin(F)*.07,Math.sin(A)*S+Math.cos(A)*Math.sin(F)*.07])}v.push({width:n.toolWidth,depth:n.depth,points:C})}}),t("#piece-thickness").oninput=v=>{n.thickness=Number(v.target.value)/100,t("#thickness-value").value=v.target.value,e.refresh()},i("[data-orientation]").forEach(v=>v.onclick=()=>{e.getScene()?.setOrientation(v.dataset.orientation),t("#spin-piece").setAttribute("aria-pressed","false"),t("#spin-piece").textContent="▷ 自动环绕欣赏"}),t("#spin-piece").onclick=()=>{let v=e.getScene();if(!v)return;let y=!v.controls.autoRotate;v.setAuto(y),t("#spin-piece").setAttribute("aria-pressed",String(y)),t("#spin-piece").textContent=y?"Ⅱ 暂停环绕欣赏":"▷ 自动环绕欣赏"},t("#capture-3d").onclick=async()=>{e.setView("preview"),await e.updatePreview();let v=e.getScene();if(!v)return;let y=new Image;y.src=v.capture(),await y.decode();let C=document.createElement("canvas");C.width=y.width,C.height=y.height+88;let A=C.getContext("2d");A.fillStyle="#151917",A.fillRect(0,0,C.width,C.height),A.drawImage(y,0,0),A.fillStyle="#d9bc8b",A.font="14px sans-serif",A.fillText("石里有境 · 数字造型与刻线示意",18,y.height+28),A.fillStyle="#a2a69b",A.font="11px sans-serif";let D=n.sample==="bands"?"Photo: Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n.sample==="nodule"?"Photo: James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n.sample==="custom"?"原料：用户导入照片":"原料：程序化教学样本";A.fillText(D,18,y.height+52),A.fillText(n.sample==="bands"?"commons.wikimedia.org · 衍生图片 CC BY-SA 2.5":n.sample==="nodule"?"commons.wikimedia.org · 署名许可 CC BY 2.0":"数字创作示意 · 真实工艺需工匠核验",18,y.height+72),C.toBlob(F=>{F&&a(F,"石里有境-三维视角.png")})};let u=document.createElement("dialog");u.id="outline-dialog",u.innerHTML='<div class="dialog-heading"><div><p class="eyebrow">DRAW YOUR SHAPE</p><h2>把心里的形，画出来。</h2></div><button id="close-outline" class="icon-button" aria-label="关闭">×</button></div><p class="hint">在下方一笔画出外形，松手会自动连接起点。请避免线条交叉。</p><canvas id="outline-canvas" width="600" height="400" aria-label="用鼠标或触摸一笔画出闭合外形"></canvas><p id="outline-feedback" role="status">例如：一片不规则叶子、一枚鹅卵石、一朵云。</p><div class="outline-actions"><button id="clear-outline" class="text-button">重新画</button><button id="apply-outline" class="primary compact">用这个外形 →</button></div>',document.body.append(u);let f=t("#outline-canvas"),g=f.getContext("2d"),_=[],m=!1;function p(){g.fillStyle="#101611",g.fillRect(0,0,600,400),g.strokeStyle="#ffffff0c",g.lineWidth=1;for(let v=0;v<600;v+=40)g.beginPath(),g.moveTo(v,0),g.lineTo(v,400),g.stroke();for(let v=0;v<400;v+=40)g.beginPath(),g.moveTo(0,v),g.lineTo(600,v),g.stroke();_.length&&(g.beginPath(),_.forEach(([v,y],C)=>C?g.lineTo(v*200+300,(y+1)*200):g.moveTo(v*200+300,(y+1)*200)),m||g.closePath(),g.fillStyle="#d9bc8b1a",g.fill(),g.strokeStyle="#e5c58e",g.lineWidth=2,g.stroke(),g.fillStyle="#e5c58e",g.beginPath(),g.arc(_[0][0]*200+300,(_[0][1]+1)*200,5,0,Math.PI*2),g.fill())}function E(v){let y=f.getBoundingClientRect(),C=[xt(((v.clientX-y.left)/y.width*600-300)/200,-1.49,1.49),xt((v.clientY-y.top)/y.height*2-1,-.99,.99)];_.length<2e3&&(!_.length||Math.hypot(C[0]-_.at(-1)[0],C[1]-_.at(-1)[1])>.012)&&_.push(C),p()}return f.onpointerdown=v=>{_=[],m=!0,f.setPointerCapture(v.pointerId),E(v)},f.onpointermove=v=>{m&&E(v)},f.onpointerup=()=>{m=!1,p(),t("#outline-feedback").textContent="外形已闭合。满意就应用，也可以重新画。"},f.onpointercancel=()=>{m=!1,p()},t("#draw-outline").onclick=()=>{u.showModal(),p()},t("#close-outline").onclick=()=>u.close(),t("#clear-outline").onclick=()=>{_=[],p(),t("#outline-feedback").textContent="画一个新的外形，松手自动闭合。"},t("#apply-outline").onclick=()=>{try{let v=cc(_);oc(v),n.customOutline=v,t('#motif option[value="custom"]').disabled=!1,t("#motif").value="custom",t("#motif").dispatchEvent(new Event("change")),u.close(),s("手绘外形已成为作品轮廓，成器与3D会同步更新。")}catch(v){t("#outline-feedback").textContent=v.message}},{sync(){c(!1),t("#piece-thickness").value=Math.round(n.thickness*100),t("#thickness-value").value=Math.round(n.thickness*100),i("[data-light]").forEach(v=>v.classList.toggle("selected",v.dataset.light===n.light))}}}var rb=["fruit","leaf","mountain","drop","round","heart","custom"];function wu(n){let e=structuredClone(n),t=()=>{throw Error("方案文件不完整或参数超出范围，请使用本工坊导出的方案。")};(!e||e.format!=="agate-project"||![3,4].includes(e.version)||!rb.includes(e.kind)||!["procedural","bands","nodule","custom"].includes(e.sample))&&t();for(let[s,r,a]of[["x",.03,.97],["y",.03,.97],["scale",.08,.42],["angle",-180,180]])(!Number.isFinite(e.pose?.[s])||e.pose[s]<r||e.pose[s]>a)&&t();e.kind==="custom"&&(e.outline=cc(e.outline)),(!Number.isInteger(e.color)||e.color<0||e.color>4||!Number.isFinite(e.polish)||e.polish<0||e.polish>1||!["left","right"].includes(e.light)||!Number.isFinite(e.thickness)||e.thickness<.08||e.thickness>.65)&&t(),(typeof e.removeBackground!="boolean"||!Array.isArray(e.target)||e.target.length>4e4||e.target.length<100||!Number.isInteger(e.targetWidth)||!Number.isInteger(e.targetHeight)||e.targetWidth<1||e.targetHeight<1||e.targetWidth>200||e.targetHeight>200||e.targetWidth*e.targetHeight!==e.target.length||e.target.some(s=>s!==0&&s!==1))&&t(),(!Array.isArray(e.strokes)||e.strokes.length>1e3)&&t();let i=0;for(let s of e.strokes){(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>1e4)&&t(),i+=s.points.length;for(let r of s.points)(!Array.isArray(r)||r.length!==2||r.some(a=>!Number.isFinite(a)||Math.abs(a)>1.1))&&t()}if(i>1e5&&t(),e.sample==="custom"&&(typeof e.sourceImage!="string"||e.sourceImage.length>25e5||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(e.sourceImage))&&t(),e.inscription!=null){let s=e.inscription;(typeof s.text!="string"||Array.from(s.text).length>8||/[\u0000-\u001f]/.test(s.text)||!["serif","sans"].includes(s.font)||typeof s.vertical!="boolean")&&t();for(let[r,a,o]of[["x",-.85,.85],["y",-.85,.85],["size",.08,.35],["angle",-180,180]])(!Number.isFinite(s[r])||s[r]<a||s[r]>o)&&t()}else e.inscription=null;return e.presentation!=null?(!["stone","pendant","stand"].includes(e.presentation.style)||!["ink","paper","night"].includes(e.presentation.backdrop)||!["cinnabar","ink","jade"].includes(e.presentation.cord))&&t():e.presentation={style:"stone",backdrop:"ink",cord:"cinnabar"},e.workTitle!=null&&(typeof e.workTitle!="string"||Array.from(e.workTitle).length>24||/[\u0000-\u001f]/.test(e.workTitle))&&t(),e.workTitle=e.workTitle||"",e}us();function Gp(n){let{$:e,$$:t,state:i}=n;Object.assign(i,{step:0,strokes:[],redoStrokes:[],polish:.72,light:"left",tool:"pen",toolWidth:.018,comparison:100,symmetry:!1,lineMode:"free",depth:.6,thickness:.24,inscription:null,workTitle:"",presentation:{style:"stone",backdrop:"ink",cord:"cinnabar"}});let s=null,r=null,a=null,o={x:0,y:0,w:1,h:1},l=[],c=[],h=0,d=!1,u=0,f=[["先选一块喜欢的纹色","选好原料，接下来让天然颜色参与设计。","开始构形"],["选一抹颜色，把它变成形","拖动或切换构图，右下角直接看到取形后的效果。","确认取形，去刻线"],["亲手画几笔，让它更像你的作品","在作品上拖动刻线，也可以添加筋线后自由修改。","刻线完成，去润色"],["转动它，看看属于你的成器效果","轮廓、纹理与刻线已一起进入三维作品。","导出作品"]];function g(q=768){return yr(i,{size:q})}function _(){let q=e("#peek-canvas");i.image&&Ii(q.getContext("2d"),q.width,q.height,i,{texture:g(384),padding:.1})}function m(){let q=e("#design-canvas"),fe=q.getBoundingClientRect();if(!i.image||fe.width<1||fe.height<1)return;let be=Math.min(devicePixelRatio,2);q.width=Math.round(fe.width*be),q.height=Math.round(fe.height*be);let Ae=q.getContext("2d");Ae.scale(be,be),i.view==="color"?n.drawSource(Ae,fe.width,fe.height,{includeTarget:i.step===1,includeMotif:i.step===1}):o=Ii(Ae,fe.width,fe.height,i,{texture:g(),compare:i.comparison,padding:.16,cursor:a}),_()}async function p(){if(i.image)try{s||(r||(r=n.getSceneModule().then(q=>q.createAgateScene(e("#preview-scene")))),s=await r),s.setTexture(g(),{kind:i.kind,normalCanvas:kp(i.strokes,384,i.inscription),polish:i.polish,light:i.light,thickness:i.thickness,presentation:i.presentation}),s.resize()}catch(q){console.error(q),n.toast("三维暂不可用，已切换成器效果，可继续创作。"),v("carved")}}function E(){i.image&&(e("#stroke-count").textContent=i.strokes.length,e("#undo-stroke").disabled=!l.length,e("#redo-stroke").disabled=!c.length,e("#polish").value=Math.round(i.polish*100),e("#polish-value").value=Math.round(i.polish*100)+"%",i.view==="preview"?(cancelAnimationFrame(u),u=requestAnimationFrame(p)):m(),_())}function v(q){i.view=q,e("#studio").dataset.view=q,e("#design-canvas").hidden=q==="preview",e("#preview-scene").hidden=q!=="preview";for(let[be,Ae]of[["view-color","color"],["view-carved","carved"],["view-preview","preview"]])e("#"+be).classList.toggle("selected",q===Ae);e("#toggle-overlay").disabled=q!=="color"||i.step!==1,e("#canvas-mode-label").textContent=q==="preview"?"YOUR SHAPE · YOUR TEXTURE":q==="carved"?"SHAPE · ENGRAVE · POLISH":"READ THE COLOR";let fe=q==="preview"?"拖动转动作品 · 滚轮缩放 · 观察轮廓厚度与刻线":i.step===2?"在作品上拖动刻线 · 使用上方按钮撤销或擦线":i.step===1&&q==="color"?"拖动取形 · 滚轮缩放 · Shift＋滚轮旋转":i.step===1?"拖动改变取色位置 · 回到原料查看构图":i.step===0?"选择喜欢的原料，再点击“开始构形”":"滑动下方对比，观察局部原料与成器的变化";e("#canvas-instruction").textContent=fe,e("#canvas-stage").classList.toggle("carving",i.step===2&&q==="carved"),q==="preview"?p():requestAnimationFrame(m)}function y(q){i.step=xt(q,0,3),e("#studio").dataset.craftStep=i.step,t(".craft-stepper [data-craft-step]").forEach(be=>{let Ae=Number(be.dataset.craftStep);be.classList.toggle("active",Ae===i.step),be.classList.toggle("done",Ae<i.step),be.setAttribute("aria-current",Ae===i.step?"step":"false")}),e("#work-stage-badge").textContent=["观料","借色构形","亲手刻线","润色成器"][i.step]+" · 0"+(i.step+1)+" / 04",e("#step-goal").textContent=f[i.step][0],e("#step-tip").textContent=f[i.step][1],e("#next-step").innerHTML=f[i.step][2]+" <span>→</span>",e("#previous-step").disabled=i.step===0,e("#context-title").textContent=i.step===2?"留下你的刻线":"纹色与笔触",e("#context-copy").textContent=i.step===2?"从一条线开始。沿着纹理，试着给叶片添叶脉、给山形添层次。":"你所选的原料、取形位置和手绘刻线共同构成这件数字作品。",v(i.step<=1?"color":i.step===2?"carved":"preview"),E();let fe=e("#canvas-stage");matchMedia("(prefers-reduced-motion: reduce)").matches||fe.animate([{opacity:.5,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:320,easing:"ease-out"})}function C(q=!0){i.strokes=[],l=[],c=[],i.inscription=null,i.workTitle="",i.polish=.72,i.comparison=100,e("#compare").value=100;let fe=document.createElement("img");fe.src=i.sample==="procedural"?n.samples[0].thumb:i.image?.src||"",fe.alt="当前选择的原料";let be=document.createElement("p");be.textContent=e("#canvas-sample-name").textContent,e("#material-mini").replaceChildren(fe,be),q?y(0):E(),document.dispatchEvent(new Event("agate-craft-reset"))}function A(){return structuredClone(i.strokes)}function D(){l.push(A()),l.length>80&&l.shift(),c=[]}function F(){l.length&&(c.push(A()),i.strokes=l.pop(),E())}function S(){c.length&&(l.push(A()),i.strokes=c.pop(),E())}function b(){D(),i.strokes.push(...Bp(i.kind,i.toolWidth)),E(),n.toast("筋线已经刻入作品，可继续自由添线或擦除。")}function U(q){i.tool=q,e("#engrave-pen").classList.toggle("selected",q==="pen"),e("#engrave-erase").classList.toggle("selected",q==="erase"),i.view!=="carved"&&v("carved")}function H(q,fe){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let be=e("#carve-particles");for(let Ae=0;Ae<3;Ae++){let w=document.createElement("i");w.style.left=q+"px",w.style.top=fe+"px",w.style.setProperty("--dx",(Math.random()-.5)*25+"px"),w.style.setProperty("--dy",Math.random()*25+"px"),be.appendChild(w),setTimeout(()=>w.remove(),550)}}function X(){d&&(h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范")}e("#studio").addEventListener("pointerdown",q=>{q.target.closest("#play-demo")||X()},{capture:!0});let W=e("#design-canvas"),Y=!1,R=null,L=null,I=!1,$=q=>{let fe=W.getBoundingClientRect();return{x:q.clientX-fe.left,y:q.clientY-fe.top}};function te(q,fe=!1){if(!i.analysis)return;let be=$(q);if(i.step===2&&i.view==="carved"){let Ae=(be.x-o.x)/o.w*2-1,w=(be.y-o.y)/o.h*2-1;if(a={x:Ae,y:w},!Y){m();return}if(!Fa(i.kind,Ae,w)){L&&(L=null);return}if(i.tool==="pen"){L||(I||(D(),I=!0),L={width:i.toolWidth,points:[],depth:i.depth},i.strokes.push(L));let N=L.points.at(-1);(!N||Math.hypot(N[0]-Ae,N[1]-w)>.003)&&(i.lineMode==="straight"&&L.points.length>1&&L.points.splice(1),L.points.push([Ae,w]))}else{let N=i.strokes.filter(J=>!J.points.some(([he,ue])=>Math.hypot(he-Ae,ue-w)<i.toolWidth*3+.04));N.length!==i.strokes.length&&(I||(D(),I=!0),i.strokes=N)}Math.random()>.5&&H(be.x,be.y),E();return}if(!(i.step!==1||!Y)){if(i.view==="color"){let Ae=n.getDrawRect(),w=(be.x-Ae.x)/Ae.w,N=(be.y-Ae.y)/Ae.h;if(w<0||w>1||N<0||N>1)return;if(i.brush==="none")i.pose.x=xt(w,.03,.97),i.pose.y=xt(N,.03,.97);else{let J=i.analysis,he=Math.round(w*J.width),ue=Math.round(N*J.height);for(let re=-4;re<=4;re++)for(let Ve=-4;Ve<=4;Ve++){let P=he+Ve,oe=ue+re;if(Ve*Ve+re*re<=16&&P>=0&&P<J.width&&oe>=0&&oe<J.height){let Q=oe*J.width+P;J.foreground[Q]&&(i.target[Q]=i.brush==="add"?1:0)}}}}else i.view==="carved"&&R&&(i.pose.x=xt(i.pose.x-(be.x-R.x)/o.w*i.pose.scale*2,.03,.97),i.pose.y=xt(i.pose.y-(be.y-R.y)/o.h*i.pose.scale*2,.03,.97));i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout(),R=be}}W.addEventListener("pointerdown",q=>{Y=!0,R=$(q),I=!1,L=null,W.setPointerCapture(q.pointerId),te(q,!0)}),W.addEventListener("pointermove",q=>te(q));for(let q of["pointerup","pointercancel"])W.addEventListener(q,()=>{if(Y&&i.symmetry&&i.step===2&&i.tool==="pen"&&I){let fe=i.strokes.slice(l.at(-1)?.length||0);for(let be of fe)i.strokes.push({...be,points:be.points.map(([Ae,w])=>[-Ae,w])})}Y=!1,L=null,I=!1,E()});W.addEventListener("pointerleave",()=>{a=null,Y||m()}),W.addEventListener("wheel",q=>{i.step===1&&(q.preventDefault(),q.shiftKey?i.pose.angle=xt(i.pose.angle+(q.deltaY>0?5:-5),-180,180):i.pose.scale=xt(i.pose.scale+(q.deltaY>0?-.01:.01),.08,.42),i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout())},{passive:!1});async function se(){if(d){h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范";return}let q=++h;d=!0,e("#play-demo").textContent="Ⅱ 停止示范";let fe=be=>new Promise(Ae=>setTimeout(Ae,be));try{if(!i.image||(i.kind="leaf",e("#motif").value="leaf",i.strokes=[],l=[],c=[],i.pose.scale=.3,n.updateLayout(),y(1),await fe(650),q!==h)||(await n.optimize(),await fe(1e3),q!==h)||(y(2),await fe(650),q!==h)||(b(),await fe(900),q!==h))return;i.polish=.85,y(3),n.toast("示范完成：现在可继续转动、润色，或返回刻线修改。")}finally{q===h&&(d=!1,e("#play-demo").textContent="▷ 再看一次示范")}}return t(".craft-stepper [data-craft-step]").forEach(q=>q.onclick=()=>{h++,d=!1,e("#play-demo").textContent="▷ 先看一次示范",y(Number(q.dataset.craftStep))}),e("#start-shaping").onclick=()=>y(1),e("#next-step").onclick=()=>i.step===3?n.exportCard():y(i.step+1),e("#previous-step").onclick=()=>y(i.step-1),e("#back-to-shape").onclick=()=>y(1),e("#view-carved").onclick=()=>v("carved"),e("#result-peek").onclick=()=>v("carved"),e("#engrave-pen").onclick=()=>U("pen"),e("#engrave-erase").onclick=()=>U("erase"),e("#undo-stroke").onclick=F,e("#redo-stroke").onclick=S,e("#tool-width").oninput=q=>{i.toolWidth=Number(q.target.value)*.006,e("#tool-width-value").value=q.target.value,m()},e("#preset-lines").onclick=b,e("#clear-strokes").onclick=()=>{i.strokes.length&&(D(),i.strokes=[],E())},e("#compare").oninput=q=>{i.comparison=Number(q.target.value),m()},e("#polish").oninput=q=>{i.polish=Number(q.target.value)/100,E()},t("[data-light]").forEach(q=>q.onclick=()=>{i.light=q.dataset.light,t("[data-light]").forEach(fe=>fe.classList.toggle("selected",q===fe)),E()}),e("#export-finished").onclick=n.exportCard,e("#save-finished").onclick=n.saveDesign,e("#play-demo").onclick=se,e("#motif").addEventListener("change",()=>{i.strokes=[],l=[],c=[],E()}),document.addEventListener("keydown",q=>{i.route!=="studio"||i.step!==2||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(q.ctrlKey||q.metaKey)&&q.key.toLowerCase()==="z"&&(q.preventDefault(),q.shiftKey?S():F())}),y(0),{draw:m,refresh:E,setView:v,setStep:y,updatePreview:p,resetCraft:C,stopDemo:X,renderArt:(q,fe,be)=>Ii(q,fe,be,i,{texture:g(),padding:.12}),getScene:()=>s,editStrokes:q=>{D(),q(i.strokes),E()},clearHistory:()=>{l=[],c=[],E()},get strokes(){return i.strokes}}}us();var de=n=>document.querySelector(n),Rt=n=>[...document.querySelectorAll(n)],O={analysis:null,target:null,selectedColor:0,sample:"procedural",kind:"fruit",pose:{x:.5,y:.5,scale:.24,angle:0},brush:"none",overlay:!0,candidates:[],selectedCandidate:-1,view:"color",image:null,analysisMs:0,optimizeMs:0,baseline:null,layout:null,route:"home",loadId:0},pc={fruit:"秋实",leaf:"一叶",mountain:"远山",drop:"凝露",round:"团圆",heart:"心意",custom:"手绘成器"},xr=[{id:"procedural",title:"赤霞流纹",sub:"程序化教学样本",origin:"由代码生成的纹色样本，不对应真实阜新原石。"},{id:"bands",title:"层叠条带",sub:"开放许可实拍样本",file:"./assets/agate-bands.jpg",origin:"Hannes Grobe / CC BY-SA 2.5。公开玛瑙切片，来源页未标产地；非阜新原料证明。"},{id:"nodule",title:"结核纹理",sub:"开放许可实拍样本",file:"./assets/agate-nodule.jpg",origin:"James St. John / CC BY 2.0。公开玛瑙结核样本；非阜新原料证明。"}],St,Oa,dc,Kp,Ru={x:0,y:0,w:1,h:1},Qp,Au,Pu=[];function Ft(n){de("#toast").textContent=n,de("#toast").classList.add("show"),clearTimeout(Qp),Qp=setTimeout(()=>de("#toast").classList.remove("show"),3400)}function vr(n){try{return JSON.parse(localStorage.getItem(n)||"[]")}catch{return[]}}function fc(n,e){try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return Ft("浏览器存储不可用或已满，请先导出方案卡。"),!1}}function Dn(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function bb(){let n=document.createElement("canvas");n.width=720,n.height=600;let e=n.getContext("2d"),t=e.createImageData(n.width,n.height),i=(s,r,a)=>s.map((o,l)=>o+(r[l]-o)*a);for(let s=0;s<n.height;s++)for(let r=0;r<n.width;r++){let a=(r/n.width-.5)*2,o=(s/n.height-.5)*2,l=Math.atan2(o,a),c=Math.hypot(a*.95,o*1.05),h=.84+.045*Math.sin(l*5)+.025*Math.cos(l*9),d=(s*n.width+r)*4;if(c>h){t.data[d]=15,t.data[d+1]=20,t.data[d+2]=16,t.data[d+3]=255;continue}let u=.055*Math.sin(a*10+o*6)+.035*Math.cos(o*13-a*2),f=Math.hypot(a+.2,o*.78-.1)+u,g=.5+.5*Math.sin(f*31+Math.sin(a*7)*1),_=.5+.5*Math.sin(f*8.4+a),m=i([91,31,16],[211,122,45],_);m=i(m,[242,223,181],Math.pow(g,12)*.9);let p=1+.12*Math.max(0,1-Math.hypot(a+.35,o+.45)),E=.98+.025*Math.sin(r*2.14+s*.43);for(let v=0;v<3;v++)t.data[d+v]=xt(m[v]*p*E,0,255);t.data[d+3]=255}return e.putImageData(t,0,0),n}var em=bb();xr[0].thumb=em.toDataURL("image/jpeg",.85);function mc(){de("#sample-list").innerHTML=xr.map(n=>`<button class="sample ${n.id===O.sample?"selected":""}" data-sample="${n.id}"><img src="${n.thumb||n.file}" alt="${n.title}"><span><strong>${n.title}</strong><small>${n.sub}</small></span></button>`).join(""),Rt("[data-sample]").forEach(n=>n.onclick=()=>gc(n.dataset.sample))}async function gc(n){let e=++O.loadId,t=xr.find(i=>i.id===n);if(t){de("#analysis-scan").classList.add("active");try{let i;if(n==="procedural"?i=em:(i=new Image,i.src=t.file,await i.decode()),e!==O.loadId)return;O.sample=n,O.image=i,O.pose={x:.5,y:.5,scale:.24,angle:0},O.candidates=[],O.selectedCandidate=-1,de("#sample-origin").textContent=t.origin,de("#canvas-sample-name").textContent=t.title,mc(),br(),St?.resetCraft()}catch(i){Ft("样本读取失败，可选择其他样本或导入照片。"),console.error(i)}finally{e===O.loadId&&de("#analysis-scan").classList.remove("active")}}}function br(){if(!O.image)return;let n=performance.now(),e=document.createElement("canvas"),t=O.image.width/O.image.height;e.width=150,e.height=Math.max(40,Math.round(150/t)),e.height>200&&(e.height=200,e.width=Math.round(200*t));let i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(O.image,0,0,e.width,e.height);try{O.analysis=Np(i.getImageData(0,0,e.width,e.height).data,e.width,e.height,5,de("#remove-bg").checked),O.selectedColor=O.analysis.colors.map((s,r)=>({v:s,i:r})).sort((s,r)=>r.v.count-s.v.count)[0].i,O.target=Na(O.analysis,O.selectedColor),O.analysisMs=performance.now()-n,O.candidates=[],O.selectedCandidate=-1,Iu(),Un(),de("#analysis-status").textContent=`已分析 ${O.analysis.validPixels.toLocaleString()} 个有效像素 · ${O.analysis.colors.length} 个色区 · ${Math.round(O.analysisMs)} ms`,O.baseline=Pi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),de("#caption-text").textContent="已完成色区分析，选择色区后可搜索构图。"}catch(s){Ft(s.message)}}function Iu(){let n=O.analysis;de("#palette").innerHTML=n.colors.map((e,t)=>`<button class="swatch ${t===O.selectedColor?"selected":""}" data-color="${t}" aria-label="选择色区 ${t+1} ${e.hex}"><i style="background:${e.hex}"></i><span>色区 ${String(t+1).padStart(2,"0")}</span><small>${(e.share*100).toFixed(1)}%</small></button>`).join(""),Rt("[data-color]").forEach(e=>e.onclick=()=>{O.selectedColor=Number(e.dataset.color),O.target=Na(n,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,de("#candidate-list").replaceChildren(),O.baseline=Pi(n,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),Iu(),Un()})}function tm(n,e){_r(n,e)}function Lu(n,e,t,{includeTarget:i=!0,includeMotif:s=!0}={}){if(n.clearRect(0,0,e,t),n.fillStyle="#111612",n.fillRect(0,0,e,t),!O.image)return;let r=O.image.width/O.image.height,a=e*.88,o=t*.7,l=a,c=l/r;c>o&&(c=o,l=c*r);let h=(e-l)/2,d=(t-c)/2;if(n.canvas.id==="design-canvas"&&(Ru={x:h,y:d,w:l,h:c}),n.drawImage(O.image,h,d,l,c),i&&O.overlay&&O.target){let u=O.analysis,f=document.createElement("canvas");f.width=u.width,f.height=u.height;let g=f.getContext("2d"),_=g.createImageData(u.width,u.height);for(let m=0;m<O.target.length;m++)O.target[m]&&(_.data[m*4]=222,_.data[m*4+1]=204,_.data[m*4+2]=119,_.data[m*4+3]=95);g.putImageData(_,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(f,h,d,l,c),n.restore()}if(s){let u=O.pose;n.save(),n.translate(h+u.x*l,d+u.y*c),n.rotate(u.angle*Math.PI/180),n.scale(u.scale*l,u.scale*c),tm(n,O.kind),n.fillStyle="rgba(255,229,174,.10)",n.fill("evenodd"),n.strokeStyle="#fff1c4",n.lineWidth=1.5/(u.scale*l),n.shadowColor="#3b1c09",n.shadowBlur=5,n.stroke(),n.restore()}}function ka(){if(St){St.draw();return}let n=de("#design-canvas"),e=n.getBoundingClientRect();if(e.width<1)return;let t=Math.min(devicePixelRatio,2);n.width=Math.round(e.width*t),n.height=Math.round(e.height*t);let i=n.getContext("2d");i.scale(t,t),Lu(i,e.width,e.height)}function Un(){if(!O.analysis)return;O.layout=Pi(O.analysis,O.target,O.kind,O.pose),de("#metric-fit").textContent=(O.layout.fit*100).toFixed(1)+"%",de("#metric-contain").textContent=(O.layout.containment*100).toFixed(1)+"%",de("#scale").value=Math.round(O.pose.scale*100),de("#angle").value=Math.round(O.pose.angle),de("#scale-value").value=Math.round(O.pose.scale*100)+"%",de("#angle-value").value=Math.round(O.pose.angle)+"°";let n=O.layout.fit>.65?"图案与所选色区重合较多":O.layout.fit>.3?"图案部分落入所选色区":"可以调整位置或缩小图案，寻找更多目标色区";de("#layout-explanation").textContent=`${n}。当前为“${pc[O.kind]}”主题，按 ${O.layout.samples} 个固定内部采样点计算。`,ka(),St?.refresh(),O.view==="preview"&&!St&&Uu()}function Li(){de("#candidate-list").innerHTML=O.candidates.map((n,e)=>`<button class="candidate ${O.selectedCandidate===e?"selected":""}" data-candidate="${e}">构图 ${String(e+1).padStart(2,"0")}<span>覆盖 ${(n.fit*100).toFixed(0)}%</span></button>`).join(""),Rt("[data-candidate]").forEach(n=>n.onclick=()=>{let e=Number(n.dataset.candidate);O.selectedCandidate=e;let{x:t,y:i,scale:s,angle:r}=O.candidates[e];O.pose={x:t,y:i,scale:s,angle:r},Li(),Un()})}async function _c(){if(!O.analysis)return;let n=de("#optimize");n.disabled=!0,de("#analysis-scan").classList.add("active"),await new Promise(e=>setTimeout(e,25));try{let e=performance.now(),t=de("#lock-scale").checked,i=O.pose.scale;O.searchCount=t?196:784,O.baseline=Pi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),O.candidates=Fp(O.analysis,O.target,O.kind,t?{scale:i}:{}),O.optimizeMs=performance.now()-e,O.selectedCandidate=0;let{x:s,y:r,scale:a,angle:o}=O.candidates[0];O.pose={x:s,y:r,scale:a,angle:o},O.baseline=Pi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:a,angle:0}),Li(),Un(),de("#caption-text").textContent=`已搜索 ${O.searchCount} 个位置、尺度与角度组合 · ${Math.round(O.optimizeMs)} ms`,Ft("找到三份构图，点击比较或继续手动调整。")}finally{n.disabled=!1,de("#analysis-scan").classList.remove("active")}}function Mb(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let e=n.getContext("2d");return e.fillStyle="#412719",e.fillRect(0,0,1024,1024),e.drawImage(O.image,0,0,1024,1024),e.save(),e.translate(O.pose.x*1024,O.pose.y*1024),e.rotate(O.pose.angle*Math.PI/180),e.scale(O.pose.scale*1024,O.pose.scale*1024),tm(e,O.kind),e.fillStyle="#fff0ca30",e.fill("evenodd"),e.strokeStyle="#fff1c4",e.lineWidth=2/(O.pose.scale*1024),e.stroke(),e.restore(),n}async function Du(){return Kp||(Kp=Promise.resolve().then(()=>(Jp(),Zp)))}async function Uu(){if(St)return St.updatePreview();try{dc||(dc=(await Du()).createAgateScene(de("#preview-scene"))),dc.setTexture(Mb()),dc.resize()}catch(n){console.error(n),Ft("当前设备三维渲染不可用，仍可使用纹色画布。"),Nu("color")}}function Nu(n){if(St)return St.setView(n);O.view=n,de("#design-canvas").hidden=n!=="color",de("#preview-scene").hidden=n!=="preview",de("#view-color").classList.toggle("selected",n==="color"),de("#view-preview").classList.toggle("selected",n==="preview"),de("#canvas-mode-label").textContent=n==="color"?"COLOR-GUIDED COMPOSITION":"TEXTURE ON PRESET GEOMETRY",de("#canvas-instruction").textContent=n==="color"?"拖动图案调整位置 · 右侧选择创作主题":"拖动旋转 · 滚轮缩放 · 预设几何上的材质示意",de("#toggle-overlay").disabled=n==="preview",n==="preview"?Uu():requestAnimationFrame(ka)}function nm(){let n=location.hash.slice(1)||"home";O.route=["home","learn","studio","journey","collection"].includes(n)?n:"home",Rt("main>.page").forEach(e=>e.hidden=e.id!==O.route),Rt("[data-route]").forEach(e=>{let t=e.dataset.route===O.route;e.classList.toggle("active",t),t?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")}),O.route!=="studio"&&St?.stopDemo(),O.route==="studio"&&(Up(),requestAnimationFrame(ka),O.view==="preview"&&Uu()),O.route==="collection"&&Cu(),O.route==="learn"&&requestAnimationFrame(()=>Oa?.resize()),window.scrollTo({top:0,behavior:"instant"})}function Ba(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Sb(){let n=document.createElement("canvas");n.width=1200,n.height=1260;let e=n.getContext("2d");e.fillStyle="#151917",e.fillRect(0,0,n.width,n.height),e.fillStyle="#d9bc8b",e.font="18px sans-serif",e.fillText("FUXIN · AGATE ATELIER / 石里有境",65,65),e.fillStyle="#eee6d6",e.font="42px SimSun,serif",e.fillText(O.workTitle||pc[O.kind]+" · 纹色构思",65,120,1070),e.save(),e.translate(0,180),St?St.renderArt(e,1200,790):Lu(e,1200,790,{includeTarget:!1}),e.restore(),e.strokeStyle="#ffffff25",e.beginPath(),e.moveTo(65,1e3),e.lineTo(1135,1e3),e.stroke();let t=xr.find(r=>r.id===O.sample),i=O.layout;e.font="21px sans-serif",e.fillStyle="#cfb38a",e.fillText(`图案色区匹配 ${(i.fit*100).toFixed(1)}%    图案区域保留 ${(i.containment*100).toFixed(1)}%`,65,1050),e.fillStyle="#a2a69b",e.font="16px sans-serif",e.fillText(`样本：${t?.title||"导入照片"} · ${t?.sub||"用户提供"}`,65,1090),e.fillText("二维创意示意；真实内部材质与加工可行性需工匠核验。",65,1130),e.font="13px sans-serif";let s=O.sample==="bands"?"Photo: Hannes Grobe · CC BY-SA 2.5 · commons.wikimedia.org/wiki/File:Agate1_hg.jpg":O.sample==="nodule"?"Photo: James St. John · CC BY 2.0 · commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg":"程序化教学样本 / 或用户自行导入素材";return e.fillText(s,65,1180),e.fillText(O.sample==="bands"?"图片叠加构图适用 CC BY-SA 2.5 · creativecommons.org/licenses/by-sa/2.5/":"数字作品为原创教学示意，非真实加工结果。",65,1210),n}function im(){if(!O.analysis)return;Sb().toBlob(e=>Ba(e,`石里有境-${pc[O.kind]}-方案卡.png`),"image/png"),Ft("方案卡已导出，包含素材署名和指标。")}function Fu(){let n={format:"agate-project",version:4,sample:O.sample,kind:O.kind,pose:{...O.pose},color:O.selectedColor,strokes:structuredClone(O.strokes),polish:O.polish,light:O.light,thickness:O.thickness,inscription:structuredClone(O.inscription),presentation:{...O.presentation},workTitle:O.workTitle,removeBackground:de("#remove-bg").checked,target:Array.from(O.target),targetWidth:O.analysis.width,targetHeight:O.analysis.height};if(O.kind==="custom"&&(n.outline=O.customOutline),O.sample==="custom"){let e=document.createElement("canvas"),t=Math.min(1,960/Math.max(O.image.width,O.image.height));e.width=Math.round(O.image.width*t),e.height=Math.round(O.image.height*t),e.getContext("2d").drawImage(O.image,0,0,e.width,e.height),n.sourceImage=e.toDataURL("image/jpeg",.88)}return n}function sm(){if(!O.analysis)return;let n=vr("agate-designs-v1"),e=document.createElement("canvas");e.width=420,e.height=340,St.renderArt(e.getContext("2d"),420,340);let t={...Fu(),id:crypto.randomUUID(),created:new Date().toISOString(),metrics:{...O.layout},image:e.toDataURL("image/jpeg",.82),title:O.workTitle||pc[O.kind]+" · "+new Date().toLocaleDateString("zh-CN")};n.unshift(t),fc("agate-designs-v1",n.slice(0,30))&&Ft("已收藏，进入“我的作品”可继续编辑或导出完整方案。")}async function yc(n){try{let e=[3,4].includes(n.version)?wu(n):n;if(e.sample==="custom"&&!e.sourceImage)throw Error("这份旧收藏没有保留原料照片，请重新导入照片。");if(St.stopDemo(),de("#remove-bg").checked=e.removeBackground??!0,e.sample==="custom"){let t=new Image;if(t.src=e.sourceImage,await t.decode(),t.width>4096||t.height>4096)throw Error("方案图片尺寸过大。");++O.loadId,O.sample="custom",O.image=t,de("#sample-origin").textContent="由方案恢复的用户照片，仅在本机处理。",de("#canvas-sample-name").textContent="我的原料照片",mc(),br(),St.resetCraft()}else if(await gc(e.sample),O.sample!==e.sample)throw Error("原料未能加载，请稍后重试。");if(e.kind==="custom"&&(oc(e.outline),O.customOutline=e.outline,de('#motif option[value="custom"]').disabled=!1),O.kind=e.kind,de("#motif").value=e.kind,O.pose={...e.pose},O.selectedColor=Math.min(e.color,O.analysis.colors.length-1),O.target=Na(O.analysis,O.selectedColor),e.target&&e.targetWidth*e.targetHeight===e.target.length){let t=O.analysis;O.target=Uint8Array.from({length:t.width*t.height},(i,s)=>e.target[Math.min(e.targetHeight-1,Math.floor(Math.floor(s/t.width)/t.height*e.targetHeight))*e.targetWidth+Math.min(e.targetWidth-1,Math.floor(s%t.width/t.width*e.targetWidth))])}O.strokes=structuredClone(e.strokes||[]),O.polish=e.polish??.72,O.light=e.light||"left",O.thickness=e.thickness??.24,O.inscription=structuredClone(e.inscription||null),O.presentation={style:"stone",backdrop:"ink",cord:"cinnabar",...e.presentation},O.workTitle=e.workTitle||"",Iu(),O.candidates=[],Li(),Un(),St.clearHistory(),Eb.sync(),lm.sync(),location.hash="studio",St.setStep(2),Ft("方案已恢复，可以继续刻线、构形或润色。")}catch(e){Ft(e.message||"方案恢复失败，请检查文件。")}}function Cu(){let n=vr("agate-designs-v1");de("#collection-list").innerHTML=n.length?n.map(t=>`<article class="collection-card"><img src="${t.image}" alt="${Dn(t.title)}"><h2>${Dn(t.title)}</h2><p>色区覆盖 ${(t.metrics.fit*100).toFixed(1)}% · ${Dn(xr.find(i=>i.id===t.sample)?.title||"导入照片")}</p><div class="card-actions"><button class="text-button small" data-edit="${t.id}">继续编辑 ↗</button><button class="text-button small" data-export="${t.id}">导出方案</button><button class="text-button small" data-delete="${t.id}">删除</button></div></article>`).join(""):'<div class="empty-state"><h2>第一份构思，从一块石开始。</h2><p>选择纹色，尝试构图，收藏你的第一件数字作品。</p><a href="#studio" class="primary compact">开始创作 ↗</a></div>',Rt("[data-edit]").forEach(t=>t.onclick=()=>yc(n.find(i=>i.id===t.dataset.edit))),Rt("[data-export]").forEach(t=>t.onclick=()=>{let i=n.find(o=>o.id===t.dataset.export),{image:s,...r}=i;r.note=i.version>=3?"包含原料引用、手绘轮廓、色区、刻线与润色，可导入继续编辑。":"旧版参数；上传照片未保留。";let a={bands:"agate-bands.jpg",nodule:"agate-nodule.jpg"}[i.sample];r.attribution=a?Pu.find(o=>o.file===a)||a:"程序化样本或用户导入照片",Ba(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),"玛瑙创作方案.json")}),Rt("[data-delete]").forEach(t=>t.onclick=()=>{fc("agate-designs-v1",vr("agate-designs-v1").filter(i=>i.id!==t.dataset.delete)),Cu()});let e=vr("agate-plans-v1");de("#plan-list").innerHTML=e.length?e.map(t=>`<div class="plan-row"><div>${Dn(t.date)} · ${Dn(t.interest)}<small>${Dn(t.note||"尚未填写备注")}</small></div><button data-delete-plan="${t.id}">删除</button></div>`).join(""):'<p class="subtle">还没有研学意向，可在“循艺入乡”保存。</p>',Rt("[data-delete-plan]").forEach(t=>t.onclick=()=>{fc("agate-plans-v1",vr("agate-plans-v1").filter(i=>i.id!==t.dataset.deletePlan)),Cu()})}function wb(){de("#sources-content").innerHTML='<div class="source-record"><h3>背景音乐 · We Never（若如初见）</h3><p>La Mer / LongTran Final / DJ山茶花。用户指定曲目，可通过右上角音乐控件播放。</p><a href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div>'+Dr.map(n=>`<div class="source-record"><h3>${n.title}</h3><p>${n.publisher} · ${n.note}</p><a href="${n.url}" target="_blank" rel="noopener">查看原始资料 ↗</a></div>`).join("")+'<div class="source-record"><h3>阜新玛瑙实景影像 · 高清分层播放</h3><p>现版使用辽宁省政府网站2026年2月6日发布《玉醇秋酿 阜新秋颂》中的《阜新玛瑙——刀刃上的大地瑰宝》专题，来源为辽宁发布、辽宁卫视《黑土地》。公开片源2560×1440，当前首页保持高细节1920×1080、25帧：先缓存短高清开场，再后台准备完整高质量视频，完整下载且确认实际播放帧后平滑接替。未准备好时继续播放清晰开场，不使用1MB低码率版本。历史4K增强文件保留归档，当前首页不再请求；不臆造源片不存在的细节。首页为真实运动镜头剪辑，非动态照片。原声主题篇重新选取雕刻手部、巧色雕件与手镯镜头，保留原画幅及台标角标；首页与主题篇均避开源片自带二维码的镜头。背景照片中的手艺、市集、雕件与原料也来自同一阜新专题的实景截帧。本站未宣称自摄或与片中工坊合作，页面未标明开放许可，使用范围待权利方确认。</p><a href="https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml" target="_blank" rel="noopener">新片源与发布出处 ↗</a> · <a href="./assets/home-film/playback.json" target="_blank" rel="noopener">画质与剪辑记录 ↗</a><p>历史版本的480p影像与实景截图来自国际在线发布、阜新市委宣传部提供的《看见阜新》，保留旧文件供历史页面兼容；当前首页已更换高清来源。</p></div><div class="source-record"><h3>实拍背景与图像素材</h3><p>公开实拍样本用于技术演示，不作为阜新原料或本地合作证明。实物图鉴采用等比缩放与格式压缩版本，原始文件归档于初始材料；画布叠加为本系统产生。</p><a href="./assets/backgrounds/credits.json" target="_blank" rel="noopener">各页面实拍背景、出处与截帧时间 ↗</a></div>'+Pu.map(n=>`<div class="source-record"><h3>${Dn(n.original)}</h3><p>${Dn(n.author)} / ${Dn(n.license)} · ${Dn(n.origin)}</p><p>${Dn(n.changes||"")}</p><a href="${n.source}" target="_blank" rel="noopener">图片来源 ↗</a> · <a href="${n.licenseUrl}" target="_blank" rel="noopener">许可条款 ↗</a></div>`).join("")+'<div class="source-record"><h3>软件与示意内容</h3><p>Three.js r180 · MIT许可。循艺入乡点位卡片中的手艺与水岸情境，以及形成引导的四幅写实情境由内置 image_gen 生成，供地质概念讲述，不是实拍或物理模拟；图库中的馆藏与标本照片单独保留出处。当前全站背景采用实拍图像，按区域选用实物样本、馆藏器物及阜新专题实景截帧；标本与馆藏照片不作为阜新本地作品证明。赤霞流纹、三维原石与创作轮廓由代码生成；成器几何依据当前轮廓构建，刻线为外观凹痕示意。文化查询为本地资料检索，未调用在线生成式问答模型。</p><a href="./vendor/THREE-LICENSE.txt" target="_blank" rel="noopener">Three.js许可 ↗</a></div>',de("#sources-dialog").showModal()}function rm(){if(!O.analysis)return;let n=Pi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:O.pose.scale,angle:0}),e=O.layout,t=O.target.reduce((i,s)=>i+s,0);de("#validation-content").innerHTML=`<p class="validation-p">当前图像分析分辨率 ${O.analysis.width} × ${O.analysis.height}，有效像素 ${O.analysis.validPixels}，目标色区 ${t} 像素。颜色聚类在 OKLab 空间进行，自动分色后可手动修正色区。</p><table class="data-table"><thead><tr><th>当前图像内对照</th><th>居中默认布局</th><th>当前布局</th></tr></thead><tbody><tr><td>图案色区匹配</td><td>${(n.fit*100).toFixed(1)}%</td><td>${(e.fit*100).toFixed(1)}%</td></tr><tr><td>图案区域保留</td><td>${(n.containment*100).toFixed(1)}%</td><td>${(e.containment*100).toFixed(1)}%</td></tr></tbody></table><p class="validation-p">分色耗时 ${O.analysisMs.toFixed(1)} ms；最近一次构图搜索耗时 ${O.optimizeMs?O.optimizeMs.toFixed(1)+" ms":"尚未运行"}。默认对照为居中、与当前图案相同尺度、0°；两列均在当前目标色区上重新计算。</p><p class="validation-p">以上为当前图像的运行记录，不是跨样本评测结论，也不验证雕刻可行性。更小图形可能获得更高覆盖率，需结合视觉表达选择合适方案。</p>`,de("#validation-dialog").showModal()}function am(n){let e=[...n.toLowerCase()],i=xd.map(c=>({...c,score:c.keys.reduce((h,d)=>h+(n.includes(d)?3:0),0)+Math.min(1,e.filter(h=>c.title.includes(h)).length/10)})).sort((c,h)=>h.score-c.score)[0],s=de("#knowledge-answer");if(s.replaceChildren(),!n.trim()){s.textContent="请输入想了解的内容。";return}if(i.score<1){s.textContent="已核对的资料卡暂未覆盖这个问题。可尝试“工艺”“十家子”“非遗”或“乡村”，也可打开文化资料库阅读原文。";return}let r=document.createElement("strong");r.textContent=i.title;let a=document.createElement("p");a.textContent=i.text;let o=document.createElement("a"),l=Dr.find(c=>c.id===i.source);o.href=l.url,o.target="_blank",o.rel="noopener",o.textContent="依据："+l.publisher+" ↗",s.append(r,a,o)}de("#optimize").onclick=_c;de("#save-design").onclick=sm;de("#export-png").onclick=im;de("#view-color").onclick=()=>Nu("color");de("#view-preview").onclick=()=>Nu("preview");de("#toggle-overlay").onclick=()=>{O.overlay=!O.overlay,de("#toggle-overlay").setAttribute("aria-pressed",String(O.overlay)),de("#toggle-overlay").textContent=O.overlay?"◉ 色区叠加":"○ 色区叠加",ka()};de("#motif").onchange=n=>{O.kind=n.target.value,O.candidates=[],O.selectedCandidate=-1,Li(),Un()};de("#scale").oninput=n=>{O.pose.scale=Number(n.target.value)/100,O.selectedCandidate=-1,Li(),Un()};de("#angle").oninput=n=>{O.pose.angle=Number(n.target.value),O.selectedCandidate=-1,Li(),Un()};de("#remove-bg").onchange=br;de("#reanalyze").onclick=br;de("#reset-mask").onclick=()=>{O.analysis&&(O.target=Na(O.analysis,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,Li(),Un())};Rt("[data-brush]").forEach(n=>n.onclick=()=>{O.brush=n.dataset.brush,Rt("[data-brush]").forEach(e=>e.classList.toggle("selected",e===n)),de("#design-canvas").style.cursor=O.brush==="none"?"grab":"crosshair"});de("#image-upload").onchange=async n=>{let e=n.target.files[0];if(!e)return;if(!["image/jpeg","image/png","image/webp"].includes(e.type)||e.size>15*1024*1024){Ft("请选择不超过 15 MB 的 JPG、PNG 或 WebP 图片。"),n.target.value="";return}let t=++O.loadId,i=URL.createObjectURL(e);try{let s=new Image;if(s.src=i,await s.decode(),t!==O.loadId){URL.revokeObjectURL(i);return}Au&&URL.revokeObjectURL(Au),Au=i,O.sample="custom",O.image=s,O.pose={x:.5,y:.5,scale:.24,angle:0},de("#sample-origin").textContent="用户导入照片，仅在当前设备处理。请确认有权用于展示。",de("#canvas-sample-name").textContent="我的原料照片",mc(),br(),St?.resetCraft(),Ft("照片已在本机读取。开始借色构形。")}catch{URL.revokeObjectURL(i),Ft("无法解码此图片，请更换文件。")}n.target.value=""};Rt(".source-open").forEach(n=>n.onclick=wb);Rt(".dialog-close").forEach(n=>n.onclick=()=>n.closest("dialog").close());Rt("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target===n){let t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}}));de("#open-validation").onclick=rm;de("#home-guide").onclick=()=>de("#home-story").scrollIntoView({behavior:"smooth"});de("#auto-rotate").onclick=()=>{if(!Oa)return;let n=!Oa.controls.autoRotate;Oa.setAuto(n),de("#auto-rotate").setAttribute("aria-pressed",String(n)),de("#auto-rotate").textContent=n?"Ⅱ 暂停自转":"▷ 开启自转"};de("#plan-trip").onclick=()=>{de("#trip-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),de("#trip-dialog").showModal()};de("#trip-form").onsubmit=n=>{n.preventDefault();let e=vr("agate-plans-v1");e.unshift({id:crypto.randomUUID(),date:de("#trip-date").value,interest:de("#trip-interest").value,note:de("#trip-note").value.trim()}),fc("agate-plans-v1",e.slice(0,50))&&(de("#trip-dialog").close(),de("#trip-form").reset(),Ft("已保存本地研学意向，可在“我的作品”查看。"))};de("#knowledge-form").onsubmit=n=>{n.preventDefault(),am(de("#knowledge-input").value)};Rt("[data-question]").forEach(n=>n.onclick=()=>{de("#knowledge-input").value=n.dataset.question,am(n.dataset.question)});de("#craft-tabs").innerHTML=ro.map((n,e)=>`<button data-craft="${e}" class="${e===0?"selected":""}">${n.title}</button>`).join("");function om(n){de("#craft-detail").replaceChildren();let e=document.createElement("h3");e.textContent=ro[n].subtitle;let t=document.createElement("p");t.textContent=ro[n].text,de("#craft-detail").append(e,t),Rt("[data-craft]").forEach(i=>i.classList.toggle("selected",Number(i.dataset.craft)===n))}Rt("[data-craft]").forEach(n=>n.onclick=()=>om(Number(n.dataset.craft)));om(0);St=Gp({$:de,$$:Rt,state:O,samples:xr,drawSource:Lu,getDrawRect:()=>Ru,getSceneModule:Du,renderCandidates:Li,updateLayout:Un,optimize:_c,exportCard:im,saveDesign:sm,toast:Ft});var Eb=Vp({state:O,experience:St,$:de,$$:Rt,toast:Ft,getDrawRect:()=>Ru,download:Ba}),lm=Hp({state:O,experience:St,$:de,$$:Rt,toast:Ft,download:Ba,projectData:Fu,restoreProject:yc,optimize:_c,updateLayout:Un});de(".heading-actions").insertAdjacentHTML("afterbegin",'<label class="project-import">导入方案<input id="project-import" type="file" accept=".json,application/json"></label>');de("#project-import").onchange=async n=>{let e=n.target.files[0];if(e){try{if(e.size>5*1024*1024)throw Error("方案文件请保持在 5 MB 以内。");let t=wu(JSON.parse(await e.text()));await yc(t)}catch(t){Ft(t.message||"方案文件无法读取。")}n.target.value=""}};window.agateJourney=Sd({toast:Ft,download:Ba});window.addEventListener("hashchange",nm);new ResizeObserver(()=>ka()).observe(de("#canvas-stage"));mc();nm();gc("procedural");fetch("./assets/credits.json").then(n=>n.json()).then(n=>Pu=n).catch(()=>{});var cm=new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&(cm.disconnect(),Du().then(e=>{Oa=e.createAgateScene(de("#hero-scene"),{hero:!0})}).catch(e=>{console.error(e),de("#scene-fallback").hidden=!1}))},{threshold:.08});cm.observe(de("#hero-scene"));window.agateStudio={state:O,analyze:br,loadSample:gc,optimize:_c,showValidation:rm,experience:St,restoreProject:yc,projectData:Fu,playground:lm};var bn=document.createElement("div");bn.className="ambient-player";bn.innerHTML='<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>';document.querySelector(".header").append(bn);var Ze=n=>bn.querySelector(n),ke=document.createElement("audio");ke.id="background-music";ke.src="./assets/background-we-never.mp3";ke.preload="none";ke.loop=!0;document.body.append(ke);var Tb=()=>{try{let n=JSON.parse(localStorage.getItem("agate-music-volume"));return typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.min(1,n)):.25}catch{return .25}};ke.volume=Tb();var fs=!1,Ou=ke.volume||.25,ds=0,vc=null,xc=null,bc=!0,Mc=!1,ku=document.documentElement.classList.contains("film-entering");async function Ab(){xc||(vc||(vc=fetch(new URL("./assets/background-we-never.mp3",import.meta.url),{priority:"low"}).then(n=>{if(!n.ok)throw Error("Audio unavailable");return n.blob()}).then(n=>{xc=URL.createObjectURL(n),ke.src=xc}).catch(n=>{throw vc=null,n})),await vc)}function Sc(){Ze("#music-volume").value=Math.round(ke.volume*100),Ze("#music-volume-value").value=Math.round(ke.volume*100)+"%";let n=ke.muted||ke.volume===0;Ze("#music-mute").setAttribute("aria-pressed",String(n)),Ze("#music-mute").setAttribute("aria-label",n?"取消静音":"静音"),Ze("#music-mute").textContent=n?"×":"♪"}var hm=n=>Number.isFinite(n)?Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0"):"0:00";function ps(){let n=!ke.paused;bn.classList.toggle("playing",n),Ze("#music-toggle").setAttribute("aria-pressed",String(n)),Ze("#music-toggle").setAttribute("aria-label",n?"暂停背景音乐":"播放背景音乐"),Ze("#music-label").textContent=n?"音乐播放中":"开启音乐"}function wc(){bc=!1,document.removeEventListener("click",Mr,!0),document.removeEventListener("touchend",Mr,!0),document.removeEventListener("keydown",Mr,!0)}async function za(){if(ku||Mc||fs||!ke.paused)return;let n=++ds;fs=!0,Ze("#music-label").textContent="正在加载",Ze("#music-status").textContent="正在准备音乐…";try{if(xc||await Ab(),n!==ds)return;ke.error&&ke.load(),await ke.play(),n===ds&&(wc(),bn.dataset.autoplay="playing",Ze("#music-status").textContent="正在循环播放，可随时暂停。")}catch(e){if(n!==ds)return;ps(),e.name==="NotAllowedError"?(bn.dataset.autoplay="waiting",Ze("#music-label").textContent=bc?"轻触开启":"开启音乐",Ze("#music-status").textContent=bc?"轻触页面，音乐便随创作开始。":"音乐已准备好，请轻点音符播放。"):(bn.dataset.autoplay="unavailable",Ze("#music-status").textContent="暂时未能播放，请点击音符重试。")}finally{n===ds&&(fs=!1)}}function um(){wc(),!Mc&&(fs||!ke.paused?(ds++,fs=!1,ke.pause(),ps(),bn.dataset.autoplay="paused",Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"):za())}function Mr(n){!bc||!n.isTrusted||bn.contains(n.target)||n.type==="keydown"&&(!["Enter"," "].includes(n.key)||n.ctrlKey||n.altKey||n.metaKey)||za()}document.addEventListener("click",Mr,!0);document.addEventListener("touchend",Mr,{capture:!0,passive:!0});document.addEventListener("keydown",Mr,!0);Ze("#music-toggle").onclick=um;function Bu(n){Ze("#music-panel").hidden=!n,Ze("#music-settings").setAttribute("aria-expanded",String(n))}Ze("#music-settings").onclick=()=>Bu(Ze("#music-panel").hidden);document.addEventListener("pointerdown",n=>{bn.contains(n.target)||Bu(!1)});document.addEventListener("keydown",n=>{n.key==="Escape"&&!Ze("#music-panel").hidden&&(Bu(!1),Ze("#music-settings").focus())});Ze("#music-volume").oninput=n=>{ke.volume=Number(n.target.value)/100,ke.volume>0&&(Ou=ke.volume),ke.muted=!1;try{localStorage.setItem("agate-music-volume",JSON.stringify(ke.volume))}catch{}Sc()};Ze("#music-mute").onclick=()=>{if(ke.muted||ke.volume===0){if(ke.muted=!1,ke.volume===0){ke.volume=Ou;try{localStorage.setItem("agate-music-volume",JSON.stringify(ke.volume))}catch{}}}else Ou=ke.volume,ke.muted=!0;Sc()};Ze("#music-seek").oninput=n=>{Number.isFinite(ke.duration)&&ke.duration>0&&(ke.currentTime=Number(n.target.value)/1e3*ke.duration)};ke.addEventListener("play",ps);ke.addEventListener("pause",()=>{ps(),Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"});ke.addEventListener("playing",()=>{wc(),bn.dataset.autoplay="playing",Ze("#music-label").textContent="音乐播放中",Ze("#music-status").textContent="正在循环播放，可随时暂停。"});ke.addEventListener("waiting",()=>{ke.paused||(Ze("#music-label").textContent="正在缓冲",Ze("#music-status").textContent="音乐正在缓冲…")});ke.addEventListener("loadedmetadata",()=>{Ze("#music-duration").textContent=hm(ke.duration),Ze("#music-seek").disabled=!Number.isFinite(ke.duration)});ke.addEventListener("timeupdate",()=>{Ze("#music-current").textContent=hm(ke.currentTime),Number.isFinite(ke.duration)&&ke.duration>0&&(Ze("#music-seek").value=Math.round(ke.currentTime/ke.duration*1e3))});ke.addEventListener("volumechange",Sc);ke.addEventListener("error",()=>{Ze("#music-status").textContent="音乐暂不可用，请点击音符重试。",ps()});fetch("./assets/music.json").then(n=>{if(!n.ok)throw Error();return n.json()}).then(n=>{Ze("#music-title").textContent=n.title,Ze("#music-artist").textContent=n.artist,Ze("#music-toggle").title=n.title+" · "+n.artist}).catch(()=>{Ze("#music-title").textContent="用户指定背景音乐"});function Cb(){let n=!ke.paused||fs;Mc=!0,ds++,fs=!1,wc(),ke.pause(),ps(),Ze("#music-label").textContent="观影中",Ze("#music-status").textContent="宣传片播放期间，背景音乐暂时暂停。";let e=!1;return()=>{e||(e=!0,Mc=!1,ps(),n&&za())}}Sc();window.agateMusic={audio:ke,toggle:um,suspendForFilm:Cb};ku?(Ze("#music-label").textContent="入境后播放",window.addEventListener("agate:entry-ready",()=>{ku=!1,za()},{once:!0})):za();var Ec=document.createElement("div");Ec.className="agate-background";Ec.setAttribute("aria-hidden","true");Ec.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div>';document.body.prepend(Ec);var Nn={version:"0.13.0",homepageMode:"High-detail1080p: complete cached short opening first; asynchronously cache the original high-quality1080p full loop and crossfade only after full decode readiness.",sourceResolution:[2560,1440],sourceDuration:252.378,sourceUrl:"https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml",sourceMedia:"https://video.ln.gov.cn/video/2026/2/6/2026261770347739440_2784.mp4",sourceTitle:"玉醇秋酿 阜新秋颂 · 阜新玛瑙——刀刃上的大地瑰宝",sourcePublished:"2026-02-06",provider:"辽宁发布 / 辽宁卫视《黑土地》",publisher:"辽宁省人民政府网站",native4K:!1,enhancement:"当前默认高细节1080p、25fps。开场从1440p源片单独以CRF20编码，完整主循环使用原高质量1080p版本；保留原色、画幅、来源角标，不使用低码率1MB版本。",loopDuration:19.5,loopSegments:[{start:164,duration:4,content:"巧色雕件",chapter:0},{start:115.1,duration:4.8,content:"手工雕刻",chapter:1},{start:175.1,duration:4,content:"透雕器物",chapter:1},{start:217,duration:6,content:"玛瑙手镯",chapter:1},{start:225.7,duration:3.2,content:"阜新玛瑙市集",chapter:2}],crossfadeSeconds:.5,seam:"交叉淡化至首段相同运动相位，循环首尾连续。",variants:[{file:"agate-loop-clean-4k.mp4",width:3840,height:2160,duration:19.5,bytes:22322905,audio:!1,native4K:!1},{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,duration:19.5,bytes:9290694,audio:!1,native4K:!1}],story4k:{file:"agate-story-clean-4k.mp4",width:3840,height:2160,duration:34.6,bytes:39774142,originalSound:!0,edited:!0},scope:"玛瑙巧色雕件、手工雕刻、透雕器物、玛瑙手镯与阜新玛瑙市集；无采访二维码镜头。",rights:"第三方宣传专题，保留辽宁发布、辽宁卫视与省政府发布出处；未查到开放许可，不声明为本站原创拍摄。使用范围仍待权利方确认。",initialTime:0,storyHd:{file:"agate-story-clean-hd.mp4",width:1920,height:1080,duration:34.6,bytes:14857535,originalSound:!0,edited:!0},qrPolicy:"仅选用源片中本身没有二维码的镜头；未用遮挡、模糊或修补掩盖二维码。背景和原声主题剪辑均重新选段。",storySegments:[{start:115.1,duration:4.8},{start:163.5,duration:21.6},{start:217,duration:8.2}],fastVariants:[{file:"agate-loop-fast-1080.mp4",width:1920,height:1080,bytes:3742755,duration:19.48,audio:!1},{file:"agate-loop-fast-720.mp4",width:1280,height:720,bytes:1897901,duration:19.48,audio:!1}],startupBufferSeconds:0,defaultQuality:"1080p-hq",entranceMaxWaitMs:6e3,startupPolicy:"Fully prepare the short high-quality opening, then keep it playing while caching full high-quality loop. Promote only after full-file validation and decoded moving frame; no partial stream playback.",smooth1080:{file:"agate-loop-smooth-1080.mp4",width:1920,height:1080,bytes:1012447,fps:24,duration:19.5,audio:!1},storySmooth:{file:"agate-story-smooth-1080.mp4",width:1920,height:1080,fps:24,bytes:3901108,duration:34.6,originalSound:!0},legacyEnhancement:"以2560×1440公开原片为源，轻度降噪、Lanczos 1.5倍放大、温和锐化，输出3840×2160；属于4K增强而非原生4K。保留原始画幅、台标与角标，不臆造纹色或工艺细节。",opening1080:{file:"agate-opening-hq-1080.mp4",width:1920,height:1080,fps:25,duration:2.64,bytes:1157772,audio:!1,sourceStart:219.4,sourceDuration:3.2,mainTime:14},quality1080:{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,fps:25,duration:19.48,bytes:9290694,audio:!1}};var it=document.querySelector("#home-film"),ze=document.querySelector("#home-film-video"),zu=document.querySelector("#home-film-toggle"),Xa=document.querySelector("#home-film-status"),Pb=document.querySelector("#home-film-progress"),qa=matchMedia("(prefers-reduced-motion: reduce)"),dm=document.querySelector(".header");new ResizeObserver(()=>it.style.setProperty("--film-header-height",`${dm.getBoundingClientRect().height}px`)).observe(dm);var Ib=Nn.sourceUrl,wt=document.createElement("dialog");wt.className="home-film-dialog";wt.id="home-film-dialog";wt.setAttribute("aria-labelledby","home-full-film-title");wt.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-hq-1080.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 ${Math.round(Nn.story4k.duration)} 秒 · 保留原声<br>原片《阜新玛瑙——刀刃上的大地瑰宝》<br>辽宁发布 / 辽宁卫视《黑土地》 · 省政府网站发布</p><a href="${Ib}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;document.body.append(wt);var Qt=wt.querySelector("video"),wr=wt.querySelector("#home-full-film-status"),Hu=null,Va=0,un=document.querySelector("#entry-gate"),gm=document.querySelector("#entry-status"),Lb=document.querySelector("#entry-progress"),Db=document.querySelector("#entry-progress-fill"),Ub=document.querySelector("#entry-percent"),Nb=document.querySelector("#entry-quality"),Ga=document.querySelector("#entry-help"),Ac=document.querySelector("#entry-actions"),_m=document.querySelector("#entry-retry"),ym=document.querySelector("#entry-skip"),qu=document.documentElement,Cc=new Map,Ya=()=>!location.hash||location.hash==="#home",gs=()=>Ya()&&vm&&!document.hidden&&!wt.open&&!Tr,Zn="1080p",Rc=null,Fn=0,Pc=0,Er=null,Sn=!1,Ic=!1,Mn=!1,vm=!0,Tr=!1,Ar=!1,Vu=0,Gu,Wa,Xu,_s=!qu.classList.contains("film-entering"),ms=!1,fm=Nn.initialTime||0,Fb=()=>"1080P 高清",xm=()=>Nn.quality1080,pm=-.5,bm=Nn.loopSegments.map(n=>{let e=Math.max(0,pm);return pm+=n.duration-Nn.crossfadeSeconds,{time:e,chapter:n.chapter}});function Mm(){let n=ze.currentTime;for(let e=0;e<ze.buffered.length;e++)if(n>=ze.buffered.start(e)-.05&&n<=ze.buffered.end(e)+.05)return Math.max(0,ze.buffered.end(e)-n);return 0}function On(){let n=Mn&&!ze.paused;zu.setAttribute("aria-pressed",String(n)),zu.textContent=n?"Ⅱ 暂停影像":Ar?"▷ 点击播放":"▷ 播放影像",it.dataset.filmState=Sn?"preparing":n?"playing":Mn?"paused":"poster",Xa.textContent=Sn?"正在准备开场画面…":Mn?`${Fb()} · ${n?"连续实景":"影像已暂停"}`:"实景封面 · 点击播放连续影像"}function Uc(n,e){let t=Math.max(0,Math.min(100,Math.round(n)));Db.style.width=`${t}%`,Ub.textContent=`${t}%`,Lb.setAttribute("aria-valuenow",String(t)),e&&(gm.textContent=e)}window.addEventListener("agate:film-progress",n=>{let e=n.detail;!_s&&!ms&&(e.kind==="opening"||window.agateFilmLoader.state.kind==="full")&&Uc(e.received/e.total*94,"正在准备高清开场")});function Sm(){_s||ms||(Vu++,un.classList.remove("leaving"),un.hidden=!1,qu.classList.add("film-entering"),un.dataset.state="preparing",Ga.hidden=!0,Ac.hidden=!0,_m.textContent="重新准备",ym.disabled=!1,Nb.textContent="先让高清开场就绪，再走进阜新",Uc(0,"正在点亮第一帧"),document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(n=>{Cc.has(n)||Cc.set(n,n.inert),n.inert=!0}),un.setAttribute("tabindex","-1"),un.focus({preventScroll:!0}),Wa||(Wa=setTimeout(()=>{Wa=0,Cr("slow-network")},Nn.entranceMaxWaitMs)),clearTimeout(Gu),Gu=setTimeout(()=>{_s||(Ga.hidden=!1,Ga.textContent="开场仍在准备，也可以直接进入浏览。",Ac.hidden=!1)},2500))}function Cr(n){if(_s||ms)return;clearTimeout(Gu),clearTimeout(Wa),Wa=0,ms=!0;let e=++Vu;un.dataset.state=n,Uc(100,n==="playing"?"画面就绪，正在入境":"正在入境"),un.classList.add("leaving"),setTimeout(()=>{if(e===Vu&&(_s=!0,ms=!1,qu.classList.remove("film-entering"),un.classList.remove("leaving"),un.hidden=!0,Cc.forEach((t,i)=>{i.inert=t}),Cc.clear(),window.dispatchEvent(new CustomEvent("agate:entry-ready",{detail:{reason:n,quality:Zn}})),Ya())){let t=document.querySelector("#home-film-title");t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})}},qa.matches?0:250)}function Wu(n,e=!1){Ar=e,On(),Xa.textContent=e?"轻点播放，开启实景影像":"实景封面 · 轻点播放可重试",!(_s||ms)&&(un.dataset.state=e?"awaiting-play":"error",gm.textContent=n,Ga.textContent=e?"影像已准备好，点击播放或直接进入。":"可以重新准备，也可以直接进入浏览。",Ga.hidden=!1,Ac.hidden=!1,_m.textContent=e?"进入并播放":"重新准备",ym.disabled=!1)}function Ob(n,e){return new Promise((t,i)=>{let s=["loadedmetadata","loadeddata","canplay","progress","seeked","timeupdate"],r=!1,a=()=>{clearTimeout(h),s.forEach(d=>ze.removeEventListener(d,c)),ze.removeEventListener("error",l),n.removeEventListener("abort",o)},o=()=>{a(),i(new DOMException("Cancelled","AbortError"))},l=()=>{a(),i(new DOMException("Video unavailable","NotSupportedError"))},c=()=>{if(e!==Fn){o();return}if(ze.readyState>=1&&!r){r=!0;let g=Math.min(fm,Math.max(0,ze.duration-.1));fm=0,g>0&&Math.abs(ze.currentTime-g)>.1&&(ze.currentTime=g)}let d=Mm(),u=Math.min(Nn.startupBufferSeconds,Math.max(.05,ze.duration-ze.currentTime));it.dataset.bufferedAhead=d.toFixed(2),!_s&&!ms&&Uc(98,"正在唤醒流畅画面");let f=!ze.paused&&ze.currentTime>0;r&&!ze.seeking&&ze.readyState>=2&&(d>=u-.04||f)&&(a(),t())},h=setTimeout(()=>{a(),i(new Error("Opening buffer timed out"))},45e3);s.forEach(d=>ze.addEventListener(d,c)),ze.addEventListener("error",l),n.addEventListener("abort",o,{once:!0}),c()})}function kb(n){return new Promise((e,t)=>{let i,s=ze.currentTime,r=()=>{clearTimeout(o),i!==void 0&&ze.cancelVideoFrameCallback?.(i),n.removeEventListener("abort",a)},a=()=>{r(),t(new DOMException("Cancelled","AbortError"))},o=setTimeout(()=>{r(),ze.videoWidth>0&&ze.readyState>=2&&!ze.paused&&ze.currentTime>s?e():t(new Error("First video frame not ready"))},3e3);n.addEventListener("abort",a,{once:!0}),ze.requestVideoFrameCallback&&(i=ze.requestVideoFrameCallback(()=>{r(),e()}))})}async function wm(n){ze.muted=!0,ze.defaultMuted=!0,await ze.play(),await kb(Er.signal),n===Fn&&(Mn=!0,Sn=!1,Ar=!1,it.dataset.firstFrame="true",it.dataset.videoQuality=Zn,it.dataset.rendition=String(Rc.height),it.dataset.entryBufferedSeconds=Mm().toFixed(2),it.dataset.entryVideoSeconds=String(ze.currentTime),it.classList.add("video-ready"),On(),Cr("playing"),gs()?Nc():Pr())}async function Rr(n=Zn,e=!1){let t=++Fn;Pc++,Er?.abort(),Er=new AbortController,clearTimeout(Xu),Zn="1080p",Rc=xm(),Mn=!1,Ic=!1,Sn=!0,Ar=!1,Tr=!1,it.dataset.firstFrame="false",it.dataset.playbackMode="layered-hq-1080p",Sm(),On();try{let i=await window.agateFilmLoader.load(e);if(t!==Fn||(it.dataset.downloadComplete=String(i.complete),it.dataset.downloadBytes=String(i.received),it.dataset.cacheSource=i.source,it.dataset.filmTier=i.kind,Rc=i.item,ze.muted=!0,ze.defaultMuted=!0,ze.preload="auto",ze.loop=!0,ze.src!==i.url&&(ze.pause(),it.classList.remove("video-ready"),ze.src=i.url,ze.load()),await Ob(Er.signal,t),t!==Fn))return;Ic=!0,await wm(t)}catch(i){if(t!==Fn||i.name==="AbortError")return;if(Sn=!1,On(),i.name==="NotAllowedError"){Wu("开场画面已准备好",!0);return}Wu("实景影像暂未准备完成")}}function Pr(){Pc++,it.querySelectorAll(".home-film-video").forEach(n=>n.pause()),clearTimeout(Xu),On()}async function Em(){if(!Mn||!gs())return;let n=++Pc;try{if(await ze.play(),n!==Pc)return;if(!gs()){ze.pause();return}On(),Nc()}catch{On(),Xa.textContent="点击播放影像，继续观看"}}function $a(){Sn||(Mn&&gs()?(Em(),Dc()):Pr())}var Sr=null,Ha=null,Tc=null,Lc=null,mm;async function Nc(){if(it.dataset.filmTier!=="full"){if(Sr){Dc();return}return Ha||(Ha=window.agateFilmLoader.loadFull().then(n=>{Sr=n,it.dataset.fullCached="true",it.dataset.fullBytes=String(n.received),Dc()}).catch(()=>{it.dataset.fullCached="retry",clearTimeout(mm),mm=setTimeout(()=>{gs()&&Nc()},15e3)}).finally(()=>{Ha=null}),Ha)}}async function Dc(){if(!Sr||Tc||!Mn||!gs()||it.dataset.filmTier==="full")return;let n=ze,e=Fn,t=document.createElement("video");return t.className="home-film-video",t.id="home-film-upgrade",t.setAttribute("aria-hidden","true"),t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.style.opacity="0",t.style.transition="opacity .55s ease",it.append(t),Tc=(async()=>{try{if(await new Promise((i,s)=>{let r=()=>{clearTimeout(a),i()},a=setTimeout(()=>s(Error("Upgrade decode timed out")),1e4);t.addEventListener("loadedmetadata",r,{once:!0}),t.addEventListener("error",()=>{clearTimeout(a),s(Error("Upgrade unavailable"))},{once:!0}),t.src=Sr.url,t.load()}),t.currentTime=Math.min(Lc??Nn.opening1080.mainTime,t.duration-.1),await t.play(),await new Promise((i,s)=>{let r,a=setTimeout(()=>{r!==void 0&&t.cancelVideoFrameCallback?.(r),s(Error("Upgrade frame unavailable"))},3e3);t.requestVideoFrameCallback?r=t.requestVideoFrameCallback(()=>{clearTimeout(a),i()}):t.addEventListener("timeupdate",()=>{clearTimeout(a),i()},{once:!0})}),e!==Fn||ze!==n||!gs())return;n.id="home-film-opening-video",t.id="home-film-video",t.removeAttribute("aria-hidden"),ze=t,Tm(t),it.dataset.filmTier="full",it.dataset.cacheSource=Sr.source,it.dataset.downloadBytes=String(Sr.received),Lc=null,t.getBoundingClientRect(),t.style.opacity="1",On(),await new Promise(i=>setTimeout(i,600)),n.pause(),n.remove()}catch{it.dataset.upgradeState="deferred"}finally{ze!==t&&(t.pause(),t.remove()),Tc=null}})(),Tc}window.agateEntrance={retry(){Ar&&Ic?(Sn=!0,Ac.hidden=!0,wm(Fn).catch(()=>{Sn=!1,Wu("轻点播放，开启实景影像",!0)})):Rr(Zn,!0)},skip(){Cr("skipped")}};zu.onclick=()=>{if(Ar&&Ic){window.agateEntrance.retry();return}if(!Mn){Rr(Zn,!0);return}ze.paused?(Tr=!1,Em()):(Tr=!0,Pr())};it.querySelectorAll("[data-film-chapter]").forEach(n=>n.onclick=()=>{let e=bm.find(t=>t.chapter===Number(n.dataset.filmChapter));if(e){if(!Mn){Lc=e.time,Rr(Zn);return}if(it.dataset.filmTier!=="full"){Lc=e.time,Xa.textContent="正在准备主题镜头 · 高清开场继续播放",Nc(),Dc();return}ze.currentTime=e.time}});function Tm(n){n.addEventListener("timeupdate",()=>{if(n!==ze)return;let e=n.currentTime,t=it.dataset.filmTier==="opening"?1:[...bm].reverse().find(i=>e>=i.time)?.chapter||0;it.querySelectorAll("[data-film-chapter]").forEach(i=>i.classList.toggle("active",Number(i.dataset.filmChapter)===t)),Pb.style.width=Number.isFinite(n.duration)?`${e/n.duration*100}%`:"0%"}),n.addEventListener("playing",()=>{n===ze&&(clearTimeout(Xu),On())}),n.addEventListener("pause",()=>{n===ze&&On()})}Tm(ze);new IntersectionObserver(n=>{vm=n[0].isIntersecting,$a()},{threshold:.12}).observe(it);document.addEventListener("visibilitychange",()=>{document.hidden&&wt.open&&Qt.pause(),$a()});window.addEventListener("hashchange",()=>{wt.open&&wt.close(),Ya()?!Mn&&!qa.matches?Rr(Zn):$a():(Sn&&(Fn++,Er?.abort(),Sn=!1),Cr("route"),Pr())});qa.addEventListener("change",()=>{qa.matches?(Tr=!0,Sn&&(Fn++,Er?.abort(),Sn=!1),Pr(),Cr("reduced-motion")):!Mn&&Ya()?Rr(Zn):$a()});un.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let e=[...un.querySelectorAll("button:not(:disabled)")].filter(s=>!s.closest("[hidden]"));if(!e.length){n.preventDefault();return}let t=e.indexOf(document.activeElement),i=n.shiftKey?t<=0?e.length-1:t-1:(t+1)%e.length;n.preventDefault(),e[i].focus()});function Bb(){if(wt.open)return;Va++,Pr(),Hu=window.agateMusic?.suspendForFilm?.()||null,wr.textContent="正在准备玛瑙主题片…",wt.showModal();let n=`./assets/home-film/${Nn.storyHd.file}`;Qt.getAttribute("src")!==n&&(Qt.src=n,Qt.load()),Qt.currentTime=0,Qt.muted=!1,Qt.volume=1;let e=Va;Qt.play().then(()=>{if(e===Va){if(!wt.open){Qt.pause();return}wr.textContent=""}}).catch(t=>{e!==Va||!wt.open||(wr.textContent=t.name==="NotAllowedError"?"请点击播放键开启原声。":"主题片暂未载入，可通过下方来源观看原片。")})}document.querySelector("#home-film-watch").onclick=Bb;document.querySelector("#home-film-close").onclick=()=>wt.close();wt.addEventListener("close",()=>{Va++,Qt.pause(),Hu?.(),Hu=null,$a()});wt.addEventListener("click",n=>{if(n.target===wt){let e=wt.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&wt.close()}});Qt.addEventListener("playing",()=>{wt.open?wr.textContent="":Qt.pause()});Qt.addEventListener("error",()=>{wr.textContent="主题片暂未载入，可通过下方来源观看原片。"});Qt.addEventListener("ended",()=>{wr.textContent="主题片已结束，可重播或关闭继续创作。"});Rc=xm();On();Ya()?qa.matches?(Tr=!0,Sm(),it.querySelector(".home-film-poster").decode().catch(()=>{}).finally(()=>{Xa.textContent="减少动态效果已启用 · 可手动播放",Cr("reduced-motion")})):Rr(Zn):un.hidden=!0;var kn=document.documentElement,Rm=document.querySelector(".header"),Oc={home:{label:"首页体验导览",panels:["#home-film","#home-overview"],titles:["实景开场","体验导览"]},learn:{label:"观石识艺章节导航",panels:[".home-stone-study",".formation-teaser","#agate-gallery","#home-story"],titles:["读懂纹色","石的来历","实物图鉴","非遗手艺"]}},Pm=matchMedia("(prefers-reduced-motion: reduce)");Object.values(Oc).forEach(n=>{n.panels=n.panels.map(e=>document.querySelector(e)),n.panels.forEach((e,t)=>{e.classList.add("home-snap-panel"),e.dataset.snapPanel=String(t)})});var Jn=[],Am=[],Ui=document.createElement("nav");Ui.className="home-screen-nav";document.body.append(Ui);var Ju='a,button,input,select,textarea,label,canvas,video,dialog,[contenteditable="true"],[role="slider"],.photo-viewport',Ni=0,Tt=null,$u=-1,Yu=0,Cm,Di=0,ju=0,Fc=!1,Zu=null,Im=()=>Object.hasOwn(Oc,location.hash.slice(1)||"home")?Oc[location.hash.slice(1)||"home"]:null,Ku=()=>!!Im(),xs=()=>!Ku()||kn.classList.contains("film-entering")||kn.classList.contains("explore-crossing")||!!document.querySelector("dialog[open]"),Qu=()=>Rm.getBoundingClientRect().height,ja=()=>innerHeight-Qu(),ys=()=>Math.max(0,document.documentElement.scrollHeight-innerHeight),bs=n=>Math.max(0,Math.min(ys(),scrollY+n.getBoundingClientRect().top-Qu()));function Lm(){return[...Jn.map(bs),ys()]}function ed(n=scrollY){let e=0;return Jn.map(bs).forEach((i,s)=>{n>=i-3&&(e=s)}),e}function td(){kn.style.setProperty("--snap-header-height",`${Qu()}px`)}new ResizeObserver(td).observe(Rm);td();function Za(){Ni&&cancelAnimationFrame(Ni),Ni=0,kn.classList.remove("snap-in-motion")}function vs(n=!1){if(!Ku())return;let e=ed(scrollY+Math.min(ja()*.35,150));if(Ui.querySelectorAll("[data-screen]").forEach((t,i)=>{i===e?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),e!==$u){if(n&&!Pm.matches){let t=Jn[e].querySelector(".home-film-content,.hero-copy,.formation-teaser-copy,.photo-section-heading")||Jn[e].firstElementChild;Zu?.cancel(),Zu=t?.animate([{transform:"translateY(12px)",opacity:.75},{transform:"translateY(-2px)",opacity:1,offset:.75},{transform:"translateY(0)",opacity:1}],{duration:520,easing:"cubic-bezier(.2,.75,.25,1)"})}$u=e}}function Ir(n){if(Za(),n=Math.max(0,Math.min(ys(),n)),Pm.matches||Math.abs(n-scrollY)<1){window.scrollTo({top:n,behavior:"instant"}),vs();return}kn.classList.add("snap-in-motion");let e=scrollY,t=0,i=performance.now(),s=i;function r(a){if(xs()){Za();return}let o=Math.min((a-i)/1e3,.028);if(i=a,t+=(200*(n-e)-22*t)*o,e+=t*o,window.scrollTo({top:Math.max(0,Math.min(ys(),e)),behavior:"instant"}),Math.abs(n-e)<.5&&Math.abs(t)<4||a-s>1500){window.scrollTo({top:n,behavior:"instant"}),Ni=0,kn.classList.remove("snap-in-motion"),vs(!0);return}Ni=requestAnimationFrame(r)}Ni=requestAnimationFrame(r)}function Dm(n){let e=ed(),t=Jn[e],i=bs(t),s=i+t.getBoundingClientRect().height-ja();return s-i<6?!1:n>0?scrollY<s-3:scrollY>i+3}function zb(n){let e=Lm();return n>0?e.find(t=>t>scrollY+4)??ys():[...e].reverse().find(t=>t<scrollY-4)??0}function Um(n){return xs()||Dm(n)?!1:(Ir(zb(n)),!0)}Ui.addEventListener("click",n=>{let e=n.target.closest("[data-screen]");e&&!xs()&&Ir(bs(Jn[Number(e.dataset.screen)]))});document.addEventListener("click",n=>{let e=n.target.closest("[data-panel-link]");if(e&&!xs()){let t=Jn[Number(e.dataset.panelLink)];t&&Ir(bs(t))}});window.addEventListener("wheel",n=>{if(xs()||n.ctrlKey||n.metaKey||Math.abs(n.deltaX)>Math.abs(n.deltaY)||n.target.closest(Ju))return;let e=Math.sign(n.deltaY);if(!e)return;let t=performance.now(),i=t-ju;if(ju=t,Ni||Fc&&i<180){n.preventDefault();return}i>=180&&(Fc=!1,Di=0),!Dm(e)&&(n.preventDefault(),Di&&Math.sign(Di)!==e&&(Di=0),Di+=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?ja():1),Math.abs(Di)>=28&&(Fc=!0,Di=0,Um(e)))},{passive:!1});document.addEventListener("keydown",n=>{if(xs()||n.defaultPrevented||n.ctrlKey||n.altKey||n.metaKey||n.target.closest(Ju))return;let e=["PageDown","ArrowDown"," "].includes(n.key)?n.shiftKey?-1:1:["PageUp","ArrowUp"].includes(n.key)?-1:0;if(n.key==="Home"||n.key==="End"){n.preventDefault(),Ir(n.key==="Home"?0:ys());return}e&&Um(e)&&n.preventDefault()});document.addEventListener("pointerdown",n=>{if(xs()||n.pointerType!=="mouse"||n.button!==0||n.ctrlKey||n.metaKey||n.target.closest(Ju+",h1,h2,h3,p,small,strong"))return;let e=n.target.closest(".home-snap-panel");e&&(Za(),Tt={id:n.pointerId,panel:e,startY:n.clientY,startX:n.clientX,scroll:scrollY,at:ed(),previousY:n.clientY,previousTime:performance.now(),velocity:0,active:!1})});document.addEventListener("pointermove",n=>{if(!Tt||n.pointerId!==Tt.id)return;let e=Tt.startY-n.clientY,t=Tt.startX-n.clientX;if(!Tt.active){if(Math.abs(t)>Math.abs(e)+8){Tt=null;return}if(Math.abs(e)<7)return;Tt.active=!0,kn.classList.add("snap-dragging"),Tt.panel.setPointerCapture(n.pointerId)}n.preventDefault();let i=performance.now();Tt.velocity=(Tt.previousY-n.clientY)/Math.max(1,i-Tt.previousTime),Tt.previousY=n.clientY,Tt.previousTime=i,window.scrollTo({top:Math.max(0,Math.min(ys(),Tt.scroll+e)),behavior:"instant"})});function Nm(n){if(!Tt||n.pointerId!==Tt.id)return;let e=Tt;if(Tt=null,e.active){let t=e.startY-n.clientY,i=Math.sign(t),s=Lm(),r=bs(Jn[e.at]),a=r+Jn[e.at].getBoundingClientRect().height-ja(),o=a-r>6&&scrollY>=r&&scrollY<=a,l;o?l=scrollY:Math.abs(t)>Math.min(85,ja()*.12)||performance.now()-e.previousTime<100&&Math.abs(e.velocity)>.35?l=s[Math.max(0,Math.min(s.length-1,e.at+i))]:l=s.reduce((c,h)=>Math.abs(h-scrollY)<Math.abs(c-scrollY)?h:c,s[0]),Ir(l),kn.classList.remove("snap-dragging"),e.panel.hasPointerCapture(n.pointerId)&&e.panel.releasePointerCapture(n.pointerId)}}document.addEventListener("pointerup",Nm);document.addEventListener("pointercancel",Nm);window.addEventListener("scroll",()=>{Ku()&&(Yu||(Yu=requestAnimationFrame(()=>{Yu=0,vs()})),clearTimeout(Cm),Cm=setTimeout(()=>{!Ni&&!Tt&&vs(!0)},130))},{passive:!0});window.addEventListener("resize",()=>{td(),vs()});function Fm(){Za(),Tt=null,Di=0,ju=0,Fc=!1,Zu?.cancel(),kn.classList.remove("snap-dragging");let n=Im();Jn=n?.panels||[],Am=n?.titles||[],kn.classList.toggle("snap-home",!!n),Ui.hidden=!n,$u=-1,n?(Ui.setAttribute("aria-label",n.label),Ui.innerHTML=Am.map((e,t)=>`<button data-screen="${t}" aria-label="第${t+1}屏：${e}"><i aria-hidden="true"></i><span>${String(t+1).padStart(2,"0")} / ${e}</span></button>`).join("")+'<small aria-hidden="true">SCROLL / DRAG</small>'):Ui.replaceChildren(),requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"instant"}),vs()})}window.addEventListener("hashchange",Fm);Fm();function nd(){location.hash&&location.hash!=="#home"||kn.classList.contains("film-entering")||document.querySelectorAll("#home-overview img[data-entry-src]").forEach(n=>{let e=()=>{n.naturalWidth>1&&n.decode().catch(()=>{}).then(()=>n.parentElement.classList.add("photo-ready"))};n.addEventListener("load",e),n.loading="eager",n.fetchPriority="high",n.src=n.dataset.entrySrc,delete n.dataset.entrySrc,e()})}window.addEventListener("agate:entry-ready",nd,{once:!0});window.addEventListener("hashchange",nd);nd();function kc(n,{instant:e=!1}={}){if(location.hash&&location.hash!=="#home")return;let t=Oc.home.panels[n];if(!t)return;Za();let i=bs(t);e?(window.scrollTo({top:i,behavior:"instant"}),vs()):Ir(i)}var Om="agate-explore-sound-muted-v1",wn=!1,Fi=null,Oi=null,dn=null,km=0,ki=0;try{wn=localStorage.getItem(Om)==="true"}catch{}var Bm=()=>document.querySelectorAll("[data-explore-sound]");function zm(){Bm().forEach(n=>{n.setAttribute("aria-pressed",String(!wn)),n.setAttribute("aria-label",wn?"开启探索音效":"关闭探索音效"),n.innerHTML=`<span aria-hidden="true">${wn?"♩":"♪"}</span> 音效${wn?"已关":"已开"}`})}function Hb(n,e,{brief:t=!1,volume:i=.15}={}){let s=n.currentTime+.012,r=n.createGain(),a=[],o=!1;r.gain.value=i,r.connect(e);let l=(u,f,g,_)=>{[1,2.37,4.91].forEach((m,p)=>{let E=n.createOscillator(),v=n.createGain();E.type="sine",E.frequency.setValueAtTime(f*m,s+u),E.frequency.exponentialRampToValueAtTime(f*m*.998,s+u+g);let y=_*[1,.2,.065][p];v.gain.setValueAtTime(1e-5,s+u),v.gain.exponentialRampToValueAtTime(y,s+u+.008),v.gain.exponentialRampToValueAtTime(1e-5,s+u+g),E.connect(v),v.connect(r),E.start(s+u),E.stop(s+u+g+.04),a.push(E,v)})};if(l(0,660,t?.5:1.1,.58),!t){let u=Math.ceil(n.sampleRate*1.35),f=n.createBuffer(1,u,n.sampleRate),g=f.getChannelData(0),_=8153,m=0;for(let y=0;y<u;y++)_=_*16807%2147483647,m=(m+.075*(_/10737418235e-1-1))/1.075,g[y]=Math.max(-1,Math.min(1,m))*.12;let p=n.createBufferSource(),E=n.createBiquadFilter(),v=n.createGain();p.buffer=f,E.type="bandpass",E.Q.value=.55,E.frequency.setValueAtTime(700,s+.12),E.frequency.exponentialRampToValueAtTime(2100,s+1.1),v.gain.setValueAtTime(1e-5,s+.12),v.gain.linearRampToValueAtTime(.17,s+.7),v.gain.exponentialRampToValueAtTime(1e-5,s+1.42),p.connect(E),E.connect(v),v.connect(r),p.start(s+.12),p.stop(s+1.5),a.push(p,E,v),l(1.18,880,1.35,.29),l(1.68,990,1.28,.23),l(2.15,1320,1.1,.16)}let c=t?.65:3.45,h=()=>{a.forEach(u=>{try{u.disconnect()}catch{}}),r.disconnect()},d=setTimeout(h,(c+.1)*1e3);return{duration:c,stop(){if(o)return;o=!0,clearTimeout(d);let u=n.currentTime;r.gain.cancelScheduledValues(u),r.gain.setTargetAtTime(0,u,.018),a.forEach(f=>{if(f.stop)try{f.stop(u+.08)}catch{}}),d=setTimeout(h,110)}}}function id({brief:n=!1}={}){let e=++ki;dn?.stop(),dn=null;let t=window.agateMusic?.audio;if(wn||document.hidden||t?.muted||t?.volume===0)return()=>{};try{let i=window.AudioContext||window.webkitAudioContext;if(!i)return()=>{};Fi||=new i,Oi||(Oi=Fi.createAnalyser(),Oi.fftSize=1024,Oi.connect(Fi.destination));let s=()=>{e!==ki||wn||document.hidden||Fi.state!=="running"||t?.muted||t?.volume===0||(dn=Hb(Fi,Oi,{brief:n,volume:.12}),km++)};Fi.state==="running"?s():Fi.resume().then(s).catch(()=>{})}catch{}return()=>{e===ki&&(ki++,dn?.stop(),dn=null)}}function Vb(){ki++,wn=!wn;try{localStorage.setItem(Om,String(wn))}catch{}wn&&(dn?.stop(),dn=null),zm()}Bm().forEach(n=>n.addEventListener("click",Vb));zm();window.agateMusic?.audio.addEventListener("volumechange",()=>{let n=window.agateMusic.audio;(n.muted||n.volume===0)&&(ki++,dn?.stop(),dn=null)});document.addEventListener("visibilitychange",()=>{document.hidden&&(ki++,dn?.stop(),dn=null)});window.addEventListener("hashchange",()=>{ki++,dn?.stop(),dn=null});window.agateSound={getState(){let n=0;if(Oi){let e=new Float32Array(Oi.fftSize);Oi.getFloatTimeDomainData(e),n=Math.sqrt(e.reduce((t,i)=>t+i*i,0)/e.length)}return{muted:wn,contextState:Fi?.state||"uncreated",plays:km,rms:n}}};var fn=document.querySelector("#home-overview"),sd=document.querySelector("#guide-replay"),Ja=[...fn.querySelectorAll(".home-entry-card")],Bc=matchMedia("(prefers-reduced-motion: reduce)"),Ka=[],zc=[],Qa=0,rd=!1,eo=new Set,Ss=!1;function Hm(){Qa++,Ka.forEach(n=>n.cancel()),Ka=[],zc.forEach(clearTimeout),zc=[]}function Ms(n,e=0,{distance:t=20,duration:i=650}={}){if(!n)return;let s=n.animate([{opacity:0,transform:`translateY(${t}px)`},{opacity:1,transform:"translateY(0)"}],{duration:i,delay:e,fill:"backwards",easing:"cubic-bezier(.2,.7,.25,1)"});Ka.push(s)}function ad(n){n.classList.remove("guide-card-pending","guide-card-entering")}function Vm(n,e=0){if(eo.has(n))return;eo.add(n),n.classList.remove("guide-card-pending"),n.classList.add("guide-card-entering"),Ms(n,e,{distance:32,duration:760});let i=n.querySelector(".entry-card-photo").animate([{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)"}],{duration:850,delay:e+90,fill:"backwards",easing:"cubic-bezier(.2,.65,.25,1)"});Ka.push(i),[".entry-card-kicker","h3","p",".entry-card-result",".entry-card-link"].forEach((r,a)=>Ms(n.querySelector(r),e+200+a*95,{distance:12,duration:500}));let s=Qa;zc.push(setTimeout(()=>{Qa===s&&ad(n)},e))}function Gb(n){let e=n.getBoundingClientRect(),t=document.querySelector(".header").getBoundingClientRect().height;return e.top<innerHeight-20&&e.bottom>t+20}function od(){sd.textContent=Ss?"直接显示全部 ↘":"重看导览动画 ↻",sd.setAttribute("aria-label",Ss?"跳过导览展开动画，直接显示全部内容":"重新播放导览展开动画")}function ws(){Hm(),Ja.forEach(ad),fn.classList.remove("guide-preparing"),fn.classList.add("guide-visible"),eo=new Set(Ja),Ss=!1,od()}function to(){Hm(),rd=!0,Ss=!0,eo=new Set,fn.classList.add("guide-preparing"),Ja.forEach(n=>{n.classList.remove("guide-card-entering"),n.classList.add("guide-card-pending")}),od()}function Hc(){if(Bc.matches){ws();return}Ss||to(),fn.classList.remove("guide-preparing"),fn.classList.add("guide-visible"),Ms(fn.querySelector(".overview-heading .eyebrow"),40,{distance:12,duration:580}),Ms(fn.querySelector("#home-overview-title"),210,{distance:25,duration:850}),Ms(fn.querySelector(".overview-intro"),540,{distance:18,duration:750}),Ms(fn.querySelector(".guide-replay-row"),760,{distance:10,duration:550}),Ja.filter(Gb).forEach((e,t)=>Vm(e,1050+t*360)),Ms(fn.querySelector(".overview-footer"),2150,{distance:16,duration:650});let n=Qa;zc.push(setTimeout(()=>{Qa===n&&(Ss=!1,od())},3700))}var Wb=new IntersectionObserver(n=>{!rd||fn.classList.contains("guide-preparing")||Bc.matches||n.filter(e=>e.isIntersecting).forEach(e=>Vm(e.target,90))},{threshold:.12});Ja.forEach(n=>Wb.observe(n));sd.onclick=()=>{Ss?ws():(to(),Hc())};window.addEventListener("hashchange",ws);Bc.addEventListener("change",()=>{Bc.matches&&ws()});fn.addEventListener("focusin",n=>{let e=n.target.closest(".home-entry-card");e&&(eo.add(e),Ka.forEach(t=>{let i=t.effect?.target;if(i===e||e.contains(i))try{t.finish()}catch{}}),ad(e))});function Gm(){return rd}var cd=document.documentElement,Et=document.querySelector("#begin-exploration"),ud=document.querySelector("#home-overview"),Wm=document.querySelector("#home-overview-title"),en=document.createElement("div");en.className="explore-portal";en.hidden=!0;en.setAttribute("aria-hidden","true");en.innerHTML='<div class="portal-grain"></div><div class="portal-contours"><i></i><i></i><i></i><i></i></div><div class="portal-words"><small>FOLLOW THE PATTERN</small><span>循纹而行<span>入境成艺</span></span><i></i></div>';document.body.append(en);var dd=matchMedia("(prefers-reduced-motion: reduce)"),qb=matchMedia("(hover: hover) and (pointer: fine)"),At=null,ld=0,no=null,hd=()=>!location.hash||location.hash==="#home";function qm(){Wm.setAttribute("tabindex","-1"),Wm.focus({preventScroll:!0})}function fd(){Et.style.setProperty("--magnet-x","0px"),Et.style.setProperty("--magnet-y","0px"),Et.style.setProperty("--light-x","50%"),Et.style.setProperty("--light-y","50%")}Et.addEventListener("pointermove",n=>{!qb.matches||dd.matches||At||(no={x:n.clientX,y:n.clientY},!ld&&(ld=requestAnimationFrame(()=>{if(ld=0,!no||At)return;let e=Et.getBoundingClientRect(),t=no.x-e.left,i=no.y-e.top;Et.style.setProperty("--magnet-x",`${(t/e.width-.5)*9}px`),Et.style.setProperty("--magnet-y",`${(i/e.height-.5)*7}px`),Et.style.setProperty("--light-x",`${t/e.width*100}%`),Et.style.setProperty("--light-y",`${i/e.height*100}%`)})))});Et.addEventListener("pointerleave",()=>{no=null,fd()});function Es(n,{land:e=!0,focus:t=!0,skip:i=!1}={}){At===n&&(At=null,clearTimeout(n.timer),(i||!e)&&(n.stopSound?.(),ws()),n.animations.forEach(s=>s.cancel()),e&&hd()&&kc(1,{instant:!0}),cd.classList.remove("explore-crossing"),en.hidden=!0,en.removeAttribute("style"),Et.classList.remove("engaged"),Et.disabled=!1,Et.removeAttribute("aria-busy"),n.inert.forEach(([s,r])=>s.inert=r),fd(),Et.dataset.exploreState="idle",hd()&&e&&(ud.dataset.exploreArrival="true",t&&qm()))}function Vc(n,e,t,i){let s=e.animate(t,{fill:"both",...i});return n.animations.push(s),s.finished.catch(()=>{})}async function Xb(){if(At||!hd()||cd.classList.contains("film-entering")||document.querySelector("dialog[open]"))return;if(dd.matches){id({brief:!0}),ws(),kc(1,{instant:!0}),ud.dataset.exploreArrival="true",qm();return}let n=Et.querySelector(".explore-stone").getBoundingClientRect(),e=n.left+n.width/2,t=n.top+n.height/2,i=Math.ceil(Math.hypot(Math.max(e,innerWidth-e),Math.max(t,innerHeight-t)))+8,s={animations:[],inert:[],timer:0,stopSound:id()};At=s,Et.disabled=!0,Et.setAttribute("aria-busy","true"),Et.classList.add("engaged"),Et.dataset.exploreState="crossing",document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(l=>{s.inert.push([l,l.inert]),l.inert=!0}),cd.classList.add("explore-crossing"),en.hidden=!1,en.style.setProperty("--portal-x",`${e}px`),en.style.setProperty("--portal-y",`${t}px`),s.timer=setTimeout(()=>Es(s,{skip:!0}),3700);let r=innerWidth<560,a=r?760:880,o=en.querySelector(".portal-words");Vc(s,en.querySelector(".portal-contours"),[{transform:"translate(-50%,-50%) scale(.12)",opacity:.2},{transform:"translate(-50%,-50%) scale(1.15)",opacity:.8}],{duration:2100,easing:"cubic-bezier(.15,.6,.25,1)"}),Vc(s,o,[{opacity:0,transform:"translateY(17px)"},{opacity:1,transform:"translateY(0)"}],{duration:700,delay:360,easing:"ease-out"}),await Vc(s,en,[{clipPath:`circle(0px at ${e}px ${t}px)`,opacity:1},{clipPath:`circle(${i}px at ${e}px ${t}px)`,opacity:1}],{duration:a,easing:"cubic-bezier(.65,0,.2,1)"}),At===s&&(to(),kc(1,{instant:!0}),Et.dataset.exploreState="revealing",await new Promise(l=>setTimeout(l,r?470:620)),At===s&&(Hc(),await Vc(s,en,[{opacity:1},{opacity:0}],{duration:r?850:1e3,easing:"cubic-bezier(.25,.5,.3,1)"}),At===s&&Es(s)))}Et.addEventListener("click",Xb);document.addEventListener("keydown",n=>{At&&(n.key==="Escape"?(n.preventDefault(),Es(At,{skip:!0})):["Tab"," ","PageDown","PageUp","Home","End","ArrowUp","ArrowDown"].includes(n.key)&&n.preventDefault())},{capture:!0});var Xm=n=>{At&&n.preventDefault()};window.addEventListener("wheel",Xm,{passive:!1,capture:!0});window.addEventListener("touchmove",Xm,{passive:!1,capture:!0});window.addEventListener("hashchange",()=>{At&&Es(At,{land:!1,focus:!1})});window.addEventListener("resize",()=>{At&&Es(At,{skip:!0})});document.addEventListener("visibilitychange",()=>{document.hidden&&At&&Es(At,{focus:!1,skip:!0})});dd.addEventListener("change",()=>{At&&Es(At),fd()});new IntersectionObserver(n=>{n.some(e=>e.isIntersecting)&&!At&&!Gm()&&(to(),Hc())},{threshold:.08}).observe(ud);
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
