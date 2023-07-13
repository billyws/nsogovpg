
import News from '@/components/layouts/News'
import StatsByProvince from '@/components/layouts/StatsByProvince'
import StatsByThemes from '@/components/layouts/StatsByThemes'

export default function Home(){
    return (
        <div>
            <StatsByThemes />
            <StatsByProvince />
            <News />
        </div>
    )
}