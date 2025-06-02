import { Project } from './Project'; 

interface ProjectListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectListProps) {
    return (
        <div className="row">
            {projects.map((Project) => (
                <div key={Project.id} className="cols-sm">
                    <div className="card">
                        <img src={Project.imageUrl} alt={Project.name} />
                        <section className="section dark">
                            <h5 className="strong">
                                <strong>{Project.name}</strong>
                            </h5>
                        <p>{Project.description}</p>
                        <p>Budget: {Project.budget.toLocaleString()}</p>
                        </section>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;