// Import Model
const Ad = require('../models').Ad;
const Keyword = require('../models').Keyword;
const AdKeyword = require('../models').AdKeyword;
const SaleStatus = require('../models').SaleStatus;
const GoodImmovable = require('../models').GoodImmovable;
const AgentImmovable = require('../models').AgentImmovable;



/**
 * 
 * List all ads
 */
exports.list_ad = (req, res, next) =>{
    Ad.findAll({
        include: [
            {
                model: AgentImmovable,
                attributes: ['id','name','address'],
            }
        ],
        include: [
            {
                model: GoodImmovable,
                attributes: ['id','name','address'],
            }
        ],
        include: [
            {
                model: SaleStatus,
                attributes: ['id','name']
            }
        ],
        
        include: [
              {
                  model: Keyword,
                  attributes: ['id','name'],
                  through: {
                    model: AdKeyword,
                    attributes: []
                  }
              }
          ]
    })
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail ad
 */
exports.detail_ad = (req, res, next) =>{
  const id = req.params.id;
  Ad.findByPk(id)
  .then( ad => res.status(200).json(ad))
  .catch( err => console.log(err))
}

/**
 * Add a ad
 */
exports.add_ad = (req, res, next) =>{
  const ad = req.body;
  Ad.create(ad)
  .then( adCreated => 
    {
        if(ad.Keywords != undefined && ad.Keywords.length > 0) {
            adCreated.setKeywords(ad.Keywords)
            .then(() => res.status(201).json(adCreated))
            .catch( err => console.log(err))
          }
          else{
            res.status(201).json(adCreated)
          }
    })
  .catch( err => console.log(err))
}

/**
 * Edit a ad
 */
exports.edit_ad = (req, res, next) =>{
  const id = req.params.id;
  const ad = req.body;
  Ad.update(ad, {
    where:{
      id: id
    }
  })
  .then( adEdited => res.status(201).json({message:`ad update ${adEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a ad
 */
exports.delete_ad = (req, res, next) =>{
  const id = req.params.id;
  Ad.destroy({
    where:{
      id: id
    }
  })
  .then( adDeleted => res.status(200).json({message:`ad Deleted ${adDeleted}`}))
  .catch( err => console.log(err))
}