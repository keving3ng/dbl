package com.dbl.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.dbl.application.model.Order;
import com.dbl.dao.mapper.OrderMapper;

@Component
public class OrderDao {

  @Autowired
  OrderMapper mapper;

  public boolean insertOrder(Order order) {
    boolean isAdded = mapper.insertOrder(order) > 0;
    return isAdded;
  }

  public Order getOrder(int orderId) {
    Order order = mapper.getOrder(orderId);
    return order;
  }

  public Order[] getAll(){
    Order[] orderList = mapper.getAll();
    return orderList;
  }

  public boolean updateStatus(String status, int orderId){
    boolean isUpdated = mapper.updateStatus(status, orderId) > 0;
    return isUpdated;
  }
}
