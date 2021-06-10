import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
const CodeEditor = dynamic(import('../components/codeEditor'), { ssr: false })

export default function Home() {


  return (<>
    <CodeEditor value={"for (var i=0; i < 10; i++) {\n  console.log(i)\n}"} />
  </>
  )
}
