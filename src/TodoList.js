import React, { Component } from 'react';
import {add_todo,del_todo} from './actions/index';

import {connect} from 'react-redux';

let TodoList=({dispatch,list})=>{
    let handleAdd=(e)=>{
        if(e.keyCode===13){
            dispatch(add_todo(e.target.value))
        }
    }
    let handleDel=(index)=>{
        dispatch(del_todo(index))
    }
    // let {list} = this.props;
    return (
        <div>
            <input type="text" onKeyDown={handleAdd}/><br/>
            <ul>
                {
                    list.map((item,index)=>(
                        
                        <li onClick={()=>handleDel(index)} key={index}>{item}</li>
                    ))//小括号直接返回
                }
            </ul>
        </div>
    )
}
let mapStateToProps=(state)=>{
    console.log(state.todo);
    return {
        list:state.todo
    }
}
export default connect(mapStateToProps)(TodoList);