package vn.vku.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import vn.vku.dto.ProductDTO;
import vn.vku.entity.Product;

import java.util.List;

public interface ProductService {
    Page<Product> getAllProduct(Pageable pageable);

    Product findById(int id);

    void deleteCustomer(int id);

    void saveProduct(Product product);

    void update(ProductDTO productDTO, int id);

    Page<Product> getSearchTag(String t, Pageable pageable);


    Page<Product> getSearchItem(String itemSearch, Pageable pageable);

}
