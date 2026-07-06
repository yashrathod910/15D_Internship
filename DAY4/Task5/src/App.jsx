import { useState } from 'react';
import MyInput from './textField';
import MyCheckbox from './checkBox';
import Form from './form';
import Counter1 from './withUpdater';
import Counter2 from './withoutUpdater';
import TaskApp from './List';
import TodoList1 from './withInitializer';
import TodoList2 from './withoutInitializer';

//Counter
export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        You pressed me {count} times
      </button>
      <br />
      <br />
      <hr />
      <br />
      <MyInput />
      <br />
      <br />
      <hr />
      <br />
      <MyCheckbox />
      <br />
      <br />
      <hr />
      <br />
      <Form />
      <br />
      <br />
      <hr />
      <br />
      <Counter1 />
      <br />
      <br />
      <hr />
      <br />
      <Counter2 />
      <br />
      <br />
      <hr />
      <br />
      <TaskApp />
      <br />
      <br />
      <hr />
      <br />
      <TodoList1 />
      <br />
      <br />
      <hr />
      <br />
      <TodoList2 />
    </>
  );
}
