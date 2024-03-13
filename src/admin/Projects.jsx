import React, { useEffect, useState } from 'react';
import "./components.scss";
import "./Projects.scss";

function Projects() {

  const [name, setName] = useState("");
  const [isDeployed, setIsDeployed] = useState(true);
  const [deployedLink, setDeployedLink] = useState("");
  const [isOpenSource, setIsOpenSource] = useState(true);
  const [codeLink, setCodeLink] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState([]);

  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  const handleImagesChange = (event) => {

    var imageArray = [];
    for (let i of event.target.files) {

      var reader = new FileReader();
      reader.onload = (e) => {
        imageArray.push(e.target.result);
        setImages(imageArray);
      };
      reader.readAsDataURL(i);
    }
  };

  const handleAddProject = () => {
    console.log("submitted");
  };

  return (
    <div className="container" >

      <div className="form-div">
        <h2>Add a new Project</h2>
        <form onSubmit={handleAddProject}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
          </div>

          <div className="toggle-button-div">
            <input name='isDeployed' className="switch" type="checkbox" checked={isDeployed} onChange={() => setIsDeployed(!isDeployed)} />
            <label htmlFor='isDeployed'>Deployed</label>
          </div>

          {
            isDeployed ?
              <div>
                <label htmlFor="deployedLink">Deployed Link</label>
                <input type="text" id="deployedLink" placeholder='Deployed Link' value={deployedLink} onChange={(e) => { setDeployedLink(e.target.value) }} />
              </div>
              : null
          }

          <div className="toggle-button-div">
            <input name='isOpenSource' className="switch" type="checkbox" checked={isOpenSource} onChange={() => setIsOpenSource(!isOpenSource)} />
            <label htmlFor='isOpenSource'>Open Source</label>
          </div>

          {
            isOpenSource ?
              <div>
                <label htmlFor="codeLink">Code Link</label>
                <input type="text" id="codeLink" placeholder='Code Link' value={codeLink} onChange={(e) => { setCodeLink(e.target.value) }} />
              </div>
              : null
          }

          <div>
            <label htmlFor="description">Project Description</label>
            <textarea type="text" id="description" placeholder='Describe the project' value={description} onChange={(e) => { setDescription(e.target.value) }} />
          </div>

          <div>
            <label htmlFor="images">Images</label>
            <input type="file" multiple id="images" placeholder='Select Images' onChange={handleImagesChange} />
          </div>

          <button type='submit'>Add Project</button>
        </form>
      </div>

      {
        images.map((image, index) => {
          return <img key={index} src={image} />
        })
      }

    </div>
  )
}

export default Projects;