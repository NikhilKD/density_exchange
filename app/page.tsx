import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import Fact from './components/Fact'
import SliderHome from './components/SliderHome'

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <Fact />
      <SliderHome />
    </>
  )
}
