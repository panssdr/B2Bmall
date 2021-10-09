<template>
    <div class="menuList w1200 flex-l">
        <div class="block">
            <span class="demonstration">地区：</span>
            <el-cascader
                v-model="value"
                :options="region"
                :props="{ expandTrigger: 'hover' }"
                @change="handleChange"
            ></el-cascader>
        </div>
        <div class="block">
            <span class="demonstration">交易： </span>
            <el-select v-model="value1" placeholder="请选择">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
        <div class="block">
            <span class="demonstration">属性： </span>
            <el-select v-model="value2" placeholder="请选择">
                <el-option
                    v-for="item in options2"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    naem: "MenuList",
    data() {
        return {
            options1: [
                {
                    value: "已认证商家",
                    label: "已认证商家",
                },
                {
                    value: "支持在线订购",
                    label: "支持在线订购",
                },
            ],
            value1: "",
            options2: [
                {
                    value: "国产全新",
                    label: "国产全新",
                },
                {
                    value: "原装进口",
                    label: "原装进口",
                },
                {
                    value: "二手拆车",
                    label: "二手拆车",
                },
            ],
            value2: "",
            region: [
                {
                    value: "所有地区",
                    label: "所有地区",
                },
                {
                    value: "北京",
                    label: "北京",
                },
                {
                    value: "上海",
                    label: "上海",
                },
                {
                    value: "天津",
                    label: "天津",
                },
                {
                    value: "重庆",
                    label: "重庆",
                },
                {
                    value: "河北",
                    label: "河北",
                    children: [
                        {
                            value: "石家庄",
                            label: "石家庄",
                            children: [
                                {
                                    value: "赵县",
                                    label: "赵县",
                                },
                            ],
                        },
                    ],
                },
            ],
            value: [],
        };
    },
};
</script>
<style lang="scss" scoped>
.menuList {
    padding: 0 30px;
    margin-top: 40px;
    margin-bottom: 20px;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
    border: 1px solid #ededed;
    border-radius: 2px;
    > div {
        &:not(:first-child) {
            margin-left: 80px;
        }
    }
}
</style>