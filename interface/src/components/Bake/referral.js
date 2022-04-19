import { useSelector } from "react-redux"

export default function Referral() {
    const walletAddress = useSelector(({ wallet }) => wallet.walletAddress);
    return (
        <div className="referral-panel mt-4">
            <h3 className="text-white text-center">Referral Link</h3>
            <div className="referral-link">{walletAddress ? `${window.origin}?ref=${walletAddress}` : ''}</div>
            <p className="referral-note">
            Earn 12% of the BNB used to bake beans from anyone who uses your referral link.
            </p>
        </div>
    )
}