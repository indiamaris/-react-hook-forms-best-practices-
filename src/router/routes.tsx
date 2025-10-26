import App from '../App';
import { Simplest } from '../forms/Simplest/Simplest';
import { Cool } from '../forms/cool/Cool';
import { InteractiveForm } from '../forms/interactive/interactiveForm';


export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'simplest',
        element: <Simplest />,
      },
      {
        path: '/cool',
        element: <Cool />,
      },
      {
        path: '/interactive',
        element: <InteractiveForm />,
      },

      {
        path: '/another',
        element: <div>teste</div>,
      },
    ],
  },
];
