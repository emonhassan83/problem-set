-- Active: 1708923174325@@127.0.0.1@5432@ph
SELECT * FROM person2;

--? ALTER using for TABLE column modification
ALTER TABLE person2
    ADD COLUMN email VARCHAR(25) DEFAULT'default@mail.com' NOT NULL;

--? add table data
INSERT INTO person2 VALUES(6, 'mir', 21);

--? delete COLUMN
ALTER TABLE person2
    DROP COLUMN email;

--? rename column NAME
ALTER TABLE person2
    RENAME COLUMN age to user_age;

--? change column constrain (data type)
ALTER TABLE person2
    ALTER COLUMN user_name type VARCHAR(50);

--? save constrain 
ALTER TABLE person2
    ALTER COLUMN user_age set NOT NULL;

--? remove constrain 
ALTER TABLE person2
    ALTER COLUMN user_age drop NOT NULL;

--? save unique constrain (unique_tableName_attribute)
ALTER TABLE person2
    ADD constraint unique_person2_user_name UNIQUE(user_name);

--? set primary KEY
ALTER TABLE person2
    ADD constraint pk_person2_user_name UNIQUE(id);

--? delete unique constrain (unique_tableName_attribute) also you can remove other constrain in  same method
ALTER TABLE person2
    DROP constraint unique_person2_user_name;

--? TRUNCATE method
TRUNCATE TABLE person2;