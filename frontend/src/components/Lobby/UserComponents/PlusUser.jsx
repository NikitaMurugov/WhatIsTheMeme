import '../../../assets/css/user.css'
import { RxPlusCircled } from "react-icons/rx";
const PlusUser = ({onClick}) => {
    return <>
        <div className={'userContainer items-center relative hover:scale-110 transition ml-20'}>
            <div className="plus absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <RxPlusCircled color={'white'} width={'100%'} height={'100%'} />
            </div>
            <div className={'user opacity-20'}>
                <div className={'user__head'}></div>
                <div className={'user__body'}></div>
            </div>
            <div className="username text-white">
                позвать друга
            </div>
        </div>
    </>
}

export default PlusUser