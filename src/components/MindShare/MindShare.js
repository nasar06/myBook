import React from 'react';
import { FaRegImages } from 'react-icons/fa';

const MindShare = () => {
    return (
        <div className='border-b-4 py-5'>
            <section className="px-4 mx-auto">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-5 ng-untouched ng-pristine ng-valid">

                    <fieldset className="rounded-md dark:bg-gray-900">

                        <div className="flex gap-3">
                            <textarea placeholder="what's on your mind?" className="w-full border pl-3 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
                            <button type="button" className="text-white font-bold px-8 py-3 font-semibold bg-blue-400 rounded">Share</button>
                        </div>
                    </fieldset>
                    {/* <input type="file" name="files" id="files" className="pr-8 rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800" /> */}



                </form>
            </section>
        </div>
    );
};

export default MindShare;