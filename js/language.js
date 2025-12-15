// Système multilingue FR/EN
const translations = {
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.career': 'Parcours',
        'nav.services': 'Services',
        'nav.publications': 'Publications',
        'nav.teaching': 'Enseignement',
        'nav.gallery': 'Galerie',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'Bienvenue sur le site internet de Tidiane Dioh',
        'hero.subtitle': 'Consultant en relations internationales, Responsable du programme médias à l\'OIF',
        'hero.text': 'Spécialiste des médias francophones et des dynamiques internationales, actif en Afrique, Caraïbes, Asie et Europe de l’Est.',
        'hero.cta': 'Découvrir',
        
        // About
        'about.title': 'Tidiane Dioh',
        'about.text1': 'Consultant en relations internationales et responsable du programme médias à l’OIF depuis 2004.',
        'about.text2': 'Référence des médias francophones, couvrant Afrique, Caraïbes, Asie et Europe de l’Est, avec un prisme géopolitique.',
        'about.text3': 'Parcours mêlant recherche, journalisme, action institutionnelle et enseignement universitaire.',
        'about.text4': 'Engagé pour le développement des médias, la liberté de la presse et le dialogue interculturel dans l’espace francophone.',
        
        // Career
        'career.title': 'Parcours Professionnel et Académique',
        'career.education.title': 'Formation Universitaire',
        'career.education.text': 'Formations en philosophie, économie/gestion, relations internationales et info-com (Liège).',
        'career.education.doctorate': 'Doctorat en Sciences de l’Information et de la Communication (Sorbonne Nouvelle), avec une approche médias et géopolitique.',
        'career.journalist.title': 'Carrière de Journaliste',
        'career.journalist.period1': 'Journaliste à Liège (mensuel C4).',
        'career.journalist.period2': 'Journaliste à Paris (Jeune Afrique, TV5 Monde).',
        'career.journalist.articles': 'Nombreux reportages et articles.',
        'career.journalist.events': 'Couverture d’événements internationaux (ex. Mondiaux 2003).',
        'career.international.title': 'Fonctionnaire International',
        'career.international.since': 'Depuis mars 2004',
        'career.international.role': 'Responsable du programme médias à l’OIF, consultant en relations internationales.',
        'career.international.fund': 'Gestion du Fonds d’appui à la presse francophone du Sud (Trophée liberté de la presse 2009).',
        'career.international.coverage': 'Priorité : Afrique, Caraïbes, Asie, Europe de l’Est, avec focus médias et gouvernance.',
        'career.teacher.title': 'Enseignant Universitaire',
        'career.teacher.since': 'Depuis septembre 2008',
        'career.teacher.role': 'Chargé de Cours à Paris-III Sorbonne-Nouvelle.',
        'career.teacher.member': 'Membre élu au Conseil de gestion de l’UFR Info-Com.',
        'career.teacher.subjects': 'Enseignements :',
        'career.teacher.subject1': 'Géopolitique des médias',
        'career.teacher.subject2': 'Systèmes de télévisions',
        'career.teacher.subject3': 'Echanges interculturels, Francophonie et Mondialisation',
        'career.teacher.subject4': 'Histoire des médias',
        'career.teacher.jury': 'Tidiane DIOH a également siégé dans un jury de thèse de doctorat à l\'Université Toulouse Le Mirail en janvier 2012.',
        'career.consultant.title': 'Consultant en Relations Internationales',
        'career.consultant.text': 'Fondateur de Lenad Consulting, cabinet de relations internationales, médias et communication.',
        'career.consultant.services': 'Conseil stratégique, analyse géopolitique, accompagnement médias et communication institutionnelle.',
        'career.consultant.link': 'En savoir plus',
        
        // Services
        'services.title': 'Lenad Consulting',
        'services.presentation.title': 'Présentation',
        'services.presentation.text': 'Cabinet de conseil en Relations Internationales fondé par Tidiane Dioh.',
        'services.presentation.founder': 'Expert médias et relations internationales dans l’espace francophone.',
        'services.card1.title': 'Conseil en Relations Internationales',
        'services.card1.item1': 'Analyse géopolitique',
        'services.card1.item2': 'Stratégies de relations internationales',
        'services.card1.item3': 'Accompagnement dans les projets internationaux',
        'services.card1.item4': 'Conseil en diplomatie et affaires publiques',
        'services.card2.title': 'Conseil en Médias et Communication',
        'services.card2.item1': 'Développement de stratégies médias',
        'services.card2.item2': 'Conseil en communication institutionnelle',
        'services.card2.item3': 'Analyse des systèmes médiatiques',
        'services.card2.item4': 'Formation et accompagnement des professionnels des médias',
        'services.card3.title': 'Expertise Francophonie',
        'services.card3.item1': 'Conseil sur les enjeux de la francophonie',
        'services.card3.item2': 'Accompagnement de projets dans l\'espace francophone',
        'services.card3.item3': 'Analyse des dynamiques culturelles et médiatiques francophones',
        'services.card3.item4': 'Stratégies de développement dans l\'espace francophone',
        'services.card4.title': 'Formation et Enseignement',
        'services.card4.item1': 'Formation en géopolitique des médias',
        'services.card4.item2': 'Formation en systèmes de télévisions',
        'services.card4.item3': 'Formation en échanges interculturels',
        'services.card4.item4': 'Séminaires et conférences',
        'services.zones.title': 'Zones d\'Intervention',
        'services.zones.text': 'Zones principales :',
        'services.zones.item1': 'Afrique (pays francophones)',
        'services.zones.item2': 'Caraïbes',
        'services.zones.item3': 'Asie (pays francophones)',
        'services.zones.item4': 'Europe de l\'Est',
        'services.zones.item5': 'Espace francophone mondial',
        
        // Publications
        'publications.title': 'Publications et Ouvrages',
        'publications.intro': 'Auteur d’articles, d’ouvrages et de travaux universitaires.',
        'publications.book1.title': 'Nouvelles approches des problématiques de communication sur l\'Afrique subsaharienne',
        'publications.book1.subtitle': 'Représentations, idéologie et instrumentalisation',
        'publications.book1.editor': 'Éditions L\'Harmattan, Paris',
        'publications.book1.description': 'Réflexion sur la communication et les médias en Afrique subsaharienne.',
        'publications.book2.title': 'Touba, voyage au coeur d\'un Islam nègre',
        'publications.book2.editor': 'Éditions Alternatives, Paris',
        'publications.book2.description': 'Récit illustré autour de Touba et du magal.',
        'publications.book3.title': 'Histoire de la télévision en Afrique noire francophone, des origines à nos jours',
        'publications.book3.editor': 'Éditions Karthala, Paris',
        'publications.book3.description': 'Histoire de la télévision en Afrique noire francophone.',
        
        // Teaching
        'teaching.title': 'Enseignement Universitaire',
        'teaching.since': 'Enseignant depuis 2008',
        'teaching.role': 'Chargé de Cours à Paris-III Sorbonne-Nouvelle, membre élu du Conseil de l’UFR Info-Com.',
        'teaching.subjects': 'Domaines d’enseignement :',
        'teaching.subject1': 'Géopolitique des médias',
        'teaching.subject2': 'Systèmes de télévisions',
        'teaching.subject3': 'Echanges interculturels, Francophonie et Mondialisation',
        'teaching.subject4': 'Histoire des médias',
        'teaching.jury': 'Jury de thèse (Toulouse Le Mirail, 2012)',
        
        // Expertise
        'expertise.title': 'Expertise et Domaines de Compétence',
        'expertise.intro': 'Expertise médias, relations internationales et francophonie :',
        'expertise.item1': 'Médias et communication',
        'expertise.item2': 'Géopolitique des médias',
        'expertise.item3': 'Systèmes de télévisions',
        'expertise.item4': 'Francophonie et mondialisation',
        'expertise.item5': 'Relations internationales',
        'expertise.item6': 'Echanges interculturels',
        'expertise.item7': 'Histoire des médias en Afrique',
        'expertise.item8': 'Presse francophone',
        'expertise.item9': 'Liberté de la presse',
        'expertise.item10': 'Développement des médias en Afrique subsaharienne',
        
        // Gallery
        'gallery.title': 'Galerie',
        
        // Contact
        'contact.title': 'Contact',
        'contact.oif.title': 'Organisation Internationale de la Francophonie (OIF)',
        'contact.oif.role': 'Responsable de programme médias',
        'contact.oif.since': 'Depuis mars 2004',
        'contact.university.title': 'Université Paris-III Sorbonne-Nouvelle',
        'contact.university.role': 'Chargé de Cours',
        'contact.university.since': 'Depuis septembre 2008',
        'contact.university.member': 'Membre élu du Conseil de gestion de l\'UFR Information et Communication',
        'contact.lenad.title': 'Lenad Consulting',
        'contact.lenad.founder': 'Fondateur : Tidiane Dioh',
        'contact.lenad.role': 'Journaliste et Consultant en Relations Internationales',
        'contact.lenad.website': 'Site web : https://lenad-consulting.com/',
        
        // Form
        'form.name': 'Nom',
        'form.email': 'Email',
        'form.subject': 'Sujet',
        'form.message': 'Message',
        'form.submit': 'Envoyer',
        'form.success': 'Message envoyé avec succès !',
        'form.error': 'Une erreur est survenue. Veuillez réessayer.',
        
        // Footer
        'footer.links.title': 'Liens Utiles',
        'footer.links.lenad': 'Lenad Consulting',
        'footer.links.oif': 'Organisation Internationale de la Francophonie (OIF)',
        'footer.links.university': 'Université Sorbonne Nouvelle',
        'footer.copyright': '© 2024 Tidiane Dioh & Lenad Consulting. Tous droits réservés.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.career': 'Career',
        'nav.services': 'Services',
        'nav.publications': 'Publications',
        'nav.teaching': 'Teaching',
        'nav.gallery': 'Gallery',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.title': 'Welcome to Tidiane Dioh\'s Website',
        'hero.subtitle': 'International relations consultant, Media Programme Manager at OIF',
        'hero.text': 'Media and international affairs specialist across Africa, Caribbean, Asia and Eastern Europe.',
        'hero.cta': 'Discover',
        
        // About
        'about.title': 'Tidiane Dioh',
        'about.text1': 'International relations consultant and Media Programme Manager at OIF since 2004.',
        'about.text2': 'Reference in Francophone media across Africa, Caribbean, Asia, Eastern Europe, with a geopolitical lens.',
        'about.text3': 'Blend of research, journalism, institutional action and academic teaching.',
        'about.text4': 'Committed to media development, press freedom and intercultural dialogue in the Francophone world.',
        
        // Career
        'career.title': 'Professional and Academic Career',
        'career.education.title': 'University Education',
        'career.education.text': 'Studies in philosophy, economics/management, international relations and info-com (Liège).',
        'career.education.doctorate': 'PhD in Information and Communication Sciences (Sorbonne Nouvelle), focusing on media and geopolitics.',
        'career.journalist.title': 'Journalism Career',
        'career.journalist.period1': 'Journalist in Liège (monthly C4).',
        'career.journalist.period2': 'Journalist in Paris (Jeune Afrique, TV5 Monde).',
        'career.journalist.articles': 'Many reports and articles.',
        'career.journalist.events': 'Covered major events (e.g. World Championships 2003).',
        'career.international.title': 'International Civil Servant',
        'career.international.since': 'Since March 2004',
        'career.international.role': 'Media Programme Manager at OIF, international relations consultant.',
        'career.international.fund': 'Manages the Support Fund for the Francophone Press of the South (Press Freedom Trophy 2009).',
        'career.international.coverage': 'Focus: Africa, Caribbean, Asia, Eastern Europe.',
        'career.teacher.title': 'University Teacher',
        'career.teacher.since': 'Since September 2008',
        'career.teacher.role': 'Lecturer at Paris-III Sorbonne-Nouvelle; elected to the Info-Com Council.',
        'career.teacher.member': 'External elected member, UFR Info-Com Council.',
        'career.teacher.subjects': 'Teaching areas:',
        'career.teacher.subject1': 'Media Geopolitics',
        'career.teacher.subject2': 'Television Systems',
        'career.teacher.subject3': 'Intercultural Exchanges, Francophonie and Globalization',
        'career.teacher.subject4': 'Media History',
        'career.teacher.jury': 'Tidiane DIOH also sat on a doctoral thesis jury at Toulouse Le Mirail University in January 2012.',
        'career.consultant.title': 'International Relations Consultant',
        'career.consultant.text': 'Founder, Lenad Consulting (international relations, media, communication).',
        'career.consultant.services': 'Strategy, geopolitical analysis, media and institutional communication support.',
        'career.consultant.link': 'Learn more',
        
        // Services
        'services.title': 'Lenad Consulting',
        'services.presentation.title': 'Presentation',
        'services.presentation.text': 'International Relations consulting firm founded by Tidiane Dioh.',
        'services.presentation.founder': 'Media and IR expert in the Francophone world.',
        'services.card1.title': 'International Relations Consulting',
        'services.card1.item1': 'Geopolitical analysis',
        'services.card1.item2': 'International relations strategies',
        'services.card1.item3': 'Support for international projects',
        'services.card1.item4': 'Diplomacy and public affairs consulting',
        'services.card2.title': 'Media and Communication Consulting',
        'services.card2.item1': 'Media strategy development',
        'services.card2.item2': 'Institutional communication consulting',
        'services.card2.item3': 'Media systems analysis',
        'services.card2.item4': 'Training and support for media professionals',
        'services.card3.title': 'Francophonie Expertise',
        'services.card3.item1': 'Consulting on Francophonie issues',
        'services.card3.item2': 'Support for projects in the French-speaking world',
        'services.card3.item3': 'Analysis of French-speaking cultural and media dynamics',
        'services.card3.item4': 'Development strategies in the French-speaking world',
        'services.card4.title': 'Training and Teaching',
        'services.card4.item1': 'Media geopolitics training',
        'services.card4.item2': 'Television systems training',
        'services.card4.item3': 'Intercultural exchanges training',
        'services.card4.item4': 'Seminars and conferences',
        'services.zones.title': 'Areas of Intervention',
        'services.zones.text': 'Main areas:',
        'services.zones.item1': 'Africa (French-speaking countries)',
        'services.zones.item2': 'Caribbean',
        'services.zones.item3': 'Asia (French-speaking countries)',
        'services.zones.item4': 'Eastern Europe',
        'services.zones.item5': 'Worldwide French-speaking space',
        
        // Publications
        'publications.title': 'Publications and Works',
        'publications.intro': 'Author of articles, books and academic work.',
        'publications.book1.title': 'New Approaches to Communication Issues in Sub-Saharan Africa',
        'publications.book1.subtitle': 'Representations, Ideology and Instrumentalization',
        'publications.book1.editor': 'L\'Harmattan Editions, Paris',
        'publications.book1.description': 'Insight on communication and media in Sub-Saharan Africa.',
        'publications.book2.title': 'Touba, Journey to the Heart of Black Islam',
        'publications.book2.editor': 'Alternatives Editions, Paris',
        'publications.book2.description': 'Illustrated story about Touba and the magal.',
        'publications.book3.title': 'History of Television in French-Speaking Black Africa, from Origins to the Present Day',
        'publications.book3.editor': 'Karthala Editions, Paris',
        'publications.book3.description': 'History of television in Francophone Black Africa.',
        
        // Teaching
        'teaching.title': 'University Teaching',
        'teaching.since': 'Teacher since 2008',
        'teaching.role': 'Lecturer at Paris-III Sorbonne-Nouvelle; elected to the Info-Com Council.',
        'teaching.subjects': 'Teaching areas:',
        'teaching.subject1': 'Media Geopolitics',
        'teaching.subject2': 'Television Systems',
        'teaching.subject3': 'Intercultural Exchanges, Francophonie and Globalization',
        'teaching.subject4': 'Media History',
        'teaching.jury': 'PhD jury (Toulouse Le Mirail, 2012)',
        
        // Expertise
        'expertise.title': 'Expertise and Areas of Competence',
        'expertise.intro': 'Expertise in media, international relations and Francophonie:',
        'expertise.item1': 'Media and communication',
        'expertise.item2': 'Media geopolitics',
        'expertise.item3': 'Television systems',
        'expertise.item4': 'Francophonie and globalization',
        'expertise.item5': 'International relations',
        'expertise.item6': 'Intercultural exchanges',
        'expertise.item7': 'Media history in Africa',
        'expertise.item8': 'French-speaking press',
        'expertise.item9': 'Press freedom',
        'expertise.item10': 'Media development in sub-Saharan Africa',
        
        // Gallery
        'gallery.title': 'Gallery',
        
        // Contact
        'contact.title': 'Contact',
        'contact.oif.title': 'International Organisation of La Francophonie (OIF)',
        'contact.oif.role': 'Media Programme Manager',
        'contact.oif.since': 'Since March 2004',
        'contact.university.title': 'Paris-III Sorbonne-Nouvelle University',
        'contact.university.role': 'Lecturer',
        'contact.university.since': 'Since September 2008',
        'contact.university.member': 'Elected member of the Management Council of the Information and Communication UFR',
        'contact.lenad.title': 'Lenad Consulting',
        'contact.lenad.founder': 'Founder: Tidiane Dioh',
        'contact.lenad.role': 'Journalist and International Relations Consultant',
        'contact.lenad.website': 'Website: https://lenad-consulting.com/',
        
        // Form
        'form.name': 'Name',
        'form.email': 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.submit': 'Send',
        'form.success': 'Message sent successfully!',
        'form.error': 'An error occurred. Please try again.',
        
        // Footer
        'footer.links.title': 'Useful Links',
        'footer.links.lenad': 'Lenad Consulting',
        'footer.links.oif': 'International Organisation of La Francophonie (OIF)',
        'footer.links.university': 'Sorbonne Nouvelle University',
        'footer.copyright': '© 2024 Tidiane Dioh & Lenad Consulting. All rights reserved.'
    }
};

// Fonction pour changer la langue
function changeLanguage(lang) {
    // Sauvegarder la préférence
    localStorage.setItem('preferredLanguage', lang);
    
    // Mettre à jour les boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Mettre à jour le contenu
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'IMG') {
                element.alt = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Mettre à jour l'attribut lang du HTML
    document.documentElement.lang = lang;
}

// Initialiser la langue au chargement
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'fr';
    changeLanguage(savedLang);
    
    // Ajouter les écouteurs d'événements aux boutons de langue
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
});

