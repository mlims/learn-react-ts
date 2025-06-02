import { Project } from './Project'; 
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    const items = projects.map(Project => (
        <div key={Project.id} className="cols-sm">
            <ProjectCard project={Project} />
        </div>
    ));
    return <div className="row">{items}</div>
}

export default ProjectList;