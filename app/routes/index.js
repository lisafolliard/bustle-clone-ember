import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('articles');
  },

  actions: {
    destroyArticle(article) {
      article.destroyRecord();
      this.transitionTo('index');
    }
  }
});
