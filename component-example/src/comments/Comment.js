function Comment(props) {
    const c = props.comment;
    return (
            <div class="comment">
                <h3 class="comment-header"> {c.creator} </h3>
                <p class="comment-body"> {c.comment} </p>
                <div class="comment-actions">
                    <button> Like </button>
                    <span> { c.likedCount } </span> 
                </div>
            </div>

        );
}

export default Comment