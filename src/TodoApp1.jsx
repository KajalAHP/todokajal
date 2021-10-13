import {useState} from "react";
import List from './List';

function TodoApp1() {
  const[currentItem, setCurrentItem] = useState();
  const[itemList, setItemList] = useState([]);

  const onChangeHandler = e => {
    setCurrentItem(e.target.value);
  };
  const addItemToList = () => {
    setItemList([...itemList,{ item:currentItem, key:Date.now()}]);
    setCurrentItem("");    
  };
  
  return(
    <div>
      <div className="Input-wrapper">
        <input type="text"  placeholder="Enter the task" value={currentItem} onChange={onChangeHandler}/>
        <button type="submit" onClick={addItemToList}>add</button>
          <List itemList={itemList}/>
      </div>
    </div>
  )
}

export  default TodoApp1;