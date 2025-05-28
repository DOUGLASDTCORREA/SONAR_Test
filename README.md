# SONAR Project

## Overview
SONAR is a web application designed to consolidate market intelligence work, inspired by the user-friendly interface of Netflix. The application features various sections including dashboards, market studies, reports, tools, and strategy rooms, each tailored to provide valuable insights and resources for users.

## Features
- **Dashboards**: Interactive visualizations and updates to keep users informed.
- **Market Studies**: Access to various market studies in multiple formats (e.g., PowerPoint, PDF).
- **Reports**: Comprehensive layouts for sector analyses and other reports.
- **Tools**: A collection of useful tools and resources for users.
- **Strategy Rooms**: Restricted access content for strategists and decision-makers.

## Access Levels
The application supports multiple user roles, including:
- Explorer
- Strategist
- Decisor
- Editor
- Master

## Getting Started
To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```
   cd SONAR
   ```

3. **Install dependencies**:
   ```
   npm install
   ```

4. **Run the application**:
   ```
   npm start
   ```

## Directory Structure
```
SONAR
├── public
│   └── index.html
├── src
│   ├── assets
│   │   └── styles
│   │       └── theme.css
│   ├── components
│   │   ├── Dashboard
│   │   ├── MarketStudies
│   │   ├── Reports
│   │   ├── Tools
│   │   └── StrategyRooms
│   ├── pages
│   │   ├── Dashboard.tsx
│   │   ├── MarketStudies.tsx
│   │   ├── Reports.tsx
│   │   ├── Tools.tsx
│   │   └── StrategyRooms.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── utils
│   │   └── auth.ts
│   ├── types
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
