define([
	'jquery',
	'underscore',
	'backbone',
	'lib/jquery.dataTables.min'
], function($, _, Backbone){
	var BackboneTables = Backbone.View.extend({
	  el: '',
	  tagName: 'table',
	
	  events: {
	    
	  },
	
	  initialize: function (collection, settings) {
			this.collection = collection;
			this.settings = settings || {};
			var divname = this.settings.div || '#grid';
			this.el = $(divname);
	  },
		
	
	  render: function () {
			$(this.el).append("<table></table>");
			var data = [];
			_.each(this.collection.models, function(model){
				data.push([model.get('id'), model.get('name'), model.get('num'), model.get('img')]);
			});
			$(this.el).find('table').dataTable({
				"bPaginate": false,
				"sScorllY": "300px",
				"bScrollCollapse": true,
				"oLanguage": {
					"sLengthMenu": "Show",                                                                                                                                                                     
					"sZeroRecords": "No",                                                                                                                                                                      
					"sInfo": "Total: _TOTAL_"
				},
				"aoColumns": [
					{ "sTitle": "Id","sClass": "id" }, 
					{ "sTitle": "Name","sClass": "name" }, 
					{ "sTitle": "Number","sClass": "num" }, 
					{ "sTitle": "Image","sClass": "img" }
				],
				"aaData": data,
				"sDom": 'ft'
			});
	  }
	});
	
	return BackboneTables;
});
