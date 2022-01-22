package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.Evaluates;
import vn.vku.repository.EvaluatesRepository;
import vn.vku.service.EvaluatesService;

import java.util.List;

@Service
public class EvaluatesServiceImpl implements EvaluatesService {

    @Autowired
    EvaluatesRepository evaluatesRepository;

    @Override
    public void save(Evaluates evaluates) {
        this.evaluatesRepository.save(evaluates);
    }

    @Override
    public List<Evaluates> findAll(int id) {
        return this.evaluatesRepository.findByIdPro(id);
    }
}
