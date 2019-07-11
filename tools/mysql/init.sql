CREATE DATABASE orderdb;
USE orderdb;

CREATE TABLE orders
(
  order_id INT NOT NULL
  AUTO_INCREMENT,
  date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  customer_id INT NOT NULL,
  order_status TEXT NOT NULL,
  details TEXT NOT NULL,
  primary key
  (order_id)
);

  SELECT *
  from orders;