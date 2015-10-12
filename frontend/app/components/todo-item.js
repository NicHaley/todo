import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	// Apply a class of 'editing' to li tags
	classNameBindings: ['editing'],
	editing: false,

	actions: {
		submitTodo(){
			let todo = this.get('todo');
			if (todo.get('title') === "") {
				this.sendAction('deleteTodo', todo);
			} else {
				this.sendAction('updateTodo', this.get('todo'));
			}
			this.set('editing', false);
		},
		editTodo() {
			// toggle the editing property, set above
			this.toggleProperty('editing');
		},
		deleteTodo() {
			let todo = this.get('todo');
			this.sendAction('deleteTodo', todo);
		}
	}
});
