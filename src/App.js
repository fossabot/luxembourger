import React from 'react';
import './App.css';
import CategoriesMenu from "./app/screen/CategoriesMenu";
import CategoryView from "./app/screen/CategoryView";
import CategoryItemView from "./app/screen/CategoryItemView";
import Logo from "./app/screen/component/Logo";
import {Route} from "react-router-dom";
import RouterHandler from "./app/helper/RouterHandler";
import CategoryItemView2 from "./app/screen/component/BasicMarkup";

class App extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/:categoryId?/:categoryItemId?' component={RouterHandler}/>

                <Route component={Logo} />
                <Route component={CategoriesMenu}/>

                <Route exact path='/:categoryId/:categoryItemId?' component={CategoryView} />
                <Route exact path='/:categoryId/:categoryItemId' component={CategoryItemView} />
            </div>
        );
    }
}

export default App;
