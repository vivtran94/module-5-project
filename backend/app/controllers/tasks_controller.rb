class TasksController < ApplicationController


    def create
        user = current_user
        task = Task.create(
            user: user,
            employee_id: params[:employee_id],
            task_title: params[:task_title],
            task_body: params[:task_body],
            user_sent: true
        )
        render json: { task: task, token: JWT.encode( { id: user.id, role: 'user' }, 'YOUR SECRET')}
    end

    def update
        task = Task.find_by(id: params[:id])
        task.update(task_completed: true)
    end
    

end