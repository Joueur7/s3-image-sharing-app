import { useState } from 'react'
import axios from 'axios'
import './App.css'
//import main from "./Components/main"
import '../node_modules/bootstrap/dist/css/bootstrap.css'


async function postImage({image, description}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
  const result = await axios.post('/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
} 

function App() {

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description})
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  function myAlert(){
    alert('File Uploaded Successfully')
  }
  return (
    
    <div className="App">
      <div className="alert alert-primary" role="alert">
        Select Your Image to Upload on S3
      </div>

      <form onSubmit={submit} class="d-flex">
        <div className="mb-3">
          <input class="form-control" id="formFile" onChange={fileSelected} type="file" accept="image/*"></input>
          <label for="exampleFormControlInput1" class="form-label">Image Details</label>
          <input className="form-control" id="exampleFormControlInput1" placeholder="Enter Image Description" aria-label="Search" value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
        </div>
        <button type="submit" onClick={myAlert} className="btn btn-primary">Submit</button>
      </form>

     <br></br><br></br>
     
      <div class="container">
          <div class="row">
            <div class="col">
            <form >
              <div className="mb-3">
                <label  class="form-label">Enter Unique Bucket Name</label>
                <input type="text" className="form-control"  aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">Create Bucket</button>
             </form>
            </div>
            <div class="col">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Bucket Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">List Objects</button>
             </form>
            </div>
            <div class="col">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Enter Existing Bucket Name</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-primary">Delete Bucket</button>
             </form>
            </div>
          </div>
        </div>

     <br></br><br></br><br></br><br></br><br></br><br></br><br></br>

    </div>
  
  );
}

export default App;
