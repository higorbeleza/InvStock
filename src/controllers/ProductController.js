const { Products } = require('../models');

class ProductController {
    static getProducts = async (req, res) => {
        try {
            const data = await Products.find();
            return res.status(200).json(data);
        } catch (error) {
            return res.staus(500).json({message: error.message});
        }
    }

    static getProductById = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Products.findById(id);
            
            console.log(data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(404).json({message: error.message});
        }
    }

    static registerProduct = async (req, res) => {
        try {
            const {name, description, supplier, price, quantity} = req.body;
            const data = await Products.create({name, description, supplier, price, quantity});

            console.log(data);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static updateProduct = async (req, res) => {
        try {
            const id = req.params.id;
            const { name, description, supplier, price, quantity } = req.body;
            const data = await Products.findByIdAndUpdate(id, {
                name, description, supplier, price, quantity
            });

            console.log(data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    static deleteProduct = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Products.findByIdAndDelete(id);

            console.log(data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = ProductController;