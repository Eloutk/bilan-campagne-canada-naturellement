/* ---------- i18n ---------- */
let lang = localStorage.getItem('lang') || 'fr';
let activeMois = 0;
let charts = {};

const I18N = {
  fr: {
    meta: { title: 'Le Canada, naturellement — Bilan de campagne 2026 · Agence Link' },
    brand: { alt: 'Le Canada, naturellement', altLogo: 'Logo Le Canada, naturellement' },
    header: {
      report: 'Rapport de campagne',
      navAria: 'Navigation du bilan',
      langAria: 'Langue',
      final: 'Bilan final'
    },
    nav: {
      timeline: 'Fil de campagne',
      performance: 'Performance',
      learnings: 'Enseignements',
      assets: 'Assets',
      renewal: 'Reconduction 2026'
    },
    hero: {
      eyebrow: 'Rapport de campagne · Bilan final — Janvier → Juin 2026',
      lead: 'Six mois de diffusion Meta & Google Search pilotés par Link pour la destination Canada : un dispositif adapté mois après mois, conclu très largement au-delà des engagements contractuels.',
      flag1: 'Objectif contractuel de clics dépassé',
      flag2: 'Meta · Google Search',
      flag3: 'Landing opodo.fr',
      flag4: '3 créas — 2 vidéos, 2 visuels fixes',
      kpi1: 'Impressions diffusées — tous leviers confondus',
      kpi2: 'Clics générés en 6 mois de campagne',
      kpi3: 'CTR moyen Search — très au-dessus des standards du secteur voyage',
      kpi4val: 'Mi-mars',
      kpi4: 'Objectif contractuel de clics déjà dépassé à mi-parcours'
    },
    timeline: {
      eyebrow: 'Le fil de la campagne',
      title: 'Six mois, six intentions stratégiques.',
      desc: 'Un dispositif piloté, pas subi : chaque mois a répondu à une intention distincte. Cliquez sur un mois pour en explorer la lecture, les chiffres et l\u2019enseignement.',
      tabsAria: 'Mois de la campagne',
      creaLabel: 'Créa du mois',
      audienceLabel: 'Audience',
      impressions: 'Impressions',
      clicks: 'Clics'
    },
    perf: {
      eyebrow: 'Performance',
      title: 'Un volume de clics remarquablement stable, quelle que soit la pression.',
      desc: 'Entre 9\u202f900 et 12\u202f700 clics par mois (hors février), preuve d\u2019une gestion budgétaire maîtrisée — pendant que Search s\u2019installe durablement au-dessus de 10\u202f% de CTR.',
      chartMetaTitle: 'Meta — pression de diffusion vs volume de clics',
      chartMetaSub: 'Le doublement puis le pic d\u2019impressions (mars-avril) sont des choix assumés de visibilité, une fois l\u2019objectif de clics dépassé.',
      chartMetaAria: 'Évolution mensuelle des impressions et clics Meta',
      chartSearchTitle: 'Google Search — la montée en puissance de l\u2019algorithme',
      chartSearchSub: 'Après la phase d\u2019apprentissage de janvier, un CTR durablement installé au-dessus de 10\u202f%, avec un record d\u2019impressions en clôture.',
      chartSearchAria: 'Évolution mensuelle des clics et du CTR Search',
      chartAgesTitle: 'Audience Meta — clics par âge sur l\u2019ensemble de la campagne',
      chartAgesSub: 'Le cœur de cible senior domine sur l\u2019ensemble de la vague 1 : les 55+ concentrent 36,7\u202f% des clics (agrégation des six rapports mensuels, pondérée par les clics).',
      chartAgesAria: 'Répartition des clics Meta par tranche d\u2019âge sur l\u2019ensemble de la campagne',
      tableSummary: 'Voir le tableau de données complet — janvier → juin 2026',
      chartFallback: 'Graphique indisponible hors connexion — les données complètes figurent dans le tableau ci-dessous.',
      avgCtr: 'CTR moyen (12,40\u202f%)',
      ageTooltip: ' des clics'
    },
    table: {
      month: 'Mois', metaImp: 'Meta — Impressions', metaClicks: 'Meta — Clics', metaCtr: 'Meta — CTR',
      searchImp: 'Search — Impressions', searchClicks: 'Search — Clics', searchCtr: 'Search — CTR', total: 'Total'
    },
    sf: {
      title: 'Focus Search — mots-clés & termes de recherche',
      sub: 'Ce que tapent réellement les internautes avant de cliquer : les requêtes transactionnelles «\u202fprix / billet\u202f» signent les meilleurs taux de clic de la campagne.',
      term: 'Terme de recherche', impressions: 'Impressions', clicks: 'Clics', ctr: 'CTR',
      chip1: 'des clics Search sur mobile (9\u202f375 clics) — des landings et parcours à penser mobile-first.',
      chip1b: '97,7\u202f%',
      chip2: 'en tête des clics\u202f; Toulouse signe le meilleur CTR des grandes villes (14,01\u202f%).',
      chip2b: 'Paris · Lyon · Toulouse',
      chip3: 'parmi les clics Search (CTR 13,31\u202f%) · les 65+ en tête : 35,5\u202f% des clics, CTR 14,76\u202f%.',
      chip3b: '62,2\u202f% de femmes',
      note: '<b>Signal de passage à l\u2019acte\u202f:</b> les requêtes orientées prix et réservation («\u202fair canada vol\u202f», «\u202fprix billet avion canada aller retour\u202f») dépassent 22\u202f% de CTR — un capital d\u2019intention à exploiter en vague 2 via le retargeting et les messages orientés réservation.'
    },
    learn: {
      eyebrow: 'Enseignements', title: 'Ce que la vague 1 démontre.',
      tag1: 'Créa', h1: 'La vidéo, meilleur levier créatif',
      p1: 'Lobster comme Whale ont surperformé les visuels fixes lorsqu\u2019elles étaient diffusées — jusqu\u2019à 22,42\u202f% de CTR pour Lobster au lancement. Le format s\u2019impose pour cette destination.',
      tag2: 'Média', h2: 'Search, moteur de performance durable',
      p2: 'Un CTR moyen de 12,40\u202f% sur la période, très au-dessus des standards du secteur voyage, et un record d\u2019impressions en clôture (17\u202f358 en juin).',
      tag3: 'Audience', h3: 'Un cœur de cible senior confirmé',
      p3: 'Les 65+ et 55-64 dominent les clics sur les deux leviers en régime de croisière (65+ à 39,6\u202f% en juin) — un enseignement précieux pour le ciblage et les messages de la reconduction.',
      tag4: 'Pilotage', h4: 'Un dispositif piloté, pas subi',
      p4: 'Chaque mois a répondu à une intention stratégique distincte, pour un volume de clics stable (9\u202f900 – 12\u202f700 hors février) quelle que soit la pression de diffusion.'
    },
    reco: {
      eyebrow: 'Recommandation · Reconduction septembre → décembre 2026',
      title: 'Transformer l\u2019essai : la feuille de route de la vague 2.',
      desc: 'L\u2019objectif contractuel est très largement dépassé et les enseignements créa, média et audience sont désormais consolidés. La vague 2 doit capitaliser sur cet acquis pour transformer une campagne de conquête réussie en dispositif de performance saisonnier. Six leviers d\u2019action — cliquez pour le détail preuve → plan d\u2019action.',
      proof: 'Preuve — vague 1',
      action: 'Plan d\u2019action — vague 2',
      retroTitle: 'Rétroplanning proposé',
      step1b: 'Août', step1p: 'Validation des créas et du wording · cadrage du double KPI clics + visibilité.',
      step2b: '1ᵉʳ septembre', step2p: 'Lancement sur les structures de campagnes existantes · montée en charge budgétaire progressive.',
      step3b: 'Octobre', step3p: 'Pleine puissance média · activation du retargeting et des audiences lookalike.',
      step4b: 'Novembre', step4p: 'Réallocation budgétaire selon les performances constatées · préparation du push de fin d\u2019année.',
      step5b: 'Décembre', step5p: 'Push final orienté réservation · bilan consolidé et enseignements pour 2027.'
    },
    closing: {
      title: 'Prêts pour la vague 2\u202f?',
      desc: 'Production créative à engager dès août pour un lancement au 1ᵉʳ septembre dans les meilleures conditions — studio intégré, pilotage ROIste, tracking avancé. Welcome again.',
      agency: 'Agence Link', location: 'Bordeaux · Performance digitale'
    },
    assets: {
      eyebrow: 'Assets',
      title: 'Bibliothèque des assets Canada',
      desc: 'Tous les éléments sources sont regroupés ici par catégorie pour retrouver rapidement les visuels, vidéos et assets de campagne.',
      videosTitle: 'Vidéos',
      videosDesc: 'Les 6 déclinaisons vidéo disponibles pour la campagne.',
      visualsTitle: 'Visuels par mois',
      visualsDesc: 'Les créas fixes sont classées par mois de diffusion, avec chaque format accessible en un clic.',
      linkTitle: "Link à l'Acte",
      linkDesc: 'Le visuel final validé, conservé comme référence créative.',
      validVisual: 'Visuel valide',
      closeImage: "Fermer l'image",
      count6: '6 visuels',
      count7: '7 visuels',
      months: {
        january: 'Janvier',
        february: 'Février',
        march: 'Mars',
        april: 'Avril',
        may: 'Mai',
        june: 'Juin'
      }
    },
    footer: {
      text: 'Agence Link © Copyright 2026 — Toute reproduction est interdite.<br>Document interactif compilé à partir des rapports mensuels et du bilan global, janvier → juin 2026.'
    },
    chartLabels: {
      impressions: 'Impressions', clicks: 'Clics', ctr: 'CTR',
      ages: ['55+ (dont 65+)', '35-44', '25-34', '45-54', '18-24 / autres'],
      months: ['Janv', 'Fév', 'Mars', 'Avril', 'Mai', 'Juin']
    }
  },
  en: {
    meta: { title: 'Canada Extraordinary — 2026 Campaign Report · Link Agency' },
    brand: { alt: 'Canada Extraordinary', altLogo: 'Canada Extraordinary logo' },
    header: {
      report: 'Campaign Report',
      navAria: 'Report navigation',
      langAria: 'Language',
      final: 'Final Report'
    },
    nav: {
      timeline: 'Campaign Timeline',
      performance: 'Performance',
      learnings: 'Key Learnings',
      assets: 'Assets',
      renewal: '2026 Renewal'
    },
    hero: {
      eyebrow: 'Campaign Report · Final Assessment — January → June 2026',
      lead: 'Six months of Meta and Google Search media managed by Link for the Canada destination: a month-by-month adaptive approach, concluding well beyond contractual commitments.',
      flag1: 'Contractual click target exceeded',
      flag2: 'Meta · Google Search',
      flag3: 'opodo.fr landing page',
      flag4: '3 creatives — 2 videos, 2 static visuals',
      kpi1: 'Impressions delivered — all channels combined',
      kpi2: 'Clicks generated over 6 months of campaigning',
      kpi3: 'Average Search CTR — well above travel industry benchmarks',
      kpi4val: 'Mid-March',
      kpi4: 'Contractual click target already exceeded mid-campaign'
    },
    timeline: {
      eyebrow: 'Campaign narrative',
      title: 'Six months, six strategic intents.',
      desc: 'A managed approach, not a passive one: each month responded to a distinct intent. Click a month to explore the analysis, metrics and key takeaway.',
      tabsAria: 'Campaign months',
      creaLabel: 'Top creative',
      audienceLabel: 'Audience',
      impressions: 'Impressions',
      clicks: 'Clicks'
    },
    perf: {
      eyebrow: 'Performance',
      title: 'Remarkably stable click volume, regardless of pressure.',
      desc: 'Between 9,900 and 12,700 clicks per month (excluding February), demonstrating disciplined budget management — while Search consistently maintains CTR above 10%.',
      chartMetaTitle: 'Meta — delivery pressure vs click volume',
      chartMetaSub: 'The doubling and peak in impressions (March–April) were deliberate visibility choices, once the click target had been exceeded.',
      chartMetaAria: 'Monthly Meta impressions and clicks trend',
      chartSearchTitle: 'Google Search — algorithm ramp-up',
      chartSearchSub: 'After January\u2019s learning phase, CTR settled sustainably above 10%, with a record number of impressions at close.',
      chartSearchAria: 'Monthly Search clicks and CTR trend',
      chartAgesTitle: 'Meta audience — clicks by age across the campaign',
      chartAgesSub: 'The senior core audience dominates across Wave 1: 55+ account for 36.7% of clicks (aggregated from six monthly reports, weighted by clicks).',
      chartAgesAria: 'Meta click distribution by age group across the campaign',
      tableSummary: 'View full data table — January → June 2026',
      chartFallback: 'Chart unavailable offline — full data is available in the table below.',
      avgCtr: 'Average CTR (12.40%)',
      ageTooltip: ' of clicks'
    },
    table: {
      month: 'Month', metaImp: 'Meta — Impressions', metaClicks: 'Meta — Clicks', metaCtr: 'Meta — CTR',
      searchImp: 'Search — Impressions', searchClicks: 'Search — Clicks', searchCtr: 'Search — CTR', total: 'Total'
    },
    sf: {
      title: 'Search focus — keywords & search terms',
      sub: 'What users actually type before clicking: transactional queries around \u201cprice / ticket\u201d deliver the campaign\u2019s highest click-through rates.',
      term: 'Search term', impressions: 'Impressions', clicks: 'Clicks', ctr: 'CTR',
      chip1: 'of Search clicks on mobile (9,375 clicks) — landing pages and user journeys must be mobile-first.',
      chip1b: '97.7%',
      chip2: 'leading in clicks; Toulouse records the highest CTR among major cities (14.01%).',
      chip2b: 'Paris · Lyon · Toulouse',
      chip3: 'among Search clicks (CTR 13.31%) · 65+ lead: 35.5% of clicks, CTR 14.76%.',
      chip3b: '62.2% women',
      note: '<b>Conversion signal:</b> price- and booking-oriented queries (\u201cair canada vol\u201d, \u201cprix billet avion canada aller retour\u201d) exceed 22% CTR — intent worth leveraging in Wave 2 through retargeting and booking-focused messaging.'
    },
    learn: {
      eyebrow: 'Key Learnings', title: 'What Wave 1 demonstrates.',
      tag1: 'Creative', h1: 'Video as the strongest creative lever',
      p1: 'Lobster and Whale consistently outperformed static visuals when in rotation — up to 22.42% CTR for Lobster at launch. Video is the format of choice for this destination.',
      tag2: 'Media', h2: 'Search as a sustainable performance engine',
      p2: 'An average CTR of 12.40% over the period, well above travel industry benchmarks, and a record number of impressions at close (17,358 in June).',
      tag3: 'Audience', h3: 'A confirmed senior core audience',
      p3: '65+ and 55–64 dominate clicks on both channels in steady state (65+ at 39.6% in June) — a valuable insight for targeting and messaging in the renewal.',
      tag4: 'Management', h4: 'A managed approach, not a passive one',
      p4: 'Each month responded to a distinct strategic intent, maintaining stable click volume (9,900 – 12,700 excluding February) regardless of delivery pressure.'
    },
    reco: {
      eyebrow: 'Recommendation · Renewal September → December 2026',
      title: 'Building on success: the Wave 2 roadmap.',
      desc: 'The contractual target has been significantly exceeded and creative, media and audience insights are now consolidated. Wave 2 must leverage this foundation to transform a successful acquisition campaign into a seasonal performance programme. Six action levers — click for proof → action plan details.',
      proof: 'Evidence — Wave 1',
      action: 'Action plan — Wave 2',
      retroTitle: 'Proposed timeline',
      step1b: 'August', step1p: 'Creative and copy validation · dual KPI framework (clicks + visibility).',
      step2b: '1 September', step2p: 'Launch on existing campaign structures · progressive budget ramp-up.',
      step3b: 'October', step3p: 'Full media weight · retargeting and lookalike audience activation.',
      step4b: 'November', step4p: 'Budget reallocation based on performance · year-end push preparation.',
      step5b: 'December', step5p: 'Final booking-focused push · consolidated report and insights for 2027.'
    },
    closing: {
      title: 'Ready for Wave 2?',
      desc: 'Creative production to begin in August for a 1 September launch in optimal conditions — in-house studio, ROI-driven management, advanced tracking. Welcome again.',
      agency: 'Link Agency', location: 'Bordeaux · Digital Performance'
    },
    assets: {
      eyebrow: 'Assets',
      title: 'Canada Asset Library',
      desc: 'All source materials are grouped here by category so visuals, videos and campaign assets can be found quickly.',
      videosTitle: 'Videos',
      videosDesc: 'The 6 video variations available for the campaign.',
      visualsTitle: 'Visuals by Month',
      visualsDesc: 'Static creatives are organised by delivery month, with each format accessible in one click.',
      linkTitle: "Link à l'Acte",
      linkDesc: 'The final approved visual kept as the creative reference.',
      validVisual: 'Approved Visual',
      closeImage: 'Close image',
      count6: '6 visuals',
      count7: '7 visuals',
      months: {
        january: 'January',
        february: 'February',
        march: 'March',
        april: 'April',
        may: 'May',
        june: 'June'
      }
    },
    footer: {
      text: 'Link Agency © Copyright 2026 — All reproduction prohibited.<br>Interactive document compiled from monthly reports and the overall assessment, January → June 2026.'
    },
    chartLabels: {
      impressions: 'Impressions', clicks: 'Clicks', ctr: 'CTR',
      ages: ['55+ (incl. 65+)', '35-44', '25-34', '45-54', '18-24 / other'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
  }
};

const MOIS = [
  {nom:{fr:'Janvier',en:'January'},theme:{fr:'Lancement hors norme',en:'Exceptional launch'},badge:{fr:'Référence atypique',en:'Atypical benchmark'},
   meta:{imp:73838,clics:11602,ctrFr:'15,71 %',ctrEn:'15.71%'},search:{imp:11052,clics:567,ctrFr:'5,13 %',ctrEn:'5.13%'},
   story:{fr:"Des performances de lancement totalement hors norme, à considérer comme une référence atypique, portées par la vidéo Lobster. L'audience Meta est majoritairement masculine et jeune (25-44 ans ≈ 63 % des clics). Search entame sa phase d'apprentissage, le temps que l'algorithme accumule de la donnée.",en:'Launch performance was entirely off the charts — an atypical benchmark driven by the Lobster video. The Meta audience was predominantly male and young (25–44 ≈ 63% of clicks). Search entered its learning phase while the algorithm accumulated data.'},
   crea:{fr:'Vidéo Lobster — CTR 22,42 % (11 208 clics, 49 981 impressions)',en:'Lobster video — 22.42% CTR (11,208 clicks, 49,981 impressions)'},
   audience:{fr:'Masculine à 71,3 % · segments 25-44 ans dominants',en:'71.3% male · dominant 25–44 age segments'}},
  {nom:{fr:'Février',en:'February'},theme:{fr:'Test & réactivation',en:'Test & reactivation'},badge:{fr:'Coûts maîtrisés',en:'Controlled costs'},
   meta:{imp:640033,clics:5844,ctrFr:'0,91 %',ctrEn:'0.91%'},search:{imp:14321,clics:1903,ctrFr:'13,29 %',ctrEn:'13.29%'},
   story:{fr:"Mois marqué par un test de diffusion 100 % Instagram : coûts maîtrisés, mais trafic Opodo en retrait. Facebook est réactivé en cours de mois et relance immédiatement le trafic sur la landing page. L'audience se féminise (52,5 %) et les 55-64 ans montent à 38,3 %. Search confirme sa montée en puissance : +236 % de clics vs janvier.",en:'A month marked by a 100% Instagram delivery test: costs under control, but Opodo traffic down. Facebook was reactivated mid-month and immediately restored landing page traffic. The audience shifted female (52.5%) and 55–64 rose to 38.3%. Search confirmed its ramp-up: +236% clicks vs January.'},
   crea:{fr:'Fixe 2 en tête — 2 282 clics lien (CTR lien 2,55 %)',en:'Static 2 leading — 2,282 link clicks (2.55% link CTR)'},
   audience:{fr:'Féminisation : 52,5 % de femmes · 55-64 ans à 38,3 %',en:'Shift to female: 52.5% women · 55–64 at 38.3%'}},
  {nom:{fr:'Mars',en:'March'},theme:{fr:'Bascule visibilité',en:'Visibility pivot'},badge:{fr:'Objectif déjà dépassé',en:'Target already exceeded'},
   meta:{imp:1293662,clics:9897,ctrFr:'0,77 %',ctrEn:'0.77%'},search:{imp:11504,clics:1904,ctrFr:'16,55 %',ctrEn:'16.55%'},
   story:{fr:"L'objectif de clics est déjà largement dépassé à mi-parcours (4 997 clics pour 2 500 visés) : une part du dispositif bascule volontairement vers la visibilité. Le doublement des impressions et la baisse mécanique du CTR sont assumés pour maximiser l'exposition des messages. Search signe son excellent régime de croisière.",en:'The click target was already well exceeded mid-campaign (4,997 clicks vs 2,500 target): part of the programme deliberately pivoted to visibility. The doubling of impressions and mechanical CTR decline were accepted to maximise message exposure. Search entered excellent steady-state performance.'},
   crea:{fr:'Vidéo Lobster — meilleure créa du mois (CTR 6,3 %)',en:'Lobster video — top creative of the month (6.3% CTR)'},
   audience:{fr:'Ciblage concentré : All 18/64 à 84,3 % des clics',en:'Focused targeting: All 18/64 at 84.3% of clicks'}},
  {nom:{fr:'Avril',en:'April'},theme:{fr:'Pic de diffusion',en:'Delivery peak'},badge:{fr:'Record d\'impressions',en:'Impression record'},
   meta:{imp:2409717,clics:10046,ctrFr:'0,42 %',ctrEn:'0.42%'},search:{imp:10230,clics:1704,ctrFr:'16,66 %',ctrEn:'16.66%'},
   story:{fr:"Record d'impressions (+86 % vs mars) pour un volume de clics stable — le CTR touche logiquement son point bas du fait du volume. À noter : la vidéo n'a pas été diffusée suite à une désélection automatique du visuel par Meta au lancement, sans alerte. Le dispositif repose sur les visuels fixes, Fixe 1 portant l'essentiel des performances.",en:'Impression record (+86% vs March) with stable click volume — CTR logically hit its low point due to volume. Note: the video was not delivered following automatic visual rejection by Meta at launch, without alert. The programme relied on static visuals, with Static 1 driving most performance.'},
   crea:{fr:'Fixe 1 — 5 991 clics (CTR 3,73 %)',en:'Static 1 — 5,991 clicks (3.73% CTR)'},
   audience:{fr:'Masculine à 60,6 % · rajeunissement ponctuel (18-34 ≈ 60 %)',en:'60.6% male · temporary shift younger (18–34 ≈ 60%)'}},
  {nom:{fr:'Mai',en:'May'},theme:{fr:'Record de clics',en:'Click record'},badge:{fr:'Meilleur mois en volume',en:'Best month by volume'},
   meta:{imp:2272003,clics:12695,ctrFr:'0,56 %',ctrEn:'0.56%'},search:{imp:12884,clics:1668,ctrFr:'12,95 %',ctrEn:'12.95%'},
   story:{fr:"Meilleur mois de la campagne en volume de clics (+26 % vs avril), avec le retour de la vidéo et un dispositif pleinement rétabli : les trois créas performent simultanément, signe d'un mix créatif équilibré. L'audience senior reprend la première place. Search reste stable et performant.",en:'Best month of the campaign by click volume (+26% vs April), with video back in rotation and the programme fully restored: all three creatives performed simultaneously, signalling a balanced creative mix. The senior audience reclaimed top position. Search remained stable and high-performing.'},
   crea:{fr:'Mix équilibré — Lobster 7 % · Fixe 1 7,76 % · Fixe 2 9,01 %',en:'Balanced mix — Lobster 7% · Static 1 7.76% · Static 2 9.01%'},
   audience:{fr:'Seniors en tête : 65+ à 26,7 % · 55-64 à 19,8 %',en:'Seniors leading: 65+ at 26.7% · 55–64 at 19.8%'}},
  {nom:{fr:'Juin',en:'June'},theme:{fr:'Recentrage qualitatif',en:'Quality refocus'},badge:{fr:'Meilleur CTR en régime normal',en:'Best CTR in normal delivery'},
   meta:{imp:985567,clics:10241,ctrFr:'1,04 %',ctrEn:'1.04%'},search:{imp:17358,clics:1847,ctrFr:'10,64 %',ctrEn:'10.64%'},
   story:{fr:"Clôture sur le meilleur CTR de la campagne en régime de diffusion normal : diffusion resserrée (−57 % d'impressions) pour des clics qui ne reculent que de 19 % — une pression publicitaire nettement mieux convertie (CTR quasi doublé vs mai). La vidéo Whale concentre plus de la moitié des clics créas, l'engagement bondit de +55 % et Search signe son record d'impressions.",en:'Closed on the campaign\u2019s best CTR in normal delivery mode: tighter delivery (−57% impressions) with clicks down only 19% — significantly better-converting ad pressure (CTR nearly doubled vs May). The Whale video captured over half of creative clicks, engagement surged +55%, and Search set an impression record.'},
   crea:{fr:'Vidéo Whale — CTR 1,95 % · plus de 50 % des clics créas',en:'Whale video — 1.95% CTR · over 50% of creative clicks'},
   audience:{fr:'Féminine à 73,3 % · 65+ au plus haut : 39,6 % des clics',en:'73.3% female · 65+ at peak: 39.6% of clicks'}}
];

const RECOS = [
  {t:{fr:'Sanctuariser la vidéo — et sécuriser sa diffusion',en:'Protect video — and secure its delivery'},
   p:{fr:"La vidéo a surperformé les visuels fixes à chaque diffusion : Lobster jusqu'à 22,42 % de CTR au lancement, Whale plus de la moitié des clics créas en juin. En avril, une désélection automatique par Meta — sans alerte — a privé le dispositif de son meilleur levier.",en:'Video outperformed static visuals at every rotation: Lobster up to 22.42% CTR at launch, Whale over half of creative clicks in June. In April, automatic rejection by Meta — without alert — deprived the programme of its strongest lever.'},
   a:{fr:"Produire 2 nouvelles vidéos 15 s via le studio intégré Link avant fin août si possible ; sinon, l'alternance 1 mois sur 2 entre la vidéo Lobster et la vidéo Whale est OK.",en:'Produce 2 new 15-second videos via the Link in-house studio before end of August if possible; otherwise, alternating Lobster and Whale video every other month is acceptable.'}},
  {t:{fr:"Écraser la phase d'apprentissage",en:'Eliminate the learning phase'},
   p:{fr:"Search a mis un mois à monter en régime : CTR de 5,13 % en janvier, puis durablement au-dessus de 10 %, jusqu'à 16,66 % en avril.",en:'Search took one month to ramp up: 5.13% CTR in January, then sustainably above 10%, reaching 16.66% in April.'},
   a:{fr:"Relancer sur les structures de campagnes existantes pour capitaliser sur l'historique algorithmique ; montée en charge budgétaire progressive sur septembre, pleine puissance dès octobre.",en:'Relaunch on existing campaign structures to leverage algorithmic history; progressive budget ramp-up in September, full weight from October.'}},
  {t:{fr:'Ciblage large, message senior',en:'Broad targeting, senior messaging'},
   p:{fr:"Le ciblage All 18/64 concentre les clics en régime de croisière (63 % en juin, 84,3 % en mars) et le cœur de cible 55+ est confirmé, les 65+ culminant à 39,6 % des clics en juin.",en:'All 18/64 targeting concentrates clicks in steady state (63% in June, 84.3% in March) and the 55+ core audience is confirmed, with 65+ peaking at 39.6% of clicks in June.'},
   a:{fr:"Conserver le ciblage large piloté par l'algorithme, et concevoir créas et messages pensés pour les 55+ (réassurance, confort, temporalité de réservation) sans fermer les autres segments.",en:'Maintain broad algorithm-driven targeting, and design creatives and messaging for 55+ (reassurance, comfort, booking timeline) without excluding other segments.'}},
  {t:{fr:"Activer le capital d'engagement",en:'Activate engagement capital'},
   p:{fr:'90 675 interactions sur les posts en juin (+55 % vs mai), ce qui crée une data exploitable riche pour la 2ᵉ vague, dès septembre.',en:'90,675 post interactions in June (+55% vs May), creating rich actionable data for Wave 2 from September.'},
   a:{fr:'Constituer dès septembre des audiences de retargeting (engagés 180 jours, visiteurs de la landing) et lookalike, avec une ligne budgétaire dédiée orientée réservation.',en:'From September, build retargeting audiences (180-day engagers, landing page visitors) and lookalikes, with a dedicated booking-oriented budget line.'}},
  {t:{fr:'Adapter les créas à la nouvelle vague',en:'Adapt creatives for the new wave'},
   p:{fr:"La promesse « nature spectaculaire » a performé au printemps ; septembre-décembre ouvre de nouvelles perspectives d'évasion et de nouveaux besoins pour la cible — un territoire encore plus différenciant : été indien, aurores boréales…",en:'The \u201cspectacular nature\u201d promise performed in spring; September–December opens new escapism perspectives and audience needs — an even more distinctive territory: Indian summer, northern lights\u2026'},
   a:{fr:"Changer les assets pour donner de l'oxygène à la campagne et renouveler l'engagement.",en:'Refresh assets to breathe new life into the campaign and renew engagement.'}},
  {t:{fr:'Piloter un double objectif clics + visibilité',en:'Manage dual click + visibility objectives'},
   p:{fr:"L'objectif de clics a été dépassé dès la mi-parcours (4 997 clics pour 2 500 visés), permettant une bascule maîtrisée vers la visibilité dès mars.",en:'The click target was exceeded by mid-campaign (4,997 clicks vs 2,500 target), enabling a controlled pivot to visibility from March.'},
   a:{fr:'Formaliser dès le cadrage les deux KPI — volume de clics garanti et impressions cibles — avec des seuils de bascule explicites, pour un pilotage transparent mois après mois.',en:'Formalise both KPIs at briefing — guaranteed click volume and target impressions — with explicit pivot thresholds, for transparent month-by-month management.'}}
];

function t(key) {
  return key.split('.').reduce((o, k) => o?.[k], I18N[lang]) ?? key;
}

function nf() {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-GB');
}

function fmtCtr(m, channel) {
  return lang === 'fr' ? m[channel].ctrFr : m[channel].ctrEn;
}

/* ---------- Language switch ---------- */
function applyLanguage() {
  document.documentElement.lang = lang;
  document.title = t('meta.title');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = t(el.dataset.i18nAlt);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nAria));
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  document.querySelectorAll('#dataTableBody tr[data-month]').forEach(row => {
    const i = +row.dataset.month;
    const m = MOIS[i];
    row.cells[0].textContent = m.nom[lang];
    row.cells[3].textContent = fmtCtr(m, 'meta');
    row.cells[6].textContent = fmtCtr(m, 'search');
  });

  const totalRow = document.querySelector('#dataTableBody tr.total');
  if (totalRow) {
    totalRow.cells[3].textContent = lang === 'fr' ? '0,79 %' : '0.79%';
    totalRow.cells[6].textContent = lang === 'fr' ? '12,40 %' : '12.40%';
  }

  renderMoisTabs();
  selectMois(activeMois);
  renderRecos();
  updateCharts();
  localStorage.setItem('lang', lang);
}

