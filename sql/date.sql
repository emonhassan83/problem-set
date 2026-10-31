-- Active: 1708923174325@@127.0.0.1@5432@ph

-- SHOW timezone;

--? Get TIMESTAMP
SELECT now();

--? Create table
CREATE TABLE timeZ (ts TIMESTAMP without time zone, tsz TIMESTAMP with time zone);

--? Insert table DATA
INSERT into timeZ VALUES('2024-01-12 10:45:00', '2024-01-12 10:45:00')

--? Show table DATA
SELECT * FROM timeZ;

--? Select Today date
SELECT CURRENT_DATE;
--? Select Today date with casting
SELECT now()::date;
SELECT now()::time;

--? date format: postgres docs---->(postgres to_char format)
SELECT to_char(now(), 'yyyy-MM-dd');
SELECT to_char(now(), 'TZH');

--? date format: interval function
SELECT CURRENT_DATE - INTERVAL '1 year 1 month' as interval;

--? Get age
SELECT age(CURRENT_DATE, '2000-06-10');

--? Extract date(casting)
SELECT extract (YEAR FROM '2000-06-10'::date);
SELECT 1 :: BOOLEAN;