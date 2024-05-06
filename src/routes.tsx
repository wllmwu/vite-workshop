import { RouteObject } from "react-router-dom";
import AppRoot from "./AppRoot.tsx";
import Page from "./components/Page.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
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
