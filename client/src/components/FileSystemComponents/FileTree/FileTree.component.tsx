import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FileTree = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/file-system');
      setFolders(response.data);
    })();
  }, []);

  return (
    <div>
      <ul>
        {folders.map(folder => <li key={folder}>{folder}</li>)}
      </ul>
    </div>
  )
}

export default FileTree;
