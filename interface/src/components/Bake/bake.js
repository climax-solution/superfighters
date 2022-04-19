import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import getWeb3 from "../../utils/getWeb3";
import { baked_addr } from "../../config/address.json";
import notify from "../../utils/notify";

export default function Bake() {

    const walletAddress = useSelector(({ wallet }) => wallet.walletAddress);

    const [web3, setWeb3] = useState();
    const [contract, setContract] = useState();
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
        setContract(superFighter);
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
        try {
            const ref = getRef();
            const bnb = web3.utils.toWei(fightInput.toString(), 'ether');
            await contract.methods.buyEggs(ref).send({
                from : walletAddress,
                value: bnb
            });
            await getBalance();
        } catch(err) {
            if (err?.code != 4001) {
                notify.error('Failed');
            }
        }
    }

    const powerUp = async() => {
        try {
            const ref = getRef();
            await contract.methods.hatchEggs(ref).send({
                from : walletAddress,
            });
        } catch(err) {
            if (err?.code != 4001) {
                notify.error('Failed');
            }
        }
    }

    const superAttack = async() => {
        try {
            await contract.methods.sellEggs().send({
                from : walletAddress,
            });
            await getBalance();
        } catch(err) {
            if (err?.code != 4001) {
                notify.error('Failed');
            }
        }
    }

    return (
        <div className="bake-panel">
            <div className="pool-state">
                <p className="pool-item">
                    <span className="property">Contract</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{Number(web3.utils.fromWei(contractBalance, 'ether')).toFixed(3)} ONE</>}</span>
                </p>
                <p className="pool-item">
                    <span className="property">Wallet</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{Number(web3.utils.fromWei(myBalance.bnb, 'ether')).toFixed(3)} ONE</>}</span>
                </p>
                <p className="pool-item">
                    <span className="property">Your Power</span>
                    <span className="pool-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{myBalance.beans} POWER</>}</span>
                </p>
            </div>
            <div className="bake-active">
                <div className="bake-input-ref">
                    <input
                        type="number"
                        className="form-control bake-input text-white py-2 mt-4"
                        value={fightInput}
                        onChange={(e) => isLoading ? null : setFightAmount(e.target.value)}
                        onWheel={() => document.activeElement.blur()}
                        min="0"
                    />
                    <span className="bake-input-cur">ONE</span>
                </div>
                <button
                    className={`btn btn-primary bg-main w-100 mt-4 ${fightInput > 0 ? '' : 'disabled'}`}
                    onClick={() => fightInput > 0 ? fight() : null}
                >Fight</button>
            </div>
            <hr/>
            <div className="reward-amount">
                <span className="property">Your Rewards</span>
                <span className="reward-amount">{ isLoading ? <Skeleton width={"80px"} baseColor={"#222"} highlightColor={'#555'}/> : <>{Number(web3.utils.fromWei(myBalance.rewards,'ether')).toFixed(3)} ONE </>}</span>
            </div>
            <div className="button-group">
                <button
                    className="btn btn-primary bg-main mt-3"
                    onClick={() => walletAddress ? powerUp() : notify.warning('Not connected metamask')}
                >Power Up</button>
                <button
                    className="btn btn-primary bg-main mt-3"
                    onClick={() => walletAddress ? superAttack() : notify.warning('Not connected metamask')}
                >Super Attack</button>
            </div>
        </div>
    )
}