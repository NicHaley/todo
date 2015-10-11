import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	// Apply a class of 'editing' to li tags
	classNameBindings: ['editing'],
	editing: false
});
