import { Project } from './Project';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard(props: ProjectCardProps) {
  const { project } = props;
  const handleEditClick = (projectBeingEdited: Project) => {
    console.log(projectBeingEdited);
  };
  return (
    <div className="card">
      <img src={project.imageUrl} alt={project.name} />
      <section className="section dark">
        <h5 className="strong">
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString()}</p>
            <button 
            className="bordered"
            onClick={() => {handleEditClick(project)}}
            >
                <span className="icon-edit"></span>
                Edit
            </button>
      </section>
    </div>
  );
}

export default ProjectCard;