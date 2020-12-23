// Import Model
const AgentImmovable = require('../models').AgentImmovable;
const Buyer = require('../models').Buyer;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');




/**
 * 
 * List all agentimmovables
 */
exports.list_agentimmovable = (req, res, next) =>{
    AgentImmovable.findAll({
        attributes: ['id','name','email'],
        include: [
              {
                  model: Buyer,
                  attributes: ['id','firstName', 'lastName', 'address'],
              }
          ]
    })
  .then( result => res.status(200).json(result))
  .catch( err => console.log(err))
}
/**
 * 
 * Detail agentimmovable
 */
exports.detail_agentimmovable = (req, res, next) =>{
  const id = req.params.id;
  AgentImmovable.findByPk(id)
  .then( agentimmovable => res.status(200).json(agentimmovable))
  .catch( err => console.log(err))
}

/**
 * register a agentimmovable
 */
exports.agent_register = (req, res, next) => {
  bcrypt.hash(req.body.pwd, 10, (err, hash) => {
      if(err){
          throw err
      }
  
  let agent = req.body;
  agent.pwd = hash;
  AgentImmovable.create(agent)
  .then( o => res.status(201).json(o))
  .catch( err => console.log(err))
  })
};
/*
*login
*/
exports.agent_login = (req, res, next) =>{
  AgentImmovable.findOne({
      where: {
          email: req.body.email
      }
  })
  .then( agent => {
      if(agent){
          bcrypt.compare(req.body.pwd, agent.pwd, (err, result) => {
              if(err) res.status(500).json(err)
              else{
                  if(result){
                      const token = jwt.sign({ email: agent.email, name: agent.name}, process.env.SECRET_PHRASE, {expiresIn: '24h'})
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
 * Edit a agentimmovable
 */
exports.edit_agentimmovable = (req, res, next) =>{
  const id = req.params.id;
  const agentimmovable = req.body;
  AgentImmovable.update(agentimmovable, {
    where:{
      id: id
    }
  })
  .then( agentimmovableEdited => res.status(201).json({message:`agentimmovable update ${agentimmovableEdited}`}))
  .catch( err => console.log(err))
}

/**
 * Delete a agentimmovable
 */
exports.delete_agentimmovable = (req, res, next) =>{
  const id = req.params.id;
  AgentImmovable.destroy({
    where:{
      id: id
    }
  })
  .then( agentimmovableDeleted => res.status(200).json({message:`agentimmovable Deleted ${agentimmovableDeleted}`}))
  .catch( err => console.log(err))
}