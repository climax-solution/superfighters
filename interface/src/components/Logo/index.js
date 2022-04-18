import AWN from "awesome-notifications";
import { useEffect, useState } from 'react';
import CircleType from 'circletype';

const notify = new AWN({
    position: "top-right",
    animationDuration: 100,
    durations: {
        global: 2000
    }
});
export default function Logo() {
    
    const [walletAddress, setWalletAddress] = useState('');
    useEffect(() => {
        const subTitle = document.getElementsByClassName('logo-subtitle');
        for (let i = 0; i < subTitle.length; i ++) {
            const subLogoText = new CircleType(subTitle[i]);
            subLogoText.radius(834);
        }

    },[])

    const connectWallet = async() => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWalletAddress(accounts[0]);
            } catch(err) {
                if (err?.code == -32002) {
                    notify.warning("Already requested connect. Please check your walelt");
                }
            }
        } else {
            notify.warning("Please install Metamask");
        }
    }

    return (
        <>
            <div className="logo">
                {/* <h1 id="logo-title">SUPER FIGHTERS</h1> */}
                <div id="logo-title" style={{"position": "relative", "height": "2.39702em"}}>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.278125em) rotate(-29.5787deg)", "transformOrigin": "center 9.3em"}}>S</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.361111em) rotate(-25.0571deg)", "transformOrigin": "center 9.3em"}}>U</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.305469em) rotate(-20.342deg)", "transformOrigin": "center 9.3em"}}>P</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.333507em) rotate(-15.8222deg)", "transformOrigin": "center 9.3em"}}>E</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.361111em) rotate(-10.9087deg)", "transformOrigin": "center 9.3em"}}>R</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.236111em) rotate(-6.68426deg)", "transformOrigin": "center 9.3em"}}>&nbsp;</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.305469em) rotate(-2.85337deg)", "transformOrigin": "center 9.3em"}}>F</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.08em) rotate(0.684022deg)", "transformOrigin": "center 9.3em"}}>I</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.4em) rotate(4.8121deg)", "transformOrigin": "center 9.3em"}}>G</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.388976em) rotate(10.315deg)", "transformOrigin": "center 9.3em"}}>H</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.333507em) translateY(0.07em) rotate(15.5deg)", "transformOrigin": "center 9.3em"}}>T</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.333507em) rotate(20.1437deg)", "transformOrigin": "center 9.3em"}}>E</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.361111em) rotate(25.0571deg)", "transformOrigin": "center 9.3em"}}>R</span>
                <span className='test-logo' style={{"position": "absolute", "bottom": "auto", "left": "50%", "transform": "translateX(-0.278125em) rotate(29.5787deg)", "transformOrigin": "center 9.3em"}}>S</span>
            </div>
                <p className='logo-subtitle'>The one reward pool with the fiercest</p>
                <p className='logo-subtitle'>daily return and the lowest dev fee</p>
            </div>
            

            <button
                className='btn btn-primary bg-main connect-btn'
                onClick={() => walletAddress ? null : connectWallet()}
            >{walletAddress ? walletAddress.substr(0,6) + '...' + walletAddress.substr(-4) : "CONNECT"}</button>
        </>
    )
}