import { Hero } from '../components/sections/Hero'
import { Introduction } from '../components/sections/Introduction'
import { SelectedWork } from '../components/sections/SelectedWork'
import { HowIThink } from '../components/sections/HowIThink'
import { BeyondTechnology } from '../components/sections/BeyondTechnology'
import { ConnectTeaser } from '../components/sections/ConnectTeaser'
import { useDocumentHead } from '../hooks/useDocumentHead'

export default function Home() {
  useDocumentHead({
    title: 'Ethan Chbat · Making complex ideas feel simple.',
    description:
      'Ethan Chbat is a founder and builder working at the intersection of technology, design, and entrepreneurship. Founder of Coursiq.',
  })

  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <HowIThink />
      <BeyondTechnology />
      <ConnectTeaser />
    </>
  )
}
