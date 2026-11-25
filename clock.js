/* My Kost - js/clock.js : Tanggal dan jam real time di header */
function tick(){const n=new Date(),f=x=>new Intl.DateTimeFormat('id-ID',{timeZone:'Asia/Jakarta',...x}).format(n);$('#dl').textContent=f({weekday:'long',day:'numeric',month:'long',year:'numeric'});$('#ds').textContent=f({day:'2-digit',month:'short',year:'numeric'});$('#dtm').textContent=f({hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).replace(/\./g,':')+' WIB'}
tick();setInterval(tick,1000);
