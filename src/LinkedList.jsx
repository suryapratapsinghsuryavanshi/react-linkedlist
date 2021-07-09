import React from 'react';
import Node from './Node';
import './LinkedList.css';

// craete a node for linkedlist.
class node {
    data;
    next;
    constructor(d){
        this.data = d;
        this.next = null;
    }
}

class LinkedList extends React.Component {

    // constructor because we want to work with states.
    constructor(props){
        super(props);
        this.state = {
            head: null,
            element: 0
        }
    }

    // if the input are occure so store the element value.
    inputEvent = (e) => {
        e.preventDefault();
        this.setState({
            element: e.target.value
        })
    }

    // if the user click to the addElement button add the 
    // element to the linkedlist and update state.
    addElement = (e) => {
        e.preventDefault();
        this.insertLast(this.state.element);
        this.setState({
            element: 0
        })
    }

    // if the user click to the removeElement button remove the 
    // element to the linkedlist and update state.    
    removeElement = (e) => {
        e.preventDefault();
        this.deleteLast();
        this.setState({
            element: 0
        })
    }

    // if the user click to the addAllElement button restart the 
    // entire state.
    removeAllElement = (e) => {
        e.preventDefault();
        this.setState({
            head: null
        })
    }

    // insert | O(n-1) | insert to the last
    insertLast = (d) => {
        let new_node = new node(d);
        if(this.state.head == null){
            this.state.head = new_node;
        }else{
            let temp = this.state.head;
            while(temp.next != null){
                temp = temp.next;
            }
            temp.next = new_node;
        }
    }

    // show | O(n) | show left to right order
    viewsNode = () => {
        if(this.state.head != null){
            let li = [];
            let temp = this.state.head;
            while(temp != null){
                li.push(temp);
                temp = temp.next;
            }
            return li;
        }
    }

    // delete | O(n) | delet last node.
    deleteLast = () => {
        let data;
        if(this.state.head == null){
            data = -1;
            console.log("Linkedlist is empty.");
        }else{
            let temp = this.state.head;
            if(temp.next == null) return;
            while(temp.next.next != null){
                temp = temp.next;
            }
            data = temp.next.data;
            temp.next = null;
        }
        return(data);
    }

    // the class render method are re-render if the state are update.
    render(){
        return(
            // create simple UI to understand the concept of a linked list.
            <React.Fragment>
                <div className="LinkedList">
                    {
                        // the conditional rendering totally depends on values are present in the head or not.
                        this.viewsNode() != undefined ?
                            this.viewsNode().map((value, index) => {
                                return <Node key={index} data={value.data} next={value.next}/>
                            })
                        : <h1 style={{fontFamily:'system-ui', fontWeight: 200}}>Add Elements In Linked List.</h1>
                    }
                </div>
                <div className="control">
                    <form className="form">
                        <input type="number" name="ele" id="ele" value={this.state.element} onChange={this.inputEvent}/>
                        <button type="submit" onClick={this.addElement}> + </button>
                        <button type="submit" onClick={this.removeElement}> - </button>
                        <button type="submit" onClick={this.removeAllElement}> Restart </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default LinkedList;