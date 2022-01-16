import DirService from './dir_service.js';

const PATH = './tmp';
const service = new DirService(PATH);

 export default function AppDirService() {

     service.on( 'file_created' )
     service.on('file_deleted' )
     service.on('error')

     service.start()
     setTimeout(() => service.stop(), 60000)
 };

