interface IOfferOwner {
    activeToken: string;
    companyName: string;
    companyPublicProfile: null
    companyUrl: string;
    email: string;
    location: string;
    shortDescription: string;
    updatedAt: string;
    userRole: string;
    _id: string;
}

export interface IDashboardOffer {
    createdAt: string;
    jobDescription: string;
    jobTitle: string;
    owner: IOfferOwner;
    pensionFrom: number;
    pensionTo: number;
    requiredSkills: string[];
    updatedAt: string;
    _id: string;
}