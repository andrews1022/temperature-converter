import type { ChangeEvent, Dispatch } from "react";

// styled components
import * as S from "./TempInput.styles";
import { Flex } from "../UI/Flex";

// actions
import type { TempActions } from "../../reducers/tempReducer";

// custom type
import { TempState } from "../../reducers/tempReducer";

// props
type TempInputProps = {
  dispatch: Dispatch<TempActions>;
  state: TempState;
  type: string;
};

const TempInput = ({ dispatch, state, type }: TempInputProps): JSX.Element => {
  const changeTempsHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: `CONVERT_FROM_${type.toUpperCase()}`, payload: +event.target.value });
  };

  return (
    <Flex>
      <S.Label htmlFor={`temp-${type}`}>{type}</S.Label>

      <S.Input
        id={`temp-${type}`}
        name={`temp-${type}`}
        onChange={changeTempsHandler}
        type="number"
        value={state[type as keyof TempState]}
      />
    </Flex>
  );
};

export default TempInput;
