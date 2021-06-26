const User = require('./User');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'author_id'
});

Post.belongsTo(User, {
    foreignKey: 'author_id'
});

module.exports = { Post, User };