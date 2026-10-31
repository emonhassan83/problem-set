-- Active: 1708923174325@@127.0.0.1@5432@ph

--* show user table DATA
SELECT * FROM "user";

--* show post table DATA
SELECT * FROM post;

--* case study: Retrieve all posts title with their username
SELECT title, username FROM post
    JOIN "user" ON post.user_id = "user".id;

--* real table format after joining
SELECT * FROM post
    JOIN "user" ON post.user_id = "user".id;

--* retrieve specific table row data
SELECT "user".id FROM post
    JOIN "user" ON post.user_id = "user".id;

--* alias filed name data after joining table
SELECT * FROM post as p
    INNER JOIN "user" as u ON p.user_id = u.id;

--* add null value add in table
INSERT INTO post (id, title, user_id) VALUES
    (6, 'This is test post! 👍', NULL);

--* Left table JOIN
SELECT * FROM post
    LEFT OUTER JOIN "user" ON post.user_id = "user".id;

--* Insert new user
INSERT INTO "user" (username) VALUES
    ('zayn');

--* Right table JOIN
SELECT * FROM post
    RIGHT OUTER JOIN "user" ON post.user_id = "user".id;

--* FULL table JOIN
SELECT * FROM post
    FULL OUTER JOIN "user" ON post.user_id = "user".id;

