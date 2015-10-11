import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		submitTodo (newTitle) {
			this.sendAction('submitTodo', newTitle);
			this.set('newTitle', '');
		}
	}

});
