import fs from 'fs';
const PATH = './tmp';

const files = fs.readdirSync(PATH)

export default class DirService {

    constructor(path) {
        this.path = path;
   }
  on(e) {
      return fs.watch(PATH, (eventType, filename ) => {
          const modifyFiles = fs.readdirSync(PATH)
          if (e === 'file_created' && files.length < modifyFiles.length) {
              console.log( 'Created:  ' + filename )
          }   else if ( e === 'file_deleted' && files.length > modifyFiles.length) {
              const modifyFiles = fs.readdirSync(PATH)
              console.log( 'Deleted:  ' + filename )
          } else {
              console.error
          }
      })
     }
    start() {
        console.log('Dir Service start.')
    }
    stop() {
        console.log('Dir Service stoped.')
        process.exit(0)
    }
}

