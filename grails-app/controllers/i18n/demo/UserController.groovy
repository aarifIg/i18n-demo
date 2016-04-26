package i18n.demo

import grails.converters.JSON
import org.springframework.web.servlet.support.RequestContextUtils

class UserController {

    def messageSource

    def login() {
        Locale locale=RequestContextUtils.getLocale(request)
        String msg=messageSource.getMessage("user.login.success.message", [] as Object[], locale)
        render msg
    }
}
