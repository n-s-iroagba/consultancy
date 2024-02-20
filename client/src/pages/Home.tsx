
import React from 'react'
import NavbarComponent from '../components/NavbarComponent'
import Header from '../components/Header'
import Solution from'../components/Solution'
import Footer from'../components/Footer'
import Counter from '../components/Counter'
import WhoWeAre from '../components/WhoWeAre'
import Awards from '../components/Awards'
import TalkToTheTeam from '../components/TalkToTheTeam'
import VisitUs from '../components/VisitUs'
import Events from '../components/Events'


const Home: React.FC = () => {

    return (<>
                <NavbarComponent />
                <Header/>
         <WhoWeAre/>
            <Solution />
            <Awards/>
            <Counter />
            <Events/>
            <TalkToTheTeam/>
            <VisitUs/>
            <Footer />
            </>  
    )
}
export default Home