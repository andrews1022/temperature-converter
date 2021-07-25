import React, { useReducer } from 'react';

// component
import TempInput from '../TempInput';

// reducer
import { initialTemps, tempReducer } from '../../reducers/tempReducer';

import { Temp, TempGroup, TempResetButton } from './styles';

const TempCalc = () => {
	const [tempState, dispatch] = useReducer(tempReducer, initialTemps);

	return (
		<Temp>
			{/* for each key in the temp state object, create a TempInput component for it */}
			{Object.keys(tempState).map((tempType) => (
				<TempInput key={tempType} tempType={tempType} tempState={tempState} dispatch={dispatch} />
			))}

			<TempGroup>
				<TempResetButton onClick={() => dispatch({ type: 'reset_temps' })} type='button'>
					Reset
				</TempResetButton>
			</TempGroup>
		</Temp>
	);
};

export default TempCalc;
