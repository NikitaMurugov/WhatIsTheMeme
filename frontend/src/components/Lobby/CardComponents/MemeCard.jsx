import { BiImage } from 'react-icons/bi';
const MemeCard = ({ card }) => {
    return (
        <>
            <div
                className={`h-28 w-56 border-4 border-white ${
                    card.active
                        ? 'hover:-mt-10 hover:cursor-pointer'
                        : 'h-24 w-48 hover:scale-[90%] hover:cursor-not-allowed border-dashed border-gray-500'
                } rounded-2xl transition-all flex justify-center items-center`}>
                {!card.img && card.active ? (
                    <BiImage color={'white'} className={'w-10 h-10'} />
                ) : (
                    <BiImage color={'rgb(107 114 128 / 1'} className={'w-7 h-7 '} />
                )}
            </div>
        </>
    );
};

export default MemeCard;
