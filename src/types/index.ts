export type UserRole = 'Explorer' | 'Strategist' | 'Decisor' | 'Editor' | 'Master';

export interface MarketStudy {
    id: string;
    title: string;
    format: 'PDF' | 'PPT' | 'DOC';
    description: string;
    link: string;
}

export interface Report {
    id: string;
    title: string;
    sector: string;
    date: Date;
    link: string;
}

export interface Tool {
    id: string;
    name: string;
    description: string;
    link: string;
}

export interface StrategyRoom {
    id: string;
    title: string;
    content: string;
    accessLevel: UserRole[];
}