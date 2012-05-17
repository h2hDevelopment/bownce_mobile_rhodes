/*
 * File: app/controller/ScoresController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.ScoresController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            scorePages: '#score_pages'
        },

        control: {
            "#score_pages": {
                initialize: 'onCarouselInitialize'
            },
            "#score_tournament_link": {
                tap: 'onTournamentLinkTap'
            }
        }
    },

    onCarouselInitialize: function(component, options) {
        var teamsStore = Ext.data.StoreManager.lookup('TeamsStore');
        var divisionsStore = Ext.data.StoreManager.lookup('DivisionsStore');
        var tournamentsStore = Ext.data.StoreManager.lookup('TournamentsStore');
        teamsStore.load();
        divisionsStore.load();
        tournamentsStore.load();
    },

    onTournamentLinkTap: function(button, e, options) {
        var tournament_record_index = this.getScorePages().getActiveIndex();
        if (tournament_record_index < 0) {
            return;
        }
        var tournamentsStore = Ext.data.StoreManager.lookup('TournamentsStore');
        var tournament_url = tournamentsStore.getAt(tournament_record_index).get("tournament_url");
        if (tournament_url.indexOf("?") > 0)
        tournament_url += "&";
        else
        tournament_url += "?";
        window.open(tournament_url + "rho_open_target=_blank");
    },

    column_renderer: function(value, values) {
        var header = values.header;
        if (header)
        return '<span class="grid_header">' + value + '</span>';
        else
        return value;
    },

    initializeGrid: function(gridPanel, store) {
        var grid = Ext.create('Ext.ux.touch.grid.View', {
            width: '95%',
            height: 150,
            margin: "0 10 5 10",
            fullscreen : true,
            scrollable: true,
            store      : store,
            header: {height: '0.1em'},
            columns   : [
            {
                dataIndex : 'col_1',
                width     : '70%',
                filter    : { type : 'string' },
                renderer: this.column_renderer
            },
            {
                dataIndex : 'col_2',
                width     : '15%',
                filter    : { type : 'numeric' },
                renderer: this.column_renderer
            },
            {
                dataIndex : 'col_3',
                width     : '15%',
                filter    : { type : 'numeric' },
                renderer: this.column_renderer
            }
            ]
        });
        gridPanel.add(grid); 
        grid.show();

    },

    createStoreForDisplay: function(divisionsStore) {
        var store = Ext.create('Ext.data.Store', {model: 'MyApp.model.ScoreDisplay'});
        var teamsStore = Ext.data.StoreManager.lookup('TeamsStore');
        for(var i=0;i<divisionsStore.getCount();i++) {
            var division = divisionsStore.getAt(i);
            if (teamsStore.isFiltered())
            teamsStore.clearFilter();
            teamsStore.filter('division_id', division.get('id'));
            if (teamsStore.getCount() > 0) {
                store.add({col_1: division.get("division_name"), col_2: 'W', col_3: 'L', header: true});
            }
            for(var j=0;j<teamsStore.getCount();j++) {
                var team = teamsStore.getAt(j);
                store.add({col_1: "<a href='" + team.get("team_url") + "'>" + team.get("team_name") + "</a>",
                col_2: team.get("win_count"), col_3: team.get("loss_count")});        
            }
        }
        return store;
    },

    refreshContents: function() {
        var tournamentsStore = Ext.data.StoreManager.lookup('TournamentsStore');
        this.getScorePages().removeAll();
        for(var i=0;i<tournamentsStore.getCount();i++) {
            var tournament = tournamentsStore.getAt(i);
            var divisionsStore = Ext.data.StoreManager.lookup('DivisionsStore');
            if (divisionsStore.isFiltered())
            divisionsStore.clearFilter();
            divisionsStore.filter("tournament_id", tournament.get("id"));
            var scorePanel = Ext.create("MyApp.view.ScorePanel");
            scorePanel.down("#tournament_logo").setSrc(tournament.get('tournament_logo_small_url'));    
            scorePanel.down("#tournament_name").setHtml(tournament.get('tournament_name'));    
            scorePanel.down("#tournament_location").setHtml(tournament.get('tournament_location'));
            scorePanel.down("#tournament_dates").setHtml(tournament.get('tournament_dates'));
            var displayStore = this.createStoreForDisplay(divisionsStore);
            this.initializeGrid(scorePanel.down("#grid_panel"), displayStore);
            if (displayStore.getCount() > 0) {
                this.getScorePages().add([scorePanel]);
                this.getScorePages().setActiveItem(0);        
            }
        }
    },

    launch: function() {
        var tournamentsStore = Ext.data.StoreManager.lookup('TournamentsStore');
        tournamentsStore.addAfterListener("load", this.refreshContents, this);
    }

});