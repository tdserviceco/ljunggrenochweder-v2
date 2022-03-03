-- SQLite
SELECT schedule, name  
FROM schedule 
INNER JOIN staff 
WHERE staff.id = schedule.staff_id