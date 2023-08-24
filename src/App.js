import About from "./about/About";
import Navbar from "./components/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Introduction from "./components/intro/Introduction.jsx";
import Skills from "./components/skills/Skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
