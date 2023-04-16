import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Granim from "granim";

import 'react-toastify/dist/ReactToastify.css';

import Footer from "../components/Lobby/PageCompoents/Footer";

import fakeUsers from "../helpers/fakeUserList";
import Header from "../components/Lobby/PageCompoents/Header";

function Lobby() {
    const [spectator, setSpectator] = useState(true);
    const params = useParams();
    const lobbyCode = params.code;
    const users = fakeUsers;

    useEffect(() => {

        new Granim({
            element: "#bg",
            direction: "left-right",
            opacity: [1, 1],
            states: {
                "default-state": {
                    gradients: [
                        ["#232323", "#3d3d3d"],
                        ["#3d3d3d", "#3b4364"],
                        ["#363636", "#2f2f2f"],
                        ["#2f2f2f", "#232323"],
                        ["#2f324d", "#2f2f2f"],
                    ],
                    transitionSpeed: 2000
                }
            }
        });
    }, []);
    return <>
        <div className="App font-basic">

            <canvas id={"bg"}></canvas>
            <Header
                lobbyCode={lobbyCode}
                spectator={spectator}
                setSpectator={setSpectator}
            />
            <main></main>
            <Footer
                spectator={spectator}
                users={users}
            />
        </div>
    </>;
}

export default Lobby