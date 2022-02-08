import React, { ChangeEvent, Dispatch } from 'react';

// styled components
import * as S from './styles';
import { Flex } from '../UI/Flex';

// actions
import { TempActions } from '../../reducers/tempReducer';

// props
type TempInputProps = {
	dispatch: Dispatch<TempActions>;
	tempState: any;
	tempType: string;
};

const TempInput = ({ dispatch, tempState, tempType }: TempInputProps) => {
	const changeTempsHandler = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: `CONVERT_FROM_${tempType.toUpperCase()}`, payload: +event.target.value });
	};

	return (
		<Flex>
			<S.Label htmlFor={`temp-${tempType}`}>{tempType}</S.Label>

			<S.Input
				type='number'
				name={`temp-${tempType}`}
				id={`temp-${tempType}`}
				value={tempState[tempType]}
				onChange={changeTempsHandler}
			/>
		</Flex>
	);
};

export default TempInput;
