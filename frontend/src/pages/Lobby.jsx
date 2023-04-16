import {useParams} from "react-router-dom";
import {useState} from "react";
import { BiCopy } from "react-icons/bi"

import 'react-toastify/dist/ReactToastify.css';

import Footer from "../components/Lobby/PageCompoents/Footer";

import fakeUsers from "../helpers/fakeUserList";
import Header from "../components/Lobby/PageCompoents/Header";

function Lobby() {
    const [spectator, setSpectator] = useState(true);
    const params = useParams();
    const lobbyCode = params.code;
    const users = fakeUsers;

    return <>
        <div className="App font-basic">
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