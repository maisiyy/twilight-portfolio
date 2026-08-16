//define typescript interfaces for strict type checking

export interface Project {
    id: string;
    title: string;
    category: 'web' | 'game' | 'ai';
    tagline: string;
    summary: string;
    highlights: string[];
    techStack: string[];
    link: string;
}

export interface SkillItem {
    name: string;
    iconName: string;
    color: string;
}

export interface SkillCategory {
    title: string;
    items: SkillItem[];
}

// Exported static data
export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Programming Languages',
        items: [
            { name: 'JavaScript', iconName: 'javascript', color: '#F7DF1E' },
            { name: 'TypeScript', iconName: 'typescript', color: '#3178C6' },
            { name: 'Python', iconName: 'python', color: '#3776AB' },
            { name: 'C', iconName: 'c', color: '#00599C' },
            { name: 'C#', iconName: 'csharp', color: '#239120' },
            { name: 'Java', iconName: 'java', color: '#007396' },
            { name: 'PHP', iconName: 'php', color: '#777BB4' },
        ]
    },
    {
        title: 'Frameworks & Libraries',
        items: [
            { name: 'React', iconName: 'react', color: '#61DAFB' },
            { name: 'Next.js', iconName: 'nextjs', color: '#000000' },
            { name: 'Node.js', iconName: 'nodejs', color: '#339933' },
            { name: 'Laravel', iconName: 'laravel', color: '#FF2D20' },
            { name: 'Flask', iconName: 'flask', color: '#000000' },
        ]
    },
    {
        title: 'Tools & Platforms',
        items: [
            { name: 'Git', iconName: 'git', color: '#F05032' },
            { name: 'AWS', iconName: 'aws', color: '#FF9900' },
            { name: 'Postman', iconName: 'postman', color: '#FF6C37' },
            { name: 'Figma', iconName: 'figma', color: '#F24E1E' },
            { name: 'Unity', iconName: 'unity', color: '#000000' },
        ]
    }
];

export const PROJECTS: Project[] = [
    {
        id: 'my-hygiene',
        title: 'MY-HYGIENE',
        category: 'game',
        tagline: 'Educational Game',
        summary: 'Transforms children hygiene learning into an engaging and interactive experience.',
        highlights: [
            'Built with Unity 2D and C#.',
            'Real-time physical landmark detection using MediaPipe.',
        ],
        techStack: ['Unity', 'C#', 'MediaPipe'],
        link: 'https://github.com'    
    },
    {
        id: 'rema-lti',
        title: 'REMA LTI Safety Display & Portal',
        category: 'web',
        tagline: 'Safety Signage & REST Infrastructure',
        summary: 'Real-time safety display board and incident management portal for REMA LTI, a leading manufacturer of industrial equipment.',
        highlights: [
            'Real-time display dashboard built with Vite, Javascript, and CSS',
            'PHP management portal enabling safety officers to log incidents'
        ],
        techStack: ['Vite', 'Javascript', 'CSS', 'PHP'],
        link: 'https://github.com'      
    }
];
