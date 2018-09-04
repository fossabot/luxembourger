import React from "react";
import logo from '../../logo.png'
import {navigationHelper} from "../helper/NavigationHelper";

export default class Logo extends React.Component {
    render() {
        return <div className={'be_Logo'}
                    onClick={() => navigationHelper.gotoRoot(this)}>
            <img src={logo} alt={"Logo of Becoming.lu"} />
        </div>
    }
};