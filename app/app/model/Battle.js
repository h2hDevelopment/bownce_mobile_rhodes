/*
 * File: app/model/Battle.js
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

Ext.define('MyApp.model.Battle', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'round_id'
            },
            {
                name: 'battle_id'
            },
            {
                name: 'left_player_name'
            },
            {
                name: 'right_player_name'
            },
            {
                name: 'left_player_description'
            },
            {
                name: 'right_player_description'
            },
            {
                name: 'left_player_vote_percent'
            },
            {
                name: 'right_player_vote_percent'
            },
            {
                name: 'left_player_image_url'
            },
            {
                name: 'right_player_image_url'
            }
        ]
    }
});