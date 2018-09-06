// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const insuranceItems: CategoryItem[] = [
    new CategoryItem('Insurance companies', '', new Date(),
        '',
        'What insurance companies are present in the country. A brief description on what they offer.',
        'Insurance companies',
        ++i, '/wiki/insurance/insurance-companies.bm'),
];