import './App.css';
import './index.css'
import rate from './rate.jpg';
import logo from './logo.png'
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import { ReactComponent as IconTelegram } from './assets/icons/telegram.svg';
import { IconButton } from '@mui/material';

function App() {
  return (
    <div className="App">
    
    <div className="card m-auto lg:mt-24 mt-6 mb-0">
    <div className="header -mt-10">
      <div className="logo">
        <a href="#"><img className='lg:w-24 lg:h-16 mt-10 -ml-16 md:-ml-0' src={logo}/></a>
      </div>
      <div className="social">

      </div>
    </div>
    <div className="content">
      <div className="title-holder">
        <h1>Get ready for the change.</h1>
        <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
      </div>
      <a href="mailto:info@forteimperiali.com">
        <div className="cta">Shoot us an email</div>
      </a>
    </div>
    <div className="footer">
      <span><a className="underlined" href="https://www.instagram.com/interiorbyforte/?hl=en" target="_blank" rel="noopener noreferrer">&copy; {new Date().getFullYear()} Forte Imperiali Interior  </a></span>
    </div>
  </div>
    </div>
  );
}

export default App;
