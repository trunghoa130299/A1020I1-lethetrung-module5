package vn.vku.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.vku.entity.Role;
import vn.vku.repository.RoleRepository;
import vn.vku.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Role findById(int i) {
        return roleRepository.findById(i).orElse(null);
    }
}
