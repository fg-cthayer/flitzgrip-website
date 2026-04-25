const TRANSLATIONS = {
  en: {
    'nav-product':      'Product',
    'nav-ingredients':  'Ingredients',
    'nav-about':        'About',
    'nav-distributors': 'Distributors',
    'nav-buy':          'Coming Soon',

    'hero-tag':         'Handcrafted · Berlin, DE',
    'hero-h1':          'Built for hands<br>that <em>earn it.</em>',
    'hero-sub':         'Natural skin repair for climbers, sailors, rowers, and anyone whose hands work hard. 100% organic ingredients. Zero compromise.',
    'hero-btn-outline': 'Learn More',


    'problem-eyebrow':  'The Problem',
    'problem-h2':       'Chalk dries you out.<br>Rock tears you up.',
    'problem-p':        'Every session strips the natural oils from your skin. The cracks, the splits, the raw tips. They cost you holds, sessions, and progress. Most "fixes" are band-aids.',
    'solution-eyebrow': 'The Solution',
    'solution-h2':      'Repair that actually works.',
    'solution-p':       'FlitzGrip replaces what your skin loses. Eight organic ingredients. No fillers, no synthetic fragrance, no shortcuts. Apply after training. Wake up ready.',

    'product-eyebrow':  'Skin Repair Bar',
    'product-name':     'FlitzGrip<sup class="tm">™</sup>',
    'product-p':        'A solid, natural skin repair bar in a clip-on teardrop container. Clip it to your chalk bag. Use it after every session. The wax formula seals fissures, restores moisture, and gets out of your way.',
    'spec-weight':      'Weight',
    'spec-format':      'Format',
    'spec-format-val':  'Solid Bar',
    'spec-shelf':       'Shelf Life',
    'spec-shelf-val':   '6 months opened',
    'spec-made':        'Made in',
    'spec-ingredients': 'Ingredients',
    'spec-ing-val':     '100% Organic',
    'spec-certified':   'Certified',
    'rating-label':     'Be the first to review',
    'reviews-heading':  'Reviews',
    'reviews-tally':    'Be the first to review',
    'reviews-empty-p':  'No reviews yet. Be the first to review FlitzGrip when we launch.',

    'feat-1-name':      'Eco-Friendly Housing',
    'feat-1-desc':      '3D printed from plant-based PLA. Industrially biodegradable container.',
    'feat-2-name':      'Pure & Simple',
    'feat-2-desc':      'Natural resinous scent. No synthetic additives.',
    'feat-3-name':      '100% Natural',
    'feat-3-desc':      'Crafted entirely from certified organic, bio ingredients.',
    'feat-4-name':      'Climb-Ready Hydration',
    'feat-4-desc':      'Replenishes oils without over-softening. Maintains tough calluses.',
    'feat-5-name':      'Water-Free Formula',
    'feat-5-desc':      'Concentrated solid bar. No smear, no mess, no waste.',
    'feat-6-name':      "Climber's Companion",
    'feat-6-desc':      'Carabiner clip attaches directly to your chalk bag.',
    'feat-7-name':      'Handmade in Germany',
    'feat-7-desc':      'Small batches, consistent quality.',

    'ing-eyebrow':      "What's Inside",
    'ing-h2':           'Eight ingredients.<br>Zero fillers.',
    'ing-intro':        'Every ingredient earns its place. No synthetic fragrance, no water, no parabens. Just the things your skin actually needs to repair itself.',
    'ing-01-p':         'Forms a protective seal over cracks and fissures. Locks in moisture without blocking pores.',
    'ing-02-p':         "Chemically closest to your skin's own sebum. Replenishes what chalk and friction strip away.",
    'ing-03-p':         'Deep nourishment for dry, damaged skin. Softens calluses and helps restore skin condition.',
    'ing-04-p':         'Rich in vitamins A, D and E. Penetrates deeply to restore elasticity to overstressed skin.',
    'ing-05-p':         'Deeply moisturising and nourishing. Helps soften dry, thickened skin and supports the skin barrier.',
    'ing-06-p':         'Powerful antioxidant that fights free radicals. Reduces scarring and keeps skin supple long-term.',
    'ing-07-p':         'Lightweight carrier oil rich in linoleic acid. Supports skin barrier function and delivers the Vitamin E.',
    'ing-08-p':         'Anti-inflammatory extract with a long history of use on stressed, irritated skin. Calms redness and supports recovery.',
    'sourcing-number':  'Our Standard',
    'sourcing-latin':   'Why sourcing matters',
    'sourcing-name':    'Certified quality.',
    'sourcing-p':       "Same certified organic suppliers. Same quality, every batch. The list is easy to copy. Getting it right isn't.",

    'howto-eyebrow':    'How To Use',
    'howto-h2':         'Three steps.<br>Works while you recover.',
    'step1-num':        'Step 01',
    'step1-h4':         'Right after your workout',
    'step1-p':          'Apply while your skin is still warm and receptive. Wash and dry your hands, then use the bar immediately after training.',
    'step2-num':        'Step 02',
    'step2-h4':         'Apply directly',
    'step2-p':          'Rub the bar onto dry, damaged skin. A small amount goes a long way. Focus on fissures, fingertips, and callus edges.',
    'step3-num':        'Step 03',
    'step3-h4':         'Again before sleep',
    'step3-p':          'A second application before bed locks in the most repair. No rinsing needed. The wax works while you sleep.',

    'athletes-eyebrow': 'For Hard-Working Hands',
    'athletes-h2':      'If your hands take a beating,<br>this is for you.',
    'ath-1-h4':         'Climbers',
    'ath-1-p':          'Rock, plastic, chalk. All of it strips skin. Use FlitzGrip after every session, indoor or out.',
    'ath-2-h4':         'Sailors',
    'ath-2-p':          'Salt water and rope work wreck your hands. The clip-on container survives your gear bag too.',
    'ath-3-h4':         'Gymnasts & CrossFitters',
    'ath-3-p':          'Bar work, rings, and chalk. Same problem, same fix. Clip it to your bag the same way.',
    'ath-4-h4':         'Rowers & Paddlers',
    'ath-4-p':          'Hours on the water mean blistered, dry hands. FlitzGrip restores between sessions.',

    'about-eyebrow':    'Our Story',
    'about-h2':         'We built this because we needed it.',
    'about-p1':         "We're a climbing family based in Berlin. Years of destroyed fingers, half-hearted recoveries, and products that smelled like a pharmacy pushed us to make something ourselves.",
    'about-p2':         'FlitzGrip started in our kitchen. The formula is small, considered, and honest. Organic ingredients from transparent supply chains. Made by hand in small batches. No marketing budget, no lab coat mystique. Just a bar that works.',
    'about-p3':         "We're selective about where we start. If you're a gym, a shop, or a distributor who cares about the same things we do, we'd like to hear from you.",
    'about-ig':         'Follow us on Instagram →',
    'about-company':    'Company',
    'about-location':   'Location',
    'about-since':      'Since',

    'dist-eyebrow':     'For Retailers & Gyms',
    'dist-h2':          'Carry FlitzGrip<br>in your shop.',
    'dist-p':           "We work with climbing gyms, outdoor retailers, and specialty sports shops. Small minimums. Generous margins. We're just getting started.",
    'dist-btn':         'Get in Touch',

    'footer-product':   'Product',
    'footer-f-bar':     'Skin Repair Bar',
    'footer-f-ing':     'Ingredients',
    'footer-f-howto':   'How to Use',
    'footer-f-buy':     'Buy Now',
    'footer-company':   'Company',
    'footer-f-about':   'About',
    'footer-f-dist':    'Distributors',
    'footer-f-contact': 'Contact',
    'footer-legal':     'Legal',
  },

  de: {
    'nav-product':      'Produkt',
    'nav-ingredients':  'Inhaltsstoffe',
    'nav-about':        'Über uns',
    'nav-distributors': 'Händler',
    'nav-buy':          'Demnächst',

    'hero-tag':         'Handgefertigt · Berlin, DE',
    'hero-h1':          'Für Hände,<br>die es <em>verdienen.</em>',
    'hero-sub':         'Natürliche Hautpflege für Kletterer, Segler, Ruderer und alle, die ihre Hände wirklich benutzen. 100% Bio-Inhaltsstoffe. Kein Kompromiss.',
    'hero-btn-outline': 'Mehr erfahren',

    'problem-eyebrow':  'Das Problem',
    'problem-h2':       'Chalk trocknet aus.<br>Fels reißt auf.',
    'problem-p':        'Jede Session entzieht der Haut ihre natürlichen Öle. Die Risse, die Splits, die rohen Kuppen. Sie kosten Griffe, Sessions und Fortschritt. Die meisten Mittel sind Pflaster.',
    'solution-eyebrow': 'Die Lösung',
    'solution-h2':      'Pflege, die wirklich wirkt.',
    'solution-p':       'FlitzGrip gibt der Haut zurück, was sie verliert. Acht Bio-Inhaltsstoffe. Keine Füllstoffe, kein synthetischer Duft, keine Abkürzungen. Nach dem Training auftragen. Erholt aufwachen.',

    'product-eyebrow':  'Hautpflege-Riegel',
    'product-name':     'FlitzGrip<sup class="tm">™</sup>',
    'product-p':        'Ein fester, natürlicher Hautpflege-Riegel im Clip-Behälter. An die Chalkbag klippen. Nach jeder Session anwenden. Die Wachsformel versiegelt Risse, spendet Feuchtigkeit und ist schnell wieder vergessen.',
    'spec-weight':      'Gewicht',
    'spec-format':      'Format',
    'spec-format-val':  'Fester Riegel',
    'spec-shelf':       'Haltbarkeit',
    'spec-shelf-val':   '6 Monate geöffnet',
    'spec-made':        'Hergestellt in',
    'spec-ingredients': 'Inhaltsstoffe',
    'spec-ing-val':     '100% Bio',
    'spec-certified':   'Zertifiziert',
    'rating-label':     'Erste Bewertung schreiben',
    'reviews-heading':  'Bewertungen',
    'reviews-tally':    'Erste Bewertung schreiben',
    'reviews-empty-p':  'Noch keine Bewertungen. Sei der Erste, wenn wir starten.',

    'feat-1-name':      'Umweltfreundliches Gehäuse',
    'feat-1-desc':      '3D-gedruckt aus pflanzlichem PLA. Industriell kompostierbarer Behälter.',
    'feat-2-name':      'Pur & Einfach',
    'feat-2-desc':      'Natur-Harziger Duft. Keine synthetischen Zusätze.',
    'feat-3-name':      '100% Natürlich',
    'feat-3-desc':      'Ausschließlich aus zertifizierten Bio-Inhaltsstoffen.',
    'feat-4-name':      'Klettergerechte Pflege',
    'feat-4-desc':      'Ersetzt verlorene Öle ohne Schwielen zu erweichen. Unterstützt natürliche Hautregeneration.',
    'feat-5-name':      'Wasserfreie Formel',
    'feat-5-desc':      'Konzentrierter Riegel. Kein Schmieren, kein Kleckern, kein Abfall.',
    'feat-6-name':      'Kletterer-Begleiter',
    'feat-6-desc':      'Karabinerhaken zur direkten Befestigung an der Chalkbag.',
    'feat-7-name':      'Handgefertigt in Deutschland',
    'feat-7-desc':      'Kleine Chargen, gleichbleibende Qualität.',

    'ing-eyebrow':      'Was drin ist',
    'ing-h2':           'Acht Inhaltsstoffe.<br>Null Füllstoffe.',
    'ing-intro':        'Jeder Inhaltsstoff rechtfertigt seinen Platz. Kein synthetischer Duft, kein Wasser, keine Parabene. Nur was die Haut wirklich braucht.',
    'ing-01-p':         'Bildet eine Schutzschicht über Rissen. Schließt Feuchtigkeit ein, ohne die Poren zu verstopfen.',
    'ing-02-p':         'Chemisch dem eigenen Talg am ähnlichsten. Ersetzt, was Chalk und Reibung entziehen.',
    'ing-03-p':         'Tiefenpflege für trockene, strapazierte Haut. Weicht Schwielen auf und unterstützt die Erholung der Haut.',
    'ing-04-p':         'Reich an Vitaminen A, D und E. Dringt tief ein und stellt die Elastizität überbeanspruchter Haut wieder her.',
    'ing-05-p':         'Intensiv feuchtigkeitsspendend und nährend. Hilft trockene, verdickte Haut zu pflegen und stärkt die Hautbarriere.',
    'ing-06-p':         'Starkes Antioxidans gegen freie Radikale. Reduziert Narbenbildung und hält die Haut langfristig geschmeidig.',
    'ing-07-p':         'Leichtes Trägeröl reich an Linolsäure. Unterstützt die Hautbarriere und transportiert das Vitamin E.',
    'ing-08-p':         'Entzündungshemmendes Extrakt mit langer Tradition bei beanspruchter, gereizter Haut. Beruhigt Rötungen und unterstützt die Erholung.',
    'sourcing-number':  'Unser Standard',
    'sourcing-latin':   'Warum die Herkunft zählt',
    'sourcing-name':    'Zertifizierte Qualität.',
    'sourcing-p':       'Dieselben zertifizierten Bio-Lieferanten. Gleiche Qualität, jede Charge. Die Liste lässt sich kopieren. Es richtig zu machen nicht.',

    'howto-eyebrow':    'Anwendung',
    'howto-h2':         'Drei Schritte.<br>Wirkt während du dich erholst.',
    'step1-num':        'Schritt 01',
    'step1-h4':         'Direkt nach dem Training',
    'step1-p':          'Direkt nach der Session auftragen, wenn die Haut noch warm und aufnahmefähig ist. Hände waschen, trocknen, Riegel anwenden.',
    'step2-num':        'Schritt 02',
    'step2-h4':         'Direkt auftragen',
    'step2-p':          'Den Riegel auf trockene, strapazierte Haut reiben. Wenig reicht weit. Auf Risse, Kuppen und Schwielenränder konzentrieren.',
    'step3-num':        'Schritt 03',
    'step3-h4':         'Nochmal vor dem Schlafen',
    'step3-p':          'Eine zweite Anwendung vor dem Einschlafen bringt die meiste Wirkung. Kein Abspülen nötig. Das Wachs wirkt über Nacht.',

    'athletes-eyebrow': 'Für Hände, die ranmüssen',
    'athletes-h2':      'Wenn deine Hände leiden,<br>bist du hier richtig.',
    'ath-1-h4':         'Kletterer',
    'ath-1-p':          'Fels, Plastik, Chalk. Alles nimmt die Haut mit. FlitzGrip nach jeder Session, drinnen wie draußen.',
    'ath-2-h4':         'Segler',
    'ath-2-p':          'Salzwasser und Tauwerk nehmen die Hände mit. Der Clip-Behälter übersteht jede Ausrüstungstasche.',
    'ath-3-h4':         'Turner & CrossFitter',
    'ath-3-p':          'Barren, Ringe und Chalk. Gleiches Problem, gleiche Lösung. Einfach an die Tasche klippen.',
    'ath-4-h4':         'Ruderer & Paddler',
    'ath-4-p':          'Stunden auf dem Wasser hinterlassen ihre Spuren. FlitzGrip regeneriert zwischen den Sessions.',

    'about-eyebrow':    'Unsere Geschichte',
    'about-h2':         'Gebaut, weil wir es gebraucht haben.',
    'about-p1':         'Wir sind eine Kletterfamilie aus Berlin. Nach Jahren kaputter Finger, halbherziger Erholung und Produkten, die nach Apotheke riechen. Also haben wir selbst etwas gebaut.',
    'about-p2':         'FlitzGrip begann in unserer Küche. Die Formel ist klein, durchdacht und ehrlich. Bio-Inhaltsstoffe aus transparenten Lieferketten. Von Hand in kleinen Chargen hergestellt. Kein Marketingbudget, keine Laborkittel-Mystik. Einfach ein Riegel, der funktioniert.',
    'about-p3':         'Wir sind wählerisch, wo wir anfangen. Wenn du eine Halle, ein Shop oder ein Händler bist, dem die gleichen Dinge wichtig sind, melde dich.',
    'about-ig':         'Folg uns auf Instagram →',
    'about-company':    'Unternehmen',
    'about-location':   'Standort',
    'about-since':      'Seit',

    'dist-eyebrow':     'Für Händler & Hallen',
    'dist-h2':          'FlitzGrip in<br>deinem Laden.',
    'dist-p':           'Wir arbeiten mit Kletterhallen, Outdoor-Händlern und Fachsportgeschäften. Kleine Mindestmengen. Attraktive Margen. Wir fangen gerade erst an.',
    'dist-btn':         'Kontakt aufnehmen',

    'footer-product':   'Produkt',
    'footer-f-bar':     'Hautpflege-Riegel',
    'footer-f-ing':     'Inhaltsstoffe',
    'footer-f-howto':   'Anwendung',
    'footer-f-buy':     'Jetzt kaufen',
    'footer-company':   'Unternehmen',
    'footer-f-about':   'Über uns',
    'footer-f-dist':    'Händler',
    'footer-f-contact': 'Kontakt',
    'footer-legal':     'Rechtliches',
  }
};

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key] !== undefined) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });
  localStorage.setItem('flitzgrip-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = lang === 'en' ? 'DE' : 'EN';
    btn.dataset.current = lang;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('flitzgrip-lang') || 'en';
  applyLang(saved);

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = (btn.dataset.current || localStorage.getItem('flitzgrip-lang') || 'en');
      applyLang(current === 'en' ? 'de' : 'en');
    });
  });
});
