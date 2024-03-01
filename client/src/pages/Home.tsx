
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Header from '../components/Header'
import Solution from'../components/Solution'
import Footer from'../components/Footer'
import Counter from '../components/Counter'
import WhoWeAre from '../components/WhoWeAre'
import Awards from '../components/Awards'
import TalkToTheTeam from '../components/TalkToTheTeam'
import Events from '../components/Events'
import Team from '../components/Team'
import Cerfication from '../components/Certification'
import Client from '../components/Client'


const Home: React.FC = () => {

    return (<>
                <NavbarComponent />
                <Header/>
         <WhoWeAre/>
            <Solution />
            <Awards/>
            <Cerfication/>
            <Client/>
            <Counter />
            <Team/>
            <Events/>
            <TalkToTheTeam/>
            <Footer />
            </>  
    )
}
export default Home