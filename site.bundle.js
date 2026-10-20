var Jp=Object.defineProperty;var cs=(n,e,t)=>()=>{if(t)throw t[0];try{return n&&(e=n(n=0)),e}catch(i){throw t=[i],i}};var Kp=(n,e)=>{for(var t in e)Jp(n,t,{get:e[t],enumerable:!0})};function $i(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function vh(n,e){return(n%e+e)%e}function em(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function tm(n,e,t){return n!==e?(t-n)/(e-n):0}function Cr(n,e,t){return(1-t)*n+t*e}function nm(n,e,t,i){return Cr(n,e,1-Math.exp(-t*i))}function im(n,e=1){return e-Math.abs(vh(n,e*2)-e)}function sm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function am(n,e){return n+Math.floor(Math.random()*(e-n+1))}function om(n,e){return n+Math.random()*(e-n)}function lm(n){return n*(.5-Math.random())}function cm(n){n!==void 0&&(Hu=n);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hm(n){return n*Ar}function um(n){return n*Cs}function dm(n){return(n&n-1)===0&&n!==0}function fm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function pm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function mm(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ws(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}function xh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Rs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jd(){let n=Rs("canvas");return n.style.display="block",n}function Is(n){n in Gu||(Gu[n]=!0,console.warn(n))}function Kd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function gm(){let n={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===rt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Lr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Is("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Is("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Bi]:{primaries:e,whitePoint:i,transfer:Lr,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Wu,fromXYZ:Xu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?So.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}function Sc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Li.fromArray(n,r);let o=s.x*Math.abs(Li.x)+s.y*Math.abs(Li.y)+s.z*Math.abs(Li.z),l=e.dot(Li),c=t.dot(Li),h=i.dot(Li);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function Fc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function Rm(n,e,t,i,s,r,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zn,o),l===null)return null;lo.copy(o),lo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(lo);return c<t.near||c>t.far?null:{distance:c,point:lo.clone(),object:n}}function co(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,so),n.getVertexPosition(l,ro),n.getVertexPosition(c,ao);let h=Rm(n,e,t,i,so,ro,ao,nd);if(h){let u=new k;ui.getBarycoord(nd,so,ro,ao,u),s&&(h.uv=ui.getInterpolatedAttribute(s,o,l,c,u,new me)),r&&(h.uv1=ui.getInterpolatedAttribute(r,o,l,c,u,new me)),a&&(h.normal=ui.getInterpolatedAttribute(a,o,l,c,u,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new k,materialIndex:0};ui.getNormal(so,ro,ao,d.normal),h.face=d,h.barycoord=u}return h}function ji(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ht(n){let e={};for(let t=0;t<n.length;t++){let i=ji(n[t]);for(let s in i)e[s]=i[s]}return e}function Im(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}function bh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}function rd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Om(n,e){let t=1-n;return t*t*e}function km(n,e){return 2*(1-n)*n*e}function Bm(n,e){return n*n*e}function Rr(n,e,t,i){return Om(n,e)+km(n,t)+Bm(n,i)}function zm(n,e){let t=1-n;return t*t*t*e}function Hm(n,e){let t=1-n;return 3*t*t*n*e}function Vm(n,e){return 3*(1-n)*n*n*e}function Gm(n,e){return n*n*n*e}function Ir(n,e,t,i,s){return zm(n,e)+Hm(n,t)+Vm(n,i)+Gm(n,s)}function Wm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=tf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=jm(n,e,r,t)),n.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=n[d],g=n[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return jr(r,a,t,o,l,c,0),a}function tf(n,e,t,i,s){let r;if(s===ag(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=ad(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=ad(a/i|0,n[a],n[a+1],r);return r&&Bs(r,r.next)&&(Jr(r),r=r.next),r}function Vi(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Bs(t,t.next)||yt(t.prev,t,t.next)===0)){if(Jr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function jr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&eg(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?qm(n,i,s,r):Xm(n)){e.push(l.i,n.i,c.i),Jr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ym(Vi(n),e),jr(n,e,t,i,s,r,2)):a===2&&$m(n,e,t,i,s,r):jr(Vi(n),e,t,i,s,r,1);break}}}function Xm(n){let e=n.prev,t=n,i=n.next;if(yt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Tr(s,o,r,l,a,c,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(yt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=jc(f,g,e,t,i),T=jc(_,m,e,t,i),x=n.prevZ,y=n.nextZ;for(;x&&x.z>=p&&y&&y.z<=T;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Tr(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Tr(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Tr(o,h,l,u,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=T;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Tr(o,h,l,u,c,d,y.x,y.y)&&yt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ym(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Bs(i,s)&&sf(i,t,t.next,s)&&Zr(i,s)&&Zr(s,i)&&(e.push(i.i,t.i,s.i),Jr(t),Jr(t.next),t=n=s),t=t.next}while(t!==n);return Vi(t)}function $m(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ig(a,o)){let l=rf(a,o);a=Vi(a,a.next),l=Vi(l,l.next),jr(a,e,t,i,s,r,0),jr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function jm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=tf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(ng(c))}s.sort(Zm);for(let r=0;r<s.length;r++)t=Jm(s[r],t);return t}function Zm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Jm(n,e){let t=Km(n,e);if(!t)return e;let i=rf(t,n);return Vi(i,i.next),Vi(t,t.next)}function Km(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Bs(n,t))return t;do{if(Bs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&nf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let u=Math.abs(s-t.y)/(i-t.x);Zr(t,n)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Qm(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Qm(n,e){return yt(n.prev,n,e.prev)<0&&yt(e.next,n,n.next)<0}function eg(n,e,t,i){let s=n;do s.z===0&&(s.z=jc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function jc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ng(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function nf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Tr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&nf(n,e,t,i,s,r,a,o)}function ig(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!sg(n,e)&&(Zr(n,e)&&Zr(e,n)&&rg(n,e)&&(yt(n.prev,n,e.prev)||yt(n,e.prev,e))||Bs(n,e)&&yt(n.prev,n,n.next)>0&&yt(e.prev,e,e.next)>0)}function yt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Bs(n,e){return n.x===e.x&&n.y===e.y}function sf(n,e,t,i){let s=po(yt(n,e,t)),r=po(yt(n,e,i)),a=po(yt(t,i,n)),o=po(yt(t,i,e));return!!(s!==r&&a!==o||s===0&&fo(n,t,e)||r===0&&fo(n,i,e)||a===0&&fo(t,n,i)||o===0&&fo(t,e,i))}function fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function po(n){return n>0?1:n<0?-1:0}function sg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&sf(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Zr(n,e){return yt(n.prev,n,n.next)<0?yt(n,e,n.next)>=0&&yt(n,n.prev,e)>=0:yt(n,e,n.prev)<0||yt(n,n.next,e)<0}function rg(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rf(n,e){let t=Zc(n.i,n.x,n.y),i=Zc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function ad(n,e,t,i){let s=Zc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Jr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ag(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function od(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function ld(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}function lg(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}function mo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function wh(n,e,t,i){let s=yg(i);switch(t){case dh:return n*e;case ph:return n*e/s.components*s.byteLength;case rl:return n*e/s.components*s.byteLength;case mh:return n*e*2/s.components*s.byteLength;case al:return n*e*2/s.components*s.byteLength;case fh:return n*e*3/s.components*s.byteLength;case pn:return n*e*4/s.components*s.byteLength;case ol:return n*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(n,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(n,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Al:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Il:case Pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ll:case Dl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yg(n){switch(n){case An:case lh:return{byteLength:1,components:1};case Vs:case ch:case Gs:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case Si:case nl:case Bn:return{byteLength:4,components:1};case hh:case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}var xi,Mi,ud,th,dd,nh,fd,On,Zn,Nt,kn,Kn,Oi,ih,sh,rh,pd,fi,md,gd,_d,yd,vd,xd,Md,bd,yo,vo,Sd,Ed,wd,Td,Ad,Cd,Rd,Id,Pd,Xo,qo,Yo,ki,$o,jo,Zo,Jo,ah,Ld,Dd,Qn,Ud,Nd,Fd,Ko,Od,kd,Bd,oh,qi,Yi,Qo,el,la,xo,di,Mo,jt,zd,ca,Zt,tl,bi,An,lh,ch,Vs,nl,Si,Bn,Gs,il,sl,Ws,hh,uh,dh,fh,pn,As,Xs,ph,rl,mh,al,ol,ha,ua,da,fa,ll,cl,hl,ul,dl,fl,pl,ml,gl,_l,yl,vl,xl,Ml,bl,Sl,El,wl,Tl,Al,Cl,Rl,Il,Pl,Ll,Dl,Ul,Nl,Pr,bo,go,Wc,Xc,qc,Hd,Vd,gh,Gd,ei,Ct,Bi,Lr,rt,Ni,Yc,Wd,Xd,qd,_h,Yd,$d,jd,Zd,$c,yh,wn,Dr,Dn,Ot,Hu,Ar,Cs,pa,me,fn,k,vc,Vu,je,xc,Gu,Wu,Xu,nt,ds,So,_m,Ps,ym,bc,zt,dt,Eo,Un,Ur,wo,pi,Wn,bn,$a,fs,ps,ms,ri,ai,Pi,br,ja,Za,Li,vm,Sr,Ec,Ls,Xn,wc,Ja,oi,Tc,Ka,Ac,Ds,Mt,gs,Sn,xm,Mm,li,Qa,tn,qu,Yu,Tn,Nr,bm,$u,_s,qn,eo,Er,Sm,Em,ju,Zu,Ju,Ku,wm,ys,Cc,Yt,En,Yn,Rc,$n,vs,xs,Qu,Ic,Pc,Lc,Dc,Uc,Nc,ui,Qd,ci,to,$e,kt,Tm,mi,Jn,wt,no,Am,sn,Fr,Or,mt,Cm,un,Oc,Ms,nn,wr,Lt,rn,ed,Di,io,td,so,ro,ao,kc,oo,nd,lo,ft,gi,ef,Pm,Lm,an,kr,hi,id,sd,Bt,bs,Ss,To,Br,Ao,Ln,Dm,Us,_i,zr,Bc,Um,Nm,dn,Ui,Fm,ho,Ns,zi,Hr,Vr,Hi,on,Fs,Co,uo,zc,Hc,Vc,Os,Gr,Ro,Wr,Io,Xr,qr,Yr,Po,Lo,$r,ks,Jc,Fi,Kr,og,Nn,Qr,ea,ta,Fn,na,Do,Uo,Gi,No,Fo,Oo,ln,yi,ko,Bo,zo,ia,vi,Ho,_o,Vo,af,zs,Es,Go,sa,ra,Gc,cd,hd,Kc,Wi,Qc,Xi,aa,Wo,Sh,hg,Eh,ug,dg,fg,pg,mg,gg,_g,eh,ut,$x,Hs,oa,Th=cs(()=>{xi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ud=0,th=1,dd=2,nh=1,fd=2,On=3,Zn=0,Nt=1,kn=2,Kn=0,Oi=1,ih=2,sh=3,rh=4,pd=5,fi=100,md=101,gd=102,_d=103,yd=104,vd=200,xd=201,Md=202,bd=203,yo=204,vo=205,Sd=206,Ed=207,wd=208,Td=209,Ad=210,Cd=211,Rd=212,Id=213,Pd=214,Xo=0,qo=1,Yo=2,ki=3,$o=4,jo=5,Zo=6,Jo=7,ah=0,Ld=1,Dd=2,Qn=0,Ud=1,Nd=2,Fd=3,Ko=4,Od=5,kd=6,Bd=7,oh=300,qi=301,Yi=302,Qo=303,el=304,la=306,xo=1e3,di=1001,Mo=1002,jt=1003,zd=1004,ca=1005,Zt=1006,tl=1007,bi=1008,An=1009,lh=1010,ch=1011,Vs=1012,nl=1013,Si=1014,Bn=1015,Gs=1016,il=1017,sl=1018,Ws=1020,hh=35902,uh=35899,dh=1021,fh=1022,pn=1023,As=1026,Xs=1027,ph=1028,rl=1029,mh=1030,al=1031,ol=1033,ha=33776,ua=33777,da=33778,fa=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,yl=37811,vl=37812,xl=37813,Ml=37814,bl=37815,Sl=37816,El=37817,wl=37818,Tl=37819,Al=37820,Cl=37821,Rl=36492,Il=36494,Pl=36495,Ll=36283,Dl=36284,Ul=36285,Nl=36286,Pr=2300,bo=2301,go=2302,Wc=2400,Xc=2401,qc=2402,Hd=3200,Vd=3201,gh=0,Gd=1,ei="",Ct="srgb",Bi="srgb-linear",Lr="linear",rt="srgb",Ni=7680,Yc=519,Wd=512,Xd=513,qd=514,_h=515,Yd=516,$d=517,jd=518,Zd=519,$c=35044,yh="300 es",wn=2e3,Dr=2001,Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,Ar=Math.PI/180,Cs=180/Math.PI;pa={DEG2RAD:Ar,RAD2DEG:Cs,generateUUID:$i,clamp:Ke,euclideanModulo:vh,mapLinear:em,inverseLerp:tm,lerp:Cr,damp:nm,pingpong:im,smoothstep:sm,smootherstep:rm,randInt:am,randFloat:om,randFloatSpread:lm,seededRandom:cm,degToRad:hm,radToDeg:um,isPowerOfTwo:dm,ceilPowerOfTwo:fm,floorPowerOfTwo:pm,setQuaternionFromProperEuler:mm,normalize:qt,denormalize:ws},me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let R=Math.sqrt(x),C=Math.atan2(R,p*T);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}let y=o*T;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vc=new k,Vu=new fn,je=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],x=s[4],y=s[7],R=s[2],C=s[5],D=s[8];return r[0]=a*_+o*T+l*R,r[3]=a*m+o*x+l*C,r[6]=a*p+o*y+l*D,r[1]=c*_+h*T+u*R,r[4]=c*m+h*x+u*C,r[7]=c*p+h*y+u*D,r[2]=d*_+f*T+g*R,r[5]=d*m+f*x+g*C,r[8]=d*p+f*y+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},xc=new je;Gu={};Wu=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xu=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt=gm();So=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Rs("canvas")),ds.width=e.width,ds.height=e.height;let s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},_m=0,Ps=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=$i(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mc(s[a].image)):r.push(Mc(s[a]))}else r=Mc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};ym=0,bc=new k,zt=class n extends Dn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=di,s=di,r=Zt,a=bi,o=pn,l=An,c=n.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=$i(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=oh;zt.DEFAULT_ANISOTROPY=1;dt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(f+1)/2,R=(p+1)/2,C=(h+d)/4,D=(u+_)/4,F=(g+m)/4;return x>y&&x>R?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=C/i,r=D/i):y>R?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=C/s,r=F/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=D/r,s=F/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eo=class extends Dn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new zt(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Eo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ur=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},wo=class extends zt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pi=class{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,bn):bn.fromBufferAttribute(r,a),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),ja.subVectors(this.max,br),fs.subVectors(e.a,br),ps.subVectors(e.b,br),ms.subVectors(e.c,br),ri.subVectors(ps,fs),ai.subVectors(ms,ps),Pi.subVectors(fs,ms);let t=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Pi.z,Pi.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Pi.z,0,-Pi.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Pi.y,Pi.x,0];return!Sc(t,fs,ps,ms,ja)||(t=[1,0,0,0,1,0,0,0,1],!Sc(t,fs,ps,ms,ja))?!1:(Za.crossVectors(ri,ai),t=[Za.x,Za.y,Za.z],Sc(t,fs,ps,ms,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wn=[new k,new k,new k,new k,new k,new k,new k,new k],bn=new k,$a=new pi,fs=new k,ps=new k,ms=new k,ri=new k,ai=new k,Pi=new k,br=new k,ja=new k,Za=new k,Li=new k;vm=new pi,Sr=new k,Ec=new k,Ls=class{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);let t=Sr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(Ec)),this.expandByPoint(Sr.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xn=new k,wc=new k,Ja=new k,oi=new k,Tc=new k,Ka=new k,Ac=new k,Ds=class{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){wc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(wc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ja),o=oi.dot(this.direction),l=-oi.dot(Ja),c=oi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wc).addScaledVector(Ja,d),f}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,s,r){Tc.subVectors(t,e),Ka.subVectors(i,e),Ac.crossVectors(Tc,Ka);let a=this.direction.dot(Ac),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,e);let l=o*this.direction.dot(Ka.crossVectors(oi,Ka));if(l<0)return null;let c=o*this.direction.dot(Tc.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(Ac);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xm,e,Mm)}lookAt(e,t,i){let s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(i,tn),li.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(i,tn)),li.normalize(),Qa.crossVectors(tn,li),s[0]=li.x,s[4]=Qa.x,s[8]=tn.x,s[1]=li.y,s[5]=Qa.y,s[9]=tn.y,s[2]=li.z,s[6]=Qa.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],x=i[7],y=i[11],R=i[15],C=s[0],D=s[4],F=s[8],S=s[12],M=s[1],L=s[5],V=s[9],q=s[13],z=s[2],X=s[6],A=s[10],I=s[14],N=s[3],$=s[7],ie=s[11],se=s[15];return r[0]=a*C+o*M+l*z+c*N,r[4]=a*D+o*L+l*X+c*$,r[8]=a*F+o*V+l*A+c*ie,r[12]=a*S+o*q+l*I+c*se,r[1]=h*C+u*M+d*z+f*N,r[5]=h*D+u*L+d*X+f*$,r[9]=h*F+u*V+d*A+f*ie,r[13]=h*S+u*q+d*I+f*se,r[2]=g*C+_*M+m*z+p*N,r[6]=g*D+_*L+m*X+p*$,r[10]=g*F+_*V+m*A+p*ie,r[14]=g*S+_*q+m*I+p*se,r[3]=T*C+x*M+y*z+R*N,r[7]=T*D+x*L+y*X+R*$,r[11]=T*F+x*V+y*A+R*ie,r[15]=T*S+x*q+y*I+R*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,R=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,C=t*T+i*x+s*y+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=T*D,e[1]=(_*d*r-u*m*r-_*s*f+i*m*f+u*s*p-i*d*p)*D,e[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*p+i*l*p)*D,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*D,e[4]=x*D,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*D,e[8]=y*D,e[9]=(g*u*r-h*_*r-g*i*f+t*_*f+h*i*p-t*u*p)*D,e[10]=(a*_*r-g*o*r+g*i*c-t*_*c-a*i*p+t*o*p)*D,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*D,e[12]=R*D,e[13]=(h*_*s-g*u*s+g*i*d-t*_*d-h*i*m+t*u*m)*D,e[14]=(g*o*s-a*_*s-g*i*l+t*_*l+a*i*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*D,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,T=l*c,x=l*h,y=l*u,R=i.x,C=i.y,D=i.z;return s[0]=(1-(_+p))*R,s[1]=(f+y)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-y)*C,s[5]=(1-(d+p))*C,s[6]=(m+T)*C,s[7]=0,s[8]=(g+x)*D,s[9]=(m-T)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=gs.set(s[0],s[1],s[2]).length(),a=gs.set(s[4],s[5],s[6]).length(),o=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=wn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===wn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Dr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=wn,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===wn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Dr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gs=new k,Sn=new Mt,xm=new k(0,0,0),Mm=new k(1,1,1),li=new k,Qa=new k,tn=new k,qu=new Mt,Yu=new fn,Tn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";Nr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bm=0,$u=new k,_s=new fn,qn=new Mt,eo=new k,Er=new k,Sm=new k,Em=new fn,ju=new k(1,0,0),Zu=new k(0,1,0),Ju=new k(0,0,1),Ku={type:"added"},wm={type:"removed"},ys={type:"childadded",child:null},Cc={type:"childremoved",child:null},Yt=class n extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new k,t=new Tn,i=new fn,s=new k(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new je}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?eo.copy(e):eo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Er,eo,this.up):qn.lookAt(eo,Er,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(qn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),Cc.child=e,this.dispatchEvent(Cc),Cc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Sm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Em,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Yt.DEFAULT_UP=new k(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;En=new k,Yn=new k,Rc=new k,$n=new k,vs=new k,xs=new k,Qu=new k,Ic=new k,Pc=new k,Lc=new k,Dc=new dt,Uc=new dt,Nc=new dt,ui=class n{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){En.subVectors(s,t),Yn.subVectors(i,t),Rc.subVectors(e,t);let a=En.dot(En),o=En.dot(Yn),l=En.dot(Rc),c=Yn.dot(Yn),h=Yn.dot(Rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Dc.setScalar(0),Uc.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(e,t),Uc.fromBufferAttribute(e,i),Nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Dc,r.x),a.addScaledVector(Uc,r.y),a.addScaledVector(Nc,r.z),a}static isFrontFacing(e,t,i,s){return En.subVectors(i,t),Yn.subVectors(e,t),En.cross(Yn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),En.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,i),xs.subVectors(r,i),Ic.subVectors(e,i);let l=vs.dot(Ic),c=xs.dot(Ic);if(l<=0&&c<=0)return t.copy(i);Pc.subVectors(e,s);let h=vs.dot(Pc),u=xs.dot(Pc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(vs,a);Lc.subVectors(e,r);let f=vs.dot(Lc),g=xs.dot(Lc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(xs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Qu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Qu,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(vs,a).addScaledVector(xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},to={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=vh(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Fc(a,r,e+1/3),this.g=Fc(a,r,e),this.b=Fc(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=Qd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return nt.workingToColorSpace(kt.copy(this),e),Math.round(Ke(kt.r*255,0,255))*65536+Math.round(Ke(kt.g*255,0,255))*256+Math.round(Ke(kt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(kt.copy(this),t);let i=kt.r,s=kt.g,r=kt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ct){nt.workingToColorSpace(kt.copy(this),e);let t=kt.r,i=kt.g,s=kt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(to);let i=Cr(ci.h,to.h,t),s=Cr(ci.s,to.s,t),r=Cr(ci.l,to.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new $e;$e.NAMES=Qd;Tm=0,mi=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=$i(),this.name="",this.type="Material",this.blending=Oi,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yo,this.blendDst=vo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yo&&(i.blendSrc=this.blendSrc),this.blendDst!==vo&&(i.blendDst=this.blendDst),this.blendEquation!==fi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jn=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},wt=new k,no=new me,Am=0,sn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Am++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ws(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),s=qt(s,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$c&&(e.usage=this.usage),e}},Fr=class extends sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Or=class extends sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}},mt=class extends sn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Cm=0,un=new Mt,Oc=new Yt,Ms=new k,nn=new pi,wr=new pi,Lt=new k,rn=class n extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?Or:Fr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(nn.min,wr.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,wr.max),nn.expandByPoint(Lt)):(nn.expandByPoint(wr.min),nn.expandByPoint(wr.max))}nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Lt.add(Ms)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new k,l[F]=new k;let c=new k,h=new k,u=new k,d=new me,f=new me,g=new me,_=new k,m=new k;function p(F,S,M){c.fromBufferAttribute(i,F),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[F].add(_),o[S].add(_),o[M].add(_),l[F].add(m),l[S].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,S=T.length;F<S;++F){let M=T[F],L=M.start,V=M.count;for(let q=L,z=L+V;q<z;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}let x=new k,y=new k,R=new k,C=new k;function D(F){R.fromBufferAttribute(s,F),C.copy(R);let S=o[F];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),y.crossVectors(C,S);let L=y.dot(l[F])<0?-1:1;a.setXYZW(F,x.x,x.y,x.z,L)}for(let F=0,S=T.length;F<S;++F){let M=T[F],L=M.start,V=M.count;for(let q=L,z=L+V;q<z;q+=3)D(e.getX(q+0)),D(e.getX(q+1)),D(e.getX(q+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new k,r=new k,a=new k,o=new k,l=new k,c=new k,h=new k,u=new k;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ed=new Mt,Di=new Ds,io=new Ls,td=new k,so=new k,ro=new k,ao=new k,kc=new k,oo=new k,nd=new k,lo=new k,ft=class extends Yt{constructor(e=new rn,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(kc.fromBufferAttribute(u,e),a?oo.addScaledVector(kc,h):oo.addScaledVector(kc.sub(t),h))}t.add(oo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Di.copy(e.ray).recast(e.near),!(io.containsPoint(Di.origin)===!1&&(Di.intersectSphere(io,td)===null||Di.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),Di.copy(e.ray).applyMatrix4(ed),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Di)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=x;y<R;y+=3){let C=o.getX(y),D=o.getX(y+1),F=o.getX(y+2);s=co(this,p,e,i,c,h,u,C,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);s=co(this,a,e,i,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=T,R=x;y<R;y+=3){let C=y,D=y+1,F=y+2;s=co(this,p,e,i,c,h,u,C,D,F),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let T=m,x=m+1,y=m+2;s=co(this,a,e,i,c,h,u,T,x,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};gi=class n extends rn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,m,p,T,x,y,R,C,D,F,S){let M=y/D,L=R/F,V=y/2,q=R/2,z=C/2,X=D+1,A=F+1,I=0,N=0,$=new k;for(let ie=0;ie<A;ie++){let se=ie*L-q;for(let Y=0;Y<X;Y++){let he=Y*M-V;$[_]=he*T,$[m]=se*x,$[p]=z,c.push($.x,$.y,$.z),$[_]=0,$[m]=0,$[p]=C>0?1:-1,h.push($.x,$.y,$.z),u.push(Y/D),u.push(1-ie/F),I+=1}}for(let ie=0;ie<F;ie++)for(let se=0;se<D;se++){let Y=d+se+X*ie,he=d+se+X*(ie+1),Me=d+(se+1)+X*(ie+1),Ce=d+(se+1)+X*ie;l.push(Y,he,Ce),l.push(he,Me,Ce),N+=6}o.addGroup(f,N,S),f+=N,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};ef={clone:ji,merge:Ht},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},kr=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hi=new k,id=new me,sd=new me,Bt=class extends kr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ar*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Ss=1,To=class extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(bs,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Bt(bs,Ss,e,t);r.layers=this.layers,this.add(r);let a=new Bt(bs,Ss,e,t);a.layers=this.layers,this.add(a);let o=new Bt(bs,Ss,e,t);o.layers=this.layers,this.add(o);let l=new Bt(bs,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Bt(bs,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Br=class extends zt{constructor(e=[],t=qi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ao=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Br(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new gi(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Kn});r.uniforms.tEquirect.value=t;let a=new ft(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Zt),new To(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ln=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dm={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ln;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},_i=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},zr=class extends zt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=jt,h=jt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bc=new k,Um=new k,Nm=new je,dn=class{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Bc.subVectors(i,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Bc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(Bc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Ls,Fm=new me(.5,.5),ho=new k,Ns=class{constructor(e=new dn,t=new dn,i=new dn,s=new dn,r=new dn,a=new dn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],T=r[12],x=r[13],y=r[14],R=r[15];if(s[0].setComponents(c-a,f-h,p-g,R-T).normalize(),s[1].setComponents(c+a,f+h,p+g,R+T).normalize(),s[2].setComponents(c+o,f+u,p+_,R+x).normalize(),s[3].setComponents(c-o,f-u,p-_,R-x).normalize(),i)s[4].setComponents(l,d,m,y).normalize(),s[5].setComponents(c-l,f-d,p-m,R-y).normalize();else if(s[4].setComponents(c-l,f-d,p-m,R-y).normalize(),t===wn)s[5].setComponents(c+l,f+d,p+m,R+y).normalize();else if(t===Dr)s[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);let t=Fm.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zi=class extends zt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hr=class extends zt{constructor(e,t,i=Si,s,r,a,o=jt,l=jt,c,h=As,u=1){if(h!==As&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vr=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Hi=class n extends rn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=i/2,p=0;T(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function T(){let y=new k,R=new k,C=0,D=(t-e)/i;for(let F=0;F<=r;F++){let S=[],M=F/r,L=M*(t-e)+e;for(let V=0;V<=s;V++){let q=V/s,z=q*l+o,X=Math.sin(z),A=Math.cos(z);R.x=L*X,R.y=-M*i+m,R.z=L*A,u.push(R.x,R.y,R.z),y.set(X,D,A).normalize(),d.push(y.x,y.y,y.z),f.push(q,1-M),S.push(g++)}_.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){let M=_[S][F],L=_[S+1][F],V=_[S+1][F+1],q=_[S][F+1];(e>0||S!==0)&&(h.push(M,L,q),C+=3),(t>0||S!==r-1)&&(h.push(L,V,q),C+=3)}c.addGroup(p,C,0),p+=C}function x(y){let R=g,C=new me,D=new k,F=0,S=y===!0?e:t,M=y===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let L=g;for(let V=0;V<=s;V++){let z=V/s*l+o,X=Math.cos(z),A=Math.sin(z);D.x=S*A,D.y=m*M,D.z=S*X,u.push(D.x,D.y,D.z),d.push(0,M,0),C.x=X*.5+.5,C.y=A*.5*M+.5,f.push(C.x,C.y),g++}for(let V=0;V<s;V++){let q=R+V,z=L+V;y===!0?h.push(z,z+1,q):h.push(z+1,z,q),F+=3}c.addGroup(p,F,y===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new k);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new k,s=[],r=[],a=[],o=new k,l=new Mt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ke(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Ke(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Fs=class extends on{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Co=class extends Fs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};uo=new k,zc=new bh,Hc=new bh,Vc=new bh,Os=class extends on{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new k){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),zc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Hc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Vc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(zc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Hc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Vc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(zc.calc(l),Hc.calc(l),Vc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new k().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Gr=class extends on{constructor(e=new me,t=new me,i=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends on{constructor(e=new k,t=new k,i=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ir(e,s.x,r.x,a.x,o.x),Ir(e,s.y,r.y,a.y,o.y),Ir(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wr=class extends on{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends on{constructor(e=new k,t=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new k){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends on{constructor(e=new me,t=new me,i=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new me){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends on{constructor(e=new k,t=new k,i=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new k){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Rr(e,s.x,r.x,a.x),Rr(e,s.y,r.y,a.y),Rr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(rd(o,l.x,c.x,h.x,u.x),rd(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},Po=Object.freeze({__proto__:null,ArcCurve:Co,CatmullRomCurve3:Os,CubicBezierCurve:Gr,CubicBezierCurve3:Ro,EllipseCurve:Fs,LineCurve:Wr,LineCurve3:Io,QuadraticBezierCurve:Xr,QuadraticBezierCurve3:qr,SplineCurve:Yr}),Lo=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Po[s.type]().fromJSON(s))}return this}},$r=class extends Lo{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Wr(this.currentPoint.clone(),new me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Xr(this.currentPoint.clone(),new me(e,t),new me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Gr(this.currentPoint.clone(),new me(e,t),new me(i,s),new me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Yr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Fs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ks=class extends $r{constructor(e){super(e),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new $r().fromJSON(s))}return this}};Jc=class{static triangulate(e,t,i=2){return Wm(e,t,i)}},Fi=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];od(e),ld(i,e);let a=e.length;t.forEach(od);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ld(i,t[l]);let o=Jc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};Kr=class n extends rn{constructor(e=new ks([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:og,x,y=!1,R,C,D,F;p&&(x=p.getSpacedPoints(h),y=!0,d=!1,R=p.computeFrenetFrames(h,!1),C=new k,D=new k,F=new k),d||(m=0,f=0,g=0,_=0);let S=o.extractPoints(c),M=S.shape,L=S.holes;if(!Fi.isClockWise(M)){M=M.reverse();for(let ae=0,Q=L.length;ae<Q;ae++){let te=L[ae];Fi.isClockWise(te)&&(L[ae]=te.reverse())}}function q(ae){let te=10000000000000001e-36,ne=ae[0];for(let ce=1;ce<=ae.length;ce++){let pe=ce%ae.length,be=ae[pe],qe=be.x-ne.x,Ie=be.y-ne.y,w=qe*qe+Ie*Ie,v=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(ne.x),Math.abs(ne.y)),W=te*v*v;if(w<=W){ae.splice(pe,1),ce--;continue}ne=be}}q(M),L.forEach(q);let z=L.length,X=M;for(let ae=0;ae<z;ae++){let Q=L[ae];M=M.concat(Q)}function A(ae,Q,te){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(Q,te)}let I=M.length;function N(ae,Q,te){let ne,ce,pe,be=ae.x-Q.x,qe=ae.y-Q.y,Ie=te.x-ae.x,w=te.y-ae.y,v=be*be+qe*qe,W=be*w-qe*Ie;if(Math.abs(W)>Number.EPSILON){let J=Math.sqrt(v),oe=Math.sqrt(Ie*Ie+w*w),ee=Q.x-qe/J,Re=Q.y+be/J,ve=te.x-w/oe,Le=te.y+Ie/oe,Ne=((ve-ee)*w-(Le-Re)*Ie)/(be*w-qe*Ie);ne=ee+be*Ne-ae.x,ce=Re+qe*Ne-ae.y;let ge=ne*ne+ce*ce;if(ge<=2)return new me(ne,ce);pe=Math.sqrt(ge/2)}else{let J=!1;be>Number.EPSILON?Ie>Number.EPSILON&&(J=!0):be<-Number.EPSILON?Ie<-Number.EPSILON&&(J=!0):Math.sign(qe)===Math.sign(w)&&(J=!0),J?(ne=-qe,ce=be,pe=Math.sqrt(v)):(ne=be,ce=qe,pe=Math.sqrt(v/2))}return new me(ne/pe,ce/pe)}let $=[];for(let ae=0,Q=X.length,te=Q-1,ne=ae+1;ae<Q;ae++,te++,ne++)te===Q&&(te=0),ne===Q&&(ne=0),$[ae]=N(X[ae],X[te],X[ne]);let ie=[],se,Y=$.concat();for(let ae=0,Q=z;ae<Q;ae++){let te=L[ae];se=[];for(let ne=0,ce=te.length,pe=ce-1,be=ne+1;ne<ce;ne++,pe++,be++)pe===ce&&(pe=0),be===ce&&(be=0),se[ne]=N(te[ne],te[pe],te[be]);ie.push(se),Y=Y.concat(se)}let he;if(m===0)he=Fi.triangulateShape(X,L);else{let ae=[],Q=[];for(let te=0;te<m;te++){let ne=te/m,ce=f*Math.cos(ne*Math.PI/2),pe=g*Math.sin(ne*Math.PI/2)+_;for(let be=0,qe=X.length;be<qe;be++){let Ie=A(X[be],$[be],pe);de(Ie.x,Ie.y,-ce),ne===0&&ae.push(Ie)}for(let be=0,qe=z;be<qe;be++){let Ie=L[be];se=ie[be];let w=[];for(let v=0,W=Ie.length;v<W;v++){let J=A(Ie[v],se[v],pe);de(J.x,J.y,-ce),ne===0&&w.push(J)}ne===0&&Q.push(w)}}he=Fi.triangulateShape(ae,Q)}let Me=he.length,Ce=g+_;for(let ae=0;ae<I;ae++){let Q=d?A(M[ae],Y[ae],Ce):M[ae];y?(D.copy(R.normals[0]).multiplyScalar(Q.x),C.copy(R.binormals[0]).multiplyScalar(Q.y),F.copy(x[0]).add(D).add(C),de(F.x,F.y,F.z)):de(Q.x,Q.y,0)}for(let ae=1;ae<=h;ae++)for(let Q=0;Q<I;Q++){let te=d?A(M[Q],Y[Q],Ce):M[Q];y?(D.copy(R.normals[ae]).multiplyScalar(te.x),C.copy(R.binormals[ae]).multiplyScalar(te.y),F.copy(x[ae]).add(D).add(C),de(F.x,F.y,F.z)):de(te.x,te.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let Q=ae/m,te=f*Math.cos(Q*Math.PI/2),ne=g*Math.sin(Q*Math.PI/2)+_;for(let ce=0,pe=X.length;ce<pe;ce++){let be=A(X[ce],$[ce],ne);de(be.x,be.y,u+te)}for(let ce=0,pe=L.length;ce<pe;ce++){let be=L[ce];se=ie[ce];for(let qe=0,Ie=be.length;qe<Ie;qe++){let w=A(be[qe],se[qe],ne);y?de(w.x,w.y+x[h-1].y,x[h-1].x+te):de(w.x,w.y,u+te)}}}E(),U();function E(){let ae=s.length/3;if(d){let Q=0,te=I*Q;for(let ne=0;ne<Me;ne++){let ce=he[ne];fe(ce[2]+te,ce[1]+te,ce[0]+te)}Q=h+m*2,te=I*Q;for(let ne=0;ne<Me;ne++){let ce=he[ne];fe(ce[0]+te,ce[1]+te,ce[2]+te)}}else{for(let Q=0;Q<Me;Q++){let te=he[Q];fe(te[2],te[1],te[0])}for(let Q=0;Q<Me;Q++){let te=he[Q];fe(te[0]+I*h,te[1]+I*h,te[2]+I*h)}}i.addGroup(ae,s.length/3-ae,0)}function U(){let ae=s.length/3,Q=0;K(X,Q),Q+=X.length;for(let te=0,ne=L.length;te<ne;te++){let ce=L[te];K(ce,Q),Q+=ce.length}i.addGroup(ae,s.length/3-ae,1)}function K(ae,Q){let te=ae.length;for(;--te>=0;){let ne=te,ce=te-1;ce<0&&(ce=ae.length-1);for(let pe=0,be=h+m*2;pe<be;pe++){let qe=I*pe,Ie=I*(pe+1),w=Q+ne+qe,v=Q+ce+qe,W=Q+ce+Ie,J=Q+ne+Ie;le(w,v,W,J)}}}function de(ae,Q,te){l.push(ae),l.push(Q),l.push(te)}function fe(ae,Q,te){We(ae),We(Q),We(te);let ne=s.length/3,ce=T.generateTopUV(i,s,ne-3,ne-2,ne-1);P(ce[0]),P(ce[1]),P(ce[2])}function le(ae,Q,te,ne){We(ae),We(Q),We(ne),We(Q),We(te),We(ne);let ce=s.length/3,pe=T.generateSideWallUV(i,s,ce-6,ce-3,ce-2,ce-1);P(pe[0]),P(pe[1]),P(pe[3]),P(pe[1]),P(pe[2]),P(pe[3])}function We(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function P(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return lg(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Po[s.type]().fromJSON(s)),new n(i,e.options)}},og={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new me(r,a),new me(o,l),new me(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new me(a,1-l),new me(c,1-u),new me(d,1-g),new me(_,1-p)]:[new me(o,1-l),new me(h,1-u),new me(f,1-g),new me(m,1-p)]}};Nn=class n extends rn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let T=p*d-a;for(let x=0;x<c;x++){let y=x*u-r;g.push(y,-T,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let x=T+c*p,y=T+c*(p+1),R=T+1+c*(p+1),C=T+1+c*p;f.push(x,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Qr=class n extends rn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new k,d=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let T=[],x=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){let C=R/t;u.x=-e*Math.cos(s+C*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+C*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(C+y,1-x),T.push(c++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<t;T++){let x=h[p][T+1],y=h[p][T],R=h[p+1][T],C=h[p+1][T+1];(p!==0||a>0)&&f.push(x,y,C),(p!==i-1||l<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},ea=class n extends rn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new k,u=new k,d=new k;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(_,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ta=class n extends rn{constructor(e=new qr(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new k,l=new k,c=new me,h=new k,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),T(),p()}function m(x){h=e.getPointAt(x/t,h);let y=a.normals[x],R=a.binormals[x];for(let C=0;C<=s;C++){let D=C/s*Math.PI*2,F=Math.sin(D),S=-Math.cos(D);l.x=S*y.x+F*R.x,l.y=S*y.y+F*R.y,l.z=S*y.z+F*R.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=s;y++){let R=(s+1)*(x-1)+(y-1),C=(s+1)*x+(y-1),D=(s+1)*x+y,F=(s+1)*(x-1)+y;g.push(R,C,F),g.push(C,D,F)}}function T(){for(let x=0;x<=t;x++)for(let y=0;y<=s;y++)c.x=x/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Po[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Fn=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},na=class extends Fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Do=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Uo=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Gi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},No=class extends Gi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wc,endingEnd:Wc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xc:r=e,o=2*t-i;break;case qc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xc:a=e,l=2*i-t;break;case qc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,T=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+T*a[c+R]+x*a[l+R]+y*a[u+R];return r}},Fo=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Oo=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=mo(t,this.TimeBufferType),this.values=mo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:mo(e.times,Array),values:mo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pr:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pr;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=bo;yi=class extends ln{constructor(e,t,i){super(e,t,i)}};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=Pr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;ko=class extends ln{constructor(e,t,i,s){super(e,t,i,s)}};ko.prototype.ValueTypeName="color";Bo=class extends ln{constructor(e,t,i,s){super(e,t,i,s)}};Bo.prototype.ValueTypeName="number";zo=class extends Gi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ia=class extends ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}};ia.prototype.ValueTypeName="quaternion";ia.prototype.InterpolantFactoryMethodSmooth=void 0;vi=class extends ln{constructor(e,t,i){super(e,t,i)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Pr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;Ho=class extends ln{constructor(e,t,i,s){super(e,t,i,s)}};Ho.prototype.ValueTypeName="vector";_o={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},Vo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},af=new Vo,zs=class{constructor(e){this.manager=e!==void 0?e:af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zs.DEFAULT_MATERIAL_NAME="__DEFAULT";Es=new WeakMap,Go=class extends zs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=_o.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Es.get(a);u===void 0&&(u=[],Es.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=Rs("img");function l(){h(),t&&t(this);let u=Es.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Es.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),_o.remove(`image:${e}`);let d=Es.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}Es.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),_o.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}},sa=class extends zs{constructor(e){super(e)}load(e,t,i,s){let r=new zt,a=new Go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},ra=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gc=new Mt,cd=new k,hd=new k,Kc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(cd),hd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hd),t.updateMatrixWorld(),Gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wi=class extends kr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Qc=class extends Kc{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xi=class extends ra{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Qc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},aa=class extends ra{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Wo=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Sh="\\[\\]\\.:\\/",hg=new RegExp("["+Sh+"]","g"),Eh="[^"+Sh+"]",ug="[^"+Sh.replace("\\.","")+"]",dg=/((?:WC+[\/:])*)/.source.replace("WC",Eh),fg=/(WCOD+)?/.source.replace("WCOD",ug),pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Eh),mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Eh),gg=new RegExp("^"+dg+fg+pg+mg+"$"),_g=["material","materials","bones","map"],eh=class{constructor(e,t,i){let s=i||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ut=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hg,"")}static parseTrackName(e){let t=gg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_g.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=eh;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];$x=new Float32Array(1),Hs=class{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},oa=class extends Dn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180")});function If(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function xg(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function ty(n,e,t,i,s,r,a){let o=new $e(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1,R=g(x);R===null?p(o,l):R&&R.isColor&&(p(R,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){let R=g(y);R&&(R.isCubeTexture||R.mapping===la)?(h===void 0&&(h=new ft(new gi(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ji(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Zi.copy(y.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ey.makeRotationFromEuler(Zi)),h.material.toneMapped=nt.getTransfer(R.colorSpace)!==rt,(u!==R||d!==R.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new ft(new Nn(2,2),new an({name:"BackgroundMaterial",uniforms:ji(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=nt.getTransfer(R.colorSpace)!==rt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(Fl,Mh(n)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,y,a)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(o,l)},render:_,addToRenderList:m,dispose:T}}function ny(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(M,L,V,q,z){let X=!1,A=u(q,V,L);r!==A&&(r=A,c(r.object)),X=f(M,q,V,z),X&&g(M,q,V,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(M,L,V,q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function u(M,L,V){let q=V.wireframe===!0,z=i[M.id];z===void 0&&(z={},i[M.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let A=X[q];return A===void 0&&(A=d(l()),X[q]=A),A}function d(M){let L=[],V=[],q=[];for(let z=0;z<t;z++)L[z]=0,V[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:q,object:M,attributes:{},index:null}}function f(M,L,V,q){let z=r.attributes,X=L.attributes,A=0,I=V.getAttributes();for(let N in I)if(I[N].location>=0){let ie=z[N],se=X[N];if(se===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(se=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(se=M.instanceColor)),ie===void 0||ie.attribute!==se||se&&ie.data!==se.data)return!0;A++}return r.attributesNum!==A||r.index!==q}function g(M,L,V,q){let z={},X=L.attributes,A=0,I=V.getAttributes();for(let N in I)if(I[N].location>=0){let ie=X[N];ie===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let se={};se.attribute=ie,ie&&ie.data&&(se.data=ie.data),z[N]=se,A++}r.attributes=z,r.attributesNum=A,r.index=q}function _(){let M=r.newAttributes;for(let L=0,V=M.length;L<V;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){let V=r.newAttributes,q=r.enabledAttributes,z=r.attributeDivisors;V[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),z[M]!==L&&(n.vertexAttribDivisor(M,L),z[M]=L)}function T(){let M=r.newAttributes,L=r.enabledAttributes;for(let V=0,q=L.length;V<q;V++)L[V]!==M[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function x(M,L,V,q,z,X,A){A===!0?n.vertexAttribIPointer(M,L,V,z,X):n.vertexAttribPointer(M,L,V,q,z,X)}function y(M,L,V,q){_();let z=q.attributes,X=V.getAttributes(),A=L.defaultAttributeValues;for(let I in X){let N=X[I];if(N.location>=0){let $=z[I];if($===void 0&&(I==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),I==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let ie=$.normalized,se=$.itemSize,Y=e.get($);if(Y===void 0)continue;let he=Y.buffer,Me=Y.type,Ce=Y.bytesPerElement,E=Me===n.INT||Me===n.UNSIGNED_INT||$.gpuType===nl;if($.isInterleavedBufferAttribute){let U=$.data,K=U.stride,de=$.offset;if(U.isInstancedInterleavedBuffer){for(let fe=0;fe<N.locationSize;fe++)p(N.location+fe,U.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);n.bindBuffer(n.ARRAY_BUFFER,he);for(let fe=0;fe<N.locationSize;fe++)x(N.location+fe,se/N.locationSize,Me,ie,K*Ce,(de+se/N.locationSize*fe)*Ce,E)}else{if($.isInstancedBufferAttribute){for(let U=0;U<N.locationSize;U++)p(N.location+U,$.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let U=0;U<N.locationSize;U++)m(N.location+U);n.bindBuffer(n.ARRAY_BUFFER,he);for(let U=0;U<N.locationSize;U++)x(N.location+U,se/N.locationSize,Me,ie,se*Ce,se/N.locationSize*U*Ce,E)}}else if(A!==void 0){let ie=A[I];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(N.location,ie);break;case 3:n.vertexAttrib3fv(N.location,ie);break;case 4:n.vertexAttrib4fv(N.location,ie);break;default:n.vertexAttrib1fv(N.location,ie)}}}}T()}function R(){F();for(let M in i){let L=i[M];for(let V in L){let q=L[V];for(let z in q)h(q[z].object),delete q[z];delete L[V]}delete i[M]}}function C(M){if(i[M.id]===void 0)return;let L=i[M.id];for(let V in L){let q=L[V];for(let z in q)h(q[z].object),delete q[z];delete L[V]}delete i[M.id]}function D(M){for(let L in i){let V=i[L];if(V[M.id]===void 0)continue;let q=V[M.id];for(let z in q)h(q[z].object),delete q[z];delete V[M.id]}}function F(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function iy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==pn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let F=D===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==An&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Bn&&!F)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function ry(n){let e=this,t=null,i=0,s=!1,r=!1,a=new dn,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let T=r?0:i,x=T*4,y=p.clippingState||null;l.value=y,y=h(g,d,x,f);for(let R=0;R!==x;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=f;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(T,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ay(n){let e=new WeakMap;function t(a,o){return o===Qo?a.mapping=qi:o===el&&(a.mapping=Yi),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qo||o===el)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ao(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}function ly(n){let e=[],t=[],i=[],s=n,r=n-Ys+1+of.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Ys?l=of[a-n+Ys-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*f),x=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){let D=C%3*2/3-1,F=C>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];T.set(S,_*g*C),x.set(d,m*g*C);let M=[C,C,C,C,C,C];y.set(M,p*g*C)}let R=new rn;R.setAttribute("position",new sn(T,_)),R.setAttribute("uv",new sn(x,m)),R.setAttribute("faceIndex",new sn(y,p)),e.push(R),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hf(n,e,t){let i=new Un(n,e,t);return i.texture.mapping=la,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ol(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function cy(n,e,t){let i=new Float32Array(Qi),s=new k(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function uf(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function df(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Hh(){return`

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
	`}function hy(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Qo||l===el,h=l===qi||l===Yi;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new js(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new js(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function uy(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Is("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function dy(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let T=f.array;_=f.version;for(let x=0,y=T.length;x<y;x+=3){let R=T[x+0],C=T[x+1],D=T[x+2];d.push(R,C,C,D,D,R)}}else if(g!==void 0){let T=g.array;_=g.version;for(let x=0,y=T.length/3-1;x<y;x+=3){let R=x+0,C=x+1,D=x+2;d.push(R,C,C,D,D,R)}}else return;let m=new(xh(d)?Or:Fr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function fy(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function py(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function my(n,e,t){let i=new WeakMap,s=new dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let S=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],x=0;f===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let y=o.attributes.position.count*x,R=1;y>e.maxTextureSize&&(R=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let C=new Float32Array(y*R*4*u),D=new Ur(C,y,R,u);D.type=Bn,D.needsUpdate=!0;let F=x*4;for(let M=0;M<u;M++){let L=m[M],V=p[M],q=T[M],z=y*R*4*M;for(let X=0;X<L.count;X++){let A=X*F;f===!0&&(s.fromBufferAttribute(L,X),C[z+A+0]=s.x,C[z+A+1]=s.y,C[z+A+2]=s.z,C[z+A+3]=0),g===!0&&(s.fromBufferAttribute(V,X),C[z+A+4]=s.x,C[z+A+5]=s.y,C[z+A+6]=s.z,C[z+A+7]=0),_===!0&&(s.fromBufferAttribute(q,X),C[z+A+8]=s.x,C[z+A+9]=s.y,C[z+A+10]=s.z,C[z+A+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new me(y,R)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function gy(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}function Js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=pf[s];if(r===void 0&&(r=new Float32Array(s),pf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Rt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Bl(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _y(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function vy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function xy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function My(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;yf.set(i),n.uniformMatrix2fv(this.addr,!1,yf),It(t,i)}}function by(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),It(t,i)}}function Sy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Rt(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),It(t,i)}}function Ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function Cy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ry(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function Iy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function Py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function Ly(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ff.compareFunction=_h,r=ff):r=Pf,t.setTexture2D(e||r,s)}function Dy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function Uy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Uf,s)}function Ny(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lf,s)}function Fy(n){switch(n){case 5126:return _y;case 35664:return yy;case 35665:return vy;case 35666:return xy;case 35674:return My;case 35675:return by;case 35676:return Sy;case 5124:case 35670:return Ey;case 35667:case 35671:return wy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ay;case 5125:return Cy;case 36294:return Ry;case 36295:return Iy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Ny}}function Oy(n,e){n.uniform1fv(this.addr,e)}function ky(n,e){let t=Js(e,this.size,2);n.uniform2fv(this.addr,t)}function By(n,e){let t=Js(e,this.size,3);n.uniform3fv(this.addr,t)}function zy(n,e){let t=Js(e,this.size,4);n.uniform4fv(this.addr,t)}function Hy(n,e){let t=Js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vy(n,e){let t=Js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gy(n,e){let t=Js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wy(n,e){n.uniform1iv(this.addr,e)}function Xy(n,e){n.uniform2iv(this.addr,e)}function qy(n,e){n.uniform3iv(this.addr,e)}function Yy(n,e){n.uniform4iv(this.addr,e)}function $y(n,e){n.uniform1uiv(this.addr,e)}function jy(n,e){n.uniform2uiv(this.addr,e)}function Zy(n,e){n.uniform3uiv(this.addr,e)}function Jy(n,e){n.uniform4uiv(this.addr,e)}function Ky(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Pf,r[a])}function Qy(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Df,r[a])}function ev(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Uf,r[a])}function tv(n,e,t){let i=this.cache,s=e.length,r=Bl(t,s);Rt(i,r)||(n.uniform1iv(this.addr,r),It(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lf,r[a])}function nv(n){switch(n){case 5126:return Oy;case 35664:return ky;case 35665:return By;case 35666:return zy;case 35674:return Hy;case 35675:return Vy;case 35676:return Gy;case 5124:case 35670:return Wy;case 35667:case 35671:return Xy;case 35668:case 35672:return qy;case 35669:case 35673:return Yy;case 5125:return $y;case 36294:return jy;case 36295:return Zy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function vf(n,e){n.seq.push(e),n.map[e.id]=e}function iv(n,e,t){let i=n.name,s=i.length;for(Lh.lastIndex=0;;){let r=Lh.exec(i),a=Lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vf(t,c===void 0?new Dh(o,n,e):new Uh(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Nh(o),vf(t,u)),t=u}}}function xf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}function av(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ov(n){nt._getMatrix(Mf,nt.workingColorSpace,n);let e=`mat3( ${Mf.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Lr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+av(n.getShaderSource(e),o)}else return r}function lv(n,e){let t=ov(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cv(n,e){let t;switch(e){case Ud:t="Linear";break;case Nd:t="Reinhard";break;case Fd:t="Cineon";break;case Ko:t="ACESFilmic";break;case kd:t="AgX";break;case Bd:t="Neutral";break;case Od:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function hv(){nt.getLuminanceCoefficients(kl);let n=kl.x.toFixed(4),e=kl.y.toFixed(4),t=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function dv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ma(n){return n!==""}function Sf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Fh(n){return n.replace(pv,gv)}function gv(n,e){let t=Qe[e];if(t===void 0){let i=mv.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fh(t)}function wf(n){return n.replace(_v,yv)}function yv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function vv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function xv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qi:case Yi:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mv(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Yi&&(e="ENVMAP_MODE_REFRACTION"),e}function bv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ah:e="ENVMAP_BLENDING_MULTIPLY";break;case Ld:e="ENVMAP_BLENDING_MIX";break;case Dd:e="ENVMAP_BLENDING_ADD";break}return e}function Sv(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ev(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=vv(t),c=xv(t),h=Mv(t),u=bv(t),d=Sv(t),f=uv(t),g=dv(r),_=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),p.length>0&&(p+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Qn?cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,lv("linearToOutputTexel",t.outputColorSpace),hv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Fh(a),a=Sf(a,t),a=Ef(a,t),o=Fh(o),o=Sf(o,t),o=Ef(o,t),a=wf(a),o=wf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=T+m+a,y=T+p+o,R=xf(s,s.VERTEX_SHADER,x),C=xf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,R),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(L){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(_)||"",q=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(C)||"",X=V.trim(),A=q.trim(),I=z.trim(),N=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,C);else{let ie=bf(s,R,"vertex"),se=bf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ie+`
`+se)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(A===""||I==="")&&($=!1);$&&(L.diagnostics={runnable:N,programLog:X,vertexShader:{log:A,prefix:m},fragmentShader:{log:I,prefix:p}})}s.deleteShader(R),s.deleteShader(C),F=new $s(s,_),S=fv(s,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,sv)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=C,this}function Tv(n,e,t,i,s,r,a){let o=new Nr,l=new Oh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,V,q){let z=V.fog,X=q.geometry,A=S.isMeshStandardMaterial?V.environment:null,I=(S.isMeshStandardMaterial?t:e).get(S.envMap||A),N=I&&I.mapping===la?I.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ie=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,se=ie!==void 0?ie.length:0,Y=0;X.morphAttributes.position!==void 0&&(Y=1),X.morphAttributes.normal!==void 0&&(Y=2),X.morphAttributes.color!==void 0&&(Y=3);let he,Me,Ce,E;if($){let st=zn[$];he=st.vertexShader,Me=st.fragmentShader}else he=S.vertexShader,Me=S.fragmentShader,l.update(S),Ce=l.getVertexShaderID(S),E=l.getFragmentShaderID(S);let U=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),de=q.isInstancedMesh===!0,fe=q.isBatchedMesh===!0,le=!!S.map,We=!!S.matcap,P=!!I,ae=!!S.aoMap,Q=!!S.lightMap,te=!!S.bumpMap,ne=!!S.normalMap,ce=!!S.displacementMap,pe=!!S.emissiveMap,be=!!S.metalnessMap,qe=!!S.roughnessMap,Ie=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,W=S.iridescence>0,J=S.sheen>0,oe=S.transmission>0,ee=Ie&&!!S.anisotropyMap,Re=w&&!!S.clearcoatMap,ve=w&&!!S.clearcoatNormalMap,Le=w&&!!S.clearcoatRoughnessMap,Ne=W&&!!S.iridescenceMap,ge=W&&!!S.iridescenceThicknessMap,Ae=J&&!!S.sheenColorMap,Ge=J&&!!S.sheenRoughnessMap,Oe=!!S.specularMap,we=!!S.specularColorMap,Je=!!S.specularIntensityMap,B=oe&&!!S.transmissionMap,xe=oe&&!!S.thicknessMap,Se=!!S.gradientMap,De=!!S.alphaMap,_e=S.alphaTest>0,re=!!S.alphaHash,Fe=!!S.extensions,Ye=Qn;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ye=n.toneMapping);let ct={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:he,fragmentShader:Me,defines:S.defines,customVertexShaderID:Ce,customFragmentShaderID:E,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:fe,batchingColor:fe&&q._colorsTexture!==null,instancing:de,instancingColor:de&&q.instanceColor!==null,instancingMorph:de&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Bi,alphaToCoverage:!!S.alphaToCoverage,map:le,matcap:We,envMap:P,envMapMode:P&&I.mapping,envMapCubeUVHeight:N,aoMap:ae,lightMap:Q,bumpMap:te,normalMap:ne,displacementMap:d&&ce,emissiveMap:pe,normalMapObjectSpace:ne&&S.normalMapType===Gd,normalMapTangentSpace:ne&&S.normalMapType===gh,metalnessMap:be,roughnessMap:qe,anisotropy:Ie,anisotropyMap:ee,clearcoat:w,clearcoatMap:Re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Le,dispersion:v,iridescence:W,iridescenceMap:Ne,iridescenceThicknessMap:ge,sheen:J,sheenColorMap:Ae,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:we,specularIntensityMap:Je,transmission:oe,transmissionMap:B,thicknessMap:xe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===Oi&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:_e,alphaHash:re,combine:S.combine,mapUv:le&&_(S.map.channel),aoMapUv:ae&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:te&&_(S.bumpMap.channel),normalMapUv:ne&&_(S.normalMap.channel),displacementMapUv:ce&&_(S.displacementMap.channel),emissiveMapUv:pe&&_(S.emissiveMap.channel),metalnessMapUv:be&&_(S.metalnessMap.channel),roughnessMapUv:qe&&_(S.roughnessMap.channel),anisotropyMapUv:ee&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ve&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(S.sheenRoughnessMap.channel),specularMapUv:Oe&&_(S.specularMap.channel),specularColorMapUv:we&&_(S.specularColorMap.channel),specularIntensityMapUv:Je&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:xe&&_(S.thicknessMap.channel),alphaMapUv:De&&_(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ne||Ie),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!X.attributes.uv&&(le||De),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:le&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:pe&&S.emissiveMap.isVideoTexture===!0&&nt.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===kn,flipSided:S.side===Nt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(M,S),x(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){let M=g[S.type],L;if(M){let V=zn[M];L=ef.clone(V.uniforms)}else L=S.uniforms;return L}function R(S,M){let L;for(let V=0,q=h.length;V<q;V++){let z=h[V];if(z.cacheKey===M){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Ev(n,M,S,r),h.push(L)),L}function C(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function D(S){l.remove(S)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:D,programs:h,dispose:F}}function Av(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Cv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Cv),i.length>1&&i.sort(d||Af),s.length>1&&s.sort(d||Af)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Rv(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Cf,n.set(i,[a])):s>=r.length?(a=new Cf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Iv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Pv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}function Dv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){let e=new Iv,t=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);let s=new k,r=new Mt,a=new Mt;function o(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,T=0,x=0,y=0,R=0,C=0,D=0;c.sort(Dv);for(let S=0,M=c.length;S<M;S++){let L=c[S],V=L.color,q=L.intensity,z=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=V.r*q,u+=V.g*q,d+=V.b*q;else if(L.isLightProbe){for(let A=0;A<9;A++)i.probe[A].addScaledVector(L.sh.coefficients[A],q);D++}else if(L.isDirectionalLight){let A=e.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let I=L.shadow,N=t.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.directionalShadow[f]=N,i.directionalShadowMap[f]=X,i.directionalShadowMatrix[f]=L.shadow.matrix,T++}i.directional[f]=A,f++}else if(L.isSpotLight){let A=e.get(L);A.position.setFromMatrixPosition(L.matrixWorld),A.color.copy(V).multiplyScalar(q),A.distance=z,A.coneCos=Math.cos(L.angle),A.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),A.decay=L.decay,i.spot[_]=A;let I=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,I.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[_]=I.matrix,L.castShadow){let N=t.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=X,y++}_++}else if(L.isRectAreaLight){let A=e.get(L);A.color.copy(V).multiplyScalar(q),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=A,m++}else if(L.isPointLight){let A=e.get(L);if(A.color.copy(L.color).multiplyScalar(L.intensity),A.distance=L.distance,A.decay=L.decay,L.castShadow){let I=L.shadow,N=t.get(L);N.shadowIntensity=I.intensity,N.shadowBias=I.bias,N.shadowNormalBias=I.normalBias,N.shadowRadius=I.radius,N.shadowMapSize=I.mapSize,N.shadowCameraNear=I.camera.near,N.shadowCameraFar=I.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=X,i.pointShadowMatrix[g]=L.shadow.matrix,x++}i.point[g]=A,g++}else if(L.isHemisphereLight){let A=e.get(L);A.skyColor.copy(L.color).multiplyScalar(q),A.groundColor.copy(L.groundColor).multiplyScalar(q),i.hemi[p]=A,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let F=i.hash;(F.directionalLength!==f||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==T||F.numPointShadows!==x||F.numSpotShadows!==y||F.numSpotMaps!==R||F.numLightProbes!==D)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=D,F.directionalLength=f,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=T,F.numPointShadows=x,F.numSpotShadows=y,F.numSpotMaps=R,F.numLightProbes=D,i.version=Lv++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let x=c[p];if(x.isDirectionalLight){let y=i.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(x.isSpotLight){let y=i.spot[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let y=i.point[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let y=i.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Rf(n){let e=new Uv(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Nv(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rf(n),e.set(s,[o])):r>=a.length?(o=new Rf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function kv(n,e,t){let i=new Ns,s=new me,r=new me,a=new dt,o=new Do({depthPacking:Vd}),l=new Uo,c={},h=t.maxTextureSize,u={[Zn]:Nt,[Nt]:Zn,[kn]:kn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let p=this.type;this.render=function(C,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let S=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Kn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let q=p!==On&&this.type===On,z=p===On&&this.type!==On;for(let X=0,A=C.length;X<A;X++){let I=C[X],N=I.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);let $=N.getFrameExtents();if(s.multiply($),r.copy(N.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,N.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||q===!0||z===!0){let se=this.type!==On?{minFilter:jt,magFilter:jt}:{};N.map!==null&&N.map.dispose(),N.map=new Un(s.x,s.y,se),N.map.texture.name=I.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let ie=N.getViewportCount();for(let se=0;se<ie;se++){let Y=N.getViewport(se);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),V.viewport(a),N.updateMatrices(I,se),i=N.getFrustum(),y(D,F,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===On&&T(N,F),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,L)};function T(C,D){let F=e.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Un(s.x,s.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,F,d,_,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,F,f,_,null)}function x(C,D,F,S){let M=null,L=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=F.isPointLight===!0?l:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=M.uuid,q=D.uuid,z=c[V];z===void 0&&(z={},c[V]=z);let X=z[q];X===void 0&&(X=M.clone(),z[q]=X,D.addEventListener("dispose",R)),M=X}if(M.visible=D.visible,M.wireframe=D.wireframe,S===On?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=n.properties.get(M);V.light=F}return M}function y(C,D,F,S,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===On)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let q=e.update(C),z=C.material;if(Array.isArray(z)){let X=q.groups;for(let A=0,I=X.length;A<I;A++){let N=X[A],$=z[N.materialIndex];if($&&$.visible){let ie=x(C,$,S,M);C.onBeforeShadow(n,C,D,F,q,ie,N),n.renderBufferDirect(F,null,q,ie,C,N),C.onAfterShadow(n,C,D,F,q,ie,N)}}}else if(z.visible){let X=x(C,z,S,M);C.onBeforeShadow(n,C,D,F,q,X,null),n.renderBufferDirect(F,null,q,X,C,null),C.onAfterShadow(n,C,D,F,q,X,null)}}let V=C.children;for(let q=0,z=V.length;q<z;q++)y(V[q],D,F,S,M)}function R(C){C.target.removeEventListener("dispose",R);for(let F in c){let S=c[F],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function zv(n,e){function t(){let B=!1,xe=new dt,Se=null,De=new dt(0,0,0,0);return{setMask:function(_e){Se!==_e&&!B&&(n.colorMask(_e,_e,_e,_e),Se=_e)},setLocked:function(_e){B=_e},setClear:function(_e,re,Fe,Ye,ct){ct===!0&&(_e*=Ye,re*=Ye,Fe*=Ye),xe.set(_e,re,Fe,Ye),De.equals(xe)===!1&&(n.clearColor(_e,re,Fe,Ye),De.copy(xe))},reset:function(){B=!1,Se=null,De.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,Se=null,De=null,_e=null;return{setReversed:function(re){if(xe!==re){let Fe=e.get("EXT_clip_control");re?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=re;let Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return xe},setTest:function(re){re?U(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(re){Se!==re&&!B&&(n.depthMask(re),Se=re)},setFunc:function(re){if(xe&&(re=Bv[re]),De!==re){switch(re){case Xo:n.depthFunc(n.NEVER);break;case qo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case ki:n.depthFunc(n.LEQUAL);break;case $o:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=re}},setLocked:function(re){B=re},setClear:function(re){_e!==re&&(xe&&(re=1-re),n.clearDepth(re),_e=re)},reset:function(){B=!1,Se=null,De=null,_e=null,xe=!1}}}function s(){let B=!1,xe=null,Se=null,De=null,_e=null,re=null,Fe=null,Ye=null,ct=null;return{setTest:function(st){B||(st?U(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(st){xe!==st&&!B&&(n.stencilMask(st),xe=st)},setFunc:function(st,Gn,Pn){(Se!==st||De!==Gn||_e!==Pn)&&(n.stencilFunc(st,Gn,Pn),Se=st,De=Gn,_e=Pn)},setOp:function(st,Gn,Pn){(re!==st||Fe!==Gn||Ye!==Pn)&&(n.stencilOp(st,Gn,Pn),re=st,Fe=Gn,Ye=Pn)},setLocked:function(st){B=st},setClear:function(st){ct!==st&&(n.clearStencil(st),ct=st)},reset:function(){B=!1,xe=null,Se=null,De=null,_e=null,re=null,Fe=null,Ye=null,ct=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,R=null,C=null,D=new $e(0,0,0),F=0,S=!1,M=null,L=null,V=null,q=null,z=null,X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,I=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),A=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),A=I>=2);let $=null,ie={},se=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),he=new dt().fromArray(se),Me=new dt().fromArray(Y);function Ce(B,xe,Se,De){let _e=new Uint8Array(4),re=n.createTexture();n.bindTexture(B,re),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<Se;Fe++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(xe,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(xe+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return re}let E={};E[n.TEXTURE_2D]=Ce(n.TEXTURE_2D,n.TEXTURE_2D,1),E[n.TEXTURE_CUBE_MAP]=Ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),E[n.TEXTURE_2D_ARRAY]=Ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),E[n.TEXTURE_3D]=Ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),U(n.DEPTH_TEST),a.setFunc(ki),te(!1),ne(th),U(n.CULL_FACE),ae(Kn);function U(B){h[B]!==!0&&(n.enable(B),h[B]=!0)}function K(B){h[B]!==!1&&(n.disable(B),h[B]=!1)}function de(B,xe){return u[B]!==xe?(n.bindFramebuffer(B,xe),u[B]=xe,B===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=xe),B===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=xe),!0):!1}function fe(B,xe){let Se=f,De=!1;if(B){Se=d.get(xe),Se===void 0&&(Se=[],d.set(xe,Se));let _e=B.textures;if(Se.length!==_e.length||Se[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Fe=_e.length;re<Fe;re++)Se[re]=n.COLOR_ATTACHMENT0+re;Se.length=_e.length,De=!0}}else Se[0]!==n.BACK&&(Se[0]=n.BACK,De=!0);De&&n.drawBuffers(Se)}function le(B){return g!==B?(n.useProgram(B),g=B,!0):!1}let We={[fi]:n.FUNC_ADD,[md]:n.FUNC_SUBTRACT,[gd]:n.FUNC_REVERSE_SUBTRACT};We[_d]=n.MIN,We[yd]=n.MAX;let P={[vd]:n.ZERO,[xd]:n.ONE,[Md]:n.SRC_COLOR,[yo]:n.SRC_ALPHA,[Ad]:n.SRC_ALPHA_SATURATE,[wd]:n.DST_COLOR,[Sd]:n.DST_ALPHA,[bd]:n.ONE_MINUS_SRC_COLOR,[vo]:n.ONE_MINUS_SRC_ALPHA,[Td]:n.ONE_MINUS_DST_COLOR,[Ed]:n.ONE_MINUS_DST_ALPHA,[Cd]:n.CONSTANT_COLOR,[Rd]:n.ONE_MINUS_CONSTANT_COLOR,[Id]:n.CONSTANT_ALPHA,[Pd]:n.ONE_MINUS_CONSTANT_ALPHA};function ae(B,xe,Se,De,_e,re,Fe,Ye,ct,st){if(B===Kn){_===!0&&(K(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),B!==pd){if(B!==m||st!==S){if((p!==fi||y!==fi)&&(n.blendEquation(n.FUNC_ADD),p=fi,y=fi),st)switch(B){case Oi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFunc(n.ONE,n.ONE);break;case sh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Oi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ih:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,x=null,R=null,C=null,D.set(0,0,0),F=0,m=B,S=st}return}_e=_e||xe,re=re||Se,Fe=Fe||De,(xe!==p||_e!==y)&&(n.blendEquationSeparate(We[xe],We[_e]),p=xe,y=_e),(Se!==T||De!==x||re!==R||Fe!==C)&&(n.blendFuncSeparate(P[Se],P[De],P[re],P[Fe]),T=Se,x=De,R=re,C=Fe),(Ye.equals(D)===!1||ct!==F)&&(n.blendColor(Ye.r,Ye.g,Ye.b,ct),D.copy(Ye),F=ct),m=B,S=!1}function Q(B,xe){B.side===kn?K(n.CULL_FACE):U(n.CULL_FACE);let Se=B.side===Nt;xe&&(Se=!Se),te(Se),B.blending===Oi&&B.transparent===!1?ae(Kn):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let De=B.stencilWrite;o.setTest(De),De&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function ne(B){B!==ud?(U(n.CULL_FACE),B!==L&&(B===th?n.cullFace(n.BACK):B===dd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),L=B}function ce(B){B!==V&&(A&&n.lineWidth(B),V=B)}function pe(B,xe,Se){B?(U(n.POLYGON_OFFSET_FILL),(q!==xe||z!==Se)&&(n.polygonOffset(xe,Se),q=xe,z=Se)):K(n.POLYGON_OFFSET_FILL)}function be(B){B?U(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function qe(B){B===void 0&&(B=n.TEXTURE0+X-1),$!==B&&(n.activeTexture(B),$=B)}function Ie(B,xe,Se){Se===void 0&&($===null?Se=n.TEXTURE0+X-1:Se=$);let De=ie[Se];De===void 0&&(De={type:void 0,texture:void 0},ie[Se]=De),(De.type!==B||De.texture!==xe)&&($!==Se&&(n.activeTexture(Se),$=Se),n.bindTexture(B,xe||E[B]),De.type=B,De.texture=xe)}function w(){let B=ie[$];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function J(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ve(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ne(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(B){he.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),he.copy(B))}function Ge(B){Me.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),Me.copy(B))}function Oe(B,xe){let Se=c.get(xe);Se===void 0&&(Se=new WeakMap,c.set(xe,Se));let De=Se.get(B);De===void 0&&(De=n.getUniformBlockIndex(xe,B.name),Se.set(B,De))}function we(B,xe){let De=c.get(xe).get(B);l.get(xe)!==De&&(n.uniformBlockBinding(xe,De,B.__bindingPointIndex),l.set(xe,De))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,ie={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,T=null,x=null,y=null,R=null,C=null,D=new $e(0,0,0),F=0,S=!1,M=null,L=null,V=null,q=null,z=null,he.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:U,disable:K,bindFramebuffer:de,drawBuffers:fe,useProgram:le,setBlending:ae,setMaterial:Q,setFlipSided:te,setCullFace:ne,setLineWidth:ce,setPolygonOffset:pe,setScissorTest:be,activeTexture:qe,bindTexture:Ie,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:W,texImage2D:Ne,texImage3D:ge,updateUBOMapping:Oe,uniformBlockBinding:we,texStorage2D:ve,texStorage3D:Le,texSubImage2D:J,texSubImage3D:oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Re,scissor:Ae,viewport:Ge,reset:Je}}function Hv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return f?new OffscreenCanvas(w,v):Rs("canvas")}function _(w,v,W){let J=1,oe=Ie(w);if((oe.width>W||oe.height>W)&&(J=W/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ee=Math.floor(J*oe.width),Re=Math.floor(J*oe.height);u===void 0&&(u=g(ee,Re));let ve=v?g(ee,Re):u;return ve.width=ee,ve.height=Re,ve.getContext("2d").drawImage(w,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ee+"x"+Re+")."),ve}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){n.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(w,v,W,J,oe=!1){if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=v;if(v===n.RED&&(W===n.FLOAT&&(ee=n.R32F),W===n.HALF_FLOAT&&(ee=n.R16F),W===n.UNSIGNED_BYTE&&(ee=n.R8)),v===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.R8UI),W===n.UNSIGNED_SHORT&&(ee=n.R16UI),W===n.UNSIGNED_INT&&(ee=n.R32UI),W===n.BYTE&&(ee=n.R8I),W===n.SHORT&&(ee=n.R16I),W===n.INT&&(ee=n.R32I)),v===n.RG&&(W===n.FLOAT&&(ee=n.RG32F),W===n.HALF_FLOAT&&(ee=n.RG16F),W===n.UNSIGNED_BYTE&&(ee=n.RG8)),v===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RG8UI),W===n.UNSIGNED_SHORT&&(ee=n.RG16UI),W===n.UNSIGNED_INT&&(ee=n.RG32UI),W===n.BYTE&&(ee=n.RG8I),W===n.SHORT&&(ee=n.RG16I),W===n.INT&&(ee=n.RG32I)),v===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),W===n.UNSIGNED_INT&&(ee=n.RGB32UI),W===n.BYTE&&(ee=n.RGB8I),W===n.SHORT&&(ee=n.RGB16I),W===n.INT&&(ee=n.RGB32I)),v===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),W===n.UNSIGNED_INT&&(ee=n.RGBA32UI),W===n.BYTE&&(ee=n.RGBA8I),W===n.SHORT&&(ee=n.RGBA16I),W===n.INT&&(ee=n.RGBA32I)),v===n.RGB&&(W===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(ee=n.R11F_G11F_B10F)),v===n.RGBA){let Re=oe?Lr:nt.getTransfer(J);W===n.FLOAT&&(ee=n.RGBA32F),W===n.HALF_FLOAT&&(ee=n.RGBA16F),W===n.UNSIGNED_BYTE&&(ee=Re===rt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(w,v){let W;return w?v===null||v===Si||v===Ws?W=n.DEPTH24_STENCIL8:v===Bn?W=n.DEPTH32F_STENCIL8:v===Vs&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Si||v===Ws?W=n.DEPTH_COMPONENT24:v===Bn?W=n.DEPTH_COMPONENT32F:v===Vs&&(W=n.DEPTH_COMPONENT16),W}function R(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==Zt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function C(w){let v=w.target;v.removeEventListener("dispose",C),F(v),v.isVideoTexture&&h.delete(v)}function D(w){let v=w.target;v.removeEventListener("dispose",D),M(v)}function F(w){let v=i.get(w);if(v.__webglInit===void 0)return;let W=w.source,J=d.get(W);if(J){let oe=J[v.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&S(w),Object.keys(J).length===0&&d.delete(W)}i.remove(w)}function S(w){let v=i.get(w);n.deleteTexture(v.__webglTexture);let W=w.source,J=d.get(W);delete J[v.__cacheKey],a.memory.textures--}function M(w){let v=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let oe=0;oe<v.__webglFramebuffer[J].length;oe++)n.deleteFramebuffer(v.__webglFramebuffer[J][oe]);else n.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)n.deleteFramebuffer(v.__webglFramebuffer[J]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let W=w.textures;for(let J=0,oe=W.length;J<oe;J++){let ee=i.get(W[J]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),a.memory.textures--),i.remove(W[J])}i.remove(w)}let L=0;function V(){L=0}function q(){let w=L;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function X(w,v){let W=i.get(w);if(w.isVideoTexture&&be(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{E(W,w,v);return}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+v)}function A(w,v){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){E(W,w,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+v)}function I(w,v){let W=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version){E(W,w,v);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+v)}function N(w,v){let W=i.get(w);if(w.version>0&&W.__version!==w.version){U(W,w,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+v)}let $={[xo]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Mo]:n.MIRRORED_REPEAT},ie={[jt]:n.NEAREST,[zd]:n.NEAREST_MIPMAP_NEAREST,[ca]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[tl]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},se={[Wd]:n.NEVER,[Zd]:n.ALWAYS,[Xd]:n.LESS,[_h]:n.LEQUAL,[qd]:n.EQUAL,[jd]:n.GEQUAL,[Yd]:n.GREATER,[$d]:n.NOTEQUAL};function Y(w,v){if(v.type===Bn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Zt||v.magFilter===tl||v.magFilter===ca||v.magFilter===bi||v.minFilter===Zt||v.minFilter===tl||v.minFilter===ca||v.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,$[v.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,$[v.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,$[v.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,ie[v.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,ie[v.minFilter]),v.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,se[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===jt||v.minFilter!==ca&&v.minFilter!==bi||v.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function he(w,v){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",C));let J=v.source,oe=d.get(J);oe===void 0&&(oe={},d.set(J,oe));let ee=z(v);if(ee!==w.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),oe[ee].usedTimes++;let Re=oe[w.__cacheKey];Re!==void 0&&(oe[w.__cacheKey].usedTimes--,Re.usedTimes===0&&S(v)),w.__cacheKey=ee,w.__webglTexture=oe[ee].texture}return W}function Me(w,v,W){return Math.floor(Math.floor(w/W)/v)}function Ce(w,v,W,J){let ee=w.updateRanges;if(ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,W,J,v.data);else{ee.sort((ge,Ae)=>ge.start-Ae.start);let Re=0;for(let ge=1;ge<ee.length;ge++){let Ae=ee[Re],Ge=ee[ge],Oe=Ae.start+Ae.count,we=Me(Ge.start,v.width,4),Je=Me(Ae.start,v.width,4);Ge.start<=Oe+1&&we===Je&&Me(Ge.start+Ge.count-1,v.width,4)===we?Ae.count=Math.max(Ae.count,Ge.start+Ge.count-Ae.start):(++Re,ee[Re]=Ge)}ee.length=Re+1;let ve=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),Ne=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let ge=0,Ae=ee.length;ge<Ae;ge++){let Ge=ee[ge],Oe=Math.floor(Ge.start/4),we=Math.ceil(Ge.count/4),Je=Oe%v.width,B=Math.floor(Oe/v.width),xe=we,Se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Je,B,xe,Se,W,J,v.data)}w.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ve),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ne)}}function E(w,v,W){let J=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=n.TEXTURE_3D);let oe=he(w,v),ee=v.source;t.bindTexture(J,w.__webglTexture,n.TEXTURE0+W);let Re=i.get(ee);if(ee.version!==Re.__version||oe===!0){t.activeTexture(n.TEXTURE0+W);let ve=nt.getPrimaries(nt.workingColorSpace),Le=v.colorSpace===ei?null:nt.getPrimaries(v.colorSpace),Ne=v.colorSpace===ei||ve===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ge=_(v.image,!1,s.maxTextureSize);ge=qe(v,ge);let Ae=r.convert(v.format,v.colorSpace),Ge=r.convert(v.type),Oe=x(v.internalFormat,Ae,Ge,v.colorSpace,v.isVideoTexture);Y(J,v);let we,Je=v.mipmaps,B=v.isVideoTexture!==!0,xe=Re.__version===void 0||oe===!0,Se=ee.dataReady,De=R(v,ge);if(v.isDepthTexture)Oe=y(v.format===Xs,v.type),xe&&(B?t.texStorage2D(n.TEXTURE_2D,1,Oe,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ae,Ge,null));else if(v.isDataTexture)if(Je.length>0){B&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,Je[0].width,Je[0].height);for(let _e=0,re=Je.length;_e<re;_e++)we=Je[_e],B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Ae,Ge,we.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,we.width,we.height,0,Ae,Ge,we.data);v.generateMipmaps=!1}else B?(xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,ge.width,ge.height),Se&&Ce(v,ge,Ae,Ge)):t.texImage2D(n.TEXTURE_2D,0,Oe,ge.width,ge.height,0,Ae,Ge,ge.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Oe,Je[0].width,Je[0].height,ge.depth);for(let _e=0,re=Je.length;_e<re;_e++)if(we=Je[_e],v.format!==pn)if(Ae!==null)if(B){if(Se)if(v.layerUpdates.size>0){let Fe=wh(we.width,we.height,v.format,v.type);for(let Ye of v.layerUpdates){let ct=we.data.subarray(Ye*Fe/we.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,Ye,we.width,we.height,1,Ae,ct)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ge.depth,Ae,we.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,we.width,we.height,ge.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,_e,0,0,0,we.width,we.height,ge.depth,Ae,Ge,we.data):t.texImage3D(n.TEXTURE_2D_ARRAY,_e,Oe,we.width,we.height,ge.depth,0,Ae,Ge,we.data)}else{B&&xe&&t.texStorage2D(n.TEXTURE_2D,De,Oe,Je[0].width,Je[0].height);for(let _e=0,re=Je.length;_e<re;_e++)we=Je[_e],v.format!==pn?Ae!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(n.TEXTURE_2D,_e,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,we.width,we.height,Ae,Ge,we.data):t.texImage2D(n.TEXTURE_2D,_e,Oe,we.width,we.height,0,Ae,Ge,we.data)}else if(v.isDataArrayTexture)if(B){if(xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Oe,ge.width,ge.height,ge.depth),Se)if(v.layerUpdates.size>0){let _e=wh(ge.width,ge.height,v.format,v.type);for(let re of v.layerUpdates){let Fe=ge.data.subarray(re*_e/ge.data.BYTES_PER_ELEMENT,(re+1)*_e/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,ge.width,ge.height,1,Ae,Ge,Fe)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Oe,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(v.isData3DTexture)B?(xe&&t.texStorage3D(n.TEXTURE_3D,De,Oe,ge.width,ge.height,ge.depth),Se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Ge,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Oe,ge.width,ge.height,ge.depth,0,Ae,Ge,ge.data);else if(v.isFramebufferTexture){if(xe)if(B)t.texStorage2D(n.TEXTURE_2D,De,Oe,ge.width,ge.height);else{let _e=ge.width,re=ge.height;for(let Fe=0;Fe<De;Fe++)t.texImage2D(n.TEXTURE_2D,Fe,Oe,_e,re,0,Ae,Ge,null),_e>>=1,re>>=1}}else if(Je.length>0){if(B&&xe){let _e=Ie(Je[0]);t.texStorage2D(n.TEXTURE_2D,De,Oe,_e.width,_e.height)}for(let _e=0,re=Je.length;_e<re;_e++)we=Je[_e],B?Se&&t.texSubImage2D(n.TEXTURE_2D,_e,0,0,Ae,Ge,we):t.texImage2D(n.TEXTURE_2D,_e,Oe,Ae,Ge,we);v.generateMipmaps=!1}else if(B){if(xe){let _e=Ie(ge);t.texStorage2D(n.TEXTURE_2D,De,Oe,_e.width,_e.height)}Se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Ge,ge)}else t.texImage2D(n.TEXTURE_2D,0,Oe,Ae,Ge,ge);m(v)&&p(J),Re.__version=ee.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function U(w,v,W){if(v.image.length!==6)return;let J=he(w,v),oe=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+W);let ee=i.get(oe);if(oe.version!==ee.__version||J===!0){t.activeTexture(n.TEXTURE0+W);let Re=nt.getPrimaries(nt.workingColorSpace),ve=v.colorSpace===ei?null:nt.getPrimaries(v.colorSpace),Le=v.colorSpace===ei||Re===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Ne=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!Ne&&!ge?Ae[re]=_(v.image[re],!0,s.maxCubemapSize):Ae[re]=ge?v.image[re].image:v.image[re],Ae[re]=qe(v,Ae[re]);let Ge=Ae[0],Oe=r.convert(v.format,v.colorSpace),we=r.convert(v.type),Je=x(v.internalFormat,Oe,we,v.colorSpace),B=v.isVideoTexture!==!0,xe=ee.__version===void 0||J===!0,Se=oe.dataReady,De=R(v,Ge);Y(n.TEXTURE_CUBE_MAP,v);let _e;if(Ne){B&&xe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Je,Ge.width,Ge.height);for(let re=0;re<6;re++){_e=Ae[re].mipmaps;for(let Fe=0;Fe<_e.length;Fe++){let Ye=_e[Fe];v.format!==pn?Oe!==null?B?Se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ye.width,Ye.height,Oe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,0,0,Ye.width,Ye.height,Oe,we,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe,Je,Ye.width,Ye.height,0,Oe,we,Ye.data)}}}else{if(_e=v.mipmaps,B&&xe){_e.length>0&&De++;let re=Ie(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Je,re.width,re.height)}for(let re=0;re<6;re++)if(ge){B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Oe,we,Ae[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Ae[re].width,Ae[re].height,0,Oe,we,Ae[re].data);for(let Fe=0;Fe<_e.length;Fe++){let ct=_e[Fe].image[re].image;B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,ct.width,ct.height,Oe,we,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,ct.width,ct.height,0,Oe,we,ct.data)}}else{B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,we,Ae[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Je,Oe,we,Ae[re]);for(let Fe=0;Fe<_e.length;Fe++){let Ye=_e[Fe];B?Se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,0,0,Oe,we,Ye.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Fe+1,Je,Oe,we,Ye.image[re])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),ee.__version=oe.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function K(w,v,W,J,oe,ee){let Re=r.convert(W.format,W.colorSpace),ve=r.convert(W.type),Le=x(W.internalFormat,Re,ve,W.colorSpace),Ne=i.get(v),ge=i.get(W);if(ge.__renderTarget=v,!Ne.__hasExternalTextures){let Ae=Math.max(1,v.width>>ee),Ge=Math.max(1,v.height>>ee);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ee,Le,Ae,Ge,v.depth,0,Re,ve,null):t.texImage2D(oe,ee,Le,Ae,Ge,0,Re,ve,null)}t.bindFramebuffer(n.FRAMEBUFFER,w),pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,oe,ge.__webglTexture,0,ce(v)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,oe,ge.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(w,v,W){if(n.bindRenderbuffer(n.RENDERBUFFER,w),v.depthBuffer){let J=v.depthTexture,oe=J&&J.isDepthTexture?J.type:null,ee=y(v.stencilBuffer,oe),Re=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=ce(v);pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ee,v.width,v.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ee,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ee,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,w)}else{let J=v.textures;for(let oe=0;oe<J.length;oe++){let ee=J[oe],Re=r.convert(ee.format,ee.colorSpace),ve=r.convert(ee.type),Le=x(ee.internalFormat,Re,ve,ee.colorSpace),Ne=ce(v);W&&pe(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Le,v.width,v.height):pe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ne,Le,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Le,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X(v.depthTexture,0);let oe=J.__webglTexture,ee=ce(v);if(v.depthTexture.format===As)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,oe,0);else if(v.depthTexture.format===Xs)pe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function le(w){let v=i.get(w),W=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let J=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){let oe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),v.__depthDisposeCallback=oe}v.__boundDepthTexture=J}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let J=w.texture.mipmaps;J&&J.length>0?fe(v.__webglFramebuffer[0],w):fe(v.__webglFramebuffer,w)}else if(W){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=n.createRenderbuffer(),de(v.__webglDepthbuffer[J],w,!1);else{let oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ee)}}else{let J=w.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),de(v.__webglDepthbuffer,w,!1);else{let oe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(w,v,W){let J=i.get(w);v!==void 0&&K(J.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&le(w)}function P(w){let v=w.texture,W=i.get(w),J=i.get(v);w.addEventListener("dispose",D);let oe=w.textures,ee=w.isWebGLCubeRenderTarget===!0,Re=oe.length>1;if(Re||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=v.version,a.memory.textures++),ee){W.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer[ve]=[];for(let Le=0;Le<v.mipmaps.length;Le++)W.__webglFramebuffer[ve][Le]=n.createFramebuffer()}else W.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){W.__webglFramebuffer=[];for(let ve=0;ve<v.mipmaps.length;ve++)W.__webglFramebuffer[ve]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(Re)for(let ve=0,Le=oe.length;ve<Le;ve++){let Ne=i.get(oe[ve]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&pe(w)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ve=0;ve<oe.length;ve++){let Le=oe[ve];W.__webglColorRenderbuffer[ve]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ve]);let Ne=r.convert(Le.format,Le.colorSpace),ge=r.convert(Le.type),Ae=x(Le.internalFormat,Ne,ge,Le.colorSpace,w.isXRRenderTarget===!0),Ge=ce(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ae,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,W.__webglColorRenderbuffer[ve])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),de(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Y(n.TEXTURE_CUBE_MAP,v);for(let ve=0;ve<6;ve++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)K(W.__webglFramebuffer[ve][Le],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Le);else K(W.__webglFramebuffer[ve],w,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Le=oe.length;ve<Le;ve++){let Ne=oe[ve],ge=i.get(Ne),Ae=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Ae=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ge.__webglTexture),Y(Ae,Ne),K(W.__webglFramebuffer,w,Ne,n.COLOR_ATTACHMENT0+ve,Ae,0),m(Ne)&&p(Ae)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ve=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,J.__webglTexture),Y(ve,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)K(W.__webglFramebuffer[Le],w,v,n.COLOR_ATTACHMENT0,ve,Le);else K(W.__webglFramebuffer,w,v,n.COLOR_ATTACHMENT0,ve,0);m(v)&&p(ve),t.unbindTexture()}w.depthBuffer&&le(w)}function ae(w){let v=w.textures;for(let W=0,J=v.length;W<J;W++){let oe=v[W];if(m(oe)){let ee=T(w),Re=i.get(oe).__webglTexture;t.bindTexture(ee,Re),p(ee),t.unbindTexture()}}}let Q=[],te=[];function ne(w){if(w.samples>0){if(pe(w)===!1){let v=w.textures,W=w.width,J=w.height,oe=n.COLOR_BUFFER_BIT,ee=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(w),ve=v.length>1;if(ve)for(let Ne=0;Ne<v.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);let Le=w.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Ne=0;Ne<v.length;Ne++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ve){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let ge=i.get(v[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,W,J,0,0,W,J,oe,n.NEAREST),l===!0&&(Q.length=0,te.length=0,Q.push(n.COLOR_ATTACHMENT0+Ne),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Q.push(ee),te.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,te)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ve)for(let Ne=0;Ne<v.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Re.__webglColorRenderbuffer[Ne]);let ge=i.get(v[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ce(w){return Math.min(s.maxSamples,w.samples)}function pe(w){let v=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function qe(w,v){let W=w.colorSpace,J=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==Bi&&W!==ei&&(nt.getTransfer(W)===rt?(J!==pn||oe!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),v}function Ie(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=A,this.setTexture3D=I,this.setTextureCube=N,this.rebindTextures=We,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=K,this.useMultisampledRTT=pe}function Vv(n,e){function t(i,s=ei){let r,a=nt.getTransfer(s);if(i===An)return n.UNSIGNED_BYTE;if(i===il)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===hh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===lh)return n.BYTE;if(i===ch)return n.SHORT;if(i===Vs)return n.UNSIGNED_SHORT;if(i===nl)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Gs)return n.HALF_FLOAT;if(i===dh)return n.ALPHA;if(i===fh)return n.RGB;if(i===pn)return n.RGBA;if(i===As)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===ph)return n.RED;if(i===rl)return n.RED_INTEGER;if(i===mh)return n.RG;if(i===al)return n.RG_INTEGER;if(i===ol)return n.RGBA_INTEGER;if(i===ha||i===ua||i===da||i===fa)if(a===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ll||i===cl||i===hl||i===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dl||i===fl||i===pl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dl||i===fl)return a===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===pl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ml||i===gl||i===_l||i===yl||i===vl||i===xl||i===Ml||i===bl||i===Sl||i===El||i===wl||i===Tl||i===Al||i===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===El)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return a===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rl||i===Il||i===Pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Rl)return a===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Dl||i===Ul||i===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ul)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}function qv(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mh(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Nt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Nt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),x=T.envMap,y=T.envMapRotation;x&&(m.envMap.value=x,Ji.copy(y),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(Ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Nt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yv(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){let y=x.program;i.uniformBlockBinding(T,y)}function c(T,x){let y=s[T.id];y===void 0&&(g(T),y=h(T),s[T.id]=y,T.addEventListener("dispose",m));let R=x.program;i.updateUBOMapping(T,R);let C=e.render.frame;r[T.id]!==C&&(d(T),r[T.id]=C)}function h(T){let x=u();T.__bindingPointIndex=x;let y=n.createBuffer(),R=T.__size,C=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let x=s[T.id],y=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,D=y.length;C<D;C++){let F=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=F.length;S<M;S++){let L=F[S];if(f(L,C,S,R)===!0){let V=L.__offset,q=Array.isArray(L.value)?L.value:[L.value],z=0;for(let X=0;X<q.length;X++){let A=q[X],I=_(A);typeof A=="number"||typeof A=="boolean"?(L.__data[0]=A,n.bufferSubData(n.UNIFORM_BUFFER,V+z,L.__data)):A.isMatrix3?(L.__data[0]=A.elements[0],L.__data[1]=A.elements[1],L.__data[2]=A.elements[2],L.__data[3]=0,L.__data[4]=A.elements[3],L.__data[5]=A.elements[4],L.__data[6]=A.elements[5],L.__data[7]=0,L.__data[8]=A.elements[6],L.__data[9]=A.elements[7],L.__data[10]=A.elements[8],L.__data[11]=0):(A.toArray(L.__data,z),z+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,x,y,R){let C=T.value,D=x+"_"+y;if(R[D]===void 0)return typeof C=="number"||typeof C=="boolean"?R[D]=C:R[D]=C.clone(),!0;{let F=R[D];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[D]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(T){let x=T.uniforms,y=0,R=16;for(let D=0,F=x.length;D<F;D++){let S=Array.isArray(x[D])?x[D]:[x[D]];for(let M=0,L=S.length;M<L;M++){let V=S[M],q=Array.isArray(V.value)?V.value:[V.value];for(let z=0,X=q.length;z<X;z++){let A=q[z],I=_(A),N=y%R,$=N%I.boundary,ie=N+$;y+=$,ie!==0&&R-ie<I.storage&&(y+=R-ie),V.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=I.storage}}}let C=y%R;return C>0&&(y+=R-C),T.__size=y,T.__cache={},this}function _(T){let x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function m(T){let x=T.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let T in s)n.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Mg,bg,Sg,Eg,wg,Tg,Ag,Cg,Rg,Ig,Pg,Lg,Dg,Ug,Ng,Fg,Og,kg,Bg,zg,Hg,Vg,Gg,Wg,Xg,qg,Yg,$g,jg,Zg,Jg,Kg,Qg,e0,t0,n0,i0,s0,r0,a0,o0,l0,c0,h0,u0,d0,f0,p0,m0,g0,_0,y0,v0,x0,M0,b0,S0,E0,w0,T0,A0,C0,R0,I0,P0,L0,D0,U0,N0,F0,O0,k0,B0,z0,H0,V0,G0,W0,X0,q0,Y0,$0,j0,Z0,J0,K0,Q0,e_,t_,n_,i_,s_,r_,a_,o_,l_,c_,h_,u_,d_,f_,p_,m_,g_,__,y_,v_,x_,M_,b_,S_,E_,w_,T_,A_,C_,R_,I_,P_,L_,D_,U_,N_,F_,O_,k_,B_,z_,H_,V_,G_,W_,X_,q_,Y_,$_,j_,Z_,J_,K_,Q_,Qe,Ee,zn,Fl,Zi,ey,Ys,of,Qi,Ah,lf,Ch,Rh,Ih,Ph,Ki,qs,cf,oy,js,Pf,ff,Lf,Df,Uf,pf,mf,gf,_f,yf,Dh,Uh,Nh,Lh,$s,sv,rv,Mf,kl,pv,mv,_v,wv,Oh,kh,Lv,Fv,Ov,Bv,Gv,Wv,Bh,zh,Ji,Xv,Zs,ga=cs(()=>{Th();Th();Mg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bg=`#ifdef USE_ALPHAHASH
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
#endif`,Sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ag=`#ifdef USE_AOMAP
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
#endif`,Cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
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
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
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
#endif`,Ng=`#ifdef USE_BUMPMAP
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
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wg=`#define PI 3.141592653589793
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
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qg=`vec3 transformedNormal = objectNormal;
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
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qg=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,v0=`struct PhysicalMaterial {
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
}`,x0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,S0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F0=`#ifdef USE_MORPHTARGETS
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
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
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
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,j0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r_=`float getShadowMask() {
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
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,l_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,h_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,p_=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#ifdef USE_TRANSMISSION
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M_=`uniform sampler2D t2D;
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
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`#include <common>
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
}`,A_=`#if DEPTH_PACKING == 3200
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
}`,C_=`#define DISTANCE
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
}`,R_=`#define DISTANCE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
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
}`,D_=`uniform vec3 diffuse;
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
}`,U_=`#include <common>
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
}`,N_=`uniform vec3 diffuse;
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
}`,F_=`#define LAMBERT
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
}`,O_=`#define LAMBERT
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
}`,k_=`#define MATCAP
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
}`,B_=`#define MATCAP
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
}`,z_=`#define NORMAL
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
}`,H_=`#define NORMAL
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
}`,V_=`#define PHONG
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
}`,G_=`#define PHONG
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
}`,W_=`#define STANDARD
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
}`,X_=`#define STANDARD
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
}`,q_=`#define TOON
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
}`,Y_=`#define TOON
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
}`,$_=`uniform float size;
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
}`,j_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Q_=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Mg,alphahash_pars_fragment:bg,alphamap_fragment:Sg,alphamap_pars_fragment:Eg,alphatest_fragment:wg,alphatest_pars_fragment:Tg,aomap_fragment:Ag,aomap_pars_fragment:Cg,batching_pars_vertex:Rg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Lg,bsdfs:Dg,iridescence_fragment:Ug,bumpmap_pars_fragment:Ng,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Og,clipping_planes_pars_vertex:kg,clipping_planes_vertex:Bg,color_fragment:zg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Yg,displacementmap_vertex:$g,emissivemap_fragment:jg,emissivemap_pars_fragment:Zg,colorspace_fragment:Jg,colorspace_pars_fragment:Kg,envmap_fragment:Qg,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:y0,lights_physical_pars_fragment:v0,lights_fragment_begin:x0,lights_fragment_maps:M0,lights_fragment_end:b0,logdepthbuf_fragment:S0,logdepthbuf_pars_fragment:E0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:T0,map_fragment:A0,map_pars_fragment:C0,map_particle_fragment:R0,map_particle_pars_fragment:I0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:L0,morphinstance_vertex:D0,morphcolor_vertex:U0,morphnormal_vertex:N0,morphtarget_pars_vertex:F0,morphtarget_vertex:O0,normal_fragment_begin:k0,normal_fragment_maps:B0,normal_pars_fragment:z0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:$0,packing:j0,premultiplied_alpha_fragment:Z0,project_vertex:J0,dithering_fragment:K0,dithering_pars_fragment:Q0,roughnessmap_fragment:e_,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:n_,shadowmap_pars_vertex:i_,shadowmap_vertex:s_,shadowmask_pars_fragment:r_,skinbase_vertex:a_,skinning_pars_vertex:o_,skinning_vertex:l_,skinnormal_vertex:c_,specularmap_fragment:h_,specularmap_pars_fragment:u_,tonemapping_fragment:d_,tonemapping_pars_fragment:f_,transmission_fragment:p_,transmission_pars_fragment:m_,uv_pars_fragment:g_,uv_pars_vertex:__,uv_vertex:y_,worldpos_vertex:v_,background_vert:x_,background_frag:M_,backgroundCube_vert:b_,backgroundCube_frag:S_,cube_vert:E_,cube_frag:w_,depth_vert:T_,depth_frag:A_,distanceRGBA_vert:C_,distanceRGBA_frag:R_,equirect_vert:I_,equirect_frag:P_,linedashed_vert:L_,linedashed_frag:D_,meshbasic_vert:U_,meshbasic_frag:N_,meshlambert_vert:F_,meshlambert_frag:O_,meshmatcap_vert:k_,meshmatcap_frag:B_,meshnormal_vert:z_,meshnormal_frag:H_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:W_,meshphysical_frag:X_,meshtoon_vert:q_,meshtoon_frag:Y_,points_vert:$_,points_frag:j_,shadow_vert:Z_,shadow_frag:J_,sprite_vert:K_,sprite_frag:Q_},Ee={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},zn={basic:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Ht([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Ht([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Ht([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new $e(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Ht([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Ht([Ee.points,Ee.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Ht([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Ht([Ee.common,Ee.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Ht([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Ht([Ee.sprite,Ee.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Ht([Ee.common,Ee.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Ht([Ee.lights,Ee.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};zn.physical={uniforms:Ht([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};Fl={r:0,b:0,g:0},Zi=new Tn,ey=new Mt;Ys=4,of=[.125,.215,.35,.446,.526,.582],Qi=20,Ah=new Wi,lf=new $e,Ch=null,Rh=0,Ih=0,Ph=!1,Ki=(1+Math.sqrt(5))/2,qs=1/Ki,cf=[new k(-Ki,qs,0),new k(Ki,qs,0),new k(-qs,0,Ki),new k(qs,0,Ki),new k(0,Ki,-qs),new k(0,Ki,qs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],oy=new k,js=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=oy}=r;Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Rh,Ih),this._renderer.xr.enabled=Ph,e.scissorTest=!1,Ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Gs,format:pn,colorSpace:Bi,depthBuffer:!1},s=hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ly(r)),this._blurMaterial=cy(r,e,t)}return s}_compileMaterial(e){let t=new ft(this._lodPlanes[0],e);this._renderer.compile(t,Ah)}_sceneToCubeUV(e,t,i,s,r){let l=new Bt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(lf),u.toneMapping=Qn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Jn({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),m=new ft(new gi,_),p=!1,T=e.background;T?T.isColor&&(_.color.copy(T),e.background=null,p=!0):(_.color.copy(lf),p=!0);for(let x=0;x<6;x++){let y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));let R=this._cubeSize;Ol(s,y*R,x>2?R:0,R,R),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===qi||e.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ol(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ah)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=cf[(s-r-1)%cf.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ft(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);let p=[],T=0;for(let D=0;D<Qi;++D){let F=D/_,S=Math.exp(-F*F/2);p.push(S),D===0?T+=S:D<m&&(T+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let y=this._sizeLods[s],R=3*y*(s>x-Ys?s-x+Ys:0),C=4*(this._cubeSize-y);Ol(t,R,C,3*y,2*y),l.setRenderTarget(t),l.render(u,Ah)}};Pf=new zt,ff=new Hr(1,1),Lf=new Ur,Df=new wo,Uf=new Br,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),yf=new Float32Array(4);Dh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}},Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}},Nh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Lh=/(\w+)(\])?(\[|\.)?/g;$s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);iv(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};sv=37297,rv=0;Mf=new je;kl=new k;pv=/^[ \t]*#include +<([\w\d./]+)>/gm;mv=new Map;_v=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;wv=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kh(e),t.set(e,i)),i}},kh=class{constructor(e){this.id=wv++,this.code=e,this.usedTimes=0}};Lv=0;Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;Bv={[Xo]:qo,[Yo]:Zo,[$o]:Jo,[ki]:jo,[qo]:Xo,[Zo]:Yo,[Jo]:$o,[jo]:ki};Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wv=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new an({vertexShader:Gv,fragmentShader:Wv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ft(new Nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zh=class extends Dn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Bh,p={},T=t.getContextAttributes(),x=null,y=null,R=[],C=[],D=new me,F=null,S=new Bt;S.viewport=new dt;let M=new Bt;M.viewport=new dt;let L=[S,M],V=new Wo,q=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(E){let U=R[E];return U===void 0&&(U=new Us,R[E]=U),U.getTargetRaySpace()},this.getControllerGrip=function(E){let U=R[E];return U===void 0&&(U=new Us,R[E]=U),U.getGripSpace()},this.getHand=function(E){let U=R[E];return U===void 0&&(U=new Us,R[E]=U),U.getHandSpace()};function X(E){let U=C.indexOf(E.inputSource);if(U===-1)return;let K=R[U];K!==void 0&&(K.update(E.inputSource,E.frame,c||a),K.dispatchEvent({type:E.type,data:E.inputSource}))}function A(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",A),s.removeEventListener("inputsourceschange",I);for(let E=0;E<R.length;E++){let U=C[E];U!==null&&(C[E]=null,R[E].disconnect(U))}q=null,z=null,m.reset();for(let E in p)delete p[E];e.setRenderTarget(x),f=null,d=null,u=null,s=null,y=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(E){r=E,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(E){o=E,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(E){c=E},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(E){if(s=E,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",A),s.addEventListener("inputsourceschange",I),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,de=null,fe=null;T.depth&&(fe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=T.stencil?Xs:As,de=T.stencil?Ws:Si);let le={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(le),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Un(d.textureWidth,d.textureHeight,{format:pn,type:An,depthTexture:new Hr(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let K={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Un(f.framebufferWidth,f.framebufferHeight,{format:pn,type:An,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(E){for(let U=0;U<E.removed.length;U++){let K=E.removed[U],de=C.indexOf(K);de>=0&&(C[de]=null,R[de].disconnect(K))}for(let U=0;U<E.added.length;U++){let K=E.added[U],de=C.indexOf(K);if(de===-1){for(let le=0;le<R.length;le++)if(le>=C.length){C.push(K),de=le;break}else if(C[le]===null){C[le]=K,de=le;break}if(de===-1)break}let fe=R[de];fe&&fe.connect(K)}}let N=new k,$=new k;function ie(E,U,K){N.setFromMatrixPosition(U.matrixWorld),$.setFromMatrixPosition(K.matrixWorld);let de=N.distanceTo($),fe=U.projectionMatrix.elements,le=K.projectionMatrix.elements,We=fe[14]/(fe[10]-1),P=fe[14]/(fe[10]+1),ae=(fe[9]+1)/fe[5],Q=(fe[9]-1)/fe[5],te=(fe[8]-1)/fe[0],ne=(le[8]+1)/le[0],ce=We*te,pe=We*ne,be=de/(-te+ne),qe=be*-te;if(U.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(qe),E.translateZ(be),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert(),fe[10]===-1)E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let Ie=We+be,w=P+be,v=ce-qe,W=pe+(de-qe),J=ae*P/w*Ie,oe=Q*P/w*Ie;E.projectionMatrix.makePerspective(v,W,J,oe,Ie,w),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}}function se(E,U){U===null?E.matrixWorld.copy(E.matrix):E.matrixWorld.multiplyMatrices(U.matrixWorld,E.matrix),E.matrixWorldInverse.copy(E.matrixWorld).invert()}this.updateCamera=function(E){if(s===null)return;let U=E.near,K=E.far;m.texture!==null&&(m.depthNear>0&&(U=m.depthNear),m.depthFar>0&&(K=m.depthFar)),V.near=M.near=S.near=U,V.far=M.far=S.far=K,(q!==V.near||z!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),q=V.near,z=V.far),V.layers.mask=E.layers.mask|6,S.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;let de=E.parent,fe=V.cameras;se(V,de);for(let le=0;le<fe.length;le++)se(fe[le],de);fe.length===2?ie(V,S,M):V.projectionMatrix.copy(S.projectionMatrix),Y(E,V,de)};function Y(E,U,K){K===null?E.matrix.copy(U.matrixWorld):(E.matrix.copy(K.matrixWorld),E.matrix.invert(),E.matrix.multiply(U.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(U.projectionMatrix),E.projectionMatrixInverse.copy(U.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=Cs*2*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(E){l=E,d!==null&&(d.fixedFoveation=E),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=E)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(E){return p[E]};let he=null;function Me(E,U){if(h=U.getViewerPose(c||a),g=U,h!==null){let K=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;K.length!==V.cameras.length&&(V.cameras.length=0,de=!0);for(let P=0;P<K.length;P++){let ae=K[P],Q=null;if(f!==null)Q=f.getViewport(ae);else{let ne=u.getViewSubImage(d,ae);Q=ne.viewport,P===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let te=L[P];te===void 0&&(te=new Bt,te.layers.enable(P),te.viewport=new dt,L[P]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(V.matrix.copy(te.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),de===!0&&V.cameras.push(te)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let P=u.getDepthInformation(K[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let P=0;P<K.length;P++){let ae=K[P].camera;if(ae){let Q=p[ae];Q||(Q=new Vr,p[ae]=Q);let te=u.getCameraImage(ae);Q.sourceTexture=te}}}}for(let K=0;K<R.length;K++){let de=C[K],fe=R[K];de!==null&&fe!==void 0&&fe.update(de,U,c||a)}he&&he(E,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),g=null}let Ce=new If;Ce.setAnimationLoop(Me),this.setAnimationLoop=function(E){he=E},this.dispose=function(){}}},Ji=new Tn,Xv=new Mt;Zs=class{constructor(e={}){let{canvas:t=Jd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,R=!1;this._outputColorSpace=Ct;let C=0,D=0,F=null,S=-1,M=null,L=new dt,V=new dt,q=null,z=new $e(0),X=0,A=t.width,I=t.height,N=1,$=null,ie=null,se=new dt(0,0,A,I),Y=new dt(0,0,A,I),he=!1,Me=new Ns,Ce=!1,E=!1,U=new Mt,K=new k,de=new dt,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function We(){return F===null?N:1}let P=i;function ae(b,H){return t.getContext(b,H)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",_e,!1),P===null){let H="webgl2";if(P=ae(H,b),P===null)throw ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Q,te,ne,ce,pe,be,qe,Ie,w,v,W,J,oe,ee,Re,ve,Le,Ne,ge,Ae,Ge,Oe,we,Je;function B(){Q=new uy(P),Q.init(),Oe=new Vv(P,Q),te=new sy(P,Q,e,Oe),ne=new zv(P,Q),te.reversedDepthBuffer&&d&&ne.buffers.depth.setReversed(!0),ce=new py(P),pe=new Av,be=new Hv(P,Q,ne,pe,te,Oe,ce),qe=new ay(y),Ie=new hy(y),w=new xg(P),we=new ny(P,w),v=new dy(P,w,ce,we),W=new gy(P,v,w,ce),ge=new my(P,te,be),ve=new ry(pe),J=new Tv(y,qe,Ie,Q,te,we,ve),oe=new qv(y,pe),ee=new Rv,Re=new Nv(Q),Ne=new ty(y,qe,Ie,ne,W,f,l),Le=new kv(y,W,te),Je=new Yv(P,ce,te,ne),Ae=new iy(P,Q,ce),Ge=new fy(P,Q,ce),ce.programs=J.programs,y.capabilities=te,y.extensions=Q,y.properties=pe,y.renderLists=ee,y.shadowMap=Le,y.state=ne,y.info=ce}B();let xe=new zh(y,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=Q.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=Q.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(A,I,!1))},this.getSize=function(b){return b.set(A,I)},this.setSize=function(b,H,j=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=b,I=H,t.width=Math.floor(b*N),t.height=Math.floor(H*N),j===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(A*N,I*N).floor()},this.setDrawingBufferSize=function(b,H,j){A=b,I=H,N=j,t.width=Math.floor(b*j),t.height=Math.floor(H*j),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,H,j,Z){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,H,j,Z),ne.viewport(L.copy(se).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(Y)},this.setScissor=function(b,H,j,Z){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,H,j,Z),ne.scissor(V.copy(Y).multiplyScalar(N).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){ne.setScissorTest(he=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){ie=b},this.getClearColor=function(b){return b.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,j=!0){let Z=0;if(b){let G=!1;if(F!==null){let ye=F.texture.format;G=ye===ol||ye===al||ye===rl}if(G){let ye=F.texture.type,Te=ye===An||ye===Si||ye===Vs||ye===Ws||ye===il||ye===sl,Ue=Ne.getClearColor(),Pe=Ne.getClearAlpha(),Ve=Ue.r,Xe=Ue.g,ze=Ue.b;Te?(g[0]=Ve,g[1]=Xe,g[2]=ze,g[3]=Pe,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ve,_[1]=Xe,_[2]=ze,_[3]=Pe,P.clearBufferiv(P.COLOR,0,_))}else Z|=P.COLOR_BUFFER_BIT}H&&(Z|=P.DEPTH_BUFFER_BIT),j&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Ne.dispose(),ee.dispose(),Re.dispose(),pe.dispose(),qe.dispose(),Ie.dispose(),W.dispose(),we.dispose(),Je.dispose(),J.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Pn),xe.removeEventListener("sessionend",Tu),Ri.stop()};function Se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let b=ce.autoReset,H=Le.enabled,j=Le.autoUpdate,Z=Le.needsUpdate,G=Le.type;B(),ce.autoReset=b,Le.enabled=H,Le.autoUpdate=j,Le.needsUpdate=Z,Le.type=G}function _e(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function re(b){let H=b.target;H.removeEventListener("dispose",re),Fe(H)}function Fe(b){Ye(b),pe.remove(b)}function Ye(b){let H=pe.get(b).programs;H!==void 0&&(H.forEach(function(j){J.releaseProgram(j)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,j,Z,G,ye){H===null&&(H=fe);let Te=G.isMesh&&G.matrixWorld.determinant()<0,Ue=Xp(b,H,j,Z,G);ne.setMaterial(Z,Te);let Pe=j.index,Ve=1;if(Z.wireframe===!0){if(Pe=v.getWireframeAttribute(j),Pe===void 0)return;Ve=2}let Xe=j.drawRange,ze=j.attributes.position,tt=Xe.start*Ve,at=(Xe.start+Xe.count)*Ve;ye!==null&&(tt=Math.max(tt,ye.start*Ve),at=Math.min(at,(ye.start+ye.count)*Ve)),Pe!==null?(tt=Math.max(tt,0),at=Math.min(at,Pe.count)):ze!=null&&(tt=Math.max(tt,0),at=Math.min(at,ze.count));let xt=at-tt;if(xt<0||xt===1/0)return;we.setup(G,Z,Ue,j,Pe);let ht,lt=Ae;if(Pe!==null&&(ht=w.get(Pe),lt=Ge,lt.setIndex(ht)),G.isMesh)Z.wireframe===!0?(ne.setLineWidth(Z.wireframeLinewidth*We()),lt.setMode(P.LINES)):lt.setMode(P.TRIANGLES);else if(G.isLine){let He=Z.linewidth;He===void 0&&(He=1),ne.setLineWidth(He*We()),G.isLineSegments?lt.setMode(P.LINES):G.isLineLoop?lt.setMode(P.LINE_LOOP):lt.setMode(P.LINE_STRIP)}else G.isPoints?lt.setMode(P.POINTS):G.isSprite&&lt.setMode(P.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Is("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let He=G._multiDrawStarts,gt=G._multiDrawCounts,it=G._multiDrawCount,Qt=Pe?w.get(Pe).bytesPerElement:1,ls=pe.get(Z).currentProgram.getUniforms();for(let en=0;en<it;en++)ls.setValue(P,"_gl_DrawID",en),lt.render(He[en]/Qt,gt[en])}else if(G.isInstancedMesh)lt.renderInstances(tt,xt,G.count);else if(j.isInstancedBufferGeometry){let He=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gt=Math.min(j.instanceCount,He);lt.renderInstances(tt,xt,gt)}else lt.render(tt,xt)};function ct(b,H,j){b.transparent===!0&&b.side===kn&&b.forceSinglePass===!1?(b.side=Nt,b.needsUpdate=!0,za(b,H,j),b.side=Zn,b.needsUpdate=!0,za(b,H,j),b.side=kn):za(b,H,j)}this.compile=function(b,H,j=null){j===null&&(j=b),p=Re.get(j),p.init(H),x.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),b!==j&&b.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let Z=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ye=G.material;if(ye)if(Array.isArray(ye))for(let Te=0;Te<ye.length;Te++){let Ue=ye[Te];ct(Ue,j,G),Z.add(Ue)}else ct(ye,j,G),Z.add(ye)}),p=x.pop(),Z},this.compileAsync=function(b,H,j=null){let Z=this.compile(b,H,j);return new Promise(G=>{function ye(){if(Z.forEach(function(Te){pe.get(Te).currentProgram.isReady()&&Z.delete(Te)}),Z.size===0){G(b);return}setTimeout(ye,10)}Q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let st=null;function Gn(b){st&&st(b)}function Pn(){Ri.stop()}function Tu(){Ri.start()}let Ri=new If;Ri.setAnimationLoop(Gn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(b){st=b,xe.setAnimationLoop(b),b===null?Ri.stop():Ri.start()},xe.addEventListener("sessionstart",Pn),xe.addEventListener("sessionend",Tu),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(H),H=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,H,F),p=Re.get(b,x.length),p.init(H),x.push(p),U.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Me.setFromProjectionMatrix(U,wn,H.reversedDepth),E=this.localClippingEnabled,Ce=ve.init(this.clippingPlanes,E),m=ee.get(b,T.length),m.init(),T.push(m),xe.enabled===!0&&xe.isPresenting===!0){let ye=y.xr.getDepthSensingMesh();ye!==null&&pc(ye,H,-1/0,y.sortObjects)}pc(b,H,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,ie),le=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,le&&Ne.addToRenderList(m,b),this.info.render.frame++,Ce===!0&&ve.beginShadows();let j=p.state.shadowsArray;Le.render(j,b,H),Ce===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,G=m.transmissive;if(p.setupLights(),H.isArrayCamera){let ye=H.cameras;if(G.length>0)for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Pe=ye[Te];Cu(Z,G,b,Pe)}le&&Ne.render(b);for(let Te=0,Ue=ye.length;Te<Ue;Te++){let Pe=ye[Te];Au(m,b,Pe,Pe.viewport)}}else G.length>0&&Cu(Z,G,b,H),le&&Ne.render(b),Au(m,b,H);F!==null&&D===0&&(be.updateMultisampleRenderTarget(F),be.updateRenderTargetMipmap(F)),b.isScene===!0&&b.onAfterRender(y,b,H),we.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],Ce===!0&&ve.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function pc(b,H,j,Z){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Me.intersectsSprite(b)){Z&&de.setFromMatrixPosition(b.matrixWorld).applyMatrix4(U);let Te=W.update(b),Ue=b.material;Ue.visible&&m.push(b,Te,Ue,j,de.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Me.intersectsObject(b))){let Te=W.update(b),Ue=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),de.copy(b.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),de.copy(Te.boundingSphere.center)),de.applyMatrix4(b.matrixWorld).applyMatrix4(U)),Array.isArray(Ue)){let Pe=Te.groups;for(let Ve=0,Xe=Pe.length;Ve<Xe;Ve++){let ze=Pe[Ve],tt=Ue[ze.materialIndex];tt&&tt.visible&&m.push(b,Te,tt,j,de.z,ze)}}else Ue.visible&&m.push(b,Te,Ue,j,de.z,null)}}let ye=b.children;for(let Te=0,Ue=ye.length;Te<Ue;Te++)pc(ye[Te],H,j,Z)}function Au(b,H,j,Z){let G=b.opaque,ye=b.transmissive,Te=b.transparent;p.setupLightsView(j),Ce===!0&&ve.setGlobalState(y.clippingPlanes,j),Z&&ne.viewport(L.copy(Z)),G.length>0&&Ba(G,H,j),ye.length>0&&Ba(ye,H,j),Te.length>0&&Ba(Te,H,j),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function Cu(b,H,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Un(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Gs:An,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let ye=p.state.transmissionRenderTarget[Z.id],Te=Z.viewport||L;ye.setSize(Te.z*y.transmissionResolutionScale,Te.w*y.transmissionResolutionScale);let Ue=y.getRenderTarget(),Pe=y.getActiveCubeFace(),Ve=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(z),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),le&&Ne.render(j);let Xe=y.toneMapping;y.toneMapping=Qn;let ze=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ce===!0&&ve.setGlobalState(y.clippingPlanes,Z),Ba(b,j,Z),be.updateMultisampleRenderTarget(ye),be.updateRenderTargetMipmap(ye),Q.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let at=0,xt=H.length;at<xt;at++){let ht=H[at],lt=ht.object,He=ht.geometry,gt=ht.material,it=ht.group;if(gt.side===kn&&lt.layers.test(Z.layers)){let Qt=gt.side;gt.side=Nt,gt.needsUpdate=!0,Ru(lt,j,Z,He,gt,it),gt.side=Qt,gt.needsUpdate=!0,tt=!0}}tt===!0&&(be.updateMultisampleRenderTarget(ye),be.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ue,Pe,Ve),y.setClearColor(z,X),ze!==void 0&&(Z.viewport=ze),y.toneMapping=Xe}function Ba(b,H,j){let Z=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ye=b.length;G<ye;G++){let Te=b[G],Ue=Te.object,Pe=Te.geometry,Ve=Te.group,Xe=Te.material;Xe.allowOverride===!0&&Z!==null&&(Xe=Z),Ue.layers.test(j.layers)&&Ru(Ue,H,j,Pe,Xe,Ve)}}function Ru(b,H,j,Z,G,ye){b.onBeforeRender(y,H,j,Z,G,ye),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(y,H,j,Z,b,ye),G.transparent===!0&&G.side===kn&&G.forceSinglePass===!1?(G.side=Nt,G.needsUpdate=!0,y.renderBufferDirect(j,H,Z,G,b,ye),G.side=Zn,G.needsUpdate=!0,y.renderBufferDirect(j,H,Z,G,b,ye),G.side=kn):y.renderBufferDirect(j,H,Z,G,b,ye),b.onAfterRender(y,H,j,Z,G,ye)}function za(b,H,j){H.isScene!==!0&&(H=fe);let Z=pe.get(b),G=p.state.lights,ye=p.state.shadowsArray,Te=G.state.version,Ue=J.getParameters(b,G.state,ye,H,j),Pe=J.getProgramCacheKey(Ue),Ve=Z.programs;Z.environment=b.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(b.isMeshStandardMaterial?Ie:qe).get(b.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Ve===void 0&&(b.addEventListener("dispose",re),Ve=new Map,Z.programs=Ve);let Xe=Ve.get(Pe);if(Xe!==void 0){if(Z.currentProgram===Xe&&Z.lightsStateVersion===Te)return Pu(b,Ue),Xe}else Ue.uniforms=J.getUniforms(b),b.onBeforeCompile(Ue,y),Xe=J.acquireProgram(Ue,Pe),Ve.set(Pe,Xe),Z.uniforms=Ue.uniforms;let ze=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ve.uniform),Pu(b,Ue),Z.needsLights=Yp(b),Z.lightsStateVersion=Te,Z.needsLights&&(ze.ambientLightColor.value=G.state.ambient,ze.lightProbe.value=G.state.probe,ze.directionalLights.value=G.state.directional,ze.directionalLightShadows.value=G.state.directionalShadow,ze.spotLights.value=G.state.spot,ze.spotLightShadows.value=G.state.spotShadow,ze.rectAreaLights.value=G.state.rectArea,ze.ltc_1.value=G.state.rectAreaLTC1,ze.ltc_2.value=G.state.rectAreaLTC2,ze.pointLights.value=G.state.point,ze.pointLightShadows.value=G.state.pointShadow,ze.hemisphereLights.value=G.state.hemi,ze.directionalShadowMap.value=G.state.directionalShadowMap,ze.directionalShadowMatrix.value=G.state.directionalShadowMatrix,ze.spotShadowMap.value=G.state.spotShadowMap,ze.spotLightMatrix.value=G.state.spotLightMatrix,ze.spotLightMap.value=G.state.spotLightMap,ze.pointShadowMap.value=G.state.pointShadowMap,ze.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Xe,Z.uniformsList=null,Xe}function Iu(b){if(b.uniformsList===null){let H=b.currentProgram.getUniforms();b.uniformsList=$s.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function Pu(b,H){let j=pe.get(b);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Xp(b,H,j,Z,G){H.isScene!==!0&&(H=fe),be.resetTextureUnits();let ye=H.fog,Te=Z.isMeshStandardMaterial?H.environment:null,Ue=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Bi,Pe=(Z.isMeshStandardMaterial?Ie:qe).get(Z.envMap||Te),Ve=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Xe=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),ze=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,at=!!j.morphAttributes.color,xt=Qn;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(xt=y.toneMapping);let ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,lt=ht!==void 0?ht.length:0,He=pe.get(Z),gt=p.state.lights;if(Ce===!0&&(E===!0||b!==M)){let Wt=b===M&&Z.id===S;ve.setState(Z,b,Wt)}let it=!1;Z.version===He.__version?(He.needsLights&&He.lightsStateVersion!==gt.state.version||He.outputColorSpace!==Ue||G.isBatchedMesh&&He.batching===!1||!G.isBatchedMesh&&He.batching===!0||G.isBatchedMesh&&He.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&He.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&He.instancing===!1||!G.isInstancedMesh&&He.instancing===!0||G.isSkinnedMesh&&He.skinning===!1||!G.isSkinnedMesh&&He.skinning===!0||G.isInstancedMesh&&He.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&He.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&He.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&He.instancingMorph===!1&&G.morphTexture!==null||He.envMap!==Pe||Z.fog===!0&&He.fog!==ye||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ve.numPlanes||He.numIntersection!==ve.numIntersection)||He.vertexAlphas!==Ve||He.vertexTangents!==Xe||He.morphTargets!==ze||He.morphNormals!==tt||He.morphColors!==at||He.toneMapping!==xt||He.morphTargetsCount!==lt)&&(it=!0):(it=!0,He.__version=Z.version);let Qt=He.currentProgram;it===!0&&(Qt=za(Z,H,G));let ls=!1,en=!1,yr=!1,_t=Qt.getUniforms(),cn=He.uniforms;if(ne.useProgram(Qt.program)&&(ls=!0,en=!0,yr=!0),Z.id!==S&&(S=Z.id,en=!0),ls||M!==b){ne.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),_t.setValue(P,"projectionMatrix",b.projectionMatrix),_t.setValue(P,"viewMatrix",b.matrixWorldInverse);let $t=_t.map.cameraPosition;$t!==void 0&&$t.setValue(P,K.setFromMatrixPosition(b.matrixWorld)),te.logarithmicDepthBuffer&&_t.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_t.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,en=!0,yr=!0)}if(G.isSkinnedMesh){_t.setOptional(P,G,"bindMatrix"),_t.setOptional(P,G,"bindMatrixInverse");let Wt=G.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),_t.setValue(P,"boneTexture",Wt.boneTexture,be))}G.isBatchedMesh&&(_t.setOptional(P,G,"batchingTexture"),_t.setValue(P,"batchingTexture",G._matricesTexture,be),_t.setOptional(P,G,"batchingIdTexture"),_t.setValue(P,"batchingIdTexture",G._indirectTexture,be),_t.setOptional(P,G,"batchingColorTexture"),G._colorsTexture!==null&&_t.setValue(P,"batchingColorTexture",G._colorsTexture,be));let hn=j.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&ge.update(G,j,Qt),(en||He.receiveShadow!==G.receiveShadow)&&(He.receiveShadow=G.receiveShadow,_t.setValue(P,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(cn.envMap.value=Pe,cn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(cn.envMapIntensity.value=H.environmentIntensity),en&&(_t.setValue(P,"toneMappingExposure",y.toneMappingExposure),He.needsLights&&qp(cn,yr),ye&&Z.fog===!0&&oe.refreshFogUniforms(cn,ye),oe.refreshMaterialUniforms(cn,Z,N,I,p.state.transmissionRenderTarget[b.id]),$s.upload(P,Iu(He),cn,be)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&($s.upload(P,Iu(He),cn,be),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_t.setValue(P,"center",G.center),_t.setValue(P,"modelViewMatrix",G.modelViewMatrix),_t.setValue(P,"normalMatrix",G.normalMatrix),_t.setValue(P,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let Wt=Z.uniformsGroups;for(let $t=0,mc=Wt.length;$t<mc;$t++){let Ii=Wt[$t];Je.update(Ii,Qt),Je.bind(Ii,Qt)}}return Qt}function qp(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Yp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,H,j){let Z=pe.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),pe.get(b.texture).__webglTexture=H,pe.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){let j=pe.get(b);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0};let $p=P.createFramebuffer();this.setRenderTarget=function(b,H=0,j=0){F=b,C=H,D=j;let Z=!0,G=null,ye=!1,Te=!1;if(b){let Pe=pe.get(b);if(Pe.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1;else if(Pe.__webglFramebuffer===void 0)be.setupRenderTarget(b);else if(Pe.__hasExternalTextures)be.rebindTextures(b,pe.get(b.texture).__webglTexture,pe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let ze=b.depthTexture;if(Pe.__boundDepthTexture!==ze){if(ze!==null&&pe.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(b)}}let Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);let Xe=pe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xe[H])?G=Xe[H][j]:G=Xe[H],ye=!0):b.samples>0&&be.useMultisampledRTT(b)===!1?G=pe.get(b).__webglMultisampledFramebuffer:Array.isArray(Xe)?G=Xe[j]:G=Xe,L.copy(b.viewport),V.copy(b.scissor),q=b.scissorTest}else L.copy(se).multiplyScalar(N).floor(),V.copy(Y).multiplyScalar(N).floor(),q=he;if(j!==0&&(G=$p),ne.bindFramebuffer(P.FRAMEBUFFER,G)&&Z&&ne.drawBuffers(b,G),ne.viewport(L),ne.scissor(V),ne.setScissorTest(q),ye){let Pe=pe.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pe.__webglTexture,j)}else if(Te){let Pe=H;for(let Ve=0;Ve<b.textures.length;Ve++){let Xe=pe.get(b.textures[Ve]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,j,Pe)}}else if(b!==null&&j!==0){let Pe=pe.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(b,H,j,Z,G,ye,Te,Ue=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){ne.bindFramebuffer(P.FRAMEBUFFER,Pe);try{let Ve=b.textures[Ue],Xe=Ve.format,ze=Ve.type;if(!te.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Z&&j>=0&&j<=b.height-G&&(b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ue),P.readPixels(H,j,Z,G,Oe.convert(Xe),Oe.convert(ze),ye))}finally{let Ve=F!==null?pe.get(F).__webglFramebuffer:null;ne.bindFramebuffer(P.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(b,H,j,Z,G,ye,Te,Ue=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=pe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(H>=0&&H<=b.width-Z&&j>=0&&j<=b.height-G){ne.bindFramebuffer(P.FRAMEBUFFER,Pe);let Ve=b.textures[Ue],Xe=Ve.format,ze=Ve.type;if(!te.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.bufferData(P.PIXEL_PACK_BUFFER,ye.byteLength,P.STREAM_READ),b.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ue),P.readPixels(H,j,Z,G,Oe.convert(Xe),Oe.convert(ze),0);let at=F!==null?pe.get(F).__webglFramebuffer:null;ne.bindFramebuffer(P.FRAMEBUFFER,at);let xt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Kd(P,xt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,tt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ye),P.deleteBuffer(tt),P.deleteSync(xt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,j=0){let Z=Math.pow(2,-j),G=Math.floor(b.image.width*Z),ye=Math.floor(b.image.height*Z),Te=H!==null?H.x:0,Ue=H!==null?H.y:0;be.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,j,0,0,Te,Ue,G,ye),ne.unbindTexture()};let jp=P.createFramebuffer(),Zp=P.createFramebuffer();this.copyTextureToTexture=function(b,H,j=null,Z=null,G=0,ye=null){ye===null&&(G!==0?(Is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let Te,Ue,Pe,Ve,Xe,ze,tt,at,xt,ht=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(j!==null)Te=j.max.x-j.min.x,Ue=j.max.y-j.min.y,Pe=j.isBox3?j.max.z-j.min.z:1,Ve=j.min.x,Xe=j.min.y,ze=j.isBox3?j.min.z:0;else{let hn=Math.pow(2,-G);Te=Math.floor(ht.width*hn),Ue=Math.floor(ht.height*hn),b.isDataArrayTexture?Pe=ht.depth:b.isData3DTexture?Pe=Math.floor(ht.depth*hn):Pe=1,Ve=0,Xe=0,ze=0}Z!==null?(tt=Z.x,at=Z.y,xt=Z.z):(tt=0,at=0,xt=0);let lt=Oe.convert(H.format),He=Oe.convert(H.type),gt;H.isData3DTexture?(be.setTexture3D(H,0),gt=P.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(be.setTexture2DArray(H,0),gt=P.TEXTURE_2D_ARRAY):(be.setTexture2D(H,0),gt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,H.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,H.unpackAlignment);let it=P.getParameter(P.UNPACK_ROW_LENGTH),Qt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ls=P.getParameter(P.UNPACK_SKIP_PIXELS),en=P.getParameter(P.UNPACK_SKIP_ROWS),yr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ze);let _t=b.isDataArrayTexture||b.isData3DTexture,cn=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){let hn=pe.get(b),Wt=pe.get(H),$t=pe.get(hn.__renderTarget),mc=pe.get(Wt.__renderTarget);ne.bindFramebuffer(P.READ_FRAMEBUFFER,$t.__webglFramebuffer),ne.bindFramebuffer(P.DRAW_FRAMEBUFFER,mc.__webglFramebuffer);for(let Ii=0;Ii<Pe;Ii++)_t&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.get(b).__webglTexture,G,ze+Ii),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,pe.get(H).__webglTexture,ye,xt+Ii)),P.blitFramebuffer(Ve,Xe,Te,Ue,tt,at,Te,Ue,P.DEPTH_BUFFER_BIT,P.NEAREST);ne.bindFramebuffer(P.READ_FRAMEBUFFER,null),ne.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||pe.has(b)){let hn=pe.get(b),Wt=pe.get(H);ne.bindFramebuffer(P.READ_FRAMEBUFFER,jp),ne.bindFramebuffer(P.DRAW_FRAMEBUFFER,Zp);for(let $t=0;$t<Pe;$t++)_t?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,hn.__webglTexture,G,ze+$t):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,hn.__webglTexture,G),cn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,ye,xt+$t):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,ye),G!==0?P.blitFramebuffer(Ve,Xe,Te,Ue,tt,at,Te,Ue,P.COLOR_BUFFER_BIT,P.NEAREST):cn?P.copyTexSubImage3D(gt,ye,tt,at,xt+$t,Ve,Xe,Te,Ue):P.copyTexSubImage2D(gt,ye,tt,at,Ve,Xe,Te,Ue);ne.bindFramebuffer(P.READ_FRAMEBUFFER,null),ne.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else cn?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(gt,ye,tt,at,xt,Te,Ue,Pe,lt,He,ht.data):H.isCompressedArrayTexture?P.compressedTexSubImage3D(gt,ye,tt,at,xt,Te,Ue,Pe,lt,ht.data):P.texSubImage3D(gt,ye,tt,at,xt,Te,Ue,Pe,lt,He,ht):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ye,tt,at,Te,Ue,lt,He,ht.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ye,tt,at,ht.width,ht.height,lt,ht.data):P.texSubImage2D(P.TEXTURE_2D,ye,tt,at,Te,Ue,lt,He,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,it),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ls),P.pixelStorei(P.UNPACK_SKIP_ROWS,en),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yr),ye===0&&H.generateMipmaps&&P.generateMipmap(gt),ne.unbindTexture()},this.initRenderTarget=function(b){pe.get(b).__webglFramebuffer===void 0&&be.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?be.setTextureCube(b,0):b.isData3DTexture?be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?be.setTexture2DArray(b,0):be.setTexture2D(b,0),ne.unbindTexture()},this.resetState=function(){C=0,D=0,F=null,ne.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}});function Kv(n,e,t){let i=o=>(o/=255)<=.04045?o/12.92:((o+.055)/1.055)**2.4;n=i(n),e=i(e),t=i(t);let s=Math.cbrt(.4122214708*n+.5363325363*e+.0514459929*t),r=Math.cbrt(.2119034982*n+.6806995451*e+.1073969566*t),a=Math.cbrt(.0883024619*n+.2817188376*e+.6299787005*t);return[.2104542553*s+.793617785*r-.0040720468*a,1.9779984951*s-2.428592205*r+.4505937099*a,.0259040371*s+.7827717662*r-.808675766*a]}function Qv(n,e,t,i=!0){let s=new Uint8Array(e*t).fill(1);for(let d=0;d<s.length;d++)n[d*4+3]<100&&(s[d]=0);if(!i)return s;let r=[0,e-1,e*(t-1),e*t-1].map(d=>Array.from(n.slice(d*4,d*4+3))),a=[0,1,2].map(d=>r.map(f=>f[d]).sort((f,g)=>f-g)[1]),o=new Uint8Array(e*t),l=new Int32Array(e*t),c=0,h=0;function u(d){o[d]||(o[d]=1,(!s[d]||Yh(Array.from(n.slice(d*4,d*4+3)),a)<2100)&&(s[d]=0,l[h++]=d))}for(let d=0;d<e;d++)u(d),u((t-1)*e+d);for(let d=0;d<t;d++)u(d*e),u(d*e+e-1);for(;c<h;){let d=l[c++],f=d%e,g=d/e|0;f&&u(d-1),f<e-1&&u(d+1),g&&u(d-e),g<t-1&&u(d+e)}if(s.reduce((d,f)=>d+f,0)<e*t*.025)for(let d=0;d<s.length;d++)s[d]=n[d*4+3]>=100?1:0;return s}function Yf(n,e,t,i=5,s=!0){let r=Qv(n,e,t,s),a=[];for(let h=0;h<r.length;h++)r[h]&&a.push({i:h,rgb:Array.from(n.slice(h*4,h*4+3)),lab:Kv(...n.slice(h*4,h*4+3))});if(!a.length)throw Error("没有可分析的有效像素，请更换图片。");let o=[a[a.length*.37|0].lab.slice()];for(;o.length<Math.min(i,a.length);){let h=a[0],u=-1;for(let d of a){let f=Math.min(...o.map(g=>Yh(d.lab,g)));f>u&&(u=f,h=d)}if(u<1e-8)break;o.push(h.lab.slice())}let l=new Int16Array(e*t).fill(-1);for(let h=0;h<12;h++){let u=o.map(()=>[0,0,0,0]);for(let d of a){let f=0,g=1/0;o.forEach((m,p)=>{let T=Yh(d.lab,m);T<g&&(g=T,f=p)}),l[d.i]=f;let _=u[f];for(let m=0;m<3;m++)_[m]+=d.lab[m];_[3]++}u.forEach((d,f)=>{d[3]&&(o[f]=d.slice(0,3).map(g=>g/d[3]))})}let c=o.map(()=>({rgb:[0,0,0],count:0}));for(let h of a){let u=c[l[h.i]];u.count++;for(let d=0;d<3;d++)u.rgb[d]+=h.rgb[d]}return c.forEach(h=>{h.rgb=h.rgb.map(u=>Math.round(u/(h.count||1))),h.hex="#"+h.rgb.map(u=>u.toString(16).padStart(2,"0")).join(""),h.share=h.count/a.length}),{width:e,height:t,labels:l,foreground:r,colors:c,validPixels:a.length}}function Ma(n,e){return Uint8Array.from(n.labels,t=>t===e?1:0)}function Gl(n){Vl.set("custom",n.map(e=>[...e]));for(let e of xa.keys())e.startsWith("custom:")&&xa.delete(e)}function es(n){if(Vl.has(n))return Vl.get(n);let e=[],t=(i,s,r,a)=>{for(let o=0;o<=32;o++){let l=o/32,c=1-l;e.push([c*c*c*i[0]+3*c*c*l*s[0]+3*c*l*l*r[0]+l*l*l*a[0],c*c*c*i[1]+3*c*c*l*s[1]+3*c*l*l*r[1]+l*l*l*a[1]])}};if(n==="fruit")t([0,-.76],[.7,-.96],[1.02,-.32],[.84,.2]),t([.84,.2],[.7,.78],[.25,.94],[0,.85]),t([0,.85],[-.32,.98],[-.85,.63],[-.87,.1]),t([-.87,.1],[-1.01,-.43],[-.62,-.98],[0,-.76]);else if(n==="leaf")t([-1,0],[-.4,-.85],[.55,-.61],[1,0]),t([1,0],[.45,.74],[-.4,.6],[-1,0]);else if(["round","drop","heart"].includes(n))for(let i=0;i<96;i++){let s=i/96*Math.PI*2;n==="round"?e.push([Math.cos(s)*.85,Math.sin(s)*.85]):n==="heart"?e.push([Math.pow(Math.sin(s),3)*.9,-(13*Math.cos(s)-5*Math.cos(2*s)-2*Math.cos(3*s)-Math.cos(4*s))*.055]):e.push([Math.sin(s)*.75*(.7+.3*Math.cos(s)),Math.cos(s)*.9])}else e.push([-1,.65],[-.23,-.57],[.12,-.08],[.47,-.73],[1,.65]);return Vl.set(n,e),e}function ex(n,e=420){let t=n+":"+e;if(xa.has(t))return xa.get(t);let i=es(n),s=[],r=a=>{let o=Math.sin(a*127.1+91.7)*43758.5453;return o-Math.floor(o)};for(let a=0;a<e*12&&s.length<e;a++){let o=r(a*2)*2-1,l=r(a*2+1)*2-1,c=!1;for(let h=0,u=i.length-1;h<i.length;u=h++){let d=i[h],f=i[u];d[1]>l!=f[1]>l&&o<(f[0]-d[0])*(l-d[1])/(f[1]-d[1])+d[0]&&(c=!c)}c&&s.push([o,l])}return xa.set(t,s),s}function Ei(n,e,t,i){let s=ex(t),r=i.angle*Math.PI/180,a=Math.cos(r),o=Math.sin(r),l=0,c=0;for(let[d,f]of s){let g=Math.round((i.x+(d*a-f*o)*i.scale)*n.width),_=Math.round((i.y+(d*o+f*a)*i.scale)*n.height);if(g>=0&&g<n.width&&_>=0&&_<n.height){let m=_*n.width+g;n.foreground[m]&&(c++,e[m]&&l++)}}let h=l/s.length,u=c/s.length;return{fit:h,containment:u,outside:1-u,score:.7*h+.3*u,samples:s.length}}function $f(n,e,t,{scale:i}={}){let s=[];for(let a of i?[i]:[.12,.18,.24,.3])for(let o=2;o<=8;o++)for(let l=2;l<=8;l++)for(let c of[-45,0,45,90]){let h={x:l/10,y:o/10,scale:a,angle:c};s.push({...h,...Ei(n,e,t,h)})}s.sort((a,o)=>o.score-a.score);let r=[];for(let a of s)if(r.every(o=>Math.hypot(o.x-a.x,o.y-a.y)>.17||Math.abs(o.scale-a.scale)>.1)&&(r.push(a),r.length===3))break;return r}var vt,Yh,Vl,xa,ts=cs(()=>{vt=(n,e,t)=>Math.max(e,Math.min(t,n));Yh=(n,e)=>n.reduce((t,i,s)=>t+(i-e[s])**2,0);Vl=new Map,xa=new Map});function np(n,e){let t=new Ln,i=new Ln;e.add(t),n.add(i);let s="",r=o=>{for(let l of[...o.children])l.geometry?.dispose(),l.material?.dispose(),o.remove(l)};function a(o={}){let l={...sx,...o};n.background=l.backdrop==="paper"?new $e(14604232):l.backdrop==="night"?new $e(858922):null;let c=JSON.stringify(l)+e.geometry.uuid;if(c===s)return;s=c,r(t),r(i),e.geometry.computeBoundingBox();let h=e.geometry.boundingBox,u=h.max.y,d=h.min.y;if(l.style==="pendant"){let f=new Fn({color:13018206,metalness:.8,roughness:.26}),g=new ft(new ea(.13,.035,12,48),f);g.position.set(0,u+.045,.02),t.add(g);let _={cinnabar:9185309,ink:2107426,jade:5404006}[l.cord]||9185309,m=new Os([new k(-.03,u+.15,0),new k(-.48,u+.55,-.02),new k(-.48,u+.83,-.05),new k(0,u+.93,-.06),new k(.48,u+.83,-.05),new k(.48,u+.55,-.02),new k(.03,u+.15,0)]),p=new ft(new ta(m,80,.022,8,!1),new Fn({color:_,roughness:.9}));t.add(p)}else if(l.style==="stand"){let f=new ft(new Hi(1.35,1.48,.22,80),new Fn({color:3614236,roughness:.45}));f.position.set(0,d-.25,0),i.add(f);let g=new ft(new Hi(1.36,1.36,.025,80),new Fn({color:11045457,metalness:.65,roughness:.3}));g.position.set(0,d-.125,0),i.add(g);for(let _ of[-.42,.42]){let m=new ft(new Hi(.025,.025,.3,12),new Fn({color:11835229,metalness:.7,roughness:.3}));m.position.set(_,d-.05,0),i.add(m)}}e.userData.presentation=l}return{update:a,dispose(){r(t),r(i),e.remove(t),n.remove(i)}}}var sx,ip=cs(()=>{ga();sx={style:"stone",backdrop:"ink",cord:"cinnabar"}});function ax(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ox(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ap),this.state=ot.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cx(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ot.DOLLY;break;case xi.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}break;case xi.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ot.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ot.PAN}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Jh)}function hx(n){switch(this.state){case ot.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ot.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ot.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ux(n){this.enabled===!1||this.enableZoom===!1||this.state!==ot.NONE||(n.preventDefault(),this.dispatchEvent(Jh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ap))}function dx(n){this.enabled!==!1&&this._handleKeyDown(n)}function fx(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ot.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ot.TOUCH_PAN;break;default:this.state=ot.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ot.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ot.TOUCH_DOLLY_ROTATE;break;default:this.state=ot.NONE}break;default:this.state=ot.NONE}this.state!==ot.NONE&&this.dispatchEvent(Jh)}function px(n){switch(this._trackPointer(n),this.state){case ot.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ot.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ot.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ot.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ot.NONE}}function mx(n){this.enabled!==!1&&n.preventDefault()}function gx(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _x(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sp,Jh,ap,ql,rp,rx,Pt,Jt,ot,Zh,Yl,op=cs(()=>{ga();sp={type:"change"},Jh={type:"start"},ap={type:"end"},ql=new Ds,rp=new dn,rx=Math.cos(70*pa.DEG2RAD),Pt=new k,Jt=2*Math.PI,ot={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zh=1e-6,Yl=class extends oa{constructor(e,t=null){super(e,t),this.state=ot.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new fn,this._lastTargetPosition=new k,this._quat=new fn().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hs,this._sphericalDelta=new Hs,this._scale=1,this._panOffset=new k,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new k,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=ax.bind(this),this._onPointerUp=lx.bind(this),this._onContextMenu=mx.bind(this),this._onMouseWheel=ux.bind(this),this._onKeyDown=dx.bind(this),this._onTouchStart=fx.bind(this),this._onTouchMove=px.bind(this),this._onMouseDown=cx.bind(this),this._onMouseMove=hx.bind(this),this._interceptControlDown=gx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sp),this.update(),this.state=ot.NONE}update(e=null){let t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ot.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),s<-Math.PI?s+=Jt:s>Math.PI&&(s-=Jt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Pt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new k(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ql.origin.copy(this.object.position),ql.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ql.direction))<rx?this.object.lookAt(this.target):(rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),ql.intersectPlane(rp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zh||this._lastTargetPosition.distanceToSquared(this.target)>Zh?(this.dispatchEvent(sp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Pt.copy(s).sub(this.target);let r=Pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new me,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}});var lp={};Kp(lp,{createAgateScene:()=>yx});function yx(n,{hero:e=!1}={}){let t=new Zs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setPixelRatio(Math.min(devicePixelRatio,1.7)),t.setClearColor(0,0),t.outputColorSpace=Ct,t.toneMapping=Ko,t.toneMappingExposure=1.15,n.appendChild(t.domElement);let i=new _i,s=new Bt(35,1,.1,100);s.position.set(0,.2,7);let r=new Yl(s,t.domElement);r.enableDamping=!0,r.enablePan=!1,r.minDistance=4.5,r.maxDistance=9,r.autoRotate=e&&!matchMedia("(prefers-reduced-motion: reduce)").matches,r.autoRotateSpeed=.65;let a=new _i;a.background=new $e(7827556);let o=new ft(new gi(20,20,20),new Jn({color:5461834,side:Nt}));a.add(o);for(let[z,X,A,I,N,$,ie]of[[-4,3,2,2,5,16770749,5],[4,2,3,1,4,15331821,6],[0,5,-1,5,2,16767898,4],[0,-3,2,4,1,11957562,1]]){let se=new ft(new Nn(I,N),new Jn({color:new $e($).multiplyScalar(ie)}));se.position.set(z,X,A),se.lookAt(0,0,0),a.add(se)}let l=new js(t),c=l.fromScene(a,.04);i.environment=c.texture,l.dispose(),a.traverse(z=>{z.geometry?.dispose(),z.material?.dispose()});let h=new Qr(1.42,120,90),u=h.attributes.position;for(let z=0;z<u.count;z++){let X=u.getX(z),A=u.getY(z),I=u.getZ(z),N=1+.08*Math.sin(X*2.3+A*2.6)+.035*Math.sin(A*5.3-I*3.2);u.setXYZ(z,X*N*1.12,A*N*1.02,I*N*.57)}h.computeVertexNormals();let d=new na({color:15915712,roughness:.21,metalness:.02,clearcoat:1,clearcoatRoughness:.12,transmission:.17,thickness:1.5,ior:1.53,envMapIntensity:1.4}),f=!0;d.onBeforeCompile=z=>{f&&(z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vMineral;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMineral=position;`),z.fragmentShader=z.fragmentShader.replace("#include <common>",`#include <common>
 varying vec3 vMineral;
 float hashN(vec3 p){p=fract(p*.3183099+vec3(.1,.2,.3));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
 float noiseN(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hashN(i),hashN(i+vec3(1,0,0)),f.x),mix(hashN(i+vec3(0,1,0)),hashN(i+vec3(1,1,0)),f.x),f.y),mix(mix(hashN(i+vec3(0,0,1)),hashN(i+vec3(1,0,1)),f.x),mix(hashN(i+vec3(0,1,1)),hashN(i+vec3(1,1,1)),f.x),f.y),f.z);}
 float fbmN(vec3 p){return .55*noiseN(p)+.27*noiseN(p*2.1)+.13*noiseN(p*4.2)+.05*noiseN(p*8.4);}
 vec3 agateColor(vec3 p){vec3 q=p*1.5;float n=fbmN(q*2.4);float r=length(vec2(q.x*.90+sin(q.y*1.4)*.35,q.y*.72))+n*.53;float bands=.5+.5*sin(r*20.+fbmN(q*5.)*3.);float broad=.5+.5*sin(r*5.1+q.z*.9);vec3 red=vec3(.39,.055,.018),amber=vec3(.80,.34,.07),cream=vec3(.95,.80,.55);vec3 c=mix(red,amber,smoothstep(.08,.78,broad));c=mix(c,cream,pow(bands,15.)*.88);c=mix(c,vec3(.97,.89,.73),smoothstep(.76,.99,broad)*.7);float grain=noiseN(q*160.);return c*(.94+.1*grain);}
 `).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb=agateColor(vMineral);`))},d.customProgramCacheKey=()=>f?"agate-procedural-v1":"agate-texture-v1";let g=new ft(h,d);g.rotation.set(-.15,-.2,-.22),i.add(g);let _=new Xi(16771272,4.2);_.position.set(-3,4,5),i.add(_);let m=new Xi(13164752,1.8);m.position.set(4,1,2),i.add(m);let p=new Xi(16753223,2);p.position.set(1,-1,-3),i.add(p),i.add(new aa(13812125,.5));let T=document.createElement("canvas");T.width=256,T.height=256;let x=T.getContext("2d"),y=x.createRadialGradient(128,128,0,128,128,128);y.addColorStop(0,"rgba(0,0,0,.65)"),y.addColorStop(.5,"rgba(0,0,0,.22)"),y.addColorStop(1,"transparent"),x.fillStyle=y,x.fillRect(0,0,256,256);let R=new zi(T),C=new ft(new Nn(4.5,2),new Jn({map:R,transparent:!0,depthWrite:!1}));C.position.set(0,-1.7,-.6),C.rotation.x=-.5,i.add(C);let D=()=>{let z=n.getBoundingClientRect();z.width<1||z.height<1||(t.setSize(z.width,z.height),s.aspect=z.width/z.height,s.updateProjectionMatrix())},F=new ResizeObserver(D);F.observe(n),D();let S=!0;t.setAnimationLoop(()=>{!S||n.offsetParent===null||(r.update(),t.render(i,s))});let M=null,L=null,V=null,q=np(i,g);return{renderer:t,stone:g,controls:r,resize:D,setTexture(z,{kind:X,normalCanvas:A,polish:I=.72,light:N="left",thickness:$=.24,presentation:ie}={}){f=!1;let se=X+":"+$+":"+JSON.stringify(es(X));if(X&&se!==V){let Y=es(X),he=new ks;Y.forEach(([U,K],de)=>de?he.lineTo(U*1.4,-K*1.4):he.moveTo(U*1.4,-K*1.4)),he.closePath();let Me=new Kr(he,{depth:$,bevelEnabled:!0,bevelThickness:.07,bevelSize:.055,bevelSegments:4,curveSegments:24,steps:1}),Ce=Me.attributes.position,E=Me.attributes.uv;for(let U=0;U<Ce.count;U++)E.setXY(U,(Ce.getX(U)/1.4+1)/2,(Ce.getY(U)/1.4+1)/2);Me.center(),Me.computeVertexNormals(),Me.userData.kind=X,h.dispose(),h=Me,g.geometry=h,g.rotation.set(-.1,-.24,X==="leaf"?-.3:0),r.autoRotate=!1,V=se}M?.dispose(),M=new zi(z),M.colorSpace=Ct,M.anisotropy=t.capabilities.getMaxAnisotropy(),d.map=M,L?.dispose(),A?(L=new zi(A),d.normalMap=L,d.normalScale.set(.65,.65)):d.normalMap=null,d.color.set(16777215),d.roughness=.7-I*.59,d.clearcoat=I,d.clearcoatRoughness=.32-I*.23,d.transmission=.04+I*.12,d.onBeforeCompile=()=>{},d.needsUpdate=!0,_.position.x=N==="right"?3:-3,m.position.x=N==="right"?-4:4,q.update(ie)},setOrientation(z){r.autoRotate=!1,r.reset(),g.rotation.set(0,z==="back"?Math.PI:z==="side"?Math.PI/2:0,0),s.position.set(0,.2,7),r.update(),t.render(i,s)},capture(){return t.render(i,s),t.domElement.toDataURL("image/png")},setAuto(z){r.autoRotate=z},dispose(){S=!1,t.setAnimationLoop(null),F.disconnect(),r.dispose(),q.dispose(),h.dispose(),d.dispose(),c.dispose(),M?.dispose(),L?.dispose(),R.dispose(),C.material.dispose(),C.geometry.dispose(),t.dispose(),t.domElement.remove()}}}var cp=cs(()=>{ip();ts();ga();op()});var vr=[{id:"journey-city",title:"阜新市推出2026春季四大精品旅游线路",publisher:"阜新市人民政府网站 · 阜新日报 · 2026-04-22",url:"https://www.fuxin.gov.cn/content/2026/1065588.html",note:"核对玛瑙文化与文旅线路的公开背景。历史节庆安排未当作当前活动发布；本站三种行程为可编辑的研学构想，不是已确认的官方旅游产品。"},{id:"formation-museum",title:"Agate · 玛瑙的常见产状与材质",publisher:"史密森尼国家自然历史博物馆",url:"https://naturalhistory.si.edu/explore/collections/geogallery/10026005",note:"形成图解的入门依据：火山岩空隙、富硅水与玛瑙层纹。图解为概念模型，不是特定阜新原石的成因鉴定。"},{id:"formation-review",title:"Mineralogy, Geochemistry and Genesis of Agate—A Review",publisher:"Götze、Möckel、Pan · Minerals 2020, 10(11), 1037",url:"https://doi.org/10.3390/min10111037",note:"补充不同地质成因、二氧化硅结晶与自组织、结构和杂质分布对条带和颜色的影响；不把每一条带等同于一次进水。"},{id:"heritage",title:"阜新玛瑙雕 · 国家级非遗项目名录",publisher:"中国非物质文化遗产网",url:"https://www.ihchina.cn/project_details/14006/",note:"核对项目名称、2006年第一批名录身份、编号Ⅶ-30、材质与工艺特点。页面包含历史材料，人物年龄等动态信息未采用。"},{id:"town",title:"阜新市 · 玛瑙特色小镇景区",publisher:"辽宁省文化和旅游厅 · 2025-11-21",url:"https://whly.ln.gov.cn/whly/wlzt/sjly/ajjq/2025112116121250991/index.shtml",note:"核对十家子镇文旅场景与玛瑙体验、专业市场、八宝海湿地、辽代闾州塔等资源。"},{id:"rural",title:"“阜新玛瑙工匠”获评省级劳务品牌",publisher:"阜新市人力资源和社会保障局 · 2026-01-15",url:"https://rsj.fuxin.gov.cn/content/2026/1037027.html",note:"核对工匠工作室、研学体验、数字推广与农户参与产业链的应用背景。"}],Lu=[{title:"玛瑙如何形成",keys:["形成","成因","怎么来","地质","富硅","空隙","结晶"],text:"以常见的火山岩空隙充填路径为例，富硅流体进入岩石空隙，二氧化硅在适宜条件下沉淀与结晶。结构、孔隙与杂质分布的差异可形成可见层纹。玛瑙也存在其他地质成因；不能把每一条纹都等同于一次进水，也没有适用于所有玛瑙的统一形成时长。",source:"formation-review"},{title:"国家级非遗身份",keys:["非遗","国家","名录","时候","哪年","2006","身份","级别"],text:"阜新玛瑙雕于2006年入选第一批国家级非物质文化遗产代表性项目名录，项目编号为Ⅶ-30，类别为传统美术。",source:"heritage"},{title:"材质与工艺特点",keys:["工艺","特点","材料","纹色","色彩","条带","绝活","流程","雕刻"],text:"玛瑙的天然色彩和条带为设计提供线索。官方项目资料介绍了选料、设计、雕琢与抛光等任务，并列举素活、掏膛、活环与透雕等技艺。具体作品的工序与方案需结合材料判断。",source:"heritage"},{title:"十家子镇文旅场景",keys:["十家子","旅游","乡土","哪里","位置","景区","湿地","闾州","市场"],text:"玛瑙特色小镇位于阜新蒙古族自治县十家子镇。省文旅厅介绍其玛瑙文化、专业市场以及八宝海湿地、辽代闾州塔等资源，可为文化与自然相连的研学构想提供场景。实际开放和接待需向当地确认。",source:"town"},{title:"乡村经营与参与",keys:["乡村","振兴","农户","收入","增收","经营","就业","研学","工作室"],text:"阜新市人社局公开材料提出串联工匠工作室、加工园区和非遗展示馆发展研学与体验，拓展数字推广渠道，并鼓励农户参与产业链。本原型据此设计文化学习、数字创作与到访意向流程，尚未验证实际增收。",source:"rural"}],Ha=[{title:"观料",subtitle:"先观察，再构思",text:"观察可见的色彩、条带与外形，寻找适合表达的视觉关系。照片能辅助观察表面信息；真实内部结构仍需要实物判断。"},{title:"构思",subtitle:"让纹色参与表达",text:"结合材料外观提出构图。在数字创作中尝试图案的尺度、位置与方向，比较不同方案与纹色的关系。"},{title:"雕琢",subtitle:"理解形与工的关系",text:"粗细雕琢与不同专项技法需要经验和工具。这里展示工艺学习的逻辑，数字预览不直接给出加工路径或安全操作指导。"},{title:"润饰",subtitle:"从形态走向完整作品",text:"抛光与配座等处理完善作品的观看与陈设效果。实际安排依作品与工坊做法而定，数字材质只用于外观体验。"}];var Va=[{id:"welcome",name:"中国玛瑙小镇会客厅",short:"会客厅",type:"文化起点",icon:"hall",x:24,y:47,image:"hero",minutes:30,tag:"认识小镇",fact:"省文旅厅景区介绍列出了中国玛瑙小镇会客厅。",intro:"先建立对小镇的整体认识，再带着问题去看作品与手艺。",observe:"找一件感兴趣的作品，记下它的颜色、造型，以及你想追问的一个问题。",prepare:"到访前核实开放与讲解安排。",source:"town"},{id:"studio",name:"工艺观察与交流",short:"手艺现场",type:"工坊场景",icon:"craft",x:45,y:68,image:"craft",minutes:60,tag:"接待需先联系",fact:"市人社局资料提出串联工匠工作室、加工园区与非遗展示馆发展研学体验。",intro:"把屏幕上的纹色构思，变成一次对材料与工艺的真实观察。",observe:"问问工匠：这块材料的哪一抹颜色，最先决定了作品的构思？",prepare:"具体工坊、可参观环节与体验项目需事先联系；本页不指定合作接待方。",source:"rural"},{id:"market",name:"玛瑙专业市场",short:"逛逛市集",type:"产业观察",icon:"market",x:49,y:34,image:"hero",minutes:35,tag:"认识原料与文创",fact:"省文旅厅景区介绍提到战国红大市场等专业市场。",intro:"从原料、半成品到文创，观察一块石头如何走进日常生活。",observe:"选择同一种造型，比较不同纹色带来的视觉差异；把喜欢的构思记下来。",prepare:"记录材质与工艺说明，购买与定制由你与经营者自行确认。",source:"town"},{id:"water",name:"八宝海湿地景观",short:"水岸慢行",type:"自然观察",icon:"water",x:76,y:24,image:"water",minutes:40,tag:"把脚步放慢",fact:"八宝海湿地景观见于省文旅厅的小镇介绍。",intro:"暂时离开精细的石纹，把目光交给水面、岸线与季节的色彩。",observe:"在自然中找到三种颜色，想一想它们能否成为下一件玛瑙作品的配色灵感。",prepare:"核实可进入区域与当天条件；不将湿地游览视为已确认开放的体验项目。",source:"town"},{id:"pagoda",name:"辽代闾州塔",short:"寻访古迹",type:"历史线索",icon:"pagoda",x:83,y:67,image:"water",minutes:25,tag:"从石纹走向乡土",fact:"辽代闾州塔列于省文旅厅介绍的小镇历史遗迹中。",intro:"在工艺之外，为这次到访保留一段理解地方历史的时间。",observe:"观察古迹的轮廓与层次；用简单线条记录你对地方建筑的第一印象。",prepare:"出发前核实到达方式、可参观范围及文物保护要求。",source:"town"}],xr=[{id:"craft",title:"半日识艺",subtitle:"先知艺，再观工",description:"把重点留给文化认知、工艺交流与市场观察。适合第一次接触玛瑙的你。",stops:["welcome","studio","market"],interest:"玛瑙文化与工艺观察"},{id:"slow",title:"一日慢游",subtitle:"手艺与乡土，都留一点时间",description:"将文化、工艺、市集、水岸与古迹串成自己的慢游构想。交通与接待另行安排。",stops:["welcome","studio","market","water","pagoda"],interest:"乡土文化与自然游览"},{id:"family",title:"亲子研学",subtitle:"带着问题，一起去发现",description:"以看得见的色彩和形状为线索，组合文化认识、自然观察与工艺交流。",stops:["welcome","water","studio"],interest:"亲子研学与纹色创作"}],Ga=[{label:"观纹色",title:"先问这块石，有什么。",text:"看明暗、条带和色彩的边界。把材料本身的特征记下来，再决定想表达什么。",question:"这块材料最值得保留的天然纹色是什么？"},{label:"看构思",title:"让材料，参与决定造型。",text:"同样一抹颜色，换个取形方向，就可能成为叶片、山形或果实。观察工匠如何在保留与取舍之间判断。",question:"为什么选这个方向和轮廓，而不是另一个？"},{label:"识雕琢",title:"从外轮廓，走向细部层次。",text:"关注造型如何被逐步明确，哪些细部用来突出主题。实际工序与可观看环节，应以现场安排为准。",question:"这件作品中，最需要经验判断的是哪一步？"},{label:"赏润饰",title:"最后一点光，也关乎表达。",text:"观察表面光泽、刻线和配座之间的关系。精细的处理，帮助你看清材料原有的层次。",question:"这种表面处理，怎样让纹色更容易被看见？"}],Mn=[{question:"开始构思前，最值得先做什么？",answers:["观察材料已有的天然纹色","先把所有材料想成同一种颜色","完全忽略石头，照着模板取形"],correct:0,explanation:"先观料，再构思，让天然色彩与条带成为设计的一部分。",source:"heritage"},{question:"照片最适合帮助我们观察哪一项？",answers:["原料内部所有裂隙","表面可见的颜色与纹理","真实加工后的全部结果"],correct:1,explanation:"照片可以辅助观察可见表面，内部结构与实际加工判断仍需要实物和经验。",source:"heritage"},{question:"把工艺交流加入行程后，出发前还需要做什么？",answers:["直接把本地收藏当成预约凭证","默认所有工坊都随时开放","确认接待方、时间与可参观内容"],correct:2,explanation:"本页帮助整理研学构想。真实参观和体验需要向当地接待方确认。",source:"rural"}],hs={spring:{name:"春日寻色",icon:"芽",text:"把嫩绿、花色和水岸变化收进观察笔记。花期与可进入区域，出发前再核实。"},summer:{name:"夏日缓行",icon:"水",text:"为水岸观察留出休息时间。根据当天条件调整户外安排，把工艺交流与室内观展灵活组合。"},autumn:{name:"秋日拾光",icon:"叶",text:"从金黄、赭色与温润石色中寻找呼应。记下一组自然配色，带回数字工坊继续创作。"},winter:{name:"冬日访艺",icon:"炉",text:"把重点放在文化与工艺观察，户外环节保留弹性；开放与交通条件以当地确认为准。"}},Wa=[{id:"culture",title:"文化被看见",label:"文化理解",icon:"eye",text:"以可追溯的文化讲述、纹色观察与数字创作，让更多人对玛瑙手艺产生具体的问题与兴趣。",visitor:"先了解作品与材料，再决定想看什么。",organizer:"把参观前的知识准备与现场观察任务衔接起来。",maker:"让作品的构思和工艺被清楚地介绍。"},{id:"experience",title:"手艺有交流",label:"研学体验",icon:"craft",text:"把线上兴趣整理成到访构想，带着关于材料、设计与工序的问题，与当地接待方沟通。",visitor:"把想问的问题写进手册，提前确认接待。",organizer:"明确人数、时间、内容与组织责任，再对接工坊。",maker:"根据实际能力安排可参观、可讲解的内容。"},{id:"creation",title:"作品进日常",label:"文创连接",icon:"leaf",text:"从一件小文创认识材料与手作价值；在真实需求中，连接设计、制作、展示与销售。",visitor:"关注材质与工艺说明，留下自己的设计偏好。",organizer:"以学习收获组织作品讨论，避免把购物当作研学任务。",maker:"展示材料特点与制作过程，沟通定制边界。"},{id:"local",title:"乡土共参与",label:"本地协作",icon:"village",text:"工匠、经营者、研学组织者与村庄共同参与，才能让文化兴趣进一步连接到本地服务和就业。",visitor:"在尊重当地安排的前提下，了解更多乡土文化。",organizer:"优先核实本地接待与协作条件，逐步建立合作。",maker:"与市场、村庄及研学组织者协调实际服务。"}];var Du={hall:"M4 11L12 5l8 6M6 11v9h12v-9M10 20v-5h4v5M3 21h18",craft:"M4 20l6-2 10-10-4-4L6 14l-2 6M13 7l4 4M6 14l4 4",market:"M4 10h16l-2-6H6l-2 6M5 10v10h14V10M9 20v-6h6v6M3 10q2 5 4 0q2 5 5 0q2 5 5 0q2 5 4 0",water:"M3 10q3-4 6 0t6 0t6 0M3 16q3-4 6 0t6 0t6 0M12 3v3",pagoda:"M12 2v3M8 6h8M6 9h12M5 13h14M3 18h18M8 9v4m8-4v4M7 13v5m10-5v5M5 22h14M9 18v4m6-4v4",eye:"M2 12q10-14 20 0q-10 14-20 0M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8",leaf:"M5 19C2 8 11 3 21 3c0 10-5 17-16 16ZM4 21L17 7M9 15l-1-5m4 2h5",village:"M3 12l5-4 5 4v8H3v-8ZM13 8l4-3 4 3v12h-8M6 20v-5h4v5M16 11h2m-2 4h2"},gc=(n,e="")=>`<svg class="${e}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Du[n]||Du.leaf}"/></svg>`,Qp=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Uu=n=>`./assets/journey-v2/${n}.webp`,_c=(n,e)=>{try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}},Xt=n=>Va.find(e=>e.id===n),Xa=n=>vr.find(e=>e.id===n),qa=(n,e,t,i)=>Number.isFinite(Number(n))?Math.round(Math.min(t,Math.max(e,Number(n)))):i;function Nu({toast:n,download:e}){let t=document.querySelector("#journey"),i=E=>t.querySelector(E),s=E=>[...t.querySelectorAll(E)],r="agate-journey-draft-v1",a="agate-journey-learning-v1",o=_c(r,{}),l=o&&typeof o=="object"?o:{},c=new Set,h={profile:xr.some(E=>E.id===l.profile)?l.profile:"craft",stops:[],date:typeof l.date=="string"&&/^\d{4}-\d{2}-\d{2}$/.test(l.date)?l.date:"",people:qa(l.people,1,30,2),season:Object.hasOwn(hs,l.season)?l.season:["winter","spring","summer","autumn"][Math.floor((new Date().getMonth()+1)%12/3)],customized:l.customized===!0,planId:typeof l.planId=="string"?l.planId:null};if(Array.isArray(l.stops))for(let E of l.stops)E&&Xt(E.id)&&!c.has(E.id)&&(c.add(E.id),h.stops.push({id:E.id,minutes:qa(E.minutes,10,180,Xt(E.id).minutes)}));Array.isArray(l.stops)||(h.stops=xr[0].stops.map(E=>({id:E,minutes:Xt(E).minutes})));let u=_c(a,{}),d=u&&typeof u=="object"?u:{},f={observed:d.observed===!0,quizDone:d.quizDone===!0,routePrepared:d.routePrepared===!0,question:typeof d.question=="string"?d.question.slice(0,120):"",questionSaved:d.questionSaved===!0,checks:{}};for(let E of["open","reception","content","travel"])f.checks[E]=d.checks?.[E]===!0;let g="welcome",_=0,m=0,p=Array(Mn.length).fill(null),T=0,x="visitor";function y(E,U){try{return localStorage.setItem(E,JSON.stringify(U)),!0}catch{return!1}}function R(){y(r,h),y(a,f)}function C(E){i("#journey-plan-status").textContent=E}let D=()=>xr.find(E=>E.id===h.profile),F=()=>D().title+(h.customized?" · 自选调整":""),S=()=>h.stops.reduce((E,U)=>E+U.minutes,0),M=()=>[f.observed,f.quizDone,f.routePrepared&&h.stops.length>0,f.questionSaved&&f.question.trim().length>0];function L(){return`<svg class="journey-map-art" preserveAspectRatio="none" viewBox="0 0 900 550" aria-hidden="true"><defs><linearGradient id="j-land" x2="1" y2="1"><stop stop-color="#a58b5b"/><stop offset="1" stop-color="#514734"/></linearGradient><linearGradient id="j-river"><stop stop-color="#8ca79b"/><stop offset="1" stop-color="#526f67"/></linearGradient><pattern id="j-grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#e9d4aa" stroke-opacity=".06"/></pattern></defs><rect width="900" height="550" fill="#24241b"/><rect width="900" height="550" fill="url(#j-grid)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="#15170f" opacity=".6" transform="translate(0 16)"/><path d="M62 307L211 101 616 70 857 235 709 469 280 495Z" fill="url(#j-land)" stroke="#d6b785" stroke-opacity=".3"/><path d="M62 307L280 495 709 469 857 235" fill="none" stroke="#d9bd8b" stroke-opacity=".3" stroke-width="2"/><path d="M220 110L284 192 224 305 121 337M300 98L365 202 298 370 382 487M453 84L424 186 493 315 452 481M544 82L495 182 582 264 538 476M664 102L615 210 710 288 668 469" fill="none" stroke="#e0cfa5" stroke-opacity=".14" stroke-width="2"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#2d4337" stroke-opacity=".8" stroke-width="49"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="url(#j-river)" stroke-width="40"/><path d="M640 92Q557 159 644 201T669 303Q568 352 590 481" fill="none" stroke="#c0d3b6" stroke-opacity=".3" stroke-dasharray="5 17" stroke-width="1.5"/><g fill="#49553a" stroke="#9baf76" stroke-opacity=".25">${[[170,225],[190,210],[200,242],[703,155],[728,167],[748,143],[346,427],[373,440],[400,422]].map(([E,U])=>`<path d="M${E} ${U-15}l-9 23h18Z"/><path d="M${E} ${U+8}v9"/>`).join("")}</g><g fill="#b7a37b" stroke="#493c28" stroke-width="1"><path d="M280 230l27-15 31 14-26 17Z"/><path d="M280 230v31l32 18v-33Z" fill="#705a3d"/><path d="M312 246l26-17v32l-26 18Z" fill="#8c7550"/><path d="M418 147l20-12 24 12-21 14Z"/><path d="M418 147v24l23 13v-23Z" fill="#6c563b"/><path d="M441 161l21-14v24l-21 13Z" fill="#927a52"/><path d="M422 345l30-16 29 17-27 16Z"/><path d="M422 345v27l32 18v-28Z" fill="#705a3d"/><path d="M454 362l27-16v27l-27 17Z" fill="#8f7551"/></g><g transform="translate(752 364)" stroke="#d4b27e" stroke-width="2" fill="#755438"><path d="M0-65v80M-10-51h20M-17-31h34M-23-9h46M-28 14h56M-10-51v20m20-20v20M-13-31v22m26-22v22M-18-9v23m36-23v23"/></g><path id="journey-map-route" fill="none" stroke="#f3ce8d" stroke-width="2" stroke-dasharray="5 8"/><text x="75" y="530" fill="#c9af83" font-size="10" letter-spacing="3">SHIJIAZI · A THEMATIC JOURNEY</text><g transform="translate(845 50)" fill="none" stroke="#bfa16d"><path d="M0-18V18M-8-10L0-18 8-10"/><circle cy="0" r="25" stroke-opacity=".25"/></g></svg>`+Va.map(E=>`<button class="journey-map-node" data-place="${E.id}" style="--node-x:${E.x}%;--node-y:${E.y}%" aria-pressed="${E.id===g}" aria-label="探索${E.name}">${gc(E.icon)}<span>${E.short}</span><b class="journey-node-order"></b></button>`).join("")}i("#journey-map").innerHTML=L();function V(){s("[data-place]").forEach(E=>{let U=h.stops.findIndex(K=>K.id===E.dataset.place);E.classList.toggle("in-plan",U>=0),E.setAttribute("aria-pressed",String(E.dataset.place===g)),E.querySelector(".journey-node-order").textContent=U>=0?U+1:""}),i("#journey-map-route").setAttribute("d",h.stops.map((E,U)=>{let K=Xt(E.id);return`${U?"L":"M"}${K.x*9},${K.y*5.5}`}).join(" "))}function q(E){let U=Xt(E);if(!U)return;g=E;let K=Xa(U.source),de=h.stops.some(fe=>fe.id===E);i("#journey-place-detail").innerHTML=`<div class="journey-detail-image"><img src="${Uu(U.image)}" width="600" height="337" loading="lazy" alt="AI${U.image==="craft"?"手艺":U.image==="water"?"乡野水岸":"玛瑙文旅"}情境示意，非${Qp(U.name)}实景"><span>AI 情境示意 · 非此点位实景</span></div><div class="journey-detail-copy"><p class="eyebrow">${U.type} / ${U.tag}</p><h3>${U.name}</h3><p>${U.intro}</p><div class="journey-detail-observe"><span>可以带着这个任务去观察</span><p>${U.observe}</p></div><p class="journey-place-prepare">${U.prepare}</p><button class="journey-outline-button" id="journey-add-this" ${de?"disabled":""}>${de?"已在我的行程 ✓":"加入我的行程 ＋"}</button><details class="journey-place-source"><summary>查看资料依据</summary><p>${U.fact}</p><a href="${K.url}" target="_blank" rel="noopener">${K.publisher} ↗</a></details></div>`,i("#journey-add-this").onclick=()=>A(E),V()}s("[data-place]").forEach(E=>E.onclick=()=>q(E.dataset.place));function z(){i("#journey-presets").innerHTML=xr.map((E,U)=>`<button data-journey-preset="${E.id}" aria-pressed="${E.id===h.profile}"><span class="journey-preset-index">0${U+1}</span><span><strong>${E.title}</strong><small>${E.subtitle}</small></span><b>↗</b></button>`).join(""),s("[data-journey-preset]").forEach(E=>E.onclick=()=>{h.profile=E.dataset.journeyPreset,h.stops=D().stops.map(U=>({id:U,minutes:Xt(U).minutes})),h.customized=!1,f.routePrepared=!0,X("已按这份灵感整理路线，可继续增减与调整。"),z()})}function X(E="行程草稿已更新。"){I(),q(g),se(),R(),C(E)}function A(E){!Xt(E)||h.stops.some(U=>U.id===E)||(h.stops.push({id:E,minutes:Xt(E).minutes}),h.customized=!0,f.routePrepared=!0,X(`已将“${Xt(E).short}”加入行程。`))}function I(){i("#journey-route-title").textContent=F(),i("#journey-route-description").textContent=D().description,i("#journey-stop-total").textContent=`${h.stops.length} 站`,i("#journey-route-list").innerHTML=h.stops.length?h.stops.map((E,U)=>{let K=Xt(E.id),de=[10,20,25,30,35,40,45,60,90,120,180,E.minutes].sort((fe,le)=>fe-le).filter((fe,le,We)=>We.indexOf(fe)===le);return`<article class="journey-route-item"><span class="journey-route-number">0${U+1}</span><div class="journey-route-item-copy"><span>${K.type}</span><h4>${K.name}</h4><p>${K.observe}</p><label>现场停留 <select data-route-minutes="${K.id}" aria-label="${K.name}现场停留分钟">${de.map(fe=>`<option value="${fe}" ${fe===E.minutes?"selected":""}>${fe} 分钟</option>`).join("")}</select></label></div><div class="journey-route-item-actions"><button data-route-move="${K.id}" data-direction="-1" aria-label="上移${K.name}" ${U===0?"disabled":""}>↑</button><button data-route-move="${K.id}" data-direction="1" aria-label="下移${K.name}" ${U===h.stops.length-1?"disabled":""}>↓</button><button data-route-remove="${K.id}" aria-label="移除${K.name}">×</button></div></article>`}).join(""):'<div class="journey-empty-route"><h4>留一张空白，重新出发。</h4><p>从下方选一站，或重新选择一份行程灵感。</p></div>',i("#journey-add-stops").innerHTML=Va.map(E=>{let U=h.stops.some(K=>K.id===E.id);return`<button data-route-add="${E.id}" ${U?"disabled":""}>${gc(E.icon)}${E.short}<span>${U?"✓":"＋"}</span></button>`}).join(""),s("[data-route-add]").forEach(E=>E.onclick=()=>A(E.dataset.routeAdd)),s("[data-route-remove]").forEach(E=>E.onclick=()=>{h.stops=h.stops.filter(U=>U.id!==E.dataset.routeRemove),h.customized=!0,X("已移除一站，可随时重新加入。")}),s("[data-route-move]").forEach(E=>E.onclick=()=>{let U=h.stops.findIndex(de=>de.id===E.dataset.routeMove),K=U+Number(E.dataset.direction);K<0||K>=h.stops.length||([h.stops[U],h.stops[K]]=[h.stops[K],h.stops[U]],h.customized=!0,X("已调整路线顺序。"),i(`[data-route-move="${E.dataset.routeMove}"][data-direction="${E.dataset.direction}"]`)?.focus({preventScroll:!0}))}),s("[data-route-minutes]").forEach(E=>E.onchange=()=>{let U=h.stops.find(K=>K.id===E.dataset.routeMinutes);U&&(U.minutes=qa(E.value,10,180,U.minutes)),h.customized=!0,X("已更新现场停留安排。")}),i("#journey-total-minutes").textContent=S(),i("#journey-summary-people").textContent=`${h.people} 人同行`,i("#journey-summary-date").textContent=h.date||"日期待定";for(let E of["#plan-trip","#journey-export","#journey-copy"])i(E).disabled=!h.stops.length;i("#plan-trip").innerHTML=h.planId?"更新我的行程 <span>✓</span>":"保存到我的作品 <span>＋</span>",V()}i("#journey-date").value=h.date,i("#journey-people").value=h.people,i("#journey-date").onchange=E=>{h.date=E.target.value,R(),I()},i("#journey-people").onchange=E=>{h.people=qa(E.target.value,1,30,2),E.target.value=h.people,R(),I()};function N(){let E=hs[h.season];i("#journey-season-note").innerHTML=`<span>${E.icon}</span><div><strong>${E.name}</strong><p>${E.text}</p></div>`,s("[data-journey-season]").forEach(U=>U.setAttribute("aria-pressed",String(U.dataset.journeySeason===h.season)))}s("[data-journey-season]").forEach(E=>E.onclick=()=>{h.season=E.dataset.journeySeason,N(),R()});function $(){return["石里有境 · 十家子研学构想",F(),`日期：${h.date||"待定"} / 同行：${h.people} 人`,`现场观察安排：${S()} 分钟（不含交通、用餐与等候）`,"",...h.stops.map((E,U)=>`${U+1}. ${Xt(E.id).name} · ${E.minutes} 分钟
   观察：${Xt(E.id).observe}`),"",f.question.trim()?`想问工匠：${f.question.trim()}`:"",`季节灵感：${hs[h.season].name}`,`线上准备：${M().filter(Boolean).length} / 4`,"","这是本地行程构想，不是预约或订单。实际开放、费用、接待与交通请向当地确认。",`小镇资料：${Xa("town").url}`,`工艺与研学资料：${Xa("rural").url}`].filter(E=>E!==null).join(`
`)}i("#plan-trip").onclick=()=>{if(!h.stops.length)return;let E=_c("agate-plans-v1",[]),U=Array.isArray(E)?E:[],K=h.planId||crypto.randomUUID(),de=U.findIndex(le=>le?.id===K),fe={id:K,version:2,date:h.date||"日期待定",interest:D().interest,note:`${F()} · ${h.people}人
${h.stops.map(le=>Xt(le.id).name).join(" → ")}
现场观察 ${S()} 分钟，不含交通与用餐。${f.question.trim()?`
想问工匠：`+f.question.trim():""}`,route:h.stops.map(le=>({...le,name:Xt(le.id).name})),people:h.people,season:h.season,question:f.question.trim(),updatedAt:new Date().toISOString()};if(de>=0?U[de]=fe:U.unshift(fe),!y("agate-plans-v1",U.slice(0,50))){n("浏览器未能保存，请先导出研学手册。");return}h.planId=K,f.routePrepared=!0,X("行程已保存，可在“我的作品”查看。"),n("已保存研学行程，尚未产生预约。")},i("#journey-copy").onclick=async()=>{let E=$();try{await navigator.clipboard.writeText(E),n("行程文字已复制。")}catch{e(new Blob([E],{type:"text/plain;charset=utf-8"}),"十家子研学行程.txt"),n("已导出行程文字。")}};function ie(E){_=E;let U=Ga[E];i("#craft-detail").innerHTML=`<p class="eyebrow">OBSERVATION / 0${E+1}</p><h3>${U.title}</h3><p>${U.text}</p>`,i("#journey-craft-question").textContent=U.question,s("[data-journey-craft]").forEach(K=>K.setAttribute("aria-pressed",String(Number(K.dataset.journeyCraft)===E)))}i("#craft-tabs").innerHTML=Ga.map((E,U)=>`<button data-journey-craft="${U}" aria-pressed="${U===0}"><b>0${U+1}</b>${E.label}</button>`).join(""),s("[data-journey-craft]").forEach(E=>E.onclick=()=>ie(Number(E.dataset.journeyCraft))),i("#journey-record-observation").onclick=()=>{f.observed=!f.observed,f.observed&&!f.question.trim()&&(i("#journey-question").placeholder=Ga[_].question),R(),se(),n(f.observed?"已把这条观察收进线上研学准备。":"已取消这项观察记录。")};function se(){let E=M(),U=E.filter(Boolean).length;i("#journey-passport-count").innerHTML=`${U}<small>/ 4</small>`,i("#journey-passport-circle").style.strokeDashoffset=String(2*Math.PI*51*(1-U/4));let K=[["观纹","记录一条手艺观察","journey-craft"],["识艺","完成一轮工艺问答","journey-passport"],["入乡","整理自己的行程","journey-plan"],["问艺","留一个想问的问题","journey-passport"]];i("#journey-passport-tasks").innerHTML=K.map(([de,fe,le],We)=>`<button data-task-target="${le}" data-task-index="${We}" class="${E[We]?"complete":""}"><span>${de}</span><div><strong>${fe}</strong><small>${E[We]?"已收进线上准备":"等你来发现"}</small></div><b>${E[We]?"✓":"↗"}</b></button>`).join(""),s("[data-task-target]").forEach(de=>de.onclick=()=>{Me(de.dataset.taskTarget),de.dataset.taskIndex==="3"&&i("#journey-question").focus({preventScroll:!0})}),i("#journey-record-observation").setAttribute("aria-pressed",String(f.observed)),i("#journey-record-observation").textContent=f.observed?"这条观察已记录 ✓":"记下这条观察 ＋"}function Y(){if(i("#journey-quiz-count").textContent=m<Mn.length?`${m+1} / ${Mn.length}`:"本轮已完成",m===Mn.length){let de=p.filter((fe,le)=>fe===Mn[le].correct).length;i("#journey-quiz").innerHTML=`<span class="journey-quiz-done">识艺 / 已收进手册</span><h3>带着新的问题，继续走近手艺。</h3><p>本轮答对 ${de} / ${Mn.length} 题。比得分更重要的，是现场能看见什么、问出什么。</p><button id="journey-quiz-restart" class="text-button">再看一轮 ↻</button>`,i("#journey-quiz-restart").onclick=()=>{m=0,p=Array(Mn.length).fill(null),Y()};return}let E=Mn[m],U=p[m]!==null,K=Xa(E.source);i("#journey-quiz").innerHTML=`<h3>${E.question}</h3><div class="journey-quiz-answers">${E.answers.map((de,fe)=>`<button data-quiz-answer="${fe}" class="${U&&fe===E.correct?"correct":U&&fe===p[m]?"chosen":""}" ${U?"disabled":""}><span>${String.fromCharCode(65+fe)}</span>${de}${U&&fe===E.correct?"<b>✓</b>":""}</button>`).join("")}</div>${U?`<div class="journey-quiz-feedback"><strong>${p[m]===E.correct?"你抓住了关键。":"再看一眼这个线索。"}</strong><p>${E.explanation}</p><a href="${K.url}" target="_blank" rel="noopener">相关资料 ↗</a><button id="journey-quiz-next" class="text-button">${m===Mn.length-1?"收进手册":"下一题"} →</button></div>`:""}`,s("[data-quiz-answer]").forEach(de=>de.onclick=()=>{p[m]=Number(de.dataset.quizAnswer),Y()}),U&&(i("#journey-quiz-next").onclick=()=>{m++,m===Mn.length&&(f.quizDone=!0,R(),se()),Y()})}i("#journey-question").value=f.question,i("#journey-question-length").textContent=[...f.question].length,i("#journey-question").oninput=E=>{f.question=E.target.value.slice(0,120),f.questionSaved=!1,i("#journey-question-length").textContent=[...f.question].length,R(),se()},i("#journey-question-save").onclick=()=>{if(!f.question.trim()){n("先写下一个想了解的问题。"),i("#journey-question").focus();return}f.questionSaved=!0,R(),se(),n("问题已收进手册，也会随行程导出。")},s("[data-journey-check]").forEach(E=>{E.checked=f.checks[E.dataset.journeyCheck],E.onchange=()=>{f.checks[E.dataset.journeyCheck]=E.checked,R()}});function he(){i("#journey-connections").innerHTML=Wa.map((U,K)=>`<button data-connection="${K}" aria-pressed="${K===T}">${gc(U.icon)}<span><small>0${K+1} / ${U.label}</small><strong>${U.title}</strong></span><b>→</b></button>`).join(""),s("[data-connection]").forEach(U=>U.onclick=()=>{T=Number(U.dataset.connection),he()});let E=Wa[T];i("#journey-connection-label").textContent=E.label,i("#journey-connection-title").textContent=E.title,i("#journey-connection-copy").textContent=E.text,i("#journey-role-copy").textContent=E[x]}s("[data-journey-role]").forEach(E=>E.onclick=()=>{x=E.dataset.journeyRole,s("[data-journey-role]").forEach(U=>U.setAttribute("aria-pressed",String(U===E))),i("#journey-role-copy").textContent=Wa[T][x]});function Me(E){document.getElementById(E)?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion:reduce)").matches?"instant":"smooth",block:"start"})}if(s("[data-journey-scroll]").forEach(E=>E.onclick=()=>Me(E.dataset.journeyScroll)),"IntersectionObserver"in window){let E=new IntersectionObserver(U=>{for(let K of U)K.isIntersecting&&s(".journey-subnav [data-journey-scroll]").forEach(de=>de.classList.toggle("active",de.dataset.journeyScroll===K.target.id))},{rootMargin:"-70px 0px -55% 0px",threshold:0});if(s(".journey-chapter").forEach(U=>E.observe(U)),!matchMedia("(prefers-reduced-motion: reduce)").matches){t.classList.add("journey-anim-ready");let U=new IntersectionObserver(K=>{for(let de of K)de.isIntersecting&&(de.target.classList.add("revealed"),U.unobserve(de.target))},{threshold:.06});s("[data-journey-reveal]").forEach(K=>U.observe(K))}}async function Ce(){if(!h.stops.length)return;let E=i("#journey-export");E.disabled=!0;let U=E.textContent;E.textContent="正在整理手册…";try{let te=function(Ie,w,v,W,J,oe,ee="#6c5842"){le.font=ae(J),le.fillStyle=ee;let Re="",ve=v;for(let Le of[...Ie])le.measureText(Re+Le).width>W&&Re?(le.fillText(Re,w,ve),Re=Le,ve+=oe):Re+=Le;return Re&&le.fillText(Re,w,ve),ve+oe};f.routePrepared=!0,R(),se(),await document.fonts.ready;let K=new Image;K.src=Uu("hero");let de=!0;try{await K.decode()}catch{de=!1}let fe=document.createElement("canvas");fe.width=1200,fe.height=1180+h.stops.length*155+(f.question.trim()?150:0);let le=fe.getContext("2d"),We=fe.width,P=fe.height,ae=(Ie,w=400)=>`${w} ${Ie}px "Microsoft YaHei","PingFang SC",sans-serif`,Q=(Ie,w,v,W,J="#382b21",oe=400)=>{le.fillStyle=J,le.font=ae(W,oe),le.fillText(Ie,w,v)};if(le.fillStyle="#f1e7d4",le.fillRect(0,0,We,P),le.fillStyle="#281b11",le.fillRect(0,0,We,390),de){let Ie=K.width,w=K.height,v=Math.max(We/Ie,390/w);le.save(),le.beginPath(),le.rect(0,0,We,390),le.clip(),le.drawImage(K,(We-Ie*v)/2,(390-w*v)/2,Ie*v,w*v),le.restore()}let ne=le.createLinearGradient(0,0,We,0);ne.addColorStop(0,"#171009ed"),ne.addColorStop(.8,"#17100920"),le.fillStyle=ne,le.fillRect(0,0,We,390),Q("石里有境 / FIELD PASSPORT",65,79,20,"#d5b580"),Q("循艺入乡",65,160,58,"#f3e2c2"),Q("我的十家子研学手册",68,216,28,"#e0c6a0"),Q(F(),68,295,24,"#d6b078"),Q("AI 文旅情境示意",960,367,14,"#f4debb"),Q("日期  "+(h.date||"待定"),65,458,22),Q("同行  "+h.people+" 人",500,458,22),Q("线上准备  "+M().filter(Boolean).length+" / 4",835,458,22),le.strokeStyle="#b29b762f",le.lineWidth=2,le.beginPath(),le.moveTo(65,491),le.lineTo(1135,491),le.stroke(),Q("把好奇，串成自己的路线。",65,551,33,"#46321f"),Q("现场观察 "+S()+" 分钟 · 不含交通、用餐与等候",65,596,19,"#8a7151");let ce=667;for(let Ie=0;Ie<h.stops.length;Ie++){let w=h.stops[Ie],v=Xt(w.id);le.fillStyle="#dcc59f",le.beginPath(),le.arc(91,ce+8,26,0,Math.PI*2),le.fill(),Q(String(Ie+1).padStart(2,"0"),73,ce+17,24,"#604321"),Ie<h.stops.length-1&&(le.strokeStyle="#c7ab7e",le.beginPath(),le.moveTo(91,ce+41),le.lineTo(91,ce+123),le.stroke()),Q(v.name,145,ce+13,28,"#3b2d20"),Q(w.minutes+" 分钟",975,ce+13,21,"#90704a"),te(v.observe,145,ce+56,920,20,32),ce+=155}f.question.trim()&&(le.fillStyle="#e5d6bb",le.fillRect(65,ce-8,1070,142),Q("如果遇见工匠，我想问",89,ce+28,18,"#937346"),te(f.question.trim(),89,ce+68,1018,22,32,"#513c26"),ce+=175),Q(hs[h.season].name+" · 带着颜色去发现",65,ce+35,24,"#61492e"),te(hs[h.season].text,65,ce+78,1070,19,30),ce+=165;let pe={open:"开放与时间",reception:"人数与接待",content:"讲解与体验",travel:"费用与交通"};Q("出发前的确认清单",65,ce,23,"#60462b");let be=65;for(let[Ie,w]of Object.entries(pe))Q((f.checks[Ie]?"☑ ":"□ ")+w,be,ce+43,17,"#8c7456"),be+=274;le.strokeStyle="#b29b7650",le.beginPath(),le.moveTo(65,P-173),le.lineTo(1135,P-173),le.stroke(),te("公开资料支持的行程构想，不是预约凭证。实际开放、费用、接待与交通以当地确认为准。勾选为个人准备记录。",65,P-129,1070,16,26,"#917d60"),Q("资料依据：辽宁省文化和旅游厅 / 阜新市人力资源和社会保障局",65,P-67,15,"#917d60"),Q("carpedimez.github.io/fuxin-agate-studio/#journey",65,P-34,15,"#917d60");let qe=await new Promise(Ie=>fe.toBlob(Ie,"image/png"));if(!qe)throw Error("export");e(qe,"十家子研学手册.png"),f.routePrepared=!0,R(),se(),n("研学手册已导出，路线与问题都在里面。")}catch{n("暂未能生成图片，可先复制行程文字。")}finally{E.disabled=!h.stops.length,E.textContent=U}}return i("#journey-export").onclick=Ce,q(g),z(),I(),N(),ie(0),Y(),se(),he(),{exportPass:Ce,addStop:A,selectPlace:q}}var Ou=[{id:"bands",title:"层纹之间，自有山河",category:"specimen",tag:"纹理标本",file:"agate-bands",alt:"玛瑙切片的层叠条带与色彩实拍",note:"沿着明暗相间的条带观察，看看天然纹理如何形成画面中的节奏。",origin:"公开玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate1_hg.jpg"},{id:"libation",title:"一盏温润，双耳生姿",category:"vessel",tag:"馆藏器物",file:"agate-libation-cup",alt:"清代玛瑙双耳杯，乳白色杯身带棕黄色纹理，雕有兽形双耳",note:"看杯身上保留下来的纹色，再看两侧雕成的双耳：材料的变化与器物的形态，在这里相遇。",origin:"中国 · 清代（1644–1911） / 克利夫兰艺术博物馆 · 1920.425",author:"Cleveland Museum of Art / Gary Kirchenbauer",license:"CC0 1.0",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.clevelandart.org/art/1920.425"},{id:"moss",title:"把一片绿意，佩在身上",category:"jewelry",tag:"实物佩饰",file:"agate-moss-pendant",alt:"带银色吊扣的圆形苔藓玛瑙吊坠，内部有绿色枝状纹理",note:"圆形轮廓把枝状纹理收在方寸之间。留意通透的浅色部分，怎样衬出深浅不同的绿色。",origin:"苔藓玛瑙吊坠 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 4.0",licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",source:"https://commons.wikimedia.org/wiki/File:Moosachat_hg.jpg"},{id:"crystal",title:"光透过石，层次便醒来",category:"specimen",tag:"纹理标本",file:"agate-crystal",alt:"透光玛瑙切片，橙褐色条带包围白色结晶与中央孔洞",note:"外缘的细密条带、内部的结晶和中央的孔隙，呈现了同一块标本中不同的视觉层次。",origin:"透光玛瑙切片标本 · 来源未标产地",author:"Hannes Grobe",license:"CC BY-SA 2.5",licenseUrl:"https://creativecommons.org/licenses/by-sa/2.5/",source:"https://commons.wikimedia.org/wiki/File:Agate6_hg.jpg"},{id:"carnelian",title:"赤色成杯，雕出一朵花",category:"vessel",tag:"馆藏器物",file:"agate-carnelian-cup",alt:"中国十八世纪红玉髓玛瑙杯，花瓣状杯口与深色底座实拍",note:"花瓣般起伏的杯口，与红白相间的石色一起塑造器物的表情。试着观察口沿、杯身和底座的关系。",origin:"中国 · 18世纪 / 大都会艺术博物馆 · 02.18.882",author:"The Metropolitan Museum of Art",license:"CC0 1.0 / Public Domain",licenseUrl:"https://creativecommons.org/publicdomain/zero/1.0/",source:"https://www.metmuseum.org/art/collection/search/44144"},{id:"nodule",title:"从一块原石，读起",category:"specimen",tag:"纹理标本",file:"agate-nodule",alt:"玛瑙结核标本的外缘与内部纹理实拍",note:"外表与内部的纹理各有层次。先看整体轮廓，再把目光移到色彩交界，寻找自己的构思。",origin:"公开玛瑙结核标本 · 非阜新原料产地证明",author:"James St. John",license:"CC BY 2.0",licenseUrl:"https://creativecommons.org/licenses/by/2.0/",source:"https://commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg"}],Mr=document.querySelector("#agate-gallery"),Fu=Mr.querySelector(".photo-grid"),Ut=document.createElement("dialog");Ut.id="photo-dialog";Ut.className="photo-dialog";Ut.setAttribute("aria-labelledby","photo-title");Ut.innerHTML='<div class="photo-dialog-bar"><span class="eyebrow">实物观赏 / <span id="photo-counter"></span></span><div><button id="photo-zoom" aria-pressed="false">放大细节 ＋</button><button id="photo-close" aria-label="关闭实物照片">×</button></div></div><div class="photo-dialog-layout"><div class="photo-viewport" tabindex="0" aria-label="照片区域，放大后可滚动查看细节"><img id="photo-large" alt=""></div><div class="photo-info"><p id="photo-tag" class="eyebrow"></p><h2 id="photo-title"></h2><p id="photo-note"></p><p id="photo-origin" class="photo-origin"></p><p id="photo-credit" class="photo-credit"></p><div class="photo-links"><a id="photo-source" target="_blank" rel="noopener">原始出处 ↗</a><a id="photo-license" target="_blank" rel="noopener">图片许可 ↗</a></div><p class="photo-derivative">照片仅作等比缩放与格式压缩；实物色彩受摄影光线与屏幕影响。</p><div class="photo-pagination"><button id="photo-prev" aria-label="上一张实物照片">← 上一张</button><button id="photo-next" aria-label="下一张实物照片">下一张 →</button></div><span class="photo-key-hint">← → 切换 · Esc 关闭</span></div></div>';document.body.append(Ut);var At=n=>Ut.querySelector(n),yc="all",us=0,ku=()=>Ou.filter(n=>yc==="all"||n.category===yc);function Bu(n){Ut.classList.toggle("photo-zoomed",n),At("#photo-zoom").setAttribute("aria-pressed",String(n)),At("#photo-zoom").textContent=n?"还原全貌 −":"放大细节 ＋",At(".photo-viewport").scrollTo(0,0)}function Ya(n){let e=ku();us=(n+e.length)%e.length;let t=e[us];Bu(!1),At("#photo-large").src=`./assets/photos/${t.file}.webp`,At("#photo-large").alt=t.alt,At("#photo-title").textContent=t.title,At("#photo-tag").textContent=t.tag,At("#photo-note").textContent=t.note,At("#photo-origin").textContent=t.origin,At("#photo-credit").textContent=`摄影 / 图像提供：${t.author} · ${t.license}`,At("#photo-source").href=t.source,At("#photo-license").href=t.licenseUrl,At("#photo-counter").textContent=`${String(us+1).padStart(2,"0")} / ${String(e.length).padStart(2,"0")}`,At("#photo-prev").disabled=At("#photo-next").disabled=e.length<2}function zu(){let n=ku();Fu.innerHTML=n.map((e,t)=>`<article class="photo-card"><button class="photo-open" data-photo-index="${t}" aria-label="放大查看：${e.title}"><span class="photo-frame"><img src="./assets/photos/${e.file}-thumb.webp" width="640" height="480" loading="lazy" decoding="async" alt="${e.alt}"><span class="photo-category">${e.tag}</span><span class="photo-open-hint">查看实物 ↗</span></span><span class="photo-caption"><span class="photo-index">${String(Ou.indexOf(e)+1).padStart(2,"0")}</span><span><strong>${e.title}</strong><small>${e.origin}</small></span><span aria-hidden="true">↗</span></span></button></article>`).join(""),Mr.querySelector("#photo-result-count").textContent=`${n.length} 件实物`,Fu.querySelectorAll("[data-photo-index]").forEach(e=>e.onclick=()=>{Ya(Number(e.dataset.photoIndex)),Ut.showModal()})}Mr.querySelectorAll("[data-photo-filter]").forEach(n=>n.onclick=()=>{yc=n.dataset.photoFilter,Mr.querySelectorAll("[data-photo-filter]").forEach(e=>e.setAttribute("aria-pressed",String(e===n))),zu()});At("#photo-close").onclick=()=>Ut.close();At("#photo-prev").onclick=()=>Ya(us-1);At("#photo-next").onclick=()=>Ya(us+1);At("#photo-zoom").onclick=()=>Bu(!Ut.classList.contains("photo-zoomed"));Ut.addEventListener("keydown",n=>{(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),Ya(us+(n.key==="ArrowLeft"?-1:1)))});Ut.addEventListener("click",n=>{if(n.target===Ut){let e=Ut.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&Ut.close()}});window.addEventListener("hashchange",()=>{Ut.open&&Ut.close()});document.querySelector("#gallery-jump").onclick=()=>Mr.scrollIntoView({behavior:"smooth"});zu();ga();function Nf(n,e,{onReady:t=()=>{}}={}){let i;try{i=new Zs({antialias:!1,alpha:!1,powerPreference:"low-power"})}catch{return null}i.setPixelRatio(Math.min(devicePixelRatio,1.65)),i.setClearColor(1183243),i.outputColorSpace=Ct,i.domElement.className="formation-cinema-canvas",i.domElement.setAttribute("aria-hidden","true"),n.append(i.domElement);let s=new _i,r=new Wi(-1,1,1,-1,0,1),a=new zr(new Uint8Array([19,15,12,255]),1,1);a.needsUpdate=!0;let o={u_map0:{value:a},u_map1:{value:a},u_map2:{value:a},u_map3:{value:a},u_aspects:{value:new dt(1.6,1.6,1.6,1.6)},u_view:{value:1.6},u_progress:{value:0},u_time:{value:0},u_zoom:{value:1},u_pointer:{value:new me},u_light:{value:0}},l=new an({uniforms:o,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",fragmentShader:`
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
   }`}),c=new ft(new Nn(2,2),l);s.add(c);let h=[],u=[],d=new Set,f=!1,g=!1,_=!1,m=!1,p=!1,T=0,x=0,y=0,R=1,C=0,D=new me,F=matchMedia("(prefers-reduced-motion: reduce)"),S=new sa;function M(){return d.has(Math.floor(y))&&d.has(Math.ceil(y))}function L(){let N=M();N!==p&&(p=N,p&&(o.u_progress.value=y),n.classList.toggle("cinema-ready",p),p&&t())}function V(N){return u[N]||(u[N]=S.loadAsync(e[N]).then($=>{if(_){$.dispose();return}$.colorSpace=Ct,$.minFilter=Zt,$.magFilter=Zt,$.generateMipmaps=!1,o["u_map"+N].value=$,o.u_aspects.value.setComponent(N,$.image.width/$.image.height),h.push($),d.add(N),L()}).catch(()=>{})),u[N]}function q(){if(_)return;let{width:N,height:$}=n.getBoundingClientRect();N<2||$<2||(i.setSize(N,$,!1),o.u_view.value=N/$)}function z(N){if(T=0,!f||_)return;if(N-x<1e3/(matchMedia("(pointer:coarse)").matches?24:30)){T=requestAnimationFrame(z);return}let $=Math.min(.08,(N-x)/1e3||.033);x=N,g&&!F.matches&&(o.u_time.value+=$);let ie=F.matches?1:1-Math.exp(-$*7);M()&&(o.u_progress.value+=(y-o.u_progress.value)*ie),o.u_zoom.value+=(R-o.u_zoom.value)*ie,o.u_light.value+=(C-o.u_light.value)*ie,o.u_pointer.value.lerp(F.matches?new me:D,ie),i.render(s,r),T=requestAnimationFrame(z)}function X(N){let $=n.getBoundingClientRect();D.set((N.clientX-$.left)/$.width*2-1,1-(N.clientY-$.top)/$.height*2)}function A(){D.set(0,0)}n.addEventListener("pointermove",X),n.addEventListener("pointerleave",A);let I=new ResizeObserver(q);return I.observe(n),i.domElement.addEventListener("webglcontextlost",N=>{N.preventDefault(),m=!0,n.classList.remove("cinema-ready"),f=!1,cancelAnimationFrame(T)}),{setProgress(N,$=!1){y=pa.clamp(N,0,3),V(Math.floor(y)),V(Math.ceil(y)),L(),$&&(o.u_progress.value=y),f&&setTimeout(()=>{!_&&f&&V(Math.min(3,Math.ceil(y)+1))},200)},setActive(N){m||(f=N,f?(q(),x=performance.now(),T||(T=requestAnimationFrame(z))):(cancelAnimationFrame(T),T=0))},setPlaying(N){g=N},setDetail(N){R=N?1.42:1},setLight(N){C=N?1:0},dispose(){_=!0,f=!1,cancelAnimationFrame(T),I.disconnect(),n.removeEventListener("pointermove",X),n.removeEventListener("pointerleave",A),h.forEach(N=>N.dispose()),a.dispose(),c.geometry.dispose(),l.dispose(),i.dispose(),i.domElement.remove()}}}var Gh=[{short:"岩石留空",title:"一块石的故事，始于一处空隙。",copy:"在常见的火山岩环境中，熔岩冷却后，气体留下的空洞可以成为玛瑙生长的空间。故事的开头，是岩石中尚未被填满的地方。",caption:"岩石中的空隙，为后来的矿物生长提供空间。",key:"空间"},{short:"富硅流体",title:"水，把形成玛瑙的物质带来。",copy:"含有溶解态硅的流体，可以沿岩石的细小通道进入空隙。流体带来的物质，为后续二氧化硅的沉淀与结晶创造条件。",caption:"富硅流体进入空隙，带来形成二氧化硅矿物的物质。",key:"物质"},{short:"结晶成纹",title:"细小的差异，长成层层纹理。",copy:"在适宜条件下，二氧化硅沉淀、结晶，形成以玉髓为主的玛瑙。晶体结构、孔隙与杂质分布的差异，让条带显出不同的明暗与颜色。",caption:"以常见同心层纹为例：结构与成分的差异，带来可见层次。",key:"纹色"},{short:"因色构形",title:"自然留下纹色，构思从你开始。",copy:"天然纹色先于雕刻存在。工匠先观料，再因材设计，让一抹颜色成为叶片、山峦或果实。接下来，选一块喜欢的纹色，试着把自己的想象放进去。",caption:"从“石如何形成”，走到“我想把它做成什么”。",key:"构思"}],Ff=Gh.map((n,e)=>`./assets/formation-v2/stage-0${e+1}.webp`),$v=["沿着孔壁看：粗糙的围岩，与内部尚未填满的空间。","沿着裂隙看：进入腔体的水，与湿润表面上的折射。","沿着切面看：细密的玉髓纹层，与中心石英晶簇的区别。","沿着颜色看：材料中的深浅纹层，怎样变成作品的构思。"],jv=["A PLACE TO BEGIN","WATER BRINGS SILICA","LAYERS TAKE SHAPE","FROM STONE TO CREATION"],va=document.createElement("section");va.className="formation-teaser";va.setAttribute("aria-labelledby","formation-teaser-title");va.innerHTML='<div class="formation-mini"><img src="./assets/formation-v2/stage-03.webp" width="1586" height="992" loading="lazy" alt="AI生成的玛瑙切面情境图，呈现细密玉髓纹层和中央石英晶簇"><span>AI 地质情境示意</span></div><div class="formation-teaser-copy"><p class="eyebrow">THE BIRTH OF A STONE / 石的来历</p><h2 id="formation-teaser-title">岩石深处，<br>一场缓慢的成形。</h2><p>进入岩石的空隙，看水带来物质，<br>看层纹显现，再走向你的第一次创作。</p><button class="primary compact formation-open">进入微观之境 <span>↗</span></button><small>四幕写实情境 · 可交互观看</small></div><div class="formation-teaser-trail" aria-hidden="true"><span><b>01</b> 岩石留空</span><i>→</i><span><b>02</b> 富硅流体</span><i>→</i><span><b>03</b> 结晶成纹</span><i>→</i><span><b>04</b> 因色构形</span></div>';document.querySelector("#agate-gallery").before(va);var pt=document.createElement("dialog");pt.id="formation-dialog";pt.className="formation-dialog";pt.setAttribute("aria-labelledby","formation-title");pt.innerHTML=`<div class="formation-topbar"><span class="formation-wordmark">石的诞生 <small>THE BIRTH OF A STONE</small></span><div><button id="formation-skip">跳过，直接创作 ↗</button><button id="formation-close" aria-label="关闭玛瑙形成演示">×</button></div></div><div class="formation-main"><div class="formation-visual" data-phase="0"><div class="formation-cinema" role="img" aria-label="玛瑙形成的AI地质情境示意，可按阶段切换与放大"><div class="formation-fallback" aria-hidden="true">${Ff.map((n,e)=>`<img src="${n}" data-art-stage="${e}" loading="lazy" decoding="async" alt="" class="${e===0?"visible":""}">`).join("")}</div></div><div class="formation-visual-tag"><span id="formation-chapter-en">01 / A PLACE TO BEGIN</span><span class="formation-ai-label">AI 地质情境示意</span></div><div class="formation-visual-tools"><button id="formation-detail" aria-pressed="false">＋ 微距细看</button><button id="formation-light" aria-pressed="false">◐ 提亮纹层</button><button id="formation-focus" aria-pressed="false">⤢ 大画面</button></div><div class="formation-caption-box"><span id="formation-stage-label">01 / 空间</span><p id="formation-caption"></p><small>概念场景 · 非真实地质时间与比例</small></div></div><div class="formation-story"><p class="eyebrow">A JOURNEY INSIDE THE STONE</p><div id="formation-story-content" aria-live="polite"><span id="formation-number">01</span><h2 id="formation-title" tabindex="-1"></h2><p id="formation-copy"></p></div><div class="formation-observe"><span>此刻，看这里</span><p id="formation-observation"></p></div><p class="formation-interaction-hint">拖动下方进度，探索四个阶段。<br>移动指针可微调观看视角。</p></div></div><div class="formation-controls"><div class="formation-steps" role="group" aria-label="玛瑙形成讲述步骤">${Gh.map((n,e)=>`<button data-formation-step="${e}" aria-pressed="${e===0}"><img src="./assets/formation-v2/stage-0${e+1}-thumb.webp" width="400" height="250" loading="lazy" alt=""><span><b>0${e+1}</b>${n.short}</span><i></i></button>`).join("")}</div><div class="formation-transport"><button id="formation-play" aria-pressed="false">▷ 自动演示</button><div class="formation-scrub"><label for="formation-progress">故事进度 <output id="formation-progress-label">01 / 04</output></label><input id="formation-progress" type="range" min="0" max="3000" value="0" aria-label="拖动探索玛瑙形成的四个阶段"></div><div class="formation-actions"><button id="formation-previous" aria-label="上一个阶段">←</button><button id="formation-next" class="primary compact">继续看 <span>→</span></button></div></div><p class="formation-watch-note">约40秒 · 可以暂停、拖动或随时跳过</p></div><details class="formation-notes"><summary>关于这段地质情境与资料出处</summary><p>画面由 AI 生成，用于解释常见的火山岩空隙充填路径；不同分镜不代表同一标本的连续实拍，也不是地质过程的物理模拟。玛瑙还有其他地质成因，条带受结晶、自组织与杂质分布等过程影响，不能把每条纹等同于一次进水。演示不鉴定特定阜新原石的成因，不设统一形成时长。</p><a href="https://naturalhistory.si.edu/explore/collections/geogallery/10026005" target="_blank" rel="noopener">史密森尼自然历史博物馆 · 玛瑙 ↗</a><a href="https://doi.org/10.3390/min10111037" target="_blank" rel="noopener">Götze 等，2020 · 玛瑙成因综述 ↗</a></details>`;document.body.append(pt);var et=n=>pt.querySelector(n),Of="agate-formation-intro-v2",Vt=-1,ti=0,ya=null,kf=!1,Cn=null,Bf=0,zf=0,Ks=!1,_a=!1,Zv=matchMedia("(prefers-reduced-motion: reduce)");function mn(){clearTimeout(ya),ya=null,pt.classList.remove("formation-running"),et("#formation-play").setAttribute("aria-pressed","false"),et("#formation-play").textContent="▷ 自动演示",Cn?.setPlaying(!1)}function Hf(){let n=zf+(performance.now()-Bf)/1e3;if(n>=36){Hn(3),mn();return}let e=Math.min(3,Math.floor(n/9)),t=n%9,i=Math.max(0,Math.min(1,(t-6)/3));Hn(Math.min(3,e+i*i*(3-2*i))),ya=setTimeout(Hf,80)}function Vf(){mn(),ti>=3&&Hn(0);let n=ti%1;zf=Math.floor(ti)*9+(n?6+3*(.5-Math.sin(Math.asin(1-2*n)/3)):0),Bf=performance.now(),pt.classList.add("formation-running"),et("#formation-play").setAttribute("aria-pressed","true"),et("#formation-play").textContent="Ⅱ 暂停演示",Cn?.setPlaying(!0),ya=setTimeout(Hf,80)}function Hn(n,e=!1){ti=Math.max(0,Math.min(3,n));let t=Math.round(ti),i=Gh[t];Cn?.setProgress(ti,e);let s=Math.floor(ti),r=ti-s;pt.querySelectorAll("[data-art-stage]").forEach(a=>{let o=Number(a.dataset.artStage);a.style.opacity=o===s?String(1-r):o===s+1?String(r):"0"}),et("#formation-progress").value=Math.round(ti*1e3),et("#formation-progress-label").value=`0${t+1} / 04`,t!==Vt&&(Vt=t,et(".formation-visual").dataset.phase=Vt,et(".formation-cinema").style.backgroundImage=`url("./assets/formation-v2/stage-0${Vt+1}-thumb.webp")`,et("#formation-chapter-en").textContent=`0${Vt+1} / ${jv[Vt]}`,et("#formation-stage-label").textContent=`0${Vt+1} / ${i.key}`,et("#formation-number").textContent=`0${Vt+1}`,et("#formation-title").textContent=i.title,et("#formation-copy").textContent=i.copy,et("#formation-caption").textContent=i.caption,et("#formation-observation").textContent=$v[Vt],pt.querySelectorAll("[data-formation-step]").forEach(a=>a.setAttribute("aria-pressed",String(Number(a.dataset.formationStep)===Vt))),et("#formation-previous").disabled=Vt===0,et("#formation-next").innerHTML=Vt===3?"选石创作 <span>↗</span>":"继续看 <span>→</span>")}function Gf(){kf=!0;try{localStorage.setItem(Of,"1")}catch{}}function Wf(){Gf(),pt.close(),location.hash!=="#studio"&&(location.hash="studio")}function Xf(n){Ks=n,et(".formation-visual").classList.toggle("formation-detail",Ks),et("#formation-detail").setAttribute("aria-pressed",String(Ks)),et("#formation-detail").textContent=Ks?"− 还原全貌":"＋ 微距细看",Cn?.setDetail(Ks)}function Wh(){pt.open||(et(".formation-notes").open=!1,pt.classList.remove("formation-focused"),et("#formation-focus").setAttribute("aria-pressed","false"),et("#formation-focus").textContent="⤢ 大画面",Xf(!1),pt.showModal(),pt.scrollTop=0,Cn||(Cn=Nf(et(".formation-cinema"),Ff)),Cn?.setActive(!0),Hn(0,!0),Zv.matches||Vf())}function qf(){requestAnimationFrame(()=>{let n=kf;try{n=n||localStorage.getItem(Of)==="1"}catch{}!n&&!document.querySelector("#studio").hidden&&!document.querySelector("dialog[open]")&&Wh()})}va.querySelector(".formation-open").onclick=Wh;var zl=document.createElement("button");zl.className="demo-button formation-replay";zl.textContent="玛瑙怎么形成？";zl.onclick=Wh;document.querySelector("#studio .heading-actions").prepend(zl);pt.querySelectorAll("[data-formation-step]").forEach(n=>n.onclick=()=>{mn(),Hn(Number(n.dataset.formationStep))});et("#formation-progress").oninput=n=>{mn(),Hn(Number(n.target.value)/1e3,!0)};et("#formation-next").onclick=()=>{mn(),Vt===3?Wf():Hn(Vt+1)};et("#formation-previous").onclick=()=>{mn(),Hn(Math.max(0,Vt-1))};et("#formation-play").onclick=()=>ya?mn():Vf();et("#formation-skip").onclick=Wf;et("#formation-close").onclick=()=>pt.close();et("#formation-detail").onclick=()=>Xf(!Ks);et("#formation-light").onclick=()=>{_a=!_a,et(".formation-visual").classList.toggle("formation-bright",_a),et("#formation-light").setAttribute("aria-pressed",String(_a)),Cn?.setLight(_a)};et("#formation-focus").onclick=()=>{let n=pt.classList.toggle("formation-focused");et("#formation-focus").setAttribute("aria-pressed",String(n)),et("#formation-focus").textContent=n?"⤡ 返回图文":"⤢ 大画面"};pt.addEventListener("close",()=>{mn(),Cn?.setActive(!1),Gf()});pt.addEventListener("cancel",mn);pt.addEventListener("keydown",n=>{n.target.type!=="range"&&(n.key==="ArrowLeft"||n.key==="ArrowRight")&&(n.preventDefault(),mn(),Hn(Math.min(3,Math.max(0,Vt+(n.key==="ArrowRight"?1:-1)))))});et(".formation-notes").addEventListener("toggle",()=>{et(".formation-notes").open&&mn()});pt.querySelectorAll("[data-art-stage]").forEach(n=>n.addEventListener("error",()=>{n.hidden=!0}));document.addEventListener("visibilitychange",()=>{document.hidden?(mn(),Cn?.setActive(!1)):pt.open&&Cn?.setActive(!0)});window.addEventListener("hashchange",()=>{pt.open&&pt.close()});Hn(0);var Xh=[{id:"blossom",name:"五瓣花",caption:"给纹色添一朵小花"},{id:"cloud",name:"流云",caption:"把弧线连成一片云"},{id:"waves",name:"水波",caption:"三重涟漪，疏密有致"},{id:"bamboo",name:"竹影",caption:"细枝与叶，顺势而生"},{id:"stars",name:"星芒",caption:"一点星光，几何点缀"},{id:"sunrise",name:"朝阳",caption:"从山线里升起的光"},{id:"fan",name:"折扇",caption:"展开一面自己的小景"},{id:"ridge",name:"叠嶂",caption:"三道山线，留一点远意"}];function Jv(n){let e=[],t=s=>e.push(s),i=(s,r=48)=>Array.from({length:r+1},(a,o)=>s(o/r));if(n==="blossom"){for(let s=0;s<5;s++){let r=s*Math.PI*2/5;t(i(a=>{let o=a*Math.PI*2,l=.28+.25*Math.cos(o);return[Math.cos(r)*l-Math.sin(r)*Math.sin(o)*.17,Math.sin(r)*l+Math.cos(r)*Math.sin(o)*.17]}))}t(i(s=>[Math.cos(s*Math.PI*2)*.08,Math.sin(s*Math.PI*2)*.08]))}else if(n==="cloud")t(i(s=>{let r=s*Math.PI*2,a=.45+.08*Math.cos(r*5);return[Math.cos(r)*a*1.3,Math.sin(r)*a*.65]},96)),t(i(s=>[-.48+s*.96,.18+Math.sin(s*Math.PI*2)*.06]));else if(n==="waves")for(let s=0;s<3;s++)t(i(r=>[-.7+r*1.4,(s-1)*.23+Math.sin(r*Math.PI*3)*.09]));else if(n==="bamboo"){t([[-.07,.65],[.03,-.65]]);for(let s=0;s<3;s++){let r=-.4+s*.35;t([[-.1,r],[.1,r]]);for(let a of[-1,1])t([[0,r],[a*.48,r-.24],[a*.22,r-.04],[0,r]])}}else if(n==="stars")for(let[s,r,a]of[[0,0,.45],[.5,-.38,.17],[-.48,.38,.13]])t(Array.from({length:9},(o,l)=>{let c=l/8*Math.PI*2-Math.PI/2,h=l%2?a*.24:a;return[s+Math.cos(c)*h,r+Math.sin(c)*h]}));else if(n==="sunrise"){t(i(s=>[Math.cos(Math.PI+s*Math.PI)*.3,-.02+Math.sin(Math.PI+s*Math.PI)*.3],32)),t([[-.68,.18],[-.25,-.05],[.03,.12],[.35,-.02],[.68,.18]]);for(let s=0;s<7;s++){let r=Math.PI+s/6*Math.PI;t([[Math.cos(r)*.4,Math.sin(r)*.4],[Math.cos(r)*.53,Math.sin(r)*.53]])}t([[-.58,.35],[.58,.35]])}else if(n==="fan"){t(i(s=>[Math.cos(Math.PI*1.12+s*Math.PI*.76)*.72,.5+Math.sin(Math.PI*1.12+s*Math.PI*.76)*.88]));for(let s=0;s<=8;s++){let r=Math.PI*1.12+s/8*Math.PI*.76;t([[0,.5],[Math.cos(r)*.72,.5+Math.sin(r)*.88]])}}else if(n==="ridge")for(let s=0;s<3;s++)t([[-.7,.2+s*.18],[-.35,-.4+s*.18],[-.1,-.08+s*.18],[.28,-.5+s*.18],[.7,.2+s*.18]]);else throw Error("未知纹样");return e}function Hl(n,{x:e=0,y:t=0,scale:i=.75,angle:s=0}={},r=.018,a=.6){let o=s*Math.PI/180,l=Math.cos(o),c=Math.sin(o);return Jv(n).map(h=>({width:r,depth:a,points:h.map(([u,d])=>[e+(u*l-d*c)*i,t+(u*c+d*l)*i])}))}function qh(n,e){let t=[];for(let i of n){let s=[],r=()=>{s.length>1&&t.push({...i,points:s}),s=[]};for(let a of i.points)a.every(o=>Math.abs(o)<=1)&&e(...a)?s.push(a):r();r()}return t}ts();function Qs(n,e){let t=es(e);n.beginPath(),t.forEach(([i,s],r)=>r?n.lineTo(i,s):n.moveTo(i,s)),n.closePath()}function tx(n,e,t,i){let s=n.angle*Math.PI/180,r=Math.cos(s),a=Math.sin(s),o=i/(2*n.scale);return[o*r/e,-o*a/e,o*a/t,o*r/t,i/2-o*(r*n.x+a*n.y),i/2-o*(-a*n.x+r*n.y)]}function er(n,{size:e=768,grooves:t=!0}={}){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");return s.fillStyle="#9b6036",s.fillRect(0,0,e,e),n.image&&(s.save(),s.setTransform(...tx(n.pose,n.image.width,n.image.height,e)),s.drawImage(n.image,0,0),s.restore()),t&&(nx(s,n.strokes||[],e,n.polish??.7),jf(s,n.inscription,e)),i}function Wl(n,e,t){if(e.length){n.beginPath(),n.moveTo((e[0][0]+1)*t/2,(e[0][1]+1)*t/2),e.length===1&&n.lineTo((e[0][0]+1)*t/2+.01,(e[0][1]+1)*t/2);for(let i=1;i<e.length;i++)n.lineTo((e[i][0]+1)*t/2,(e[i][1]+1)*t/2)}}function nx(n,e,t,i=.7){n.save(),n.lineCap="round",n.lineJoin="round";for(let s of e){let r=s.width*t/2;n.save(),n.translate(r*.2,r*.28),Wl(n,s.points,t),n.strokeStyle=`rgba(255,239,202,${.55+i*.25})`,n.lineWidth=r*1.55,n.stroke(),n.restore(),Wl(n,s.points,t),n.strokeStyle=`rgba(48,22,11,${.25+(s.depth??.6)*.7})`,n.lineWidth=r,n.stroke(),n.save(),n.translate(-r*.1,-r*.12),Wl(n,s.points,t),n.strokeStyle="rgba(100,53,29,.58)",n.lineWidth=r*.35,n.stroke(),n.restore()}n.restore()}function jf(n,e,t,{height:i=!1}={}){if(!e?.text)return;let s=e,r=s.size*t/2;n.save(),n.translate((s.x+1)*t/2,(s.y+1)*t/2),n.rotate(s.angle*Math.PI/180),n.font=`${r}px ${s.font==="sans"?"Microsoft YaHei,sans-serif":"SimSun,serif"}`,n.textAlign="center",n.textBaseline="middle";let a=s.vertical?Array.from(s.text):[s.text];for(let o=0;o<a.length;o++){let l=s.vertical?(o-(a.length-1)/2)*r*1.15:0;i||(n.fillStyle="rgba(255,235,195,.8)",n.fillText(a[o],1.2,l+1.5)),n.fillStyle=i?"#555":"#4a2617",n.fillText(a[o],0,l)}n.restore()}function Zf(n,e=384,t=null){let i=document.createElement("canvas");i.width=i.height=e;let s=i.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,e,e),s.lineCap="round",s.lineJoin="round";for(let c of n)Wl(s,c.points,e),s.strokeStyle=`rgb(${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)} ${Math.round(235-(c.depth??.6)*200)})`,s.lineWidth=c.width*e/2,s.stroke();jf(s,t,e,{height:!0});let r=s.getImageData(0,0,e,e).data,a=document.createElement("canvas");a.width=a.height=e;let o=a.getContext("2d"),l=o.createImageData(e,e);for(let c=0;c<e;c++)for(let h=0;h<e;h++){let u=(p,T)=>r[(vt(T,0,e-1)*e+vt(p,0,e-1))*4]/255,d=(u(h-1,c)-u(h+1,c))*1.8,f=(u(h,c-1)-u(h,c+1))*1.8,g=1,_=Math.hypot(d,f,g),m=(c*e+h)*4;l.data[m]=(d/_*.5+.5)*255,l.data[m+1]=(f/_*.5+.5)*255,l.data[m+2]=(g/_*.5+.5)*255,l.data[m+3]=255}return o.putImageData(l,0,0),a}function ba(n,e,t){let i=es(n),s=!1;for(let r=0,a=i.length-1;r<i.length;a=r++){let o=i[r],l=i[a];o[1]>t!=l[1]>t&&e<(l[0]-o[0])*(t-o[1])/(l[1]-o[1])+o[0]&&(s=!s)}return s}function wi(n,e,t,i,{texture:s,compare:r=100,padding:a=.18,background:o=!0,cursor:l=null}={}){if(o){n.clearRect(0,0,e,t),n.fillStyle="#111612",n.fillRect(0,0,e,t);let p=n.createRadialGradient(e*.5,t*.45,0,e*.5,t*.5,e*.55);p.addColorStop(0,"#c69a6520"),p.addColorStop(1,"#11161200"),n.fillStyle=p,n.fillRect(0,0,e,t)}s=s||er(i);let c=Math.min(e*(1-a*2),t*(1-a*2)),h=e/2,u=t/2+t*.02,d=c/2,f={x:h-d,y:u-d,w:c,h:c};r<100&&(n.save(),n.beginPath(),n.rect(0,0,e*(1-r/100),t),n.clip(),n.globalAlpha=.85,n.drawImage(er(i,{grooves:!1,size:512}),f.x,f.y,c,c),n.restore()),n.save(),n.beginPath(),n.rect(e*(1-r/100),0,e,t),n.clip(),n.save(),n.translate(h,u+9),n.scale(d,d),Qs(n,i.kind),n.shadowColor="#000b",n.shadowBlur=30/d,n.fillStyle="#0a0d09",n.fill(),n.restore(),n.save(),n.translate(h,u),n.scale(d,d),Qs(n,i.kind),n.clip(),n.drawImage(s,-1,-1,2,2);let g=i.light==="right"?1:-1,_=i.polish??.7,m=n.createLinearGradient(g<0?-1:1,-1,g<0?1:-1,1);if(m.addColorStop(0,`rgba(255,243,210,${.18+_*.13})`),m.addColorStop(.38,"rgba(255,240,204,0)"),m.addColorStop(1,"rgba(29,11,3,.34)"),n.fillStyle=m,n.fillRect(-1,-1,2,2),Qs(n,i.kind),n.lineWidth=.065,n.strokeStyle="#f3d19a77",n.stroke(),Qs(n,i.kind),n.lineWidth=.018,n.strokeStyle="#fff2cb9a",n.stroke(),_>.15){n.save(),n.rotate(-.65*g);let p=n.createLinearGradient(-.5,0,.5,0);p.addColorStop(0,"#fff0"),p.addColorStop(.45,`rgba(255,255,238,${_*.23})`),p.addColorStop(.52,`rgba(255,255,238,${_*.35})`),p.addColorStop(.64,"#fff0"),n.fillStyle=p,n.fillRect(-1.5,-1.5,3,3),n.restore()}if(n.restore(),n.restore(),r<100){let p=e*(1-r/100);n.strokeStyle="#e6c794",n.lineWidth=1,n.beginPath(),n.moveTo(p,80),n.lineTo(p,t-60),n.stroke(),n.fillStyle="#e6c794",n.beginPath(),n.arc(p,t/2,13,0,Math.PI*2),n.fill(),n.fillStyle="#152016",n.font="12px sans-serif",n.textAlign="center",n.fillText("↔",p,t/2+4),n.textAlign="left"}if(l&&i.step===2){let p=h+l.x*d,T=u+l.y*d;n.strokeStyle="#ffe0a8",n.lineWidth=1,n.beginPath(),n.arc(p,T,Math.max(5,i.toolWidth*d/2),0,Math.PI*2),n.stroke()}return f}function Jf(n,e=.018){let t=[],i=s=>t.push({width:e,points:s});if(n==="leaf"){i([[-.8,0],[.82,0]]);for(let s=0;s<5;s++){let r=-.6+s*.25;i([[r,0],[r+.22,-.3*(1-Math.abs(r))-.08]]),i([[r,0],[r+.22,.28*(1-Math.abs(r))+.07]])}}else if(n==="fruit"){for(let s of[-1,1]){let r=[];for(let a=0;a<=30;a++){let o=-.58+a/30*1.22;r.push([s*(.16+.15*Math.sin(a/30*Math.PI)),o])}i(r)}i([[-.28,-.6],[0,-.7],[.28,-.6]])}else{i([[-.8,.49],[-.25,-.41],[.03,.04]]),i([[.18,.23],[.47,-.57],[.8,.49]]);for(let s=0;s<3;s++)i([[-.62,.38+s*.07],[.65,.38+s*.07]])}return t}ts();var $h={fruit:"秋实",leaf:"一叶",mountain:"远山",round:"团圆",drop:"凝露",heart:"心意",custom:"手绘成器"};function Kf(n){return n==="bands"?"Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n==="nodule"?"James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n==="custom"?"用户导入照片":"程序化教学样本"}function Qf(n){let{state:e,experience:t,$:i,$$:s,toast:r,download:a}=n,o=[["patterns","✧","纹样百宝箱","8种纹样，自由摆放"],["lettering","印","刻字落款","写下名字与心意"],["styling","◈","文创搭配","挂件、摆件与氛围"],["inspiration","卜","灵感抽签","换一种构思出发"],["comparison","▥","方案对比","把喜欢的放在一起"],["poster","▣","纪念海报","带走自己的设计"]];i(".craft-stepper").insertAdjacentHTML("afterend",`<div class="playground"><div class="playground-heading"><span>玩法百宝箱</span><small>再给作品一点自己的想法</small></div><div class="playground-grid">${o.map(([A,I,N,$])=>`<button id="open-${A}"><i>${I}</i><span>${N}<small>${$}</small></span><b>↗</b></button>`).join("")}</div></div>`);function l(A,I,N,$){let ie=document.createElement("dialog");return ie.id=A,ie.className="play-dialog",ie.innerHTML=`<div class="dialog-heading"><div><p class="eyebrow">YOUR CREATIVE PLAYGROUND</p><h2>${I}</h2></div><button class="icon-button" data-close-play aria-label="关闭">×</button></div><p class="play-dialog-intro">${N}</p>${$}`,document.body.append(ie),ie.querySelector("[data-close-play]").onclick=()=>ie.close(),ie}let c=l("pattern-dialog","让一笔纹样，成为你的点睛。","所有纹样均为本工坊原创装饰示意。选择后可在作品上拖动，满意再刻入。",`<div class="play-editor"><div><canvas id="pattern-preview" width="840" height="640" aria-label="拖动纹样调整位置"></canvas><p id="pattern-feedback" class="hint" role="status"></p></div><div class="play-editor-controls"><div id="pattern-library" class="pattern-library">${Xh.map(A=>`<button data-pattern="${A.id}" title="${A.caption}"><canvas width="100" height="74"></canvas><span>${A.name}</span></button>`).join("")}</div><label class="field-label" for="pattern-size">纹样大小 <output id="pattern-size-value">75%</output></label><input id="pattern-size" type="range" min="20" max="130" value="75"><label class="field-label" for="pattern-angle">纹样角度 <output id="pattern-angle-value">0°</output></label><input id="pattern-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="pattern-x" type="range" min="-85" max="85" value="0" aria-label="纹样水平位置"></label><label>Y <input id="pattern-y" type="range" min="-85" max="85" value="0" aria-label="纹样垂直位置"></label></div><button id="center-pattern" class="text-button">居中摆放</button><button id="apply-pattern" class="primary full">刻入这组纹样 ＋</button><p class="hint">超出作品的部分会裁去。应用后仍可用刻线撤销、重做或擦除。</p></div></div>`),h="blossom",u={x:0,y:0,scale:.75,angle:0},d;function f(){return qh(Hl(h,u,e.toolWidth,e.depth),(...A)=>ba(e.kind,...A))}function g(){let A=i("#pattern-preview"),I=f(),N={...e,strokes:[...e.strokes,...I]};d=wi(A.getContext("2d"),A.width,A.height,N,{texture:er(N,{size:640}),padding:.1}),s("[data-pattern]").forEach($=>$.classList.toggle("selected",$.dataset.pattern===h)),i("#pattern-feedback").textContent=`${Xh.find($=>$.id===h).name} · ${I.length}段可见刻线 · 拖动摆放，滑杆缩放与旋转`,i("#apply-pattern").disabled=!I.length,i("#pattern-x").value=Math.round(u.x*100),i("#pattern-y").value=Math.round(u.y*100)}for(let A of s("[data-pattern]")){let I=A.querySelector("canvas").getContext("2d");I.strokeStyle="#d9bc8b",I.lineWidth=1.4;for(let N of Hl(A.dataset.pattern))I.beginPath(),N.points.forEach(([$,ie],se)=>se?I.lineTo(50+$*45,37+ie*36):I.moveTo(50+$*45,37+ie*36)),I.stroke();A.onclick=()=>{h=A.dataset.pattern,g()}}i("#open-patterns").onclick=()=>{e.image&&(t.setStep(2),c.showModal(),g())},i("#pattern-size").oninput=A=>{u.scale=Number(A.target.value)/100,i("#pattern-size-value").value=A.target.value+"%",g()},i("#pattern-angle").oninput=A=>{u.angle=Number(A.target.value),i("#pattern-angle-value").value=A.target.value+"°",g()};for(let A of["x","y"])i("#pattern-"+A).oninput=I=>{u[A]=Number(I.target.value)/100,g()};i("#center-pattern").onclick=()=>{u.x=u.y=0,g()};function _(A,I,N){let $=!1,ie=null,se=Y=>{let he=A.getBoundingClientRect(),Me=I();return{x:((Y.clientX-he.left)/he.width*A.width-Me.x)/Me.w*2-1,y:((Y.clientY-he.top)/he.height*A.height-Me.y)/Me.h*2-1}};A.onpointerdown=Y=>{$=!0,ie=se(Y),A.setPointerCapture(Y.pointerId),N(ie,!0)},A.onpointermove=Y=>{$&&N(se(Y),!1)},A.onpointerup=A.onpointercancel=()=>$=!1}_(i("#pattern-preview"),()=>d,A=>{u.x=vt(A.x,-.85,.85),u.y=vt(A.y,-.85,.85),g()}),i("#apply-pattern").onclick=()=>{let A=f();A.length&&(t.editStrokes(I=>I.push(...A)),c.close(),r("纹样已刻入作品，可以继续添加、擦除或撤销。"))};let m=l("lettering-dialog","给这件作品，留一句心意。","在预览上拖动落款，调整字形、大小和角度。确定后会进入二维作品与三维刻痕。",'<div class="play-editor"><canvas id="lettering-preview" width="840" height="640" aria-label="拖动落款调整位置"></canvas><div class="play-editor-controls"><label class="field-label" for="inscription-text">写什么？最多8字</label><input id="inscription-text" type="text" maxlength="8" placeholder="例如：阜新 · 初见"><label class="field-label" for="inscription-font">落款字形</label><select id="inscription-font"><option value="serif">宋体 · 书卷感</option><option value="sans">黑体 · 简洁</option></select><label class="check"><input id="inscription-vertical" type="checkbox">竖排落款</label><label class="field-label" for="inscription-size">字的大小</label><input id="inscription-size" type="range" min="8" max="35" value="18"><label class="field-label" for="inscription-angle">落款角度</label><input id="inscription-angle" type="range" min="-180" max="180" value="0"><div class="play-position"><label>X <input id="inscription-x" type="range" min="-85" max="85" value="0" aria-label="落款水平位置"></label><label>Y <input id="inscription-y" type="range" min="-85" max="85" value="32" aria-label="落款垂直位置"></label></div><button id="apply-lettering" class="primary full">把心意刻进作品 →</button><button id="remove-lettering" class="text-button">清除当前落款</button><p class="hint">落款仅保留作品轮廓内的部分。可随时重新打开修改，或关闭弹窗取消本次修改。</p></div></div>'),p,T;function x(){let A=i("#lettering-preview"),I={...e,inscription:p};T=wi(A.getContext("2d"),A.width,A.height,I,{padding:.1}),i("#inscription-x").value=Math.round(p.x*100),i("#inscription-y").value=Math.round(p.y*100)}i("#open-lettering").onclick=()=>{if(e.image){t.setStep(2),p=structuredClone(e.inscription||{text:"阜新",x:0,y:.32,size:.18,angle:0,font:"serif",vertical:!1});for(let A of["text","font","size","angle","vertical"]){let I=i("#inscription-"+A);A==="vertical"?I.checked=p[A]:I.value=A==="size"?Math.round(p.size*100):p[A]}m.showModal(),x()}};for(let A of["text","font","size","angle","vertical","x","y"])i("#inscription-"+A).oninput=I=>{p[A]=A==="vertical"?I.target.checked:A==="text"?Array.from(I.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,8).join(""):A==="font"?I.target.value:Number(I.target.value)/(A==="size"||A==="x"||A==="y"?100:1),x()};_(i("#lettering-preview"),()=>T,A=>{p.x=vt(A.x,-.85,.85),p.y=vt(A.y,-.85,.85),x()}),i("#apply-lettering").onclick=()=>{e.inscription=p.text.trim()?structuredClone(p):null,t.refresh(),m.close(),r("落款已留在作品上，三维刻痕也会同步更新。")},i("#remove-lettering").onclick=()=>{e.inscription=null,t.refresh(),m.close(),r("已清除落款。")},i(".finish-controls").insertAdjacentHTML("afterbegin",'<details id="styling-panel" class="styling-panel"><summary>◈ 文创搭配 · 换个方式欣赏</summary><label class="field-label" for="display-style">成品搭配</label><select id="display-style"><option value="stone">素石 · 只看作品</option><option value="pendant">绳系挂件</option><option value="stand">展台摆件</option></select><label class="field-label" for="cord-color">挂绳颜色</label><select id="cord-color"><option value="cinnabar">朱砂红</option><option value="ink">松烟黑</option><option value="jade">竹青绿</option></select><label class="field-label" for="display-backdrop">展示氛围</label><select id="display-backdrop"><option value="ink">墨色工坊</option><option value="paper">暖纸展厅</option><option value="night">夜色藏蓝</option></select><p class="hint">搭配为文创外观示意，可随3D截图保存。</p></details>');function y(){let A=e.presentation;i("#studio").dataset.backdrop=A.backdrop,i("#display-style").value=A.style,i("#display-backdrop").value=A.backdrop,i("#cord-color").value=A.cord,i("#cord-color").disabled=A.style!=="pendant",i("#work-title").value=e.workTitle||""}i("#open-styling").onclick=()=>{t.setStep(3),i("#styling-panel").open=!0,y(),i("#styling-panel").scrollIntoView({behavior:"smooth",block:"center"})};for(let[A,I]of[["display-style","style"],["cord-color","cord"],["display-backdrop","backdrop"]])i("#"+A).onchange=N=>{e.presentation={...e.presentation,[I]:N.target.value},y(),t.refresh()};i(".heading-actions").insertAdjacentHTML("beforebegin",'<div class="work-title"><label for="work-title">为作品起名</label><input id="work-title" maxlength="24" placeholder="例如：一叶知秋" aria-label="作品名称，最多24字"></div>'),i("#work-title").oninput=A=>e.workTitle=Array.from(A.target.value.replace(/[\u0000-\u001f]/g,"")).slice(0,24).join("");let R=[{id:"moon",title:"月下团圆",desc:"圆牌 · 水波 · 夜色挂件",kind:"round",pattern:"waves",text:"团圆",style:"pendant",backdrop:"night"},{id:"mountain",title:"山海有约",desc:"山形 · 朝阳 · 暖纸展台",kind:"mountain",pattern:"sunrise",text:"山海",style:"stand",backdrop:"paper"},{id:"leaf",title:"竹影清风",desc:"叶形 · 竹影 · 竹青挂绳",kind:"leaf",pattern:"bamboo",text:"清风",style:"pendant",backdrop:"ink"},{id:"heart",title:"心上繁花",desc:"心形 · 五瓣花 · 温柔落款",kind:"heart",pattern:"blossom",text:"如愿",style:"stone",backdrop:"paper"}],C=l("inspiration-dialog","借一份灵感，再改成自己的。","选择一份配方，会替换当前外形、刻线与落款；原料保持不变，可用下方按钮撤回。",`<div class="recipe-grid">${R.map((A,I)=>`<button data-recipe="${A.id}"><span>0${I+1}</span><strong>${A.title}</strong><small>${A.desc}</small><b>试试这个 ↗</b></button>`).join("")}</div><button id="random-recipe" class="primary compact">帮我抽一份 ✧</button><button id="undo-inspiration" class="text-button" disabled>撤回上次灵感</button><p class="hint">基于原创设计配方组合，不冒充传统纹样或生成式AI结果。</p>`),D=null,F=!1;i("#open-inspiration").onclick=()=>C.showModal();async function S(A){if(!(!e.image||F)){F=!0;try{D=n.projectData(),i("#undo-inspiration").disabled=!1,e.kind=A.kind,i("#motif").value=A.kind,e.pose.scale=.3,e.strokes=qh(Hl(A.pattern,{scale:.68,y:-.05},.016,.65),(...I)=>ba(e.kind,...I)),e.inscription={text:A.text,x:0,y:.3,size:.14,angle:0,font:"serif",vertical:!1},e.workTitle=A.title,e.presentation={style:A.style,backdrop:A.backdrop,cord:A.id==="leaf"?"jade":"cinnabar"},e.polish=.86,await n.optimize(),t.clearHistory(),y(),t.setStep(3),C.close(),r("灵感已展开，可以回到刻线继续修改；重新打开灵感抽签可撤回。")}finally{F=!1}}}s("[data-recipe]").forEach(A=>A.onclick=()=>S(R.find(I=>I.id===A.dataset.recipe))),i("#random-recipe").onclick=()=>S(R[Math.floor(Math.random()*R.length)]),i("#undo-inspiration").onclick=async()=>{if(!D)return;let A=D;D=null,await n.restoreProject(A),i("#undo-inspiration").disabled=!0,C.close()};let M=l("comparison-dialog","把不同的构思，放在一起看。","最多暂存三份当前设计。可以继续修改后再加入，点击任意方案回到创作。关闭弹窗不会清空；刷新页面后会清空。",'<div class="comparison-actions"><button id="add-comparison" class="primary compact">加入当前方案 ＋</button><button id="export-comparison" class="text-button" disabled>导出对比图 ↗</button></div><div id="comparison-cards" class="comparison-cards"></div>'),L=[];function V(){let A=i("#comparison-cards");if(A.replaceChildren(),i("#export-comparison").disabled=!L.length,!L.length){let I=document.createElement("p");I.className="comparison-empty",I.textContent="先加入当前方案，再试一套纹样或灵感配方，回来比较。",A.append(I);return}L.forEach((I,N)=>{let $=document.createElement("article"),ie=document.createElement("img"),se=document.createElement("h3"),Y=document.createElement("p"),he=document.createElement("button"),Me=document.createElement("button");ie.src=I.image,ie.alt=I.title,se.textContent=I.title,Y.textContent=`色区匹配 ${(I.metrics.fit*100).toFixed(1)}% · ${I.project.strokes.length}段刻线`,he.textContent="从这份继续编辑 ↗",he.className="feature-button",he.onclick=async()=>{await n.restoreProject(I.project),M.close()},Me.textContent="移出对比",Me.className="text-button small",Me.onclick=()=>{L.splice(N,1),V()},$.append(ie,se,Y,he,Me),A.append($)})}i("#open-comparison").onclick=()=>{M.showModal(),V()},i("#add-comparison").onclick=()=>{if(!e.image)return;let A=document.createElement("canvas");if(A.width=640,A.height=480,t.renderArt(A.getContext("2d"),640,480),L.length===3){r("已有三份方案，请先移出一份，再加入新设计。");return}L.push({project:n.projectData(),metrics:{...e.layout},image:A.toDataURL("image/jpeg",.88),title:e.workTitle||$h[e.kind]+" · 方案 "+(L.length+1)}),V()},i("#export-comparison").onclick=async()=>{let A=document.createElement("canvas");A.width=1500,A.height=1e3;let I=A.getContext("2d");I.fillStyle="#151917",I.fillRect(0,0,1500,1e3),I.fillStyle="#d9bc8b",I.font="40px SimSun,serif",I.fillText("石里有境 · 我的构思对照",70,90),I.font="18px sans-serif",I.fillStyle="#a2a69b",I.fillText("同一段创作，不同的可能。",70,130);let N=1360/L.length;for(let $=0;$<L.length;$++){let ie=L[$],se=new Image;se.src=ie.image,await se.decode();let Y=70+$*N,he=N-20,Me=Math.min(he,560);I.drawImage(se,Y+(he-Me)/2,220,Me,Me*.75),I.fillStyle="#e9e5d9",I.font="26px SimSun,serif",I.fillText(ie.title,Y,710,he),I.fillStyle="#a2a69b",I.font="16px sans-serif",I.fillText(`匹配 ${(ie.metrics.fit*100).toFixed(1)}% · ${ie.project.strokes.length}段刻线`,Y,755,he),I.font="12px sans-serif",I.fillText(Kf(ie.project.sample),Y,800,he)}I.font="15px sans-serif",I.fillStyle="#a2a69b",I.fillText("数字创意示意 · 来源与许可见 commons.wikimedia.org · Hannes Grobe样本衍生图适用CC BY-SA 2.5",70,950),A.toBlob($=>{$&&a($,"石里有境-方案对比.png")})};let q=l("poster-dialog","把这一次相遇，做成纪念。","用你的当前作品制作纪念海报，名称可在创作页修改。海报保留素材来源与数字设计说明。",'<div class="poster-layout"><canvas id="poster-preview" width="1000" height="1400" aria-label="纪念海报预览"></canvas><div><div class="poster-themes"><button data-poster-theme="paper">留白手札<small>暖纸 · 朱印 · 留白</small></button><button data-poster-theme="night">星夜藏石<small>藏蓝 · 星光 · 金线</small></button><button data-poster-theme="earth">山野雅集<small>墨绿 · 山线 · 手作</small></button></div><button id="download-poster" class="primary full">下载纪念海报 ↗</button><p class="hint">1000 × 1400 PNG，可保存、打印或用于比赛过程展示。作品图采用正面成器效果；文创搭配请用3D截图保存。</p></div></div>'),z="paper";function X(){let A=i("#poster-preview"),I=A.getContext("2d"),N={paper:["#e9dfca","#24352d","#a33e2f"],night:["#101e31","#e9d7ac","#9b804c"],earth:["#20342a","#e7dbc3","#c89567"]}[z];I.fillStyle=N[0],I.fillRect(0,0,1e3,1400),I.strokeStyle=N[2],I.lineWidth=1,I.strokeRect(42,42,916,1316),I.fillStyle=N[2],I.font="18px sans-serif",I.fillText("石里有境 / FUXIN AGATE ATELIER",84,110),I.fillStyle=N[1],I.font="64px SimSun,serif";let $=e.workTitle||$h[e.kind]+" · 石中有境",ie=Array.from($);if(I.fillText(ie.slice(0,12).join(""),80,220,840),ie.length>12&&(I.font="40px SimSun,serif",I.fillText(ie.slice(12).join(""),84,280,840)),I.font="20px sans-serif",I.fillText("观天然纹色，留一份自己的构思。",84,330),I.save(),I.translate(70,380),wi(I,860,760,e,{background:!1,padding:.12}),I.restore(),z==="night"){I.fillStyle="#d9bc8b66";for(let se=0;se<36;se++){let Y=80+se*163%840,he=380+se*251%700;I.beginPath(),I.arc(Y,he,se%3===0?2:1,0,Math.PI*2),I.fill()}}else if(z==="earth"){I.strokeStyle="#bda67c55";for(let se=0;se<3;se++)I.beginPath(),I.moveTo(70,1110+se*12),I.lineTo(290,1030+se*12),I.lineTo(480,1085+se*12),I.lineTo(740,1010+se*12),I.lineTo(930,1100+se*12),I.stroke()}I.fillStyle=N[2],I.fillRect(82,1160,54,54),I.fillStyle=N[0],I.font="26px SimSun,serif",I.fillText("境",96,1197),I.fillStyle=N[1],I.font="20px sans-serif",I.fillText("辽宁 · 阜新 / 玛瑙文化数字创作纪念",160,1180),I.font="16px sans-serif",I.fillText(new Date().toLocaleDateString("zh-CN")+" · 纹样、落款与外形来自本次设计",160,1210),I.font="13px sans-serif",I.fillText("原料："+Kf(e.sample),84,1272,830),I.fillText(e.sample==="bands"?"commons.wikimedia.org · 衍生图片适用 CC BY-SA 2.5":e.sample==="nodule"?"commons.wikimedia.org · 原图许可 CC BY 2.0":"原料为程序化教学样本或用户自有图片",84,1300,830),I.fillText("数字创意示意，非真实加工结果。",84,1328),s("[data-poster-theme]").forEach(se=>se.classList.toggle("selected",se.dataset.posterTheme===z))}return i("#open-poster").onclick=()=>{e.image&&(q.showModal(),X())},s("[data-poster-theme]").forEach(A=>A.onclick=()=>{z=A.dataset.posterTheme,X()}),i("#download-poster").onclick=()=>i("#poster-preview").toBlob(A=>{A&&a(A,"石里有境-"+(e.workTitle||$h[e.kind])+"-纪念海报.png")}),document.addEventListener("agate-craft-reset",y),{sync:y,closeDialogs(){for(let A of[c,m,C,M,q])A.close()},get comparisons(){return L}}}ts();function Xl(n){if(!Array.isArray(n)||n.length<5||n.length>2e3)throw Error("请画出至少五个点的完整外形。");let e=[];for(let f of n){if(!Array.isArray(f)||f.length!==2||!f.every(g=>Number.isFinite(g)&&Math.abs(g)<100))throw Error("轮廓坐标无效。");(!e.length||Math.hypot(f[0]-e.at(-1)[0],f[1]-e.at(-1)[1])>.015)&&e.push([...f])}e.length>5&&Math.hypot(e[0][0]-e.at(-1)[0],e[0][1]-e.at(-1)[1])<.06&&e.pop();let t=e.filter((f,g)=>g%Math.max(1,Math.ceil(e.length/160))===0);if(t.length<5)throw Error("轮廓太小，请画大一些。");let i=(f,g,_)=>(g[0]-f[0])*(_[1]-f[1])-(g[1]-f[1])*(_[0]-f[0]),s=(f,g,_)=>Math.abs(i(f,g,_))<1e-8&&_[0]>=Math.min(f[0],g[0])-1e-8&&_[0]<=Math.max(f[0],g[0])+1e-8&&_[1]>=Math.min(f[1],g[1])-1e-8&&_[1]<=Math.max(f[1],g[1])+1e-8;for(let f=0;f<t.length;f++)for(let g=f+2;g<t.length;g++){if(f===0&&g===t.length-1)continue;let _=t[f],m=t[(f+1)%t.length],p=t[g],T=t[(g+1)%t.length];if(i(_,m,p)*i(_,m,T)<0&&i(p,T,_)*i(p,T,m)<0||s(_,m,p)||s(_,m,T)||s(p,T,_)||s(p,T,m))throw Error("线条有交叉或重叠，请画一个不交叉的闭合外形。")}let r=t.map(f=>f[0]),a=t.map(f=>f[1]),o=Math.min(...r),l=Math.max(...r),c=Math.min(...a),h=Math.max(...a),u=Math.max(l-o,h-c),d=0;if(t.forEach((f,g)=>{let _=t[(g+1)%t.length];d+=f[0]*_[1]-_[0]*f[1]}),u<.15||Math.abs(d)<u*u*.08)throw Error("轮廓面积太小，请画一个有宽度的外形。");return t.map(([f,g])=>[(f-(o+l)/2)/u*1.8,(g-(c+h)/2)/u*1.8])}function ep({state:n,experience:e,$:t,$$:i,toast:s,getDrawRect:r,download:a}){t("#motif").insertAdjacentHTML("beforeend",'<option value="drop">凝露 · 水滴</option><option value="round">团圆 · 圆牌</option><option value="heart">心意 · 心形</option><option value="custom" disabled>我的手绘外形</option>'),t("#motif").insertAdjacentHTML("afterend",'<button id="draw-outline" class="feature-button">✎ 自己画一个外形</button>'),t("#palette").insertAdjacentHTML("afterend",'<button id="pick-color" class="feature-button" aria-pressed="false">⌕ 放大镜选色</button><p class="hint">开启后，移动到原料上放大纹理，点击选中对应色区。</p>'),t("#tool-width").insertAdjacentHTML("afterend",'<div class="feature-group"><label class="field-label" for="line-mode">用什么笔触？</label><select id="line-mode"><option value="free">自由刻线</option><option value="straight">直线刻刀</option></select><label class="check"><input id="symmetric-lines" type="checkbox">左右对称刻线</label><label class="field-label" for="cut-depth">刻痕深浅 <output id="cut-depth-value">60%</output></label><input id="cut-depth" type="range" min="10" max="100" value="60"><p class="hint">粗细、深浅与对称作用于接下来画的笔触。</p><button id="stamp-flower" class="feature-button">✧ 刻一朵小花</button><p class="hint">小花位于中央，可撤销或擦除。图案为原创装饰示意。</p></div>'),t("#polish").previousElementSibling.insertAdjacentHTML("beforebegin",'<label class="field-label" for="piece-thickness">作品厚度 <output id="thickness-value">24</output></label><input id="piece-thickness" type="range" min="8" max="65" value="24"><p class="hint">数字造型比例；切换侧面可观察厚度。</p><div class="view-actions"><button data-orientation="front">正面</button><button data-orientation="side">侧面</button><button data-orientation="back">背面</button></div><button id="spin-piece" class="feature-button" aria-pressed="false">▷ 自动环绕欣赏</button>'),t("#export-finished").insertAdjacentHTML("afterend",'<button id="capture-3d" class="feature-button">▣ 保存当前3D视角</button>');let o=document.createElement("div");o.id="color-loupe",o.hidden=!0,o.innerHTML='<canvas width="140" height="100"></canvas><span></span>',t("#canvas-stage").append(o);let l=!1;function c(x){l=x,t("#pick-color").setAttribute("aria-pressed",String(x)),t("#pick-color").textContent=x?"× 结束选色":"⌕ 放大镜选色",o.hidden=!x,t("#design-canvas").style.cursor=x?"crosshair":"grab"}t("#pick-color").onclick=()=>{e.setView("color"),c(!l)};let h=t("#design-canvas");function u(x,y=!1){if(!l||n.step!==1||n.view!=="color"){o.hidden=!0;return}let R=h.getBoundingClientRect(),C=r(),D=x.clientX-R.left,F=x.clientY-R.top,S=(D-C.x)/C.w,M=(F-C.y)/C.h;if(S<0||S>=1||M<0||M>=1){o.hidden=!0;return}x.stopImmediatePropagation(),y&&x.preventDefault();let L=n.analysis,V=Math.floor(M*L.height)*L.width+Math.floor(S*L.width),q=L.labels[V];o.hidden=!1,o.style.left=vt(D+22,8,R.width-156)+"px",o.style.top=vt(F-130,75,R.height-150)+"px";let z=o.querySelector("canvas").getContext("2d");z.imageSmoothingEnabled=!1,z.fillStyle="#121812",z.fillRect(0,0,140,100);let X=n.image.width*.12;if(z.drawImage(n.image,S*n.image.width-X*.7,M*n.image.height-X*.5,X*1.4,X,0,0,140,100),z.strokeStyle="#fff1c4",z.beginPath(),z.moveTo(60,50),z.lineTo(80,50),z.moveTo(70,40),z.lineTo(70,60),z.stroke(),o.querySelector("span").textContent=q>=0?`色区 ${q+1} · ${L.colors[q].hex}`:"背景区域",y){if(q<0){s("这里是背景，请在原料内部选色。");return}document.querySelector(`[data-color="${q}"]`)?.click(),c(!1),s("已选中这个位置的纹色，可继续借色构形。")}}h.addEventListener("pointermove",x=>u(x),!0),h.addEventListener("pointerdown",x=>u(x,!0),!0),h.addEventListener("pointerleave",()=>o.hidden=!0),document.addEventListener("keydown",x=>{x.key==="Escape"&&c(!1)}),new MutationObserver(()=>{(n.step!==1||n.view!=="color")&&c(!1)}).observe(t("#studio"),{attributes:!0,attributeFilter:["data-craft-step","data-view"]}),t("#line-mode").onchange=x=>{n.lineMode=x.target.value,t("#engrave-pen").click()},t("#symmetric-lines").onchange=x=>n.symmetry=x.target.checked,t("#cut-depth").oninput=x=>{n.depth=Number(x.target.value)/100,t("#cut-depth-value").value=x.target.value+"%"},t("#stamp-flower").onclick=()=>e.editStrokes(x=>{for(let y=0;y<5;y++){let R=[],C=y*Math.PI*2/5;for(let D=0;D<=32;D++){let F=D/32*Math.PI*2,S=.13+.12*Math.cos(F);R.push([Math.cos(C)*S-Math.sin(C)*Math.sin(F)*.07,Math.sin(C)*S+Math.cos(C)*Math.sin(F)*.07])}x.push({width:n.toolWidth,depth:n.depth,points:R})}}),t("#piece-thickness").oninput=x=>{n.thickness=Number(x.target.value)/100,t("#thickness-value").value=x.target.value,e.refresh()},i("[data-orientation]").forEach(x=>x.onclick=()=>{e.getScene()?.setOrientation(x.dataset.orientation),t("#spin-piece").setAttribute("aria-pressed","false"),t("#spin-piece").textContent="▷ 自动环绕欣赏"}),t("#spin-piece").onclick=()=>{let x=e.getScene();if(!x)return;let y=!x.controls.autoRotate;x.setAuto(y),t("#spin-piece").setAttribute("aria-pressed",String(y)),t("#spin-piece").textContent=y?"Ⅱ 暂停环绕欣赏":"▷ 自动环绕欣赏"},t("#capture-3d").onclick=async()=>{e.setView("preview"),await e.updatePreview();let x=e.getScene();if(!x)return;let y=new Image;y.src=x.capture(),await y.decode();let R=document.createElement("canvas");R.width=y.width,R.height=y.height+88;let C=R.getContext("2d");C.fillStyle="#151917",C.fillRect(0,0,R.width,R.height),C.drawImage(y,0,0),C.fillStyle="#d9bc8b",C.font="14px sans-serif",C.fillText("石里有境 · 数字造型与刻线示意",18,y.height+28),C.fillStyle="#a2a69b",C.font="11px sans-serif";let D=n.sample==="bands"?"Photo: Hannes Grobe / CC BY-SA 2.5 / Agate1 hg.jpg":n.sample==="nodule"?"Photo: James St. John / CC BY 2.0 / Agate 2 (31731816833).jpg":n.sample==="custom"?"原料：用户导入照片":"原料：程序化教学样本";C.fillText(D,18,y.height+52),C.fillText(n.sample==="bands"?"commons.wikimedia.org · 衍生图片 CC BY-SA 2.5":n.sample==="nodule"?"commons.wikimedia.org · 署名许可 CC BY 2.0":"数字创作示意 · 真实工艺需工匠核验",18,y.height+72),R.toBlob(F=>{F&&a(F,"石里有境-三维视角.png")})};let d=document.createElement("dialog");d.id="outline-dialog",d.innerHTML='<div class="dialog-heading"><div><p class="eyebrow">DRAW YOUR SHAPE</p><h2>把心里的形，画出来。</h2></div><button id="close-outline" class="icon-button" aria-label="关闭">×</button></div><p class="hint">在下方一笔画出外形，松手会自动连接起点。请避免线条交叉。</p><canvas id="outline-canvas" width="600" height="400" aria-label="用鼠标或触摸一笔画出闭合外形"></canvas><p id="outline-feedback" role="status">例如：一片不规则叶子、一枚鹅卵石、一朵云。</p><div class="outline-actions"><button id="clear-outline" class="text-button">重新画</button><button id="apply-outline" class="primary compact">用这个外形 →</button></div>',document.body.append(d);let f=t("#outline-canvas"),g=f.getContext("2d"),_=[],m=!1;function p(){g.fillStyle="#101611",g.fillRect(0,0,600,400),g.strokeStyle="#ffffff0c",g.lineWidth=1;for(let x=0;x<600;x+=40)g.beginPath(),g.moveTo(x,0),g.lineTo(x,400),g.stroke();for(let x=0;x<400;x+=40)g.beginPath(),g.moveTo(0,x),g.lineTo(600,x),g.stroke();_.length&&(g.beginPath(),_.forEach(([x,y],R)=>R?g.lineTo(x*200+300,(y+1)*200):g.moveTo(x*200+300,(y+1)*200)),m||g.closePath(),g.fillStyle="#d9bc8b1a",g.fill(),g.strokeStyle="#e5c58e",g.lineWidth=2,g.stroke(),g.fillStyle="#e5c58e",g.beginPath(),g.arc(_[0][0]*200+300,(_[0][1]+1)*200,5,0,Math.PI*2),g.fill())}function T(x){let y=f.getBoundingClientRect(),R=[vt(((x.clientX-y.left)/y.width*600-300)/200,-1.49,1.49),vt((x.clientY-y.top)/y.height*2-1,-.99,.99)];_.length<2e3&&(!_.length||Math.hypot(R[0]-_.at(-1)[0],R[1]-_.at(-1)[1])>.012)&&_.push(R),p()}return f.onpointerdown=x=>{_=[],m=!0,f.setPointerCapture(x.pointerId),T(x)},f.onpointermove=x=>{m&&T(x)},f.onpointerup=()=>{m=!1,p(),t("#outline-feedback").textContent="外形已闭合。满意就应用，也可以重新画。"},f.onpointercancel=()=>{m=!1,p()},t("#draw-outline").onclick=()=>{d.showModal(),p()},t("#close-outline").onclick=()=>d.close(),t("#clear-outline").onclick=()=>{_=[],p(),t("#outline-feedback").textContent="画一个新的外形，松手自动闭合。"},t("#apply-outline").onclick=()=>{try{let x=Xl(_);Gl(x),n.customOutline=x,t('#motif option[value="custom"]').disabled=!1,t("#motif").value="custom",t("#motif").dispatchEvent(new Event("change")),d.close(),s("手绘外形已成为作品轮廓，成器与3D会同步更新。")}catch(x){t("#outline-feedback").textContent=x.message}},{sync(){c(!1),t("#piece-thickness").value=Math.round(n.thickness*100),t("#thickness-value").value=Math.round(n.thickness*100),i("[data-light]").forEach(x=>x.classList.toggle("selected",x.dataset.light===n.light))}}}var ix=["fruit","leaf","mountain","drop","round","heart","custom"];function jh(n){let e=structuredClone(n),t=()=>{throw Error("方案文件不完整或参数超出范围，请使用本工坊导出的方案。")};(!e||e.format!=="agate-project"||![3,4].includes(e.version)||!ix.includes(e.kind)||!["procedural","bands","nodule","custom"].includes(e.sample))&&t();for(let[s,r,a]of[["x",.03,.97],["y",.03,.97],["scale",.08,.42],["angle",-180,180]])(!Number.isFinite(e.pose?.[s])||e.pose[s]<r||e.pose[s]>a)&&t();e.kind==="custom"&&(e.outline=Xl(e.outline)),(!Number.isInteger(e.color)||e.color<0||e.color>4||!Number.isFinite(e.polish)||e.polish<0||e.polish>1||!["left","right"].includes(e.light)||!Number.isFinite(e.thickness)||e.thickness<.08||e.thickness>.65)&&t(),(typeof e.removeBackground!="boolean"||!Array.isArray(e.target)||e.target.length>4e4||e.target.length<100||!Number.isInteger(e.targetWidth)||!Number.isInteger(e.targetHeight)||e.targetWidth<1||e.targetHeight<1||e.targetWidth>200||e.targetHeight>200||e.targetWidth*e.targetHeight!==e.target.length||e.target.some(s=>s!==0&&s!==1))&&t(),(!Array.isArray(e.strokes)||e.strokes.length>1e3)&&t();let i=0;for(let s of e.strokes){(!Number.isFinite(s.width)||s.width<.001||s.width>.1||!Number.isFinite(s.depth??.6)||(s.depth??.6)<.1||(s.depth??.6)>1||!Array.isArray(s.points)||s.points.length>1e4)&&t(),i+=s.points.length;for(let r of s.points)(!Array.isArray(r)||r.length!==2||r.some(a=>!Number.isFinite(a)||Math.abs(a)>1.1))&&t()}if(i>1e5&&t(),e.sample==="custom"&&(typeof e.sourceImage!="string"||e.sourceImage.length>25e5||!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(e.sourceImage))&&t(),e.inscription!=null){let s=e.inscription;(typeof s.text!="string"||Array.from(s.text).length>8||/[\u0000-\u001f]/.test(s.text)||!["serif","sans"].includes(s.font)||typeof s.vertical!="boolean")&&t();for(let[r,a,o]of[["x",-.85,.85],["y",-.85,.85],["size",.08,.35],["angle",-180,180]])(!Number.isFinite(s[r])||s[r]<a||s[r]>o)&&t()}else e.inscription=null;return e.presentation!=null?(!["stone","pendant","stand"].includes(e.presentation.style)||!["ink","paper","night"].includes(e.presentation.backdrop)||!["cinnabar","ink","jade"].includes(e.presentation.cord))&&t():e.presentation={style:"stone",backdrop:"ink",cord:"cinnabar"},e.workTitle!=null&&(typeof e.workTitle!="string"||Array.from(e.workTitle).length>24||/[\u0000-\u001f]/.test(e.workTitle))&&t(),e.workTitle=e.workTitle||"",e}ts();function tp(n){let{$:e,$$:t,state:i}=n;Object.assign(i,{step:0,strokes:[],redoStrokes:[],polish:.72,light:"left",tool:"pen",toolWidth:.018,comparison:100,symmetry:!1,lineMode:"free",depth:.6,thickness:.24,inscription:null,workTitle:"",presentation:{style:"stone",backdrop:"ink",cord:"cinnabar"}});let s=null,r=null,a=null,o={x:0,y:0,w:1,h:1},l=[],c=[],h=0,u=!1,d=0,f=[["先选一块喜欢的纹色","选好原料，接下来让天然颜色参与设计。","开始构形"],["选一抹颜色，把它变成形","拖动或切换构图，右下角直接看到取形后的效果。","确认取形，去刻线"],["亲手画几笔，让它更像你的作品","在作品上拖动刻线，也可以添加筋线后自由修改。","刻线完成，去润色"],["转动它，看看属于你的成器效果","轮廓、纹理与刻线已一起进入三维作品。","导出作品"]];function g(Y=768){return er(i,{size:Y})}function _(){let Y=e("#peek-canvas");i.image&&wi(Y.getContext("2d"),Y.width,Y.height,i,{texture:g(384),padding:.1})}function m(){let Y=e("#design-canvas"),he=Y.getBoundingClientRect();if(!i.image||he.width<1||he.height<1)return;let Me=Math.min(devicePixelRatio,2);Y.width=Math.round(he.width*Me),Y.height=Math.round(he.height*Me);let Ce=Y.getContext("2d");Ce.scale(Me,Me),i.view==="color"?n.drawSource(Ce,he.width,he.height,{includeTarget:i.step===1,includeMotif:i.step===1}):o=wi(Ce,he.width,he.height,i,{texture:g(),compare:i.comparison,padding:.16,cursor:a}),_()}async function p(){if(i.image)try{s||(r||(r=n.getSceneModule().then(Y=>Y.createAgateScene(e("#preview-scene")))),s=await r),s.setTexture(g(),{kind:i.kind,normalCanvas:Zf(i.strokes,384,i.inscription),polish:i.polish,light:i.light,thickness:i.thickness,presentation:i.presentation}),s.resize()}catch(Y){console.error(Y),n.toast("三维暂不可用，已切换成器效果，可继续创作。"),x("carved")}}function T(){i.image&&(e("#stroke-count").textContent=i.strokes.length,e("#undo-stroke").disabled=!l.length,e("#redo-stroke").disabled=!c.length,e("#polish").value=Math.round(i.polish*100),e("#polish-value").value=Math.round(i.polish*100)+"%",i.view==="preview"?(cancelAnimationFrame(d),d=requestAnimationFrame(p)):m(),_())}function x(Y){i.view=Y,e("#studio").dataset.view=Y,e("#design-canvas").hidden=Y==="preview",e("#preview-scene").hidden=Y!=="preview";for(let[Me,Ce]of[["view-color","color"],["view-carved","carved"],["view-preview","preview"]])e("#"+Me).classList.toggle("selected",Y===Ce);e("#toggle-overlay").disabled=Y!=="color"||i.step!==1,e("#canvas-mode-label").textContent=Y==="preview"?"YOUR SHAPE · YOUR TEXTURE":Y==="carved"?"SHAPE · ENGRAVE · POLISH":"READ THE COLOR";let he=Y==="preview"?"拖动转动作品 · 滚轮缩放 · 观察轮廓厚度与刻线":i.step===2?"在作品上拖动刻线 · 使用上方按钮撤销或擦线":i.step===1&&Y==="color"?"拖动取形 · 滚轮缩放 · Shift＋滚轮旋转":i.step===1?"拖动改变取色位置 · 回到原料查看构图":i.step===0?"选择喜欢的原料，再点击“开始构形”":"滑动下方对比，观察局部原料与成器的变化";e("#canvas-instruction").textContent=he,e("#canvas-stage").classList.toggle("carving",i.step===2&&Y==="carved"),Y==="preview"?p():requestAnimationFrame(m)}function y(Y){i.step=vt(Y,0,3),e("#studio").dataset.craftStep=i.step,t(".craft-stepper [data-craft-step]").forEach(Me=>{let Ce=Number(Me.dataset.craftStep);Me.classList.toggle("active",Ce===i.step),Me.classList.toggle("done",Ce<i.step),Me.setAttribute("aria-current",Ce===i.step?"step":"false")}),e("#work-stage-badge").textContent=["观料","借色构形","亲手刻线","润色成器"][i.step]+" · 0"+(i.step+1)+" / 04",e("#step-goal").textContent=f[i.step][0],e("#step-tip").textContent=f[i.step][1],e("#next-step").innerHTML=f[i.step][2]+" <span>→</span>",e("#previous-step").disabled=i.step===0,e("#context-title").textContent=i.step===2?"留下你的刻线":"纹色与笔触",e("#context-copy").textContent=i.step===2?"从一条线开始。沿着纹理，试着给叶片添叶脉、给山形添层次。":"你所选的原料、取形位置和手绘刻线共同构成这件数字作品。",x(i.step<=1?"color":i.step===2?"carved":"preview"),T();let he=e("#canvas-stage");matchMedia("(prefers-reduced-motion: reduce)").matches||he.animate([{opacity:.5,transform:"translateY(7px)"},{opacity:1,transform:"translateY(0)"}],{duration:320,easing:"ease-out"})}function R(Y=!0){i.strokes=[],l=[],c=[],i.inscription=null,i.workTitle="",i.polish=.72,i.comparison=100,e("#compare").value=100;let he=document.createElement("img");he.src=i.sample==="procedural"?n.samples[0].thumb:i.image?.src||"",he.alt="当前选择的原料";let Me=document.createElement("p");Me.textContent=e("#canvas-sample-name").textContent,e("#material-mini").replaceChildren(he,Me),Y?y(0):T(),document.dispatchEvent(new Event("agate-craft-reset"))}function C(){return structuredClone(i.strokes)}function D(){l.push(C()),l.length>80&&l.shift(),c=[]}function F(){l.length&&(c.push(C()),i.strokes=l.pop(),T())}function S(){c.length&&(l.push(C()),i.strokes=c.pop(),T())}function M(){D(),i.strokes.push(...Jf(i.kind,i.toolWidth)),T(),n.toast("筋线已经刻入作品，可继续自由添线或擦除。")}function L(Y){i.tool=Y,e("#engrave-pen").classList.toggle("selected",Y==="pen"),e("#engrave-erase").classList.toggle("selected",Y==="erase"),i.view!=="carved"&&x("carved")}function V(Y,he){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;let Me=e("#carve-particles");for(let Ce=0;Ce<3;Ce++){let E=document.createElement("i");E.style.left=Y+"px",E.style.top=he+"px",E.style.setProperty("--dx",(Math.random()-.5)*25+"px"),E.style.setProperty("--dy",Math.random()*25+"px"),Me.appendChild(E),setTimeout(()=>E.remove(),550)}}function q(){u&&(h++,u=!1,e("#play-demo").textContent="▷ 先看一次示范")}e("#studio").addEventListener("pointerdown",Y=>{Y.target.closest("#play-demo")||q()},{capture:!0});let z=e("#design-canvas"),X=!1,A=null,I=null,N=!1,$=Y=>{let he=z.getBoundingClientRect();return{x:Y.clientX-he.left,y:Y.clientY-he.top}};function ie(Y,he=!1){if(!i.analysis)return;let Me=$(Y);if(i.step===2&&i.view==="carved"){let Ce=(Me.x-o.x)/o.w*2-1,E=(Me.y-o.y)/o.h*2-1;if(a={x:Ce,y:E},!X){m();return}if(!ba(i.kind,Ce,E)){I&&(I=null);return}if(i.tool==="pen"){I||(N||(D(),N=!0),I={width:i.toolWidth,points:[],depth:i.depth},i.strokes.push(I));let U=I.points.at(-1);(!U||Math.hypot(U[0]-Ce,U[1]-E)>.003)&&(i.lineMode==="straight"&&I.points.length>1&&I.points.splice(1),I.points.push([Ce,E]))}else{let U=i.strokes.filter(K=>!K.points.some(([de,fe])=>Math.hypot(de-Ce,fe-E)<i.toolWidth*3+.04));U.length!==i.strokes.length&&(N||(D(),N=!0),i.strokes=U)}Math.random()>.5&&V(Me.x,Me.y),T();return}if(!(i.step!==1||!X)){if(i.view==="color"){let Ce=n.getDrawRect(),E=(Me.x-Ce.x)/Ce.w,U=(Me.y-Ce.y)/Ce.h;if(E<0||E>1||U<0||U>1)return;if(i.brush==="none")i.pose.x=vt(E,.03,.97),i.pose.y=vt(U,.03,.97);else{let K=i.analysis,de=Math.round(E*K.width),fe=Math.round(U*K.height);for(let le=-4;le<=4;le++)for(let We=-4;We<=4;We++){let P=de+We,ae=fe+le;if(We*We+le*le<=16&&P>=0&&P<K.width&&ae>=0&&ae<K.height){let Q=ae*K.width+P;K.foreground[Q]&&(i.target[Q]=i.brush==="add"?1:0)}}}}else i.view==="carved"&&A&&(i.pose.x=vt(i.pose.x-(Me.x-A.x)/o.w*i.pose.scale*2,.03,.97),i.pose.y=vt(i.pose.y-(Me.y-A.y)/o.h*i.pose.scale*2,.03,.97));i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout(),A=Me}}z.addEventListener("pointerdown",Y=>{X=!0,A=$(Y),N=!1,I=null,z.setPointerCapture(Y.pointerId),ie(Y,!0)}),z.addEventListener("pointermove",Y=>ie(Y));for(let Y of["pointerup","pointercancel"])z.addEventListener(Y,()=>{if(X&&i.symmetry&&i.step===2&&i.tool==="pen"&&N){let he=i.strokes.slice(l.at(-1)?.length||0);for(let Me of he)i.strokes.push({...Me,points:Me.points.map(([Ce,E])=>[-Ce,E])})}X=!1,I=null,N=!1,T()});z.addEventListener("pointerleave",()=>{a=null,X||m()}),z.addEventListener("wheel",Y=>{i.step===1&&(Y.preventDefault(),Y.shiftKey?i.pose.angle=vt(i.pose.angle+(Y.deltaY>0?5:-5),-180,180):i.pose.scale=vt(i.pose.scale+(Y.deltaY>0?-.01:.01),.08,.42),i.selectedCandidate=-1,n.renderCandidates(),n.updateLayout())},{passive:!1});async function se(){if(u){h++,u=!1,e("#play-demo").textContent="▷ 先看一次示范";return}let Y=++h;u=!0,e("#play-demo").textContent="Ⅱ 停止示范";let he=Me=>new Promise(Ce=>setTimeout(Ce,Me));try{if(!i.image||(i.kind="leaf",e("#motif").value="leaf",i.strokes=[],l=[],c=[],i.pose.scale=.3,n.updateLayout(),y(1),await he(650),Y!==h)||(await n.optimize(),await he(1e3),Y!==h)||(y(2),await he(650),Y!==h)||(M(),await he(900),Y!==h))return;i.polish=.85,y(3),n.toast("示范完成：现在可继续转动、润色，或返回刻线修改。")}finally{Y===h&&(u=!1,e("#play-demo").textContent="▷ 再看一次示范")}}return t(".craft-stepper [data-craft-step]").forEach(Y=>Y.onclick=()=>{h++,u=!1,e("#play-demo").textContent="▷ 先看一次示范",y(Number(Y.dataset.craftStep))}),e("#start-shaping").onclick=()=>y(1),e("#next-step").onclick=()=>i.step===3?n.exportCard():y(i.step+1),e("#previous-step").onclick=()=>y(i.step-1),e("#back-to-shape").onclick=()=>y(1),e("#view-carved").onclick=()=>x("carved"),e("#result-peek").onclick=()=>x("carved"),e("#engrave-pen").onclick=()=>L("pen"),e("#engrave-erase").onclick=()=>L("erase"),e("#undo-stroke").onclick=F,e("#redo-stroke").onclick=S,e("#tool-width").oninput=Y=>{i.toolWidth=Number(Y.target.value)*.006,e("#tool-width-value").value=Y.target.value,m()},e("#preset-lines").onclick=M,e("#clear-strokes").onclick=()=>{i.strokes.length&&(D(),i.strokes=[],T())},e("#compare").oninput=Y=>{i.comparison=Number(Y.target.value),m()},e("#polish").oninput=Y=>{i.polish=Number(Y.target.value)/100,T()},t("[data-light]").forEach(Y=>Y.onclick=()=>{i.light=Y.dataset.light,t("[data-light]").forEach(he=>he.classList.toggle("selected",Y===he)),T()}),e("#export-finished").onclick=n.exportCard,e("#save-finished").onclick=n.saveDesign,e("#play-demo").onclick=se,e("#motif").addEventListener("change",()=>{i.strokes=[],l=[],c=[],T()}),document.addEventListener("keydown",Y=>{i.route!=="studio"||i.step!==2||["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||(Y.ctrlKey||Y.metaKey)&&Y.key.toLowerCase()==="z"&&(Y.preventDefault(),Y.shiftKey?S():F())}),y(0),{draw:m,refresh:T,setView:x,setStep:y,updatePreview:p,resetCraft:R,stopDemo:q,renderArt:(Y,he,Me)=>wi(Y,he,Me,i,{texture:g(),padding:.12}),getScene:()=>s,editStrokes:Y=>{D(),Y(i.strokes),T()},clearHistory:()=>{l=[],c=[],T()},get strokes(){return i.strokes}}}ts();var ue=n=>document.querySelector(n),Tt=n=>[...document.querySelectorAll(n)],O={analysis:null,target:null,selectedColor:0,sample:"procedural",kind:"fruit",pose:{x:.5,y:.5,scale:.24,angle:0},brush:"none",overlay:!0,candidates:[],selectedCandidate:-1,view:"color",image:null,analysisMs:0,optimizeMs:0,baseline:null,layout:null,route:"home",loadId:0},Zl={fruit:"秋实",leaf:"一叶",mountain:"远山",drop:"凝露",round:"团圆",heart:"心意",custom:"手绘成器"},nr=[{id:"procedural",title:"赤霞流纹",sub:"程序化教学样本",origin:"由代码生成的纹色样本，不对应真实阜新原石。"},{id:"bands",title:"层叠条带",sub:"开放许可实拍样本",file:"./assets/agate-bands.jpg",origin:"Hannes Grobe / CC BY-SA 2.5。公开玛瑙切片，来源页未标产地；非阜新原料证明。"},{id:"nodule",title:"结核纹理",sub:"开放许可实拍样本",file:"./assets/agate-nodule.jpg",origin:"James St. John / CC BY 2.0。公开玛瑙结核样本；非阜新原料证明。"}],bt,Sa,$l,hp,eu={x:0,y:0,w:1,h:1},up,Kh,tu=[];function Dt(n){ue("#toast").textContent=n,ue("#toast").classList.add("show"),clearTimeout(up),up=setTimeout(()=>ue("#toast").classList.remove("show"),3400)}function tr(n){try{return JSON.parse(localStorage.getItem(n)||"[]")}catch{return[]}}function jl(n,e){try{return localStorage.setItem(n,JSON.stringify(e)),!0}catch{return Dt("浏览器存储不可用或已满，请先导出方案卡。"),!1}}function Rn(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function vx(){let n=document.createElement("canvas");n.width=720,n.height=600;let e=n.getContext("2d"),t=e.createImageData(n.width,n.height),i=(s,r,a)=>s.map((o,l)=>o+(r[l]-o)*a);for(let s=0;s<n.height;s++)for(let r=0;r<n.width;r++){let a=(r/n.width-.5)*2,o=(s/n.height-.5)*2,l=Math.atan2(o,a),c=Math.hypot(a*.95,o*1.05),h=.84+.045*Math.sin(l*5)+.025*Math.cos(l*9),u=(s*n.width+r)*4;if(c>h){t.data[u]=15,t.data[u+1]=20,t.data[u+2]=16,t.data[u+3]=255;continue}let d=.055*Math.sin(a*10+o*6)+.035*Math.cos(o*13-a*2),f=Math.hypot(a+.2,o*.78-.1)+d,g=.5+.5*Math.sin(f*31+Math.sin(a*7)*1),_=.5+.5*Math.sin(f*8.4+a),m=i([91,31,16],[211,122,45],_);m=i(m,[242,223,181],Math.pow(g,12)*.9);let p=1+.12*Math.max(0,1-Math.hypot(a+.35,o+.45)),T=.98+.025*Math.sin(r*2.14+s*.43);for(let x=0;x<3;x++)t.data[u+x]=vt(m[x]*p*T,0,255);t.data[u+3]=255}return e.putImageData(t,0,0),n}var dp=vx();nr[0].thumb=dp.toDataURL("image/jpeg",.85);function Jl(){ue("#sample-list").innerHTML=nr.map(n=>`<button class="sample ${n.id===O.sample?"selected":""}" data-sample="${n.id}"><img src="${n.thumb||n.file}" alt="${n.title}"><span><strong>${n.title}</strong><small>${n.sub}</small></span></button>`).join(""),Tt("[data-sample]").forEach(n=>n.onclick=()=>Kl(n.dataset.sample))}async function Kl(n){let e=++O.loadId,t=nr.find(i=>i.id===n);if(t){ue("#analysis-scan").classList.add("active");try{let i;if(n==="procedural"?i=dp:(i=new Image,i.src=t.file,await i.decode()),e!==O.loadId)return;O.sample=n,O.image=i,O.pose={x:.5,y:.5,scale:.24,angle:0},O.candidates=[],O.selectedCandidate=-1,ue("#sample-origin").textContent=t.origin,ue("#canvas-sample-name").textContent=t.title,Jl(),ir(),bt?.resetCraft()}catch(i){Dt("样本读取失败，可选择其他样本或导入照片。"),console.error(i)}finally{e===O.loadId&&ue("#analysis-scan").classList.remove("active")}}}function ir(){if(!O.image)return;let n=performance.now(),e=document.createElement("canvas"),t=O.image.width/O.image.height;e.width=150,e.height=Math.max(40,Math.round(150/t)),e.height>200&&(e.height=200,e.width=Math.round(200*t));let i=e.getContext("2d",{willReadFrequently:!0});i.drawImage(O.image,0,0,e.width,e.height);try{O.analysis=Yf(i.getImageData(0,0,e.width,e.height).data,e.width,e.height,5,ue("#remove-bg").checked),O.selectedColor=O.analysis.colors.map((s,r)=>({v:s,i:r})).sort((s,r)=>r.v.count-s.v.count)[0].i,O.target=Ma(O.analysis,O.selectedColor),O.analysisMs=performance.now()-n,O.candidates=[],O.selectedCandidate=-1,nu(),In(),ue("#analysis-status").textContent=`已分析 ${O.analysis.validPixels.toLocaleString()} 个有效像素 · ${O.analysis.colors.length} 个色区 · ${Math.round(O.analysisMs)} ms`,O.baseline=Ei(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),ue("#caption-text").textContent="已完成色区分析，选择色区后可搜索构图。"}catch(s){Dt(s.message)}}function nu(){let n=O.analysis;ue("#palette").innerHTML=n.colors.map((e,t)=>`<button class="swatch ${t===O.selectedColor?"selected":""}" data-color="${t}" aria-label="选择色区 ${t+1} ${e.hex}"><i style="background:${e.hex}"></i><span>色区 ${String(t+1).padStart(2,"0")}</span><small>${(e.share*100).toFixed(1)}%</small></button>`).join(""),Tt("[data-color]").forEach(e=>e.onclick=()=>{O.selectedColor=Number(e.dataset.color),O.target=Ma(n,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,ue("#candidate-list").replaceChildren(),O.baseline=Ei(n,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),nu(),In()})}function fp(n,e){Qs(n,e)}function iu(n,e,t,{includeTarget:i=!0,includeMotif:s=!0}={}){if(n.clearRect(0,0,e,t),n.fillStyle="#111612",n.fillRect(0,0,e,t),!O.image)return;let r=O.image.width/O.image.height,a=e*.88,o=t*.7,l=a,c=l/r;c>o&&(c=o,l=c*r);let h=(e-l)/2,u=(t-c)/2;if(n.canvas.id==="design-canvas"&&(eu={x:h,y:u,w:l,h:c}),n.drawImage(O.image,h,u,l,c),i&&O.overlay&&O.target){let d=O.analysis,f=document.createElement("canvas");f.width=d.width,f.height=d.height;let g=f.getContext("2d"),_=g.createImageData(d.width,d.height);for(let m=0;m<O.target.length;m++)O.target[m]&&(_.data[m*4]=222,_.data[m*4+1]=204,_.data[m*4+2]=119,_.data[m*4+3]=95);g.putImageData(_,0,0),n.save(),n.imageSmoothingEnabled=!0,n.drawImage(f,h,u,l,c),n.restore()}if(s){let d=O.pose;n.save(),n.translate(h+d.x*l,u+d.y*c),n.rotate(d.angle*Math.PI/180),n.scale(d.scale*l,d.scale*c),fp(n,O.kind),n.fillStyle="rgba(255,229,174,.10)",n.fill("evenodd"),n.strokeStyle="#fff1c4",n.lineWidth=1.5/(d.scale*l),n.shadowColor="#3b1c09",n.shadowBlur=5,n.stroke(),n.restore()}}function Ea(){if(bt){bt.draw();return}let n=ue("#design-canvas"),e=n.getBoundingClientRect();if(e.width<1)return;let t=Math.min(devicePixelRatio,2);n.width=Math.round(e.width*t),n.height=Math.round(e.height*t);let i=n.getContext("2d");i.scale(t,t),iu(i,e.width,e.height)}function In(){if(!O.analysis)return;O.layout=Ei(O.analysis,O.target,O.kind,O.pose),ue("#metric-fit").textContent=(O.layout.fit*100).toFixed(1)+"%",ue("#metric-contain").textContent=(O.layout.containment*100).toFixed(1)+"%",ue("#scale").value=Math.round(O.pose.scale*100),ue("#angle").value=Math.round(O.pose.angle),ue("#scale-value").value=Math.round(O.pose.scale*100)+"%",ue("#angle-value").value=Math.round(O.pose.angle)+"°";let n=O.layout.fit>.65?"图案与所选色区重合较多":O.layout.fit>.3?"图案部分落入所选色区":"可以调整位置或缩小图案，寻找更多目标色区";ue("#layout-explanation").textContent=`${n}。当前为“${Zl[O.kind]}”主题，按 ${O.layout.samples} 个固定内部采样点计算。`,Ea(),bt?.refresh(),O.view==="preview"&&!bt&&ru()}function Ti(){ue("#candidate-list").innerHTML=O.candidates.map((n,e)=>`<button class="candidate ${O.selectedCandidate===e?"selected":""}" data-candidate="${e}">构图 ${String(e+1).padStart(2,"0")}<span>覆盖 ${(n.fit*100).toFixed(0)}%</span></button>`).join(""),Tt("[data-candidate]").forEach(n=>n.onclick=()=>{let e=Number(n.dataset.candidate);O.selectedCandidate=e;let{x:t,y:i,scale:s,angle:r}=O.candidates[e];O.pose={x:t,y:i,scale:s,angle:r},Ti(),In()})}async function Ql(){if(!O.analysis)return;let n=ue("#optimize");n.disabled=!0,ue("#analysis-scan").classList.add("active"),await new Promise(e=>setTimeout(e,25));try{let e=performance.now(),t=ue("#lock-scale").checked,i=O.pose.scale;O.searchCount=t?196:784,O.baseline=Ei(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:.24,angle:0}),O.candidates=$f(O.analysis,O.target,O.kind,t?{scale:i}:{}),O.optimizeMs=performance.now()-e,O.selectedCandidate=0;let{x:s,y:r,scale:a,angle:o}=O.candidates[0];O.pose={x:s,y:r,scale:a,angle:o},O.baseline=Ei(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:a,angle:0}),Ti(),In(),ue("#caption-text").textContent=`已搜索 ${O.searchCount} 个位置、尺度与角度组合 · ${Math.round(O.optimizeMs)} ms`,Dt("找到三份构图，点击比较或继续手动调整。")}finally{n.disabled=!1,ue("#analysis-scan").classList.remove("active")}}function xx(){let n=document.createElement("canvas");n.width=1024,n.height=1024;let e=n.getContext("2d");return e.fillStyle="#412719",e.fillRect(0,0,1024,1024),e.drawImage(O.image,0,0,1024,1024),e.save(),e.translate(O.pose.x*1024,O.pose.y*1024),e.rotate(O.pose.angle*Math.PI/180),e.scale(O.pose.scale*1024,O.pose.scale*1024),fp(e,O.kind),e.fillStyle="#fff0ca30",e.fill("evenodd"),e.strokeStyle="#fff1c4",e.lineWidth=2/(O.pose.scale*1024),e.stroke(),e.restore(),n}async function su(){return hp||(hp=Promise.resolve().then(()=>(cp(),lp)))}async function ru(){if(bt)return bt.updatePreview();try{$l||($l=(await su()).createAgateScene(ue("#preview-scene"))),$l.setTexture(xx()),$l.resize()}catch(n){console.error(n),Dt("当前设备三维渲染不可用，仍可使用纹色画布。"),au("color")}}function au(n){if(bt)return bt.setView(n);O.view=n,ue("#design-canvas").hidden=n!=="color",ue("#preview-scene").hidden=n!=="preview",ue("#view-color").classList.toggle("selected",n==="color"),ue("#view-preview").classList.toggle("selected",n==="preview"),ue("#canvas-mode-label").textContent=n==="color"?"COLOR-GUIDED COMPOSITION":"TEXTURE ON PRESET GEOMETRY",ue("#canvas-instruction").textContent=n==="color"?"拖动图案调整位置 · 右侧选择创作主题":"拖动旋转 · 滚轮缩放 · 预设几何上的材质示意",ue("#toggle-overlay").disabled=n==="preview",n==="preview"?ru():requestAnimationFrame(Ea)}function pp(){let n=location.hash.slice(1)||"home";O.route=["home","studio","journey","collection"].includes(n)?n:"home",Tt("main>.page").forEach(e=>e.hidden=e.id!==O.route),Tt("[data-route]").forEach(e=>e.classList.toggle("active",e.dataset.route===O.route)),O.route!=="studio"&&bt?.stopDemo(),O.route==="studio"&&(qf(),requestAnimationFrame(Ea),O.view==="preview"&&ru()),O.route==="collection"&&Qh(),O.route==="home"&&Sa?.resize(),window.scrollTo({top:0,behavior:"instant"})}function wa(n,e){let t=URL.createObjectURL(n),i=document.createElement("a");i.href=t,i.download=e,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Mx(){let n=document.createElement("canvas");n.width=1200,n.height=1260;let e=n.getContext("2d");e.fillStyle="#151917",e.fillRect(0,0,n.width,n.height),e.fillStyle="#d9bc8b",e.font="18px sans-serif",e.fillText("FUXIN · AGATE ATELIER / 石里有境",65,65),e.fillStyle="#eee6d6",e.font="42px SimSun,serif",e.fillText(O.workTitle||Zl[O.kind]+" · 纹色构思",65,120,1070),e.save(),e.translate(0,180),bt?bt.renderArt(e,1200,790):iu(e,1200,790,{includeTarget:!1}),e.restore(),e.strokeStyle="#ffffff25",e.beginPath(),e.moveTo(65,1e3),e.lineTo(1135,1e3),e.stroke();let t=nr.find(r=>r.id===O.sample),i=O.layout;e.font="21px sans-serif",e.fillStyle="#cfb38a",e.fillText(`图案色区匹配 ${(i.fit*100).toFixed(1)}%    图案区域保留 ${(i.containment*100).toFixed(1)}%`,65,1050),e.fillStyle="#a2a69b",e.font="16px sans-serif",e.fillText(`样本：${t?.title||"导入照片"} · ${t?.sub||"用户提供"}`,65,1090),e.fillText("二维创意示意；真实内部材质与加工可行性需工匠核验。",65,1130),e.font="13px sans-serif";let s=O.sample==="bands"?"Photo: Hannes Grobe · CC BY-SA 2.5 · commons.wikimedia.org/wiki/File:Agate1_hg.jpg":O.sample==="nodule"?"Photo: James St. John · CC BY 2.0 · commons.wikimedia.org/wiki/File:Agate_2_(31731816833).jpg":"程序化教学样本 / 或用户自行导入素材";return e.fillText(s,65,1180),e.fillText(O.sample==="bands"?"图片叠加构图适用 CC BY-SA 2.5 · creativecommons.org/licenses/by-sa/2.5/":"数字作品为原创教学示意，非真实加工结果。",65,1210),n}function mp(){if(!O.analysis)return;Mx().toBlob(e=>wa(e,`石里有境-${Zl[O.kind]}-方案卡.png`),"image/png"),Dt("方案卡已导出，包含素材署名和指标。")}function ou(){let n={format:"agate-project",version:4,sample:O.sample,kind:O.kind,pose:{...O.pose},color:O.selectedColor,strokes:structuredClone(O.strokes),polish:O.polish,light:O.light,thickness:O.thickness,inscription:structuredClone(O.inscription),presentation:{...O.presentation},workTitle:O.workTitle,removeBackground:ue("#remove-bg").checked,target:Array.from(O.target),targetWidth:O.analysis.width,targetHeight:O.analysis.height};if(O.kind==="custom"&&(n.outline=O.customOutline),O.sample==="custom"){let e=document.createElement("canvas"),t=Math.min(1,960/Math.max(O.image.width,O.image.height));e.width=Math.round(O.image.width*t),e.height=Math.round(O.image.height*t),e.getContext("2d").drawImage(O.image,0,0,e.width,e.height),n.sourceImage=e.toDataURL("image/jpeg",.88)}return n}function gp(){if(!O.analysis)return;let n=tr("agate-designs-v1"),e=document.createElement("canvas");e.width=420,e.height=340,bt.renderArt(e.getContext("2d"),420,340);let t={...ou(),id:crypto.randomUUID(),created:new Date().toISOString(),metrics:{...O.layout},image:e.toDataURL("image/jpeg",.82),title:O.workTitle||Zl[O.kind]+" · "+new Date().toLocaleDateString("zh-CN")};n.unshift(t),jl("agate-designs-v1",n.slice(0,30))&&Dt("已收藏，进入“我的作品”可继续编辑或导出完整方案。")}async function ec(n){try{let e=[3,4].includes(n.version)?jh(n):n;if(e.sample==="custom"&&!e.sourceImage)throw Error("这份旧收藏没有保留原料照片，请重新导入照片。");if(bt.stopDemo(),ue("#remove-bg").checked=e.removeBackground??!0,e.sample==="custom"){let t=new Image;if(t.src=e.sourceImage,await t.decode(),t.width>4096||t.height>4096)throw Error("方案图片尺寸过大。");++O.loadId,O.sample="custom",O.image=t,ue("#sample-origin").textContent="由方案恢复的用户照片，仅在本机处理。",ue("#canvas-sample-name").textContent="我的原料照片",Jl(),ir(),bt.resetCraft()}else if(await Kl(e.sample),O.sample!==e.sample)throw Error("原料未能加载，请稍后重试。");if(e.kind==="custom"&&(Gl(e.outline),O.customOutline=e.outline,ue('#motif option[value="custom"]').disabled=!1),O.kind=e.kind,ue("#motif").value=e.kind,O.pose={...e.pose},O.selectedColor=Math.min(e.color,O.analysis.colors.length-1),O.target=Ma(O.analysis,O.selectedColor),e.target&&e.targetWidth*e.targetHeight===e.target.length){let t=O.analysis;O.target=Uint8Array.from({length:t.width*t.height},(i,s)=>e.target[Math.min(e.targetHeight-1,Math.floor(Math.floor(s/t.width)/t.height*e.targetHeight))*e.targetWidth+Math.min(e.targetWidth-1,Math.floor(s%t.width/t.width*e.targetWidth))])}O.strokes=structuredClone(e.strokes||[]),O.polish=e.polish??.72,O.light=e.light||"left",O.thickness=e.thickness??.24,O.inscription=structuredClone(e.inscription||null),O.presentation={style:"stone",backdrop:"ink",cord:"cinnabar",...e.presentation},O.workTitle=e.workTitle||"",nu(),O.candidates=[],Ti(),In(),bt.clearHistory(),Sx.sync(),xp.sync(),location.hash="studio",bt.setStep(2),Dt("方案已恢复，可以继续刻线、构形或润色。")}catch(e){Dt(e.message||"方案恢复失败，请检查文件。")}}function Qh(){let n=tr("agate-designs-v1");ue("#collection-list").innerHTML=n.length?n.map(t=>`<article class="collection-card"><img src="${t.image}" alt="${Rn(t.title)}"><h2>${Rn(t.title)}</h2><p>色区覆盖 ${(t.metrics.fit*100).toFixed(1)}% · ${Rn(nr.find(i=>i.id===t.sample)?.title||"导入照片")}</p><div class="card-actions"><button class="text-button small" data-edit="${t.id}">继续编辑 ↗</button><button class="text-button small" data-export="${t.id}">导出方案</button><button class="text-button small" data-delete="${t.id}">删除</button></div></article>`).join(""):'<div class="empty-state"><h2>第一份构思，从一块石开始。</h2><p>选择纹色，尝试构图，收藏你的第一件数字作品。</p><a href="#studio" class="primary compact">开始创作 ↗</a></div>',Tt("[data-edit]").forEach(t=>t.onclick=()=>ec(n.find(i=>i.id===t.dataset.edit))),Tt("[data-export]").forEach(t=>t.onclick=()=>{let i=n.find(o=>o.id===t.dataset.export),{image:s,...r}=i;r.note=i.version>=3?"包含原料引用、手绘轮廓、色区、刻线与润色，可导入继续编辑。":"旧版参数；上传照片未保留。";let a={bands:"agate-bands.jpg",nodule:"agate-nodule.jpg"}[i.sample];r.attribution=a?tu.find(o=>o.file===a)||a:"程序化样本或用户导入照片",wa(new Blob([JSON.stringify(r,null,2)],{type:"application/json"}),"玛瑙创作方案.json")}),Tt("[data-delete]").forEach(t=>t.onclick=()=>{jl("agate-designs-v1",tr("agate-designs-v1").filter(i=>i.id!==t.dataset.delete)),Qh()});let e=tr("agate-plans-v1");ue("#plan-list").innerHTML=e.length?e.map(t=>`<div class="plan-row"><div>${Rn(t.date)} · ${Rn(t.interest)}<small>${Rn(t.note||"尚未填写备注")}</small></div><button data-delete-plan="${t.id}">删除</button></div>`).join(""):'<p class="subtle">还没有研学意向，可在“循艺入乡”保存。</p>',Tt("[data-delete-plan]").forEach(t=>t.onclick=()=>{jl("agate-plans-v1",tr("agate-plans-v1").filter(i=>i.id!==t.dataset.deletePlan)),Qh()})}function bx(){ue("#sources-content").innerHTML='<div class="source-record"><h3>背景音乐 · We Never（若如初见）</h3><p>La Mer / LongTran Final / DJ山茶花。用户指定曲目，可通过右上角音乐控件播放。</p><a href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div>'+vr.map(n=>`<div class="source-record"><h3>${n.title}</h3><p>${n.publisher} · ${n.note}</p><a href="${n.url}" target="_blank" rel="noopener">查看原始资料 ↗</a></div>`).join("")+'<div class="source-record"><h3>阜新玛瑙实景影像 · 4K增强</h3><p>现版使用辽宁省政府网站2026年2月6日发布《玉醇秋酿 阜新秋颂》中的《阜新玛瑙——刀刃上的大地瑰宝》专题，来源为辽宁发布、辽宁卫视《黑土地》。公开片源2560×1440，经轻度降噪、Lanczos放大及温和锐化，输出3840×2160的4K增强视频；并非原生4K，不臆造源片不存在的细节。首页为真实运动镜头剪辑，非动态照片。原声主题篇重新选取雕刻手部、巧色雕件与手镯镜头，保留原画幅及台标角标；首页与主题篇均避开源片自带二维码的镜头。背景照片中的手艺、市集、雕件与原料也来自同一阜新专题的实景截帧。本站未宣称自摄或与片中工坊合作，页面未标明开放许可，使用范围待权利方确认。</p><a href="https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml" target="_blank" rel="noopener">新片源与发布出处 ↗</a> · <a href="./assets/home-film/playback.json" target="_blank" rel="noopener">画质与剪辑记录 ↗</a><p>历史版本的480p影像与实景截图来自国际在线发布、阜新市委宣传部提供的《看见阜新》，保留旧文件供历史页面兼容；当前首页已更换高清来源。</p></div><div class="source-record"><h3>实拍背景与图像素材</h3><p>公开实拍样本用于技术演示，不作为阜新原料或本地合作证明。实物图鉴采用等比缩放与格式压缩版本，原始文件归档于初始材料；画布叠加为本系统产生。</p><a href="./assets/backgrounds/credits.json" target="_blank" rel="noopener">各页面实拍背景、出处与截帧时间 ↗</a></div>'+tu.map(n=>`<div class="source-record"><h3>${Rn(n.original)}</h3><p>${Rn(n.author)} / ${Rn(n.license)} · ${Rn(n.origin)}</p><p>${Rn(n.changes||"")}</p><a href="${n.source}" target="_blank" rel="noopener">图片来源 ↗</a> · <a href="${n.licenseUrl}" target="_blank" rel="noopener">许可条款 ↗</a></div>`).join("")+'<div class="source-record"><h3>软件与示意内容</h3><p>Three.js r180 · MIT许可。循艺入乡点位卡片中的手艺与水岸情境，以及形成引导的四幅写实情境由内置 image_gen 生成，供地质概念讲述，不是实拍或物理模拟；图库中的馆藏与标本照片单独保留出处。当前全站背景采用实拍图像，按区域选用实物样本、馆藏器物及阜新专题实景截帧；标本与馆藏照片不作为阜新本地作品证明。赤霞流纹、三维原石与创作轮廓由代码生成；成器几何依据当前轮廓构建，刻线为外观凹痕示意。文化查询为本地资料检索，未调用在线生成式问答模型。</p><a href="./vendor/THREE-LICENSE.txt" target="_blank" rel="noopener">Three.js许可 ↗</a></div>',ue("#sources-dialog").showModal()}function _p(){if(!O.analysis)return;let n=Ei(O.analysis,O.target,O.kind,{x:.5,y:.5,scale:O.pose.scale,angle:0}),e=O.layout,t=O.target.reduce((i,s)=>i+s,0);ue("#validation-content").innerHTML=`<p class="validation-p">当前图像分析分辨率 ${O.analysis.width} × ${O.analysis.height}，有效像素 ${O.analysis.validPixels}，目标色区 ${t} 像素。颜色聚类在 OKLab 空间进行，自动分色后可手动修正色区。</p><table class="data-table"><thead><tr><th>当前图像内对照</th><th>居中默认布局</th><th>当前布局</th></tr></thead><tbody><tr><td>图案色区匹配</td><td>${(n.fit*100).toFixed(1)}%</td><td>${(e.fit*100).toFixed(1)}%</td></tr><tr><td>图案区域保留</td><td>${(n.containment*100).toFixed(1)}%</td><td>${(e.containment*100).toFixed(1)}%</td></tr></tbody></table><p class="validation-p">分色耗时 ${O.analysisMs.toFixed(1)} ms；最近一次构图搜索耗时 ${O.optimizeMs?O.optimizeMs.toFixed(1)+" ms":"尚未运行"}。默认对照为居中、与当前图案相同尺度、0°；两列均在当前目标色区上重新计算。</p><p class="validation-p">以上为当前图像的运行记录，不是跨样本评测结论，也不验证雕刻可行性。更小图形可能获得更高覆盖率，需结合视觉表达选择合适方案。</p>`,ue("#validation-dialog").showModal()}function yp(n){let e=[...n.toLowerCase()],i=Lu.map(c=>({...c,score:c.keys.reduce((h,u)=>h+(n.includes(u)?3:0),0)+Math.min(1,e.filter(h=>c.title.includes(h)).length/10)})).sort((c,h)=>h.score-c.score)[0],s=ue("#knowledge-answer");if(s.replaceChildren(),!n.trim()){s.textContent="请输入想了解的内容。";return}if(i.score<1){s.textContent="已核对的资料卡暂未覆盖这个问题。可尝试“工艺”“十家子”“非遗”或“乡村”，也可打开文化资料库阅读原文。";return}let r=document.createElement("strong");r.textContent=i.title;let a=document.createElement("p");a.textContent=i.text;let o=document.createElement("a"),l=vr.find(c=>c.id===i.source);o.href=l.url,o.target="_blank",o.rel="noopener",o.textContent="依据："+l.publisher+" ↗",s.append(r,a,o)}ue("#optimize").onclick=Ql;ue("#save-design").onclick=gp;ue("#export-png").onclick=mp;ue("#view-color").onclick=()=>au("color");ue("#view-preview").onclick=()=>au("preview");ue("#toggle-overlay").onclick=()=>{O.overlay=!O.overlay,ue("#toggle-overlay").setAttribute("aria-pressed",String(O.overlay)),ue("#toggle-overlay").textContent=O.overlay?"◉ 色区叠加":"○ 色区叠加",Ea()};ue("#motif").onchange=n=>{O.kind=n.target.value,O.candidates=[],O.selectedCandidate=-1,Ti(),In()};ue("#scale").oninput=n=>{O.pose.scale=Number(n.target.value)/100,O.selectedCandidate=-1,Ti(),In()};ue("#angle").oninput=n=>{O.pose.angle=Number(n.target.value),O.selectedCandidate=-1,Ti(),In()};ue("#remove-bg").onchange=ir;ue("#reanalyze").onclick=ir;ue("#reset-mask").onclick=()=>{O.analysis&&(O.target=Ma(O.analysis,O.selectedColor),O.candidates=[],O.selectedCandidate=-1,Ti(),In())};Tt("[data-brush]").forEach(n=>n.onclick=()=>{O.brush=n.dataset.brush,Tt("[data-brush]").forEach(e=>e.classList.toggle("selected",e===n)),ue("#design-canvas").style.cursor=O.brush==="none"?"grab":"crosshair"});ue("#image-upload").onchange=async n=>{let e=n.target.files[0];if(!e)return;if(!["image/jpeg","image/png","image/webp"].includes(e.type)||e.size>15*1024*1024){Dt("请选择不超过 15 MB 的 JPG、PNG 或 WebP 图片。"),n.target.value="";return}let t=++O.loadId,i=URL.createObjectURL(e);try{let s=new Image;if(s.src=i,await s.decode(),t!==O.loadId){URL.revokeObjectURL(i);return}Kh&&URL.revokeObjectURL(Kh),Kh=i,O.sample="custom",O.image=s,O.pose={x:.5,y:.5,scale:.24,angle:0},ue("#sample-origin").textContent="用户导入照片，仅在当前设备处理。请确认有权用于展示。",ue("#canvas-sample-name").textContent="我的原料照片",Jl(),ir(),bt?.resetCraft(),Dt("照片已在本机读取。开始借色构形。")}catch{URL.revokeObjectURL(i),Dt("无法解码此图片，请更换文件。")}n.target.value=""};Tt(".source-open").forEach(n=>n.onclick=bx);Tt(".dialog-close").forEach(n=>n.onclick=()=>n.closest("dialog").close());Tt("dialog").forEach(n=>n.addEventListener("click",e=>{if(e.target===n){let t=n.getBoundingClientRect();(e.clientX<t.left||e.clientX>t.right||e.clientY<t.top||e.clientY>t.bottom)&&n.close()}}));ue("#open-validation").onclick=_p;ue("#home-guide").onclick=()=>ue("#home-story").scrollIntoView({behavior:"smooth"});ue("#auto-rotate").onclick=()=>{if(!Sa)return;let n=!Sa.controls.autoRotate;Sa.setAuto(n),ue("#auto-rotate").setAttribute("aria-pressed",String(n)),ue("#auto-rotate").textContent=n?"Ⅱ 暂停自转":"▷ 开启自转"};ue("#plan-trip").onclick=()=>{ue("#trip-date").min=new Date(Date.now()-new Date().getTimezoneOffset()*6e4).toISOString().slice(0,10),ue("#trip-dialog").showModal()};ue("#trip-form").onsubmit=n=>{n.preventDefault();let e=tr("agate-plans-v1");e.unshift({id:crypto.randomUUID(),date:ue("#trip-date").value,interest:ue("#trip-interest").value,note:ue("#trip-note").value.trim()}),jl("agate-plans-v1",e.slice(0,50))&&(ue("#trip-dialog").close(),ue("#trip-form").reset(),Dt("已保存本地研学意向，可在“我的作品”查看。"))};ue("#knowledge-form").onsubmit=n=>{n.preventDefault(),yp(ue("#knowledge-input").value)};Tt("[data-question]").forEach(n=>n.onclick=()=>{ue("#knowledge-input").value=n.dataset.question,yp(n.dataset.question)});ue("#craft-tabs").innerHTML=Ha.map((n,e)=>`<button data-craft="${e}" class="${e===0?"selected":""}">${n.title}</button>`).join("");function vp(n){ue("#craft-detail").replaceChildren();let e=document.createElement("h3");e.textContent=Ha[n].subtitle;let t=document.createElement("p");t.textContent=Ha[n].text,ue("#craft-detail").append(e,t),Tt("[data-craft]").forEach(i=>i.classList.toggle("selected",Number(i.dataset.craft)===n))}Tt("[data-craft]").forEach(n=>n.onclick=()=>vp(Number(n.dataset.craft)));vp(0);bt=tp({$:ue,$$:Tt,state:O,samples:nr,drawSource:iu,getDrawRect:()=>eu,getSceneModule:su,renderCandidates:Ti,updateLayout:In,optimize:Ql,exportCard:mp,saveDesign:gp,toast:Dt});var Sx=ep({state:O,experience:bt,$:ue,$$:Tt,toast:Dt,getDrawRect:()=>eu,download:wa}),xp=Qf({state:O,experience:bt,$:ue,$$:Tt,toast:Dt,download:wa,projectData:ou,restoreProject:ec,optimize:Ql,updateLayout:In});ue(".heading-actions").insertAdjacentHTML("afterbegin",'<label class="project-import">导入方案<input id="project-import" type="file" accept=".json,application/json"></label>');ue("#project-import").onchange=async n=>{let e=n.target.files[0];if(e){try{if(e.size>5*1024*1024)throw Error("方案文件请保持在 5 MB 以内。");let t=jh(JSON.parse(await e.text()));await ec(t)}catch(t){Dt(t.message||"方案文件无法读取。")}n.target.value=""}};window.agateJourney=Nu({toast:Dt,download:wa});window.addEventListener("hashchange",pp);new ResizeObserver(()=>Ea()).observe(ue("#canvas-stage"));Jl();pp();Kl("procedural");fetch("./assets/credits.json").then(n=>n.json()).then(n=>tu=n).catch(()=>{});su().then(n=>{Sa=n.createAgateScene(ue("#hero-scene"),{hero:!0})}).catch(n=>{console.error(n),ue("#scene-fallback").hidden=!1});window.agateStudio={state:O,analyze:ir,loadSample:Kl,optimize:Ql,showValidation:_p,experience:bt,restoreProject:ec,projectData:ou,playground:xp};var gn=document.createElement("div");gn.className="ambient-player";gn.innerHTML='<button id="music-toggle" class="music-toggle" aria-label="播放背景音乐" aria-pressed="false"><span class="music-note" aria-hidden="true">♫</span><span id="music-label">开启音乐</span><span class="music-bars" aria-hidden="true"><i></i><i></i><i></i></span></button><button id="music-settings" class="music-settings" aria-label="音乐设置" aria-expanded="false" aria-controls="music-panel">⌄</button><div id="music-panel" class="music-panel" hidden><p class="eyebrow">ATELIER SOUNDTRACK</p><strong id="music-title">背景音乐</strong><p id="music-artist"></p><div class="music-timeline"><span id="music-current">0:00</span><input id="music-seek" type="range" min="0" max="1000" value="0" aria-label="播放进度" disabled><span id="music-duration">0:00</span></div><label for="music-volume">音量 <output id="music-volume-value">25%</output></label><div class="music-volume-row"><button id="music-mute" aria-label="静音" aria-pressed="false">♪</button><input id="music-volume" type="range" min="0" max="100" value="25" aria-label="背景音乐音量"></div><p id="music-status" role="status">轻点音符，让音乐伴着创作。</p><div class="music-footer"><span>单曲循环 · 切换页面不中断</span><a id="music-source" href="https://inmp3.com/song/654376007/" target="_blank" rel="noopener">歌曲来源 ↗</a></div></div>';document.querySelector(".header").append(gn);var Ze=n=>gn.querySelector(n),ke=document.createElement("audio");ke.id="background-music";ke.src="./assets/background-we-never.mp3";ke.preload="none";ke.loop=!0;document.body.append(ke);var Ex=()=>{try{let n=JSON.parse(localStorage.getItem("agate-music-volume"));return typeof n=="number"&&Number.isFinite(n)?Math.max(0,Math.min(1,n)):.25}catch{return .25}};ke.volume=Ex();var is=!1,lu=ke.volume||.25,ns=0,tc=null,nc=null,ic=!0,sc=!1,cu=document.documentElement.classList.contains("film-entering");async function wx(){nc||(tc||(tc=fetch(new URL("./assets/background-we-never.mp3",import.meta.url),{priority:"low"}).then(n=>{if(!n.ok)throw Error("Audio unavailable");return n.blob()}).then(n=>{nc=URL.createObjectURL(n),ke.src=nc}).catch(n=>{throw tc=null,n})),await tc)}function rc(){Ze("#music-volume").value=Math.round(ke.volume*100),Ze("#music-volume-value").value=Math.round(ke.volume*100)+"%";let n=ke.muted||ke.volume===0;Ze("#music-mute").setAttribute("aria-pressed",String(n)),Ze("#music-mute").setAttribute("aria-label",n?"取消静音":"静音"),Ze("#music-mute").textContent=n?"×":"♪"}var Mp=n=>Number.isFinite(n)?Math.floor(n/60)+":"+String(Math.floor(n%60)).padStart(2,"0"):"0:00";function ss(){let n=!ke.paused;gn.classList.toggle("playing",n),Ze("#music-toggle").setAttribute("aria-pressed",String(n)),Ze("#music-toggle").setAttribute("aria-label",n?"暂停背景音乐":"播放背景音乐"),Ze("#music-label").textContent=n?"音乐播放中":"开启音乐"}function ac(){ic=!1,document.removeEventListener("click",sr,!0),document.removeEventListener("touchend",sr,!0),document.removeEventListener("keydown",sr,!0)}async function Ta(){if(cu||sc||is||!ke.paused)return;let n=++ns;is=!0,Ze("#music-label").textContent="正在加载",Ze("#music-status").textContent="正在准备音乐…";try{if(nc||await wx(),n!==ns)return;ke.error&&ke.load(),await ke.play(),n===ns&&(ac(),gn.dataset.autoplay="playing",Ze("#music-status").textContent="正在循环播放，可随时暂停。")}catch(e){if(n!==ns)return;ss(),e.name==="NotAllowedError"?(gn.dataset.autoplay="waiting",Ze("#music-label").textContent=ic?"轻触开启":"开启音乐",Ze("#music-status").textContent=ic?"轻触页面，音乐便随创作开始。":"音乐已准备好，请轻点音符播放。"):(gn.dataset.autoplay="unavailable",Ze("#music-status").textContent="暂时未能播放，请点击音符重试。")}finally{n===ns&&(is=!1)}}function bp(){ac(),!sc&&(is||!ke.paused?(ns++,is=!1,ke.pause(),ss(),gn.dataset.autoplay="paused",Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"):Ta())}function sr(n){!ic||!n.isTrusted||gn.contains(n.target)||n.type==="keydown"&&(!["Enter"," "].includes(n.key)||n.ctrlKey||n.altKey||n.metaKey)||Ta()}document.addEventListener("click",sr,!0);document.addEventListener("touchend",sr,{capture:!0,passive:!0});document.addEventListener("keydown",sr,!0);Ze("#music-toggle").onclick=bp;function hu(n){Ze("#music-panel").hidden=!n,Ze("#music-settings").setAttribute("aria-expanded",String(n))}Ze("#music-settings").onclick=()=>hu(Ze("#music-panel").hidden);document.addEventListener("pointerdown",n=>{gn.contains(n.target)||hu(!1)});document.addEventListener("keydown",n=>{n.key==="Escape"&&!Ze("#music-panel").hidden&&(hu(!1),Ze("#music-settings").focus())});Ze("#music-volume").oninput=n=>{ke.volume=Number(n.target.value)/100,ke.volume>0&&(lu=ke.volume),ke.muted=!1;try{localStorage.setItem("agate-music-volume",JSON.stringify(ke.volume))}catch{}rc()};Ze("#music-mute").onclick=()=>{if(ke.muted||ke.volume===0){if(ke.muted=!1,ke.volume===0){ke.volume=lu;try{localStorage.setItem("agate-music-volume",JSON.stringify(ke.volume))}catch{}}}else lu=ke.volume,ke.muted=!0;rc()};Ze("#music-seek").oninput=n=>{Number.isFinite(ke.duration)&&ke.duration>0&&(ke.currentTime=Number(n.target.value)/1e3*ke.duration)};ke.addEventListener("play",ss);ke.addEventListener("pause",()=>{ss(),Ze("#music-status").textContent="音乐已暂停，轻点音符继续。"});ke.addEventListener("playing",()=>{ac(),gn.dataset.autoplay="playing",Ze("#music-label").textContent="音乐播放中",Ze("#music-status").textContent="正在循环播放，可随时暂停。"});ke.addEventListener("waiting",()=>{ke.paused||(Ze("#music-label").textContent="正在缓冲",Ze("#music-status").textContent="音乐正在缓冲…")});ke.addEventListener("loadedmetadata",()=>{Ze("#music-duration").textContent=Mp(ke.duration),Ze("#music-seek").disabled=!Number.isFinite(ke.duration)});ke.addEventListener("timeupdate",()=>{Ze("#music-current").textContent=Mp(ke.currentTime),Number.isFinite(ke.duration)&&ke.duration>0&&(Ze("#music-seek").value=Math.round(ke.currentTime/ke.duration*1e3))});ke.addEventListener("volumechange",rc);ke.addEventListener("error",()=>{Ze("#music-status").textContent="音乐暂不可用，请点击音符重试。",ss()});fetch("./assets/music.json").then(n=>{if(!n.ok)throw Error();return n.json()}).then(n=>{Ze("#music-title").textContent=n.title,Ze("#music-artist").textContent=n.artist,Ze("#music-toggle").title=n.title+" · "+n.artist}).catch(()=>{Ze("#music-title").textContent="用户指定背景音乐"});function Tx(){let n=!ke.paused||is;sc=!0,ns++,is=!1,ac(),ke.pause(),ss(),Ze("#music-label").textContent="观影中",Ze("#music-status").textContent="宣传片播放期间，背景音乐暂时暂停。";let e=!1;return()=>{e||(e=!0,sc=!1,ss(),n&&Ta())}}rc();window.agateMusic={audio:ke,toggle:bp,suspendForFilm:Tx};cu?(Ze("#music-label").textContent="入境后播放",window.addEventListener("agate:entry-ready",()=>{cu=!1,Ta()},{once:!0})):Ta();var oc=document.createElement("div");oc.className="agate-background";oc.setAttribute("aria-hidden","true");oc.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div>';document.body.prepend(oc);var _n={version:"0.11.1",homepageMode:"Native progressive MP4: lightweight automatic rendition; buffer opening seconds and confirm first decoded playing frame, without waiting for complete download. Bounded entrance fallback preserves access on slow networks.",sourceResolution:[2560,1440],sourceDuration:252.378,sourceUrl:"https://www.ln.gov.cn/web/sqgk/whly/sjft/q/2026020611181587017/index.shtml",sourceMedia:"https://video.ln.gov.cn/video/2026/2/6/2026261770347739440_2784.mp4",sourceTitle:"玉醇秋酿 阜新秋颂 · 阜新玛瑙——刀刃上的大地瑰宝",sourcePublished:"2026-02-06",provider:"辽宁发布 / 辽宁卫视《黑土地》",publisher:"辽宁省人民政府网站",native4K:!1,enhancement:"以2560×1440公开原片为源，轻度降噪、Lanczos 1.5倍放大、温和锐化，输出3840×2160；属于4K增强而非原生4K。保留原始画幅、台标与角标，不臆造纹色或工艺细节。",loopDuration:19.5,loopSegments:[{start:164,duration:4,content:"巧色雕件",chapter:0},{start:115.1,duration:4.8,content:"手工雕刻",chapter:1},{start:175.1,duration:4,content:"透雕器物",chapter:1},{start:217,duration:6,content:"玛瑙手镯",chapter:1},{start:225.7,duration:3.2,content:"阜新玛瑙市集",chapter:2}],crossfadeSeconds:.5,seam:"交叉淡化至首段相同运动相位，循环首尾连续。",variants:[{file:"agate-loop-clean-4k.mp4",width:3840,height:2160,duration:19.5,bytes:22322905,audio:!1,native4K:!1},{file:"agate-loop-clean-hd.mp4",width:1920,height:1080,duration:19.5,bytes:9290694,audio:!1,native4K:!1}],story4k:{file:"agate-story-clean-4k.mp4",width:3840,height:2160,duration:34.6,bytes:39774142,originalSound:!0,edited:!0},scope:"玛瑙巧色雕件、手工雕刻、透雕器物、玛瑙手镯与阜新玛瑙市集；无采访二维码镜头。",rights:"第三方宣传专题，保留辽宁发布、辽宁卫视与省政府发布出处；未查到开放许可，不声明为本站原创拍摄。使用范围仍待权利方确认。",initialTime:0,storyHd:{file:"agate-story-clean-hd.mp4",width:1920,height:1080,duration:34.6,bytes:14857535,originalSound:!0,edited:!0},qrPolicy:"仅选用源片中本身没有二维码的镜头；未用遮挡、模糊或修补掩盖二维码。背景和原声主题剪辑均重新选段。",storySegments:[{start:115.1,duration:4.8},{start:163.5,duration:21.6},{start:217,duration:8.2}],fastVariants:[{file:"agate-loop-fast-1080.mp4",width:1920,height:1080,bytes:3742755,duration:19.48,audio:!1},{file:"agate-loop-fast-720.mp4",width:1280,height:720,bytes:1897901,duration:19.48,audio:!1}],startupBufferSeconds:1.25,defaultQuality:"auto",entranceMaxWaitMs:6e3,startupPolicy:"Use1.25s opening buffer when paused; if native autoplay is already rendering, confirm the next actual frame and enter immediately without waiting for extra buffered seconds."};var Gt=document.querySelector("#home-film"),Be=document.querySelector("#home-film-video"),uu=document.querySelector("#home-film-toggle"),Da=document.querySelector("#home-film-status"),Cx=document.querySelector("#home-film-progress"),Ca=document.querySelector("#home-film-quality"),Pa=matchMedia("(prefers-reduced-motion: reduce)"),Sp=document.querySelector(".header");new ResizeObserver(()=>Gt.style.setProperty("--film-header-height",`${Sp.getBoundingClientRect().height}px`)).observe(Sp);var Rx=_n.sourceUrl,St=document.createElement("dialog");St.className="home-film-dialog";St.id="home-film-dialog";St.setAttribute("aria-labelledby","home-full-film-title");St.innerHTML=`<div class="home-film-dialog-top"><div><p>FUXIN · AGATE CULTURE & CRAFT</p><h2 id="home-full-film-title">阜新玛瑙 · 从纹色到手艺</h2></div><button id="home-film-close" class="home-film-close" aria-label="关闭玛瑙主题片">×</button></div><video id="home-full-film" class="home-full-film" controls playsinline preload="none" poster="./assets/home-film/poster-clean-4k.webp" aria-label="阜新玛瑙文化与手艺主题选段，保留原声"></video><p id="home-full-film-status" class="home-full-film-status" role="status"></p><div class="home-film-dialog-footer"><p>玛瑙主题选段 · 约 ${Math.round(_n.story4k.duration)} 秒 · 保留原声<br>原片《阜新玛瑙——刀刃上的大地瑰宝》<br>辽宁发布 / 辽宁卫视《黑土地》 · 省政府网站发布</p><a href="${Rx}" target="_blank" rel="noopener">查看完整原片与出处 ↗</a><span class="film-key-hint">ESC / CLOSE</span></div>`;document.body.append(St);var Kt=St.querySelector("video"),rr=St.querySelector("#home-full-film-status"),du=null,Aa=0,yn=document.querySelector("#entry-gate"),wp=document.querySelector("#entry-status"),Ix=document.querySelector("#entry-progress"),Px=document.querySelector("#entry-progress-fill"),Lx=document.querySelector("#entry-percent"),Dx=document.querySelector("#entry-quality"),Ra=document.querySelector("#entry-help"),lc=document.querySelector("#entry-actions"),Tp=document.querySelector("#entry-retry"),Ap=document.querySelector("#entry-skip"),gu=document.documentElement,cc=new Map,Ux=Object.fromEntries(_n.variants.map(n=>[n.width===3840?"4k":"hd",n])),Nx=Object.fromEntries(_n.fastVariants.map(n=>[n.height,n])),Ua=()=>!location.hash||location.hash==="#home",lr=()=>Ua()&&Cp&&!document.hidden&&!St.open&&!hr,Ft="auto",cr=null,Ai=0,hc=0,ar=null,xn=!1,uc=!1,vn=!1,Cp=!0,hr=!1,fr=!1,fu=0,pu,Ia,La,ur=!gu.classList.contains("film-entering"),or=!1,dr=_n.initialTime||0,Rp=!1,Fx=()=>Ft==="auto"?`智能流畅 · ${cr?.height||1080}P`:Ft==="4k"?"4K 增强影像":"高清影像",Ip=n=>n==="auto"?Nx[Rp||innerWidth<1e3||navigator.connection?.saveData?720:1080]:Ux[n],Ep=-.5,Pp=_n.loopSegments.map(n=>{let e=Math.max(0,Ep);return Ep+=n.duration-_n.crossfadeSeconds,{time:e,chapter:n.chapter}});function _u(){let n=Be.currentTime;for(let e=0;e<Be.buffered.length;e++)if(n>=Be.buffered.start(e)-.05&&n<=Be.buffered.end(e)+.05)return Math.max(0,Be.buffered.end(e)-n);return 0}function Vn(){let n=vn&&!Be.paused;uu.setAttribute("aria-pressed",String(n)),uu.textContent=n?"Ⅱ 暂停影像":fr?"▷ 点击播放":"▷ 播放影像",Gt.dataset.filmState=xn?"preparing":n?"playing":vn?"paused":"poster",Da.textContent=xn?"正在准备开场画面…":vn?`${Fx()} · ${n?"连续实景":"影像已暂停"}`:"实景封面 · 点击播放连续影像"}function yu(n,e){let t=Math.max(0,Math.min(100,Math.round(n)));Px.style.width=`${t}%`,Lx.textContent=`${t}%`,Ix.setAttribute("aria-valuenow",String(t)),e&&(wp.textContent=e)}function Lp(){ur||or||(fu++,yn.classList.remove("leaving"),yn.hidden=!1,gu.classList.add("film-entering"),yn.dataset.state="preparing",Ra.hidden=!0,lc.hidden=!0,Tp.textContent="重新准备",Ap.disabled=!1,Dx.textContent="只准备开场画面，无需等待整段下载",yu(0,"正在点亮第一帧"),document.querySelectorAll("body>.header,body>main,body>footer,.home-screen-nav").forEach(n=>{cc.has(n)||cc.set(n,n.inert),n.inert=!0}),yn.setAttribute("tabindex","-1"),yn.focus({preventScroll:!0}),Ia||(Ia=setTimeout(()=>{Ia=0,pr("slow-network")},_n.entranceMaxWaitMs)),clearTimeout(pu),pu=setTimeout(()=>{ur||(Ra.hidden=!1,Ra.textContent="开场仍在准备，也可以直接进入浏览。",lc.hidden=!1)},2500))}function pr(n){if(ur||or)return;clearTimeout(pu),clearTimeout(Ia),Ia=0,or=!0;let e=++fu;yn.dataset.state=n,yu(100,n==="playing"?"画面就绪，正在入境":"正在入境"),yn.classList.add("leaving"),setTimeout(()=>{if(e===fu&&(ur=!0,or=!1,gu.classList.remove("film-entering"),yn.classList.remove("leaving"),yn.hidden=!0,cc.forEach((t,i)=>{i.inert=t}),cc.clear(),window.dispatchEvent(new CustomEvent("agate:entry-ready",{detail:{reason:n,quality:Ft}})),Ua())){let t=document.querySelector("#home-film-title");t.setAttribute("tabindex","-1"),t.focus({preventScroll:!0})}},Pa.matches?0:250)}function mu(n,e=!1){fr=e,Vn(),Da.textContent=e?"轻点播放，开启实景影像":"实景封面 · 轻点播放可重试",!(ur||or)&&(yn.dataset.state=e?"awaiting-play":"error",wp.textContent=n,Ra.textContent=e?"影像已准备好，点击播放或直接进入。":"可以重新准备，也可以直接进入浏览。",Ra.hidden=!1,lc.hidden=!1,Tp.textContent=e?"进入并播放":"重新准备",Ap.disabled=!1)}function Ox(n,e){return new Promise((t,i)=>{let s=["loadedmetadata","loadeddata","canplay","progress","seeked","timeupdate"],r=!1,a=()=>{clearTimeout(h),s.forEach(u=>Be.removeEventListener(u,c)),Be.removeEventListener("error",l),n.removeEventListener("abort",o)},o=()=>{a(),i(new DOMException("Cancelled","AbortError"))},l=()=>{a(),i(new DOMException("Video unavailable","NotSupportedError"))},c=()=>{if(e!==Ai){o();return}if(Be.readyState>=1&&!r){r=!0;let g=Math.min(dr,Math.max(0,Be.duration-.1));dr=0,g>0&&Math.abs(Be.currentTime-g)>.1&&(Be.currentTime=g)}let u=_u(),d=Math.min(_n.startupBufferSeconds,Math.max(.05,Be.duration-Be.currentTime));Gt.dataset.bufferedAhead=u.toFixed(2),!ur&&!or&&yu(Number.isFinite(d)?Math.min(94,u/d*94):0,"正在准备开场画面");let f=!Be.paused&&Be.currentTime>0;r&&!Be.seeking&&Be.readyState>=2&&(u>=d-.04||f)&&(a(),t())},h=setTimeout(()=>{a(),i(new Error("Opening buffer timed out"))},45e3);s.forEach(u=>Be.addEventListener(u,c)),Be.addEventListener("error",l),n.addEventListener("abort",o,{once:!0}),c()})}function kx(n){return new Promise((e,t)=>{let i,s=Be.currentTime,r=()=>{clearTimeout(o),i!==void 0&&Be.cancelVideoFrameCallback?.(i),n.removeEventListener("abort",a)},a=()=>{r(),t(new DOMException("Cancelled","AbortError"))},o=setTimeout(()=>{r(),Be.videoWidth>0&&Be.readyState>=2&&!Be.paused&&Be.currentTime>s?e():t(new Error("First video frame not ready"))},3e3);n.addEventListener("abort",a,{once:!0}),Be.requestVideoFrameCallback&&(i=Be.requestVideoFrameCallback(()=>{r(),e()}))})}async function Dp(n){Be.muted=!0,Be.defaultMuted=!0,await Be.play(),await kx(ar.signal),n===Ai&&(vn=!0,xn=!1,fr=!1,Gt.dataset.firstFrame="true",Gt.dataset.videoQuality=Ft,Gt.dataset.rendition=String(cr.height),Gt.dataset.entryBufferedSeconds=_u().toFixed(2),Gt.dataset.entryVideoSeconds=String(Be.currentTime),Gt.classList.add("video-ready"),Vn(),pr("playing"),lr()||mr())}async function ni(n=Ft,e=!1){let t=++Ai;hc++,ar?.abort(),ar=new AbortController,clearTimeout(La),Ft=n,Ca.value=n,cr=Ip(n),vn=!1,uc=!1,xn=!0,fr=!1,hr=!1,Gt.dataset.firstFrame="false",Gt.dataset.playbackMode="progressive",Lp(),Vn();let i=new URL(`./assets/home-film/${cr.file}`,document.baseURI).href;try{if(Be.muted=!0,Be.defaultMuted=!0,Be.preload="auto",Be.loop=!0,(Be.src!==i||e)&&(Be.pause(),Gt.classList.remove("video-ready"),Be.src=i,Be.load()),await Ox(ar.signal,t),t!==Ai)return;uc=!0,await Dp(t)}catch(s){if(t!==Ai||s.name==="AbortError")return;if(xn=!1,Vn(),s.name==="NotAllowedError"){mu("开场画面已准备好",!0);return}if(n==="4k"&&s.name==="NotSupportedError"){dr=Be.currentTime||0,ni("auto");return}mu("实景影像暂未准备完成")}}function mr(){hc++,Be.pause(),clearTimeout(La),Vn()}async function Up(){if(!vn||!lr())return;let n=++hc;try{if(await Be.play(),n!==hc)return;if(!lr()){Be.pause();return}Vn()}catch{Vn(),Da.textContent="点击播放影像，继续观看"}}function Na(){xn||(vn&&lr()?Up():mr())}window.agateEntrance={retry(){fr&&uc?(xn=!0,lc.hidden=!0,Dp(Ai).catch(()=>{xn=!1,mu("轻点播放，开启实景影像",!0)})):ni(Ft,!0)},skip(){pr("skipped")}};uu.onclick=()=>{if(fr&&uc){window.agateEntrance.retry();return}if(!vn){ni(Ft,!0);return}Be.paused?(hr=!1,Up()):(hr=!0,mr())};Ca.onchange=()=>{dr=Be.currentTime||0;try{localStorage.setItem("agate-film-quality-v2",Ca.value)}catch{}ni(Ca.value)};Gt.querySelectorAll("[data-film-chapter]").forEach(n=>n.onclick=()=>{let e=Pp.find(t=>t.chapter===Number(n.dataset.filmChapter));if(e){if(!vn){dr=e.time,ni(Ft);return}Be.currentTime=e.time}});Be.addEventListener("timeupdate",()=>{let n=Be.currentTime,e=[...Pp].reverse().find(t=>n>=t.time)?.chapter||0;Gt.querySelectorAll("[data-film-chapter]").forEach(t=>t.classList.toggle("active",Number(t.dataset.filmChapter)===e)),Cx.style.width=Number.isFinite(Be.duration)?`${n/Be.duration*100}%`:"0%"});Be.addEventListener("playing",()=>{clearTimeout(La),Vn()});Be.addEventListener("pause",Vn);Be.addEventListener("waiting",()=>{!vn||!lr()||(Da.textContent="正在缓冲，画面就绪后继续",clearTimeout(La),Ft==="auto"&&cr.height>720&&(La=setTimeout(()=>{lr()&&_u()<.25&&(Rp=!0,dr=Be.currentTime,ni("auto"))},3500)))});new IntersectionObserver(n=>{Cp=n[0].isIntersecting,Na()},{threshold:.12}).observe(Gt);document.addEventListener("visibilitychange",()=>{document.hidden&&St.open&&Kt.pause(),Na()});window.addEventListener("hashchange",()=>{St.open&&St.close(),Ua()?!vn&&!Pa.matches?ni(Ft):Na():(xn&&(Ai++,ar?.abort(),xn=!1),pr("route"),mr())});Pa.addEventListener("change",()=>{Pa.matches?(hr=!0,xn&&(Ai++,ar?.abort(),xn=!1),mr(),pr("reduced-motion")):!vn&&Ua()?ni(Ft):Na()});yn.addEventListener("keydown",n=>{if(n.key!=="Tab")return;let e=[...yn.querySelectorAll("button:not(:disabled)")].filter(s=>!s.closest("[hidden]"));if(!e.length){n.preventDefault();return}let t=e.indexOf(document.activeElement),i=n.shiftKey?t<=0?e.length-1:t-1:(t+1)%e.length;n.preventDefault(),e[i].focus()});function Bx(){if(St.open)return;Aa++,mr(),du=window.agateMusic?.suspendForFilm?.()||null,rr.textContent="正在准备玛瑙主题片…",St.showModal();let n=Ft==="4k"?`./assets/home-film/${_n.story4k.file}`:`./assets/home-film/${_n.storyHd.file}`;Kt.getAttribute("src")!==n&&(Kt.src=n,Kt.load()),Kt.currentTime=0,Kt.muted=!1,Kt.volume=1;let e=Aa;Kt.play().then(()=>{if(e===Aa){if(!St.open){Kt.pause();return}rr.textContent=""}}).catch(t=>{e!==Aa||!St.open||(rr.textContent=t.name==="NotAllowedError"?"请点击播放键开启原声。":"主题片暂未载入，可通过下方来源观看原片。")})}document.querySelector("#home-film-watch").onclick=Bx;document.querySelector("#home-film-close").onclick=()=>St.close();St.addEventListener("close",()=>{Aa++,Kt.pause(),du?.(),du=null,Na()});St.addEventListener("click",n=>{if(n.target===St){let e=St.getBoundingClientRect();(n.clientX<e.left||n.clientX>e.right||n.clientY<e.top||n.clientY>e.bottom)&&St.close()}});Kt.addEventListener("playing",()=>{St.open?rr.textContent="":Kt.pause()});Kt.addEventListener("error",()=>{rr.textContent="主题片暂未载入，可通过下方来源观看原片。"});Kt.addEventListener("ended",()=>{rr.textContent="主题片已结束，可重播或关闭继续创作。"});try{let n=localStorage.getItem("agate-film-quality-v2");Ft=["auto","hd","4k"].includes(n)?n:"auto"}catch{}Ca.value=Ft;cr=Ip(Ft);Vn();Ua()&&(Pa.matches?(hr=!0,Lp(),Gt.querySelector(".home-film-poster").decode().catch(()=>{}).finally(()=>{Da.textContent="减少动态效果已启用 · 可手动播放",pr("reduced-motion")})):ni(Ft));var ii=document.documentElement,kp=document.querySelector(".header"),si=[document.querySelector("#home-film"),document.querySelector(".home-stone-study"),document.querySelector(".formation-teaser"),document.querySelector("#agate-gallery"),document.querySelector("#home-story")],zx=["观石入境","读懂纹色","石的来历","实物图鉴","非遗手艺"],Bp=matchMedia("(prefers-reduced-motion: reduce)");si.forEach((n,e)=>{n.classList.add("home-snap-panel"),n.dataset.snapPanel=String(e)});var os=document.createElement("nav");os.className="home-screen-nav";os.setAttribute("aria-label","首页章节导航");os.innerHTML=zx.map((n,e)=>`<button data-screen="${e}" aria-label="第${e+1}屏：${n}"><i aria-hidden="true"></i><span>${String(e+1).padStart(2,"0")} / ${n}</span></button>`).join("")+'<small aria-hidden="true">SCROLL / DRAG</small>';document.body.append(os);var bu='a,button,input,select,textarea,label,canvas,video,dialog,[contenteditable="true"],[role="slider"],.photo-viewport',Ci=0,Et=null,Mu=-1,vu=0,Np,rs=0,Fp=0,xu=!1,Op=null,gr=()=>!location.hash||location.hash==="#home",Oa=()=>!gr()||ii.classList.contains("film-entering")||!!document.querySelector("dialog[open]"),Su=()=>kp.getBoundingClientRect().height,Fa=()=>innerHeight-Su(),as=()=>Math.max(0,document.documentElement.scrollHeight-innerHeight),ka=n=>Math.max(0,Math.min(as(),scrollY+n.getBoundingClientRect().top-Su()));function zp(){return[...si.map(ka),as()]}function Eu(n=scrollY){let e=0;return si.map(ka).forEach((i,s)=>{n>=i-3&&(e=s)}),e}function wu(){ii.style.setProperty("--snap-header-height",`${Su()}px`)}new ResizeObserver(wu).observe(kp);wu();function dc(){Ci&&cancelAnimationFrame(Ci),Ci=0,ii.classList.remove("snap-in-motion")}function _r(n=!1){if(!gr())return;let e=Eu(scrollY+Math.min(Fa()*.35,150));if(os.querySelectorAll("[data-screen]").forEach((t,i)=>{i===e?t.setAttribute("aria-current","step"):t.removeAttribute("aria-current")}),e!==Mu){if(n&&!Bp.matches){let t=si[e].querySelector(".home-film-content,.hero-copy,.formation-teaser-copy,.photo-section-heading")||si[e].firstElementChild;Op?.cancel(),Op=t?.animate([{transform:"translateY(12px)",opacity:.75},{transform:"translateY(-2px)",opacity:1,offset:.75},{transform:"translateY(0)",opacity:1}],{duration:520,easing:"cubic-bezier(.2,.75,.25,1)"})}Mu=e}}function fc(n){if(dc(),n=Math.max(0,Math.min(as(),n)),Bp.matches||Math.abs(n-scrollY)<1){window.scrollTo({top:n,behavior:"instant"}),_r();return}ii.classList.add("snap-in-motion");let e=scrollY,t=0,i=performance.now(),s=i;function r(a){if(Oa()){dc();return}let o=Math.min((a-i)/1e3,.028);if(i=a,t+=(200*(n-e)-22*t)*o,e+=t*o,window.scrollTo({top:Math.max(0,Math.min(as(),e)),behavior:"instant"}),Math.abs(n-e)<.5&&Math.abs(t)<4||a-s>1500){window.scrollTo({top:n,behavior:"instant"}),Ci=0,ii.classList.remove("snap-in-motion"),_r(!0);return}Ci=requestAnimationFrame(r)}Ci=requestAnimationFrame(r)}function Hp(n){let e=Eu(),t=si[e],i=ka(t),s=i+t.getBoundingClientRect().height-Fa();return s-i<6?!1:n>0?scrollY<s-3:scrollY>i+3}function Hx(n){let e=zp();return n>0?e.find(t=>t>scrollY+4)??as():[...e].reverse().find(t=>t<scrollY-4)??0}function Vp(n){return Oa()||Hp(n)?!1:(fc(Hx(n)),!0)}os.querySelectorAll("[data-screen]").forEach(n=>n.onclick=()=>fc(ka(si[Number(n.dataset.screen)])));window.addEventListener("wheel",n=>{if(Oa()||n.ctrlKey||n.metaKey||Math.abs(n.deltaX)>Math.abs(n.deltaY)||n.target.closest(bu))return;let e=Math.sign(n.deltaY);if(!e)return;let t=performance.now(),i=t-Fp;if(Fp=t,Ci||xu&&i<180){n.preventDefault();return}i>=180&&(xu=!1,rs=0),!Hp(e)&&(n.preventDefault(),rs&&Math.sign(rs)!==e&&(rs=0),rs+=n.deltaY*(n.deltaMode===1?16:n.deltaMode===2?Fa():1),Math.abs(rs)>=28&&(xu=!0,rs=0,Vp(e)))},{passive:!1});document.addEventListener("keydown",n=>{if(Oa()||n.defaultPrevented||n.ctrlKey||n.altKey||n.metaKey||n.target.closest(bu))return;let e=["PageDown","ArrowDown"," "].includes(n.key)?n.shiftKey?-1:1:["PageUp","ArrowUp"].includes(n.key)?-1:0;if(n.key==="Home"||n.key==="End"){n.preventDefault(),fc(n.key==="Home"?0:as());return}e&&Vp(e)&&n.preventDefault()});document.addEventListener("pointerdown",n=>{if(Oa()||n.pointerType!=="mouse"||n.button!==0||n.ctrlKey||n.metaKey||n.target.closest(bu+",h1,h2,h3,p,small,strong"))return;let e=n.target.closest(".home-snap-panel");e&&(dc(),Et={id:n.pointerId,panel:e,startY:n.clientY,startX:n.clientX,scroll:scrollY,at:Eu(),previousY:n.clientY,previousTime:performance.now(),velocity:0,active:!1})});document.addEventListener("pointermove",n=>{if(!Et||n.pointerId!==Et.id)return;let e=Et.startY-n.clientY,t=Et.startX-n.clientX;if(!Et.active){if(Math.abs(t)>Math.abs(e)+8){Et=null;return}if(Math.abs(e)<7)return;Et.active=!0,ii.classList.add("snap-dragging"),Et.panel.setPointerCapture(n.pointerId)}n.preventDefault();let i=performance.now();Et.velocity=(Et.previousY-n.clientY)/Math.max(1,i-Et.previousTime),Et.previousY=n.clientY,Et.previousTime=i,window.scrollTo({top:Math.max(0,Math.min(as(),Et.scroll+e)),behavior:"instant"})});function Gp(n){if(!Et||n.pointerId!==Et.id)return;let e=Et;if(Et=null,e.active){let t=e.startY-n.clientY,i=Math.sign(t),s=zp(),r=ka(si[e.at]),a=r+si[e.at].getBoundingClientRect().height-Fa(),o=a-r>6&&scrollY>=r&&scrollY<=a,l;o?l=scrollY:Math.abs(t)>Math.min(85,Fa()*.12)||performance.now()-e.previousTime<100&&Math.abs(e.velocity)>.35?l=s[Math.max(0,Math.min(s.length-1,e.at+i))]:l=s.reduce((c,h)=>Math.abs(h-scrollY)<Math.abs(c-scrollY)?h:c,s[0]),fc(l),ii.classList.remove("snap-dragging"),e.panel.hasPointerCapture(n.pointerId)&&e.panel.releasePointerCapture(n.pointerId)}}document.addEventListener("pointerup",Gp);document.addEventListener("pointercancel",Gp);window.addEventListener("scroll",()=>{gr()&&(vu||(vu=requestAnimationFrame(()=>{vu=0,_r()})),clearTimeout(Np),Np=setTimeout(()=>{!Ci&&!Et&&_r(!0)},130))},{passive:!0});window.addEventListener("resize",()=>{wu(),_r()});function Wp(){dc(),Et=null,ii.classList.remove("snap-dragging"),ii.classList.toggle("snap-home",gr()),os.hidden=!gr(),Mu=-1,gr()&&requestAnimationFrame(()=>{window.scrollTo({top:0,behavior:"instant"}),_r()})}window.addEventListener("hashchange",Wp);Wp();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
