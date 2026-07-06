import Toolbar1 from "./eHandlerwithprops";
import Toolbar2 from "./propsAsHandler";
import Toolbar3 from "./ePrepo";
import Toolbar4 from "./ePrepoSol"
import Signup from "./formDefault";
export default function Button() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
      <button onClick={handleClick}>
        Click me
      </button>
      <br /><br />
      <hr />
      <br />
      <Toolbar1 />
      <br /><br />
      <hr />
      <br />
      <Toolbar2 />
      <br /><br />
      <hr />
      <br />
      <Toolbar3 />
      <br /><br />
      <hr />
      <br />
      <Toolbar4 />
      <br /><br />
      <hr />
      <br />
      <Signup />
    </>
  );
}
