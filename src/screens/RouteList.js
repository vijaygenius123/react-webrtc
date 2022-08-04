import {Routes, Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import CallScreen from "./CallScreen"
function RouteList(){
    return(
        <div className={"m-0 p-8"}>
        <Routes>
            <Route path={"/"} element={<HomeScreen />}/>
            <Route path="/call/:username/:room" element={<CallScreen />} />
        </Routes>
        </div>
    )
}

export default RouteList
