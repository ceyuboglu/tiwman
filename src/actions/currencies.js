import axios from 'axios';

 
export const GET_CURRENCİES_PENDING = "GET_CURRENCİES_PENDING";
export const GET_CURRENCİES_FULFILLED = "GET_CURRENCİES_FULFILLED";
export const GET_CURRENCİES_REJECTED = "GET_CURRENCİES_REJECTED";


export function getCurrencies() {
    return dispatch => {
        dispatch({
            type: "GET_CURRENCİES",
            payload:axios.get(`https://api.coinranking.com/v1/public/coins?base=TRY`)
                .then(response => response.data.data)
                .catch(error => console.log(error))
        })
    }
}