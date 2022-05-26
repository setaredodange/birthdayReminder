import React from "react";

const List = ({list,dispatch}) =>{
    return(
        <div>
            <div>
                <button onClick={()=>dispatch({type:"changeFilter",payload:"today"})}>today</button>
                <button onClick={()=>dispatch({type:"changeFilter",payload:"tomorrow"})}>tomorrow</button>
                <button onClick={()=>dispatch({type:"changeFilter",payload:""})}>All</button>
            </div>
            <div>
                {list.map(item=><div>{item.name}{item.date}</div>)}
            </div>
        </div>
    )
}

export default List