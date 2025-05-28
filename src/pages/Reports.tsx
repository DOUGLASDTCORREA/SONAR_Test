import React from 'react';

const Reports: React.FC = () => {
    return (
        <div className="reports-page">
            <h1>Reports</h1>
            <p>Welcome to the Reports section. Here you can find various reports and analyses.</p>
            <ul>
                <li><a href="/reports/sector-analysis">Sector Analysis Report</a></li>
                <li><a href="/reports/market-trends">Market Trends Report</a></li>
                <li><a href="/reports/competitor-analysis">Competitor Analysis Report</a></li>
                <li><a href="/reports/customer-insights">Customer Insights Report</a></li>
            </ul>
        </div>
    );
};

export default Reports;