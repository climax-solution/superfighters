import { UPDATE_WALLET } from "../types"

export const update_wallet = (address) => (dispatch) => {
    dispatch({
        type: UPDATE_WALLET,
        payload: address
    })
}