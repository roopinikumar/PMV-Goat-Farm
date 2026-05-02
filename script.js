/* =====================================================
   PMV GOAT FARM – JAVASCRIPT WITH SUPABASE
   ===================================================== */

// ===========================
//  SUPABASE SETUP
// ===========================
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://eibqwjkwcpztprbppmzq.supabase.co';
const SUPABASE_KEY = 'sb_publishable_BS4ZDH6KJJEVrykJf9m--w_JvfpvnS1';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// ===========================
//  TRANSLATIONS
// ===========================
const translations = {
  en: {
    location: "Krishnagiri, Tamil Nadu",
    nav_home: "Home", nav_about: "About", nav_breeds: "Our Breeds", nav_gallery: "Gallery", nav_contact: "Contact",
    hero_badge: "Est. in Krishnagiri, Tamil Nadu",
    hero_title: "Premium Quality", hero_title_span: "Goat Farm",
    hero_desc: "Specialising in Ettayapuram Mayilambadi & Andhra Nellu Jodipi breeds — raised with care, sold with trust.",
    hero_btn1: "View Our Breeds", hero_btn2: "Enquire Now", scroll_down: "▼ Scroll Down",
    stat1: "Goats Sold", stat2: "Years Experience", stat3: "Premium Breeds", stat4: "Happy Customers",
    about_label: "Who We Are", about_title: "A Family Farm Built on Trust & Quality", about_badge: "100% Trusted Farm",
    about_text1: "PMV Goat Farm is a dedicated goat breeding farm located in Krishnagiri, Tamil Nadu. We specialise in raising healthy, premium-quality Ettayapuram Mayilambadi and Andhra Nellu Jodipi breeds.",
    about_text2: "Our goats are raised in a clean, natural environment with proper nutrition and veterinary care. We believe in transparent, honest dealings.",
    about_li1: "✅ Vaccinated & Health-Checked", about_li2: "✅ Natural Free-Range Environment",
    about_li3: "✅ Trusted by 200+ Farmers", about_li4: "✅ Direct Farm-to-Buyer Sales",
    get_in_touch: "Get In Touch",
    breeds_label: "What We Offer", breeds_title: "Our Premium Goat Breeds",
    breeds_desc: "We raise two of the most sought-after goat breeds in Tamil Nadu, known for their quality meat and adaptability.",
    breed1_name: "Ettayapuram Mayilambadi", breed1_origin: "📍 Tamil Nadu Native Breed",
    breed1_desc: "A hardy, indigenous breed known for excellent meat quality and adaptability to local climate conditions.",
    breed1_f1: "High meat yield", breed1_f2: "Drought-resistant", breed1_f3: "Easy to maintain", breed1_f4: "Strong immune system",
    breed2_name: "Andhra Nellu Jodipi", breed2_origin: "📍 Andhra Pradesh Heritage Breed",
    breed2_desc: "A premium Andhra breed recognized for its superior growth rate, larger frame, and exceptional meat quality.",
    breed2_f1: "Fast growth rate", breed2_f2: "Large body frame", breed2_f3: "Superior meat quality", breed2_f4: "High market demand",
    enquire_breed: "Enquire About This Breed", popular_choice: "Popular Choice",
    why_label: "Why Choose Us", why_title: "The PMV Difference",
    why1_h: "Fully Vaccinated", why1_p: "All goats are vaccinated and health-certified before sale.",
    why2_h: "Natural Feeding", why2_p: "Raised on natural pasture and nutritious feed for optimal health.",
    why3_h: "Honest Pricing", why3_p: "Fair, transparent pricing with no hidden charges.",
    why4_h: "Transport Support", why4_p: "We assist with arranging transport for your purchased goats safely.",
    why5_h: "After-Sale Support", why5_p: "We stay in touch after purchase to help you care for your animals.",
    why6_h: "Trusted Reputation", why6_p: "Over 200 happy customers across Tamil Nadu and neighbouring states.",
    gallery_label: "Our Farm", gallery_title: "Photo Gallery",
    gallery_desc: "A glimpse into PMV Goat Farm — our animals, environment, and happy customers.",
    testimonials_label: "Customer Reviews", testimonials_title: "What Our Buyers Say",
    test1_text: "\"Excellent quality goats! The Mayilambadi breed I purchased is healthy and growing well. Very satisfied with PMV Goat Farm.\"",
    test2_text: "\"Very honest and transparent dealings. The goats were exactly as described. I will definitely buy again from PMV Farm.\"",
    test3_text: "\"The Andhra Nellu Jodipi goats are amazing – fast growing and in great health. Thank you PMV Goat Farm!\"",
    contact_label: "Reach Us", contact_title: "Get In Touch",
    contact_intro: "Interested in buying goats or want to know more? We'd love to hear from you.",
    location_label: "Location", phone_label: "Phone / WhatsApp", hours_label: "Available Hours", hours_val: "Mon–Sat: 8am – 7pm",
    whatsapp_btn: "💬 Chat on WhatsApp",
    form_title: "Send an Enquiry", form_name: "Your Name", form_phone: "Phone Number", form_breed: "Interested Breed",
    form_breed_opt0: "Select a breed", form_breed_opt3: "Both / Not Sure",
    form_msg: "Message", form_submit: "Send Enquiry",
    form_success: "✅ Your enquiry has been sent! We'll contact you soon.",
    footer_tagline: "Quality Goats | Krishnagiri, Tamil Nadu"
  },
  ta: {
    location: "கிருஷ்ணகிரி, தமிழ்நாடு",
    nav_home: "முகப்பு", nav_about: "எங்களை பற்றி", nav_breeds: "இனங்கள்", nav_gallery: "படங்கள்", nav_contact: "தொடர்பு",
    hero_badge: "கிருஷ்ணகிரி, தமிழ்நாட்டில் நிறுவப்பட்டது",
    hero_title: "உயர்தர", hero_title_span: "ஆட்டு பண்ணை",
    hero_desc: "எட்டயபுரம் மயிலம்பாடி & ஆந்திர நெல்லு ஜுடுபி இனங்களில் நிபுணத்துவம்.",
    hero_btn1: "இனங்களை காண்க", hero_btn2: "இப்போதே விசாரிக்க", scroll_down: "▼ கீழே உருட்டுக",
    stat1: "விற்கப்பட்ட ஆடுகள்", stat2: "வருட அனுபவம்", stat3: "உயரிய இனங்கள்", stat4: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
    about_label: "நாங்கள் யார்", about_title: "நம்பிக்கை & தரத்தின் மீது கட்டப்பட்ட குடும்ப பண்ணை", about_badge: "100% நம்பகமான பண்ணை",
    about_text1: "PMV ஆட்டு பண்ணை கிருஷ்ணகிரி, தமிழ்நாட்டில் அமைந்துள்ள ஒரு அர்ப்பணிப்புள்ள ஆடு இனப்பெருக்க பண்ணை.",
    about_text2: "எங்கள் ஆடுகள் சரியான ஊட்டச்சத்து மற்றும் கால்நடை பராமரிப்புடன் தூய்மையான, இயற்கையான சூழலில் வளர்க்கப்படுகின்றன.",
    about_li1: "✅ தடுப்பூசி & உடல் நல சோதனை", about_li2: "✅ இயற்கை திறந்த வெளி சூழல்",
    about_li3: "✅ 200+ விவசாயிகள் நம்பிக்கை", about_li4: "✅ பண்ணை-நேரடி விற்பனை",
    get_in_touch: "தொடர்பு கொள்ளுங்கள்",
    breeds_label: "நாங்கள் என்ன வழங்குகிறோம்", breeds_title: "எங்கள் உயரிய ஆட்டு இனங்கள்",
    breeds_desc: "தமிழ்நாட்டில் மிகவும் விரும்பப்படும் இரண்டு ஆட்டு இனங்களை நாங்கள் வளர்க்கிறோம்.",
    breed1_name: "எட்டயபுரம் மயிலம்பாடி", breed1_origin: "📍 தமிழ்நாடு தேசிய இனம்",
    breed1_desc: "சிறந்த இறைச்சி தரம் மற்றும் உள்ளூர் காலநிலை நிலைமைகளுக்கு அனுகூலத்திற்கு அறியப்பட்ட ஒரு வலிமையான இனம்.",
    breed1_f1: "அதிக இறைச்சி விளைச்சல்", breed1_f2: "வறட்சி-எதிர்ப்பு", breed1_f3: "பராமரிக்க எளிதானது", breed1_f4: "வலுவான நோய் எதிர்ப்பு சக்தி",
    breed2_name: "ஆந்திர நெல்லு ஜுடுபி", breed2_origin: "📍 ஆந்திர பிரதேஷ் பாரம்பரிய இனம்",
    breed2_desc: "அதன் சிறந்த வளர்ச்சி விகிதம் மற்றும் விதிவிலக்கான இறைச்சி தரத்திற்கு அங்கீகரிக்கப்பட்ட ஒரு உயரிய ஆந்திர இனம்.",
    breed2_f1: "வேகமான வளர்ச்சி விகிதம்", breed2_f2: "பெரிய உடல் கட்டமைப்பு", breed2_f3: "சிறந்த இறைச்சி தரம்", breed2_f4: "அதிக சந்தை தேவை",
    enquire_breed: "இந்த இனத்தைப் பற்றி விசாரிக்க", popular_choice: "பிரபலமான தேர்வு",
    why_label: "ஏன் எங்களை தேர்வு செய்யணும்", why_title: "The PMV Difference",
    why1_h: "Fully Vaccinated", why1_p: "All goats are vaccinated and health-certified before sale.",
    why2_h: "Natural Feeding", why2_p: "Raised on natural pasture and nutritious feed for optimal health.",
    why3_h: "Honest Pricing", why3_p: "Fair, transparent pricing with no hidden charges.",
    why4_h: "Transport Support", why4_p: "We assist with arranging transport for your purchased goats safely.",
    why5_h: "After-Sale Support", why5_p: "We stay in touch after purchase to help you care for your animals.",
    why6_h: "Trusted Reputation", why6_p: "Over 200 happy customers across Tamil Nadu and neighbouring states.",
    gallery_label: "எங்கள் பண்ணை", gallery_title: "புகைப்பட தொகுப்பு",
    gallery_desc: "PMV ஆட்டு பண்ணையின் ஒரு பார்வை.",
    testimonials_label: "வாடிக்கையாளர் மதிப்புரைகள்", testimonials_title: "எங்கள் வாங்குபவர்கள் என்ன சொல்கிறார்கள்",
    test1_text: "\"சிறந்த தரமான ஆடுகள்! நான் வாங்கிய மயிலம்பாடி இனம் ஆரோக்கியமாகவும் நன்றாக வளர்கிறது.\"",
    test2_text: "\"மிகவும் நேர்மையான மற்றும் வெளிப்படையான கொடுக்கல் வாங்கல். நிச்சயமாக மீண்டும் வாங்குவேன்.\"",
    test3_text: "\"ஆந்திர நெல்லு ஜுடுபி ஆடுகள் அற்புதமானவை. PMV ஆட்டு பண்ணைக்கு நன்றி!\"",
    contact_label: "எங்களை அணுகுங்கள்", contact_title: "தொடர்பு கொள்ளுங்கள்",
    contact_intro: "ஆடுகள் வாங்க விரும்புகிறீர்களா? நாங்கள் உங்களிடமிருந்து கேட்க விரும்புகிறோம்.",
    location_label: "இடம்", phone_label: "தொலைபேசி / வாட்ஸ்அப்", hours_label: "கிடைக்கும் நேரம்", hours_val: "திங்கள்–சனி: காலை 8 – மாலை 7",
    whatsapp_btn: "💬 வாட்ஸ்அப்பில் அரட்டை",
    form_title: "விசாரணை அனுப்பு", form_name: "உங்கள் பெயர்", form_phone: "தொலைபேசி எண்", form_breed: "விரும்பும் இனம்",
    form_breed_opt0: "ஒரு இனத்தை தேர்ந்தெடுக்கவும்", form_breed_opt3: "இரண்டும் / தெரியவில்லை",
    form_msg: "செய்தி", form_submit: "விசாரணை அனுப்பு",
    form_success: "✅ உங்கள் விசாரணை அனுப்பப்பட்டது!",
    footer_tagline: "தரமான ஆடுகள் | கிருஷ்ணகிரி, தமிழ்நாடு"
  },
  te: {
    location: "కృష్ణగిరి, తమిళనాడు",
    nav_home: "హోమ్", nav_about: "మా గురించి", nav_breeds: "మా జాతులు", nav_gallery: "గ్యాలరీ", nav_contact: "సంప్రదించండి",
    hero_badge: "కృష్ణగిరి, తమిళనాడులో స్థాపించబడింది",
    hero_title: "ప్రీమియం నాణ్యత", hero_title_span: "మేక పొల",
    hero_desc: "ఎట్టయపురం మయిలంబాడి & ఆంధ్ర నెల్లు జుడుపి జాతులలో నిపుణత.",
    hero_btn1: "మా జాతులు చూడండి", hero_btn2: "ఇప్పుడే విచారించండి", scroll_down: "▼ క్రిందికి స్క్రోల్ చేయండి",
    stat1: "విక్రయించిన మేకలు", stat2: "సంవత్సరాల అనుభవం", stat3: "ప్రీమియం జాతులు", stat4: "సంతోషకరమైన కస్టమర్లు",
    about_label: "మేము ఎవరు", about_title: "విశ్వాసం & నాణ్యతపై నిర్మించిన కుటుంబ పొలం", about_badge: "100% విశ్వసనీయ పొలం",
    about_text1: "PMV మేక పొలం కృష్ణగిరి, తమిళనాడులో ఉన్న అంకిమైన మేక పెంపకం పొలం.",
    about_text2: "మా మేకలు సరైన పోషణ మరియు పశువైద్య సంరక్షణతో శుభ్రమైన, సహజ వాతావరణంలో పెంచబడతాయి.",
    about_li1: "✅ వ్యాక్సినేట్ & ఆరోగ్య తనిఖీ", about_li2: "✅ సహజ ఓపెన్ రేంజ్ వాతావరణం",
    about_li3: "✅ 200+ రైతులచే విశ్వసించబడింది", about_li4: "✅ పొలం-నేరుగా-కొనుగోలుదారు అమ్మకాలు",
    get_in_touch: "సంప్రదించండి",
    breeds_label: "మేమేం అందిస్తాం", breeds_title: "మా ప్రీమియం మేక జాతులు",
    breeds_desc: "తమిళనాడులో అత్యంత ఆదరణ పొందిన రెండు మేక జాతులను మేము పెంచుతాం.",
    breed1_name: "ఎట్టయపురం మయిలంబాడి", breed1_origin: "📍 తమిళనాడు స్థానిక జాతి",
    breed1_desc: "అద్భుతమైన మాంసం నాణ్యత మరియు స్థానిక వాతావరణ పరిస్థితులకు అనుకూలత కోసం తెలిసిన దృఢమైన జాతి.",
    breed1_f1: "అధిక మాంసం దిగుబడి", breed1_f2: "కరువు-నిరోధకత", breed1_f3: "సులభంగా నిర్వహించవచ్చు", breed1_f4: "బలమైన రోగనిరోధక శక్తి",
    breed2_name: "ఆంధ్ర నెల్లు జుడుపి", breed2_origin: "📍 ఆంధ్రప్రదేశ్ వారసత్వ జాతి",
    breed2_desc: "దాని అత్యుత్తమ వృద్ధి రేటు మరియు అసాధారణ మాంసం నాణ్యతకు గుర్తింపు పొందిన ప్రీమియం ఆంధ్ర జాతి.",
    breed2_f1: "వేగవంతమైన వృద్ధి రేటు", breed2_f2: "పెద్ద శరీర నిర్మాణం", breed2_f3: "అత్యుత్తమ మాంసం నాణ్యత", breed2_f4: "అధిక మార్కెట్ డిమాండ్",
    enquire_breed: "ఈ జాతి గురించి విచారించండి", popular_choice: "జనాదరణ పొందిన ఎంపిక",
    why_label: "మమ్మల్నెందుకు ఎంచుకోవాలి", why_title: "PMV వ్యత్యాసం",
    why1_h: "పూర్తిగా వ్యాక్సినేట్ చేయబడింది", why1_p: "అన్ని మేకలు అమ్మకానికి ముందు వ్యాక్సినేట్ చేయబడతాయి.",
    why2_h: "సహజ ఆహారం", why2_p: "అనుకూల ఆరోగ్యం కోసం సహజ మేత మరియు పోషకాహారంపై పెంచబడతాయి.",
    why3_h: "నిజాయితీ ధర", why3_p: "దాచిన చార్జీలు లేని న్యాయమైన ధర.",
    why4_h: "రవాణా మద్దతు", why4_p: "మీరు కొనుగోలు చేసిన మేకలను సురక్షితంగా రవాణా చేయడానికి సహాయం చేస్తాం.",
    why5_h: "అమ్మకం తర్వాత మద్దతు", why5_p: "కొనుగోలు తర్వాత సంప్రదింపులో ఉంటాం.",
    why6_h: "విశ్వసనీయ ప్రతిష్ఠ", why6_p: "200 మంది కంటే ఎక్కువ సంతోషకరమైన కస్టమర్లు.",
    gallery_label: "మా పొలం", gallery_title: "ఫోటో గ్యాలరీ",
    gallery_desc: "PMV మేక పొలంలో ఒక క్షణం.",
    testimonials_label: "కస్టమర్ సమీక్షలు", testimonials_title: "మా కొనుగోలుదారులు ఏమి చెప్తారు",
    test1_text: "\"అద్భుతమైన నాణ్యత మేకలు! నేను కొనుగోలు చేసిన మయిలంబాడి జాతి ఆరోగ్యంగా బాగా పెరుగుతోంది.\"",
    test2_text: "\"చాలా నిజాయితీగా వ్యవహరించారు. మేకలు వివరించినట్లే ఉన్నాయి.\"",
    test3_text: "\"ఆంధ్ర నెల్లు జుడుపి మేకలు అద్భుతంగా ఉన్నాయి. PMV మేక పొలానికి ధన్యవాదాలు!\"",
    contact_label: "మమ్మల్ని చేరుకోండి", contact_title: "సంప్రదించండి",
    contact_intro: "మేకలు కొనుగోలు చేయాలనుకుంటున్నారా?",
    location_label: "స్థానం", phone_label: "ఫోన్ / వాట్సాప్", hours_label: "అందుబాటు సమయాలు", hours_val: "సోమ–శని: ఉ.8 – సా.7",
    whatsapp_btn: "💬 వాట్సాప్‌లో చాట్ చేయండి",
    form_title: "విచారణ పంపండి", form_name: "మీ పేరు", form_phone: "ఫోన్ నంబర్", form_breed: "ఆసక్తి ఉన్న జాతి",
    form_breed_opt0: "ఒక జాతిని ఎంచుకోండి", form_breed_opt3: "రెండూ / తెలియదు",
    form_msg: "సందేశం", form_submit: "విచారణ పంపండి",
    form_success: "✅ మీ విచారణ పంపబడింది!",
    footer_tagline: "నాణ్యత మేకలు | కృష్ణగిరి, తమిళనాడు"
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    const langMap = { en: ['en','english','EN'], ta: ['தமிழ்'], te: ['తె', 'తెలుగు'] };
    const text = btn.textContent.trim();
    const matchArr = langMap[lang] || [];
    if (matchArr.some(m => text.toLowerCase().includes(m.toLowerCase()))) btn.classList.add('active');
  });
  document.documentElement.lang = lang === 'ta' ? 'ta' : lang === 'te' ? 'te' : 'en';
}

