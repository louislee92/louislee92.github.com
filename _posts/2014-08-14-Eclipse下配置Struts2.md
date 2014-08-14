#Eclipse下配置Struts2

前几天一直把玩Struts2，折腾来折腾去，最后终于配置好了我的第一个Struts2项目之HelloWorld!

心里还有点小激动呢:)

废话少说这就说明配置步骤

##1. 新建项目

new > Dynamic Web Project

项目名称命名为Struts2-HelloWorld。

##2. 导入jar包

将从官网下载的struts2文档中apps文件夹下的struts2-blank.war解压，然后将其WEB-INF > lib下的所有jar包（好像是13个，这是最基本的jar包）拷贝到Struts2-HelloWorld下的WebContent > WEB-INF > lib下。

##3. 在web.xml中添加struts2过滤器

找到Struts2-HelloWorld项目下的WebContent > WEB-INF > web.xml(如果你的项目中没有，可能是新建项目时没有在Generate web.xml deployment descriptor选项上打对号)，然后编辑，在<web-app></web-app>这一对标签中添加如下代码

    <filter>
        <filter-name>struts2</filter-name>
        <filter-class>org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter</filter-class>
    </filter>

    <filter-mapping>
        <filter-name>struts2</filter-name>
        <url-pattern>/*</url-pattern>
    </filter-mapping>


##4. 添加struts.xml

在项目Struts2-HelloWorld下找到Java Resources > src ，然后在这个目录下新建struts.xml文件,文件内容可参考struts2-blank项目中的struts.xml。
具体代码如下:

    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE struts PUBLIC
       "-//Apache Software Foundation//DTD Struts Configuration 2.3//EN"
    	"http://struts.apache.org/dtds/struts-2.3.dtd">
    <struts>
        <package name="default" namespace="/" extends="struts-default">
        	<action name="index">
                <result>
                	/index.jsp
                </result>
            </action>
        </package>
    </struts>

##5. 添加jsp页面

在Struts2-HelloWorld项目下WebContent目录下新建index.jsp。具体代码如下：

    <%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Insert title here</title>
    </head>
    <body>
	    <h1>Hello World!</h1>
    </body>
    </html>

然后就可以运行项目了，打开服务器，并打开浏览器输入http://localhost:8080/Struts2-HelloWorld/index

