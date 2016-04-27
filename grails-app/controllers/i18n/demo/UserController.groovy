package i18n.demo

import grails.converters.JSON
import org.springframework.web.servlet.support.RequestContextUtils

class UserController {

    def messageSource
    def index(){

    }

    def login() {
        Locale locale=RequestContextUtils.getLocale(request)
        String msg=messageSource.getMessage("user.login.success.message", null, locale)
        render msg
    }
}
