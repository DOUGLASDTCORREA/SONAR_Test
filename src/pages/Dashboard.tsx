import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import './Dashboard.css'; // Assuming you have a CSS file for dashboard-specific styles

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Specify the type of Power BI content
                    id: 'your-report-id', // Replace with your report ID
                    embedUrl: 'your-embed-url', // Replace with your embed URL
                    accessToken: 'your-access-token', // Replace with your access token
                    tokenType: models.TokenType.Embed,
                }}
                cssClassName="powerbi-report"
                getEmbeddedComponent={(embeddedComponent) => {
                    console.log('Embedded component:', embeddedComponent);
                }}
            />
            <section className="updates">
                <h2>Updates</h2>
                {/* Add updates content here */}
            </section>
            <section className="news">
                <h2>News</h2>
                {/* Add news content here */}
            </section>
            <section className="calendar">
                <h2>Calendar</h2>
                {/* Add calendar content here */}
            </section>
        </div>
    );
};

export default Dashboard;