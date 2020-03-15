const initialState = {
    categorys: []
}

const category = (state = initialState, action) => {
   switch(action.type){
       case 'GET_CATEGORY_PENDING':
           return{
               ...state
           }
        case 'GET_CATEGORY_REJECTED':
            return{
                ...state
            }
        case 'GET_CATEGORY_FULFILLED':
            return{
                ...state,
                categorys: action.payload.data.result
            }
        
        case 'POST_CATEGORY_PENDING':
            return{
                ...state
            }
         case 'POST_CATEGORY_REJECTED':
             return{
                 ...state
             }
         case 'POST_CATEGORY_FULFILLED':
            const newDataCategory = [...state.categorys, action.payload.data.result];
             return{
                 ...state,
                 categorys: newDataCategory
             }

                 case 'DELETE_CATEGORY_PENDING':
                    return{
                        ...state
                    }
                 case 'DELETE_CATEGORY_REJECTED':
                     return{
                         ...state
                     }
                 case 'DELETE_CATEGORY_FULFILLED':
                    const newDeleteCategory = state.categorys.filter(category => category.id !== action.payload.data.result.id)
                     return{
                         ...state,
                         categorys: newDeleteCategory
                     }
                
                     case 'PATCH_CATEGORY_PENDING':
                        return{
                            ...state
                        }
                     case 'PATCH_CATEGORY_REJECTED':
                         return{
                             ...state
                         }
                     case 'PATCH_CATEGORY_FULFILLED':
                         const newEditCategory = state.categorys.map(category => {
                            if(category.id === action.payload.data.result.id){
                                return action.payload.data.result;
                            }
                             return category;
                        })
                         return{
                             ...state,
                             categorys: newEditCategory
                         }
        default:
            return state;
        }

}

export default category