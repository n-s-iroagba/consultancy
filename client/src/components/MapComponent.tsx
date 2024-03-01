import React from 'react';
import '../assets/Styles.css';

const MapComponent = () => {
    return (
        <div className='margin-top'>
            <iframe
                title="Google Map"
                style={{ width: '80vw', height: '6cm' }}
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=los%20gatos%20california%20+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            />
        </div>
    );
};

export default MapComponent;
