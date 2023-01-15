function Comments() {

    const commentsData = [
        {creator: 'Alex', comment: 'Great video!', likedCount: 10},
        {creator: 'Olivia', comment: 'Nice video!', likedCount: 2},
        {creator: 'Lucas', comment: 'Awesome video!', likedCount: 90},
    ];

    return (
        <div className='comments'> 
            {commentsData.map( c => {
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
            })}
        </div>
    );

}

export default Comments
