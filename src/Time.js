<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

function Clock() {
    // State to store the current time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Update the time every second
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clear the interval on component unmount
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <p>The current time is: {currentTime}</p>
        </div>
    );
}

=======
import React, { useState, useEffect } from 'react';

function Clock() {
    // State to store the current time
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Update the time every second
    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        // Clear the interval on component unmount
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <p>The current time is: {currentTime}</p>
        </div>
    );
}

>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
export default Clock;