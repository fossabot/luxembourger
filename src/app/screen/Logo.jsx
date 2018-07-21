import React from "react";
import logo from '../../logo becoming luxembourger.png'

export default class Logo extends React.Component {
    render() {
        return <div className={'be-Logo'}>
            <img src={logo} alt={"Logo of Becoming.lu"} />
        </div>
    }
};