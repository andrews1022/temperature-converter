import React, { useReducer } from 'react';

// components
import TempInput from '../TempInput';

// styled components
import * as S from './styles';
import { Button } from '../UI/Button';
import { Flex } from '../UI/Flex';

// reducer
import { initialTemps, tempReducer } from '../../reducers/tempReducer';

const TempCalc = () => {
  // reducer state
  const [tempState, dispatch] = useReducer(tempReducer, initialTemps);

  const resetTempsHandler = () => {
    dispatch({ type: 'RESET_TEMPS', payload: 0 });
  };

  return (
    <S.Wrapper>
      {/* for each key in the temp state object, create a TempInput component for it */}
      {Object.keys(tempState).map((tempType) => (
        <TempInput key={tempType} tempType={tempType} tempState={tempState} dispatch={dispatch} />
      ))}

      <Flex>
        <Button onClick={resetTempsHandler} type='button'>
          Reset
        </Button>
      </Flex>
    </S.Wrapper>
  );
};

export default TempCalc;
