import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
    city:"",
    pincode:""
  });

  function handleChange(e){

    setForm({
      ...form,
      [e.target.name]:e.target.value
    });

  }

  function handleSubmit(e){

    e.preventDefault();

    navigate("/success");

  }

  return(

    <div className="checkout-page">

      <h1>Checkout</h1>

      <form
        className="checkout-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          rows="4"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
          required
        />

        <button type="submit">

          Place Order

        </button>

      </form>

    </div>

  );

}

export default Checkout;