import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import { Project, Social } from './types';

import imgArcade from './assets/project-arcade.jpg';
import imgDeemvmedia from './assets/project-deemvmedia.jpg';
import imgHostel from './assets/project-hostel2harvest.jpg';
import imgNectar from './assets/project-nectar.png';
import imgRealEstate from './assets/project-6.jpg';
import imgDocumentary from './assets/project-documentary.png';
import imgBizboost from './assets/project-bizboost.jpg';
import vidHeadphone from './assets/headphone-ad.mp4';
import imgMindHaven from './assets/project-meditation.png';

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Arcade Game",
    image: imgArcade,
    link: "/arcade.html",
    description: "Interactive arcade game project",
    tags: ["Game Dev", "JavaScript", "Canvas"]
  },
  {
    id: 2,
    name: "Deemvmedia Website",
    image: imgDeemvmedia,
    link: "https://danymojekwu.github.io/Deemvmedia-Website/deemvmedia%20website/index.html",
    description: "Creative agency website design",
    tags: ["Web Design", "UI/UX", "Branding"]
  },
  {
    id: 3,
    name: "Hostel2Harvest",
    image: imgHostel,
    link: "https://mpqlnv3ulc.mobirisesite.com/",
    description: "Food waste management platform",
    tags: ["Sustainability", "Platform", "Web"]
  },
  {
    id: 4,
    name: "MindHaven App",
    image: imgMindHaven,
    link: "https://www.figma.com/design/RbbRsebpchigM7qARiDvke/Untitled?node-id=0-1&p=f&t=43JV3ZwDvE8IV4A9-0",
    description: "Wellness and meditation mobile app",
    tags: ["Mobile", "Figma", "UI/UX"]
  },
  {
    id: 5,
    name: "Nectar Groceries App",
    image: imgNectar,
    link: "https://www.figma.com/design/wTiXqwUAJLIZ8ruPBOybfe/Online-Groceries-App-UI--Community-?node-id=1-8&t=QGTjFs3rEJd6b5Fx-0",
    description: "Online groceries shopping app UI",
    tags: ["E-commerce", "Mobile UI", "Figma"]
  },
  {
    id: 6,
    name: "Real Estate Listing",
    image: imgRealEstate,
    link: "https://2071359.mobirisesite.com/",
    description: "Property management system",
    tags: ["Real Estate", "Web App", "Database"]
  },
  {
    id: 7,
    name: "School Documentary",
    image: imgDocumentary,
    link: "https://drive.google.com/file/d/1GhaWmHUyWvQB1bu_3JNSDPxydVw0dVPm/view?usp=drive_link",
    description: "Life as an ISMS student",
    tags: ["Video", "Documentary", "Storytelling"]
  },
  {
    id: 8,
    name: "Headphone Advertisement",
    image: null,
    video: vidHeadphone, // Placeholder video
    link: vidHeadphone,
    description: "Product advertisement video",
    tags: ["Motion Graphics", "Video Ad", "Audio"]
  },
  {
    id: 9,
    name: "Platform for Businesses",
    image: imgBizboost,
    link: "https://2071406.mobirisesite.com/",
    description: "Business platform solution",
    tags: ["B2B", "SaaS", "Enterprise"]
  }
];

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/daniel-mojekwu-4b1817321",
    color: "text-[#0077B5] hover:bg-[#0077B5]/10"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/DanyMojekwu",
    color: "text-foreground hover:bg-foreground/10"
  },
  {
    name: "Twitter/X",
    icon: Twitter,
    url: "https://x.com/daniel_m425",
    color: "text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
  },
  {
    name: "daily.dev",
    icon: Globe,
    url: "https://app.daily.dev/d_mo425",
    color: "text-primary hover:bg-primary/10"
  }
];
