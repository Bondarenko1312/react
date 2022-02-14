import Header from './components/Header/Header';
import MoviesList from "./components/MoviesList/MoviesList";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MoviesList />
      </header>
    </div>
  );
}

export default App;
