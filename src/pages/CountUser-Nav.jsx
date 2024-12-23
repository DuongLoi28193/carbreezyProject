import React, { useState, useEffect } from 'react';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VisitorCounterNav = () => {
    const [visitorCount, setVisitorCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('visitorCount');
        if (storedCount) {
            setVisitorCount(parseInt(storedCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('visitorCount', visitorCount);
    }, [visitorCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisitorCount(prevCount => prevCount + 2);
        }, 5000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px', display: "flex", gap: "0px", marginRight: "0px", width: "80px" }}>
            <p style={{ color: "#fff" }}><FontAwesomeIcon icon={faUserAlt} /> {visitorCount}</p>
        </div>
    );
};

export default VisitorCounterNav;
