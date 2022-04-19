import { UPDATE_WALLET } from "../types";

const data = {
    walletAddress: ''
}

export default function(state = data, action) {
    switch(action.type) {
        case UPDATE_WALLET:
            return { ...state, walletAddress: action.payload }
        default:
            return state;
    }
}