class CreateTask < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :employee_id
      t.string :task_title
      t.text :task_body
      t.boolean :task_completed, default: false
      t.boolean :user_sent, default: false
      t.boolean :employee_sent, default: false
      t.timestamps
    end
  end
end
