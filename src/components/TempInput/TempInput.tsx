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
    const payload = +event.target.value;

    switch (type) {
      case "celsius":
        dispatch({ type: "CONVERT_FROM_CELSIUS", payload });
        break;

      case "fahrenheit":
        dispatch({ type: "CONVERT_FROM_FAHRENHEIT", payload });
        break;

      case "kelvin":
        dispatch({ type: "CONVERT_FROM_KELVIN", payload });
        break;

      default:
        break;
    }
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
