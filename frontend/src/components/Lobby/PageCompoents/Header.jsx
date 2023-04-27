import { BiCopy } from 'react-icons/bi';
import { FaRegEye } from 'react-icons/fa';
import { CgGames } from 'react-icons/cg';
import { ToastContainer, toast, Zoom } from 'react-toastify';

const Header = ({ lobbyCode, setSpectator, spectator }) => {
    const copyLobbyNumber = () => {
        navigator.clipboard.writeText(lobbyCode);
        toast('Код лобби скопирован!', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            transition: Zoom,
            theme: 'dark'
        });
    };

    return (
        <>
            <header className="flex justify-between w-full  p-10 ">
                <div className={'flex flex-col items-start gap-4 '}>
                    <span className="flex items-center">
                        lobby-code:
                        <b className={'ml-2 cursor-pointer mr-2 flex items-center'} onClick={copyLobbyNumber}>
                            {lobbyCode}
                            <BiCopy color={'white'} className={'ml-1'} />
                        </b>
                    </span>
                    <div>
                        <label htmlFor="spectator" className={'mr-6'}>
                            Зритель:
                        </label>
                        <input
                            type={'checkbox'}
                            className=""
                            id={'spectator'}
                            key={'spectator'}
                            checked={spectator}
                            onChange={(ev) => {
                                setSpectator(ev.target.checked);
                            }}
                        />
                    </div>
                </div>
                <div className={' header__user-role flex flex-col items-center'}>
                    {spectator ? (
                        <>
                            <FaRegEye color={'white'} width={'40px'} height={'40px'} />
                            <span> Вы зритель </span>
                        </>
                    ) : (
                        <>
                            <CgGames color={'white'} width={'40px'} height={'40px'} />
                            <span> Вы игрок </span>
                        </>
                    )}
                </div>
                <div className={'flex flex-col items-end gap-4'}>
                    <div className="">
                        хозяин лобби: <b>Вася пук</b>
                    </div>
                    <div className="flex items-center">
                        <div className={'w-8 text-center bg-gray-600 mr-2 rounded'}> 1</div>/
                        <div className={'w-8 text-center bg-blue-600 ml-2 rounded'}> 4 </div>
                    </div>
                </div>
            </header>
            <ToastContainer />
        </>
    );
};

export default Header;
