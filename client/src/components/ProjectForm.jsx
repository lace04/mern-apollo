import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  CREATE_PROJECT,
  GET_PROJECTS,
  GET_PROJECT,
} from '../graphql/projects.js';

export function ProjectForm() {
  const [project, setproject] = useState({
    name: '',
    description: '',
  });

  const params = useParams();

  useEffect(() => {
    const loadProject = async () => {
      if (params.id) {
        const { data } = await client.query({
          query: GET_PROJECT,
          variables: {
            id: params.id,
          },
        });
        console.log(data.getProject);
        setproject(data.getProject);
      }
    };
  }, []);

  const [createProject, { loading, error, data }] = useMutation(
    CREATE_PROJECT,
    {
      refetchQueries: [
        {
          query: GET_PROJECTS,
        },
        'GetProjects',
      ],
    }
  );

  const handleChange = ({ target: { name, value } }) =>
    setproject({
      ...project,
      [name]: value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='w-4/5 lg:w-2/5 flex flex-col mx-auto'
    >
      {error && <p>{error.message}</p>}

      <input
        type='text'
        name='name'
        placeholder='Write title'
        onChange={handleChange}
        className='bg-zinc-600 text-white rounded-sm shadow-lg p-2 block w-full mb-2'
        autoComplete='off'
      />
      <textarea
        name='description'
        rows='3'
        placeholder='Write description'
        onChange={handleChange}
        className='bg-zinc-600 text-white rounded-sm shadow-lg p-2 block w-full mb-2'
      ></textarea>
      <button
        type='submit'
        disabled={!project.name || !project.description || loading}
        className='bg-cyan-600 text-white rounded-sm shadow-lg p-2 block w-full mb-2 font-bold hover:bg-cyan-500 disabled:bg-slate-600'
      >
        Create Project
      </button>
    </form>
  );
}
