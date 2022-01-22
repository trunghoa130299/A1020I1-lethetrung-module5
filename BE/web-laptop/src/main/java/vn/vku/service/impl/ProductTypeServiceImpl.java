package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.ProductType;
import vn.vku.repository.ProductTypeRepository;
import vn.vku.service.ProductTypeService;

import java.util.List;

@Service
public class ProductTypeServiceImpl implements ProductTypeService {
    @Autowired
    ProductTypeRepository productTypeRepository;

    @Override
    public List<ProductType> findAll() {
        return this.productTypeRepository.findAll();
    }

    @Override
    public ProductType findById(int idType) {
        return this.productTypeRepository.findById(idType).orElse(null);
    }
}
