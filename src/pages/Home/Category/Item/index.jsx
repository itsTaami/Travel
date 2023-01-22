import { Grid, Typography } from '@mui/material'
import React from 'react'

const Item = (props) => (
    <div>
        <Grid
            sx={{
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "space-between",
                
                color:"white"
            }}
        >
            <img src={props.pic} alt="" srcset="" />
            <Typography sx={{marginTop:"10px"}}>{props.name}</Typography>
        </Grid>

    </div>
)

export default Item;
