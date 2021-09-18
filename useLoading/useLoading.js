import {useEffect, useRef, useState} from 'react';
const useLoading= (url)=>{
    const isMounted = useRef(true);
    const dataEmpty={
        data:null,
        loading:true,
        error:false
    }
    const [data, setData] = useState(dataEmpty);
    useEffect(() => {
        return () => {
            isMounted.current=false;
        }
    }, [])
    useEffect((dataEmpty) => {
        console.log('url',url);
        setData((data)=>{
            return {...data,
            loading:true,}
        })
        // setTimeout(() => {
            isMounted.current && 
                fetch(url)
                .then((data)=>data.json())    
                .then((data)=>setData({
                    data,
                    loading:false,
                    error:false
                }))
                .catch(()=>setData(dataEmpty))
                console.log('actualizado');
        // }, 2000);
    }, [url])
    
    return {...data};
};
export default useLoading;