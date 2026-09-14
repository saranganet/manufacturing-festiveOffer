/**
 * MarTech Panthers - Ganesh Chaturthi Festive Offer
 * Manufacturing Industry Landing Page Interactivity
 */

document.addEventListener('DOMContentLoaded', () => {
  initPhoneSimulators();
  initShowcaseTabs();
  initFaqAccordion();
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
  const simInfoBox = document.getElementById('simInfoBox');

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
      showHeroToast('📞 Dialing MD Desk: +91 98220 12345');
    });
  }

  if (simWhatsAppBtn) {
    simWhatsAppBtn.addEventListener('click', () => {
      showHeroToast('💬 WhatsApp Chat Opened for RFQs');
    });
  }

  if (simLocationBtn) {
    simLocationBtn.addEventListener('click', () => {
      showHeroToast('📍 Google Maps: Bhosari MIDC, Pune');
    });
  }

  if (simCatalogBtn) {
    simCatalogBtn.addEventListener('click', () => {
      showHeroToast('📄 Product Catalog PDF Opened');
    });
  }

  if (simSaveContactBtn) {
    simSaveContactBtn.addEventListener('click', () => {
      triggerVCardDownload('Rajesh S. Patil', 'Shri Ganesh Precision Works', '+919822012345', 'info@shriganeshprecision.com');
      showHeroToast('✅ Saved "Rajesh Patil" to Contacts!');
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
      demoBoxSub.textContent = 'Factory Lines';
      demoBoxList.innerHTML = `
        <li><span>📞</span> <strong>MD Direct:</strong> +91 98220 12345</li>
        <li><span>🏭</span> <strong>Plant Dispatch:</strong> 020-2712-4589</li>
        <li><span>✉️</span> <strong>RFQs:</strong> rfq@shriganeshprecision.com</li>
      `;
      showDemoToast('📞 Tap-to-call connected directly!');
    });
  }

  if (demoWhatsAppBtn) {
    demoWhatsAppBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoWhatsAppBtn);
      demoBoxTitle.textContent = 'WhatsApp RFQ Desk';
      demoBoxSub.textContent = 'Quick Quotes';
      demoBoxList.innerHTML = `
        <li><span>⚡</span> <strong>Instant Reply:</strong> Drawings accepted in DWG/PDF</li>
        <li><span>⏱️</span> <strong>Quote Turnaround:</strong> Within 4 working hours</li>
        <li><span>🤝</span> <strong>Support:</strong> Engg Head: Milind Shinde</li>
      `;
      showDemoToast('💬 WhatsApp drawing submission active');
    });
  }

  if (demoLocationBtn) {
    demoLocationBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoLocationBtn);
      demoBoxTitle.textContent = 'Plant & Gate Directions';
      demoBoxSub.textContent = 'Bhosari MIDC, Pune';
      demoBoxList.innerHTML = `
        <li><span>📍</span> <strong>Address:</strong> Plot 42/B, 'T' Block, Bhosari MIDC</li>
        <li><span>🚛</span> <strong>Truck Access:</strong> 24-Ton Weighbridge inside</li>
        <li><span>🗺️</span> <strong>GPS Pin:</strong> 1-Tap Google Map Navigation</li>
      `;
      showDemoToast('📍 Google Maps GPS navigation ready');
    });
  }

  if (demoCatalogBtn) {
    demoCatalogBtn.addEventListener('click', () => {
      setDemoActiveBtn(demoCatalogBtn);
      demoBoxTitle.textContent = 'Machinery & Brochure';
      demoBoxSub.textContent = '2026 Edition';
      demoBoxList.innerHTML = `
        <li><span>📄</span> <strong>Catalog:</strong> 12-Page Plant Machinery PDF</li>
        <li><span>⚙️</span> <strong>Precision:</strong> Mazak CNC, Haas 4-Axis VMC</li>
        <li><span>🔬</span> <strong>Quality Lab:</strong> Zeiss CMM & Profile Projector</li>
      `;
      showDemoToast('📄 Factory catalog loaded!');
    });
  }

  if (demoSaveContactBtn) {
    demoSaveContactBtn.addEventListener('click', () => {
      triggerVCardDownload('Rajesh S. Patil', 'Shri Ganesh Precision Works', '+919822012345', 'info@shriganeshprecision.com');
      showDemoToast('✅ VCF Contact saved to your phonebook!');
    });
  }
}

