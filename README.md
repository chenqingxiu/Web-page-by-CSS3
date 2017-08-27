## CSS3和JS实现动态网页
该网页会根据scrollTop的变化动态曾显内容。


###CSS：
####Part 1: CSS类的命名遵循 BEM 方法论，即：
.block{}
.block__element{}
.block_modifier{}
使CSS类更加透明而且更有意义。

####Part 2: 使用 CSS3 的两个属性：animation 和 @keyframes， 控制不同类名的元素改变位置和透明度。


###JavaScript：
####Part 1: 对常用方法进行了函数封装，将需要添加新状态的类集中定义到 totalClass 对象中。

####Part 2: 通过添加类和删除类，并控制元素的 left 属性，配合CSS中定义的样式，达到动画效果。

### 请联系我
如果您有什么意见和建议，请联系:258326916@qq.com
