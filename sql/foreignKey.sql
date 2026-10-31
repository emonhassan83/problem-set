-- Active: 1708923174325@@127.0.0.1@5432@ph
--* create user table
CREATE Table "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
);

--* create post table by reference by userId
CREATE Table post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id) 
);

--* set NOT NULL in post table user_id column
ALTER Table post
    alter COLUMN user_id SET NOT NULL;

--* Insert user table DATA
INSERT INTO "user" (username) VALUES
    ('john'),
    ('smith'),
    ('jane'),
    ('gigi')

--* show user table DATA
SELECT * FROM "user";

--* INSERT post table data
INSERT INTO post (title, user_id) VALUES
    ('Exploring Advanced Topics in Database Management! 👍', 1),
    ('The Impact of Artificial Intelligence on Modern Computing! 🔢', 2),
    ('Deep Dive into Machine Learning Algorithms 😠', 3),
    ('Building Scalable Web Applications with Microservices Architecture: 🐺', 4),
    ('The Future of Technology: Emerging Trends and Innovations: 🧑‍💼', 3);

--* show post table DATA
SELECT * FROM post;

--? Insertion constraint on INSERT post
--* 1. Attempting to insert a post with a user ID that dose not exist
INSERT INTO post (title, user_id) VALUES
    ('Exploring Advanced Topics in Database Management! 👍', 7);

--* 2. Inserting a post with a valid user ID
--* 3. Attempting to insert a post without specifying a userId
INSERT INTO post (title, user_id) VALUES
    ('Exploring Advanced Topics in Database Management! 👍', NULL);


--? Deletion constraint on DELETE user
--* 1. Restrict Deletion -> ON DELETE RESTRICT / ON DELETE ON ACTION (default)
 DELETE FROM "user"
    WHERE id = 4;

--* 2.Cascading Deletion -> ON DELETE CASCADE

DROP TABLE post;
DROP TABLE "user";

CREATE Table post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id) ON DELETE CASCADE
);

DELETE from "user"
    WHERE id = 3;

--* 3. setting NULL -> ON DELETE SET NULL
DROP TABLE post;
DROP TABLE "user";

CREATE Table post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id) ON DELETE SET NULL
);

DELETE from "user"
    WHERE id = 3;
--* 4. Set Default value -> ON DELETE SET DEFAULT
DROP TABLE post;
DROP TABLE "user";

CREATE Table post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES "user"(id) ON DELETE SET DEFAULT DEFAULT 1
);

DELETE from "user"
    WHERE id = 3;
