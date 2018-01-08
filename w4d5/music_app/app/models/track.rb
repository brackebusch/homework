class Track < ApplicationRecord
    belongs_to :album

    has_one :band,
        through: :album,
        source: :band

    has_many :notes,
        dependent: :destroy

    validates :lyrics, :name, :ord, presence: true
    validates :bonus, inclusion: {in:[true,false]}
    validates :ord, uniqueness: {scope: :album_id}

    after_initalize :set_defaults

    def set_defaults
        self.bonus ||= false
    end
end
