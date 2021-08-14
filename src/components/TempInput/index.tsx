import React from 'react';

// styled components
import { TempGroup } from '../TempCalc/styles';
import { TempLabel, TempInputWrapper } from './styles';

// action type
import { Actions } from '../../reducers/tempReducer';

interface TempInputProps {
	tempType: string;
	tempState: any;
	dispatch: React.Dispatch<Actions>;
}

const TempInput = ({ tempType, tempState, dispatch }: TempInputProps) => (
	<TempGroup>
		<TempLabel htmlFor={`temp-${tempType}`}>{tempType}</TempLabel>
		<TempInputWrapper
			className='temp-input'
			type='number'
			name={`temp-${tempType}`}
			id={`temp-${tempType}`}
			value={tempState[tempType]}
			onChange={(e) => dispatch({ type: `convert_from_${tempType}`, payload: +e.target.value })}
		/>
	</TempGroup>
);

export default TempInput;
