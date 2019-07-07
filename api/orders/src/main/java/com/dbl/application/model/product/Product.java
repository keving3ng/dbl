package com.dbl.application.model.product;

public class Product {
  private int UPC;
  private String name;
  private String manufacturer;
  private int quantity;

  public Product(int UPC, String name, String manufacturer, int quantity) {
    this.UPC = UPC;
    this.name = name;
    this.manufacturer = manufacturer;
    this.quantity = quantity;
  }

  public int getUPC() {
    return UPC;
  }

  public void setUPC(int UPC) {
    this.UPC = UPC;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getManufacturer() {
    return manufacturer;
  }

  public void setManufacturer(String manufacturer) {
    this.manufacturer = manufacturer;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  @Override
  public String toString() {
    return quantity + "x {" +
            ", name='" + name + '\'' +
            ", manufacturer='" + manufacturer + '\'' +
            "UPC=" + UPC +
            "}\n";
  }
}