/**
 * Generates and downloads a real .vcf file for 1-tap phonebook saving
 */
function triggerVCardDownload(name, company, phone, email) {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:Patil;Rajesh;S.;;
FN:${name}
ORG:${company}
TITLE:Managing Director
TEL;TYPE=WORK,VOICE:${phone}
EMAIL;TYPE=WORK,INTERNET:${email}
NOTE:Manufacturing Partner - Ganesh Chaturthi Special Setup by MarTech Panthers
END:VCARD`;

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${name.replace(/\s+/g, '_')}_FactoryContact.vcf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* --------------------------------------------------------------------------
   2. Showcase Tabs Switching (Digital Card vs LinkedIn Page)
   -------------------------------------------------------------------------- */
function initShowcaseTabs() {
  const tabBtnCard = document.getElementById('tabBtnCard');
  const tabBtnLinkedIn = document.getElementById('tabBtnLinkedIn');
  const panelCard = document.getElementById('panelCard');
  const panelLinkedIn = document.getElementById('panelLinkedIn');

  if (!tabBtnCard || !tabBtnLinkedIn) return;

  tabBtnCard.addEventListener('click', () => {
    tabBtnCard.classList.add('active');
    tabBtnLinkedIn.classList.remove('active');
    panelCard.classList.add('active');
    panelLinkedIn.classList.remove('active');
  });

  tabBtnLinkedIn.addEventListener('click', () => {
    tabBtnLinkedIn.classList.add('active');
    tabBtnCard.classList.remove('active');
    panelLinkedIn.classList.add('active');
    panelCard.classList.remove('active');
  });
}

/* --------------------------------------------------------------------------
   3. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('open');
        }
      });

      // Toggle current item
      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. Claim Offer Form & Success Modal
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
      const pastClaims = JSON.parse(localStorage.getItem('martech_festive_claims') || '[]');
      pastClaims.push(claimData);
      localStorage.setItem('martech_festive_claims', JSON.stringify(pastClaims));
    } catch (err) {
      console.warn('LocalStorage save skipped:', err);
    }

    // Populate modal summary
    if (claimedSummaryBox) {
      claimedSummaryBox.innerHTML = `
        <div><strong>Factory:</strong> ${escapeHtml(companyName)}</div>
        <div><strong>Representative:</strong> ${escapeHtml(contactPerson)}</div>
        <div><strong>WhatsApp:</strong> ${escapeHtml(whatsappNumber)}</div>
        <div><strong>Location:</strong> ${escapeHtml(cityArea)}</div>
        <div><strong>Category:</strong> ${escapeHtml(industrySegment)}</div>
        <div style="color: #FCD34D; font-weight: 600; margin-top: 0.5rem;">🎉 Deliverables: Free Digital Card + Free LinkedIn Setup</div>
      `;
    }

    // Prepare WhatsApp Message Link
    const waText = encodeURIComponent(
      `Hello MarTech Panthers team! 🪔\n\nI just claimed the Ganesh Chaturthi Free Festive Offer for my factory.\n\n*Factory:* ${companyName}\n*Contact:* ${contactPerson}\n*Phone:* ${whatsappNumber}\n*Location:* ${cityArea}\n*Industry:* ${industrySegment}\n\nPlease help us start the setup!`
    );

    const waUrl = `https://wa.me/919820000000?text=${waText}`;
    if (modalWhatsAppDirectBtn) {
      modalWhatsAppDirectBtn.href = waUrl;
    }

    // Open Modal
    if (successModal) {
      successModal.classList.add('active');
    }

    // Optional celebratory vibration / log
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
   5. Smooth Scroll Navigation
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
