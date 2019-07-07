package com.project.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.project.application.model.Order;
import com.project.dao.mapper.OrderMapper;

@Component
public class OrderDao {

  @Autowired
  OrderMapper mapper;

  public boolean insertOrder(Order Order) {
    boolean isAdded = mapper.insertOrder(Order) > 0;
    return isAdded;
  }

  public Order getOrder(int OrderId) {
    Order Order = mapper.getOrder(OrderId);
    return Order;
  }
}
