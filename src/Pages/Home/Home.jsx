import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import ProblemSolution from "../../Components/ProblemSolution/ProblemSolution";
import Features from "../../Components/Features/Features";
import Path from "../../Components/Path/Path";
import Proof from "../../Components/Proof/Proof";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Features />
      <Path />
      <Proof />
      <Footer />
    </>
  );
}

export default Home;