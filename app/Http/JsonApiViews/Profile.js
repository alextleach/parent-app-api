const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Profile extends JsonApiView {
  get attributes() {
    return [
      'is_parent',
      'user_pic_url',
      'first_name',
      'last_name',
      'user_blurb',
      'location',
      'is_liked',
      'sitter_rate',
      'looking_for',
      'phone_number',
      'user_about',
      'number_is_secret',
      'is_connected',
      'child_is_unlocked',
    ];
  }

  user() {
    return this.belongsTo('App/Http/JsonApiViews/User', {
      included: true,
      excludeRelation: 'profile',
    });
  }

  children() {
    return this.hasMany('App/Http/JsonApiViews/Child', {
      included: true,
      excludeRelation: 'profile',
    });
  }
}

module.exports = Profile;
