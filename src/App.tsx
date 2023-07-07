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
/* import Tables from "./components/Table"; */

function App() {
  return (
    <div className="">
      {/* <Banner></Banner> */}
      <SectionUm></SectionUm>
      <SectionDois></SectionDois>

      <SectionTres></SectionTres>

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
