export default function Static() {
    return (
        <div className="static-panel mt-4">
            <h3 className="text-white">Statistics</h3>
            <hr/>
            <div className="pool-state">
                <p className="pool-item">
                    <span className="property">Daily Reward</span>
                    <span className="pool-amount">8%</span>
                </p>
                <p className="pool-item">
                    <span className="property">APR</span>
                    <span className="pool-amount">2920%</span>
                </p>
                <p className="pool-item">
                    <span className="property">Deposit Fee</span>
                    <span className="pool-amount">8%</span>
                </p>
            </div>
        </div>
    )
}