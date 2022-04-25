import request from '@/utils/request'

export function findAllCommentsPageByMovieIdCount(movie_id) {
  return request({
    url: '/comment/findAllCommentsPageByMovieIdCount',
    method: 'GET',
    params: {
      movie_id
    }
  })
}

export function findCommentsByMovieId(movieId) {
  return request({
    url: `/comment/findCommentsByMovieId/` + movieId,
    method: 'GET'
  })
}