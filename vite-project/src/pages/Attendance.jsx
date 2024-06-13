import React, { useState, useEffect } from 'react';
import axiosClient from '../axios-client';

function Attendance() {
    const TABLE_HEAD = ["No.", "Name", "Institution", "Major", "Time", "Detail", "Status"];
    const TABLE_COLUMN_WIDTHS = ["50px", "100px", "100px", "100px", "100px", "100px", "100px"];

    const [attendanceData, setAttendanceData] = useState({
        detail: 'hadir', // Default value
        reason: ''
    });
    const [attendanceList, setAttendanceList] = useState([]);
    const [notification, setNotification] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setAttendanceData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            // Lakukan pemeriksaan di sini
            const today = new Date().toISOString().split('T')[0]; // Ambil tanggal hari ini
            const existingAttendance = attendanceList.find(attendance => attendance.datetime.split(' ')[0] === today);
            if (existingAttendance) {
                console.log('Anda sudah mengirimkan kehadiran hari ini');
                setNotification("You have already submitted attendance for today")
                return; // Jangan lanjutkan pengiriman jika sudah ada kehadiran hari ini
            }

            // Lanjutkan dengan pengiriman data
            const response = await axiosClient.post('/attendance', attendanceData);
            if (response.status === 200) {
                console.log('Attendance submitted successfully');
                fetchAttendanceList(); // Fetch the updated attendance list
                setAttendanceData({
                  detail: 'hadir', // Reset detail to default value
                  reason: '' // Reset reason to empty string
                });
                setNotification('You have successfully submitted attendance for today.');
              } else {
                console.log('Failed to submit attendance');
              }

        } catch (error) {
            console.error('Error submitting attendance:', error);
        }
    };



    const fetchAttendanceList = async () => {
        try {
            const response = await axiosClient.get('/attendance');
            setAttendanceList(response.data);
        } catch (error) {
            console.error('Error fetching attendance list:', error);
        }
    };

    useEffect(() => {
        fetchAttendanceList();
    }, []);

    return (
        <div className='w-full flex flex-col shadow-lg mb-6 mt-4 bg-white'>
            <div className="bg-pink-500 block bg-transparent m-4 p-4">
                <div className="flex flex-col">
                    {notification && (
                        <div className="m-4 p-4 bg-green-100 text-green-700 rounded">{notification}</div>
                    )}

                    <div>
                        <label htmlFor="detail" className="mb-2 text-sm font-medium">Detail</label>
                        <select id="detail" value={attendanceData.detail} onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-2 ms-5 md:w-1/3">
                            <option value="hadir">Hadir</option>
                            <option value="izin">Izin</option>
                            <option value="alfa">Alfa</option>
                            <option value="sakit">Sakit</option>
                        </select>
                    </div>

                    {attendanceData.detail !== 'hadir' && (
                        <div>
                            <label htmlFor="reason" className="mb-2 text-sm font-medium">Reason</label>
                            <input type="text" id="reason" value={attendanceData.reason} onChange={handleChange} className="border border-gray-300 rounded-md p-2 mb-2 ms-5 md:w-1/3" placeholder="Alasan" />
                        </div>
                    )}
                </div>

                <div className="flex justify-center ">
                    <button
                        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded capitalize"
                        type='submit'
                        onClick={handleSubmit}
                    >
                        presence
                    </button>
                </div>

                <div className='flex flex-wrap'>
                    <h3 className='font-semibold text-lg p-4 m-auto'></h3>
                </div>

                <table className='w-full'>
                    <thead>
                        <tr className='border border-solid border-l-0 border-r-0 capitalize'>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className='text-md px-6 py-3'
                                    style={{ width: TABLE_COLUMN_WIDTHS[index] }}
                                >
                                    {head}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {attendanceList.map((attendance, index) => (
                            <tr key={attendance.id}>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[0] }}>{index + 1}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[1] }}>{attendance.user_profile.name}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[2] }}>{attendance.user_profile.institution}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[3] }}>{attendance.user_profile.major}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[4] }}>{attendance.datetime}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[5] }}>{attendance.detail}</td>
                                <td style={{ width: TABLE_COLUMN_WIDTHS[5] }}>{attendance.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Attendance;
