import { TaskCard } from './TaskCard';

export function TaskList({ tasks }) {
  return (
    <>
    {tasks.map((task) => (
      <TaskCard key={task._id} task={task} />
    ))}
    </>
  );
}
