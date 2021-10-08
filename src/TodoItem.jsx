import React from "react";
import reactDom from "react-dom";
import "./Todo.css";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onMarkItemComplete = (event) => {
      this.props.markItemComplete(this.props.id);
    };

    this.onDeleteItem = (event) => {
      this.props.deleteItem(this.props.id);
    };
  }
  render() {
    const itemClass =
      "isItemCompleted-" + (this.props.status ? "done" : "");

    return (
      <div className="container">
        <div className="item">
          <input type="checkbox" onChange={this.onMarkItemComplete} />
          <span className={itemClass}> {this.props.task} </span>
          <button
            style={{ float: "right", marginLeft: "5rem" }}
            type="button"
            onClick={this.onDeleteItem}
            class="btn-1"
          >
            {" "}
            x{" "}
          </button>{" "}
        </div>
      </div>
    );
  }
}
export default TodoItem;
