// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-articles",
          title: "articles",
          description: "My articles related to my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-published-projects",
          title: "published projects",
          description: "A collection of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-vibration-anomaly-detection",
          title: 'Vibration anomaly detection',
          description: "Vibration anomaly detection with ardunio and denoising autoencoder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project_anomalie_detection.html";
            },},{id: "projects-smart-weather-station",
          title: 'Smart Weather Station',
          description: "Smart Weather Station with sensors and scikit-learn",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project_weather_station.html";
            },},{id: "projects-arduino-tutorial",
          title: 'Arduino tutorial',
          description: "Tutorial to learn how to use Arduino",
          section: "Projects",handler: () => {
              window.location.href = "/projects/12_project_arduino_tutorial.html";
            },},{id: "projects-structural-monitoring",
          title: 'Structural Monitoring',
          description: "Structural monitoring with ESP32 and accelerometer and gyroscope data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/13_project_deformation_structure.html";
            },},{id: "projects-blockchain-proof-of-work-simulation",
          title: 'Blockchain Proof of Work Simulation',
          description: "A blockchain (Online and multi-threaded) proof of work simulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/14_project_blockchain_simulator.html";
            },},{id: "projects-quantum-kmeans",
          title: 'Quantum KMeans',
          description: "Quantum version of the KMeans algorithm",
          section: "Projects",handler: () => {
              window.location.href = "/projects/15_qmeans.html";
            },},{id: "projects-crypto-platform",
          title: 'Crypto Platform',
          description: "Complete online NFT/Crypto ecosystem simulator",
          section: "Projects",handler: () => {
              window.location.href = "/projects/16_crypto_platform.html";
            },},{id: "projects-basketball-animation-creator",
          title: 'Basketball Animation Creator',
          description: "App to create basketball system animations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/17_basketball_animation.html";
            },},{id: "projects-esp32-eliobot-voice-control-tinyml",
          title: 'ESP32 ElioBot Voice Control (TinyML)',
          description: "Embedded voice command system (Offline) on ESP32 via TinySpeech. Quantized model (Int8) for real-time robot piloting.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/18_tinyspeech_eliobot.html";
            },},{id: "projects-epidemic-simulation",
          title: 'Epidemic simulation',
          description: "Simulation of the spread of a virus in a population",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project_simulation_virus.html";
            },},{id: "projects-dynamic-graph-neural-network",
          title: 'Dynamic graph neural network',
          description: "Clustering with dynamic neural networks",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project_dynamic_neural_network.html";
            },},{id: "projects-no-code-ai-platform",
          title: 'No Code AI platform',
          description: "Web App for machine learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project_no_code_ai_platform.html";
            },},{id: "projects-plotly-tutorial",
          title: 'Plotly tutorial',
          description: "Plotly tutorial in Python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project_plotly_tuto.html";
            },},{id: "projects-real-time-stock-prices",
          title: 'Real time stock prices',
          description: "Real time stock prices with Streamlit and Plotly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project_stock_prices.html";
            },},{id: "projects-parrot-wallet",
          title: 'Parrot wallet',
          description: "Fake wallet based on real crypto prices using Flask",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project_parrot_wallet.html";
            },},{id: "projects-bonx-monster",
          title: 'Bonx monster',
          description: "Flask web app to collect monster cards and battle with them",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project_bonx_monster.html";
            },},{id: "projects-ecg-generator",
          title: 'ECG generator',
          description: "ECG generator with streamlit using variational autoencoder",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project_ecg_generator.html";
            },},{id: "projects-world-in-datasets",
          title: 'World in datasets',
          description: "Platforms to search datasets",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project_search_dataset.html";
            },},{
        id: 'social-discord',
        title: 'Discord',
        section: 'Socials',
        handler: () => {
          window.open("https://discord.com/users/188952054876733440", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%74%6F%6E%69%6E%6C%65%66%65%76%72%65%34%35@%69%63%6C%6F%75%64.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/antonin-lfv", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/antonin-lefevre", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@antoninlefevre45", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-9051-1697", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Antonin_Lefevre/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
