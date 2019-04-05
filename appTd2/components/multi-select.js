import Component from '@ember/component';
import { computed } from '@ember/object';
import $ from 'jquery'
 
export default Component.extend({
  tagName: 'select',
  classNames: ['form-control'],
  selectedIds:[],
  attributeBindings: ['multiple','size'],
 
  multiple: true,
  size: 10,
  selectedElements: computed('selectedIds.[]', function() {
    return this.get('selectedIds').map((id) => {
      return this.get('elements').findBy('id', id);
    });
  }),
  change(event){
    const selectedIds = $(event.target).val();
    this.set('selectedIds', selectedIds || []);
  },
  doubleClick(event){
      const selected = $(event.target).val();
      this.sendAction('dblClick',selected,this.get('id'));
  }
});