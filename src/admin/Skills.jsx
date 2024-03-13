import React, { useEffect, useState } from 'react';
import axios from "axios";
import { config } from "dotenv";
import "./components.scss";
import "./Skills.scss";

function Skills() {

    const [name, setName] = useState("");
    const [logoType, setLogoType] = useState("");
    const [logo, setLogo] = useState("");
    const [skills, setSkills] = useState([]);

    const fetchSkills = async () => {
        axios.get(import.meta.env.VITE_GET_SKILLS_URL)
            .then((res) => {
                setSkills(res.data.skills);
            })
    }

    useEffect(() => {
        fetchSkills();
    }, []);

    const handleLogoChange = (event) => {
        var reader = new FileReader();
        reader.onload = (e) => {
            setImages(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
    }

    const onOptionChange = (event) => {
        setLogoType(event.target.value)
    }

    const handleAddSkill = async (event) => {
        event.preventDefault();
        console.log("submit", import.meta.env.VITE_ADD_SKILL_URL);

        const data = {
            "name": name,
            "logo": logo
        };
        axios.post(import.meta.env.VITE_ADD_SKILL_URL, data)
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <div className='container'>
            <h3>Skills</h3>

            <div className='table-div'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">S No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Logo</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            skills.map((skill, index) => {
                                return (
                                    <tr key={`${skill.code}${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{skill.name}</td>
                                        <td><img src={`data:image/svg+xml;utf8,${encodeURIComponent(skill.logo)}`} /></td>
                                        <td><a href="#" >Edit</a></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

            <div className="form-div">

                <h2>Add a new Skill</h2>
                <form onSubmit={handleAddSkill}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    </div>

                    <div className='radio-input-div'>
                        <label htmlFor="svgcode">
                            <input
                                type="radio"
                                name="logo_type"
                                value="svgcode"
                                onChange={onOptionChange}
                            />
                            SVG Code
                        </label>

                        <label htmlFor="svgfile">
                            <input
                                type="radio"
                                name="logo_type"
                                value="svgfile"
                                onChange={onOptionChange}
                            />
                            SVG File
                        </label>
                    </div>

                    {
                        logoType === "svgcode" ?
                            <div>
                                <label htmlFor="code">Code</label>
                                <input type="text" id="code" placeholder='code' value={logo} onChange={(e) => { setLogo(e.target.value) }} />
                            </div>
                            : null
                    }

                    {
                        logoType === "svgfile" ?
                            <div>
                                <label htmlFor="logo">Logo</label>
                                <input type="file" id="logo" placeholder='logo' src={`data:image/svg+xml;utf8,${encodeURIComponent(logo)}`} onChange={handleLogoChange} />
                            </div>
                            : null
                    }

                    <button type='submit'>Add Skill</button>
                </form>
            </div>
            {/* <img src={`data:image/svg+xml;utf8,${encodeURIComponent(logo)}`} /> */}

        </div>
    )
}

export default Skills;