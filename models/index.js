const User = require('./User');
const Post = require('./Post');
const Like = require('./Like');

User.hasMany(Post, {
    foreignKey: 'author_id'
});

Post.belongsTo(User, {
    foreignKey: 'author_id'
});

Like.belongsTo(User, {
    foreignKey: 'user_id'
});

Like.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Like, {
    foreignKey: 'user_id'
});

Post.hasMany(Like, {
    foreignKey: 'post_id'
});

module.exports = { Post, User, Like };