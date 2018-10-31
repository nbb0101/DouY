import {query} from '../services/example';
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let data = yield call(query);
      // console.log(data);
      yield put({ type: 'save',payload:data });
    },
    *change({payload},{call,put,select}){
      console.log(payload);
      let data = yield select((store)=>{
        return store.example;
      });
      data.data.forEach((item)=>{
        if(item.id == payload){
          item.status = !item.status;
        }
      })
      yield put({
        type: 'save', payload: data
      })
    },
    *addNews({payload},{call,put,select}){
      let obj={};
      let data = yield select((store) => {
        return store.example;
      });
      obj.id = data.data.length + 1;
      obj.text = payload;
      obj.status = false;
      data.data.unshift(obj);
      yield put({
        type: 'save', payload: data
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