// ===========================
//  HERO SLIDESHOW
// ===========================
const defaultSlides = [
  { src: 'images/goat1.jpeg', caption: 'PMV Goat Farm – Our Herd' },
  { src: 'images/goat2.jpg',  caption: 'Ettayapuram Mayilambadi Breed' },
  { src: 'images/goat3.jpeg', caption: 'Natural Free-Range Environment' },
  { src: 'images/goat4.jpg',  caption: 'PMV Goat Farm, Krishnagiri' },
];
let slides = defaultSlides.slice();
let currentSlide = 0;
let slideInterval;

function renderSlideshow() {
  const container = document.getElementById('heroSlideshow');
  const dotsContainer = document.getElementById('slideDots');
  container.innerHTML = '';
  dotsContainer.innerHTML = '';
  slides.forEach((slide, i) => {
    const div = document.createElement('div');
    div.className = 'slide' + (i === currentSlide ? ' active' : '');
    if (slide.src) div.style.backgroundImage = 'url(' + slide.src + ')';
    div.appendChild(Object.assign(document.createElement('div'), { className: 'slide-overlay' }));
    container.appendChild(div);
    const dot = document.createElement('button');
    dot.className = 'slide-dot' + (i === currentSlide ? ' active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-selected', i === currentSlide ? 'true' : 'false');
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    dot.addEventListener('click', () => { goToSlide(i); startSlideshow(); });
    dotsContainer.appendChild(dot);
  });
}

