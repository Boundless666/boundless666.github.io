每个人物对应一个线程  并发执行

1. 按时间顺序完成上述4件事

2. 每件事随机等待一段时间 输出到控制台

3. 其中一人完成第一件事后  输出“天龙八部就此拉开序幕...”   全场只会执行一次

4. 任何一个人物线完成后   输出“某某已经准备好啦...”  全场只会执行一次

5. 所有人物的人物线完成后   输出“中原群雄大战辽兵，忠义两难一死谢天”

6. 统计整个天龙八部的故事的用时

7. 额外一个旁白  间隔时间new Random().Next(0,1000) 如果值刚好等于当前年份，

   则打印“天降雷霆灭世，天龙八部的故事就此结束...” 然后结束其它任务

   > 如果所有的任务已经结束了  那么就不需要这个旁白了



代码在仓库里面:dog:

[TianLongBaBu/Program.cs · 无涯/growth_c-sharp_2023 - 码云 - 开源中国 (gitee.com)](https://gitee.com/giteemxl/growth_c-sharp_2023/blob/master/TianLongBaBu/Program.cs)