package vn.vku.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import vn.vku.dto.ProductDTO;
import vn.vku.entity.Oder;
import vn.vku.entity.Product;
import vn.vku.entity.ProductType;
import vn.vku.entity.Promotion;
import vn.vku.service.OderService;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin("http://localhost:4200")
@RequestMapping("/order")
@RestController
public class OderController {
    @Autowired
    OderService oderService;

    @RequestMapping(value = "/listOder", method = RequestMethod.GET)
    public ResponseEntity<List<Oder>> getAll() {
        List<Oder> oderList = oderService.findAll();
        if (oderList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(oderList, HttpStatus.OK);
    }
//    @RequestMapping(value = "/addOder", method = RequestMethod.POST)
//    public ResponseEntity<List<FieldError>> createProduct(@RequestBody @Valid Oder oder, BindingResult bindingResult) {
//        if (bindingResult.hasErrors()) {
//            return new ResponseEntity<>(bindingResult.getFieldErrors(),
//                    HttpStatus.NOT_ACCEPTABLE);
//        }
//        List<Oder> oderList = oderService.findAll();
//        boolean daCo = false;
//        for (Oder o: oderList) {
//            if (o.getMaSp() == oder.getMaSp()){
//                o.getSoLuong()++;
//                daCo =true;
//            }
//        }
//        if (!daCo){
//
//        }
//        HttpHeaders headers = new HttpHeaders();
//        return new ResponseEntity<>(headers, HttpStatus.CREATED);
//    }
}
