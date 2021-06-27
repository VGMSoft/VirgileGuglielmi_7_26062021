DROP DATABASE IF EXISTS groupomania;
CREATE DATABASE IF NOT EXISTS groupomania;
USE groupomania;

CREATE TABLE IF NOT EXISTS Users (
user_id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
password VARCHAR(255) NOT NULL,
pseudo VARCHAR(32),
avatar_url VARCHAR(255)
)
ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Posts (
post_id SMALLINT UNSIGNED AUTO_INCREMENT,
user_id SMALLINT UNSIGNED NOT NULL,
post_content TEXT,
post_date DATETIME NOT NULL,
PRIMARY KEY (post_id),
INDEX ind_date (post_date),
CONSTRAINT fk_user_id
        FOREIGN KEY (user_id)
        REFERENCES Users(user_id)
)
ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Comments (
comment_id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
post_id SMALLINT UNSIGNED NOT NULL,
user_id SMALLINT UNSIGNED NOT NULL,
comment_content TEXT,
comment_date DATETIME NOT NULL,
CONSTRAINT fk_user_id
        FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
CONSTRAINT fk_post_id
        FOREIGN KEY (post_id)
        REFERENCES Posts(post_id)
)
ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS Likes (
post_id SMALLINT UNSIGNED,
user_id SMALLINT UNSIGNED,
like_dislike BOOL,
PRIMARY KEY (user_id, post_id),
CONSTRAINT fk_user_id
        FOREIGN KEY (user_id)
        REFERENCES Users(user_id),
CONSTRAINT fk_post_id
        FOREIGN KEY (post_id)
        REFERENCES Posts(post_id)
)
ENGINE=INNODB;