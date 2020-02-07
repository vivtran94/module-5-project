class NotesController < ApplicationController

    
    def create
        @employee = current_user
        note = Note.create(
            pet_id: params[:pet_id],
            employee_id: @employee.id,
            note_title: params[:note_title],
            note_body: params[:note_body]
        )
        render json: { note: note, token: JWT.encode( { id: employee.id, role: 'employee' }, 'YOUR SECRET')}
    end
    
    def update
        note = Note.find_by(id: params[:id])
        note.update(visible_to_user: true)
    end

end