class CreateTask < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.integer :petowner_id
      t.integer :employee_id
      t.string :task_title
      t.text :task_body
      t.date :date_created
      t.boolean :task_completed, default: false
      t.timestamps
    end
  end
end
