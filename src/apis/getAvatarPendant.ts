import request from '@/utils/request'

export default (): any => {
  return request({
    url: '/getAvatarPendant',
    method: 'POST'
  })
}