import {traceMaterialOutline} from './material-outline.mjs';

// Selection masks describe color analysis, never uploaded photo opacity.
const previews=new WeakMap();
export function materialPreview(state){
 const image=state.image;
 if(!image||!['bands','nodule'].includes(state.sample))return image;
 const cached=previews.get(image);if(cached?.sample===state.sample)return cached.canvas;
 const k=Math.min(1,1600/Math.max(image.width,image.height)),canvas=document.createElement('canvas');
 canvas.width=Math.max(1,Math.round(image.width*k));canvas.height=Math.max(1,Math.round(image.height*k));
 const ctx=canvas.getContext('2d');traceMaterialOutline(ctx,state.sample,canvas.width,canvas.height);
 ctx.save();ctx.clip();ctx.drawImage(image,0,0,canvas.width,canvas.height);ctx.restore();
 previews.set(image,{sample:state.sample,canvas});return canvas;
}

export function projectSourceImage(image){
 const canvas=document.createElement('canvas'),k=Math.min(1,960/Math.max(image.width,image.height));
 canvas.width=Math.max(1,Math.round(image.width*k));canvas.height=Math.max(1,Math.round(image.height*k));
 const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0,canvas.width,canvas.height);
 const pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;
 let alpha=false;for(let i=3;i<pixels.length;i+=4)if(pixels[i]!==255){alpha=true;break;}
 let data=canvas.toDataURL(alpha?'image/png':'image/jpeg',.88);
 while(data.length>2500000&&Math.max(canvas.width,canvas.height)>320){
  canvas.width=Math.max(1,Math.floor(canvas.width*.8));canvas.height=Math.max(1,Math.floor(canvas.height*.8));
  ctx.drawImage(image,0,0,canvas.width,canvas.height);data=canvas.toDataURL(alpha?'image/png':'image/jpeg',.88);
 }
 return data;
}
