import Navbar1 from "./Components/Navbar.js";
import Navbar2 from "./Components/Navbar2.js";
import Section1 from './Components/Section1.js';
import Section2 from "./Components/Section2.js";
import Section3 from "./Components/Section3.js";
import Section4 from "./Components/Section4.js";
import Section5 from "./Components/Section5.js";
import Section6 from "./Components/Section6.js";
import Section7 from "./Components/Section7.js";
import Section8 from "./Components/Section8.js";
import Section9 from "./Components/Section9.js";
import Section10 from "./Components/Section10.js";
import Section11 from "./Components/Section11.js";
import Footer from "./Components/footer.js";

import './App.css';
function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
   <Navbar1/>
   <Navbar2 scrollToSection={scrollToSection}/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/>
   <Section7/>
   <Section8/>
   <Section9/>
   <Section10/>
   <Section11/>
   <Footer/> 
   </>
  );
}

export default App;
