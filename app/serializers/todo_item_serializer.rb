class TodoItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :is_completed
end
