import axios from 'axios';
import * as Config from '../constants/Config';

export default function callApi(endpoint, data = {}, method = 'GET') {
	return axios({
		method,
		url: `${Config.API_URL}/${endpoint}`,
		data
	}).catch((err) => console.log('Error sml nek', err));
}
