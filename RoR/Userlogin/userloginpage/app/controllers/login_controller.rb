require 'bcrypt'
class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render html: "TAKING YOU TO LOGIN PAGE"
    end
    def create 
        u = User.find_by('email':params[:email])
        if(u.nil?)
            render json: "user account does not exist"
        else
            if (u.authenticate(params[:password]))
                session[:current_user_id]=u.id
                render json: "successful login"   
            else 
                render json: "Incorrect password"   
            end    
        end
    end

    def destroy
         session.delete(:current_user_id)
        render json:"Logged out successfully"
    end    

end
