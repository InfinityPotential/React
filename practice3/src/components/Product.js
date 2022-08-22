
function Product(props) {
  // function onAddtoCart(){
  //   alert("Mua thành công " + props.name);
  // }
  
  // tên_function = () => {}
  var onAddtoCart = () => {
    alert("Mua thành công " + props.name);
  }
  return (
    <div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img alt={props.name} src={props.image}/>
          <div className="caption">
            <h1>{props.name}</h1>
            <p>{props.price} VND</p>
            <p>
              <a className="btn btn-primary" onClick={ () => {onAddtoCart(props.name)}}>Mua ngay</a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Product;
