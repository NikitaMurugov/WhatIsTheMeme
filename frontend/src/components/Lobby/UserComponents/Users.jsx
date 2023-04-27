import PlusUser from './PlusUser';
import User from './User';

const Users = ({ list }) => {
    return (
        <>
            <div className="">
                <div
                    className={'grid w-10/12 gap-6'}
                    style={{
                        gridTemplateRows: `repeat(${list.length + 1}, 30px)`
                    }}>
                    {list.map((user, i) => (
                        <User user={user} key={i + user.name} />
                    ))}
                    <PlusUser />
                </div>
            </div>
        </>
    );
};

export default Users;
