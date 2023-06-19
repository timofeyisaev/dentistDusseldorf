import React from 'react';
import FirstBlock from '../../components/FirstBlock';
import SecondBlock from '../../components/SecondBlock';
import UsersBlock from '../../components/UsersBlock';
import ThirdBlock from '../../components/ThirdBlock';

export default function MainPage() {
  return (
    <div>
         <FirstBlock />
         <SecondBlock />
         <ThirdBlock />
         <UsersBlock />         
    </div>
  )
}
