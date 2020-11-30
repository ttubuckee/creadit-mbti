import './App.css';
import Test from './components/Test';
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Test testParams = {{'testLink' : 'https://www.naver.com', 'testText' : 'hi'}}/>
      </header>
    </div>
  );
}

export default App;
