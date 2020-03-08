import React, { Component } from 'react'

export class sidebar extends Component {
    render() {
        return (
            <div className="main">
                <div id="aside">
      <form action="#" method="get" id="search">
        <p>
          <input type="text" size="20" class="input-text" value="Search our website" onfocus="if(this.value=='Search our website') this.value=''" />
          <input type="submit" value="Search" class="input-submit" />
        </p>
      </form>
      <h3>Sidebar Menu</h3>
      <ul class="menu">
        <li><a href="#">Discussion</a></li>
        <li><a href="#">Authors</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <h3>About</h3>
      <p class="box"> <img src="tmp/about-01.jpg" alt="" class="f-left" /> My name is Gokul Jandyal. I´m 21 years old and I´m living in the New York City.<br />
        <a href="http://www.cityinfoyellowpages.co.in/index.php?r=product/detail&id_listing=103906&link_rewrite=tarsem-carrier&category=transport-services&id_city=304">More about me</a> </p>
      <h3 class="nomb">Sponsors</h3>
      <ul class="sponsors">
        <li><a href="#">Lorem ipsum dolor</a><br />
          Donec libero. Suspendisse bibendum</li>
        <li><a href="#">Dui pede condimentum</a><br />
          Phasellus suscipit, leo a pharetra</li>
        <li><a href="#">Condimentum lorem</a><br />
          Tellus eleifend magna eget</li>
        <li><a href="#">Donec mattis</a><br />
          purus nec placerat bibendum</li>
      </ul>
    </div>
            </div>
        )
    }
}

export default sidebar
