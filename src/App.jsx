import React, { useEffect, useRef, useState } from 'react';
import iitbLogo from './assets/iitb.webp';
import igem2024Image from './assets/2024_igem.png';
import igem2025Image from './assets/2025_igem.png';
// import groundPicImage from './assets/ground_pic.png';
import groundPicImage from './assets/cropped_ground.png';
import memberPhotos from './assets/members';
import teamImage from './assets/team_igem.png';
import gogecCert from './assets/gogec_cert.png';
import gold from './assets/2024_gold.png';
import crisis from './assets/2024_crisis.png';
import silver from './assets/2025_silver.png';
import poster from './assets/2024_poster.png';
import aspire from './assets/2024_aspire.png';
import bioquest from './assets/2025_bioquest.png';
import aiim from './assets/aiim.png';
import wrcb from './assets/wrcb.png';
import onePic from './assets/onePic.png';
import twoPic from './assets/twoPic.png';
import wetlab1 from './assets/wetlab_1.png';
import wetlab2 from './assets/wetlab_2.png';
import wetlab3 from './assets/wetlab_3.png';
import wetlab4 from './assets/wetlab_4.png';
import wetlab5 from './assets/wetlab_5.png';
import wetlab6 from './assets/wetlab_6.png';
import wetlab7 from './assets/wetlab_7.png';
import profSaket from './assets/profSaket.png';
import profRajesh from './assets/profRajesh.png';
import navya from './assets/navya_ex.jpg';
import arth from './assets/arth_ex.png';
import { BarChart3, Code2, FlaskConical, Linkedin, Instagram, Users } from "lucide-react";
import VillagesSection from './components/VillagesSection'
import gallery1 from './assets/gallery_1.png';
import gallery3 from './assets/gallery_3.png';
import gallery4 from './assets/gallery_4.png';
import gallery5 from './assets/gallery_5.png';
import gallery6 from './assets/gallery_6.png';
import gallery7 from './assets/gallery_7.png';
import gallery8 from './assets/gallery_8.png';
import gallery9 from './assets/gallery_9.png';
import gallery10 from './assets/gallery_10.png';

const stats = [
  { label: 'Silver Medal', value: 'iGEM 2025' },
  { label: 'Gold Medal', value: 'iGEM 2024' }
];

const focusPoints = [
  {
    title: 'iGEM 2024',
    text: 'GOLD MEDAL'
  },
  {
    title: 'Faculty Mentors',
    text: 'Prof. Kiran Kondabagil (BSBE) and Prof. Saket Choudhary (KCDH).'
  },
];

const resourceLinks = [
  { label: '2025 iGEM Wiki', href: 'https://2025.igem.wiki/iit-bombay/' },
  { label: '2024 iGEM Wiki', href: 'https://2024.igem.wiki/iit-bombay/' },
  {
    label: 'IITB News (Silver Medal)',
    href: 'https://www.iitb.ac.in/breaking-news/iit-bombays-igem-team-secures-silver-medal-paris-competition'
  }
];

const facultyMentors = [
  {
    name: 'Prof. Saket Choudhary',
    role: 'Faculty Advisor',
    dept: 'Koita Centre for Digital Health (KCDH), IIT Bombay',
    text: 'Guides project strategy at the intersection of computation, systems thinking, and translational research planning.',
    image: profSaket
  },
  {
    name: 'Prof. Rajesh Patkar',
    role: 'Faculty Advisor',
    dept: 'Department of Biosciences and Bioengineering (BSBE), IIT Bombay',
    text: 'Supports scientific direction, experimental rigor, and multidisciplinary integration across the iGEM workflow.',
    image: profRajesh
  }
];

const wikiCards = [
  {
    season: '2025 Wiki',
    title: 'Aureolyze',
    description: [
      'Aureolyze targets AMR biofilms using engineered extracellular serine protease pathways.',
      'The wiki presents design rationale, experiments, modeling, and final outcomes.'
    ],
    href: 'https://2025.igem.wiki/iit-bombay/',
    cta: 'Open 2025 Wiki',
    logo: igem2025Image
  },
  {
    season: '2024 Wiki',
    title: 'CalciCapture',
    description: [
      'CalciCapture explored climate-focused synthetic biology through calcium-driven biodesign.',
      'The wiki covers methods, validation, results, and documented team contributions.'
    ],
    href: 'https://2024.igem.wiki/iit-bombay/',
    cta: 'Open 2024 Wiki',
    logo: igem2024Image
  }
];

const achievements = [
  {
    year: '2024',
    title: 'Gold Medal — iGEM Grand Jamboree 2024',
    text: 'IIT Bombay secured a Gold Medal in its debut season and established a strong foundation in global synthetic biology competition.',
    image: gold
  },
  {
    year: '2024',
    title: 'Best Climate Crisis Project Nomination',
    text: 'The 2024 project was nominated in the Best Climate Crisis category, recognizing its sustainability relevance and innovation.',
    image: crisis
  },
  {
    year: '2025',
    title: 'Silver Medal — iGEM 2025 (Paris)',
    text: 'The team earned a Silver Medal at iGEM 2025, competing among 400+ teams worldwide.',
    image: silver
  },
  {
    year: '2024',
    title: 'Best Poster Award — AIIM',
    text: 'At the All India iGEM Meet, the team’s Aureolyze presentation received the Best Poster Award.',
    image: aiim
  },
  {
    year: '2024',
    title: 'Institutional and Industry Recognition',
    text: 'The Aspire IITB Research Park Foundation highlighted the team’s achievements, with support from partners including Baker Hughes.',
    image: aspire
  },
  {
    year: '2025',
    title: 'BioQuest Impact and Media Coverage',
    text: 'BioQuest reached 1,500+ students across Mumbai and was featured in Times of India for student outreach impact.',
    image: bioquest
  },
  
  {
    year: '2025',
    title: 'WRCB Recognition for Global Performance',
    text: 'Wadhwani Research Centre for Bioengineering acknowledged the team’s international standing and interdisciplinary AMR-focused research progress.',
   image: wrcb
  },
  {
    year: '2026',
    title: 'Silver Medal — GOGEC',
    text: 'Aureolyze secured Silver Medal at GOGEC 2026, extending the team’s global recognition trajectory beyond iGEM seasons.',
    image: gogecCert
  }
];

