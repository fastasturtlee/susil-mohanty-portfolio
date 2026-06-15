import { profile } from '../data/content'
import ContactInfo from '../components/sections/ContactInfo'
import ProspectiveStudents from '../components/sections/ProspectiveStudents'

export default function ContactPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>Contact — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Contact Dr. Susil Kumar Mohanty at IIT Jodhpur. Information for prospective PhD students, collaborators, and visitors."
      />
      <ContactInfo profile={profile} />
      <ProspectiveStudents email={profile.email} />
    </main>
  )
}
