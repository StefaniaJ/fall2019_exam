import React from "react";
import "./App.css";
import "./Header.css";
import { slide as Menu } from "react-burger-menu";

class Mobilemenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
<<<<<<< HEAD
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
=======
      <div className="menu-mobile">
        <Menu>
          <a className="menu-item" href="#home">
            Section1
          </a>

          <a className="menu-item" href="#news">
            Section2
          </a>
          <a onClick={this.showSettings} className="menu-item" href="#news">
            Section3
          </a>

          {/* <a
            onClick={this.showSettings}
            className="menu-item"
            onClick={openModal}
            href="#about"
          >
            Log in
          </a> */}
        </Menu>
      </div>
>>>>>>> 736d3a1d6d305a983c46d3aaa13e2a1d3d87a363
    );
  }
}
export default Mobilemenu;

// class Mobilemenu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       menuOpen: false
//     };
//   }

//   // This keeps your state in sync with the opening/closing of the menu
//   // via the default means, e.g. clicking the X, pressing the ESC key etc.
//   handleStateChange(state) {
//     this.setState({ menuOpen: state.isOpen });
//   }

//   // This can be used to close the menu, e.g. when a user clicks a menu item
//   closeMenu() {
//     this.setState({ menuOpen: false });
//   }

//   // This can be used to toggle the menu, e.g. when using a custom icon
//   // Tip: You probably want to hide either/both default icons if using a custom icon
//   // See https://github.com/negomi/react-burger-menu#custom-icons
//   toggleMenu() {
//     this.setState(state => ({ menuOpen: !state.menuOpen }));
//   }

//   render() {
//     return (
//       <div>
//         <Menu
//           isOpen={this.state.menuOpen}
//           onStateChange={state => this.handleStateChange(state)}
//         >
//           <a onClick={() => this.closeMenu()}>Home</a>
//           <a onClick={() => this.closeMenu()}>About</a>
//           <a onClick={() => this.closeMenu()}>Contact</a>
//           <a onClick={() => this.closeMenu()}>Settings</a>
//         </Menu>
//         <a onClick={() => this.toggleMenu()} />
//       </div>
//     );
//   }
// }
// export default Mobilemenu;
