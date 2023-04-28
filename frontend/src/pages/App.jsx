import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Granim from 'granim';

import 'react-toastify/dist/ReactToastify.css';

import Footer from '../components/Lobby/PageCompoents/Footer';

import fakeUsers from '../helpers/fakeUserList';
import Header from '../components/Lobby/PageCompoents/Header';
import { enterLobby } from '../hooks/socketHook';

function App() {
    const [spectator, setSpectator] = useState(true);
    const params = useParams();
    const lobbyCode = params.code;
    const users = fakeUsers;
    const joinSocket = (ev) => {
        console.log(ev, 'you are well come');
    };
    const newUserJoin = (ev) => {
        console.log(ev, 'NEW USER JOIN');
    };
    const userLeaveJoin = (ev) => {
        console.log(ev, 'USER LEAVE THE CHANNEL');
    };

    enterLobby(lobbyCode, joinSocket, newUserJoin, userLeaveJoin);

    useEffect(() => {
        new Granim({
            element: '#bg',
            direction: 'left-right',
            opacity: [1, 1],
            states: {
                'default-state': {
                    gradients: [
                        ['#232323', '#3d3d3d'],
                        ['#3d3d3d', '#3b4364'],
                        ['#363636', '#2f2f2f'],
                        ['#2f2f2f', '#232323'],
                        ['#2f324d', '#2f2f2f']
                    ],
                    transitionSpeed: 2000
                }
            }
        });
    }, []);

    return (
        <>
            <div className="App font-basic text-white">
                <canvas id={'bg'}></canvas>
                <Header lobbyCode={lobbyCode} spectator={spectator} setSpectator={setSpectator} />
                <main className={'grid grid-cols-footer'}>
                    <div></div>
                    <div className={'flex flex-col items-center'}>
                        <span className={'text-4xl flex justify-center'}>Какая-то фраза</span>
                        <hr className={'w-1/2 m-10 h-1 border-none bg-gray-500 rounded'} />
                    </div>
                    <div></div>
                </main>
                <Footer spectator={spectator} users={users} />
            </div>
        </>
    );
}

export default App;
