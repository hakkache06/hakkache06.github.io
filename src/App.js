import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Skills} from "./components/Skills";
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';





function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner />
      <Skills/>
      {/* <Projects/> */}
      <Footer />
    </div>
  );
}

export default App;
