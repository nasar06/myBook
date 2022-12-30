import React from 'react';
import { useQuery } from 'react-query';
import Card from '../../components/Card/Card';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

const Media = () => {

    const { data: allPost = [] } = useQuery({
        queryKey: ['userPost'],
        queryFn: async () => {
            const res = await fetch('https://my-book-server.vercel.app/userPost')
            const data = res.json()
            return data
        }
    })

    return (
        <div>
            <div className='md:flex gap-8 justify-between'>
                {/* left sidebar */}
                <div className='md:w-1/4  h-96 bg-white md:block hidden '>
                    <LeftSideBar></LeftSideBar>
                </div>

                {/* middle */}
                <div className='md:w-2/4 bg-white'>
                    <div className='my-5 w-11/12 mx-auto flex gap-y-12 flex-col items-center'>
                        {
                            allPost?.map(post => <Card
                                post={post}
                            ></Card>)
                        }

                    </div>
                </div>

                {/* right sidebar */}
                <div className='md:w-1/4 h-64 bg-white hidden md:block'>
                    <RightSideBar></RightSideBar>
                </div>

            </div>
        </div>
    );
};

export default Media;