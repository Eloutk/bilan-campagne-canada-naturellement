const nf = new Intl.NumberFormat('fr-FR');

/* ---------- Données mensuelles ---------- */
const MOIS = [
  {nom:"Janvier", theme:"Lancement hors norme", badge:"Référence atypique",
   meta:{imp:73838, clics:11602, ctr:"15,71 %"}, search:{imp:11052, clics:567, ctr:"5,13 %"},
   story:"Des performances de lancement totalement hors norme, à considérer comme une référence atypique, portées par la vidéo Lobster. L'audience Meta est majoritairement masculine et jeune (25-44 ans ≈ 63 % des clics). Search entame sa phase d'apprentissage, le temps que l'algorithme accumule de la donnée.",
   crea:"Vidéo Lobster — CTR 22,42 % (11 208 clics, 49 981 impressions)",
   audience:"Masculine à 71,3 % · segments 25-44 ans dominants"},
  {nom:"Février", theme:"Test & réactivation", badge:"Coûts maîtrisés",
   meta:{imp:640033, clics:5844, ctr:"0,91 %"}, search:{imp:14321, clics:1903, ctr:"13,29 %"},
   story:"Mois marqué par un test de diffusion 100 % Instagram : coûts maîtrisés, mais trafic Opodo en retrait. Facebook est réactivé en cours de mois et relance immédiatement le trafic sur la landing page. L'audience se féminise (52,5 %) et les 55-64 ans montent à 38,3 %. Search confirme sa montée en puissance : +236 % de clics vs janvier.",
   crea:"Fixe 2 en tête — 2 282 clics lien (CTR lien 2,55 %)",
   audience:"Féminisation : 52,5 % de femmes · 55-64 ans à 38,3 %"},
  {nom:"Mars", theme:"Bascule visibilité", badge:"Objectif déjà dépassé",
   meta:{imp:1293662, clics:9897, ctr:"0,77 %"}, search:{imp:11504, clics:1904, ctr:"16,55 %"},
   story:"L'objectif de clics est déjà largement dépassé à mi-parcours (4 997 clics pour 2 500 visés) : une part du dispositif bascule volontairement vers la visibilité. Le doublement des impressions et la baisse mécanique du CTR sont assumés pour maximiser l'exposition des messages. Search signe son excellent régime de croisière.",
   crea:"Vidéo Lobster — meilleure créa du mois (CTR 6,3 %)",
   audience:"Ciblage concentré : All 18/64 à 84,3 % des clics"},
  {nom:"Avril", theme:"Pic de diffusion", badge:"Record d'impressions",
   meta:{imp:2409717, clics:10046, ctr:"0,42 %"}, search:{imp:10230, clics:1704, ctr:"16,66 %"},
   story:"Record d'impressions (+86 % vs mars) pour un volume de clics stable — le CTR touche logiquement son point bas du fait du volume. À noter : la vidéo n'a pas été diffusée suite à une désélection automatique du visuel par Meta au lancement, sans alerte. Le dispositif repose sur les visuels fixes, Fixe 1 portant l'essentiel des performances.",
   crea:"Fixe 1 — 5 991 clics (CTR 3,73 %)",
   audience:"Masculine à 60,6 % · rajeunissement ponctuel (18-34 ≈ 60 %)"},
  {nom:"Mai", theme:"Record de clics", badge:"Meilleur mois en volume",
   meta:{imp:2272003, clics:12695, ctr:"0,56 %"}, search:{imp:12884, clics:1668, ctr:"12,95 %"},
   story:"Meilleur mois de la campagne en volume de clics (+26 % vs avril), avec le retour de la vidéo et un dispositif pleinement rétabli : les trois créas performent simultanément, signe d'un mix créatif équilibré. L'audience senior reprend la première place. Search reste stable et performant.",
   crea:"Mix équilibré — Lobster 7 % · Fixe 1 7,76 % · Fixe 2 9,01 %",
   audience:"Seniors en tête : 65+ à 26,7 % · 55-64 à 19,8 %"},
  {nom:"Juin", theme:"Recentrage qualitatif", badge:"Meilleur CTR en régime normal",
   meta:{imp:985567, clics:10241, ctr:"1,04 %"}, search:{imp:17358, clics:1847, ctr:"10,64 %"},
   story:"Clôture sur le meilleur CTR de la campagne en régime de diffusion normal : diffusion resserrée (−57 % d'impressions) pour des clics qui ne reculent que de 19 % — une pression publicitaire nettement mieux convertie (CTR quasi doublé vs mai). La vidéo Whale concentre plus de la moitié des clics créas, l'engagement bondit de +55 % et Search signe son record d'impressions.",
   crea:"Vidéo Whale — CTR 1,95 % · plus de 50 % des clics créas",
   audience:"Féminine à 73,3 % · 65+ au plus haut : 39,6 % des clics"}
];

