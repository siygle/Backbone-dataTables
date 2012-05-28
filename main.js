require.config({
	baseUrl: "",
	paths: {
		"jquery": "lib/jquery-1.7.1.min",
		"underscore": "lib/underscore-amd-min-1.3.2",
		"backbone": "lib/backbone-amd-min-0.9.2",
		"BackboneTables": "backboneTables"
	}
});
require([
	'jquery',
	'underscore',
	'backbone',
	'BackboneTables'
], function($, _, Backbone, BackboneTables) {
	var tableData = Backbone.Model.extend({
		initialize: function (row) {
			this.set({
				id: row.id,
				name: row.name,
				num: row.num,
				img: row.img
			});
	  }
	});
	
	var tableDatas = Backbone.Collection.extend({
	  model: tableData,
	  url: "",
		fetch: function() {
			console.log('test');
		}
	});

	var rows = new tableDatas([
		{id:0, name:'ttt', num:33, img:'eeee'},
		{id:1, name:'ttt1', num:3, img:'eeee'},
		{id:2, name:'ttt2', num:444, img:'4545'},
		{id:3, name:'ttt3', num:11, img:'12dd'}
	]);
	var table = new BackboneTables(rows, {
		div:'#grid'
	});
	table.render();
});
