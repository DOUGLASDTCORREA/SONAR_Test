import React from 'react';

const Tools: React.FC = () => {
    return (
        <div className="tools-page">
            <h1>Tools and Resources</h1>
            <p>Explore the various tools and resources available to enhance your market intelligence work.</p>
            <ul>
                <li>
                    <a href="/tools/tool1">Tool 1</a>: Description of Tool 1.
                </li>
                <li>
                    <a href="/tools/tool2">Tool 2</a>: Description of Tool 2.
                </li>
                <li>
                    <a href="/tools/tool3">Tool 3</a>: Description of Tool 3.
                </li>
                {/* Add more tools as needed */}
            </ul>
        </div>
    );
};

export default Tools;