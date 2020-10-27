import { combineReducers } from 'redux';

const user = (state = null, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload || false;
    case "LOGOUT_USER":
      return null;
    default:
      return state;
  }
}

const INITIAL_USER_STATE = {
  isSignedIn: false,
  errorMessage: null,
  userId: null,
  username: null,
  email: null,
  access_token: null,
  role: null,
  projects: [],
  projectsData: [],
  singleProjectData: null,
  singleProjectActiveDrawing: null,
  errorMessageSingleProject: null,
  singlePdfData: [],
  products: [],
  userProducts: [],
  errorMessageUploadFile: null,
  checkPdfMessage: false,
  demoRequestMessage: null,
  processDrawings: [],
  blobImage: null,
  iuiToken: null,
  datasheet_jwt: null,
  cadExcel: [],
  users: [],
  user: {},
  allProducts: [],
  createUserErrorMessage: null,
  deleteUserMessage: null,
  createProductErrorMessage: null,
  singleProduct: null,
  allProjects: [],
  createProjectErrorMessage: null,
  deleteProjectMessage: null,
}

const userData = (state=INITIAL_USER_STATE, action) => {
  switch(action.type){
    case 'ERROR_MESSAGE':
      return {...state,
        errorMessage: action.payload.errorMessage,
      }
    case 'ERROR_MESSAGE_SINGLE_PROJECT':
        return {...state,
          errorMessageSingleProject: action.payload.errorMessage,
          singleProjectData: null
        }
    case 'ERROR_MESSAGE_UPLOAD_FILE':
        return {...state,
          errorMessageUploadFile: action.payload.errorMessage
        }
    case 'CHECK_PDF_MESSAGE':
        return {...state,
            checkPdfMessage: action.payload.message
        }
    case 'DEMO_REQUEST_MESSAGE':
        return{...state,
          demoRequestMessage: action.payload.message
        }
    case 'LOGOUT_USER':
      return {...state,
        isSignedIn: false,
        errorMessage: null,
        userId: null,
        username: null,
        email: null,
        access_token: null,
        role: null,
        projects: [],
        projectsData: [],
        singleProjectData: null,
        singleProjectActiveDrawing: null,
        errorMessageSingleProject: null,
        singlePdfData: [],
        products: [],
        userProducts: [],
        errorMessageUploadFile: null,
        checkPdfMessage: false,
        demoRequestMessage: null,
        processDrawings: [],
        blobImage: null,
        iuiToken: null,
        cadExcel: [],
        users: [],
        user: {},
        allProducts: [],
        createUserErrorMessage: null,
        deleteUserMessage: null,
        createProductErrorMessage: null,
        singleProduct: null,
        allProjects: [],
        createProjectErrorMessage: null,
        deleteProjectMessage: null,
      }
    case 'LOGIN_USER':
      return {...state,
        errorMessage: null,
        isSignedIn: true,
        access_token: action.payload.token,
        userId: action.payload.id,
        email: action.payload.email,
        username: action.payload.name,
        role: action.payload.role
      }
    case 'FETCH_IUI_TOKEN':
      return {...state,
        iuiToken: action.payload.iui_token
      }
    
    case 'FETCH_PROJECTS_DATA':
      return {...state,
        projectsData: action.payload.projectsData
      }
    case 'FETCH_PROJECTS':
      return {...state,
        projects: action.payload.projects
      }
    case 'FETCH_SINGLE_PROJECT_DATA':
      return {...state,
        singleProjectData: action.payload.project
      }
    case 'FETCH_SINGLE_PDF_DATA':
      return {...state,
          singlePdfData: action.payload.pdf
      }
    case 'FETCH_SINGLE_PROJECT_ACTIVE_DRAWING':
      return{...state,
        singleProjectActiveDrawing: action.payload.drawing
      }
    case 'FETCH_USER_PRODUCTS':
      return {...state, 
        userProducts: action.payload.userProducts,
        datasheet_jwt: action.payload.datasheet_jwt
      }
    case 'FETCH_PRODUCTS':
        return {...state, 
          products: action.payload.products
        }
    case 'PROCESS_DRAWINGS':
      return {...state, 
        processDrawings: action.payload.processDrawings
      }
    case 'FETCH_BLOB_IMAGE':
      return {...state, blobImage: action.payload.image}
    case 'FETCH_CAD_EXCEL':
      return {...state, cadExcel: action.payload.cadExcel}
    case 'FETCH_USERS':
      return {...state, users: action.payload.users}

    case 'FETCH_ALL_PRODUCTS':
      return {...state, allProducts: action.payload.allProducts}
    case 'CREATE_USER_ERROR_MESSAGE':
      return {...state, createUserErrorMessage: action.payload.errorMessage}
    case 'DELETE_USER_MESSAGE':
      return {...state, deleteUserMessage: action.payload.message}
    case 'CREATE_PRODUCT_ERROR_MESSAGE':
      return {...state, createProductErrorMessage: action.payload.errorMessage}
    case 'SINGLE_PRODUCT':
      return {...state, singleProduct: action.payload.singleProduct}
    case 'FETCH_ALL_PROJECTS':
      return {...state, allProjects: action.payload.allProjects}
    case 'CREATE_PROJECT_ERROR_MESSAGE':
      return {...state, createProjectErrorMessage: action.payload.errorMessage}
    case 'DELETE_PROJECT_MESSAGE':
      return {...state, deleteProjectMessage: action.payload.message}
    default:
      return state;
  }
};

// const INITIAL_PROJECT_STATE = {
//   projectName: '',
//   projectNumber: '',
//   numOfLegends: '',
//   numOfPages: '',
//   unit: '',
//   lineTags: [],
//   lineTagsRegex: '',
//   equipmentTags: [],
//   equipmentTagsRegex: '',
//   valveTags: [],
//   valveTagsRegex: '',
//   instrument: [],
//   pipingComp: [],
//   valve: [],
//   signal: [],
//   prline: [],

//   setupProgress: ''
// }

// const fetchNewProject = (state=INITIAL_PROJECT_STATE, action) => {
//   switch(action.type){
//     case 'UPDATE_PROJECT_BASIC_INFO_DATA':
//       return {...state,
//         projectName: action.payload.projectName,
//         projectNumber: action.payload.projectNumber,
//         numOfLegends: action.payload.numOfLegends,
//         numOfPages: action.payload.numOfPages,
//         unit: action.payload.unit, 
//         setupProgress: 'BASIC_INFO'
//       }
//     case 'UPDATE_PROJECT_LINE_TAG_DATA':
//       return {...state, 
//         lineTags: action.payload.tags,
//         lineTagsRegex: action.payload.regex
//       }
//     case 'UPDATE_PROJECT_EQUIPMENT_TAG_DATA':
//       return {...state, 
//         equipmentTags: action.payload.tags, 
//         equipmentTagsRegex: action.payload.regex
//       }
//     case 'UPDATE_PROJECT_VALVE_TAG_DATA':
//       return {...state, 
//         valveTags: action.payload.tags,
//         valveTagsRegex: action.payload.regex
//       }
//     case 'UPDATE_PROJECT_SYMBOL_INFO_DATA':
//       return {...state, 
//         instrument: action.payload.instrument,
//         pipingComp: action.payload.pipingComp,
//         valve: action.payload.valve,
//         signal: action.payload.signal,
//         prline: action.payload.prline
//       }
//     case 'CLEAR_PROJECT_SETUP':
//         return INITIAL_PROJECT_STATE
//     default:
//       return state;
//   }
// };



export default combineReducers({
  user: user,
  // newProject: fetchNewProject
})
