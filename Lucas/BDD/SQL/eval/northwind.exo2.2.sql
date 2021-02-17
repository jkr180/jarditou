SELECT ProductName,UnitPrice
FROM products
JOIN suppliers ON suppliers.SupplierID = products.SupplierID
WHERE CompanyName = "Exotic Liquids";





