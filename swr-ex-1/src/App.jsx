import React, { useEffect } from "react";
import useSWR from "swr";
import fetcher, { BASE_URL } from "./util/fetcher";
import UserData from "./components/UserData";
import UserInput from "./components/UserInput";

const App = () => {
    const { data, error } = useSWR(BASE_URL + "/api/v1/users", fetcher);
    return (
        <>
            {data && <>
                <UserInput/>
                {data.map((_, index) => {
                    return <UserData key={index} index={index} />
                })}
            </>}
        </>
    )
}

export default App;
