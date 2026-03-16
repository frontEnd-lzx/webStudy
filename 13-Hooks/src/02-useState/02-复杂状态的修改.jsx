import React, { useState } from 'react'

import { Button } from 'antd';

export default function ComplexHookState() {

  const [friends, setFriends] = useState(['xiaoming', 'xiaohong'])
  const [students, setStudents] = useState([
    { id: 110, name: 'why', age: 18 },
    { id: 111, name: 'xiaoming', age: 30 },
    { id: 112, name: 'xiaohong', age: 25 },
  ])

  function addFriend() {
    friends.push('hmm')
    setFriends(friends)
  }

  function incrementAgeWithIndex(index) {
    const newStudents = [...students]
    newStudents[index].age += 1
    setStudents(newStudents)
  }

  function onAddFriend(){
    setFriends([...friends, 'lzx'])
  }

  return (
    <div className='m-10'>
      <h2 className='font-bold mb-4'>好友列表:</h2>
      <ul >
        {
          friends.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
      <Button className='mr-4' type="primary" onClick={() => onAddFriend()}>添加朋友</Button>
      {/* 错误的做法 */}
      <Button type="primary" onClick={() => addFriend()}>添加朋友</Button>

      <h2 className='font-bold mb-4 mt-4'>学生列表</h2>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id} className='mb-4'>
                <span className='mr-4'>名字: {item.name} 年龄: {item.age}</span>
                <Button type="primary" onClick={() => incrementAgeWithIndex(index)}>age+1</Button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

