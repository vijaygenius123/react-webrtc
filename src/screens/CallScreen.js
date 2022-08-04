import {useParams} from "react-router-dom";
import {useRef, useEffect} from "react";

const CallScreen = () => {
    const params = useParams();
    const localUserName = params.username;
    const roomName = params.room;

    const localVideoRef = useRef(null)
    const remoteVideoRef = useRef(null)

    const startConnection = () => {
        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
                height: 450,
                width: 450
            }
        }).then((stream) => {
            console.log("Local stream found")
            localVideoRef.current.srcObject = stream
        })
    }

    useEffect(() => {
        startConnection()
        return function (){
        }
    })
    return (
        <div className={"flex flex-col"}>
            <label>Username: {localUserName}</label>
            <label>Room ID: {roomName}</label>
        <div className={"flex flex-row"}>
            <video autoPlay muted playsInline ref={localVideoRef} />
            <video autoPlay muted playsInline ref={remoteVideoRef} />
        </div>
        </div>
    )
}

export default CallScreen
