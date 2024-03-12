import Header from "./components/Header";
import Hero from "./components/Hero";
import Carousel from "./Carousel";
import useClubes from "../src/Hooks/useClubes";
import Footer from "./components/Footer"

function LoginPage() {
  const clubes = useClubes();

  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <Carousel clubes={clubes} />
      <Footer/>
    </div>
  );
}

export default LoginPage;
