import React from 'react';
import { useQuery } from 'react-query';
import Card from '../Card/Card';

const PopulerPost = () => {
    const {data: allPost = [],} = useQuery({
        queryKey: ['userPost'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/userPost')
            const data = res.json()
            return data
            
        }
    })
    

    return (
        <div className='my-5'>
            {/* <h2 className='mt-24 text-3xl text-gray-600 font-bold text-center mb-16'>Popular Posts</h2> */}
            <div className='w-11/12 mx-auto flex gap-y-12 flex-col items-center'>
                {
                    allPost?.map(post => <Card
                        post={post}
                    ></Card>)
                }
                
            </div>
        </div>

    );
};

export default PopulerPost;