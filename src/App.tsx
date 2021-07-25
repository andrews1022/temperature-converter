// components
import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import Footer from './components/Footer';
import TempCalc from './components/TempCalc';

// data
import socialLinks from './data/socialLinks';

const App = () => (
	<AppWrapper>
		<Header headingText='Temperature Converter' />
		<TempCalc />
		<Footer socialLinks={socialLinks} />
	</AppWrapper>
);

export default App;