function setLanguage(newLang) {
  if (newLang === lang) return;
  lang = newLang;
  applyLanguage();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ---------- Monthly tabs ---------- */
const tabsEl = document.getElementById('moisTabs');
const panelEl = document.getElementById('moisPanel');

function renderMoisTabs() {
  tabsEl.innerHTML = '';
  MOIS.forEach((m, i) => {
    const b = document.createElement('button');
    b.className = 'mtab' + (i === activeMois ? ' active' : '');
    b.setAttribute('role', 'tab');
    b.innerHTML = '<span class="m">' + m.nom[lang] + '</span><span class="t">' + m.theme[lang] + '</span>';
    b.addEventListener('click', () => selectMois(i));
    tabsEl.appendChild(b);
  });
}

function statBox(val, label) {
  return '<div class="stat"><b>' + val + '</b><span>' + label + '</span></div>';
}

function selectMois(i) {
  activeMois = i;
  [...tabsEl.children].forEach((b, j) => b.classList.toggle('active', i === j));
  const m = MOIS[i];
  panelEl.innerHTML =
    '<div class="mp-left">' +
      '<span class="mp-badge">' + m.badge[lang] + '</span>' +
      '<h3 class="mp-title">' + m.nom[lang] + ' — ' + m.theme[lang] + '</h3>' +
      '<p class="mp-story">' + m.story[lang] + '</p>' +
      '<div class="mp-chips">' +
        '<div class="chip"><b>' + t('timeline.creaLabel') + '</b>' + m.crea[lang] + '</div>' +
        '<div class="chip"><b>' + t('timeline.audienceLabel') + '</b>' + m.audience[lang] + '</div>' +
      '</div>' +
    '</div>' +
    '<div class="mp-right">' +
      '<div class="mp-lever">Meta</div>' +
      '<div class="mp-stats">' +
        statBox(nf().format(m.meta.imp), t('timeline.impressions')) +
        statBox(nf().format(m.meta.clics), t('timeline.clicks')) +
        statBox(fmtCtr(m, 'meta'), 'CTR') +
      '</div>' +
      '<div class="mp-lever">Google Search</div>' +
      '<div class="mp-stats">' +
        statBox(nf().format(m.search.imp), t('timeline.impressions')) +
        statBox(nf().format(m.search.clics), t('timeline.clicks')) +
        statBox(fmtCtr(m, 'search'), 'CTR') +
      '</div>' +
    '</div>';
}

/* ---------- Recommendations accordion ---------- */
const accList = document.getElementById('accList');
let openAccIndex = 0;

function toggleAcc(item, index) {
  const body = item.querySelector('.acc-body');
  const head = item.querySelector('.acc-head');
  const open = item.classList.toggle('open');
  head.setAttribute('aria-expanded', open ? 'true' : 'false');
  body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
  if (open) openAccIndex = index;
}

function renderRecos() {
  accList.innerHTML = '';
  RECOS.forEach((r, i) => {
    const item = document.createElement('div');
    item.className = 'acc' + (i === openAccIndex ? ' open' : '');
    item.innerHTML =
      '<button class="acc-head" aria-expanded="' + (i === openAccIndex ? 'true' : 'false') + '">' +
        '<span class="acc-num">0' + (i + 1) + '</span>' +
        '<span class="acc-title">' + r.t[lang] + '</span>' +
        '<span class="acc-ico" aria-hidden="true">+</span>' +
      '</button>' +
      '<div class="acc-body"><div class="acc-body-inner">' +
        '<div class="pv"><h5>' + t('reco.proof') + '</h5>' + r.p[lang] + '</div>' +
        '<div class="ac"><h5>' + t('reco.action') + '</h5>' + r.a[lang] + '</div>' +
      '</div></div>';
    item.querySelector('.acc-head').addEventListener('click', () => toggleAcc(item, i));
    accList.appendChild(item);
    if (i === openAccIndex) {
      const body = item.querySelector('.acc-body');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
}

/* ---------- Animated counters ---------- */
function initCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { el.textContent = nf().format(target); return; }
    let started = false;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          const t0 = performance.now(), dur = 1400;
          const step = now => {
            const p = Math.min(1, (now - t0) / dur);
            el.textContent = nf().format(Math.round(target * (1 - Math.pow(1 - p, 3))));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: .4 });
    io.observe(el);
  });
}

