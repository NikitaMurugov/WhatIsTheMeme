
import MaskedInput from 'react-text-mask'
const Input = ({mask, ...proops}) => {
    return <>
        <MaskedInput mask={mask} {...proops}/>
    </>;
}

export default Input;