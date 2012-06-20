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

timer = null;
callback_function = null;
data_version = null;

function checkIfStoresLoaded() {
	var all_stores = ["Battles", "Teams", "Divisions", "Tournaments" , "Spotlights"];
	for(var i=0;i<all_stores.length;i++) {
		var store = Ext.data.StoreManager.lookup(all_stores[i] + 'Store');
		if (store.isLoaded() == false) {
			return false;
		}
	}
	clearInterval(timer);
	if (callback_function)
		callback_function();
	MyApp.app.getController("BattlesController").refreshContents()
	MyApp.app.getController("ScoresController").refreshContents()
	MyApp.app.getController("SchedulesController").refreshContents()
	MyApp.app.getController("SpotlightsController").refreshContents()	
	Ext.Viewport.setMasked(false);
	return true;
}

function refreshDataIfRequired(callback_func) {
		Ext.data.JsonP.request({
      url: 'http://app.bownce.com/version',
			callbackKey: 'callback',
			success: function(result) {
				if(data_version != result.version) {
					data_version = result.version;
					refresh_stores(callback_func);
				}
			},
			failure: function(result) {
			}
	});
}

function refresh_stores(callback_func) {
	Ext.Viewport.setMasked({
			xtype: 'loadmask',
			message: 'Refreshing data...'
	});
	callback_function = callback_func;
	timer = setInterval("checkIfStoresLoaded()", 100);
	var all_stores = ["Battles", "Teams", "Divisions", "Tournaments" , "Spotlights"];
	for(var i=0;i<all_stores.length;i++) {
		var store = Ext.data.StoreManager.lookup(all_stores[i] + 'Store');
		store.loaded = false;
		store.load();
	}
	
}

