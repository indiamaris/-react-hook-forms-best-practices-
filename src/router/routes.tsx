
import App from "../App";
import { Simplest } from "../forms/Simplest/Simplest";
import { Cool } from "../forms/cool/Cool";

export const routes = [
  {
    path: "/",
    element: <App />,
        children: [
          {
        path: "simplest",
        element: <Simplest />,
       
      },
      {
        path: "/cool",
        element: <Cool />,
      },

      {
        path: "/another",
        element: <div>teste</div>,
      }

    ],
  }
  ]