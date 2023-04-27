import '../../../assets/css/user.css';
import { GiRoundStar } from 'react-icons/gi';

const User = ({ user }) => {
    return (
        <>
            <div className="w-fit hover:scale-110 transition cursor-default">
                <div className={'userContainer items-center '}>
                    <div className={'user'}>
                        <div className={'user__head'}></div>
                        <div
                            className={'user__body'}
                            style={{
                                background: user.skinColor
                            }}></div>
                    </div>

                    {/*<hr className={`w-10/12 h-0.5 border-none bg-white opacity-10 rounded`}/>*/}
                    {user.maintainer && <GiRoundStar color={'#fca32f'} width={'100%'} height={'100%'} />}
                    <div className={'username '}>{user.name.split(' ')[0]}</div>
                </div>
            </div>
        </>
    );
};

export default User;
