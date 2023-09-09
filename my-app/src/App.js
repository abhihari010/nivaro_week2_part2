import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logodup" alt="logo" />
        <h1 className="Main-Title"> Click on the image to watch some crazy highlights</h1>

        <a href="https://www.youtube.com/watch?v=dxbVdyVYGcQ&ab_channel=NBA">
          <img src="https://cdn.cdkeys.com/700x700/media/catalog/product/k/o/kobe_bryant_2k24_1.png" alt="Basketball" height={300} width={200}/>
        </a>

      </header>
    </div>
  );
}

export default App;
