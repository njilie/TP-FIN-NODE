// Import Model
const SaleStatus = require('../models').SaleStatus;




/**
 * 
 * List all salestatuss
 */
exports.list_salestatus = (req, res, next) =>{
    SaleStatus.findAll({})
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail salestatus
 */
exports.detail_salestatus = (req, res, next) =>{
  const id = req.params.id;
  SaleStatus.findByPk(id)
  .then( salestatus => res.status(200).json(salestatus))
  .catch( err => console.log(err))
}

/**
 * Add a salestatus
 */
exports.add_salestatus = (req, res, next) =>{
  const salestatus = req.body;
  SaleStatus.create(salestatus)
  .then( salestatusCreated => res.status(201).json(salestatusCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a salestatus
 */
exports.edit_salestatus = (req, res, next) =>{
  const id = req.params.id;
  const salestatus = req.body;
  SaleStatus.update(salestatus, {
    where:{
      id: id
    }
  })
  .then( salestatusEdited => res.status(201).json({message:`salestatus update ${salestatusEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a salestatus
 */
exports.delete_salestatus = (req, res, next) =>{
  const id = req.params.id;
  SaleStatus.destroy({
    where:{
      id: id
    }
  })
  .then( salestatusDeleted => res.status(200).json({message:`salestatus Deleted ${salestatusDeleted}`}))
  .catch( err => console.log(err))
}