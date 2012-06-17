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
                min: 6,
                message: 'Password should be atleast 6 characters in length.'
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