import CustomLink from "../components/CustomLink";
import {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const lobbyCodeMask = [ /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
const App = () => {

    const [lobbyCode, setLobbyCode] = useState();
    const openModal = () => {
        console.log('modal Opened!')
    }

    return <>
        <div className="flex justify-center items-center h-full">
            <div className="flex gap-4 flex-col w-64">
                <Button>
                    <CustomLink onClick={openModal}> Создать лобби </CustomLink>
                </Button>
                <hr className="mt-3 mb-3 border-blue-400"/>
                <div className="">

                    <Button>
                        <Input
                            mask={lobbyCodeMask}
                            placeholder={'____-____'}
                            className={'h-16 p-4 w-full rounded mb-4 text-3xl text-center'}
                            type="text"
                            value={lobbyCode}
                            onChange={ev => setLobbyCode(ev.target.value)}
                        />
                        <CustomLink to={`/lobby/${lobbyCode}`}> Подключиться к лобби </CustomLink>
                    </Button>
                </div>
            </div>
        </div>
    </>;
}

export default App;
