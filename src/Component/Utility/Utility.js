const getReadDataFromLocalStorage=()=>{
    const findData=localStorage.getItem('readDataId')
    if(findData){
        return JSON.parse(findData)
    }
    else{
        return []   
    }
    
}

const saveReadDataFromLocalStorage=(id)=>{
    const readData=getReadDataFromLocalStorage()
    const exist=readData.find(d=>d===id)
    if(!exist){
       readData.push(id)
       localStorage.setItem('readDataId',JSON.stringify(readData))
    }
 
}


const getWishListLocalStorageData=()=>{
    const getData=localStorage.getItem('wishListId')
    if(getData){
        return JSON.parse(getData)
    }
    else{
        return []
    }
}
const saveWishListDataLocalStorage=(id)=>{
    const wishListData=getWishListLocalStorageData()
    const exist=wishListData.find(dataId=>dataId===id)
    if(!exist){
        wishListData.push(id)
        localStorage.setItem('wishListId',JSON.stringify(wishListData))
    }

}
export {getReadDataFromLocalStorage,saveReadDataFromLocalStorage,getWishListLocalStorageData,saveWishListDataLocalStorage}