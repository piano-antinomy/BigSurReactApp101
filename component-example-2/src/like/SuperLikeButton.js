import {useState} from 'react';
import PropTypes from 'prop-types';
import './Button.css'
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";

function SuperLikeButton(props) {

    const [liked, setLiked] = useState(props.liked);
    const [likeCount, setLikedCount] = useState(props.likeCount);

    const getButtonText = () => {
        if (liked) {
            return "Like!"
        } else {
            return "Like!"
        }
    };
    return (
        <div style={{display: "flex", justifyContent: "center", gap: "20px", padding: "5"}}>
            <button className="myButton" 
                onClick={() => {
                    setLiked(!liked);
                    setLikedCount(liked ? likeCount - 1 : likeCount + 1);}
                } > 

                {getButtonStyle(liked)}  <span>{getButtonText()} </span>
            </button>

            <span> {likeCount} </span>
        </div>
    );
}

function getButtonStyle(liked) {
    const thumbOff = (
        <div class="hand">
            <ThumbUpOffAlt class="thumbUpAlt"></ThumbUpOffAlt>
        </div>);

    const thumbUp = (
        <div class="hand">
         <ThumbUp class="thumbUp"></ThumbUp>
        </div>);
    
    return (
        !liked ? thumbOff : thumbUp
    );
}

SuperLikeButton.propType = {
    liked: PropTypes.boolean,
    likeCount: PropTypes.number
}

SuperLikeButton.defaultProps = {
    liked: true,
    likeCount: 10
}

export default SuperLikeButton;