function goToSlide(idx) {
  const slideEls = document.querySelectorAll('.slide');
  const dotEls = document.querySelectorAll('.slide-dot');
  if (slideEls[currentSlide]) slideEls[currentSlide].classList.remove('active');
  if (dotEls[currentSlide]) { dotEls[currentSlide].classList.remove('active'); dotEls[currentSlide].setAttribute('aria-selected','false'); }
  currentSlide = ((idx % slides.length) + slides.length) % slides.length;
  if (slideEls[currentSlide]) slideEls[currentSlide].classList.add('active');
  if (dotEls[currentSlide]) { dotEls[currentSlide].classList.add('active'); dotEls[currentSlide].setAttribute('aria-selected','true'); }
}

function startSlideshow() {
  clearInterval(slideInterval);
  slideInterval = setInterval(() => goToSlide(currentSlide + 1), 4800);
}

document.getElementById('slidePrev').addEventListener('click', () => { goToSlide(currentSlide - 1); startSlideshow(); });
document.getElementById('slideNext').addEventListener('click', () => { goToSlide(currentSlide + 1); startSlideshow(); });
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') { goToSlide(currentSlide - 1); startSlideshow(); }
  if (e.key === 'ArrowRight') { goToSlide(currentSlide + 1); startSlideshow(); }
  if (e.key === 'Escape') closeLightbox();
});

