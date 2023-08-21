import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../graphql/tasks';
import { useParams } from 'react-router-dom';

export function TaskForm() {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject'], //actualizar lista de tareas de este proyecto
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: {
        title: e.target.title.value,
        projectId: params.id,
      },
    });
    e.target.reset();
    e.target.title.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='title'
        placeholder='New Task'
        className='bg-zinc-900 text-white w-full p-2 rounded-lg mb-2'
      />
      <button
        className='bg-cyan-600 text-white rounded-lg shadow-lg p-2 block w-full mb-2 font-bold hover:bg-cyan-500 disabled:bg-slate-600'
        type='submit'
      >
        Add Task
      </button>
    </form>
  );
}
