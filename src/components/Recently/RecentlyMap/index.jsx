import React from 'react'
import RecentlyList from '../RecentlyList'

const RecentlyMap = () => {
  return (
    <div>
        {
            Recently.map((item)=>(
                <RecentlyList key={item.title} title={item.title} img={item.img}/>
            ))
        }
      
    </div>
  )
}

export default RecentlyMap;