const tabsEl = document.getElementById('moisTabs');
const panelEl = document.getElementById('moisPanel');

MOIS.forEach((m, i) => {
  const b = document.createElement('button');
  b.className = 'mtab';
  b.setAttribute('role', 'tab');
  b.innerHTML = '<span class="m">' + m.nom + '</span><span class="t">' + m.theme + '</span>';
  b.addEventListener('click', () => selectMois(i));
  tabsEl.appendChild(b);
});

function statBox(val, label){
  return '<div class="stat"><b>' + val + '</b><span>' + label + '</span></div>';
}

function selectMois(i){
  [...tabsEl.children].forEach((b, j) => b.classList.toggle('active', i === j));
  const m = MOIS[i];
  panelEl.innerHTML =
    '<div class="mp-left">' +
      '<span class="mp-badge">' + m.badge + '</span>' +
      '<h3 class="mp-title">' + m.nom + ' — ' + m.theme + '</h3>' +
      '<p class="mp-story">' + m.story + '</p>' +
      '<div class="mp-chips">' +
        '<div class="chip"><b>Créa du mois</b>' + m.crea + '</div>' +
        '<div class="chip"><b>Audience</b>' + m.audience + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="mp-right">' +
      '<div class="mp-lever">Meta</div>' +
      '<div class="mp-stats">' +
        statBox(nf.format(m.meta.imp), 'Impressions') +
        statBox(nf.format(m.meta.clics), 'Clics') +
        statBox(m.meta.ctr, 'CTR') +
      '</div>' +
      '<div class="mp-lever">Google Search</div>' +
      '<div class="mp-stats">' +
        statBox(nf.format(m.search.imp), 'Impressions') +
        statBox(nf.format(m.search.clics), 'Clics') +
        statBox(m.search.ctr, 'CTR') +
      '</div>' +
    '</div>';
}
selectMois(0);

