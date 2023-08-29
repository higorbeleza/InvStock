const { Suppliers } = require('../models');

class SuppliersController {
    /**
     * Pega todos os fornecedores cadastrados
     */ 
    static getSuppliers = async (req, res) => {
        try {
            const data = await Suppliers.find();
            console.log(data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});   
        }
    }

    /**
     * Pega um fornecedor pelo ID 
     */
    static getSupplierById = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Suppliers.findById(id);

            console.log(data);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    /**
     * Registra um novo fornecedor no banco de dados 
     */
    static registerSupplier = async (req, res) => {
        try {
            const { name, contactInfo } = req.body;
            const data = await Suppliers.create({name, contactInfo});

            console.log(data);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    /**
     * Atualiza um fornecedor pelo id 
     */
    static updateSupplier = async (req, res) => {
        try {
            const id = req.params.id;
            const {name, contactInfo} = req.body;
            const data = await Suppliers.findByIdAndUpdate(id, {
                name, contactInfo
            });

            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }

    /**
     * Deleta um fornecedor pelo id 
     */
    static deleteSupplier = async (req, res) => {
        try {
            const id = req.params.id;
            const data = await Suppliers.findByIdAndDelete(id);

            return res.status(200).json({message: 'Deleted!'});
        } catch (error) {
            return res.status(500).json({message: error.message});
        }
    }
}

module.exports = SuppliersController;