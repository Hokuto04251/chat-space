class Group < ApplicationRecord
  has_many :group_users
  has_many :messages
  has_many :users, through: :group_users
  validates :name, presence: true
<<<<<<< Updated upstream
  has_many :messages
=======
>>>>>>> Stashed changes

  def show_last_message
    if (last_message = messages.last).present?
      last_message.content? ? last_message.content : '画像が投稿されています'
    else
<<<<<<< Updated upstream
      'まだメッセージはありません。'
=======
      'まだメッセージがありません'
>>>>>>> Stashed changes
    end
  end
end
