/*
 * File: app/view/RegistrationsContainer.js
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

Ext.define('MyApp.view.RegistrationsContainer', {
    extend: 'Ext.Container',

    config: {
        layout: {
            type: 'fit'
        },
        items: [
            {
                xtype: 'formpanel',
                itemId: 'registrationForm',
                items: [
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        labelAlign: 'top',
                        name: 'email',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        labelAlign: 'top',
                        name: 'password',
                        placeHolder: 'Minimum of 6 characters'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Confirm Password',
                        labelAlign: 'top',
                        name: 'password_confirmation',
                        placeHolder: 'Minimum of 6 characters'
                    },
                    {
                        xtype: 'spacer',
                        height: 10
                    },
                    {
                        xtype: 'checkboxfield',
                        style: 'font-size:11px',
                        width: 279,
                        label: 'I hereby agree to the <a href="http://bownce.com/terms?rho_open_target=_blank">terms & conditions</a> of Bownce.',
                        labelAlign: 'right',
                        labelWidth: '90%',
                        labelWrap: true,
                        name: 'terms_flag'
                    },
                    {
                        xtype: 'spacer',
                        height: 15
                    },
                    {
                        xtype: 'button',
                        id: 'register_action',
                        ui: 'action',
                        text: 'Register'
                    }
                ]
            }
        ]
    }

});