// ===========================
//  GALLERY — SUPABASE
// ===========================
const categoryColors = {
  Goats: 'linear-gradient(135deg,#1b4332,#40916c)',
  Farm: 'linear-gradient(135deg,#2d6a4f,#52b788)',
  Customers: 'linear-gradient(135deg,#40916c,#74c69d)',
};
const categoryIcons = { Goats: '🐐', Farm: '🌿', Customers: '😊' };
let gallery = [];
let activeFilter = 'All';

async function loadGallery() {
  try {
    const { data, error } = await supabase.from('gallery').select('*').order('created_at', { ascending: false });
    if (error) throw error;
    gallery = data || [];
  } catch(e) {
    console.error('Gallery load error:', e);
    gallery = [];
  }
  renderGallery();
  renderAdminList();
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  const filtered = activeFilter === 'All' ? gallery : gallery.filter(g => g.category === activeFilter);
  if (filtered.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:#777;padding:40px;grid-column:1/-1">No photos in this category yet.</p>';
    return;
  }
  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item reveal';
    div.setAttribute('role', 'listitem');
    div.setAttribute('tabindex', item.url ? '0' : '-1');
    if (item.url) {
      div.innerHTML =
        '<img src="' + item.url + '" alt="' + (item.caption || 'PMV Farm photo') + '" loading="lazy"/>' +
        '<div class="gallery-item-overlay" aria-hidden="true">🔍 View</div>' +
        '<div class="gallery-caption">' + (item.caption || 'PMV Farm') + '</div>';
      const openLB = () => {
        document.getElementById('lightboxImg').src = item.url;
        document.getElementById('lightboxCaption').textContent = item.caption || '';
        const lb = document.getElementById('lightbox');
        lb.hidden = false;
        lb.querySelector('.lightbox-close').focus();
      };
      div.addEventListener('click', openLB);
      div.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB(); } });
    } else {
      const color = categoryColors[item.category] || categoryColors.Farm;
      const icon = categoryIcons[item.category] || '🐐';
      div.innerHTML =
        '<div class="gallery-placeholder" style="background:' + color + '" aria-hidden="true">' + icon + '</div>' +
        '<div class="gallery-caption">' + (item.caption || 'PMV Farm') + '</div>';
    }
    grid.appendChild(div);
  });
  setTimeout(() => { document.querySelectorAll('.gallery-item.reveal').forEach(el => el.classList.add('visible')); }, 50);
}

function renderAdminList() {
  const list = document.getElementById('adminGalleryList');
  const count = document.getElementById('photoCount');
  if (!list) return;
  count.textContent = gallery.length;
  list.innerHTML = '';
  gallery.forEach(item => {
    const div = document.createElement('div');
    div.className = 'admin-gallery-item';
    const thumbHtml = item.url
      ? '<img class="admin-thumb" src="' + item.url + '" alt=""/>'
      : '<div class="admin-thumb" style="background:' + (categoryColors[item.category] || '#2d6a4f') + ';display:flex;align-items:center;justify-content:center;font-size:1.4rem">' + (categoryIcons[item.category] || '🐐') + '</div>';
    div.innerHTML = thumbHtml +
      '<div class="admin-item-info"><div class="admin-item-name">' + (item.caption || 'Photo') + '</div><div class="admin-item-cat">' + (item.category || 'Farm') + '</div></div>' +
      '<div class="admin-item-actions"><button class="admin-edit-btn" aria-label="Edit photo">✏️</button><button class="admin-del-btn" aria-label="Delete photo">🗑️</button></div>';
    div.querySelector('.admin-edit-btn').addEventListener('click', () => adminEditPhoto(item.id));
    div.querySelector('.admin-del-btn').addEventListener('click', () => adminDeletePhoto(item.id));
    list.appendChild(div);
  });
}

document.querySelectorAll('.gallery-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
    btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');
    activeFilter = btn.getAttribute('data-cat');
    renderGallery();
  });
});

// ===========================
//  ADMIN – GALLERY
// ===========================
async function adminAddPhoto() {
  const urlInput  = document.getElementById('adminImgUrl');
  const fileInput = document.getElementById('adminImgFile');
  const caption   = document.getElementById('adminImgCaption').value.trim();
  const category  = document.getElementById('adminImgCat').value;

  async function doAdd(url) {
    const { data, error } = await supabase.from('gallery').insert([{ url: url || null, caption: caption || 'PMV Farm Photo', category }]).select();
    if (error) throw error;
    gallery.unshift(data[0]);
    renderGallery(); renderAdminList();
    urlInput.value = ''; if (fileInput) fileInput.value = '';
    document.getElementById('adminImgCaption').value = '';
    showAdminToast('✅ Photo added!');
  }

  try {
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (file) {
      const fileName = Date.now() + '-' + file.name.replace(/\s/g, '_');
      const { error: uploadError } = await supabase.storage.from('goat-images').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('goat-images').getPublicUrl(fileName);
      await doAdd(data.publicUrl);
    } else if (urlInput.value.trim()) {
      await doAdd(urlInput.value.trim());
    } else {
      await doAdd(null);
    }
  } catch(e) { alert('Error adding photo: ' + e.message); }
}

async function adminDeletePhoto(id) {
  if (!confirm('Delete this photo?')) return;
  try {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (error) throw error;
    gallery = gallery.filter(g => g.id !== id);
    renderGallery(); renderAdminList();
    showAdminToast('🗑️ Photo deleted.');
  } catch(e) { alert('Error deleting: ' + e.message); }
}

let currentEditId = null;

