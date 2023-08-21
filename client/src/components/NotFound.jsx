import { Link } from 'react-router-dom';
import imgNotFound from '../assets/404.svg';

function NotFound() {
  return (
    <section className='flex flex-col justify-center items-center h-screen'>
      <img src={imgNotFound} alt='404' className='w-[450px]' />
      <Link
        to='/'
        className='text-xl bg-purple-600 hover:bg-purple-800 bg- p-2 rounded-md mt-5 transition duration-300  text-center'
      >
        Home
      </Link>
    </section>
  );
}

export default NotFound;
