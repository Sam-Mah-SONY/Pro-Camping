import { useEffect } from "react"

const setTitle = (title) =>{
    useEffect(()=>{
        document.title = title
    }, [])
}
const activePage = (name) =>{

    useEffect(()=>{
        console.log(name);
    }, [])
}


export {setTitle, activePage}