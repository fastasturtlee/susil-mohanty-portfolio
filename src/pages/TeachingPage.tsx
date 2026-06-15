import { courses } from '../data/content'
import TeachingList from '../components/sections/TeachingList'

export default function TeachingPage() {
  return (
    <main id="main-content" className="mx-auto max-w-[1100px] px-4 py-16">
      <title>Teaching — Dr. Susil Kumar Mohanty</title>
      <meta
        name="description"
        content="Courses taught by Dr. Susil Kumar Mohanty at IIT Jodhpur: Introduction to Blockchain and Cybersecurity."
      />
      <TeachingList courses={courses} />
    </main>
  )
}
