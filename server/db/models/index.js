const User = require('./user')
const Album = require('./album')
const Artist = require('./artist')
const Song = require('./song')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

Song.belongsTo(Album)
Album.hasMany(Song)

Song.belongsTo(Artist)
Artist.hasMany(Song)

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = {
  User,
  Album,
  Artist,
  Song
}
