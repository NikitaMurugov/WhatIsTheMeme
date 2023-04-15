import UserCard from "./UserCard";

const UserCards = ({cards}) => {
    return <>
        {cards?.map((card, key) => {
            return <UserCard card={card} key={key}/>
        })}
    </>
}

export default UserCards;