import {useParams} from "react-router-dom";
import Users from "../components/Lobby/UserComponents/Users";

function Lobby() {
    const params = useParams();
    const lobbyCode = params.code
    const users = [
        {
            name: 'Антоним',
            skinColor: '#f7a352',
            cards: [
                {
                    active: true,
                    img: '',
                },
                {
                    active: true,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
            ]
        },
        {
            name: 'Енакентий Третий',
            skinColor: '#52a6f7',
            cards: [
                {
                    active: true,
                    img: '',
                },
                {
                    active: true,
                    img: '',
                },
                {
                    active: true,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
            ]
        },
        {
            name: 'Абдулахмед Самфаровдух',
            skinColor: '#96a47c',
            cards: [
                {
                    active: true,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
            ]
        },
        {
            name: 'Маргарита ИЧОковна',
            skinColor: '#8a7ca4',
            cards: [
                {
                    active: true,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
                {
                    active: false,
                    img: '',
                },
            ]
        },
    ]
    return <>
        <div className="App font-basic">
            <header className="flex justify-between w-full p-4">
                <div>
                    <span className="text-white ">lobby-code: {lobbyCode}</span>
                </div>
                <span className="text-white ">хозяин лобби: <b>Вася пук</b></span>
            </header>
            <main></main>
            <footer className={"flex justify-center absolute bottom-10 w-full"}>
                <Users list={users} />
            </footer>
        </div>
    </>;
}
export default Lobby