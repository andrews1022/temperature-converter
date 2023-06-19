// components
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import TempCalc from "../TempCalc/TempCalc";

// styled components
import * as S from "./App.styles";

const App = (): JSX.Element => (
  <S.Wrapper>
    <Header />
    <TempCalc />
    <Footer />
  </S.Wrapper>
);

export default App;
