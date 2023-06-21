import React from "react";
import { Suspense } from "react";
import {
  getCastPath,
  getDefaultPath,
  getMoviesPath,
  getOverviewPath,
  getTrailersPath,
} from "../paths";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieSearchLayout from "../../components/layouts/movie-search-layout";

const OverviewPage = React.lazy(() => import("src/components/pages/overview"));
const MoviesPage = React.lazy(() => import("src/components/pages/movies"));
const CastPage = React.lazy(() => import("src/components/pages/cast"));
const TrailersPage = React.lazy(() => import("src/components/pages/trailers"));

const withSuspense = (WrappedComponent: any) => {
  return (
    <Suspense>
      <WrappedComponent />
    </Suspense>
  );
};

export const withSuspenseComponents = (element: any) => {
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
              element={withSuspenseComponents(<OverviewPage />)}
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
