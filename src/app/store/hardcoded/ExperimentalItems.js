// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const experimentalItems: CategoryItem[] = [
    new CategoryItem('Experimental things', '', new Date(),
        '',
        'Here we test experimental formats and articles.',
        'Experimental things',
        ++i, '/wiki/test.bm'),
];
