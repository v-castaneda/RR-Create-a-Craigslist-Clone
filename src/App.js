// Import data
import SearchBar from './components/searchbar';
import Gallery from './components/gallery';

// Import components
import './App.css';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <SearchBar />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
