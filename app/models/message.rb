class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :image?
<<<<<<< Updated upstream
  mount_uploader :image, ImageUploader
=======
  mount_uploader :image,ImageUploader
>>>>>>> Stashed changes
end
