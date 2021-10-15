// components
import AppWrapper from './components/AppWrapper';
import Footer from './components/Footer';
import Header from './components/Header';
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
