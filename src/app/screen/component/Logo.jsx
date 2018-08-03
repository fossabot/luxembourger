import React from "react";
import logo from '../../../logo.png'

export default class Logo extends React.Component {
    render() {
        return <div className={'be_Logo'}
                    onClick={() => this.props.history.push('/')}>
            <img src={logo} alt={"Logo of Becoming.lu"} />
        </div>
    }
};