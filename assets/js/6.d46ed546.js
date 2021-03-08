(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{491:function(a,e,r){a.exports=r.p+"assets/img/jvmmm.47725a4a.jpeg"},492:function(a,e,r){a.exports=r.p+"assets/img/java8jvmmm-xaiocaijishu.9114aafd.jpg"},493:function(a,e,r){a.exports=r.p+"assets/img/java8jvmmm-exception.78e48d75.jpg"},494:function(a,e,r){a.exports=r.p+"assets/img/compressed-class-space.7ea36731.jpg"},495:function(a,e,r){a.exports=r.p+"assets/img/no-compressed-class-space.90fb9119.jpg"},496:function(a,e,r){a.exports=r.p+"assets/img/chunking-allocator.0e44982a.jpg"},497:function(a,e,r){a.exports=r.p+"assets/img/programcounter-work-flow.cb44183d.jpeg"},498:function(a,e,r){a.exports=r.p+"assets/img/memory-generational-design.dce52ac9.jpeg"},499:function(a,e,r){a.exports=r.p+"assets/img/allocate-memory-for-object.440c0a7a.jpeg"},500:function(a,e,r){a.exports=r.p+"assets/img/jmm.31cc0a00.jpeg"},501:function(a,e,r){a.exports=r.p+"assets/img/thread-atomic-action.dda60e84.jpeg"},553:function(a,e,r){"use strict";r.r(e);var t=r(17),s=Object(t.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("这里讨论的Java内存模型是一个广义的概念，分为两部分，一部分是JVM存储内存模型，另一部分是Java并发内存模型。前者和数据存储相关，后者主要和多线程相关。")]),a._v(" "),t("h1",{attrs:{id:"一、jvm存储内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、jvm存储内存模型"}},[a._v("#")]),a._v(" 一、JVM存储内存模型")]),a._v(" "),t("p",[a._v("先看两个图")]),a._v(" "),t("p",[a._v("JVM存储内存模型图一\n"),t("img",{attrs:{src:r(491),alt:"jvmmm.jpeg"}})]),a._v(" "),t("p",[a._v("JVM存储内存模型图二\n"),t("img",{attrs:{src:r(492),alt:"java8jvmmm-xaiocaijishu.jpg"}})]),a._v(" "),t("p",[a._v("JVM存储内存模型图三\n"),t("img",{attrs:{src:r(493),alt:"java8jvmmm-exception.jpg"}})]),a._v(" "),t("p",[a._v("充分阅读以上三个图，从不同角度建立JVM存储内存模型在脑海中的记忆。\n有以下这些区域：堆、虚拟机栈、本地方法栈、元空间、程序计数器、直接内存。")]),a._v(" "),t("p",[a._v("如果从线程的角度来看，又可以分为线程共享和线程私有两类。\n线程私有：")]),a._v(" "),t("ul",[t("li",[a._v("程序计数器 pc register")]),a._v(" "),t("li",[a._v("虚拟机栈 vm stack")]),a._v(" "),t("li",[a._v("本地方法栈 native stack")])]),a._v(" "),t("p",[a._v("线程共享的：")]),a._v(" "),t("ul",[t("li",[a._v("堆   heap")]),a._v(" "),t("li",[a._v("元空间  metaspace")]),a._v(" "),t("li",[a._v("直接内存 direct memory")])]),a._v(" "),t("h2",{attrs:{id:"_1-元空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-元空间"}},[a._v("#")]),a._v(" 1 元空间")]),a._v(" "),t("p",[a._v("元空间就是JVM规范里的"),t("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.5.4",target:"_blank",rel:"noopener noreferrer"}},[a._v("方法区"),t("OutboundLink")],1),a._v("概念的实现。")]),a._v(" "),t("p",[a._v("用于存储Java字节码信息，分为：")]),a._v(" "),t("ul",[t("li",[a._v("Klass Metaspace")]),a._v(" "),t("li",[a._v("NoKlass Metaspace")])]),a._v(" "),t("h3",{attrs:{id:"_1-1-方法区的位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-方法区的位置"}},[a._v("#")]),a._v(" 1.1 方法区的位置")]),a._v(" "),t("p",[a._v("在jvm1.7的时候，存在一个方法区，它是在堆里的，但是1.8把这一块内容移除了堆。")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.infoq.com/articles/Java-PERMGEN-Removed/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Where Has the Java PermGen Gone?"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"_1-2-klass-metaspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-klass-metaspace"}},[a._v("#")]),a._v(" 1.2 Klass Metaspace")]),a._v(" "),t("p",[a._v("Klass存放的是类信息，就是class文件在jvm里的运行时数据结构。这部分默认放在Compressed Class Pointer Space中，是一块连续的内存区域，\n紧接着Heap，和之前的perm一样。通过-XX:CompressedClassSpaceSize来控制这块内存的大小，默认是1G。\n下图展示了对象的存储模型，_mark是对象的Mark Word，_klass是元数据指针。\n"),t("img",{attrs:{src:r(494),alt:"compressed-class-space.jpg"}})]),a._v(" "),t("p",[a._v("Compressed Class Pointer Space不是必须有的，如果设置了-XX:-UseCompressedClassPointers，或者-Xmx设置大于32G，就不会有这块内存，这种情况下klass都会存在NoKlass Metaspace里。\n"),t("img",{attrs:{src:r(495),alt:"no-compressed-class-space.jpg"}})]),a._v(" "),t("h3",{attrs:{id:"_1-3-noklass-metaspace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-noklass-metaspace"}},[a._v("#")]),a._v(" 1.3 NoKlass Metaspace")]),a._v(" "),t("p",[a._v("NoKlass Metaspace专门来存klass相关的其他的内容，比如method，constantPool等，可以由多块不连续的内存组成。")]),a._v(" "),t("p",[a._v("这块内存是必须的，虽然叫做NoKlass Metaspace，但是也其实可以存klass的内容，上面已经提到了对应场景。")]),a._v(" "),t("p",[a._v("NoKlass Metaspace在本地内存中分配。")]),a._v(" "),t("h3",{attrs:{id:"_1-4-内存管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-内存管理"}},[a._v("#")]),a._v(" 1.4 内存管理")]),a._v(" "),t("p",[a._v("Metaspace VM使用一个块分配器(chunking allocator)来管理Metaspace空间的内存分配。块的大小依赖于类加载器的类型。")]),a._v(" "),t("p",[a._v("Metaspace VM中有一个全局的可使用的块列表（a global free list of chunks）。")]),a._v(" "),t("p",[a._v("当类加载器需要一个块的时候，类加载器从全局块列表中取出一个块，添加到它自己维护的块列表中。当类加载器死亡，它的块将会被释放，归还给全局的块列表。\n块（chunk）会进一步被划分成blocks,每个block存储一个元数据单元(a unit of metadata)。Chunk中Blocks的是分配线性的（pointer bump）。这些chunks被分配在内存映射空间(memory mapped(mmapped) spaces)之外。在一个全局的虚拟内存映射空间（global virtual mmapped spaces）的链表，当任何虚拟空间变为空时，就将该虚拟空间归还回操作系统。")]),a._v(" "),t("p",[a._v("下面这幅图展示了Metaspace使用metachunks在mmapeded virual spaces分配的情形。\n"),t("img",{attrs:{src:r(496),alt:"chunking-allocator.jpg"}})]),a._v(" "),t("h3",{attrs:{id:"_1-5-oom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-oom"}},[a._v("#")]),a._v(" 1.5 OOM")]),a._v(" "),t("p",[a._v("Metaspace一样会OOM的。\n在metaspace中，类和其元数据的生命周期与其对应的类加载器相同，只要类的类加载器是存活的，在Metaspace中的类元数据也是存活的，不能被回收。\n每个加载器有单独的存储空间，当GC发现某个类加载器不再存活了，会把对应的空间整个回收。因为正常情况下类加载器基本上不太可能被回收，所以metaspace垃圾回收的机会并不多。")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",[a._v("这里涉及到类加载器的结构和安全考虑的知识，一个类加载器的namespace涵盖它所有父加载器的namespace。")])]),a._v(" "),t("p",[a._v("更多细节和metaspace的结构，参考这篇javaloop翻译的外文"),t("a",{attrs:{href:"https://javadoop.com/post/metaspace",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解堆外内存 Metaspace"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_2-虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-虚拟机栈"}},[a._v("#")]),a._v(" 2 虚拟机栈")]),a._v(" "),t("p",[a._v("与程序计数器一样，Java 虚拟机栈也是线程私有的，它的生命周期和线程相同，描述的是 Java 方法执行的内存模型，每次方法调用的数据都是通过栈传递的。每个线程创建时 都会创建一个java虚拟机栈，其内部保存着一个一个栈帧（stack Frame），对应着一次次java 方法的调用。")]),a._v(" "),t("h3",{attrs:{id:"_2-1-栈桢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-栈桢"}},[a._v("#")]),a._v(" 2.1 栈桢")]),a._v(" "),t("p",[a._v("更多内容参考另一篇文章"),t("a",{attrs:{href:"./java-stack-frame.html?_blank"}},[a._v("Java Stack Frame")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-栈的oom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-栈的oom"}},[a._v("#")]),a._v(" 2.2 栈的OOM")]),a._v(" "),t("p",[a._v("通过-Xss这个参数可以设置jvm每个线程的虚拟机栈的大小，默认值和平台有关（不同平台默认值不同），我们最常用的Linux64位服务器默认值好像是1024k。")]),a._v(" "),t("ul",[t("li",[a._v("StackOverFlowError： 若 Java 虚拟机栈的内存大小不允许动态扩展，那么当线程请求栈的深度超过当前 Java 虚拟机栈的最大深度的时候，就抛出 StackOverFlowError 错误。")]),a._v(" "),t("li",[a._v("OutOfMemoryError： 若 Java 虚拟机栈的内存大小允许动态扩展，且当线程请求栈时内存用完了，无法再动态扩展了，此时抛出 OutOfMemoryError 错误。")])]),a._v(" "),t("h2",{attrs:{id:"_3-程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-程序计数器"}},[a._v("#")]),a._v(" 3 程序计数器")]),a._v(" "),t("p",[a._v("程序计数器是一块很小的空间，它的作用可以看做是当前线程所执行的字节码的行号指示器。\n"),t("img",{attrs:{src:r(497),alt:"programcounter-work-flow.jpeg"}}),a._v("\n由上图可以看出，程序计数器也是因为线程而产生的，与虚拟机栈配合完成计算操作。")]),a._v(" "),t("p",[a._v("它有两个主要的作用：")]),a._v(" "),t("ol",[t("li",[a._v("字节码解释器通过改变程序计数器来依次读取指令，从而实现代码的流程控制，如：顺序执行、选择、循环、异常处理。")]),a._v(" "),t("li",[a._v("在多线程的情况下，程序计数器用于记录当前线程执行的位置，从而当线程被切换回来的时候能够知道该线程上次运行到哪儿了。")])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",[a._v("程序计数器是唯一一个不会出现 OutOfMemoryError 的内存区域，它的生命周期随着线程的创建而创建，随着线程的结束而死亡。")])]),a._v(" "),t("h2",{attrs:{id:"_4-堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-堆"}},[a._v("#")]),a._v(" 4 堆")]),a._v(" "),t("p",[a._v("是内存区域中最大的一块区域，被所有线程共享，存储着几乎所有的实例对象、数组。\nJava 堆是垃圾收集器管理的主要区域，因此很多时候也被称做“GC 堆”。")]),a._v(" "),t("h3",{attrs:{id:"_4-1-堆内存分布"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-堆内存分布"}},[a._v("#")]),a._v(" 4.1 堆内存分布")]),a._v(" "),t("p",[a._v("从内存回收的角度来看，由于现在收集器基本都采用分代收集算法，所以 Java 堆中还可以细分为：新生代和老年代。再细致一点的有 Eden 空间、From Survivor 空间、To Survivor 空间等。从内存分配的角度来看，线程共享的 Java 堆中可能划分出多个线程私有的分配缓冲区(Thread Local Allocation Buffer,TLAB，为了提高分配对象的效率)。不过无论如何划分，都与存放内容无关，无论哪个区域，存储的都仍然是对象实例，进一步划分的目的是为了更好地回收内存，或者更快地分配内存。\n"),t("img",{attrs:{src:r(498),alt:"memory-generational-design.jpeg"}})]),a._v(" "),t("p",[a._v("下图可以帮我们更好地理解堆对象是如何申请到内存存放起来的。\n"),t("img",{attrs:{src:r(499),alt:"allocate-memory-for-object.jpeg"}})]),a._v(" "),t("h3",{attrs:{id:"_4-2-垃圾回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-垃圾回收算法"}},[a._v("#")]),a._v(" 4.2 垃圾回收算法")]),a._v(" "),t("p",[a._v("堆是垃圾回收的主要的阵地，从serial到CMS，再到G1和ZGC，堆这里上演着丰富多彩的垃圾回收的故事。\n更多请参考另一篇文章"),t("a",{attrs:{href:"./java-garbage-collection.html?_blank"}},[a._v("Java Garbage Collection")])]),a._v(" "),t("h3",{attrs:{id:"_4-3-堆的oom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-堆的oom"}},[a._v("#")]),a._v(" 4.3 堆的OOM")]),a._v(" "),t("p",[a._v("-Xmx 的默认值为你当前机器最大内存的 1/4\n-Xms 的默认值为你当前机器最大内存的 1/64\n堆是最容易发生OOM的地方，拥有众多参数和调节手段。")]),a._v(" "),t("p",[a._v("更多堆的知识，可以访问"),t("a",{attrs:{href:"https://www.yuque.com/vpwpw5/wu5tdl/ymo5pp",target:"_blank",rel:"noopener noreferrer"}},[a._v("java堆"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_5-本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-本地方法栈"}},[a._v("#")]),a._v(" 5 本地方法栈")]),a._v(" "),t("p",[a._v("和虚拟机栈所发挥的作用非常相似，区别是： 虚拟机栈为虚拟机执行 Java 方法 （也就是字节码）服务，而本地方法栈则为虚拟机使用到的 Native 方法服务。")]),a._v(" "),t("p",[a._v("在 HotSpot 虚拟机中和 Java 虚拟机栈合二为一。")]),a._v(" "),t("p",[a._v("本地方法被执行的时候，在本地方法栈也会创建一个栈帧，用于存放该本地方法的局部变量表、操作数栈、动态链接、出口信息。\n方法执行完毕后相应的栈帧也会出栈并释放内存空间，也会出现 StackOverFlowError 和 OutOfMemoryError 两种错误")]),a._v(" "),t("h2",{attrs:{id:"_6-直接内存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-直接内存"}},[a._v("#")]),a._v(" 6 直接内存")]),a._v(" "),t("p",[a._v("直接内存 (Direct Memory) 并不是虚拟机运行时数据区的一部分，也不是 Java 虚拟机规范中定义的内存区域。\n但是这部分内存也被频繁地使用，而且也可能导致 OutOfMemoryError 异常出现，所以我们放到这里一起讲解。\n在 JDK 1.4 中新加入了 NIO (New Input/Output) 类，引入了一种基于通道 (Channel) 与缓冲区 (Buffer) 的 I/O 方式。\n它可以使用 Native 函数库直接分配堆外内存，然后通过一个存储在 Java 堆中的 DirectByteBuffer 对象作为这块内存的引用进行操作。\n这样能在一些场景中显著提高性能，因为避免了在 Java 堆和 Native 堆中来回复制数据。\n显然，本机直接内存的分配不会受到 Java 堆大小的限制，但是，既然是内存，肯定还是会受到本机总内存 (包括 RAM 以及 SWAP 区或者分页文件) 大小以及处理器寻址空间的限制。\n如果内存区域总和大于物理内存的限制，也会出现 OOM。")]),a._v(" "),t("p",[a._v("现在我们知道了JVM存储内存模型有堆、JVM栈、本地栈、程序计数器、元空间，也知道了直接内存和NIO的关系。")]),a._v(" "),t("h1",{attrs:{id:"二、java并发内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、java并发内存模型"}},[a._v("#")]),a._v(" 二、Java并发内存模型")]),a._v(" "),t("p",[a._v("老规矩，先上图。\n"),t("img",{attrs:{src:r(500),alt:"jmm.jpeg"}}),a._v("\nJMM分为主存储器(Main Memory)和工作存储器(Working Memory)两种。")]),a._v(" "),t("ul",[t("li",[a._v("主存储器是实例位置所在的区域，所有的实例都存在于主存储器内。比如，实例所拥有的字段即位于主存储器内，主存储器是所有的线程所共享的。")]),a._v(" "),t("li",[a._v("工作存储器是线程所拥有的作业区，每隔线程都有其专用的工作存储器。工作存储器有主存储器中必要的拷贝，称之为工作拷贝(Working Copy)。")])]),a._v(" "),t("p",[a._v("在这个模型中，线程无法对住存储器"),t("strong",[a._v("直接")]),a._v("进行操作，只能通过主存进行交换。")]),a._v(" "),t("p",[a._v("那么这些内存区域都是在哪里存储的呢？如果非要和JVM的模型有个对应的话，你可以认为主存中的内容是Java堆中的对象，而工作内存对应的是虚拟机栈中的内容。\n但是实际上，主内存也可能存在于高速缓存中，或者CPU的寄存器上；工作内存也可能存在于硬件内存中，所以我们不用太纠结其具体位置。")]),a._v(" "),t("h2",{attrs:{id:"_1-jmm模型的原子操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jmm模型的原子操作"}},[a._v("#")]),a._v(" 1 JMM模型的原子操作")]),a._v(" "),t("p",[a._v("为了支持JMM，Java定义了8种原子操作(Action)\n"),t("img",{attrs:{src:r(501),alt:"thread-atomic-action.jpeg"}})]),a._v(" "),t("h3",{attrs:{id:"read-读取"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-读取"}},[a._v("#")]),a._v(" read(读取)")]),a._v(" "),t("p",[a._v("作用于主内存，它把变量从主内存传到线程的工作内存中，供后面的load动作使用")]),a._v(" "),t("h3",{attrs:{id:"load-载入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-载入"}},[a._v("#")]),a._v(" load(载入)")]),a._v(" "),t("p",[a._v("作用于工作内存，它把read操作的值放入到工作内存中的变量副本中")]),a._v(" "),t("h3",{attrs:{id:"use-使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-使用"}},[a._v("#")]),a._v(" use(使用)")]),a._v(" "),t("p",[a._v("作用于工作内存，它把工作内存中的变量传递给执行引擎，每当虚拟机遇到一个需要使用这个变量的指令时，将会执行这个动作")]),a._v(" "),t("h3",{attrs:{id:"assign-赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assign-赋值"}},[a._v("#")]),a._v(" assign(赋值)")]),a._v(" "),t("p",[a._v("作用于工作内存，它把从执行引擎获取的值赋值给工作内存中的变量，每当虚拟机遇到一个给变量赋值的指令时，将会执行这个动作")]),a._v(" "),t("h3",{attrs:{id:"store-存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#store-存储"}},[a._v("#")]),a._v(" store(存储)")]),a._v(" "),t("p",[a._v("作用于工作内存，它把工作内存中的一个变量传提给主内存，以备后续的write操作使用")]),a._v(" "),t("h3",{attrs:{id:"write-写入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#write-写入"}},[a._v("#")]),a._v(" write(写入)")]),a._v(" "),t("p",[a._v("作用于主内存，它把store传送的值放入到主内存的变量中")]),a._v(" "),t("h3",{attrs:{id:"lock-锁定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lock-锁定"}},[a._v("#")]),a._v(" lock(锁定)")]),a._v(" "),t("p",[a._v("作用于主内存，把变量标记为线程独占状态")]),a._v(" "),t("h3",{attrs:{id:"unlock-解锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unlock-解锁"}},[a._v("#")]),a._v(" unlock(解锁)")]),a._v(" "),t("p",[a._v("作用于主内存，释放变量的独占状态")]),a._v(" "),t("h2",{attrs:{id:"_2-volatile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-volatile"}},[a._v("#")]),a._v(" 2 volatile")]),a._v(" "),t("p",[a._v("这个关键字有两个作用：")]),a._v(" "),t("ol",[t("li",[a._v("防止指令重排")]),a._v(" "),t("li",[a._v("内存可见性(即时刷新值到主内存)\n我们重点关注第2个，使用了volatile关键字的变量，每当变量的值有变动时，都会把更改立即同步到主内存中；而如果某个线程想要使用这个变量，则先要从主内存中刷新到工作内存上，这样保证了最大的变量可见性。")])]),a._v(" "),t("p",[a._v("但是需要注意的是volatile并不能保证资源绝对线程安全，高并发下还是有可能造成值错误。要保证资源的绝对线程安全，需要用synchronized、final和锁这种更重的保证可见性的方式。")]),a._v(" "),t("p",[a._v("那为什么volatile在jdk源码中还是应用很广泛呢？我认为是这种防止指令冲排和内存可见性可以以低于锁的成本，带来更好的并发体验。")]),a._v(" "),t("p",[a._v("更多volatile的资料，可以参考"),t("a",{attrs:{href:"https://monkeysayhi.github.io/2016/11/29/volatile%E5%85%B3%E9%94%AE%E5%AD%97%E7%9A%84%E4%BD%9C%E7%94%A8%E3%80%81%E5%8E%9F%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[a._v("volatile关键字的作用、原理"),t("OutboundLink")],1)]),a._v(" "),t("h2",{attrs:{id:"_3-happens-before原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-happens-before原则"}},[a._v("#")]),a._v(" 3 happens-before原则")]),a._v(" "),t("p",[a._v("Java语言中默认的一些“有序”行为，也就是**先行发生(happens-before)**原则，这些可能在写代码的时候没有感知，因为它是一种默认行为。\n下面的原则是《java并发编程实践》这本书中队一些法则的描述。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("程序次序")]),a._v("：一个线程内，按照代码顺序，写在前面的操作先行发生于写在后面的操作")]),a._v(" "),t("li",[t("strong",[a._v("监视器锁定")]),a._v("：unlock操作先行发生于后面对同一个锁的lock操作")]),a._v(" "),t("li",[t("strong",[a._v("volatile")]),a._v("：对一个变量的写操作先行发生于后面对这个变量的读操作")]),a._v(" "),t("li",[t("strong",[a._v("传递规则")]),a._v("：如果操作A先行发生于操作B，而B又先行发生于操作C，即可以得出操作A先行发生于操作C")]),a._v(" "),t("li",[t("strong",[a._v("线程启动")]),a._v("：对线程start()的操作先行发生于线程内的任何操作")]),a._v(" "),t("li",[t("strong",[a._v("线程中断")]),a._v("：对线程interrupt()的调用先行发生于线程代码中检测到中断事件的发生，可以通过Thread.interrupted()方法检测是否发生中断")]),a._v(" "),t("li",[t("strong",[a._v("线程终结规则")]),a._v("：线程中的所有操作先行发生于检测到线程终止，可以通过Thread.join()、Thread.isAlive()的返回值检测线程是否已经终止")]),a._v(" "),t("li",[t("strong",[a._v("对象终结规则")]),a._v("：一个对象的初始化完成先行发生于它的finalize()方法的开始")])]),a._v(" "),t("h2",{attrs:{id:"_4-内存屏障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-内存屏障"}},[a._v("#")]),a._v(" 4. 内存屏障")]),a._v(" "),t("p",[a._v("happens-before那么多的规则和特性，是靠什么保证的呢？没错，就是内存屏障。")]),a._v(" "),t("p",[a._v("内存屏障(Memory Barrier)用于控制在特定条件下的重排序和内存可见性问题。JMM内存屏障可以分为读屏障和写屏障，Java的内存屏障实际上也是上述两种的组合。Java编译器在生成字节码时，会在执行指令序列的适当位置插入内存屏障来限制处理器的重排序。")]),a._v(" "),t("p",[a._v("下面介绍这些组合")]),a._v(" "),t("h3",{attrs:{id:"_4-1-load-load-barriers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-load-load-barriers"}},[a._v("#")]),a._v(" 4.1 Load-Load Barriers")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("load1\nLoadLoad\nload2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("保证load1数据的装载优先于load2以及所有后续装载指令的装载。")]),a._v(" "),t("p",[a._v("对于Load Barrier来说，在指令前插入Load Barrier，可以让高速缓存中的数据失效，强制重新从主内存加载数据。")]),a._v(" "),t("h3",{attrs:{id:"_4-2-load-store-barriers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-load-store-barriers"}},[a._v("#")]),a._v(" 4.2 Load-Store Barriers")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("load1\nLoadStore\nstore2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("保证load1数据的装载优先于store2以及后续的存储指令刷新到主内存。")]),a._v(" "),t("h3",{attrs:{id:"_4-3-store-store-barriers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-store-store-barriers"}},[a._v("#")]),a._v(" 4.3 Store-Store Barriers")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("store1\nStoreStore\nstore\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("保证store1数据对于其他处理器可见，优先于store2以及所有后续存储指令的存储。")]),a._v(" "),t("p",[a._v("对于Store Barrier来说，在指令前插入Store Barrier，能让写入缓存中的最新数据更新写入主内存，让其他线程可见。")]),a._v(" "),t("h3",{attrs:{id:"_4-4-store-load-barriers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-store-load-barriers"}},[a._v("#")]),a._v(" 4.4 Store-Load Barriers")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("store1\nStoreLoad\nload2\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("在load2及后续所有读取操作执行前，保证store1的写入对所有处理器可见。这条内存屏障指令是一个全能型的屏障，它同时具有其他3条屏障的效果，而且他的开销也是4个屏障中最大的一个。")]),a._v(" "),t("p",[a._v("参考：")]),a._v(" "),t("ol",[t("li",[a._v("李国 深入浅出Java虚拟机")]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/sdp1103285470/article/details/86754750",target:"_blank",rel:"noopener noreferrer"}},[a._v("栈帧——深入理解Java虚拟机"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.processon.com/u/5e996e37f346fb4bdd738ede",target:"_blank",rel:"noopener noreferrer"}},[a._v("java8jvmmm-luoqiu.jpg"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.processon.com/u/5d4a85dbe4b0f4c23d640654",target:"_blank",rel:"noopener noreferrer"}},[a._v("java8jvmmm-xaiocaijishu.jpg"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.geeksforgeeks.org/java-virtual-machine-jvm-stack-area/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Java Virtual Machine (JVM) Stack Area"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_46421629/article/details/106322721",target:"_blank",rel:"noopener noreferrer"}},[a._v("通过栈帧简述方法运行过程"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se8/html/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("The Java® Virtual Machine Specification Java SE 8 Edition"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/yztfst/article/details/97043729",target:"_blank",rel:"noopener noreferrer"}},[a._v("局部变量表中Slot复用对垃圾回收的影响详解"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/ding-dang/p/13051143.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("栈帧的内部结构--动态链接 (Dynamic Linking)"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/averey/p/4379646.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("你真的了解try{ return }finally{}中的return？"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.yuque.com/vpwpw5/wu5tdl/wg0290",target:"_blank",rel:"noopener noreferrer"}},[a._v("jvm 运行时区域"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/a6f19189ec62",target:"_blank",rel:"noopener noreferrer"}},[a._v("JVM学习——元空间（Metaspace）"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://blog.csdn.net/weixin_39782709/article/details/111264160",target:"_blank",rel:"noopener noreferrer"}},[a._v("元空间和直接内存_图文并茂，傻瓜都能看懂的 JVM 内存布局"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);