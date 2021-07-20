import './App.css';
import Navbar from './Navbar';
import ToggleTheme from './ToggleTheme';

function App() {
  return (
    <div className="App container px-10 pt-5 m-0 min-w-full min-h-screen bg-white dark:bg-black">
      <Navbar/>
      <ToggleTheme/>
    </div>
  );
}

export default App;
