/* My Kost - js/utils.js : Helper umum, konstanta, ikon, dan state global */
const $=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rp=n=>'Rp'+Math.round(n||0).toLocaleString('id-ID'),fd=d=>d?d.split('-').reverse().join('/'):'-',pad=n=>String(n).padStart(2,'0');
const TODAY=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Jakarta'}).format(new Date()),uid=()=>Math.random().toString(36).slice(2,9);
const addD=(d,n)=>{const x=new Date(d+'T00:00:00Z');x.setUTCDate(x.getUTCDate()+n);return x.toISOString().slice(0,10)};
const diff=(a,b)=>Math.round((new Date(a+'T00:00:00Z')-new Date(b+'T00:00:00Z'))/864e5);
const BLN=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
const per=p=>BLN[+p.slice(5)-1]+' '+p.slice(0,4),mo=k=>{const d=new Date(TODAY.slice(0,7)+'-01T00:00:00Z');d.setUTCMonth(d.getUTCMonth()+k);return d.toISOString().slice(0,7)};
const sum=a=>a.reduce((s,x)=>s+(+x.amount||0),0);
const TPL='Halo [Nama], mau mengingatkan pembayaran kontrakan ([Unit]) untuk periode [Bulan] sebesar Rp[Nominal], dengan jatuh tempo tanggal [Tanggal]. Jika sudah melakukan pembayaran, boleh kabari saya ya. Terima kasih.';
const IC={Dashboard:'M3 12l9-8 9 8v8H3z',Unit:'M4 20V8l8-5 8 5v12zM9 20v-6h6v6',Penyewa:'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6',Pembayaran:'M3 6h18v12H3zM3 10h18',Keuangan:'M4 20V10M10 20V4M16 20v-8M22 20H2',Pengingat:'M6 16V11a6 6 0 1112 0v5l2 2H4zM10 21h4',Maintenance:'M14 6l4 4-9 9H5v-4zM13 7l4 4',Laporan:'M6 3h9l4 4v14H6zM9 12h7M9 16h7',Pengaturan:'M12 15a3 3 0 100-6 3 3 0 000 6zM4 12h2M18 12h2M12 4v2M12 18v2'};
const NAV=[['dashboard','Dashboard'],['unit','Unit'],['penyewa','Penyewa'],['bayar','Pembayaran'],['uang','Keuangan'],['ingat','Pengingat'],['maint','Maintenance'],['lap','Laporan'],['atur','Pengaturan']];
const NM={unit:'Unit Kontrakan',penyewa:'Data Penyewa',bayar:'Pembayaran',uang:'Keuangan',ingat:'Pengingat',maint:'Maintenance',lap:'Laporan',atur:'Pengaturan',dashboard:'Dashboard'};
const ico=n=>`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${IC[n]}"/></svg>`;
let S,route='dashboard',detail=null,flt={mode:'bln',d1:'',d2:'',bln:TODAY.slice(0,7),unit:'',q:'',st:''},fin={from:addD(TODAY,-180),to:TODAY},rep=TODAY.slice(0,7),DB=null,DBC=null,PHV={},mode='browser',tmr;
