import '../../../assets/css/user.css';
import UserCards from './UserCards';
import { GiRoundStar } from 'react-icons/gi';

const UserSpectator = ({ user }) => {
    return (
        <>
            <div className=" hover:scale-110 transition">
                <div className="userCards flex gap-2 items-center mb-6 ">
                    <UserCards cards={user.cards} />
                </div>
                <div className={'userContainer_spectator items-center '}>
                    <div className={'user_spectator'}>
                        <div className={'user__head_spectator'}></div>
                        <div
                            className={'user__body_spectator'}
                            style={{
                                background: user.skinColor
                            }}></div>
                    </div>

                    {/*<hr className={`w-10/12 h-0.5 border-none bg-white opacity-10 rounded`}/>*/}
                    <div className={'username_spectator'}>{user.name}</div>
                    {user.maintainer && <GiRoundStar color={'#fca32f'} width={'100%'} height={'100%'} />}
                </div>
            </div>
        </>
    );
};

export default UserSpectator;
