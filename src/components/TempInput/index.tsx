import React from 'react';

// styled components
import { TempGroup } from '../TempCalc/styles';
import { TempInputWrapper, TempLabel } from './styles';

// actions
import { Actions } from '../../reducers/tempReducer';

// props
interface TempInputProps {
	dispatch: React.Dispatch<Actions>;
	tempState: any;
	tempType: string;
}

const TempInput = ({ dispatch, tempState, tempType }: TempInputProps) => (
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
