const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
// Assuming you have imported your models and set up your router and Sequelize appropriately

// Get all tags, including associated Product data
router.get('/', async (req, res) => {
  try {
    // Find all tags 
    const tags = await Tag.findAll({
      include: [
        { model: Product }, // Include associated product data
      ],
    });

    res.status(200).json(tags);
  } catch (err) {
  
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const locationData = await Tag.findByPk(req.params.id, {
      include: [
        { model: Product }, // Include associated product data
      ],
    });

    if(locationData) {
      res.status(404).json({ message: 'Id not found '});
      return;
    }
    res.status(404).json({locationData});
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const locationData = await Tag.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const 
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
