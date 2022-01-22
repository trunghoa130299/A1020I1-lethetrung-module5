package vn.vku.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;
import vn.vku.dto.AccountResponse;
import vn.vku.dto.ChangePasswordForm;
import vn.vku.dto.LoginForm;
import vn.vku.service.LoginService;

@CrossOrigin("http://localhost:4200")
@RestController
public class SecurityController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private LoginService loginService;

    @PostMapping(value = "/login")
    public ResponseEntity<AccountResponse> doLogin(@RequestBody LoginForm form){
        AccountResponse account = this.loginService.doLogin(form.getUserName(),
                form.getPassword());
        if (account == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @PostMapping(value = "/change-password")
    public ResponseEntity<String> doChangePassword(@RequestBody ChangePasswordForm form){
        if(this.loginService.doChangePassword(form)){
            return new ResponseEntity<>("{\"message\": \"success\"}", HttpStatus.OK);
        }
        return new ResponseEntity<>("{\"message\": \"fail\"}", HttpStatus.OK);
    }

    @GetMapping("/random")
    public ResponseEntity<AccountResponse> randomStuff(){
        return new ResponseEntity<>(new AccountResponse("Kiểm tra jwt thành công"),
                HttpStatus.OK);
    }
}
