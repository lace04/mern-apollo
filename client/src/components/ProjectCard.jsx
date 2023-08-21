import { useNavigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { DELETE_PROJECT } from '../graphql/projects';

export function ProjectCard({ project }) {
  const params = useParams();
  // console.log(params)
  const navigate = useNavigate();
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: ['getProjects'],
  });

  return (
    <div className='bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-3 cursor-pointer hover:bg-zinc-700 flex justify-between'>
      <div
        className='w-full'
        onClick={() => navigate(`/projects/${project._id}`)}
      >
        <h2 className='text-xl font-semibold hover:text-green-200'>
          {project.name}
        </h2>
        <p className='hover:text-red-100'>{project.description}</p>
      </div>
      <div className='btns flex flex-row gap-2'>
        <button
          className='text-green-400 hover:text-green-700 hover:text-xl'
          onClick={() => navigate(`/edit/${project._id}`)}
        >
          <AiOutlineEdit />
        </button>
        <button
          onClick={() => {
            confirm('Delete Project?')
              ? deleteProject({
                  variables: {
                    id: project._id,
                  },
                })
              : alert('Project not deleted');
          }}
          className='text-red-400  hover:text-red-600 hover:text-xl'
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}
