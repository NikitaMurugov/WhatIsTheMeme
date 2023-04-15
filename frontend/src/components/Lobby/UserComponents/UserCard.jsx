const UserCard = ({card}) => {
    return <>
        <div className={`rounded ${card.active ? 'border-dashed border-2 border-white ': 'bg-white'} ` } style={{
            width: card.active ? '24px' :'34px',
            height:card.active ? '14px' :'20px',
        }}></div>
    </>
}

export default UserCard;