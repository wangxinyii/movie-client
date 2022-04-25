import request from '@/utils/request'

export function findAllCinemas() {
  return request({
    url: '/cinema/findAllCinemas',
    method: 'GET'
  })
}

export function findCinemaById(cinemaId) {
  return request({
    url: `/cinema/findCinemaById/` + cinemaId,
    method: 'GET'
  })
}

export function findScheduleByCineamIdAndMovieId(movie_id, cinema_id, date) {
  return request({
    url: '/schedule/findScheduleByCineamIdAndMovieId',
    method: 'GET',
    params: {
      movie_id,
      cinema_id,
      date
    }
  })
}