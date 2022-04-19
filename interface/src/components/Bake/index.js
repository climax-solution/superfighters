import Referral from "./referral";
import SocialLink from "./social";
import Bake from "./bake";
import Static from "./static";
import "./style.css";

export default function Staking() {
    return (
        <div className="staking-container">
            <Bake/>
            <Static/>
            <Referral/>
            <SocialLink/>
        </div>
    )
}