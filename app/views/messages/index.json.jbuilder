json.array! @messages.each do |message|
  json.content message.content
  json.created_at message.created_at.strftime('%Y/%m/%d %H:%M:%S')
  json.image message.image.url
  json.id message.id
  json.user_name message.user.name
  json.group_id message.group_id
end
