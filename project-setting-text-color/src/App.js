import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState('red');
  var [fontSize, setSize] = useState(12);
  function onSetColor(params){
    setColor(params);
  }
  const onChangeSize =(value)=>{
    if(fontSize +  value >= 8 && fontSize + value <= 36){
    setSize(
        fontSize += value
      )
    }
    else{
      fontSize = fontSize
    }
  }
  function onSettingDefault(value) {
    if(value){
      setColor('red')
      setSize(12)
    }
  }
  return (
    <div className="App">
      <div className="container mt-50">
      <div className="row">
        <ColorPicker color={color} onReceiveColor = {onSetColor}/>        
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting 
          fontSize={fontSize}
          onChangeSize = {onChangeSize}
          />
          <Reset onSettingDefault = {onSettingDefault}/>
        </div>
        <Result color={color} fontSize={fontSize}/>        
      </div>
      </div>
    </div>
  );
}

export default App;
