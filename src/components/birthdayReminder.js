import React, {useEffect, useReducer} from "react";
import Panel from "./panel";
import List from "./list";


const initialState = {
    totalList: [],
    filteredList: [],
    name: "",
    date: "",
    filterType: ""
}

const BirthdayReminder = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "changeName" :
                return {...state, name: action.payload}
            case "changeDate" :
                return {...state, date: action.payload}
            case "filterList" :
                return {...state, filteredList: action.payload}
            case "addToList" :
                return {...state, totalList: [...state.totalList, {name: state.name, date: state.date}]}
            case "changeFilter" :
                 return {
                ...state,filterType: action.payload
            }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        if (state.filterType) {
            const today = new Date().setHours(0, 0, 0, 0)
            const tomorrow = today + (24 * 60 * 60 * 1000)
            const filterDate = state.filterType==="today" ? today : tomorrow
            const filteredArr=state.totalList.filter(item=>new Date(item.date).setHours(0,0,0,0)===filterDate)
            dispatch({
                type: "filterList",
                payload: filteredArr
            })
        } else {
            dispatch({
                type: "filterList",
                payload: state.totalList
            })
        }
    }, [state.filterType, state.totalList])

    return (
        <div>
            <List list={state.filteredList} dispatch={dispatch}/>
            <Panel state={state} dispatch={dispatch}/>
        </div>
    )
}

export default BirthdayReminder