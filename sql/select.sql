-- Active: 1708923174325@@127.0.0.1@5432@ph
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(100),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
)

--? insert many students data into table
INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country)
VALUES
  ('John', 'Doe', 18, 'A+', 'Mathematics', 'john.doe@example.com', '2003-05-10', 'O+', 'USA'),
  ('Jane', 'Smith', 19, 'B', 'Science', NULL, '2002-08-25', 'AB-', 'Canada'),
  ('Michael', 'Johnson', 17, 'A', 'History', 'michael.johnson@example.com', '2004-02-15', 'B+', 'UK'),
  ('Emily', 'Williams', 18, 'A', 'Literature', 'emily.williams@example.com', '2003-04-30', 'A-', 'Australia'),
  ('William', 'Brown', 19, 'B+', 'Computer Science', 'william.brown@example.com', '2002-11-20', 'O-', 'New Zealand'),
  ('Olivia', 'Taylor', 17, 'B', 'Physics', 'olivia.taylor@example.com', '2004-01-05', 'AB+', 'Germany'),
  ('James', 'Miller', 18, 'A-', 'Chemistry', 'james.miller@example.com', '2003-07-12', 'B-', 'France'),
  ('Sophia', 'Wilson', 19, 'A', 'Biology', 'sophia.wilson@example.com', '2002-10-17', 'A+', 'Spain'),
  ('Benjamin', 'Anderson', 17, 'B', 'Geography', 'benjamin.anderson@example.com', '2004-03-22', 'O+', 'Italy'),
  ('Emma', 'Garcia', 18, 'A+', 'Art', 'emma.garcia@example.com', '2003-06-08', 'AB-', 'Japan'),
  ('Liam', 'Martinez', 19, 'B+', 'Music', 'liam.martinez@example.com', '2002-09-14', 'B+', 'USA'),
  ('Ava', 'Hernandez', 17, 'A', 'Dance', 'ava.hernandez@example.com', '2004-04-18', 'O-', 'Canada'),
  ('Noah', 'Lopez', 18, 'A-', 'English', 'noah.lopez@example.com', '2003-08-23', 'A-', 'UK'),
  ('Isabella', 'Gonzalez', 19, 'A', 'Computer Programming', 'isabella.gonzalez@example.com', '2002-12-07', 'AB+', 'Australia'),
  ('Mason', 'Perez', 17, 'B', 'Physical Education', 'mason.perez@example.com', '2004-02-01', 'O+', 'New Zealand'),
  ('Sophia', 'Sanchez', 18, 'A', 'Economics', 'sophia.sanchez@example.com', '2003-07-27', 'AB-', 'Germany'),
  ('Ethan', 'Torres', 19, 'B+', 'Psychology', 'ethan.torres@example.com', '2002-11-11', 'B-', 'France'),
  ('Amelia', 'Ramirez', 17, 'B', 'Sociology', 'amelia.ramirez@example.com', '2004-05-05', 'A+', 'Spain'),
  ('Alexander', 'Scott', 18, 'A+', 'Political Science', 'alexander.scott@example.com', '2003-09-30', 'O-', 'Italy'),
  ('Evelyn', 'Nguyen', 19, 'B', 'Anthropology', 'evelyn.nguyen@example.com', '2002-12-25', 'AB+', 'Japan');

--? get table all data
SELECT * FROM students;

--? get table specific data
SELECT email, age FROM students;

--? get table specific as alias data
SELECT email as "user email" FROM students;

--? get table by sorting by student name ASCENDING
SELECT * FROM students ORDER BY first_name ASC;


--? delete table data
Drop TABLE students;

--? get unique country -----> DISTINCT keyword
SELECT DISTINCT country from students ORDER BY country;

--? DATA FILTERING (case study)
--* 1. select students from the USA
--* 2. Select students with 'A' grade in Biology
--* 3. Select students with a specific blood group ('A+')
--* 4. Select students from the USA or Canada
--* 5. Select students from the USA or Canada and age is 18
--* 6. Select students with a grade of 'A' or 'B' in Math or Physics
--* 7. Select students older then 18 and subject Science
--* 8. Select students age not equal 19 and not equal USA
--* 9. Find students age

