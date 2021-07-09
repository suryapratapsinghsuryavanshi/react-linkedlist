import React from 'react';
import './Node.css';

// make a Node component becuse we need to use many times.
// all things are easy to understand except one.
export default function Node(props){
    return(
        <div className="node">
            <div className="data">{props.data}</div>
            <div className="next">
                {/* because we want to show an arrow of the next is a 
                point to another Node if the node is not present we 
                so simple show an empty box here. */}
                {
                    props.next != null ? <hr/> : <small></small>
                }
            </div>
        </div>
    );
}