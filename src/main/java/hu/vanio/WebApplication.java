package hu.vanio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.actuate.system.ApplicationPidFileWriter;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebApplication {

	public static void main(String[] args) {
        SpringApplication springApp = new SpringApplication(WebApplication.class);
        springApp.addListeners(new ApplicationPidFileWriter("application.pid"));
        springApp.run(args);
        
	}
}
