import {useState} from "react";
import {Link} from "react-router-dom";

function HomeScreen() {
    const [room, setRoom] = useState("")
    const [username, setUsername] = useState("")

    return (
        <form className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input type="text"
                   title="username"
                   value={username}
                   onChange={e => setUsername(e.target.value)}
                   className={"border border-blue-400 outline-blue-500 mb-1 p-1 rounded"}
            />

            <label htmlFor="room">Room</label>
            <input type="text"
                   title="room"
                   onChange={e => setRoom(e.target.value)}
                   className={"border border-blue-400 outline-blue-500 mb-2 p-1 rounded"}
            />

            <Link to={`/call/${username}/${room}`} className={"align-middle justify-center w-full flex"}>
                <input type="button" name="submit" value="Joins" className={"w-1/3 px-1 py-2 bg-blue-500 rounded text-white"}/>
            </Link>
        </form>
    )
}

export default HomeScreen