function adminEditPhoto(id) {
  currentEditId = id;
  const item = gallery.find(g => g.id === id);
  if (!item) return;
  const noImg = 'data:image/svg+xml,%3Csvg width="200" height="120" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="200" height="120" fill="%23333"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23888" font-size="14"%3ENo image%3C/text%3E%3C/svg%3E';
  const preview = document.getElementById('editPhotoPreview');
  preview.src = item.url || noImg;
  document.getElementById('editPhotoUrl').value = item.url || '';
  document.getElementById('editPhotoCaption').value = item.caption || '';
  document.getElementById('editPhotoCat').value = item.category || 'Farm';
  document.getElementById('editPhotoFile').value = '';
  document.getElementById('editPhotoUrl').oninput = function() { preview.src = this.value.trim() || noImg; };
  document.getElementById('editPhotoFile').onchange = function() {
    if (this.files && this.files[0]) { const r = new FileReader(); r.onload = e => { preview.src = e.target.result; }; r.readAsDataURL(this.files[0]); }
  };
  document.getElementById('adminEditModal').style.display = 'flex';
}

function closeEditModal() { document.getElementById('adminEditModal').style.display = 'none'; currentEditId = null; }

async function adminSaveEditPhoto() {
  if (!currentEditId) return;
  const urlInput  = document.getElementById('editPhotoUrl');
  const fileInput = document.getElementById('editPhotoFile');
  const caption   = document.getElementById('editPhotoCaption').value.trim();
  const category  = document.getElementById('editPhotoCat').value;

  async function doSave(url) {
    const { error } = await supabase.from('gallery').update({ url: url || null, caption: caption || 'PMV Farm Photo', category }).eq('id', currentEditId);
    if (error) throw error;
    const idx = gallery.findIndex(g => g.id === currentEditId);
    if (idx !== -1) { gallery[idx].url = url || null; gallery[idx].caption = caption; gallery[idx].category = category; }
    renderGallery(); renderAdminList();
    closeEditModal();
    showAdminToast('✅ Photo saved!');
  }

  try {
    const file = fileInput && fileInput.files && fileInput.files[0];
    if (file) {
      const fileName = Date.now() + '-' + file.name.replace(/\s/g, '_');
      const { error: uploadError } = await supabase.storage.from('goat-images').upload(fileName, file);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('goat-images').getPublicUrl(fileName);
      await doSave(data.publicUrl);
    } else if (urlInput.value.trim()) {
      await doSave(urlInput.value.trim());
    } else {
      await doSave(null);
    }
  } catch(e) { alert('Error saving: ' + e.message); }
}

// ===========================
//  BREEDS — SUPABASE
// ===========================
let breedsData = {};

async function loadBreeds() {
  try {
    const { data, error } = await supabase.from('breeds').select('*').order('created_at');
    if (error) throw error;
    breedsData = {};
    (data || []).forEach(b => { breedsData[b.id] = b; });
  } catch(e) { console.error('Breeds load error:', e); }
  renderBreedCards();
  adminRenderBreeds();
}

function renderBreedCards() {
  const container = document.querySelector('.breeds-grid');
  if (!container) return;
  container.innerHTML = '';
  const breeds = Object.values(breedsData);
  if (breeds.length === 0) {
    // Show default hardcoded breeds if database is empty
    container.innerHTML = `
      <article class="breed-card" aria-label="Ettayapuram Mayilambadi breed">
        <div class="breed-icon"><img src="images/Breed1.jpeg" alt="Ettayapuram Mayilambadi goat" style="width:130px;height:130px;object-fit:cover;border-radius:50%;border:3px solid var(--green-light);"/></div>
        <h3>Ettayapuram Mayilambadi</h3>
        <p class="breed-origin">📍 Tamil Nadu Native Breed</p>
        <p class="breed-desc">A hardy, indigenous breed known for excellent meat quality and adaptability to local climate conditions.</p>
        <ul class="breed-features"><li>High meat yield</li><li>Drought-resistant</li><li>Easy to maintain</li><li>Strong immune system</li></ul>
        <div class="breed-ctas"><a href="#contact" class="btn btn-primary breed-btn">Enquire About This Breed</a><a href="https://wa.me/919361908550" class="btn btn-whatsapp-sm" target="_blank">💬</a></div>
      </article>
      <article class="breed-card featured" aria-label="Andhra Nellore Jodipi breed">
        <div class="breed-badge-tag">Popular Choice</div>
        <div class="breed-icon"><img src="images/goat1.jpeg" alt="Andhra Nellore Jodipi goat" style="width:130px;height:130px;object-fit:cover;border-radius:50%;border:3px solid var(--green-light);"/></div>
        <h3>Andhra Nellore Jodipi</h3>
        <p class="breed-origin">📍 Andhra Pradesh Heritage Breed</p>
        <p class="breed-desc">A premium Andhra breed recognized for its superior growth rate, larger frame, and exceptional meat quality.</p>
        <ul class="breed-features"><li>Fast growth rate</li><li>Large body frame</li><li>Superior meat quality</li><li>High market demand</li></ul>
        <div class="breed-ctas"><a href="#contact" class="btn btn-gold breed-btn">Enquire About This Breed</a><a href="https://wa.me/919361908550" class="btn btn-whatsapp-sm" target="_blank">💬</a></div>
      </article>`;
    return;
  }
  breeds.forEach(breed => {
    const features = Array.isArray(breed.features) ? breed.features : [];
    const article = document.createElement('article');
    article.className = 'breed-card' + (breed.featured ? ' featured' : '');
    article.setAttribute('aria-label', breed.name + ' breed');
    article.innerHTML = `
      ${breed.featured ? '<div class="breed-badge-tag">Popular Choice</div>' : ''}
      <div class="breed-icon"><img src="${breed.image_url || 'images/Breed1.jpeg'}" alt="${breed.name} goat" style="width:130px;height:130px;object-fit:cover;border-radius:50%;border:3px solid var(--green-light);"/></div>
      <h3>${breed.name}</h3>
      <p class="breed-origin">${breed.origin}</p>
      <p class="breed-desc">${breed.description}</p>
      <ul class="breed-features">${features.map(f => `<li>${f}</li>`).join('')}</ul>
      <div class="breed-ctas">
        <a href="#contact" class="btn ${breed.featured ? 'btn-gold' : 'btn-primary'} breed-btn">Enquire About This Breed</a>
        <a href="https://wa.me/919361908550" class="btn btn-whatsapp-sm" target="_blank" rel="noopener noreferrer">💬</a>
      </div>`;
    container.appendChild(article);
  });
}

function adminRenderBreeds() {
  const container = document.getElementById('adminBreedsList');
  if (!container) return;
  container.innerHTML = '';
  Object.values(breedsData).forEach(breed => {
    const div = document.createElement('div');
    div.className = 'admin-breed-item';
    div.innerHTML = `
      <div class="admin-breed-info">
        <img src="${breed.image_url || 'images/Breed1.jpeg'}" alt="Breed" style="width:60px;height:60px;object-fit:cover;border-radius:8px;margin-right:12px"/>
        <div><div class="admin-breed-name">${breed.name}</div><div class="admin-breed-origin">${breed.origin}</div></div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-edit-btn" onclick="adminEditBreed('${breed.id}')">✏️ Edit</button>
        <button class="admin-del-btn" onclick="adminDeleteBreed('${breed.id}')">🗑️ Delete</button>
      </div>`;
    container.appendChild(div);
  });
}

