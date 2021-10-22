import Header from '../../sections/Header';
import PracticeCarousel from '../../sections/PracticeCarousel';
import ExpertsView from '../../sections/ExpertsView';
import Comfort from '../../sections/Comfort';
import Certificate from '../../sections/Certificate';
import Vebinar from '../../sections/Vebinar';
import OurTeachers from '../../sections/OurTeachers';
import Courses from '../../sections/Courses';
import Layout from "../../Layout.jsx"

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <PracticeCarousel />
      <ExpertsView />
      <Comfort />
      <Certificate />
      <Courses />
      <Vebinar />
      <OurTeachers />
    </Layout>
  )
}

export default HomePage
