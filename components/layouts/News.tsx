import Image from "next/image"
import Link from "next/link"

export default function News(){
    return (
        <>
            <div className="grid grid-cols-3 my-20 gap-6">
                <div className="block max-w-sm rounded bg-white shadow dark:bg-neutral-700">
                        <Link href="#!">
                        <Image
                            className="rounded-t"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            width={500} 
                            height={500}
                            alt="" />
                        </Link>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-normal font-bold leading-tight text-blue-900">
                            PNG Economy falls by K1.4 Billion in 2020
                        </h5>
                        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                        The National Statistical Office released the 2020 Papua New Guinea Gross Domestic Product (GDP) on the Friday 4th November 2022. According to the...
                        </p>
                    </div>
                </div>
                <div className="block max-w-sm rounded bg-white shadow dark:bg-neutral-700">
                        <Link href="#!">
                        <Image
                            className="rounded-t"
                            src="/assets"
                            width={500} 
                            height={500}
                            alt="" />
                        </Link>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-normal font-bold leading-tight text-blue-900">
                            PNG Economy falls by K1.4 Billion in 2020
                        </h5>
                        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                        The National Statistical Office released the 2020 Papua New Guinea Gross Domestic Product (GDP) on the Friday 4th November 2022. According to the...
                        </p>
                    </div>
                </div>
                <div className="block max-w-sm rounded bg-white shadow dark:bg-neutral-700">
                        <Link href="#!">
                        <Image
                            className="rounded-t"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            width={500} 
                            height={500}
                            alt="" />
                        </Link>
                    <div className="p-6">
                        <h5
                            className="mb-2 text-normal font-bold leading-tight text-blue-900">
                            PNG Economy falls by K1.4 Billion in 2020
                        </h5>
                        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
                        The National Statistical Office released the 2020 Papua New Guinea Gross Domestic Product (GDP) on the Friday 4th November 2022. According to the...
                        </p>
                    </div>
                </div>
            </div>
        </>
 )
}
