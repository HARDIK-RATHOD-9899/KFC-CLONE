import { ERROR, LOADING, SUCCESS } from "./actiontype"


export const FetchData = (dispatch)=>{
    dispatch({type : LOADING})
    fetch(`https://mock-server-app2-dll0.onrender.com/product`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR, payload:err})
    })
}
    