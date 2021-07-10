import './App.css'


const Invoice=({invoice})=>{
    return ( <div className="container">
    <div className="row">
      <td className="col-6">Total Cost : {invoice.tBCost}</td>
    </div>
    {invoice.product.map(data=>(<div className="row">
      <div>{data.name} has {data.quantity} number of product.</div>
      </div>))}
    
  </div>)
}

export default Invoice