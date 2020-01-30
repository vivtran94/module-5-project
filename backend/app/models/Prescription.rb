class Prescription < ActiveRecord::Base

    belongs_to :medication
    belongs_to :pet

end