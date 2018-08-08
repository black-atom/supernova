const Sequelize = require('sequelize')
const database = require('../../database')

const { or } = Sequelize.Op

const {
  user: User,
} = database.models

const isUserAlreadyRegistered = ({ email, document_id: documentId }) => User.findAll({
  where: {
    [or]: [
      { email },
      { document_id: documentId },
    ],
  },
})

const createUser = async (user, shouldNotify, options = {}) => {
  const {
    transaction,
  } = options

  const users = await isUserAlreadyRegistered(user)
  if (users.length > 0) {
    throw new Error('User Already Registed')
  }

  return User.create(user, { transaction })
}

module.exports = createUser
