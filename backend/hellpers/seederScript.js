require('dotenv').config()


const products = require('./products.json')
const Product = require('../models/product')
const { db } = require('../config/database')

db()

const importData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(products)
        console.log('Import success')
        process.exit()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

importData()