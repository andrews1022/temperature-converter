export interface TempState {
	celsius: number;
	fahrenheit: number;
	kelvin: number;
}

export const initialTemps: TempState = {
	celsius: 0,
	fahrenheit: 0,
	kelvin: 0
};

export type Actions =
	| { type: `convert_from_${string}`; payload: number }
	| { type: 'convert_from_celsius'; payload: number }
	| { type: 'convert_from_fahrenheit'; payload: number }
	| { type: 'convert_from_kelvin'; payload: number }
	| { type: 'reset_temps'; payload: number };

export const tempReducer = (state: TempState, action: Actions): TempState => {
	switch (action.type) {
		case 'convert_from_celsius':
			return {
				...state,
				celsius: +action.payload,
				fahrenheit: +(+action.payload * 1.8 + 32).toFixed(2),
				kelvin: +(+action.payload + 273.15).toFixed(2)
			};

		case 'convert_from_fahrenheit':
			return {
				...state,
				celsius: +((+action.payload - 32) / 1.8).toFixed(2),
				fahrenheit: +action.payload,
				kelvin: +((+action.payload - 32) / 1.8 + 273.15).toFixed(2)
			};

		case 'convert_from_kelvin':
			return {
				...state,
				celsius: +(+action.payload - 273.15).toFixed(2),
				fahrenheit: +((+action.payload - 273.15) * 1.8 + 32).toFixed(2),
				kelvin: +action.payload
			};

		case 'reset_temps':
			return initialTemps;

		default:
			return state;
	}
};
