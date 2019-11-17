import * as COLORS from '../constants/colors';

const initState = {
    colorItem: {},
    loaded: false
};

export default function (state = initState, action) {

    switch (action.type) {

        case COLORS.COLOR_SEND_REQUEST:
            return {
                ...state,
                ...{
                    loaded : false
                }
            };

            case COLORS.COLOR_GET_COLOR_ITEM:
                return {
                    ...state,
                    ...{
                        colorItem: action.data,
                        loaded: true
                    }
                };

        default:
            return state
    }
}
