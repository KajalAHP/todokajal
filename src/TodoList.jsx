import React from "react";
import reactDom from "react-dom";
import TodoItem from "./TodoItem";
import "./Todo.css";

class TodoList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.items.map((item) => (
          <TodoItem
            id={item.id}
            status={item.status}
            task={item.task}
            deleteItem={this.props.deleteItem}
            markItemComplete={this.props.markItemComplete}
          />
        ))}
      </div>
    );
  }
}
export default TodoList;
