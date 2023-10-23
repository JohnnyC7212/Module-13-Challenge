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
        { model: Product }, // Include associated Product data
      ],
    });

    res.status(200).json(tags);
  } catch (err) {
  
    res.status(500).json(err);
  }
});


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
