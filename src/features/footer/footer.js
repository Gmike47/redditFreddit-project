import './footer.css';
import home from './home.png';
import compass from './compass.png';
import create from './create.png';
import chat from './speech.png';
import bell from './bell.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-actual">
                <img src={home} alt="home" />
                <p>Home</p>
            </div>
            <div className="footer-actual">
                <img src={compass} alt="discover" />
                <p>Discover</p>
            </div>
            <div className="footer-actual">
                <img src={create} alt="create" />
                <p>Create</p>
            </div>
            <div className="footer-actual">
                <img src={chat} alt="chat" />
                <p>Chat</p>
            </div>
            <div className="footer-actual">
                <img src={bell} alt="inbox" />
                <p>Inbox</p>
            </div>
        </div>
    )
};

export default Footer;