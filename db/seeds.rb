# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#

Event.delete_all
10.times do
  Event.create!(
    name: Faker::Name.name,
    event_date: Faker::Time.forward(23, :morning),
    place: Faker::Address.street_name,
    description: Faker::Lorem.sentence
  )
end
