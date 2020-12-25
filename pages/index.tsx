// pages/index.jsx
/** @jsx jsx */ /** @jsxRuntime classic */ 
import { jsx } from "theme-ui";

import Link from 'next/link'

export default function Page({content}) {
  return (
    <div sx={{ height: `calc(100vh - 60px)`}}>
      <div sx={{variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%'}}>
        <h1 sx={{fontSize: 8, my: 0}}>{content.title}</h1>
      </div>
    </div> 
  );
}

export function getStaticProps():void {
  // console.log(params);
  // get data from a "CMS"

  return {
    props: {
      content: {
        title: 'This is my really nice app'
      }
    }
  }
}
