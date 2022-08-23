import { useRef } from 'react';
import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
function App() {
  function onClick(){
    console.log('This is an app component');
  }
  // Sử dụng ref theo Functional Component
  const box = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(box);
    console.log(box.current);
    console.log(box.current.value);
  };
  
  var products = [
    {
      id: 1,
      name : 'Laptop Asus ROG Zephyrus G14 Alan Walker GA401QEC R9 5900HS/16GB 1TB/4GB RTX3050Ti/120Hz/Túi/Win10 (K2064T)',
      price: '37.447.765.95',
      image: 'https://cdn.tgdd.vn/Products/Images/44/251418/Slider/vi-vn-asus-rog-zephyrus-gaming-g14-ga401qec-r9-k2064t-thumbvideo.jpg',
      status: true
    },
    {
      id: 2,
      name : 'Laptop Dell Gaming Alienware m15 R6 i7 11800H/32GB/1TB SSD/6GB RTX3060/165Hz/Office H&S/Win11 (P109F001DBL)',
      price: '61.990.000',
      image: 'https://cdn.tgdd.vn/Products/Images/44/271545/Slider/vi-vn-dell-gaming-alienware-m15-r6-i7-p109f001dbl-1.jpg',
      status: true
    }
  ];
  // Sử dụng câu điều kiện, vòng lặp để hiển thị
  var elements = products.map((products)=>{
    if (products.status) {
      return <Product
      key = {products.id}
      name = {products.name}
      price = {products.price}
      image = {products.image}
      />
    }
  });
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form action="" method="POST" role="form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="box">Tên sản phẩm</label>
                <input type="text" className="form-control" ref={box} id="box"/>
              </div>
              <button type="submit" className="btn btn-primary">Lưu</button>
            </form>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {elements}
        </div>
        <div className="row">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
                <th>Ảnh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>
      {/* Gọi thông qua function và không '()' */}
      <button type="button" className="btn btn-warning" onClick={onClick}>Click</button>
      
    </div>
  );
}

export default App;
