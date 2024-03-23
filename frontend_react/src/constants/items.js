import { images } from '../constants';

const navItems = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "skills",
        title: "Skills",
    }, 
    {
        id: "testimonials",
        title: "Testimonials",
    }, 
    {
        id: "contact",
        title: "Contact",
    }, 
];

const abouts = [
    {
        title: 'Front-end Development',
        description: 'I am a good Front-end Developer',
        image: images.about01,
    },
    {
        title: 'Back-end Development',
        description: 'I am a good Back-end Developer',
        image: images.about02,
    },
    {
        title: 'Full-stack Development',
        description: 'I am a good Full-Stack Developer',
        image: images.about04,
    }
];

export { navItems, abouts };