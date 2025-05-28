import React from 'react';

const MarketStudies: React.FC = () => {
    return (
        <div className="market-studies">
            <h1>Market Studies</h1>
            <p>Explore our comprehensive market studies below:</p>
            <ul>
                <li>
                    <a href="/studies/study1.pdf" target="_blank" rel="noopener noreferrer">Market Study 1</a>
                </li>
                <li>
                    <a href="/studies/study2.pptx" target="_blank" rel="noopener noreferrer">Market Study 2</a>
                </li>
                <li>
                    <a href="/studies/study3.pdf" target="_blank" rel="noopener noreferrer">Market Study 3</a>
                </li>
            </ul>
        </div>
    );
};

export default MarketStudies;