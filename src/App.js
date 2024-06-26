
import { useRef,useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile ] = useState('');
  const [result,setResult] = useState('');

  const fileInputRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file",file);

        let response=  await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  },[file])

  console.log(file);

  const logo = 'https://img.freepik.com/premium-vector/file-sharing-flat-icon-color-simple-element-from-work-from-home-collection-creative-file-sharing-icon-web-design-templates-infographics-more_676904-2374.jpg?w=2000'

  return (
    <div className='container' >
      <div className='image'>
        <img src={logo} alt="" />
      </div>
      <div className='wrapper' >
        <h1>File Sharing 📂</h1>
        <h2>Upload and share the download link.</h2>
        <p>Please note: File uploads may take up to 1 minute for link generation.</p>

        <button onClick={() => onUploadClick()} >Upload</button>
        <input type="file"
          ref={fileInputRef}
          style={{ display:'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank">{result}</a>


      </div>
    </div>
  );
}

export default App;


