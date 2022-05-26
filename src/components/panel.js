import React from "react";


const Panel = ({state,dispatch}) =>{
    const changeHandler = (value,actionType)=>{
        console.log(value)
        dispatch({
            type:actionType,
            payload:value
        })
    }
    const clickHandler = ()=>{
        dispatch({
            type:"addToList",
            payload:""
        })
    }
    return(
        <div>
            <input value={state.name} type="text" onChange={e=>changeHandler(e.target.value,"changeName")} />
            <input value={state.date} type="date" onChange={e=>changeHandler(e.target.value,"changeDate")}/>
            <button onClick={clickHandler}>Save</button>
        </div>
    )
}

export default Panel