require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: User.all
    end    

    def show 
       
        v= User.find(params[:id]) 
        render json: v
        
     end   

    def create
        v = !params[:username].empty? and !params[:email].empty? and !params[:password].empty? 
        if (v)
          p=User.create(
            'username': params[:username],
            'email': params[:email],
            'password': params[:password]
          )
        end  
    end

    def update 
        p = User.find(params[:id].to_i)
        p.update('username': params[:username], 'email': params[:email], 'password': params[:password])
        render json: "Data is Updated"
    end

    def destroy
        p = User.find(params[:id].to_i)
        p.destroy
    end    




end
