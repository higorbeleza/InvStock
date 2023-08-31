const { Transactions, Products } = require('../models');

class TransactionsController {
    static getTransactions = async (req, res) => {
        try {
            const data = await Transactions.find();
            return res.status().json(data);
        } catch (error) {
            return res.status().json({message: error.message});
        }
    }

    static registrarSaida = async (req, res) => {
        try {
            const id = req.params.id;
            const { type, quantity } = req.body;

            const product = await Products.findById(id);

            if(product.quantity < quantity) {
                return res.status(400).json({message: `insufficient stock: ${product.quantity}`})
            }

            if(quantity === 0) {
                return res.status(400).json({message: 'enter a valid number!'})
            }

            product.quantity -= quantity;
            await product.save();

            const data = await Transactions.create({
                idProduct: id,
                type,
                quantity
            });

            return res.status(201).json(data);
        } catch (error) {
            return res.status().json({message: error.message});
        }
    }

    static registrarEntrada = async (req, res) => {
        try {
            const id = req.params.id;
            const { type, quantity } = req.body;
            const product = await Products.findById(id);

            product.quantity += quantity;
            await product.save();

            const data = await Transactions.create({idProduct: id, type, quantity})

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message})
        }
    }
}

module.exports = TransactionsController;