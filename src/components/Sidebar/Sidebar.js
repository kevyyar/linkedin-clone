import { Avatar } from '@material-ui/core'
import React from 'react'
import styles from './Sidebar.module.css'

function Sidebar() {
    // recent item component
    const recentItem = (topic) => (
        <div className={styles.sidebarRecentItem}>
            <span className={styles.sidebarHash}>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarTop}>
                <img src="https://images.unsplash.com/photo-1463438690606-f6778b8c1d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <Avatar className={styles.sidebarAvatar} />
                <h2>Kevin Barreto</h2>
                <h4>kevin.barreto@mail.com</h4>
            </div>
            <div className={styles.sidebarStats}>
                <div className={styles.sidebarStat}>
                    <p>Who viewed you</p>
                    <p className={styles.sidebarStatNumber}>5647</p>
                </div>
                <div className={styles.sidebarStat}>
                    <p>Views on post</p>
                    <p className={styles.sidebarStatNumber}>2647</p>
                </div>
            </div>
            <div className={styles.sidebarBottom}>
                <p>Recent</p>
                {recentItem('react')}
                {recentItem('programming')}
                {recentItem('apis')}
                {recentItem('softwareengineering')}
                {recentItem('softwaredesign')}
                {recentItem('softwaredeveloper')}
            </div>
        </div>
    )
}

export default Sidebar