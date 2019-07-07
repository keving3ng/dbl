package com.dbl.application.model;

import java.util.Date;
import java.text.SimpleDateFormat;

import com.dbl.application.model.product.Product;

public class Order {
  private String dateAdded;
  private int orderId;
  private int customerId;
  private String status;
  private Product[] details;

  public Order(int orderId, int customerId, Product[] details) {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
    Date date = new Date(System.currentTimeMillis());
    this.dateAdded = formatter.format(date);

    this.orderId = orderId;
    this.customerId = customerId;
    this.details = details;

    updateStatus("Order placed", "Unassigned");

  }

  public String getDateAdded() {
    return dateAdded;
  }

  public int getOrderId() {
    return orderId;
  }

  public int getCustomerId() {
    return customerId;
  }

  public String getStatus() {
    return status;
  }

  public void updateStatus(String status, String employee) {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
    Date date = new Date(System.currentTimeMillis());

    StringBuilder newStatus = new StringBuilder();
    newStatus.append("Employee: " + employee + "\n");
    newStatus.append("Date: " + formatter.format(date) + "\n");
    newStatus.append("Status: " + status + "\n");

    this.status = newStatus.toString();
  }

  private String printDetails(){
    StringBuilder detailString = new StringBuilder();

    for (Product p : details){
      detailString.append(p.toString());
    }

    return detailString.toString();
  }
  @Override
  public String toString() {
    return "Date Added: " + getDateAdded() + " - Order ID: " + getOrderId() + " - Customer ID: " + getCustomerId() + " - Status: "
        + getStatus() + " - Order Details: " + printDetails();
  }

}
