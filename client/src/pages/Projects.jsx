import { useNavigate } from 'react-router-dom';
import { ProjectForm } from '../components/ProjectForm';
import { ProjectList } from '../components/ProjectList';

export function Projects() {
  const navigate = useNavigate();
  return (
    <div className='bg-zinc-900 rounded-md shadow-lg shadow-black p-8 h-4/5 w-3/5'>
      <h1 className='text-3xl font-semibold py-2 mb-4 hover:cursor-pointer hover:text-zinc-400' 
      onClick={() => navigate(`/projects`)}> Project Manager</h1>
      <div className='flex justify-between gap-x-1'>
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
}
