import React from 'react'
import styles from './HeaderOptions.module.css'
import { Avatar } from '@material-ui/core'

function HeaderOptions({ avatar, Icon, title, onClick }) {
    return (
        <div className={styles.headerOption} onClick={onClick}>
            {Icon && <Icon className={`${styles.headerOptionIcon}`} />}
            {avatar && (
                <Avatar className={`${styles.headerOptionAvatar}`} src={avatar} />
            )}
            <h3 className={styles.headerTitle}>{title}</h3>
        </div>
    )
}

export default HeaderOptions