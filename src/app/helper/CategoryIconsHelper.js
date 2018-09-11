// @flow

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
import divider from '@material-ui/icons/OfflineBolt';

class CategoryIconsHelper {

    icons: {} = {
        "quick-summary": QuickSummary,
        "housing": Housing,
        "doctors": Doctors,
        "schooling": Schooling,
        "insurance": Insurance,
        "cars": Cars,
        "bus-train": Bus,
        "legal": Legal,
        "banks": Banks,
        "playgrounds": Playgrounds,
        "emergency": Emergency,
        "feedback": Feedback,
        "source-code": Code,
        "divider": divider,
    };

    get(category: string) {
        return this.icons[category];
    }
}

export const categoryIconsHelper = new CategoryIconsHelper();