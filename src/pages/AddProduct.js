import React, { useState } from 'react'
import { TextField, Button, makeStyles } from '@material-ui/core'
import { addProduct } from '../store/actions/ProductAction';
import { connect } from 'react-redux';

function AddProduct({ addProduct, history  }) {

    const classes = useStyle();
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState("")
    const [imgUrl, setImagUrl] = useState("");

    const handleSubmit = e => {
      e.preventDefault();
      addProduct({ name, description, price, quantity, imgUrl});
      history.push("/")
    }

    return (
      <div>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit} className={classes.content} action="">
          <TextField value={name} onChange={e => setName(e.target.value)} className={classes.textField} type="text" label="Name" required />
          <TextField value={description} onChange={e => setDescription(e.target.value)} className={classes.textField} type="text" label="Description" multiline rows="5" />
          <TextField value={price} onChange={e => setPrice(e.target.value)} className={classes.textField} type="number" label="Price" required />
          <TextField value={quantity} onChange={e => setQuantity(e.target.value)} className={classes.textField} type="number" label="Quantity" required />
          <TextField value={imgUrl} onChange={e => setImagUrl(e.target.value)} className={classes.textField} type="text" label="Image url" placeholder="1:1" />
          <Button className={classes.btn} color="primary" variant="contained" type="submit">Submit</Button>
        </form>
      </div>
    );
}

export default connect(null, { addProduct})(AddProduct)

const useStyle = makeStyles(theme => ({
    content: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
    },
    textField: {
        marginBottom: 20,
        width: "100%"
    },
    btn: {
        width: "20%"
    }
}))
