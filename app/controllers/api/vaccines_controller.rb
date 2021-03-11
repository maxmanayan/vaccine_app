class Api::VaccinesController < ApplicationController
  before_action :set_bug


  def index 
    render json: @bug.vaccines
  end

  def show 
    @vaccine = @bug.vaccines.find(params[:id])

    render json: @vaccine
  end

  def create 
   @vaccine = @bug.vaccines.new(vaccine_params)
   if (@vaccine.save)
    render json: @vaccine
   else 
    render json: {errors: vaccine.errors}, status: 422
   end
  end


  def update
    @vaccine = @bug.vaccines.find(params[:id])
    if @vaccine.update(vaccine_params)
     render json: @vaccine
    else 
     render json: {errors: vaccine.errors}, status: 422
    end
  end


  def destroy 
    @vaccine = @bug.vaccines.find(params[:id])
    @vaccine.destroy

    render json: @vaccine
  end



  private
  
  def set_bug
    @bug = Bug.find(params[:bug_id])
  end


  def vaccine_params 
    params.require(:vaccine).permit(:name, :effectiveness, :maker)
  end
end
