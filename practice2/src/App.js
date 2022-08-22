import './App.css';

function App() {
  var a = 5;
  var b = 7;
  var product = {
    id: 1,
    name: 'Iphone 13 Pro',
    price: 15000000,
    status: true
  }
  function showinfoproduct(product){
    if(product.status){
      return (<h2>
      <br/>Mã số: {product.id}
      <br/>Tên sản phẩm: {product.name}
      <br/>Giá thành: {product.price}
      <br/>Trạng thái: {product.status ? 'Active' : 'Pending'}
      </h2>
      );
    }    
  }
  var users = [
    {
      id : 1,
      name: 'Teo',
      age: 18
    },
    {
      id : 2,
      name: 'Ti',
      age: 24
    },
    {
      id : 3,
      name: 'Bi',
      age: 30
    }
  ];
  var elements = users.map((user, index)=>{
    return <div key = {index}>
      <h2>Tên: {user.name}</h2>
      <h2>Tuổi: {user.age}</h2>
    </div>
  });

  return (
    <div>
      {/* Hiển thị biểu thức */}
      <h2>
        a = {a}
        <br/>b = {b}
        <br/>a + b = { a+b }
        </h2>
      {/* Hiển thị đối tượng
        <h2>
          <br/>Mã số: {product.id}
          <br/>Tên sản phẩm: {product.name}
          <br/>Giá thành: {product.price}
          </h2> */}
      {/* Sử dụng câu điều kiện để hiển thị */}
      {showinfoproduct(product)}
      {/* Hiển thị danh sách đối tượng (sử dụng hàm map) */}
      {elements}
      </div>
  );
}

export default App;
