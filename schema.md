Table Name: Users
| Column Name     | Data Type | Details                   |
|-----------------|-----------|---------------------------|
| id              | integer   | not_null, unique          |
| username        | string    | not_null, unique, indexed |
| email           | string    | not_null, unique          |
| password_digest | string    | not_null                  |
| session_token   | string    | not_null, indexed         |
| created_at      | datetime  | not_null                  |
| updated_at      | datetime  | not_null                  |

Table Name: Tracks
| Column Name | Data Type | Details                       |
|-------------|-----------|-------------------------------|
| id          | integer   | not_null, unique              |
| title       | string    | not_null                      |
| song_url    | string    | not_null, unique,             |
| album_id    | integer   | not_null, indexed, foreign_key|
| popularity  | integer   |                               |
| genre_id    | integer   | indexed, foreign_key          |
| created_at  | datetime  | not_null                      |
| updated_at  | datetime  | not_null                      |

* album_id references Albums
* genre_id references Genres

Table Name: Artists
| Column Name | Data Type | Details          |
|-------------|-----------|------------------|
| id          | integer   | not_null, unique |
| name        | string    | not_null         |
| created_at  | datetime  | not_null         |
| updated_at  | datetime  | not_null         |

Table Name: Albums 
| Column Name | Data Type | Details          |
|-------------|-----------|------------------|
| id          | integer   | not_null, unique |
| title       | string    | not_null         |
| year        | integer   |                  |
| created_at  | datetime  | not_null         |
| updated_at  | datetime  | not_null         |

Table Name: Playlists
| Column Name | Data Type | Details                       |
|-------------|-----------|-------------------------------|
| id          | integer   | not_null, unique              |
| title       | string    | not_null                      |
| user_id     | integer   | not_null, indexed, foreign_key|
| created_at  | datetime  | not_null                      |
| updated_at  | datetime  | not_null                      |

* user_id references Users

Table Name: Genres 
| Column Name | Data Type | Details          |
|-------------|-----------|------------------|
| id          | integer   | not_null, unique |
| name        | string    | not_null, unique |
| created_at  | datetime  | not_null         |
| updated_at  | datetime  | not_null         |

Table Name: User-Followers 
| Column Name | Data Type | Details              |
|-------------|-----------|----------------------|
| id          | integer   | not_null, unique     |
| user_id     | integer   | not_null, foreign_key|
| follower_id | integer   | not_null, foreign_key|
| created_at  | datetime  | not_null             |
| updated_at  | datetime  | not_null             |

* index on [:user_id, :follower_id], unique: true
* follower_id references Users
* user_id references Users

Table Name: Playlist-Tracks 
| Column Name | Data Type | Details              |
|-------------|-----------|----------------------|
| id          | integer   | not null, unique     |
| playlist_id | integer   | not null, foreign_key|
| track_id    | integer   | not null, foreign_key|
| created_at  | datetime  | not_null             |
| updated_at  | datetime  | not_null             |

* playlist_id references Playlists
* track_id references Tracks

Table Name: Playlist-Followers 
| Column Name | Data Type | Details              |
|-------------|-----------|----------------------|
| id          | integer   | not null, unique     |
| playlist_id | integer   | not null, foreign_key|
| follower_id | integer   | not null, foreign_key|
| created_at  | datetime  | not_null             |
| updated_at  | datetime  | not_null             |

* index on [:playlist_id, :follower_id], unique: true
* follower_id references Users

Table Name: User-Track_History

| Column Name  | Data Type | Details                      |
|--------------|-----------|------------------------------|
| id           | integer   | not_null, unique             |
| user_id      | integer   | not_null                     |
| track_id     | integer   | not_null                     |
| listen_count | integer   | default:0                    |
| rating       | integer   | check (rating in (-1, 0, 1)) |
| created_at   | datetime  | not_null                     |
| updated_at   | datetime  | not_null                     |

* index on [:user_id, :track_id], unique: true 
* follower_id references Users