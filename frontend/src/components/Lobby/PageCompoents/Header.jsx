import {BiCopy} from "react-icons/bi";
import {FaRegEye} from "react-icons/fa";
import {CgGames} from "react-icons/cg";
import { ToastContainer, toast, Zoom } from 'react-toastify';
const Header = ({lobbyCode,setSpectator,spectator}) => {

    const copyLobbyNumber = () => {
        navigator.clipboard.writeText(lobbyCode)
        toast('Код лобби скопирован!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
            theme: "dark",
        });
    }

    return <>
        <header className="flex justify-between w-full  p-10">
            <div className={"flex flex-col items-start gap-4"}>
                    <span className="text-white flex items-center">
                        lobby-code:
                        <b
                            className={"ml-2 underline cursor-pointer mr-2 flex items-center"}
                            onClick={copyLobbyNumber}
                        >
                            {lobbyCode}
                            <BiCopy color={'white'}/>
                        </b>
                    </span>
                <div>
                    <label htmlFor="spectator" className={'text-white mr-6'}>Зритель:</label>
                    <input type={"checkbox"}
                           className="text-white "
                           id={'spectator'}
                           key={'spectator'}
                           checked={spectator}
                           onChange={(ev) => {
                               setSpectator(ev.target.checked)
                           }}/>
                </div>
            </div>
            <div className={"text-white header__user-role flex flex-col items-center"}>
                {spectator ? <>
                    <FaRegEye color={"white"} width={'40px'} height={"40px"}/>
                    <span> Вы зритель </span>
                </>:<>
                    <CgGames color={"white"} width={'40px'} height={"40px"}/>
                    <span> Вы игрок </span>
                </>}
            </div>
            <div className={"flex flex-col items-end gap-4"}>
                <div className="text-white ">хозяин лобби: <b>Вася пук</b></div>
                <div className="text-white flex items-center">
                    <div className={"w-8 text-center bg-gray-600 mr-2 rounded"}> 1 </div>
                    /
                    <div className={"w-8 text-center bg-blue-600 ml-2 rounded"} > 4 </div>
                </div>
            </div>
        </header>
        <ToastContainer />
    </>
}

export default Header;