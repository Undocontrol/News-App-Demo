import React from 'react';
import './NavBar.css';

export class NavButton extends React.Component {
  render() {
      const pages = ['home', 'blah', 'pics', 'bio', 'art'];
      const navLinks = pages.map(page => {
        return (
            <a href={'/' + page} className="navItem">
              {page}
            </a>
        )
      });

    return <nav>{navLinks}</nav>;
  }
}

export class NavBar extends React.Component {
  render() {
    return (
      <div className="hideScroll">
        <div id="navBar">
          <NavButton></NavButton>
        </div>
       </div>
    )
  }
}

export default NavBar