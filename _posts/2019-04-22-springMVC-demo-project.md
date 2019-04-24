---
layout: post
title: "Spring MVC 项目配置与Jar包小结"
categories: java
tags: 
  - Spring MVC
---

Spring MVC是类似Struts2的Web框架，也是spring框架的一部分。

## 几个基础的配置文件

### Web.xml配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">
    <!-- ContextLoaderListener一般会加载整个Spring容器相关的bean配置管理(如: Log, Service, Dao, PropertiesLoader, etc.) -->
    <context-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/applicationContext.xml</param-value>
    </context-param>
    <listener>
        <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    </listener>


    <!-- DispatcherServlet一般会加载MVC相关的bean配置管理(如: ViewResolver, Controller, MultipartResolver, ExceptionHandler, etc.) -->
    <!-- 配置前端控制器DispatcherServlet -->
    <servlet>
        <servlet-name>dispatcher</servlet-name>
        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>dispatcher</servlet-name>
        <url-pattern>/</url-pattern>
    </servlet-mapping>
</web-app>
```

### applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">

</beans>
```

### dispatcher-servlet.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:mvc="http://www.springframework.org/schema/mvc"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context-2.5.xsd
       http://www.springframework.org/schema/mvc
       http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd">

    <!-- 自动扫描与装配Bean，包含子包 -->
    <context:component-scan base-package="com.helloworld"></context:component-scan>

    <!--指定视图解析器-->
    <bean id="viewResolver" class="org.springframework.web.servlet.view.InternalResourceViewResolver">
        <!-- 视图的路径，设置jsp文件存放的位置，即路径前缀 -->
        <property name="prefix" value="/WEB-INF/jsp/"/>
        <!-- 视图名称后缀，后缀  -->
        <property name="suffix" value=".jsp"/>
    </bean>

    <!-- 自动注册DefaultAnnotationHandlerMapping和AnnotationMethodHandlerAdapter两个bean -->
    <mvc:annotation-driven />


</beans>
```
## 相关jar包

### Spring

```
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\aopalliance-1.0.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\commons-logging-1.2.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-aop-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-aspects-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-beans-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-context-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-context-support-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-core-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-expression-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-instrument-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-instrument-tomcat-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-jdbc-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-jms-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-messaging-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-orm-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-oxm-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-test-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-tx-4.3.18.RELEASE.jar
```

### Spring MVC

```
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-web-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-webmvc-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-webmvc-portlet-4.3.18.RELEASE.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\spring-websocket-4.3.18.RELEASE.jar
```
### jackson 

使用```@ResponseBody```注解，向前台返回Json格式数据时需要依赖以下jar包。

```
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\jackson-annotations-2.9.8.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\jackson-core-2.9.8.jar
C:\Users\Louis Lee\IdeaProjects\HelloWorld\lib\jackson-databind-2.9.8.jar
```


## Spring MVC Controller

使用以下方式对该类进行Controller声明，注解```@Controller```声明该类是一个Controller，```@RequestMapping("/hi")```声明该类所在路由是```/hi```
```java
@Controller
@RequestMapping("/hi")
public class HelloController {
	// controllers 
}
```

### 基本路由 Model + JSP

```java
    /**
     * 基本路由：Model + JSP
     * @param model
     * @return
     */
    @RequestMapping("/say")
    public String say(Model model){           // 参数中传入Model，用于渲染jsp中变量
        model.addAttribute("name","路易斯"); // 指定Model的值
        model.addAttribute("url","https://louislee92.com"); // 指定Model的值
        return "say";   // 返回值是
    }


```

### 获取URL参数的路由

```java
    /**
     * 获取URL参数的路由
     * 在Spring MVC中，可以使用@PathVariable注释将一个方法参数绑定到一个URI模板变量的值
     * @param model
     * @param params
     * @return
     */
    @RequestMapping("/pathVar/{params}")
    public String pathVar(Model model,
                          @PathVariable(value = "params") String params){

        model.addAttribute("params", params);
        return "pathVar";
    }

```
### 非模板路由

```java
    /**
     * 非模板路由
     * 如果您使用 @ResponseBody 注释到方法， spring 将尝试转换它的返回值，并自动写入到HTTP响应。在这种情况下，并不需要一个特定的视图。
     * 注：方法不一定需要返回字符串类型。
     * @param model
     * @return
     */
    @RequestMapping(value = "/responseBody")
    @ResponseBody
    public String responseBody(Model model){
        return "I'm response body from back end!";
    }

```

### 接收Json数据，并返回JSON数据

```java
    /**
     * 返回JSON数据
     * 需要依赖jackson-core-2.9.8，jackson-databind-2.9.8，jackson-annotations-2.9.8三个jar包
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/responseJsonBody", method = RequestMethod.POST)
    public Map<String, Object> responseJsonBody(@RequestParam("data") String data){
        Map<String, Object> map = new HashMap<String, Object>();
        map.put("time", new Date());
        map.put("data", data);
        return map;
    }

```


### 重定向路由

```java
    /**
     * 重定向路由
     * @param model
     * @return
     */
    @RequestMapping(value = "/redirect", method = RequestMethod.GET)
    public String redirect(Model model) {
        return "redirect:/hi/say";
    }
```
    
