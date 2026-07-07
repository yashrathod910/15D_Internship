import PackingList2 from "./withNull";
import PackingList3 from "./delTag";
import PackingList4 from "./logiAnd";
import DrinkList from "./Drink";

function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✅</li>;
  }
  return <li className="item">{name}</li>;
}

export default function PackingList1() {
  return (
    <>
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
      <br />
      <hr />
      <br />
      <PackingList2/>
      <br />
      <hr />
      <br />
      <PackingList3/>
      <br />
      <hr />
      <br />
      <PackingList4/>
      <br />
      <hr />
      <br />
      <DrinkList/>
    </>
  );
}



