import { initializeApp  } from 'firebase/app';
import { getDatabase} from "firebase/database";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyABqLfeV_WV7jGeNaXZhrw3Yq-TXa9jwDY",
  authDomain: "nf28cookyt.firebaseapp.com",
  projectId: "nf28cookyt",
  storageBucket: "nf28cookyt.appspot.com",
  messagingSenderId: "636039572772",
  appId: "1:636039572772:web:773c3ff8db9972a7ab17b1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app, "https://nf28cookyt-default-rtdb.europe-west1.firebasedatabase.app/");


export default database;