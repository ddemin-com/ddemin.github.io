export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  domain: string;
  team: string;
  tools: string[];
  image: string;
  color: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
  customImage?: string; // For projects with custom uploaded images
}

export const projects: Project[] = [
  {
    id: 'ms-spot',
    title: 'Microsoft Spot',
    subtitle: 'Azure VM Management Platform',
    description: 'Centralized platform for editing technical information about Azure virtual machines with Git integration and advanced search',
    role: 'Lead UX/UI Designer',
    domain: 'Cloud / Enterprise',
    team: '1 designer, 8 developers, 2 QA, 1 PO',
    tools: ['Figma', 'FigJam', 'Miro', 'Jira', 'MS Fluent UI', 'Azure DevOps', 'Git', 'Confluence'],
    image: 'computer cloud',
    customImage: 'figma:asset/d7c5f34eb5e024a72db08c6646f75e3e4b314def.png',
    color: 'blue',
    challenge: 'Virtual machine information was scattered across different systems. There was no centralized interface for editing data. All changes were made manually through git, which increased the risk of errors.',
    solution: 'Developed a web platform with an intuitive interface for managing JSON files, Git integration, role system, and advanced search and filtering tools.',
    impact: [
      'Reduced configuration update time by 75%',
      'Decreased editing errors by 60%',
      'Increased change transparency thanks to Git integration'
    ]
  },
  {
    id: 'fintech-app',
    title: 'Haqabi Crypto Wallet App',
    subtitle: 'Mobile App for Cryptocurrency Management',
    description: 'Development of a mobile application for managing cryptocurrency portfolio with focus on security, convenience, and analytics',
    role: 'Lead UX/UI Designer',
    domain: 'FinTech',
    team: '1 Designer, 5 developers, 1 PM, 2 QA',
    tools: ['Figma', 'Adobe CC', 'Miro', 'Firebase', 'Zeplin'],
    image: 'mobile finance',
    customImage: 'figma:asset/fc1166d6ab73bd224615a55224253ba9978a27c3.png',
    color: 'green',
    challenge: 'Users are afraid to trust cryptocurrency assets to new applications. It was necessary to create an intuitive interface for complex cryptocurrency operations and ensure a high level of security.',
    solution: 'Conducted in-depth user interviews, developed a multi-level security system, created clear portfolio and trend visualization, and added an educational onboarding.',
    impact: [
      'Launched an initiative to increase DAU/MAU with gamification, which increased metrics by 25%',
      'Conducted usability research that led to significant UX improvements and feature adoption, resulting in monthly transaction volume exceeding $600k'
    ]
  },
  {
    id: 'xr-editor',
    title: 'XR Editor',
    subtitle: 'Building software for 3D surgical planning',
    description: 'Browser-based platform for medical 3D visualization and anatomical editing designed for pre-operative planning and clinical collaboration',
    role: 'Senior UX Designer',
    domain: 'MedTech',
    team: 'Team of 10 · UX · FE · BE · 3D · QA · PM · TL',
    tools: ['Figma', 'Miro', 'User Flows', 'Prototyping', 'DICOM', 'XR'],
    image: 'medical 3d surgery xr',
    color: 'purple',
    challenge: 'Clinical teams preparing for surgery typically worked across multiple disconnected systems — PACS viewers for CT/MRI scans, desktop 3D software for segmentation, external converters for STL/OBJ export, and separate XR applications for spatial review. The real problem was cognitive fragmentation.',
    solution: 'Reframed the product from a collection of tools into a continuous patient-centered workspace. Every scan, model, annotation, and session lives under one patient record. All editing tools are always visible — no hidden features, no deep menus.',
    impact: [
      '75% faster setup — from 47 minutes to 12 minutes per case',
      'Unified platform replacing 4+ separate tools in clinical workflow',
      'Zero context loss — continuous workflow without tool switching'
    ]
  }
];