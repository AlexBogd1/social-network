import { UsersFromApiType } from "../../components/Users/Users";

export const updateObjectInArray = (items: Array<UsersFromApiType>, 
    itemId: string, objPropName: 'name'| 'id' | 'photos' | 'followed',
    newObjProps: any ) : Array<UsersFromApiType> => {
          return  items.map(u => {
                if(u[objPropName] === itemId){
                    return {...u, ...newObjProps}
                }
                return u;
            })
}