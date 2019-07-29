import React from 'react';
import './NavBar.css';

export class NavButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
      const pages = ['home', 'blah', 'pics', 'bio', 'art'];
      const navLinks = pages.map((page,i) => {
        return (
            <a key={i} href={'/' + page} className="nav-item">
              {page}
            </a>
        )
      });

    return <nav>{navLinks}</nav>;
  }
}

export class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
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