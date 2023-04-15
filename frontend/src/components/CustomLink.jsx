import {Link} from "react-router-dom";

const CustomLink = ({to, children, ...proops}) => {
    return <>
        <Link to={to} {...proops}>
            { children }
        </Link>
    </>;
}

export default CustomLink;