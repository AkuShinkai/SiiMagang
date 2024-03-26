import React, {useState, useEffect} from 'react';

export function Project() {
    const [content, setContent] = useState(<ProjectList showForm={showForm}/>);
    const [projects, setProjects] = useState([]);

    function showList() {
        setContent(<ProjectList showForm={showForm} projects={projects}/>);
    }

    function showForm(){
        setContent(<ProjectForm showList={showList} addProject={addProject}/>);
    }

    function addProject(project) {
        setProjects([...projects, project]);
        showList();
    }

    function deleteProject(id) {
        const updatedProject = projects.filter((project) => project.id !== id);
        setProjects(updatedProject);
        showList();
    }

    function updateProject(updatedProject) {
        const updatedProjects = projects.map((project) => project.id === updatedProject.id ? updatedProject : project);
        setProjects(updatedProjects);
        showList();
    }

    return (
        <div className='container my-5'>
            {content}
        </div>
    );

}

function ProjectList({ projects, showForm, deleteProject }) {
  return (
    <div className='text-center'>
      <h2 className='text-left mb-3 font-bold text-4xl transition-all duration-500'>Project List</h2>
      <button onClick={() => showForm()} type='button' className='btn btn-primary me-2 text-black hover:text-red-700 transition-all duration-800 bg-orange-500'>Add Project</button>
      <table className='table table-striped' style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd'}}>
            <th style={{ padding: '12px', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Start</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Finish</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Notes</th>
            <th style={{ padding: '12px', textAlign: 'left' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '12px' }}>{project.id}</td>
                <td style={{ padding: '12px' }}>{project.name}</td>
                <td style={{ padding: '12px' }}>{project.start}</td>
                <td style={{ padding: '12px' }}>{project.finish}</td>
                <td style={{ padding: '12px' }}>{project.notes}</td>
                <td style={{ padding: '12px' }}>
                  <button onClick={() => showForm(project)} type='button' className='btn btn-warning me-2'>Edit</button>
                  <button onClick={() => deleteProject(project.id)} type='button' className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ padding: '12px' }}>No projects available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function ProjectForm(props) {
    const {showList, addProject, updateProject} = props;
    const [name, setName] = useState('');
    const [start, setStart] = useState('');
    const [finish, setFinish] = useState('');
    const [notes, setNotes] = useState('');
    const [id, setId] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (props.project) {
            setName(props.project.name);
            setStart(props.project.start);
            setFinish(props.project.finish);
            setNotes(props.project.notes);
            setId(props.project.id);
            setIsUpdate(true);
        }
    }, [props.project]);

    function handleSubmit(e) {
        e.preventDefault();
        const project = {id, name, start, finish, notes};
        addProject(project);
    }

    function handleUpdate(e) {
        e.preventDefault();
        const updatedProject = {id, name, start, finish, notes};
        props.updateProject(updatedProject);
    }
    return (
        <div className='text-center'>
            <h2 className='text-center mb-3 font-semibold text-3xl transition-all duration-500'>{isUpdate ? 'Update Project' : 'Create New Project'}</h2>
            <button onClick={() => props.showList()} type='button' className='btn btn-secondary me-2  text-black hover:text-red-700 transition-all duration-500 bg-orange-500'>Cancel</button>
            <form onSubmit={isUpdate ? handleUpdate : handleSubmit}>
                <input type='hidden' value={id}/>
                <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>Name</label>
                    <input type='text' className='form-control' id='name' value={name} onChange={e => setName(e.target.value)} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='start' className='form-label'>Start</label>
                    <input type='date' className='form-control' id='start' value={start} onChange={e => setStart(e.target.value)} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='finish' className='form-label'>Finish</label>
                    <input type='date' className='form-control' id='finish' value={finish} onChange={e => setFinish(e.target.value)} required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='notes' className='form-label'>Notes</label>
                    <textarea className='form-control' id='notes' value={notes} onChange={e => setNotes(e.target.value)} required/>
                </div>
                <button type='submit' className='btn btn-primary'>{isUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
}

export default Project;

