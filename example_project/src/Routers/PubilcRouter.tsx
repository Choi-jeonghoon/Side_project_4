import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExapmleCommon from '../common/ExampleCommon';

const ExamplePage = lazy(() => import('../pages/ExapmlePage'));

const PublicRouter = () => {
  return (
    <Suspense fallback={<ExapmleCommon />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ExamplePage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRouter;
