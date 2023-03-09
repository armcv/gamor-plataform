import React from 'react';

function PlatformChooser(props) {
    return (
        <div className="toggle-btn-group">
            <button className="toggle-btn selected" type="button">Party</button>
            <button className="toggle-btn" type="button">Matches</button>
            <button className="toggle-btn" type="button">Streams</button>
        </div>
    );
}

export default PlatformChooser;