# README
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false ,unique: true|
|email|string|null: false, unique: true|
|passwod|string|null: false|
### Association
-has_many :messages
-has_many :members
-has_many :groups, through; members
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
### Association
-has_many :messages
-has_many :members
## membersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|refference|null: false,foreign_key:true|
|group_id|refference|null: false,foreign_key:true|
### Association
-belongs_to :user
-belongs_to :group
## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|refference|null: false ,foreign_key: true|
|group_id|refference|null: false ,foreign_key: true|
|image|string||
|body|text||
### Association
-belongs_to :user
-belongs_to :group
