import React,{useState,useCallback} from "react";
import {BASE_URL} from "../util/fetcher";
import axios from "axios";

const UserInput = ()=>{
    const [name,setName] = useState('');
    const [age,setAge] = useState('');

    const onChangeName = useCallback((e)=>{
        setName(e.target.value);
    },[name]);
    const onChangeAge = useCallback((e)=>{
        setAge(e.target.value);
    },[age]);

    const onSubmit = useCallback(async (e)=>{
        try{
        e.preventDefault();
        const result = await axios.post(BASE_URL+'/api/v1/users',{
            name,age
        })
        
        }catch(e){
            console.log(e);
        }


    },[name,age])
    return (
        <>
            <from onSubmit={onSubmit}>
                <label htmlFor='name' >
                    이름 : 
                </label>
                    <input id='name' value={name} onChange={onChangeName}/>
                <label htmlFor='age'>
                    나이 : 
                </label>
                <input id='age' value={age} onChange={onChangeAge} />
                <button htmlType={'submit'}>
                    제출
                </button>
            </from>
        </>
    )
}

export default UserInput;