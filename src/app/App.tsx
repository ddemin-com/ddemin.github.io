import { useState } from 'react';
import HomePage from './components/HomePage';
import ProjectPage from './components/ProjectPage';
import { projects } from './data/projects';

export type Page = 'home' | 'project';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const navigateToProject = (projectId: string) => {
    setSelectedProject(projectId);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const project = selectedProject ? projects.find(p => p.id === selectedProject) : null;

  return (
    <div className="min-h-screen bg-slate-950">
      {currentPage === 'home' && (
        <HomePage onNavigateToProject={navigateToProject} />
      )}
      {currentPage === 'project' && project && (
        <ProjectPage project={project} onNavigateToHome={navigateToHome} />
      )}
    </div>
  );
}