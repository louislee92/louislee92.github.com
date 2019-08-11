---
layout: post
title: "Java注解类型的使用"
categories: java
tags: 
  - Java注解
---

Java注解是Java 1.5引入的一种特性，可以将其理解一种注释标签。类似修饰符，Java注解可以修饰类、字段和方法。下面通过元注解、基本注解和自定义注解逐步解释Java注解的使用方法。

## 元注解

注解的定义需要通过Java元注解进行修饰，Java 1.5提供了四种元注解：

（1）**@Target**，用于描述注解的范围，即注解在哪使用。比如`@Target({ElementType.Field, ElementType.Method})`，表示注解使用范围是字段和方法。下表列举了注解的常用范围，即元素类型（ElementType）常见常量。


#|常量名称|描述
----|----|-----
1|CONSTRUCTOR|用于描述构造器 
2|FIELD|用于描述域即类成员变量
3|LOCAL_VARIABLE|用于描述局部变量
4|METHOD|用于描述方法
5|PACKAGE|用于描述包
6|PARAMETER|用于描述参数
7|TYPE|用于描述类、接口(包括注解类型) 或enum声明
8|TYPE_PARAMETER|1.8版本开始，描述类、接口或enum参数的声明
9|TYPE_USE|1.8版本开始，描述一种类、接口或enum的使用声明

<p></p>


（2）**@Retention**，用于描述注解的生命周期，表示需要在什么时候保存该注解。保留策略（RetentionPolicy）有以下几种。


#|常量名称|描述
----|----|-----
1|SOURCE|源文件中保留，即源文件中有效
2|CLASS|Class文件中保留，即class文件中有效
3|RUNTIME|运行时保留，即运行时有效

<p></p>

（3）**@Documented**，用于描述其它类型的注解应该被作为被标注的程序成员的公共API，因此可以被例如javadoc此类的工具文档化。它是一个标记注解，没有成员。


（4）**@Inherited**，用于表示某个注解是可以被继承的。如果一个使用了@Inherited修饰的注解类型被用于一个类，则这个注解将被用于该类的子类。


## 基本注解

基本注解是Java内置的自定义注解，主要用来被编译器识别。表2-3中列出了常用的5个内置注解。


#|注解名称|描述
----|----|-----
1|@Deprecated|用于过时的类、方法、成员变量等
2|@Override|覆盖父类方法，提示子类要复写父类中被 @Override 修饰的方法。
3|@SuppressWarning|阻止警告，因为调用被 @Deprecated 注解的方法后，编译器会警告提醒，而有时候开发者会忽略这种警告，他们可以在调用的地方通过 @SuppressWarnings 达到目的。
4|@FunctionaInterface|函数式接口注解，指定接口必须为函数式接口，这个是 Java 1.8 版本引入的新特性。
5|@SafeVarargs|参数安全类型注解。它的目的是提醒开发者不要用参数做一些不安全的操作,它的存在会阻止编译器产生 unchecked 这样的警告。它是在 Java 1.7 的版本中加入的。

<p></p>

比如Java中的@Deprecated注解会被Java编译器识别，并输出一些警告信息。再比如被@Override修饰过的方法，表示重写了父类或接口的方法， Java编译器会检查该方法的正确性。

## 自定义注解

自定义注解的使用需要依赖框架或工具的识别，一旦某个类、字段或者方法被注解修饰，对应的框架或工具会对其进行识别，并赋予其修饰对象特定的功能。

### Spring中的Component注解
注解使用@interface类型进行声明，可以有自己的属性。比如代码清单2-1所示的Spring的spring-context-5.1.8.RELEASE.jar包中的自定义注解@ Component。

```java
1	@Target({ElementType.TYPE})
2	@Retention(RetentionPolicy.RUNTIME)
3	@Documented
4	@Indexed
5	public @interface Component {
6		String value() default "";
7	}
```

