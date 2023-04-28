import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Skills} from "./components/Skills";




function App() {
  return (
    <div className="App">
      <Banner />
      <Skills/>
      <Footer />
    </div>
  );
}

export default App;
