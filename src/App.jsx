import "./index.css";
import Navbar from "./Components/Navbar";
import HeroSec from "./Components/HeroSec";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSec />
      <FeaturedProducts />
      <Footer />
    </>
  );
}
