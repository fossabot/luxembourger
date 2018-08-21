import React from "react";
import * as ReactDOM from "react-dom";
import {textHelper} from "../../helper/TextHelper";
import BMComponent from "../../bm/BMComponent";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import {bmComponentFactory} from "../../bm/BMComponentFactory";

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

        let bmComponents = textHelper.textToBMComponents(this.props.source);
        let children = [];

        bmComponents.forEach((bmComponent: BMComponent) => {
            let child;

            switch (bmComponent.type) {
                case 'youtube':
                    child = bmComponentFactory.youtube(bmComponent);
                    break;
                case 'image':
                    child = bmComponentFactory.image(bmComponent);
                    break;
                case 'text':
                    child = bmComponentFactory.text(bmComponent);
                    break;
                case 'card':
                    child = bmComponentFactory.card(bmComponent);
                    break;
                // case 'card':
                //     if(bmComponent.icon) {
                //         child = <Card>
                //             <CardHeader
                //                 avatar={
                //                     <Avatar aria-label={bmComponent.icon}>
                //                         {bmComponent.icon.substr(0, 1).toUpperCase()}
                //                     </Avatar>
                //                 }
                //                 title={bmComponent.content}
                //                 subheader='---'
                //             />
                //         </Card>;
                //     } else {
                //         child = <Card>
                //             <CardHeader
                //                 title={bmComponent.content}
                //                 subheader='---'
                //             />
                //         </Card>;
                //     }
                //     break;
                // case 'text':
                //     child = <div style={{color: '#5f6368'}}>{bmComponent.content}</div>;
                //     break;
                default:
                    child = <br/>;
            }

            children.push(child)
        });

        return <div>
            {children}
        </div>;
    }
}