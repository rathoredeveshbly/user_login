import "./App.css";
import { useDispatch } from "react-redux";
import Invoice from "./Invoice";
import InvoiceList from "./InvoiceList";

const Table = (props) => {
  const dispatch = useDispatch();

  console.log(props.tableData);

  const basicCost = (val) => {
    return val.price * val.quantity;
  };


  ////////////////////////

  let invoice = {
    tBCost: props.tableData.reduce((a, c) => a + basicCost(c), 0),
    product: props.tableData,
  };

  /////////////////

  return (
    <div className="container">
      <div className="row">
        <button
          className="btn btn-primary m-1"
          onClick={() => props.setToggle(true)}
        >
          Add New Item
        </button>
        <div class="form-outline m-1">
          <input
            type="search"
            class="form-control"
            placeholder="Search Product"
            aria-label="Search"
            value={props.search}
            onChange = {(e)=>props.handleSearch(e)}
          />
        </div>
      </div>
      <div>
        <div className="row bg-dark text-white ">
          <div className="col-1">#</div>
          <div className="col-2" onClick={() => props.sortCol(0)}>
            Name
          </div>
          <div className="col-2" onClick={() => props.sortCol(1)}>
            Price
          </div>
          <div className="col-2" onClick={() => props.sortCol(2)}>
            Quantity
          </div>
          <div className="col-3">Discription</div>
          <div className="col-2"></div>
        </div>
        {props.tableData.map((val, index) => (
          <div className="row m-1">
            <div className="col-1">{index + 1}</div>
            <div className="col-2">{val.name}</div>
            <div className="col-2">{val.price}</div>
            <div className="col-2">{val.quantity}</div>
            <div className="col-3">{val.discription}</div>
            <div className="col-2">
              <button
                onClick={() => props.setToggle(true)}
                className="btn btn-success m-1"
              >
                Edit
              </button>
              <button
                onClick={() => props.handleDelete(index)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* currect order data */}

      <div className="container">
        <Invoice invoice={invoice} />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "SAVE_INVOICE", payload: invoice });
        }}
        className="btn btn-primary"
      >
        Save
      </button>

      {/* showing receipt */}

      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <InvoiceList />
      </div>
    </div>
  );
};

export default Table;
