import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserMenu.module.css";
import { getUserName } from "../../redux/auth/auth-selectors";
import avatar from "../UserMenu/avatar.png";
import { logOut } from "../../redux/auth/auth-operations";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const UserMenu = () => {
  const classes = useStyles();
  const name = useSelector(getUserName);
  const dispatch =useDispatch() 

  return (<div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
     <div className={classes.root}>
    <Button variant="contained" color="primary"  onClick={()=>dispatch(logOut())} className={styles.button}>
        Log out
      </Button>
      </div>
  </div>)
  

}

export default UserMenu;