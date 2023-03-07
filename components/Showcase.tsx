

export default function Showcase(){
    return (
        <>
        <div className="container mx-auto max-w-5xl">
            <div className="grid grid-cols-4 justify-between py-16 gap-5">
                    {/* Population */}
                    <div className="grid grid-cols-2 items-center justify-center">
                        <div>
                            <img src="/assets/icons/population.png" alt="Population" className="h-15 p-5" /> 
                        </div>
                        <div>
                            <h4 className='text-blue-900 text-sm font-sm'>Population</h4>
                            <h2 className='text-xl font-bold text-blue-900'>17,670,254</h2>
                            <p className="text-gray-500 font-normal text-xs">2022 mid-year estimates</p>
                        </div>
                    </div>
                    {/* CPI */}
                    <div className="grid grid-cols-2 items-center justify-center">
                        <div>
                            <img src="/assets/icons/prices.png" alt="Consumer Price Index" className="h-15 p-5" /> 
                        </div>
                        <div>
                            <h4 className='text-blue-900 text-sm font-sm'>CPI</h4>
                            <h2 className='text-xl font-bold text-blue-900'>3.1%</h2>
                            <p className="text-gray-500 font-normal text-xs">January 2023</p>
                        </div>
                    </div>  

                    {/* GDP */}
                    <div className="grid grid-cols-2 items-center justify-center">
                        <div>
                            <img src="/assets/icons/gdp.png" alt="Gross Domestic Products" className="h-15 p-5" /> 
                        </div>
                        <div>
                            <h4 className='text-blue-900 text-sm font-sm'>GDP</h4>
                            <h2 className='text-xl font-bold text-blue-900'>K86.2B</h2>
                            <p className="text-gray-500 font-normal text-xs">2018 - 2022</p>
                        </div>
                    </div>

                    {/* Trade Balance */}
                    <div className="grid grid-cols-2 items-center justify-center">
                        <div>
                            <img src="/assets/icons/travel.png" alt="trade balance" className="h-15 p-5" /> 
                        </div>
                        <div>
                            <h4 className='text-blue-900 text-sm font-sm'>Trade Balance</h4>
                            <h2 className='text-xl font-bold text-blue-900'>K17.5B</h2>
                            <p className="text-gray-500 font-normal text-xs">2020</p>
                        </div>
                    </div>
                    

                    
                    
                    
                    
                </div>
                </div>
        </>
                )
            }
