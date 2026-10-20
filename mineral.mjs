// Real photographic backdrop; each section keeps its own composition.
const backdrop=document.createElement('div');
backdrop.className='agate-background';backdrop.setAttribute('aria-hidden','true');
backdrop.innerHTML='<div class="agate-bandfield"></div><div class="agate-veiling"></div>';
document.body.prepend(backdrop);
