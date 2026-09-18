import HeroHome from '../home/HeroHome'
import Featured from '../home/Featured'
import AboutCP from '../home/AboutCP'
import Planning from '../home/Planning'
import Approach from '../home/Approach'
import CommunitiesSection from '../home/CommunitiesSection'

const Home = () => {
    return (
        <div>
            <HeroHome />
            <Featured />
            <AboutCP />
            <Planning />
            <Approach />
            <CommunitiesSection />
        </div>
    )
}

export default Home
