import React, { useContext } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const MindShare = () => {

    const {user} = useContext(AuthContext)
    
    const handelSubmit = e =>{
        e.preventDefault()

        const form = e.target;
        const postText = form.postText.value;
        const postImg = form.postImg.value;

        const postInfo = {
            postText,
            postImg: postImg?postImg:'',
            userEmail : user?.email,
            userName: user?.displayName,
            userTitle: 'Silver user',
            userImg: user?.photoURL? user?.photoURL: ''

        }

        fetch('http://localhost:5000/userPost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postInfo)
        })
            .then(res => res.json())
            .then(data => {
                // toast("Service added successfully")
            })
            .catch(err => console.error(err))
        console.log(postInfo)
    }
    return (
        <div className='border-b-4 py-5'>
            <section className="px-4 mx-auto">
                <form onSubmit={handelSubmit} className="container flex flex-col mx-auto space-y-5 ng-untouched ng-pristine ng-valid">

                    <fieldset className="rounded-md dark:bg-gray-900">

                        <div className="flex gap-3">
                            <textarea name='postText' placeholder="what's on your mind?" className="w-full border pl-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                            <button type="submit" className="text-white font-bold px-8 py-3 font-semibold bg-blue-400 rounded">Share</button>
                        </div>
                    </fieldset>
                    <input type="file" name="postImg" id="files" className="hidden pr-8 rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />


                </form>
            </section>
        </div>
    );
};

export default MindShare;