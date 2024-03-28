import React, {useState} from 'react'

const Presence = () => {
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const newData = {
            name: formData.get('nama'),
            school: formData.get('asal'),
            major: formData.get('jurusan'),
        };
        setData([...data, newData]);

        form.reset();
    };

  return(
    <div className='bg-success p-2 text-dark bg-opacity-10'>
        <h1 className='p-4 mb-2 text-center text-4x1 font-bold'>DAFTAR HADIR</h1>
        <div className='container'>
          <form action='' method='post' name='form_absen' onSubmit={handleSubmit}>
            <div className='col-md-6 offset-md-3'>
              <div className='mb-3'>
                <label className='form-label'>Nama</label>
                <input type='text' className='form-control' name='nama' placeholder='Masukan Nama'></input>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Asal Sekolah</label>
                <input type='text' className='form-control' name='asal' placeholder='Masukan Asal Sekolah'></input>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Jurusan</label>
                <input type='text' className='form-control' name='jurusan' placeholder='Masukan Jurusan'></input>
              </div>
            </div>
            <div className='text-center'>
              <button type='reset' className='btn btn-danger' name='Reset'>Reset</button>
              <button type='submit' className='btn btn-primary' name='Submit'>Submit</button>
            </div>
          </form>

          <table className='table table-striped' style={{ borderCollapse: 'collapse', width: '100%' }}>
           <tr style={{ borderBottom: '2px solid #ddd'}}>
              <th>Nama</th>
              <th>Asal Sekolah</th>
              <th>Jurusan</th>
            </tr>
          </table>

        </div>
       </div>
  )
}


export default Presence
