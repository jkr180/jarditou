SELECT Max(orders.OrderDate)
FROM orders
JOIN customers ON customers.CustomerID = orders.CustomerID
WHERE customers.CompanyName = "Du monde entier";
