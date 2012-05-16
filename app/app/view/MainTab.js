/*
 * File: app/view/MainTab.js
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

Ext.define('MyApp.view.MainTab', {
    extend: 'Ext.tab.Panel',

    config: {
        id: 'main_tab',
        items: [
            {
                xtype: 'container',
                ui: '',
                layout: {
                    type: 'fit'
                },
                title: 'H2H',
                iconCls: 'maps',
                items: [
                    {
                        xtype: 'carousel',
                        id: 'battle_pages'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'submit_video_link',
                        margin: 10,
                        ui: 'action',
                        text: 'Submit Your Video'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'h2h_link',
                        margin: 10,
                        ui: 'action',
                        text: 'Watch Videos & More'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'fit'
                },
                title: 'Scores',
                iconCls: 'locate',
                items: [
                    {
                        xtype: 'carousel',
                        id: 'score_pages'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'score_tournament_link',
                        margin: 10,
                        ui: 'action',
                        text: 'Visit Tournament Site'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'fit'
                },
                title: 'Schedule',
                iconCls: 'bookmarks',
                items: [
                    {
                        xtype: 'carousel',
                        id: 'schedule_pages'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        id: 'schedule_tournament_link',
                        margin: 10,
                        ui: 'action',
                        text: 'Visit Tournament Site'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'fit'
                },
                title: 'Spotlight',
                iconCls: 'favorites',
                items: [
                    {
                        xtype: 'carousel',
                        id: 'spotlight_pages'
                    },
                    {
                        xtype: 'button',
                        docked: 'bottom',
                        hidden: true,
                        margin: 10,
                        ui: 'action-small',
                        text: 'Visit Bownce Page'
                    }
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'top',
                style: 'border:none;background:none;',
                title: '',
                items: [
                    {
                        xtype: 'image',
                        height: 51,
                        margin: 2,
                        width: 144,
                        src: './images/bownce_logo_small.png'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'bownce_link',
                        margin: 10,
                        ui: 'action-small',
                        text: 'visit Bownce.com'
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onMain_tabShow',
                event: 'show'
            }
        ]
    },

    onMain_tabShow: function(component, options) {

    }

});