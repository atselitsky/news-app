import actionTypes from '../../actionTypes';
import news from '@/enums/news';
import request from '@/helpers/request.js'
import urlConstructor from '@/helpers/urlConstructor.js'
const actions = {
      [actionTypes.LOAD_NEWS]({ commit, state }, params){
        state.loadingStatus = true;
        state.page = params.pageNumber;
        console.log(urlConstructor(news.apiURL,params))
        request(urlConstructor(news.apiURL,params),commit)
      }
}
export default actions;