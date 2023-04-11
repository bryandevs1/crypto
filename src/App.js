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
    
    <div className="card">
    <div className="header">
      <div className="logo">
        <a href="#"><img className='w-36 h-32' src={logo}/></a>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/profile.php?id=100089662386775&mibextid=LQQJ4d" title="Facebook" target="_blank" rel="noopener noreferrer">
          <IconFacebook className="icon" />
        </a>
        <a href="https://twitter.com/payv3rse?s=21&t=W9T650l41dYZ-uWS50co-A" title="Twitter" target="_blank" rel="noopener noreferrer">
          <IconTwitter className="icon" />
        </a>
        <a href="https://t.me/payv3rsebymac" title="GitHub" target="_blank" rel="noopener noreferrer">
          <IconTelegram className="icon w-24 -mt-[390px] -mb-96" />
        </a>
      </div>
    </div>
    <div className="content">
      <div className="title-holder">
        <h1>Get ready for the change.</h1>
        <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
      </div>
      <a href="mailto:payverse@gmail.com">
        <div className="cta">Send us an email</div>
      </a>
    </div>
    <div className="footer">
      <span><a className="underlined" href="https://instagram.com/payv3rse?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">&copy; {new Date().getFullYear()} Payverse  </a></span>
    </div>
  </div>
    </div>
  );
}

export default App;
