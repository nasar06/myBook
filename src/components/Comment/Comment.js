import React from 'react';

const Comment = ({comment}) => {
    return (
        <div className='mb-5'>
            <div className='flex items-center'>
                <img src={comment?.userImg ? comment?.userImg : 'https://www.codewithharry.com/img/user.png'} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                <h2 className="ml-3 text-sm font-semibold leading-none">{comment?.userName ? comment?.userName : 'No Name'}</h2>
            </div>
            <div className="-space-y-1">

                <span className="inline-block text-xs leading-none dark:text-gray-400">{comment?.comment}</span>
            </div>
        </div>
    );
};

export default Comment;