import React from 'react';
import { Pagination } from 'react-bootstrap';

const PostPagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers=[];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }

    // let n;
    // for (const pNum of pageNumbers) {
    //     n=pNum;
        
    // }
    return (
    
            <>
            <Pagination >
                {/* <Pagination.Prev onClick={()=>paginate(n-1)}/> */}

                { 
                   pageNumbers.map(number=>(
                    <Pagination.Item onClick={()=>paginate(number)} key={Math.random()}>{number}</Pagination.Item>)
                            
                )}
            {/* <Pagination.Next onClick={()=>paginate(n+1)}/> */}
        </Pagination>
        
            
            </>
    );
};

export default PostPagination;