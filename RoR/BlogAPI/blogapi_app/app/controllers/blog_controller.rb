class BlogController < ApplicationController
    # skip_before_action :verify_authenticontent_token
    skip_before_action :verify_authenticity_token

    def index
        render json: Blog.all

    end  
    def show 
        
        v = Blog.find(params[:id])
        render json: v

    end

    def create
        Blog.create('title': params[:title],
            'content': params[:content], 
            'imagelink': params[:imagelink],                                                         
             )

    end    

    def update 
        p = Blog.find(params[:id].to_i)
        p.update('title': params[:title], 'content': params[:content], 'imagelink': params[:imagelink])
        render json: "Data Updated"
    end

    def destroy
        p = Blog.find(params[:id].to_i)
        p.destroy
        render json: "Data Deleted"
    end    



end

