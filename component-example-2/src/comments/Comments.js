import Comment from './Comment.js'

function Comments() {

    const commentsData = [
        {creator: 'Alex', comment: 'Great video!', likedCount: 10, id: 1},
        {creator: 'Olivia', comment: 'Nice video!', likedCount: 2, id: 2},
        {creator: 'Lucas', comment: 'Awesome video!', likedCount: 90, id: 3},
    ];

    return (
        <div className='comments'> 
            {commentsData.map( c => {
                return (
                    <Comment comment={c} key={c.id}></Comment>
                );
            })}
        </div>
    );

}

export default Comments
