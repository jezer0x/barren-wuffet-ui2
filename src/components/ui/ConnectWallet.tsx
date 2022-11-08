import { ReactComponent as ConnectWalletIcon } from "../../img/icons/connectWallet.svg"

const ConnectWallet = () => {
    return (
        <div className="flex items-center justify-center h-[50px] border-[1px] border-otext rounded-[10px] cursor-pointer">
            <span className="font-ubuntu font-bold text-otext mr-[10px]">Connect Wallet</span>
            <ConnectWalletIcon/>
        </div>
    )
}

export default ConnectWallet;