/**
 * MarTech Panthers - Ganesh Festive Season Offer
 * Machine Tools Manufacturing Industry Landing Page Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initPhoneSimulators();
  initClaimForm();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. Interactive Phone Simulators (Hero and Demo)
   -------------------------------------------------------------------------- */
function initPhoneSimulators() {
  // Hero Simulator Elements
  const simCallBtn = document.getElementById('simCallBtn');
  const simWhatsAppBtn = document.getElementById('simWhatsAppBtn');
  const simLocationBtn = document.getElementById('simLocationBtn');
  const simCatalogBtn = document.getElementById('simCatalogBtn');
  const simSaveContactBtn = document.getElementById('simSaveContactBtn');
  const simToast = document.getElementById('simToast');
  const simToastText = document.getElementById('simToastText');

  function showHeroToast(message, duration = 2500) {
    if (!simToast) return;
    simToastText.textContent = message;
    simToast.classList.add('show');
    setTimeout(() => {
      simToast.classList.remove('show');
    }, duration);
  }

  if (simCallBtn) {
    simCallBtn.addEventListener('click', () => {
      showHeroToast('📞 Dialing Growth Consultant: +91 976 291 0165');
    });
  }

  if (simWhatsAppBtn) {
    simWhatsAppBtn.addEventListener('click', () => {
      showHeroToast('💬 WhatsApp Chat Initiated for Machine RFQs');
    });
  }

  if (simLocationBtn) {
    simLocationBtn.addEventListener('click', () => {
      showHeroToast('📍 Google Maps: Aundh Pune & Bhosari MIDC');
    });
  }

  if (simCatalogBtn) {
    simCatalogBtn.addEventListener('click', () => {
      showHeroToast('🌐 Visiting: https://martechpanthers.com/MayankD/');
    });
  }

  if (simSaveContactBtn) {
    simSaveContactBtn.addEventListener('click', () => {
      triggerVCardDownload(
        'Mayank Dubey',
        'MarTech Panthers - Machine Tools Div',
        '+919762910165',
        'mayankd@martechpanthers.com'
      );
      showHeroToast('✅ Saved "Mayank Dubey" to Phone Contacts!');
    });
  }

  // Showcase Section Demo Phone
  const demoCallBtn = document.getElementById('demoCallBtn');
  const demoWhatsAppBtn = document.getElementById('demoWhatsAppBtn');
  const demoLocationBtn = document.getElementById('demoLocationBtn');
  const demoCatalogBtn = document.getElementById('demoCatalogBtn');
  const demoSaveContactBtn = document.getElementById('demoSaveContactBtn');
  const demoToast = document.getElementById('demoToast');
  const demoToastText = document.getElementById('demoToastText');
  const demoBoxTitle = document.getElementById('demoBoxTitle');
  const demoBoxSub = document.getElementById('demoBoxSub');
  const demoBoxList = document.getElementById('demoBoxList');

  const demoButtons = [demoCallBtn, demoWhatsAppBtn, demoLocationBtn, demoCatalogBtn];

  function setDemoActiveBtn(activeBtn) {
    demoButtons.forEach(btn => {
      if (btn) btn.classList.remove('active-action');
    });
    if (activeBtn) activeBtn.classList.add('active-action');
  }

  function showDemoToast(msg) {
    if (!demoToast) return;
    demoToastText.textContent = msg;
    demoToast.classList.add('show');
    setTimeout(() => {
      demoToast.classList.remove('show');
    }, 2500);
  }

  if (demoCallBtn) {
    demoCallBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoCallBtn);
      demoBoxTitle.textContent = 'Direct Contacts';
      demoBoxSub.textContent = 'Consultant Lines';
      demoBoxList.innerHTML = `
        <li><span>📞</span> <strong>Direct Desk:</strong> +91 976 291 0165</li>
        <li><span>🌐</span> <strong>Head Office:</strong> Shambhu Vihar, Aundh, Pune</li>
        <li><span>✉️</span> <strong>Email:</strong> mayankd@martechpanthers.com</li>
      `;
      showDemoToast('📞 Tap-to-call connected directly!');
    });
  }

  if (demoWhatsAppBtn) {
    demoWhatsAppBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoWhatsAppBtn);
      demoBoxTitle.textContent = 'WhatsApp Inquiry Desk';
      demoBoxSub.textContent = 'Quick Response';
      demoBoxList.innerHTML = `
        <li><span>⚡</span> <strong>Live Support:</strong> +91 976 291 0165</li>
        <li><span>⏱️</span> <strong>Quote Turnaround:</strong> Within 4 working hours</li>
        <li><span>🤝</span> <strong>Drawing Upload:</strong> Send PDF/CAD drawings</li>
      `;
      showDemoToast('💬 WhatsApp drawing submission active');
    });
  }

  if (demoLocationBtn) {
    demoLocationBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoLocationBtn);
      demoBoxTitle.textContent = 'Plant & Gate Directions';
      demoBoxSub.textContent = 'Pune & California';
      demoBoxList.innerHTML = `
        <li><span>📍</span> <strong>Head Office:</strong> Shambhu Vihar, Aundh, Pune - 411007</li>
        <li><span>🏢</span> <strong>Branches:</strong> Bhopal (India) & California (USA/Canada)</li>
        <li><span>🗺️</span> <strong>GPS Pin:</strong> 1-Tap Google Map Navigation</li>
      `;
      showDemoToast('📍 Google Maps GPS navigation ready');
    });
  }

  if (demoCatalogBtn) {
    demoCatalogBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoCatalogBtn);
      demoBoxTitle.textContent = 'Web & Digital Card Link';
      demoBoxSub.textContent = 'martechpanthers.com';
      demoBoxList.innerHTML = `
        <li><span>🌐</span> <strong>Website:</strong> www.MarTechPanthers.com</li>
        <li><span>🔗</span> <strong>Live Digital Card:</strong> martechpanthers.com/MayankD/</li>
        <li><span>🚀</span> <strong>Get Started:</strong> martechpanthers.com/getquote</li>
      `;
      showDemoToast('🌐 MarTech Panthers live card link loaded!');
    });
  }

  if (demoSaveContactBtn) {
    demoSaveContactBtn.addEventListener('click', () => {
      triggerVCardDownload(
        'Mayank Dubey',
        'MarTech Panthers - Machine Tools Div',
        '+919762910165',
        'mayankd@martechpanthers.com'
      );
      showDemoToast('✅ VCF Contact saved to your phonebook!');
    });
  }
}

