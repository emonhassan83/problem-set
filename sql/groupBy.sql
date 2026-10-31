-- Active: 1708923174325@@127.0.0.1@5432@ph
SELECT * FROM students;

--? GROUP BY finding stu avg age
SELECT country, count(*), avg(age) FROM students
    GROUP BY country;

--* 1. Filter groups using HAVING to show only countries with average age above 20
SELECT country, count(*), avg(age) FROM students
    GROUP BY country
     HAVING avg(age) > 20;

--* 2. Count students born in each year (using aggrade function)
SELECT extract(year from dob) as birth_year, count(*)
    from students
    GROUP BY birth_year;