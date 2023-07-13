import { Banner } from "./components/Banner";
import { SectionUm } from "./components/SectionUm";
import { SectionDois } from "./components/SectionDois";
import { SectionTres } from "./components/SectionTres";
import { SectionQuatro } from "./components/SectionQuatro";
import { SectionCinco } from "./components/SectionCinco";
import { SectionSeis } from "./components/SectionSeis";
import { SectionSete } from "./components/SectionSete";
import { Footer } from "./components/Footer";
import { ButtonWhats } from "./components/ButtonWhats";
import { Forms } from "./components/Forms";
import { ButtonUP } from "./components/ButtonUP";
/* import Tables from "./components/Table"; */
// adicionando comentario qualquer

function App() {
  return (
    <div className="bg-[#ffffff] bg-opacity-50 backdrop-blur-sm  transition-all duration-300">
      <SectionUm></SectionUm>
      <Banner></Banner>

      <SectionDois></SectionDois>

      <SectionTres></SectionTres>
      <ButtonUP></ButtonUP>
      <SectionQuatro></SectionQuatro>
      <SectionCinco></SectionCinco>
      <ButtonWhats></ButtonWhats>
      <SectionSeis></SectionSeis>
      <Forms></Forms>
      {/*    <Tables></Tables> */}
      <SectionSete></SectionSete>
      <Footer></Footer>
    </div>
  );
}

export default App;
