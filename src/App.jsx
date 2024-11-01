import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
const links = [
  { id: 1, link: "home" },
  { id: 2, link: "about" },
  { id: 3, link: "portfolio" },
  { id: 4, link: "contact" },
];

function App() {
  return (
    <>
      <div className="h-20">
        <Navbar links={links} />
      </div>

      <Home />
      <About />
      <Portfolio />
      <Footer
        email="anujmalakar256@gmail.com"
        phone="+91 6262776186"
        whatsapp="https://wa.me/6262776186"
        twitter=""
        instagram="https://instagram.com/anuj_malakar._"
        Github="https://github.com/AnujHub1"
        linkedin="https://www.linkedin.com/in/malakaranuj/"
        resume="https://docs.google.com/document/d/10CPRZemu80iB_2t4J9eD1eRFxDwbOym14NzlKEGFprM/edit?usp=drive_link"
      />
    </>
  );
}

export default App;
