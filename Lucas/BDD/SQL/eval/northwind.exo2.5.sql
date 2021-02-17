SELECT customers.CompanyName AS "Client",
SUM(`order details`.UnitPrice * `order details`.Quantity) AS "CA",
customers.Country AS "Pays"
FROM customers
JOIN orders ON orders.CustomerID = customers.CustomerID
JOIN `order details` ON `order details`.OrderID = orders.OrderID
GROUP BY customers.CustomerID
HAVING CA > 30000
ORDER BY CA DESC;