package com.react;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EchoController {
    
    @GetMapping("/echo")
    @CrossOrigin
    public String generateEcho(@RequestParam (value="request")String request) {
        return request;
    }
    

}
