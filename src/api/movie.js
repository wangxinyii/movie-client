import request from '@/utils/request'

export function findAllMovies1(params) {
  return request({
    url: '/movie/findAllMovies1',
    method: 'GET',
    params
  })
}

export function sortMovieByScore() {
  return request({
    url: '/movie/sortMovieByScore',
    method: 'GET'
  })
}

export function findMoviesLikeType(data) {
  return request({
    url: '/movie/findMoviesLikeType',
    method: 'POST',
    data
  })
}

export function findMovieById(movieId) {
  return request({
    url: `/movie/findMovieById/` + movieId,
    method: 'GET'
  })
}