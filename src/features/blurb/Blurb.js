import './Blurb.css';
import cakey from './icons8-cake-48.png';
import dropicon from './pngegg.png';
import upicon from './upicon.png';
import hahand from './hahand.png';
import { useSelector } from 'react-redux';

const Blurb = () => {

    const reddit = useSelector((state) => state.reddit);
    const { selectedSubreddit } = reddit;
    
    const drop1 = () => {

        let arr = document.getElementsByClassName('drop-icon1')[0];
        let arrH5 = document.getElementsByClassName('h5')[0];

        if (arr.src === upicon) {
            arr.src = dropicon;
            arr.alt = 'drop arrow';
            arrH5.style.display = 'none';
        } else {
            arr.src = upicon;
            arr.alt = 'up arrow';
            arrH5.style.display = 'block';
        };
    }

    const drop2 = () => {
        let arr = document.getElementsByClassName('drop-icon2')[0];
        let hand = document.getElementsByClassName('gottem')[0];
        let arrH4 = document.getElementsByClassName('h4')[0];

        if (arr.src === dropicon) {
            arr.src = upicon;
            arr.alt = 'up arrow';
            hand.style.display = 'block';
            arrH4.style.display = 'block';
        } else {
            arr.src = dropicon;
            arr.alt = 'drop arrow';
            hand.style.display = 'none';
            arrH4.style.display = 'none';
        }
    }

    return (
        <div className="blurbs-container">
            <div className="about-container">
                <h2>About Community</h2>
                <div className="aboutin-container">
                    <strong>{selectedSubreddit.slice(1, -1)} community on reddit</strong>
                    <p><img src={cakey} alt="cake" /> Created 21st night of September</p>
                    <strong>{selectedSubreddit.slice(1, -1)} topics</strong>
                    <div className="links">
                        <p>1st topic</p>
                        <p>2nd topic</p>
                        <p>3rd topic</p>
                        <p>4th topic</p>
                        <p>5th topic</p>
                    </div>
                    <div className='foll'>
                        <strong>6.9m</strong>
                        <p>followers of this sub</p>
                    </div>
                </div>
            </div>
            <div className="rules-container">
                <h2>{selectedSubreddit.slice(1, -1)} rules</h2>
                <div className='rulesin-container'>
                    <p onClick={drop1} style={{cursor: 'pointer'}} >1.You know the rules  <img src={dropicon} alt="drop arrow" className='drop-icon1'  />
                    <p className='h5' style={{display: 'none', border: 'none'}}>and so do I</p>
                    </p>
                    <p>2.Be civil</p>
                    <p>3.No harassement</p>
                    <p>4.Post only the dankest of memes</p>
                    <p>5.stay on topic</p>
                    <p>6.take thing lightly</p>
                    <p>7.I don't know what to do with my hands</p>
                    <p onClick={drop2} style={{cursor: 'pointer'}}>8.Don't click this  <img src={dropicon} alt="drop arrow" className='drop-icon2' />
                    <img src={hahand} alt="gottem" className='gottem' style={{display: 'none', height: '4rem'}}/>
                    <p className='h4' style={{display: 'none', border: 'none'}}>I told you not to click that</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Blurb;