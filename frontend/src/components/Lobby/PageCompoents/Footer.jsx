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
            <div className={'flex flex-col justify-center'}>
                <div className={'flex justify-center mb-10'}>
                    Самое время сделать свой выбор!
                </div>
                <MemeCardsOnHand />
            </div>
        </footer>
    </>

    return spectator ? SpectatorFooter : Footer
}

export default Footer;