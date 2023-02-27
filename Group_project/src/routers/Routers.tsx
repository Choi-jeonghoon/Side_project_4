import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LodingComponent from '../components/LodingComponent';

const TestPage = lazy(() => import('../pages/TestPage'));

const Router = () => {
  return (
    <Suspense fallback={<LodingComponent />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TestPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
