import React from 'react'
import InputOption from './InputOption'
import styles from './Post.module.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlineIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Post({ name, description, message, photoUrl }) {

    return (
        <div className={styles.post}>
            <div className={styles.postHeader}>
                <Avatar />
                <div className={styles.postInfo}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className={styles.postBody}>
                <p>{message}</p>
            </div>
            <div className={styles.buttons}>
                <InputOption Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
                <InputOption Icon={ChatOutlineIcon} title='Comment' color='gray' />
                <InputOption Icon={ShareOutlinedIcon} title='Share' color='gray' />
                <InputOption Icon={SendOutlinedIcon} title='Send' color='gray' />
            </div>
        </div>
    )
}

export default Post