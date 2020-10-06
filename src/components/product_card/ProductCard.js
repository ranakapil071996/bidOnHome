import React from 'react'
import { withStyles } from '@material-ui/core'
import { Style } from './Style'

function ProductCard({ classes, data }) {
    return (
        <div className={classes.container}>
            <img className={classes.productImg} src={data.imgUrl} alt={data.name}/>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: 10}}>
                <div>
            <h3 className={classes.name}>{data.name}</h3>
            <p title={data.description} className={classes.description}><i>{data.description}</i></p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <span style={{ color: "#a7a7a7", fontSize: 11}}>Quantity: {data.quantity}</span>
            <p><b>₹{data.price}</b></p>
                </div>
            </div>
        </div>
    )
}

export default withStyles(Style)(ProductCard)
