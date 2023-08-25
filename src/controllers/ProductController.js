const Products = require('../models/Product');

class ProductController {
    static add_product = async (req, res) => {
        const {name, description, price, quantity} = req.body;
        try {
            const product = await Products.create({
                name: name,
                description: description,
                price: price,
                quantity: quantity
            });
            return res.status(201).send(product);
        } catch (error) {
            return res.status(500).send({message: error.message});
        }
    }

    static findAll = async (req, res) => {
        try {
            const products = await Products.findAll();
            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).send({message: error.message});
        }
    }

    static findById = async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Products.findById(id);
            
            if (product !== null) {
                return res.status(200).json(product);
            } else {
                return res.status(500).send({message: "Id not found"});
            }
        } catch (error) {
            return res.status(500).send({message: "Internal server error"});
        }
    }

    static findByName = async (req, res) => {
        const name = req.query.name;
        try {
            const product = await Products.find({ name: name });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static updateProduct = async (req, res) => {
        const id = req.body.id;
        try {
            const product = await Products.findByIdAndUpdate(id);
            return res.status().json({message: 'Produto atualizado: ', product});
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }

    static deleteProduct = async (req, res) => {
        const id = req.params.id;
        try {
            const product = await Products.findByIdAndDelete(id);
            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = ProductController;
