// React basic and bootstrap
import React, { Component, Suspense } from 'react';
import Section from './Section';
import GettingStarted from './GettingStarted';
import OurJourney from './OurJourney';
import Main from './Main';
import Carosel from './Carosel';
import Carosel2 from './Carosel2';
import bg from '../../assets/images/bg.svg';

// Scroll up button
//Import Icons
import FeatherIcon from 'feather-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core';

// Import sub components
const Topbar = React.lazy(() => import('./Topbar'));
const Footer = React.lazy(() => import('./Footer'));

const CustomDot = () => {
  return (
    <i>
      <FeatherIcon icon="arrow-up" className="icons" />
    </i>
  );
};

class IndexRoot extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = '';
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById('topnav').classList.add('nav-sticky');
    } else {
      document.getElementById('topnav').classList.remove('nav-sticky');
    }
  };

  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <div className='min-w-full'>
            <Topbar />
            <section style={{
              backgroundColor: "white",
              overflow: 'hidden'
            }}>
              <Section />
              <Main />

            </section>
            <section style={{ backgroundColor: "#212121", padding: "5%", overflow: 'hidden' }}>
              <Carosel />
            </section>
            <section style={{ backgroundColor: "white", padding: "5%", overflow: 'hidden' }}>
              <Carosel2 />
            </section>
            <section className="section" style={{ backgroundColor: "#212121", padding: "5%", height: "800px", overflow: 'hidden' }}>
              <GettingStarted />
            </section>
            <section className="section" style={{ backgroundColor: "#00E467", padding: "5%", height: "800px", overflow: 'hidden' }}>
              <OurJourney />
            </section>
            <section style={{ backgroundColor: "#212121", overflow: 'hidden' }}>
              <Footer />
            </section>
          </div>

        </Suspense>
      </React.Fragment>
    );
  }
}

export default IndexRoot;
