const products = [
    {id: 1, name: "Laptop", description: "High-performance laptop for professionals.", price: 1200},
    {id: 2, name: "Monitor", description: "High-performance monitor for professionals.", price: 800},
    {id: 3, name: "Mouse", description: "High-performance mouse for professionals.", price: 250},
    {id: 4, name: "Keyboard", description: "High-performance keyboard for professionals.", price: 350}
];

export default function ProductList() {
    return (
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Description</th>
            <th>Price</th>
          </tr> 
        </thead>
        <tbody>
            {products.map((product) => {
                return (
                <tr key = {product.id}>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.description}</th>
                    <th>{product.price}</th>    
                </tr>    
                )})}
        </tbody> 
      </table>
    );
}