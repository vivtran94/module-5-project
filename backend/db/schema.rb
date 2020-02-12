# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_10_211946) do

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.integer "record_id", null: false
    t.integer "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "appointments", force: :cascade do |t|
    t.integer "pet_id"
    t.integer "employee_id"
    t.string "date"
    t.string "start_time"
    t.boolean "user_confirmed", default: false
    t.boolean "employee_confirmed", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "street_address"
    t.string "street_state"
    t.integer "street_zipcode"
    t.string "first_name"
    t.string "last_name"
    t.string "role"
    t.string "phone_number"
    t.string "email"
  end

  create_table "medications", force: :cascade do |t|
    t.string "brand_name"
    t.string "generic_name"
  end

  create_table "notes", force: :cascade do |t|
    t.integer "pet_id"
    t.integer "employee_id"
    t.string "note_title"
    t.text "note_body"
    t.boolean "visible_to_user", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pets", force: :cascade do |t|
    t.integer "user_id"
    t.string "name"
    t.string "date_of_birth"
    t.string "gender"
    t.string "breed"
    t.string "color"
    t.string "pending_name"
    t.string "pending_date_of_birth"
    t.string "pending_gender"
    t.string "pending_breed"
    t.string "pending_color"
  end

  create_table "prescriptions", force: :cascade do |t|
    t.integer "pet_id"
    t.integer "medication_id"
    t.string "direction"
    t.integer "quantity"
    t.integer "refill"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.integer "user_id"
    t.integer "employee_id"
    t.string "task_title"
    t.text "task_body"
    t.boolean "task_completed", default: false
    t.boolean "user_sent", default: false
    t.boolean "employee_sent", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "date_of_birth"
    t.string "street_address"
    t.string "street_city"
    t.string "street_state"
    t.integer "street_zipcode"
    t.string "phone_number"
    t.string "email"
    t.integer "driver_license"
    t.string "username"
    t.string "password_digest"
    t.string "pending_first_name"
    t.string "pending_last_name"
    t.string "pending_date_of_birth"
    t.string "pending_address"
    t.integer "pending_phone_number"
    t.string "pending_email"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
