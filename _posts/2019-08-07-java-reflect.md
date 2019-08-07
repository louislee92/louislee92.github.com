---
layout: post
title: "Java反射机制"
categories: java
tags: 
  - java反射
---

Java反射机制可以使程序在运行状态中，对于任意一个类，都能够检查或修改这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个属性和方法。这是一种相对高级的特性，只能由对Java语言基础很强掌握的开发人员使用。反射是一种较为强大的技术，它可以使得应用程序执行本来不可能执行的操作。

## 使用反射操作类对象

如下面代码所示，`Class.forName`方法通过输入类全限定名`com.test.HelloWorld`，获取到对应类对象，并输入对应类型对象的名称。如果没有找到此类，则抛出`ClassNotFoundException`异常。这是Java反射机制最基础的使用，通过类全限定名，JVM会根据名称获取对应类文件，并将其加载到虚拟机中。


```java
// 通过类名获取类对象
try{
    Class c = Class.forName("com.test.HelloWorld");   
    System.out.println(c.getName());          // 输出：com.test.HelloWorld
} catch (ClassNotFoundException e){
    e.printStackTrace();
}
```

通过获取到的类对象，我们可以获取其所有的字段和方法。并且可以通过Java反射提供的一些方法进行设置字段值或者调用方法等操作。下面通过一个实例展示如何使用Java反射机制。

### 新建一个Student学生类
如下面代码所示，该学生类`Student`有四个属性，分别是school（学校）、grade（年级）、name（姓名）和age（年龄）。并且已省略该类的getter和setter方法。

```java
package com.louislee92;

/**
 * 学生类
 */
public class Student {
    private String school;	// 学校
    private String grade;	// 年级
    private String name;	// 姓名
    private int age;		// 年龄

    // 省略了 getter and setter
}

```

### 获取该类的字段和方法对象

如下面一段代码所示，使用`Class.getDeclaredField`方法获取到Student类的name字段对象`nameField`，该对象是`java.lang.reflect.Field`类型。使用`Class.getDeclaredMethod`方法获取Student类的参数为String类型的setName方法对象`setNameMethod`，该对象是`java.lang.reflect.Method`类型。

```java
// 通过Student类的全限定名 com.louislee92.Student，获取Class对象
Class c = Class.forName("com.louislee92.Student");
Field nameField = c.getDeclaredField("name");
Method setNameMethod = c.getDeclaredMethod("setName", String.class);
```

使用`Class.newInstance`方法可以实例化Student对象，如下所示。

```java
Student t = (Student) c.newInstance();      // 实例化学生对象
```

### 获取或设置字段对象的属性

如下一段代码所示，通过`Field.getName`方法可以获取该字段的名称。`Field.getModifiers`方法可以获取该字段的可访问权限。`Field.getType`方法可以获取该字段的类型。

```java
// 获取nameField对象属性
System.out.println(nameField.getName());        // name
System.out.println(nameField.getModifiers());   // 2
System.out.println(nameField.getType());        // class java.lang.String
```

如下一段代码所示，通过`Field.setAccessible`方法设置该字段的访问权限为可访问状态。`Field.get`方法输入Student实例对象t，可以获取对象t中的name字段值。`Field.set`方法输入Student实例对象t和一个String类型参数，可以将对象t的name字段值设置为`John`。

```java
nameFiled.setAccessible(true);              // 设置访问权限为可访问
System.out.println(nameFiled.get(t));   	// null
nameFiled.set(t, "John");                   // 设置学生t的姓名为 John
System.out.println(t.getName());            // John 
```
### 调用方法对象

如下一段代码所示，通过`Method.invoke`方法输入Student实例对象t和一个String类型参数，就相当于调用`t.setName`方法，通过`t.getName()`方法可以看到已成功将对象t的name字段值设置为`Tom`。

```java
setNameMethod.invoke(t, "Tom");    		// 调用对象t的setName方法
System.out.println(t.getName());        // Tom
```

## 字段类和方法类

Field和Method类均来自`java.lang.reflect`包，该包中提供了一些类和接口，用于获取被分析类和对象的反射信息。下表展示了Java 1.8中`java.lang.reflect`包中提供的类。

