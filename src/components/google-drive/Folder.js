import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFolder, faTrash } from "@fortawesome/free-solid-svg-icons"
import {database} from "./../../firebase"

export default function Folder({ folder }) {
  function deleteFolder(){
    const res = database.folders.doc(folder.id).delete();
  }
  return (
    <div>
    <Button
      to={{
        pathname: `/folder/${folder.id}`,
        state: { folder: folder },
      }}
      variant="outline-dark"
      className="text-truncate w-100"
      as={Link}
    >
      <FontAwesomeIcon icon={faFolder} className="mr-2" />
      {folder.name}
    </Button>
    <button onClick={deleteFolder}> <FontAwesomeIcon icon={faTrash} /> </button>
    </div>
  )
}
