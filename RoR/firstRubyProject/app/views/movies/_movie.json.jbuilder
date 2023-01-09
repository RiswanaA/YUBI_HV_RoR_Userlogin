json.extract! movie, :id, :moviename, :director, :description, :language, :created_at, :updated_at
json.url movie_url(movie, format: :json)
