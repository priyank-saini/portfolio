import Home from "./components/Home/page";
import Proficiences from "./components/Proficiences/page";
import About from "./components/About/page";
import Lines from "./components/Lines/page";
import Experiences from "./components/Experiences/page";
import Timeline from "./components/Timeline/page";
import Line from "./components/Line/page";
import Portfolio from "./components/Portfolio/page";
import Footer from "./components/Footer/page";
import Navbar from "./components/Navbar/page";

const page = () => {
  return (
    <main className="flex flex-col gap-[50px]">
      <Navbar/>
      <Home/>
      <Proficiences/>
      <About/>
      <Lines/>
      <Experiences/>
      <Timeline/>
      <Line/>
      <Portfolio/>
      <Footer/>
    </main>    
  );
};

export default page;
