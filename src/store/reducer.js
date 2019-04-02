import {combineReducers} from 'redux'
import {ADD_TODO_ITEM,DEL_TODO_ITEM} from '../actions/ActionType';

let initValue=[1,2,3];

let counter = (state=0,action)=>{
    switch(action.type){
        case 'ADD':
            return state + 1;
        case 'DEL':
            return state - 1;
        default:
            return state;
    }
}
let todo= (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            // let newState = JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);
            // return newState;
            return [...state,action.value];
        case DEL_TODO_ITEM:
            // let newState1=JSON.parse(JSON.stringify(state));
            // newState1.list.splice(action.index,1);
            // return newState1;
            return state.filter((item,index)=>{
                return index !== action.index;
            })
        default :
            return state;
    }
}
export default combineReducers({
    counter,todo
});
//导出的结果是reducer，reducer是一个纯函数
