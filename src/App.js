import React from 'react';
import Menu from "./app/screen/Menu";
import CategoryMenu from "./app/screen/CategoryMenu";
import Post from "./app/screen/Post";
import Logo from "./app/screen/component/Logo";
import {Route} from "react-router-dom";
import RouterHandler from "./app/helper/RouterHandler";
import Theme from "./app/screen/theme/Theme";

class App extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/:categoryId?/:categoryItemId?' component={RouterHandler}/>

                <Route component={Theme} />
                <Route component={Logo} />
                <Route component={Menu}/>

                <Route exact path='/:categoryId/:categoryItemId?' component={CategoryMenu} />
                <Route exact path='/:categoryId/:categoryItemId' component={Post} />
            </div>
        );
    }
}

export default App;
