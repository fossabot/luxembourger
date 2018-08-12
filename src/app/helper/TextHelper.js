// @flow

import * as React from "react";
import Line from "../data/Line";

class TextHelper {

    textToLines(text: string): React.Component[] {
        let result: Line[] = [];
        text.split("\n").forEach(value => result.push(new Line(value)));

        return result;
    }
}

export const textHelper: TextHelper = new TextHelper();