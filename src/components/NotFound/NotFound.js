import React from 'react';
import error from "../../notfound.png"

const NotFound = () => {
    
    return (
        // simple picture added of 404
        <div>
            <div className="text-center">
                <img src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;