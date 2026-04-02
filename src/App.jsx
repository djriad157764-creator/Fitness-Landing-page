import "./App.css";
import Banner from "./Component/Banner/Banner";
import ExtraRun from "./Component/ExtraRun/ExtraRun";
import Footer from "./Component/Footer/Footer";
import HabitsSection from "./Component/HabitsSection/HabitsSection";
import Navbar from "./Component/Navbar/Navbar";
import OurTeam from "./Component/OurTeam/OurTeam";
import TrainingsSection from "./Component/TrainingsSection/TrainingsSection";

function App() {
  return <>
    <Navbar />
    <Banner />
    <HabitsSection />
    <ExtraRun />
    <TrainingsSection />
    <OurTeam />
    <Footer/>
  </>;
}

export default App;
