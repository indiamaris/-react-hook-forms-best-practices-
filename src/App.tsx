import './App.css';
import { Outlet } from 'react-router';
import { Shell } from './components/Shell/Shell';

function App() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}

export default App;
