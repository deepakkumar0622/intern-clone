import Navbar from "../components/Constants/Navbar";
import Hero from "../components/Hero";
import Quote from "../components/Quote";
import Answer from "../components/Answer";
import Details from "../components/Constants/Details";
import Footer from "../components/Constants/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-[#fffdfa] container md:mx-auto md:px-32">
        <Quote />
        <Answer />
        <hr />
        <Details />
        <Footer />
      </div>
    </div>
  );
}
