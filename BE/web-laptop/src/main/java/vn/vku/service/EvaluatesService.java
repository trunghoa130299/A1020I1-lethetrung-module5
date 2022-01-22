package vn.vku.service;

import vn.vku.entity.Evaluates;

import java.util.List;

public interface EvaluatesService {
    void save(Evaluates evaluates);

    List<Evaluates> findAll(int id);
}
