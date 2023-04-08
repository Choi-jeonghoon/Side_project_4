import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JeiPage from '~/pages/JeiPage';
import LodingComponent from '../components/LodingComponent';

const TestPage = lazy(() => import('../pages/TestPage'));

const Router = () => {
  return (
    <Suspense fallback={<LodingComponent />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<JeiPage />} />
          <Route path='/test' element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
