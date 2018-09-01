module.exports = {
  up: (queryInterface) => {
    queryInterface.bulkInsert('role', [
      {
        id: 1,
        name: 'Admin',
        type: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Technician',
        type: 'technician',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: 'Product',
        type: 'product',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        name: 'Contract',
        type: 'contract',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete('Person', null, {})
  },
}
