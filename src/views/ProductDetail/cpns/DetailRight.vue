<template>
  <div class="DetailRight">
    <div class="top">
      <span>GRACE/洁丽雅 舒适吸水方巾 6731 蓝色 35×35cm 1块</span>
    </div>
    <div class="detail-body">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="规格" width="180">
        </el-table-column>
        <el-table-column prop="date1" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="name1" label="规格" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <button>我要采购</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRight",
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
  data() {
    return {
      tableData: [
        {
          date: "样品编号",
          name: "	1802",
          date1: "样品名称",
          name1: "TR哔叽",
        },
        {
          date: "样品规格	",
          name: "T/R21*21,100*90” ，250g/m2， 2/2 Twill 150CM",
          date1: "样品描述",
          name1: "长车轧染，活性染色，全工艺整理。",
        },
        {
          date: "样品单价	",
          name: "	30.00 元/米",
          date1: "样品数量	",
          name1: "100.00 米",
        },
        {
          date: "最小起订量	",
          name: "1 米",
          date1: "有无现货",
          name1: "有",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.DetailRight {
  width: 800px;
  .top {
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .detail-body {
    .el-table .warning-row {
      background: oldlace;
    }

    .el-table .success-row {
      background: #f0f9eb;
    }
  }
  .footer {
     position: relative;
     align-content: center;    
    button {
     position: absolute;
     top: 50px;
     left: 40%;
      display: inline-block;
      padding: 6px 12px;
      margin-bottom: 0;
      font-size: 14px;
      font-weight: normal;
     height: 40px;
     width: 100px;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      cursor: pointer;
      border: 1px solid transparent;
      background-color: #d9534f;
      border-color: #d43f3a;
      padding: 5px 10px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }
  }
}
</style>
