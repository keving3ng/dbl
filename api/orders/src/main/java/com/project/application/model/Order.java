package com.project.application.model;

import java.util.Date;
import java.text.SimpleDateFormat;

public class Order {
  String dateAdded;
  int orderId;
  int customerId;
  String status;
  String details;

  public void updateStatus(String status, String employee) {
    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd 'at' HH:mm:ss z");
    Date date = new Date(System.currentTimeMillis());

    StringBuilder newStatus = new StringBuilder();
    newStatus.append("Employee: " + employee + "\n");
    newStatus.append("Date: " + formatter.format(date) + "\n");
    newStatus.append("Status: " + status + "\n");

    this.status = newStatus.toString();
  }

  @Override
  public String toString() {
    return "Date Added: " + dateAdded + " - Order ID: " + orderId + " - Customer ID: " + customerId + " - Status: "
        + status + " - Order Details: " + details;
  }

}
