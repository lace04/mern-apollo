import { useNavigate } from 'react-router-dom';
import { ProjectForm } from '../components/ProjectForm';
import { ProjectList } from '../components/ProjectList';

export function Projects() {
  const navigate = useNavigate();
  return (
    <section className='bg-zinc-900 rounded-md shadow-lg shadow-black p-2 h-full'>
      <h1
        className='text-3xl font-semibold py-2 mb-4 hover:cursor-pointer hover:text-zinc-400 text-center'
        onClick={() => navigate(`/projects`)}
      >
        {' '}
        Project Manager
      </h1>
      <div className='flex flex-col mx-auto lg:flex lg:flex-row justify-between gap-x-1 md:w-2/3 gap-y-5'>
        <ProjectForm />
        <ProjectList />
      </div>
    </section>
  );
}
