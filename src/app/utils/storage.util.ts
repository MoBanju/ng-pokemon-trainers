export class StorageUtil{

    static storageSave<T>(key: string, value: T): void{
        sessionStorage.setItem(key, JSON.stringify(value))
    }
    
    //T type of object
    static storageRead<T>(key: string): T | undefined {
        const storedValue = sessionStorage.getItem(key)
        try{
            if(storedValue){
                return JSON.parse(storedValue) as T
            }
            else{
                return undefined
            }
        }
        catch(error){
            sessionStorage.removeItem(key)
            return undefined
        }
    
    }
}

