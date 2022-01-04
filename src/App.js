import './Styles/App.scss';
import MainPage from './Componnets/MainPage';
import NavBar from './Componnets/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <button>Click Here</button>
    </div>
  );
}

export default App;
