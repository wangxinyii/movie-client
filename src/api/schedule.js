import request from '@/utils/request'

export function findScheduleById(schedule_id) {
  return request({
    url: `/schedule/findScheduleById/` + schedule_id,
    method: 'GET'
  })
}