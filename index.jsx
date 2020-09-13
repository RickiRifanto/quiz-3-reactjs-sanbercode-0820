import React from 'react';

    function Home() {
      return (
        <div>
          <link href="public/css/style.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
          <header>
            <img id="logo" src="public/img/logo.png" width="200px" />
            <nav>
              <ul>
                <li><a href="index.html">Home </a> </li>
                <li><a href="about.html">About </a> </li>
                <li><a href="contact.html">Login</a> </li>
              </ul>
            </nav>
          </header>
          <section>
            <h1>Featured Posts</h1>
            <div id="article-list">
              <div className="article">
                <a href><h3>Lorem Post 1</h3></a>
                <p>Filmnya keren</p>
                <p>judul : sneakers </p>
                <p>Genre : comedy </p>
              </div>
            </div>
          </section>
          <footer>
            <h5>copyright © 2020 by Sanbercode</h5>
          </footer>
        </div>
      );
    }
  

export default Home ;