Ext.define('MyApp.model.override.User', {
    requires: 'MyApp.model.User'
}, function() {
    Ext.override(MyApp.model.User, {
        validations : [
            {
                type: 'email',
                field: 'email',
                message: 'Email is not valid.'
            },
            {
                type: 'length',
                field: 'password',
                max: 8,
                min: 4,
                message: 'Password should be 4 to 8 characters.'
            },
            {   type : 'password', 
                field: 'password', 
                message: 'Password and Password Confirmation do not match.'
            },
            {
                type : 'presence',
                field : 'terms_flag',
                message : 'Please accept terms & conditions.'
            }
        ]
    });
});