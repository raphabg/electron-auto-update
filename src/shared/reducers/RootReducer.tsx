export type RootState = {};

const initialState: RootState = {};

export enum RootActionTypes {
	ADD_NOTE,
}

export type RootAction = { type: RootActionTypes.ADD_NOTE; payload: String };

export const RootReducer = (state: RootState = initialState, action: RootAction): RootState => {
	switch (action.type) {
		case RootActionTypes.ADD_NOTE:
			return state;
		default:
			return state;
	}
};

export default RootReducer;