/* ---------- Charts ---------- */
const META_IMP = [73838,640033,1293662,2409717,2272003,985567];
const META_CLICS = [11602,5844,9897,10046,12695,10241];
const SEARCH_CLICS = [567,1903,1904,1704,1668,1847];
const SEARCH_CTR = [5.13,13.29,16.55,16.66,12.95,10.64];
const AGE_DATA = [36.7,18.6,17.9,16.2,10.6];

function fmtK(v) {
  const n = nf();
  if (v >= 1000000) return n.format(v / 1000000) + (lang === 'fr' ? ' M' : 'M');
  if (v >= 1000) return Math.round(v / 1000) + 'k';
  return v;
}

function initCharts() {
  if (!window.Chart) {
    document.querySelectorAll('.chart-box').forEach(b => {
      b.innerHTML = '<p style="color:var(--grey);font-size:13.5px;padding-top:20px">' + t('perf.chartFallback') + '</p>';
    });
    return;
  }

  Chart.defaults.font.family = getComputedStyle(document.body).fontFamily;
  Chart.defaults.color = '#565655';
  Chart.defaults.plugins.legend.labels.boxWidth = 12;
  Chart.defaults.plugins.legend.labels.boxHeight = 12;
  Chart.defaults.plugins.tooltip.backgroundColor = '#232120';
  Chart.defaults.plugins.tooltip.padding = 10;

  const months = I18N[lang].chartLabels.months;
  const impLabel = t('chartLabels.impressions');
  const clkLabel = t('chartLabels.clicks');
  const ctrLabel = t('chartLabels.ctr');

  charts.meta = new Chart(document.getElementById('chartMeta'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        { label: impLabel, data: META_IMP, backgroundColor: '#E94C16', borderRadius: 9, maxBarThickness: 52, yAxisID: 'y' },
        { type: 'line', label: clkLabel, data: META_CLICS, borderColor: '#232120', backgroundColor: '#232120', tension: .35, pointRadius: 4.5, pointHoverRadius: 6, borderWidth: 2.5, yAxisID: 'y1' }
      ]
    },
    options: {
      maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: { tooltip: { callbacks: { label: c => ' ' + c.dataset.label + ' : ' + nf().format(c.parsed.y) } } },
      scales: {
        y: { position: 'left', grid: { color: 'rgba(35,33,32,.07)' }, ticks: { callback: fmtK }, title: { display: true, text: impLabel } },
        y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: { callback: fmtK }, title: { display: true, text: clkLabel } },
        x: { grid: { display: false } }
      }
    }
  });

  charts.search = new Chart(document.getElementById('chartSearch'), {
    type: 'bar',
    data: {
      labels: months,
      datasets: [
        { label: clkLabel, data: SEARCH_CLICS, backgroundColor: '#565655', borderRadius: 9, maxBarThickness: 40, yAxisID: 'y' },
        { type: 'line', label: ctrLabel, data: SEARCH_CTR, borderColor: '#E94C16', backgroundColor: '#E94C16', tension: .35, pointRadius: 4.5, pointHoverRadius: 6, borderWidth: 2.5, yAxisID: 'y1' },
        { type: 'line', label: t('perf.avgCtr'), data: months.map(() => 12.4), borderColor: 'rgba(233,76,22,.45)', borderDash: [6, 6], pointRadius: 0, borderWidth: 2, yAxisID: 'y1' }
      ]
    },
    options: {
      maintainAspectRatio: false, interaction: { mode: 'index', intersect: false },
      plugins: {
        tooltip: {
          callbacks: {
            label: c => ' ' + c.dataset.label + (c.dataset.yAxisID === 'y1'
              ? ' : ' + c.parsed.y.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB') + ' %'
              : ' : ' + nf().format(c.parsed.y))
          }
        }
      },
      scales: {
        y: { position: 'left', grid: { color: 'rgba(35,33,32,.07)' }, title: { display: true, text: clkLabel } },
        y1: { position: 'right', min: 0, max: 20, grid: { drawOnChartArea: false }, ticks: { callback: v => v + ' %' }, title: { display: true, text: ctrLabel } },
        x: { grid: { display: false } }
      }
    }
  });

  charts.ages = new Chart(document.getElementById('chartAges'), {
    type: 'doughnut',
    data: {
      labels: I18N[lang].chartLabels.ages,
      datasets: [{
        data: AGE_DATA,
        backgroundColor: ['#E94C16', '#F07C4E', '#F5A985', '#FBD6C2', '#232120'],
        borderColor: '#FFFFFF', borderWidth: 3, hoverOffset: 8
      }]
    },
    options: {
      maintainAspectRatio: false, cutout: '62%',
      plugins: {
        legend: { position: 'bottom' },
        tooltip: {
          callbacks: {
            label: c => ' ' + c.label + ' : ' + c.parsed.toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB') + '%' + t('perf.ageTooltip')
          }
        }
      }
    }
  });
}

