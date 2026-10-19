// Decorative light follows the pointer gently; it never captures app input.
const backdrop=document.createElement('div');backdrop.className='agate-background';backdrop.setAttribute('aria-hidden','true');backdrop.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div><div class="agate-gleam"></div>';document.body.prepend(backdrop);
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),fine=matchMedia('(pointer: fine)');let frame=0,x=0,y=0;
function paint(){backdrop.style.setProperty('--mineral-x',x+'px');backdrop.style.setProperty('--mineral-y',y+'px');frame=0;}
window.addEventListener('pointermove',event=>{if(reduced.matches||!fine.matches||document.hidden)return;x=(event.clientX/innerWidth-.5)*-14;y=(event.clientY/innerHeight-.5)*-10;if(!frame)frame=requestAnimationFrame(paint);},{passive:true});
function reset(){x=y=0;if(!frame)frame=requestAnimationFrame(paint);}
document.addEventListener('pointerleave',reset);reduced.addEventListener('change',reset);document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}});