/* ---------- Recommandations (accordéon) ---------- */
const RECOS = [
  {t:"Sanctuariser la vidéo — et sécuriser sa diffusion",
   p:"La vidéo a surperformé les visuels fixes à chaque diffusion : Lobster jusqu'à 22,42 % de CTR au lancement, Whale plus de la moitié des clics créas en juin. En avril, une désélection automatique par Meta — sans alerte — a privé le dispositif de son meilleur levier.",
   a:"Produire 2 nouvelles vidéos 15 s via le studio intégré Link avant fin août si possible ; sinon, l'alternance 1 mois sur 2 entre la vidéo Lobster et la vidéo Whale est OK."},
  {t:"Écraser la phase d'apprentissage",
   p:"Search a mis un mois à monter en régime : CTR de 5,13 % en janvier, puis durablement au-dessus de 10 %, jusqu'à 16,66 % en avril.",
   a:"Relancer sur les structures de campagnes existantes pour capitaliser sur l'historique algorithmique ; montée en charge budgétaire progressive sur septembre, pleine puissance dès octobre."},
  {t:"Ciblage large, message senior",
   p:"Le ciblage All 18/64 concentre les clics en régime de croisière (63 % en juin, 84,3 % en mars) et le cœur de cible 55+ est confirmé, les 65+ culminant à 39,6 % des clics en juin.",
   a:"Conserver le ciblage large piloté par l'algorithme, et concevoir créas et messages pensés pour les 55+ (réassurance, confort, temporalité de réservation) sans fermer les autres segments."},
  {t:"Activer le capital d'engagement",
   p:"90 675 interactions sur les posts en juin (+55 % vs mai), ce qui crée une data exploitable riche pour la 2ᵉ vague, dès septembre.",
   a:"Constituer dès septembre des audiences de retargeting (engagés 180 jours, visiteurs de la landing) et lookalike, avec une ligne budgétaire dédiée orientée réservation."},
  {t:"Adapter les créas à la nouvelle vague",
   p:"La promesse « nature spectaculaire » a performé au printemps ; septembre-décembre ouvre de nouvelles perspectives d'évasion et de nouveaux besoins pour la cible — un territoire encore plus différenciant : été indien, aurores boréales…",
   a:"Changer les assets pour donner de l'oxygène à la campagne et renouveler l'engagement."},
  {t:"Piloter un double objectif clics + visibilité",
   p:"L'objectif de clics a été dépassé dès la mi-parcours (4 997 clics pour 2 500 visés), permettant une bascule maîtrisée vers la visibilité dès mars.",
   a:"Formaliser dès le cadrage les deux KPI — volume de clics garanti et impressions cibles — avec des seuils de bascule explicites, pour un pilotage transparent mois après mois."}
];

const accList = document.getElementById('accList');
RECOS.forEach((r, i) => {
  const item = document.createElement('div');
  item.className = 'acc';
  item.innerHTML =
    '<button class="acc-head" aria-expanded="false">' +
      '<span class="acc-num">0' + (i + 1) + '</span>' +
      '<span class="acc-title">' + r.t + '</span>' +
      '<span class="acc-ico" aria-hidden="true">+</span>' +
    '</button>' +
    '<div class="acc-body"><div class="acc-body-inner">' +
      '<div class="pv"><h5>Preuve — vague 1</h5>' + r.p + '</div>' +
      '<div class="ac"><h5>Plan d\u2019action — vague 2</h5>' + r.a + '</div>' +
    '</div></div>';
  item.querySelector('.acc-head').addEventListener('click', () => toggleAcc(item));
  accList.appendChild(item);
});

function toggleAcc(item){
  const body = item.querySelector('.acc-body');
  const head = item.querySelector('.acc-head');
  const open = item.classList.toggle('open');
  head.setAttribute('aria-expanded', open ? 'true' : 'false');
  body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
}
toggleAcc(accList.children[0]);

/* ---------- Compteurs animés ---------- */
document.querySelectorAll('[data-count]').forEach(el => {
  const target = +el.dataset.count;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) { el.textContent = nf.format(target); return; }
  let started = false;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && !started) {
        started = true;
        const t0 = performance.now(), dur = 1400;
        const step = now => {
          const p = Math.min(1, (now - t0) / dur);
          el.textContent = nf.format(Math.round(target * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
  }, {threshold:.4});
  io.observe(el);
});

/* ---------- Graphiques ---------- */
const LABELS = ['Janv','Fév','Mars','Avril','Mai','Juin'];
const META_IMP = [73838,640033,1293662,2409717,2272003,985567];
const META_CLICS = [11602,5844,9897,10046,12695,10241];
const SEARCH_CLICS = [567,1903,1904,1704,1668,1847];
const SEARCH_CTR = [5.13,13.29,16.55,16.66,12.95,10.64];

