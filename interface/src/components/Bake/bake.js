import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import getWeb3 from "../../utils/getWeb3";
import { baked_addr } from "../../config/address.json";

export default function Bake() {

    const walletAddress = useSelector(({ wallet }) => wallet.walletAddress);

    const [web3, setWeb3] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [contractBalance, setContractBalance] = useState('0');
    const [fightInput, setFightAmount] = useState('');
    const [myBalance, setMyBalance] = useState({
        bnb: '0',
        beans: '0',
        rewards: '0'
    });
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getBalance();
    }, [walletAddress]);

    const getRef = () => {
        return searchParams?.get('ref') ? searchParams.get('ref') : "0x0000000000000000000000000000000000000000";
    };

    const getBalance = async() => {
        setLoading(true);
        const refs = getRef();
        const { superFighter, _web3 } = await getWeb3();
        setWeb3(_web3);
        const _contractBalance = await _web3.eth.getBalance(baked_addr);
        setContractBalance(_contractBalance);
        if (walletAddress) {
            const _bnbBalance = await _web3.eth.getBalance(walletAddress);
            const beans = await superFighter.methods.getMyMiners(walletAddress).call().catch(err => {
                return '0';
            });
            const rewards = await superFighter.methods.beanRewards(walletAddress).call().catch(err => {
                return '0';
            });
            setMyBalance({
                bnb: `${_bnbBalance}`,
                beans : `${beans}`,
                rewards : `${rewards}`
            });
        }

        setLoading(false);
    };

    const fight = async() => {
        
    }

    return (
        <div className="bake-panel">
            <div className="pool-state">
                <p className="pool-item">
                    <span className="property">Contract</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{web3.utils.fromWei(contractBalance, 'ether')} ONE</>}</span>
                </p>
                <p className="pool-item">
                    <span className="property">Wallet</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{web3.utils.fromWei(myBalance.bnb, 'ether')} ONE</>}</span>
                </p>
                <p className="pool-item">
                    <span className="property">Your Power</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{web3.utils.fromWei(myBalance.beans, 'ether')} POWER</>}</span>
                </p>
            </div>
            <div className="bake-active">
                <div className="bake-input-ref">
                    <input
                        type="number"
                        className="form-control bake-input text-white py-2 mt-4"
                        value={fightInput}
                        onChange={(e) => setFightAmount(e.target.value)}
                        onWheel={() => document.activeElement.blur()}
                    />
                    <span className="bake-input-cur">ONE</span>
                </div>
                <button className="btn btn-primary bg-main w-100 mt-4">Fight</button>
            </div>
            <hr/>
            <div className="reward-amount">
                <span className="property">Your Rewards</span>
                <span className="reward-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{web3.utils.fromWei(myBalance.rewards,'ether')} ONE </>}</span>
            </div>
            <div className="button-group">
                <button className="btn btn-primary bg-main mt-3">Power Up</button>
                <button className="btn btn-primary bg-main mt-3">Super Attack</button>
            </div>
        </div>
    )
}