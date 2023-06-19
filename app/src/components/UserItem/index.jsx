import React from 'react';
import s from './style.module.css';

export default function UserItem({id, body, user }) {
  return (
    <div >
        <div className={s.card}>
            <h3>{user.username}</h3>
            <div className={s.comment}>
                {body}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellat quod quo fugiat ab voluptatum est distinctio impedit obcaecati ducimus id ad, soluta, delectus nostrum facilis commodi. Eveniet, a enim?
            </div>
        </div>
        
        
        
    </div>
  )
}
