class ApplicationController < ActionController::Base
    def homepage
        render html:"HELLO WORLD!!"
    end   
end
