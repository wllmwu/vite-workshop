import { RouteObject } from "react-router-dom";
import AppRoot from "./AppRoot.tsx";
import Page from "./components/Page.tsx";
import HomePage from "./pages/index.tsx";
import NotFoundPage from "./pages/404.tsx";

const basePath = import.meta.env.BASE_URL;

export const routes: RouteObject[] = [
  {
    path: basePath,
    element: <AppRoot />,
    errorElement: (
      <Page title="404">
        <NotFoundPage />
      </Page>
    ),
    children: [
      {
        index: true,
        element: (
          <Page title="Home">
            <HomePage />
          </Page>
        ),
      },
    ],
  },
];
