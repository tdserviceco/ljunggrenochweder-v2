import axios from 'axios';

/** inspiration: https://www.youtube.com/watch?v=lbHuwpPwfoc */

/** Creates a new path so instead of typing it everytime 
the host name we can just keep it stored and when we use GET/POST/UPDATE/DELETE, 
we only need to add the destination path. */

const instance = axios.create({
  baseURL: 'http://localhost:5100/api/v1/'
});

export default instance