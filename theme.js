/* My Kost - js/theme.js : Toggle tema terang/gelap */
function setTheme(t,save){document.documentElement.setAttribute('data-theme',t);document.querySelectorAll('[data-th]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.th===t)));if(save){try{localStorage.setItem('kontrakanku-tema',t)}catch(e){}}}
document.addEventListener('click',e=>{const b=e.target.closest('[data-th]');if(b)setTheme(b.dataset.th,1)});
setTheme(document.documentElement.getAttribute('data-theme')||'light');
