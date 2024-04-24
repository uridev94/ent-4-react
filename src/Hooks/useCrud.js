import axios from "axios";
import { useState } from "react"


const useCrud = (base) => {
    const [apiData, setApiData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [userDeleted, setUserDeleted] = useState();
    //Leer
    const getApi = (path='users') => {
        const url =`${base}${path}/`;
        axios.get(url)
        .then(res => {
            setHasError(false);
            setIsLoading(false);
            setApiData(res.data);})
        .catch(err => {
            setHasError(true);
            setIsLoading(false);
            console.log(err);})
    }
    //crear
    const postApi = (path, data) =>{
        const url = `${base}${path}/`;
        axios.post(url, data)
        .then(res => {
            setHasError(false);
            setApiData([...apiData, res.data]);
            console.log(res.data);})
        .catch(err => {
            setHasError(true);
            console.log(err);})
    }
    //Eliminar
    const deleteApi = (path, user) => {
        const url =  `${base}${path}/${user.id}/`;
        axios.delete(url)
        .then(() => {
            // X user x para mencionar que ha sido eliminado
            setApiData(apiData.filter((userX) => userX.id!==user.id));
            console.log('Deleted succesfully');
        setUserDeleted(user);})
        .catch(err => console.log(err));
    }
    //Actualizar
    const patchApi = (path, data, id) => {
        const url = `${base}${path}/${id}/`;
        axios.patch(url, data)
        .then(res => {
            setApiData(apiData.map((user) => user.id===id ?
        res.data :
    user));
            console.log(res.data)})
        .catch(err => console.log(err));
    }
    return[apiData, getApi, postApi, deleteApi, patchApi, isLoading, hasError, userDeleted, setUserDeleted]
}

export default useCrud;