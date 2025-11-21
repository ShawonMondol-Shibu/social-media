import PeopleCard from '@/components/layout/people/PeopleCard'
import React from 'react'

export default function Page() {
  return (
    <div className='container m-auto space-y-4'>

        {
            Array.from({length:20}).map((_,i)=>(
                <PeopleCard key={i}/>
            ))
        }
    </div>
  )
}
