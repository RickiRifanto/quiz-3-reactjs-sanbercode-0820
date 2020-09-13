import React from 'react';

function Login() {
  return (
    <div style={{width: "40%", margin: "0 auto", marginTop: "20px", border: "1px solid #000", borderRadius: "20px"}}>
      <h1 style={{"text-align" : "center"}}>Login</h1>
      <div style={{padding: "20px", paddingTop: "0px"}}>
        <div style={{display: "block", "margin-bottom": "1em"}}>
          <div style={{display: "inline-block", width: "150px", "font-weight": "bold", "font-size": "16px"}}>
            username
          </div>          
          <input style={{display: "inline-block"}} type="text" name="name" />
        </div>
        <div style={{display: "block", "margin-bottom": "1em"}}>
          <div style={{display: "inline-block", width: "150px", "font-weight": "bold", "font-size": "16px"}}>
            password
          </div>          
          <input style={{display: "inline-block"}} type="text" name="name" />
        </div>
        <button style={{background: "white", "border-radius": "20px"}}>
          <a href="#" style={{"text-decoration": "none", color: "black"}}>Kirim</a>
        </button>
      </div>
    </div>
  );
}

export default Login;
