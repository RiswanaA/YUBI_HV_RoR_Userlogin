class AuthorController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index 
        render json: "IN SEARCH BY BOOKAUTHOR PAGE"
    end
    def create 
        bk = Book.where('bookAuthor':params[:bookAuthor])
        if(bk.nil?)
            render json: "book does not exist"
        else
            render json: bk
        end
    end
end
