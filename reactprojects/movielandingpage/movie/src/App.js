import './App.css';
import MoviePage2 from './Components/MoviePage2';
import MoviePage1 from './Components/MoviePage1';

function App() {
  return (
    <div className="App">
      <h1>BEST KIDS' MOVIES OF THE DECADE</h1>
      <h3>MOVIES SUITABLE FOR 5+:</h3><br/>
      <MoviePage1></MoviePage1>
      <h3>MOVIES SUITABLE FOR 9+:</h3><br/>
      <MoviePage2></MoviePage2>
    </div>
  );
}

export default App;
