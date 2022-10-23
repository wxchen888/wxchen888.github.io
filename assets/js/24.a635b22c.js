(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{460:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"代码整洁之道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码整洁之道"}},[s._v("#")]),s._v(" 代码整洁之道")]),s._v(" "),t("h2",{attrs:{id:"写在前面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在前面"}},[s._v("#")]),s._v(" 写在前面")]),s._v(" "),t("p",[s._v("这个栏目本来没打算开，直到经历了几次代码评审会议之后，我意识到自己编码方式还不成系统，仍然需要进行系统化的学习，掌握前辈们总结出的最适用的规律无疑是一种好的方式。恰好很早之前就收藏了这本代码整洁之道，便决定趁着闲暇之际阅读总结一下，如果想系统学习的话建议还是读书，本文档只是作为自己的记录用。")]),s._v(" "),t("p",[s._v("一个人的职业素养体现在解决问题的方式、步骤以及反思的程度，而不在于这个问题本身的难度。思考一个问题：一个技术人员要具备哪些素质可以被认为是专业人员呢？如果还不具备需要如何改变才能被视为专业人士呢？")]),s._v(" "),t("h2",{attrs:{id:"整洁代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整洁代码"}},[s._v("#")]),s._v(" 整洁代码")]),s._v(" "),t("p",[s._v("一、为什么要写糟糕的代码？")]),s._v(" "),t("p",[s._v("每个人都有自己的原因，相信很多人都会想着等有时间的话再进行代码优化，但是要记住一句话：稍后等于永不。")]),s._v(" "),t("p",[s._v("二、混乱代码的代价？")]),s._v(" "),t("p",[s._v("后续难以维护和修改，生产力和时间呈现负相关。")]),s._v(" "),t("p",[s._v("三、什么是整洁的代码？")]),s._v(" "),t("p",[s._v("整洁的代码只做好一件事：每个类、每个函数、每个模块都专注于一事，完全不受四周细节的干扰和污染。")]),s._v(" "),t("p",[s._v("更全面的概括是：减少重复代码、提高表达力、提早构建简单抽象。")]),s._v(" "),t("p",[s._v("更具体的实现：请接着往下看吧！")]),s._v(" "),t("h2",{attrs:{id:"更好的变量命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更好的变量命名"}},[s._v("#")]),s._v(" 更好的变量命名")]),s._v(" "),t("p",[s._v("一、见名知意")]),s._v(" "),t("p",[s._v("二、抽象工厂：接口不要命名为IShapeFactory，前导字母对于用户来说其实是干扰，用户只需要知道那是个抽象工厂，建议使用CShapeFactory或许体验更好")]),s._v(" "),t("p",[s._v("三、类名要用名词，方法要用动词，词性相近的get、fetch这种词不应出现在一起，可以添加后缀getNumber、fetchData实现相同的效果")]),s._v(" "),t("p",[s._v("四、别害怕长名字：使用描述性的名称，哪怕比较长也比短而令人费解的名称好")]),s._v(" "),t("h2",{attrs:{id:"更好的函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更好的函数"}},[s._v("#")]),s._v(" 更好的函数")]),s._v(" "),t("p",[s._v("一、函数的结构本质上要短小、再短小，以不容纳if/else if/else嵌套结构为目标")]),s._v(" "),t("p",[s._v("二、只做一件事：正如前面所说，函数只做好一件事就足够了，标志就是“看是否还能拆出一个函数，该函数不仅只是单纯地重新诠释其实现”")]),s._v(" "),t("p",[s._v("三、每个函数一个抽象层级：代码一般是“自顶向下”的阅读顺序，每个函数后面跟着的应该是下一抽象层级的函数")]),s._v(" "),t("p",[s._v('[^抽象层级：getHtml函数位于较高抽象层，pagePathName = pathParser.render(pagePath)位于中间抽象层，.append("\\n")则位于较低抽象层]:')]),s._v(" "),t("p",[s._v("四、switch语句：天生就需要做N件事，但是可以将其放置在较低抽象层级，但是当出现新的类型时会违反“单一权责原则、开放闭合原则”，此时最好创建多态对象")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//原文中：对于每个case分支进行单独处理，添加新类型不必修改原来的代码增加新的处理类即可")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ming'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassMing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hu'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassHu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uzi'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassUzi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassCommon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//我更喜欢用另一种方法：修改只需要在对象里修改即可，且提高了函数的简洁性")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" nameCollectionUtils "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    ming："),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassMing")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ming'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("hu")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassHu")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hu'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("uzi")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassUzi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'uzi'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" nameCollectionUtils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hasOwn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" nameCollectionUtils"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ClassCommon")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("五、函数参数最多不多于两个：包括输入参数和输出参数")]),s._v(" "),t("p",[s._v("六、无副作用：函数内部不要做出未能预期的改动，不要对外部产生影响")]),s._v(" "),t("p",[s._v("七、使用异常替代返回错误码：使用try...catch替代多层级的if嵌套，永远走在主路上，不要过多考虑边界，这样可以让你一直保持思维连贯")]),s._v(" "),t("p",[s._v("八、错误处理单独抽出：这一条我认为可以视情况而定，毕竟抽出仅仅是为了美观")]),s._v(" "),t("p",[s._v("九、别重复：多个函数使用的相同逻辑的代码一定要抽出，可以参考面向对象的基类，前端开发中的面向组件编程、面向模块编程也是这种思想")]),s._v(" "),t("h2",{attrs:{id:"注释-格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注释-格式"}},[s._v("#")]),s._v(" 注释&格式")]),s._v(" "),t("p",[s._v("每个人有每个人的习惯，采取一些通用准则即可，毕竟如何太过离谱在公司是会挨打的~")]),s._v(" "),t("h2",{attrs:{id:"错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#错误处理"}},[s._v("#")]),s._v(" 错误处理")]),s._v(" "),t("p",[s._v("也没有什么固定的章程，最好采取try...catch优先的原则")]),s._v(" "),t("h2",{attrs:{id:"边界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#边界"}},[s._v("#")]),s._v(" 边界")]),s._v(" "),t("p",[s._v("总结而言，使用自己可以控制的代码")]),s._v(" "),t("h2",{attrs:{id:"单元测试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单元测试"}},[s._v("#")]),s._v(" 单元测试")]),s._v(" "),t("p",[s._v("现在的互联网企业绝大多数都是敏捷式开发，很少有能遵守测试驱动原则的公司，而且为了保证进度很少会有技术团队会去要求单元测试，所以这一条仁者见仁吧，个人认为这一项的实际实现只能是一个比较美好的愿景。")]),s._v(" "),t("h2",{attrs:{id:"类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类"}},[s._v("#")]),s._v(" 类")]),s._v(" "),t("p",[s._v("一、类的组织：按照下面的顺序，"),t("strong",[s._v("不要暴露出内部属性，利用方法达到同样的目的")])]),s._v(" "),t("div",{staticClass:"language-ts line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("DemoOrganization")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" sname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sname'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" pname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pname'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" _pname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'_pname'")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" tname "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tname'")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getPublicName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pname\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   \t\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("_getPrivateName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("_pname\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("二、单一权责原则（SPR）：类或模块应有且只有一条加以修改的理由，实现了这个原则的类更易得到复用")]),s._v(" "),t("p",[s._v("三、保持内聚性：类中定义的变量应被尽可能多的方法使用到，如果不能满足的话就把使用到变量的函数拆分成小类")]),s._v(" "),t("p",[s._v("四、开放封闭原则（OCP）：类应当对扩展开放，对修改封闭，通过子类化手段可以实现新功能的添加的同时不触及其他类")]),s._v(" "),t("p",[s._v("五、依赖倒置原则（DIP）：类应当依赖于抽象而不是依赖于具体细节")]),s._v(" "),t("p",[s._v("六、解耦：不同方法和模块间不要互相产生影响，即“分而治之”、“化整为零”")]),s._v(" "),t("h2",{attrs:{id:"系统"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统"}},[s._v("#")]),s._v(" 系统")]),s._v(" "),t("p",[s._v("一、构造和使用分开：构造的细节应隔离与应用程序代码之外，使用者只能获取构造者想让使用者获得的东西")]),s._v(" "),t("p",[s._v("二、设计时要能满足从简单到复杂的更新迭代")]),s._v(" "),t("h2",{attrs:{id:"迭进"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迭进"}},[s._v("#")]),s._v(" 迭进")]),s._v(" "),t("p",[s._v("总结上述，只要遵守以下原则，就可以得到一个具有良好设计的可迭进的程序：")]),s._v(" "),t("ol",[t("li",[s._v("运行所有测试")]),s._v(" "),t("li",[s._v("不可重复")]),s._v(" "),t("li",[s._v("表达了程序员的意图")]),s._v(" "),t("li",[s._v("尽可能减少类和方法的数量")]),s._v(" "),t("li",[s._v("以上规则按重要程度排列")])]),s._v(" "),t("h2",{attrs:{id:"并发编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发编程"}},[s._v("#")]),s._v(" 并发编程")]),s._v(" "),t("p",[s._v("首先要了解“线程”这个概念：CPU调度的最小单位，区别于“进程”是资源分配的最小单位。区别见下方表格：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("分类")]),s._v(" "),t("th",[s._v("数据共享")]),s._v(" "),t("th",[s._v("消耗资源")]),s._v(" "),t("th",[s._v("是否影响兄弟程序")]),s._v(" "),t("th",[s._v("最大可扩展维度")]),s._v(" "),t("th",[s._v("是否有锁")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("进程")]),s._v(" "),t("td",[s._v("难")]),s._v(" "),t("td",[s._v("多")]),s._v(" "),t("td",[s._v("否")]),s._v(" "),t("td",[s._v("多机")]),s._v(" "),t("td",[s._v("是")])]),s._v(" "),t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td"),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("线程")]),s._v(" "),t("td",[s._v("简单")]),s._v(" "),t("td",[s._v("少")]),s._v(" "),t("td",[s._v("可能会影响所在进程")]),s._v(" "),t("td",[s._v("多核")]),s._v(" "),t("td",[s._v("否")])])])]),s._v(" "),t("p",[t("strong",[s._v("如果说对象是过程的抽象，那么线程是调度的抽象")])]),s._v(" "),t("p",[s._v("前端使用的js语言是浏览器脚本语言，最主要的用途是和用户互动和操作DOM，这决定了js只能是单线程否则会产生复杂的同步问题，但是js仍然可以模拟并发执行，具体实现自行查询相关资料")]),s._v(" "),t("p",[s._v("当前还没学习到并发编程的语言，以后碰到再补充学习")]),s._v(" "),t("h2",{attrs:{id:"重构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重构"}},[s._v("#")]),s._v(" 重构")]),s._v(" "),t("p",[s._v("这个模块我认为是最重要的模块，甚至比怎么去编写新的程序更重要，因为一个公司的沉积项目的数量是巨大的，很可能会对其中几个甚至更多进行重构（还是因为之前代码写的太烂无法维护），所以重构中需要注意的点也要有一个清晰的认知。")]),s._v(" "),t("p",[s._v("只需要遵守一条原则：签入的代码比签出的更整洁。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("p",[s._v("以上是我从前端角度总结的从这本书中得到的一些收获，但是每个人都会有每个人自己的理解，所以还是推荐自己去读一遍这本书，不需要多精细只要熟悉一下这些概念提出来的场景，相信会有更大的收获。")])])}),[],!1,null,null,null);t.default=e.exports}}]);