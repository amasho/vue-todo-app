import axios from 'axios'

const api = {
  async read () {
    axios.defaults.baseURL = 'http://localhost:3000'
    try {
      const res = await axios.get('/todos')
      return res.data
    } catch (e) {
      console.error(e)
    }
  },
  async add (value) {
    axios.defaults.baseURL = 'http://localhost:3000'
    axios.post('/todos', value).then(function (response) {
      console.log(response)
    })
  }
}

export default api
