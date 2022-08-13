import React from "react";
import useSWR from "swr";
import fetcher,{BASE_URL } from "../util/fetcher";

const UserData = ({index})=>{
    const {data,error} = useSWR(BASE_URL+"/api/v1/users",fetcher);
    if(!data){
        return (
            <>
                content loading...
            </>
        )
    }
    return (
        <div style={{borderRadius:5,border:'1px solid black'}}>
            <div>
                id : {data[index].id}
            </div>
            <div>
                name : {data[index].name}
            </div>
            <div>
                age: {data[index].age}
            </div>

        </div>
    );
}

export default UserData;