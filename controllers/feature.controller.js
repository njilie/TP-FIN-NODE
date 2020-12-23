// Import Model
const Feature = require('../models').Feature;




/**
 * 
 * List all features
 */
exports.list_feature = (req, res, next) =>{
    Feature.findAll({})
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail feature
 */
exports.detail_feature = (req, res, next) =>{
  const id = req.params.id;
  Feature.findByPk(id)
  .then( feature => res.status(200).json(feature))
  .catch( err => console.log(err))
}

/**
 * Add a feature
 */
exports.add_feature = (req, res, next) =>{
  const feature = req.body;
  Feature.create(feature)
  .then( featureCreated => res.status(201).json(featureCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a feature
 */
exports.edit_feature = (req, res, next) =>{
  const id = req.params.id;
  const feature = req.body;
  Feature.update(feature, {
    where:{
      id: id
    }
  })
  .then( featureEdited => res.status(201).json({message:`feature update ${featureEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a feature
 */
exports.delete_feature = (req, res, next) =>{
  const id = req.params.id;
  Feature.destroy({
    where:{
      id: id
    }
  })
  .then( featureDeleted => res.status(200).json({message:`feature Deleted ${featureDeleted}`}))
  .catch( err => console.log(err))
}