export default function Stake() {
    return (
        <div className="stake-panel">
            <div className="pool-state">
                <p className="pool-item">
                    <span className="property">Contract</span>
                    <span className="pool-amount">27456.124 ONE</span>
                </p>
                <p className="pool-item">
                    <span className="property">Wallet</span>
                    <span className="pool-amount">15.124 ONE</span>
                </p>
                <p className="pool-item">
                    <span className="property">Your Power</span>
                    <span className="pool-amount">15 POWER</span>
                </p>
            </div>
            <div className="stake-active">
                <input
                    className="form-control stake-input text-white py-2 mt-4"
                />
                <button className="btn btn-primary bg-main w-100 mt-4">Fight</button>
            </div>
            <hr/>
            <div className="reward-amount">
                <span className="property">Your Rewards</span>
                <span className="reward-amount">0.0000 ONE</span>
            </div>
            <div className="button-group">
                <button className="btn btn-primary bg-main mt-3">Power Up</button>
                <button className="btn btn-primary bg-main mt-3">Super Attack</button>
            </div>
        </div>
    )
}