const subsystemIconMap = {
  'wet-lab': FlaskConical,
  'dry-lab': BarChart3,
  'human-practices-design': Users,
  'web-development': Code2
};





const highlightGallery = [
  {
    src: igem2025Image,
    alt: 'iGEM IIT Bombay team photo at iGEM 2025',
    caption: 'Team iGEM IIT Bombay at iGEM Grand Jamboree 2025.'
  },
  {
    src: igem2024Image,
    alt: 'iGEM IIT Bombay team photo at iGEM 2024',
    caption: 'Team iGEM IIT Bombay at iGEM Grand Jamboree 2024.'
  },
  {
    src: teamImage,
    alt: 'Ground photo highlight',
    caption: 'Team ground photo highlight.'
  }
];
const extraGallery = [
  { src: gallery1, alt: 'Wet lab in action' },
  { src: gallery3, alt: 'iGEM medal at Eiffel Tower' },
  { src: gallery4, alt: 'Team at Synthetic Biology board' },
  { src: gallery5, alt: 'Laptop group at Jamboree' },
  { src: gallery6, alt: 'Gold medal in hands' },
  { src: gallery7, alt: 'iGEM badges wall' },
  { src: gallery8, alt: 'Team with iGEM mascot' },
  { src: gallery9, alt: 'Team at AIM IIT Bombay' },
  { src: gallery10, alt: 'Full team photo' },
];

const wetLabHighlights = [wetlab1, wetlab2, wetlab3, wetlab4, wetlab5, wetlab6, wetlab7];

const pastIgemMembers = [
  {
   name: 'Arth Agrawal',
   tenure: "Jul' 24 - Nov' 25",
  subsystem: 'iHP',
  role: 'Human Practices lead',
  image: arth,
  imagePosition: 'center 20%',
  imageZoom: 1.3,
  imageHeight: 240,
  linkedin: 'https://www.linkedin.com/in/arth-agrawal-05998527b/'
  },
   {
   name: 'Navya ',
   tenure: "May' 24 - Oct' 24",
  subsystem: 'Dry Lab',
  role: 'Modelling and Simulation',
  image: navya,
  imagePosition: 'center 80%',
  imageZoom: 1,
  imageHeight: 240,
  linkedin: 'https://www.linkedin.com/in/navya-hissaria-951b79262'
  },
  
];

