
function Reset(props) {
  function onResetDefault(){
    props.onSettingDefault(true);
  }
  return (
    <button type="button" className="btn btn-primary" onClick={onResetDefault}>Reset</button>
  );
}

export default Reset;
