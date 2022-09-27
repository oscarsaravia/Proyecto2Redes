import React from 'react'
import Fab from '@mui/material/Fab';
import GavelIcon from '@mui/icons-material/Gavel';
import { farol } from '../../websockets/socket';
import { toast, ToastContainer } from 'react-toastify';
import useSession from '../../hooks/useSession';
import { useEffect } from 'react';

export const Bluff = ({ player, accused, roomId, players }) => {
  const { answer, telltale, owner } = useSession().game

  const bluff = () => {
    console.log('bluff', player.username, accused, roomId, owner)
    if (accused &&  Object.keys(players).includes(player.username) && Object.keys(players).includes(accused)) {
      console.log('1')
      farol(player.username, accused, roomId)
    } else if (accused && !Object.keys(players).includes(player.username)) {
      console.log('2 owner es telltale')
      farol('owner', accused, roomId)
    } else if (accused && !Object.keys(players).includes(accused)) {
      console.log('3')
      farol(player.username, 'owner', roomId)
    } else {
      console.log('4')
      console.log('no se puede bluffear')
    }
    // if (accused &&  Object.keys(players).includes(telltale) && Object.keys(players).includes(accused)) farol(player.username, accused, roomId)
    // else if (accused && telltale === owner ) farol('owner', accused, roomId)
    // else if (accused && accused ==='owner') farol(player.username, 'owner', roomId)
    // else console.log('no hay nadie acusado')
  }

  useEffect(() => {
    if (answer) {
      toast.success(`${telltale} ha pillado a ${accused}! ${accused} se lleva todas las cartas`, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        progress: 5000,
      }) 
    } else {
      toast.error(`${telltale} fallo en acusar a ${accused}! ${telltale} se lleva todas las cartas`, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        progress: 5000,
      })
    }
    // if (telltale === player.username && answer) {
    //   toast.success(`Acertaste! ${accused} se lleva todas las cartas`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: 5000,
    //   });
    // } else if (telltale === player.username && !answer) {
    //   toast.error(`Fallaste! Te llevas todas las cartas`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: 5000,
    //   });
    // } else if (accused === player.username && answer) {
    //   toast.error(`Te han pillado! Te llevas todas las cartas`, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: 5000,
    //   });
    // } else if (accused === player.username && !answer) {
    //   toast.success(`Te intentaron `, {

  }, [answer, telltale])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    {/* Same as */}
    <ToastContainer />
      <Fab onClick={bluff} variant="extended" size="medium" color="primary" aria-label="add">
        <GavelIcon />
      </Fab>
    </>
  )
}
