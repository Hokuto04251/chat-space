# README

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|name|string|null: false ,unique: true, foreign_key: true|
|email|string|null: false, unique: true|
|passwod|string|null: false|

### Association
-has_many :messages
-has_many :group


## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|time|string|null: false|
|user_id|integer|null: false ,foreign_key: true|
|group_id|integer|null: false ,foreign_key: true|
|body|text|null: false|

### Association
-belongs_to :user
-belongs_to :group


## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|groupname|string|null: false|

### Association
-has_many :users
-has_many :users

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
