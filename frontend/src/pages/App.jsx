import CustomLink from "../components/CustomLink";
import {useState} from "react";
const App = () => {

    const [lobbyCode, setLobbyCode] = useState(111-111);
    const openModal = () => {
        console.log('modal Opened!')
    }

    return <>
        <div className="flex justify-center items-center h-full">
            <div className="flex gap-4 flex-col w-64">
                <CustomLink text={'Создать лобби'} onClick={openModal} />
                <hr className="mt-3 mb-3 border-blue-400"/>
                <div className="">

                    <CustomLink to={`/lobby/${lobbyCode}`} text={'Подключиться к лобби'} >
                        <input className={'h-10 p-4 w-full rounded mb-4'}
                            type="text"
                            value={lobbyCode}
                            onChange={ev => setLobbyCode(ev.target.value)}
                        />
                    </CustomLink>
                </div>
            </div>
        </div>
    </>;
}

export default App;
