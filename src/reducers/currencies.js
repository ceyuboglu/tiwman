
import { GET_CURRENCİES_PENDING,GET_CURRENCİES_FULFILLED,GET_CURRENCİES_REJECTED } from '../actions/currencies';

const initialState = {
    fetching:false,
    moneys:[],
    base:{
        symbol:'',
        sign:''
    },
    done:false
};
export default (state = initialState, action) => {
    switch (action.type){
        case GET_CURRENCİES_PENDING: 
            return {
                ...state,
                fetching:true,
                done:false
            };
        case GET_CURRENCİES_FULFILLED:  
            return {
                ...state,
                moneys:action.payload.coins,
                base:action.payload.base,
                fetching:false,
                done:true
            };
        case GET_CURRENCİES_REJECTED:
            return {
                ...state,
                fetching:false,
                done:false
            };
        default:
            return state;
    }
}
