<template>
  <div>{{ nowDate }}</div>
</template>

<script>
export default {
  name: 'DateIndex',
  props: ['val'],
  data() {
    return {
      nowDate: "", // 当前日期
      date: this.val,
    };
  },
  methods: {
    currentTime() {
      /* setInterval(this.formatDate, 500); */
      this.formatDate()
    },
    formatDate() {
      let date = new Date();
      if(this.val === 1){
        date.setTime(date.getTime()+24*60*60*1000)
      }
      if(this.val === 2){
        date.setTime(date.getTime()+24*60*60*1000+24*60*60*1000)
      }
      let year = date.getFullYear(); // 年
      let month = date.getMonth() + 1; // 月
      let day = date.getDate(); // 日
      let week = date.getDay(); // 星期
      let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
      let hour = date.getHours(); // 时
      hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
      let minute = date.getMinutes(); // 分
      minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
      let second = date.getSeconds(); // 秒
      second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
      /* this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`; */
      if(this.val === 0){
        this.nowDate = `${month}/${day} 今天`;
        if(month < 10){
          this.$emit('date', `${year}-${'0'+month}-${day}`)
        }else {
          this.$emit('date', `${year}-${month}-${day}`)
        }
      }else if(this.val === 1){
        this.nowDate = `${month}/${day} 明天`;
        if(month < 10){
          this.$emit('date', `${year}-${'0'+month}-${day}`)
        }else {
          this.$emit('date', `${year}-${month}-${day}`)
        }
      }else{
        this.nowDate = `${month}/${day} ${weekArr[week]}`;
        if(month < 10){
          this.$emit('date', `${year}-${'0'+month}-${day}`)
        }else {
          this.$emit('date', `${year}-${month}-${day}`)
        }
      }
    }
  },
  mounted() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy() {
    if (this.formatDate) {
      clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>