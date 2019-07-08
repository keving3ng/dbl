CREATE DATABASE orderdb;
USE orderdb;

CREATE TABLE orders
(
  order_id INT NOT NULL
  AUTO_INCREMENT,
  date_added TIMESTAMP NOT NULL,
  customer_id INT,
  orderStatus TEXT,
  details TEXT,
  primary key
  (order_id)
);

  SELECT *
  from orders;