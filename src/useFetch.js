import { useState, useEffect } from "react"; 
// import React from "react";
//this is our custom hoook

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError,setIsError] = useState(null);

   

    useEffect(() => {
        // this set timeout is done deliberately to give feel of server fetching
        const abortCont = new AbortController();       
        setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error("❌❌Could not fetch the data for the resource!!❌❌");
                    }
                    // console.log(res);
                    return res.json();
                })
                .then(data => {
                    setData(data);
                    setIsPending(false);
                    setIsError(null);
                    // console.log(data);
                })
                .catch((err)=>{
                    if (err.name ==="AbortError"){
                        console.log('fetch aborted')
                    }else{
                    setIsPending(false);
                    setIsError(err.message)
                    }
                })
        }, 1000);
        return () => abortCont.abort();
    }, [url]);
    return {data,isPending,isError};
}


export default useFetch;