var bf=Object.defineProperty;var Vi=(i,t,e)=>()=>{if(e)throw e[0];try{return i&&(t=i(i=0)),t}catch(n){throw e=[n],n}};var Sf=(i,t)=>{for(var e in t)bf(i,e,{get:t[e],enumerable:!0})};function Li(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Zt(i,t,e){return Math.max(t,Math.min(e,i))}function Mc(i,t){return(i%t+t)%t}function wf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tf(i,t,e){return i!==t?(e-i)/(t-i):0}function Zs(i,t,e){return(1-e)*i+e*t}function Af(i,t,e,n){return Zs(i,t,1-Math.exp(-e*n))}function Cf(i,t=1){return t-Math.abs(Mc(i,t*2)-t)}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function If(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Pf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lf(i,t){return i+Math.random()*(t-i)}function Df(i){return i*(.5-Math.random())}function Uf(i){i!==void 0&&(Ph=i);let t=Ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*js}function Ff(i){return i*as}function Of(i){return(i&i-1)===0&&i!==0}function kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ss(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function bc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){let i=ls("canvas");return i.style.display="block",i}function cs(i){i in Dh||(Dh[i]=!0,console.warn(i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Hf(){let i={enabled:!0,workingColorSpace:Si,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=kn(s.r),s.g=kn(s.g),s.b=kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Si]:{primaries:t,whitePoint:n,transfer:tr,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Uh,fromXYZ:Nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}function kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);let a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}function tp(i,t,e,n,s,r,o,a){let l;if(t.side===Le?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Bn,a),l===null)return null;xo.copy(a),xo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xo);return c<e.near||c>e.far?null:{distance:c,point:xo.clone(),object:i}}function Mo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,go),i.getVertexPosition(l,_o),i.getVertexPosition(c,yo);let h=tp(i,t,e,n,go,_o,yo,qh);if(h){let u=new k;Jn.getBarycoord(qh,go,_o,yo,u),s&&(h.uv=Jn.getInterpolatedAttribute(s,a,l,c,u,new mt)),r&&(h.uv1=Jn.getInterpolatedAttribute(r,a,l,c,u,new mt)),o&&(h.normal=Jn.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};Jn.getNormal(go,_o,yo,d.normal),h.face=d,h.barycoord=u}return h}function Di(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Di(i[e]);for(let s in n)t[s]=n[s]}return t}function ep(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Sc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}function Ec(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}function jh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function lp(i,t){let e=1-i;return e*e*t}function cp(i,t){return 2*(1-i)*i*t}function hp(i,t){return i*i*t}function Js(i,t,e,n){return lp(i,t)+cp(i,e)+hp(i,n)}function up(i,t){let e=1-i;return e*e*e*t}function dp(i,t){let e=1-i;return 3*e*e*i*t}function fp(i,t){return 3*(1-i)*i*i*t}function pp(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return up(i,t)+dp(i,e)+fp(i,n)+pp(i,s)}function mp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=xp(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){let f=i[d],g=i[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return _r(r,o,e,a,l,c,0),o}function Xu(i,t,e,n,s){let r;if(s===Pp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Zh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Zh(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(vr(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||_e(e.prev,e,e.next)===0)){if(vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function _r(i,t,e,n,s,r,o){if(!i)return;!o&&r&&wp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?_p(i,n,s,r):gp(i)){t.push(l.i,i.i,c.i),vr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=yp(Ti(i),t),_r(i,t,e,n,s,r,2)):o===2&&vp(i,t,e,n,s,r):_r(Ti(i),t,e,n,s,r,1);break}}}function gp(i){let t=i.prev,e=i,n=i.next;if(_e(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),d=Math.max(s,r,o),f=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&$s(s,a,r,l,o,c,g.x,g.y)&&_e(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function _p(i,t,e,n){let s=i.prev,r=i,o=i.next;if(_e(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,u,d),_=Math.max(a,l,c),m=Math.max(h,u,d),p=Jl(f,g,t,e,n),T=Jl(_,m,t,e,n),x=i.prevZ,y=i.nextZ;for(;x&&x.z>=p&&y&&y.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&$s(a,h,l,u,c,d,x.x,x.y)&&_e(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&$s(a,h,l,u,c,d,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function yp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!ys(n,s)&&Yu(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),vr(e),vr(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function vp(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cp(o,a)){let l=$u(o,a);o=Ti(o,o.next),l=Ti(l,l.next),_r(o,t,e,n,s,r,0),_r(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function xp(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Xu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ap(c))}s.sort(Mp);for(let r=0;r<s.length;r++)e=bp(s[r],e);return e}function Mp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function bp(i,t){let e=Sp(i,t);if(!e)return t;let n=$u(e,i);return Ti(n,n.next),Ti(e,e.next)}function Sp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Ep(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Ep(i,t){return _e(i.prev,i,t.prev)<0&&_e(t.next,i,i.next)<0}function wp(i,t,e,n){let s=i;do s.z===0&&(s.z=Jl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Tp(s)}function Tp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Jl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ap(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function $s(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&qu(i,t,e,n,s,r,o,a)}function Cp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Rp(i,t)&&(yr(i,t)&&yr(t,i)&&Ip(i,t)&&(_e(i.prev,i,t.prev)||_e(i,t.prev,t))||ys(i,t)&&_e(i.prev,i,i.next)>0&&_e(t.prev,t,t.next)>0)}function _e(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function Yu(i,t,e,n){let s=wo(_e(i,t,e)),r=wo(_e(i,t,n)),o=wo(_e(e,n,i)),a=wo(_e(e,n,t));return!!(s!==r&&o!==a||s===0&&Eo(i,e,t)||r===0&&Eo(i,n,t)||o===0&&Eo(e,i,n)||a===0&&Eo(e,t,n))}function Eo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wo(i){return i>0?1:i<0?-1:0}function Rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return _e(i.prev,i,i.next)<0?_e(i,t,i.next)>=0&&_e(i,i.prev,t)>=0:_e(i,t,i.prev)<0||_e(i,i.next,t)<0}function Ip(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function $u(i,t){let e=Kl(i.i,i.x,i.y),n=Kl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Zh(i,t,e,n){let s=Kl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Kl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}function Jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}function Dp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function To(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Up(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ac(i,t,e,n){let s=Gp(n);switch(e){case pc:return i*t;case gc:return i*t/s.components*s.byteLength;case ga:return i*t/s.components*s.byteLength;case _c:return i*t*2/s.components*s.byteLength;case _a:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case ya:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ur:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:case ba:return Math.max(i,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ka:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case za:case Ha:case Va:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gp(i){switch(i){case _n:case hc:return{byteLength:1,components:1};case Ms:case uc:case bs:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case ci:case fa:case Rn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var oi,ai,eu,ic,nu,sc,iu,An,Bn,Le,Cn,Hn,Mi,rc,oc,ac,su,Qn,ru,ou,au,lu,cu,hu,uu,du,Ro,Io,fu,pu,mu,gu,_u,yu,vu,xu,Mu,na,ia,sa,bi,ra,oa,aa,la,lc,bu,Su,Vn,Eu,wu,Tu,ca,Au,Cu,Ru,cc,Ii,Pi,ha,ua,Ir,Po,Kn,Lo,We,Iu,Pr,Xe,da,li,_n,hc,uc,Ms,fa,ci,Rn,bs,pa,ma,Ss,dc,fc,pc,mc,ln,os,Es,gc,ga,_c,_a,ya,Lr,Dr,Ur,Nr,va,xa,Ma,ba,Sa,Ea,wa,Ta,Aa,Ca,Ra,Ia,Pa,La,Da,Ua,Na,Fa,Oa,ka,Ba,za,Ha,Va,Ga,Wa,Xa,qa,Qs,Do,Ao,ql,Yl,$l,Pu,Lu,yc,Du,Gn,we,Si,tr,se,vi,jl,Uu,Nu,Fu,vc,Ou,ku,Bu,zu,Zl,xc,mn,er,Sn,De,Ph,js,as,Fr,mt,an,k,Ml,Lh,$t,bl,Dh,Uh,Nh,ee,Xi,Uo,Vf,hs,Gf,El,Fe,ue,No,En,nr,Fo,ti,Dn,dn,ro,qi,Yi,$i,Xn,qn,mi,Ws,oo,ao,gi,Wf,Xs,Tl,us,Un,Al,lo,Yn,Cl,co,Rl,ds,xe,ji,fn,Xf,qf,$n,ho,je,Fh,Oh,gn,ir,Yf,kh,Zi,Nn,uo,qs,$f,jf,Bh,zh,Hh,Vh,Zf,Ji,Il,Ve,pn,Fn,Pl,On,Ki,Qi,Gh,Ll,Dl,Ul,Nl,Fl,Ol,Jn,Gu,jn,fo,Yt,Ue,Jf,ei,zn,be,po,Kf,Je,sr,rr,pe,Qf,rn,Bl,ts,Ze,Ys,Re,Ke,Wh,_i,mo,Xh,go,_o,yo,zl,vo,qh,xo,de,ni,Wu,np,ip,Qe,or,Zn,Yh,$h,Ne,es,ns,Oo,ar,ko,bn,sp,fs,ii,lr,Hl,rp,op,on,yi,ap,bo,ps,Ei,cr,hr,wi,tn,ms,Bo,So,Vl,Gl,Wl,gs,ur,zo,dr,Ho,fr,pr,mr,Vo,Go,gr,_s,Ql,xi,xr,Lp,wn,Mr,br,Sr,Tn,Er,Wo,Xo,Ai,qo,Yo,$o,en,si,jo,Zo,Jo,wr,ri,Ko,Co,Qo,ju,vs,is,ta,Tr,Ar,Xl,Qh,tu,tc,Ci,ec,Ri,Cr,ea,wc,Np,Tc,Fp,Op,kp,Bp,zp,Hp,Vp,nc,he,sv,xs,Rr,Cc=Vi(()=>{oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},eu=0,ic=1,nu=2,sc=1,iu=2,An=3,Bn=0,Le=1,Cn=2,Hn=0,Mi=1,rc=2,oc=3,ac=4,su=5,Qn=100,ru=101,ou=102,au=103,lu=104,cu=200,hu=201,uu=202,du=203,Ro=204,Io=205,fu=206,pu=207,mu=208,gu=209,_u=210,yu=211,vu=212,xu=213,Mu=214,na=0,ia=1,sa=2,bi=3,ra=4,oa=5,aa=6,la=7,lc=0,bu=1,Su=2,Vn=0,Eu=1,wu=2,Tu=3,ca=4,Au=5,Cu=6,Ru=7,cc=300,Ii=301,Pi=302,ha=303,ua=304,Ir=306,Po=1e3,Kn=1001,Lo=1002,We=1003,Iu=1004,Pr=1005,Xe=1006,da=1007,li=1008,_n=1009,hc=1010,uc=1011,Ms=1012,fa=1013,ci=1014,Rn=1015,bs=1016,pa=1017,ma=1018,Ss=1020,dc=35902,fc=35899,pc=1021,mc=1022,ln=1023,os=1026,Es=1027,gc=1028,ga=1029,_c=1030,_a=1031,ya=1033,Lr=33776,Dr=33777,Ur=33778,Nr=33779,va=35840,xa=35841,Ma=35842,ba=35843,Sa=36196,Ea=37492,wa=37496,Ta=37808,Aa=37809,Ca=37810,Ra=37811,Ia=37812,Pa=37813,La=37814,Da=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,ka=37820,Ba=37821,za=36492,Ha=36494,Va=36495,Ga=36283,Wa=36284,Xa=36285,qa=36286,Qs=2300,Do=2301,Ao=2302,ql=2400,Yl=2401,$l=2402,Pu=3200,Lu=3201,yc=0,Du=1,Gn="",we="srgb",Si="srgb-linear",tr="linear",se="srgb",vi=7680,jl=519,Uu=512,Nu=513,Fu=514,vc=515,Ou=516,ku=517,Bu=518,zu=519,Zl=35044,xc="300 es",mn=2e3,er=2001,Sn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ph=1234567,js=Math.PI/180,as=180/Math.PI;Fr={DEG2RAD:js,RAD2DEG:as,generateUUID:Li,clamp:Zt,euclideanModulo:Mc,mapLinear:wf,inverseLerp:Tf,lerp:Zs,damp:Af,pingpong:Cf,smoothstep:Rf,smootherstep:If,randInt:Pf,randFloat:Lf,randFloatSpread:Df,seededRandom:Uf,degToRad:Nf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:kf,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:zf,normalize:He,denormalize:ss},mt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,a=Math.sin(a*C)/R}let y=a*T;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ml=new k,Lh=new an,$t=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],T=s[1],x=s[4],y=s[7],R=s[2],C=s[5],D=s[8];return r[0]=o*_+a*T+l*R,r[3]=o*m+a*x+l*C,r[6]=o*p+a*y+l*D,r[1]=c*_+h*T+u*R,r[4]=c*m+h*x+u*C,r[7]=c*p+h*y+u*D,r[2]=d*_+f*T+g*R,r[5]=d*m+f*x+g*C,r[8]=d*p+f*y+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bl.makeScale(t,e)),this}rotate(t){return this.premultiply(bl.makeRotation(-t)),this}translate(t,e){return this.premultiply(bl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},bl=new $t;Dh={};Uh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee=Hf();Uo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Xi===void 0&&(Xi=ls("canvas")),Xi.width=t.width,Xi.height=t.height;let s=Xi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Xi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ls("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(kn(e[n]/255)*255):e[n]=kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Vf=0,hs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sl(s[o].image)):r.push(Sl(s[o]))}else r=Sl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};Gf=0,El=new k,Fe=class i extends Sn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Kn,s=Kn,r=Xe,o=li,a=ln,l=_n,c=i.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Li(),this.name="",this.source=new hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(El).x}get height(){return this.source.getSize(El).y}get depth(){return this.source.getSize(El).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Po:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Po:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=cc;Fe.DEFAULT_ANISOTROPY=1;ue=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(p+1)/2,C=(h+d)/4,D=(u+_)/4,F=(g+m)/4;return x>y&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=D/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=F/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=D/r,s=F/r),this.set(n,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Zt(this.x,t.x,e.x),this.y=Zt(this.y,t.y,e.y),this.z=Zt(this.z,t.z,e.z),this.w=Zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Zt(this.x,t,e),this.y=Zt(this.y,t,e),this.z=Zt(this.z,t,e),this.w=Zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},No=class extends Sn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Fe(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends No{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},nr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},Fo=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=We,this.minFilter=We,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ti=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ro.copy(n.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),oo.subVectors(this.max,Ws),qi.subVectors(t.a,Ws),Yi.subVectors(t.b,Ws),$i.subVectors(t.c,Ws),Xn.subVectors(Yi,qi),qn.subVectors($i,Yi),mi.subVectors(qi,$i);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!wl(e,qi,Yi,$i,oo)||(e=[1,0,0,0,1,0,0,0,1],!wl(e,qi,Yi,$i,oo))?!1:(ao.crossVectors(Xn,qn),e=[ao.x,ao.y,ao.z],wl(e,qi,Yi,$i,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Dn=[new k,new k,new k,new k,new k,new k,new k,new k],dn=new k,ro=new ti,qi=new k,Yi=new k,$i=new k,Xn=new k,qn=new k,mi=new k,Ws=new k,oo=new k,ao=new k,gi=new k;Wf=new ti,Xs=new k,Tl=new k,us=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(Tl)),this.expandByPoint(Xs.copy(t.center).sub(Tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Un=new k,Al=new k,lo=new k,Yn=new k,Cl=new k,co=new k,Rl=new k,ds=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Al.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Al);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=Yn.dot(this.direction),l=-Yn.dot(lo),c=Yn.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Al).addScaledVector(lo,d),f}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Cl.subVectors(e,t),co.subVectors(n,t),Rl.crossVectors(Cl,co);let o=this.direction.dot(Rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);let l=a*this.direction.dot(co.crossVectors(Yn,co));if(l<0)return null;let c=a*this.direction.dot(Cl.cross(Yn));if(c<0||l+c>o)return null;let h=-a*Yn.dot(Rl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xe=class i{constructor(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,qf)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),$n.crossVectors(n,je),$n.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),$n.crossVectors(n,je)),$n.normalize(),ho.crossVectors(je,$n),s[0]=$n.x,s[4]=ho.x,s[8]=je.x,s[1]=$n.y,s[5]=ho.y,s[9]=je.y,s[2]=$n.z,s[6]=ho.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],x=n[7],y=n[11],R=n[15],C=s[0],D=s[4],F=s[8],S=s[12],M=s[1],L=s[5],V=s[9],q=s[13],z=s[2],X=s[6],A=s[10],I=s[14],N=s[3],$=s[7],it=s[11],st=s[15];return r[0]=o*C+a*M+l*z+c*N,r[4]=o*D+a*L+l*X+c*$,r[8]=o*F+a*V+l*A+c*it,r[12]=o*S+a*q+l*I+c*st,r[1]=h*C+u*M+d*z+f*N,r[5]=h*D+u*L+d*X+f*$,r[9]=h*F+u*V+d*A+f*it,r[13]=h*S+u*q+d*I+f*st,r[2]=g*C+_*M+m*z+p*N,r[6]=g*D+_*L+m*X+p*$,r[10]=g*F+_*V+m*A+p*it,r[14]=g*S+_*q+m*I+p*st,r[3]=T*C+x*M+y*z+R*N,r[7]=T*D+x*L+y*X+R*$,r[11]=T*F+x*V+y*A+R*it,r[15]=T*S+x*q+y*I+R*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+_*(+e*l*f-e*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*d+s*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,x=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,y=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,R=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,C=e*T+n*x+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=T*D,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*D,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*D,t[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*D,t[4]=x*D,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*D,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*D,t[7]=(o*d*r-h*l*r+h*s*c-e*d*c-o*s*f+e*l*f)*D,t[8]=y*D,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*D,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*p+e*a*p)*D,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*D,t[12]=R*D,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*D,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*D,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*d+e*a*d)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=l*c,x=l*h,y=l*u,R=n.x,C=n.y,D=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+y)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+x)*D,s[9]=(m-T)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);let c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===mn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===er)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=mn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===mn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===er)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new k,fn=new xe,Xf=new k(0,0,0),qf=new k(1,1,1),$n=new k,ho=new k,je=new k,Fh=new xe,Oh=new an,gn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oh.setFromEuler(this),this.setFromQuaternion(Oh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gn.DEFAULT_ORDER="XYZ";ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yf=0,kh=new k,Zi=new an,Nn=new xe,uo=new k,qs=new k,$f=new k,jf=new an,Bh=new k(1,0,0),zh=new k(0,1,0),Hh=new k(0,0,1),Vh={type:"added"},Zf={type:"removed"},Ji={type:"childadded",child:null},Il={type:"childremoved",child:null},Ve=class i extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new k,e=new gn,n=new an,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new $t}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(t,e){return Zi.setFromAxisAngle(t,e),this.quaternion.premultiply(Zi),this}rotateX(t){return this.rotateOnAxis(Bh,t)}rotateY(t){return this.rotateOnAxis(zh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return kh.copy(t).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bh,t)}translateY(t){return this.translateOnAxis(zh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uo.copy(t):uo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(qs,uo,this.up):Nn.lookAt(uo,qs,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf),Il.child=t,this.dispatchEvent(Il),Il.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,$f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,jf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new k(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;pn=new k,Fn=new k,Pl=new k,On=new k,Ki=new k,Qi=new k,Gh=new k,Ll=new k,Dl=new k,Ul=new k,Nl=new ue,Fl=new ue,Ol=new ue,Jn=class i{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Fn.subVectors(n,e),Pl.subVectors(t,e);let o=pn.dot(pn),a=pn.dot(Fn),l=pn.dot(Pl),c=Fn.dot(Fn),h=Fn.dot(Pl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(o,On.y),l.addScaledVector(a,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Nl.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Nl.fromBufferAttribute(t,e),Fl.fromBufferAttribute(t,n),Ol.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nl,r.x),o.addScaledVector(Fl,r.y),o.addScaledVector(Ol,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ki.subVectors(s,n),Qi.subVectors(r,n),Ll.subVectors(t,n);let l=Ki.dot(Ll),c=Qi.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);let h=Ki.dot(Dl),u=Qi.dot(Dl);if(h>=0&&u<=h)return e.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ki,o);Ul.subVectors(t,r);let f=Ki.dot(Ul),g=Qi.dot(Ul);if(g>=0&&f<=g)return e.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Qi,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Gh.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Gh,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ki,o).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},fo={h:0,s:0,l:0};Yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Mc(t,1),e=Zt(e,0,1),n=Zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kl(o,r,t+1/3),this.g=kl(o,r,t),this.b=kl(o,r,t-1/3)}return ee.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=kn(t.r),this.g=kn(t.g),this.b=kn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ee.workingToColorSpace(Ue.copy(this),t),Math.round(Zt(Ue.r*255,0,255))*65536+Math.round(Zt(Ue.g*255,0,255))*256+Math.round(Zt(Ue.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.workingToColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=we){ee.workingToColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(fo);let n=Zs(jn.h,fo.h,e),s=Zs(jn.s,fo.s,e),r=Zs(jn.l,fo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Yt;Yt.NAMES=Gu;Jf=0,ei=class extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Mi,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Io,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ro&&(n.blendSrc=this.blendSrc),this.blendDst!==Io&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zn=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},be=new k,po=new mt,Kf=0,Je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ss(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ss(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ss(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ss(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ss(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),s=He(s,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}},sr=class extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}},rr=class extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}},pe=class extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qf=0,rn=new xe,Bl=new Ve,ts=new k,Ze=new ti,Ys=new ti,Re=new k,Ke=class i extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?rr:sr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Bl.lookAt(t),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Re.addVectors(Ze.min,Ys.min),Ze.expandByPoint(Re),Re.addVectors(Ze.max,Ys.max),Ze.expandByPoint(Re)):(Ze.expandByPoint(Ys.min),Ze.expandByPoint(Ys.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Re));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Re.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Re.add(ts)),s=Math.max(s,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new k,l[F]=new k;let c=new k,h=new k,u=new k,d=new mt,f=new mt,g=new mt,_=new k,m=new k;function p(F,S,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),a[F].add(_),a[S].add(_),a[M].add(_),l[F].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let F=0,S=T.length;F<S;++F){let M=T[F],L=M.start,V=M.count;for(let q=L,z=L+V;q<z;q+=3)p(t.getX(q+0),t.getX(q+1),t.getX(q+2))}let x=new k,y=new k,R=new k,C=new k;function D(F){R.fromBufferAttribute(s,F),C.copy(R);let S=a[F];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(C,S);let L=y.dot(l[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,L)}for(let F=0,S=T.length;F<S;++F){let M=T[F],L=M.start,V=M.count;for(let q=L,z=L+V;q<z;q+=3)D(t.getX(q+0)),D(t.getX(q+1)),D(t.getX(q+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wh=new xe,_i=new ds,mo=new us,Xh=new k,go=new k,_o=new k,yo=new k,zl=new k,vo=new k,qh=new k,xo=new k,de=class extends Ve{constructor(t=new Ke,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(zl.fromBufferAttribute(u,t),o?vo.addScaledVector(zl,h):vo.addScaledVector(zl.sub(e),h))}e.add(vo)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(mo.containsPoint(_i.origin)===!1&&(_i.intersectSphere(mo,Xh)===null||_i.origin.distanceToSquared(Xh)>(t.far-t.near)**2))&&(Wh.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Wh),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=x;y<R;y+=3){let C=a.getX(y),D=a.getX(y+1),F=a.getX(y+2);s=Mo(this,p,t,n,c,h,u,C,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);s=Mo(this,o,t,n,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=x;y<R;y+=3){let C=y,D=y+1,F=y+2;s=Mo(this,p,t,n,c,h,u,C,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=m,x=m+1,y=m+2;s=Mo(this,o,t,n,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};ni=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(u,2));function g(_,m,p,T,x,y,R,C,D,F,S){let M=y/D,L=R/F,V=y/2,q=R/2,z=C/2,X=D+1,A=F+1,I=0,N=0,$=new k;for(let it=0;it<A;it++){let st=it*L-q;for(let Y=0;Y<X;Y++){let ht=Y*M-V;$[_]=ht*T,$[m]=st*x,$[p]=z,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(Y/D),u.push(1-it/F),I+=1}}for(let it=0;it<F;it++)for(let st=0;st<D;st++){let Y=d+st+X*it,ht=d+st+X*(it+1),Mt=d+(st+1)+X*(it+1),Ct=d+(st+1)+X*it;l.push(Y,ht,Ct),l.push(ht,Mt,Ct),N+=6}a.addGroup(f,N,S),f+=N,d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};Wu={clone:Di,merge:Oe},np=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=np,this.fragmentShader=ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},or=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new k,Yh=new mt,$h=new mt,Ne=class extends or{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=as*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(js*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return as*2*Math.atan(Math.tan(js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,Yh,$h),e.subVectors($h,Yh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(js*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},es=-90,ns=1,Oo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(es,ns,t,e);s.layers=this.layers,this.add(s);let r=new Ne(es,ns,t,e);r.layers=this.layers,this.add(r);let o=new Ne(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new Ne(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new Ne(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Ne(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ar=class extends Fe{constructor(t=[],e=Ii,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ko=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ar(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Hn});r.uniforms.tEquirect.value=e;let o=new de(s,r),a=e.minFilter;return e.minFilter===li&&(e.minFilter=Xe),new Oo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},bn=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ii=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},lr=class extends Fe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=We,h=We,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hl=new k,rp=new k,op=new $t,on=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hl.subVectors(n,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Hl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||op.getNormalMatrix(t),s=this.coplanarPoint(Hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},yi=new us,ap=new mt(.5,.5),bo=new k,ps=class{constructor(t=new on,e=new on,n=new on,s=new on,r=new on,o=new on){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],x=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-o,f-h,p-g,R-T).normalize(),s[1].setComponents(c+o,f+h,p+g,R+T).normalize(),s[2].setComponents(c+a,f+u,p+_,R+x).normalize(),s[3].setComponents(c-a,f-u,p-_,R-x).normalize(),n)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-y).normalize(),e===mn)s[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(e===er)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);let e=ap.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ei=class extends Fe{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},cr=class extends Fe{constructor(t,e,n=ci,s,r,o,a=We,l=We,c,h=os,u=1){if(h!==os&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},hr=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},wi=class i extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;T(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function T(){let y=new k,R=new k,C=0,D=(e-t)/n;for(let F=0;F<=r;F++){let S=[],M=F/r,L=M*(e-t)+t;for(let V=0;V<=s;V++){let q=V/s,z=q*l+a,X=Math.sin(z),A=Math.cos(z);R.x=L*X,R.y=-M*n+m,R.z=L*A,u.push(R.x,R.y,R.z),y.set(X,D,A).normalize(),d.push(y.x,y.y,y.z),f.push(q,1-M),S.push(g++)}_.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let M=_[S][F],L=_[S+1][F],V=_[S+1][F+1],q=_[S][F+1];(t>0||S!==0)&&(h.push(M,L,q),C+=3),(e>0||S!==r-1)&&(h.push(L,V,q),C+=3)}c.addGroup(p,C,0),p+=C}function x(y){let R=g,C=new mt,D=new k,F=0,S=y===!0?t:e,M=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let L=g;for(let V=0;V<=s;V++){let z=V/s*l+a,X=Math.cos(z),A=Math.sin(z);D.x=S*A,D.y=m*M,D.z=S*X,u.push(D.x,D.y,D.z),d.push(0,M,0),C.x=X*.5+.5,C.y=A*.5*M+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){let q=R+V,z=L+V;y===!0?h.push(z,z+1,q):h.push(z+1,z,q),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new mt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new k,s=[],r=[],o=[],a=new k,l=new xe;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new k)}r[0]=new k,o[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Zt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Zt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ms=class extends tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Bo=class extends ms{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};So=new k,Vl=new Ec,Gl=new Ec,Wl=new Ec,gs=class extends tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(So.subVectors(s[0],s[1]).add(s[0]),c=So);let u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(So.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=So),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Vl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Gl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Wl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Vl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Gl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Wl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Vl.calc(l),Gl.calc(l),Wl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};ur=class extends tn{constructor(t=new mt,e=new mt,n=new mt,s=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},zo=class extends tn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ks(t,s.x,r.x,o.x,a.x),Ks(t,s.y,r.y,o.y,a.y),Ks(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dr=class extends tn{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends tn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fr=class extends tn{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends tn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mr=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(jh(a,l.x,c.x,h.x,u.x),jh(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new mt().fromArray(s))}return this}},Vo=Object.freeze({__proto__:null,ArcCurve:Bo,CatmullRomCurve3:gs,CubicBezierCurve:ur,CubicBezierCurve3:zo,EllipseCurve:ms,LineCurve:dr,LineCurve3:Ho,QuadraticBezierCurve:fr,QuadraticBezierCurve3:pr,SplineCurve:mr}),Go=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Vo[s.type]().fromJSON(s))}return this}},gr=class extends Go{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new dr(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fr(this.currentPoint.clone(),new mt(t,e),new mt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new ur(this.currentPoint.clone(),new mt(t,e),new mt(n,s),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new mr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new ms(t,e,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},_s=class extends gr{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new gr().fromJSON(s))}return this}};Ql=class{static triangulate(t,e,n=2){return mp(t,e,n)}},xi=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Jh(t),Kh(n,t);let o=t.length;e.forEach(Jh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Kh(n,e[l]);let a=Ql.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};xr=class i extends Ke{constructor(t=new _s([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:Lp,x,y=!1,R,C,D,F;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),C=new k,D=new k,F=new k),d||(m=0,f=0,g=0,_=0);let S=a.extractPoints(c),M=S.shape,L=S.holes;if(!xi.isClockWise(M)){M=M.reverse();for(let ot=0,Q=L.length;ot<Q;ot++){let et=L[ot];xi.isClockWise(et)&&(L[ot]=et.reverse())}}function q(ot){let et=10000000000000001e-36,nt=ot[0];for(let ct=1;ct<=ot.length;ct++){let pt=ct%ot.length,bt=ot[pt],Xt=bt.x-nt.x,It=bt.y-nt.y,w=Xt*Xt+It*It,v=Math.max(Math.abs(bt.x),Math.abs(bt.y),Math.abs(nt.x),Math.abs(nt.y)),W=et*v*v;if(w<=W){ot.splice(pt,1),ct--;continue}nt=bt}}q(M),L.forEach(q);let z=L.length,X=M;for(let ot=0;ot<z;ot++){let Q=L[ot];M=M.concat(Q)}function A(ot,Q,et){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(Q,et)}let I=M.length;function N(ot,Q,et){let nt,ct,pt,bt=ot.x-Q.x,Xt=ot.y-Q.y,It=et.x-ot.x,w=et.y-ot.y,v=bt*bt+Xt*Xt,W=bt*w-Xt*It;if(Math.abs(W)>Number.EPSILON){let J=Math.sqrt(v),at=Math.sqrt(It*It+w*w),tt=Q.x-Xt/J,Rt=Q.y+bt/J,vt=et.x-w/at,Lt=et.y+It/at,Nt=((vt-tt)*w-(Lt-Rt)*It)/(bt*w-Xt*It);nt=tt+bt*Nt-ot.x,ct=Rt+Xt*Nt-ot.y;let gt=nt*nt+ct*ct;if(gt<=2)return new mt(nt,ct);pt=Math.sqrt(gt/2)}else{let J=!1;bt>Number.EPSILON?It>Number.EPSILON&&(J=!0):bt<-Number.EPSILON?It<-Number.EPSILON&&(J=!0):Math.sign(Xt)===Math.sign(w)&&(J=!0),J?(nt=-Xt,ct=bt,pt=Math.sqrt(v)):(nt=bt,ct=Xt,pt=Math.sqrt(v/2))}return new mt(nt/pt,ct/pt)}let $=[];for(let ot=0,Q=X.length,et=Q-1,nt=ot+1;ot<Q;ot++,et++,nt++)et===Q&&(et=0),nt===Q&&(nt=0),$[ot]=N(X[ot],X[et],X[nt]);let it=[],st,Y=$.concat();for(let ot=0,Q=z;ot<Q;ot++){let et=L[ot];st=[];for(let nt=0,ct=et.length,pt=ct-1,bt=nt+1;nt<ct;nt++,pt++,bt++)pt===ct&&(pt=0),bt===ct&&(bt=0),st[nt]=N(et[nt],et[pt],et[bt]);it.push(st),Y=Y.concat(st)}let ht;if(m===0)ht=xi.triangulateShape(X,L);else{let ot=[],Q=[];for(let et=0;et<m;et++){let nt=et/m,ct=f*Math.cos(nt*Math.PI/2),pt=g*Math.sin(nt*Math.PI/2)+_;for(let bt=0,Xt=X.length;bt<Xt;bt++){let It=A(X[bt],$[bt],pt);dt(It.x,It.y,-ct),nt===0&&ot.push(It)}for(let bt=0,Xt=z;bt<Xt;bt++){let It=L[bt];st=it[bt];let w=[];for(let v=0,W=It.length;v<W;v++){let J=A(It[v],st[v],pt);dt(J.x,J.y,-ct),nt===0&&w.push(J)}nt===0&&Q.push(w)}}ht=xi.triangulateShape(ot,Q)}let Mt=ht.length,Ct=g+_;for(let ot=0;ot<I;ot++){let Q=d?A(M[ot],Y[ot],Ct):M[ot];y?(D.copy(R.normals[0]).multiplyScalar(Q.x),C.copy(R.binormals[0]).multiplyScalar(Q.y),F.copy(x[0]).add(D).add(C),dt(F.x,F.y,F.z)):dt(Q.x,Q.y,0)}for(let ot=1;ot<=h;ot++)for(let Q=0;Q<I;Q++){let et=d?A(M[Q],Y[Q],Ct):M[Q];y?(D.copy(R.normals[ot]).multiplyScalar(et.x),C.copy(R.binormals[ot]).multiplyScalar(et.y),F.copy(x[ot]).add(D).add(C),dt(F.x,F.y,F.z)):dt(et.x,et.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){let Q=ot/m,et=f*Math.cos(Q*Math.PI/2),nt=g*Math.sin(Q*Math.PI/2)+_;for(let ct=0,pt=X.length;ct<pt;ct++){let bt=A(X[ct],$[ct],nt);dt(bt.x,bt.y,u+et)}for(let ct=0,pt=L.length;ct<pt;ct++){let bt=L[ct];st=it[ct];for(let Xt=0,It=bt.length;Xt<It;Xt++){let w=A(bt[Xt],st[Xt],nt);y?dt(w.x,w.y+x[h-1].y,x[h-1].x+et):dt(w.x,w.y,u+et)}}}E(),U();function E(){let ot=s.length/3;if(d){let Q=0,et=I*Q;for(let nt=0;nt<Mt;nt++){let ct=ht[nt];ft(ct[2]+et,ct[1]+et,ct[0]+et)}Q=h+m*2,et=I*Q;for(let nt=0;nt<Mt;nt++){let ct=ht[nt];ft(ct[0]+et,ct[1]+et,ct[2]+et)}}else{for(let Q=0;Q<Mt;Q++){let et=ht[Q];ft(et[2],et[1],et[0])}for(let Q=0;Q<Mt;Q++){let et=ht[Q];ft(et[0]+I*h,et[1]+I*h,et[2]+I*h)}}n.addGroup(ot,s.length/3-ot,0)}function U(){let ot=s.length/3,Q=0;K(X,Q),Q+=X.length;for(let et=0,nt=L.length;et<nt;et++){let ct=L[et];K(ct,Q),Q+=ct.length}n.addGroup(ot,s.length/3-ot,1)}function K(ot,Q){let et=ot.length;for(;--et>=0;){let nt=et,ct=et-1;ct<0&&(ct=ot.length-1);for(let pt=0,bt=h+m*2;pt<bt;pt++){let Xt=I*pt,It=I*(pt+1),w=Q+nt+Xt,v=Q+ct+Xt,W=Q+ct+It,J=Q+nt+It;lt(w,v,W,J)}}}function dt(ot,Q,et){l.push(ot),l.push(Q),l.push(et)}function ft(ot,Q,et){Gt(ot),Gt(Q),Gt(et);let nt=s.length/3,ct=T.generateTopUV(n,s,nt-3,nt-2,nt-1);P(ct[0]),P(ct[1]),P(ct[2])}function lt(ot,Q,et,nt){Gt(ot),Gt(Q),Gt(nt),Gt(Q),Gt(et),Gt(nt);let ct=s.length/3,pt=T.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);P(pt[0]),P(pt[1]),P(pt[3]),P(pt[1]),P(pt[2]),P(pt[3])}function Gt(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function P(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Dp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Vo[s.type]().fromJSON(s)),new i(n,t.options)}},Lp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-u),new mt(d,1-g),new mt(_,1-p)]:[new mt(a,1-l),new mt(h,1-u),new mt(f,1-g),new mt(m,1-p)]}};wn=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*d-o;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-T,0),_.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){let x=T+c*p,y=T+c*(p+1),R=T+1+c*(p+1),C=T+1+c*p;f.push(x,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Mr=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,d=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let T=[],x=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){let C=R/e;u.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),u.y=t*Math.cos(o+x*a),u.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+y,1-x),T.push(c++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<e;T++){let x=h[p][T+1],y=h[p][T],R=h[p+1][T],C=h[p+1][T+1];(p!==0||o>0)&&f.push(x,y,C),(p!==n-1||l<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},br=class i extends Ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new k,u=new k,d=new k;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Sr=class i extends Ke{constructor(t=new pr(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new k,l=new k,c=new mt,h=new k,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new pe(u,3)),this.setAttribute("normal",new pe(d,3)),this.setAttribute("uv",new pe(f,2));function _(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),T(),p()}function m(x){h=t.getPointAt(x/e,h);let y=o.normals[x],R=o.binormals[x];for(let C=0;C<=s;C++){let D=C/s*Math.PI*2,F=Math.sin(D),S=-Math.cos(D);l.x=S*y.x+F*R.x,l.y=S*y.y+F*R.y,l.z=S*y.z+F*R.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let x=1;x<=e;x++)for(let y=1;y<=s;y++){let R=(s+1)*(x-1)+(y-1),C=(s+1)*x+(y-1),D=(s+1)*x+y,F=(s+1)*(x-1)+y;g.push(R,C,F),g.push(C,D,F)}}function T(){for(let x=0;x<=e;x++)for(let y=0;y<=s;y++)c.x=x/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Vo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Tn=class extends ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Er=class extends Tn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}},Wo=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xo=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};Ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},qo=class extends Ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ql,endingEnd:ql}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yl:r=t,a=2*e-n;break;case $l:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yl:o=t,l=2*n-e;break;case $l:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+T*o[c+R]+x*o[l+R]+y*o[u+R];return r}},Yo=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},$o=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=To(e,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:To(t.times,Array),values:To(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new $o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qs:e=this.InterpolantFactoryMethodDiscrete;break;case Do:e=this.InterpolantFactoryMethodLinear;break;case Ao:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Do;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Up(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ao,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.ValueTypeName="";en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Do;si=class extends en{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=Qs;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;jo=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};jo.prototype.ValueTypeName="color";Zo=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Zo.prototype.ValueTypeName="number";Jo=class extends Ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)an.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends en{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Jo(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;ri=class extends en{constructor(t,e,n){super(t,e,n)}};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Qs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;Ko=class extends en{constructor(t,e,n,s){super(t,e,n,s)}};Ko.prototype.ValueTypeName="vector";Co={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Qo=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ju=new Qo,vs=class{constructor(t){this.manager=t!==void 0?t:ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vs.DEFAULT_MATERIAL_NAME="__DEFAULT";is=new WeakMap,ta=class extends vs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Co.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let u=is.get(o);u===void 0&&(u=[],is.set(o,u)),u.push({onLoad:e,onError:s})}return o}let a=ls("img");function l(){h(),e&&e(this);let u=is.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}is.delete(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),Co.remove(`image:${t}`);let d=is.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}is.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Co.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},Tr=class extends vs{constructor(t){super(t)}load(t,e,n,s){let r=new Fe,o=new ta(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Ar=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Xl=new xe,Qh=new k,tu=new k,tc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ps,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ci=class extends or{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ec=class extends tc{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ri=class extends Ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Cr=class extends Ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},ea=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},wc="\\[\\]\\.:\\/",Np=new RegExp("["+wc+"]","g"),Tc="[^"+wc+"]",Fp="[^"+wc.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Tc),kp=/(WCOD+)?/.source.replace("WCOD",Fp),Bp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),Hp=new RegExp("^"+Op+kp+Bp+zp+"$"),Vp=["material","materials","bones","map"],nc=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Vp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=nc;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];sv=new Float32Array(1),xs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Rr=class extends Sn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function vd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xp(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function T0(i,t,e,n,s,r,o){let a=new Yt(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function _(x){let y=!1,R=g(x);R===null?p(a,l):R&&R.isColor&&(p(R,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===Ir)?(h===void 0&&(h=new de(new ni(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Di(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ui.copy(y.backgroundRotation),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(Ui)),h.material.toneMapped=ee.getTransfer(R.colorSpace)!==se,(u!==R||d!==R.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new de(new wn(2,2),new Qe({name:"BackgroundMaterial",uniforms:Di(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ee.getTransfer(R.colorSpace)!==se,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Ya,Sc(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,y,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:m,dispose:T}}function A0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,L,V,q,z){let X=!1,A=u(q,V,L);r!==A&&(r=A,c(r.object)),X=f(M,q,V,z),X&&g(M,q,V,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(M,L,V,q),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,L,V){let q=V.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let A=X[q];return A===void 0&&(A=d(l()),X[q]=A),A}function d(M){let L=[],V=[],q=[];for(let z=0;z<e;z++)L[z]=0,V[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:M,attributes:{},index:null}}function f(M,L,V,q){let z=r.attributes,X=L.attributes,A=0,I=V.getAttributes();for(let N in I)if(I[N].location>=0){let it=z[N],st=X[N];if(st===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),it===void 0||it.attribute!==st||st&&it.data!==st.data)return!0;A++}return r.attributesNum!==A||r.index!==q}function g(M,L,V,q){let z={},X=L.attributes,A=0,I=V.getAttributes();for(let N in I)if(I[N].location>=0){let it=X[N];it===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(it=M.instanceColor));let st={};st.attribute=it,it&&it.data&&(st.data=it.data),z[N]=st,A++}r.attributes=z,r.attributesNum=A,r.index=q}function _(){let M=r.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let V=r.newAttributes,q=r.enabledAttributes,z=r.attributeDivisors;V[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),z[M]!==L&&(i.vertexAttribDivisor(M,L),z[M]=L)}function T(){let M=r.newAttributes,L=r.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==M[V]&&(i.disableVertexAttribArray(V),L[V]=0)}function x(M,L,V,q,z,X,A){A===!0?i.vertexAttribIPointer(M,L,V,z,X):i.vertexAttribPointer(M,L,V,q,z,X)}function y(M,L,V,q){_();let z=q.attributes,X=V.getAttributes(),A=L.defaultAttributeValues;for(let I in X){let N=X[I];if(N.location>=0){let $=z[I];if($===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let it=$.normalized,st=$.itemSize,Y=t.get($);if(Y===void 0)continue;let ht=Y.buffer,Mt=Y.type,Ct=Y.bytesPerElement,E=Mt===i.INT||Mt===i.UNSIGNED_INT||$.gpuType===fa;if($.isInterleavedBufferAttribute){let U=$.data,K=U.stride,dt=$.offset;if(U.isInstancedInterleavedBuffer){for(let ft=0;ft<N.locationSize;ft++)p(N.location+ft,U.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ft=0;ft<N.locationSize;ft++)m(N.location+ft);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let ft=0;ft<N.locationSize;ft++)x(N.location+ft,st/N.locationSize,Mt,it,K*Ct,(dt+st/N.locationSize*ft)*Ct,E)}else{if($.isInstancedBufferAttribute){for(let U=0;U<N.locationSize;U++)p(N.location+U,$.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let U=0;U<N.locationSize;U++)m(N.location+U);i.bindBuffer(i.ARRAY_BUFFER,ht);for(let U=0;U<N.locationSize;U++)x(N.location+U,st/N.locationSize,Mt,it,st*Ct,st/N.locationSize*U*Ct,E)}}else if(A!==void 0){let it=A[I];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(N.location,it);break;case 3:i.vertexAttrib3fv(N.location,it);break;case 4:i.vertexAttrib4fv(N.location,it);break;default:i.vertexAttrib1fv(N.location,it)}}}}T()}function R(){F();for(let M in n){let L=n[M];for(let V in L){let q=L[V];for(let z in q)h(q[z].object),delete q[z];delete L[V]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;let L=n[M.id];for(let V in L){let q=L[V];for(let z in q)h(q[z].object),delete q[z];delete L[V]}delete n[M.id]}function D(M){for(let L in n){let V=n[L];if(V[M.id]===void 0)continue;let q=V[M.id];for(let z in q)h(q[z].object),delete q[z];delete V[M.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function C0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function R0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==ln&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==_n&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Rn&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function I0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new on,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:n,x=T*4,y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let R=0;R!==x;++R)y[R]=e[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)o.copy(u[x]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function P0(i){let t=new WeakMap;function e(o,a){return a===ha?o.mapping=Ii:a===ua&&(o.mapping=Pi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ha||a===ua)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ko(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}function D0(i){let t=[],e=[],n=[],s=i,r=i-Ts+1+Zu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ts?l=Zu[o-i+Ts-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,F=C>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];T.set(S,_*g*C),x.set(d,m*g*C);let M=[C,C,C,C,C,C];y.set(M,p*g*C)}let R=new Ke;R.setAttribute("position",new Je(T,_)),R.setAttribute("uv",new Je(x,m)),R.setAttribute("faceIndex",new Je(y,p)),t.push(R),s>Ts&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(i,t,e){let n=new En(i,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $a(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function U0(i,t,e){let n=new Float32Array(Oi),s=new k(0,1,0);return new Qe({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function td(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ed(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function N0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ha||l===ua,h=l===Ii||l===Pi;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Cs(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function F0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function O0(i,t,e,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let x=0,y=T.length;x<y;x+=3){let R=T[x+0],C=T[x+1],D=T[x+2];d.push(R,C,C,D,D,R)}}else if(g!==void 0){let T=g.array;_=g.version;for(let x=0,y=T.length/3-1;x<y;x+=3){let R=x+0,C=x+1,D=x+2;d.push(R,C,C,D,D,R)}}else return;let m=new(bc(d)?rr:sr)(d,1);m.version=_;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function k0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function z0(i,t,e){let n=new WeakMap,s=new ue;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let S=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=a.attributes.position.count*x,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let C=new Float32Array(y*R*4*u),D=new nr(C,y,R,u);D.type=Rn,D.needsUpdate=!0;let F=x*4;for(let M=0;M<u;M++){let L=m[M],V=p[M],q=T[M],z=y*R*4*M;for(let X=0;X<L.count;X++){let A=X*F;f===!0&&(s.fromBufferAttribute(L,X),C[z+A+0]=s.x,C[z+A+1]=s.y,C[z+A+2]=s.z,C[z+A+3]=0),g===!0&&(s.fromBufferAttribute(V,X),C[z+A+4]=s.x,C[z+A+5]=s.y,C[z+A+6]=s.z,C[z+A+7]=0),_===!0&&(s.fromBufferAttribute(q,X),C[z+A+8]=s.x,C[z+A+9]=s.y,C[z+A+10]=s.z,C[z+A+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new mt(y,R)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function H0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}function Is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=id[s];if(r===void 0&&(r=new Float32Array(s),id[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Te(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Za(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function V0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function G0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function W0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function q0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Ae(e,n)}}function Y0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;od.set(n),i.uniformMatrix3fv(this.addr,!1,od),Ae(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(Te(e,n))return;rd.set(n),i.uniformMatrix4fv(this.addr,!1,rd),Ae(e,n)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Z0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function J0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function K0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Te(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function n_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function i_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(nd.compareFunction=vc,r=nd):r=xd,e.setTexture2D(t||r,s)}function s_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bd,s)}function r_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Sd,s)}function o_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Md,s)}function a_(i){switch(i){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return $0;case 5124:case 35670:return j0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return Q0;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(i,t){i.uniform1fv(this.addr,t)}function c_(i,t){let e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function h_(i,t){let e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function u_(i,t){let e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function d_(i,t){let e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f_(i,t){let e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p_(i,t){let e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m_(i,t){i.uniform1iv(this.addr,t)}function g_(i,t){i.uniform2iv(this.addr,t)}function __(i,t){i.uniform3iv(this.addr,t)}function y_(i,t){i.uniform4iv(this.addr,t)}function v_(i,t){i.uniform1uiv(this.addr,t)}function x_(i,t){i.uniform2uiv(this.addr,t)}function M_(i,t){i.uniform3uiv(this.addr,t)}function b_(i,t){i.uniform4uiv(this.addr,t)}function S_(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xd,r[o])}function E_(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||bd,r[o])}function w_(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Sd,r[o])}function T_(i,t,e){let n=this.cache,s=t.length,r=Za(e,s);Te(n,r)||(i.uniform1iv(this.addr,r),Ae(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Md,r[o])}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return x_;case 36295:return M_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function ld(i,t){i.seq.push(t),i.map[t.id]=t}function C_(i,t,e){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),o=Uc.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ld(e,c===void 0?new Nc(a,i,t):new Fc(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Oc(a),ld(e,u)),e=u}}}function cd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}function P_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function L_(i){ee._getMatrix(hd,ee.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case tr:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+P_(i.getShaderSource(t),a)}else return r}function D_(i,t){let e=L_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function U_(i,t){let e;switch(t){case Eu:e="Linear";break;case wu:e="Reinhard";break;case Tu:e="Cineon";break;case ca:e="ACESFilmic";break;case Cu:e="AgX";break;case Ru:e="Neutral";break;case Au:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function N_(){ee.getLuminanceCoefficients(ja);let i=ja.x.toFixed(4),t=ja.y.toFixed(4),e=ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Or).join(`
`)}function O_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function k_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Or(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function kc(i){return i.replace(B_,H_)}function H_(i,t){let e=Jt[t];if(e===void 0){let n=z_.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}function pd(i){return i.replace(V_,G_)}function G_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function md(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===iu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function X_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Pi:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q_(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Pi&&(t="ENVMAP_MODE_REFRACTION"),t}function Y_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case bu:t="ENVMAP_BLENDING_MIX";break;case Su:t="ENVMAP_BLENDING_ADD";break}return t}function $_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function j_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=W_(e),c=X_(e),h=q_(e),u=Y_(e),d=$_(e),f=F_(e),g=O_(r),_=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Or).join(`
`),p.length>0&&(p+=`
`)):(m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Or).join(`
`),p=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vn?"#define TONE_MAPPING":"",e.toneMapping!==Vn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Vn?U_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,D_("linearToOutputTexel",e.outputColorSpace),N_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Or).join(`
`)),o=kc(o),o=dd(o,e),o=fd(o,e),a=kc(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=T+m+o,y=T+p+a,R=cd(s,s.VERTEX_SHADER,x),C=cd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(L){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(C)||"",X=V.trim(),A=q.trim(),I=z.trim(),N=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,C);else{let it=ud(s,R,"vertex"),st=ud(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+it+`
`+st)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(A===""||I==="")&&($=!1);$&&(L.diagnostics={runnable:N,programLog:X,vertexShader:{log:A,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(R),s.deleteShader(C),F=new As(s,_),S=k_(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,R_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}function J_(i,t,e,n,s,r,o){let a=new ir,l=new Bc,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,q){let z=V.fog,X=q.geometry,A=S.isMeshStandardMaterial?V.environment:null,I=(S.isMeshStandardMaterial?e:t).get(S.envMap||A),N=I&&I.mapping===Ir?I.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=it!==void 0?it.length:0,Y=0;X.morphAttributes.position!==void 0&&(Y=1),X.morphAttributes.normal!==void 0&&(Y=2),X.morphAttributes.color!==void 0&&(Y=3);let ht,Mt,Ct,E;if($){let ie=In[$];ht=ie.vertexShader,Mt=ie.fragmentShader}else ht=S.vertexShader,Mt=S.fragmentShader,l.update(S),Ct=l.getVertexShaderID(S),E=l.getFragmentShaderID(S);let U=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),dt=q.isInstancedMesh===!0,ft=q.isBatchedMesh===!0,lt=!!S.map,Gt=!!S.matcap,P=!!I,ot=!!S.aoMap,Q=!!S.lightMap,et=!!S.bumpMap,nt=!!S.normalMap,ct=!!S.displacementMap,pt=!!S.emissiveMap,bt=!!S.metalnessMap,Xt=!!S.roughnessMap,It=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,W=S.iridescence>0,J=S.sheen>0,at=S.transmission>0,tt=It&&!!S.anisotropyMap,Rt=w&&!!S.clearcoatMap,vt=w&&!!S.clearcoatNormalMap,Lt=w&&!!S.clearcoatRoughnessMap,Nt=W&&!!S.iridescenceMap,gt=W&&!!S.iridescenceThicknessMap,At=J&&!!S.sheenColorMap,Vt=J&&!!S.sheenRoughnessMap,Ot=!!S.specularMap,wt=!!S.specularColorMap,jt=!!S.specularIntensityMap,B=at&&!!S.transmissionMap,xt=at&&!!S.thicknessMap,St=!!S.gradientMap,Dt=!!S.alphaMap,_t=S.alphaTest>0,rt=!!S.alphaHash,Ft=!!S.extensions,qt=Vn;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qt=i.toneMapping);let le={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:ht,fragmentShader:Mt,defines:S.defines,customVertexShaderID:Ct,customFragmentShaderID:E,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:ft,batchingColor:ft&&q._colorsTexture!==null,instancing:dt,instancingColor:dt&&q.instanceColor!==null,instancingMorph:dt&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Si,alphaToCoverage:!!S.alphaToCoverage,map:lt,matcap:Gt,envMap:P,envMapMode:P&&I.mapping,envMapCubeUVHeight:N,aoMap:ot,lightMap:Q,bumpMap:et,normalMap:nt,displacementMap:d&&ct,emissiveMap:pt,normalMapObjectSpace:nt&&S.normalMapType===Du,normalMapTangentSpace:nt&&S.normalMapType===yc,metalnessMap:bt,roughnessMap:Xt,anisotropy:It,anisotropyMap:tt,clearcoat:w,clearcoatMap:Rt,clearcoatNormalMap:vt,clearcoatRoughnessMap:Lt,dispersion:v,iridescence:W,iridescenceMap:Nt,iridescenceThicknessMap:gt,sheen:J,sheenColorMap:At,sheenRoughnessMap:Vt,specularMap:Ot,specularColorMap:wt,specularIntensityMap:jt,transmission:at,transmissionMap:B,thicknessMap:xt,gradientMap:St,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:Dt,alphaTest:_t,alphaHash:rt,combine:S.combine,mapUv:lt&&_(S.map.channel),aoMapUv:ot&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:et&&_(S.bumpMap.channel),normalMapUv:nt&&_(S.normalMap.channel),displacementMapUv:ct&&_(S.displacementMap.channel),emissiveMapUv:pt&&_(S.emissiveMap.channel),metalnessMapUv:bt&&_(S.metalnessMap.channel),roughnessMapUv:Xt&&_(S.roughnessMap.channel),anisotropyMapUv:tt&&_(S.anisotropyMap.channel),clearcoatMapUv:Rt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&_(S.sheenRoughnessMap.channel),specularMapUv:Ot&&_(S.specularMap.channel),specularColorMapUv:wt&&_(S.specularColorMap.channel),specularIntensityMapUv:jt&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:xt&&_(S.thicknessMap.channel),alphaMapUv:Dt&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(nt||It),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(lt||Dt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:lt&&S.map.isVideoTexture===!0&&ee.getTransfer(S.map.colorSpace)===se,decodeVideoTextureEmissive:pt&&S.emissiveMap.isVideoTexture===!0&&ee.getTransfer(S.emissiveMap.colorSpace)===se,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Cn,flipSided:S.side===Le,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return le.vertexUv1s=c.has(1),le.vertexUv2s=c.has(2),le.vertexUv3s=c.has(3),c.clear(),le}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let M=g[S.type],L;if(M){let V=In[M];L=Wu.clone(V.uniforms)}else L=S.uniforms;return L}function R(S,M){let L;for(let V=0,q=h.length;V<q;V++){let z=h[V];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new j_(i,M,S,r),h.push(L)),L}function C(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:D,programs:h,dispose:F}}function K_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function gd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _d(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Q_),n.length>1&&n.sort(d||gd),s.length>1&&s.sort(d||gd)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ty(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new _d,i.set(n,[o])):s>=r.length?(o=new _d,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ey(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Yt};break;case"SpotLight":e={position:new k,direction:new k,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function ny(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}function sy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ry(i){let t=new ey,e=ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let s=new k,r=new xe,o=new xe;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,x=0,y=0,R=0,C=0,D=0;c.sort(sy);for(let S=0,M=c.length;S<M;S++){let L=c[S],V=L.color,q=L.intensity,z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*q,u+=V.g*q,d+=V.b*q;else if(L.isLightProbe){for(let A=0;A<9;A++)n.probe[A].addScaledVector(L.sh.coefficients[A],q);D++}else if(L.isDirectionalLight){let A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let I=L.shadow,N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,n.directionalShadow[f]=N,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=L.shadow.matrix,T++}n.directional[f]=A,f++}else if(L.isSpotLight){let A=t.get(L);A.position.setFromMatrixPosition(L.matrixWorld),A.color.copy(V).multiplyScalar(q),A.distance=z,A.coneCos=Math.cos(L.angle),A.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),A.decay=L.decay,n.spot[_]=A;let I=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,I.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[_]=I.matrix,L.castShadow){let N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,n.spotShadow[_]=N,n.spotShadowMap[_]=X,y++}_++}else if(L.isRectAreaLight){let A=t.get(L);A.color.copy(V).multiplyScalar(q),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=A,m++}else if(L.isPointLight){let A=t.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),A.distance=L.distance,A.decay=L.decay,L.castShadow){let I=L.shadow,N=e.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,N.shadowCameraNear=I.camera.near,N.shadowCameraFar=I.camera.far,n.pointShadow[g]=N,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=A,g++}else if(L.isHemisphereLight){let A=t.get(L);A.skyColor.copy(L.color).multiplyScalar(q),A.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[p]=A,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let F=n.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==x||F.numSpotShadows!==y||F.numSpotMaps!==R||F.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=x,F.numSpotShadows=y,F.numSpotMaps=R,F.numLightProbes=D,n.version=iy++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let x=c[p];if(x.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function yd(i){let t=new ry(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function oy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new yd(i),t.set(s,[a])):r>=o.length?(a=new yd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function cy(i,t,e){let n=new ps,s=new mt,r=new mt,o=new ue,a=new Wo({depthPacking:Lu}),l=new Xo,c={},h=e.maxTextureSize,u={[Bn]:Le,[Le]:Bn,[Cn]:Cn},d=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:ay,fragmentShader:ly}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ke;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let p=this.type;this.render=function(C,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Hn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=p!==An&&this.type===An,z=p===An&&this.type!==An;for(let X=0,A=C.length;X<A;X++){let I=C[X],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let $=N.getFrameExtents();if(s.multiply($),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||q===!0||z===!0){let st=this.type!==An?{minFilter:We,magFilter:We}:{};N.map!==null&&N.map.dispose(),N.map=new En(s.x,s.y,st),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();let it=N.getViewportCount();for(let st=0;st<it;st++){let Y=N.getViewport(st);o.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),V.viewport(o),N.updateMatrices(I,st),n=N.getFrustum(),y(D,F,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===An&&T(N,F),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function T(C,D){let F=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new En(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,F,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,F,f,_,null)}function x(C,D,F,S){let M=null,L=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=F.isPointLight===!0?l:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=M.uuid,q=D.uuid,z=c[V];z===void 0&&(z={},c[V]=z);let X=z[q];X===void 0&&(X=M.clone(),z[q]=X,D.addEventListener("dispose",R)),M=X}if(M.visible=D.visible,M.wireframe=D.wireframe,S===An?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=F}return M}function y(C,D,F,S,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===An)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let q=t.update(C),z=C.material;if(Array.isArray(z)){let X=q.groups;for(let A=0,I=X.length;A<I;A++){let N=X[A],$=z[N.materialIndex];if($&&$.visible){let it=x(C,$,S,M);C.onBeforeShadow(i,C,D,F,q,it,N),i.renderBufferDirect(F,null,q,it,C,N),C.onAfterShadow(i,C,D,F,q,it,N)}}}else if(z.visible){let X=x(C,z,S,M);C.onBeforeShadow(i,C,D,F,q,X,null),i.renderBufferDirect(F,null,q,X,C,null),C.onAfterShadow(i,C,D,F,q,X,null)}}let V=C.children;for(let q=0,z=V.length;q<z;q++)y(V[q],D,F,S,M)}function R(C){C.target.removeEventListener("dispose",R);for(let F in c){let S=c[F],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function uy(i,t){function e(){let B=!1,xt=new ue,St=null,Dt=new ue(0,0,0,0);return{setMask:function(_t){St!==_t&&!B&&(i.colorMask(_t,_t,_t,_t),St=_t)},setLocked:function(_t){B=_t},setClear:function(_t,rt,Ft,qt,le){le===!0&&(_t*=qt,rt*=qt,Ft*=qt),xt.set(_t,rt,Ft,qt),Dt.equals(xt)===!1&&(i.clearColor(_t,rt,Ft,qt),Dt.copy(xt))},reset:function(){B=!1,St=null,Dt.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,St=null,Dt=null,_t=null;return{setReversed:function(rt){if(xt!==rt){let Ft=t.get("EXT_clip_control");rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let qt=_t;_t=null,this.setClear(qt)}},getReversed:function(){return xt},setTest:function(rt){rt?U(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(rt){St!==rt&&!B&&(i.depthMask(rt),St=rt)},setFunc:function(rt){if(xt&&(rt=hy[rt]),Dt!==rt){switch(rt){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case bi:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=rt}},setLocked:function(rt){B=rt},setClear:function(rt){_t!==rt&&(xt&&(rt=1-rt),i.clearDepth(rt),_t=rt)},reset:function(){B=!1,St=null,Dt=null,_t=null,xt=!1}}}function s(){let B=!1,xt=null,St=null,Dt=null,_t=null,rt=null,Ft=null,qt=null,le=null;return{setTest:function(ie){B||(ie?U(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(ie){xt!==ie&&!B&&(i.stencilMask(ie),xt=ie)},setFunc:function(ie,Ln,Mn){(St!==ie||Dt!==Ln||_t!==Mn)&&(i.stencilFunc(ie,Ln,Mn),St=ie,Dt=Ln,_t=Mn)},setOp:function(ie,Ln,Mn){(rt!==ie||Ft!==Ln||qt!==Mn)&&(i.stencilOp(ie,Ln,Mn),rt=ie,Ft=Ln,qt=Mn)},setLocked:function(ie){B=ie},setClear:function(ie){le!==ie&&(i.clearStencil(ie),le=ie)},reset:function(){B=!1,xt=null,St=null,Dt=null,_t=null,rt=null,Ft=null,qt=null,le=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,R=null,C=null,D=new Yt(0,0,0),F=0,S=!1,M=null,L=null,V=null,q=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,I=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),A=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),A=I>=2);let $=null,it={},st=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),ht=new ue().fromArray(st),Mt=new ue().fromArray(Y);function Ct(B,xt,St,Dt){let _t=new Uint8Array(4),rt=i.createTexture();i.bindTexture(B,rt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<St;Ft++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(xt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return rt}let E={};E[i.TEXTURE_2D]=Ct(i.TEXTURE_2D,i.TEXTURE_2D,1),E[i.TEXTURE_CUBE_MAP]=Ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[i.TEXTURE_2D_ARRAY]=Ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),E[i.TEXTURE_3D]=Ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(i.DEPTH_TEST),o.setFunc(bi),et(!1),nt(ic),U(i.CULL_FACE),ot(Hn);function U(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function K(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function dt(B,xt){return u[B]!==xt?(i.bindFramebuffer(B,xt),u[B]=xt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function ft(B,xt){let St=f,Dt=!1;if(B){St=d.get(xt),St===void 0&&(St=[],d.set(xt,St));let _t=B.textures;if(St.length!==_t.length||St[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ft=_t.length;rt<Ft;rt++)St[rt]=i.COLOR_ATTACHMENT0+rt;St.length=_t.length,Dt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(St)}function lt(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Gt={[Qn]:i.FUNC_ADD,[ru]:i.FUNC_SUBTRACT,[ou]:i.FUNC_REVERSE_SUBTRACT};Gt[au]=i.MIN,Gt[lu]=i.MAX;let P={[cu]:i.ZERO,[hu]:i.ONE,[uu]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[_u]:i.SRC_ALPHA_SATURATE,[mu]:i.DST_COLOR,[fu]:i.DST_ALPHA,[du]:i.ONE_MINUS_SRC_COLOR,[Io]:i.ONE_MINUS_SRC_ALPHA,[gu]:i.ONE_MINUS_DST_COLOR,[pu]:i.ONE_MINUS_DST_ALPHA,[yu]:i.CONSTANT_COLOR,[vu]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[Mu]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(B,xt,St,Dt,_t,rt,Ft,qt,le,ie){if(B===Hn){_===!0&&(K(i.BLEND),_=!1);return}if(_===!1&&(U(i.BLEND),_=!0),B!==su){if(B!==m||ie!==S){if((p!==Qn||y!==Qn)&&(i.blendEquation(i.FUNC_ADD),p=Qn,y=Qn),ie)switch(B){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFunc(i.ONE,i.ONE);break;case oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,x=null,R=null,C=null,D.set(0,0,0),F=0,m=B,S=ie}return}_t=_t||xt,rt=rt||St,Ft=Ft||Dt,(xt!==p||_t!==y)&&(i.blendEquationSeparate(Gt[xt],Gt[_t]),p=xt,y=_t),(St!==T||Dt!==x||rt!==R||Ft!==C)&&(i.blendFuncSeparate(P[St],P[Dt],P[rt],P[Ft]),T=St,x=Dt,R=rt,C=Ft),(qt.equals(D)===!1||le!==F)&&(i.blendColor(qt.r,qt.g,qt.b,le),D.copy(qt),F=le),m=B,S=!1}function Q(B,xt){B.side===Cn?K(i.CULL_FACE):U(i.CULL_FACE);let St=B.side===Le;xt&&(St=!St),et(St),B.blending===Mi&&B.transparent===!1?ot(Hn):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let Dt=B.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function nt(B){B!==eu?(U(i.CULL_FACE),B!==L&&(B===ic?i.cullFace(i.BACK):B===nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),L=B}function ct(B){B!==V&&(A&&i.lineWidth(B),V=B)}function pt(B,xt,St){B?(U(i.POLYGON_OFFSET_FILL),(q!==xt||z!==St)&&(i.polygonOffset(xt,St),q=xt,z=St)):K(i.POLYGON_OFFSET_FILL)}function bt(B){B?U(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function Xt(B){B===void 0&&(B=i.TEXTURE0+X-1),$!==B&&(i.activeTexture(B),$=B)}function It(B,xt,St){St===void 0&&($===null?St=i.TEXTURE0+X-1:St=$);let Dt=it[St];Dt===void 0&&(Dt={type:void 0,texture:void 0},it[St]=Dt),(Dt.type!==B||Dt.texture!==xt)&&($!==St&&(i.activeTexture(St),$=St),i.bindTexture(B,xt||E[B]),Dt.type=B,Dt.texture=xt)}function w(){let B=it[$];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function at(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Rt(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function vt(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Nt(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(B){ht.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ht.copy(B))}function Vt(B){Mt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Mt.copy(B))}function Ot(B,xt){let St=c.get(xt);St===void 0&&(St=new WeakMap,c.set(xt,St));let Dt=St.get(B);Dt===void 0&&(Dt=i.getUniformBlockIndex(xt,B.name),St.set(B,Dt))}function wt(B,xt){let Dt=c.get(xt).get(B);l.get(xt)!==Dt&&(i.uniformBlockBinding(xt,Dt,B.__bindingPointIndex),l.set(xt,Dt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,it={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,R=null,C=null,D=new Yt(0,0,0),F=0,S=!1,M=null,L=null,V=null,q=null,z=null,ht.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:K,bindFramebuffer:dt,drawBuffers:ft,useProgram:lt,setBlending:ot,setMaterial:Q,setFlipSided:et,setCullFace:nt,setLineWidth:ct,setPolygonOffset:pt,setScissorTest:bt,activeTexture:Xt,bindTexture:It,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:W,texImage2D:Nt,texImage3D:gt,updateUBOMapping:Ot,uniformBlockBinding:wt,texStorage2D:vt,texStorage3D:Lt,texSubImage2D:J,texSubImage3D:at,compressedTexSubImage2D:tt,compressedTexSubImage3D:Rt,scissor:At,viewport:Vt,reset:jt}}function dy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):ls("canvas")}function _(w,v,W){let J=1,at=It(w);if((at.width>W||at.height>W)&&(J=W/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let tt=Math.floor(J*at.width),Rt=Math.floor(J*at.height);u===void 0&&(u=g(tt,Rt));let vt=v?g(tt,Rt):u;return vt.width=tt,vt.height=Rt,vt.getContext("2d").drawImage(w,0,0,tt,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+tt+"x"+Rt+")."),vt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,v,W,J,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let tt=v;if(v===i.RED&&(W===i.FLOAT&&(tt=i.R32F),W===i.HALF_FLOAT&&(tt=i.R16F),W===i.UNSIGNED_BYTE&&(tt=i.R8)),v===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.R8UI),W===i.UNSIGNED_SHORT&&(tt=i.R16UI),W===i.UNSIGNED_INT&&(tt=i.R32UI),W===i.BYTE&&(tt=i.R8I),W===i.SHORT&&(tt=i.R16I),W===i.INT&&(tt=i.R32I)),v===i.RG&&(W===i.FLOAT&&(tt=i.RG32F),W===i.HALF_FLOAT&&(tt=i.RG16F),W===i.UNSIGNED_BYTE&&(tt=i.RG8)),v===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RG8UI),W===i.UNSIGNED_SHORT&&(tt=i.RG16UI),W===i.UNSIGNED_INT&&(tt=i.RG32UI),W===i.BYTE&&(tt=i.RG8I),W===i.SHORT&&(tt=i.RG16I),W===i.INT&&(tt=i.RG32I)),v===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),W===i.UNSIGNED_INT&&(tt=i.RGB32UI),W===i.BYTE&&(tt=i.RGB8I),W===i.SHORT&&(tt=i.RGB16I),W===i.INT&&(tt=i.RGB32I)),v===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),W===i.UNSIGNED_INT&&(tt=i.RGBA32UI),W===i.BYTE&&(tt=i.RGBA8I),W===i.SHORT&&(tt=i.RGBA16I),W===i.INT&&(tt=i.RGBA32I)),v===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),v===i.RGBA){let Rt=at?tr:ee.getTransfer(J);W===i.FLOAT&&(tt=i.RGBA32F),W===i.HALF_FLOAT&&(tt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(tt=Rt===se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(w,v){let W;return w?v===null||v===ci||v===Ss?W=i.DEPTH24_STENCIL8:v===Rn?W=i.DEPTH32F_STENCIL8:v===Ms&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===Ss?W=i.DEPTH_COMPONENT24:v===Rn?W=i.DEPTH_COMPONENT32F:v===Ms&&(W=i.DEPTH_COMPONENT16),W}function R(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==We&&w.minFilter!==Xe?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){let v=w.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&h.delete(v)}function D(w){let v=w.target;v.removeEventListener("dispose",D),M(v)}function F(w){let v=n.get(w);if(v.__webglInit===void 0)return;let W=w.source,J=d.get(W);if(J){let at=J[v.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(w),Object.keys(J).length===0&&d.delete(W)}n.remove(w)}function S(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let W=w.source,J=d.get(W);delete J[v.__cacheKey],o.memory.textures--}function M(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let at=0;at<v.__webglFramebuffer[J].length;at++)i.deleteFramebuffer(v.__webglFramebuffer[J][at]);else i.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)i.deleteFramebuffer(v.__webglFramebuffer[J]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let W=w.textures;for(let J=0,at=W.length;J<at;J++){let tt=n.get(W[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(W[J])}n.remove(w)}let L=0;function V(){L=0}function q(){let w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){let W=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(W,w,v);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+v)}function A(w,v){let W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){E(W,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+v)}function I(w,v){let W=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){E(W,w,v);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+v)}function N(w,v){let W=n.get(w);if(w.version>0&&W.__version!==w.version){U(W,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+v)}let $={[Po]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},it={[We]:i.NEAREST,[Iu]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[li]:i.LINEAR_MIPMAP_LINEAR},st={[Uu]:i.NEVER,[zu]:i.ALWAYS,[Nu]:i.LESS,[vc]:i.LEQUAL,[Fu]:i.EQUAL,[Bu]:i.GEQUAL,[Ou]:i.GREATER,[ku]:i.NOTEQUAL};function Y(w,v){if(v.type===Rn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Xe||v.magFilter===da||v.magFilter===Pr||v.magFilter===li||v.minFilter===Xe||v.minFilter===da||v.minFilter===Pr||v.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,$[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,$[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,$[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,it[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,it[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,st[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===We||v.minFilter!==Pr&&v.minFilter!==li||v.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ht(w,v){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));let J=v.source,at=d.get(J);at===void 0&&(at={},d.set(J,at));let tt=z(v);if(tt!==w.__cacheKey){at[tt]===void 0&&(at[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),at[tt].usedTimes++;let Rt=at[w.__cacheKey];Rt!==void 0&&(at[w.__cacheKey].usedTimes--,Rt.usedTimes===0&&S(v)),w.__cacheKey=tt,w.__webglTexture=at[tt].texture}return W}function Mt(w,v,W){return Math.floor(Math.floor(w/W)/v)}function Ct(w,v,W,J){let tt=w.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,W,J,v.data);else{tt.sort((gt,At)=>gt.start-At.start);let Rt=0;for(let gt=1;gt<tt.length;gt++){let At=tt[Rt],Vt=tt[gt],Ot=At.start+At.count,wt=Mt(Vt.start,v.width,4),jt=Mt(At.start,v.width,4);Vt.start<=Ot+1&&wt===jt&&Mt(Vt.start+Vt.count-1,v.width,4)===wt?At.count=Math.max(At.count,Vt.start+Vt.count-At.start):(++Rt,tt[Rt]=Vt)}tt.length=Rt+1;let vt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let gt=0,At=tt.length;gt<At;gt++){let Vt=tt[gt],Ot=Math.floor(Vt.start/4),wt=Math.ceil(Vt.count/4),jt=Ot%v.width,B=Math.floor(Ot/v.width),xt=wt,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,jt,B,xt,St,W,J,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,vt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function E(w,v,W){let J=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=i.TEXTURE_3D);let at=ht(w,v),tt=v.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+W);let Rt=n.get(tt);if(tt.version!==Rt.__version||at===!0){e.activeTexture(i.TEXTURE0+W);let vt=ee.getPrimaries(ee.workingColorSpace),Lt=v.colorSpace===Gn?null:ee.getPrimaries(v.colorSpace),Nt=v.colorSpace===Gn||vt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let gt=_(v.image,!1,s.maxTextureSize);gt=Xt(v,gt);let At=r.convert(v.format,v.colorSpace),Vt=r.convert(v.type),Ot=x(v.internalFormat,At,Vt,v.colorSpace,v.isVideoTexture);Y(J,v);let wt,jt=v.mipmaps,B=v.isVideoTexture!==!0,xt=Rt.__version===void 0||at===!0,St=tt.dataReady,Dt=R(v,gt);if(v.isDepthTexture)Ot=y(v.format===Es,v.type),xt&&(B?e.texStorage2D(i.TEXTURE_2D,1,Ot,gt.width,gt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,At,Vt,null));else if(v.isDataTexture)if(jt.length>0){B&&xt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,jt[0].width,jt[0].height);for(let _t=0,rt=jt.length;_t<rt;_t++)wt=jt[_t],B?St&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,wt.width,wt.height,At,Vt,wt.data):e.texImage2D(i.TEXTURE_2D,_t,Ot,wt.width,wt.height,0,At,Vt,wt.data);v.generateMipmaps=!1}else B?(xt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,gt.width,gt.height),St&&Ct(v,gt,At,Vt)):e.texImage2D(i.TEXTURE_2D,0,Ot,gt.width,gt.height,0,At,Vt,gt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,jt[0].width,jt[0].height,gt.depth);for(let _t=0,rt=jt.length;_t<rt;_t++)if(wt=jt[_t],v.format!==ln)if(At!==null)if(B){if(St)if(v.layerUpdates.size>0){let Ft=Ac(wt.width,wt.height,v.format,v.type);for(let qt of v.layerUpdates){let le=wt.data.subarray(qt*Ft/wt.data.BYTES_PER_ELEMENT,(qt+1)*Ft/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,qt,wt.width,wt.height,1,At,le)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,gt.depth,At,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_t,Ot,wt.width,wt.height,gt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,_t,0,0,0,wt.width,wt.height,gt.depth,At,Vt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,_t,Ot,wt.width,wt.height,gt.depth,0,At,Vt,wt.data)}else{B&&xt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ot,jt[0].width,jt[0].height);for(let _t=0,rt=jt.length;_t<rt;_t++)wt=jt[_t],v.format!==ln?At!==null?B?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,_t,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,_t,Ot,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?St&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,wt.width,wt.height,At,Vt,wt.data):e.texImage2D(i.TEXTURE_2D,_t,Ot,wt.width,wt.height,0,At,Vt,wt.data)}else if(v.isDataArrayTexture)if(B){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ot,gt.width,gt.height,gt.depth),St)if(v.layerUpdates.size>0){let _t=Ac(gt.width,gt.height,v.format,v.type);for(let rt of v.layerUpdates){let Ft=gt.data.subarray(rt*_t/gt.data.BYTES_PER_ELEMENT,(rt+1)*_t/gt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,gt.width,gt.height,1,At,Vt,Ft)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,gt.width,gt.height,gt.depth,At,Vt,gt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,gt.width,gt.height,gt.depth,0,At,Vt,gt.data);else if(v.isData3DTexture)B?(xt&&e.texStorage3D(i.TEXTURE_3D,Dt,Ot,gt.width,gt.height,gt.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,gt.width,gt.height,gt.depth,At,Vt,gt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,gt.width,gt.height,gt.depth,0,At,Vt,gt.data);else if(v.isFramebufferTexture){if(xt)if(B)e.texStorage2D(i.TEXTURE_2D,Dt,Ot,gt.width,gt.height);else{let _t=gt.width,rt=gt.height;for(let Ft=0;Ft<Dt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Ot,_t,rt,0,At,Vt,null),_t>>=1,rt>>=1}}else if(jt.length>0){if(B&&xt){let _t=It(jt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,_t.width,_t.height)}for(let _t=0,rt=jt.length;_t<rt;_t++)wt=jt[_t],B?St&&e.texSubImage2D(i.TEXTURE_2D,_t,0,0,At,Vt,wt):e.texImage2D(i.TEXTURE_2D,_t,Ot,At,Vt,wt);v.generateMipmaps=!1}else if(B){if(xt){let _t=It(gt);e.texStorage2D(i.TEXTURE_2D,Dt,Ot,_t.width,_t.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Vt,gt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,At,Vt,gt);m(v)&&p(J),Rt.__version=tt.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function U(w,v,W){if(v.image.length!==6)return;let J=ht(w,v),at=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+W);let tt=n.get(at);if(at.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+W);let Rt=ee.getPrimaries(ee.workingColorSpace),vt=v.colorSpace===Gn?null:ee.getPrimaries(v.colorSpace),Lt=v.colorSpace===Gn||Rt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Nt=v.isCompressedTexture||v.image[0].isCompressedTexture,gt=v.image[0]&&v.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!Nt&&!gt?At[rt]=_(v.image[rt],!0,s.maxCubemapSize):At[rt]=gt?v.image[rt].image:v.image[rt],At[rt]=Xt(v,At[rt]);let Vt=At[0],Ot=r.convert(v.format,v.colorSpace),wt=r.convert(v.type),jt=x(v.internalFormat,Ot,wt,v.colorSpace),B=v.isVideoTexture!==!0,xt=tt.__version===void 0||J===!0,St=at.dataReady,Dt=R(v,Vt);Y(i.TEXTURE_CUBE_MAP,v);let _t;if(Nt){B&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,jt,Vt.width,Vt.height);for(let rt=0;rt<6;rt++){_t=At[rt].mipmaps;for(let Ft=0;Ft<_t.length;Ft++){let qt=_t[Ft];v.format!==ln?Ot!==null?B?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,qt.width,qt.height,Ot,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,jt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,0,0,qt.width,qt.height,Ot,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft,jt,qt.width,qt.height,0,Ot,wt,qt.data)}}}else{if(_t=v.mipmaps,B&&xt){_t.length>0&&Dt++;let rt=It(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,jt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(gt){B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,Ot,wt,At[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,At[rt].width,At[rt].height,0,Ot,wt,At[rt].data);for(let Ft=0;Ft<_t.length;Ft++){let le=_t[Ft].image[rt].image;B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,le.width,le.height,Ot,wt,le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,jt,le.width,le.height,0,Ot,wt,le.data)}}else{B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ot,wt,At[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,jt,Ot,wt,At[rt]);for(let Ft=0;Ft<_t.length;Ft++){let qt=_t[Ft];B?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,0,0,Ot,wt,qt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ft+1,jt,Ot,wt,qt.image[rt])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),tt.__version=at.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,W,J,at,tt){let Rt=r.convert(W.format,W.colorSpace),vt=r.convert(W.type),Lt=x(W.internalFormat,Rt,vt,W.colorSpace),Nt=n.get(v),gt=n.get(W);if(gt.__renderTarget=v,!Nt.__hasExternalTextures){let At=Math.max(1,v.width>>tt),Vt=Math.max(1,v.height>>tt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,tt,Lt,At,Vt,v.depth,0,Rt,vt,null):e.texImage2D(at,tt,Lt,At,Vt,0,Rt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),pt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,at,gt.__webglTexture,0,ct(v)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,at,gt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function dt(w,v,W){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let J=v.depthTexture,at=J&&J.isDepthTexture?J.type:null,tt=y(v.stencilBuffer,at),Rt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=ct(v);pt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,tt,v.width,v.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,tt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,w)}else{let J=v.textures;for(let at=0;at<J.length;at++){let tt=J[at],Rt=r.convert(tt.format,tt.colorSpace),vt=r.convert(tt.type),Lt=x(tt.internalFormat,Rt,vt,tt.colorSpace),Nt=ct(v);W&&pt(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,Lt,v.width,v.height):pt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt,Lt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ft(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let at=J.__webglTexture,tt=ct(v);if(v.depthTexture.format===os)pt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,at,0);else if(v.depthTexture.format===Es)pt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function lt(w){let v=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let at=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),v.__depthDisposeCallback=at}v.__boundDepthTexture=J}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let J=w.texture.mipmaps;J&&J.length>0?ft(v.__webglFramebuffer[0],w):ft(v.__webglFramebuffer,w)}else if(W){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=i.createRenderbuffer(),dt(v.__webglDepthbuffer[J],w,!1);else{let at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}else{let J=w.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),dt(v.__webglDepthbuffer,w,!1);else{let at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(w,v,W){let J=n.get(w);v!==void 0&&K(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&lt(w)}function P(w){let v=w.texture,W=n.get(w),J=n.get(v);w.addEventListener("dispose",D);let at=w.textures,tt=w.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=v.version,o.memory.textures++),tt){W.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[vt]=[];for(let Lt=0;Lt<v.mipmaps.length;Lt++)W.__webglFramebuffer[vt][Lt]=i.createFramebuffer()}else W.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)W.__webglFramebuffer[vt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let vt=0,Lt=at.length;vt<Lt;vt++){let Nt=n.get(at[vt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&pt(w)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let vt=0;vt<at.length;vt++){let Lt=at[vt];W.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[vt]);let Nt=r.convert(Lt.format,Lt.colorSpace),gt=r.convert(Lt.type),At=x(Lt.internalFormat,Nt,gt,Lt.colorSpace,w.isXRRenderTarget===!0),Vt=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,At,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,W.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),dt(W.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Y(i.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)K(W.__webglFramebuffer[vt][Lt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Lt);else K(W.__webglFramebuffer[vt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let vt=0,Lt=at.length;vt<Lt;vt++){let Nt=at[vt],gt=n.get(Nt),At=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(At=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,gt.__webglTexture),Y(At,Nt),K(W.__webglFramebuffer,w,Nt,i.COLOR_ATTACHMENT0+vt,At,0),m(Nt)&&p(At)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(vt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,J.__webglTexture),Y(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let Lt=0;Lt<v.mipmaps.length;Lt++)K(W.__webglFramebuffer[Lt],w,v,i.COLOR_ATTACHMENT0,vt,Lt);else K(W.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,vt,0);m(v)&&p(vt),e.unbindTexture()}w.depthBuffer&&lt(w)}function ot(w){let v=w.textures;for(let W=0,J=v.length;W<J;W++){let at=v[W];if(m(at)){let tt=T(w),Rt=n.get(at).__webglTexture;e.bindTexture(tt,Rt),p(tt),e.unbindTexture()}}}let Q=[],et=[];function nt(w){if(w.samples>0){if(pt(w)===!1){let v=w.textures,W=w.width,J=w.height,at=i.COLOR_BUFFER_BIT,tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(w),vt=v.length>1;if(vt)for(let Nt=0;Nt<v.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Lt=w.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let Nt=0;Nt<v.length;Nt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Nt]);let gt=n.get(v[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,gt,0)}i.blitFramebuffer(0,0,W,J,0,0,W,J,at,i.NEAREST),l===!0&&(Q.length=0,et.length=0,Q.push(i.COLOR_ATTACHMENT0+Nt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(tt),et.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Nt=0;Nt<v.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[Nt]);let gt=n.get(v[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ct(w){return Math.min(s.maxSamples,w.samples)}function pt(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function bt(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Xt(w,v){let W=w.colorSpace,J=w.format,at=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Si&&W!==Gn&&(ee.getTransfer(W)===se?(J!==ln||at!==_n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}function It(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=A,this.setTexture3D=I,this.setTextureCube=N,this.rebindTextures=Gt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=K,this.useMultisampledRTT=pt}function fy(i,t){function e(n,s=Gn){let r,o=ee.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===pa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ma)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hc)return i.BYTE;if(n===uc)return i.SHORT;if(n===Ms)return i.UNSIGNED_SHORT;if(n===fa)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===ln)return i.RGBA;if(n===os)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===gc)return i.RED;if(n===ga)return i.RED_INTEGER;if(n===_c)return i.RG;if(n===_a)return i.RG_INTEGER;if(n===ya)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ur||n===Nr)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===va||n===xa||n===Ma||n===ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Sa||n===Ea)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ta||n===Aa||n===Ca||n===Ra||n===Ia||n===Pa||n===La||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===ka||n===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ta)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ra)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===La)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ka)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===za||n===Ha||n===Va)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===za)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ga||n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}function _y(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Le&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Le&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),x=T.envMap,y=T.envMapRotation;x&&(m.envMap.value=x,Ni.copy(y),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Ni)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function yy(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){let y=x.program;n.uniformBlockBinding(T,y)}function c(T,x){let y=s[T.id];y===void 0&&(g(T),y=h(T),s[T.id]=y,T.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(T,R);let C=t.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){let x=u();T.__bindingPointIndex=x;let y=i.createBuffer(),R=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let x=s[T.id],y=T.uniforms,R=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,D=y.length;C<D;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=F.length;S<M;S++){let L=F[S];if(f(L,C,S,R)===!0){let V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],z=0;for(let X=0;X<q.length;X++){let A=q[X],I=_(A);typeof A=="number"||typeof A=="boolean"?(L.__data[0]=A,i.bufferSubData(i.UNIFORM_BUFFER,V+z,L.__data)):A.isMatrix3?(L.__data[0]=A.elements[0],L.__data[1]=A.elements[1],L.__data[2]=A.elements[2],L.__data[3]=0,L.__data[4]=A.elements[3],L.__data[5]=A.elements[4],L.__data[6]=A.elements[5],L.__data[7]=0,L.__data[8]=A.elements[6],L.__data[9]=A.elements[7],L.__data[10]=A.elements[8],L.__data[11]=0):(A.toArray(L.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,x,y,R){let C=T.value,D=x+"_"+y;if(R[D]===void 0)return typeof C=="number"||typeof C=="boolean"?R[D]=C:R[D]=C.clone(),!0;{let F=R[D];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[D]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(T){let x=T.uniforms,y=0,R=16;for(let D=0,F=x.length;D<F;D++){let S=Array.isArray(x[D])?x[D]:[x[D]];for(let M=0,L=S.length;M<L;M++){let V=S[M],q=Array.isArray(V.value)?V.value:[V.value];for(let z=0,X=q.length;z<X;z++){let A=q[z],I=_(A),N=y%R,$=N%I.boundary,it=N+$;y+=$,it!==0&&R-it<I.storage&&(y+=R-it),V.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=I.storage}}}let C=y%R;return C>0&&(y+=R-C),T.__size=y,T.__cache={},this}function _(T){let x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){let x=T.target;x.removeEventListener("dispose",m);let y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var qp,Yp,$p,jp,Zp,Jp,Kp,Qp,tm,em,nm,im,sm,rm,om,am,lm,cm,hm,um,dm,fm,pm,mm,gm,_m,ym,vm,xm,Mm,bm,Sm,Em,wm,Tm,Am,Cm,Rm,Im,Pm,Lm,Dm,Um,Nm,Fm,Om,km,Bm,zm,Hm,Vm,Gm,Wm,Xm,qm,Ym,$m,jm,Zm,Jm,Km,Qm,tg,eg,ng,ig,sg,rg,og,ag,lg,cg,hg,ug,dg,fg,pg,mg,gg,_g,yg,vg,xg,Mg,bg,Sg,Eg,wg,Tg,Ag,Cg,Rg,Ig,Pg,Lg,Dg,Ug,Ng,Fg,Og,kg,Bg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,$g,jg,Zg,Jg,Kg,Qg,t0,e0,n0,i0,s0,r0,o0,a0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,y0,v0,x0,M0,b0,S0,E0,Jt,Et,In,Ya,Ui,w0,Ts,Zu,Oi,Rc,Ju,Ic,Pc,Lc,Dc,Fi,ws,Ku,L0,Cs,xd,nd,Md,bd,Sd,id,sd,rd,od,ad,Nc,Fc,Oc,Uc,As,R_,I_,hd,ja,B_,z_,V_,Z_,Bc,zc,iy,ay,ly,hy,py,my,Hc,Vc,Ni,gy,Rs,kr=Vi(()=>{Cc();Cc();qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kp=`#ifdef USE_AOMAP
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
#endif`,Qp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,om=`#ifdef USE_BUMPMAP
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_m=`vec3 transformedNormal = objectNormal;
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
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Em=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Im=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Om=`uniform bool receiveShadow;
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
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Wm=`struct PhysicalMaterial {
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
}`,Xm=`
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Dg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bg=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
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
}`,Kg=`#if DEPTH_PACKING == 3200
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
}`,Qg=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,y0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,S0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:$p,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Kp,aomap_pars_fragment:Qp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:om,clipping_planes_fragment:am,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,cube_uv_reflection_fragment:gm,defaultnormal_vertex:_m,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:xm,emissivemap_pars_fragment:Mm,colorspace_fragment:bm,colorspace_pars_fragment:Sm,envmap_fragment:Em,envmap_common_pars_fragment:wm,envmap_pars_fragment:Tm,envmap_pars_vertex:Am,envmap_physical_pars_fragment:km,envmap_vertex:Cm,fog_vertex:Rm,fog_pars_vertex:Im,fog_fragment:Pm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Um,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Fm,lights_pars_begin:Om,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Wm,lights_fragment_begin:Xm,lights_fragment_maps:qm,lights_fragment_end:Ym,logdepthbuf_fragment:$m,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Km,map_pars_fragment:Qm,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:yg,opaque_fragment:vg,packing:xg,premultiplied_alpha_fragment:Mg,project_vertex:bg,dithering_fragment:Sg,dithering_pars_fragment:Eg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Cg,shadowmap_vertex:Rg,shadowmask_pars_fragment:Ig,skinbase_vertex:Pg,skinning_pars_vertex:Lg,skinning_vertex:Dg,skinnormal_vertex:Ug,specularmap_fragment:Ng,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:kg,transmission_fragment:Bg,transmission_pars_fragment:zg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Gg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:$g,cube_vert:jg,cube_frag:Zg,depth_vert:Jg,depth_frag:Kg,distanceRGBA_vert:Qg,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:y0,points_vert:v0,points_frag:x0,shadow_vert:M0,shadow_frag:b0,sprite_vert:S0,sprite_frag:E0},Et={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},In={basic:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Oe([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Oe([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Oe([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Oe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Oe([Et.points,Et.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Oe([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Oe([Et.common,Et.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Oe([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Oe([Et.sprite,Et.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Oe([Et.common,Et.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Oe([Et.lights,Et.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};In.physical={uniforms:Oe([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};Ya={r:0,b:0,g:0},Ui=new gn,w0=new xe;Ts=4,Zu=[.125,.215,.35,.446,.526,.582],Oi=20,Rc=new Ci,Ju=new Yt,Ic=null,Pc=0,Lc=0,Dc=!1,Fi=(1+Math.sqrt(5))/2,ws=1/Fi,Ku=[new k(-Fi,ws,0),new k(Fi,ws,0),new k(-ws,0,Fi),new k(ws,0,Fi),new k(0,Fi,-ws),new k(0,Fi,ws),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],L0=new k,Cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=L0}=r;Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ic,Pc,Lc),this._renderer.xr.enabled=Dc,t.scissorTest=!1,$a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ic=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Lc=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:bs,format:ln,colorSpace:Si,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,t,e)}return s}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Rc)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ju),u.toneMapping=Vn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new zn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),m=new de(new ni,_),p=!1,T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,p=!0):(_.color.copy(Ju),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let R=this._cubeSize;$a(s,y*R,x>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;$a(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ku[(s-r-1)%Ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new de(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);let p=[],T=0;for(let D=0;D<Oi;++D){let F=D/_,S=Math.exp(-F*F/2);p.push(S),D===0?T+=S:D<m&&(T+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let y=this._sizeLods[s],R=3*y*(s>x-Ts?s-x+Ts:0),C=4*(this._cubeSize-y);$a(e,R,C,3*y,2*y),l.setRenderTarget(e),l.render(u,Rc)}};xd=new Fe,nd=new cr(1,1),Md=new nr,bd=new Fo,Sd=new ar,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=a_(e.type)}},Fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A_(e.type)}},Oc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);C_(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};R_=37297,I_=0;hd=new $t;ja=new k;B_=/^[ \t]*#include +<([\w\d./]+)>/gm;z_=new Map;V_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Z_=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zc(t),e.set(t,n)),n}},zc=class{constructor(t){this.id=Z_++,this.code=t,this.usedTimes=0}};iy=0;ay=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ly=`uniform sampler2D shadow_pass;
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
}`;hy={[na]:ia,[sa]:aa,[ra]:la,[bi]:oa,[ia]:na,[aa]:sa,[la]:ra,[oa]:bi};py=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,my=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new hr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:py,fragmentShader:my,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends Sn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Hc,p={},T=e.getContextAttributes(),x=null,y=null,R=[],C=[],D=new mt,F=null,S=new Ne;S.viewport=new ue;let M=new Ne;M.viewport=new ue;let L=[S,M],V=new ea,q=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let U=R[E];return U===void 0&&(U=new fs,R[E]=U),U.getTargetRaySpace()},this.getControllerGrip=function(E){let U=R[E];return U===void 0&&(U=new fs,R[E]=U),U.getGripSpace()},this.getHand=function(E){let U=R[E];return U===void 0&&(U=new fs,R[E]=U),U.getHandSpace()};function X(E){let U=C.indexOf(E.inputSource);if(U===-1)return;let K=R[U];K!==void 0&&(K.update(E.inputSource,E.frame,c||o),K.dispatchEvent({type:E.type,data:E.inputSource}))}function A(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",I);for(let E=0;E<R.length;E++){let U=C[E];U!==null&&(C[E]=null,R[E].disconnect(U))}q=null,z=null,m.reset();for(let E in p)delete p[E];t.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){a=E,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",A),s.addEventListener("inputsourceschange",I),T.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,dt=null,ft=null;T.depth&&(ft=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=T.stencil?Es:os,dt=T.stencil?Ss:ci);let lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(lt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new En(d.textureWidth,d.textureHeight,{format:ln,type:_n,depthTexture:new cr(d.textureWidth,d.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let K={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,K),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new En(f.framebufferWidth,f.framebufferHeight,{format:ln,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(E){for(let U=0;U<E.removed.length;U++){let K=E.removed[U],dt=C.indexOf(K);dt>=0&&(C[dt]=null,R[dt].disconnect(K))}for(let U=0;U<E.added.length;U++){let K=E.added[U],dt=C.indexOf(K);if(dt===-1){for(let lt=0;lt<R.length;lt++)if(lt>=C.length){C.push(K),dt=lt;break}else if(C[lt]===null){C[lt]=K,dt=lt;break}if(dt===-1)break}let ft=R[dt];ft&&ft.connect(K)}}let N=new k,$=new k;function it(E,U,K){N.setFromMatrixPosition(U.matrixWorld),$.setFromMatrixPosition(K.matrixWorld);let dt=N.distanceTo($),ft=U.projectionMatrix.elements,lt=K.projectionMatrix.elements,Gt=ft[14]/(ft[10]-1),P=ft[14]/(ft[10]+1),ot=(ft[9]+1)/ft[5],Q=(ft[9]-1)/ft[5],et=(ft[8]-1)/ft[0],nt=(lt[8]+1)/lt[0],ct=Gt*et,pt=Gt*nt,bt=dt/(-et+nt),Xt=bt*-et;if(U.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(Xt),E.translateZ(bt),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),ft[10]===-1)E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let It=Gt+bt,w=P+bt,v=ct-Xt,W=pt+(dt-Xt),J=ot*P/w*It,at=Q*P/w*It;E.projectionMatrix.makePerspective(v,W,J,at,It,w),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function st(E,U){U===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(U.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let U=E.near,K=E.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(K=m.depthFar)),V.near=M.near=S.near=U,V.far=M.far=S.far=K,(q!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,z=V.far),V.layers.mask=E.layers.mask|6,S.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;let dt=E.parent,ft=V.cameras;st(V,dt);for(let lt=0;lt<ft.length;lt++)st(ft[lt],dt);ft.length===2?it(V,S,M):V.projectionMatrix.copy(S.projectionMatrix),Y(E,V,dt)};function Y(E,U,K){K===null?E.matrix.copy(U.matrixWorld):(E.matrix.copy(K.matrixWorld),E.matrix.invert(),E.matrix.multiply(U.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=as*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(E){l=E,d!==null&&(d.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(E){return p[E]};let ht=null;function Mt(E,U){if(h=U.getViewerPose(c||o),g=U,h!==null){let K=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let dt=!1;K.length!==V.cameras.length&&(V.cameras.length=0,dt=!0);for(let P=0;P<K.length;P++){let ot=K[P],Q=null;if(f!==null)Q=f.getViewport(ot);else{let nt=u.getViewSubImage(d,ot);Q=nt.viewport,P===0&&(t.setRenderTargetTextures(y,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(y))}let et=L[P];et===void 0&&(et=new Ne,et.layers.enable(P),et.viewport=new ue,L[P]=et),et.matrix.fromArray(ot.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ot.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(V.matrix.copy(et.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),dt===!0&&V.cameras.push(et)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(K[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(ft&&ft.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<K.length;P++){let ot=K[P].camera;if(ot){let Q=p[ot];Q||(Q=new hr,p[ot]=Q);let et=u.getCameraImage(ot);Q.sourceTexture=et}}}}for(let K=0;K<R.length;K++){let dt=C[K],ft=R[K];dt!==null&&ft!==void 0&&ft.update(dt,U,c||o)}ht&&ht(E,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),g=null}let Ct=new vd;Ct.setAnimationLoop(Mt),this.setAnimationLoop=function(E){ht=E},this.dispose=function(){}}},Ni=new gn,gy=new xe;Rs=class{constructor(t={}){let{canvas:e=Hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=we;let C=0,D=0,F=null,S=-1,M=null,L=new ue,V=new ue,q=null,z=new Yt(0),X=0,A=e.width,I=e.height,N=1,$=null,it=null,st=new ue(0,0,A,I),Y=new ue(0,0,A,I),ht=!1,Mt=new ps,Ct=!1,E=!1,U=new xe,K=new k,dt=new ue,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function Gt(){return F===null?N:1}let P=n;function ot(b,H){return e.getContext(b,H)}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),P===null){let H="webgl2";if(P=ot(H,b),P===null)throw ot(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,et,nt,ct,pt,bt,Xt,It,w,v,W,J,at,tt,Rt,vt,Lt,Nt,gt,At,Vt,Ot,wt,jt;function B(){Q=new F0(P),Q.init(),Ot=new fy(P,Q),et=new R0(P,Q,t,Ot),nt=new uy(P,Q),et.reversedDepthBuffer&&d&&nt.buffers.depth.setReversed(!0),ct=new B0(P),pt=new K_,bt=new dy(P,Q,nt,pt,et,Ot,ct),Xt=new P0(y),It=new N0(y),w=new Xp(P),wt=new A0(P,w),v=new O0(P,w,ct,wt),W=new H0(P,v,w,ct),gt=new z0(P,et,bt),vt=new I0(pt),J=new J_(y,Xt,It,Q,et,wt,vt),at=new _y(y,pt),tt=new ty,Rt=new oy(Q),Nt=new T0(y,Xt,It,nt,W,f,l),Lt=new cy(y,W,et),jt=new yy(P,ct,et,nt),At=new C0(P,Q,ct),Vt=new k0(P,Q,ct),ct.programs=J.programs,y.capabilities=et,y.extensions=Q,y.properties=pt,y.renderLists=tt,y.shadowMap=Lt,y.state=nt,y.info=ct}B();let xt=new Vc(y,P);this.xr=xt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(A,I,!1))},this.getSize=function(b){return b.set(A,I)},this.setSize=function(b,H,j=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,I=H,e.width=Math.floor(b*N),e.height=Math.floor(H*N),j===!0&&(e.style.width=b+"px",e.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(A*N,I*N).floor()},this.setDrawingBufferSize=function(b,H,j){A=b,I=H,N=j,e.width=Math.floor(b*j),e.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(st)},this.setViewport=function(b,H,j,Z){b.isVector4?st.set(b.x,b.y,b.z,b.w):st.set(b,H,j,Z),nt.viewport(L.copy(st).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(Y)},this.setScissor=function(b,H,j,Z){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,H,j,Z),nt.scissor(V.copy(Y).multiplyScalar(N).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(b){nt.setScissorTest(ht=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){it=b},this.getClearColor=function(b){return b.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,j=!0){let Z=0;if(b){let G=!1;if(F!==null){let yt=F.texture.format;G=yt===ya||yt===_a||yt===ga}if(G){let yt=F.texture.type,Tt=yt===_n||yt===ci||yt===Ms||yt===Ss||yt===pa||yt===ma,Ut=Nt.getClearColor(),Pt=Nt.getClearAlpha(),Ht=Ut.r,Wt=Ut.g,kt=Ut.b;Tt?(g[0]=Ht,g[1]=Wt,g[2]=kt,g[3]=Pt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ht,_[1]=Wt,_[2]=kt,_[3]=Pt,P.clearBufferiv(P.COLOR,0,_))}else Z|=P.COLOR_BUFFER_BIT}H&&(Z|=P.DEPTH_BUFFER_BIT),j&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),Nt.dispose(),tt.dispose(),Rt.dispose(),pt.dispose(),Xt.dispose(),It.dispose(),W.dispose(),wt.dispose(),jt.dispose(),J.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Mn),xt.removeEventListener("sessionend",gh),fi.stop()};function St(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=ct.autoReset,H=Lt.enabled,j=Lt.autoUpdate,Z=Lt.needsUpdate,G=Lt.type;B(),ct.autoReset=b,Lt.enabled=H,Lt.autoUpdate=j,Lt.needsUpdate=Z,Lt.type=G}function _t(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function rt(b){let H=b.target;H.removeEventListener("dispose",rt),Ft(H)}function Ft(b){qt(b),pt.remove(b)}function qt(b){let H=pt.get(b).programs;H!==void 0&&(H.forEach(function(j){J.releaseProgram(j)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,Z,G,yt){H===null&&(H=ft);let Tt=G.isMesh&&G.matrixWorld.determinant()<0,Ut=gf(b,H,j,Z,G);nt.setMaterial(Z,Tt);let Pt=j.index,Ht=1;if(Z.wireframe===!0){if(Pt=v.getWireframeAttribute(j),Pt===void 0)return;Ht=2}let Wt=j.drawRange,kt=j.attributes.position,te=Wt.start*Ht,re=(Wt.start+Wt.count)*Ht;yt!==null&&(te=Math.max(te,yt.start*Ht),re=Math.min(re,(yt.start+yt.count)*Ht)),Pt!==null?(te=Math.max(te,0),re=Math.min(re,Pt.count)):kt!=null&&(te=Math.max(te,0),re=Math.min(re,kt.count));let ve=re-te;if(ve<0||ve===1/0)return;wt.setup(G,Z,Ut,j,Pt);let ce,ae=At;if(Pt!==null&&(ce=w.get(Pt),ae=Vt,ae.setIndex(ce)),G.isMesh)Z.wireframe===!0?(nt.setLineWidth(Z.wireframeLinewidth*Gt()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(G.isLine){let zt=Z.linewidth;zt===void 0&&(zt=1),nt.setLineWidth(zt*Gt()),G.isLineSegments?ae.setMode(P.LINES):G.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else G.isPoints?ae.setMode(P.POINTS):G.isSprite&&ae.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)cs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ae.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ae.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let zt=G._multiDrawStarts,me=G._multiDrawCounts,ne=G._multiDrawCount,Ye=Pt?w.get(Pt).bytesPerElement:1,Hi=pt.get(Z).currentProgram.getUniforms();for(let $e=0;$e<ne;$e++)Hi.setValue(P,"_gl_DrawID",$e),ae.render(zt[$e]/Ye,me[$e])}else if(G.isInstancedMesh)ae.renderInstances(te,ve,G.count);else if(j.isInstancedBufferGeometry){let zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,me=Math.min(j.instanceCount,zt);ae.renderInstances(te,ve,me)}else ae.render(te,ve)};function le(b,H,j){b.transparent===!0&&b.side===Cn&&b.forceSinglePass===!1?(b.side=Le,b.needsUpdate=!0,Jr(b,H,j),b.side=Bn,b.needsUpdate=!0,Jr(b,H,j),b.side=Cn):Jr(b,H,j)}this.compile=function(b,H,j=null){j===null&&(j=b),p=Rt.get(j),p.init(H),x.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==j&&b.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let yt=G.material;if(yt)if(Array.isArray(yt))for(let Tt=0;Tt<yt.length;Tt++){let Ut=yt[Tt];le(Ut,j,G),Z.add(Ut)}else le(yt,j,G),Z.add(yt)}),p=x.pop(),Z},this.compileAsync=function(b,H,j=null){let Z=this.compile(b,H,j);return new Promise(G=>{function yt(){if(Z.forEach(function(Tt){pt.get(Tt).currentProgram.isReady()&&Z.delete(Tt)}),Z.size===0){G(b);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ie=null;function Ln(b){ie&&ie(b)}function Mn(){fi.stop()}function gh(){fi.start()}let fi=new vd;fi.setAnimationLoop(Ln),typeof self<"u"&&fi.setContext(self),this.setAnimationLoop=function(b){ie=b,xt.setAnimationLoop(b),b===null?fi.stop():fi.start()},xt.addEventListener("sessionstart",Mn),xt.addEventListener("sessionend",gh),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(H),H=xt.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,F),p=Rt.get(b,x.length),p.init(H),x.push(p),U.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Mt.setFromProjectionMatrix(U,mn,H.reversedDepth),E=this.localClippingEnabled,Ct=vt.init(this.clippingPlanes,E),m=tt.get(b,T.length),m.init(),T.push(m),xt.enabled===!0&&xt.isPresenting===!0){let yt=y.xr.getDepthSensingMesh();yt!==null&&gl(yt,H,-1/0,y.sortObjects)}gl(b,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,it),lt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,lt&&Nt.addToRenderList(m,b),this.info.render.frame++,Ct===!0&&vt.beginShadows();let j=p.state.shadowsArray;Lt.render(j,b,H),Ct===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let yt=H.cameras;if(G.length>0)for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++){let Pt=yt[Tt];yh(Z,G,b,Pt)}lt&&Nt.render(b);for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++){let Pt=yt[Tt];_h(m,b,Pt,Pt.viewport)}}else G.length>0&&yh(Z,G,b,H),lt&&Nt.render(b),_h(m,b,H);F!==null&&D===0&&(bt.updateMultisampleRenderTarget(F),bt.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,H),wt.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Ct===!0&&vt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function gl(b,H,j,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Mt.intersectsSprite(b)){Z&&dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(U);let Tt=W.update(b),Ut=b.material;Ut.visible&&m.push(b,Tt,Ut,j,dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Mt.intersectsObject(b))){let Tt=W.update(b),Ut=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),dt.copy(b.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),dt.copy(Tt.boundingSphere.center)),dt.applyMatrix4(b.matrixWorld).applyMatrix4(U)),Array.isArray(Ut)){let Pt=Tt.groups;for(let Ht=0,Wt=Pt.length;Ht<Wt;Ht++){let kt=Pt[Ht],te=Ut[kt.materialIndex];te&&te.visible&&m.push(b,Tt,te,j,dt.z,kt)}}else Ut.visible&&m.push(b,Tt,Ut,j,dt.z,null)}}let yt=b.children;for(let Tt=0,Ut=yt.length;Tt<Ut;Tt++)gl(yt[Tt],H,j,Z)}function _h(b,H,j,Z){let G=b.opaque,yt=b.transmissive,Tt=b.transparent;p.setupLightsView(j),Ct===!0&&vt.setGlobalState(y.clippingPlanes,j),Z&&nt.viewport(L.copy(Z)),G.length>0&&Zr(G,H,j),yt.length>0&&Zr(yt,H,j),Tt.length>0&&Zr(Tt,H,j),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function yh(b,H,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new En(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?bs:_n,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));let yt=p.state.transmissionRenderTarget[Z.id],Tt=Z.viewport||L;yt.setSize(Tt.z*y.transmissionResolutionScale,Tt.w*y.transmissionResolutionScale);let Ut=y.getRenderTarget(),Pt=y.getActiveCubeFace(),Ht=y.getActiveMipmapLevel();y.setRenderTarget(yt),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),lt&&Nt.render(j);let Wt=y.toneMapping;y.toneMapping=Vn;let kt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ct===!0&&vt.setGlobalState(y.clippingPlanes,Z),Zr(b,j,Z),bt.updateMultisampleRenderTarget(yt),bt.updateRenderTargetMipmap(yt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let re=0,ve=H.length;re<ve;re++){let ce=H[re],ae=ce.object,zt=ce.geometry,me=ce.material,ne=ce.group;if(me.side===Cn&&ae.layers.test(Z.layers)){let Ye=me.side;me.side=Le,me.needsUpdate=!0,vh(ae,j,Z,zt,me,ne),me.side=Ye,me.needsUpdate=!0,te=!0}}te===!0&&(bt.updateMultisampleRenderTarget(yt),bt.updateRenderTargetMipmap(yt))}y.setRenderTarget(Ut,Pt,Ht),y.setClearColor(z,X),kt!==void 0&&(Z.viewport=kt),y.toneMapping=Wt}function Zr(b,H,j){let Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,yt=b.length;G<yt;G++){let Tt=b[G],Ut=Tt.object,Pt=Tt.geometry,Ht=Tt.group,Wt=Tt.material;Wt.allowOverride===!0&&Z!==null&&(Wt=Z),Ut.layers.test(j.layers)&&vh(Ut,H,j,Pt,Wt,Ht)}}function vh(b,H,j,Z,G,yt){b.onBeforeRender(y,H,j,Z,G,yt),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(y,H,j,Z,b,yt),G.transparent===!0&&G.side===Cn&&G.forceSinglePass===!1?(G.side=Le,G.needsUpdate=!0,y.renderBufferDirect(j,H,Z,G,b,yt),G.side=Bn,G.needsUpdate=!0,y.renderBufferDirect(j,H,Z,G,b,yt),G.side=Cn):y.renderBufferDirect(j,H,Z,G,b,yt),b.onAfterRender(y,H,j,Z,G,yt)}function Jr(b,H,j){H.isScene!==!0&&(H=ft);let Z=pt.get(b),G=p.state.lights,yt=p.state.shadowsArray,Tt=G.state.version,Ut=J.getParameters(b,G.state,yt,H,j),Pt=J.getProgramCacheKey(Ut),Ht=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?It:Xt).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ht===void 0&&(b.addEventListener("dispose",rt),Ht=new Map,Z.programs=Ht);let Wt=Ht.get(Pt);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===Tt)return Mh(b,Ut),Wt}else Ut.uniforms=J.getUniforms(b),b.onBeforeCompile(Ut,y),Wt=J.acquireProgram(Ut,Pt),Ht.set(Pt,Wt),Z.uniforms=Ut.uniforms;let kt=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(kt.clippingPlanes=vt.uniform),Mh(b,Ut),Z.needsLights=yf(b),Z.lightsStateVersion=Tt,Z.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function xh(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Mh(b,H){let j=pt.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function gf(b,H,j,Z,G){H.isScene!==!0&&(H=ft),bt.resetTextureUnits();let yt=H.fog,Tt=Z.isMeshStandardMaterial?H.environment:null,Ut=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Si,Pt=(Z.isMeshStandardMaterial?It:Xt).get(Z.envMap||Tt),Ht=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Wt=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!j.morphAttributes.position,te=!!j.morphAttributes.normal,re=!!j.morphAttributes.color,ve=Vn;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(ve=y.toneMapping);let ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ae=ce!==void 0?ce.length:0,zt=pt.get(Z),me=p.state.lights;if(Ct===!0&&(E===!0||b!==M)){let Be=b===M&&Z.id===S;vt.setState(Z,b,Be)}let ne=!1;Z.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==me.state.version||zt.outputColorSpace!==Ut||G.isBatchedMesh&&zt.batching===!1||!G.isBatchedMesh&&zt.batching===!0||G.isBatchedMesh&&zt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&zt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&zt.instancing===!1||!G.isInstancedMesh&&zt.instancing===!0||G.isSkinnedMesh&&zt.skinning===!1||!G.isSkinnedMesh&&zt.skinning===!0||G.isInstancedMesh&&zt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&zt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&zt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&zt.instancingMorph===!1&&G.morphTexture!==null||zt.envMap!==Pt||Z.fog===!0&&zt.fog!==yt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==vt.numPlanes||zt.numIntersection!==vt.numIntersection)||zt.vertexAlphas!==Ht||zt.vertexTangents!==Wt||zt.morphTargets!==kt||zt.morphNormals!==te||zt.morphColors!==re||zt.toneMapping!==ve||zt.morphTargetsCount!==ae)&&(ne=!0):(ne=!0,zt.__version=Z.version);let Ye=zt.currentProgram;ne===!0&&(Ye=Jr(Z,H,G));let Hi=!1,$e=!1,zs=!1,ge=Ye.getUniforms(),nn=zt.uniforms;if(nt.useProgram(Ye.program)&&(Hi=!0,$e=!0,zs=!0),Z.id!==S&&(S=Z.id,$e=!0),Hi||M!==b){nt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(P,"projectionMatrix",b.projectionMatrix),ge.setValue(P,"viewMatrix",b.matrixWorldInverse);let Ge=ge.map.cameraPosition;Ge!==void 0&&Ge.setValue(P,K.setFromMatrixPosition(b.matrixWorld)),et.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ge.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,$e=!0,zs=!0)}if(G.isSkinnedMesh){ge.setOptional(P,G,"bindMatrix"),ge.setOptional(P,G,"bindMatrixInverse");let Be=G.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ge.setValue(P,"boneTexture",Be.boneTexture,bt))}G.isBatchedMesh&&(ge.setOptional(P,G,"batchingTexture"),ge.setValue(P,"batchingTexture",G._matricesTexture,bt),ge.setOptional(P,G,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",G._indirectTexture,bt),ge.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",G._colorsTexture,bt));let sn=j.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&gt.update(G,j,Ye),($e||zt.receiveShadow!==G.receiveShadow)&&(zt.receiveShadow=G.receiveShadow,ge.setValue(P,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Pt,nn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),$e&&(ge.setValue(P,"toneMappingExposure",y.toneMappingExposure),zt.needsLights&&_f(nn,zs),yt&&Z.fog===!0&&at.refreshFogUniforms(nn,yt),at.refreshMaterialUniforms(nn,Z,N,I,p.state.transmissionRenderTarget[b.id]),As.upload(P,xh(zt),nn,bt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(As.upload(P,xh(zt),nn,bt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ge.setValue(P,"center",G.center),ge.setValue(P,"modelViewMatrix",G.modelViewMatrix),ge.setValue(P,"normalMatrix",G.normalMatrix),ge.setValue(P,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Be=Z.uniformsGroups;for(let Ge=0,_l=Be.length;Ge<_l;Ge++){let pi=Be[Ge];jt.update(pi,Ye),jt.bind(pi,Ye)}}return Ye}function _f(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,H,j){let Z=pt.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),pt.get(b.texture).__webglTexture=H,pt.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){let j=pt.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let vf=P.createFramebuffer();this.setRenderTarget=function(b,H=0,j=0){F=b,C=H,D=j;let Z=!0,G=null,yt=!1,Tt=!1;if(b){let Pt=pt.get(b);if(Pt.__useDefaultFramebuffer!==void 0)nt.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1;else if(Pt.__webglFramebuffer===void 0)bt.setupRenderTarget(b);else if(Pt.__hasExternalTextures)bt.rebindTextures(b,pt.get(b.texture).__webglTexture,pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let kt=b.depthTexture;if(Pt.__boundDepthTexture!==kt){if(kt!==null&&pt.has(kt)&&(b.width!==kt.image.width||b.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");bt.setupDepthRenderbuffer(b)}}let Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);let Wt=pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[H])?G=Wt[H][j]:G=Wt[H],yt=!0):b.samples>0&&bt.useMultisampledRTT(b)===!1?G=pt.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?G=Wt[j]:G=Wt,L.copy(b.viewport),V.copy(b.scissor),q=b.scissorTest}else L.copy(st).multiplyScalar(N).floor(),V.copy(Y).multiplyScalar(N).floor(),q=ht;if(j!==0&&(G=vf),nt.bindFramebuffer(P.FRAMEBUFFER,G)&&Z&&nt.drawBuffers(b,G),nt.viewport(L),nt.scissor(V),nt.setScissorTest(q),yt){let Pt=pt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,j)}else if(Tt){let Pt=H;for(let Ht=0;Ht<b.textures.length;Ht++){let Wt=pt.get(b.textures[Ht]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ht,Wt.__webglTexture,j,Pt)}}else if(b!==null&&j!==0){let Pt=pt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pt.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(b,H,j,Z,G,yt,Tt,Ut=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt){nt.bindFramebuffer(P.FRAMEBUFFER,Pt);try{let Ht=b.textures[Ut],Wt=Ht.format,kt=Ht.type;if(!et.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&j>=0&&j<=b.height-G&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ut),P.readPixels(H,j,Z,G,Ot.convert(Wt),Ot.convert(kt),yt))}finally{let Ht=F!==null?pt.get(F).__webglFramebuffer:null;nt.bindFramebuffer(P.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,Z,G,yt,Tt,Ut=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Tt!==void 0&&(Pt=Pt[Tt]),Pt)if(H>=0&&H<=b.width-Z&&j>=0&&j<=b.height-G){nt.bindFramebuffer(P.FRAMEBUFFER,Pt);let Ht=b.textures[Ut],Wt=Ht.format,kt=Ht.type;if(!et.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.bufferData(P.PIXEL_PACK_BUFFER,yt.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ut),P.readPixels(H,j,Z,G,Ot.convert(Wt),Ot.convert(kt),0);let re=F!==null?pt.get(F).__webglFramebuffer:null;nt.bindFramebuffer(P.FRAMEBUFFER,re);let ve=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Vu(P,ve,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,yt),P.deleteBuffer(te),P.deleteSync(ve),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,j=0){let Z=Math.pow(2,-j),G=Math.floor(b.image.width*Z),yt=Math.floor(b.image.height*Z),Tt=H!==null?H.x:0,Ut=H!==null?H.y:0;bt.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,Tt,Ut,G,yt),nt.unbindTexture()};let xf=P.createFramebuffer(),Mf=P.createFramebuffer();this.copyTextureToTexture=function(b,H,j=null,Z=null,G=0,yt=null){yt===null&&(G!==0?(cs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=G,G=0):yt=0);let Tt,Ut,Pt,Ht,Wt,kt,te,re,ve,ce=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(j!==null)Tt=j.max.x-j.min.x,Ut=j.max.y-j.min.y,Pt=j.isBox3?j.max.z-j.min.z:1,Ht=j.min.x,Wt=j.min.y,kt=j.isBox3?j.min.z:0;else{let sn=Math.pow(2,-G);Tt=Math.floor(ce.width*sn),Ut=Math.floor(ce.height*sn),b.isDataArrayTexture?Pt=ce.depth:b.isData3DTexture?Pt=Math.floor(ce.depth*sn):Pt=1,Ht=0,Wt=0,kt=0}Z!==null?(te=Z.x,re=Z.y,ve=Z.z):(te=0,re=0,ve=0);let ae=Ot.convert(H.format),zt=Ot.convert(H.type),me;H.isData3DTexture?(bt.setTexture3D(H,0),me=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(bt.setTexture2DArray(H,0),me=P.TEXTURE_2D_ARRAY):(bt.setTexture2D(H,0),me=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let ne=P.getParameter(P.UNPACK_ROW_LENGTH),Ye=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Hi=P.getParameter(P.UNPACK_SKIP_PIXELS),$e=P.getParameter(P.UNPACK_SKIP_ROWS),zs=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ce.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ce.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ht),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,kt);let ge=b.isDataArrayTexture||b.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let sn=pt.get(b),Be=pt.get(H),Ge=pt.get(sn.__renderTarget),_l=pt.get(Be.__renderTarget);nt.bindFramebuffer(P.READ_FRAMEBUFFER,Ge.__webglFramebuffer),nt.bindFramebuffer(P.DRAW_FRAMEBUFFER,_l.__webglFramebuffer);for(let pi=0;pi<Pt;pi++)ge&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.get(b).__webglTexture,G,kt+pi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pt.get(H).__webglTexture,yt,ve+pi)),P.blitFramebuffer(Ht,Wt,Tt,Ut,te,re,Tt,Ut,P.DEPTH_BUFFER_BIT,P.NEAREST);nt.bindFramebuffer(P.READ_FRAMEBUFFER,null),nt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||pt.has(b)){let sn=pt.get(b),Be=pt.get(H);nt.bindFramebuffer(P.READ_FRAMEBUFFER,xf),nt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Mf);for(let Ge=0;Ge<Pt;Ge++)ge?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,sn.__webglTexture,G,kt+Ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,sn.__webglTexture,G),nn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Be.__webglTexture,yt,ve+Ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Be.__webglTexture,yt),G!==0?P.blitFramebuffer(Ht,Wt,Tt,Ut,te,re,Tt,Ut,P.COLOR_BUFFER_BIT,P.NEAREST):nn?P.copyTexSubImage3D(me,yt,te,re,ve+Ge,Ht,Wt,Tt,Ut):P.copyTexSubImage2D(me,yt,te,re,Ht,Wt,Tt,Ut);nt.bindFramebuffer(P.READ_FRAMEBUFFER,null),nt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else nn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(me,yt,te,re,ve,Tt,Ut,Pt,ae,zt,ce.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(me,yt,te,re,ve,Tt,Ut,Pt,ae,ce.data):P.texSubImage3D(me,yt,te,re,ve,Tt,Ut,Pt,ae,zt,ce):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,yt,te,re,Tt,Ut,ae,zt,ce.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,yt,te,re,ce.width,ce.height,ae,ce.data):P.texSubImage2D(P.TEXTURE_2D,yt,te,re,Tt,Ut,ae,zt,ce);P.pixelStorei(P.UNPACK_ROW_LENGTH,ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ye),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Hi),P.pixelStorei(P.UNPACK_SKIP_ROWS,$e),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zs),yt===0&&H.generateMipmaps&&P.generateMipmap(me),nt.unbindTexture()},this.initRenderTarget=function(b){pt.get(b).__webglFramebuffer===void 0&&bt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?bt.setTextureCube(b,0):b.isData3DTexture?bt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?bt.setTexture2DArray(b,0):bt.setTexture2D(b,0),nt.unbindTexture()},this.resetState=function(){C=0,D=0,F=null,nt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}});function Sy(i,t,e){let n=a=>(a/=255)<=.04045?a/12.92:((a+.055)/1.055)**2.4;i=n(i),t=n(t),e=n(e);let s=Math.cbrt(.4122214708*i+.5363325363*t+.0514459929*e),r=Math.cbrt(.2119034982*i+.6806995451*t+.1073969566*e),o=Math.cbrt(.0883024619*i+.2817188376*t+.6299787005*e);return[.2104542553*s+.793617785*r-.0040720468*o,1.9779984951*s-2.428592205*r+.4505937099*o,.0259040371*s+.7827717662*r-.808675766*o]}function Ey(i,t,e,n=!0){let s=new Uint8Array(t*e).fill(1);for(let d=0;d<s.length;d++)i[d*4+3]<100&&(s[d]=0);if(!n)return s;let r=[0,t-1,t*(e-1),t*e-1].map(d=>Array.from(i.slice(d*4,d*4+3))),o=[0,1,2].map(d=>r.map(f=>f[d]).sort((f,g)=>f-g)[1]),a=new Uint8Array(t*e),l=new Int32Array(t*e),c=0,h=0;function u(d){a[d]||(a[d]=1,(!s[d]||jc(Array.from(i.slice(d*4,d*4+3)),o)<2100)&&(s[d]=0,l[h++]=d))}for(let d=0;d<t;d++)u(d),u((e-1)*t+d);for(let d=0;d<e;d++)u(d*t),u(d*t+t-1);for(;c<h;){let d=l[c++],f=d%t,g=d/t|0;f&&u(d-1),f<t-1&&u(d+1),g&&u(d-t),g<e-1&&u(d+t)}if(s.reduce((d,f)=>d+f,0)<t*e*.025)for(let d=0;d<s.length;d++)s[d]=i[d*4+3]>=100?1:0;return s}function Fd(i,t,e,n=5,s=!0){let r=Ey(i,t,e,s),o=[];for(let h=0;h<r.length;h++)r[h]&&o.push({i:h,rgb:Array.from(i.slice(h*4,h*4+3)),lab:Sy(...i.slice(h*4,h*4+3))});if(!o.length)throw Error("没有可分析的有效像素，请更换图片。");let a=[o[o.length*.37|0].lab.slice()];for(;a.length<Math.min(n,o.length);){let h=o[0],u=-1;for(let d of o){let f=Math.min(...a.map(g=>jc(d.lab,g)));f>u&&(u=f,h=d)}if(u<1e-8)break;a.push(h.lab.slice())}let l=new Int16Array(t*e).fill(-1);for(let h=0;h<12;h++){let u=a.map(()=>[0,0,0,0]);for(let d of o){let f=0,g=1/0;a.forEach((m,p)=>{let T=jc(d.lab,m);T<g&&(g=T,f=p)}),l[d.i]=f;let _=u[f];for(let m=0;m<3;m++)_[m]+=d.lab[m];_[3]++}u.forEach((d,f)=>{d[3]&&(a[f]=d.slice(0,3).map(g=>g/d[3]))})}let c=a.map(()=>({rgb:[0,0,0],count:0}));for(let h of o){let u=c[l[h.i]];u.count++;for(let d=0;d<3;d++)u.rgb[d]+=h.rgb[d]}return c.forEach(h=>{h.rgb=h.rgb.map(u=>Math.round(u/(h.count||1))),h.hex="#"+h.rgb.map(u=>u.toString(16).padStart(2,"0")).join(""),h.share=h.count/o.length}),{width:t,height:e,labels:l,foreground:r,colors:c,validPixels:o.length}}function Gr(i,t){return Uint8Array.from(i.labels,e=>e===t?1:0)}function tl(i){Qa.set("custom",i.map(t=>[...t]));for(let t of Vr.keys())t.startsWith("custom:")&&Vr.delete(t)}function ki(i){if(Qa.has(i))return Qa.get(i);let t=[],e=(n,s,r,o)=>{for(let a=0;a<=32;a++){let l=a/32,c=1-l;t.push([c*c*c*n[0]+3*c*c*l*s[0]+3*c*l*l*r[0]+l*l*l*o[0],c*c*c*n[1]+3*c*c*l*s[1]+3*c*l*l*r[1]+l*l*l*o[1]])}};if(i==="fruit")e([0,-.76],[.7,-.96],[1.02,-.32],[.84,.2]),e([.84,.2],[.7,.78],[.25,.94],[0,.85]),e([0,.85],[-.32,.98],[-.85,.63],[-.87,.1]),e([-.87,.1],[-1.01,-.43],[-.62,-.98],[0,-.76]);else if(i==="leaf")e([-1,0],[-.4,-.85],[.55,-.61],[1,0]),e([1,0],[.45,.74],[-.4,.6],[-1,0]);else if(["round","drop","heart"].includes(i))for(let n=0;n<96;n++){let s=n/96*Math.PI*2;i==="round"?t.push([Math.cos(s)*.85,Math.sin(s)*.85]):i==="heart"?t.push([Math.pow(Math.sin(s),3)*.9,-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))*.055]):t.push([Math.sin(s)*.75*(.7+.3*Math.cos(s)),Math.cos(s)*.9])}else t.push([-1,.65],[-.23,-.57],[.12,-.08],[.47,-.73],[1,.65]);return Qa.set(i,t),t}function wy(i,t=420){let e=i+":"+t;if(Vr.has(e))return Vr.get(e);let n=ki(i),s=[],r=o=>{let a=Math.sin(o*127.1+91.7)*43758.5453;return a-Math.floor(a)};for(let o=0;o<t*12&&s.length<t;o++){let a=r(o*2)*2-1,l=r(o*2+1)*2-1,c=!1;for(let h=0,u=n.length-1;h<n.length;u=h++){let d=n[h],f=n[u];d[1]>l!=f[1]>l&&a<(f[0]-d[0])*(l-d[1])/(f[1]-d[1])+d[0]&&(c=!c)}c&&s.push([a,l])}return Vr.set(e,s),s}function hi(i,t,e,n){let s=wy(e),r=n.angle*Math.PI/180,o=Math.cos(r),a=Math.sin(r),l=0,c=0;for(let[d,f]of s){let g=Math.round((n.x+(d*o-f*a)*n.scale)*i.width),_=Math.round((n.y+(d*a+f*o)*n.scale)*i.height);if(g>=0&&g<i.width&&_>=0&&_<i.height){let m=_*i.width+g;i.foreground[m]&&(c++,t[m]&&l++)}}let h=l/s.length,u=c/s.length;return{fit:h,containment:u,outside:1-u,score:.7*h+.3*u,samples:s.length}}function Od(i,t,e,{scale:n}={}){let s=[];for(let o of n?[n]:[.12,.18,.24,.3])for(let a=2;a<=8;a++)for(let l=2;l<=8;l++)for(let c of[-45,0,45,90]){let h={x:l/10,y:a/10,scale:o,angle:c};s.push({...h,...hi(i,t,e,h)})}s.sort((o,a)=>a.score-o.score);let r=[];for(let o of s)if(r.every(a=>Math.hypot(a.x-o.x,a.y-o.y)>.17||Math.abs(a.scale-o.scale)>.1)&&(r.push(o),r.length===3))break;return r}var ye,jc,Qa,Vr,Bi=Vi(()=>{ye=(i,t,e)=>Math.max(t,Math.min(e,i));jc=(i,t)=>i.reduce((e,n,s)=>e+(n-t[s])**2,0);Qa=new Map,Vr=new Map});function Xd(i,t){let e=new bn,n=new bn;t.add(e),i.add(n);let s="",r=a=>{for(let l of[...a.children])l.geometry?.dispose(),l.material?.dispose(),a.remove(l)};function o(a={}){let l={...Ry,...a};i.background=l.backdrop==="paper"?new Yt(14604232):l.backdrop==="night"?new Yt(858922):null;let c=JSON.stringify(l)+t.geometry.uuid;if(c===s)return;s=c,r(e),r(n),t.geometry.computeBoundingBox();let h=t.geometry.boundingBox,u=h.max.y,d=h.min.y;if(l.style==="pendant"){let f=new Tn({color:13018206,metalness:.8,roughness:.26}),g=new de(new br(.13,.035,12,48),f);g.position.set(0,u+.045,.02),e.add(g);let _={cinnabar:9185309,ink:2107426,jade:5404006}[l.cord]||9185309,m=new gs([new k(-.03,u+.15,0),new k(-.48,u+.55,-.02),new k(-.48,u+.83,-.05),new k(0,u+.93,-.06),new k(.48,u+.83,-.05),new k(.48,u+.55,-.02),new k(.03,u+.15,0)]),p=new de(new Sr(m,80,.022,8,!1),new Tn({color:_,roughness:.9}));e.add(p)}else if(l.style==="stand"){let f=new de(new wi(1.35,1.48,.22,80),new Tn({color:3614236,roughness:.45}));f.position.set(0,d-.25,0),n.add(f);let g=new de(new wi(1.36,1.36,.025,80),new Tn({color:11045457,metalness:.65,roughness:.3}));g.position.set(0,d-.125,0),n.add(g);for(let _ of[-.42,.42]){let m=new de(new wi(.025,.025,.3,12),new Tn({color:11835229,metalness:.7,roughness:.3}));m.position.set(_,d-.05,0),n.add(m)}}t.userData.presentation=l}return{update:o,dispose(){r(e),r(n),t.remove(e),i.remove(n)}}}var Ry,qd=Vi(()=>{kr();Ry={style:"stone",backdrop:"ink",cord:"cinnabar"}});function Py(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ly(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Dy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jd),this.state=oe.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Uy(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case oi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=oe.DOLLY;break;case oi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}break;case oi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=oe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=oe.PAN}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Qc)}function Ny(i){switch(this.state){case oe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case oe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case oe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Fy(i){this.enabled===!1||this.enableZoom===!1||this.state!==oe.NONE||(i.preventDefault(),this.dispatchEvent(Qc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(jd))}function Oy(i){this.enabled!==!1&&this._handleKeyDown(i)}function ky(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=oe.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=oe.TOUCH_PAN;break;default:this.state=oe.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=oe.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=oe.TOUCH_DOLLY_ROTATE;break;default:this.state=oe.NONE}break;default:this.state=oe.NONE}this.state!==oe.NONE&&this.dispatchEvent(Qc)}function By(i){switch(this._trackPointer(i),this.state){case oe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case oe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case oe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case oe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=oe.NONE}}function zy(i){this.enabled!==!1&&i.preventDefault()}function Hy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yd,Qc,jd,il,$d,Iy,Ce,qe,oe,Kc,sl,Zd=Vi(()=>{kr();Yd={type:"change"},Qc={type:"start"},jd={type:"end"},il=new ds,$d=new on,Iy=Math.cos(70*Fr.DEG2RAD),Ce=new k,qe=2*Math.PI,oe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kc=1e-6,sl=class extends Rr{constructor(t,e=null){super(t,e),this.state=oe.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new an,this._lastTargetPosition=new k,this._quat=new an().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xs,this._sphericalDelta=new xs,this._scale=1,this._panOffset=new k,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new k,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ly.bind(this),this._onPointerDown=Py.bind(this),this._onPointerUp=Dy.bind(this),this._onContextMenu=zy.bind(this),this._onMouseWheel=Fy.bind(this),this._onKeyDown=Oy.bind(this),this._onTouchStart=ky.bind(this),this._onTouchMove=By.bind(this),this._onMouseDown=Uy.bind(this),this._onMouseMove=Ny.bind(this),this._interceptControlDown=Hy.bind(this),this._interceptControlUp=Vy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yd),this.update(),this.state=oe.NONE}update(t=null){let e=this.object.position;Ce.copy(e).sub(this.target),Ce.applyQuaternion(this._quat),this._spherical.setFromVector3(Ce),this.autoRotate&&this.state===oe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ce.setFromSpherical(this._spherical),Ce.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ce),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ce.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ce.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(il.origin.copy(this.object.position),il.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(il.direction))<Iy?this.object.lookAt(this.target):($d.setFromNormalAndCoplanarPoint(this.object.up,this.target),il.intersectPlane($d,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Kc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kc||this._lastTargetPosition.distanceToSquared(this.target)>Kc?(this.dispatchEvent(Yd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ce.setFromMatrixColumn(e,0),Ce.multiplyScalar(-t),this._panOffset.add(Ce)}_panUp(t,e){this.screenSpacePanning===!0?Ce.setFromMatrixColumn(e,1):(Ce.setFromMatrixColumn(e,0),Ce.crossVectors(this.object.up,Ce)),Ce.multiplyScalar(t),this._panOffset.add(Ce)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ce.copy(s).sub(this.target);let r=Ce.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new mt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});var Jd={};Sf(Jd,{createAgateScene:()=>Gy});function Gy(i,{hero:t=!1}={}){let e=new Rs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});e.setPixelRatio(Math.min(devicePixelRatio,1.7)),e.setClearColor(0,0),e.outputColorSpace=we,e.toneMapping=ca,e.toneMappingExposure=1.15,i.appendChild(e.domElement);let n=new ii,s=new Ne(35,1,.1,100);s.position.set(0,.2,7);let r=new sl(s,e.domElement);r.enableDamping=!0,r.enablePan=!1,r.minDistance=4.5,r.maxDistance=9,r.autoRotate=t&&!matchMedia("(prefers-reduced-motion: reduce)").matches,r.autoRotateSpeed=.65;let o=new ii;o.background=new Yt(7827556);let a=new de(new ni(20,20,20),new zn({color:5461834,side:Le}));o.add(a);for(let[z,X,A,I,N,$,it]of[[-4,3,2,2,5,16770749,5],[4,2,3,1,4,15331821,6],[0,5,-1,5,2,16767898,4],[0,-3,2,4,1,11957562,1]]){let st=new de(new wn(I,N),new zn({color:new Yt($).multiplyScalar(it)}));st.position.set(z,X,A),st.lookAt(0,0,0),o.add(st)}let l=new Cs(e),c=l.fromScene(o,.04);n.environment=c.texture,l.dispose(),o.traverse(z=>{z.geometry?.dispose(),z.material?.dispose()});let h=new Mr(1.42,120,90),u=h.attributes.position;for(let z=0;z<u.count;z++){let X=u.getX(z),A=u.getY(z),I=u.getZ(z),N=1+.08*Math.sin(X*2.3+A*2.6)+.035*Math.sin(A*5.3-I*3.2);u.setXYZ(z,X*N*1.12,A*N*1.02,I*N*.57)}h.computeVertexNormals();let d=new Er({color:15915712,roughness:.21,metalness:.02,clearcoat:1,clearcoatRoughness:.12,transmission:.17,thickness:1.5,ior:1.53,envMapIntensity:1.4}),f=!0;d.onBeforeCompile=z=>{f&&(z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMineral;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMineral=position;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vMineral;
 float hashN(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
 float noiseN(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hashN(i),hashN(i+vec3(1,0,0)),f.x),mix(hashN(i+vec3(0,1,0)),hashN(i+vec3(1,1,0)),f.x),f.y),mix(mix(hashN(i+vec3(0,0,1)),hashN(i+vec3(1,0,1)),f.x),mix(hashN(i+vec3(0,1,1)),hashN(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbmN(vec3 p){return .55*noiseN(p)+.27*noiseN(p*2.1)+.13*noiseN(p*4.2)+.05*noiseN(p*8.4);}
 vec3 agateColor(vec3 p){vec3 q=p*1.5;float n=fbmN(q*2.4);float r=length(vec2(q.x*.90+sin(q.y*1.4)*.35,q.y*.72))+n*.53;float bands=.5+.5*sin(r*20.+fbmN(q*5.)*3.);float broad=.5+.5*sin(r*5.1+q.z*.9);vec3 red=vec3(.39,.055,.018),amber=vec3(.80,.34,.07),cream=vec3(.95,.80,.55);vec3 c=mix(red,amber,smoothstep(.08,.78,broad));c=mix(c,cream,pow(bands,15.)*.88);c=mix(c,vec3(.97,.89,.73),smoothstep(.76,.99,broad)*.7);float grain=noiseN(q*160.);return c*(.94+.1*grain);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=agateColor(vMineral);`))},d.customProgramCacheKey=()=>f?"agate-procedural-v1":"agate-texture-v1";let g=new de(h,d);g.rotation.set(-.15,-.2,-.22),n.add(g);let _=new Ri(16771272,4.2);_.position.set(-3,4,5),n.add(_);let m=new Ri(13164752,1.8);m.position.set(4,1,2),n.add(m);let p=new Ri(16753223,2);p.position.set(1,-1,-3),n.add(p),n.add(new Cr(13812125,.5));let T=document.createElement("canvas");T.width=256,T.height=256;let x=T.getContext("2d"),y=x.createRadialGradient(128,128,0,128,128,128);y.addColorStop(0,"rgba(0,0,0,.65)"),y.addColorStop(.5,"rgba(0,0,0,.22)"),y.addColorStop(1,"transparent"),x.fillStyle=y,x.fillRect(0,0,256,256);let R=new Ei(T),C=new de(new wn(4.5,2),new zn({map:R,transparent:!0,depthWrite:!1}));C.position.set(0,-1.7,-.6),C.rotation.x=-.5,n.add(C);let D=()=>{let z=i.getBoundingClientRect();z.width<1||z.height<1||(e.setSize(z.width,z.height),s.aspect=z.width/z.height,s.updateProjectionMatrix())},F=new ResizeObserver(D);F.observe(i),D();let S=!0;e.setAnimationLoop(()=>{!S||i.offsetParent===null||(r.update(),e.render(n,s))});let M=null,L=null,V=null,q=Xd(n,g);return{renderer:e,stone:g,controls:r,resize:D,setTexture(z,{kind:X,normalCanvas:A,polish:I=.72,light:N="left",thickness:$=.24,presentation:it}={}){f=!1;let st=X+":"+$+":"+JSON.stringify(ki(X));if(X&&st!==V){let Y=ki(X),ht=new _s;Y.forEach(([U,K],dt)=>dt?ht.lineTo(U*1.4,-K*1.4):ht.moveTo(U*1.4,-K*1.4)),ht.closePath();let Mt=new xr(ht,{depth:$,bevelEnabled:!0,bevelThickness:.07,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1}),Ct=Mt.attributes.position,E=Mt.attributes.uv;for(let U=0;U<Ct.count;U++)E.setXY(U,(Ct.getX(U)/1.4+1)/2,(Ct.getY(U)/1.4+1)/2);Mt.center(),Mt.computeVertexNormals(),Mt.userData.kind=X,h.dispose(),h=Mt,g.geometry=h,g.rotation.set(-.1,-.24,X==="leaf"?-.3:0),r.autoRotate=!1,V=st}M?.dispose(),M=new Ei(z),M.colorSpace=we,M.anisotropy=e.capabilities.getMaxAnisotropy(),d.map=M,L?.dispose(),A?(L=new Ei(A),d.normalMap=L,d.normalScale.set(.65,.65)):d.normalMap=null,d.color.set(16777215),d.roughness=.7-I*.59,d.clearcoat=I,d.clearcoatRoughness=.32-I*.23,d.transmission=.04+I*.12,d.onBeforeCompile=()=>{},d.needsUpdate=!0,_.position.x=N==="right"?3:-3,m.position.x=N==="right"?-4:4,q.update(it)},setOrientation(z){r.autoRotate=!1,r.reset(),g.rotation.set(0,z==="back"?Math.PI:z==="side"?Math.PI/2:0,0),s.position.set(0,.2,7),r.update(),e.render(n,s)},capture(){return e.render(n,s),e.domElement.toDataURL("image/png")},setAuto(z){r.autoRotate=z},dispose(){S=!1,e.setAnimationLoop(null),F.disconnect(),r.dispose(),q.dispose(),h.dispose(),d.dispose(),c.dispose(),M?.dispose(),L?.dispose(),R.dispose(),C.material.dispose(),C.geometry.dispose(),e.dispose(),e.domElement.remove()}}}var Kd=Vi(()=>{qd();Bi();kr();Zd()});var Hs=[{id:"journey-city",title:"阜新市推出2026春季四大精品旅游线路",publisher:"阜新市人民政府网站 · 阜新日报 · 2026-04-22",url:"https://www.fuxin.gov.cn/content/2026/1065588.html",note:"核对玛瑙文化与文旅线路的公开背景。历史节庆安排未当作当前活动发布；本站三种行程为可编辑的研学构想，不是已确认的官方旅游产品。"},{id:"formation-museum",title:"Agate · 玛瑙的常见产状与材质",publisher:"史密森尼国家自然历史博物馆",url:"https://naturalhistory.si.edu/explore/collections/geogallery/10026005",note:"形成图解的入门依据：火山岩空隙、富硅水与玛瑙层纹。图解为概念模型，不是特定阜新原石的成因鉴定。"},{id:"formation-review",title:"Mineralogy, Geochemistry and Genesis of Agate—A Review",publisher:"Götze、Möckel、Pan · Minerals 2020, 10(11), 1037",url:"https://doi.org/10.3390/min10111037",note:"补充不同地质成因、二氧化硅结晶与自组织、结构和杂质分布对条带和颜色的影响；不把每一条带等同于一次进水。"},{id:"heritage",title:"阜新玛瑙雕 · 国家级非遗项目名录",publisher:"中国非物质文化遗产网",url:"https://www.ihchina.cn/project_details/14006/",note:"核对项目名称、2006年第一批名录身份、编号Ⅶ-30、材质与工艺特点。页面包含历史材料，人物年龄等动态信息未采用。"},{id:"town",title:"阜新市 · 玛瑙特色小镇景区",publisher:"辽宁省文化和旅游厅 · 2025-11-21",url:"https://whly.ln.gov.cn/whly/wlzt/sjly/ajjq/2025112116121250991/index.shtml",note:"核对十家子镇文旅场景与玛瑙体验、专业市场、八宝海湿地、辽代闾州塔等资源。"},{id:"rural",title:"“阜新玛瑙工匠”获评省级劳务品牌",publisher:"阜新市人力资源和社会保障局 · 2026-01-15",url:"https://rsj.fuxin.gov.cn/content/2026/1037027.html",note:"核对工匠工作室、研学体验、数字推广与农户参与产业链的应用背景。"}],bh=[{title:"玛瑙如何形成",keys:["形成","成因","怎么来","地质","富硅","空隙","结晶"],text:"以常见的火山岩空隙充填路径为例，富硅流体进入岩石空隙，二氧化硅在适宜条件下沉淀与结晶。结构、孔隙与杂质分布的差异可形成可见层纹。玛瑙也存在其他地质成因；不能把每一条纹都等同于一次进水，也没有适用于所有玛瑙的统一形成时长。",source:"formation-review"},{title:"国家级非遗身份",keys:["非遗","国家","名录","时候","哪年","2006","身份","级别"],text:"阜新玛瑙雕于2006年入选第一批国家级非物质文化遗产代表性项目名录，项目编号为Ⅶ-30，类别为传统美术。",source:"heritage"},{title:"材质与工艺特点",keys:["工艺","特点","材料","纹色","色彩","条带","绝活","流程","雕刻"],text:"玛瑙的天然色彩和条带为设计提供线索。官方项目资料介绍了选料、设计、雕琢与抛光等任务，并列举素活、掏膛、活环与透雕等技艺。具体作品的工序与方案需结合材料判断。",source:"heritage"},{title:"十家子镇文旅场景",keys:["十家子","旅游","乡土","哪里","位置","景区","湿地","闾州","市场"],text:"玛瑙特色小镇位于阜新蒙古族自治县十家子镇。省文旅厅介绍其玛瑙文化、专业市场以及八宝海湿地、辽代闾州塔等资源，可为文化与自然相连的研学构想提供场景。实际开放和接待需向当地确认。",source:"town"},{title:"乡村经营与参与",keys:["乡村","振兴","农户","收入","增收","经营","就业","研学","工作室"],text:"阜新市人社局公开材料提出串联工匠工作室、加工园区和非遗展示馆发展研学与体验，拓展数字推广渠道，并鼓励农户参与产业链。本原型据此设计文化学习、数字创作与到访意向流程，尚未验证实际增收。",source:"rural"}],Kr=[{title:"观料",subtitle:"先观察，再构思",text:"观察可见的色彩、条带与外形，寻找适合表达的视觉关系。照片能辅助观察表面信息；真实内部结构仍需要实物判断。"},{title:"构思",subtitle:"让纹色参与表达",text:"结合材料外观提出构图。在数字创作中尝试图案的尺度、位置与方向，比较不同方案与纹色的关系。"},{title:"雕琢",subtitle:"理解形与工的关系",text:"粗细雕琢与不同专项技法需要经验和工具。这里展示工艺学习的逻辑，数字预览不直接给出加工路径或安全操作指导。"},{title:"润饰",subtitle:"从形态走向完整作品",text:"抛光与配座等处理完善作品的观看与陈设效果。实际安排依作品与工坊做法而定，数字材质只用于外观体验。"}];var Qr=[{id:"welcome",name:"中国玛瑙小镇会客厅",short:"会客厅",type:"文化起点",icon:"hall",x:24,y:47,image:"hero",minutes:30,tag:"认识小镇",fact:"省文旅厅景区介绍列出了中国玛瑙小镇会客厅。",intro:"先建立对小镇的整体认识，再带着问题去看作品与手艺。",observe:"找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。",prepare:"到访前核实开放与讲解安排。",source:"town"},{id:"studio",name:"工艺观察与交流",short:"手艺现场",type:"工坊场景",icon:"craft",x:45,y:68,image:"craft",minutes:60,tag:"接待需先联系",fact:"市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。",intro:"把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。",observe:"问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？",prepare:"具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。",source:"rural"},{id:"market",name:"玛瑙专业市场",short:"逛逛市集",type:"产业观察",icon:"market",x:49,y:34,image:"hero",minutes:35,tag:"认识原料与文创",fact:"省文旅厅景区介绍提到战国红大市场等专业市场。",intro:"从原料、半成品到文创，观察一块石头如何走进日常生活。",observe:"选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。",prepare:"记录材质与工艺说明，购买与定制由你与经营者自行确认。",source:"town"},{id:"water",name:"八宝海湿地景观",short:"水岸慢行",type:"自然观察",icon:"water",x:76,y:24,image:"water",minutes:40,tag:"把脚步放慢",fact:"八宝海湿地景观见于省文旅厅的小镇介绍。",intro:"暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。",observe:"在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。",prepare:"核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。",source:"town"},{id:"pagoda",name:"辽代闾州塔",short:"寻访古迹",type:"历史线索",icon:"pagoda",x:83,y:67,image:"water",minutes:25,tag:"从石纹走向乡土",fact:"辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。",intro:"在工艺之外，为这次到访保留一段理解地方历史的时间。",observe:"观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。",prepare:"出发前核实到达方式、可参观范围及文物保护要求。",source:"town"}],Vs=[{id:"craft",title:"半日识艺",subtitle:"先知艺，再观工",description:"把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。",stops:["welcome","studio","market"],interest:"玛瑙文化与工艺观察"},{id:"slow",title:"一日慢游",subtitle:"手艺与乡土，都留一点时间",description:"将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。",stops:["welcome","studio","market","water","pagoda"],interest:"乡土文化与自然游览"},{id:"family",title:"亲子研学",subtitle:"带着问题，一起去发现",description:"以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。",stops:["welcome","water","studio"],interest:"亲子研学与纹色创作"}],to=[{label:"观纹色",title:"先问这块石，有什么。",text:"看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。",question:"这块材料最值得保留的天然纹色是什么？"},{label:"看构思",title:"让材料，参与决定造型。",text:"同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。",question:"为什么选这个方向和轮廓，而不是另一个？"},{label:"识雕琢",title:"从外轮廓，走向细部层次。",text:"关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。",question:"这件作品中，最需要经验判断的是哪一步？"},{label:"赏润饰",title:"最后一点光，也关乎表达。",text:"观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。",question:"这种表面处理，怎样让纹色更容易被看见？"}],un=[{question:"开始构思前，最值得先做什么？",answers:["观察材料已有的天然纹色","先把所有材料想成同一种颜色","完全忽略石头，照着模板取形"],correct:0,explanation:"先观料，再构思，让天然色彩与条带成为设计的一部分。",source:"heritage"},{question:"照片最适合帮助我们观察哪一项？",answers:["原料内部所有裂隙","表面可见的颜色与纹理","真实加工后的全部结果"],correct:1,explanation:"照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。",source:"heritage"},{question:"把工艺交流加入行程后，出发前还需要做什么？",answers:["直接把本地收藏当成预约凭证","默认所有工坊都随时开放","确认接待方、时间与可参观内容"],correct:2,explanation:"本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。",source:"rural"}],Gi={spring:{name:"春日寻色",icon:"芽",text:"把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。"},summer:{name:"夏日缓行",icon:"水",text:"为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。"},autumn:{name:"秋日拾光",icon:"叶",text:"从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。"},winter:{name:"冬日访艺",icon:"炉",text:"把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。"}},eo=[{id:"culture",title:"文化被看见",label:"文化理解",icon:"eye",text:"以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。",visitor:"先了解作品与材料，再决定想看什么。",organizer:"把参观前的知识准备与现场观察任务衔接起来。",maker:"让作品的构思和工艺被清楚地介绍。"},{id:"experience",title:"手艺有交流",label:"研学体验",icon:"craft",text:"把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。",visitor:"把想问的问题写进手册，提前确认接待。",organizer:"明确人数、时间、内容与组织责任，再对接工坊。",maker:"根据实际能力安排可参观、可讲解的内容。"},{id:"creation",title:"作品进日常",label:"文创连接",icon:"leaf",text:"从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。",visitor:"关注材质与工艺说明，留下自己的设计偏好。",organizer:"以学习收获组织作品讨论，避免把购物当作研学任务。",maker:"展示材料特点与制作过程，沟通定制边界。"},{id:"local",title:"乡土共参与",label:"本地协作",icon:"village",text:"工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。",visitor:"在尊重当地安排的前提下，了解更多乡土文化。",organizer:"优先核实本地接待与协作条件，逐步建立合作。",maker:"与市场、村庄及研学组织者协调实际服务。"}];var Sh={hall:"M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18",craft:"M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4",market:"M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0",water:"M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3",pagoda:"M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4",eye:"M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8",leaf:"M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5",village:"M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2"},yl=(i,t="")=>`<svg class="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Sh[i]||Sh.leaf}"/></svg>`,Ef=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Eh=i=>`./assets/journey-v2/${i}.webp`,vl=(i,t)=>{try{return JSON.parse(localStorage.getItem(i))??t}catch{return t}},ze=i=>Qr.find(t=>t.id===i),no=i=>Hs.find(t=>t.id===i),io=(i,t,e,n)=>Number.isFinite(Number(i))?Math.round(Math.min(e,Math.max(t,Number(i)))):n;function wh({toast:i,download:t}){let e=document.querySelector("#journey"),n=E=>e.querySelector(E),s=E=>[...e.querySelectorAll(E)],r="agate-journey-draft-v1",o="agate-journey-learning-v1",a=vl(r,{}),l=a&&typeof a=="object"?a:{},c=new Set,h={profile:Vs.some(E=>E.id===l.profile)?l.profile:"craft",stops:[],date:typeof l.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:"",people:io(l.people,1,30,2),season:Object.hasOwn(Gi,l.season)?l.season:["winter","spring","summer","autumn"][Math.floor((new Date().getMonth()+1)%12/3)],customized:l.customized===!0,planId:typeof l.planId=="string"?l.planId:null};if(Array.isArray(l.stops))for(let E of l.stops)E&&ze(E.id)&&!c.has(E.id)&&(c.add(E.id),h.stops.push({id:E.id,minutes:io(E.minutes,10,180,ze(E.id).minutes)}));Array.isArray(l.stops)||(h.stops=Vs[0].stops.map(E=>({id:E,minutes:ze(E).minutes})));let u=vl(o,{}),d=u&&typeof u=="object"?u:{},f={observed:d.observed===!0,quizDone:d.quizDone===!0,routePrepared:d.routePrepared===!0,question:typeof d.question=="string"?d.question.slice(0,120):"",questionSaved:d.questionSaved===!0,checks:{}};for(let E of["open","reception","content","travel"])f.checks[E]=d.checks?.[E]===!0;let g="welcome",_=0,m=0,p=Array(un.length).fill(null),T=0,x="visitor";function y(E,U){try{return localStorage.setItem(E,JSON.stringify(U)),!0}catch{return!1}}function R(){y(r,h),y(o,f)}function C(E){n("#journey-plan-status").textContent=E}let D=()=>Vs.find(E=>E.id===h.profile),F=()=>D().title+(h.customized?" · 自选调整":""),S=()=>h.stops.reduce((E,U)=>E+U.minutes,0),M=()=>[f.observed,f.quizDone,f.routePrepared&&h.stops.length>0,f.questionSaved&&f.question.trim().length>0];function L(){return`<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([E,U])=>`<path d="M${E} ${U-15}l-9 23h18Z"/><path d="M${E} ${U+8}v9"/>`).join("")}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+Qr.map(E=>`<button class="journey-map-node" data-place="${E.id}" style="--node-x:${E.x}%;--node-y:${E.y}%" aria-pressed="${E.id===g}" aria-label="探索${E.name}">${yl(E.icon)}<span>${E.short}</span><b class="journey-node-order"></b></button>`).join("")}n("#journey-map").innerHTML=L();function V(){s("[data-place]").forEach(E=>{let U=h.stops.findIndex(K=>K.id===E.dataset.place);E.classList.toggle("in-plan",U>=0),E.setAttribute("aria-pressed",String(E.dataset.place===g)),E.querySelector(".journey-node-order").textContent=U>=0?U+1:""}),n("#journey-map-route").setAttribute("d",h.stops.map((E,U)=>{let K=ze(E.id);return`${U?"L":"M"}${K.x*9},${K.y*5.5}`}).join(" "))}function q(E){let U=ze(E);if(!U)return;g=E;let K=no(U.source),dt=h.stops.some(ft=>ft.id===E);n("#journey-place-detail").innerHTML=`<div class="journey-detail-image"><img src="${Eh(U.image)}" width="600" height="337" loading="lazy" alt="AI${U.image==="craft"?"手艺":U.image==="water"?"乡野水岸":"玛瑙文旅"}情境示意，非${Ef(U.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${U.type} / ${U.tag}</p><h3>${U.name}</h3><p>${U.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${U.observe}</p></div><p class="journey-place-prepare">${U.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${dt?"disabled":""}>${dt?"已在我的行程 ✓":"加入我的行程 ＋"}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${U.fact}</p><a href="${K.url}" target="_blank" rel="noopener">${K.publisher} ↗</a></details></div>`,n("#journey-add-this").onclick=()=>A(E),V()}s("[data-place]").forEach(E=>E.onclick=()=>q(E.dataset.place));function z(){n("#journey-presets").innerHTML=Vs.map((E,U)=>`<button data-journey-preset="${E.id}" aria-pressed="${E.id===h.profile}"><span class="journey-preset-index">0${U+1}</span><span><strong>${E.title}</strong><small>${E.subtitle}</small></span><b>↗</b></button>`).join(""),s("[data-journey-preset]").forEach(E=>E.onclick=()=>{h.profile=E.dataset.journeyPreset,h.stops=D().stops.map(U=>({id:U,minutes:ze(U).minutes})),h.customized=!1,f.routePrepared=!0,X("已按这份灵感整理路线，可继续增减与调整。"),z()})}function X(E="行程草稿已更新。"){I(),q(g),st(),R(),C(E)}function A(E){!ze(E)||h.stops.some(U=>U.id===E)||(h.stops.push({id:E,minutes:ze(E).minutes}),h.customized=!0,f.routePrepared=!0,X(`已将“${ze(E).short}”加入行程。`))}function I(){n("#journey-route-title").textContent=F(),n("#journey-route-description").textContent=D().description,n("#journey-stop-total").textContent=`${h.stops.length} 站`,n("#journey-route-list").innerHTML=h.stops.length?h.stops.map((E,U)=>{let K=ze(E.id),dt=[10,20,25,30,35,40,45,60,90,120,180,E.minutes].sort((ft,lt)=>ft-lt).filter((ft,lt,Gt)=>Gt.indexOf(ft)===lt);return`<article class="journey-route-item"><span class="journey-route-number">0${U+1}</span><div class="journey-route-item-copy"><span>${K.type}</span><h4>${K.name}</h4><p>${K.observe}</p><label>现场停留 <select data-route-minutes="${K.id}" aria-label="${K.name}现场停留分钟">${dt.map(ft=>`<option value="${ft}" ${ft===E.minutes?"selected":""}>${ft} 分钟</option>`).join("")}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${K.id}" data-direction="-1" aria-label="上移${K.name}" ${U===0?"disabled":""}>↑</button><button data-route-move="${K.id}" data-direction="1" aria-label="下移${K.name}" ${U===h.stops.length-1?"disabled":""}>↓</button><button data-route-remove="${K.id}" aria-label="移除${K.name}">×</button></div></article>`}).join(""):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>',n("#journey-add-stops").innerHTML=Qr.map(E=>{let U=h.stops.some(K=>K.id===E.id);return`<button data-route-add="${E.id}" ${U?"disabled":""}>${yl(E.icon)}${E.short}<span>${U?"✓":"＋"}</span></button>`}).join(""),s("[data-route-add]").forEach(E=>E.onclick=()=>A(E.dataset.routeAdd)),s("[data-route-remove]").forEach(E=>E.onclick=()=>{h.stops=h.stops.filter(U=>U.id!==E.dataset.routeRemove),h.customized=!0,X("已移除一站，可随时重新加入。")}),s("[data-route-move]").forEach(E=>E.onclick=()=>{let U=h.stops.findIndex(dt=>dt.id===E.dataset.routeMove),K=U+Number(E.dataset.direction);K<0||K>=h.stops.length||([h.stops[U],h.stops[K]]=[h.stops[K],h.stops[U]],h.customized=!0,X("已调整路线顺序。"),n(`[data-route-move="${E.dataset.routeMove}"][data-direction="${E.dataset.direction}"]`)?.focus({preventScroll:!0}))}),s("[data-route-minutes]").forEach(E=>E.onchange=()=>{let U=h.stops.find(K=>K.id===E.dataset.routeMinutes);U&&(U.minutes=io(E.value,10,180,U.minutes)),h.customized=!0,X("已更新现场停留安排。")}),n("#journey-total-minutes").textContent=S(),n("#journey-summary-people").textContent=`${h.people} 人同行`,n("#journey-summary-date").textContent=h.date||"日期待定";for(let E of["#plan-trip","#journey-export","#journey-copy"])n(E).disabled=!h.stops.length;n("#plan-trip").innerHTML=h.planId?"更新我的行程 <span>✓</span>":"保存到我的作品 <span>＋</span>",V()}n("#journey-date").value=h.date,n("#journey-people").value=h.people,n("#journey-date").onchange=E=>{h.date=E.target.value,R(),I()},n("#journey-people").onchange=E=>{h.people=io(E.target.value,1,30,2),E.target.value=h.people,R(),I()};function N(){let E=Gi[h.season];n("#journey-season-note").innerHTML=`<span>${E.icon}</span><div><strong>${E.name}</strong><p>${E.text}</p></div>`,s("[data-journey-season]").forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.journeySeason===h.season)))}s("[data-journey-season]").forEach(E=>E.onclick=()=>{h.season=E.dataset.journeySeason,N(),R()});function $(){return["石里有境 · 十家子研学构想",F(),`日期：${h.date||"待定"} / 同行：${h.people} 人`,`现场观察安排：${S()} 分钟（不含交通、用餐与等候）`,"",...h.stops.map((E,U)=>`${U+1}. ${ze(E.id).name} · ${E.minutes} 分钟
   观察：${ze(E.id).observe}`),"",f.question.trim()?`想问工匠：${f.question.trim()}`:"",`季节灵感：${Gi[h.season].name}`,`线上准备：${M().filter(Boolean).length} / 4`,"","这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。",`小镇资料：${no("town").url}`,`工艺与研学资料：${no("rural").url}`].filter(E=>E!==null).join(`
`)}n("#plan-trip").onclick=()=>{if(!h.stops.length)return;let E=vl("agate-plans-v1",[]),U=Array.isArray(E)?E:[],K=h.planId||crypto.randomUUID(),dt=U.findIndex(lt=>lt?.id===K),ft={id:K,version:2,date:h.date||"日期待定",interest:D().interest,note:`${F()} · ${h.people}人
${h.stops.map(lt=>ze(lt.id).name).join(" → ")}
现场观察 ${S()} 分钟，不含交通与用餐。${f.question.trim()?`
想问工匠：`+f.question.trim():""}`,route:h.stops.map(lt=>({...lt,name:ze(lt.id).name})),people:h.people,season:h.season,question:f.question.trim(),updatedAt:new Date().toISOString()};if(dt>=0?U[dt]=ft:U.unshift(ft),!y("agate-plans-v1",U.slice(0,50))){i("浏览器未能保存，请先导出研学手册。");return}h.planId=K,f.routePrepared=!0,X("行程已保存，可在“我的作品”查看。"),i("已保存研学行程，尚未产生预约。")},n("#journey-copy").onclick=async()=>{let E=$();try{await navigator.clipboard.writeText(E),i("行程文字已复制。")}catch{t(new Blob([E],{type:"text/plain;charset=utf-8"}),"十家子研学行程.txt"),i("已导出行程文字。")}};function it(E){_=E;let U=to[E];n("#craft-detail").innerHTML=`<p class="eyebrow">OBSERVATION / 0${E+1}</p><h3>${U.title}</h3><p>${U.text}</p>`,n("#journey-craft-question").textContent=U.question,s("[data-journey-craft]").forEach(K=>K.setAttribute("aria-pressed",String(Number(K.dataset.journeyCraft)===E)))}n("#craft-tabs").innerHTML=to.map((E,U)=>`<button data-journey-craft="${U}" aria-pressed="${U===0}"><b>0${U+1}</b>${E.label}</button>`).join(""),s("[data-journey-craft]").forEach(E=>E.onclick=()=>it(Number(E.dataset.journeyCraft))),n("#journey-record-observation").onclick=()=>{f.observed=!f.observed,f.observed&&!f.question.trim()&&(n("#journey-question").placeholder=to[_].question),R(),st(),i(f.observed?"已把这条观察收进线上研学准备。":"已取消这项观察记录。")};function st(){let E=M(),U=E.filter(Boolean).length;n("#journey-passport-count").innerHTML=`${U}<small>/ 4</small>`,n("#journey-passport-circle").style.strokeDashoffset=String(2*Math.PI*51*(1-U/4));let K=[["观纹","记录一条手艺观察","journey-craft"],["识艺","完成一轮工艺问答","journey-passport"],["入乡","整理自己的行程","journey-plan"],["问艺","留一个想问的问题","journey-passport"]];n("#journey-passport-tasks").innerHTML=K.map(([dt,ft,lt],Gt)=>`<button data-task-target="${lt}" data-task-index="${Gt}" class="${E[Gt]?"complete":""}"><span>${dt}</span><div><strong>${ft}</strong><small>${E[Gt]?"已收进线上准备":"等你来发现"}</small></div><b>${E[Gt]?"✓":"↗"}</b></button>`).join(""),s("[data-task-target]").forEach(dt=>dt.onclick=()=>{Mt(dt.dataset.taskTarget),dt.dataset.taskIndex==="3"&&n("#journey-question").focus({preventScroll:!0})}),n("#journey-record-observation").setAttribute("aria-pressed",String(f.observed)),n("#journey-record-observation").textContent=f.observed?"这条观察已记录 ✓":"记下这条观察 ＋"}function Y(){if(n("#journey-quiz-count").textContent=m<un.length?`${m+1} / ${un.length}`:"本轮已完成",m===un.length){let dt=p.filter((ft,lt)=>ft===un[lt].correct).length;n("#journey-quiz").innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${dt} / ${un.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`,n("#journey-quiz-restart").onclick=()=>{m=0,p=Array(un.length).fill(null),Y()};return}let E=un[m],U=p[m]!==null,K=no(E.source);n("#journey-quiz").innerHTML=`<h3>${E.question}</h3><div class="journey-quiz-answers">${E.answers.map((dt,ft)=>`<button data-quiz-answer="${ft}" class="${U&&ft===E.correct?"correct":U&&ft===p[m]?"chosen":""}" ${U?"disabled":""}><span>${String.fromCharCode(65+ft)}</span>${dt}${U&&ft===E.correct?"<b>✓</b>":""}</button>`).join("")}</div>${U?`<div class="journey-quiz-feedback"><strong>${p[m]===E.correct?"你抓住了关键。":"再看一眼这个线索。"}</strong><p>${E.explanation}</p><a href="${K.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${m===un.length-1?"收进手册":"下一题"} →</button></div>`:""}`,s("[data-quiz-answer]").forEach(dt=>dt.onclick=()=>{p[m]=Number(dt.dataset.quizAnswer),Y()}),U&&(n("#journey-quiz-next").onclick=()=>{m++,m===un.length&&(f.quizDone=!0,R(),st()),Y()})}n("#journey-question").value=f.question,n("#journey-question-length").textContent=[...f.question].length,n("#journey-question").oninput=E=>{f.question=E.target.value.slice(0,120),f.questionSaved=!1,n("#journey-question-length").textContent=[...f.question].length,R(),st()},n("#journey-question-save").onclick=()=>{if(!f.question.trim()){i("先写下一个想了解的问题。"),n("#journey-question").focus();return}f.questionSaved=!0,R(),st(),i("问题已收进手册，也会随行程导出。")},s("[data-journey-check]").forEach(E=>{E.checked=f.checks[E.dataset.journeyCheck],E.onchange=()=>{f.checks[E.dataset.journeyCheck]=E.checked,R()}});function ht(){n("#journey-connections").innerHTML=eo.map((U,K)=>`<button data-connection="${K}" aria-pressed="${K===T}">${yl(U.icon)}<span><small>0${K+1} / ${U.label}</small><strong>${U.title}</strong></span><b>→</b></button>`).join(""),s("[data-connection]").forEach(U=>U.onclick=()=>{T=Number(U.dataset.connection),ht()});let E=eo[T];n("#journey-connection-label").textContent=E.label,n("#journey-connection-title").textContent=E.title,n("#journey-connection-copy").textContent=E.text,n("#journey-role-copy").textContent=E[x]}s("[data-journey-role]").forEach(E=>E.onclick=()=>{x=E.dataset.journeyRole,s("[data-journey-role]").forEach(U=>U.setAttribute("aria-pressed",String(U===E))),n("#journey-role-copy").textContent=eo[T][x]});function Mt(E){document.getElementById(E)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"})}if(s("[data-journey-scroll]").forEach(E=>E.onclick=()=>Mt(E.dataset.journeyScroll)),"IntersectionObserver"in window){let E=new IntersectionObserver(U=>{for(let K of U)K.isIntersecting&&s(".journey-subnav [data-journey-scroll]").forEach(dt=>dt.classList.toggle("active",dt.dataset.journeyScroll===K.target.id))},{rootMargin:"-70px 0px -55% 0px",threshold:0});if(s(".journey-chapter").forEach(U=>E.observe(U)),!matchMedia("(prefers-reduced-motion: reduce)").matches){e.classList.add("journey-anim-ready");let U=new IntersectionObserver(K=>{for(let dt of K)dt.isIntersecting&&(dt.target.classList.add("revealed"),U.unobserve(dt.target))},{threshold:.06});s("[data-journey-reveal]").forEach(K=>U.observe(K))}}async function Ct(){if(!h.stops.length)return;let E=n("#journey-export");E.disabled=!0;let U=E.textContent;E.textContent="正在整理手册…";try{let et=function(It,w,v,W,J,at,tt="#6c5842"){lt.font=ot(J),lt.fillStyle=tt;let Rt="",vt=v;for(let Lt of[...It])lt.measureText(Rt+Lt).width>W&&Rt?(lt.fillText(Rt,w,vt),Rt=Lt,vt+=at):Rt+=Lt;return Rt&&lt.fillText(Rt,w,vt),vt+at};f.routePrepared=!0,R(),st(),await document.fonts.ready;let K=new Image;K.src=Eh("hero");let dt=!0;try{await K.decode()}catch{dt=!1}let ft=document.createElement("canvas");ft.width=1200,ft.height=1180+h.stops.length*155+(f.question.trim()?150:0);let lt=ft.getContext("2d"),Gt=ft.width,P=ft.height,ot=(It,w=400)=>`${w} ${It}px "Microsoft YaHei","PingFang SC",sans-serif`,Q=(It,w,v,W,J="#382b21",at=400)=>{lt.fillStyle=J,lt.font=ot(W,at),lt.fillText(It,w,v)};if(lt.fillStyle="#f1e7d4",lt.fillRect(0,0,Gt,P),lt.fillStyle="#281b11",lt.fillRect(0,0,Gt,390),dt){let It=K.width,w=K.height,v=Math.max(Gt/It,390/w);lt.save(),lt.beginPath(),lt.rect(0,0,Gt,390),lt.clip(),lt.drawImage(K,(Gt-It*v)/2,(390-w*v)/2,It*v,w*v),lt.restore()}let nt=lt.createLinearGradient(0,0,Gt,0);nt.addColorStop(0,"#171009ed"),nt.addColorStop(.8,"#17100920"),lt.fillStyle=nt,lt.fillRect(0,0,Gt,390),Q("石里有境 / FIELD PASSPORT",65,79,20,"#d5b580"),Q("循艺入乡",65,160,58,"#f3e2c2"),Q("我的十家子研学手册",68,216,28,"#e0c6a0"),Q(F(),68,295,24,"#d6b078"),Q("AI 文旅情境示意",960,367,14,"#f4debb"),Q("日期  "+(h.date||"待定"),65,458,22),Q("同行  "+h.people+" 人",500,458,22),Q("线上准备  "+M().filter(Boolean).length+" / 4",835,458,22),lt.strokeStyle="#b29b762f",lt.lineWidth=2,lt.beginPath(),lt.moveTo(65,491),lt.lineTo(1135,491),lt.stroke(),Q("把好奇，串成自己的路线。",65,551,33,"#46321f"),Q("现场观察 "+S()+" 分钟 · 不含交通、用餐与等候",65,596,19,"#8a7151");let ct=667;for(let It=0;It<h.stops.length;It++){let w=h.stops[It],v=ze(w.id);lt.fillStyle="#dcc59f",lt.beginPath(),lt.arc(91,ct+8,26,0,Math.PI*2),lt.fill(),Q(String(It+1).padStart(2,"0"),73,ct+17,24,"#604321"),It<h.stops.length-1&&(lt.strokeStyle="#c7ab7e",lt.beginPath(),lt.moveTo(91,ct+41),lt.lineTo(91,ct+123),lt.stroke()),Q(v.name,145,ct+13,28,"#3b2d20"),Q(w.minutes+" 分钟",975,ct+13,21,"#90704a"),et(v.observe,145,ct+56,920,20,32),ct+=155}f.question.trim()&&(lt.fillStyle="#e5d6bb",lt.fillRect(65,ct-8,1070,142),Q("如果遇见工匠，我想问",89,ct+28,18,"#937346"),et(f.question.trim(),89,ct+68,1018,22,32,"#513c26"),ct+=175),Q(Gi[h.season].name+" · 带着颜色去发现",65,ct+35,24,"#61492e"),et(Gi[h.season].text,65,ct+78,1070,19,30),ct+=165;let pt={open:"开放与时间",reception:"人数与接待",content:"讲解与体验",travel:"费用与交通"};Q("出发前的确认清单",65,ct,23,"#60462b");let bt=65;for(let[It,w]of Object.entries(pt))Q((f.checks[It]?"☑ ":"□ ")+w,bt,ct+43,17,"#8c7456"),bt+=274;lt.strokeStyle="#b29b7650",lt.beginPath(),lt.moveTo(65,P-173),lt.lineTo(1135,P-173),lt.stroke(),et("公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。",65,P-129,1070,16,26,"#917d60"),Q("资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局",65,P-67,15,"#917d60"),Q("carpedimez.github.io/fuxin-agate-studio/#journey",65,P-34,15,"#917d60");let Xt=await new Promise(It=>ft.toBlob(It,"image/png"));if(!Xt)throw Error("export");t(Xt,"十家子研学手册.png"),f.routePrepared=!0,R(),st(),i("研学手册已导出，路线与问题都在里面。")}catch{i("暂未能生成图片，可先复制行程文字。")}finally{E.disabled=!h.stops.length,E.textContent=U}}return n("#journey-export").onclick=Ct,q(g),z(),I(),N(),it(0),Y(),st(),ht(),{exportPass:Ct,addStop:A,selectPlace:q}}var Ah=[{id:"bands",title:"层纹之间，自有山河",category:"specimen",tag:"纹理标本",file:"agate-bands",alt:"玛瑙切片的层叠条带与色彩实拍",note:"沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。",origin:"公开玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"},{id:"libation",title:"一盏温润，双耳生姿",category:"vessel",tag:"馆藏器物",file:"agate-libation-cup",alt:"清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳",note:"看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。",origin:"中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425",author:"Cleveland Museum of Art / Gary Kirchenbauer",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.clevelandart.org/art/1920.425"},{id:"moss",title:"把一片绿意，佩在身上",category:"jewelry",tag:"实物佩饰",file:"agate-moss-pendant",alt:"带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理",note:"圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。",origin:"苔藓玛瑙吊坠 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",source:"https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg"},{id:"crystal",title:"光透过石，层次便醒来",category:"specimen",tag:"纹理标本",file:"agate-crystal",alt:"透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞",note:"外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。",origin:"透光玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg"},{id:"carnelian",title:"赤色成杯，雕出一朵花",category:"vessel",tag:"馆藏器物",file:"agate-carnelian-cup",alt:"中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍",note:"花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。",origin:"中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882",author:"The Metropolitan Museum of Art",license:"CC0 1.0 / Public Domain",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.metmuseum.org/art/collection/search/44144"},{id:"nodule",title:"从一块原石，读起",category:"specimen",tag:"纹理标本",file:"agate-nodule",alt:"玛瑙结核标本的外缘与内部纹理实拍",note:"外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。",origin:"公开玛瑙结核标本 · 非阜新原料产地证明",author:"James St. John",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",source:"https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"}],Gs=document.querySelector("#agate-gallery"),Th=Gs.querySelector(".photo-grid"),Pe=document.createElement("dialog");Pe.id="photo-dialog";Pe.className="photo-dialog";Pe.setAttribute("aria-labelledby","photo-title");Pe.innerHTML='<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>';document.body.append(Pe);var Ee=i=>Pe.querySelector(i),xl="all",Wi=0,Ch=()=>Ah.filter(i=>xl==="all"||i.category===xl);function Rh(i){Pe.classList.toggle("photo-zoomed",i),Ee("#photo-zoom").setAttribute("aria-pressed",String(i)),Ee("#photo-zoom").textContent=i?"还原全貌 −":"放大细节 ＋",Ee(".photo-viewport").scrollTo(0,0)}function so(i){let t=Ch();Wi=(i+t.length)%t.length;let e=t[Wi];Rh(!1),Ee("#photo-large").src=`./assets/photos/${e.file}.webp`,Ee("#photo-large").alt=e.alt,Ee("#photo-title").textContent=e.title,Ee("#photo-tag").textContent=e.tag,Ee("#photo-note").textContent=e.note,Ee("#photo-origin").textContent=e.origin,Ee("#photo-credit").textContent=`摄影 / 图像提供：${e.author} · ${e.license}`,Ee("#photo-source").href=e.source,Ee("#photo-license").href=e.licenseUrl,Ee("#photo-counter").textContent=`${String(Wi+1).padStart(2,"0")} / ${String(t.length).padStart(2,"0")}`,Ee("#photo-prev").disabled=Ee("#photo-next").disabled=t.length<2}function Ih(){let i=Ch();Th.innerHTML=i.map((t,e)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${e}" aria-label="放大查看：${t.title}"><span class="photo-frame"><img src="./assets/photos/${t.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${t.alt}"><span class="photo-category">${t.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(Ah.indexOf(t)+1).padStart(2,"0")}</span><span><strong>${t.title}</strong><small>${t.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join(""),Gs.querySelector("#photo-result-count").textContent=`${i.length} 件实物`,Th.querySelectorAll("[data-photo-index]").forEach(t=>t.onclick=()=>{so(Number(t.dataset.photoIndex)),Pe.showModal()})}Gs.querySelectorAll("[data-photo-filter]").forEach(i=>i.onclick=()=>{xl=i.dataset.photoFilter,Gs.querySelectorAll("[data-photo-filter]").forEach(t=>t.setAttribute("aria-pressed",String(t===i))),Ih()});Ee("#photo-close").onclick=()=>Pe.close();Ee("#photo-prev").onclick=()=>so(Wi-1);Ee("#photo-next").onclick=()=>so(Wi+1);Ee("#photo-zoom").onclick=()=>Rh(!Pe.classList.contains("photo-zoomed"));Pe.addEventListener("keydown",i=>{(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),so(Wi+(i.key==="ArrowLeft"?-1:1)))});Pe.addEventListener("click",i=>{if(i.target===Pe){let t=Pe.getBoundingClientRect();(i.clientX<t.left||i.clientX>t.right||i.clientY<t.top||i.clientY>t.bottom)&&Pe.close()}});window.addEventListener("hashchange",()=>{Pe.open&&Pe.close()});document.querySelector("#gallery-jump").onclick=()=>Gs.scrollIntoView({behavior:"smooth"});Ih();kr();function Ed(i,t,{onReady:e=()=>{}}={}){let n;try{n=new Rs({antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{return null}n.setPixelRatio(Math.min(devicePixelRatio,1.65)),n.setClearColor(1183243),n.outputColorSpace=we,n.domElement.className="formation-cinema-canvas",n.domElement.setAttribute("aria-hidden","true"),i.append(n.domElement);let s=new ii,r=new Ci(-1,1,1,-1,0,1),o=new lr(new Uint8Array([19,15,12,255]),1,1);o.needsUpdate=!0;let a={u_map0:{value:o},u_map1:{value:o},u_map2:{value:o},u_map3:{value:o},u_aspects:{value:new ue(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new mt},u_light:{value:0}},l=new Qe({uniforms:a,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`}),c=new de(new wn(2,2),l);s.add(c);let h=[],u=[],d=new Set,f=!1,g=!1,_=!1,m=!1,p=!1,T=0,x=0,y=0,R=1,C=0,D=new mt,F=matchMedia("(prefers-reduced-motion: reduce)"),S=new Tr;function M(){return d.has(Math.floor(y))&&d.has(Math.ceil(y))}function L(){let N=M();N!==p&&(p=N,p&&(a.u_progress.value=y),i.classList.toggle("cinema-ready",p),p&&e())}function V(N){return u[N]||(u[N]=S.loadAsync(t[N]).then($=>{if(_){$.dispose();return}$.colorSpace=we,$.minFilter=Xe,$.magFilter=Xe,$.generateMipmaps=!1,a["u_map"+N].value=$,a.u_aspects.value.setComponent(N,$.image.width/$.image.height),h.push($),d.add(N),L()}).catch(()=>{})),u[N]}function q(){if(_)return;let{width:N,height:$}=i.getBoundingClientRect();N<2||$<2||(n.setSize(N,$,!1),a.u_view.value=N/$)}function z(N){if(T=0,!f||_)return;if(N-x<1e3/(matchMedia("(pointer:coarse)").matches?24:30)){T=requestAnimationFrame(z);return}let $=Math.min(.08,(N-x)/1e3||.033);x=N,g&&!F.matches&&(a.u_time.value+=$);let it=F.matches?1:1-Math.exp(-$*7);M()&&(a.u_progress.value+=(y-a.u_progress.value)*it),a.u_zoom.value+=(R-a.u_zoom.value)*it,a.u_light.value+=(C-a.u_light.value)*it,a.u_pointer.value.lerp(F.matches?new mt:D,it),n.render(s,r),T=requestAnimationFrame(z)}function X(N){let $=i.getBoundingClientRect();D.set((N.clientX-$.left)/$.width*2-1,1-(N.clientY-$.top)/$.height*2)}function A(){D.set(0,0)}i.addEventListener("pointermove",X),i.addEventListener("pointerleave",A);let I=new ResizeObserver(q);return I.observe(i),n.domElement.addEventListener("webglcontextlost",N=>{N.preventDefault(),m=!0,i.classList.remove("cinema-ready"),f=!1,cancelAnimationFrame(T)}),{setProgress(N,$=!1){y=Fr.clamp(N,0,3),V(Math.floor(y)),V(Math.ceil(y)),L(),$&&(a.u_progress.value=y),f&&setTimeout(()=>{!_&&f&&V(Math.min(3,Math.ceil(y)+1))},200)},setActive(N){m||(f=N,f?(q(),x=performance.now(),T||(T=requestAnimationFrame(z))):(cancelAnimationFrame(T),T=0))},setPlaying(N){g=N},setDetail(N){R=N?1.42:1},setLight(N){C=N?1:0},dispose(){_=!0,f=!1,cancelAnimationFrame(T),I.disconnect(),i.removeEventListener("pointermove",X),i.removeEventListener("pointerleave",A),h.forEach(N=>N.dispose()),o.dispose(),c.geometry.dispose(),l.dispose(),n.dispose(),n.domElement.remove()}}}var Xc=[{short:"岩石留空",title:"一块石的故事，始于一处空隙。",copy:"在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。",caption:"岩石中的空隙，为后来的矿物生长提供空间。",key:"空间"},{short:"富硅流体",title:"水，把形成玛瑙的物质带来。",copy:"含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。",caption:"富硅流体进入空隙，带来形成二氧化硅矿物的物质。",key:"物质"},{short:"结晶成纹",title:"细小的差异，长成层层纹理。",copy:"在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。",caption:"以常见同心层纹为例：结构与成分的差异，带来可见层次。",key:"纹色"},{short:"因色构形",title:"自然留下纹色，构思从你开始。",copy:"天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。",caption:"从“石如何形成”，走到“我想把它做成什么”。",key:"构思"}],wd=Xc.map((i,t)=>`./assets/formation-v2/stage-0${t+1}.webp`),vy=["沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。","沿着裂隙看：进入腔体的水，与湿润表面上的折射。","沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。","沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。"],xy=["A PLACE TO BEGIN","WATER BRINGS SILICA","LAYERS TAKE SHAPE","FROM STONE TO CREATION"],Hr=document.createElement("section");Hr.className="formation-teaser";Hr.setAttribute("aria-labelledby","formation-teaser-title");Hr.innerHTML='<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>';document.querySelector("#agate-gallery").before(Hr);var fe=document.createElement("dialog");fe.id="formation-dialog";fe.className="formation-dialog";fe.setAttribute("aria-labelledby","formation-title");fe.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${wd.map((i,t)=>`<img src="${i}" data-art-stage="${t}" loading="lazy" decoding="async" alt="" class="${t===0?"visible":""}">`).join("")}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${Xc.map((i,t)=>`<button data-formation-step="${t}" aria-pressed="${t===0}"><img src="./assets/formation-v2/stage-0${t+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${t+1}</b>${i.short}</span><i></i></button>`).join("")}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;document.body.append(fe);var Kt=i=>fe.querySelector(i),Td="agate-formation-intro-v2",ke=-1,Wn=0,zr=null,Ad=!1,yn=null,Cd=0,Rd=0,Ps=!1,Br=!1,My=matchMedia("(prefers-reduced-motion: reduce)");function cn(){clearTimeout(zr),zr=null,fe.classList.remove("formation-running"),Kt("#formation-play").setAttribute("aria-pressed","false"),Kt("#formation-play").textContent="▷ 自动演示",yn?.setPlaying(!1)}function Id(){let i=Rd+(performance.now()-Cd)/1e3;if(i>=36){Pn(3),cn();return}let t=Math.min(3,Math.floor(i/9)),e=i%9,n=Math.max(0,Math.min(1,(e-6)/3));Pn(Math.min(3,t+n*n*(3-2*n))),zr=setTimeout(Id,80)}function Pd(){cn(),Wn>=3&&Pn(0);let i=Wn%1;Rd=Math.floor(Wn)*9+(i?6+3*(.5-Math.sin(Math.asin(1-2*i)/3)):0),Cd=performance.now(),fe.classList.add("formation-running"),Kt("#formation-play").setAttribute("aria-pressed","true"),Kt("#formation-play").textContent="Ⅱ 暂停演示",yn?.setPlaying(!0),zr=setTimeout(Id,80)}function Pn(i,t=!1){Wn=Math.max(0,Math.min(3,i));let e=Math.round(Wn),n=Xc[e];yn?.setProgress(Wn,t);let s=Math.floor(Wn),r=Wn-s;fe.querySelectorAll("[data-art-stage]").forEach(o=>{let a=Number(o.dataset.artStage);o.style.opacity=a===s?String(1-r):a===s+1?String(r):"0"}),Kt("#formation-progress").value=Math.round(Wn*1e3),Kt("#formation-progress-label").value=`0${e+1} / 04`,e!==ke&&(ke=e,Kt(".formation-visual").dataset.phase=ke,Kt(".formation-cinema").style.backgroundImage=`url("./assets/formation-v2/stage-0${ke+1}-thumb.webp")`,Kt("#formation-chapter-en").textContent=`0${ke+1} / ${xy[ke]}`,Kt("#formation-stage-label").textContent=`0${ke+1} / ${n.key}`,Kt("#formation-number").textContent=`0${ke+1}`,Kt("#formation-title").textContent=n.title,Kt("#formation-copy").textContent=n.copy,Kt("#formation-caption").textContent=n.caption,Kt("#formation-observation").textContent=vy[ke],fe.querySelectorAll("[data-formation-step]").forEach(o=>o.setAttribute("aria-pressed",String(Number(o.dataset.formationStep)===ke))),Kt("#formation-previous").disabled=ke===0,Kt("#formation-next").innerHTML=ke===3?"选石创作 <span>↗</span>":"继续看 <span>→</span>")}function Ld(){Ad=!0;try{localStorage.setItem(Td,"1")}catch{}}function Dd(){Ld(),fe.close(),location.hash!=="#studio"&&(location.hash="studio")}function Ud(i){Ps=i,Kt(".formation-visual").classList.toggle("formation-detail",Ps),Kt("#formation-detail").setAttribute("aria-pressed",String(Ps)),Kt("#formation-detail").textContent=Ps?"− 还原全貌":"＋ 微距细看",yn?.setDetail(Ps)}function qc(){fe.open||(Kt(".formation-notes").open=!1,fe.classList.remove("formation-focused"),Kt("#formation-focus").setAttribute("aria-pressed","false"),Kt("#formation-focus").textContent="⤢ 大画面",Ud(!1),fe.showModal(),fe.scrollTop=0,yn||(yn=Ed(Kt(".formation-cinema"),wd)),yn?.setActive(!0),Pn(0,!0),My.matches||Pd())}function Nd(){requestAnimationFrame(()=>{let i=Ad;try{i=i||localStorage.getItem(Td)==="1"}catch{}!i&&!document.querySelector("#studio").hidden&&!document.querySelector("dialog[open]")&&qc()})}Hr.querySelector(".formation-open").onclick=qc;var Ja=document.createElement("button");Ja.className="demo-button formation-replay";Ja.textContent="玛瑙怎么形成？";Ja.onclick=qc;document.querySelector("#studio .heading-actions").prepend(Ja);fe.querySelectorAll("[data-formation-step]").forEach(i=>i.onclick=()=>{cn(),Pn(Number(i.dataset.formationStep))});Kt("#formation-progress").oninput=i=>{cn(),Pn(Number(i.target.value)/1e3,!0)};Kt("#formation-next").onclick=()=>{cn(),ke===3?Dd():Pn(ke+1)};Kt("#formation-previous").onclick=()=>{cn(),Pn(Math.max(0,ke-1))};Kt("#formation-play").onclick=()=>zr?cn():Pd();Kt("#formation-skip").onclick=Dd;Kt("#formation-close").onclick=()=>fe.close();Kt("#formation-detail").onclick=()=>Ud(!Ps);Kt("#formation-light").onclick=()=>{Br=!Br,Kt(".formation-visual").classList.toggle("formation-bright",Br),Kt("#formation-light").setAttribute("aria-pressed",String(Br)),yn?.setLight(Br)};Kt("#formation-focus").onclick=()=>{let i=fe.classList.toggle("formation-focused");Kt("#formation-focus").setAttribute("aria-pressed",String(i)),Kt("#formation-focus").textContent=i?"⤡ 返回图文":"⤢ 大画面"};fe.addEventListener("close",()=>{cn(),yn?.setActive(!1),Ld()});fe.addEventListener("cancel",cn);fe.addEventListener("keydown",i=>{i.target.type!=="range"&&(i.key==="ArrowLeft"||i.key==="ArrowRight")&&(i.preventDefault(),cn(),Pn(Math.min(3,Math.max(0,ke+(i.key==="ArrowRight"?1:-1)))))});Kt(".formation-notes").addEventListener("toggle",()=>{Kt(".formation-notes").open&&cn()});fe.querySelectorAll("[data-art-stage]").forEach(i=>i.addEventListener("error",()=>{i.hidden=!0}));document.addEventListener("visibilitychange",()=>{document.hidden?(cn(),yn?.setActive(!1)):fe.open&&yn?.setActive(!0)});window.addEventListener("hashchange",()=>{fe.open&&fe.close()});Pn(0);var Yc=[{id:"blossom",name:"五瓣花",caption:"给纹色添一朵小花"},{id:"cloud",name:"流云",caption:"把弧线连成一片云"},{id:"waves",name:"水波",caption:"三重涟漪，疏密有致"},{id:"bamboo",name:"竹影",caption:"细枝与叶，顺势而生"},{id:"stars",name:"星芒",caption:"一点星光，几何点缀"},{id:"sunrise",name:"朝阳",caption:"从山线里升起的光"},{id:"fan",name:"折扇",caption:"展开一面自己的小景"},{id:"ridge",name:"叠嶂",caption:"三道山线，留一点远意"}];function by(i){let t=[],e=s=>t.push(s),n=(s,r=48)=>Array.from({length:r+1},(o,a)=>s(a/r));if(i==="blossom"){for(let s=0;s<5;s++){let r=s*Math.PI*2/5;e(n(o=>{let a=o*Math.PI*2,l=.28+.25*Math.cos(a);return[Math.cos(r)*l-Math.sin(r)*Math.sin(a)*.17,Math.sin(r)*l+Math.cos(r)*Math.sin(a)*.17]}))}e(n(s=>[Math.cos(s*Math.PI*2)*.08,Math.sin(s*Math.PI*2)*.08]))}else if(i==="cloud")e(n(s=>{let r=s*Math.PI*2,o=.45+.08*Math.cos(r*5);return[Math.cos(r)*o*1.3,Math.sin(r)*o*.65]},96)),e(n(s=>[-.48+s*.96,.18+Math.sin(s*Math.PI*2)*.06]));else if(i==="waves")for(let s=0;s<3;s++)e(n(r=>[-.7+r*1.4,(s-1)*.23+Math.sin(r*Math.PI*3)*.09]));else if(i==="bamboo"){e([[-.07,.65],[.03,-.65]]);for(let s=0;s<3;s++){let r=-.4+s*.35;e([[-.1,r],[.1,r]]);for(let o of[-1,1])e([[0,r],[o*.48,r-.24],[o*.22,r-.04],[0,r]])}}else if(i==="stars")for(let[s,r,o]of[[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])e(Array.from({length:9},(a,l)=>{let c=l/8*Math.PI*2-Math.PI/2,h=l%2?o*.24:o;return[s+Math.cos(c)*h,r+Math.sin(c)*h]}));else if(i==="sunrise"){e(n(s=>[Math.cos(Math.PI+s*Math.PI)*.3,-.02+Math.sin(Math.PI+s*Math.PI)*.3],32)),e([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let s=0;s<7;s++){let r=Math.PI+s/6*Math.PI;e([[Math.cos(r)*.4,Math.sin(r)*.4],[Math.cos(r)*.53,Math.sin(r)*.53]])}e([[-.58,.35],[.58,.35]])}else if(i==="fan"){e(n(s=>[Math.cos(Math.PI*1.12+s*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+s*Math.PI*.76)*.88]));for(let s=0;s<=8;s++){let r=Math.PI*1.12+s/8*Math.PI*.76;e([[0,.5],[Math.cos(r)*.72,.5+Math.sin(r)*.88]])}}else if(i==="ridge")for(let s=0;s<3;s++)e([[-.7,.2+s*.18],[-.35,-.4+s*.18],[-.1,-.08+s*.18],[.28,-.5+s*.18],[.7,.2+s*.18]]);else throw Error("未知纹样");return t}function Ka(i,{x:t=0,y:e=0,scale:n=.75,angle:s=0}={},r=.018,o=.6){let a=s*Math.PI/180,l=Math.cos(a),c=Math.sin(a);return by(i).map(h=>({width:r,depth:o,points:h.map(([u,d])=>[t+(u*l-d*c)*n,e+(u*c+d*l)*n])}))}function $c(i,t){let e=[];for(let n of i){let s=[],r=()=>{s.length>1&&e.push({...n,points:s}),s=[]};for(let o of n.points)o.every(a=>Math.abs(a)<=1)&&t(...o)?s.push(o):r();r()}return e}Bi();function Ls(i,t){let e=ki(t);i.beginPath(),e.forEach(([n,s],r)=>r?i.lineTo(n,s):i.moveTo(n,s)),i.closePath()}function Ty(i,t,e,n){let s=i.angle*Math.PI/180,r=Math.cos(s),o=Math.sin(s),a=n/(2*i.scale);return[a*r/t,-a*o/t,a*o/e,a*r/e,n/2-a*(r*i.x+o*i.y),n/2-a*(-o*i.x+r*i.y)]}function Ds(i,{size:t=768,grooves:e=!0}={}){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d");return s.fillStyle="#9b6036",s.fillRect(0,0,t,t),i.image&&(s.save(),s.setTransform(...Ty(i.pose,i.image.width,i.image.height,t)),s.drawImage(i.image,0,0),s.restore()),e&&(Ay(s,i.strokes||[],t,i.polish??.7),kd(s,i.inscription,t)),n}function el(i,t,e){if(t.length){i.beginPath(),i.moveTo((t[0][0]+1)*e/2,(t[0][1]+1)*e/2),t.length===1&&i.lineTo((t[0][0]+1)*e/2+.01,(t[0][1]+1)*e/2);for(let n=1;n<t.length;n++)i.lineTo((t[n][0]+1)*e/2,(t[n][1]+1)*e/2)}}function Ay(i,t,e,n=.7){i.save(),i.lineCap="round",i.lineJoin="round";for(let s of t){let r=s.width*e/2;i.save(),i.translate(r*.2,r*.28),el(i,s.points,e),i.strokeStyle=`rgba(255,239,202,${.55+n*.25})`,i.lineWidth=r*1.55,i.stroke(),i.restore(),el(i,s.points,e),i.strokeStyle=`rgba(48,22,11,${.25+(s.depth??.6)*.7})`,i.lineWidth=r,i.stroke(),i.save(),i.translate(-r*.1,-r*.12),el(i,s.points,e),i.strokeStyle="rgba(100,53,29,.58)",i.lineWidth=r*.35,i.stroke(),i.restore()}i.restore()}function kd(i,t,e,{height:n=!1}={}){if(!t?.text)return;let s=t,r=s.size*e/2;i.save(),i.translate((s.x+1)*e/2,(s.y+1)*e/2),i.rotate(s.angle*Math.PI/180),i.font=`${r}px ${s.font==="sans"?"Microsoft YaHei,sans-serif":"SimSun,serif"}`,i.textAlign="center",i.textBaseline="middle";let o=s.vertical?Array.from(s.text):[s.text];for(let a=0;a<o.length;a++){let l=s.vertical?(a-(o.length-1)/2)*r*1.15:0;n||(i.fillStyle="rgba(255,235,195,.8)",i.fillText(o[a],1.2,l+1.5)),i.fillStyle=n?"#555":"#4a2617",i.fillText(o[a],0,l)}i.restore()}function Bd(i,t=384,e=null){let n=document.createElement("canvas");n.width=n.height=t;let s=n.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,t,t),s.lineCap="round",s.lineJoin="round";for(let c of i)el(s,c.points,t),s.strokeStyle=`rgb(${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)})`,s.lineWidth=c.width*t/2,s.stroke();kd(s,e,t,{height:!0});let r=s.getImageData(0,0,t,t).data,o=document.createElement("canvas");o.width=o.height=t;let a=o.getContext("2d"),l=a.createImageData(t,t);for(let c=0;c<t;c++)for(let h=0;h<t;h++){let u=(p,T)=>r[(ye(T,0,t-1)*t+ye(p,0,t-1))*4]/255,d=(u(h-1,c)-u(h+1,c))*1.8,f=(u(h,c-1)-u(h,c+1))*1.8,g=1,_=Math.hypot(d,f,g),m=(c*t+h)*4;l.data[m]=(d/_*.5+.5)*255,l.data[m+1]=(f/_*.5+.5)*255,l.data[m+2]=(g/_*.5+.5)*255,l.data[m+3]=255}return a.putImageData(l,0,0),o}function Wr(i,t,e){let n=ki(i),s=!1;for(let r=0,o=n.length-1;r<n.length;o=r++){let a=n[r],l=n[o];a[1]>e!=l[1]>e&&t<(l[0]-a[0])*(e-a[1])/(l[1]-a[1])+a[0]&&(s=!s)}return s}function ui(i,t,e,n,{texture:s,compare:r=100,padding:o=.18,background:a=!0,cursor:l=null}={}){if(a){i.clearRect(0,0,t,e),i.fillStyle="#111612",i.fillRect(0,0,t,e);let p=i.createRadialGradient(t*.5,e*.45,0,t*.5,e*.5,t*.55);p.addColorStop(0,"#c69a6520"),p.addColorStop(1,"#11161200"),i.fillStyle=p,i.fillRect(0,0,t,e)}s=s||Ds(n);let c=Math.min(t*(1-o*2),e*(1-o*2)),h=t/2,u=e/2+e*.02,d=c/2,f={x:h-d,y:u-d,w:c,h:c};r<100&&(i.save(),i.beginPath(),i.rect(0,0,t*(1-r/100),e),i.clip(),i.globalAlpha=.85,i.drawImage(Ds(n,{grooves:!1,size:512}),f.x,f.y,c,c),i.restore()),i.save(),i.beginPath(),i.rect(t*(1-r/100),0,t,e),i.clip(),i.save(),i.translate(h,u+9),i.scale(d,d),Ls(i,n.kind),i.shadowColor="#000b",i.shadowBlur=30/d,i.fillStyle="#0a0d09",i.fill(),i.restore(),i.save(),i.translate(h,u),i.scale(d,d),Ls(i,n.kind),i.clip(),i.drawImage(s,-1,-1,2,2);let g=n.light==="right"?1:-1,_=n.polish??.7,m=i.createLinearGradient(g<0?-1:1,-1,g<0?1:-1,1);if(m.addColorStop(0,`rgba(255,243,210,${.18+_*.13})`),m.addColorStop(.38,"rgba(255,240,204,0)"),m.addColorStop(1,"rgba(29,11,3,.34)"),i.fillStyle=m,i.fillRect(-1,-1,2,2),Ls(i,n.kind),i.lineWidth=.065,i.strokeStyle="#f3d19a77",i.stroke(),Ls(i,n.kind),i.lineWidth=.018,i.strokeStyle="#fff2cb9a",i.stroke(),_>.15){i.save(),i.rotate(-.65*g);let p=i.createLinearGradient(-.5,0,.5,0);p.addColorStop(0,"#fff0"),p.addColorStop(.45,`rgba(255,255,238,${_*.23})`),p.addColorStop(.52,`rgba(255,255,238,${_*.35})`),p.addColorStop(.64,"#fff0"),i.fillStyle=p,i.fillRect(-1.5,-1.5,3,3),i.restore()}if(i.restore(),i.restore(),r<100){let p=t*(1-r/100);i.strokeStyle="#e6c794",i.lineWidth=1,i.beginPath(),i.moveTo(p,80),i.lineTo(p,e-60),i.stroke(),i.fillStyle="#e6c794",i.beginPath(),i.arc(p,e/2,13,0,Math.PI*2),i.fill(),i.fillStyle="#152016",i.font="12px sans-serif",i.textAlign="center",i.fillText("↔",p,e/2+4),i.textAlign="left"}if(l&&n.step===2){let p=h+l.x*d,T=u+l.y*d;i.strokeStyle="#ffe0a8",i.lineWidth=1,i.beginPath(),i.arc(p,T,Math.max(5,n.toolWidth*d/2),0,Math.PI*2),i.stroke()}return f}function zd(i,t=.018){let e=[],n=s=>e.push({width:t,points:s});if(i==="leaf"){n([[-.8,0],[.82,0]]);for(let s=0;s<5;s++){let r=-.6+s*.25;n([[r,0],[r+.22,-.3*(1-Math.abs(r))-.08]]),n([[r,0],[r+.22,.28*(1-Math.abs(r))+.07]])}}else if(i==="fruit"){for(let s of[-1,1]){let r=[];for(let o=0;o<=30;o++){let a=-.58+o/30*1.22;r.push([s*(.16+.15*Math.sin(o/30*Math.PI)),a])}n(r)}n([[-.28,-.6],[0,-.7],[.28,-.6]])}else{n([[-.8,.49],[-.25,-.41],[.03,.04]]),n([[.18,.23],[.47,-.57],[.8,.49]]);for(let s=0;s<3;s++)n([[-.62,.38+s*.07],[.65,.38+s*.07]])}return e}Bi();var Zc={fruit:"秋实",leaf:"一叶",mountain:"远山",round:"团圆",drop:"凝露",heart:"心意",custom:"手绘成器"};function Hd(i){return i==="bands"?"Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":i==="nodule"?"James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":i==="custom"?"用户导入照片":"程序化教学样本"}function Vd(i){let{state:t,experience:e,$:n,$$:s,toast:r,download:o}=i,a=[["patterns","✧","纹样百宝箱","8种纹样，自由摆放"],["lettering","印","刻字落款","写下名字与心意"],["styling","◈","文创搭配","挂件、摆件与氛围"],["inspiration","卜","灵感抽签","换一种构思出发"],["comparison","▥","方案对比","把喜欢的放在一起"],["poster","▣","纪念海报","带走自己的设计"]];n(".craft-stepper").insertAdjacentHTML("afterend",`<div class="playground"><div class="playground-heading"><span>玩法百宝箱</span><small>再给作品一点自己的想法</small></div><div class="playground-grid">${a.map(([A,I,N,$])=>`<button id="open-${A}"><i>${I}</i><span>${N}<small>${$}</small></span><b>↗</b></button>`).join("")}</div></div>`);function l(A,I,N,$){let it=document.createElement("dialog");return it.id=A,it.className="play-dialog",it.innerHTML=`<div class="dialog-heading"><div><p class="eyebrow">YOUR CREATIVE PLAYGROUND</p><h2>${I}</h2></div><button class="icon-button" data-close-play aria-label="关闭">×</button></div><p class="play-dialog-intro">${N}</p>${$}`,document.body.append(it),it.querySelector("[data-close-play]").onclick=()=>it.close(),it}let c=l("pattern-dialog","让一笔纹样，成为你的点睛。","所有纹样均为本工坊原创装饰示意。选择后可在作品上拖动，满意再刻入。",`<div class="play-editor"><div><canvas id="pattern-preview" width="840" height="640" aria-label="拖动纹样调整位置"></canvas><p id="pattern-feedback" class="hint" role="status"></p></div><div class="play-editor-controls"><div id="pattern-library" class="pattern-library">${Yc.map(A=>`<button data-pattern="${A.id}" title="${A.caption}"><canvas width="100" height="74"></canvas><span>${A.name}</span></button>`).join("")}</div><label class="field-label" for="pattern-size">纹样大小 <output id="pattern-size-value">75%</output></label><input id="pattern-size" type="range" min="20" max="130" value="75"><label class="field-label" for="pattern-angle">纹样角度 <output id="pattern-angle-value">0°</output></label><input id="pattern-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="pattern-x" type="range" min="-85" max="85" value="0" aria-label="纹样水平位置"></label><label>Y <input id="pattern-y" type="range" min="-85" max="85" value="0" aria-label="纹样垂直位置"></label></div><button id="center-pattern" class="text-button">居中摆放</button><button id="apply-pattern" class="primary full">刻入这组纹样 ＋</button><p class="hint">超出作品的部分会裁去。应用后仍可用刻线撤销、重做或擦除。</p></div></div>`),h="blossom",u={x:0,y:0,scale:.75,angle:0},d;function f(){return $c(Ka(h,u,t.toolWidth,t.depth),(...A)=>Wr(t.kind,...A))}function g(){let A=n("#pattern-preview"),I=f(),N={...t,strokes:[...t.strokes,...I]};d=ui(A.getContext("2d"),A.width,A.height,N,{texture:Ds(N,{size:640}),padding:.1}),s("[data-pattern]").forEach($=>$.classList.toggle("selected",$.dataset.pattern===h)),n("#pattern-feedback").textContent=`${Yc.find($=>$.id===h).name} · ${I.length}段可见刻线 · 拖动摆放，滑杆缩放与旋转`,n("#apply-pattern").disabled=!I.length,n("#pattern-x").value=Math.round(u.x*100),n("#pattern-y").value=Math.round(u.y*100)}for(let A of s("[data-pattern]")){let I=A.querySelector("canvas").getContext("2d");I.strokeStyle="#d9bc8b",I.lineWidth=1.4;for(let N of Ka(A.dataset.pattern))I.beginPath(),N.points.forEach(([$,it],st)=>st?I.lineTo(50+$*45,37+it*36):I.moveTo(50+$*45,37+it*36)),I.stroke();A.onclick=()=>{h=A.dataset.pattern,g()}}n("#open-patterns").onclick=()=>{t.image&&(e.setStep(2),c.showModal(),g())},n("#pattern-size").oninput=A=>{u.scale=Number(A.target.value)/100,n("#pattern-size-value").value=A.target.value+"%",g()},n("#pattern-angle").oninput=A=>{u.angle=Number(A.target.value),n("#pattern-angle-value").value=A.target.value+"°",g()};for(let A of["x","y"])n("#pattern-"+A).oninput=I=>{u[A]=Number(I.target.value)/100,g()};n("#center-pattern").onclick=()=>{u.x=u.y=0,g()};function _(A,I,N){let $=!1,it=null,st=Y=>{let ht=A.getBoundingClientRect(),Mt=I();return{x:((Y.clientX-ht.left)/ht.width*A.width-Mt.x)/Mt.w*2-1,y:((Y.clientY-ht.top)/ht.height*A.height-Mt.y)/Mt.h*2-1}};A.onpointerdown=Y=>{$=!0,it=st(Y),A.setPointerCapture(Y.pointerId),N(it,!0)},A.onpointermove=Y=>{$&&N(st(Y),!1)},A.onpointerup=A.onpointercancel=()=>$=!1}_(n("#pattern-preview"),()=>d,A=>{u.x=ye(A.x,-.85,.85),u.y=ye(A.y,-.85,.85),g()}),n("#apply-pattern").onclick=()=>{let A=f();A.length&&(e.editStrokes(I=>I.push(...A)),c.close(),r("纹样已刻入作品，可以继续添加、擦除或撤销。"))};let m=l("lettering-dialog","给这件作品，留一句心意。","在预览上拖动落款，调整字形、大小和角度。确定后会进入二维作品与三维刻痕。",'<div class="play-editor"><canvas id="lettering-preview" width="840" height="640" aria-label="拖动落款调整位置"></canvas><div class="play-editor-controls"><label class="field-label" for="inscription-text">写什么？最多8字</label><input id="inscription-text" type="text" maxlength="8" placeholder="例如：阜新 · 初见"><label class="field-label" for="inscription-font">落款字形</label><select id="inscription-font"><option value="serif">宋体 · 书卷感</option><option value="sans">黑体 · 简洁</option></select><label class="check"><input id="inscription-vertical" type="checkbox">竖排落款</label><label class="field-label" for="inscription-size">字的大小</label><input id="inscription-size" type="range" min="8" max="35" value="18"><label class="field-label" for="inscription-angle">落款角度</label><input id="inscription-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="inscription-x" type="range" min="-85" max="85" value="0" aria-label="落款水平位置"></label><label>Y <input id="inscription-y" type="range" min="-85" max="85" value="32" aria-label="落款垂直位置"></label></div><button id="apply-lettering" class="primary full">把心意刻进作品 →</button><button id="remove-lettering" class="text-button">清除当前落款</button><p class="hint">落款仅保留作品轮廓内的部分。可随时重新打开修改，或关闭弹窗取消本次修改。</p></div></div>'),p,T;function x(){let A=n("#lettering-preview"),I={...t,inscription:p};T=ui(A.getContext("2d"),A.width,A.height,I,{padding:.1}),n("#inscription-x").value=Math.round(p.x*100),n("#inscription-y").value=Math.round(p.y*100)}n("#open-lettering").onclick=()=>{if(t.image){e.setStep(2),p=structuredClone(t.inscription||{text:"阜新",x:0,y:.32,size:.18,angle:0,font:"serif",vertical:!1});for(let A of["text","font","size","angle","vertical"]){let I=n("#inscription-"+A);A==="vertical"?I.checked=p[A]:I.value=A==="size"?Math.round(p.size*100):p[A]}m.showModal(),x()}};for(let A of["text","font","size","angle","vertical","x","y"])n("#inscription-"+A).oninput=I=>{p[A]=A==="vertical"?I.target.checked:A==="text"?Array.from(I.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,8).join(""):A==="font"?I.target.value:Number(I.target.value)/(A==="size"||A==="x"||A==="y"?100:1),x()};_(n("#lettering-preview"),()=>T,A=>{p.x=ye(A.x,-.85,.85),p.y=ye(A.y,-.85,.85),x()}),n("#apply-lettering").onclick=()=>{t.inscription=p.text.trim()?structuredClone(p):null,e.refresh(),m.close(),r("落款已留在作品上，三维刻痕也会同步更新。")},n("#remove-lettering").onclick=()=>{t.inscription=null,e.refresh(),m.close(),r("已清除落款。")},n(".finish-controls").insertAdjacentHTML("afterbegin",'<details id="styling-panel" class="styling-panel"><summary>◈ 文创搭配 · 换个方式欣赏</summary><label class="field-label" for="display-style">成品搭配</label><select id="display-style"><option value="stone">素石 · 只看作品</option><option value="pendant">绳系挂件</option><option value="stand">展台摆件</option></select><label class="field-label" for="cord-color">挂绳颜色</label><select id="cord-color"><option value="cinnabar">朱砂红</option><option value="ink">松烟黑</option><option value="jade">竹青绿</option></select><label class="field-label" for="display-backdrop">展示氛围</label><select id="display-backdrop"><option value="ink">墨色工坊</option><option value="paper">暖纸展厅</option><option value="night">夜色藏蓝</option></select><p class="hint">搭配为文创外观示意，可随3D截图保存。</p></details>');function y(){let A=t.presentation;n("#studio").dataset.backdrop=A.backdrop,n("#display-style").value=A.style,n("#display-backdrop").value=A.backdrop,n("#cord-color").value=A.cord,n("#cord-color").disabled=A.style!=="pendant",n("#work-title").value=t.workTitle||""}n("#open-styling").onclick=()=>{e.setStep(3),n("#styling-panel").open=!0,y(),n("#styling-panel").scrollIntoView({behavior:"smooth",block:"center"})};for(let[A,I]of[["display-style","style"],["cord-color","cord"],["display-backdrop","backdrop"]])n("#"+A).onchange=N=>{t.presentation={...t.presentation,[I]:N.target.value},y(),e.refresh()};n(".heading-actions").insertAdjacentHTML("beforebegin",'<div class="work-title"><label for="work-title">为作品起名</label><input id="work-title" maxlength="24" placeholder="例如：一叶知秋" aria-label="作品名称，最多24字"></div>'),n("#work-title").oninput=A=>t.workTitle=Array.from(A.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,24).join("");let R=[{id:"moon",title:"月下团圆",desc:"圆牌 · 水波 · 夜色挂件",kind:"round",pattern:"waves",text:"团圆",style:"pendant",backdrop:"night"},{id:"mountain",title:"山海有约",desc:"山形 · 朝阳 · 暖纸展台",kind:"mountain",pattern:"sunrise",text:"山海",style:"stand",backdrop:"paper"},{id:"leaf",title:"竹影清风",desc:"叶形 · 竹影 · 竹青挂绳",kind:"leaf",pattern:"bamboo",text:"清风",style:"pendant",backdrop:"ink"},{id:"heart",title:"心上繁花",desc:"心形 · 五瓣花 · 温柔落款",kind:"heart",pattern:"blossom",text:"如愿",style:"stone",backdrop:"paper"}],C=l("inspiration-dialog","借一份灵感，再改成自己的。","选择一份配方，会替换当前外形、刻线与落款；原料保持不变，可用下方按钮撤回。",`<div class="recipe-grid">${R.map((A,I)=>`<button data-recipe="${A.id}"><span>0${I+1}</span><strong>${A.title}</strong><small>${A.desc}</small><b>试试这个 ↗</b></button>`).join("")}</div><button id="random-recipe" class="primary compact">帮我抽一份 ✧</button><button id="undo-inspiration" class="text-button" disabled>撤回上次灵感</button><p class="hint">基于原创设计配方组合，不冒充传统纹样或生成式AI结果。</p>`),D=null,F=!1;n("#open-inspiration").onclick=()=>C.showModal();async function S(A){if(!(!t.image||F)){F=!0;try{D=i.projectData(),n("#undo-inspiration").disabled=!1,t.kind=A.kind,n("#motif").value=A.kind,t.pose.scale=.3,t.strokes=$c(Ka(A.pattern,{scale:.68,y:-.05},.016,.65),(...I)=>Wr(t.kind,...I)),t.inscription={text:A.text,x:0,y:.3,size:.14,angle:0,font:"serif",vertical:!1},t.workTitle=A.title,t.presentation={style:A.style,backdrop:A.backdrop,cord:A.id==="leaf"?"jade":"cinnabar"},t.polish=.86,await i.optimize(),e.clearHistory(),y(),e.setStep(3),C.close(),r("灵感已展开，可以回到刻线继续修改；重新打开灵感抽签可撤回。")}finally{F=!1}}}s("[data-recipe]").forEach(A=>A.onclick=()=>S(R.find(I=>I.id===A.dataset.recipe))),n("#random-recipe").onclick=()=>S(R[Math.floor(Math.random()*R.length)]),n("#undo-inspiration").onclick=async()=>{if(!D)return;let A=D;D=null,await i.restoreProject(A),n("#undo-inspiration").disabled=!0,C.close()};let M=l("comparison-dialog","把不同的构思，放在一起看。","最多暂存三份当前设计。可以继续修改后再加入，点击任意方案回到创作。关闭弹窗不会清空；刷新页面后会清空。",'<div class="comparison-actions"><button id="add-comparison" class="primary compact">加入当前方案 ＋</button><button id="export-comparison" class="text-button" disabled>导出对比图 ↗</button></div><div id="comparison-cards" class="comparison-cards"></div>'),L=[];function V(){let A=n("#comparison-cards");if(A.replaceChildren(),n("#export-comparison").disabled=!L.length,!L.length){let I=document.createElement("p");I.className="comparison-empty",I.textContent="先加入当前方案，再试一套纹样或灵感配方，回来比较。",A.append(I);return}L.forEach((I,N)=>{let $=document.createElement("article"),it=document.createElement("img"),st=document.createElement("h3"),Y=document.createElement("p"),ht=document.createElement("button"),Mt=document.createElement("button");it.src=I.image,it.alt=I.title,st.textContent=I.title,Y.textContent=`色区匹配 ${(I.metrics.fit*100).toFixed(1)}% · ${I.project.strokes.length}段刻线`,ht.textContent="从这份继续编辑 ↗",ht.className="feature-button",ht.onclick=async()=>{await i.restoreProject(I.project),M.close()},Mt.textContent="移出对比",Mt.className="text-button small",Mt.onclick=()=>{L.splice(N,1),V()},$.append(it,st,Y,ht,Mt),A.append($)})}n("#open-comparison").onclick=()=>{M.showModal(),V()},n("#add-comparison").onclick=()=>{if(!t.image)return;let A=document.createElement("canvas");if(A.width=640,A.height=480,e.renderArt(A.getContext("2d"),640,480),L.length===3){r("已有三份方案，请先移出一份，再加入新设计。");return}L.push({project:i.projectData(),metrics:{...t.layout},image:A.toDataURL("image/jpeg",.88),title:t.workTitle||Zc[t.kind]+" · 方案 "+(L.length+1)}),V()},n("#export-comparison").onclick=async()=>{let A=document.createElement("canvas");A.width=1500,A.height=1e3;let I=A.getContext("2d");I.fillStyle="#151917",I.fillRect(0,0,1500,1e3),I.fillStyle="#d9bc8b",I.font="40px SimSun,serif",I.fillText("石里有境 · 我的构思对照",70,90),I.font="18px sans-serif",I.fillStyle="#a2a69b",I.fillText("同一段创作，不同的可能。",70,130);let N=1360/L.length;for(let $=0;$<L.length;$++){let it=L[$],st=new Image;st.src=it.image,await st.decode();let Y=70+$*N,ht=N-20,Mt=Math.min(ht,560);I.drawImage(st,Y+(ht-Mt)/2,220,Mt,Mt*.75),I.fillStyle="#e9e5d9",I.font="26px SimSun,serif",I.fillText(it.title,Y,710,ht),I.fillStyle="#a2a69b",I.font="16px sans-serif",I.fillText(`匹配 ${(it.metrics.fit*100).toFixed(1)}% · ${it.project.strokes.length}段刻线`,Y,755,ht),I.font="12px sans-serif",I.fillText(Hd(it.project.sample),Y,800,ht)}I.font="15px sans-serif",I.fillStyle="#a2a69b",I.fillText("数字创意示意 · 来源与许可见 commons.wikimedia.org · Hannes Grobe样本衍生图适用CC BY-SA 2.5",70,950),A.toBlob($=>{$&&o($,"石里有境-方案对比.png")})};let q=l("poster-dialog","把这一次相遇，做成纪念。","用你的当前作品制作纪念海报，名称可在创作页修改。海报保留素材来源与数字设计说明。",'<div class="poster-layout"><canvas id="poster-preview" width="1000" height="1400" aria-label="纪念海报预览"></canvas><div><div class="poster-themes"><button data-poster-theme="paper">留白手札<small>暖纸 · 朱印 · 留白</small></button><button data-poster-theme="night">星夜藏石<small>藏蓝 · 星光 · 金线</small></button><button data-poster-theme="earth">山野雅集<small>墨绿 · 山线 · 手作</small></button></div><button id="download-poster" class="primary full">下载纪念海报 ↗</button><p class="hint">1000 × 1400 PNG，可保存、打印或用于比赛过程展示。作品图采用正面成器效果；文创搭配请用3D截图保存。</p></div></div>'),z="paper";function X(){let A=n("#poster-preview"),I=A.getContext("2d"),N={paper:["#e9dfca","#24352d","#a33e2f"],night:["#101e31","#e9d7ac","#9b804c"],earth:["#20342a","#e7dbc3","#c89567"]}[z];I.fillStyle=N[0],I.fillRect(0,0,1e3,1400),I.strokeStyle=N[2],I.lineWidth=1,I.strokeRect(42,42,916,1316),I.fillStyle=N[2],I.font="18px sans-serif",I.fillText("石里有境 / FUXIN AGATE ATELIER",84,110),I.fillStyle=N[1],I.font="64px SimSun,serif";let $=t.workTitle||Zc[t.kind]+" · 石中有境",it=Array.from($);if(I.fillText(it.slice(0,12).join(""),80,220,840),it.length>12&&(I.font="40px SimSun,serif",I.fillText(it.slice(12).join(""),84,280,840)),I.font="20px sans-serif",I.fillText("观天然纹色，留一份自己的构思。",84,330),I.save(),I.translate(70,380),ui(I,860,760,t,{background:!1,padding:.12}),I.restore(),z==="night"){I.fillStyle="#d9bc8b66";for(let st=0;st<36;st++){let Y=80+st*163%840,ht=380+st*251%700;I.beginPath(),I.arc(Y,ht,st%3===0?2:1,0,Math.PI*2),I.fill()}}else if(z==="earth"){I.strokeStyle="#bda67c55";for(let st=0;st<3;st++)I.beginPath(),I.moveTo(70,1110+st*12),I.lineTo(290,1030+st*12),I.lineTo(480,1085+st*12),I.lineTo(740,1010+st*12),I.lineTo(930,1100+st*12),I.stroke()}I.fillStyle=N[2],I.fillRect(82,1160,54,54),I.fillStyle=N[0],I.font="26px SimSun,serif",I.fillText("境",96,1197),I.fillStyle=N[1],I.font="20px sans-serif",I.fillText("辽宁 · 阜新 / 玛瑙文化数字创作纪念",160,1180),I.font="16px sans-serif",I.fillText(new Date().toLocaleDateString("zh-CN")+" · 纹样、落款与外形来自本次设计",160,1210),I.font="13px sans-serif",I.fillText("原料："+Hd(t.sample),84,1272,830),I.fillText(t.sample==="bands"?"commons.wikimedia.org · 衍生图片适用 CC BY-SA 2.5":t.sample==="nodule"?"commons.wikimedia.org · 原图许可 CC BY 2.0":"原料为程序化教学样本或用户自有图片",84,1300,830),I.fillText("数字创意示意，非真实加工结果。",84,1328),s("[data-poster-theme]").forEach(st=>st.classList.toggle("selected",st.dataset.posterTheme===z))}return n("#open-poster").onclick=()=>{t.image&&(q.showModal(),X())},s("[data-poster-theme]").forEach(A=>A.onclick=()=>{z=A.dataset.posterTheme,X()}),n("#download-poster").onclick=()=>n("#poster-preview").toBlob(A=>{A&&o(A,"石里有境-"+(t.workTitle||Zc[t.kind])+"-纪念海报.png")}),document.addEventListener("agate-craft-reset",y),{sync:y,closeDialogs(){for(let A of[c,m,C,M,q])A.close()},get comparisons(){return L}}}Bi();function nl(i){if(!Array.isArray(i)||i.length<5||i.length>2e3)throw Error("请画出至少五个点的完整外形。");let t=[];for(let f of i){if(!Array.isArray(f)||f.length!==2||!f.every(g=>Number.isFinite(g)&&Math.abs(g)<100))throw Error("轮廓坐标无效。");(!t.length||Math.hypot(f[0]-t.at(-1)[0],f[1]-t.at(-1)[1])>.015)&&t.push([...f])}t.length>5&&Math.hypot(t[0][0]-t.at(-1)[0],t[0][1]-t.at(-1)[1])<.06&&t.pop();let e=t.filter((f,g)=>g%Math.max(1,Math.ceil(t.length/160))===0);if(e.length<5)throw Error("轮廓太小，请画大一些。");let n=(f,g,_)=>(g[0]-f[0])*(_[1]-f[1])-(g[1]-f[1])*(_[0]-f[0]),s=(f,g,_)=>Math.abs(n(f,g,_))<1e-8&&_[0]>=Math.min(f[0],g[0])-1e-8&&_[0]<=Math.max(f[0],g[0])+1e-8&&_[1]>=Math.min(f[1],g[1])-1e-8&&_[1]<=Math.max(f[1],g[1])+1e-8;for(let f=0;f<e.length;f++)for(let g=f+2;g<e.length;g++){if(f===0&&g===e.length-1)continue;let _=e[f],m=e[(f+1)%e.length],p=e[g],T=e[(g+1)%e.length];if(n(_,m,p)*n(_,m,T)<0&&n(p,T,_)*n(p,T,m)<0||s(_,m,p)||s(_,m,T)||s(p,T,_)||s(p,T,m))throw Error("线条有交叉或重叠，请画一个不交叉的闭合外形。")}let r=e.map(f=>f[0]),o=e.map(f=>f[1]),a=Math.min(...r),l=Math.max(...r),c=Math.min(...o),h=Math.max(...o),u=Math.max(l-a,h-c),d=0;if(e.forEach((f,g)=>{let _=e[(g+1)%e.length];d+=f[0]*_[1]-_[0]*f[1]}),u<.15||Math.abs(d)<u*u*.08)throw Error("轮廓面积太小，请画一个有宽度的外形。");return e.map(([f,g])=>[(f-(a+l)/2)/u*1.8,(g-(c+h)/2)/u*1.8])}function Gd({state:i,experience:t,$:e,$$:n,toast:s,getDrawRect:r,download:o}){e("#motif").insertAdjacentHTML("beforeend",'<option value="drop">凝露 · 水滴</option><option value="round">团圆 · 圆牌</option><option value="heart">心意 · 心形</option><option value="custom" disabled>我的手绘外形</option>'),e("#motif").insertAdjacentHTML("afterend",'<button id="draw-outline" class="feature-button">✎ 自己画一个外形</button>'),e("#palette").insertAdjacentHTML("afterend",'<button id="pick-color" class="feature-button" aria-pressed="false">⌕ 放大镜选色</button><p class="hint">开启后，移动到原料上放大纹理，点击选中对应色区。</p>'),e("#tool-width").insertAdjacentHTML("afterend",'<div class="feature-group"><label class="field-label" for="line-mode">用什么笔触？</label><select id="line-mode"><option value="free">自由刻线</option><option value="straight">直线刻刀</option></select><label class="check"><input id="symmetric-lines" type="checkbox">左右对称刻线</label><label class="field-label" for="cut-depth">刻痕深浅 <output id="cut-depth-value">60%</output></label><input id="cut-depth" type="range" min="10" max="100" value="60"><p class="hint">粗细、深浅与对称作用于接下来画的笔触。</p><button id="stamp-flower" class="feature-button">✧ 刻一朵小花</button><p class="hint">小花位于中央，可撤销或擦除。图案为原创装饰示意。</p></div>'),e("#polish").previousElementSibling.insertAdjacentHTML("beforebegin",'<label class="field-label" for="piece-thickness">作品厚度 <output id="thickness-value">24</output></label><input id="piece-thickness" type="range" min="8" max="65" value="24"><p class="hint">数字造型比例；切换侧面可观察厚度。</p><div class="view-actions"><button data-orientation="front">正面</button><button data-orientation="side">侧面</button><button data-orientation="back">背面</button></div><button id="spin-piece" class="feature-button" aria-pressed="false">▷ 自动环绕欣赏</button>'),e("#export-finished").insertAdjacentHTML("afterend",'<button id="capture-3d" class="feature-button">▣ 保存当前3D视角</button>');let a=document.createElement("div");a.id="color-loupe",a.hidden=!0,a.innerHTML='<canvas width="140" height="100"></canvas><span></span>',e("#canvas-stage").append(a);let l=!1;function c(x){l=x,e("#pick-color").setAttribute("aria-pressed",String(x)),e("#pick-color").textContent=x?"× 结束选色":"⌕ 放大镜选色",a.hidden=!x,e("#design-canvas").style.cursor=x?"crosshair":"grab"}e("#pick-color").onclick=()=>{t.setView("color"),c(!l)};let h=e("#design-canvas");function u(x,y=!1){if(!l||i.step!==1||i.view!=="color"){a.hidden=!0;return}let R=h.getBoundingClientRect(),C=r(),D=x.clientX-R.left,F=x.clientY-R.top,S=(D-C.x)/C.w,M=(F-C.y)/C.h;if(S<0||S>=1||M<0||M>=1){a.hidden=!0;return}x.stopImmediatePropagation(),y&&x.preventDefault();let L=i.analysis,V=Math.floor(M*L.height)*L.width+Math.floor(S*L.width),q=L.labels[V];a.hidden=!1,a.style.left=ye(D+22,8,R.width-156)+"px",a.style.top=ye(F-130,75,R.height-150)+"px";let z=a.querySelector("canvas").getContext("2d");z.imageSmoothingEnabled=!1,z.fillStyle="#121812",z.fillRect(0,0,140,100);let X=i.image.width*.12;if(z.drawImage(i.image,S*i.image.width-X*.7,M*i.image.height-X*.5,X*1.4,X,0,0,140,100),z.strokeStyle="#fff1c4",z.beginPath(),z.moveTo(60,50),z.lineTo(80,50),z.moveTo(70,40),z.lineTo(70,60),z.stroke(),a.querySelector("span").textContent=q>=0?`色区 ${q+1} · ${L.colors[q].hex}`:"背景区域",y){if(q<0){s("这里是背景，请在原料内部选色。");return}document.querySelector(`[data-color="${q}"]`)?.click(),c(!1),s("已选中这个位置的纹色，可继续借色构形。")}}h.addEventListener("pointermove",x=>u(x),!0),h.addEventListener("pointerdown",x=>u(x,!0),!0),h.addEventListener("pointerleave",()=>a.hidden=!0),document.addEventListener("keydown",x=>{x.key==="Escape"&&c(!1)}),new MutationObserver(()=>{(i.step!==1||i.view!=="color")&&c(!1)}).observe(e("#studio"),{attributes:!0,attributeFilter:["data-craft-step","data-view"]}),e("#line-mode").onchange=x=>{i.lineMode=x.target.value,e("#engrave-pen").click()},e("#symmetric-lines").onchange=x=>i.symmetry=x.target.checked,e("#cut-depth").oninput=x=>{i.depth=Number(x.target.value)/100,e("#cut-depth-value").value=x.target.value+"%"},e("#stamp-flower").onclick=()=>t.editStrokes(x=>{for(let y=0;y<5;y++){let R=[],C=y*Math.PI*2/5;for(let D=0;D<=32;D++){let F=D/32*Math.PI*2,S=.13+.12*Math.cos(F);R.push([Math.cos(C)*S-Math.sin(C)*Math.sin(F)*.07,Math.sin(C)*S+Math.cos(C)*Math.sin(F)*.07])}x.push({width:i.toolWidth,depth:i.depth,points:R})}}),e("#piece-thickness").oninput=x=>{i.thickness=Number(x.target.value)/100,e("#thickness-value").value=x.target.value,t.refresh()},n("[data-orientation]").forEach(x=>x.onclick=()=>{t.getScene()?.setOrientation(x.dataset.orientation),e("#spin-piece").setAttribute("aria-pressed","false"),e("#spin-piece").textContent="▷ 自动环绕欣赏"}),e("#spin-piece").onclick=()=>{let x=t.getScene();if(!x)return;let y=!x.controls.autoRotate;x.setAuto(y),e("#spin-piece").setAttribute("aria-pressed",String(y)),e("#spin-piece").textContent=y?"Ⅱ 暂停环绕欣赏":"▷ 自动环绕欣赏"},e("#capture-3d").onclick=async()=>{t.setView("preview"),await t.updatePreview();let x=t.getScene();if(!x)return;let y=new Image;y.src=x.capture(),await y.decode();let R=document.createElement("canvas");R.width=y.width,R.height=y.height+88;let C=R.getContext("2d");C.fillStyle="#151917",C.fillRect(0,0,R.width,R.height),C.drawImage(y,0,0),C.fillStyle="#d9bc8b",C.font="14px sans-serif",C.fillText("石里有境 · 数字造型与刻线示意",18,y.height+28),C.fillStyle="#a2a69b",C.font="11px sans-serif";let D=i.sample==="bands"?"Photo: Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":i.sample==="nodule"?"Photo: James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":i.sample==="custom"?"原料：用户导入照片":"原料：程序化教学样本";C.fillText(D,18,y.height+52),C.fillText(i.sample==="bands"?"commons.wikimedia.org · 衍生图片 CC BY-SA 2.5":i.sample==="nodule"?"commons.wikimedia.org · 署名许可 CC BY 2.0":"数字创作示意 · 真实工艺需工匠核验",18,y.height+72),R.toBlob(F=>{F&&o(F,"石里有境-三维视角.png")})};let d=document.createElement("dialog");d.id="outline-dialog",d.innerHTML='<div class="dialog-heading"><div><p class="eyebrow">DRAW YOUR SHAPE</p><h2>把心里的形，画出来。</h2></div><button id="close-outline" class="icon-button" aria-label="关闭">×</button></div><p class="hint">在下方一笔画出外形，松手会自动连接起点。请避免线条交叉。</p><canvas id="outline-canvas" width="600" height="400" aria-label="用鼠标或触摸一笔画出闭合外形"></canvas><p id="outline-feedback" role="status">例如：一片不规则叶子、一枚鹅卵石、一朵云。</p><div class="outline-actions"><button id="clear-outline" class="text-button">重新画</button><button id="apply-outline" class="primary compact">用这个外形 →</button></div>',document.body.append(d);let f=e("#outline-canvas"),g=f.getContext("2d"),_=[],m=!1;function p(){g.fillStyle="#101611",g.fillRect(0,0,600,400),g.strokeStyle="#ffffff0c",g.lineWidth=1;for(let x=0;x<600;x+=40)g.beginPath(),g.moveTo(x,0),g.lineTo(x,400),g.stroke();for(let x=0;x<400;x+=40)g.beginPath(),g.moveTo(0,x),g.lineTo(600,x),g.stroke();_.length&&(g.beginPath(),_.forEach(([x,y],R)=>R?g.lineTo(x*200+300,(y+1)*200):g.moveTo(x*200+300,(y+1)*200)),m||g.closePath(),g.fillStyle="#d9bc8b1a",g.fill(),g.strokeStyle="#e5c58e",g.lineWidth=2,g.stroke(),g.fillStyle="#e5c58e",g.beginPath(),g.arc(_[0][0]*200+300,(_[0][1]+1)*200,5,0,Math.PI*2),g.fill())}function T(x){let y=f.getBoundingClientRect(),R=[ye(((x.clientX-y.left)/y.width*600-300)/200,-1.49,1.49),ye((x.clientY-y.top)/y.height*2-1,-.99,.99)];_.length<2e3&&(!_.length||Math.hypot(R[0]-_.at(-1)[0],R[1]-_.at(-1)[1])>.012)&&_.push(R),p()}return f.onpointerdown=x=>{_=[],m=!0,f.setPointerCapture(x.pointerId),T(x)},f.onpointermove=x=>{m&&T(x)},f.onpointerup=()=>{m=!1,p(),e("#outline-feedback").textContent="外形已闭合。满意就应用，也可以重新画。"},f.onpointercancel=()=>{m=!1,p()},e("#draw-outline").onclick=()=>{d.showModal(),p()},e("#close-outline").onclick=()=>d.close(),e("#clear-outline").onclick=()=>{_=[],p(),e("#outline-feedback").textContent="画一个新的外形，松手自动闭合。"},e("#apply-outline").onclick=()=>{try{let x=nl(_);tl(x),i.customOutline=x,e('#motif option[value="custom"]').disabled=!1,e("#motif").value="custom",e("#motif").dispatchEvent(new Event("change")),d.close(),s("手绘外形已成为作品轮廓，成器与3D会同步更新。")}catch(x){e("#outline-feedback").textContent=x.message}},{sync(){c(!1),e("#piece-thickness").value=Math.round(i.thickness*100),e("#thickness-value").value=Math.round(i.thickness*100),n("[data-light]").forEach(x=>x.classList.toggle("selected",x.dataset.light===i.light))}}}var Cy=["fruit","leaf","mountain","drop","round","heart","custom"];function Jc(i){let t=structuredClone(i),e=()=>{throw Error("方案文件不完整或参数超出范围，请使用本工坊导出的方案。")};(!t||t.format!=="agate-project"||![3,4].includes(t.version)||!Cy.includes(t.kind)||!["procedural","bands","nodule","custom"].includes(t.sample))&&e();for(let[s,r,o]of[["x",.03,.97],["y",.03,.97],["scale",.08,.42],["angle",-180,180]])(!Number.isFinite(t.pose?.[s])||t.pose[s]<r||t.pose[s]>o)&&e();t.kind==="custom"&&(t.outline=nl(t.outline)),(!Number.isInteger(t.color)||t.color<0||t.color>4||!Number.isFinite(t.polish)||t.polish<0||t.polish>1||!["left","right"].includes(t.light)||!Number.isFinite(t.thickness)||t.thickness<.08||t.thickness>.65)&&e(),(typeof t.removeBackground!="boolean"||!Array.isArray(t.target)||t.target.length>4e4||t.target.length<100||!Number.isInteger(t.targetWidth)||!Number.isInteger(t.targetHeight)||t.targetWidth<1||t.targetHeight<1||t.targetWidth>200||t.targetHeight>200||t.targetWidth*t.targetHeight!==t.target.length||t.target.some(s=>s!==0&&s!==1))&&e(),(!Array.isArray(t.strokes)||t.strokes.length>1e3)&&e();let n=0;for(let s of t.strokes){(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>1e4)&&e(),n+=s.points.length;for(let r of s.points)(!Array.isArray(r)||r.length!==2||r.some(o=>!Number.isFinite(o)||Math.abs(o)>1.1))&&e()}if(n>1e5&&e(),t.sample==="custom"&&(typeof t.sourceImage!="string"||t.sourceImage.length>25e5||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(t.sourceImage))&&e(),t.inscription!=null){let s=t.inscription;(typeof s.text!="string"||Array.from(s.text).length>8||/[\u0000-\u001f]/.test(s.text)||!["serif","sans"].includes(s.font)||typeof s.vertical!="boolean")&&e();for(let[r,o,a]of[["x",-.85,.85],["y",-.85,.85],["size",.08,.35],["angle",-180,180]])(!Number.isFinite(s[r])||s[r]<o||s[r]>a)&&e()}else t.inscription=null;return t.presentation!=null?(!["stone","pendant","stand"].includes(t.presentation.style)||!["ink","paper","night"].includes(t.presentation.backdrop)||!["cinnabar","ink","jade"].includes(t.presentation.cord))&&e():t.presentation={style:"stone",backdrop:"ink",cord:"cinnabar"},t.workTitle!=null&&(typeof t.workTitle!="string"||Array.from(t.workTitle).length>24||/[\u0000-\u001f]/.test(t.workTitle))&&e(),t.workTitle=t.workTitle||"",t}Bi();function Wd(i){let{$:t,$$:e,state:n}=i;Object.assign(n,{step:0,strokes:[],redoStrokes:[],polish:.72,light:"left",tool:"pen",toolWidth:.018,comparison:100,symmetry:!1,lineMode:"free",depth:.6,thickness:.24,inscription:null,workTitle:"",presentation:{style:"stone",backdrop:"ink",cord:"cinnabar"}});let s=null,r=null,o=null,a={x:0,y:0,w:1,h:1},l=[],c=[],h=0,u=!1,d=0,f=[["先选一块喜欢的纹色","选好原料，接下来让天然颜色参与设计。","开始构形"],["选一抹颜色，把它变成形","拖动或切换构图，右下角直接看到取形后的效果。","确认取形，去刻线"],["亲手画几笔，让它更像你的作品","在作品上拖动刻线，也可以添加筋线后自由修改。","刻线完成，去润色"],["转动它，看看属于你的成器效果","轮廓、纹理与刻线已一起进入三维作品。","导出作品"]];function g(Y=768){return Ds(n,{size:Y})}function _(){let Y=t("#peek-canvas");n.image&&ui(Y.getContext("2d"),Y.width,Y.height,n,{texture:g(384),padding:.1})}function m(){let Y=t("#design-canvas"),ht=Y.getBoundingClientRect();if(!n.image||ht.width<1||ht.height<1)return;let Mt=Math.min(devicePixelRatio,2);Y.width=Math.round(ht.width*Mt),Y.height=Math.round(ht.height*Mt);let Ct=Y.getContext("2d");Ct.scale(Mt,Mt),n.view==="color"?i.drawSource(Ct,ht.width,ht.height,{includeTarget:n.step===1,includeMotif:n.step===1}):a=ui(Ct,ht.width,ht.height,n,{texture:g(),compare:n.comparison,padding:.16,cursor:o}),_()}async function p(){if(n.image)try{s||(r||(r=i.getSceneModule().then(Y=>Y.createAgateScene(t("#preview-scene")))),s=await r),s.setTexture(g(),{kind:n.kind,normalCanvas:Bd(n.strokes,384,n.inscription),polish:n.polish,light:n.light,thickness:n.thickness,presentation:n.presentation}),s.resize()}catch(Y){console.error(Y),i.toast("三维暂不可用，已切换成器效果，可继续创作。"),x("carved")}}function T(){n.image&&(t("#stroke-count").textContent=n.strokes.length,t("#undo-stroke").disabled=!l.length,t("#redo-stroke").disabled=!c.length,t("#polish").value=Math.round(n.polish*100),t("#polish-value").value=Math.round(n.polish*100)+"%",n.view==="preview"?(cancelAnimationFrame(d),d=requestAnimationFrame(p)):m(),_())}function x(Y){n.view=Y,t("#studio").dataset.view=Y,t("#design-canvas").hidden=Y==="preview",t("#preview-scene").hidden=Y!=="preview";for(let[Mt,Ct]of[["view-color","color"],["view-carved","carved"],["view-preview","preview"]])t("#"+Mt).classList.toggle("selected",Y===Ct);t("#toggle-overlay").disabled=Y!=="color"||n.step!==1,t("#canvas-mode-label").textContent=Y==="preview"?"YOUR SHAPE · YOUR TEXTURE":Y==="carved"?"SHAPE · ENGRAVE · POLISH":"READ THE COLOR";let ht=Y==="preview"?"拖动转动作品 · 滚轮缩放 · 观察轮廓厚度与刻线":n.step===2?"在作品上拖动刻线 · 使用上方按钮撤销或擦线":n.step===1&&Y==="color"?"拖动取形 · 滚轮缩放 · Shift＋滚轮旋转":n.step===1?"拖动改变取色位置 · 回到原料查看构图":n.step===0?"选择喜欢的原料，再点击“开始构形”":"滑动下方对比，观察局部原料与成器的变化";t("#canvas-instruction").textContent=ht,t("#canvas-stage").classList.toggle("carving",n.step===2&&Y==="carved"),Y==="preview"?p():requestAnimationFrame(m)}function y(Y){n.step=ye(Y,0,3),t("#studio").dataset.craftStep=n.step,e(".craft-stepper [data-craft-step]").forEach(Mt=>{let Ct=Number(Mt.dataset.craftStep);Mt.classList.toggle("active",Ct===n.step),Mt.classList.toggle("done",Ct<n.step),Mt.setAttribute("aria-current",Ct===n.step?"step":"false")}),t("#work-stage-badge").textContent=["观料","借色构形","亲手刻线","润色成器"][n.step]+" · 0"+(n.step+1)+" / 04",t("#step-goal").textContent=f[n.step][0],t("#step-tip").textContent=f[n.step][1],t("#next-step").innerHTML=f[n.step][2]+" <span>→</span>",t("#previous-step").disabled=n.step===0,t("#context-title").textContent=n.step===2?"留下你的刻线":"纹色与笔触",t("#context-copy").textContent=n.step===2?"从一条线开始。沿着纹理，试着给叶片添叶脉、给山形添层次。":"你所选的原料、取形位置和手绘刻线共同构成这件数字作品。",x(n.step<=1?"color":n.step===2?"carved":"preview"),T();let ht=t("#canvas-stage");matchMedia("(prefers-reduced-motion: reduce)").matches||ht.animate([{opacity:.5,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:320,easing:"ease-out"})}function R(Y=!0){n.strokes=[],l=[],c=[],n.inscription=null,n.workTitle="",n.polish=.72,n.comparison=100,t("#compare").value=100;let ht=document.createElement("img");ht.src=n.sample==="procedural"?i.samples[0].thumb:n.image?.src||"",ht.alt="当前选择的原料";let Mt=document.createElement("p");Mt.textContent=t("#canvas-sample-name").textContent,t("#material-mini").replaceChildren(ht,Mt),Y?y(0):T(),document.dispatchEvent(new Event("agate-craft-reset"))}function C(){return structuredClone(n.strokes)}function D(){l.push(C()),l.length>80&&l.shift(),c=[]}function F(){l.length&&(c.push(C()),n.strokes=l.pop(),T())}function S(){c.length&&(l.push(C()),n.strokes=c.pop(),T())}function M(){D(),n.strokes.push(...zd(n.kind,n.toolWidth)),T(),i.toast("筋线已经刻入作品，可继续自由添线或擦除。")}function L(Y){n.tool=Y,t("#engrave-pen").classList.toggle("selected",Y==="pen"),t("#engrave-erase").classList.toggle("selected",Y==="erase"),n.view!=="carved"&&x("carved")}function V(Y,ht){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let Mt=t("#carve-particles");for(let Ct=0;Ct<3;Ct++){let E=document.createElement("i");E.style.left=Y+"px",E.style.top=ht+"px",E.style.setProperty("--dx",(Math.random()-.5)*25+"px"),E.style.setProperty("--dy",Math.random()*25+"px"),Mt.appendChild(E),setTimeout(()=>E.remove(),550)}}function q(){u&&(h++,u=!1,t("#play-demo").textContent="▷ 先看一次示范")}t("#studio").addEventListener("pointerdown",Y=>{Y.target.closest("#play-demo")||q()},{capture:!0});let z=t("#design-canvas"),X=!1,A=null,I=null,N=!1,$=Y=>{let ht=z.getBoundingClientRect();return{x:Y.clientX-ht.left,y:Y.clientY-ht.top}};function it(Y,ht=!1){if(!n.analysis)return;let Mt=$(Y);if(n.step===2&&n.view==="carved"){let Ct=(Mt.x-a.x)/a.w*2-1,E=(Mt.y-a.y)/a.h*2-1;if(o={x:Ct,y:E},!X){m();return}if(!Wr(n.kind,Ct,E)){I&&(I=null);return}if(n.tool==="pen"){I||(N||(D(),N=!0),I={width:n.toolWidth,points:[],depth:n.depth},n.strokes.push(I));let U=I.points.at(-1);(!U||Math.hypot(U[0]-Ct,U[1]-E)>.003)&&(n.lineMode==="straight"&&I.points.length>1&&I.points.splice(1),I.points.push([Ct,E]))}else{let U=n.strokes.filter(K=>!K.points.some(([dt,ft])=>Math.hypot(dt-Ct,ft-E)<n.toolWidth*3+.04));U.length!==n.strokes.length&&(N||(D(),N=!0),n.strokes=U)}Math.random()>.5&&V(Mt.x,Mt.y),T();return}if(!(n.step!==1||!X)){if(n.view==="color"){let Ct=i.getDrawRect(),E=(Mt.x-Ct.x)/Ct.w,U=(Mt.y-Ct.y)/Ct.h;if(E<0||E>1||U<0||U>1)return;if(n.brush==="none")n.pose.x=ye(E,.03,.97),n.pose.y=ye(U,.03,.97);else{let K=n.analysis,dt=Math.round(E*K.width),ft=Math.round(U*K.height);for(let lt=-4;lt<=4;lt++)for(let Gt=-4;Gt<=4;Gt++){let P=dt+Gt,ot=ft+lt;if(Gt*Gt+lt*lt<=16&&P>=0&&P<K.width&&ot>=0&&ot<K.height){let Q=ot*K.width+P;K.foreground[Q]&&(n.target[Q]=n.brush==="add"?1:0)}}}}else n.view==="carved"&&A&&(n.pose.x=ye(n.pose.x-(Mt.x-A.x)/a.w*n.pose.scale*2,.03,.97),n.pose.y=ye(n.pose.y-(Mt.y-A.y)/a.h*n.pose.scale*2,.03,.97));n.selectedCandidate=-1,i.renderCandidates(),i.updateLayout(),A=Mt}}z.addEventListener("pointerdown",Y=>{X=!0,A=$(Y),N=!1,I=null,z.setPointerCapture(Y.pointerId),it(Y,!0)}),z.addEventListener("pointermove",Y=>it(Y));for(let Y of["pointerup","pointercancel"])z.addEventListener(Y,()=>{if(X&&n.symmetry&&n.step===2&&n.tool==="pen"&&N){let ht=n.strokes.slice(l.at(-1)?.length||0);for(let Mt of ht)n.strokes.push({...Mt,points:Mt.points.map(([Ct,E])=>[-Ct,E])})}X=!1,I=null,N=!1,T()});z.addEventListener("pointerleave",()=>{o=null,X||m()}),z.addEventListener("wheel",Y=>{n.step===1&&(Y.preventDefault(),Y.shiftKey?n.pose.angle=ye(n.pose.angle+(Y.deltaY>0?5:-5),-180,180):n.pose.scale=ye(n.pose.scale+(Y.deltaY>0?-.01:.01),.08,.42),n.selectedCandidate=-1,i.renderCandidates(),i.updateLayout())},{passive:!1});async function st(){if(u){h++,u=!1,t("#play-demo").textContent="▷ 先看一次示范";return}let Y=++h;u=!0,t("#play-demo").textContent="Ⅱ 停止示范";let ht=Mt=>new Promise(Ct=>setTimeout(Ct,Mt));try{if(!n.image||(n.kind="leaf",t("#motif").value="leaf",n.strokes=[],l=[],c=[],n.pose.scale=.3,i.updateLayout(),y(1),await ht(650),Y!==h)||(await i.optimize(),await ht(1e3),Y!==h)||(y(2),await ht(650),Y!==h)||(M(),await ht(900),Y!==h))return;n.polish=.85,y(3),i.toast("示范完成：现在可继续转动、润色，或返回刻线修改。")}finally{Y===h&&(u=!1,t("#play-demo").textContent="▷ 再看一次示范")}}return e(".craft-stepper [data-craft-step]").forEach(Y=>Y.onclick=()=>{h++,u=!1,t("#play-demo").textContent="▷ 先看一次示范",y(Number(Y.dataset.craftStep))}),t("#start-shaping").onclick=()=>y(1),t("#next-step").onclick=()=>n.step===3?i.exportCard():y(n.step+1),t("#previous-step").onclick=()=>y(n.step-1),t("#back-to-shape").onclick=()=>y(1),t("#view-carved").onclick=()=>x("carved"),t("#result-peek").onclick=()=>x("carved"),t("#engrave-pen").onclick=()=>L("pen"),t("#engrave-erase").onclick=()=>L("erase"),t("#undo-stroke").onclick=F,t("#redo-stroke").onclick=S,t("#tool-width").oninput=Y=>{n.toolWidth=Number(Y.target.value)*.006,t("#tool-width-value").value=Y.target.value,m()},t("#preset-lines").onclick=M,t("#clear-strokes").onclick=()=>{n.strokes.length&&(D(),n.strokes=[],T())},t("#compare").oninput=Y=>{n.comparison=Number(Y.target.value),m()},t("#polish").oninput=Y=>{n.polish=Number(Y.target.value)/100,T()},e("[data-light]").forEach(Y=>Y.onclick=()=>{n.light=Y.dataset.light,e("[data-light]").forEach(ht=>ht.classList.toggle("selected",Y===ht)),T()}),t("#export-finished").onclick=i.exportCard,t("#save-finished").onclick=i.saveDesign,t("#play-demo").onclick=st,t("#motif").addEventListener("change",()=>{n.strokes=[],l=[],c=[],T()}),document.addEventListener("keydown",Y=>{n.route!=="studio"||n.step!==2||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="z"&&(Y.preventDefault(),Y.shiftKey?S():F())}),y(0),{draw:m,refresh:T,setView:x,setStep:y,updatePreview:p,resetCraft:R,stopDemo:q,renderArt:(Y,ht,Mt)=>ui(Y,ht,Mt,n,{texture:g(),padding:.12}),getScene:()=>s,editStrokes:Y=>{D(),Y(n.strokes),T()},clearHistory:()=>{l=[],c=[],T()},get strokes(){return n.strokes}}}Bi();var ut=i=>document.querySelector(i),Se=i=>[...document.querySelectorAll(i)],O={analysis:null,target:null,selectedColor:0,sample:"procedural",kind:"fruit",pose:{x:.5,y:.5,scale:.24,angle:0},brush:"none",overlay:!0,candidates:[],selectedCandidate:-1,view:"color",image:null,analysisMs:0,optimizeMs:0,baseline:null,layout:null,route:"home",loadId:0},al={fruit:"秋实",leaf:"一叶",mountain:"远山",drop:"凝露",round:"团圆",heart:"心意",custom:"手绘成器"},Ns=[{id:"procedural",title:"赤霞流纹",sub:"程序化教学样本",origin:"由代码生成的纹色样本，不对应真实阜新原石。"},{id:"bands",title:"层叠条带",sub:"开放许可实拍样本",file:"./assets/agate-bands.jpg",origin:"Hannes Grobe / CC BY-SA 2.5。公开玛瑙切片，来源页未标产地；非阜新原料证明。"},{id:"nodule",title:"结核纹理",sub:"开放许可实拍样本",file:"./assets/agate-nodule.jpg",origin:"James St. John / CC BY 2.0。公开玛瑙结核样本；非阜新原料证明。"}],Me,Xr,rl,Qd,nh={x:0,y:0,w:1,h:1},tf,th,ih=[];function Ie(i){ut("#toast").textContent=i,ut("#toast").classList.add("show"),clearTimeout(tf),tf=setTimeout(()=>ut("#toast").classList.remove("show"),3400)}function Us(i){try{return JSON.parse(localStorage.getItem(i)||"[]")}catch{return[]}}function ol(i,t){try{return localStorage.setItem(i,JSON.stringify(t)),!0}catch{return Ie("浏览器存储不可用或已满，请先导出方案卡。"),!1}}function vn(i){return String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Wy(){let i=document.createElement("canvas");i.width=720,i.height=600;let t=i.getContext("2d"),e=t.createImageData(i.width,i.height),n=(s,r,o)=>s.map((a,l)=>a+(r[l]-a)*o);for(let s=0;s<i.height;s++)for(let r=0;r<i.width;r++){let o=(r/i.width-.5)*2,a=(s/i.height-.5)*2,l=Math.atan2(a,o),c=Math.hypot(o*.95,a*1.05),h=.84+.045*Math.sin(l*5)+.025*Math.cos(l*9),u=(s*i.width+r)*4;if(c>h){e.data[u]=15,e.data[u+1]=20,e.data[u+2]=16,e.data[u+3]=255;continue}let d=.055*Math.sin(o*10+a*6)+.035*Math.cos(a*13-o*2),f=Math.hypot(o+.2,a*.78-.1)+d,g=.5+.5*Math.sin(f*31+Math.sin(o*7)*1),_=.5+.5*Math.sin(f*8.4+o),m=n([91,31,16],[211,122,45],_);m=n(m,[242,223,181],Math.pow(g,12)*.9);let p=1+.12*Math.max(0,1-Math.hypot(o+.35,a+.45)),T=.98+.025*Math.sin(r*2.14+s*.43);for(let x=0;x<3;x++)e.data[u+x]=ye(m[x]*p*T,0,255);e.data[u+3]=255}return t.putImageData(e,0,0),i}var ef=Wy();Ns[0].thumb=ef.toDataURL("image/jpeg",.85);function ll(){ut("#sample-list").innerHTML=Ns.map(i=>`<button class="sample ${i.id===O.sample?"selected":""}" data-sample="${i.id}"><img src="${i.thumb||i.file}" alt="${i.title}"><span><strong>${i.title}</strong><small>${i.sub}</small></span></button>`).join(""),Se("[data-sample]").forEach(i=>i.onclick=()=>cl(i.dataset.sample))}async function cl(i){let t=++O.loadId,e=Ns.find(n=>n.id===i);if(e){ut("#analysis-scan").classList.add("active");try{let n;if(i==="procedural"?n=ef:(n=new Image,n.src=e.file,await n.decode()),t!==O.loadId)return;O.sample=i,O.image=n,O.pose={x:.5,y:.5,scale:.24,angle:0},O.candidates=[],O.selectedCandidate=-1,ut("#sample-origin").textContent=e.origin,ut("#canvas-sample-name").textContent=e.title,ll(),Fs(),Me?.resetCraft()}catch(n){Ie("样本读取失败，可选择其他样本或导入照片。"),console.error(n)}finally{t===O.loadId&&ut("#analysis-scan").classList.remove("active")}}}function Fs(){if(!O.image)return;let i=performance.now(),t=document.createElement("canvas"),e=O.image.width/O.image.height;t.width=150,t.height=Math.max(40,Math.round(150/e)),t.height>200&&(t.height=200,t.width=Math.round(200*e));let n=t.getContext("2d",{willReadFrequently:!0});n.drawImage(O.image,0,0,t.width,t.height);try{O.analysis=Fd(n.getImageData(0,0,t.width,t.height).data,t.width,t.height,5,ut("#remove-bg").checked),O.selectedColor=O.analysis.colors.map((s,r)=>({v:s,i:r})).sort((s,r)=>r.v.count-s.v.count)[0].i,O.target=Gr(O.analysis,O.selectedColor),O.analysisMs=performance.now()-i,O.candidates=[],O.selectedCandidate=-1,sh(),xn(),ut("#analysis-status").textContent=`已分析 ${O.analysis.validPixels.toLocaleString()} 个有效像素 · ${O.analysis.colors.length} 个色区 · ${Math.round(O.analysisMs)} ms`,O.baseline=hi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),ut("#caption-text").textContent="已完成色区分析，选择色区后可搜索构图。"}catch(s){Ie(s.message)}}function sh(){let i=O.analysis;ut("#palette").innerHTML=i.colors.map((t,e)=>`<button class="swatch ${e===O.selectedColor?"selected":""}" data-color="${e}" aria-label="选择色区 ${e+1} ${t.hex}"><i style="background:${t.hex}"></i><span>色区 ${String(e+1).padStart(2,"0")}</span><small>${(t.share*100).toFixed(1)}%</small></button>`).join(""),Se("[data-color]").forEach(t=>t.onclick=()=>{O.selectedColor=Number(t.dataset.color),O.target=Gr(i,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,ut("#candidate-list").replaceChildren(),O.baseline=hi(i,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),sh(),xn()})}function nf(i,t){Ls(i,t)}function rh(i,t,e,{includeTarget:n=!0,includeMotif:s=!0}={}){if(i.clearRect(0,0,t,e),i.fillStyle="#111612",i.fillRect(0,0,t,e),!O.image)return;let r=O.image.width/O.image.height,o=t*.88,a=e*.7,l=o,c=l/r;c>a&&(c=a,l=c*r);let h=(t-l)/2,u=(e-c)/2;if(i.canvas.id==="design-canvas"&&(nh={x:h,y:u,w:l,h:c}),i.drawImage(O.image,h,u,l,c),n&&O.overlay&&O.target){let d=O.analysis,f=document.createElement("canvas");f.width=d.width,f.height=d.height;let g=f.getContext("2d"),_=g.createImageData(d.width,d.height);for(let m=0;m<O.target.length;m++)O.target[m]&&(_.data[m*4]=222,_.data[m*4+1]=204,_.data[m*4+2]=119,_.data[m*4+3]=95);g.putImageData(_,0,0),i.save(),i.imageSmoothingEnabled=!0,i.drawImage(f,h,u,l,c),i.restore()}if(s){let d=O.pose;i.save(),i.translate(h+d.x*l,u+d.y*c),i.rotate(d.angle*Math.PI/180),i.scale(d.scale*l,d.scale*c),nf(i,O.kind),i.fillStyle="rgba(255,229,174,.10)",i.fill("evenodd"),i.strokeStyle="#fff1c4",i.lineWidth=1.5/(d.scale*l),i.shadowColor="#3b1c09",i.shadowBlur=5,i.stroke(),i.restore()}}function qr(){if(Me){Me.draw();return}let i=ut("#design-canvas"),t=i.getBoundingClientRect();if(t.width<1)return;let e=Math.min(devicePixelRatio,2);i.width=Math.round(t.width*e),i.height=Math.round(t.height*e);let n=i.getContext("2d");n.scale(e,e),rh(n,t.width,t.height)}function xn(){if(!O.analysis)return;O.layout=hi(O.analysis,O.target,O.kind,O.pose),ut("#metric-fit").textContent=(O.layout.fit*100).toFixed(1)+"%",ut("#metric-contain").textContent=(O.layout.containment*100).toFixed(1)+"%",ut("#scale").value=Math.round(O.pose.scale*100),ut("#angle").value=Math.round(O.pose.angle),ut("#scale-value").value=Math.round(O.pose.scale*100)+"%",ut("#angle-value").value=Math.round(O.pose.angle)+"°";let i=O.layout.fit>.65?"图案与所选色区重合较多":O.layout.fit>.3?"图案部分落入所选色区":"可以调整位置或缩小图案，寻找更多目标色区";ut("#layout-explanation").textContent=`${i}。当前为“${al[O.kind]}”主题，按 ${O.layout.samples} 个固定内部采样点计算。`,qr(),Me?.refresh(),O.view==="preview"&&!Me&&ah()}function di(){ut("#candidate-list").innerHTML=O.candidates.map((i,t)=>`<button class="candidate ${O.selectedCandidate===t?"selected":""}" data-candidate="${t}">构图 ${String(t+1).padStart(2,"0")}<span>覆盖 ${(i.fit*100).toFixed(0)}%</span></button>`).join(""),Se("[data-candidate]").forEach(i=>i.onclick=()=>{let t=Number(i.dataset.candidate);O.selectedCandidate=t;let{x:e,y:n,scale:s,angle:r}=O.candidates[t];O.pose={x:e,y:n,scale:s,angle:r},di(),xn()})}async function hl(){if(!O.analysis)return;let i=ut("#optimize");i.disabled=!0,ut("#analysis-scan").classList.add("active"),await new Promise(t=>setTimeout(t,25));try{let t=performance.now(),e=ut("#lock-scale").checked,n=O.pose.scale;O.searchCount=e?196:784,O.baseline=hi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),O.candidates=Od(O.analysis,O.target,O.kind,e?{scale:n}:{}),O.optimizeMs=performance.now()-t,O.selectedCandidate=0;let{x:s,y:r,scale:o,angle:a}=O.candidates[0];O.pose={x:s,y:r,scale:o,angle:a},O.baseline=hi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:o,angle:0}),di(),xn(),ut("#caption-text").textContent=`已搜索 ${O.searchCount} 个位置、尺度与角度组合 · ${Math.round(O.optimizeMs)} ms`,Ie("找到三份构图，点击比较或继续手动调整。")}finally{i.disabled=!1,ut("#analysis-scan").classList.remove("active")}}function Xy(){let i=document.createElement("canvas");i.width=1024,i.height=1024;let t=i.getContext("2d");return t.fillStyle="#412719",t.fillRect(0,0,1024,1024),t.drawImage(O.image,0,0,1024,1024),t.save(),t.translate(O.pose.x*1024,O.pose.y*1024),t.rotate(O.pose.angle*Math.PI/180),t.scale(O.pose.scale*1024,O.pose.scale*1024),nf(t,O.kind),t.fillStyle="#fff0ca30",t.fill("evenodd"),t.strokeStyle="#fff1c4",t.lineWidth=2/(O.pose.scale*1024),t.stroke(),t.restore(),i}async function oh(){return Qd||(Qd=Promise.resolve().then(()=>(Kd(),Jd)))}async function ah(){if(Me)return Me.updatePreview();try{rl||(rl=(await oh()).createAgateScene(ut("#preview-scene"))),rl.setTexture(Xy()),rl.resize()}catch(i){console.error(i),Ie("当前设备三维渲染不可用，仍可使用纹色画布。"),lh("color")}}function lh(i){if(Me)return Me.setView(i);O.view=i,ut("#design-canvas").hidden=i!=="color",ut("#preview-scene").hidden=i!=="preview",ut("#view-color").classList.toggle("selected",i==="color"),ut("#view-preview").classList.toggle("selected",i==="preview"),ut("#canvas-mode-label").textContent=i==="color"?"COLOR-GUIDED COMPOSITION":"TEXTURE ON PRESET GEOMETRY",ut("#canvas-instruction").textContent=i==="color"?"拖动图案调整位置 · 右侧选择创作主题":"拖动旋转 · 滚轮缩放 · 预设几何上的材质示意",ut("#toggle-overlay").disabled=i==="preview",i==="preview"?ah():requestAnimationFrame(qr)}function sf(){let i=location.hash.slice(1)||"home";O.route=["home","studio","journey","collection"].includes(i)?i:"home",Se("main>.page").forEach(t=>t.hidden=t.id!==O.route),Se("[data-route]").forEach(t=>t.classList.toggle("active",t.dataset.route===O.route)),O.route!=="studio"&&Me?.stopDemo(),O.route==="studio"&&(Nd(),requestAnimationFrame(qr),O.view==="preview"&&ah()),O.route==="collection"&&eh(),O.route==="home"&&Xr?.resize(),window.scrollTo({top:0,behavior:"instant"})}function Yr(i,t){let e=URL.createObjectURL(i),n=document.createElement("a");n.href=e,n.download=t,document.body.appendChild(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}function qy(){let i=document.createElement("canvas");i.width=1200,i.height=1260;let t=i.getContext("2d");t.fillStyle="#151917",t.fillRect(0,0,i.width,i.height),t.fillStyle="#d9bc8b",t.font="18px sans-serif",t.fillText("FUXIN · AGATE ATELIER / 石里有境",65,65),t.fillStyle="#eee6d6",t.font="42px SimSun,serif",t.fillText(O.workTitle||al[O.kind]+" · 纹色构思",65,120,1070),t.save(),t.translate(0,180),Me?Me.renderArt(t,1200,790):rh(t,1200,790,{includeTarget:!1}),t.restore(),t.strokeStyle="#ffffff25",t.beginPath(),t.moveTo(65,1e3),t.lineTo(1135,1e3),t.stroke();let e=Ns.find(r=>r.id===O.sample),n=O.layout;t.font="21px sans-serif",t.fillStyle="#cfb38a",t.fillText(`图案色区匹配 ${(n.fit*100).toFixed(1)}%    图案区域保留 ${(n.containment*100).toFixed(1)}%`,65,1050),t.fillStyle="#a2a69b",t.font="16px sans-serif",t.fillText(`样本：${e?.title||"导入照片"} · ${e?.sub||"用户提供"}`,65,1090),t.fillText("二维创意示意；真实内部材质与加工可行性需工匠核验。",65,1130),t.font="13px sans-serif";let s=O.sample==="bands"?"Photo: Hannes Grobe · CC BY-SA 2.5 · commons.wikimedia.org/wiki/File:Agate1_hg.jpg":O.sample==="nodule"?"Photo: James St. John · CC BY 2.0 · commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg":"程序化教学样本 / 或用户自行导入素材";return t.fillText(s,65,1180),t.fillText(O.sample==="bands"?"图片叠加构图适用 CC BY-SA 2.5 · creativecommons.org/licenses/by-sa/2.5/":"数字作品为原创教学示意，非真实加工结果。",65,1210),i}function rf(){if(!O.analysis)return;qy().toBlob(t=>Yr(t,`石里有境-${al[O.kind]}-方案卡.png`),"image/png"),Ie("方案卡已导出，包含素材署名和指标。")}function ch(){let i={format:"agate-project",version:4,sample:O.sample,kind:O.kind,pose:{...O.pose},color:O.selectedColor,strokes:structuredClone(O.strokes),polish:O.polish,light:O.light,thickness:O.thickness,inscription:structuredClone(O.inscription),presentation:{...O.presentation},workTitle:O.workTitle,removeBackground:ut("#remove-bg").checked,target:Array.from(O.target),targetWidth:O.analysis.width,targetHeight:O.analysis.height};if(O.kind==="custom"&&(i.outline=O.customOutline),O.sample==="custom"){let t=document.createElement("canvas"),e=Math.min(1,960/Math.max(O.image.width,O.image.height));t.width=Math.round(O.image.width*e),t.height=Math.round(O.image.height*e),t.getContext("2d").drawImage(O.image,0,0,t.width,t.height),i.sourceImage=t.toDataURL("image/jpeg",.88)}return i}function of(){if(!O.analysis)return;let i=Us("agate-designs-v1"),t=document.createElement("canvas");t.width=420,t.height=340,Me.renderArt(t.getContext("2d"),420,340);let e={...ch(),id:crypto.randomUUID(),created:new Date().toISOString(),metrics:{...O.layout},image:t.toDataURL("image/jpeg",.82),title:O.workTitle||al[O.kind]+" · "+new Date().toLocaleDateString("zh-CN")};i.unshift(e),ol("agate-designs-v1",i.slice(0,30))&&Ie("已收藏，进入“我的作品”可继续编辑或导出完整方案。")}async function ul(i){try{let t=[3,4].includes(i.version)?Jc(i):i;if(t.sample==="custom"&&!t.sourceImage)throw Error("这份旧收藏没有保留原料照片，请重新导入照片。");if(Me.stopDemo(),ut("#remove-bg").checked=t.removeBackground??!0,t.sample==="custom"){let e=new Image;if(e.src=t.sourceImage,await e.decode(),e.width>4096||e.height>4096)throw Error("方案图片尺寸过大。");++O.loadId,O.sample="custom",O.image=e,ut("#sample-origin").textContent="由方案恢复的用户照片，仅在本机处理。",ut("#canvas-sample-name").textContent="我的原料照片",ll(),Fs(),Me.resetCraft()}else if(await cl(t.sample),O.sample!==t.sample)throw Error("原料未能加载，请稍后重试。");if(t.kind==="custom"&&(tl(t.outline),O.customOutline=t.outline,ut('#motif option[value="custom"]').disabled=!1),O.kind=t.kind,ut("#motif").value=t.kind,O.pose={...t.pose},O.selectedColor=Math.min(t.color,O.analysis.colors.length-1),O.target=Gr(O.analysis,O.selectedColor),t.target&&t.targetWidth*t.targetHeight===t.target.length){let e=O.analysis;O.target=Uint8Array.from({length:e.width*e.height},(n,s)=>t.target[Math.min(t.targetHeight-1,Math.floor(Math.floor(s/e.width)/e.height*t.targetHeight))*t.targetWidth+Math.min(t.targetWidth-1,Math.floor(s%e.width/e.width*t.targetWidth))])}O.strokes=structuredClone(t.strokes||[]),O.polish=t.polish??.72,O.light=t.light||"left",O.thickness=t.thickness??.24,O.inscription=structuredClone(t.inscription||null),O.presentation={style:"stone",backdrop:"ink",cord:"cinnabar",...t.presentation},O.workTitle=t.workTitle||"",sh(),O.candidates=[],di(),xn(),Me.clearHistory(),$y.sync(),hf.sync(),location.hash="studio",Me.setStep(2),Ie("方案已恢复，可以继续刻线、构形或润色。")}catch(t){Ie(t.message||"方案恢复失败，请检查文件。")}}function eh(){let i=Us("agate-designs-v1");ut("#collection-list").innerHTML=i.length?i.map(e=>`<article class="collection-card"><img src="${e.image}" alt="${vn(e.title)}"><h2>${vn(e.title)}</h2><p>色区覆盖 ${(e.metrics.fit*100).toFixed(1)}% · ${vn(Ns.find(n=>n.id===e.sample)?.title||"导入照片")}</p><div class="card-actions"><button class="text-button small" data-edit="${e.id}">继续编辑 ↗</button><button class="text-button small" data-export="${e.id}">导出方案</button><button class="text-button small" data-delete="${e.id}">删除</button></div></article>`).join(""):'<div class="empty-state"><h2>第一份构思，从一块石开始。</h2><p>选择纹色，尝试构图，收藏你的第一件数字作品。</p><a href="#studio" class="primary compact">开始创作 ↗</a></div>',Se("[data-edit]").forEach(e=>e.onclick=()=>ul(i.find(n=>n.id===e.dataset.edit))),Se("[data-export]").forEach(e=>e.onclick=()=>{let n=i.find(a=>a.id===e.dataset.export),{image:s,...r}=n;r.note=n.version>=3?"包含原料引用、手绘轮廓、色区、刻线与润色，可导入继续编辑。":"旧版参数；上传照片未保留。";let o={bands:"agate-bands.jpg",nodule:"agate-nodule.jpg"}[n.sample];r.attribution=o?ih.find(a=>a.file===o)||o:"程序化样本或用户导入照片",Yr(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),"玛瑙创作方案.json")}),Se("[data-delete]").forEach(e=>e.onclick=()=>{ol("agate-designs-v1",Us("agate-designs-v1").filter(n=>n.id!==e.dataset.delete)),eh()});let t=Us("agate-plans-v1");ut("#plan-list").innerHTML=t.length?t.map(e=>`<div class="plan-row"><div>${vn(e.date)} · ${vn(e.interest)}<small>${vn(e.note||"尚未填写备注")}</small></div><button data-delete-plan="${e.id}">删除</button></div>`).join(""):'<p class="subtle">还没有研学意向，可在“循艺入乡”保存。</p>',Se("[data-delete-plan]").forEach(e=>e.onclick=()=>{ol("agate-plans-v1",Us("agate-plans-v1").filter(n=>n.id!==e.dataset.deletePlan)),eh()})}function Yy(){ut("#sources-content").innerHTML='<div class="source-record"><h3>背景音乐 · We Never（若如初见）</h3><p>La Mer / LongTran Final / DJ山茶花。用户指定曲目，可通过右上角音乐控件播放。</p><a href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div>'+Hs.map(i=>`<div class="source-record"><h3>${i.title}</h3><p>${i.publisher} · ${i.note}</p><a href="${i.url}" target="_blank" rel="noopener">查看原始资料 ↗</a></div>`).join("")+'<div class="source-record"><h3>图像素材</h3><p>公开实拍样本用于技术演示，不作为阜新原料或本地合作证明。实物图鉴采用等比缩放与格式压缩版本，原始文件归档于初始材料；画布叠加为本系统产生。</p></div>'+ih.map(i=>`<div class="source-record"><h3>${vn(i.original)}</h3><p>${vn(i.author)} / ${vn(i.license)} · ${vn(i.origin)}</p><p>${vn(i.changes||"")}</p><a href="${i.source}" target="_blank" rel="noopener">图片来源 ↗</a> · <a href="${i.licenseUrl}" target="_blank" rel="noopener">许可条款 ↗</a></div>`).join("")+'<div class="source-record"><h3>软件与示意内容</h3><p>Three.js r180 · MIT许可。循艺入乡的主视觉、手艺与水岸情境，以及形成引导的四幅写实情境由内置 image_gen 生成，供地质概念讲述，不是实拍或物理模拟；图库中的馆藏与标本照片单独保留出处。玛瑙层纹背景、赤霞流纹、三维原石与创作轮廓由代码生成；成器几何依据当前轮廓构建，刻线为外观凹痕示意。文化查询为本地资料检索，未调用在线生成式问答模型。</p><a href="./vendor/THREE-LICENSE.txt" target="_blank" rel="noopener">Three.js许可 ↗</a></div>',ut("#sources-dialog").showModal()}function af(){if(!O.analysis)return;let i=hi(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:O.pose.scale,angle:0}),t=O.layout,e=O.target.reduce((n,s)=>n+s,0);ut("#validation-content").innerHTML=`<p class="validation-p">当前图像分析分辨率 ${O.analysis.width} × ${O.analysis.height}，有效像素 ${O.analysis.validPixels}，目标色区 ${e} 像素。颜色聚类在 OKLab 空间进行，自动分色后可手动修正色区。</p><table class="data-table"><thead><tr><th>当前图像内对照</th><th>居中默认布局</th><th>当前布局</th></tr></thead><tbody><tr><td>图案色区匹配</td><td>${(i.fit*100).toFixed(1)}%</td><td>${(t.fit*100).toFixed(1)}%</td></tr><tr><td>图案区域保留</td><td>${(i.containment*100).toFixed(1)}%</td><td>${(t.containment*100).toFixed(1)}%</td></tr></tbody></table><p class="validation-p">分色耗时 ${O.analysisMs.toFixed(1)} ms；最近一次构图搜索耗时 ${O.optimizeMs?O.optimizeMs.toFixed(1)+" ms":"尚未运行"}。默认对照为居中、与当前图案相同尺度、0°；两列均在当前目标色区上重新计算。</p><p class="validation-p">以上为当前图像的运行记录，不是跨样本评测结论，也不验证雕刻可行性。更小图形可能获得更高覆盖率，需结合视觉表达选择合适方案。</p>`,ut("#validation-dialog").showModal()}function lf(i){let t=[...i.toLowerCase()],n=bh.map(c=>({...c,score:c.keys.reduce((h,u)=>h+(i.includes(u)?3:0),0)+Math.min(1,t.filter(h=>c.title.includes(h)).length/10)})).sort((c,h)=>h.score-c.score)[0],s=ut("#knowledge-answer");if(s.replaceChildren(),!i.trim()){s.textContent="请输入想了解的内容。";return}if(n.score<1){s.textContent="已核对的资料卡暂未覆盖这个问题。可尝试“工艺”“十家子”“非遗”或“乡村”，也可打开文化资料库阅读原文。";return}let r=document.createElement("strong");r.textContent=n.title;let o=document.createElement("p");o.textContent=n.text;let a=document.createElement("a"),l=Hs.find(c=>c.id===n.source);a.href=l.url,a.target="_blank",a.rel="noopener",a.textContent="依据："+l.publisher+" ↗",s.append(r,o,a)}ut("#optimize").onclick=hl;ut("#save-design").onclick=of;ut("#export-png").onclick=rf;ut("#view-color").onclick=()=>lh("color");ut("#view-preview").onclick=()=>lh("preview");ut("#toggle-overlay").onclick=()=>{O.overlay=!O.overlay,ut("#toggle-overlay").setAttribute("aria-pressed",String(O.overlay)),ut("#toggle-overlay").textContent=O.overlay?"◉ 色区叠加":"○ 色区叠加",qr()};ut("#motif").onchange=i=>{O.kind=i.target.value,O.candidates=[],O.selectedCandidate=-1,di(),xn()};ut("#scale").oninput=i=>{O.pose.scale=Number(i.target.value)/100,O.selectedCandidate=-1,di(),xn()};ut("#angle").oninput=i=>{O.pose.angle=Number(i.target.value),O.selectedCandidate=-1,di(),xn()};ut("#remove-bg").onchange=Fs;ut("#reanalyze").onclick=Fs;ut("#reset-mask").onclick=()=>{O.analysis&&(O.target=Gr(O.analysis,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,di(),xn())};Se("[data-brush]").forEach(i=>i.onclick=()=>{O.brush=i.dataset.brush,Se("[data-brush]").forEach(t=>t.classList.toggle("selected",t===i)),ut("#design-canvas").style.cursor=O.brush==="none"?"grab":"crosshair"});ut("#image-upload").onchange=async i=>{let t=i.target.files[0];if(!t)return;if(!["image/jpeg","image/png","image/webp"].includes(t.type)||t.size>15*1024*1024){Ie("请选择不超过 15 MB 的 JPG、PNG 或 WebP 图片。"),i.target.value="";return}let e=++O.loadId,n=URL.createObjectURL(t);try{let s=new Image;if(s.src=n,await s.decode(),e!==O.loadId){URL.revokeObjectURL(n);return}th&&URL.revokeObjectURL(th),th=n,O.sample="custom",O.image=s,O.pose={x:.5,y:.5,scale:.24,angle:0},ut("#sample-origin").textContent="用户导入照片，仅在当前设备处理。请确认有权用于展示。",ut("#canvas-sample-name").textContent="我的原料照片",ll(),Fs(),Me?.resetCraft(),Ie("照片已在本机读取。开始借色构形。")}catch{URL.revokeObjectURL(n),Ie("无法解码此图片，请更换文件。")}i.target.value=""};Se(".source-open").forEach(i=>i.onclick=Yy);Se(".dialog-close").forEach(i=>i.onclick=()=>i.closest("dialog").close());Se("dialog").forEach(i=>i.addEventListener("click",t=>{if(t.target===i){let e=i.getBoundingClientRect();(t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)&&i.close()}}));ut("#open-validation").onclick=af;ut("#home-guide").onclick=()=>ut("#home-story").scrollIntoView({behavior:"smooth"});ut("#auto-rotate").onclick=()=>{if(!Xr)return;let i=!Xr.controls.autoRotate;Xr.setAuto(i),ut("#auto-rotate").setAttribute("aria-pressed",String(i)),ut("#auto-rotate").textContent=i?"Ⅱ 暂停自转":"▷ 开启自转"};ut("#plan-trip").onclick=()=>{ut("#trip-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),ut("#trip-dialog").showModal()};ut("#trip-form").onsubmit=i=>{i.preventDefault();let t=Us("agate-plans-v1");t.unshift({id:crypto.randomUUID(),date:ut("#trip-date").value,interest:ut("#trip-interest").value,note:ut("#trip-note").value.trim()}),ol("agate-plans-v1",t.slice(0,50))&&(ut("#trip-dialog").close(),ut("#trip-form").reset(),Ie("已保存本地研学意向，可在“我的作品”查看。"))};ut("#knowledge-form").onsubmit=i=>{i.preventDefault(),lf(ut("#knowledge-input").value)};Se("[data-question]").forEach(i=>i.onclick=()=>{ut("#knowledge-input").value=i.dataset.question,lf(i.dataset.question)});ut("#craft-tabs").innerHTML=Kr.map((i,t)=>`<button data-craft="${t}" class="${t===0?"selected":""}">${i.title}</button>`).join("");function cf(i){ut("#craft-detail").replaceChildren();let t=document.createElement("h3");t.textContent=Kr[i].subtitle;let e=document.createElement("p");e.textContent=Kr[i].text,ut("#craft-detail").append(t,e),Se("[data-craft]").forEach(n=>n.classList.toggle("selected",Number(n.dataset.craft)===i))}Se("[data-craft]").forEach(i=>i.onclick=()=>cf(Number(i.dataset.craft)));cf(0);Me=Wd({$:ut,$$:Se,state:O,samples:Ns,drawSource:rh,getDrawRect:()=>nh,getSceneModule:oh,renderCandidates:di,updateLayout:xn,optimize:hl,exportCard:rf,saveDesign:of,toast:Ie});var $y=Gd({state:O,experience:Me,$:ut,$$:Se,toast:Ie,getDrawRect:()=>nh,download:Yr}),hf=Vd({state:O,experience:Me,$:ut,$$:Se,toast:Ie,download:Yr,projectData:ch,restoreProject:ul,optimize:hl,updateLayout:xn});ut(".heading-actions").insertAdjacentHTML("afterbegin",'<label class="project-import">导入方案<input id="project-import" type="file" accept=".json,application/json"></label>');ut("#project-import").onchange=async i=>{let t=i.target.files[0];if(t){try{if(t.size>5*1024*1024)throw Error("方案文件请保持在 5 MB 以内。");let e=Jc(JSON.parse(await t.text()));await ul(e)}catch(e){Ie(e.message||"方案文件无法读取。")}i.target.value=""}};window.agateJourney=wh({toast:Ie,download:Yr});window.addEventListener("hashchange",sf);new ResizeObserver(()=>qr()).observe(ut("#canvas-stage"));ll();sf();cl("procedural");fetch("./assets/credits.json").then(i=>i.json()).then(i=>ih=i).catch(()=>{});oh().then(i=>{Xr=i.createAgateScene(ut("#hero-scene"),{hero:!0})}).catch(i=>{console.error(i),ut("#scene-fallback").hidden=!1});window.agateStudio={state:O,analyze:Fs,loadSample:cl,optimize:hl,showValidation:af,experience:Me,restoreProject:ul,projectData:ch,playground:hf};var hn=document.createElement("div");hn.className="ambient-player";hn.innerHTML='<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>';document.querySelector(".header").append(hn);var Qt=i=>hn.querySelector(i),Bt=document.createElement("audio");Bt.id="background-music";Bt.src="./assets/background-we-never.mp3";Bt.preload="none";Bt.loop=!0;document.body.append(Bt);var jy=()=>{try{let i=JSON.parse(localStorage.getItem("agate-music-volume"));return typeof i=="number"&&Number.isFinite(i)?Math.max(0,Math.min(1,i)):.25}catch{return .25}};Bt.volume=jy();var $r=!1,hh=Bt.volume||.25,Os=0,dl=null,fl=null,pl=!0;async function Zy(){fl||(dl||(dl=fetch(new URL("./assets/background-we-never.mp3",import.meta.url)).then(i=>{if(!i.ok)throw Error("Audio unavailable");return i.blob()}).then(i=>{fl=URL.createObjectURL(i),Bt.src=fl}).catch(i=>{throw dl=null,i})),await dl)}function ml(){Qt("#music-volume").value=Math.round(Bt.volume*100),Qt("#music-volume-value").value=Math.round(Bt.volume*100)+"%";let i=Bt.muted||Bt.volume===0;Qt("#music-mute").setAttribute("aria-pressed",String(i)),Qt("#music-mute").setAttribute("aria-label",i?"取消静音":"静音"),Qt("#music-mute").textContent=i?"×":"♪"}var uf=i=>Number.isFinite(i)?Math.floor(i/60)+":"+String(Math.floor(i%60)).padStart(2,"0"):"0:00";function jr(){let i=!Bt.paused;hn.classList.toggle("playing",i),Qt("#music-toggle").setAttribute("aria-pressed",String(i)),Qt("#music-toggle").setAttribute("aria-label",i?"暂停背景音乐":"播放背景音乐"),Qt("#music-label").textContent=i?"音乐播放中":"开启音乐"}function uh(){pl=!1,document.removeEventListener("click",ks,!0),document.removeEventListener("touchend",ks,!0),document.removeEventListener("keydown",ks,!0)}async function dh(){if($r||!Bt.paused)return;let i=++Os;$r=!0,Qt("#music-label").textContent="正在加载",Qt("#music-status").textContent="正在准备音乐…";try{if(fl||await Zy(),i!==Os)return;Bt.error&&Bt.load(),await Bt.play(),i===Os&&(uh(),hn.dataset.autoplay="playing",Qt("#music-status").textContent="正在循环播放，可随时暂停。")}catch(t){if(i!==Os)return;jr(),t.name==="NotAllowedError"?(hn.dataset.autoplay="waiting",Qt("#music-label").textContent=pl?"轻触开启":"开启音乐",Qt("#music-status").textContent=pl?"轻触页面，音乐便随创作开始。":"音乐已准备好，请轻点音符播放。"):(hn.dataset.autoplay="unavailable",Qt("#music-status").textContent="暂时未能播放，请点击音符重试。")}finally{i===Os&&($r=!1)}}function df(){uh(),$r||!Bt.paused?(Os++,$r=!1,Bt.pause(),jr(),hn.dataset.autoplay="paused",Qt("#music-status").textContent="音乐已暂停，轻点音符继续。"):dh()}function ks(i){!pl||!i.isTrusted||hn.contains(i.target)||i.type==="keydown"&&(!["Enter"," "].includes(i.key)||i.ctrlKey||i.altKey||i.metaKey)||dh()}document.addEventListener("click",ks,!0);document.addEventListener("touchend",ks,{capture:!0,passive:!0});document.addEventListener("keydown",ks,!0);Qt("#music-toggle").onclick=df;function fh(i){Qt("#music-panel").hidden=!i,Qt("#music-settings").setAttribute("aria-expanded",String(i))}Qt("#music-settings").onclick=()=>fh(Qt("#music-panel").hidden);document.addEventListener("pointerdown",i=>{hn.contains(i.target)||fh(!1)});document.addEventListener("keydown",i=>{i.key==="Escape"&&!Qt("#music-panel").hidden&&(fh(!1),Qt("#music-settings").focus())});Qt("#music-volume").oninput=i=>{Bt.volume=Number(i.target.value)/100,Bt.volume>0&&(hh=Bt.volume),Bt.muted=!1;try{localStorage.setItem("agate-music-volume",JSON.stringify(Bt.volume))}catch{}ml()};Qt("#music-mute").onclick=()=>{if(Bt.muted||Bt.volume===0){if(Bt.muted=!1,Bt.volume===0){Bt.volume=hh;try{localStorage.setItem("agate-music-volume",JSON.stringify(Bt.volume))}catch{}}}else hh=Bt.volume,Bt.muted=!0;ml()};Qt("#music-seek").oninput=i=>{Number.isFinite(Bt.duration)&&Bt.duration>0&&(Bt.currentTime=Number(i.target.value)/1e3*Bt.duration)};Bt.addEventListener("play",jr);Bt.addEventListener("pause",()=>{jr(),Qt("#music-status").textContent="音乐已暂停，轻点音符继续。"});Bt.addEventListener("playing",()=>{uh(),hn.dataset.autoplay="playing",Qt("#music-label").textContent="音乐播放中",Qt("#music-status").textContent="正在循环播放，可随时暂停。"});Bt.addEventListener("waiting",()=>{Bt.paused||(Qt("#music-label").textContent="正在缓冲",Qt("#music-status").textContent="音乐正在缓冲…")});Bt.addEventListener("loadedmetadata",()=>{Qt("#music-duration").textContent=uf(Bt.duration),Qt("#music-seek").disabled=!Number.isFinite(Bt.duration)});Bt.addEventListener("timeupdate",()=>{Qt("#music-current").textContent=uf(Bt.currentTime),Number.isFinite(Bt.duration)&&Bt.duration>0&&(Qt("#music-seek").value=Math.round(Bt.currentTime/Bt.duration*1e3))});Bt.addEventListener("volumechange",ml);Bt.addEventListener("error",()=>{Qt("#music-status").textContent="音乐暂不可用，请点击音符重试。",jr()});fetch("./assets/music.json").then(i=>{if(!i.ok)throw Error();return i.json()}).then(i=>{Qt("#music-title").textContent=i.title,Qt("#music-artist").textContent=i.artist,Qt("#music-toggle").title=i.title+" · "+i.artist}).catch(()=>{Qt("#music-title").textContent="用户指定背景音乐"});ml();window.agateMusic={audio:Bt,toggle:df};dh();var Bs=document.createElement("div");Bs.className="agate-background";Bs.setAttribute("aria-hidden","true");Bs.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div><div class="agate-gleam"></div>';document.body.prepend(Bs);var ff=matchMedia("(prefers-reduced-motion: reduce)"),Jy=matchMedia("(pointer: fine)"),zi=0,ph=0,mh=0;function pf(){Bs.style.setProperty("--mineral-x",ph+"px"),Bs.style.setProperty("--mineral-y",mh+"px"),zi=0}window.addEventListener("pointermove",i=>{ff.matches||!Jy.matches||document.hidden||(ph=(i.clientX/innerWidth-.5)*-14,mh=(i.clientY/innerHeight-.5)*-10,zi||(zi=requestAnimationFrame(pf)))},{passive:!0});function mf(){ph=mh=0,zi||(zi=requestAnimationFrame(pf))}document.addEventListener("pointerleave",mf);ff.addEventListener("change",mf);document.addEventListener("visibilitychange",()=>{document.hidden&&(cancelAnimationFrame(zi),zi=0)});
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
