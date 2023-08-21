import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../graphql/tasks';
import { AiOutlineDelete } from 'react-icons/ai';

export function TaskCard({ task }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject'],
  });

  return (
    <div className='bg-zinc-800 px-5 py-3 mb-2 flex justify-between'>
      <h3 className='hover:text-gray-500'>{task.title}</h3>
      <button
        onClick={() => {
          confirm('Delete Task?')
            ? deleteTask({
                variables: {
                  id: task._id,
                },
              })
            : alert('Task not deleted');
        }}
        className='text-red-400  hover:text-red-600 hover:text-xl'
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
}
