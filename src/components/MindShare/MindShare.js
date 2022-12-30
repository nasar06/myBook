import React, { useContext } from 'react';
import { FaRegImages } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import moment from 'moment';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { RiLiveFill} from 'react-icons/ri';
import { ImImages} from 'react-icons/im';
import { FaSmile} from 'react-icons/fa';

const MindShare = () => {

    const { user } = useContext(AuthContext)



    const { register, handleSubmit, reset } = useForm();
    const imageHostKey = process.env.REACT_APP_img_key;

    const postHandler = async (data) => {
        const text = data.ptext;
        const time = moment().format('Do MM YYYY, h:mm:ss a')
        

        // file send to imgBB
        const image = data?.image[0];
        console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });
        const img = await res.json();
        const newImage = img?.data?.url;


        const postInfo = {
            postText: text,
            postImg: newImage,
            userEmail: user?.email,
            userName: user?.displayName,
            userTitle: 'Silver user',
            userImg: user?.photoURL ? user?.photoURL : '',
            time

        }

        reset();
        fetch("https://my-book-server.vercel.app/userPost", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(postInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    // const handelSubmit = e => {
    //     e.preventDefault()

    //     const form = e.target;
    //     const postText = form.postText.value;
    //     const postImg = form.postImg.value;
    //     const time = moment().format('Do MM YYYY, h:mm:ss a')

    //     const postInfo = {
    //         postText,
    //         postImg: postImg ? postImg : '',
    //         userEmail: user?.email,
    //         userName: user?.displayName,
    //         userTitle: 'Silver user',
    //         userImg: user?.photoURL ? user?.photoURL : '',
    //         time

    //     }
    //     form.reset()

    //     fetch('https://my-book-server.vercel.app/userPost', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(postInfo)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             toast.success('successfully added')
    //         })
    //         .catch(err => console.error(err))
    //     console.log(postInfo)
    // }
    return (

        <div>
            <form
                onSubmit={handleSubmit(postHandler)}
                className="my-4 rounded-lg shadow-lg border p-4"
            >
                <div className="flex gap-2 my-2">
                    <img
                        alt=""
                        src={user?.photoURL? user?.photoURL : 'https://www.codewithharry.com/img/user.png'}
                        className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                    />

                    <textarea
                        {...register("ptext", {
                            required: "Write something",
                        })}
                        type="text"
                        placeholder="What's on your mind?"
                        className="w-full border  p-1 rounded-md"
                    />
                    <input
                        type="submit"
                        className="px-4 rounded-md bg-blue-400 hover:bg-blue-500 text-white text-sm"
                        value="Post"
                    />
                </div>
                <hr className="w-11/12 mx-auto my-4" />
                <div className="flex flex-wrap justify-around items-center gap-4 my-2">
                    <div>
                        <label for="file-input" className="flex items-center gap-2">
                            <RiLiveFill className="text-2xl text-red-600" /> Live video
                        </label>
                        <input id="file-input" type="file" className="hidden" />
                    </div>
                    <div>
                        <label for="img" className="flex items-center gap-2">
                            <ImImages className="text-2xl text-green-600" /> Photo/video
                        </label>
                        <input
                            {...register("image")}
                            id="img"
                            type="file"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                    <div>
                        <label for="file-input" className="flex items-center gap-2">
                            <FaSmile className="text-2xl text-orange-400" /> Feelings/activity
                        </label>
                        <input id="file-input" type="file" className="hidden" />
                    </div>
                </div>
            </form>
        </div>
        // <div className='border-b-4 py-5'>
        //     <section className="px-4 mx-auto">
        //         <form onSubmit={handelSubmit} className="container flex flex-col mx-auto space-y-5 ng-untouched ng-pristine ng-valid">

        //             <fieldset className="rounded-md dark:bg-gray-900">

        //                 <div className="flex gap-3">
        //                     <input name='postText' placeholder="what's on your mind?" className="w-full border pl-3 rounded-md dark:border-gray-700 dark:text-gray-900"></input>
        //                     <button type="submit" className="-ml-5 rounded-l-none text-white font-bold px-8 py-3 font-semibold bg-blue-400 rounded">Share</button>
        //                 </div>
        //             </fieldset>
        //             <input type="file" name="postImg" id="files" className="hidden pr-8 rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" />


        //         </form>
        //     </section>
        // </div>
    );
};

export default MindShare;