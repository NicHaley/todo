import Ember from 'ember';

export default Ember.Route.extend({
		model () {
	    return this.store.filter('todo-item', function(todo) {
	      return !todo.get('isCompleted');
	    });
    },
    renderTemplate(controller, model) {
	    this.render('todo-items.index', {
      	model: model
	    });
    }
});
