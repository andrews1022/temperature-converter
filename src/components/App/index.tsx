import React from 'react';

// components
import Footer from '../Footer';
import Header from '../Header';
import TempCalc from '../TempCalc';

// styled components
import * as S from './styles';

const App = () => (
	<S.Wrapper>
		<Header />
		<TempCalc />
		<Footer />
	</S.Wrapper>
);

export default App;
