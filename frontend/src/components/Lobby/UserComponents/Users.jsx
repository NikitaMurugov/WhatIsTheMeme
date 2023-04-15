import User from "./User";
import PlusUser from "./PlusUser";

const Users = ({list}) => {
    return <>
        <div className="w-fit">
            <div
                className={'grid w-10/12 gap-10'}
                style={{
                    gridTemplateColumns: `repeat(${list.length}, 140px)`
                }}
            >
                {list.map((user, i) => <User user={user} key={i + user.name} />)}
                {/*<PlusUser />*/}
            </div>

        </div>
    </>
}

export default Users;