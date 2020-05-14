import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List  
            key="1"
            header="First list"
            cardIds={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}
            allCards={STORE.allCards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List 
                key="1"
                header="First list"
                cardIds={[ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ]}
                allCards={STORE.allCards}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});