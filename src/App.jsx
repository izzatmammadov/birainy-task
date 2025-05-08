import { useEffect } from "react";
import Services from "./pages/Services"
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
    <Services/>
    </>
  )
}

export default App
