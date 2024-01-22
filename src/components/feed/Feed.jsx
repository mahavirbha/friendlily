import './feed.css';
import Share from "../share/Share";
import Post from "../post/Post";
import { Ads, Posts } from '../../dummyData';

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Feed() {
    // Shuffle the Ads array
    const shuffledAds = shuffleArray(Ads);

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {Posts.map((p, index) => {
                    // Check if the current index is a position for an ad
                    if (index > 0 && (index + 1) % 3 === 0 && index / 3 <= shuffledAds.length) {
                        const adIndex = Math.floor((index + 1) / 3) - 1; // Calculate the corresponding ad index
                        return <Post key={shuffledAds[adIndex].id} post={shuffledAds[adIndex]} is_ad={shuffledAds[adIndex].is_ad} />;
                    } else {
                        return <Post key={p.id} post={p} />;
                    }
                })}
            </div>
        </div>
    );
}
