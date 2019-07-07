package com.dbl.dao.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.dbl.application.model.Order;

@Mapper
public interface OrderMapper {
  @Insert("insert into orders(orderid, customerid, details) values(#{OrderId},#{name})")
  public int insertOrder(Order order);

  @Select("select * from Orders where id=#{OrderId}")
  public Order getOrder(int orderId);
}
