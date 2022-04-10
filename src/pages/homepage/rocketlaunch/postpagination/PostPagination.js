import React from 'react';
import { Pagination } from 'react-bootstrap';

const PostPagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (
    
            <>
            <Pagination >

                { 
                   pageNumbers.map(number=>(
                    <Pagination.Item onClick={()=>paginate(number)} key={Math.random()}>{number}</Pagination.Item>)
                            
                )}
        </Pagination>
        
            
            </>
    );
};

export default PostPagination;