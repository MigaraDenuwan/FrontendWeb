import Dashbord from "@/Components/DashBord/Dashbord";
import Slideshow from "@/Components/SlideShow/slideShow";
import Title from "@/Components/Title/Title";
import styles from '@/app/page.module.css';
import FormComponent from "@/Components/FormComponent/FormComponent";
import ContactUs from "@/Components/Contact/ContactUs";
import Footer from "@/Components/Footer/footerPage";
import BodyPage from "@/Components/BodyPage/BodyPage";

export default function Home() {
  return (
    <>
      <Dashbord />
      <div className={styles.titleContainer}>
        <Title />
      </div>
      <div className={styles.phone}>
        <Slideshow />
      </div>
      <div className={styles.form}>
        <FormComponent />
      </div>
      <div className={styles.contact}>
        <ContactUs />
      </div>
      <div className={styles.subPlans}>
        <BodyPage />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
      <main></main>
      <div style={{ height: '300vh' }}></div>
    </>
  );
}
