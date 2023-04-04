import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LodingComponent from '../common/LodingCommon';

const MainPage = lazy(() => import('../pages/MainPage'));

const PublicRouter = () => {
  return (
    <Suspense fallback={<LodingComponent />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRouter;
