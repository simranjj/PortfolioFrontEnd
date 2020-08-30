import reducer from './reducer';
import { createStore } from 'redux';

const state = {
    user : {
        name: "",
        email: "",
        username:"",
        password: "",
        dob: new Date().toISOString(),
        description: "",
        github: "",
        linkedin: "",
        skills: 
          {
          front_end:[""], 
          back_end:[""],
          database:[""]
          },
        acedemic_project: [
           {
            name: "",
            description: ""
          }
        ],
        professional_experience: [
          {
            company_name: "",
            description:"",
            time_period:""
          }
        ],
        achievements: [
          {
            name: "",
            description: "",
            time: new Date().toISOString()
          }
        ],
        certificates: [
          {
            name: "",
            description: "",
            expires_on: new Date().toISOString()
          }
        ]
      },
}

const store = createStore(
    reducer,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;