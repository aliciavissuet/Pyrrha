## `users`
| **column name**   | **data type** | **details**               |
|-------------------|---------------|---------------------------|
| `id`              | integer       | not null, primary key     |
| `username`        | string        | not null, indexed         |
| `email`           | string        | not null, indexed, unique |
| `password_digest` | string        | not null                  |
| `session_token`   | string        | not null, indexed         |

## `tracks`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `title`         | string        | not null, indexed              |
| `album_id`      | integer       | not null, indexed, foreign key |
| `popularity`    | integer       | not null                       |
| `genre_id`      | integer       | not null, indexed, foreign key |

## `artists`
| **column name** | **data type** | **details**           |
|-----------------|---------------|-----------------------|
| `id`            | integer       | not null, primary key |
| `name`          | string        | not null, indexed     |
* album_id references Albums
* genre_id references Genres

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

## `playlist-tracks`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `playlist_id`   | integer       | not null, indexed, foreign key |
| `track_id`      | integer       | not null, indexed, foreign key |

## `playlist-follows`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `playlist_id`   | integer       | not null, indexed, foreign key |
| `follower_id`   | integer       | not null, indexed, foreign key |

## `user_track_history`
| **column name** | **data type** | **details**                    |
|-----------------|---------------|--------------------------------|
| `id`            | integer       | not null, primary key          |
| `user_id`       | integer       | not null, indexed, foreign key |
| `track_id`      | integer       | not null, indexed, foreign key |
| play_count      | integer       | not null                       |
| rating          | integer       | not null                       |
