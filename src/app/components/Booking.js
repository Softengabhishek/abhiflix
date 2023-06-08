"use client"
import React from 'react'
import { useState } from 'react'
import styles from "@/app/styles/common.module.css" 

const Booking = (movie) => {
    const [isClicked , setClicked] = useState(false)
    const [isSubmitted , setSubmit] = useState(false)
    const [user , setUser] = useState({
        name : "",
        seats : 0,
        phone : 0,
        email : "",
    })
    const handleBook =()=>{
        setClicked(!isClicked)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setClicked(!isClicked)
        setSubmit(!isSubmitted)
        console.log(user)
        localStorage.setItem("user-info",JSON.stringify(user))
        alert("Your ticket has been booked!")
    }
    const handleChange = (e)=>{
        const name = e.target.name;
        const val =  e.target.value;
        setUser((prevUser)=>({...prevUser, [name]:val}))

    }
  return (
        <>
            <h1>Book your show</h1>{ isClicked==true ?
            <div className={styles.centerMovieDetail}>
            <table>
                <tr>
                    <td>Movie Name :</td>
                    <td>{movie.show.name}</td>
                </tr>
                <tr>
                    <td> Language:</td>
                    <td>{movie.show.language}</td>
                </tr>
                <tr>
                    <td>Rating :</td>
                    <td>{movie.show.rating.average}</td>
                </tr>
                <tr>
                    <td colSpan={2}><hr/></td>
                </tr>
                <tr>
                    <th colSpan={2}><b>Enter your details to book the show</b></th>
                </tr>
                <tr>
                    <td>Enter Name :</td>
                    <td><input type="text" name="name" value={user.name} onChange={handleChange} required/></td>
                </tr>
                <tr>
                    <td>No of seats :</td>
                    <td><input type="number" name="seats" value={user.seats} onChange={handleChange} required/></td>
                </tr>
                <tr>
                    <td>Mobile :</td>
                    <td><input type="phone" name="phone" value={user.phone} onChange={handleChange} required/></td>
                </tr>
                <tr>
                    <td>Email :</td>
                    <td><input type="email" name="email" value={user.email} onChange={handleChange} required/></td>
                </tr>
            </table>
            <button type="submit" className={styles.btn} onClick={handleSubmit} >Sumbit</button>
            </div>
        : <button onClick={handleBook}>Click here</button>}
        </>
  )
}

export default Booking