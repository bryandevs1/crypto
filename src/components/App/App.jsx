import Loader from '@components/atoms/Loader';
import PageLayout from '@layouts/PageLayout';
import ROUTES from '@shared/routes';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </PageLayout>
    </BrowserRouter>
  );
}
