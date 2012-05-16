Ext.override(Ext.data.Model,{
		validate: function() {
				var errors      = new Ext.data.Errors(),
					 validations = this.validations,
					 validators  = Ext.data.validations,
					 length, validation, field, valid, type, i;
				if (validations) {
					 length = validations.length;
					 
					 for (i = 0; i < length; i++) {
							 validation = validations[i];
							 field = validation.field || validation.name;
							 type  = validation.type;
							 valid = validators[type](validation, this.get(field),this);
							 
							 if (!valid) {
									 errors.add({
											 field  : field,
											 message: validation.message || validators[type + 'Message']
									 });
							 }
					 }
				}
			 
			 return errors;
		}
});

Ext.apply(Ext.data.validations,{
		passwordMessage: 'Password Mismatch',
		password: function(config, value,formData) {
				if(formData.data.password_confirmation == formData.data.password){
						return true;
				} else {
						return false;
				}
		}
});
