import Head from 'next/head'
import SignUpPage from './components/SignUpPage'
import SignUpPage3 from './components/signUpPage3'
export default function Home() {
  return (
    <div className="font-inter tracking-wide">
      <Head>
        <title>Project 1</title>
        <meta name="description" content="" />
      </Head>
      <SignUpPage></SignUpPage>
     {/* <SignUpPage3></SignUpPage3> */}
    </div>
  )
}
