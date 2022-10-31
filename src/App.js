
import './App.css';
import { useState } from 'react';

function MainTable({products}){
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

 return(
  <div>
    <SearchBar
    filterText={filterText}
    inStockOnly={inStockOnly}
    changeSetFilterText={setFilterText}
    changeSetInStockOnly={setInStockOnly}
    />
    <DetailTable 
    products={products}
    filterText={filterText}
    inStockOnly={inStockOnly}
    />

  </div>
 );

}

function ProductCategoryRow({category}){
return(
  <tr>
  <th colSpan="2">
    {category}
  </th>
</tr>
)
}
function Details({product}){
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;
  return(
    <tr>
    <td>{name}</td>
    <td></td>
    <td></td>
    <td></td>
    <td>{product.price}</td>
  </tr>
  )

}

function DetailTable({products,filterText,inStockOnly}){
  const rows = []
  let lastElement = null
  products.forEach((product) => {
  
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }

    if(product.category !== lastElement){
      rows.push(
        <ProductCategoryRow
        category={product.category}
        key={product.category} />        
      )
    }

    rows.push(
      <Details
      product={product}
        key={product.name} />
    )
    lastElement = product.category;
  });


  return(
  <>
  <div>
    <table>
      <thead>
        <td>Name</td>
        <td></td>
        <td></td>
        <td></td>
        <td>Price</td>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  </div>
  </>
  );
}

function SearchBar({
  filterText,
  inStockOnly,
  changeSetFilterText,
  changeSetInStockOnly
}){
  return(
    <>
   <form>
   <input type="text" placeholder="You can seacrh here"
    value={filterText}
    onChange={(e) => changeSetFilterText(e.target.value)}/>

    <br></br>
    <input type="checkbox" 
    checked={inStockOnly}
      onChange={(e) => changeSetInStockOnly(e.target.checked)}/>
    <label>Show the products in cart</label>
   </form>
    </>
  );
}




const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


export default function App() {
  return (
    <MainTable products={PRODUCTS} />
  );
}

