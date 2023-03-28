import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLoding from "../common/CommonLoding";

const MainPage = lazy(() => import("../page/MainPage"));

const PublicRouter = () => {
  return (
    <Suspense fallback={<CommonLoding />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default PublicRouter;