if (window.Chart) {
  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  Chart.defaults.color = '#565655';
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.boxHeight = 12;
  Chart.defaults.plugins.tooltip.backgroundColor = '#232120';
  Chart.defaults.plugins.tooltip.padding = 10;

  const fmtK = v => v >= 1000000 ? (v/1000000).toLocaleString('fr-FR',{maximumFractionDigits:1}) + ' M'
              : v >= 1000 ? Math.round(v/1000) + ' k' : v;

  new Chart(document.getElementById('chartMeta'), {
    type: 'bar',
    data: { labels: LABELS, datasets: [
      { label:'Impressions', data: META_IMP, backgroundColor:'#E94C16', borderRadius:9, maxBarThickness:52, yAxisID:'y' },
      { type:'line', label:'Clics', data: META_CLICS, borderColor:'#232120', backgroundColor:'#232120', tension:.35, pointRadius:4.5, pointHoverRadius:6, borderWidth:2.5, yAxisID:'y1' }
    ]},
    options: { maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
      plugins:{ tooltip:{ callbacks:{ label: c => ' ' + c.dataset.label + ' : ' + nf.format(c.parsed.y) } } },
      scales:{
        y:{ position:'left', grid:{color:'rgba(35,33,32,.07)'}, ticks:{callback:fmtK}, title:{display:true,text:'Impressions'} },
        y1:{ position:'right', grid:{drawOnChartArea:false}, ticks:{callback:fmtK}, title:{display:true,text:'Clics'} },
        x:{ grid:{display:false} }
      }
    }
  });

  new Chart(document.getElementById('chartSearch'), {
    type: 'bar',
    data: { labels: LABELS, datasets: [
      { label:'Clics', data: SEARCH_CLICS, backgroundColor:'#565655', borderRadius:9, maxBarThickness:40, yAxisID:'y' },
      { type:'line', label:'CTR', data: SEARCH_CTR, borderColor:'#E94C16', backgroundColor:'#E94C16', tension:.35, pointRadius:4.5, pointHoverRadius:6, borderWidth:2.5, yAxisID:'y1' },
      { type:'line', label:'CTR moyen (12,40 %)', data: LABELS.map(()=>12.4), borderColor:'rgba(233,76,22,.45)', borderDash:[6,6], pointRadius:0, borderWidth:2, yAxisID:'y1' }
    ]},
    options: { maintainAspectRatio:false, interaction:{mode:'index',intersect:false},
      plugins:{ tooltip:{ callbacks:{ label: c => ' ' + c.dataset.label + (c.dataset.yAxisID === 'y1'
          ? ' : ' + c.parsed.y.toLocaleString('fr-FR') + ' %'
          : ' : ' + nf.format(c.parsed.y)) } } },
      scales:{
        y:{ position:'left', grid:{color:'rgba(35,33,32,.07)'}, title:{display:true,text:'Clics'} },
        y1:{ position:'right', min:0, max:20, grid:{drawOnChartArea:false}, ticks:{callback:v=>v+' %'}, title:{display:true,text:'CTR'} },
        x:{ grid:{display:false} }
      }
    }
  });

  new Chart(document.getElementById('chartAges'), {
    type: 'doughnut',
    data: {
      labels: ['55+ (dont 65+)','35-44','25-34','45-54','18-24 / autres'],
      datasets: [{ data: [36.7,18.6,17.9,16.2,10.6],
        backgroundColor: ['#E94C16','#F07C4E','#F5A985','#FBD6C2','#232120'],
        borderColor:'#FFFFFF', borderWidth:3, hoverOffset:8 }]
    },
    options: { maintainAspectRatio:false, cutout:'62%',
      plugins:{ legend:{position:'bottom'},
        tooltip:{ callbacks:{ label: c => ' ' + c.label + ' : ' + c.parsed.toLocaleString('fr-FR') + ' % des clics' } } }
    }
  });
} else {
  document.querySelectorAll('.chart-box').forEach(b => {
    b.innerHTML = '<p style="color:var(--grey);font-size:13.5px;padding-top:20px">Graphique indisponible hors connexion — les données complètes figurent dans le tableau ci-dessous.</p>';
  });
}
