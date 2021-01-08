(function (w) {
    //基础开发库
    //每修改一次,版本加1
    //版本：8 

    //已有类型：object相关、array相关

    //工厂
    function factory() {
        return new Support();
    }
    //原型链
    function Support() {

    }
    //------------------1.object相关---开始----------------------
    Support.prototype.obj = function () {

    }
    //1-1.对象是否为空-赵恒
    Support.prototype.obj.isNull = function (obj) {
        return obj == null;
    }
    //1-2.对象是否为空或为空字符串--赵恒
    Support.prototype.obj.isNullOrEmpty = function (obj) {
        var flag = false;
        if (this.isNull(obj)) {
            flag = true;
            return flag;
        }
        if (flag == "") {
            flag = true;
            return flag;
        }
        return flag;
    }
    //1-3.指定对象是否等于当前对象。-赵恒
    Support.prototype.obj.referenceEquals = function (obj1, obj2) {
        return obj1 === obj2;
    }
    //------------------object相关---结束----------------------

    //------------------2.array相关---开始----------------------
    Support.prototype.array = function () {

    }
    //2-1.数组对象是否为空或为长度为0--赵恒
    Support.prototype.array.isNullOrZero = function (arr) {
        var flag = false;
        if (Support.prototype.obj.isNull(arr)) {
            flag = true;
            return flag;
        }
        if (arr.length == 0) {
            flag = true;
            return flag;
        }
        return flag;
    }
    //2-2.是否是数组--赵恒
    Support.prototype.array.isArray = function (arr) {
        return Array.isArray(arr);
    }
    //2-3.清空数组元素--赵恒
    Support.prototype.array.clear = function (arr) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        ary.splice(0, ary.length);
    }
    //2-4.获取最大值--赵恒
    Support.prototype.array.max = function (arr) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var val;
        if (this.isNullOrZero(arr)) {
            return val;
        }
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!isNaN(item)) {
                throw new Error("数组内存在非数字的值！");
            }
            if ((val == null) || (item > val)) {
                val = item;
            }
        }
        return val;
    }
    //2-5.获取最小值--赵恒
    Support.prototype.array.max = function (arr) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var val;
        if (this.isNullOrZero(arr)) {
            return val;
        }
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (!isNaN(item)) {
                throw new Error("数组内存在非数字的值！");
            }
            if ((val == null) || (item < val)) {
                val = item;
            }
        }
        return val;
    }
    //2-6.是否存在条件匹配的元素--赵恒
    Support.prototype.array.exists = function (arr, callBack) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var val = false;
        if (this.isNullOrZero(arr)) {
            return val;
        }
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var check = callBack(item);
            if (check) {
                val = true;
                return val;
            }
        }
        return val;
    }
    //2-7.查找符合条件的元素--赵恒
    Support.prototype.array.find = function (arr, callBack) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var val = [];
        if (this.isNullOrZero(arr)) {
            return val;
        }
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];

            var check = callBack(item);
            if (check) {
                val.push(item);
            }
        }
        return val;
    }
    //2-8.查找符合条件的元素,如果多个值相同类型或相同引用或相同值，则返回第一个索引值--赵恒 
    Support.prototype.array.indexOf = function (arr, obj) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            index = i;
            var item = arr[i];
            if (item === obj) {
                return index;
            }
        }
        return index;
    }
    //2-9.获取元素的总和--赵恒 
    Support.prototype.array.sum = function (arr) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item == null) {
                continue;
            }
            if (!isNaN(item)) {
                throw new Error("数组内元素存在非数字的值！");
            }
            sum += item;
        }
        return sum;
    }
    //2-10.根据条件获取总和--赵恒 
    Support.prototype.array.sumBy = function (arr, condition) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var val = condition(item);
            if (val == null) {
                continue;
            }
            if (!isNaN(val)) {
                throw new Error("数组聚合字段存在非数字的值！");
            }
            sum += val;
        }
        return sum;
    }
    //2-11.返回指定条数的集合--赵恒 
    Support.prototype.array.take = function (arr, num) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (num > i) {
                res.push(item);
                continue;
            }
            break;
        }
        return res;
    }
    //2-12.跳过N行元素的集合--赵恒 
    Support.prototype.array.skip = function (arr, num) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (num > i) {
                continue;
            }
            res.push(item);
        }
        return res;
    }
    //2-13.返回指定元素的集合--赵恒 
    Support.prototype.array.select = function (arr, callBack) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var res = [];
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var val = callBack(item);
            res.push(val);
        }
        return res;
    }
    //2-14.计算数值序列的平均值--赵恒 
    Support.prototype.array.average = function (arr) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var count = arr.length;
        if (count == 0) {
            throw new Error("集合长度不能为0！");
        }
        var sum = this.sum(arr);
        var val = sum / count;
        return val;
    }
    //2-15.指定元素的平均值--赵恒 
    Support.prototype.array.averageBy = function (arr, callBack) {
        if (!this.isArray(arr)) {
            throw new Error("该入参不是数组类型！");
        }
        var count = arr.length;
        if (count == 0) {
            throw new Error("集合长度不能为0！");
        }
        var sum = this.sumBy(arr, callBack);
        var val = sum / count;
        return val;
    }

    //------------------array相关---结束----------------------

    w.$z = w.$framework = factory();
})(window);