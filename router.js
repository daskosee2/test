/* My Kost - js/router.js : Navigasi berbasis hash */
function nav(){if(!$('#lk').hidden)return;const h=location.hash.slice(1);route=PG[h]?h:'dashboard';if(route!=='unit')detail=null;render();enter()}
addEventListener('hashchange',nav);
