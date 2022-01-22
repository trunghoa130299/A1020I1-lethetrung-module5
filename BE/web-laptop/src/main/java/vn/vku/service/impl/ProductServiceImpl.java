package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import vn.vku.dto.ProductDTO;
import vn.vku.entity.Product;
import vn.vku.entity.ProductType;
import vn.vku.entity.Promotion;
import vn.vku.repository.ProductRepository;
import vn.vku.repository.ProductTypeRepository;
import vn.vku.repository.PromotionRepository;
import vn.vku.service.ProductService;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    PromotionRepository promotionRepository;

    @Autowired
    ProductTypeRepository productTypeRepository;
    @Override
    public Page<Product> getAllProduct(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteCustomer(int id) {
        productRepository.deleteById(id);
    }

    @Override
    public void saveProduct(Product product) {
        this.productRepository.save(product);
    }

    @Override
    public void update(ProductDTO productDTO, int id) {
        Product product = productRepository.findById(id).orElse(null);
        Promotion promotion = promotionRepository.findById(productDTO.getIdPromotion()).orElse(null);
        ProductType productType = productTypeRepository.findById(productDTO.getIdType()).orElse(null);
        if (product != null){
            product.setPromotion(promotion);
            product.setProductType(productType);
            product.setProductName(productDTO.getProductName());
            product.setPrice(productDTO.getPrice());
            product.setQuantity(productDTO.getQuantity());
            product.setAvt(productDTO.getAvt());
            product.setScreen(productDTO.getScreen());
            product.setHdh(productDTO.getHdh());
            product.setCameraT(productDTO.getCameraT());
            product.setCpu(productDTO.getCpu());
            product.setRam(productDTO.getRam());
            product.setRom(productDTO.getRom());
            product.setSdCard(productDTO.getSdCard());
            product.setPin(productDTO.getPin());
//            promotion.setIdPromotion(productDTO.getIdPromotion());
//            productType.setIdType(productDTO.getIdType());
            productRepository.save(product);
        }
    }

    @Override
    public Page<Product> getSearchTag(String t, Pageable pageable) {
        return this.productRepository.searchTag(t,pageable);
    }
    @Override
    public Page<Product> getSearchItem(String itemSearch, Pageable pageable) {
        return this.productRepository.searchItem(itemSearch,pageable);
    }
}
