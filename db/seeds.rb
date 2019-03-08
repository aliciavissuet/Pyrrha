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

m83 = Artist.create(name: 'M83')
m83_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/m83artist.jpg')
m83.photo.attach(io: m83_photo, filename: 'mp3/m83artist.jpg')

m83album = Album.create(title: 'Hurry Up, We\'re Dreaming', year: 2014)
m83album_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/m83album.jpg')
m83album.photo.attach(io: m83album_photo, filename: 'mp3/m83album.jpg')

m83_intro = Track.create(title: 'Intro', album_id: m83album.id, artist_id: m83.id)
m83_intro_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/M83+-+Intro.mp3')
m83_intro.song.attach(io: m83_intro_song, filename: 'mp3/M83 - Intro.mp3')
m83_intro_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/m83album.jpg')
m83_intro.photo.attach(io: m83_intro_photo, filename: 'mp3/m83album.jpg')

m83_midnightcity = Track.create(title: 'Midnight City', album_id: m83album.id, artist_id: m83.id)
m83_midnightcity_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Midnight+City.mp3')
m83_midnightcity.song.attach(io: m83_midnightcity_song, filename: 'mp3/Midnight City.mp3')
m83_midnightcity_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/m83album.jpg')
m83_midnightcity.photo.attach(io: m83_midnightcity_photo, filename: 'mp3/m83album.jpg')

m83_wait = Track.create(title: 'Wait', album_id: m83album.id, artist_id: m83.id)
m83_wait_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/M83+-+Wait+(Official+Video).mp3')
m83_wait.song.attach(io: m83_wait_song, filename: 'mp3/M83 - Wait (Official Video).mp3')
m83_wait_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/m83album.jpg')
m83_wait.photo.attach(io: m83_wait_photo, filename: 'mp3/m83album.jpg')

rs = Artist.create(name: 'Regina Spektor')
rs_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/rs.jpg')
rs.photo.attach(io: rs_photo, filename: 'mp3/rs.jpg')

rsalbum = Album.create(title: 'Begin To Hope', year: 2014)
rsalbum_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/rsAlbum.jpg')
rsalbum.photo.attach(io: rsalbum_photo, filename: 'mp3/rsAlbum.jpg')

rs_us = Track.create(title: 'Us', album_id: rsalbum.id, artist_id: rs.id)
rs_us_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Regina+Spektor+-+Us+%5BOFFICIAL+Video%5D.mp3')
rs_us.song.attach(io: rs_us_song, filename: 'mp3/Regina Spektor - Us [OFFICIAL Video].mp3')
rsalbum_photo1 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/rsAlbum.jpg')
rs_us.photo.attach(io: rsalbum_photo1, filename: 'mp3/rsAlbum.jpg')

rs_samson = Track.create(title: 'Samson', album_id: rsalbum.id, artist_id: rs.id)
rs_samson_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Regina+Spektor+-+Samson+(songs).mp3')
rs_samson.song.attach(io: rs_samson_song, filename: 'mp3/Regina Spektor - Samson (songs).mp3')
rsalbum_photo2 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/rsAlbum.jpg')
rs_samson.photo.attach(io: rsalbum_photo2, filename: 'mp3/rsAlbum.jpg')

rs_fidelity = Track.create(title: 'Fidelity', album_id: rsalbum.id, artist_id: rs.id)
rs_fidelity_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Regina+Spektor+-+Fidelity+%5BOfficial+Music+Video%5D.mp3')
rs_fidelity.song.attach(io: rs_fidelity_song, filename: 'mp3/Regina Spektor - Fidelity [Official Music Video].mp3')
rsalbum3_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/rsAlbum.jpg')
rs_fidelity.photo.attach(io: rsalbum3_photo, filename: 'mp3/rsAlbum.jpg')

lg = Artist.create(name: 'Lady Gaga')
lg_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg.png')
lg.photo.attach(io: lg_photo, filename: 'mp3/lg.png')

lg_album = Album.create(title: 'A Star Is Born', year: 2014)
lg_album_photo = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg_album.jpg')
lg_album.photo.attach(io: lg_album_photo, filename: 'mp3/lg_album.jpg')

lg_shallow = Track.create(title: 'Shallow', album_id: lg_album.id, artist_id: lg.id)
lg_shallow_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Lady+Gaga%2C+Bradley+Cooper+-+Shallow+(A+Star+Is+Born).mp3')
lg_shallow.song.attach(io: lg_shallow_song, filename: 'mp3/Lady Gaga, Bradley Cooper - Shallow (A Star Is Born).mp3')
lg_album_photo2 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg_album.jpg')
lg_shallow.photo.attach(io: lg_album_photo2, filename: 'mp3/lg_Album.jpg')

rs_inl = Track.create(title: 'I\'ll Never Love Again', album_id: lg_album.id, artist_id: lg.id)
rs_inl_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Lady+Gaga+-+Ill+Never+Love+Again+(Lyrics).mp3')
rs_inl.song.attach(io: rs_inl_song, filename: 'mp3/Lady Gaga - Ill Never Love Again (Lyrics).mp3')
lg_album_photo3 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg_album.jpg')
rs_inl.photo.attach(io: lg_album_photo3, filename: 'mp3/lg_Album.jpg')

lg_2 = Track.create(title: 'Always Remember Us This Way', album_id: lg_album.id, artist_id: lg.id)
lg_2_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Lady+Gaga+-+Always+Remember+Us+This+Way+(+Lyrics+Video+)+(1).mp3')
lg_2.song.attach(io: lg_2_song, filename: 'mp3/Lady Gaga - Always Remember Us This Way ( Lyrics Video ) (1).mp3')
lg_album_photo4 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg_album.jpg')
lg_2.photo.attach(io: lg_album_photo4, filename: 'mp3/lg_Album.jpg')

lg_lwif = Track.create(title: 'Look What I Found', album_id: lg_album.id, artist_id: lg.id)
lg_lwif_song = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/Lady+Gaga+-+Look+What+I+Found+(A+Star+Is+Born+Soundtrack)+%5BFull+HD%5D+lyrics.mp3')
lg_lwif.song.attach(io: lg_lwif_song, filename: 'mp3/Lady Gaga - Look What I Found (A Star Is Born Soundtrack) [Full HD] lyrics.mp3')
lg_album_photo5 = open('https://s3-us-west-1.amazonaws.com/pyrrha-dev/mp3/lg_album.jpg')
lg_lwif.photo.attach(io: lg_album_photo5, filename: 'mp3/lg_Album.jpg')