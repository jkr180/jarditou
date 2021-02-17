SELECT ROUND(AVG(DATEDIFF(ShippedDate, OrderDate))) AS "Délai de livraison moyen"
FROM orders;