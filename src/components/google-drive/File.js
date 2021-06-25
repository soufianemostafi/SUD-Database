import { faFile, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { database } from "./../../firebase"

export default function File({ file }) {
  
  function deleteFile() {
    const res = database.files.doc(file.id).delete();
  }

  return (
    <div>
      <a
        href={file.url}
        target="_blank"
        className="btn btn-outline-dark text-truncate w-100"
      >
        <FontAwesomeIcon icon={faFile} className="mr-2" />
        {file.name}
      </a>
      <button onClick={deleteFile}> <FontAwesomeIcon icon={faTrash} /> </button>
    </div>
  )
}
