class ApplicationController < ActionController::Base
    def homepage
        render html: "WELCOME TO HOME PAGE!!!"
    end      
end
