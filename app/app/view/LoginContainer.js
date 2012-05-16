/*
 * File: app/view/LoginContainer.js
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

Ext.define('MyApp.view.LoginContainer', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'formpanel',
                itemId: 'loginForm',
                items: [
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelAlign: 'top',
                        name: 'email'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelAlign: 'top',
                        name: 'password'
                    },
                    {
                        xtype: 'spacer',
                        height: 20
                    },
                    {
                        xtype: 'button',
                        id: 'login_action',
                        ui: 'action',
                        text: 'Login'
                    }
                ]
            }
        ]
    }

});