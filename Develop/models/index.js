const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { // Change 'location' to 'Category'
  foreignKey: 'category_id', // Add foreign key
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag, // Specify the through model
  foreignKey: 'product_id',
  otherKey: 'tag_id', // Add otherKey to define the relationship
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag, // Specify the through model
  foreignKey: 'tag_id',
  otherKey: 'product_id', // Add otherKey to define the relationship
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

