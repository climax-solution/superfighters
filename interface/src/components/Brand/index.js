import Punch from "../../asset/img/boxing-punch.png";
import Foot from "../../asset/img/boxing-foot.png";
import Fire from "../../asset/img/boxing-fire.png";

import "./style.css";

export default function Brand() {
    return (
        <div className="brand-container">
            <img src={Punch} className="brand-boxing punch" alt=""/>
            <img src={Fire} className="fire" alt=""/>
            <img src={Foot} className="brand-boxing foot" alt=""/>
        </div>
    )
}