import React from 'react'
import { useDispatch } from 'react-redux'
// components
import HeaderOptions from './HeaderOptions'
// styles
import styles from './Header.module.css'
// icons
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { auth } from '../../firebase/firebase'
import { logout } from '../../features/user/userSlice'

function Header() {
  const dispatch = useDispatch()

  const logOutOfApp = () => {
    dispatch(logout())
    auth.signOut()
  }
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className={styles.search}>
          <SearchIcon />
          <input type="search" placeholder='Search' />
        </div>
      </div>
      <div className={styles.headerRight}>
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOptions Icon={ChatIcon} title='Messaging' />
        <HeaderOptions Icon={NotificationsIcon} title='Notifications' />
        <HeaderOptions onClick={logOutOfApp} avatar='https://scontent.fgdl5-3.fna.fbcdn.net/v/t39.30808-6/274025733_10228566579738301_6559627769604607550_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-0-vX66OQtQAX_6uHBe&_nc_ht=scontent.fgdl5-3.fna&oh=00_AT8e6o614UHY4SuuY4GgNzjBAeSHBHe31HAcVcC9ykd_GA&oe=6246E225' />
      </div>
    </div>
  )
}

export default Header