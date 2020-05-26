const storage = require('azure-storage')
const service = storage.createTableService('motowidlo98','KBfuoqqyY1gknLJ1cTBsbmvVNvkuUVhIXnvpSg9ui6dIK6z+Zzlp8BmJL2ZnTKnbhe9CR3/MnhgVsXmPCHE5FA==')
const table = 'tasks'

const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}