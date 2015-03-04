package br.com.rsacacio;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter;


@Configuration
@EnableAutoConfiguration
@ComponentScan
public class Application{

    public static void main(String[] args) {
    	SpringApplication.run(Application.class, args);;
    }
    
    @Bean
    public RequestMappingHandlerAdapter  annotationMethodHandlerAdapter()
    {
        final RequestMappingHandlerAdapter annotationMethodHandlerAdapter = new RequestMappingHandlerAdapter();
        final MappingJackson2HttpMessageConverter mappingJacksonHttpMessageConverter = new MappingJackson2HttpMessageConverter();

        List<HttpMessageConverter<?>> httpMessageConverter = new ArrayList<HttpMessageConverter<?>>();
        httpMessageConverter.add(mappingJacksonHttpMessageConverter);

        String[] supportedHttpMethods = { "POST", "GET", "HEAD" , "DELETE"};

        annotationMethodHandlerAdapter.setMessageConverters(httpMessageConverter);
        annotationMethodHandlerAdapter.setSupportedMethods(supportedHttpMethods);

        return annotationMethodHandlerAdapter;
    }
}