/* My Kost - js/claude-shim.js
   Pengganti runtime "claude" milik Artifact, supaya kode aplikasi berjalan mandiri tanpa diubah.
   - claude.use('db')        -> null, sehingga aplikasi otomatis memakai localStorage
   - claude.use('downloads') -> mengunduh file lewat browser (CSV dan cadangan JSON) */
window.claude={use:async function(name){
  if(name==='downloads')return{save:async function(o){
    var d=o.data,b=d instanceof Blob?d:new Blob([d],{type:/\.json$/i.test(o.filename)?'application/json':'text/csv;charset=utf-8'});
    var a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=o.filename;document.body.appendChild(a);a.click();a.remove();
    setTimeout(function(){URL.revokeObjectURL(a.href)},1000)}};
  return null}};
