import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setnewYearMessage] = useState(["BYE 2023!"])


    const particlesInitialization = async(engine) =>{
      await loadFireworksPreset(engine)
    }


    function timeLeft(){
      const newYearDate = new Date("January 1, 2024 00:00:00").getTime()
      const nowDate = new Date (). getTime()
      const reminingTime =newYearDate-nowDate
      return reminingTime
    }
  return (
    <>
    <Particles
    init={particlesInitialization}
    options={{preset: "fireworks"}}
    />
    <div className="flex flex-col justify-center items-center min-h-screen gap-4">
    <span className="text-white text-4xl font-bold px-4 z-50">
      <Typewriter words={newYearMessage} loop={false}/>
    </span>
    <div className="z-50 text-white font-bold text-2xl">
      <Countdown date={Date.now() + timeLeft()} onComplete={() => setnewYearMessage([
        "WELCOME 2024"
      ])} />
    </div>
    </div>
    </>
  );
}

export default App;
