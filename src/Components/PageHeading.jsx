import React from 'react';
import './PageHeading.css'
function PageHeading(props) {
    return (
        <div className='page_heading_main'>
             <h1 className='page_heading'>{props.heading}</h1>
        </div>
    );
}

export default PageHeading;