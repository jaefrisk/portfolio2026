document.addEventListener("DOMContentLoaded", () => {
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// mode nuit / jour + sauvegarde dans le local storage
  const buttonmode = document.querySelectorAll(".theme");
  function applymode(mode) {
    if (mode === "dark") {
      document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.removeAttribute("data-theme");
    }
    localStorage.setItem("portfolio_theme", mode);
  }

  buttonmode.forEach((btn) => {
    btn.addEventListener("click", () => {
      const theme = btn.getAttribute("data-theme");
      applymode(theme);
    });
  });

  const previousmode = localStorage.getItem("portfolio_theme") || "light";
  applymode(previousmode);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////// partie biligue du site #compliqué
  const langbtn = document.querySelectorAll(".lang");

  const translations = {
    fr: {
      "nav-about": "À propos",
      "nav-projects": "Projets",
      "nav-contact": "Contact",
      "about-subtitle": "Audiovisuel - Production - Post Production",
      "education-title": "Formation",
      "edu-m1-title": "Master Cultures et Métiers du Web",
      "edu-m1-univ": "Université Gustave Eiffel, Champs-sur-Marne",
      "edu-m2-title": "Master Cinéma et Contenus Audiovisuels",
      "edu-m2-univ": "Université Dong-Eui, Busan, Corée du Sud",
      "edu-lic-title": "Licence Géographie et Aménagement",
      "edu-lic-univ": "Université Gustave Eiffel, Champs-sur-Marne",
      "projects-main-title": "Projets",
      "project-title-1": "Court métrage",
      "short-film-desc":
        "Dans le cadre de mon double Master à l'Université Dong-Eui, j'ai eu l'opportunité de réaliser un court métrage pour mon projet de fin d'études. Ce projet m'a permis de développer des compétences en écriture, production, réalisation et montage.",
      "short-film-synopsis":
        "Synopsis : Clover et Aurie étaient autrefois inséparables; leurs aventures discrètement immortalisées par l'objectif de Clover. À la suite d'une rupture soudaine, le film change de perspective. Aurie se retrouve seule avec la caméra de Clover. Confrontée à son absence, elle décide de rendre un ultime hommage à cette relation en se filmant elle-même.",
      "project-title-2": "Documentaire Interactif",
      "docu-desc":
        "Tourné à Busan, en Corée du Sud avec une équipe franco-coréenne, ce documentaire a été réalisé dans le cadre de mon master à l'Université Gustave Eiffel, en collaboration avec l'Université Dong-Eui. J'ai eu l'opportunité de travailler sur plusieurs pôles à la fois : réalisation, écriture, montage et étalonnage.",
      "docu-synopsis":
        "Synopsis : Accompagnez une française et son amie coréenne dans leur découverte de ce qu'impliquerait la vie sans ces grands conglomérats qui dominent l'économie sud-coréenne.",
      "contact-title": "Contact",
      "contact-text":
        "Pour me contacter, vous pouvez m'envoyer un email à jaedenfrisk@gmail.com.",
      "footer-text": "&copy; 2026 DUONG F. Jaeden. Tous droits réservés.",
      "modal-btn": "Mentions légales",
      "modal-title": "Mentions légales",
      "modal-editor-title": "L'éditeur du site",
      "modal-editor-desc":
        "Le site est édité par DUONG F. Jaeden, étudiant en Master Cultures et Métiers du Web à l'Université Gustave Eiffel.",
      "modal-host-title": "Hébergement",
      "modal-host-desc": "Le site est hébergé par GitHub.",
      "modal-prop-title": "Propriété intellectuelle",
      "modal-prop-desc":
        "L'ensemble des contenus du site est la propriété exclusive de DUONG F. Jaeden, sauf mention contraire. Toute reproduction ou utilisation non autorisée des contenus présents sur ce site est interdite.",
      "modal-ai-title": "Utilisation de l'IA",
      "modal-ai-desc":
        "Le code a été développé à l'aide de l'outil d'auto-complétion de code de manière raisonnée pour assister le développement et optimiser le processus.",
    },
    en: {
      "nav-about": "About",
      "nav-projects": "Projects",
      "nav-contact": "Contact",
      "about-subtitle": "Audiovisuel - Production - Post-Production",
      "education-title": "Education",
      "edu-m1-title": "Master Web and Humanities",
      "edu-m1-univ": "Gustave Eiffel University, Champs-sur-Marne",
      "edu-m2-title": "Master Cinema and Audivisual Contents",
      "edu-m2-univ": "Dong-Eui University, Busan, South Korea",
      "edu-lic-title": "Geography and Urban Planning Licence",
      "edu-lic-univ": "Gustave Eiffel University, Champs-sur-Marne",
      "projects-main-title": "Projects",
      "project-title-1": "Short Film",
      "short-film-desc":
        "As part of my dual Master's degree at Dong-Eui University, I had the opportunity to direct a short film for my graduation project. This project allowed me to develop skills in screenwriting, production, directing, and editing.",
      "short-film-synopsis":
        "Synopsis: Clover and Aurie were once inseparable; their adventures discreetly captured through Clover's lens. Following a sudden fallout, the film shifts perspective. Aurie finds herself alone with Clover's camera. Confronted by her absence, she decides to pay a final tribute to their relationship by filming herself.",
      "project-title-2": "Interactive documentary",
      "docu-desc":
        "Filmed in Busan, South Korea with a French-Korean crew, this documentary was produced as part of my Master's degree at Gustave Eiffel University, in collaboration with Dong-Eui University. I had the opportunity to work across multiple roles simultaneously: directing, writing, editing, and color grading.",
      "docu-synopsis":
        "Synopsis: Follow a French woman and her Korean friend as they discover what life would entail without the large conglomerates that dominate the South Korean economy.",
      "contact-title": "Contact",
      "contact-text":
        "To contact me, you can send me an email at jaedenfrisk@gmail.com.",
      "footer-text": "&copy; 2026 DUONG F. Jaeden. Tous droits réservés.",
      "modal-btn": "Legal notices",
      "modal-title": "Legal notices",
      "modal-editor-title": "Site Publisher",
      "modal-editor-desc":
        "This site is published by DUONG F. Jaeden, a graduate student in the Master Cultures et Métiers du Web program at Gustave Eiffel University.",
      "modal-host-title": "Hosting",
      "modal-host-desc": "This site is hosted by GitHub.",
      "modal-prop-title": "Intellectual Property",
      "modal-prop-desc":
        "All content on this site is the exclusive property of DUONG F. Jaeden, unless stated otherwise. Any unauthorized reproduction or use of the content present on this site is prohibited.",
      "modal-ai-title": "AI Usage",
      "modal-ai-desc":
        "The code was developed using code auto-completion tools in a reasoned manner to assist development and optimize the process.",
    },
  };

  function applylang(preflang) {
    langbtn.forEach((btn) => {
      if (btn.getAttribute("data-lang") === preflang) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const textes = translations[preflang];
    Object.keys(textes).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = textes[id];
      }
    });

    localStorage.setItem("portfolio_langue", preflang);
  }

  langbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      const langue = btn.getAttribute("data-lang");
      applylang(langue);
    });
  });

  const langueSauvegardee = localStorage.getItem("portfolio_langue") || "fr";
  applylang(langueSauvegardee);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////// pop up pour les mentions légales
  const openModalBtn = document.getElementById("open-Modal-Btn");
  const closeModalBtn = document.getElementById("close-Modal");
  const legalModal = document.getElementById("legalModal");

  if (openModalBtn && legalModal) {
    openModalBtn.addEventListener("click", () => {
      legalModal.style.display = "flex";
      legalModal.removeAttribute("hidden");
    });
  }

  if (closeModalBtn && legalModal) {
    closeModalBtn.addEventListener("click", () => {
      legalModal.style.display = "none";
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target === legalModal) {
      legalModal.style.display = "none";
    }
  });
});
