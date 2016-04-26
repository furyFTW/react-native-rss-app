import React, {
    AppRegistry,
    Component,
} from 'react-native';
/* Enter the application  */
import Root from './app/root';
/* Create the redux store */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reduce from './app/reducers/index';
const store = applyMiddleware(thunk)(createStore)(reduce);

class RNrss extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('RNrss', () => RNrss);
