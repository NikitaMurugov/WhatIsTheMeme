import UserSpectator from "./UserSpectator";
import PlusUser from "./PlusUser";
import PlusUserSpecator from "./PlusUserSpecator";

const UsersSpectator = ({list, vizitor}) => {
    return <>
        <div className="w-fit">
            <div
                className={'grid w-10/12 gap-10'}
                style={{
                    gridTemplateColumns: `repeat(${list.length + 1}, 140px)`
                }}
            >
                {list.map((user, i) => <UserSpectator user={user} key={i + user.name} />)}
                <PlusUserSpecator />
            </div>

        </div>
    </>
}

export default UsersSpectator;