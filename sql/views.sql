-- Active: 1708923174325@@127.0.0.1@5432@ph
SELECT * from employees;

--* create VIEW (save query as a reference)
CREATE View dept_avg_salary
    AS
    SELECT department_name, avg(salary) FROM employees GROUP BY department_name;

SELECT * from dept_avg_salary;

--* 2nd test case
CREATE View test_view
    AS
    SELECT employee_name, salary, department_name 
    FROM employees 
    WHERE department_name in 
    (SELECT department_name FROM employees WHERE department_name LIKE '%R%');



SELECT * from test_view;


--? Purpose of using VIEW
--* Simplifying complex queries
--* Improved security
--* Enhanced data abstraction