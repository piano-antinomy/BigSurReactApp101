import Comment from './Comment.js'

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
                    <Comment comment={c}></Comment>
                );
            })}
        </div>
    );

}

export default Comments
