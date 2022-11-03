import { Link } from 'react-router-dom'
import { Image, Stack } from '@chakra-ui/react'
import React, { useState } from 'react';
import Modal from '../../Components/Shared/Pop-up/Modal';
import BookClubData from './BookClubData';
import './BookClubs.css'


function BookClubs() {
  const [openModal, setOpenModal] = useState(false);

  return (
    
    <div>
      <ul>

      {BookClubData.map((item) => {
        return(
          <Stack direction='row' spacing={4} className= "homepage-books" key={item.id}>
                <li className='block' key={item.id}>         
            <Image className='bookClubImg' src='gibbresh.png' fallbackSrc='https://via.placeholder.com/150' onClick={() => setOpenModal(true)} /><Modal open={openModal} onClose={() => setOpenModal(false)} />
    
            <button onClick={() => setOpenModal(true)} className='modalButton'>Klübü İncele</button>
            </li>
          </Stack>
        )
      })}

      </ul>   
      <Modal open={openModal} onClose={() => setOpenModal(false)} />   
    </div>
  )
}

export default BookClubs