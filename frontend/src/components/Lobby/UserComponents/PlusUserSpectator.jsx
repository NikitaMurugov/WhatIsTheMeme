import '../../../assets/css/user.css';
import { RxPlusCircled } from 'react-icons/rx';
const PlusUser = ({ onClick }) => {
    return (
        <>
            <div
                className={
                    'userContainer items-center relative hover:scale-110 transition h-full justify-center cursor-pointer'
                }
                onClick={onClick}>
                <div className="plus_spectator">
                    <RxPlusCircled color={'white'} width={'100%'} height={'100%'} />
                </div>
                <div className="username ">позвать друга</div>
            </div>
        </>
    );
};

export default PlusUser;
