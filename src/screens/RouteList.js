import {Routes, Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";

function RouteList(){
    return(
        <div className={"m-0 p-8"}>
        <Routes>
            <Route path={"/"} element={<HomeScreen />}/>
        </Routes>
        </div>
    )
}

export default RouteList
