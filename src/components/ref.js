
import React  from "react"
import { useState ,useRef,useEffect } from "react"

 function Ref(){

    const [firstname,setf]=useState('');
    const [lastname,setl] = useState('');
    const firstRef = useRef();
    const lastRef = useRef();

    useEffect(()=>{
        firstRef.current.focus();
    },[])
    function onpressEnter(e){

        if(e.key==='Enter'){
            lastRef.current.focus();
        }
    }
    return (
       <div>
           Hi from function
           <input ref={firstRef} onKeyDown={onpressEnter}  type="text" value={firstname} onChange={(e)=>setf(e.target.value)} placeholder="First Name" />
           <input ref={lastRef} type="text" value={lastname} onChange={(e)=>setl(e.target.value)} placeholder="last name"/>
           <button type="button" className="btn btn-primary" onClick={()=>console.log(firstname,lastname)}>save</button>
       </div>
    )
}

export default Ref;