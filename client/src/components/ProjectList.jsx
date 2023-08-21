import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/projects.js';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return (
    <div className='overflow-y-auto h-96 w-full px-5'>
      {data.projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