其中第1行`@Target`是元注解，定义该注解可以描述类、接口(包括注解类型) 或enum声明；第2行`@Retention`也是元注解，定义该注解可以保留到运行时；第3行`@Documented`也是元注解，表示该注解可以被类似Javadoc的工具进行文档化；第4行`@Indexed`是Spring的自定义注解；第6行定义了名为`value`的属性，且默认为空字符串，可以看出属性的定义有点类似接口方法的定义。

注解用于修饰类、字段和方法，是一种修饰数据的数据，也被称作元数据。注解的产生给一些Web框架（如Spring，Struts2等）带来了方便，通过注解与框架的结合，可以将一些繁杂的XML配置替换调，用注解这种简单便捷的方式进行配置。

### 配置自定义注解StudentAnnotation

若想要给自定义注解添加一定的功能，就像Spring的注解那样。我们除了要编写注解外，还要编写用于解析该注解的功能类。该功能类主要用于读取并解析注解，然后将该注解所发挥的功能注入到资源中，最后返回注入后的资源。
假如我们需要实现这样一个StudentAnnotation注解，该注解有自己的属性信息。通过为Student类添加该注解，进而实现将注解的属性配置信息注入到Student类中，并最终得到一个与配置信息相同的对象。

以下代码展示了StudentAnnotation注解和Student类的实现代码。

```java
1	@Target(ElementType.TYPE)
2	@Retention(RetentionPolicy.RUNTIME)
3	public @interface StudentAnnotation {
4	    String name() default "佚名";
5	    int age() default 0;
6	}
```

如上述代码所示，我们定义了一个名为`StudentAnnotation`的注解，第1行表示该注解可用于类、接口和枚举。第2行表示该注解可以保留到程序运行期间。第4-5行分别是该注解的字符串类型的name属性和整型age属性。

```java
1	@StudentAnnotation(name="Tom", age=18)
2	public class Student {
3	    private String name;
4	    private int age;
5	    public String getName() {
6	        return name;
7	    }
8	    public void setName(String name) {
9	        this.name = name;
10	    }
11	    public int getAge() {
12	        return age;
13	    }
14	    public void setAge(int age) {
15	        this.age = age;
16	    }
17	}
```

如上述代码所示，我们定义了一个名为Student的类。其中第1行，是`@StudentAnnotation`注解，以及该注解的两个属性name和age，可以看到这两个属性分别设置了字符串类型的“Tom”和整型的18。第3-4行为Student类型的name字段和age字段。第5-16行是该类的getter和setter方法。

下面我们需要编写一个StudentBuilder类，该类用于生成Student实例。如代码清单2-4所示。


```java
1	public class StudentBuilder {
2	    public static Object getStudentInstance() throws Exception {
3	        Class c = Class.forName("com.louislee92.demo. Student");
4	        Object t = c.newInstance();
5	        StudentAnnotation sa = (StudentAnnotation) c.getAnnotation(StudentAnnotation.class);
6	        Field nameFiled = c.getDeclaredField("name");
7	        nameFiled.setAccessible(true);
8	        nameFiled.set(t, sa.name());
9	        Field ageField = c.getDeclaredField("age");
10	        ageField.setAccessible(true);
11	        ageField.set(t, sa.age());
12	        return t;
13	    }
14	public static void main(String[] args) throws Exception {
15	        Student s = (Student) getStudentInstance();
16	        System.out.println(String.format("Name: %s, Age: %s", s.getName(), s.getAge()));
17	    }
18	}
```

如上述代码所示，该方法有一个`getStudentInstance`方法，其中第3行通过读取Student的全限定名得到一个Class对象c。第4行通过`Class.newInstance`方法得到Student实例对象t。接着第5行通过`Class.getAnnotation`方法得到配置在Student类上的StudentAnnotation注解实例。第6-8行和第9-11行分别将注解实例sa的name和age值，注入到Student实例t中。第12行将该实例t返回。最后，通过main方法测试，第16行输出“Name: Tom, Age: 18”。


就这样，通过注解和反射机制，我们编写出了一个简单的依赖注入容器。Spring的IoC容器也是使用类似的方法管理每一个Bean对象的，只不过其内部配置和运行机制比这复杂多了。


