package vn.vku.service;

import vn.vku.entity.Position;

import java.util.List;

public interface PositionService {
    List<Position> findAll();

    Position findById(int positionId);
}
