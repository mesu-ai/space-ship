import React from 'react';
import { Pagination } from 'react-bootstrap';
import './PostPagination.css';

const PostPagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    return (
    
            <>
            <Pagination className='d-flex flex-sm-row flex-column flex-warp'>

                { 
                   pageNumbers.map(number=>(
                    <Pagination.Item  onClick={()=>paginate(number)} key={Math.random()}>{number}</Pagination.Item>

                    )
                            
                )}
                
        </Pagination>
        
            
            </>
    );
};

export default PostPagination;