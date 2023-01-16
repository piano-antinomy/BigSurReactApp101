import {useState} from 'react';

function LikeButton() {

    const defaultLiked = false;
    const defaultLikeCount = 0;

    const [liked, setLiked] = useState(defaultLiked);
    const [likeCount, setLikedCount] = useState(defaultLikeCount);

    const getButtonText = () => {
        if (liked) {
            return "Cancel Like"
        } else {
            return "Like it!"
        }
    };
    return (
        <div style={{display: "flex", justifyContent: "center", gap: "20px", padding: "5"}}>
            <button 
                onClick={() => {
                    setLiked(!liked);
                    setLikedCount(liked ? likeCount - 1 : likeCount + 1);}
                } > {getButtonText()} 
            </button>

            <span> {likeCount} </span>
        </div>
    );
}

export default LikeButton;