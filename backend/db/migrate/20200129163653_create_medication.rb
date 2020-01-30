class CreateMedication < ActiveRecord::Migration[6.0]
  def change
    create_table :medications do |t|
      t.string :brand_name
      t.string :generic_name
    end
  end
end
