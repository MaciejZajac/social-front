
export interface IDashboardOffer {
    createdAt: string;
    jobDescription: string;
    jobTitle: string;
    owner: {
        _id: string;
        email: string;
    };
    pensionFrom: number;
    pensionTo: number;
    requiredSkills: string[];
    updatedAt: string;
    _id: string;
}