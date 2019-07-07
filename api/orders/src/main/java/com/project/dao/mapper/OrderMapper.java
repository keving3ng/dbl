package com.project.dao.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.project.application.model.Order;

@Mapper
public interface OrderMapper {

  @Insert("insert into Orders(id,name) values(#{OrderId},#{name})")
  public int insertOrder(Order Order);

  @Select("select * from Orders where id=#{OrderId}")
  public Order getOrder(int OrderId);
}
