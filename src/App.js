import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App container-mobile">
      {/* Outlet para renderizar as rotas filhas */}
      <Outlet />
    </div>
  );
}

export default App;


