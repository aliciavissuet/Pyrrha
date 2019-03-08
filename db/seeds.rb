# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Track.destroy_all
Album.destroy_all
Artist.destroy_all
User.destroy_all

require 'open-uri'
User.create(email: 'guest@email.com', password: 'password', username: 'Guest')
User.create(email: 'freya@email.com', password: 'password', username: 'Freya')

artist1 =  Artist.create(name: 'Damien Rice')
artist1_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/damien_rice.jpg')
artist1.photo.attach(io: artist1_photo, filename: 'damien_rice.jpg')

artist2 =  Artist.create(name: 'Mumford and Sons')
artist2_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mumford_and_sons.jpg')
artist2.photo.attach(io: artist2_photo, filename: 'mumford_and_sons.jpg')

artist3 =  Artist.create(name: 'The Cranberries')
artist3_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/CranberriesArtistpic.jpg')
artist3.photo.attach(io: artist3_photo, filename: 'CranberriesArtistpic.jpg')


album1 = Album.create(title: 'My Favourite Faded Fantasy', year: 2014)
album1_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/damien_rice_favourite_faded.jpg')
album1.photo.attach(io: album1_photo, filename: 'damien_rice_favourite_faded.jpg')

album2 = Album.create(title: 'Babel', year: 2012)
album2_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mumford_babel.jpg')
album2.photo.attach(io: album2_photo, filename: 'mumford_babel.jpg')

album3 = Album.create(title: 'No Need To Argue', year: 1990)
album3_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/zombieAlbumArt.jpg')
album3.photo.attach(io: album3_photo, filename: 'mp3/untitled folder/zombieAlbumArt.jpg')


track1 = Track.create(title: 'Colour Me In', album_id: album1.id, artist_id: artist1.id)
track1_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/05+-+Colour+Me+In.mp3')
track1.song.attach(io: track1_song, filename: 'mp3/untitled folder/05 - Colour Me In.mp3')
track1_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/colour_me_in_damien.jpg')
track1.photo.attach(io: track1_photo, filename: 'colour_me_in_damien.jpg')

track2 = Track.create(title: 'Trusty and True', album_id: album1.id, artist_id: artist1.id)
track2_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/07+-+Trusty+and+True.mp3')
track2.song.attach(io: track2_song, filename: 'mp3/untitled folder/07 - Trusty and True.mp3')
track2_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/colour_me_in_damien.jpg')
track2.photo.attach(io: track2_photo, filename: 'colour_me_in_damien.jpg')

track3 = Track.create(title: 'Long Long Way', album_id: album1.id, artist_id: artist1.id)
track3_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/08+-+Long+Long+Way.mp3')
track3.song.attach(io: track3_song, filename: 'mp3/untitled folder/08 - Long Long Way.mp3')
track3_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/colour_me_in_damien.jpg')
track3.photo.attach(io: track3_photo, filename: 'colour_me_in_damien.jpg')

track4 = Track.create(title: 'I Will Wait', album_id: album2.id, artist_id: artist2.id)
track4_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/03+-+I+Will+Wait.mp3')
track4.song.attach(io: track4_song, filename: 'mp3/untitled folder/03 - I Will Wait.mp3')
track4_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mumford_and_sons.jpg')
track4.photo.attach(io: track4_photo, filename: 'mumford_and_sons.jpg')

zombie = Track.create(title: 'Zombie', album_id: album3.id, artist_id: artist3.id)
zombie_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/untitled+folder/The+Cranberries+-+Zombie+(Official+Music+Video).mp3')
zombie.song.attach(io: zombie_song, filename: 'mp3/untitled folder/03 - I Will Wait.mp3')
zombie_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/zombiesongpic.jpg')
zombie.photo.attach(io: zombie_photo, filename: 'zombiesongpic.jpg')
