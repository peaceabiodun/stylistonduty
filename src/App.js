
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage/>
      <Services />
      <Gallery />
      <Cards />
      <Footer />
    </div>
  );
}
export default App;
