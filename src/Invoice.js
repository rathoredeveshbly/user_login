import './App.css'


const Invoice=({invoice})=>{
    return ( <div className="container border m-1">
    <div className="row">
      <td>Total Cost : {invoice.tBCost}</td>
    </div>
    {invoice.product.map(data=>(<div className="row">
      <div>{data.name} has {data.quantity} items of cost {data.price*data.quantity}.</div>
      </div>))}
    
  </div>)
}

export default Invoice