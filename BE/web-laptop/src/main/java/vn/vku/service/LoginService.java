package vn.vku.service;

import vn.vku.dto.AccountResponse;
import vn.vku.dto.ChangePasswordForm;

public interface LoginService {
    AccountResponse doLogin(String userName, String password);

    boolean doChangePassword(ChangePasswordForm form);
}
