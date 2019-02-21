## `users`
| **column name**   | **data type** | **details**               |
|-------------------|---------------|---------------------------|
| `id`              | integer       | not null, primary key     |
| `username`        | string        | not null, indexed         |
| `email`           | string        | not null, indexed, unique |
| `password_digest` | string        | not null                  |
| `session_token`   | string        | not null, indexed         |
* index on `email, unique: true` 
* index on `session_token`

## `tracks`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `title`         | string        | not null, indexed              |
| `album_id`      | integer       | not null, indexed, foreign key |
| `popularity`    | integer       | not null                       |
| `genre_id`      | integer       | not null, indexed, foreign key |
* `album_id` references `albums`
* index on `album_id`

## `artists`
| **column name** | **data type** | **details**           |
|-----------------|---------------|-----------------------|
| `id`            | integer       | not null, primary key |
| `name`          | string        | not null, indexed     |

## `albums`
| **column name** | **data type** | **details**           |
|-----------------|---------------|-----------------------|
| `id`            | integer       | not null, primary key |
| `title`         | string        | not null, indexed     |
| `popularity`    | integer       | not null              |
| `year`          | integer       |                       |

## `playlists`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `title`         | string        | not null, indexed              |
| `user_id`       | integer       | not null, indexed, foreign key |
* `user_id` references `users`
* index on `user_id`

## `genres`
| **column name** | **data type** | **details**           |
|-----------------|---------------|-----------------------|
| `id`            | integer       | not null, primary key |
| `name`          | string        | not null, indexed     |

## `user-follows`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `user_id`       | integer       | not null, indexed, foreign key |
| `follower_id`   | integer       | not null, indexed, foreign key |
* `user_id` references users
* `follower_id` references `users`
* index on `[:user_id, :follower_id], unique: true`

## `playlist-tracks`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `playlist_id`   | integer       | not null, indexed, foreign key |
| `track_id`      | integer       | not null, indexed, foreign key |
* `playlist_id` references `playlists`
* `track_id` references `tracks`


## `playlist-follows`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `playlist_id`   | integer       | not null, indexed, foreign key |
| `follower_id`   | integer       | not null, indexed, foreign key |
* `playlist_id` references `playlists`
* `follower_id` references `users`
* index on `[:playlist_id, :follower_id], unique: true`

## `user_track_history`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `user_id`       | integer       | not null, indexed, foreign key |
| `track_id`      | integer       | not null, indexed, foreign key |
| play_count      | integer       | not null                       |
| rating          | integer       | not null                       |
* `user_id` references `users`
* `track_id` references `tracks`
* index on `[:user_id, :track_id], unique: true`
