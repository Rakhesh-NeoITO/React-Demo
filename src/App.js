
import './App.css';
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

function DetailTable({products}){
  const rows = []
  let lastElement = null
  products.forEach((products) => {
    if(products.category !== lastElement){
      rows.push(
      
         
        <ProductCategoryRow
        category={products.category}
        key={products.category} />
        

        
      )
    }

    rows.push(
      <Details
      product={products}
        key={products.name} />
    )
    lastElement = products.category;
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

function SearchBar(){
  return(
    <>
    <input type="text" placeholder="You can seacrh here"></input>
    <br></br>
    <input type="checkbox"></input>
    <label>Show the products in cart</label>
    </>
  );
}

function MainTable({products}){
 return(
  <div>
    <SearchBar />
    <DetailTable products={products}/>

  </div>
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

