import axios from 'axios'

const getTourListAPI = async (key = 'girl') => {
  const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${key}`)

  return res
}

export {
  getTourListAPI
}
