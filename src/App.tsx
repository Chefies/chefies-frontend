import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Screenshots from "./components/Screenshots";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full gap-16" id="top">
      <div className="flex flex-col gap-4 relative overflow-y-visible overflow-x-hidden p-4">
        <div className="absolute -top-24 -left-40 -right-16 md:bottom-16 bottom-0 md:-rotate-3  bg-secondary -z-20" />
        <Header />
        <Hero />
      </div>
      <Features />

      <div
        className="relative overflow-hidden p-4 pt-44 -mt-16"
        id="screenshots"
      >
        <div className="absolute top-24 -left-40 -right-16 md:-bottom-16 bottom-0 md:rotate-3 bg-secondary -z-20" />
        <Screenshots />
      </div>

      <Footer />
    </div>
  );
}

export default App;
