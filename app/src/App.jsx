import './App.css';

import { Outlet } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
