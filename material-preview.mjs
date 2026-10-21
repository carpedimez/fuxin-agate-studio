// Non-destructive display cutout. Analysis and texture sampling retain the source image.
const previews=new WeakMap();
export function materialPreview(state){
 if(!state.image||state.sample==='procedural'||state.displayRemoveBackground===false||!state.analysis?.foreground)return state.image;
 const cached=previews.get(state.analysis);if(cached?.image===state.image)return cached.canvas;
 const image=state.image,k=Math.min(1,1200/Math.max(image.width,image.height)),canvas=document.createElement('canvas');canvas.width=Math.round(image.width*k);canvas.height=Math.round(image.height*k);
 const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0,canvas.width,canvas.height);
 const a=state.analysis,mask=document.createElement('canvas');mask.width=a.width;mask.height=a.height;const mc=mask.getContext('2d'),pixels=mc.createImageData(a.width,a.height);
 for(let i=0;i<a.foreground.length;i++)pixels.data[i*4+3]=a.foreground[i]?255:0;
 mc.putImageData(pixels,0,0);ctx.globalCompositeOperation='destination-in';ctx.imageSmoothingEnabled=true;ctx.drawImage(mask,0,0,canvas.width,canvas.height);ctx.globalCompositeOperation='source-over';
 previews.set(a,{image,canvas});return canvas;
}
