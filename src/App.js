import React from 'react';

// import CSS for add some global style items.
import './App.css';

// import Linked List, the main component of this project.
import LinkedList from './LinkedList';

// export the App as a parent of Linked List because 
//sometimes we also want to show some more information.
export default function App() {
    return(
        // use fragments for convenient
        <React.Fragment>
            <LinkedList/>
        </React.Fragment>
    );
}