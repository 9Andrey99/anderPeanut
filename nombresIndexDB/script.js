"use strict";

const IDBRequest = indexedDB.open("data",1);

IDBRequest.addEventListener("upgradeneeded",()=>{
    const db = IDBRequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
})

IDBRequest.addEventListener("success",()=> {
    leerObj();
})

const botonAdd = () => {
    let nombre = document.getElementById("nombre").value;
    if (nombre.length > 0) {
        if (document.querySelector(".posible") != undefined){
            if (confirm("Hay elementos sin guardar, ¿Quieres continuar?")) {
                addObj({nombre});
                leerObj();
            }
        } else {
            addObj({nombre});
            document.getElementById("nombre").value = ""
            leerObj();
        }
    }
}

document.getElementById("add").addEventListener("click",botonAdd)

document.addEventListener("keyup",e=>{
    if (e.code == "Enter") {
        botonAdd()
    }
})

const getIDBData = mode => {
    const db = IDBRequest.result;
    const trans = db.transaction("nombres",mode);
    const objStore = trans.objectStore("nombres");
    return [objStore,trans];
}

const addObj = obj => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].add(obj);
}

const leerObj = () => {
    const IDBData = getIDBData("readonly");
    const cursor = IDBData[0].openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if (cursor.result) {
            const HTMLCode = nombresHTML(cursor.result.key,cursor.result.value);
            fragment.appendChild(HTMLCode);
            cursor.result.continue();
        } else document.querySelector(".nombres").appendChild(fragment);
    })
}

const modifyObj = (key,obj) => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].put(obj,key);
}

const eliminarObj = key => {
    const IDBData = getIDBData("readwrite");
    IDBData[0].delete(key);
}

// ---------------------------------

const nombresHTML = (id, name) => {
    const container = document.createElement("DIV");
    const h2 = document.createElement("h2");
    const options = document.createElement("DIV");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Eliminar";

    h2.textContent = name.nombre;
    h2.setAttribute("contenteditable","true");
    h2.setAttribute("spellcheck","false");

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible");
    })

    saveButton.addEventListener("click",()=>{
        if (saveButton.className == "posible") {
            modifyObj(id, {nombre: h2.textContent})
            saveButton.classList.replace("posible","imposible")
        }
    })

    deleteButton.addEventListener("click",()=>{
        eliminarObj(id);
        document.querySelector(".nombres").removeChild(container);
    })

    return container;
}