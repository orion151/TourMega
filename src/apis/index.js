import axios from 'axios'

const getTourListAPI = async (location) => {
  const res = await axios.get(`https://staging.tourmega.com/api/v2/tours?lat_bottom_right=${location.latBottomRight}&lon_bottom_right=${location.lonBottomRight}&lat_top_left=${location.latTopLeft}&lon_top_left=${location.lonTopLeft}`)
  return res
}

export {
  getTourListAPI
}
