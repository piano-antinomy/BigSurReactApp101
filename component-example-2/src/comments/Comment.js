function Comment(props) {
    const c = props.comment;
    return (
            <div className="comment" id = {Math.random()}>
                <h3 className="comment-header"> {c.creator} </h3>
                <p className="comment-body"> {c.comment} </p>
                <div className="comment-actions">
                    <button> Like </button>
                    <span> { c.likedCount } </span> 
                </div>
            </div>

        );
}

export default Comment