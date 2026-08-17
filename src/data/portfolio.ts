// Define TypeScript interfaces for strict type checking

export interface Project {
    id: string;
    title: string;
    category: 'web' | 'game' | 'ai';
    tagline: string;
    summary: string;
    highlights: string[];
    techStack: string[];
    link?: string;    // live/public demo — omit if internal-only
    github?: string;  // repo link — separate from `link` since not every project has both
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
    },
    {
        title: 'Databases',
        items: [
            { name: 'MySQL', iconName: 'mysql', color: '#4479A1' },
            { name: 'SQL Server', iconName: 'sqlserver', color: '#CC2927' },
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
    },
    {
        id: 'rema-lti',
        title: 'REMA LTI Safety Display & Portal',
        category: 'web',
        tagline: 'Safety Signage & REST Infrastructure',
        summary: 'Real-time safety display board and incident management portal for REMA, a leading manufacturer of industrial equipment.',
        highlights: [
            'Real-time display dashboard built with Vite, JavaScript, and CSS.',
            'PHP management portal enabling safety officers to log incidents, edit the ticker feed, and rotate posters.',
        ],
        techStack: ['Vite', 'JavaScript', 'CSS', 'PHP', 'SQL Server'],
    },
    {
        id: 'patrol-system',
        title: 'REMA Patrol System',
        category: 'web',
        tagline: 'Sensor Monitoring & Workflow',
        summary: 'Team-built factory floor patrol app with live sensor monitoring and a checklist-driven approval workflow.',
        highlights: [
            'Live sensor monitoring card polling a REST endpoint every 30 seconds.',
            'Countermeasure workflow with draft/approval states for abnormal checklist items.',
        ],
        techStack: ['PHP', 'SQL Server'],
    },
    {
        id: 'pics',
        title: 'PICS — PC Inventory & Compliance System',
        category: 'web',
        tagline: 'Independent Project',
        summary: 'Replaces manual spreadsheet-based PC compliance tracking with a proper CRUD system.',
        highlights: [
            'Full CRUD, CSV import/export, and modal forms.',
            'Built independently after noticing the team tracking hundreds of workstations by hand.',
        ],
        techStack: ['Laravel', 'MySQL', 'Tailwind CSS'],
        github: 'https://github.com/maisiyy/pc-inventory',
    },
    {
        id: 'mood-music',
        title: 'Mood-Based Music Recommender',
        category: 'ai',
        tagline: 'Recommendation App',
        summary: 'Suggests tracks based on mood input, powered by the Deezer API.',
        highlights: [
            'Dark-themed frontend served via ASP.NET Core static file middleware.',
            'Pivoted to Deezer after hitting Spotify API access limits.',
        ],
        techStack: ['C#', 'ASP.NET Core', 'Deezer API'],
    },
];
