import { SERROR, SLOADING, SSUCCESS } from "./actiontype.js"

export const FetchData = (dispatch)=>(id)=>{
    dispatch({type : SLOADING})
    fetch(`https://mock-server-app2-dll0.onrender.com/product/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SSUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : SERROR})
    })
}