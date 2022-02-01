import './share.css';
import { person1, person2,person3,person4,person5} from '../../assets/images';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function Share() {
  return (<div className='share'>
      <div className="shareWrapper">
          <div className="shareTop">
              <img src={person1} alt="Profile Pic" className="shareProfileImg" />
              <input placeholder="What's in your mind Mahavirbha !?" className="shareInput" />
          </div>
          <hr className='shareHr'/>
          <div className="shareBottom">
              <div className="shareOptions">
                  <div className="shareOption">
                      <PermMediaIcon htmlColor='red' className='shareIcon'/>
                      <span className="shareOptionText">Photo or Video</span>
                  </div>

                  <div className="shareOption">
                      <LabelIcon htmlColor='blue' className='shareIcon'/>
                      <span className="shareOptionText">Tag</span>
                  </div>

                  <div className="shareOption">
                      <FmdGoodIcon htmlColor='green' className='shareIcon'/>
                      <span className="shareOptionText">Location</span>
                  </div>

                  <div className="shareOption">
                      <EmojiEmotionsIcon htmlColor='Orange' className='shareIcon'/>
                      <span className="shareOptionText">Feelings</span>
                  </div>
              </div>

            <button className="shareButton">Share</button>

          </div>
      </div>
  </div>);
}
