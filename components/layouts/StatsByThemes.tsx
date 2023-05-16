export default function StatsByThemes() {
    return (
        <>
            <div className="container mx-auto p-10">
                <h2 className="text-amber-400 font-extrabold text-xl mb-3">Browse by sector</h2>
                <div className="grid grid-cols-4 justify-center items-center gap-5 mb-5">
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Economy</h4>
                        <p className='text-sm font-sm'>Business, prices, national accounts...</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Education</h4>
                        <p className='text-sm font-sm'>Literacy rates, language, high grades completed...</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Health</h4>
                        <p className='text-sm font-sm'>Child mortality, antinental care, communicable diseases...</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Migration</h4>
                        <p className='text-sm font-sm'>International arrivals and departures...</p>
                    </div>
                </div>
                <div className="grid grid-cols-4 justify-center items-center gap-5 mb-5 space-y-6">
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Social</h4>
                        <p className='text-sm font-sm'>Income, employment status, social welfare</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Population</h4>
                        <p className='text-sm font-sm'>Demographics, age groups, population...</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Population</h4>
                        <p className='text-sm font-sm'>Demographics, age groups, population...</p>
                    </div>
                    <div>
                        <h4 className='text-blue-900 md:text-base font-semibold hover:underline underline-offset-2'>Other indicators</h4>
                        <p className='text-sm font-sm'>Demographics, age groups, population...</p>
                    </div>
                </div>
            </div>
        </>
    )
}