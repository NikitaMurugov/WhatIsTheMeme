import '../../../assets/css/user.css'
import UserCards from "./UserCards";

const User = ({user}) => {
    return <>
        <div>
            <div className="userCards flex gap-2 items-center mb-2 ">
                <UserCards cards={user.cards} />
            </div>
            <div className={'userContainer items-center  hover:scale-110 transition'}>
                <div className={'user'}>
                    <div className={'user__head'}></div>
                    <div className={'user__body'} style={{
                        background: user.skinColor
                    }}></div>
                </div>
                {/*<hr className={`w-10/12 h-0.5 border-none bg-white opacity-10 rounded`}/>*/}
                <div className={'username text-white'}>
                    {user.name}
                </div>
            </div>
        </div>
    </>
}

export default User