class Bug < ApplicationRecord
  has_many :vaccines, dependent: :destroy
end
