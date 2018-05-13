import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    switch(action.type){
        case FETCH_WEATHER: 
            return [ action.payload.data, ...state ] // as we will be returning multiple data
    }
    return state;
}