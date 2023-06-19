// styled components
import * as S from "./Header.styles";
import { Heading } from "../UI/Heading";

const Header = (): JSX.Element => (
  <S.Header>
    <Heading>Temperature Converte</Heading>
  </S.Header>
);

export default Header;
