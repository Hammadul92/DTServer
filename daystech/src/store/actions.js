import api from '../apis';
import axios from 'axios';
// USER ACTIONS

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get('/api/current-user');
  dispatch({ type: 'FETCH_USER', payload: response})
}



export const loginUser = (email, password) => async (dispatch) => {
  try{
    const response = await api.post('/api/login/', {email: email, password: password});
    dispatch({ type: 'LOGIN_USER', payload: response.data})
  }catch(error){
    if(error.response.status === 401 || error.response.status === 500){
      dispatch({type: 'ERROR_MESSAGE', payload: error.response.data})
    }
  } 
}

export const requestDemo = (formData) => async (dispatch) => {
  const response = await api.post('/api/demo-request/', formData);
  dispatch({ type: 'DEMO_REQUEST_MESSAGE', payload: response.data})
}

export const refreshUserAuth = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/refresh-token/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'LOGIN_USER', payload: response.data})
  }catch(error){
      if(error.response.status === 401){
          dispatch({type: 'LOGOUT_USER'});
      }
  }
}

export const generateIUIToken = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/generate-iui-token/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_IUI_TOKEN', payload: response.data})
  }catch(error){
      if(error.response.status === 401){
          dispatch({type: 'LOGOUT_USER'});
      }
  }
}


export const fetchProducts = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/product-info/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}

export const fetchUserProducts = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/user-product/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_USER_PRODUCTS', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}

export const fetchProjects = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/project/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_PROJECTS', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}


export const fetchProjectsData = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/project-data/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_PROJECTS_DATA', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}



export const fetchSingleProjectData = (projectId, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/single-project-data/', {projectId: projectId}, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_SINGLE_PROJECT_DATA', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }else if(error.response.status === 404){
            dispatch({type: 'ERROR_MESSAGE_SINGLE_PROJECT', payload: error.response.data})
        }
  }
}

export const fetchCADExcel = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/cad-excel/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_CAD_EXCEL', payload: response.data})
  }catch(error){
      if(error.response.status === 401){
          dispatch({type: 'LOGOUT_USER'});
      }
  }
}


export const fetchSinglePdfData = (projectId, pdfName, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/single-pdf-data/', {projectId: projectId, pdfName: pdfName}, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_SINGLE_PDF_DATA', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }else if(error.response.status === 404){
            dispatch({type: 'ERROR_MESSAGE_SINGLE_PDF', payload: error.response.data})
        }
  }
}

export const fetchSingleProjectDrawing = (projectId, drawingId, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/project-drawing/', {projectId: projectId, drawingId: drawingId}, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_SINGLE_PROJECT_ACTIVE_DRAWING', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}


export const uploadFile = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/upload-file/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({type: 'ERROR_MESSAGE_UPLOAD_FILE', payload: response.data}); 
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }else if(error.response.status === 500){
            dispatch({type: 'ERROR_MESSAGE_UPLOAD_FILE', payload: error.response.data})
        }
  }
}

export const checkPdf = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/check-pdf/', formData, {headers: {Authorization: `JWT ${access_token}`}}); 
    dispatch({ type: 'CHECK_PDF_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}


export const archiveProject = (formData, access_token) => async (dispatch) => {
  try{
    await api.post('/api/archive-project/', formData, {headers: {Authorization: `JWT ${access_token}`}}); 
  }catch(error){
      if(error.response.status === 401){
          dispatch({type: 'LOGOUT_USER'});
      }
  }
}


export const processDrawings = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/process-drawings/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'PROCESS_DRAWINGS', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}

export const updateProcessDrawings = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/update-process-drawings/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'PROCESS_DRAWINGS', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}

export const applyCustomization = (formData, access_token) => async (dispatch) => {
  try{
    await api.post('/api/apply-customization/', formData, {headers: {Authorization: `JWT ${access_token}`}});
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }
  }
}

export const fetchImage = (formData, access_token) => async (dispatch) => {
  try{
   const response = await api.post('/api/image/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_BLOB_IMAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}




export const updateUser = (formData, access_token) => async (dispatch) => {
  try{
    await api.post('/api/update-user/', formData, {headers: {Authorization: `JWT ${access_token}`}});
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const fetchAllProducts = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/all-products/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_ALL_PRODUCTS', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const createUser = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/create-user/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'CREATE_USER_ERROR_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const deleteUser = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/delete-user/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'DELETE_USER_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const createProduct = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/create-product/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'CREATE_PRODUCT_ERROR_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const fetchProduct = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/fetch-product/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'SINGLE_PRODUCT', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const updateProduct = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/edit-product/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'SINGLE_PRODUCT', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}


export const fetchAllProjects = (access_token) => async (dispatch) => {
  try{
    const response = await api.get('/api/all-projects/', {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_ALL_PROJECTS', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const fetchSingleProject = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/fetch-project/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'FETCH_SINGLE_PROJECT_DATA', payload: response.data})
  }catch(error){
        if(error.response.status === 401){
            dispatch({type: 'LOGOUT_USER'});
        }else if(error.response.status === 404){
            dispatch({type: 'ERROR_MESSAGE_SINGLE_PROJECT', payload: error.response.data})
        }
  }
}


export const updateProject = (formData, access_token) => async (dispatch) => {
  try{
    await api.post('/api/update-project/', formData, {headers: {Authorization: `JWT ${access_token}`}});
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const createProject = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/create-project/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'CREATE_PROJECT_ERROR_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}

export const deleteProject = (formData, access_token) => async (dispatch) => {
  try{
    const response = await api.post('/api/delete-project/', formData, {headers: {Authorization: `JWT ${access_token}`}});
    dispatch({ type: 'DELETE_PROJECT_MESSAGE', payload: response.data})
  }catch(error){
    if(error.response.status === 401){
        dispatch({type: 'LOGOUT_USER'});
    }
  }
}


export const logoutUser = () => async (dispatch) => {
  dispatch({type: 'LOGOUT_USER'});
};





// export const updateProjectBasicInfoData = (data) => async (dispatch) => {
//   dispatch({type: "UPDATE_PROJECT_BASIC_INFO_DATA", payload: data})
// }

// export const updateProjectLineTagData = (data) => async (dispatch) => {
//   dispatch({type: "UPDATE_PROJECT_LINE_TAG_DATA", payload: data});
// }

// export const updateProjectEquipmentTagData = (data) => async (dispatch) => {
//   dispatch({type: "UPDATE_PROJECT_EQUIPMENT_TAG_DATA", payload: data});
// }

// export const updateProjectValveTagData = (data) => async (dispatch) => {
//   dispatch({type: "UPDATE_PROJECT_VALVE_TAG_DATA", payload: data});
// }

// export const updateProjectSymbolInfoData = (data) => async (dispatch) => {
//   dispatch({type: 'UPDATE_PROJECT_SYMBOL_INFO_DATA', payload: data})
// }


// export const clearProjectSetup = () => async (dispatch) => {
//   dispatch({type: "CLEAR_PROJECT_SETUP", payload: {}})
// }