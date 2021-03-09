class Api::BugsController < ApplicationController

  def index 
    render json: Bug.all 
  end

  def show
    render json: Bug.find(params[:id])
  end


  def create 
    @bug = Bug.new(bug_params)
    if @bug.save
      render json: @bug
    else
      render json: {errors: bug.errors}
    end
  end

  def update 
    @bug = Bug.find(params[:id])
    if @bug.update(bug_params)
      render json: @bug
    else
      render json: {errors: bug.errors}
    end
  end

  def destroy 
    render json: Bug.find(params[:id]).destroy
  end

  private

  def bug_params 
    params.require(:bug).permit(:name)
  end
end
