import { useState } from 'react';
import './App.css';

function App() {
  var [profile, setProfile] = useState({
    txtUsername: "Username",
    txtPassword: "Password",
    txtDesc: "Description",
    sltGender: 0,
    rdLang: "vi",
    chkbStatus: false
  })
  function onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    setProfile({
      ...profile,
      [name]: value
    });
  }
  function onHandleSubmit(event){
    event.preventDefault();
    console.log(profile);
  }
  return (
    <div className="container mt-30">
      
      <div className="row">
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          
          <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                
                <form onSubmit={onHandleSubmit}>
                
                  <div className="form-group">
                    <label>Username: </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="txtUsername"
                      value={profile.txtUsername}
                      onChange={onHandleChange}
                      />
                  </div>

                  <div className="form-group">
                    <label>Password: </label>
                    <input 
                      type="password" 
                      className="form-control" 
                      name="txtPassword"
                      value={profile.txtPassword}
                      onChange={onHandleChange}
                      />
                  </div>

                  <div className="form-group">
                    <label>Mô tả: </label>
                    
                    <textarea
                      className="form-control" 
                      rows="3"
                      name="txtDesc"
                      value={profile.txtDesc}
                      onChange={onHandleChange}
                      ></textarea>
                    
                  </div>
                  <label>Giới Tính: </label>
                  <select 
                    className="form-control" 
                    name="sltGender" 
                    value={profile.sltGender}
                    onChange={onHandleChange}
                    >
                    <option value={0}>Nữ</option>
                    <option value={1}>Nam</option>
                  </select>
                  <br/>
                  <label>Ngôn ngữ</label>
                  <div className="radio">
                    <label>
                      <input 
                        type="radio" 
                        name="rdLang" 
                        value="en"
                        onChange={onHandleChange}
                        checked= {profile.rdLang === "en"}
                        />
                      Tiếng Anh
                    </label>
                    <br/>
                    <label>
                      <input 
                        type="radio" 
                        name="rdLang" 
                        value="vi"
                        onChange={onHandleChange}
                        checked= {profile.rdLang === "vi"}
                        />
                      Tiếng Việt
                    </label>
                  </div>
                  
                  <div className="checkbox">
                    <label>
                      <input 
                        type="checkbox" 
                        name='chkbStatus'
                        value={true}
                        onChange={onHandleChange}
                        checked={profile.chkbStatus === true}
                        />
                      Trạng thái
                    </label>
                  </div>
                  
                  <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                  <button type="reset" className="btn btn-default">Xoá</button>
                </form>
                                
              </div>
          </div>
          
        </div>
      </div>
      
    </div>
    
  );
}

export default App;
