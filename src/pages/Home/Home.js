import React from 'react';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import MindShare from '../../components/MindShare/MindShare';
import PopulerPost from '../../components/PopulerPost/PopulerPost';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const Home = () => {
    return (
        <div>
            <div className='md:flex gap-8 justify-between'>
                {/* left sidebar */}
                <div className='md:w-1/4  h-96 bg-white md:block hidden '>
                    <LeftSideBar></LeftSideBar>
                </div>

                {/* middle */}
                <div className='md:w-2/4 bg-white'>
                    <MindShare></MindShare>
                    <PopulerPost></PopulerPost>
                </div>

                {/* right sidebar */}
                <div className='md:w-1/4 bg-white hidden md:block'>
                    <RightSideBar></RightSideBar>
                </div>

            </div>
        </div>
    );
};

export default Home;