function adminEditBreed(id) {
  const breed = breedsData[id];
  if (!breed) return;
  document.getElementById('breedKey').value = id;
  document.getElementById('breedName').value = breed.name;
  document.getElementById('breedOrigin').value = breed.origin;
  document.getElementById('breedDesc').value = breed.description;
  document.getElementById('breedImage').value = breed.image_url || '';
  document.getElementById('breedFeaturesText').value = (Array.isArray(breed.features) ? breed.features : []).join('\n');
  document.getElementById('breedFeatured').checked = breed.featured || false;
  document.getElementById('adminBreedModal').style.display = 'block';
}

function adminAddNewBreed() {
  ['breedKey','breedName','breedOrigin','breedDesc','breedImage','breedFeaturesText'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('breedFeatured').checked = false;
  document.getElementById('adminBreedModal').style.display = 'block';
}

async function adminSaveBreed() {
  const id       = document.getElementById('breedKey').value;
  const name     = document.getElementById('breedName').value.trim();
  const origin   = document.getElementById('breedOrigin').value.trim();
  const desc     = document.getElementById('breedDesc').value.trim();
  const imageUrl = document.getElementById('breedImage').value.trim();
  const featured = document.getElementById('breedFeatured').checked;
  const features = document.getElementById('breedFeaturesText').value.split('\n').map(f => f.trim()).filter(f => f);
  if (!name || !origin || !desc) { alert('Please fill in all required fields'); return; }
  try {
    if (id) {
      const { error } = await supabase.from('breeds').update({ name, origin, description: desc, image_url: imageUrl, featured, features }).eq('id', id);
      if (error) throw error;
      breedsData[id] = { ...breedsData[id], name, origin, description: desc, image_url: imageUrl, featured, features };
    } else {
      const { data, error } = await supabase.from('breeds').insert([{ name, origin, description: desc, image_url: imageUrl, featured, features }]).select();
      if (error) throw error;
      breedsData[data[0].id] = data[0];
    }
    renderBreedCards(); adminRenderBreeds();
    closeAdminBreedModal();
    showAdminToast('✅ Breed saved!');
  } catch(e) { alert('Error saving breed: ' + e.message); }
}

async function adminDeleteBreed(id) {
  if (!confirm('Delete this breed? This cannot be undone.')) return;
  try {
    const { error } = await supabase.from('breeds').delete().eq('id', id);
    if (error) throw error;
    delete breedsData[id];
    renderBreedCards(); adminRenderBreeds();
    showAdminToast('🗑️ Breed deleted.');
  } catch(e) { alert('Error deleting breed: ' + e.message); }
}

function closeAdminBreedModal() { document.getElementById('adminBreedModal').style.display = 'none'; }

// ===========================
//  SITE CONTENT — SUPABASE
// ===========================
let homeData    = { badge:'Est. in Krishnagiri, Tamil Nadu', title:'Premium Quality', titleSpan:'Goat Farm', description:'Specialising in Ettayapuram Mayilambadi & Andhra Nellore Jodipi breeds — raised with care, sold with trust.', btn1Text:'View Our Breeds', btn2Text:'Enquire Now' };
let aboutData   = { label:'Who We Are', title:'A Family Farm Built on Trust & Quality', badge:'100% Trusted Farm', text1:'PMV Goat Farm is a dedicated goat breeding farm located in Krishnagiri, Tamil Nadu.', text2:'Our goats are raised in a clean, natural environment with proper nutrition and veterinary care.', imageUrl:'images/about.jpeg', listItems:['✅ Vaccinated & Health-Checked','✅ Natural Free-Range Environment','✅ Trusted by 200+ Farmers','✅ Direct Farm-to-Buyer Sales'] };
let contactData = { location:'Krishnagiri, Tamil Nadu, India', phone1:'+91 93619 08550', phone2:'+91 86759 04793', hours:'Mon–Sun: 8am – 7pm', whatsappLink:'https://wa.me/919361908550' };
let faqData = [
  { question:'Do you deliver goats to other districts or states?', answer:'Yes, we assist with transport arrangements across Tamil Nadu and neighbouring states including Andhra Pradesh and Karnataka.' },
  { question:'Are the goats vaccinated and health-certified?', answer:'Yes, absolutely. All goats at PMV Goat Farm are fully vaccinated and health-checked by a veterinarian before sale.' },
  { question:'What is the minimum order quantity?', answer:'We sell single goats as well as bulk orders. Please reach out for pricing.' },
  { question:'Can I visit the farm before purchasing?', answer:'Absolutely! We welcome farm visits Monday–Sunday, 8am to 7pm. Please call or WhatsApp us in advance.' },
  { question:'What payment methods do you accept?', answer:'We accept cash, bank transfer (NEFT/RTGS), and UPI payments. Our pricing is fully transparent with no hidden charges.' }
];

async function loadSiteContent() {
  try {
    const { data, error } = await supabase.from('site_content').select('*');
    if (error) throw error;
    (data || []).forEach(row => {
      try {
        if (row.key === 'home')    homeData    = JSON.parse(row.value);
        if (row.key === 'about')   aboutData   = JSON.parse(row.value);
        if (row.key === 'contact') contactData = JSON.parse(row.value);
        if (row.key === 'faq')     faqData     = JSON.parse(row.value);
      } catch(e) {}
    });
  } catch(e) { console.log('Using default content'); }
  renderHomeSection(); renderAboutSection(); renderContactSection(); renderFAQSection();
}

async function saveSiteContent(key, value) {
  const { error } = await supabase.from('site_content').upsert({ key, value: JSON.stringify(value) }, { onConflict: 'key' });
  if (error) throw error;
}

// ===========================
//  ADMIN TOAST
// ===========================
function showAdminToast(msg) {
  let toast = document.getElementById('adminToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'adminToast';
    toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#40916c;color:#fff;padding:10px 22px;border-radius:20px;font-size:14px;font-weight:600;z-index:99999;opacity:0;transition:opacity 0.3s;pointer-events:none;white-space:nowrap;box-shadow:0 4px 16px rgba(0,0,0,0.4)';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ===========================
//  HOME ADMIN
// ===========================
function adminEditHome() {
  document.getElementById('homeBadge').value = homeData.badge;
  document.getElementById('homeTitle').value = homeData.title;
  document.getElementById('homeTitleSpan').value = homeData.titleSpan;
  document.getElementById('homeDesc').value = homeData.description;
  document.getElementById('homeBtn1').value = homeData.btn1Text;
  document.getElementById('homeBtn2').value = homeData.btn2Text;
  document.getElementById('adminHomeModal').style.display = 'block';
}

async function adminSaveHome() {
  const badge = document.getElementById('homeBadge').value.trim();
  const title = document.getElementById('homeTitle').value.trim();
  const titleSpan = document.getElementById('homeTitleSpan').value.trim();
  const description = document.getElementById('homeDesc').value.trim();
  const btn1Text = document.getElementById('homeBtn1').value.trim();
  const btn2Text = document.getElementById('homeBtn2').value.trim();
  if (!badge || !title || !titleSpan || !description) { alert('Please fill in all required fields'); return; }
  homeData = { badge, title, titleSpan, description, btn1Text, btn2Text };
  try { await saveSiteContent('home', homeData); renderHomeSection(); closeAdminHomeModal(); showAdminToast('✅ Home saved!'); }
  catch(e) { alert('Error: ' + e.message); }
}

function closeAdminHomeModal() { document.getElementById('adminHomeModal').style.display = 'none'; }

function renderHomeSection() {
  const heroBadge = document.querySelector('.hero-badge');
  if (heroBadge) heroBadge.textContent = homeData.badge;
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = `${homeData.title}<br/><span>${homeData.titleSpan}</span>`;
  const heroDesc = document.querySelector('.hero-desc');
  if (heroDesc) heroDesc.textContent = homeData.description;
  const heroButtons = document.querySelectorAll('.hero-buttons .btn');
  if (heroButtons[0]) heroButtons[0].textContent = homeData.btn1Text;
  if (heroButtons[1]) heroButtons[1].textContent = homeData.btn2Text;
}

// ===========================
//  ABOUT ADMIN
// ===========================
function adminEditAbout() {
  document.getElementById('aboutLabel').value = aboutData.label;
  document.getElementById('aboutTitle').value = aboutData.title;
  document.getElementById('aboutBadge').value = aboutData.badge;
  document.getElementById('aboutText1').value = aboutData.text1;
  document.getElementById('aboutText2').value = aboutData.text2;
  document.getElementById('aboutImage').value = aboutData.imageUrl;
  document.getElementById('aboutListItems').value = aboutData.listItems.join('\n');
  document.getElementById('adminAboutModal').style.display = 'block';
}

async function adminSaveAbout() {
  const label = document.getElementById('aboutLabel').value.trim();
  const title = document.getElementById('aboutTitle').value.trim();
  const badge = document.getElementById('aboutBadge').value.trim();
  const text1 = document.getElementById('aboutText1').value.trim();
  const text2 = document.getElementById('aboutText2').value.trim();
  const image = document.getElementById('aboutImage').value.trim();
  const listItems = document.getElementById('aboutListItems').value.split('\n').map(i => i.trim()).filter(i => i);
  if (!label || !title || !text1 || !text2) { alert('Please fill in all required fields'); return; }
  aboutData = { label, title, badge, text1, text2, imageUrl: image, listItems };
  try { await saveSiteContent('about', aboutData); renderAboutSection(); closeAdminAboutModal(); showAdminToast('✅ About saved!'); }
  catch(e) { alert('Error: ' + e.message); }
}

function closeAdminAboutModal() { document.getElementById('adminAboutModal').style.display = 'none'; }

function renderAboutSection() {
  const aboutImg = document.querySelector('.about-img-real');
  if (aboutImg) aboutImg.src = aboutData.imageUrl;
  const aboutBadge = document.querySelector('.about-badge');
  if (aboutBadge) aboutBadge.textContent = aboutData.badge;
  const sectionLabel = document.querySelector('.about-content .section-label');
  if (sectionLabel) sectionLabel.textContent = aboutData.label;
  const sectionTitle = document.querySelector('.about-content .section-title');
  if (sectionTitle) sectionTitle.textContent = aboutData.title;
  const texts = document.querySelectorAll('.about-text');
  if (texts[0]) texts[0].textContent = aboutData.text1;
  if (texts[1]) texts[1].textContent = aboutData.text2;
  const listContainer = document.querySelector('.about-list');
  if (listContainer) listContainer.innerHTML = aboutData.listItems.map(item => `<li>${item}</li>`).join('');
}

// ===========================
//  CONTACT ADMIN
// ===========================
function adminEditContact() {
  document.getElementById('contactLocation').value = contactData.location;
  document.getElementById('contactPhone1').value   = contactData.phone1;
  document.getElementById('contactPhone2').value   = contactData.phone2;
  document.getElementById('contactHours').value    = contactData.hours;
  document.getElementById('contactWhatsapp').value = contactData.whatsappLink;
  document.getElementById('adminContactModal').style.display = 'block';
}

async function adminSaveContact() {
  const location = document.getElementById('contactLocation').value.trim();
  const phone1   = document.getElementById('contactPhone1').value.trim();
  const phone2   = document.getElementById('contactPhone2').value.trim();
  const hours    = document.getElementById('contactHours').value.trim();
  const whatsapp = document.getElementById('contactWhatsapp').value.trim();
  if (!location || !phone1 || !hours) { alert('Please fill in all required fields'); return; }
  contactData = { location, phone1, phone2, hours, whatsappLink: whatsapp };
  try { await saveSiteContent('contact', contactData); renderContactSection(); closeAdminContactModal(); showAdminToast('✅ Contact saved!'); }
  catch(e) { alert('Error: ' + e.message); }
}

function closeAdminContactModal() { document.getElementById('adminContactModal').style.display = 'none'; }

function renderContactSection() {
  const hoursText = document.querySelector('[data-key="hours_val"]');
  if (hoursText) hoursText.textContent = contactData.hours;
}

// ===========================
//  FAQ ADMIN
// ===========================
function adminRenderFAQList() {
  const container = document.getElementById('adminFAQList');
  if (!container) return;
  container.innerHTML = '';
  faqData.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'admin-faq-item';
    div.innerHTML = `
      <div class="admin-faq-info">
        <div class="admin-faq-q">${item.question}</div>
        <div style="font-size:13px;color:#aaa;margin-top:6px">${item.answer.substring(0,80)}...</div>
      </div>
      <div class="admin-item-actions">
        <button class="admin-edit-btn" onclick="adminEditFAQ(${idx})">✏️ Edit</button>
        <button class="admin-del-btn" onclick="adminDeleteFAQ(${idx})">🗑️ Delete</button>
      </div>`;
    container.appendChild(div);
  });
  const count = document.getElementById('faqCount');
  if (count) count.textContent = faqData.length;
}

function adminAddNewFAQ() {
  document.getElementById('faqIdx').value = '';
  document.getElementById('faqQuestion').value = '';
  document.getElementById('faqAnswer').value = '';
  document.getElementById('adminFAQModal').style.display = 'block';
}

function adminEditFAQ(idx) {
  document.getElementById('faqIdx').value = idx;
  document.getElementById('faqQuestion').value = faqData[idx].question;
  document.getElementById('faqAnswer').value = faqData[idx].answer;
  document.getElementById('adminFAQModal').style.display = 'block';
}

async function adminSaveFAQ() {
  const idx      = document.getElementById('faqIdx').value;
  const question = document.getElementById('faqQuestion').value.trim();
  const answer   = document.getElementById('faqAnswer').value.trim();
  if (!question || !answer) { alert('Please fill in both question and answer'); return; }
  if (idx === '') faqData.push({ question, answer });
  else faqData[parseInt(idx)] = { question, answer };
  try { await saveSiteContent('faq', faqData); renderFAQSection(); adminRenderFAQList(); closeAdminFAQModal(); showAdminToast('✅ FAQ saved!'); }
  catch(e) { alert('Error: ' + e.message); }
}

async function adminDeleteFAQ(idx) {
  if (!confirm('Delete this FAQ item?')) return;
  faqData.splice(idx, 1);
  try { await saveSiteContent('faq', faqData); renderFAQSection(); adminRenderFAQList(); showAdminToast('🗑️ FAQ deleted.'); }
  catch(e) { alert('Error: ' + e.message); }
}

function closeAdminFAQModal() { document.getElementById('adminFAQModal').style.display = 'none'; }

function renderFAQSection() {
  const container = document.querySelector('.faq-list');
  if (!container) return;
  container.innerHTML = '';
  faqData.forEach(item => {
    const div = document.createElement('div');
    div.className = 'faq-item';
    div.setAttribute('role', 'listitem');
    div.innerHTML = `<button class="faq-question" aria-expanded="false">${item.question}<span class="faq-icon" aria-hidden="true">+</span></button><div class="faq-answer" hidden>${item.answer}</div>`;
    div.querySelector('.faq-question').addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const expanded = this.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-question').forEach(b => { b.setAttribute('aria-expanded','false'); b.nextElementSibling.hidden = true; });
      if (!expanded) { this.setAttribute('aria-expanded','true'); answer.hidden = false; }
    });
    container.appendChild(div);
  });
}

