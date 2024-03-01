import React from 'react'
import EventForm from '../components/EventForm'
import { BigLogo } from '../components/Logo'



const Event = ()=>{
    return<div className="d-flex flex-column align-items-center pt-4">
        <BigLogo/>
        <p className="py-4 px-4 text-center">Fill the inquiry form below, we shall revert in less than 24hrs.</p>
        <EventForm/>
        <footer className="border-0 border-top w-100 text-center mt-4 text-light">Elijah Klitz © 2024</footer>
    </div>
}
export default Event