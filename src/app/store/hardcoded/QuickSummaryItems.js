// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const summaryItems: CategoryItem[] = [
    new CategoryItem('Useful Apps', '', new Date(),
        '',
        'There are quite a lot of useful apps if you live or work in Luxembourg. Here\'s a list of those apps.',
        'Useful Apps',
        ++i, '/wiki/summary/apps.bm'),

    new CategoryItem('Expat Notes', '', new Date(),
        '',
        'Powered by Expat Notes on Luxembourg. Small cards with various facts about Luxembourg.',
        'Useful Apps',
        ++i, '/wiki/summary/expat-notes.bm'),


];