// ===========================
//  ADMIN PANEL LOGIN
// ===========================
const ADMIN_PASSWORD = 'PMVFarm@2024';
let adminLoggedIn = false;

function doAdminLogin() {
  const pass = document.getElementById('adminPass').value;
  if (pass === ADMIN_PASSWORD) {
    adminLoggedIn = true;
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminBody').style.display = 'block';
    renderAdminList(); adminRenderBreeds(); adminRenderFAQList();
  } else {
    document.getElementById('adminError').style.display = 'block';
  }
}

document.getElementById('adminPass').addEventListener('keydown', e => { if (e.key === 'Enter') doAdminLogin(); });

document.getElementById('adminToggle').addEventListener('click', () => {
  const panel = document.getElementById('adminPanel');
  panel.classList.add('open'); panel.removeAttribute('aria-hidden');
  if (adminLoggedIn) { document.getElementById('adminLogin').style.display = 'none'; document.getElementById('adminBody').style.display = 'block'; }
});

document.getElementById('adminClose').addEventListener('click', () => {
  const panel = document.getElementById('adminPanel');
  panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true');
});

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-content').forEach(tab => { tab.style.display = 'none'; });
  document.querySelectorAll('.admin-tab-btn').forEach(btn => { btn.classList.remove('active'); });
  const tab = document.getElementById(tabName + 'Tab');
  if (tab) tab.style.display = 'block';
  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  ['adminHomeModal','adminBreedModal','adminAboutModal','adminContactModal','adminFAQModal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', e => { if (e.target === el) el.style.display = 'none'; });
  });
  const editModal = document.getElementById('adminEditModal');
  if (editModal) editModal.addEventListener('click', e => { if (e.target === editModal) closeEditModal(); });
});

