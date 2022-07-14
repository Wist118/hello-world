import React from 'react';
import Card from '../components/Card';
import { QUERY_USER } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import defaultPic from '../assets/orange-pug-256.png'


const Profile = () => {

  const { data } = useQuery(QUERY_USER, {  variables: { email: Auth.getUserEmail() }});

  const userData = data;
  console.log(userData);




  return (
    <>
    {userData && (
  
  
    <main className="sm:grid sm:grid-cols-2 h-full lg:grid-cols-3 mx-4 md:mt-8 text-lg lg:mt-56">
    {/*md break column 1 */}
    <div className="pt-1 sm:px-2 rounded-lg w-sm lg:max-w-sm">
      <h2 className='font-semibold text-xl'>Friends</h2>
      <h3 className='font-normal mb-1 text-lg'>5 friends</h3>
        <div className='grid grid-cols-4 gap-1 w-sm mb-5 rounded-2xl' id='friends'>
          {userData.user.friends.length > 0 ? userData.user.friends.map(friend => {
            return <a href='/'><img src={friend.profilePicURL ? friend.profilePicURL : defaultPic} alt={friend.diplayName} className='h-20 p-1'/></a>
          }) : <div>Make some friends!!</div>}
        </div>
      <div className='hidden sm:contents'>
      <h2 className='font-semibold text-xl mb-1 pt-2'>Message Center</h2>
        <div className='flex flex-col justify-center text-lg md:text-xl tracking-wide font-semibold'>
        {userData.user.friends.length > 0 ? userData.user.friends.map(friend => {
          return <a href='/' className='flex flex-row items-center mb-1 rounded-r-2xl' id='friends'>
            <img src={friend.profilePicURL ? friend.profilePicURL : defaultPic} alt={friend.diplayName} className='h-20 p-1'/>
            <div className='w-full text-center'>{friend.diplayName}</div>
          </a>
        }) : <div>You have no friends to message 😭</div>}
        </div>
      </div>
    </div>
    {/*md break column 2 */}
    <div className="pt-1 sm:px-2 rounded-lg min-w-md">
      <div className='flex flex-col justify-between'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  </main>

    )}
    </>
  );
}

export default Profile;