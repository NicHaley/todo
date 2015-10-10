class TodoItemsController < ApplicationController
  before_action :set_todo_item, only: [:show, :update, :destroy]

  # GET /todo_items
  # GET /todo_items.json
  def index
    @todo_items = TodoItem.all

    render json: @todo_items
  end

  # GET /todo_items/1
  # GET /todo_items/1.json
  def show
    render json: @todo_item
  end

  # POST /todo_items
  # POST /todo_items.json
  def create
    @todo_item = TodoItem.new(todo_item_params)

    if @todo_item.save
      render json: @todo_item, status: :created, location: @todo_item
    else
      render json: @todo_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todo_items/1
  # PATCH/PUT /todo_items/1.json
  def update
    @todo_item = TodoItem.find(params[:id])

    if @todo_item.update(todo_item_params)
      head :no_content
    else
      render json: @todo_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todo_items/1
  # DELETE /todo_items/1.json
  def destroy
    @todo_item.destroy

    head :no_content
  end

  private

    def set_todo_item
      @todo_item = TodoItem.find(params[:id])
    end

    def todo_item_params
      params.require(:todo_item).permit(:title, :is_completed)
    end
end
