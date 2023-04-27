import fakeMemeCards from '../../../helpers/fakeMemeCards';
import MemeCard from './MemeCard';

const MemeCardsOnHand = () => {
    const fakeCards = fakeMemeCards;
    return (
        <>
            <div
                className={'grid gap-4 justify-center items-center'}
                style={{
                    gridTemplateColumns: `repeat(${fakeCards.length <= 4 ? fakeCards.length : 4}, auto)`
                }}>
                {fakeCards.map((fakeCard, key) => {
                    return <MemeCard card={fakeCard} key={key} />;
                })}
            </div>
        </>
    );
};
export default MemeCardsOnHand;
