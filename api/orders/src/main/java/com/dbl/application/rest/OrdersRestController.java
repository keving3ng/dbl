package com.dbl.application.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dbl.application.model.Order;
import com.dbl.dao.OrderDao;

@RestController
@RequestMapping("/orders")
public class OrdersRestController {

  @Autowired
  OrderDao OrderDao;

  @RequestMapping(method = RequestMethod.GET)
  public String sayHello() {
    return "Hello World!";
  }

  @RequestMapping(method = RequestMethod.PUT, path = "/addOrder", consumes = "application/json")
  public String addOrder(@RequestBody Order order) {
    boolean isAdded = OrderDao.insertOrder(order);
    String response = "";
    if (isAdded) {
      response = "Inserted Successfully!";
    }
    return response;
  }

  @RequestMapping(method = RequestMethod.GET, path = "/getOrders", produces = "application/json")
  public Order getOrder(@RequestParam int OrderId) {
    Order Order = OrderDao.getOrder(OrderId);
    return Order;
  }
}
