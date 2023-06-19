export type TempState = {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
};

export type TempActions =
  | { type: `CONVERT_FROM_${string}`; payload: number }
  | { type: "CONVERT_FROM_CELSIUS"; payload: number }
  | { type: "CONVERT_FROM_FAHRENHEIT"; payload: number }
  | { type: "CONVERT_FROM_KELVIN"; payload: number }
  | { type: "RESET_TEMPS"; payload: number };

export const initialTemps: TempState = {
  celsius: 0,
  fahrenheit: 0,
  kelvin: 0
};

export const tempReducer = (state: TempState = initialTemps, action: TempActions): TempState => {
  switch (action.type) {
    case "CONVERT_FROM_CELSIUS": {
      return {
        ...state,
        celsius: +action.payload,
        fahrenheit: +(+action.payload * 1.8 + 32).toFixed(2),
        kelvin: +(+action.payload + 273.15).toFixed(2)
      };
    }

    case "CONVERT_FROM_FAHRENHEIT": {
      return {
        ...state,
        celsius: +((+action.payload - 32) / 1.8).toFixed(2),
        fahrenheit: +action.payload,
        kelvin: +((+action.payload - 32) / 1.8 + 273.15).toFixed(2)
      };
    }

    case "CONVERT_FROM_KELVIN": {
      return {
        ...state,
        celsius: +(+action.payload - 273.15).toFixed(2),
        fahrenheit: +((+action.payload - 273.15) * 1.8 + 32).toFixed(2),
        kelvin: +action.payload
      };
    }

    case "RESET_TEMPS": {
      return initialTemps;
    }

    default: {
      return state;
    }
  }
};
