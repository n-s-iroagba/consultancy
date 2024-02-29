import React from "react";
import Writeup from "./Writeup";


const WhoWeAre:React.FC = ()=>{
    const writeup = `We are leading provider of comprehensive cybersecurity solutions, dedicated to safeguarding your digital assets in an increasingly complex threat landscape.
     With a team of seasoned experts and cutting-edge technologies, 
     we specialize in delivering tailored strategies to protect your organization from cyber threats, ensuring confidentiality, integrity, and availability of your critical data.`
    return<div className="mt-5">
    <Writeup head='Elijah Klitz' writeup={writeup}/>

    </div>
}
export default WhoWeAre