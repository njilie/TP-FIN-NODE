// Import Model
const GoodImmovable = require('../models').GoodImmovable;
const Keyword = require('../models').Keyword;
const Feature = require('../models').Feature;



/**
 * 
 * List all goodimmovables
 */
exports.list_goodimmovable = (req, res, next) =>{
    GoodImmovable.findAll({
        attributes: ['id','name','address'],
        include: [
              {
                  model: Keyword,
                  attributes: ['id','name'],
              }
          ],
          include: [
            {
                model: Feature,
                attributes: ['id','name'],
            }
        ],

    })
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail goodimmovable
 */
exports.detail_goodimmovable = (req, res, next) =>{
  const id = req.params.id;
  GoodImmovable.findByPk(id)
  .then( goodimmovable => res.status(200).json(goodimmovable))
  .catch( err => console.log(err))
}

/**
 * Add a goodimmovable
 */
exports.add_goodimmovable = (req, res, next) =>{
  const goodimmovable = req.body;
  GoodImmovable.create(goodimmovable)
  .then( goodimmovableCreated => res.status(201).json(goodimmovableCreated))
  .catch( err => console.log(err))
}

/**
 * Edit a goodimmovable
 */
exports.edit_goodimmovable = (req, res, next) =>{
  const id = req.params.id;
  const goodimmovable = req.body;
  GoodImmovable.update(goodimmovable, {
    where:{
      id: id
    }
  })
  .then( goodimmovableEdited => res.status(201).json({message:`goodimmovable update ${goodimmovableEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a goodimmovable
 */
exports.delete_goodimmovable = (req, res, next) =>{
  const id = req.params.id;
  GoodImmovable.destroy({
    where:{
      id: id
    }
  })
  .then( goodimmovableDeleted => res.status(200).json({message:`goodimmovable Deleted ${goodimmovableDeleted}`}))
  .catch( err => console.log(err))
}