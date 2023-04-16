import UsersSpectator from "../UserComponents/UsersSpectator";
import Users from "../UserComponents/Users";
import MemeCardsOnHand from "../CardComponents/MemeCardsOnHand";

const Footer = ({spectator, users}) => {

    const SpectatorFooter = <>
        <footer className={"flex justify-center absolute bottom-0 w-full p-10"}>
           <UsersSpectator list={users}/>
        </footer>
    </>

    const Footer = <>
        <footer className={"grid grid-cols-footer absolute bottom-0 w-full p-10"}>
            <Users list={users}/>
            <MemeCardsOnHand />
        </footer>
    </>

    return spectator ? SpectatorFooter : Footer
}

export default Footer;