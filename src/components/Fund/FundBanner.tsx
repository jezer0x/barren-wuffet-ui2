import { Trans } from '@lingui/macro';
import copyIcon from '../../img/icons/carbonCopyIcon.svg';
import qrCodeIcon from '../../img/icons/carbonQrCodeIcon.svg';
import updateNowIcon from '../../img/icons/carbonUpdateNowIcon.svg';
import telegramIcon from '../../img/icons/telegramYellowIcon.svg';
import twitterIcon from '../../img/icons/twitterYellowIcon.svg';
import { numberWithCommas } from '../../data/formatting';
import ListBox from './ListBox';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function FundBanner(props: any) {
  const { funds, selected, setSelected } = props;

  // select portfolio/trading/yield from fund manage
  const [pty, setPty] = useState('portfolio');
  const { expiresIn, investors, walletAddress, portfolioValue, startingValue, dataUpdated, newlyAddedMoney, upPercentage } = selected || {};

  return (
    <div className='container mx-auto my-20'>
        <div className='bg-[#1c1b25] pt-10 px-8 rounded-xl mx-5'>
            <div className='grid grid-cols-2'>
                <div className='space-y-6'>
                    <ListBox
                      selected={selected}
                      setSelected={setSelected}
                      infos={funds}
                    ></ListBox>
                    <div className='flex space-x-12'>
                        <p className='text-xs font-medium text-gray-400'>
                            <Trans>
                                Expiry in:
                            </Trans>
                            <span className='bg-[#33333f] py-1 px-2 rounded-xl ml-2'>
                                <Trans>
                                    {expiresIn} days
                                </Trans>
                            </span>
                        </p>
                        <p className='text-xs font-medium text-gray-400'>
                            <Trans>
                                Investors:
                            </Trans>
                            <span className='bg-[#33333f] py-1 px-2 rounded-xl ml-2'>
                                <Trans>
                                    {investors}
                                </Trans> 
                            </span>
                        </p>
                    </div>
                    <div className='flex space-x-3'>
                        <p className='text-xs font-medium text-gray-400 mr-6'>{walletAddress}</p>
                        <button className='cursor-pointer'>
                            <img src={copyIcon} alt="" />
                        </button>
                        <button className='cursor-pointer'>
                            <img src={qrCodeIcon} alt="" />
                        </button>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <p className='text-3xl text-white font-light'>
                            <Trans>
                                Portfolio Value
                            </Trans>
                        </p>
                        <div className='space-x-2'>
                            <button
                                className='px-4 py-3 bg-black text-yellow-400 rounded-md text-xs cursor-pointer font-medium'
                            >
                                24H
                            </button>
                            <button
                                className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                            >
                                1D
                            </button>
                            <button
                                className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                            >
                                7D
                            </button>
                            <button
                                className='px-4 py-3 bg-black text-white rounded-md text-xs cursor-pointer font-medium'
                            >
                                1M
                            </button>
                        </div>
                    </div>
                    <h2 className='text-white text-4xl mt-3'>${numberWithCommas(Number(portfolioValue))}</h2>
                    <p className='text-white text-xs mt-3'>
                        <Trans>
                            Starting value: ${numberWithCommas(Number(startingValue))}
                        </Trans>
                    </p>
                    <div className='flex justify-between items-center'>
                        <div className='flex space-x-5 mt-3'>
                            <p className='text-gray-400 text-xs'>
                                <Trans>
                                    Data updated: {dataUpdated} ago
                                </Trans>
                            </p>
                            <button className='cursor-pointer'>
                                <img src={updateNowIcon} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center space-x-6'>
                            <p className='text-green-400 text-xs font-medium'>
                                +${ numberWithCommas(Number(newlyAddedMoney)) }
                            </p>
                            <p
                                className='text-green-400 text-xs font-medium bg-green-900 bg-opacity-70 py-1 px-2 rounded-2xl'
                            >
                                +{ upPercentage }%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio, Trading, Yield Buttons */}
            <div className='flex items-center justify-between mt-10'>
                <div className='space-x-6'>
                    <NavLink to='/fund/portfolio'>
              <button onClick={() => setPty('portfolio')} className={`font-semibold text-xl shadow-md px-14 py-3 rounded-t-xl hover:bg-gray-700 ${pty === 'portfolio' ? 'text-yellow-400 bg-[#282835]' : 'text-white border-t border-x border-gray-700'}`}>
                          <Trans>
                              PORTFOLIO
                          </Trans>
                      </button>
                    </NavLink>
                    <NavLink to='/fund/trading'>
                      <button onClick={() => setPty('trading')} className={`font-semibold text-xl shadow-md px-14 py-3 rounded-t-xl hover:bg-gray-700 ${pty === 'trading' ? 'text-yellow-400 bg-[#282835]' : 'text-white border-t border-x border-gray-700'}`}>
                          <Trans>
                              TRADING
                          </Trans>
                      </button>
                    </NavLink>
                    <NavLink to='/fund/yield'>
                      <button onClick={() => setPty('yield')} className={`font-semibold text-xl shadow-md px-14 py-3 rounded-t-xl hover:bg-gray-700 ${pty === 'yield' ? 'text-yellow-400 bg-[#282835]' : 'text-white border-t border-x border-gray-700'}`}>
                          <Trans>
                              YIELD
                          </Trans>
                      </button>
                    </NavLink>
                </div>
                <div className='flex space-x-4 items-center'>
                    <p className='text-yellow-400 font-bold text-lg mr-4'>Share</p>
                    <button className='cursor-pointer'>
                        <img src={telegramIcon} alt="" />
                    </button>
                    <button className='cursor-pointer'>
                        <img src={twitterIcon} alt="" />
                    </button>
                </div>
            </div>
        </div>
        
    </div>
  );
}
