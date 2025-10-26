import App from '../App';
import { Simplest } from '../forms/Simplest/Simplest';
import { AdtiveForm } from '../forms/adctive-form/AdtiveForm';
import { Cool } from '../forms/cool/Cool';
import { InteractiveForm } from '../forms/interactive/InteractiveForm';


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
        path: '/adctive',
        element: <AdtiveForm />,
      },

      {
        path: '/another',
        element: <div>teste</div>,
      },
    ],
  },
];
