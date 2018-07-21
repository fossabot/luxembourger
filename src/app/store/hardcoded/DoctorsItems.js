// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const doctorsItems: CategoryItem[] = [
    new CategoryItem('Emergency - Call 112', '', new Date(),
        '/images/doctors/emergency.jpg',
        "Emergency numbers. See what hospitals are open now. See what pharmacy is open now.",
        'Emergency',
        ++i, 'http://localhost:3000/test2.md'),

    new CategoryItem('Find a doctor now', '', new Date(),
        '/images/doctors/find-doctor-now.jpg',
        "Here's how you find doctors, hospitals. See what platforms exists and use them right away.",
        'Find doctor now',
        ++i, 'http://localhost:3000/test.md'),

    new CategoryItem('How to get money back', '', new Date(),
        '/images/doctors/money-back.jpg',
        "See how you can get reimbursed. Who are the institutions that can do that. What you should do upfront.",
        'Move in checklist',
        ++i, 'http://localhost:3000/test2.md'),

    new CategoryItem('How medicine works', '', new Date(),
        '/images/housing/move-in-checklist.jpg',
        "Who are the actors in medical system. How reimbursement works. How to make appointment.",
        'How medicine works',
        ++i, 'http://localhost:3000/test2.md'),
];