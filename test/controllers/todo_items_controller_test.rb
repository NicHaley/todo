require 'test_helper'

class TodoItemsControllerTest < ActionController::TestCase
  setup do
    @todo_item = todo_items(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:todo_items)
  end

  test "should create todo_item" do
    assert_difference('TodoItem.count') do
      post :create, todo_item: { is_completed: @todo_item.is_completed, title: @todo_item.title }
    end

    assert_response 201
  end

  test "should show todo_item" do
    get :show, id: @todo_item
    assert_response :success
  end

  test "should update todo_item" do
    put :update, id: @todo_item, todo_item: { is_completed: @todo_item.is_completed, title: @todo_item.title }
    assert_response 204
  end

  test "should destroy todo_item" do
    assert_difference('TodoItem.count', -1) do
      delete :destroy, id: @todo_item
    end

    assert_response 204
  end
end
