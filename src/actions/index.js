import {ADD_TODO_ITEM,DEL_TODO_ITEM,ADD,DEL} from './ActionType';

export const add_todo = (value) => ({type:ADD_TODO_ITEM,value:value});
export const del_todo = (index) => ({type:DEL_TODO_ITEM,index:index});

export const add_count = (value) => ({type:ADD});
export const del_count = (index) => ({type:DEL});