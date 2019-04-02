import React, { Component } from 'react'
import store from './store';
import {add_todo,del_todo, add_count, del_count} from './actions/index';

export default class Counter extends Component {
    constructor(){
        super();
        this.state={
            num:store.getState().counter
        }
        store.subscribe(()=>{
            this.setState({  //重新获取
                num:store.getState().counter
            })
        })
    }
    handleAdd=()=>{
        let action={type:'add',value:5}
        store.dispatch(action);
        //dispatch()将使用当前getState()结果和给定的action同步调用存储的reduce函数
        // console.log(store.getState());
    }
    handleDec=()=>{
        let action={type:'dec'}
        store.dispatch(action);
        // console.log(store.getState());
    }
    handleIncOdd=()=>{
        let action={type:'incOdd'}
        if(store.getState().counter%2===1){
            store.dispatch(action); 
        }
        //else{
        //     console.log('偶数');
        // }
        // store.dispatch(action); 
    }
    handleIncAsy=()=>{
        let action={type:'incAsy'}
        setTimeout(function(){
            store.dispatch(action); 
        },1000) 
    }
}
let Couter=({dispatch,list})=>{
    handleAdd=()=>{
        let action={type:'add',value:5}
        store.dispatch(action);
    }
    let handleAdd=()=>{
        dispatch(add_count())
    }
    let handleDel=()=>{
        dispatch(del_count())
    }
    return (
        <div>
            <p>
                Clicked: <span>{store.getState().counter}</span> times
                <button onClick={this.handleAdd} style={{margin:'10px'}}>+</button>
                <button onClick={this.handleDel}>-</button>
                <button onClick={this.handleIncOdd} style={{margin:'10px'}}>Increment if odd</button>
                {/* 奇数时递增 */}
                <button onClick={this.handleIncAsy}>Increment async</button>
            </p>
        </div>
    )
}
