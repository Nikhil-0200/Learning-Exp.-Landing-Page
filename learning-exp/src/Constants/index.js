import { video1, video2 } from "../assets/video/index";

import { assTick, supervisecircle } from "../assets/icons/index";

import { star1 } from "../assets/icons/index";

import {
  fbIcon,
  linkedinIcon,
  pinterestIcon,
  twitterIcone,
} from "../assets/icons/index";

export const videoData = [
  {
    video1,
  },
  {
    video2,
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services Us" },
  { href: "#whyUs", label: "Why Us" },
  { href: "#goal", label: "Our Goals" },
];

export const FooterData = [
  {
    title: "Links",
    links: [
      { name: "Home", link: "/" },
      { name: "Pricing", link: "/" },
      { name: "Download", link: "/" },
      { name: "About", link: "/" },
      { name: "Service", link: "/" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", link: "/" },
      { name: "How it Works", link: "/" },
      { name: "Features", link: "/" },
      { name: "Contact", link: "/" },
      { name: "Reporting", link: "/" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { name: "+880 12345678", link: "/" },
      { name: "nikhiltiwari0707@gmail.com", link: "/" },
      { name: "Pune City", link: "/" },
    ],
  },
];

export const goalData = [
  {
    icon: assTick,
    title: "100+",
    subTitle: "Batches Complete",
  },
  {
    icon: assTick,
    title: "50+",
    subTitle: "Active Batches",
  },
  {
    icon: supervisecircle,
    title: "10,000+",
    subTitle: "Student Satisfied",
  },
  {
    icon: supervisecircle,
    title: "10+",
    subTitle: "Courses Modules",
  },
];

export const star = [
  {
    iconStar: star1,
  },
];

export const socialMediaIcon = [
    {
        iconMedia: fbIcon
    },
    {
        iconMedia: linkedinIcon
    },
    {
        iconMedia: pinterestIcon
        
    },
    {
        iconMedia: twitterIcone
    },
]
