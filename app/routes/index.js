import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('articles');
  },

  actions: {
    update(article, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key,params[key]);
        }
      });
      article.save();
      this.transitionTo('index');
    },

    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('index');
    }
  }
});
