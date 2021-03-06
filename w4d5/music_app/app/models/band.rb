class Band < ApplicationRecord
    validates :name, uniqueness: true, presence: true

    has_many :albums, 
    dependent: :destroy
end
