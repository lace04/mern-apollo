import { TaskCard } from './TaskCard';
import imgNotTask from '../../assets/notTask.svg';

export function TaskList({ tasks }) {
  if (tasks.length === 0)
    return (
      <section className='w-full'>
        <div className='flex flex-col items-center justify-self-center'>
          <img src={imgNotTask} alt='404' className='w-[350px]' />
          <p className='text-center text-2xl'>No tasks yet</p>
          <p>create a new task</p>
        </div>
      </section>
    );

  return (
    <div className='flex flex-col md:w-[60%] mx-auto w-[90%] mt-5 md:mt-0'>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}
