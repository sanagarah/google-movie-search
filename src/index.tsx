import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from "src/App";
import "src/data/i18n";
import MovieIdProvider from "src/hooks/providers/MovieIdProvider";
import MovieDetailsProvider from "src/hooks/providers/MovieDetailsProvider";
import TabProvider from "src/hooks/providers/TabProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="...loading">
        <TabProvider>
          <MovieIdProvider>
            <MovieDetailsProvider>
              <App />
            </MovieDetailsProvider>
          </MovieIdProvider>
        </TabProvider>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
