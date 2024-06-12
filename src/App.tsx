import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full gap-16">
      <div className="flex flex-col gap-4 relative overflow-y-visible overflow-x-hidden p-4">
        <div className="absolute -top-24 -left-40 -right-16 md:bottom-16 bottom-0 md:-rotate-3  bg-secondary -z-20" />
        <Header />
        <Hero />
      </div>
      <Features />
    </div>
  );
}

export default App;
