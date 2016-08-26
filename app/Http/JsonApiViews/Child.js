const JsonApiView = require('adonis-jsonapi/src/JsonApiView');

class Child extends JsonApiView {
  get attributes() {
    return ['name', 'age', 'care_details'];
  }

  profile() {
    return this.belongsTo('App/Http/JsonApiViews/Profile', {
      included: true,
      excludeRelation: 'children'
    });
  }

}

module.exports = Child;
