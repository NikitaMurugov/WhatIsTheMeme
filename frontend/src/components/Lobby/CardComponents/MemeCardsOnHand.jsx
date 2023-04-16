import fakeMemeCards from '../../../helpers/fakeMemeCards'
import MemeCard from "./MemeCard";

const MemeCardsOnHand = ({cards}) => {
    const fakeCards = fakeMemeCards;
    return <>
        <div
            className={'grid gap-4 justify-center items-center'}
            style={{
                gridTemplateColumns: `repeat(${fakeCards.length <= 4 ? fakeCards.length : 4}, auto)`,
            }}
        >
            {fakeCards.map((fakeCard) => {
                return <MemeCard card={fakeCard} />
            })}
        </div>
    </>
}
export default MemeCardsOnHand