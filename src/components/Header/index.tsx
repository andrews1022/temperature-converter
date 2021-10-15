// components
import Heading from '../Heading';

// styled components
import HeaderWrapper from './styles';

// props
interface HeaderProps {
	headingText: string;
}

const Header = ({ headingText }: HeaderProps) => (
	<HeaderWrapper>
		<Heading>{headingText}</Heading>
	</HeaderWrapper>
);

export default Header;
