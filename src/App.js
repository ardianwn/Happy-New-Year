import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

function App() {
  const [newYearMessage, setNewYearMessage] = useState(["Say Good Bye to 2023",
  "Barang siapa yang membaca kalimat:",
  "Laailaaha Illallaah (3x)",
  "Muhammadur Rasulullah shalallahu alaihi wassallam (1x)",
  "Dibaca pada malam tahun baru Masehi tepat pada jam 24.00/00.00 (di saat semua orang sedang lalai). Maka orang yang membaca kalimat tauhid tersebut mereka akan mendapatkan satu juta pahala dan satu juta derajad serta dihapus satu juta dosa kecil.",
  "Al Habib Abdulloh bin Abdul Qodir Bilfaqih",
]);

  const particlesInit = async (preset) => {
    await loadFireworksPreset(preset);
  };

  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles init={particlesInit} options={{ preset: "fireworks" }} />
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50">
          <Typewriter
            words={newYearMessage}
            loop={false}
            cursor
            cursorStyle={""}
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown
            date={Date.now() + timeLeft()}
            onComplete={() =>
              setNewYearMessage([
                "Happy",
                "New",
                "Year",
                "✨2024✨",
                "Hope for the better",
              ])
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;