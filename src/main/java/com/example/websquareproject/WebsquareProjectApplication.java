package com.example.websquareproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableFeignClients
public class WebsquareProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebsquareProjectApplication.class, args);
    }

    @Bean
    public ServletRegistrationBean getServletRegistrationBean() {
        ServletRegistrationBean<?> websquareServlet = new ServletRegistrationBean<>(
                new websquare.http.DefaultRequestDispatcher());
        websquareServlet.addUrlMappings("*.wq");

        return websquareServlet;
    }

}
