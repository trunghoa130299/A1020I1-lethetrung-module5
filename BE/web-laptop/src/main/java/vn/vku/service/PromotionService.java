package vn.vku.service;

import vn.vku.entity.Promotion;

import java.util.List;

public interface PromotionService {
    List<Promotion> findAll();

    Promotion findById(int idPromotion);
}
