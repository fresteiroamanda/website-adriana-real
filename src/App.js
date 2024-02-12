import './App.css';
import SectionOne from './components/sectionOne/sectionOne';
import SectionTwo from './components/sectionTwo/sectionAbout';
import SectionThree from './components/sectionThree/sectionThree';
import FormWhatsapp from './components/sectionContact/contact'

function App() {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <FormWhatsapp />
      <SectionThree />
    </>
  );
}

export default App;

