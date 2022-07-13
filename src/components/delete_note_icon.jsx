import React, {useState} from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { Alert } from "@mui/material";
import Collapse from '@mui/material/Collapse';


export default function DeleteNoteIcon(props) {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [collapse, setCollapse]= useState(true);
    function onClickEvent(){
            axios.delete("http://127.0.0.1:5000/note", {
                data: {
                    "user_id": "usertest33",
                    "note_id": props.note_id
                }
            }).then((resp)=>{
                console.log(resp)
                setSuccess(true)
            }).catch((err)=>{
                setError(true)
                console.log(err)
            });
    }
  return (
    <div className='delete-icon'>
     {error ? 
    <Collapse in={collapse}>
    <Alert onClose={() => {setCollapse(false)}} severity="error">An error has occurred</Alert>
    </Collapse>: false}
    {success ? <Collapse in={collapse}>
    <Alert onClose={() => {setCollapse(false)}} severity="success">Note deleted successfully</Alert>
    </Collapse>: false}
    <IconButton>
        <DeleteForeverIcon onClick={onClickEvent}/>
    </IconButton>
    </div>
  )
}