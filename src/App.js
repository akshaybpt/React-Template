
import './App.css';
import About from './component/about';
import Navigationbar from './component/nav';
import Slider from './component/slider';
import Team from './component/team';
import Project from './component/project';
import Review from './component/review';
import Blog from './component/blog';
import Store from './component/store';
import Contact from './component/contact';


function App() {
  return (
    <div>

      <Navigationbar />
      <Slider />
      <About />
      <Team />
      <Project />
      <Review />
      <Blog />
      <Store />
      <Contact />
    </div>
  );
}

export default App;
