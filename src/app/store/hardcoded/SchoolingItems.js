// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const schoolingItems: CategoryItem[] = [
    new CategoryItem('How schools work', '', new Date(),
        '/images/schooling/how-it-works.jpg',
        'How schooling system works in Luxembourg. Where to register kids. What are the opening hours. What are the costs.',
        'How schools work',
        ++i, '/wiki/schooling/test.md'),

    new CategoryItem('Foyer Scholaire (after school)', '', new Date(),
        '/images/schooling/foyer-scholaire.jpg',
        'What is Foyer Scholaire. How to get the contract. How to pay less. Ho to find a place.',
        'Foyer Scholaire (after school)',
        ++i, '/wiki/schooling/test.md'),

    new CategoryItem('What languages are taught', '', new Date(),
        '/images/schooling/school-languages.jpg',
        "Depending on the age of tuition your kids will learn in multiple languages. Here's how it works and why this is amazing.",
        'What languages are taught',
        ++i, '/wiki/schooling/test2.md'),

    new CategoryItem('European schools', '', new Date(),
        '/images/schooling/european-school.jpg',
        "Here's the list of european schools. Differences and similarities with national curriculum. How to get in for free.",
        'European schools',
        ++i, '/wiki/schooling/test2.md'),

    new CategoryItem('English schools', '', new Date(),
        '/images/schooling/english-school.jpg',
        "Here's the list of english schools. Differences and similarities with national curriculum",
        'English schools',
        ++i, '/wiki/schooling/test2.md'),

    new CategoryItem('French schools', '', new Date(),
        '/images/schooling/french-school.jpg',
        "Here's the list of French schools. Differences and similarities with national curriculum",
        'French schools',
        ++i, '/wiki/schooling/test2.md'),

    new CategoryItem('Weekend "Nations" schools', '', new Date(),
        '/images/schooling/nations-school.jpg',
        "Almost every popular nation in Luxembourg has a weekend school that speaks national language of kids. Usually it's Saturday only.",
        'Weekend "Nations" schools',
        ++i, '/wiki/schooling/test2.md'),
];