SELECT suppliers.CompanyName,
COUNT(products.ProductID) 
FROM suppliers
JOIN products ON products.SupplierID = suppliers.SupplierID
WHERE Country = "France"
GROUP BY products.SupplierID
ORDER BY `Nbre produits` DESC;

