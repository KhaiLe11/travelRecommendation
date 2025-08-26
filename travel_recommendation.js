// Wherever U Go Navigation JavaScript

// Add all styling and aesthetics
function addStyling() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            width: 100%;
            text-align: center;
        }
        
        nav {
            background-color: #000000;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            gap: 2rem;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }
        
        .logo {
            width: 32px;
            height: 32px;
            border: 2px solid white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        
        .logo::before {
            content: "✈";
            color: white;
            font-size: 18px;
            transform: rotate(45deg);
        }
        
        .brand-name {
            color: white;
            font-family: Georgia, serif;
            font-style: italic;
            font-size: 1.5rem;
            font-weight: normal;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.3s ease;
            padding: 0.5rem 1rem;
            border-radius: 5px;
        }
        
        .nav-links a:hover {
            background-color: rgba(255,255,255,0.1);
            opacity: 0.8;
        }
        
        .search-section {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        
        .search-input {
            padding: 0.8rem 1.2rem;
            border: none;
            border-radius: 25px;
            width: 350px;
            font-size: 1rem;
            outline: none;
            background-color: #e0ffff;
            border: 2px solid #00bcd4;
            transition: all 0.3s ease;
            color: #006064;
        }
        
        .search-input:focus {
            box-shadow: 0 0 0 4px rgba(0, 188, 212, 0.3);
            border-color: #00e5ff;
            background-color: #f0ffff;
        }
        
        .search-input::placeholder {
            color: #008ba3;
        }
        
        .btn {
            padding: 0.8rem 1.5rem;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.3s ease;
            min-width: 100px;
        }
        
        .btn-search {
            background-color: #00bcd4;
            color: white;
            border: 2px solid #00bcd4;
        }
        
        .btn-search:hover {
            background-color: #00e5ff;
            border-color: #00e5ff;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 188, 212, 0.4);
        }
        
        .btn-reset {
            background-color: #00acc1;
            color: white;
            border: 2px solid #00acc1;
        }
        
        .btn-reset:hover {
            background-color: #00bcd4;
            border-color: #00bcd4;
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0, 172, 193, 0.4);
        }
        
        @media (max-width: 768px) {
            nav {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-links {
                gap: 1rem;
            }
            
            .search-section {
                flex-direction: column;
                width: 100%;
            }
            
            .search-input {
                width: 100%;
            }
        }
        
        /* Home Page Styles */
        .home-section {
            min-height: 100vh;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                              url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            position: relative;
            width: 100%;
        }
        
        .home-content {
            max-width: 800px;
            width: 100%;
            padding: 2rem;
            z-index: 2;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        
        .home-content h1 {
            font-size: 3.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            font-family: Georgia, serif;
            font-style: italic;
            text-align: center;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
        
        .intro-text {
            font-size: 1.3rem;
            line-height: 1.8;
            margin-bottom: 2.5rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
            opacity: 0.95;
            text-align: center;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
        }
        
        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        .cta-primary, .cta-secondary {
            padding: 1rem 2rem;
            border: none;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }
        
        .cta-primary {
            background: linear-gradient(135deg, #00bcd4, #00e5ff);
            color: white;
            box-shadow: 0 4px 15px rgba(0, 188, 212, 0.4);
        }
        
        .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 188, 212, 0.6);
        }
        
        .cta-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }
        
        .cta-secondary:hover {
            background: white;
            color: #333;
            transform: translateY(-3px);
        }
        
        .social-media {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            z-index: 2;
        }
        
        .social-media h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
            opacity: 0.9;
        }
        
        .social-icons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
        }
        
        .social-icon {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            overflow: hidden;
        }
        
        .social-icon img {
            width: 24px;
            height: 24px;
            object-fit: contain;
            transition: all 0.3s ease;
        }
        
        .social-icon:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.6);
            transform: translateY(-3px) scale(1.1);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }
        
        .social-icon:hover img {
            transform: scale(1.1);
        }
        
        /* Responsive design for home page */
        @media (max-width: 768px) {
            .home-content h1 {
                font-size: 2.5rem;
            }
            
            .intro-text {
                font-size: 1.1rem;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .social-icons {
                gap: 1rem;
            }
            
            .social-icon {
                width: 45px;
                height: 45px;
                font-size: 1.3rem;
            }
        }
        
        /* About Us Page Styles */
        .about-section {
            min-height: 100vh;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                              url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 0;
        }
        
        .about-nav {
            background-color: #000000;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            flex-direction: row-reverse;
        }
        
        .nav-brand {
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }
        
        .nav-brand span:first-child {
            font-size: 1.5rem;
        }
        
        .nav-brand span:last-child {
            color: white;
            font-family: Georgia, serif;
            font-style: italic;
            font-size: 1.5rem;
            font-weight: normal;
        }
        
        .nav-menu {
            display: flex;
            gap: 2rem;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            font-weight: 500;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            transition: all 0.3s ease;
        }
        
        .nav-menu a:hover,
        .nav-menu a.active {
            background-color: rgba(255,255,255,0.1);
            color: #00bcd4;
        }
        
        .about-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
        }
        
        .company-info {
            text-align: center;
            margin-bottom: 4rem;
        }
        
        .company-info h1 {
            font-size: 3rem;
            color: white;
            margin-bottom: 2rem;
            font-family: Georgia, serif;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        
        .company-description,
        .company-mission {
            font-size: 1.2rem;
            line-height: 1.8;
            color: white;
            max-width: 800px;
            margin: 0 auto 1.5rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
            opacity: 0.95;
        }
        
        .team-section {
            text-align: center;
        }
        
        .team-section h2 {
            font-size: 2.5rem;
            color: white;
            margin-bottom: 3rem;
            font-family: Georgia, serif;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .team-member {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .team-member:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .member-photo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #00bcd4, #00e5ff);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.8rem;
            margin: 0 auto 1.5rem;
            /* remove forced text color so emoji can render naturally */
            color: inherit;
            font-family: 'Segoe UI Emoji', 'Noto Color Emoji', 'Apple Color Emoji', 'Twemoji Mozilla', 'Segoe UI Symbol', sans-serif;
        }
        
        .team-member h3 {
            font-size: 1.5rem;
            color: #333;
            margin-bottom: 0.5rem;
            font-weight: 600;
        }
        
        .role {
            font-size: 1.1rem;
            color: #00bcd4;
            font-weight: 500;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .bio {
            font-size: 1rem;
            line-height: 1.6;
            color: #666;
        }
        
        /* Responsive design for About Us page */
        @media (max-width: 768px) {
            .about-content {
                padding: 2rem 1rem;
            }
            
            .company-info h1 {
                font-size: 2.5rem;
            }
            
            .team-section h2 {
                font-size: 2rem;
            }
            
            .team-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .nav-menu {
                gap: 1rem;
            }
        }
        
        /* Contact Us Page Styles */
        .contact-section {
            min-height: 100vh;
            background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                              url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80');
            background-size: cover;
            background-position: center;
            background-attachment: fixed;
            padding: 0;
            position: relative;
        }
        
        .contact-nav {
            background-color: #000000;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            flex-direction: row-reverse;
        }
        
        .contact-content {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: calc(100vh - 72px);
            padding: 2rem 1rem;
        }
        
        .contact-card {
            width: 100%;
            max-width: 720px;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.28);
            border-radius: 16px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.25);
            padding: 2rem;
            text-align: left;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            color: white;
        }
        
        .contact-card h1 {
            font-family: Georgia, serif;
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
            color: white;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
        }
        
        .contact-intro {
            color: rgba(255,255,255,0.9);
            margin-bottom: 1.5rem;
        }
        
        .contact-form .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin-bottom: 1rem;
        }
        
        .contact-form label {
            font-weight: 600;
            color: rgba(255,255,255,0.95);
        }
        
        .contact-form input,
        .contact-form textarea {
            padding: 0.9rem 1rem;
            border: 2px solid rgba(255,255,255,0.35);
            background: rgba(255,255,255,0.92);
            border-radius: 10px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
            color: #222;
        }
        
        .contact-form input:focus,
        .contact-form textarea:focus {
            border-color: #00bcd4;
            box-shadow: 0 0 0 4px rgba(0,188,212,0.15);
            background: rgba(255,255,255,0.98);
        }
        
        .btn-submit {
            background-color: #00bcd4;
            color: white;
            border: 2px solid #00bcd4;
            padding: 0.9rem 1.5rem;
            border-radius: 12px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        
        .btn-submit:hover {
            background-color: #00e5ff;
            border-color: #00e5ff;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(0, 188, 212, 0.25);
        }
        
        @media (max-width: 768px) {
            .contact-card { padding: 1.25rem; }
        }

        /* Results Section Styles */
        .results-section {
            width: 100%;
            max-width: 1100px;
            margin: 2rem auto 4rem;
            padding: 0 1rem;
            z-index: 2;
        }
        
        .results-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.5rem;
        }
        
        .result-card {
            background: rgba(255,255,255,0.95);
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .result-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 35px rgba(0,0,0,0.28);
        }
        
        .result-card img {
            width: 100%;
            height: 160px;
            object-fit: cover;
            display: block;
        }
        
        .result-body {
            padding: 1rem 1rem 1.2rem;
            text-align: left;
        }
        
        .result-body h3 {
            margin-bottom: 0.4rem;
            font-size: 1.15rem;
            color: #222;
        }
        
        .result-body p {
            color: #555;
            font-size: 0.95rem;
            line-height: 1.5;
        }
        
        .results-empty {
            text-align: center;
            color: white;
            opacity: 0.95;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.7);
        }
    `;
    document.head.appendChild(style);
}

// Add logo and branding
function addLogoAndBranding() {
    const mainNav = document.querySelector('nav');
    
    // Only add logo and branding to the main navigation, not the About Us navigation
    if (mainNav && !mainNav.classList.contains('about-nav')) {
        // Create logo section
        const logoSection = document.createElement('div');
        logoSection.className = 'logo-section';
        
        const logo = document.createElement('div');
        logo.className = 'logo';
        
        const brandName = document.createElement('span');
        brandName.className = 'brand-name';
        brandName.textContent = 'Wherever U Go';
        
        logoSection.appendChild(logo);
        logoSection.appendChild(brandName);
        
        // Insert logo section at the beginning
        mainNav.insertBefore(logoSection, mainNav.firstChild);
    }
}

// Restructure navigation for better styling
function restructureNavigation() {
    const mainNav = document.querySelector('nav');
    
    // Only restructure the main navigation, not the About Us navigation
    if (mainNav && !mainNav.classList.contains('about-nav')) {
        // Create nav links container
        const navLinks = document.createElement('div');
        navLinks.className = 'nav-links';
        
        // Move all anchor tags to nav links container
        const anchors = mainNav.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            navLinks.appendChild(anchor);
        });
        
        // Create search section container
        const searchSection = document.createElement('div');
        searchSection.className = 'search-section';
        
        // Move search input and buttons to search section
        const searchInput = mainNav.querySelector('#searchInput');
        const searchButton = mainNav.querySelector('button[onclick="searchRecommendations()"]');
        const resetButton = mainNav.querySelector('button[onclick="resetSearch()"]');
        
        // Apply proper classes to buttons for styling
        if (searchButton) {
            searchButton.className = 'btn btn-search';
            searchButton.textContent = 'Search';
        }
        if (resetButton) {
            resetButton.className = 'btn btn-reset';
            resetButton.textContent = 'Reset';
        }
        
        // Apply proper class to search input for styling
        if (searchInput) {
            searchInput.className = 'search-input';
        }
        
        if (searchInput) searchSection.appendChild(searchInput);
        if (searchButton) searchSection.appendChild(searchButton);
        if (resetButton) searchSection.appendChild(resetButton);
        
        // Clear nav and add restructured elements
        mainNav.innerHTML = '';
        mainNav.appendChild(navLinks);
        mainNav.appendChild(searchSection);
    }
}

// Embedded travel data (no fetch needed)
const travelData = {
    "countries": [
        {
            "id": 1,
            "name": "Australia",
            "cities": [
                {
                    "name": "Sydney, Australia",
                    "imageUrl": "enter_your_image_for_sydney.jpg",
                    "description": "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                },
                {
                    "name": "Melbourne, Australia",
                    "imageUrl": "enter_your_image_for_melbourne.jpg",
                    "description": "A cultural hub famous for its art, food, and diverse neighborhoods."
                }
            ]
        },
        {
            "id": 2,
            "name": "Japan",
            "cities": [
                {
                    "name": "Tokyo, Japan",
                    "imageUrl": "enter_your_image_for_tokyo.jpg",
                    "description": "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
                },
                {
                    "name": "Kyoto, Japan",
                    "imageUrl": "enter_your_image_for_kyoto.jpg",
                    "description": "Known for its historic temples, gardens, and traditional tea houses."
                }
            ]
        },
        {
            "id": 3,
            "name": "Brazil",
            "cities": [
                {
                    "name": "Rio de Janeiro, Brazil",
                    "imageUrl": "enter_your_image_for_rio.jpg",
                    "description": "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
                },
                {
                    "name": "São Paulo, Brazil",
                    "imageUrl": "enter_your_image_for_sao-paulo.jpg",
                    "description": "The financial hub with diverse culture, arts, and a vibrant nightlife."
                }
            ]
        }
    ],
    "temples": [
        {
            "id": 1,
            "name": "Angkor Wat, Cambodia",
            "imageUrl": "enter_your_image_for_angkor-wat.jpg",
            "description": "A UNESCO World Heritage site and the largest religious monument in the world."
        },
        {
            "id": 2,
            "name": "Taj Mahal, India",
            "imageUrl": "enter_your_image_for_taj-mahal.jpg",
            "description": "An iconic symbol of love and a masterpiece of Mughal architecture."
        }
    ],
    "beaches": [
        {
            "id": 1,
            "name": "Bora Bora, French Polynesia",
            "imageUrl": "enter_your_image_for_bora-bora.jpg",
            "description": "An island known for its stunning turquoise waters and luxurious overwater bungalows."
        },
        {
            "id": 2,
            "name": "Copacabana Beach, Brazil",
            "imageUrl": "enter_your_image_for_copacabana.jpg",
            "description": "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
        }
    ]
};

// Create/ensure results container exists after the home section
function ensureResultsContainer() {
    let container = document.getElementById('results');
    if (!container) {
        container = document.createElement('div');
        container.id = 'results';
        container.className = 'results-section';
        const homeSection = document.getElementById('home');
        if (homeSection && homeSection.parentNode) {
            homeSection.parentNode.insertBefore(container, homeSection.nextSibling);
        } else {
            document.body.appendChild(container);
        }
    }
    return container;
}

// Render recommendation cards
function renderRecommendations(items) {
    const container = ensureResultsContainer();
    container.innerHTML = '';

    if (!items || items.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'results-empty';
        empty.textContent = 'No results found. Try different keywords (e.g., beach, temple, country/countries, or a country name).';
        container.appendChild(empty);
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
    }

    const grid = document.createElement('div');
    grid.className = 'results-grid';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'result-card';

        const img = document.createElement('img');
        img.src = item.imageUrl || '';
        img.alt = item.name || 'Destination image';
        img.onerror = function(){ this.style.display = 'none'; };

        const body = document.createElement('div');
        body.className = 'result-body';

        const title = document.createElement('h3');
        title.textContent = item.name || 'Unknown Place';

        const desc = document.createElement('p');
        desc.textContent = item.description || '';

        body.appendChild(title);
        body.appendChild(desc);
        card.appendChild(img);
        card.appendChild(body);
        grid.appendChild(card);
    });

    container.appendChild(grid);
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Normalize and search through data by keyword
function filterRecommendations(data, keywordRaw) {
    const keyword = (keywordRaw || '').toLowerCase().trim();
    if (!keyword) return [];

    const normalizeCategory = (k) => {
        const map = {
            'beach': 'beach',
            'beaches': 'beach',
            'temple': 'temple',
            'temples': 'temple',
            'country': 'country',
            'countries': 'country',
        };
        return map[k] || null;
    };

    // Helpers to create a flat list of items with name/description/imageUrl
    const items = [];

    // Beaches
    if (Array.isArray(data.beaches)) {
        data.beaches.forEach(b => items.push({
            type: 'beach',
            name: b.name,
            description: b.description,
            imageUrl: b.imageUrl
        }));
    }

    // Temples
    if (Array.isArray(data.temples)) {
        data.temples.forEach(t => items.push({
            type: 'temple',
            name: t.name,
            description: t.description,
            imageUrl: t.imageUrl
        }));
    }

    // Countries -> cities
    if (Array.isArray(data.countries)) {
        data.countries.forEach(c => {
            const countryName = (c.name || '').toLowerCase();
            if (Array.isArray(c.cities)) {
                c.cities.forEach(city => items.push({
                    type: 'city',
                    country: c.name,
                    name: city.name,
                    description: city.description,
                    imageUrl: city.imageUrl
                }));
            }
        });
    }

    // Category shortcuts: beach / temple / country
    const normalizedCategory = normalizeCategory(keyword);
    if (normalizedCategory === 'beach') {
        return items.filter(i => i.type === 'beach');
    }
    if (normalizedCategory === 'temple') {
        return items.filter(i => i.type === 'temple');
    }
    if (normalizedCategory === 'country') {
        // Show all cities (country results)
        return items.filter(i => i.type === 'city');
    }

    // Country name specific search (e.g., "japan", "australia")
    const countryMatch = (data.countries || []).find(c => (c.name || '').toLowerCase() === keyword);
    if (countryMatch && Array.isArray(countryMatch.cities)) {
        return countryMatch.cities.map(city => ({
            type: 'city',
            country: countryMatch.name,
            name: city.name,
            description: city.description,
            imageUrl: city.imageUrl
        }));
    }

    // Fallback: generic keyword search across all items
    return items.filter(item => {
        const name = (item.name || '').toLowerCase();
        const description = (item.description || '').toLowerCase();
        const country = (item.country || '').toLowerCase();
        return name.includes(keyword) || description.includes(keyword) || country.includes(keyword);
    });
}

// Update search to use embedded data
async function searchRecommendations() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput ? searchInput.value.trim() : '';

    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }

    const results = filterRecommendations(travelData, searchTerm);
    // Show home section to present results
    hideAllSections();
    showSection('home');
    renderRecommendations(results);
}

// Update reset to clear results
function resetSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    const container = document.getElementById('results');
    if (container) container.innerHTML = '';
    console.log('Search reset');
}

// Enforce specific Our Team content so changes always show
function applyAboutUsOverrides() {
    const teamMembers = document.querySelectorAll('.team-grid .team-member');
    if (!teamMembers || teamMembers.length < 4) return;
    
    // Member 2: Patrick Thanh, emoji 👨‍💻
    const member2 = teamMembers[1];
    if (member2) {
        const photo2 = member2.querySelector('.member-photo');
        const name2 = member2.querySelector('h3');
        if (photo2) photo2.textContent = '👨‍💻';
        if (name2) name2.textContent = 'Patrick Thanh';
    }
    
    // Member 3: Annie Kim, emoji 👩‍💼
    const member3 = teamMembers[2];
    if (member3) {
        const photo3 = member3.querySelector('.member-photo');
        const name3 = member3.querySelector('h3');
        if (photo3) photo3.textContent = '👩‍💼';
        if (name3) name3.textContent = 'Annie Kim';
    }
}

// Contact form submission handler
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
            alert('Please fill in your name, email, and message.');
            return;
        }
        // Simple email format check
        const emailOk = /.+@.+\..+/.test(email);
        if (!emailOk) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Thank you, ' + name + '! Your message has been sent.');
        form.reset();
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Wherever U Go Navigation initialized');
    
    // Add styling
    addStyling();
    
    // Add logo and branding
    addLogoAndBranding();
    
    // Restructure navigation for proper styling
    restructureNavigation();
    
    // Initialize smooth navigation
    initSmoothNavigation();
    
    // Ensure About nav starts hidden and main nav visible
    const aboutNav = document.querySelector('.about-nav');
    if (aboutNav) {
        aboutNav.style.display = 'none';
    }
    const contactNav = document.querySelector('.contact-nav');
    if (contactNav) {
        contactNav.style.display = 'none';
    }
    const mainNav = document.querySelector('nav');
    if (mainNav && !mainNav.classList.contains('about-nav')) {
        mainNav.style.display = 'flex';
    }
    
    // Show home section by default
    showHomeByDefault();
    
    // Apply About Us overrides once DOM is ready
    applyAboutUsOverrides();
    
    // Init contact form handler
    initContactForm();
});

// Initialize smooth navigation between sections
function initSmoothNavigation() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"], .about-nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Hide all sections first
                hideAllSections();
                
                // Show the target section
                showSection(targetId);
                
                // Update active navigation state
                updateActiveNavigation(this);
            }
        });
    });
}

// Hide all sections
function hideAllSections() {
    const sections = document.querySelectorAll('.home-section, .about-section, .contact-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

// Utility to clear results container if present
function clearResults() {
    const container = document.getElementById('results');
    if (container) container.innerHTML = '';
}

// Show specific section
function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        
        // Toggle navbars based on section
        const mainNav = document.querySelector('nav');
        const aboutNav = document.querySelector('.about-nav');
        const contactNav = document.querySelector('.contact-nav');
        if (sectionId === 'about') {
            if (mainNav && !mainNav.classList.contains('about-nav')) mainNav.style.display = 'none';
            if (contactNav) contactNav.style.display = 'none';
            if (aboutNav) aboutNav.style.display = 'flex';
            // Hide results when not on home
            clearResults();
            applyAboutUsOverrides();
        } else if (sectionId === 'contact') {
            if (mainNav && !mainNav.classList.contains('about-nav')) mainNav.style.display = 'none';
            if (aboutNav) aboutNav.style.display = 'none';
            if (contactNav) contactNav.style.display = 'flex';
            // Hide results when not on home
            clearResults();
        } else {
            if (aboutNav) aboutNav.style.display = 'none';
            if (contactNav) contactNav.style.display = 'none';
            if (mainNav && !mainNav.classList.contains('about-nav')) mainNav.style.display = 'flex';
        }
        
        // Smooth scroll to top of the section
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

// Update active navigation state
function updateActiveNavigation(clickedLink) {
    // Remove active class from all links
    const allLinks = document.querySelectorAll('nav a, .about-nav a');
    allLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    clickedLink.classList.add('active');
}

// Show home section by default
function showHomeByDefault() {
    hideAllSections();
    showSection('home');
    clearResults();
    
    // Set home as active
    const homeLink = document.querySelector('nav a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }
}
