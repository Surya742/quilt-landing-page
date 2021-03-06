import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "./scrollSpy";

import QuiltLogo from '../../assets/images/newUI/quilt-new-logo.svg';
// import MsgFrame from '../../assets/images/newUI/Msg-frame.svg';

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        { id: 1, idnm: "home", navheading: "Home", href: "#", target: '' },
        { id: 2, idnm: "blog", navheading: "Blog", href: "https://medium.com/@quilt.chat", target: '_blank' },
        // { id: 3, idnm: "team", navheading: "Team", href: "https://twitter.com/Quilt_chat" },
      ],
      isOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    let targetId = this.state.navItems.map((item) => {
      return item.idnm;
    });
    return (
      <React.Fragment>
        <header id="" className="sticky bg-[#212121] top-0 z-[999] shadow-md">
          <Container className="py-4 flex items-center justify-between">
            <Link className="logo" to="/">
              <img src={QuiltLogo} className='h-8 lg:h-12' alt="" />
            </Link>

            <div className="flex items-center gap-8">
              <ul className="flex gap-x-4 items-center p-0 m-0">
                {this.state.navItems.map((item, key) => (
                  <li key={key} className="">
                    <a href={item.href} className='text-white' target={item.target}> {item.navheading}</a>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.quilt.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00E467] text-black rounded-[20px] font-bold hover:bg-[#05bb57ea] duration-200 transition-colors text-sm p-2"
              >
                Launch App
              </a>
            </div>
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;

// <div className="buy-button">
//   <a
//     href="https://app.quilt.chat"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="btn btn-success btn-pills"
//   >
//     Launch App
//   </a>
// </div>

{/* <ul className="navigation-menu nav-items">
{this.state.navItems.map((item, key) => (
  <li key={key} className="has-submenu">
    <a href={item.href}> {item.navheading}</a>
  </li>
))}
</ul> */}

{/* <Link className="logo" to="/">
<img src={QuiltLogo} height="38" alt="" />
</Link> */}