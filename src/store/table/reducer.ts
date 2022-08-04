import { TEST_TABLE } from './constants';

interface State {
    test: string;
}

const initialState: State = {
    test: 'test',
};

export function tableReducer(state: State = initialState, action: any) {
    switch (action.type) {
        case TEST_TABLE: {
            state.test = action.payload;
        }
        default:
            return state;
    }
}
