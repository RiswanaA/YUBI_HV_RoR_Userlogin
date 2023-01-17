class ApplicationController < ActionController::Base
    def homepage
        render json: "WELCOME TO HOME PAGE"
    end    
end
