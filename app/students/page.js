// app/students/page.js
import './students.css';
import Link from 'next/link';
import { fetchData } from '../lib/data';

export default async function StudentsPage() {
  const students = await fetchData();

  return (
    <div className="page-container">
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>
                <Link href={`/students/${student.id}`}>{student.name}</Link>
              </td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
