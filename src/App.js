import './App.css';
import Menu from './pages/Menu';
import Router from './router';

function App() {
  return (  
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>
      <Menu/>
      <Router/>
    </div>
  );
}

export default App;
