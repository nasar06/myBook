import React, { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { RxHeartFilled } from 'react-icons/rx';

const Card = ({post}) => {

    const {postText,postImg,userEmail,userName,userTitle,userImg, _id, love} = post
    const [heart, setHeart] = useState('text-gray-400')

    const handelLove = id=>{
        console.log('clicked',id)
        fetch(`http://localhost:5000/love/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(result =>{
            setHeart('text-red-500')
            toast.success('Post is Liked')
        })
        .catch(err=> console.error(err))
    }

    return (
        <div className="w-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                {/* profile */}
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={userImg? userImg: 'https://www.codewithharry.com/img/user.png'} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">{userName}</h2>
                            <span className="inline-block text-xs leading-none dark:text-gray-400">{userTitle}</span>
                        </div>
                    </div>
                    <button title="Open options" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                            <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                            <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                        </svg>
                    </button>
                </div>

                {/* img */}
                {
                    postImg && <img src="https://source.unsplash.com/301x301/?random" alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                }
                
                <div className="p-3">
                    {/* Post */}
                    <div className="space-y-3 mb-4">
                        <p className="text-sm">
                            <span className="text-base">{postText}</span>
                        </p>
                    </div>

                    {/* love comment and share */}
                    <div className="flex items-center justify-between py-3">
                        <div className="flex items-center space-x-3">
                            <button onClick={()=>handelLove(_id)} type="button" title="Like post" className="flex items-center justify-center">
                                
                                <RxHeartFilled className={`text-2xl ${love?'text-red-500':heart}`}  />
                                
                            </button>
                            <button type="button" title="Add a comment" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Share post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                </svg>
                            </button>
                        </div>
                        <Link to={`/details/${_id}`} type="button" title="Details" className="flex items-center justify-center">
                                <AiOutlineArrowRight />
                            </Link>
                    </div>
                    {/* add comment */}
                    <div className='flex'>
                        <input type="text" placeholder="Add a comment..." className="py-1 w-full py-0.5 dark:bg-transparent border-none rounded text-sm pl-0 dark:text-gray-100" />
                        <button className='bg-blue-400 py-1 text-white px-2 rounded'>Comment</button>
                    </div>

                </div>
            </div>
    );
};

export default Card;