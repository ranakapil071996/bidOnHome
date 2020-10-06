import React, { useEffect, useState } from 'react'
import SearchBar from '../components/search_bar/SearchBar'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import ProductCard from '../components/product_card/ProductCard'

function ProductList({ products}) {

    const classes = useStyle();
    const [allProducts, setAllProducts] = useState([]) 

    useEffect(() => {
        // eslint-disable-next-line 
        if(products && products.length){
            setAllProducts(products)
        }
        // eslint-disable-next-line 
    }, [products.length]);

    const searchByName = (name, tempProduct = products) => {
        if(name){
            const filteredArray = tempProduct.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase())>=0);
            setAllProducts(filteredArray)
        }else{
            setAllProducts(tempProduct)
        }
    }

    const filter = (key, type) => {
        if(type === "low"){
            const filterArray = products.sort((a, b) => parseFloat(a[key] - parseFloat(b[key])));
            setAllProducts([...filterArray])
        }else{
            const filterArray = products.sort((a, b) => parseFloat(b[key] - parseFloat(a[key])));
            setAllProducts([ ...filterArray])
        }
    }

    return (
        <div>
            <SearchBar filter={filter} allProducts={allProducts} searchByName={searchByName} />
            <div className={classes.content}>
                {allProducts.map((item, index) =>(<div key={index} className={classes.card}> <ProductCard data={item} /></div>))}
            </div>
        </div>
    )
}

const mapStateToprops = ({ product }) => {
    return { 
        products: product.products
    }
}

export default connect(mapStateToprops)(ProductList)

const useStyle = makeStyles(theme => ({
    content: {
        display: "flex",
        padding: "20px 0",
        flexWrap: "wrap"
    },
    card: {
        width: "30%",
        marginRight: "2%",
        marginBottom: "2%"
    }
}))