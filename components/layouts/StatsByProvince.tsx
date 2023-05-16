import Image from "next/image"

// Create two columns, one for the a form and one for a svg map of Papua New Guinea.
export default function StatsByProvince() {
    return (
        <>
            <div className="container mx-auto max-w-5xl	flex flex-row justify-between gap-5 h-full">
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 shadow-xl p-10  rounded basis-1/4">
                    {/* Form - Create a new cascading drop*/}
                    <h2 className="text-white text-normal font-semibold pb-5">Browse by province</h2>
                    <p className="text-white text-sm font-sm">Select a province and a topic to view statistics</p>
                    <form className="flex flex-col gap-3">
                        <label className="text-white text-xs font-xs">Select Province</label>
                            <select className="bg-blue-100 p-2 rounded">
                                <option value="national">Western Province</option>
                                <option value="eastern">Gulf Province</option>
                                <option value="western">Western</option>
                                <option value="milne bay">Milne Bay</option>
                                <option value="east sepik">East Sepik</option>
                                <option value="west sepik">West Sepik</option>
                                <option value="madang">Madang</option>
                                <option value="manus">Manus</option>
                                <option value="morobe">Morobe</option>
                                <option value="new britain">New Britain</option>
                                <option value="east new britain">East New Britain</option>
                                <option value="eastern highlands">Eastern Highlands</option>
                                <option value="western highlands">Western Highlands</option>
                                <option value="southern highlands">Southern Highlands</option>
                            </select>
                            <button className="bg-yellow-400 p-2 my-5 rounded">View Statistics</button>
                    </form>
                </div>
                <div className="basis-3/4 p-5">
                    {/* SVG Map of Papua New Guinea */}
                    <div>
                        <Image src="/images/papua-new-guinea.png" width={500} height={500} alt="Papua New Guinea" />
                    </div>
                </div>
            </div>
        </>
    )
}
