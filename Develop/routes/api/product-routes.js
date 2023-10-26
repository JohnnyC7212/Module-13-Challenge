const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// Assuming you have imported your models and set up your router and Sequelize appropriately

// Get all products
router.get('/', async (req, res) => {
  Product.findAll({
    include: [Product], 
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err));
});


// get one product
router.get('/:id', async (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((category) => res.json(category))
  .catch((err) => res.status(400).json(err));
});

// create new product
router.post('/', async (req, res) => {
  Product.create(req.body, {
    where: {
      id: req.params.id, 
    },
    include: [Product],
  })
  .then((category) => res.json(category))
  .catch((err) => res.json(400).json(err));
});

// Update product by ID
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
    include: [Category],
  })
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json(err));
});

// Delete product by ID
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      res.json({ message: 'Product deleted' });
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
