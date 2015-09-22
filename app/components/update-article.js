import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(article) {
      var params = {
        category: this.get('category'),
        image: this.get('image'),
        headline: this.get('headline'),
        story: this.get('story'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
