package com.dbl.dao.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.dbl.application.model.Order;

@Mapper
public interface OrderMapper {
  @Insert("insert into orders(orderId, customerId, details) values(#{orderId}, #{customerId}, #{details})")
  public int insertOrder(Order order);

  @Select("select * from orders where id=#{orderId}")
  public Order getOrder(int orderId);

  @Select("select * from orders")
  public Order[] getAll();

  @Update("update order set status=#{status} where orderId=#{orderId}")
  public int updateStatus(String status, int orderId);

  // #TODO: Delete functionality for orders later on
}
