const UserCard = ({card}) => {
    return <>
        <div className={`border-2 border-blue-100 rounded ${card.active ? 'border-dashed': 'bg-white'} ` } style={{
            width: card.active ? '24px' :'34px',
            height:card.active ? '14px' :'20px',
        }}></div>
    </>
}

export default UserCard;