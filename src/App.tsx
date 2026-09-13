import { Suspense } from "react";
import Hero from "./components/Hero"
import Nav from "./components/Nav"
import AllTechnology from "./components/Technologys/AllTechnology";
import type { TechType } from "./components/Type";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const TechnologyFetch = async():Promise<TechType[]> =>{
  const res = await fetch("/TechData.json");
  const data = await res.json();
  return data;
}

function App() {
  const TechnologyPromise = TechnologyFetch();
  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback = {
        <div className=" flex justify-center items-center text-6xl">
          <span className="loading loading-spinner loading-xl"></span>
        </div>}>
        <AllTechnology TechnologyPromise={TechnologyPromise}  />
      </Suspense>
       <ToastContainer />
       <Footer />
    </>
  )
}

export default App;
