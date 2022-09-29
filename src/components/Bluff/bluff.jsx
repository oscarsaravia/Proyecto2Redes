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
    if (accused &&  Object.keys(players).includes(player.username) && Object.keys(players).includes(accused)) {

      farol(player.username, accused, roomId)
    } else if (accused && !Object.keys(players).includes(player.username)) {

      farol('owner', accused, roomId)
    } else if (accused && !Object.keys(players).includes(accused)) {

      farol(player.username, 'owner', roomId)
    } else {
      toast.error('No se puede bluffear', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    // if (accused &&  Object.keys(players).includes(telltale) && Object.keys(players).includes(accused)) farol(player.username, accused, roomId)
    // else if (accused && telltale === owner ) farol('owner', accused, roomId)
    // else if (accused && accused ==='owner') farol(player.username, 'owner', roomId)
    // else console.log('no hay nadie acusado')
  }

  useEffect(() => {
    if (answer) {
      toast.success(`${telltale==="owner"? players["owner"].username:telltale} ha pillado a ${accused==="owner"?
      players["owner"].username:accused}! ${accused==="owner"? players["owner"].username:accused} se lleva todas las cartas`, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        progress: 5000,
      })
    } else if (answer === false) {
      toast.error(`${telltale==="owner"? players["owner"].username:telltale} fallo en acusar a ${accused==="owner"?
      players["owner"].username:accused}! ${telltale==="owner"? players["owner"].username:telltale} se lleva todas las cartas`, {
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
    {/* Same as */}
    <ToastContainer />
      <Fab onClick={bluff} variant="extended" size="medium" color="primary" aria-label="add">
        <GavelIcon />
      </Fab>
    </>
  )
}
