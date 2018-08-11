// @flow
import CategoryItem from "../../data/CategoryItem";

let i = 0;

export const doctorsItems: CategoryItem[] = [
    new CategoryItem('Emergency - Call 112', '', new Date(),
        '/images/doctors/emergency-call.png',
        "Emergency numbers. See what hospitals are open now. See what pharmacy is open now.",
        'Emergency',
        ++i, '/wiki/doctors/emergency-numbers.md'),

    new CategoryItem('Find a doctor now', '', new Date(),
        '/images/doctors/find-doctor.png',
        "Here's how you find doctors, hospitals. See what platforms exists and use them right away.",
        'Find doctor now',
        ++i, '/wiki/doctors/find-a-doctor-now.md'),

    new CategoryItem('How healthcare works', '', new Date(),
        '/images/doctors/how-it-works.png',
        "Who are the actors in medical system. How reimbursement works. How to make appointment.",
        'How medicine works',
        ++i, '/wiki/doctors/how-healthcare-works.md'),

    new CategoryItem('How to get money back', '', new Date(),
        '/images/doctors/get-money-back.png',
        "See how you can get reimbursed. Who are the institutions that can do that. What you should do upfront.",
        'Move in checklist',
        ++i, '/wiki/doctors/how-to-get-money-back.md'),
];
