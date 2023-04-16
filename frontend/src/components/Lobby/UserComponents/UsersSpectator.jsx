import UserSpectator from "./UserSpectator";
import PlusUserSpectator from "./PlusUserSpectator";

const UsersSpectator = ({list}) => {
    return <>
        <div className="w-fit">
            <div
                className={'grid w-10/12 gap-10'}
                style={{
                    gridTemplateColumns: `repeat(${list.length + 1}, 140px)`
                }}
            >
                {list.map((user, i) => <UserSpectator user={user} key={i + user.name} />)}
                <PlusUserSpectator />
            </div>

        </div>
    </>
}

export default UsersSpectator;