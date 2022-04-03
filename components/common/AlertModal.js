import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    title:{
        fontSize:'20px'
    }
})


const AlertModal = (props) => {
    const { showModal, onClose, msg, title, buttons, handleModalBtns } = props
    const classes = useStyles()
    return (
        <Dialog
            open={showModal}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
           
        >
            <DialogTitle  classes={{root:classes.title}} id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                {
                    buttons.map((btn, index) => (
                        <Button key={index} onClick={() => handleModalBtns(btn.action)} color="primary">
                            {btn.name}
                        </Button>
                    ))
                }
                {/* <Button onClick={() => this.handleModalBtns('keepBrowsing')} color="primary">
                Keep browsing
            </Button>
            <Button onClick={() => this.handleModalBtns('')} color="primary">
                Go To Cart
            </Button> */}
            </DialogActions>
        </Dialog>
    );
}

export default AlertModal;