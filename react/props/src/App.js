import logo from './logo.svg';
import './App.css';
import First from './components/first';

function App() {
  return (
    <div className="App">
      <First name="Mike">
        <p>This is mike child </p>
      </First>
      <First name="Sammy">
        <p>This is sunny child</p>
      </First>
      
    </div>
  );
}

export default App;
