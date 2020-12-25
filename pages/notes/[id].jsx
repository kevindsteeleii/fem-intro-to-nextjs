// pages/notes/[id].jsx
import React from 'react'
import Link from 'next/link'

const NotePage = ({note}) => {

  return (
    <div>
      <h1>Note: {note.title} </h1>
      <p>Data Id is: {note.id}</p>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </div>
  )
}

export default NotePage;


export async function getServerSideProps({ params, req, res }) {
  // console.log(req);

  const response = await fetch(`http://localhost:3000/api/note/${params.id}`);

  if(!response.ok) {
    res.writeHead(302, { location: '/notes' });
    res.end();
    return { props: {}};
  }

  const {data} = await response.json();

  if(data) {
    return {
      props: {note: data}
    }
  }
}