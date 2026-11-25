/* My Kost - js/main.js : Titik masuk aplikasi (boot) */
(async()=>{S=await load();if(!S){S=seed();persist()}else await loadPhotos();S.tpl=S.tpl||TPL;syncUnits();let ok=false;try{ok=sessionStorage.getItem('kk-ok')==='1'&&!!S.auth}catch(e){}ok?nav():gate()})();
