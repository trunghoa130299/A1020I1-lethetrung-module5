package vn.vku.service;

import vn.vku.entity.ProductType;

import java.util.List;

public interface ProductTypeService {
    List<ProductType> findAll();

    ProductType findById(int idType);
}
