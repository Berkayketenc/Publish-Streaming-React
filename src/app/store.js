import { configureStore} from '@reduxjs/toolkit';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from '../features/authentication/authSlice'

export const store = configureStore({
  reducer: {
    firebase: firebaseReducer,
    auth:authReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({

    serializableCheck: false,
    immutableCheck:false ,
    
  }),
});





