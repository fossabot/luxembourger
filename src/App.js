import React from 'react';
import Menu from "./app/components/Menu";
import CategoryMenu from "./app/components/CategoryMenu";
import Post from "./app/components/Post";
import Logo from "./app/components/logo/Logo";
import {Route} from "react-router-dom";
import RouterHandler from "./app/helper/RouterHandler";
import Theme from "./app/components/theme/day/Theme";

class App extends React.Component {

    render() {
        return (
            <div>
                <Route path='/:categoryId?/:categoryItemId?' component={RouterHandler}/>

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