// ===========================
//  LIGHTBOX
// ===========================
function closeLightbox() { document.getElementById('lightbox').hidden = true; }

function openLogoLightbox() {
  document.getElementById('lightboxImg').src = 'images/logo.png';
  document.getElementById('lightboxCaption').textContent = 'PMV Goat Farm Logo';
  const lb = document.getElementById('lightbox');
  lb.hidden = false; lb.querySelector('.lightbox-close').focus();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', e => { if (e.target === document.getElementById('lightbox')) closeLightbox(); });

// ===========================
//  STICKY HEADER
// ===========================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  document.getElementById('header').classList.toggle('scrolled', scrollY > 60);
  toggleBackToTop();
  let current = '';
  document.querySelectorAll('section[id]').forEach(section => { if (scrollY >= section.offsetTop - 120) current = section.id; });
  document.querySelectorAll('.nav-link').forEach(link => { link.classList.toggle('active', link.getAttribute('href') === '#' + current); });
}, { passive: true });

// ===========================
//  HAMBURGER MENU
// ===========================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

document.querySelectorAll('.nav-link, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open'); hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  });
});

document.addEventListener('click', e => {
  if (nav.classList.contains('open') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open'); hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false'); document.body.style.overflow = '';
  }
});

// ===========================
//  SMOOTH SCROLL
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); const headerH = document.getElementById('header').offsetHeight; window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - headerH - 8, behavior: 'smooth' }); }
  });
});

// ===========================
//  COUNTER ANIMATION
// ===========================
let countersStarted = false;
const statsSection = document.querySelector('.stats');
if (statsSection) {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        countersStarted = true;
        document.querySelectorAll('.stat-number').forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const step = Math.ceil(target / (1800 / 16));
          let current = 0;
          const interval = setInterval(() => { current = Math.min(current + step, target); counter.textContent = current; if (current >= target) clearInterval(interval); }, 16);
        });
      }
    });
  }, { threshold: 0.3 }).observe(statsSection);
}

// ===========================
//  SCROLL REVEAL
// ===========================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.breed-card, .why-card, .testimonial-card, .stat-card, .about-grid, .contact-grid, .faq-item').forEach(el => {
  el.classList.add('reveal'); revealObserver.observe(el);
});

// ===========================
//  FAQ ACCORDION
// ===========================
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => { b.setAttribute('aria-expanded','false'); b.nextElementSibling.hidden = true; });
    if (!expanded) { btn.setAttribute('aria-expanded','true'); answer.hidden = false; }
  });
});

// ===========================
//  CONTACT FORM
// ===========================
document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const name  = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  if (!name || !phone) { alert('Please fill in your name and phone number.'); return; }
  const btn = this.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Sending…'; btn.disabled = true;
  try {
    const response = await fetch('https://formspree.io/f/xbdqaajl', { method:'POST', body: new FormData(this), headers:{'Accept':'application/json'} });
    if (response.ok) {
      this.reset();
      const success = document.getElementById('formSuccess');
      success.textContent = translations[currentLang].form_success || '✅ Enquiry sent!';
      success.classList.add('show');
      setTimeout(() => success.classList.remove('show'), 6000);
    } else { throw new Error('Failed'); }
  } catch(error) { alert('Error sending enquiry. Please try again or contact us directly.'); }
  finally { btn.textContent = originalText; btn.disabled = false; }
});

// ===========================
//  BACK TO TOP
// ===========================
function toggleBackToTop() { document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400); }
document.getElementById('backToTop').addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });

// ===========================
//  INIT
// ===========================
(async function init() {
  renderSlideshow();
  startSlideshow();
  await Promise.all([
    loadGallery(),
    loadBreeds(),
    loadSiteContent(),
  ]);
})();