|#|类名|描述|
|:------:| ------ | ------ |
|1  |AccessibleObject|该类是同包下Field，Method和Constructor的父类，该类提供标记反射对象访问控制权限的能力。当Field进行 set/get字段时，当Method调用方法时，或者Constructor创建或实例化类对象的时候，将对其成员进行访问权限（public、default、protected、private）进行检查。 |
|2  |Array|Array类提供了静态方法用于动态地创建和访问Java数组。Array类允许在get或set期间进行放大转换，但是如果发生缩小转换，则会抛出IllegalArgumentException异常。|
|3  |Constructor<T>|Constructor类提供了类构造方法的信息和访问权限。它的newInstance方法允许在原有构造方法的形参基础上进行扩展，但是如果进行缩小则会抛出IllegalArgumentException异常。|
|4  |Executable|Executable类是Method和Constructor的父类。|
|5  |Field|Field类提供了类或接口的字段信息和访问权限。反射字段可以是类静态字段或者对象字段。|
|6  |Method|Method类提供了类或接口的方法信息和访问权限。反射方法可以是类静态方法或者对象方法。|
|7  |Modifier|Modifier类提供了静态方法和常量为类极其成员进行解码。修饰符集使用整数标识，不同的位置标识不同的修饰符。|
|8  |Parameter|Parameter类提供了有关方法参数的信息。包括参数名称和修饰符。|
|9  |Proxy|Proxy提供类一些静态方法用于创建动态代理类和对象。|
|10|ReflectPermission|反射操作的权限类。|


<p></p>


而较为常用的就是Field和Method这两个类，Filed类主要功能是获取指定对象的字段值、类型、访问权限等信息，以及设置对象的字段值；Method类主要功能则是获取方法的一些属性信息，以及方法调用等。

Field主要方法有以下几类：

1. get(Object obj)，获取对象实例obj的当前字段值，返回Object类型；除此之外，Filed还提供了获取特定类型的字段值方法，比如getBoolean(Object obj)，getByte(Object obj)，getChar(Object obj)、getInt(Object obj)等等。
2. set(Object obj, Object value)，设置对象实例obj的当前字段值；与get类似，Field也提供了设置特定类型字段值的方法，比如setBoolean(Object obj, Boolean z)等。
3. getType()，获取当前字段的类型，返回Class类型。
4. getName()，获取当前字段的名称。
5. equals(Object obj)，当且仅当obj是Field类型，以及名称、类型和所在声明类相同时，返回true。
6. getAnnotations()，获取当前字段所有注解；类似的方法还有getAnnotation(Class<T> annotationClass)，此方法主要用于检查当前字段是否被annotationClass注解过，如果没有则返回null。

Method的主要方法有以下几类：

1. invoke(Object obj, Object… args)，方法调用，其中obj参数是需要执行调用操作的实例对象，args则是调用该方法需要的参数。
2. getReturnType()，获取当前方法的返回类型，返回Class类型。
3. getParameterTypes()，获取当前方法参数的返回类型，返回Class类型数组。
4. getName()，获取当前方法的名称。
5. isBridge()，判断当前方法是否是桥接方法，桥接方法是编译器在编译后自动生成的一种方法。
6. equals(Object obj)，当且仅当obj是Method类型，以及方法名称、返回类型、参数类型和所在声明类相同时，返回true。
7. getAnnotations()，获取当前方法所有注解；类似的方法还有getAnnotation(Class<T> annotationClass)，此方法主要用于检查当前方法是否被annotationClass注解过，如果没有则返回null。


## 需要注意的问题

反射虽然强大，但是并不能滥用。如果可以，尽量避免使用反射去执行预期的操作。在使用反射机制时，需要注意以下几点问题：
1. 性能开销，因为反射涉及了动态生成的类型，所以无法执行某些Java虚拟机优化。因此，反射操作的性能比不反射的操作较慢，应该避免在性能敏感的程序或者代码块中使用反射。
2. 安全因素，在安全管理器下运行时，反射需要一类可能不会在此情况下出现的运行权限。对于必须运行在受限安全上下文中的代码，这是一个需要考虑的重要因素。
3. 内部暴露，反射机制允许访问非反射代码中的非法操作，例如访问私有字段和方法。因此使用反射可能会导致意外的副作用，即会导致代码功能不正常，以及破坏代码的可移植性。
