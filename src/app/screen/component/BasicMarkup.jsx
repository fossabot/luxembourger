import React from "react";
import * as ReactDOM from "react-dom";
import BMComponent from "../../bm/objects/BMComponent";
import {bmComponentFactory} from "../../bm/BMComponentFactory";
import {bmObjectFactory} from "../../bm/BMObjectFactory";

export default class BasicMarkup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    scrollTop() {
        if(ReactDOM.findDOMNode(this)) {
            ReactDOM.findDOMNode(this).scrollTop = 0;
        }
    }

    render() {
        if(!this.props.source) {
            return <div/>
        }

        setTimeout(() => this.scrollTop(), 10);

        let bmComponents = bmObjectFactory.textToBMComponents(this.props.source);
        let children = [];

        bmComponents.forEach((bmComponent: BMComponent) =>
            children.push(bmComponentFactory.create(bmComponent))
        );

        return <div style={{width: "100%"}}>
            {children}
        </div>;
    }
}