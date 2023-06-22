import React, { ComponentType, ReactElement } from "react";
import { Suspense } from "react";
import {
  getCastPath,
  getDefaultPath,
  getMoviesPath,
  getOverviewPath,
  getTrailersPath,
} from "src/routers/paths";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieSearchLayout from "src/components/layouts/movie-search-layout";

const OverviewContainer = React.lazy(
  () => import("src/components/containers/overview-container")
);
const MoviesPage = React.lazy(() => import("src/components/pages/movies"));
const CastPage = React.lazy(() => import("src/components/pages/cast"));
const TrailersPage = React.lazy(() => import("src/components/pages/trailers"));

const withSuspense = (WrappedComponent: ComponentType) => {
  return (
    <Suspense>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: ReactElement) => {
  const newComponent = () => withSuspense(element.props.component);

  return { ...element, props: { ...element.props, component: newComponent } };
};

export default function Routing() {
  return (
    <Suspense>
      <MovieSearchLayout>
        <BrowserRouter>
          <Routes>
            <Route
              key="DefaultPage"
              path={getDefaultPath()}
              element={<Navigate to={getOverviewPath()} replace />}
            />
            <Route
              key="OverviewPage"
              path={getOverviewPath()}
              element={withSuspenseComponents(<OverviewContainer />)}
            />
            <Route
              key="MoviesPage"
              path={getMoviesPath()}
              element={withSuspenseComponents(<MoviesPage />)}
            />
            <Route
              key="CastPage"
              path={getCastPath()}
              element={withSuspenseComponents(<CastPage />)}
            />
            <Route
              key="TrailersPage"
              path={getTrailersPath()}
              element={withSuspenseComponents(<TrailersPage />)}
            />
          </Routes>
        </BrowserRouter>
      </MovieSearchLayout>
    </Suspense>
  );
}
