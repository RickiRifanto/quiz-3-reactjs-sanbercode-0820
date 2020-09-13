import React from 'react';

var About = React.createClass({
    render: function() {
      return (
        <div>
          <header>
            <title>about</title>
          </header>
          <div style={{padding: '10px', border: '1px solid #ccc'}}>
            <h1 style={{textAlign: 'center'}}>Data Peserta Sanbercode Bootcamp Reactjs</h1>
            <ol>
              <li><strong style={{width: '100px'}}>Nama:</strong> Ricki Rifanto </li> 
              <li><strong style={{width: '100px'}}>Email:</strong> Ricki.sky04@gmail.com </li> 
              <li><strong style={{width: '100px'}}>Sistem Operasi yang digunakan:</strong> Windows </li>
              <li><strong style={{width: '100px'}}>Akun Gitlab:</strong> Ricki sky </li> 
              <li><strong style={{width: '100px'}}>Akun Telegram:</strong> Ricki Rifanto </li> 
            </ol>
          </div>
          <br />
          <br />
          <a href="index.html">
            <button>kembali ke index</button>
          </a>
        </div>
      );
    }
  });

export default About;