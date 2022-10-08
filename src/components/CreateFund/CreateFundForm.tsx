import { FunctionComponent, SetStateAction, useState } from "react";
import styles from "./CreateFundForm.module.css";
import telegramIcon from "../../img/icons/telegramYellowIcon.svg"
import twitterIcon from "../../img/icons/twitterYellowIcon.svg"
import discordIcon from "../../img/icons/discordYellowIcon.svg"
import calendarIcon from "../../img/icons/calendarYellowIcon.svg"
import parcentageIcon from "../../img/icons/parcentageYellowIcon.svg"
import Error from "../ui/Error";

const CreateFundForm: FunctionComponent = () => {
  const [telegram, setTelegram] = useState('https://t.me/');
  const [twitter, setTwitter] = useState('https://twitter.com/');
  const [discord, setDiscord] = useState('');
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');

  const handleTelegram = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTelegram(e.target.value);
  };
  const handleTwitter = (e: { target: { value: SetStateAction<string>; }; }) => {
    setTwitter(e.target.value);
  };
  const handleDiscord = (e: { target: { value: SetStateAction<string>; }; }) => {
    setDiscord(e.target.value);
  };
  const handleFormSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!telegram.startsWith('https://t.me/')) {
      setIsError(true);
      setError('Telegram input must starts with https://t.me/')
      console.log(error)
      return
    }
    if (!twitter.startsWith('https://twitter.com/')) {
      setIsError(true);
      setError('Twitter input must starts with https://twitter.com/')
      console.log(error)
      return
    }
    setIsError(false);
    setError('');

  }
  return (
    <div className="bg-[#1c1b25] mt-10 py-20 px-14 rounded-2xl shadow-xl">
      <div>
        <form onSubmit={handleFormSubmit}>
          {
            isError && <Error error={error} />
          }
          <p className="text-white font-bold text-lg">Information about your fund</p>
          <div className="mt-4 space-y-3">
            <div className="space-y-1">
              <label htmlFor="fundName" className="text-white text-sm">Fund Name</label>
              <input type="text" name="fundName" id="fundName" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-2.5" placeholder="Your Fund Name" required />
            </div>
            <div className="space-y-1">
              <label htmlFor="about" className="text-white text-sm">About</label>
              <textarea name="about" id="about" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3" placeholder="Write somethings about your fund..." required></textarea>
            </div>
            <div className="space-y-1">
              <label htmlFor="strategy" className="text-white text-sm">Strategy</label>
              <textarea name="strategy" id="strategy" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full h-24 p-3" placeholder="Your fund strategy" required></textarea>
            </div>
            
            <div className="flex justify-between space-x-8">
              <div className="relative w-full space-y-1">
                <img className="absolute right-4 top-10" src={telegramIcon} alt="telegram icon" />
                <label htmlFor="telegram" className="text-white text-sm">Telegram Username</label>
                <input onChange={handleTelegram} value={telegram} type="text" name="telegram" id="telegram" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Telegram" required />
              </div>
              <div className="relative w-full space-y-1">
                <img className="absolute right-4 top-10" src={twitterIcon} alt="twitter icon" />
                <label htmlFor="twitter" className="text-white text-sm">Twitter Username</label>
                <input onChange={handleTwitter} value={twitter} type="text" name="twitter" id="twitter" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Twitter" required />
              </div>
              <div className="relative w-full space-y-1">
                <img className="absolute right-4 top-10" src={discordIcon} alt="discord icon" />
                <label htmlFor="discord" className="text-white text-sm">Discord Username</label>
                <input onChange={handleDiscord} value={discord} type="text" name="discord" id="discord" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Discord Username" required />
              </div>
            </div>
          </div>
          <p className="text-white mt-8 font-bold text-lg">Fund Setting</p>
          <div className="mt-4 space-y-3">
            <div className="space-y-1">
              <label htmlFor="amountRaised" className="text-white text-sm">Raising Amount</label>
              <input type="number" name="amountRaised" id="amountRaised" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Amounts being raised $" required />
            </div>
            <div className="flex justify-between space-x-8">
              <div className="relative w-full space-y-1">
                <img className="absolute right-4 top-10" src={calendarIcon} alt="calendar icon" />
                <label htmlFor="durationOfRaise" className="text-white text-sm">Fund Closing Date <span className="text-xs text-gray-500">(min after 1 months of createing)</span></label>
                <input type="date" name="durationOfRaise" id="durationOfRaise" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Duration of raise" required />
              </div>
              <div className="relative w-full space-y-1">
                <img className="absolute right-4 top-11" src={parcentageIcon} alt="parcentage icon" />
                <label htmlFor="fees" className="text-white text-sm">Fund Fees</label>
                <input type="number" name="fees" id="fees" className="bg-transparent border border-gray-600 text-gray-300 text-sm rounded-lg focus:ring-yellow-400 focus:border-yellow-400 block w-full p-3" placeholder="Fees" required />
              </div>
            </div>
          </div>

          <div className="hover:text-orange-400 flex justify-center mt-10">
              <button type="submit" className="px-16 py-2.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg font-bold text-lg text-white">
                Create Fund
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CreateFundThanks: FunctionComponent = () => {
  return (
    <div className={styles.groupDiv}>
      <div />
      <div>
        <p>Thank you! Your Fund was created</p>
        <p>&nbsp;</p>
        <p>{`🎉 `}</p>
      </div>
      <button>START TRADING</button>
      <b>Create Fund</b>
      <div>
        If you are a Raise capital easily and scale up your investment and trading strategies. Decide on the fund size,
        the duration of management and the profit share amounts. Market it to your community and help them increase
        their returns.
      </div>
    </div>
  );
};

export default CreateFundForm;
