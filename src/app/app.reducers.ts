import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

declare var process: any;

export interface AppState {
}

export const reducers = {
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    if (process.env.ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}
