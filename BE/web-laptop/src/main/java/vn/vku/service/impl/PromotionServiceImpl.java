package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.Promotion;
import vn.vku.repository.PromotionRepository;
import vn.vku.service.PromotionService;

import java.util.List;

@Service
public class PromotionServiceImpl implements PromotionService {
    @Autowired
    PromotionRepository promotionRepository;

    @Override
    public List<Promotion> findAll() {
        return this.promotionRepository.findAll();
    }

    @Override
    public Promotion findById(int idPromotion) {
        return this.promotionRepository.findById(idPromotion).orElse(null);
    }
}
