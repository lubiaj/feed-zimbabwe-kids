import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Keyline from "./Keyline";
import Stripe_El from "./Stripe";
const Home = () => {
    // useEffect(() => {
    // });
    // if (accept) {
    //     Swal.fire('You agreed with T&C :)')
    // }
    // console.log(accept)
    return(
        <>
            {/* <Stripe_El/> */}
            <Section1/>
            <Section2/>
            <Keyline/>
            <Section3/>
            <Section6/>
            <Section5/>
            <Section4/>
        </>
    )
}
export default Home