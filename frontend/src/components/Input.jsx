import MaskedInput from 'react-text-mask';

const Input = ({ mask, ...props }) => {
    return (
        <>
            <MaskedInput mask={mask} {...props} />
        </>
    );
};
export default Input;
