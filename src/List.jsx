import './TodoApp1.css';

function List(props){
    // console.log("props", props);
    return (
        <div>
            {props.itemList.map(itemObj => {
               return (
               <div className="item">
                    <p>{itemObj.item}</p>
                    <button>x</button>
               </div>
               );
            })}  
        </div>
    );
}
export default List;