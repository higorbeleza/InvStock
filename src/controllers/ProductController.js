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

    static findByName = async (req, res) => {
        const name = req.body.name;
        try {
            const product = await Products.find({ name: name });
            return res.status(200).json(product);
        } catch (error) {
            return res.status(400).json({message: error.message});
        }
    }
}

module.exports = ProductController;
