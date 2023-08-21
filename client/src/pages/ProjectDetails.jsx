import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../graphql/projects.js';
import { TaskList } from '../components/tasks/TaskList';
import { TaskForm } from '../components/tasks/TaskForm';
import { AiOutlineHome } from 'react-icons/ai';

export function ProjectDetails() {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id,
    },
    skip: !params.id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <div className='bg-zinc-900 mb-8 p-8 flex flex-col'>
        <h1 className='text-2xl font-semibold'>Project: {data.project.name}</h1>
        <p className='font-semibold text-xs mt-2'>Description: {data.project.description}</p>
      </div>
      {/* <button className='bg-blue-500- px-5 py-2 rounded-full my-4 block hover:bg-red-700'>
        Delete
      </button> */}
      <article className='flex flex-col w-full md:flex md:flex-row'>
        <TaskForm />
        <TaskList tasks={data.project.tasks} />
      </article>
      <div className='flex items-center justify-center text-2xl mt-10 text-cyan-900 hover:text-teal-800'>
        <Link to='/'>
          <AiOutlineHome />
        </Link>
      </div>
    </div>
  );
}
