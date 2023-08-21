import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../graphql/projects.js';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard.jsx';
import imgNotProject from '../assets/notProjects.svg';

export function ProjectList() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  if (data.projects.length === 0)
    return (
      <section className='w-full'>
        <div className='flex flex-col items-center justify-self-center'>
          <img src={imgNotProject} alt='404' className='w-[450px]' />
          <p className='text-center text-2xl'>No projects yet</p>
          <p>create a new project</p>
        </div>
      </section>
    );

  return (
    <div className='overflow-y-auto h-96 w-full px-5'>
      {data.projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