/**
 * Generates and downloads an authentic .vcf file for 1-tap phonebook saving
 */
function triggerVCardDownload(name, company, phone, email) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Dubey;Mayank;;;
FN:${name}
ORG:${company}
TITLE:Co-Founder & Growth Consultant
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK,INTERNET:${email}
URL:https://www.martechpanthers.com/MayankD
NOTE:Machine Tools MarTech Specialist - Ganesh Festive Season Special Setup
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.replace(/\s+/g, '_')}_DigitalCard.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* --------------------------------------------------------------------------
   2. Claim Offer Form & Success Modal
   -------------------------------------------------------------------------- */
function initClaimForm() {
  const form = document.getElementById('festiveClaimForm');
  const successModal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const claimedSummaryBox = document.getElementById('claimedSummaryBox');
  const modalWhatsAppDirectBtn = document.getElementById('modalWhatsAppDirectBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const companyName = document.getElementById('companyName').value.trim();
    const contactPerson = document.getElementById('contactPerson').value.trim();
    const whatsappNumber = document.getElementById('whatsappNumber').value.trim();
    const cityArea = document.getElementById('cityArea').value.trim();
    const industrySegment = document.getElementById('industrySegment').value;

    const claimData = {
      companyName,
      contactPerson,
      whatsappNumber,
      cityArea,
      industrySegment,
      claimedAt: new Date().toISOString()
    };

    // Save to localStorage
    try {
      const pastClaims = JSON.parse(localStorage.getItem('martech_machine_tools_festive_claims') || '[]');
      pastClaims.push(claimData);
      localStorage.setItem('martech_machine_tools_festive_claims', JSON.stringify(pastClaims));
    } catch (err) {
      console.warn('LocalStorage save skipped:', err);
    }

    // Populate modal summary
    if (claimedSummaryBox) {
      claimedSummaryBox.innerHTML = `
        <div><strong>Company:</strong> ${escapeHtml(companyName)}</div>
        <div><strong>Leader:</strong> ${escapeHtml(contactPerson)}</div>
        <div><strong>WhatsApp:</strong> ${escapeHtml(whatsappNumber)}</div>
        <div><strong>Location:</strong> ${escapeHtml(cityArea)}</div>
        <div><strong>Specialization:</strong> ${escapeHtml(industrySegment)}</div>
        <div style="color: #15803D; font-weight: 800; margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed #E2E8F0;">
          🎉 Festive Deliverable: 100% Free Smart Digital Business Card
        </div>
      `;
    }

    // Prepare WhatsApp Message Link (+91 976 291 0165 from brochure Slide 5)
    const waText = encodeURIComponent(
      `Hello MarTech Panthers team! 🪔\n\nI want to claim the Free Smart Digital Business Card Ganesh Festive Season Offer for my Machine Tools company.\n\n*Company:* ${companyName}\n*Leader:* ${contactPerson}\n*Phone:* ${whatsappNumber}\n*Location:* ${cityArea}\n*Specialization:* ${industrySegment}\n\nPlease help us start our setup!`
    );

    const waUrl = `https://wa.me/919762910165?text=${waText}`;
    if (modalWhatsAppDirectBtn) {
      modalWhatsAppDirectBtn.href = waUrl;
    }

    // Open Modal
    if (successModal) {
      successModal.classList.add('active');
    }

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  });

  if (closeModalBtn && successModal) {
    closeModalBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
      }
    });
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

/* --------------------------------------------------------------------------
   3. Smooth Scroll Navigation
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
