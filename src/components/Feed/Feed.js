import React, { useState, useEffect } from 'react'
import styles from './Feed.module.css'
import InputOption from './InputOption'
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcons from '@material-ui/icons/EventNote';
import CalendarViewIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../../firebase/firebase'
import firebase from 'firebase'

function Feed() {
    const [posts, setPosts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })))
        })
    }, [])

    // handle input change
    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const handleSendPost = e => {
        e.preventDefault()

        db.collection('posts').add({
            name: 'Kevin',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')
    }

    return (
        <div className={styles.feed}>
            <div className={styles.feedInputContainer}>
                <div className={styles.feedInput}>
                    <CreateIcon />
                    <form onSubmit={handleSendPost}>
                        <input value={input} onChange={handleInputChange} type="text" placeholder="What's happening?" />
                        <button type='submit'>Send</button>
                    </form>
                </div>
                <div className={styles.feedInputOptions}>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
                    <InputOption Icon={SubscriptionIcon} title='Video' color='#e7a33e' />
                    <InputOption Icon={EventNoteIcons} title='Event' color='#c0cbcd' />
                    <InputOption Icon={CalendarViewIcon} title='Write article' color='#7fc15e' />
                </div>
            </div>
            {/* POSTS */}
            {posts.map(({ id, post: { name, description, message, photoUrl } }) => (
                <Post
                    key={id}
                    name={name}
                    message={message}
                    description={description}
                    photoUrl={photoUrl} />
            ))}
            {/* <Post name='Kevin Barreto' description='testing' message='i love react!' photoUrl='' /> */}
        </div>
    )
}

export default Feed