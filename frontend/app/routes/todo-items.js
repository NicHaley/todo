import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('todo-item');
	},

	actions: {
		createTodo(newTitle) {
			this.store.createRecord('todo-item', {
				title: newTitle,
				isCompleted: false
			}).save();
		},
		updateTodo(todo) {
			todo.save();
		},
		deleteTodo(todo) {
			console.log('shit happened');
			todo.destroyRecord();
		}
	}
});
