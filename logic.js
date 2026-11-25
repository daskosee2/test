/* My Kost - js/logic.js : Logika bisnis: status pembayaran, arus kas, template WhatsApp */
/* ---------- logika ---------- */
const un=id=>(S.units.find(u=>u.id===id)||{}).nama||'-',tn=id=>(S.tenants.find(t=>t.id===id)||{}).nama||'-',tt=id=>S.tenants.find(t=>t.id===id);
const dueDate=p=>{const t=tt(p.tenantId);return p.period+'-'+pad(Math.min((t&&t.tempo)||1,28))};
const st=p=>p.paid>=p.due?'Lunas':TODAY>dueDate(p)?'Terlambat':p.paid>0?'Belum Lunas':'Belum Bayar';
const pc=s=>({Lunas:'g',Terlambat:'r','Belum Lunas':'y','Belum Bayar':'',Terisi:'g',Maintenance:'y',Aktif:'g',Selesai:'',Pindah:'y',Proses:'y','Belum Diperbaiki':'r',Kosong:''})[s]||'';
const pill=s=>`<span class="pill ${pc(s)}">${esc(s)}</span>`;
const flows=()=>[...S.payments.filter(p=>p.paid>0&&p.date).map(p=>({date:p.date,type:'in',cat:'Sewa',amount:p.paid,unitId:p.unitId,desc:tn(p.tenantId)+' · '+per(p.period)})),...S.tx.map(x=>({...x,src:'tx'})),...S.maint.filter(m=>m.status==='Selesai'&&m.biaya>0).map(m=>({date:m.date,type:'out',cat:'Perbaikan',amount:m.biaya,unitId:m.unitId,desc:m.desc}))].sort((a,b)=>b.date.localeCompare(a.date));
const tung=()=>S.payments.filter(p=>st(p)==='Terlambat');
const waNum=n=>{n=String(n||'').replace(/\D/g,'');return n.startsWith('0')?'62'+n.slice(1):n};
const waMsg=(p,t)=>S.tpl.replace('[Nama]',t.nama).replace('[Unit]',un(t.unitId)).replace('[Bulan]',per(p.period)).replace('[Nominal]',Math.max(p.due-p.paid,0).toLocaleString('id-ID')).replace('[Tanggal]',fd(dueDate(p)));
const toast=(m,e)=>{const t=$('#toast');t.textContent=m;t.hidden=false;t.style.background=e?'#b83232':'';t.style.color=e?'#fff':'';clearTimeout(toast.t);toast.t=setTimeout(()=>t.hidden=true,2600)};
