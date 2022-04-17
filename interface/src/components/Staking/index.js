import Referral from "./referral";
import Stake from "./stake";
import Static from "./static";
import "./style.css";

export default function Staking() {
    return (
        <div className="staking-container">
            <Stake/>
            <Static/>
            <Referral/>
        </div>
    )
}