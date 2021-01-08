zframework.js 为js基础库（基础库刚刚开始写，会持续更新）

一：界限：为避免与业务存在强耦合关系，而导致类库定位不清晰，该库只封装与业务无关的数据结构及算法相关的内容，和业务相关的数据机构及算法不应封装进入。

如果要封装针对通用业务的具体内容，应封装针对于该业务定位的具体类库，该类库定位为基础库，只封装不针对业务的平台通用数据结构及算法。

二：目前最新版本（version）：8

三：具体内容：

  <一>目前函数分类：object相关、array相关

  <二>分类内容：

    1：object（对象）相关

        //判断对象是否为空;出参（bool）：true为是，false为否

      （1）$z.obj.isNull(obj);   

       //判断对象是否为空或者为空字符串  出参（bool）：true为是，false为否

      （2）$z.obj.isNullOrEmpty(obj);  

       //指定对象是否等于当前对象

       （3）$z.obj.referenceEquals(obj1,obj2);

    2：array（数组）相关

        //判断数组是否为空或长度是否为0 出参（bool）：true为是，false为否

       （1）$z.array.isNullOrZero(array)   

        //判断是否为数组;出参（bool）：true为是，false为否

       （2）$z.array.isArray(array) 

        //清空数组;void

       （3）$z.array.clear(array) 


        //获取最大值;出参（number）

       （4）$z.array.max(array) 


        //获取最小值;出参（number）

       （5）$z.array.min(array) 


        //是否存在条件匹配的元素;出参（bool）：true为是，false为否

       （6）$z.array.exists(array,function(item){

             return item.name=='赵恒'

         });

        //查找符合条件的元素;出参（array）

       （7）$z.array.find(array,function(item){

            return item.name=='赵恒'

        });


        //查找符合条件的元素,如果多个值相同类型或相同引用或相同值，则返回第一个索引值

       （8）$z.array.indexOf(array,element);


        //获取元素的总和

       （9）$z.array.sum(array);


        //获取元素指定属性的总和

       （10）$z.array.sumBy(array,function(item){

             return item.money;

         });

        //返回指定条数的集合

       （11）$z.array.take(array,num);


       //跳过N行元素的集合

       （12）$z.array.skip(array,num);


        //返回指定元素的集合

       （13）$z.array.select(array,function(item){

             return item.money;

         });

        //计算数值序列的平均值

       （14）$z.array.average(array);


        //指定元素的平均值

       （15）$z.array.averageBy(array,function(item){

             return item.money;

        });
