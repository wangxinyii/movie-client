<template>
  <div class='seat-container' ref="div1">
    <div style="width: 75%;">
      <div style="display: flex;margin-left: 65px;">
        <div style="margin-right: 20px;">
          <button style="border:none;background-color: red;" disabled>
            <i class="el-icon-s-shop"></i>
          </button>
          <span>已售出</span>
        </div>
        <div style="margin-right: 20px;">
          <button
            style="border:none;background-color: rgb(72, 194, 53);"
            disabled>
            <i class="el-icon-s-shop"></i>
          </button>
          <span>已选座位</span>
        </div>
        <div>
          <button style="border:none;background-color: rgb(234, 238, 233);" disabled>
            <i class="el-icon-s-shop"></i>
          </button>
          <span>可选座位</span>
        </div>

      </div>
      <div style="width: 90%;margin: auto;margin-top: 50px;">
        <div v-for="r in row" :key="r" style="display: flex;text-align: center;margin-bottom: 30px;">
          <div v-for="(c, index) in cell" :key="index" style="flex: auto;">
            <button class="bnt" :ref="r + '排' + c + '座'" @click="go(r + '排' + c + '座')"
              :value="r + '排' + c + '座'"><i class="el-icon-s-shop"></i></button>
          </div>

        </div>
        <div style="display: flex;margin-left: 37px;text-align: center;">
          <div v-for="(c, index) in lastRaw" :key="index" style="margin-right: 73px;">
            <button class="bnt" :ref="(row+1) + '排' + c + '座'" @click="go((row+1) + '排' + c + '座')"
              :value="(row+1) + '排' + c + '座'"><i class="el-icon-s-shop"></i></button>
          </div>
        </div>

      </div>
    </div>
    <div class='movie-info-container' style="width: 25%;background-color: rgba(250, 250, 249, 0.892);width: 25%;">
      <div style="display: flex;">
        <div style="margin-top: 10px;margin-left: 10px;">
          <el-image :src="schedule.movie.moviePicture" style="width: 120px;height: 170px;"></el-image>
        </div>
        <div style="margin-left: 20px;color: rgb(136, 146, 155);">
          <div style="margin-bottom: 30px;color: black;">
            <h3>{{ schedule.movie.movieCnName }}</h3>
          </div>
          <div style="margin-bottom: 30px;">类型：<span style="color: black;">{{ schedule.movie.movieType }}</span></div>
          <div>时长：<span style="color: black;">{{ schedule.movie.movieDuration }}</span></div>
        </div>
      </div>
      <div style="color: rgb(136, 146, 155);margin-top: 5px;margin-left: 10px;">
        <div style="margin-bottom: 5px;">影院：<span style="color: black">{{ schedule.hall.hallCinema.cinemaName }}</span></div>
        <div style="margin-bottom: 5px;">影厅：<span style="color: black;">{{ schedule.hall.hallName }}</span></div>
        <div style="margin-bottom: 5px;">地区：<span style="color: black;">{{ schedule.movie.movieCountry }}</span></div>
        <div style="margin-bottom: 5px;">场次：<span style="color: black;">{{ schedule.scheduleStarttime }}</span></div>
        <div>票价：<span style="color: black;">{{ schedule.schedulePrice }} 元/位</span></div>
        <hr>
      </div>
      <div style="color: rgb(136, 146, 155);margin-top: 5px;margin-left: 10px;">
        <div  style="margin-bottom: 20px;">
          <div v-if="seleted.length === 0">
            座位: 一次最多可选4个座位
          </div>
          <div v-else style="display: flex;">
            <div style="margin-top: 6px;height: 50px;width: 50px;">
              座位：
            </div>
            
            <div>
              <el-tag v-for="(seat, index) in seleted" :key="index" closable type="info" @close="deleteSeat(seat,index)">
                <span style="color: black;">{{ seat.element }}</span>
              </el-tag>
            </div>
            
          </div>
        </div>
        <div>总价：
          <span style="color: black;">{{ seleted.length*schedule.schedulePrice }} 元</span>
        </div>
      </div>
      <hr>
      <div style="text-align: center;">
        邮箱：{{ user.userEmail }}
      </div>
      <div style="text-align: center;margin-top: 50px;margin-bottom: 30px;" @click="message(j)">
        <el-button v-if="j !== 0" round style="width: 200px;" @click="router('pay')">确认选座</el-button>
        <el-button v-else round style="width: 200px;pointer-events: none;" >确认选座</el-button>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    findScheduleById
  } from '@/api/schedule'
  export default {
    name: 'SeatIndex',
    components: {},
    props: {},
    data() {
      return {
        schedule: {},
        scheduleId: null,
        seatCount: null,
        row: 0,
        lastRaw: 0,
        cell: 9,
        flag: false,
        userSelectSeatList: [],
        i: 0,
        j: 0,
        ordersList: [],
        seleted: [],
        user: {}

      }
    },
    computed: {},
    watch: {},
    created() {
      this.scheduleId = this.$route.query.scheduleId
      this.loadSchedule()
      this.user = JSON.parse(localStorage.getItem('user'))
    },
    mounted() {
      this.onSell()
    },
    beforeUpdate() {},
    updated() {
      console.log('UPDATE')

    },
    methods: {
      loadSchedule() {
        findScheduleById(this.scheduleId).then(res => {
          console.log(res)
          const {
            data
          } = res.data
          this.schedule = data
          this.seatCount = data.hall.hallCapacity
          const consult = parseInt(this.seatCount / this.cell)
          const remainder = this.seatCount % this.cell
          this.row = consult
          this.lastRaw = remainder
          data.orderList.forEach(element => {
            this.ordersList.push(element.orderPosition)
          });
        })
      },
      onSell() {
        setInterval(this.sell, 500);
      },
      sell() {
        for (let index = 0; index < this.ordersList.length; index++) {
          const element = this.ordersList[index];
          this.$refs[element][0].style =
            'background-color: red;pointer-events: none;border: none'
        }

      },
      go(val) {
        console.log(this.j)
        if (this.$refs[val][0].style.backgroundColor === 'rgb(72, 194, 53)' && this.j >3) {
          this.seleted = []
          this.j = this.j - 1
          this.$refs[val][0].style.backgroundColor = ''
          this.userSelectSeatList.splice(this.$refs[val][0].id, 1, '')
          console.log(1111)
          console.log(this.j)
          for (let index = 0; index < this.userSelectSeatList.length; index++) {
          const element = this.userSelectSeatList[index];
          if (element !== '') {
            this.seleted.push({
              index,
              element
            })
          }

        }
        }else if(this.j <= 3) {
        this.seleted = []

        if (this.$refs[val][0].style.backgroundColor === '') {
          this.j = this.j + 1
          this.$refs[val][0].style = 'background-color: rgb(72, 194, 53);'

          if (this.$refs[val][0].id === '') {
            this.$refs[val][0].id = this.i
            this.i = this.i + 1
            this.userSelectSeatList.push(this.$refs[val][0].value)
          } else {
            this.userSelectSeatList.splice(this.$refs[val][0].id, 1, this.$refs[val][0].value)
          }
          console.log(this.userSelectSeatList)
        } else if (this.$refs[val][0].style.backgroundColor === 'rgb(72, 194, 53)') {
          this.j = this.j - 1
          this.$refs[val][0].style.backgroundColor = ''
          this.userSelectSeatList.splice(this.$refs[val][0].id, 1, '')
          console.log(this.userSelectSeatList)
          /* this.$message.warning('一次最多可选4个座位')
              this.$refs.div1.style = 'pointer-events: none;' */
        }
        for (let index = 0; index < this.userSelectSeatList.length; index++) {
          const element = this.userSelectSeatList[index];
          if (element !== '') {
            this.seleted.push({
              index,
              element
            })
          }

        }
        }

        
        console.log(this.seleted)

        /* console.log(this.j)
        if(this.j === 0){
          this.flag = false
          //event.$emit('flag', false)
        }else {
          this.flag = true
          //event.$emit('flag', true)
        } */
        /* if(this.j > 3){
          this.$refs[`1排1座`][0].style = 'pointer-events: none;'
          this.$message.warning('一次最多可选4个座位')
        }else {
          if(this.$refs[`1排1座`][0].id === ''){
            this.$refs[`1排1座`][0].style = ''
          }else {
            this.$refs[`1排1座`][0].style = 'background-color: rgb(72, 194, 53);'
          }
          
        } */
        /* for (let index = 0; index < this.userSelectSeatList.length; index++) {
          const element = this.userSelectSeatList[index];
          console.log(element)
          if(element !== ''){
            if(this.seleted.length < 4){
              if(this.seleted.indexOf(element) === -1) {
              this.seleted.push(element)
              }
            }else {
              this.$message.warning('一次最多可选4个座位')
              this.$refs.div1.style = 'pointer-events: none;'
            }
            
          }
        }
          console.log(this.seleted) */

      },
      deleteSeat(val, index) {
        this.seleted.splice(index, 1)
        this.userSelectSeatList.splice(val.index, 1 , '')
        this.$refs[val.element][0].style.backgroundColor = ''
        console.log(this.userSelectSeatList)
      },
      message(val) {
        if(val ===0){
          this.$message.warning('请先选择座位')
        }
      },
      pay(val) {

      },
      router(val1) {
        localStorage.setItem('schedule', JSON.stringify(this.schedule))
        localStorage.setItem('seleted', JSON.stringify(this.seleted))
        this.$router.push({
          name: val1,
          params: {
            schedule: this.schedule,
            seleted: this.seleted
          }
        })
      },
      // 销毁定时器
      beforeDestroy() {
        if (this.sell) {
          clearInterval(this.sell); // 在Vue实例销毁前，清除时间定时器
        }
      }
    }
  }
</script>
<style scoped lang='less'>
  .bnt {
    border:none;
  }

  .seat-container {
    display: flex;
  }
</style>