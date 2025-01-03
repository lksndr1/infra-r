import Header from './components/Header/Header'
import FaqsSection from './components/FaqsSection'
import ValuesSection from './components/ValuesSection'
import HeadingSection from './components/HeadingSection'
import TabsSection from './components/TabsSection'
import ContactUsSection from './components/ContactUsSection'
import WindowSection from './components/WindowSection'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('windowsect')

  return (
    <>
      <Header />
      <main>
        <HeadingSection />

        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <FaqsSection />
            <ValuesSection />
          </>
        )}

        {tab === 'contactus' && <ContactUsSection />}

        {tab === 'windowsect' && <WindowSection />}
      </main>
    </>
  )
}