function updateCharts() {
  if (!charts.meta) return;

  const months = I18N[lang].chartLabels.months;
  const impLabel = t('chartLabels.impressions');
  const clkLabel = t('chartLabels.clicks');
  const ctrLabel = t('chartLabels.ctr');

  charts.meta.data.labels = months;
  charts.meta.data.datasets[0].label = impLabel;
  charts.meta.data.datasets[1].label = clkLabel;
  charts.meta.options.scales.y.title.text = impLabel;
  charts.meta.options.scales.y1.title.text = clkLabel;
  charts.meta.update();

  charts.search.data.labels = months;
  charts.search.data.datasets[0].label = clkLabel;
  charts.search.data.datasets[1].label = ctrLabel;
  charts.search.data.datasets[2].label = t('perf.avgCtr');
  charts.search.options.scales.y.title.text = clkLabel;
  charts.search.options.scales.y1.title.text = ctrLabel;
  charts.search.update();

  charts.ages.data.labels = I18N[lang].chartLabels.ages;
  charts.ages.update();
}

function initAssetLightbox() {
  const lightbox = document.getElementById('assetLightbox');
  const lightboxImage = document.getElementById('assetLightboxImage');
  const lightboxCaption = document.getElementById('assetLightboxCaption');
  const closeBtn = document.getElementById('assetLightboxClose');
  const assetsSection = document.getElementById('assets');
  const imageTiles = assetsSection?.querySelectorAll('a.asset-tile');

  if (!lightbox || !lightboxImage || !lightboxCaption || !closeBtn || !assetsSection || !imageTiles?.length) return;

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImage.src = '';
    lightboxImage.alt = '';
    lightboxCaption.textContent = '';
    document.body.style.overflow = '';
  };

  const openLightbox = tile => {
    lightboxImage.src = tile.dataset.fullsrc || '';
    lightboxImage.alt = tile.querySelector('img')?.alt || '';
    lightboxCaption.textContent = tile.querySelector('.asset-meta b')?.textContent || '';
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  imageTiles.forEach(tile => {
    tile.dataset.fullsrc = tile.getAttribute('href') || '';
    tile.removeAttribute('href');
    tile.removeAttribute('target');
    tile.removeAttribute('rel');
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');
  });

  assetsSection.addEventListener('click', e => {
    const tile = e.target.closest('a.asset-tile');
    if (!tile) return;

    e.preventDefault();
    openLightbox(tile);
  });

  assetsSection.addEventListener('keydown', e => {
    const tile = e.target.closest('a.asset-tile');
    if (!tile) return;
    if (e.key !== 'Enter' && e.key !== ' ') return;

    e.preventDefault();
    openLightbox(tile);
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.dataset.closeLightbox === 'true') {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

/* ---------- Init ---------- */
applyLanguage();
initCounters();
initCharts();
initAssetLightbox();
