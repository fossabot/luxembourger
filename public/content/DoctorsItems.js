// @flow
import CategoryItem from "../../data/CategoryItem";

export const doctorsItems: CategoryItem[] = [
    new CategoryItem('Emergency - Call 112',
        "Emergency numbers. See what hospitals are open now. See what pharmacy is open now.",
        '/images/doctors/emergency-call.png',
        '/wiki/doctors/emergency.bm'),

    new CategoryItem('Find a doctor now',
        "Here's how you find doctors, hospitals. See what platforms exists and use them right away.",
        '/images/doctors/find-doctor.png',
        '/wiki/doctors/find-a-doctor-now.bm'),

    new CategoryItem('How healthcare works',
        "Who are the actors in medical system. How reimbursement works. How to make appointment.",
        '/images/doctors/how-it-works.png',
        '/wiki/doctors/how-healthcare-works.bm'),

    new CategoryItem('How to get money back',
        "See how you can get reimbursed. Who are the institutions that can do that. What you should do upfront.",
        '/images/doctors/get-money-back.png',
        '/wiki/doctors/how-to-get-money-back.bm'),
];
