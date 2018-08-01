// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const housingItems: CategoryItem[] = [
    new CategoryItem('Find housing online', '', new Date(),
        '/images/housing/find-online.jpg',
        'Here the websites you can use to find housing for rent and buy. There are multiple resources, still most have same offers.',
        'Find housing online',
        ++i, '/wiki/housing/find-housing-online.md'),

    new CategoryItem('Renting best practices', '', new Date(),
        '/images/housing/rent-best-practices.jpg',
        "When you are looking for a place to live, there are couple of things you should consider. Here's our list.",
        'Renting best practices',
        ++i, '/wiki/housing/renting-best-practices.md'),

    new CategoryItem('Move-in checklist', '', new Date(),
        '/images/housing/move-in-checklist.jpg',
        "Once you move in there are few things to consider, like subscriptions, insurance and so on.",
        'Move in checklist',
        ++i, '/wiki/housing/move-in-checklist.md'),
];
