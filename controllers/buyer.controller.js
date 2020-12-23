// Import Model
const Buyer = require('../models').Buyer;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




/**
 * 
 * List all buyers
 */
exports.list_buyer = (req, res, next) =>{
    Buyer.findAll({})
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail buyer
 */
exports.detail_buyer = (req, res, next) =>{
  const id = req.params.id;
  Buyer.findByPk(id)
  .then( buyer => res.status(200).json(buyer))
  .catch( err => console.log(err))
}

/**
 * Add a buyer
 */
/**
 * register pour acheter un bien
 */
exports.buyer_register = (req, res, next) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
      if(err){
          throw err
      }
  
  let buyer = req.body;
  buyer.pwd = hash;
  Buyer.create(buyer)
  .then( o => res.status(201).json(o))
  .catch( err => console.log(err))
  })
};

/*
*login
*/
exports.buyer_login = (req, res, next) =>{
  Buyer.findOne({
      where: {
          email: req.body.email
      }
  })
  .then( buyer => {
      if(buyer){
          bcrypt.compare(req.body.pwd, buyer.pwd, (err, result) => {
              if(err) res.status(500).json(err)
              else{
                  if(result){
                      const token = jwt.sign({ email: buyer.email, name: buyer.lastName}, process.env.SECRET_PHRASE, {expiresIn: '24h'})
                      res.status(200).json({token: token});
                  }
                  else{
                      res.status(500).json({message: 'You fail'})
                  }
              }
          })

      }else{
          res.status(404).json({message: 'Bad login /pwd'})
      }
  })
  .catch( err => res.status(500).json(err))
}
/**
 * Edit a buyer
 */
exports.edit_buyer = (req, res, next) =>{
  const id = req.params.id;
  const buyer = req.body;
  Buyer.update(buyer, {
    where:{
      id: id
    }
  })
  .then( buyerEdited => res.status(201).json({message:`buyer update ${buyerEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a buyer
 */
exports.delete_buyer = (req, res, next) =>{
  const id = req.params.id;
  Buyer.destroy({
    where:{
      id: id
    }
  })
  .then( buyerDeleted => res.status(200).json({message:`buyer Deleted ${buyerDeleted}`}))
  .catch( err => console.log(err))
}
