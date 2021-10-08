import React from "react";
import reactDom from "react-dom";
import TodoList from "./TodoList";
import "./Todo.css";

class Todo extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
      items: [],
    };
  }

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleItem = (event) => {
    event.preventDefault();
    if (this.state.value === "") return;

    const addItem = {
      task: this.state.value,
      id: Date.now(),
    };

    this.setState((prevstate) => ({
      items: prevstate.items.concat(addItem),
      value: "",
    }));
  };

  handleDeleteItem = (itemId) => {
    const newItems = this.state.items.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      items: newItems,
    });
  };

  handleMarkItemComplete=(itemId)=>{
            
    const updatedItems= this.state.items.map(item =>{
        if(itemId === item.id)
            item.status = !item.status;
        
        return item;
    })
    
    this.setState({
        items:[].concat(updatedItems)
    })       
}

 
  render() {
    // console.log(this.state.items);
    return (
      <div className="container-fluid">
        <div className="body">
          <h2 className="heading">TODO List</h2>
          <input
            placeHolder="Add New Todo"
            type="input"
            onChange={this.handleInput}
            value={this.state.value}
          /> 
          <button style={{marginLeft:"10px", height:'40px'}}   type="button" className="btn" onClick={this.handleItem}>
            Add
          </button>
          <TodoList
            items={this.state.items}
            deleteItem={this.handleDeleteItem}
            markItemComplete = {this.handleMarkItemComplete}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
