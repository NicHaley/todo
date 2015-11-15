import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return this.store.filter('todo-item', function(todo){
			return todo.get('isCompleted')
		});
	},
	renderTemplate(controller, model) {
		// This render the todo-items index template and apply the model for this route as the model.
		this.render('todo-items.index', {
			model: model
		});
	}
});
