require 'rho/rhocontroller'

class MainController < Rho::RhoController

	def exit_app
		System.exit 
	end
	
end