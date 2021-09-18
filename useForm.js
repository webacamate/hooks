import {useState} from 'react';
const useForm= (initialState={})=>{
    const [values, setvalues] = useState(initialState);
    const setContent=({value, name})=>{
        setvalues({
            ...values,[name]:value
        })
    }
    return [values,setContent];
};
export default useForm;