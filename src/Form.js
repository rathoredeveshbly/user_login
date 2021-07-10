import { useState } from "react";

const Form = (props) => {
  const [entry, setEntry] = useState({
    name: "",
    price: "",
    quantity: "",
    discription:""
  });


  useEffect(() => {
    setEntry()
    return () => {
      cleanup
    }
  }, [input])

  const handleChange = (e) => {
    const value = e.target.value;
    setEntry({
      ...entry,
      [e.target.name]: value,
    });
  };
  console.log(entry);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = entry;
    props.handleSubmit(obj);
    setEntry({ name: "", price: "", quantity: "", discription:"" });
    props.setToggle(false);
  };

  return (
    <form>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={entry.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Price
        <input
          type="number"
          name="price"
          value={entry.price}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Quantity
        <input
          type="number"
          name="quantity"
          value={entry.quantity}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Discription
        <input
          type="text"
          name="discription"
          value={entry.discription}
          onChange={handleChange}
        />
      </label>

      <button onClick={handleSubmit}>Add Item</button>
    </form>
  );
};

export default Form;
