import React from 'react';
import { useSelector } from 'react-redux';
import UserItem from '../UserItem';
import s from './style.module.css';

export default function UsersBlock() {

    const users = useSelector(state => state.users);
    

  return (
    <div className={s.container}>
        
            <div className={s.inscription}>
                Was unsere Kunden sagen:

            </div>

            <p className={s.commentsContainer}>
            {
              users
              .slice(0, 5)
              .map(item => <UserItem key={item.id} {...item} />)
            }

            
            </p>   
       
            
    </div>
  )
}
