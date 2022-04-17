import Referral from "./referral";
import SocialLink from "./social";
import Stake from "./stake";
import Static from "./static";
import "./style.css";

export default function Staking() {
    return (
        <div className="staking-container">
            <Stake/>
            <Static/>
            <Referral/>
            <SocialLink/>
        </div>
    )
}