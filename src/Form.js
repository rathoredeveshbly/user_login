import { useState, useEffect } from "react";

const Form = (props) => {
  const [entry, setEntry] = useState({
    name: "",
    price: "",
    quantity: "",
    discription: "",
  });

  useEffect(() => {
    if (props.formData) {
      setEntry(props.formData);
    }
  }, [props.formData]);

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
    setEntry({ name: "", price: "", quantity: "", discription: "" });
    props.setToggle(0);
  };

  const handleItemUpdate = (e) => {
    e.preventDefault();
    const obj = entry;
    props.handleItemUpdate(obj, props.index);
    setEntry({ name: "", price: "", quantity: "", discription: "" });
    props.setToggle(0);
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
      {props.index !== -1 ? (
        <button onClick={handleItemUpdate}>Update Item</button>
      ) : (
        <button onClick={handleSubmit}>Add Item</button>
      )}
    </form>
  );
};

export default Form;
