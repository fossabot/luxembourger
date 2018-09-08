// @flow

import {
    BANKS,
    BUS_TRAIN,
    CARS,
    DOCTORS,
    EMERGENCY,
    SOURCE_CODE,
    HOUSING,
    QUICK_SUMMARY,
    INSURANCE,
    LEGAL,
    PLAYGROUNDS,
    SCHOOLING, FEEDBACK, DUMMY, DIVIDER
} from "../data/Category";
import QuickSummary from '@material-ui/icons/Category';
import Housing from '@material-ui/icons/Home';
import Doctors from '@material-ui/icons/FavoriteBorder';
import Banks from '@material-ui/icons/LocalAtm';
import Schooling from '@material-ui/icons/ChildCare';
import Insurance from '@material-ui/icons/VerifiedUser';
import Cars from '@material-ui/icons/DirectionsCar';
import Bus from '@material-ui/icons/DirectionsBus';
import Legal from '@material-ui/icons/AccountBalance';
import Playgrounds from '@material-ui/icons/ChildFriendly';
import Emergency from '@material-ui/icons/LocalHospital';
import Code from '@material-ui/icons/Code';
import Feedback from '@material-ui/icons/Feedback';
import dummy from '@material-ui/icons/OfflineBolt';

class CategoryIconsHelper {

    icons: {};

    init() {
        this.icons = {};
        this.icons[QUICK_SUMMARY] = QuickSummary;
        this.icons[HOUSING] = Housing;
        this.icons[DOCTORS] = Doctors;
        this.icons[SCHOOLING] = Schooling;
        this.icons[INSURANCE] = Insurance;
        this.icons[CARS] = Cars;
        this.icons[BUS_TRAIN] = Bus;
        this.icons[LEGAL] = Legal;
        this.icons[BANKS] = Banks;
        this.icons[PLAYGROUNDS] = Playgrounds;
        this.icons[EMERGENCY] = Emergency;
        this.icons[FEEDBACK] = Feedback;
        this.icons[SOURCE_CODE] = Code;
        this.icons[DUMMY] = dummy;
        this.icons[DIVIDER] = dummy;
    }

    get(category: string) {
        if(!this.icons) {
            this.init();
        }

        return this.icons[category];
    }
}

export const categoryIconsHelper = new CategoryIconsHelper();