import { useReducer } from "react";

// components
import TempInput from "../TempInput/TempInput";

// styled components
import * as S from "./TempCalc.styles";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";

// reducer
import { initialTemps, tempReducer } from "../../reducers/tempReducer";

const TempCalc = (): JSX.Element => {
  // reducer state
  const [state, dispatch] = useReducer(tempReducer, initialTemps);

  const resetTempsHandler = () => {
    dispatch({ type: "RESET_TEMPS", payload: 0 });
  };

  return (
    <S.Wrapper>
      {Object.keys(state).map((temp) => (
        <TempInput key={temp} type={temp} state={state} dispatch={dispatch} />
      ))}

      <Flex>
        <Button onClick={resetTempsHandler} type="button">
          Reset
        </Button>
      </Flex>
    </S.Wrapper>
  );
};

export default TempCalc;
