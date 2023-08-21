import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Projects } from './pages/Projects';
import { ProjectDetails } from './pages/ProjectDetails';
import NotFound from './components/NotFound';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <main className='m-auto h-screen flex items-center justify-center'>
          <Routes>
            <Route path='/' element={<Navigate to='/projects' />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/edit/:id' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
