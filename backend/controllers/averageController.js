const db = require('mongoose');

const Order = require('../models/order');

exports.getOrderValue = (req, res) => {
    
    Order
        .find()
        .exec()
        .then(orders => {
            const total = orders.reduce((prev, curr) => {
                curr.orderValue
                return prev + curr.orderValue;
            }, 0)
            
            const average = total / orders.length;
            console.log("Inifrån averageController: ", average)
            return res.status(200).json({ average: average.toFixed(2) })
        })                  
        
        .catch(err => res.status(500).json({ error:err }));
};