# README

## userテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|name|string|null: false ,unique: true|
|email|string|null: false, unique: true|
|passwod|string|null: false|

### Association
-has_many :messages
-has_many :groups

## groupテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|groupname|string|null: false|

### Association
-has_many :users
-has_many :messages

## group_userテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|

### Association
-belongs_to :user
-belongs_to :group

## messageテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, index: true, unique: true|
|time|string|null: false|
|user_id|integer|null: false ,foreign_key: true|
|group_id|integer|null: false ,foreign_key: true|
|image|string||
|body|text|null: false|

### Association
-belongs_to :user
-belongs_to :group




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
