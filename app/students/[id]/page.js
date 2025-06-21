// app/students/[id]/page.js
import '../../students/students.css';
import { fetchData } from '../../lib/data';
import { notFound } from 'next/navigation';

export default async function StudentDetailPage({ params }) {
  const students = await fetchData();
  const student = students.find((s) => s.id === parseInt(params.id));

  if (!student) notFound();

  return (
    <div className="page-container">
      <h1>Student Details</h1>
      <ul className="details-list">
        <li><strong>ID:</strong> {student.id}</li>
        <li><strong>Name:</strong> {student.name}</li>
        <li><strong>Email:</strong> {student.email}</li>
        <li><strong>Course:</strong> {student.course}</li>
      </ul>
    </div>
  );
}
