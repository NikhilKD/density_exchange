import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Fact from './components/Fact'
import SliderHome from './components/SliderHome'
import About from './components/About'
import Fact2 from './components/Fact2'
import Steps from './components/Steps'
import Test from './components/Test'

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Fact />
      <SliderHome />
      <About />
      <Fact2 />
      <Steps />
      <Test />
    </>
  )
}
