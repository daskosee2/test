/* My Kost - js/theme-init.js : terapkan tema tersimpan sebelum render (mencegah kilatan) */
(function(){var t='light';try{if(localStorage.getItem('kontrakanku-tema')==='dark')t='dark'}catch(e){}document.documentElement.setAttribute('data-theme',t)})()
