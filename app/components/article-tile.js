import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article) {
      if(confirm('You sure you want to delete?')) {
        this.sendAction('destroyArticle', article);
      }
    }
  }
});
