// @flow

import * as React from "react";
import BMComponent from "../bm/BMComponent";
import {BMObjectFactory} from "../bm/BMObjectFactory";

class TextHelper {

    textToBMComponents(text: string): React.Component[] {
        let result: BMComponent[] = [];
        text.split("\n-\n\n").forEach(value => result.push(BMObjectFactory.of(value)));

        return result;
    }
}

export const textHelper: TextHelper = new TextHelper();