const subsystemData = [
  {
    route: 'wet-lab',
    anchorId: 'subsystem-wet-lab',
    title: 'Wet Lab',
    text: 'Experimental design, cloning, validation, and biosafety protocols.',
    details: 'Designs and executes the full experimental pipeline: construct assembly, strain validation, assay development, and biosafety checks for reproducible in lab results.',
    role: 'Wet Lab',
    members: [
      {name: 'Aarohi Gupta',
          role: 'Team Lead',
          linkedin: 'https://www.linkedin.com/in/aarohi-gupta-724123314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          image: memberPhotos.wetLab.aarohi,
          imagePosition: 'center 0%',
          imageZoom: 1,
        },
       {name: 'Ranit S Sooraj',
          role: 'Sr. Wetlab Researcher',
          linkedin: 'https://www.linkedin.com/in/ranit-sooraj-721705378',
          image: memberPhotos.wetLab.ranit,
          imagePosition: 'center 40%',
          imageZoom: 1.2,
        },
           {name: 'Durva Sachin Saraf',
          role: 'Sr. Wetlab Researcher',
          linkedin: 'https://www.linkedin.com/in/durva-saraf-b18408318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          image: memberPhotos.wetLab.durva,
          imagePosition: 'center 0%',
            imageZoom: 1,
        },
        {name: 'Hardika Jain',
          role: 'Wet Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/hardika-jain-2719a1369?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
          image: memberPhotos.wetLab.hardikaJain,
          imagePosition: 'center 40%',
          imageZoom: 1.1,
        },
        {name: 'Aayush Gupta',
          role: 'Wet Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/aayush-gupta-tech/',
          image: memberPhotos.wetLab.aayushGupta,
          imagePosition: 'center 10%',
            imageZoom: 1,
        },
    ]
  },
  {
    route: 'dry-lab',
    anchorId: 'subsystem-dry-lab',
    title: 'Dry Lab',
    text: 'Modeling, computational analysis, and data visualization.',
    details: 'Builds mathematical and computational models, performs sensitivity analyses, and supports decision making with simulation driven insights and clear data interpretation.',
    role: 'Dry Lab',
    members: [
     {name: 'Bipra Bhanu Mohanty',
          role: 'Dry Lab Researcher',
          linkedin: 'https://www.linkedin.com/in/bipra-bhanu-mohanty-07409b314?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          image: memberPhotos.dryLab.bipraBhanu,
          imagePosition: 'center 15%'
        },
         {name: 'Ishaan Chhaya',
          role: 'Dry Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/ishaan-chhaya-172962369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          image: memberPhotos.dryLab.ishaan,
          imagePosition: 'center 10%'
        },
         {name: 'Pratik Rahul Ingle',
          role: 'Dry Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/pratik-ingle-6435041b9',
          image: memberPhotos.dryLab.pratik,
          imagePosition: 'center 10%',
        },
  {name: 'Siddhant Chowdhary',
          role: 'Dry Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/siddhant-chowdhary-7498b1371/',
          image: memberPhotos.dryLab.siddhant,
          imagePosition: 'center 50%',
          imageZoom: 2,
        },
        {name: 'Ekansh',
          role: 'Dry Lab Trainee',
          linkedin: 'https://www.linkedin.com/in/ekansh-jain-bb0274298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          image: memberPhotos.dryLab.ekansh,
          imagePosition: 'center 20%',
          imageZoom: 1.7,
        },
    ]
  },
  {
    route: 'human-practices-design',
    anchorId: 'subsystem-human-practices-design',
    title: 'Human Practices & Design',
    text: 'Ethics, policy review, stakeholder interviews, outreach and design.',
    details: 'Leads stakeholder engagement, policy and ethics review, media and communication design, and outreach strategy to ensure the project is socially responsible, ethically sound, user centered, and effectively communicated for real world deployment.',
    role: 'Human Practices and Design',
    members: [
      
        {name: 'Angel Singhvi',
          role: 'Team Lead',
          linkedin: 'https://www.linkedin.com/in/angel-singhvi-a87499337/',
          image: memberPhotos.humanPracticesDesign.angelSinghvi,
          imagePosition: 'center 140%',
           imageZoom: 1.65,
        },
         {name: 'Yashika ',
          role: 'Media & Design Lead',
          linkedin: 'http://www.linkedin.com/in/yashika-singh-319227289',
          image: memberPhotos.humanPracticesDesign.yashika,
          imagePosition: 'center 40%',
           imageZoom: 1.3,
        },
        {name: 'Tanish Jain',
          role: 'iHP Trainee',
          linkedin: 'https://www.linkedin.com/in/tanish-jain-463a95369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
          image: memberPhotos.humanPracticesDesign.tanish,
          imagePosition: 'center 10%',
           imageZoom: 1.1,
        },
          {name: 'Shinjini Jain',
          role: 'iHP Trainee',
          linkedin: 'https://www.linkedin.com/in/shinjini-jain-340282386?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          image: memberPhotos.humanPracticesDesign.shinjini,
          imagePosition: 'center 140%',
           imageZoom: 1.5,
        },
        {name: 'Latisha Meena',
          role: 'iHP Trainee',
          linkedin: 'https://www.linkedin.com/in/latisha-meena-06b48a3bb?utm_source=share_via&utm_content=profile&utm_medium=member_android',
          image: memberPhotos.humanPracticesDesign.latisha,
          imagePosition: 'center 120%',
           imageZoom: 1.2,
        },
      ]
  },
  {
    route: 'web-development',
    anchorId: 'subsystem-web-development',
    title: 'Web Development',
    text: 'Building websites and interactive experiences to document and communicate the research.',
    details: 'Owns technical storytelling through website architecture, UI implementation, responsive layouts, and wiki delivery for transparent and accessible project documentation.',
    role: 'Web Development',
    members: [
      {
        name: 'Sagnik Dey',
        role: 'Web Lead',
        linkedin: 'https://www.linkedin.com/in/sagnik-dey-56a2a31b0/',
        image: memberPhotos.webDevelopment.sagnikDey,
        imagePosition: 'center 35%',
      },
      {
        name: 'Nisarg Rathod',
        role: 'Developer Trainee',
        linkedin: 'https://www.linkedin.com/in/nisarg-rathod-63b044318/',
        image: memberPhotos.webDevelopment.nisargRathod,
        imagePosition: 'center 3%'
      },
       {
        name: 'Aryan Prasad',
        role: 'Developer Trainee',
        linkedin: 'https://www.linkedin.com/in/aryan-prasad-238391376/',
        image: memberPhotos.webDevelopment.aryanPrasad,
        imagePosition: 'center 37%',
        imageZoom: 1,
      },
    ]
  }
];

const preloadImageSources = Array.from(new Set([
  iitbLogo,
  ...highlightGallery.map((item) => item.src),
  ...subsystemData.flatMap((item) => item.members.map((member) => member.image)),
  ...pastIgemMembers.map((member) => member.image)
].filter(Boolean)));

const getRouteFromHash = () => {
  const hash = window.location.hash.toLowerCase();
  if (!hash.startsWith('#/')) return 'home';
  const route = hash.slice(2);
  const validRoutes = [...subsystemData.map((item) => item.route), 'past-members'];
  return validRoutes.includes(route) ? route : 'home';
};

const wikiMap = ['Project', 'Safety', 'Human Practices', 'Results', 'Contributions', 'Team'];

const clampNumber = (value, min, max, fallback) =>
  Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : fallback;

const getImageZoom = (zoom) => clampNumber(zoom, 0.6, 2.5, 1);
const getImageFrameHeight = (height) => clampNumber(height, 120, 340, null);
const getImageSize = (size, fallback = 112) => clampNumber(size, 72, 220, fallback);

const getMemberImageStyle = (member) => ({
  objectPosition: member.imagePosition || 'center center',
  objectFit: member.imageFit || 'cover',
  transform: `scale(${getImageZoom(member.imageZoom)})`,
  transformOrigin: 'center center'
});

const getMemberFrameStyle = (member) => {
  const customHeight = getImageFrameHeight(member.imageHeight);
  if (customHeight) {
    return { height: `${customHeight}px` };
  }
  return { aspectRatio: member.imageAspectRatio || '4 / 3' };
};

