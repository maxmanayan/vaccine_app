# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Hospital.create(name: 'U of U', address: '123 Main St')
Hospital.create(name: 'Cool Town', address: '456 State St')


covid = Bug.create(name: "Covid")
sars = Bug.create(name: "Sars")


covid.vaccines.create(name:"pfizer v", effectiveness: 92.0, maker:"Phizer")
covid.vaccines.create(name:"moderna v", effectiveness: 85.0, maker:"Moderna")

sars.vaccines.create(name:"francisco v", effectiveness: 75.0, maker:"Francisco")
sars.vaccines.create(name:"coolio v", effectiveness: 87.0, maker:"Coolio")


puts "Seeded #{Hospital.all.size} new hospitals"
puts "Seeded #{Bug.all.size} new bugs"
puts "Seeded #{Vaccine.all.size} new vaccines"