--? solve 1 ----> using condition for WHERE keyword
SELECT * FROM students
    WHERE country = 'USA';

--? solve 2 -----> multiple condition using AND keyword
SELECT * FROM students
    WHERE grade = 'A' AND course = 'Biology';

--? solve 3
SELECT * FROM students
    WHERE blood_group = 'A+';

--? solve 4 -----> optional condition using OR keyword
SELECT * FROM students
    WHERE country = 'USA' OR country = 'Canada';

--? solve 5 -----> optional condition using OR keyword
SELECT * FROM students
    WHERE (country = 'USA' OR country = 'Canada') AND age = 18;

--? solve 6
SELECT * FROM students
    WHERE (grade = 'A' OR grade = 'B') 
    AND (course = 'Mathematics' OR course = 'Physics');

--? solve 7
SELECT * FROM students
    WHERE age > 18 AND course ='Science';

--? solve 8
SELECT * FROM students
    WHERE age <> 19 AND country != 'USA';

--? solve 9
SELECT *, age(CURRENT_DATE, dob) FROM students;


--? first_name with capital latter --------> upper
SELECT upper(first_name) as first_name_upper, * from students;

--? full name with concat first and last name-----> concat
SELECT concat(first_name, ' ', last_name) as full_name, * from students;

--? length
SELECT length(first_name) as first_name_length, * from students;


/* 
    ? Scalar functions examples
        * 1. UPPER() converts a string to uppercase.
        * 2. LOWER() converts a string to lowercase.
        * 3. CONCAT() concatenates two or more string.
        * 4. LENGTH() Return the number of characters in string.

    ? Aggregate functions
        * 1. AVG() Calculate the average of a set of values.
        * 2. MAX() Returns the max value in a set.
        * 3. MIN() Returns the minimum ADD value in a set.
        * 4. COUNT() Counts the number of characters in a string 
 */

 --? AVG age of students
 SELECT avg(age) from students;

 --? MAX age of students
 SELECT max(age) from students;

 --? MIN age of students
 SELECT min(age) from students;

 --? SUM age of students
 SELECT sum(age) from students;

 --? COUNT age of students
 SELECT count(*) from students;

 --? find max length of first_name student
 SELECT max(length(first_name)) from students;


--? Logical NOT
SELECT * FROM students
    WHERE NOT country = "Canada";

--? Filter out null VALUES
SELECT * FROM students
    WHERE email IS NOT NULL;

--? replace null value with another default value
SELECT COALESCE(email, 'Email not provided') FROM students


--? Efficient way to using query
--  SELECT * FROM students
--         WHERE country = 'USA' OR country = 'Canada' OR  country = 'UK';

 SELECT * FROM students
        WHERE country NOT IN('USA', 'Canada', 'UK');

--? select students age 18 to 19.
SELECT * FROM students
        WHERE age BETWEEN 18 AND 19;

--? LIKE use match query(case sensitive)
SELECT * FROM students
    WHERE first_name LIKE '%am';

SELECT * FROM students
    WHERE first_name LIKE 'A%';

SELECT * FROM students
    WHERE first_name LIKE '__a%';


--? ILIKE use match query(case insensitive)
SELECT * FROM students
    WHERE first_name ILIKE 'a%';


--? LIMIT 
SELECT * FROM students
    LIMIT 5;

 SELECT * FROM students
        WHERE country IN('USA', 'Canada', 'UK') LIMIT 5;

--? OFFSET (skip first table data)
SELECT * FROM students
    LIMIT 5 OFFSET 2;

--? pagination apply
SELECT * FROM students LIMIT 5 OFFSET 5 * 0;
SELECT * FROM students LIMIT 5 OFFSET 5 * 1;
SELECT * FROM students LIMIT 5 OFFSET 5 * 2;

--? Delete specific record data (which students gets grade B)
DELETE FROM students
    WHERE grade = 'B';


--? UPDATE operator
UPDATE students
    set email = 'default@mail.com', age = 30
    WHERE student_id = 1;