export default function App() {
  const [assetsReady, setAssetsReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopSubsystemMenuOpen, setDesktopSubsystemMenuOpen] = useState(false);
  const [mobileSubsystemMenuOpen, setMobileSubsystemMenuOpen] = useState(false);
  const [route, setRoute] = useState(getRouteFromHash());
  const desktopSubsystemMenuTimerRef = useRef(null);
  const selectedSubsystem = subsystemData.find((item) => item.route === route);
  const isPastMembersRoute = route === 'past-members';

  useEffect(() => {
    const onHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    let active = true;
    if (preloadImageSources.length === 0) {
      window.__setLoadingProgress?.(100);
      setAssetsReady(true);
      return undefined;
    }

    let loaded = 0;
    const onAssetSettled = () => {
      loaded += 1;
      if (!active) return;
      const progress = Math.round((loaded / preloadImageSources.length) * 100);
      window.__setLoadingProgress?.(progress);
      if (loaded >= preloadImageSources.length) {
        setAssetsReady(true);
      }
    };

    const images = preloadImageSources.map((src) => {
      const img = new Image();
      img.onload = onAssetSettled;
      img.onerror = onAssetSettled;
      img.src = src;
      return img;
    });

    const fallbackTimer = window.setTimeout(() => {
      if (!active) return;
      window.__setLoadingProgress?.(100);
      setAssetsReady(true);
    }, 12000);

    return () => {
      active = false;
      window.clearTimeout(fallbackTimer);
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  useEffect(() => {
    if (!assetsReady) return;
    window.__doneLoading?.();
  }, [assetsReady]);

  useEffect(() => {
    if (assetsReady) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [assetsReady]);

  useEffect(() => {
    setMenuOpen(false);
    setDesktopSubsystemMenuOpen(false);
    setMobileSubsystemMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  useEffect(() => () => {
    if (desktopSubsystemMenuTimerRef.current) {
      window.clearTimeout(desktopSubsystemMenuTimerRef.current);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const navbarOffset = 120;
    const targetY = target.getBoundingClientRect().top + window.scrollY - navbarOffset;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
  };

  const handleNavbarClick = (event, href) => {
    if (!href.startsWith('#')) return;
    if (href.startsWith('#/')) return;
    event.preventDefault();
    const sectionId = href.slice(1);
    if (route !== 'home') {
      window.location.hash = '#';
      window.setTimeout(() => scrollToSection(sectionId), 60);
      return;
    }
    scrollToSection(sectionId);
  };

  const openDesktopSubsystemMenu = () => {
    if (desktopSubsystemMenuTimerRef.current) {
      window.clearTimeout(desktopSubsystemMenuTimerRef.current);
    }
    setDesktopSubsystemMenuOpen(true);
  };

  const closeDesktopSubsystemMenu = () => {
    desktopSubsystemMenuTimerRef.current = window.setTimeout(() => {
      setDesktopSubsystemMenuOpen(false);
    }, 180);
  };

  const mobilePrimaryLinks = [
    { label: 'Home', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Wiki', href: '#wiki' },
    { label: 'Subsystems', href: '#subteams', isSubsystemTrigger: true },
    { label: 'Past Members', href: '#/past-members' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' }
  ];

  const desktopNavLinks = [
    { label: 'Home', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Wiki', href: '#wiki' },
    { label: 'Subsystems', href: '#subteams', isSubsystemTrigger: true },
    { label: 'Past Members', href: '#/past-members' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' }
  ];

  const subsystemRouteLinks = subsystemData.map((item) => ({
    label: item.title,
    href: `#/${item.route}`
  }));

  const mobileQuickLinks = [
    { label: 'Visit 2025 Wiki', href: 'https://2025.igem.wiki/iit-bombay/', external: true },
    { label: 'Visit 2024 Wiki', href: 'https://2024.igem.wiki/iit-bombay/', external: true }
  ];

  return (
    <div className="relative flex min-h-screen flex-col  overflow-x-hidden">
      <header className="fixed top-0 z-30 w-full">
       <div className="mx-auto w-full sm:pt-3 sm:w-[92vw] sm:px-4 md:w-[85vw] lg:w-[70vw] xl:min-w-[1050px]">

          <div className="flex w-full items-center justify-center rounded-none border border-black/10 bg-white/70 px-4 py-3 pr-4 shadow-sm backdrop-blur-md sm:rounded-full sm:border-black/10 sm:bg-white/20 sm:px-6 sm:py-3 sm:shadow-lg sm:backdrop-blur-sm">
            <div className="flex w-full items-center gap-4">
              <div className="flex shrink-0 items-center gap-3">
                <img
                  src={iitbLogo}
                  alt="iGEM IIT Bombay logo"
                  className="h-[84px] w-[84px] shrink-0 rounded-full object-contain mix-blend-multiply drop-shadow-[0_14px_22px_rgba(26,36,52,0.18)] sm:h-[72px] sm:w-[72px]"
                />
                <div className="leading-tight whitespace-nowrap">
                  <p className="text-sm uppercase tracking-[0.35em] text-accent">iGEM</p>
                  <p className="text-base font-semibold text-ink sm:text-lg">IIT BOMBAY</p>
                </div>
              </div>
              <nav className="ml-4 hidden min-w-0 flex-1 items-center justify-between text-sm text-muted xl:flex xl:text-sm">
                {desktopNavLinks.map((item) => (
                  item.isSubsystemTrigger ? (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={openDesktopSubsystemMenu}
                      onMouseLeave={closeDesktopSubsystemMenu}
                    >
                      <button
                        type="button"
                        className="relative inline-flex items-center px-2 py-2 text-center transition hover:text-accent 2xl:px-3"
                        onClick={() => setDesktopSubsystemMenuOpen((prev) => !prev)}
                      >
                        {item.label}
                      </button>
                      {desktopSubsystemMenuOpen ? (
                        <span className="pointer-events-none absolute left-1/2 top-full mt-0.5 h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[7px] border-l-transparent border-r-transparent border-t-accent" />
                      ) : null}
                      {desktopSubsystemMenuOpen ? (
                        <div
                          className="absolute left-1/2 top-full z-50 mt-1 w-64 -translate-x-1/2 rounded-2xl border border-black/10 bg-white/95 p-2 shadow-xl backdrop-blur-md"
                          onMouseEnter={openDesktopSubsystemMenu}
                          onMouseLeave={closeDesktopSubsystemMenu}
                        >
                          <a
                            href="#subteams"
                            className="block rounded-xl px-3 py-2 text-sm text-ink transition hover:bg-[rgba(31,122,140,0.09)]"
                            onClick={(event) => {
                              setDesktopSubsystemMenuOpen(false);
                              handleNavbarClick(event, '#subteams');
                            }}
                          >
                            All Subsystems
                          </a>
                          {subsystemRouteLinks.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block rounded-xl px-3 py-2 text-sm text-ink transition hover:bg-[rgba(31,122,140,0.09)]"
                              onClick={() => setDesktopSubsystemMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="relative px-2 py-2 text-center transition hover:text-accent hover:underline hover:underline-offset-4 2xl:px-3"
                      onClick={(event) => {
                        setDesktopSubsystemMenuOpen(false);
                        handleNavbarClick(event, item.href);
                      }}
                    >
                      {item.label}
                    </a>
                  )
                ))}
              </nav>
            </div>
            <button
              type="button"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="ml-4 flex h-11 w-11 items-center justify-center rounded-full border-transparent bg-transparent text-ink shadow-none xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="space-y-1.5">
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 rounded-full bg-ink transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
          </div>

          {menuOpen ? (
            <div className="fixed inset-0 z-40 xl:hidden">
              <button
                type="button"
                aria-label="Close menu"
                className="absolute inset-0 bg-[rgba(255,255,255,0.45)] backdrop-blur-[2px]"
                onClick={() => setMenuOpen(false)}
              />
              <aside className="absolute right-0 top-0 h-full w-[82vw] max-w-[360px] overflow-y-auto border-l border-black/10 bg-[rgba(255,255,255,0.92)] px-4 py-5 text-ink shadow-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold uppercase tracking-[0.36em] text-accent">Navigation</p>
                  <button
                    type="button"
                    className="rounded-full border border-black/15 bg-white px-3.5 py-1.5 text-sm font-semibold text-ink"
                    onClick={() => setMenuOpen(false)}
                  >
                    Close
                  </button>
                </div>

                <div className="mt-5 border-t border-black/10 pt-5">
                  <div className="space-y-2.5">
                    {mobilePrimaryLinks.map((item) => (
                      item.isSubsystemTrigger ? (
                        <div key={item.label}>
                          <button
                            type="button"
                            className="flex w-full items-center justify-between rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-left text-base font-semibold text-ink transition hover:border-[#61b8d0] hover:shadow-[0_0_14px_rgba(58,173,207,0.18)]"
                            onClick={() => setMobileSubsystemMenuOpen((prev) => !prev)}
                          >
                            <span>{item.label}</span>
                            <span className={`text-sm transition ${mobileSubsystemMenuOpen ? 'rotate-180' : ''}`}>▼</span>
                          </button>
                          {mobileSubsystemMenuOpen ? (
                            <div className="mt-2 ml-2 space-y-2">
                              <a
                                href="#subteams"
                                className="block rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm font-medium text-ink"
                                onClick={(event) => {
                                  setMenuOpen(false);
                                  setMobileSubsystemMenuOpen(false);
                                  handleNavbarClick(event, '#subteams');
                                }}
                              >
                                All Subsystems
                              </a>
                              {subsystemRouteLinks.map((subItem) => (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  className="block rounded-xl border border-black/10 bg-white/90 px-3 py-2 text-sm font-medium text-ink"
                                  onClick={() => {
                                    setMenuOpen(false);
                                    setMobileSubsystemMenuOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </a>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-base font-semibold text-ink transition hover:border-[#61b8d0] hover:shadow-[0_0_14px_rgba(58,173,207,0.18)]"
                          onClick={(event) => {
                            setMenuOpen(false);
                            setMobileSubsystemMenuOpen(false);
                            handleNavbarClick(event, item.href);
                          }}
                        >
                          {item.label}
                        </a>
                      )
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-muted">iGEM wiki</p>
                  <div className="mt-3 space-y-2.5">
                    {mobileQuickLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noreferrer' : undefined}
                        className="block rounded-2xl border border-black/10 bg-white/95 px-4 py-3 text-base font-semibold text-ink transition hover:border-[#61b8d0] hover:shadow-[0_0_14px_rgba(58,173,207,0.18)]"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          ) : null}
        </div>
      </header>

      <main className="mx-auto w-[100vw] flex-1 px-4 pt-20 md:w-[70vw] md:px-6 lg:w-[73vw] lg:pt-24 md:pt-24 lg:pt-28">
        {isPastMembersRoute ? (
          <section className="py-10 md:py-12" id="past-members">
            <div className="max-w-5xl">
              <p className="text-sm  tracking-[0.3em] text-accent">Past iGEM Members</p>
              {/* <h2 className="mt-4 font-display text-3xl md:text-4xl">Legacy built by every batch before us.</h2> */}
              <p className="mt-3 text-sm text-muted md:text-base">
                We deeply appreciate the dedication, leadership, and hard work of our past members who shaped iGEM IIT Bombay.
                Their efforts built the foundation, culture, and momentum that continue to guide every new season.
              </p>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastIgemMembers.map((member) => (
                <article key={member.name} className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft">
                  <div
                    className="mx-auto overflow-hidden rounded-full border-4 border-[rgba(31,122,140,0.2)] bg-white shadow-soft"
                    style={{
                      width: `${getImageSize(member.imageSize, 112)}px`,
                      height: `${getImageSize(member.imageSize, 112)}px`
                    }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full"
                      style={getMemberImageStyle(member)}
                    />
                  </div>
                  <h3 className="mt-4 text-center font-display text-2xl">{member.name}</h3>
                  <p className="mt-1 text-center text-sm font-medium text-accent">{member.tenure}</p>
                  {(member.subsystem || member.role) ? (
                    <p className="mt-1 text-center text-sm text-muted">
                      {member.subsystem ? <span>{member.subsystem}</span> : null}
                      {member.subsystem && member.role ? <span> · </span> : null}
                      {member.role ? <span>{member.role}</span> : null}
                    </p>
                  ) : null}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/95 px-4 py-2.5 text-sm font-semibold text-accent transition hover:border-[rgba(31,122,140,0.35)] hover:bg-[rgba(31,122,140,0.08)]"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7.2 20.4H3.6V9h3.6v11.4zM5.4 7.4c-1.2 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1c0 1.2-.9 2.1-2.1 2.1zm15 13h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1z" />
                    </svg>
                    <span>View LinkedIn</span>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : selectedSubsystem ? (
          <section className="py-10 md:py-12" id={selectedSubsystem.anchorId}>
            {selectedSubsystem.route === 'wet-lab' ? (
              <div className="mb-8 rounded-2xl bg-transparent p-5  md:p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">What We Do</p>
                <p className="mt-3 text-sm text-muted md:text-base">We design and execute the full experimental pipeline: construct assembly, strain validation, assay development, and biosafety checks to ensure reproducible in-lab results.
</p>
                <div className="mt-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-accent">Lab Highlights</p>
                  <div className="mt-3 grid grid-cols-3 gap-3 lg:grid-cols-4">
                    {wetLabHighlights.map((image, index) => (
                      <img
                        key={`wet-lab-photo-${index + 1}`}
                        src={image}
                        alt={`Wet lab highlight ${index + 1}`}
                        className="aspect-square w-full rounded-xl border border-black/10 object-cover shadow-soft"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <div className="mt-0 rounded-3xl  bg-transparent ">
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Team Members</p>
              <h3 className="mt-3 font-display text-2xl">Meet the {selectedSubsystem.title} members</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {selectedSubsystem.members.map((member) => (
                  <article
                    key={`${selectedSubsystem.route}-${member.name}`}
                    className="rounded-2xl border border-black/10 bg-white p-4 shadow-soft"
                  >
                    <div
                      className="w-full overflow-hidden rounded-xl border border-black/10 bg-white"
                      style={getMemberFrameStyle(member)}
                    >
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover transition-transform duration-300"
                          style={getMemberImageStyle(member)}
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-4xl font-semibold text-accent/80">
                            {member.name.split(' ').map((part) => part[0]).join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="mt-4 font-display text-xl">{member.name}</p>
                    <p className="text-sm text-muted">{member.role}</p>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:underline hover:underline-offset-4"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-current"
                      >
                        <path d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM7.2 20.4H3.6V9h3.6v11.4zM5.4 7.4c-1.2 0-2.1-.9-2.1-2.1 0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1c0 1.2-.9 2.1-2.1 2.1zm15 13h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.1z" />
                      </svg>
                      <span>View LinkedIn</span>
                    </a>
                  </article>
                ))}
              </div>
            </div>
             <div className="max-w-2xl   bg-transparent ">
              <div className="mt-6 flex ">
                <a
                  href="#subteams"
                  className="inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-lg"
                  onClick={(event) => handleNavbarClick(event, '#subteams')}
                >
                  Back to Subsystems
                </a>
              </div>
            </div>
          </section>
        ) : (
          <>
        <section className="grid items-center gap-12 pt-10 lg:py-3" id="about">
          <div className="rounded-[32px]  bg-transparent  p-0 md:p-0">
            
            <img
              src={groundPicImage}
              alt="iGEM IIT Bombay logo"
              className=" border  border-black/10 rounded-xl object-cover shadow-soft "
            />
            <p className="text-sm mt-4 uppercase tracking-[0.2em] text-accent">Who are we?</p>
            <p className="mt-2  text-lg text-muted">
              We are a multidisciplinary collective of engineers, scientists, and visionaries from IIT Bombay, united by a single mission: to redefine the boundaries of biology. As India’s premier student-led synthetic biology team, we don’t just compete on the global iGEM stage—we engineer solutions for a sustainable future. By merging the precision of engineering with the infinite potential of nature, we are tackling the world’s most pressing challenges, one genetic circuit at a time.
            </p>
            {/* <div className="mt-8 flex flex-wrap  gap-4">
              <a
                className="rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                href="#project"
                onClick={(event) => handleNavbarClick(event, '#project')}
              >
                Explore 2025 Project
              </a>
              <a
                className="rounded-full border border-black/10 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-lg"
                href="https://2025.igem.wiki/iit-bombay/"
                target="_blank"
                rel="noreferrer"
              >
                Visit 2025 Wiki
              </a>
            </div> */}
            {/* <div className="mt-2 flex flex-wrap justify-center gap-6 ">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft "
                >
                  <p className="text-base font-semibold text-accent">{stat.value}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
                </div>
              ))}
            </div> */}
          </div>
          {/* <div className="rounded-[32px] border border-black/10 bg-white/90 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Snapshot</p>
            <h3 className="mt-4 font-display text-2xl">iGEM IIT Bombay at a glance</h3>
            
            <div className="mt-5 grid gap-3">
              {focusPoints.map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/10 bg-white/90 p-4 shadow-soft">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent">{item.title}</p>
                  <p className="mt-2 text-sm text-muted">{item.text}</p>
                </div>
              ))}
            </div>
         
          </div> */}
        </section>

        <section className="py-5 md:pt-14" id="project">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">2025 Project</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Engineered Extracellular Serine Protease for disrupting biofilms, combating Antimicrobial resistance.</h2>
              <p className="mt-5 text-muted">
                The 2025 project targets biofilm-associated infections through an engineered protease solution designed to
                degrade tough biofilms and eliminate dormant bacteria, including infections linked to biomedical devices
                like catheters, implants, and prosthetic joints.
              </p>
              <div className="mt-6 grid gap-6 xl:grid-cols-2">
                {[
                  {
                    title: 'Problem',
                    text: 'Biofilms protect bacteria from antibiotics, causing persistent infections.'
                  },
                  {
                    title: 'Approach',
                    text: 'Site Directed Mutagenesis- 4 mutations to decrease ESP degradation activity towards essential proteins, thus effectively increasing specificity towards biofilms proteins.'
                  },
                  {
                    title: 'Impact',
                    text: 'A sustainable therapeutic option for difficult-to-treat infections.'
                  },
                  {
                    title: 'Result',
                    text: 'Silver Medal at iGEM Grand Jamboree 2025.'
                  }
                ].map((card) => (
                  <article
                    key={card.title}
                    className="rounded-2xl border border-black/10 bg-white/90 p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <h3 className="font-display text-2xl">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted">{card.text}</p>
                  </article>
                ))}
              </div>
            </div>
          
        </section>

        <section className="pt-5 md:pt-14" id="faculty">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Faculty Advisors</p>
            {/* <h2 className="mt-4 font-display text-3xl md:text-4xl">Mentorship and academic guidance</h2> */}
            <p className="mt-3 text-sm text-muted md:text-base">
              Our faculty advisors provide scientific oversight and help align project decisions with robust research standards.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {facultyMentors.map((mentor) => (
              <article
                key={mentor.name}
                className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft"
              >
                <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left">
                  <div
                    className="shrink-0 overflow-hidden rounded-full border-4 border-[rgba(31,122,140,0.2)] bg-white shadow-soft"
                    style={{
                      width: `${getImageSize(mentor.imageSize, 124)}px`,
                      height: `${getImageSize(mentor.imageSize, 124)}px`
                    }}
                  >
                    {mentor.image ? (
                      <img
                        src={mentor.image}
                        alt={mentor.name}
                        className="h-full w-full"
                        style={getMemberImageStyle(mentor)}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-accent">
                        {mentor.name
                          .replace('Prof. ', '')
                          .split(' ')
                          .map((part) => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">{mentor.role}</p>
                    <h3 className="mt-1 font-display text-2xl">{mentor.name}</h3>
                    <p className="mt-2 text-sm font-medium text-ink/80">{mentor.dept}</p>
                  </div>
                </div>
                {/* <p className="mt-4 text-sm text-muted">{mentor.text}</p> */}
              </article>
            ))}
          </div>
        </section>
    <section className="pt-5 md:pt-14" id="wiki">
          <div className="grid gap-8 ">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent">iGEM Wiki</p>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">Our wiki is the source of record.</h2>
              <p className="mt-4 text-muted ">
                The iGEM wiki hosts full technical details, experiments, results, and documentation for the team.
              </p>
            </div>
          <div className="w-full px-6  ">
  {/* Centered Container */}
  <div className="max-w-6xl mx-auto">
    
    <div className="grid gap-6 sm:grid-cols-2 justify-items-center">
      {wikiCards.map((card) => (
        <div key={card.season} className="w-full max-w-md rounded-3xl border border-black/10 bg-white/90 p-6 shadow-soft">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">{card.season}</p>
          <h3 className="mt-4 font-display text-2xl">{card.title}</h3>
          <p className="mt-2 text-sm text-muted">
            {(Array.isArray(card.description) ? card.description : [card.description]).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            className="mt-6 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            href={card.href}
            target="_blank"
            rel="noreferrer"
          >
            {card.cta}
          </a>
        </div>
      ))}
    </div>
  </div>
</div>

          </div>
        </section>
        <section className="pt-5 md:pt-14" id="achievements">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Achievements</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Two years of learning, innovation, and impact.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {achievements.map((item) => {
  const hasImage = Boolean(item.image);
  return (
<div key={item.title} className={`${hasImage ? 'flip-card perspective' : ''} h-[17rem] md:h-[18rem]`}>
  <div className={hasImage ? 'flip-inner' : 'h-full'}>

    {/* FRONT */}
    <div className={`${hasImage ? 'flip-front' : 'h-full'} rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft`}>
      <span className="inline-flex rounded-full bg-[rgba(31,122,140,0.12)] px-3 py-1 text-sm font-semibold text-accent">
        {item.year}
      </span>
      <h3 className="mt-3 font-display text-xl leading-tight">{item.title}</h3>
      <p className="achievement-text mt-2 text-sm text-muted">{item.text}</p>
    </div>

    {/* BACK */}
    {hasImage ? (
      <div className="flip-back overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
    ) : null}

  </div>
</div>
            );
})}
          </div>
        </section>

<VillagesSection />
   

        <section className="pt-5 md:pt-14" id="subteams">
          <div id="team-gallery" className="relative -top-24" />
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Subsystems</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Four pillars, one mission.</h2>
            <p className="mt-3 text-sm text-muted">
              Each subsystem owns a critical part of the project with focused responsibilities, domain expertise, and dedicated team execution.
            </p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {subsystemData.map((item) => (
              <article key={item.title} className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="flex items-center gap-4">
                  {(() => {
                    const Icon = subsystemIconMap[item.route] || FlaskConical;
                    return (
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl  bg-transparent text-accent">
                        <Icon className="h-6 w-6" />
                      </span>
                    );
                  })()}
                  <div>
                 
                    <p className="text-sm uppercase tracking-[0.25em] text-accent">{item.role}</p>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="mt-3 text-sm text-muted">{item.details}</p>
                  <a
                    href={`#/${item.route}`}
                    className="mt-5 inline-flex rounded-full bg-gradient-to-r from-accent to-[#5bc0d9] px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-soft transition hover:shadow-lg"
                  >
                    Visit Page
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pt-5 md:pt-14" id="events">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Events</p>
          </div>
          
          <div className="mt-6">
            {/* <div>
              <h3 className="mb-6 font-display text-2xl">Upcoming Events</h3>
              <div className="grid gap-6">
                {[
                  {
                    title: 'No upcoming events',
                    text: 'There are currently no scheduled upcoming events. New announcements will be posted here.'
                  },
                ].map((event) => (
                  <article
                    key={event.title}
                    className="rounded-2xl border border-black/10 bg-white/90 p-6 shadow-soft"
                  >
                    <h3 className="font-display text-xl">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted">{event.text}</p>
                  </article>
                ))}
              </div>
            </div> */}

            <div>
              <h3 className="mb-6 font-display text-2xl">Past Events</h3>
              <div className="grid max-w-4xl gap-6">
                {[
                  {
                    title: 'SYNBIOCON 2026',
                    text: 'A collaborative pan-India, two day synthetic biology conference hosted by IIT Bombay and IIT Kharagpur.',
                    date: '2026',
                    link: 'https://www.synbiocon2026.in',
                    linkText: 'View event page'
                  },
                  {
                    title: 'BioQuest 2025',
                    text: 'Conducted large-scale synthetic biology outreach and engagement across schools and students in Mumbai.',
                    date: '2025'
                  },
                ].map((event) => (
                  <article
                    key={event.title}
                    className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-soft"
                  >
                    <span className="text-sm uppercase tracking-[0.2em] text-accent">{event.date}</span>
                    <h3 className="mt-3 font-display text-xl">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted">{event.text}</p>
                    {event.link ? (
                      <a
                        className="mt-4 inline-flex text-sm font-semibold text-accent transition hover:underline hover:underline-offset-4"
                        href={event.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {event.linkText}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

       <section className="py-5 md:py-14" id="gallery">
  <div className="max-w-4xl">
    <p className="text-sm uppercase tracking-[0.3em] text-accent">Gallery</p>
  </div>

  {/* Row 1: original two hero images */}
  <div className="mt-8 grid gap-4 lg:grid-cols-2">
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
      <img src={highlightGallery[0].src} alt={highlightGallery[0].alt}
     className="w-full rounded-xl object-cover object-center aspect-video" />
    </figure>
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
      <img src={highlightGallery[1].src} alt={highlightGallery[1].alt}
     className="w-full rounded-xl object-cover object-center aspect-video" />
    </figure>
  </div>

  

  {/* Row 4: 3 landscape photos */}
  <div className="mt-4 grid gap-4 lg:grid-cols-3">
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
      <img src={extraGallery[2].src} alt={extraGallery[2].alt}
        className="w-full rounded-xl object-cover object-center h-56" />
    </figure>
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
      <img src={extraGallery[3].src} alt={extraGallery[3].alt}
        className="w-full rounded-xl object-cover object-center h-56" />
    </figure>
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
      <img src={extraGallery[7].src} alt={extraGallery[7].alt}
        className="w-full rounded-xl object-cover object-center h-56" />
    </figure>
  </div>

  {/* Row 5: portrait photos — let them be natural height in 4 cols */}
  <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
  
  <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
    <img src={extraGallery[1].src} alt={extraGallery[1].alt}
      className="w-full rounded-xl object-cover object-top h-64" />
  </figure>

  {/* 👇 This now spans 2 columns */}
 <figure className="hidden lg:block lg:col-span-2 rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105">
  <img 
    src={extraGallery[8].src} 
    alt={extraGallery[8].alt}
    className="w-full rounded-xl object-cover object-center h-64" 
  />
</figure>

  <figure className=" rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft transition-transform duration-300 hover:scale-105 ">
    <img src={extraGallery[4].src} alt={extraGallery[4].alt}
      className="w-full rounded-xl object-cover object-top h-64" />
  </figure>

</div>

  {/* Row 2: original full-width team photo */}
  <div className="mt-4">
    <figure className="rounded-2xl border border-black/10 bg-white/90 p-2 shadow-soft">
      <img src={highlightGallery[2].src} alt={highlightGallery[2].alt}
      className="w-full rounded-xl object-cover object-center aspect-[2/1] " />
    </figure>
  </div>
</section>

          </>
        )}
      </main>

      <footer className="border-t border-black/10 bg-[#e7f1f6] py-12">
        <div className="mx-auto w-[92vw] px-4 md:w-[85vw] md:px-6 lg:w-[70vw]">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={iitbLogo}
                  alt="iGEM IIT Bombay logo"
                  className="h-12 w-12 rounded-xl object-contain mix-blend-multiply"
                />
                <div>
                  <p className="font-semibold text-ink">iGEM IIT Bombay</p>
                  <p className="text-sm text-muted">Synthetic Biology Team</p>
                </div>
              </div>
              <p className="text-sm text-muted">
                Student-led team representing IIT Bombay at the annual iGEM competition.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Contact Us</p>
              <p>IIT Bombay, Powai, Mumbai, Maharashtra, 400076</p>
              <p>Email: <a href="mailto:igem.iitb@gmail.com" className="hover:text-accent">igem.iitb@gmail.com</a></p>
<div className="flex gap-4">
  <a href="https://in.linkedin.com/company/igem-iit-bombay" target="_blank" rel="noopener noreferrer">
    <Linkedin />
  </a>

  <a href="https://www.instagram.com/igem_iitb/" target="_blank" rel="noopener noreferrer">
    <Instagram />
  </a>

</div>



            </div>
            <div className="space-y-3 text-sm text-muted">
              <p className="font-semibold text-ink">Quick Links</p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#about" onClick={(event) => handleNavbarClick(event, '#about')}>Home</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#project" onClick={(event) => handleNavbarClick(event, '#project')}>Project</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#achievements" onClick={(event) => handleNavbarClick(event, '#achievements')}>Achievements</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#subteams" onClick={(event) => handleNavbarClick(event, '#subteams')}>Subsystems</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#/past-members">Past Members</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#events" onClick={(event) => handleNavbarClick(event, '#events')}>Events</a>
                <a className="block w-fit rounded-md px-1 py-0.5 transition hover:text-ink hover:underline hover:underline-offset-4" href="#gallery" onClick={(event) => handleNavbarClick(event, '#gallery')}>Gallery</a>
              </div>
              
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted">
            <p>© 2026 iGEM IIT Bombay. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#about" onClick={(event) => handleNavbarClick(event, '#about')}>Back to top</a>
              <a href="mailto:igem.iitb@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
