import React from 'react'

const Feed = (props) => {
  return (
    <div>{
        props.post.map((data)=>{
            return(
                <div>
                    {data.description}
                </div>
            )
        })
        }</div>
  )
}

export default Feed