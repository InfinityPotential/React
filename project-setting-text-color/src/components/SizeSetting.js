
function SizeSetting(props) {
  const changSize=(value)=>{
    props.onChangeSize(value);
  }
  return (
    <div className="panel panel-warning">
        <div className="panel-heading">
            <h3 className="panel-title">Size: {props.fontSize}</h3>
        </div>
        <div className="panel-body">
                
            <button type="button" className="btn btn-success" onClick={ () => changSize(-2)}>Giảm</button>
                
            <button type="button" className="btn btn-success" onClick={ () => changSize(2)}>Tăng</button>
                
            </div>
              
    </div>
  );
}

export default SizeSetting;
