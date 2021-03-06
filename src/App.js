import { useState } from 'react';
import Form from './Form';
import Table from './table';


function App(props) {
  
const [data,setData]=useState([])
const [toggle, setToggle] = useState(0)
const [search, setSearch] = useState("")
const [index,setIndex] = useState(-1)

const handleEdit=(i)=>{
  console.log(i)
  setIndex(i)
  setToggle(1)
}

let formData = index !== -1 ? data[index] :null
console.log(formData)

const handleSubmit=(obj)=>{
  console.log(obj)
  setData(data.concat(obj))
}

const handleItemUpdate = (obj, index) =>{
  let array=[...data]
  array.splice(index,1,obj)
   setData(array)
   setIndex(-1)
}
const handleDelete=(i)=>{
  let array=[...data]
  array.splice(i,1)
  console.log(array)
  setData(array)
}

const handleSearch = e =>{
  let array=[...data]
    setSearch(e.target.value);
    const searchedData = array.filter(val=>{
      return val.name.toLowerCase().indexOf(search.toLowerCase()) !==-1
    })
    console.log("filteredData",searchedData)
    setData(searchedData)
    console.log("main data", array);
  };

  // sorting function
  const sortCol =(index)=>{
    let array=[...data]
    switch(index){
      case 0: array.sort((a,b)=>a.name.localeCompare(b.name));setData(array);break;
      case 1: array.sort((a,b)=>a.price-b.price);setData(array);break;
      case 2: array.sort((a,b)=>a.quantity-b.quantity);setData(array);break;
    }
  }

  return (
    <div>
      {toggle === 1 ? (
        <Form setToggle={setToggle} 
        handleItemUpdate={handleItemUpdate} 
        index={index} 
        formData={formData} 
        handleSubmit={handleSubmit} 
        />
      ) : (
        <Table
          setToggle={setToggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          sortCol={sortCol}
          handleSearch={handleSearch}
          tableData={data}
          search={search}
        />
      )}
    </div>
  );
}

export default App;