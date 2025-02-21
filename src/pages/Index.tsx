
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import TopFunds from "@/components/TopFunds";
import Calculator from "@/components/Calculator";
import Learn from "@/components/Learn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main>
        <Hero />
        <TopFunds />
        <Calculator />
        <Learn />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
