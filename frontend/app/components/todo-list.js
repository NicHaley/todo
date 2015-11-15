import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		deleteTodo(todo) {
			this.sendAction('deleteTodo', todo);
		}
	}
});
